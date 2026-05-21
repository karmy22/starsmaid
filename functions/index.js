const crypto = require("crypto");
const { onRequest } = require("firebase-functions/v2/https");
const { initializeApp } = require("firebase-admin/app");
const { getAuth } = require("firebase-admin/auth");
const { getFirestore, FieldValue } = require("firebase-admin/firestore");

initializeApp();

const db = getFirestore();
const auth = getAuth();

const allowedOrigins = new Set([
  "http://localhost:4173",
  "http://127.0.0.1:4173",
  "http://localhost:4174",
  "http://127.0.0.1:4174",
  "http://localhost:5000",
  "http://127.0.0.1:5000",
  "https://starsmaidservices.web.app",
  "https://starsmaidservices.firebaseapp.com",
  "https://starsmaid.web.app",
  "https://starsmaid.firebaseapp.com",
  "https://star-maids-1.web.app",
  "https://star-maids-1.firebaseapp.com",
]);

function setCors(request, response) {
  const origin = request.get("origin");
  if (origin && allowedOrigins.has(origin)) {
    response.set("Access-Control-Allow-Origin", origin);
  }
  response.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  response.set("Access-Control-Allow-Headers", "Authorization, Content-Type");
}

function handleOptions(request, response) {
  setCors(request, response);
  if (request.method === "OPTIONS") {
    response.status(204).send("");
    return true;
  }
  return false;
}

function cleanText(value, maxLength = 500) {
  if (typeof value !== "string") {
    return "";
  }
  return value.trim().slice(0, maxLength);
}

function cleanNumber(value) {
  const number = Number(value);
  return Number.isFinite(number) ? number : null;
}

async function getVerifiedUser(request) {
  const header = request.get("authorization") || "";
  const match = header.match(/^Bearer (.+)$/);

  if (!match) {
    return null;
  }

  return auth.verifyIdToken(match[1]);
}

async function getProfile(uid) {
  const doc = await db.collection("profiles").doc(uid).get();
  if (!doc.exists) {
    return null;
  }
  return { uid, ...doc.data() };
}

async function requireUser(request, response) {
  try {
    const user = await getVerifiedUser(request);
    if (!user) {
      response.status(401).json({ error: "Authentication required" });
      return null;
    }
    return user;
  } catch (error) {
    response.status(401).json({ error: "Invalid authentication token" });
    return null;
  }
}

async function requireAdmin(request, response) {
  const user = await requireUser(request, response);
  if (!user) {
    return null;
  }

  const profile = await getProfile(user.uid);
  if (profile?.role !== "admin" || profile?.roleStatus !== "active") {
    response.status(403).json({ error: "Approved admin access required" });
    return null;
  }

  return { user, profile };
}

function normalizeBooking(body) {
  return {
    firstName: cleanText(body.firstName, 80),
    lastName: cleanText(body.lastName, 80),
    email: cleanText(body.email, 160).toLowerCase(),
    phone: cleanText(body.phone, 40),
    zip: cleanText(body.zip, 5),
    smsConsent: Boolean(body.smsConsent),
    serviceType: cleanText(body.serviceType, 80),
    propertyType: cleanText(body.propertyType, 80),
    people: cleanNumber(body.people),
    pets: cleanText(body.pets, 80),
    rooms: cleanNumber(body.rooms),
    beds: cleanNumber(body.beds),
    baths: cleanNumber(body.baths),
    basement: cleanText(body.basement, 80),
    yard: cleanText(body.yard, 80),
    demo: cleanText(body.demo, 120),
    squareFeet: cleanNumber(body.squareFeet),
    projectNotes: cleanText(body.projectNotes, 1500),
    consultDate: cleanText(body.consultDate, 80),
    consultWindow: cleanText(body.consultWindow, 80),
    consultType: cleanText(body.consultType, 120),
    paymentAcknowledge: Boolean(body.paymentAcknowledge),
    price: cleanText(body.price, 80) || "Pending quote",
    status: "Pending account details",
    source: "firebase-hosting",
    createdAt: FieldValue.serverTimestamp(),
  };
}

function publicProfile(profile) {
  if (!profile) {
    return null;
  }
  return {
    uid: profile.uid,
    email: profile.email || "",
    name: profile.name || "",
    phone: profile.phone || "",
    role: profile.role || "customer",
    requestedRole: profile.requestedRole || profile.role || "customer",
    roleStatus: profile.roleStatus || "active",
    pendingBookingId: profile.pendingBookingId || "",
  };
}

