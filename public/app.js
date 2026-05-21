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
const serviceCategoryList = document.querySelector("#service-category-list");
const homeScreen = document.querySelector("#top");
const mobileBookBar = document.querySelector(".mobile-book-bar");
const appNavLinks = document.querySelectorAll("[data-nav-target]");
const appScreens = document.querySelectorAll("[data-app-screen]");
const loginForm = document.querySelector("#login-form");
const loginEmailInput = document.querySelector("#login-email");
const loginPasswordInput = document.querySelector("#login-password");
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
const publicReviewStrip = document.querySelector("#public-review-strip");
const serviceDetailImage = document.querySelector("#service-detail-image");
const serviceDetailBadge = document.querySelector("#service-detail-badge");
const serviceDetailTitle = document.querySelector("#service-detail-title");
const serviceDetailCopy = document.querySelector("#service-detail-copy");
const serviceDetailIncludes = document.querySelector("#service-detail-includes");
const serviceDetailPricing = document.querySelector("#service-detail-pricing");
const serviceDetailAddons = document.querySelector("#service-detail-addons");
const serviceDetailAddonsPanel = document.querySelector("#service-detail-addons-panel");
const adminLockedMessage = document.querySelector("#admin-locked-message");
const adminWorkspace = document.querySelector("#admin-workspace");
const adminRoleBadge = document.querySelector("#admin-role-badge");
const adminTabButtons = document.querySelectorAll(".admin-tab-btn");
const adminTabPanels = document.querySelectorAll(".admin-tab-panel");
const adminRequestCount = document.querySelector("#admin-request-count");
const adminEmployeeCount = document.querySelector("#admin-employee-count");
const adminReviewState = document.querySelector("#admin-review-state");
const adminAccessRequests = document.querySelector("#admin-access-requests");
const adminEmployeeList = document.querySelector("#admin-employee-list");
const adminBookingList = document.querySelector("#admin-booking-list");
const reviewsToggle = document.querySelector("#reviews-toggle");
const reviewsToggleTitle = document.querySelector("#reviews-toggle-title");
const reviewsToggleStatus = document.querySelector("#reviews-toggle-status");
const employeeInviteForm = document.querySelector("#employee-invite-form");
const employeeInviteStatus = document.querySelector("#employee-invite-status");
const employeeNameInput = document.querySelector("#employee-name");
const employeeEmailInput = document.querySelector("#employee-email");
const employeePhoneInput = document.querySelector("#employee-phone");
const employeeRoleSelect = document.querySelector("#employee-role");

let currentStep = 0;
let currentBookingWizardStep = 0;
let saleEnabled = false;
let selectedBookingDate = "Wed 5";
let activeUserRole = "";
let authMode = "signin";
let activeFirebaseUser = JSON.parse(localStorage.getItem("starsMaidFirebaseUser") || "null");
let siteSettings = { showReviews: false };
let adminSnapshot = null;
let currentServiceSlug = "standard-clean";

const firebaseConfig = window.starsMaidFirebaseConfig || {};

const allowedServiceZips = new Set([
  "20001", "20004", "20005", "20006", "20007", "20008", "20009", "20036", "20037",
  "20002", "20003", "20017", "20018", "20019", "20020", "20024",
  "20817", "20895", "20874", "20901", "20910", "20781", "20782", "20740", "20706",
  "21701", "21702", "21703", "21704",
  "22201", "22203", "22209", "22301", "22302", "22314", "22192", "20147", "20164",
  "22030", "22031",
]);

const consultationOnlyServices = new Set([
  "move-in-out",
  "rental-turnover",
  "tenant-move-out",
  "packing-organizing",
  "trash-recycling",
  "light-home-help",
  "commercial-project",
]);

