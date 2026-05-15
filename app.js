const planData = {
  standard: {
    name: "Standard Clean",
    base: 129,
    pros: 2,
    hours: "2-3 hrs",
  },
  deep: {
    name: "Deep Clean",
    base: 229,
    pros: 2,
    hours: "3-5 hrs",
  },
  move: {
    name: "Move-Out Clean",
    base: 249,
    pros: 3,
    hours: "4-6 hrs",
  },
  consultation: {
    name: "Consultation Plan & Add-Ons",
    base: 0,
    pros: 1,
    hours: "custom quote",
  },
};

const sizeAdjustments = {
  small: 0,
  medium: 0,
  large: 75,
  xl: 145,
};

const typeAdjustments = {
  apartment: -10,
  house: 0,
  townhome: 20,
};

const serviceSelect = document.querySelector("#service-level");
const sizeSelect = document.querySelector("#home-size");
const typeSelect = document.querySelector("#home-type");
const dateInput = document.querySelector("#clean-date");
const timeSelect = document.querySelector("#clean-time");
const priceEl = document.querySelector("#estimate-price");
const noteEl = document.querySelector("#estimate-note");
const planButtons = document.querySelectorAll(".plan-card");
const quoteOptions = document.querySelectorAll(".quote-option");
const stepTabs = document.querySelectorAll(".step-tab");
const stepPanels = document.querySelectorAll(".step-panel");
const nextButton = document.querySelector("#estimate-next");
const backButton = document.querySelector("#estimate-back");
const loginToBookButton = document.querySelector("#estimate-login");
const bookingForm = document.querySelector("#booking-form");
const dialog = document.querySelector("#confirmation-dialog");
const dialogClose = document.querySelector(".dialog-close");
const continueButton = document.querySelector("#continue-button");
const confirmationCopy = document.querySelector("#confirmation-copy");
const consultationForm = document.querySelector("#consultation-form");
const frequencySelect = document.querySelector("#clean-frequency");
const contactMethodSelect = document.querySelector("#contact-method");
const consultationMessage = document.querySelector("#consultation-message");
const homeScreen = document.querySelector("#top");
const mobileBookBar = document.querySelector(".mobile-book-bar");
const appScreens = document.querySelectorAll("[data-app-screen]");
const loginForm = document.querySelector("#login-form");
const loginRoleSelect = document.querySelector("#login-role");
const customerNextBooking = document.querySelector("#customer-next-booking");
const bookingSummaryTitle = document.querySelector("#booking-summary-title");
const bookingSummaryCopy = document.querySelector("#booking-summary-copy");
const bookingWindowSelect = document.querySelector("#booking-window");
const bookingDateButtons = document.querySelectorAll(".booking-calendar button");
const bookingConsultDateInput = document.querySelector("#booking-consult-date");
const bookingIntakeForm = document.querySelector("#booking-intake-form");
const bookingSubmitStatus = document.querySelector("#booking-submit-status");
const bookingZipInput = document.querySelector("#booking-zip");
const zipValidationMessage = document.querySelector("#zip-validation-message");
const bookingWizardPanels = document.querySelectorAll("[data-wizard-panel]");
const bookingWizardIndicators = document.querySelectorAll("[data-wizard-indicator]");
const bookingWizardBack = document.querySelector("#booking-wizard-back");
const bookingWizardNext = document.querySelector("#booking-wizard-next");
const serviceTypeInputs = document.querySelectorAll('input[name="serviceType"]');
const paymentTitle = document.querySelector("#booking-payment-title");
const paymentCopy = document.querySelector("#booking-payment-copy");
const bookingConfirmationPanel = document.querySelector("#booking-confirmation-panel");
const confirmationService = document.querySelector("#confirmation-service");
const confirmationSchedule = document.querySelector("#confirmation-schedule");
const confirmationZip = document.querySelector("#confirmation-zip");
const confirmationPayment = document.querySelector("#confirmation-payment");
const confirmationAccountLink = document.querySelector("#confirmation-account-link");
const bookingStartOver = document.querySelector("#booking-start-over");
const saleToggle = document.querySelector("#sale-toggle");
const saleState = document.querySelector("#sale-state");
const authSwitchButtons = document.querySelectorAll(".auth-switch button");
const accountGateLinks = document.querySelectorAll(".account-gate-link");
const accountTabButtons = document.querySelectorAll(".sidebar-tab-btn");
const accountTabPanels = document.querySelectorAll(".account-tab");
const accountOverviewTitle = document.querySelector("#account-overview-title");
const accountOverviewCopy = document.querySelector("#account-overview-copy");
const accountNextStep = document.querySelector("#account-next-step");
const primaryAddressTitle = document.querySelector("#primary-address-title");
const primaryAddressCopy = document.querySelector("#primary-address-copy");
const nextBookingDetails = document.querySelector("#next-booking-details");
const bookingStatusInfo = document.querySelector("#booking-status-info");
const bookingStatus = document.querySelector("#booking-status");
const profileContactForm = document.querySelector("#profile-contact-form");
const profileEmail = document.querySelector("#profile-email");
const profilePhone = document.querySelector("#profile-phone");
const profileAddress = document.querySelector("#profile-address");
const profileCity = document.querySelector("#profile-city");
const profileState = document.querySelector("#profile-state");
const profileZip = document.querySelector("#profile-zip");
const paymentAmountDue = document.querySelector("#payment-amount-due");
const paymentStatusText = document.querySelector("#payment-status-text");
const paymentActions = document.querySelector("#payment-actions");
const paymentStatusBadge = document.querySelector("#payment-status-badge");
const payNowButton = document.querySelector("#pay-now-btn");
const adminTransactionTitle = document.querySelector("#admin-transaction-title");
const adminTransactionCopy = document.querySelector("#admin-transaction-copy");
const approveTransaction = document.querySelector("#approve-transaction");
const finalizeTransaction = document.querySelector("#finalize-transaction");
const sendReceipt = document.querySelector("#send-receipt");