async function getSiteSettingsDoc() {
  const docRef = db.collection("siteSettings").doc("public");
  const doc = await docRef.get();
  if (!doc.exists) {
    const defaults = { showReviews: false, updatedAt: FieldValue.serverTimestamp() };
    await docRef.set(defaults, { merge: true });
    return { showReviews: false };
  }
  return { showReviews: Boolean(doc.data().showReviews) };
}

exports.getSiteSettings = onRequest({ region: "us-central1" }, async (request, response) => {
  if (handleOptions(request, response)) return;
  setCors(request, response);

  if (request.method !== "GET") {
    response.status(405).json({ error: "Method not allowed" });
    return;
  }

  const settings = await getSiteSettingsDoc();
  response.status(200).json({ settings });
});

exports.getMe = onRequest({ region: "us-central1" }, async (request, response) => {
  if (handleOptions(request, response)) return;
  setCors(request, response);

  if (request.method !== "GET") {
    response.status(405).json({ error: "Method not allowed" });
    return;
  }

  const user = await requireUser(request, response);
  if (!user) return;

  let profile = await getProfile(user.uid);
  if (profile?.roleStatus === "invited") {
    await db.collection("profiles").doc(user.uid).set({
      roleStatus: "active",
      activatedAt: FieldValue.serverTimestamp(),
      updatedAt: FieldValue.serverTimestamp(),
    }, { merge: true });
    await db.collection("users").doc(user.uid).set({
      roleStatus: "active",
      updatedAt: FieldValue.serverTimestamp(),
    }, { merge: true });
    profile = { ...profile, roleStatus: "active" };
  }
  response.status(200).json({ profile: publicProfile(profile) || { uid: user.uid, email: user.email, role: "customer", roleStatus: "active" } });
});

exports.createBooking = onRequest({ region: "us-central1" }, async (request, response) => {
  if (handleOptions(request, response)) return;
  setCors(request, response);

  if (request.method !== "POST") {
    response.status(405).json({ error: "Method not allowed" });
    return;
  }

  const booking = normalizeBooking(request.body || {});

  if (!booking.firstName || !booking.lastName || !booking.email || !booking.phone || !booking.zip) {
    response.status(400).json({ error: "Missing required booking fields" });
    return;
  }

  try {
    const doc = await db.collection("bookings").add(booking);
    response.status(201).json({ id: doc.id, status: booking.status });
  } catch (error) {
    response.status(500).json({ error: "Booking could not be saved" });
  }
});

exports.saveProfile = onRequest({ region: "us-central1" }, async (request, response) => {
  if (handleOptions(request, response)) return;
  setCors(request, response);

  if (request.method !== "POST") {
    response.status(405).json({ error: "Method not allowed" });
    return;
  }

  const user = await requireUser(request, response);
  if (!user) return;

  const existing = await getProfile(user.uid);
  const requestedRole = cleanText(request.body.requestedRole, 40) || existing?.requestedRole || "customer";
  const currentRole = existing?.role || "customer";
  const currentStatus = existing?.roleStatus || "active";
  const nextRole = currentRole === "admin" || currentRole === "employee" ? currentRole : "customer";
  const nextStatus = nextRole === "customer" && requestedRole !== "customer" ? "pending" : currentStatus;

  const profile = {
    email: cleanText(request.body.email || user.email || "", 160).toLowerCase(),
    phone: cleanText(request.body.phone, 40),
    address: cleanText(request.body.address, 180),
    city: cleanText(request.body.city, 100),
    state: cleanText(request.body.state, 2).toUpperCase(),
    zip: cleanText(request.body.zip, 10),
    role: nextRole,
    requestedRole,
    roleStatus: nextStatus,
    pendingBookingId: cleanText(request.body.pendingBookingId, 120),
    updatedAt: FieldValue.serverTimestamp(),
    createdAt: existing?.createdAt || FieldValue.serverTimestamp(),
  };

  try {
    await db.collection("profiles").doc(user.uid).set(profile, { merge: true });
    await db.collection("users").doc(user.uid).set({
      email: profile.email,
      role: profile.role,
      requestedRole: profile.requestedRole,
      roleStatus: profile.roleStatus,
      updatedAt: FieldValue.serverTimestamp(),
    }, { merge: true });
    response.status(200).json({ id: user.uid, status: "saved", profile: publicProfile({ uid: user.uid, ...profile }) });
  } catch (error) {
    response.status(500).json({ error: "Profile could not be saved" });
  }
});