const categoryPricing = {
  apartments: {
    title: "Apartments",
    items: [
      { label: "Small Apartment", name: "Standard Clean", copy: "Studio or 1 bedroom with kitchen, bathroom, dusting, floors, trash, and light tidy.", price: "From $109*" },
      { label: "Medium Apartment", name: "Standard Clean", copy: "2 bedrooms or larger apartment layout with routine kitchen, bath, living, and floor care.", price: "From $129*" },
      { label: "Large Apartment", name: "Deep or Standard Clean", copy: "Large apartment or high-detail visit with extra room time and more surface detail.", price: "From $169*" },
    ],
  },
  townhouses: {
    title: "Town Houses",
    items: [
      { label: "Small Townhome", name: "Standard Clean", copy: "Compact multi-level home with kitchen, bathrooms, bedrooms, stairs, and living areas.", price: "From $149*" },
      { label: "Medium Townhome", name: "Standard or Deep Clean", copy: "More bedrooms, stairs, and bathrooms with extra time for floors and high-touch areas.", price: "From $189*" },
      { label: "Large Townhome", name: "Deep Clean", copy: "Detailed service for larger layouts, buildup, baseboards, fixtures, and extra rooms.", price: "From $239*" },
    ],
  },
  houses: {
    title: "Houses",
    items: [
      { label: "Small House", name: "Standard Clean", copy: "Routine full-home cleaning for smaller houses with kitchen, baths, bedrooms, and floors.", price: "From $169*" },
      { label: "Medium House", name: "Standard or Deep Clean", copy: "Full-home service for average houses with more rooms, bathrooms, and detail time.", price: "From $229*" },
      { label: "Large House", name: "Deep or Move-Out Clean", copy: "Large-home service, move prep, heavy detail work, or service with multiple add-ons.", price: "From $299*" },
    ],
  },
  deep: {
    title: "Deep Clean Pricing",
    items: [
      { label: "Apartment Deep Clean", name: "Apartments", copy: "Extra detail for kitchens, bathrooms, trim, fixtures, buildup, and high-touch surfaces.", price: "From $169*" },
      { label: "Town House Deep Clean", name: "Town Houses", copy: "Multi-level detail cleaning with stairs, bathrooms, baseboards, fixtures, and floors.", price: "From $239*" },
      { label: "House Deep Clean", name: "Houses", copy: "Larger home detail reset with more rooms, heavier buildup, and optional add-ons.", price: "From $299*" },
    ],
  },
  moveOut: {
    title: "Move-In / Move-Out Cleaning",
    items: [
      { label: "Apartment Move Clean", name: "Apartments", copy: "Move-ready kitchen, bath, floors, shelves, and surfaces with optional inside-appliance add-ons.", price: "From $189*" },
      { label: "Town House Move Clean", name: "Town Houses", copy: "Multi-level move clean for stairs, bathrooms, kitchen, floors, closets, and high-touch areas.", price: "From $269*" },
      { label: "House Move Clean", name: "Houses", copy: "Larger move-in or move-out reset with condition review, extra rooms, and optional add-ons.", price: "From $329*" },
    ],
  },
  rentalTurnover: {
    title: "Short-Term Rental Turnover",
    items: [
      { label: "Studio / 1 Bedroom", name: "Guest turnover", copy: "Bathroom, kitchen, floors, bed reset, trash/recycling, and readiness notes.", price: "From $99*" },
      { label: "2 Bedroom Rental", name: "Guest turnover", copy: "Turnover clean with bed resets, bathrooms, kitchen, floors, and light restock notes.", price: "From $139*" },
      { label: "3+ Bedroom Rental", name: "Guest turnover", copy: "Larger rental reset priced by beds, baths, laundry, guest needs, and restocking scope.", price: "From $189*" },
    ],
  },
  tenantRental: {
    title: "Tenant Move-Out Rental Cleaning",
    items: [
      { label: "Apartment Rental", name: "Condition review", copy: "Move-out cleaning for property managers with kitchen, bath, floors, shelves, and add-on review.", price: "From $199*" },
      { label: "Town House Rental", name: "Condition review", copy: "Multi-level tenant move-out cleaning with appliance/cabinet add-ons quoted as needed.", price: "From $289*" },
      { label: "House Rental", name: "Condition review", copy: "Larger rental move-out clean priced by condition, room count, appliances, and property-manager needs.", price: "From $349*" },
    ],
  },
  packing: {
    title: "Packing & Move Prep",
    items: [
      { label: "Packing Help", name: "Consult quote", copy: "Organizing and packing items into boxes. Stars Maid does not transport belongings.", price: "Quote after consult" },
      { label: "Unpacking Help", name: "Consult quote", copy: "Unpack boxes into agreed rooms, organize essentials, and reset living areas after a move.", price: "Quote after consult" },
      { label: "Closet / Pantry Organizing", name: "Consult quote", copy: "Light organizing for closets, pantries, shelves, and daily-use storage zones.", price: "Quote after consult" },
      { label: "Move-Prep Cleaning", name: "Consult quote", copy: "Cleaning plan for move-ready kitchens, bathrooms, rooms, shelves, and floors.", price: "Quote after consult" },
      { label: "Project Support", name: "Consult quote", copy: "Custom support for light organizing, packing zones, and staged room resets.", price: "Quote after consult" },
    ],
  },
  trashRecycling: {
    title: "Apartment Trash & Recycling Pickup",
    items: [
      { label: "Bagged Trash Pickup", name: "Apartments", copy: "Bagged household trash moved from apartment areas to onsite bins or approved curb area.", price: "From $25*" },
      { label: "Recycling Pickup", name: "Apartments", copy: "Sorted recycling moved to onsite recycling bins according to building rules.", price: "From $20*" },
      { label: "Extra Bag Volume", name: "Consult quote", copy: "Extra bags or bulky volume reviewed before service. No hazardous waste or large furniture.", price: "Quote after consult" },
    ],
  },
  handyman: {
    title: "Handyman / Light Home Help",
    items: [
      { label: "Shelf Installation", name: "Consult quote", copy: "Small shelf installation or adjustment reviewed before the visit is confirmed.", price: "Quote after consult" },
      { label: "Furniture Assembly", name: "Consult quote", copy: "Simple home assembly tasks scoped by time, tools, and safety needs.", price: "Quote after consult" },
      { label: "Light Fixture & Shelf Help", name: "Consult quote", copy: "Light home-help tasks can be bundled with a cleaning consultation.", price: "Quote after consult" },
      { label: "High-Reach Tasks", name: "Consult quote", copy: "High dusting, ladder-needed details, and ceiling-level tasks reviewed in advance.", price: "Quote after consult" },
    ],
  },
};