let currentStep = 0;
let currentBookingWizardStep = 0;
let saleEnabled = false;
let selectedBookingDate = "Wed 5";
let activeUserRole = "";

const allowedServiceZips = new Set([
  "20001", "20004", "20005", "20006", "20007", "20008", "20009", "20036", "20037",
  "20002", "20003", "20017", "20018", "20019", "20020", "20024",
  "20817", "20895", "20874", "20901", "20910", "20781", "20782", "20740", "20706",
  "21701", "21702", "21703", "21704",
  "22201", "22203", "22209", "22301", "22302", "22314", "22192", "20147", "20164",
  "22030", "22031",
]);

const consultationOnlyServices = new Set([
  "recurring-consult",
  "move-prep",
  "packing-help",
  "construction-cleaning",
  "event-commercial",
]);

function setDefaultDate() {
  if (!dateInput) {
    return;
  }

  const nextWeekend = new Date();
  nextWeekend.setDate(nextWeekend.getDate() + ((6 - nextWeekend.getDay() + 7) % 7 || 7));
  dateInput.value = nextWeekend.toISOString().slice(0, 10);
}

function getEstimate() {
  if (!serviceSelect || !sizeSelect || !typeSelect) {
    return 0;
  }

  const plan = planData[serviceSelect.value];
  if (serviceSelect.value === "consultation") {
    return plan.base;
  }

  const price = plan.base + sizeAdjustments[sizeSelect.value] + typeAdjustments[typeSelect.value];
  return Math.max(price, 99);
}

function calculateEstimate() {
  if (!serviceSelect || !priceEl || !noteEl) {
    return;
  }

  const plan = planData[serviceSelect.value];
  const estimate = getEstimate();
  const priceLabel = serviceSelect.value === "consultation" ? "Custom" : `$${estimate}`;

  priceEl.textContent = priceLabel;
  noteEl.textContent = `${plan.name} - ${plan.pros} pro${plan.pros > 1 ? "s" : ""} - ${plan.hours}`;

  planButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.plan === serviceSelect.value);
  });

  quoteOptions.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.plan === serviceSelect.value);
  });
}

function renderStep() {
  if (!backButton || !nextButton || !loginToBookButton || stepPanels.length === 0) {
    return;
  }

  stepTabs.forEach((tab) => {
    const isActive = Number(tab.dataset.step) === currentStep;
    tab.classList.toggle("is-active", isActive);
    tab.setAttribute("aria-current", isActive ? "step" : "false");
  });

  stepPanels.forEach((panel) => {
    const isActive = Number(panel.dataset.stepPanel) === currentStep;
    panel.hidden = !isActive;
    panel.classList.toggle("is-active", isActive);
  });

  backButton.hidden = currentStep === 0;
  nextButton.hidden = currentStep === stepPanels.length - 1;
  loginToBookButton.hidden = currentStep !== stepPanels.length - 1;

  nextButton.innerHTML = 'Next <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></svg>';
}