exports.getAdminDashboard = onRequest({ region: "us-central1" }, async (request, response) => {
  if (handleOptions(request, response)) return;
  setCors(request, response);

  if (request.method !== "GET") {
    response.status(405).json({ error: "Method not allowed" });
    return;
  }

  const admin = await requireAdmin(request, response);
  if (!admin) return;

  const [profilesSnap, bookingsSnap, settings] = await Promise.all([
    db.collection("profiles").limit(50).get(),
    db.collection("bookings").limit(20).get(),
    getSiteSettingsDoc(),
  ]);

  const profiles = profilesSnap.docs.map((doc) => publicProfile({ uid: doc.id, ...doc.data() }));
  const accessRequests = profiles.filter((profile) => profile.roleStatus === "pending" && profile.requestedRole !== "customer");
  const employees = profiles.filter((profile) => ["employee", "admin"].includes(profile.role));
  const bookings = bookingsSnap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

  response.status(200).json({ settings, accessRequests, employees, bookings });
});

exports.updateSiteSettings = onRequest({ region: "us-central1" }, async (request, response) => {
  if (handleOptions(request, response)) return;
  setCors(request, response);

  if (request.method !== "POST") {
    response.status(405).json({ error: "Method not allowed" });
    return;
  }

  const admin = await requireAdmin(request, response);
  if (!admin) return;

  const settings = {
    showReviews: Boolean(request.body.showReviews),
    updatedAt: FieldValue.serverTimestamp(),
    updatedBy: admin.user.uid,
  };

  await db.collection("siteSettings").doc("public").set(settings, { merge: true });
  response.status(200).json({ settings: { showReviews: settings.showReviews } });
});

exports.approveRole = onRequest({ region: "us-central1" }, async (request, response) => {
  if (handleOptions(request, response)) return;
  setCors(request, response);

  if (request.method !== "POST") {
    response.status(405).json({ error: "Method not allowed" });
    return;
  }

  const admin = await requireAdmin(request, response);
  if (!admin) return;

  const uid = cleanText(request.body.uid, 160);
  const role = cleanText(request.body.role, 40);
  if (!uid || !["employee", "admin"].includes(role)) {
    response.status(400).json({ error: "Valid uid and role are required" });
    return;
  }

  await db.collection("profiles").doc(uid).set({
    role,
    requestedRole: role,
    roleStatus: "active",
    approvedBy: admin.user.uid,
    approvedAt: FieldValue.serverTimestamp(),
    updatedAt: FieldValue.serverTimestamp(),
  }, { merge: true });
  await db.collection("users").doc(uid).set({
    role,
    roleStatus: "active",
    updatedAt: FieldValue.serverTimestamp(),
  }, { merge: true });

  response.status(200).json({ status: "approved", uid, role });
});

exports.createEmployeeInvite = onRequest({ region: "us-central1" }, async (request, response) => {
  if (handleOptions(request, response)) return;
  setCors(request, response);

  if (request.method !== "POST") {
    response.status(405).json({ error: "Method not allowed" });
    return;
  }

  const admin = await requireAdmin(request, response);
  if (!admin) return;

  const email = cleanText(request.body.email, 160).toLowerCase();
  const name = cleanText(request.body.name, 120);
  const phone = cleanText(request.body.phone, 40);
  const role = cleanText(request.body.role, 40) === "admin" ? "admin" : "employee";

  if (!email || !email.includes("@")) {
    response.status(400).json({ error: "Valid employee email is required" });
    return;
  }

  let userRecord;
  try {
    userRecord = await auth.getUserByEmail(email);
  } catch (error) {
    const temporaryPassword = crypto.randomBytes(18).toString("base64url");
    userRecord = await auth.createUser({
      email,
      displayName: name || undefined,
      emailVerified: false,
      password: temporaryPassword,
    });
  }

  await db.collection("profiles").doc(userRecord.uid).set({
    email,
    name,
    phone,
    role,
    requestedRole: role,
    roleStatus: "invited",
    invitedBy: admin.user.uid,
    invitedAt: FieldValue.serverTimestamp(),
    updatedAt: FieldValue.serverTimestamp(),
  }, { merge: true });
  await db.collection("users").doc(userRecord.uid).set({
    email,
    role,
    roleStatus: "invited",
    updatedAt: FieldValue.serverTimestamp(),
  }, { merge: true });

  const inviteLink = await auth.generatePasswordResetLink(email);
  response.status(201).json({ status: "invited", uid: userRecord.uid, email, role, inviteLink });
});