const addOnItems = {
  cleaning: [
    { name: "Inside fridge", price: "From $25", copy: "Empty-shelf wipe-down and interior detail." },
    { name: "Inside oven", price: "From $35", copy: "Interior oven cleaning for buildup and residue." },
    { name: "Interior windows", price: "From $8/window", copy: "Interior glass and sill wipe-down." },
    { name: "Cabinet interiors", price: "From $45", copy: "Inside cabinet wipe-down when emptied." },
    { name: "Laundry", price: "From $20/load", copy: "Wash, dry, and fold service by load." },
    { name: "Bedsheets", price: "From $12/bed", copy: "Change linens when clean sheets are provided." },
    { name: "Extra bathroom", price: "From $25", copy: "Additional bathroom beyond selected package." },
    { name: "Pet hair detail", price: "From $35", copy: "Extra vacuuming and surface work for pet hair." },
  ],
  packing: [
    { name: "Packing help", price: "Quote after consult", copy: "Pack items into boxes for a move. Stars Maid does not transport items." },
    { name: "Unpacking help", price: "Quote after consult", copy: "Unpack boxes into agreed spaces and organize essentials." },
    { name: "Room organizing", price: "Quote after consult", copy: "Organize packing zones, prep closets, or reset rooms before cleaning." },
  ],
  rental: [
    { name: "Laundry turnover", price: "Quote after consult", copy: "Guest linens and towels scoped by unit size and timing." },
    { name: "Light restock notes", price: "Included when requested", copy: "Report low supplies or restock from owner-provided items." },
    { name: "Inside appliances", price: "From $35", copy: "Inside fridge, oven, or cabinet detail quoted by condition." },
  ],
  trash: [
    { name: "Bagged trash only", price: "Apartment scope", copy: "No hazardous waste, loose debris, large furniture, or offsite hauling." },
    { name: "Recycling sort", price: "Quote after consult", copy: "Recycling must follow building rules and accepted materials." },
  ],
  handyman: [
    { name: "Shelf install", price: "Quote after consult", copy: "Small shelf installation scoped for wall type, height, and hardware." },
    { name: "Furniture assembly", price: "Quote after consult", copy: "Simple assembly support for home refresh projects." },
    { name: "High-reach help", price: "Quote after consult", copy: "Ceiling-level dusting, fixtures, and ladder-needed tasks." },
  ],
};

const serviceGroups = [
  {
    title: "Cleaning",
    copy: "Routine, deep, recurring, and move-ready cleaning for homes and apartments.",
    slugs: ["standard-clean", "deep-clean", "recurring-cleaning", "move-in-out-clean"],
  },
  {
    title: "Rental Services",
    copy: "Guest turnover and tenant move-out cleaning for owners, hosts, and property managers.",
    slugs: ["short-term-rental-turnover", "tenant-move-out-rental-cleaning"],
  },
  {
    title: "Move & Organize",
    copy: "Packing, unpacking, closet and pantry help, and move-prep room resets.",
    slugs: ["packing-light-home-help", "unpacking-help", "closet-pantry-organizing", "move-prep-room-reset"],
  },
  {
    title: "Detail Add-Ons",
    copy: "Focused detail work for bathrooms, floors, bedrooms, shelves, glass, and display areas.",
    slugs: ["bathroom-glass-detail", "floors-rug-care", "shelves-display-dusting", "bedroom-refresh"],
  },
  {
    title: "Trash & Recycling",
    copy: "Apartment bagged trash and recycling support with clear limits.",
    slugs: ["apartment-bagged-trash-pickup", "apartment-recycling-pickup"],
  },
  {
    title: "Light Home Help",
    copy: "Small home-help and high-reach tasks scoped before the visit.",
    slugs: ["handyman-light-home-help", "high-reach-tasks"],
  },
];