function getBookingSummary() {
  if (!serviceSelect || !priceEl || !dateInput || !timeSelect) {
    return {
      plan: "Booking intake",
      price: "Pending quote",
      date: "selected date",
      time: "selected window",
    };
  }

  const plan = planData[serviceSelect.value];
  return {
    plan: plan.name,
    price: priceEl.textContent,
    date: dateInput.value || "selected date",
    time: timeSelect.value,
  };
}

function routeTo(screen) {
  const isAppScreen = Boolean(screen);

  if (screen === "booking") {
    updateBookingPage();
  }

  if (homeScreen) {
    homeScreen.hidden = isAppScreen;
  }

  if (mobileBookBar) {
    mobileBookBar.hidden = false;
  }

  appScreens.forEach((section) => {
    section.hidden = section.dataset.appScreen !== screen;
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function handleHashRoute() {
  const screen = window.location.hash.replace("#", "");
  const knownScreens = ["services", "consultation", "login", "booking", "customer", "employee", "admin"];

  if (knownScreens.includes(screen)) {
    routeTo(screen);
    return;
  }

  routeTo("");

  if (screen) {
    requestAnimationFrame(() => {
      document.querySelector(`#${screen}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }
}

function sendBookingToLogin() {
  const booking = getBookingSummary();
  localStorage.setItem("starsMaidPendingBooking", JSON.stringify(booking));
  window.location.hash = "login";
  routeTo("login");
}

function updateBookingPage() {
  const pendingBooking = JSON.parse(localStorage.getItem("starsMaidPendingBooking") || "null");
  const booking = pendingBooking || getBookingSummary();

  if (bookingSummaryTitle && bookingSummaryCopy) {
    bookingSummaryTitle.textContent = `${booking.plan} - ${booking.price}`;
    bookingSummaryCopy.textContent = `Booking station: ${booking.plan}. Start with ZIP validation, service type, property details, schedule, and payment preview.`;
  }
}

function getSelectedServiceType() {
  return document.querySelector('input[name="serviceType"]:checked')?.value || "one-time-clean";
}

function isZipAllowed() {
  const zip = bookingZipInput?.value.trim();
  return Boolean(zip && allowedServiceZips.has(zip));
}

function updateZipValidation() {
  if (!bookingZipInput || !zipValidationMessage) {
    return true;
  }

  const zip = bookingZipInput.value.trim();

  if (!zip) {
    zipValidationMessage.textContent = "";
    zipValidationMessage.classList.remove("is-valid", "is-invalid");
    return false;
  }

  if (allowedServiceZips.has(zip)) {
    zipValidationMessage.textContent = "Great, this ZIP code is in the Stars Maid service area.";
    zipValidationMessage.classList.add("is-valid");
    zipValidationMessage.classList.remove("is-invalid");
    return true;
  }

  zipValidationMessage.textContent = "This ZIP is not in the current service area yet. You can contact us to request expansion.";
  zipValidationMessage.classList.add("is-invalid");
  zipValidationMessage.classList.remove("is-valid");
  return false;
}

function updatePaymentPreview() {
  if (!paymentTitle || !paymentCopy) {
    return;
  }

  const serviceType = getSelectedServiceType();

  if (serviceType === "one-time-clean") {
    paymentTitle.textContent = "Service payment required";
    paymentCopy.textContent = "One-time service payment will be collected before confirmation when Stripe is connected.";
    return;
  }

  if (consultationOnlyServices.has(serviceType)) {
    paymentTitle.textContent = "$50 consultation fee";
    paymentCopy.textContent = "$50 is non-refundable and can be applied toward the first approved service.";
    return;
  }

  paymentTitle.textContent = "Payment pending";
  paymentCopy.textContent = "Management will review the request and confirm the next payment step.";
}

function getServiceTypeLabel(value) {
  const labels = {
    "one-time-clean": "One-Time Clean",
    "recurring-consult": "Recurring Cleaning Consultation",
    "move-prep": "Move-Out / Move-Prep Consultation",
    "packing-help": "Packing Help Consultation",
    "construction-cleaning": "Construction / Project Cleaning",
    "event-commercial": "Event or Commercial Contract",
  };

  return labels[value] || "Consultation";
}

function getPaymentLabel(serviceType) {
  if (serviceType === "one-time-clean") {
    return "Service payment required";
  }

  if (consultationOnlyServices.has(serviceType)) {
    return "$50 consult fee";
  }

  return "Management review";
}

function showBookingConfirmation(booking) {
  if (!bookingConfirmationPanel || !bookingIntakeForm) {
    return;
  }

  bookingIntakeForm.hidden = true;
  bookingConfirmationPanel.hidden = false;

  if (confirmationService) {
    confirmationService.textContent = getServiceTypeLabel(booking.serviceType);
  }

  if (confirmationSchedule) {
    confirmationSchedule.textContent = `${booking.consultDate || "Date pending"} at ${booking.consultWindow || "time pending"}`;
  }

  if (confirmationZip) {
    confirmationZip.textContent = booking.zip || "Pending";
  }

  if (confirmationPayment) {
    confirmationPayment.textContent = getPaymentLabel(booking.serviceType);
  }

  if (confirmationAccountLink) {
    confirmationAccountLink.href = activeUserRole ? "#customer" : "#login";
    confirmationAccountLink.textContent = activeUserRole ? "Open My Account" : "Sign In / Create Account";
  }

  bookingConfirmationPanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

function resetBookingWizard() {
  if (!bookingIntakeForm || !bookingConfirmationPanel) {
    return;
  }

  bookingIntakeForm.reset();
  bookingConsultDateInput.value = "Wed 5";
  bookingDateButtons.forEach((button) => {
    button.classList.toggle("is-selected", button.dataset.bookingDate === "Wed 5");
  });
  currentBookingWizardStep = 0;
  bookingConfirmationPanel.hidden = true;
  bookingIntakeForm.hidden = false;
  updateZipValidation();
  renderBookingWizard();
}

function renderBookingWizard() {
  bookingWizardPanels.forEach((panel) => {
    const isActive = Number(panel.dataset.wizardPanel) === currentBookingWizardStep;
    panel.hidden = !isActive;
    panel.classList.toggle("is-active", isActive);
  });

  bookingWizardIndicators.forEach((indicator) => {
    indicator.classList.toggle("is-active", Number(indicator.dataset.wizardIndicator) === currentBookingWizardStep);
    indicator.classList.toggle("is-complete", Number(indicator.dataset.wizardIndicator) < currentBookingWizardStep);
  });

  if (bookingWizardBack) {
    bookingWizardBack.hidden = currentBookingWizardStep === 0;
  }

  if (bookingWizardNext) {
    bookingWizardNext.hidden = currentBookingWizardStep === bookingWizardPanels.length - 1;
  }

  updatePaymentPreview();
}

function validateCurrentBookingStep() {
  const activePanel = document.querySelector(`[data-wizard-panel="${currentBookingWizardStep}"]`);

  if (currentBookingWizardStep === 0 && !isZipAllowed()) {
    updateZipValidation();
    bookingZipInput?.focus();
    return false;
  }

  if (!activePanel) {
    return true;
  }

  const requiredFields = activePanel.querySelectorAll("input[required], select[required], textarea[required]");
  for (const field of requiredFields) {
    if (!field.checkValidity()) {
      field.reportValidity();
      return false;
    }
  }

  return true;
}

function setAccountTab(tabName) {
  accountTabButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.tab === tabName);
  });

  accountTabPanels.forEach((panel) => {
    const isActive = panel.dataset.tabPanel === tabName;
    panel.hidden = !isActive;
    panel.classList.toggle("is-active", isActive);
  });
}

function updateAccountMenu() {
  const label = activeUserRole ? `Open ${activeUserRole} account navigation` : "Open account navigation";

  accountGateLinks.forEach((link) => {
    link.setAttribute("aria-label", label);
    link.setAttribute("href", activeUserRole ? "#customer" : "#login");
    if (link.classList.contains("header-account-link")) {
      link.textContent = activeUserRole ? "My Account" : "Sign In / Create";
    }
  });
}

function updateCustomerAccount(booking) {
  if (!booking) {
    return;
  }

  const customerName = `${booking.firstName || "Customer"} ${booking.lastName || ""}`.trim();
  const accountLabel = booking.consultType || booking.plan || "In-person consultation";
  const price = booking.price || "Pending quote";

  if (customerNextBooking) {
    customerNextBooking.textContent = `${customerName} - ${accountLabel}`;
  }

  if (accountOverviewTitle) {
    accountOverviewTitle.textContent = `${accountLabel} draft saved`;
  }

  if (accountOverviewCopy) {
    accountOverviewCopy.textContent = `${customerName} has a draft request for ${booking.consultDate || "a selected date"} at ${booking.consultWindow || "a selected time"}.`;
  }

  if (accountNextStep) {
    accountNextStep.textContent = "Add address and payment details";
  }

  if (primaryAddressTitle) {
    primaryAddressTitle.textContent = booking.propertyType || "Residential or commercial";
  }

  if (primaryAddressCopy) {
    primaryAddressCopy.textContent = `ZIP ${booking.zip || "pending"} is saved from the booking draft. Exact street address is added privately after sign in.`;
  }

  if (nextBookingDetails) {
    nextBookingDetails.textContent = `Consult: ${booking.consultDate || "date pending"}, ${booking.consultWindow || "window pending"} - ${booking.consultType || "consult type pending"}. ZIP ${booking.zip || "pending"} - ${booking.squareFeet || "unknown"} sq ft - ${booking.beds || "0"} bed(s) - ${booking.baths || "0"} bath(s). ${booking.people || "0"} people, ${booking.pets || "pets pending"}, ${booking.rooms || "0"} room(s). Private address and payment details stay in the account page until admin finalizes the transaction.`;
  }

  if (bookingStatusInfo) {
    bookingStatusInfo.hidden = false;
  }

  if (bookingStatus) {
    bookingStatus.textContent = "Pending account details";
  }

  if (paymentAmountDue) {
    paymentAmountDue.textContent = price === "Custom" ? "Pending quote" : price;
  }

  if (paymentStatusText) {
    paymentStatusText.textContent = "Balance pending admin approval";
  }

  if (paymentActions) {
    paymentActions.hidden = false;
  }

  if (paymentStatusBadge) {
    paymentStatusBadge.textContent = "Awaiting admin approval";
  }

  if (payNowButton) {
    payNowButton.hidden = true;
  }

  if (adminTransactionTitle) {
    adminTransactionTitle.textContent = `${customerName} - ${accountLabel}`;
  }

  if (adminTransactionCopy) {
    adminTransactionCopy.textContent = `In-person consult ${booking.consultDate || "date pending"} during ${booking.consultWindow || "window pending"} for ZIP ${booking.zip || "pending"}. Basement: ${booking.basement || "pending"}. Yard: ${booking.yard || "pending"}. Demo/heavy clean: ${booking.demo || "pending"}. Admin can approve, finalize, and send receipt after account details are complete.`;
  }
}

function setPlan(plan) {
  if (!serviceSelect) {
    return;
  }

  serviceSelect.value = plan;
  calculateEstimate();
  renderStep();
}

function openDialog(message) {
  if (confirmationCopy) {
    confirmationCopy.textContent = message;
  }

  if (dialog && typeof dialog.showModal === "function") {
    dialog.showModal();
  } else {
    alert(message);
  }
}

async function submitNetlifyBooking(form) {
  const formData = new FormData(form);
  const encoded = new URLSearchParams(formData).toString();

  const response = await fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: encoded,
  });

  if (!response.ok) {
    throw new Error("Booking lead submission failed");
  }
}

// Plan buttons removed from home page
// Will be added back in dedicated booking section

if (planButtons.length > 0) {
  planButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setPlan(button.dataset.plan);
      currentStep = 1;
      renderStep();

      if (!homeScreen.hidden) {
        document.querySelector("#booking")?.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    });
  });
}

if (quoteOptions.length > 0) {
  quoteOptions.forEach((button) => {
    button.addEventListener("click", () => {
      setPlan(button.dataset.plan);
    });
  });
}

if (stepTabs.length > 0) {
  stepTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      currentStep = Number(tab.dataset.step);
      renderStep();
    });
  });
}

if (nextButton) {
  nextButton.addEventListener("click", () => {
    currentStep = Math.min(currentStep + 1, stepPanels.length - 1);
    renderStep();
  });
}

if (backButton) {
  backButton.addEventListener("click", () => {
    currentStep = Math.max(currentStep - 1, 0);
    renderStep();
  });
}

if (serviceSelect && sizeSelect && typeSelect) {
  [serviceSelect, sizeSelect, typeSelect].forEach((input) => {
    input.addEventListener("change", calculateEstimate);
  });
}

if (bookingForm) {
  bookingForm.addEventListener("submit", (event) => {
    event.preventDefault();
    sendBookingToLogin();
  });
}

if (loginToBookButton) {
  loginToBookButton.addEventListener("click", sendBookingToLogin);
}

if (consultationForm) {
  consultationForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const message = `Your $50 ${frequencySelect.value.toLowerCase()} cleaning consultation request is ready. Stars Maid can ${contactMethodSelect.value.toLowerCase()} with next steps.`;
    consultationMessage.textContent = message;
    openDialog(message);
  });
}

authSwitchButtons.forEach((button) => {
  button.addEventListener("click", () => {
    authSwitchButtons.forEach((switchButton) => switchButton.classList.remove("is-active"));
    button.classList.add("is-active");
  });
});

if (bookingWizardPanels.length > 0) {
  renderBookingWizard();
}

if (bookingZipInput) {
  bookingZipInput.addEventListener("input", () => {
    bookingZipInput.value = bookingZipInput.value.replace(/\D/g, "").slice(0, 5);
    updateZipValidation();
  });
}

if (bookingWizardNext) {
  bookingWizardNext.addEventListener("click", () => {
    if (!validateCurrentBookingStep()) {
      return;
    }

    currentBookingWizardStep = Math.min(currentBookingWizardStep + 1, bookingWizardPanels.length - 1);
    renderBookingWizard();
  });
}

if (bookingWizardBack) {
  bookingWizardBack.addEventListener("click", () => {
    currentBookingWizardStep = Math.max(currentBookingWizardStep - 1, 0);
    renderBookingWizard();
  });
}

serviceTypeInputs.forEach((input) => {
  input.addEventListener("change", updatePaymentPreview);
});

if (bookingStartOver) {
  bookingStartOver.addEventListener("click", resetBookingWizard);
}

accountGateLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    if (!activeUserRole) {
      event.preventDefault();
      window.location.hash = "login";
      routeTo("login");
      return;
    }

    event.preventDefault();
    setAccountTab("overview");
    window.location.hash = "customer";
    routeTo("customer");
  });
});

accountTabButtons.forEach((button) => {
  button.addEventListener("click", () => setAccountTab(button.dataset.tab));
});

if (profileContactForm) {
  profileContactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const profile = {
      email: profileEmail.value,
      phone: profilePhone.value,
      address: profileAddress.value,
      city: profileCity.value,
      state: profileState.value,
      zip: profileZip.value,
    };
    localStorage.setItem("starsMaidCustomerProfile", JSON.stringify(profile));
    bookingStatus.textContent = "Pending admin approval";
    paymentStatusBadge.textContent = "Admin review needed";
    openDialog("Your private contact and service address details are saved to your account. Admin can now approve and finalize the transaction.");
  });
}

if (payNowButton) {
  payNowButton.addEventListener("click", () => {
    paymentStatusText.textContent = "Payment placeholder ready. Stripe will process balances here next.";
    paymentStatusBadge.textContent = "Payment system pending";
  });
}

if (approveTransaction) {
  approveTransaction.addEventListener("click", () => {
    bookingStatus.textContent = "Approved by admin";
    paymentStatusText.textContent = "Approved balance ready for payment";
    paymentStatusBadge.textContent = "Approved";
    payNowButton.hidden = false;
    adminTransactionCopy.textContent = "Transaction approved. Customer can now view and pay the balance from their account page.";
  });
}

if (finalizeTransaction) {
  finalizeTransaction.addEventListener("click", () => {
    bookingStatus.textContent = "Finalized";
    paymentStatusText.textContent = "Finalized balance ready";
    paymentStatusBadge.textContent = "Finalized";
    adminTransactionCopy.textContent = "Transaction finalized. Receipt can be sent to the customer after payment is complete.";
  });
}

if (sendReceipt) {
  sendReceipt.addEventListener("click", () => {
    adminTransactionCopy.textContent = "Receipt queued for customer email once Firebase/Email service is connected.";
    openDialog("Receipt sending is ready as an admin action. Email delivery will connect in the backend phase.");
  });
}

if (loginForm) {
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const selectedRole = loginRoleSelect.value;
    const pendingBooking = JSON.parse(localStorage.getItem("starsMaidPendingBooking") || "null");
    activeUserRole = selectedRole;
    updateAccountMenu();

    if (pendingBooking && selectedRole === "customer") {
      updateCustomerAccount(pendingBooking);
    }

    const destination = selectedRole === "customer" ? "customer" : selectedRole;
    updateBookingPage();
    window.location.hash = destination;
    routeTo(destination);
  });
}

bookingDateButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const calendar = button.closest(".booking-calendar");
    const dateButtons = calendar ? calendar.querySelectorAll("button") : bookingDateButtons;
    dateButtons.forEach((dateButton) => dateButton.classList.remove("is-selected"));
    button.classList.add("is-selected");
    selectedBookingDate = button.dataset.bookingDate || button.textContent.replace(/\s+/g, " ").trim();

    if (button.dataset.bookingDate && bookingConsultDateInput) {
      bookingConsultDateInput.value = button.dataset.bookingDate;
    }
  });
});

if (bookingIntakeForm) {
  bookingIntakeForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!isZipAllowed()) {
      currentBookingWizardStep = 0;
      renderBookingWizard();
      updateZipValidation();
      return;
    }

    const formData = new FormData(bookingIntakeForm);
    const booking = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      zip: formData.get("zip"),
      smsConsent: formData.get("smsConsent") === "on",
      people: formData.get("people"),
      pets: formData.get("pets"),
      rooms: formData.get("rooms"),
      beds: formData.get("beds"),
      baths: formData.get("baths"),
      basement: formData.get("basement"),
      yard: formData.get("yard"),
      demo: formData.get("demo"),
      squareFeet: formData.get("squareFeet"),
      consultDate: formData.get("consultDate"),
      consultWindow: formData.get("consultWindow"),
      consultType: formData.get("consultType"),
      serviceType: formData.get("serviceType"),
      propertyType: formData.get("propertyType"),
      projectNotes: formData.get("projectNotes"),
      paymentAcknowledge: formData.get("paymentAcknowledge") === "on",
      price: "Pending quote",
      status: "Pending account details",
    };

    if (bookingSubmitStatus) {
      bookingSubmitStatus.textContent = "Saving your consultation request...";
    }

    try {
      await submitNetlifyBooking(bookingIntakeForm);
      if (bookingSubmitStatus) {
        bookingSubmitStatus.textContent = "Consultation request saved.";
      }
    } catch (error) {
      if (bookingSubmitStatus) {
        bookingSubmitStatus.textContent = "Saved locally. Online submission will connect on Netlify.";
      }
    }

    localStorage.setItem("starsMaidConfirmedBooking", JSON.stringify(booking));
    localStorage.setItem("starsMaidPendingBooking", JSON.stringify(booking));
    updateCustomerAccount(booking);

    if (profileEmail) {
      profileEmail.value = booking.email || "";
    }

    if (profilePhone) {
      profilePhone.value = booking.phone || "";
    }

    if (profileZip) {
      profileZip.value = booking.zip || "";
    }

    updateAccountMenu();
    setAccountTab("overview");
    showBookingConfirmation(booking);
  });
}

if (saleToggle) {
  saleToggle.addEventListener("click", () => {
    saleEnabled = !saleEnabled;
    saleState.textContent = saleEnabled ? "On" : "Off";
    saleToggle.textContent = saleEnabled ? "Turn Sale Off" : "Turn Sale On";
  });
}

if (dialogClose && dialog) {
  dialogClose.addEventListener("click", () => dialog.close());
}

if (continueButton && dialog) {
  continueButton.addEventListener("click", () => dialog.close());
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js", { scope: './' })
      .then((reg) => {
        console.log('Service worker registered.', reg);
        if (reg.waiting) {
          console.log('Service worker waiting to activate.');
        }
        reg.addEventListener('updatefound', () => {
          const newWorker = reg.installing;
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              console.log('New service worker installed and waiting.');
            }
          });
        });
      })
      .catch((err) => console.warn('Service worker registration failed:', err));
  });

  navigator.serviceWorker.addEventListener('controllerchange', () => {
    console.log('Service worker controller changed — reloading');
    window.location.reload();
  });
}

// Initialize only hash routing on home page
// Date, estimate, and steps initialized when booking section is accessed
handleHashRoute();

window.addEventListener("hashchange", handleHashRoute);
