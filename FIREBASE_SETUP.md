# Stars Maid Firebase Setup

Use this when setting up Firebase Hosting, Functions, Authentication, and Firestore.

## What to Copy From Firebase

When Firebase shows code like this:

```js
const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "..."
};
```

Do not copy the whole Firebase tutorial into the app. The deployed site loads Firebase config from Firebase Hosting's reserved `/__/firebase/init.js` script so the public web key does not need to live in the repo.

For local development only, create an ignored `firebase-config.local.js` file next to `firebase-config.js` and put your config there:

```js
window.starsMaidFirebaseConfig = {
  apiKey: "YOUR_FIREBASE_WEB_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT",
  storageBucket: "YOUR_PROJECT.firebasestorage.app",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

Keep `firebase-config.local.js` out of Git. It is already listed in `.gitignore`.

## Firebase Console Setup

1. Go to https://console.firebase.google.com.
2. Create a project or open your existing Stars Maid project.
3. Add a Web app.
4. Deploy through Firebase Hosting so `/__/firebase/init.js` provides the Web app config in production.
5. Enable Firestore Database.
6. Enable Authentication, then turn on the Email/Password and Google sign-in providers.
7. In Firestore Rules, deploy `firestore.rules`.

## Local Project Setup

Install Firebase CLI if you do not already have it:

```powershell
npm install -g firebase-tools
```

Log in:

```powershell
firebase login
```

Connect this folder to your Firebase project:

```powershell
firebase use --add
```

Choose your Firebase project, then pick the alias:

```text
default
```

Install backend dependencies:

```powershell
cd functions
npm install
cd ..
```

Test locally:

```powershell
npm.cmd run check
firebase emulators:start --only hosting,functions,firestore
```

Deploy frontend, backend, and rules:

```powershell
firebase deploy --only hosting,functions,firestore:rules
```

## What This Project Uses

- Frontend: Firebase Hosting serves `index.html`, `styles.css`, `app.js`, assets, manifest, and service worker.
- Auth: Firebase Authentication handles sign in and account creation from the login screen.
- Backend: Firebase Cloud Functions handle bookings, profiles, site settings, admin dashboard data, role approvals, and employee invites.
- Public API routes: `/api/bookings`, `/api/profiles`, `/api/site-settings`, and `/api/me`.
- Admin API routes: `/api/admin/dashboard`, `/api/admin/site-settings`, `/api/admin/employee-invites`, and `/api/admin/approve-role`.
- Database: Firestore collections `bookings`, `profiles`, `users`, and `siteSettings`.

Booking submissions now post JSON to `/api/bookings`, and Firebase Hosting rewrites that route to the Cloud Function.
Profile updates post to `/api/profiles` with the signed-in Firebase Auth token. Role approvals, review visibility changes, and employee invites use admin-only Cloud Functions backed by verified Firebase ID tokens and Firestore role checks.

## GitHub Deployment

GitHub Actions deploys this repo to Firebase on pushes to `main`.

Use these startup steps:

1. In Firebase or Google Cloud, create a service account key with permission to deploy Firebase Hosting, Cloud Functions, and Firestore rules.
2. Copy the full JSON key.
3. In GitHub, open this repo, then go to Settings > Secrets and variables > Actions.
4. Create a repository secret named:

```text
FIREBASE_SERVICE_ACCOUNT_STARSMAID
```

5. Paste the full service account JSON as the secret value.
6. Push to `main`, or open the Deploy to Firebase workflow in GitHub Actions and run it manually.

The workflow installs dependencies, checks JavaScript syntax, authenticates with the service account, and deploys Hosting, Functions, and Firestore rules to the `starsmaid` Firebase project.