const servicePages = {
  "standard-clean": {
    badge: "Most Booked",
    title: "Standard Home Clean",
    image: "assets/services/kitchen-standard-clean.png",
    copy: "Reliable routine cleaning for kitchens, bathrooms, bedrooms, living spaces, floors, trash, and high-touch surfaces.",
    includes: ["Kitchen counters", "Bathroom surfaces", "Dusting", "Vacuuming", "Hard floors", "Trash removal"],
    pricing: ["apartments", "townhouses", "houses"],
    addons: "cleaning",
    cardSize: "large",
  },
  "deep-clean": {
    badge: "Deep Clean",
    title: "Deep Clean",
    image: "assets/services/kitchen-counter-cleaning.png",
    copy: "A reset-level clean for buildup, detail surfaces, fixtures, baseboards, extra room time, and optional inside-appliance add-ons.",
    includes: ["Baseboards", "Fixture detail", "Kitchen buildup", "Bathroom buildup", "Trim and ledges", "Add-on ready"],
    pricing: ["deep"],
    addons: "cleaning",
    cardSize: "large",
  },
  "recurring-cleaning": {
    badge: "Recurring",
    title: "Recurring Cleaning",
    image: "assets/services/kitchen-standard-clean.png",
    copy: "Weekly, biweekly, or monthly cleaning plans for kitchens, bathrooms, floors, bedrooms, trash, and high-touch areas.",
    includes: ["Recurring schedule", "Kitchen reset", "Bathroom care", "Floors", "Dusting", "Trash removal"],
    pricing: ["apartments", "townhouses", "houses"],
    addons: "cleaning",
  },
  "move-in-out-clean": {
    badge: "Move Clean",
    title: "Move-In / Move-Out Clean",
    image: "assets/services/kitchen-counter-cleaning.png",
    copy: "Move-ready cleaning for empty or nearly empty homes with kitchen, bathroom, shelf, floor, closet, and add-on review.",
    includes: ["Kitchen reset", "Bathroom reset", "Floors", "Shelves", "Closets", "Condition review"],
    pricing: ["moveOut"],
    addons: "cleaning",
  },
  "bathroom-glass-detail": {
    badge: "Detail Clean",
    title: "Bathroom & Glass Detail",
    image: "assets/services/bathroom-glass-cleaning.png",
    copy: "Detail work for shower glass, mirrors, fixtures, sinks, counters, bathroom surfaces, and bright finishing touches.",
    includes: ["Shower glass", "Mirrors", "Fixtures", "Sinks", "Counters", "Bathroom floors"],
    pricing: ["apartments", "townhouses", "houses"],
    addons: "cleaning",
  },
  "bedroom-refresh": {
    badge: "Add-On",
    title: "Bedroom Refresh",
    image: "assets/services/bedroom-linen-refresh.png",
    copy: "A finished-room reset for bedrooms with linens, light tidy, dusting, bedside surfaces, and floors.",
    includes: ["Linen change", "Bedside surfaces", "Light tidy", "Dusting", "Floors", "Trash"],
    pricing: ["apartments", "townhouses", "houses"],
    addons: "cleaning",
  },
  "floors-rug-care": {
    badge: "Living Areas",
    title: "Floors & Rug Care",
    image: "assets/services/living-room-vacuuming.png",
    copy: "Floor and rug care for living spaces, bedrooms, entry areas, sofa zones, and everyday high-traffic cleanup.",
    includes: ["Vacuuming", "Rug passes", "Hard floors", "Entry cleanup", "Living areas", "Pet hair add-on"],
    pricing: ["apartments", "townhouses", "houses"],
    addons: "cleaning",
  },
  "shelves-display-dusting": {
    badge: "Deep Detail",
    title: "Shelves & Display Dusting",
    image: "assets/services/shelf-detail-dusting.png",
    copy: "Careful dust removal around bookshelves, built-ins, decor, ledges, and delicate display surfaces.",
    includes: ["Built-ins", "Shelves", "Decor dusting", "Ledges", "Display surfaces", "Detail passes"],
    pricing: ["deep"],
    addons: "cleaning",
  },
  "packing-light-home-help": {
    badge: "Consult Quote",
    title: "Packing & Light Home Help",
    image: "assets/services/furniture-assembly.png",
    copy: "Move prep, organizing, packing support, and light project help planned through a consultation.",
    includes: ["Packing zones", "Organizing", "Move prep", "Room reset", "Light assembly", "Consult plan"],
    pricing: ["packing", "handyman"],
    addons: "packing",
    cardSize: "wide",
  },
  "unpacking-help": {
    badge: "Move Help",
    title: "Unpacking Help",
    image: "assets/services/furniture-assembly.png",
    copy: "Unpack boxes into agreed rooms, organize essentials, clear packing zones, and help rooms feel usable after a move.",
    includes: ["Box unpacking", "Essentials setup", "Room sorting", "Packing-zone cleanup", "Light organizing", "Consult plan"],
    pricing: ["packing"],
    addons: "packing",
  },
  "closet-pantry-organizing": {
    badge: "Organizing",
    title: "Closet / Pantry Organizing",
    image: "assets/services/shelf-detail-dusting.png",
    copy: "Light organizing for closets, pantries, shelves, and storage zones so everyday spaces are easier to use.",
    includes: ["Closet zones", "Pantry reset", "Shelf sorting", "Surface wipe-down", "Light labeling", "Consult plan"],
    pricing: ["packing"],
    addons: "packing",
  },
  "move-prep-room-reset": {
    badge: "Move Prep",
    title: "Move-Prep Room Reset",
    image: "assets/services/bedroom-linen-refresh.png",
    copy: "A room-by-room reset for packing prep, move staging, guest readiness, or post-move settling.",
    includes: ["Room reset", "Light tidy", "Packing prep", "Surface cleaning", "Floors", "Consult plan"],
    pricing: ["packing", "moveOut"],
    addons: "packing",
  },
  "short-term-rental-turnover": {
    badge: "Rental",
    title: "Short-Term Rental Turnover",
    image: "assets/services/bedroom-linen-refresh.png",
    copy: "Between-guest rental reset with bathrooms, kitchen, floors, bed reset, trash/recycling, light restock notes, and readiness for the next guest.",
    includes: ["Bathroom reset", "Kitchen reset", "Bed reset", "Floors", "Trash and recycling", "Restock notes"],
    pricing: ["rentalTurnover"],
    addons: "rental",
    cardSize: "large",
  },
  "tenant-move-out-rental-cleaning": {
    badge: "Rental Move-Out",
    title: "Tenant Move-Out Rental Cleaning",
    image: "assets/services/kitchen-counter-cleaning.png",
    copy: "Condition-reviewed rental move-out cleaning for landlords and property managers, with appliance and cabinet add-ons quoted as needed.",
    includes: ["Condition review", "Kitchen cleaning", "Bathroom cleaning", "Floors", "Shelves", "Add-on review"],
    pricing: ["tenantRental"],
    addons: "rental",
    cardSize: "large",
  },
  "handyman-light-home-help": {
    badge: "Handyman",
    title: "Handyman / Light Home Help",
    image: "assets/services/shelf-installation.png",
    copy: "Small home-help tasks such as shelf help, light assembly, fixture support, and safe high-reach work.",
    includes: ["Shelf help", "Light assembly", "Fixture support", "Small projects", "Tool review", "Consult quote"],
    pricing: ["handyman"],
    addons: "handyman",
  },
  "apartment-bagged-trash-pickup": {
    badge: "Apartment Trash",
    title: "Apartment Bagged Trash Pickup",
    image: "assets/services/furniture-assembly.png",
    copy: "Apartment bagged household trash moved to onsite bins or approved curb areas. No hazardous waste, loose debris, large furniture, or offsite hauling.",
    includes: ["Bagged trash", "Apartment scope", "Onsite bins", "Curb placement", "Volume review", "No hazardous waste"],
    pricing: ["trashRecycling"],
    addons: "trash",
  },
  "apartment-recycling-pickup": {
    badge: "Recycling",
    title: "Apartment Recycling Pickup",
    image: "assets/services/shelf-detail-dusting.png",
    copy: "Apartment recycling pickup for sorted accepted materials moved to onsite recycling areas under building rules.",
    includes: ["Sorted recycling", "Apartment scope", "Building rules", "Onsite bins", "Accepted materials", "No hazardous waste"],
    pricing: ["trashRecycling"],
    addons: "trash",
  },
  "high-reach-tasks": {
    badge: "Custom",
    title: "High-Reach Tasks",
    image: "assets/services/high-dusting-lighting.png",
    copy: "High dusting, ceiling-level details, lighting-area dust, and ladder-needed tasks reviewed before scheduling.",
    includes: ["High dusting", "Lighting-area detail", "Ceiling-level work", "Ladder review", "Safety scope", "Consult quote"],
    pricing: ["handyman", "deep"],
    addons: "handyman",
  },
};

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

function createServiceCard(slug) {
  const service = servicePages[slug];
  if (!service) {
    return "";
  }

  const sizeClass = service.cardSize === "large" ? " service-photo-card-large" : service.cardSize === "wide" ? " service-photo-card-wide" : "";
  return `
    <a class="service-photo-card${sizeClass} copy-left" href="#service/${slug}">
      <img src="${service.image}" alt="${service.title} service photo" loading="lazy" />
      <div class="service-photo-copy">
        <span>${service.badge}</span>
        <strong>${service.title}</strong>
        <p>${service.copy}</p>
      </div>
    </a>
  `;
}

function renderServiceOverview() {
  if (!serviceCategoryList) {
    return;
  }

  serviceCategoryList.innerHTML = serviceGroups.map((group) => `
    <section class="service-category-block" aria-label="${group.title}">
      <div class="service-category-heading">
        <h4>${group.title}</h4>
        <p>${group.copy}</p>
      </div>
      <div class="service-photo-grid">
        ${group.slugs.map(createServiceCard).join("")}
      </div>
    </section>
  `).join("");
}

function routeTo(screen, options = {}) {
  if (screen === "employee" && !canUseEmployeeWorkspace()) {
    openDialog("Employee workspace requires an approved or invited employee account.");
    screen = activeFirebaseUser ? "customer" : "login";
  }

  const isAppScreen = Boolean(screen);

  if (screen === "booking") {
    updateBookingPage();
  }

  if (screen === "services") {
    renderServiceOverview();
  }

  if (screen === "service-detail") {
    renderServiceDetail(options.slug || currentServiceSlug);
  }

  if (screen === "admin") {
    renderAdminGate();
  }

  if (homeScreen) {
    homeScreen.hidden = isAppScreen;
  }

  if (mobileBookBar) {
    mobileBookBar.hidden = false;
  }

  updateAppNavigation(screen || "home");

  appScreens.forEach((section) => {
    section.hidden = section.dataset.appScreen !== screen;
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function handleHashRoute() {
  const screen = window.location.hash.replace("#", "");

  if (screen.startsWith("service/")) {
    const slug = screen.replace("service/", "");
    routeTo("service-detail", { slug });
    return;
  }

  const knownScreens = ["services", "service-detail", "consultation", "login", "booking", "customer", "employee", "admin"];

  if (knownScreens.includes(screen)) {
    routeTo(screen);
    return;
  }

  routeTo("");
  updateAppNavigation(screen || "home");

  if (screen) {
    requestAnimationFrame(() => {
      document.querySelector(`#${screen}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }
}

function getNavTarget(screen) {
  if (screen === "login" || screen === "customer" || screen === "employee" || screen === "admin") {
    return "account";
  }

  if (screen === "service-detail") {
    return "services";
  }

  if (screen === "top" || !screen) {
    return "home";
  }

  return screen;
}

function updateAppNavigation(screen) {
  const activeTarget = getNavTarget(screen);

  appNavLinks.forEach((link) => {
    const isActive = link.dataset.navTarget === activeTarget;
    link.classList.toggle("is-active", isActive);

    if (link.closest(".mobile-book-bar")) {
      link.setAttribute("aria-current", isActive ? "page" : "false");
    }
  });
}

function createPricingGroup(categoryKey) {
  const category = categoryPricing[categoryKey];
  if (!category) {
    return "";
  }

  const items = category.items.map((item) => `
    <article>
      <span>${item.label}</span>
      <strong>${item.name}</strong>
      <p>${item.copy}</p>
      <b>${item.price}</b>
    </article>
  `).join("");

  return `
    <section class="pricing-group">
      <h3>${category.title}</h3>
      <div class="pricing-table">${items}</div>
    </section>
  `;
}

function createAddOnCard(item) {
  return `
    <article>
      <strong>${item.name}</strong>
      <span>${item.price}</span>
      <p>${item.copy}</p>
    </article>
  `;
}

function renderServiceDetail(slug) {
  const service = servicePages[slug] || servicePages["standard-clean"];
  currentServiceSlug = servicePages[slug] ? slug : "standard-clean";

  if (serviceDetailImage) {
    serviceDetailImage.src = service.image;
    serviceDetailImage.alt = `${service.title} service photo`;
  }

  if (serviceDetailBadge) {
    serviceDetailBadge.textContent = service.badge;
  }

  if (serviceDetailTitle) {
    serviceDetailTitle.textContent = service.title;
  }

  if (serviceDetailCopy) {
    serviceDetailCopy.textContent = service.copy;
  }

  if (serviceDetailIncludes) {
    serviceDetailIncludes.innerHTML = service.includes.map((item) => `<span>${item}</span>`).join("");
  }

  if (serviceDetailPricing) {
    serviceDetailPricing.innerHTML = service.pricing.map(createPricingGroup).join("");
  }

  const addons = addOnItems[service.addons] || [];
  if (serviceDetailAddons) {
    serviceDetailAddons.innerHTML = addons.map(createAddOnCard).join("");
  }

  if (serviceDetailAddonsPanel) {
    serviceDetailAddonsPanel.hidden = addons.length === 0;
  }
}

function applyPublicSettings(settings = siteSettings) {
  siteSettings = { ...siteSettings, ...settings };
  if (publicReviewStrip) {
    publicReviewStrip.hidden = !siteSettings.showReviews;
  }
  if (reviewsToggle) {
    reviewsToggle.checked = Boolean(siteSettings.showReviews);
  }
  if (reviewsToggleTitle) {
    reviewsToggleTitle.textContent = siteSettings.showReviews ? "Reviews visible" : "Reviews hidden";
  }
  if (adminReviewState) {
    adminReviewState.textContent = siteSettings.showReviews ? "Visible" : "Hidden";
  }
}

function isApprovedAdmin() {
  return activeFirebaseUser?.role === "admin" && activeFirebaseUser?.roleStatus === "active";
}

function canUseEmployeeWorkspace() {
  return isApprovedAdmin() || (activeFirebaseUser?.role === "employee" && ["active", "invited"].includes(activeFirebaseUser?.roleStatus));
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
    "recurring-cleaning": "Recurring Cleaning",
    "deep-clean": "Deep Clean",
    "move-in-out": "Move-In / Move-Out",
    "rental-turnover": "Rental Turnover",
    "tenant-move-out": "Tenant Move-Out Rental Cleaning",
    "packing-organizing": "Packing / Organizing Help",
    "trash-recycling": "Apartment Trash / Recycling Pickup",
    "light-home-help": "Light Home Help",
    "commercial-project": "Commercial / Event / Project Cleaning",
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

async function callFirebaseAuth(action, email, password) {
  if (!firebaseConfig.apiKey) {
    throw new Error("Firebase config is missing");
  }

  const endpoint = action === "signup" ? "signUp" : "signInWithPassword";
  const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:${endpoint}?key=${firebaseConfig.apiKey}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email,
      password,
      returnSecureToken: true,
    }),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.error?.message || "Firebase authentication failed");
  }

  return result;
}

async function sendFirebasePasswordSetupEmail(email) {
  if (!firebaseConfig.apiKey) {
    throw new Error("Firebase config is missing");
  }

  const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${firebaseConfig.apiKey}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      requestType: "PASSWORD_RESET",
      email,
    }),
  });
  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.error?.message || "Firebase email invite failed");
  }

  return result;
}

function rememberFirebaseUser(user, role) {
  const safeRole = ["customer", "employee", "admin"].includes(role) ? role : "customer";
  activeFirebaseUser = {
    uid: user.localId,
    email: user.email,
    idToken: user.idToken,
    refreshToken: user.refreshToken,
    role: safeRole,
    roleStatus: safeRole === "customer" ? "active" : "pending",
  };
  activeUserRole = safeRole;
  localStorage.setItem("starsMaidFirebaseUser", JSON.stringify(activeFirebaseUser));
}

async function saveFirebaseProfile(profile) {
  if (!activeFirebaseUser?.idToken) {
    return null;
  }

  try {
    const response = await fetch("/api/profiles", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${activeFirebaseUser.idToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(profile),
    });

    if (response.ok) {
      return response.json();
    }
  } catch (error) {
    console.warn("Function profile save unavailable, falling back to Firestore REST:", error);
  }

  return saveFirebaseProfileDirect(profile);
}

async function submitFirebaseBooking(booking) {
  const response = await fetch("/api/bookings", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(booking),
  });

  if (!response.ok) {
    throw new Error("Booking submission failed");
  }

  return response.json();
}

async function apiFetch(path, options = {}) {
  const headers = {
    ...(options.headers || {}),
  };

  if (options.body && !headers["Content-Type"]) {
    headers["Content-Type"] = "application/json";
  }

  if (activeFirebaseUser?.idToken) {
    headers.Authorization = `Bearer ${activeFirebaseUser.idToken}`;
  }

  const response = await fetch(path, {
    ...options,
    headers,
    body: typeof options.body === "string" ? options.body : options.body ? JSON.stringify(options.body) : undefined,
  });

  const result = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(result.error || "Request failed");
  }

  return result;
}

function toFirestoreFields(profile) {
  const requestedRole = ["customer", "employee", "admin"].includes(profile.requestedRole) ? profile.requestedRole : "customer";
  return {
    email: { stringValue: (profile.email || activeFirebaseUser?.email || "").toLowerCase() },
    phone: { stringValue: profile.phone || "" },
    address: { stringValue: profile.address || "" },
    city: { stringValue: profile.city || "" },
    state: { stringValue: (profile.state || "").toUpperCase() },
    zip: { stringValue: profile.zip || "" },
    role: { stringValue: "customer" },
    requestedRole: { stringValue: requestedRole },
    roleStatus: { stringValue: requestedRole === "customer" ? "active" : "pending" },
    pendingBookingId: { stringValue: profile.pendingBookingId || "" },
    updatedAt: { stringValue: new Date().toISOString() },
  };
}

function fromFirestoreFields(uid, fields = {}) {
  const readString = (name, fallback = "") => fields[name]?.stringValue || fallback;
  return {
    uid,
    email: readString("email", activeFirebaseUser?.email || ""),
    phone: readString("phone"),
    address: readString("address"),
    city: readString("city"),
    state: readString("state"),
    zip: readString("zip"),
    role: readString("role", "customer"),
    requestedRole: readString("requestedRole", readString("role", "customer")),
    roleStatus: readString("roleStatus", "active"),
    pendingBookingId: readString("pendingBookingId"),
  };
}

async function firestoreRequest(path, options = {}) {
  if (!firebaseConfig.projectId || !activeFirebaseUser?.idToken) {
    throw new Error("Firebase profile storage is not configured");
  }

  const response = await fetch(`https://firestore.googleapis.com/v1/projects/${firebaseConfig.projectId}/databases/(default)/documents/${path}`, {
    ...options,
    headers: {
      "Authorization": `Bearer ${activeFirebaseUser.idToken}`,
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  });
  const result = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(result.error?.message || "Firestore request failed");
  }

  return result;
}

async function saveFirebaseProfileDirect(profile) {
  const uid = activeFirebaseUser?.uid;
  const fields = toFirestoreFields(profile);
  const updateMask = Object.keys(fields).map((field) => `updateMask.fieldPaths=${encodeURIComponent(field)}`).join("&");
  const result = await firestoreRequest(`profiles/${uid}?${updateMask}`, {
    method: "PATCH",
    body: JSON.stringify({ fields }),
  });
  return { id: uid, status: "saved", profile: fromFirestoreFields(uid, result.fields) };
}

async function getFirebaseProfileDirect() {
  const uid = activeFirebaseUser?.uid;
  const result = await firestoreRequest(`profiles/${uid}`);
  return fromFirestoreFields(uid, result.fields);
}

async function loadPublicSettings() {
  try {
    const result = await apiFetch("/api/site-settings");
    applyPublicSettings(result.settings || {});
  } catch (error) {
    applyPublicSettings({ showReviews: false });
  }
}

async function refreshCurrentUser() {
  if (!activeFirebaseUser?.idToken) {
    return null;
  }

  try {
    const result = await apiFetch("/api/me");
    const role = result.profile?.role || activeFirebaseUser.role || "customer";
    const roleStatus = result.profile?.roleStatus || activeFirebaseUser.roleStatus || "active";
    activeFirebaseUser = {
      ...activeFirebaseUser,
      email: result.profile?.email || activeFirebaseUser.email,
      role,
      roleStatus,
      requestedRole: result.profile?.requestedRole || role,
    };
    activeUserRole = role;
    localStorage.setItem("starsMaidFirebaseUser", JSON.stringify(activeFirebaseUser));
    updateAccountMenu();
    return result.profile;
  } catch (error) {
    try {
      const profile = await getFirebaseProfileDirect();
      activeFirebaseUser = {
        ...activeFirebaseUser,
        email: profile.email || activeFirebaseUser.email,
        role: profile.role || "customer",
        roleStatus: profile.roleStatus || "active",
        requestedRole: profile.requestedRole || profile.role || "customer",
      };
      activeUserRole = activeFirebaseUser.role;
      localStorage.setItem("starsMaidFirebaseUser", JSON.stringify(activeFirebaseUser));
      updateAccountMenu();
      return profile;
    } catch (profileError) {
      return null;
    }
  }
}

async function loadAdminDashboard() {
  if (!isApprovedAdmin()) {
    return;
  }

  try {
    adminSnapshot = await apiFetch("/api/admin/dashboard");
    renderAdminDashboard();
  } catch (error) {
    if (reviewsToggleStatus) {
      reviewsToggleStatus.textContent = `Admin tools unavailable: ${error.message}`;
    }
  }
}

async function updateSiteReviews(showReviews) {
  const result = await apiFetch("/api/admin/site-settings", {
    method: "POST",
    body: { showReviews },
  });
  applyPublicSettings(result.settings || { showReviews });
}

async function createEmployeeInvite(payload) {
  return apiFetch("/api/admin/employee-invites", {
    method: "POST",
    body: payload,
  });
}

function setAdminTab(tabName) {
  adminTabButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.adminTab === tabName);
  });

  adminTabPanels.forEach((panel) => {
    const isActive = panel.dataset.adminTabPanel === tabName;
    panel.hidden = !isActive;
    panel.classList.toggle("is-active", isActive);
  });
}

function renderAdminGate() {
  const allowed = isApprovedAdmin();

  if (adminLockedMessage) {
    adminLockedMessage.hidden = allowed;
  }

  if (adminWorkspace) {
    adminWorkspace.hidden = !allowed;
  }

  if (adminRoleBadge) {
    adminRoleBadge.textContent = allowed ? "Admin active" : "Admin required";
  }

  if (allowed) {
    loadAdminDashboard();
  }
}

function renderAdminList(container, items, emptyText, renderer) {
  if (!container) {
    return;
  }

  if (!items || items.length === 0) {
    container.innerHTML = `<p class="empty-state">${emptyText}</p>`;
    return;
  }

  container.innerHTML = items.map(renderer).join("");
}

function renderAdminDashboard() {
  const requests = adminSnapshot?.accessRequests || [];
  const employees = adminSnapshot?.employees || [];
  const bookings = adminSnapshot?.bookings || [];

  if (adminRequestCount) {
    adminRequestCount.textContent = `${requests.length} pending`;
  }

  if (adminEmployeeCount) {
    adminEmployeeCount.textContent = `${employees.length} staff`;
  }

  applyPublicSettings(adminSnapshot?.settings || siteSettings);

  renderAdminList(adminAccessRequests, requests, "No pending access requests.", (request) => `
    <article class="admin-list-item">
      <div>
        <strong>${request.email || "Unknown user"}</strong>
        <span>Requested ${request.requestedRole || "access"} - ${request.roleStatus || "pending"}</span>
      </div>
      <button class="button button-secondary" type="button" data-approve-role="${request.requestedRole || "employee"}" data-approve-uid="${request.uid}">Approve</button>
    </article>
  `);

  renderAdminList(adminEmployeeList, employees, "No employee accounts yet.", (employee) => `
    <article class="admin-list-item">
      <div>
        <strong>${employee.name || employee.email || "Employee"}</strong>
        <span>${employee.email || ""} - ${employee.roleStatus || "active"}</span>
      </div>
    </article>
  `);

  renderAdminList(adminBookingList, bookings, "No booking drafts yet.", (booking) => `
    <article class="admin-list-item">
      <div>
        <strong>${booking.firstName || "Customer"} ${booking.lastName || ""}</strong>
        <span>${booking.serviceType || "Service"} - ZIP ${booking.zip || "pending"} - ${booking.status || "draft"}</span>
      </div>
    </article>
  `);
}

async function approveAccessRequest(uid, role) {
  return apiFetch("/api/admin/approve-role", {
    method: "POST",
    body: { uid, role },
  });
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
    authMode = button.textContent.trim().toLowerCase().includes("up") ? "signup" : "signin";
    if (loginPasswordInput) {
      loginPasswordInput.autocomplete = authMode === "signup" ? "new-password" : "current-password";
    }
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

adminTabButtons.forEach((button) => {
  button.addEventListener("click", () => setAdminTab(button.dataset.adminTab));
});

if (adminAccessRequests) {
  adminAccessRequests.addEventListener("click", async (event) => {
    const button = event.target.closest("[data-approve-uid]");
    if (!button) {
      return;
    }

    try {
      await approveAccessRequest(button.dataset.approveUid, button.dataset.approveRole);
      await loadAdminDashboard();
      openDialog("Access request approved.");
    } catch (error) {
      openDialog(`Admin approval failed: ${error.message}`);
    }
  });
}

if (reviewsToggle) {
  reviewsToggle.addEventListener("change", async () => {
    if (!isApprovedAdmin()) {
      reviewsToggle.checked = Boolean(siteSettings.showReviews);
      openDialog("Only approved admins can change public review visibility.");
      return;
    }

    reviewsToggleStatus.textContent = "Saving review setting...";
    try {
      await updateSiteReviews(reviewsToggle.checked);
      reviewsToggleStatus.textContent = siteSettings.showReviews ? "Reviews are visible on the public site." : "Reviews are hidden from the public site.";
      await loadAdminDashboard();
    } catch (error) {
      reviewsToggle.checked = Boolean(siteSettings.showReviews);
      reviewsToggleStatus.textContent = `Review setting failed: ${error.message}`;
    }
  });
}

if (employeeInviteForm) {
  employeeInviteForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!isApprovedAdmin()) {
      openDialog("Only approved admins can create employee accounts.");
      return;
    }

    employeeInviteStatus.textContent = "Creating employee invite...";
    try {
      const result = await createEmployeeInvite({
        name: employeeNameInput.value,
        email: employeeEmailInput.value,
        phone: employeePhoneInput.value,
        role: employeeRoleSelect.value,
      });
      employeeInviteForm.reset();
      try {
        await sendFirebasePasswordSetupEmail(result.email || employeeEmailInput.value);
        employeeInviteStatus.textContent = "Invite created and Firebase password setup email sent.";
      } catch (emailError) {
        employeeInviteStatus.textContent = `Invite created. Email send needs Firebase Auth email setup: ${emailError.message}`;
      }
      await loadAdminDashboard();
    } catch (error) {
      employeeInviteStatus.textContent = `Invite failed: ${error.message}`;
    }
  });
}

if (profileContactForm) {
  profileContactForm.addEventListener("submit", async (event) => {
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

    try {
      await saveFirebaseProfile(profile);
    } catch (error) {
      console.warn("Firebase profile save failed:", error);
    }

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
  loginForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const selectedRole = loginRoleSelect.value;
    const accessRole = selectedRole === "customer" ? "customer" : "customer";
    const email = loginEmailInput?.value.trim();
    const password = loginPasswordInput?.value;
    const pendingBooking = JSON.parse(localStorage.getItem("starsMaidPendingBooking") || "null");

    if (!email || !password) {
      openDialog("Enter an email and password to continue.");
      return;
    }

    let profileResult = null;

    try {
      const firebaseUser = await callFirebaseAuth(authMode, email, password);
      rememberFirebaseUser(firebaseUser, accessRole);
      updateAccountMenu();
    } catch (error) {
      const readableMessage = error.message.replaceAll("_", " ").toLowerCase();
      openDialog(`Firebase Auth could not continue: ${readableMessage}.`);
      return;
    }

    try {
      profileResult = await saveFirebaseProfile({
        email,
        role: accessRole,
        requestedRole: selectedRole,
        pendingBookingId: pendingBooking?.firebaseBookingId || "",
      });
    } catch (error) {
      console.warn("Firebase profile sync failed:", error);
      openDialog("Firebase sign-in worked. Profile syncing will finish after Cloud Functions are deployed.");
    }

    if (profileResult?.profile) {
      activeFirebaseUser = {
        ...activeFirebaseUser,
        role: profileResult.profile.role || "customer",
        roleStatus: profileResult.profile.roleStatus || "active",
        requestedRole: profileResult.profile.requestedRole || selectedRole,
      };
      activeUserRole = activeFirebaseUser.role;
      localStorage.setItem("starsMaidFirebaseUser", JSON.stringify(activeFirebaseUser));
      updateAccountMenu();
    }

    if (pendingBooking && selectedRole === "customer") {
      updateCustomerAccount(pendingBooking);
    }

    if (selectedRole !== "customer" && !isApprovedAdmin()) {
      openDialog("Your admin or employee access request was saved. A current admin must approve permissions before those tools unlock.");
    }

    const destination = isApprovedAdmin() && selectedRole === "admin" ? "admin" : "customer";
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
      const result = await submitFirebaseBooking(booking);
      booking.firebaseBookingId = result.id;
      if (bookingSubmitStatus) {
        bookingSubmitStatus.textContent = "Consultation request saved.";
      }
    } catch (error) {
      if (bookingSubmitStatus) {
        bookingSubmitStatus.textContent = "Saved locally. Firebase submission needs setup or connection.";
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
    console.log('Service worker controller changed - reloading');
    window.location.reload();
  });
}

// Initialize only hash routing on home page
// Date, estimate, and steps initialized when booking section is accessed
if (activeFirebaseUser?.role) {
  activeUserRole = activeFirebaseUser.role;
  localStorage.setItem("starsMaidFirebaseUser", JSON.stringify(activeFirebaseUser));
  if (loginEmailInput && activeFirebaseUser.email) {
    loginEmailInput.value = activeFirebaseUser.email;
  }
  updateAccountMenu();
  refreshCurrentUser().then(() => {
    if (window.location.hash === "#admin") {
      renderAdminGate();
    }
  });
}

loadPublicSettings();
renderServiceOverview();
handleHashRoute();

window.addEventListener("hashchange", handleHashRoute);
