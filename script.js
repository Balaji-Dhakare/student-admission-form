// ======================================================
// COUNTRY AND STATE DATA
// ======================================================

const countries = {

  India: [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal"
  ],

  China: [
    "Anhui",
    "Fujian",
    "Gansu",
    "Guangdong",
    "Guizhou",
    "Hainan",
    "Hebei",
    "Heilongjiang",
    "Henan",
    "Hubei",
    "Hunan",
    "Jiangsu",
    "Jiangxi",
    "Jilin",
    "Liaoning",
    "Qinghai",
    "Shaanxi",
    "Shandong",
    "Shanxi",
    "Sichuan",
    "Yunnan",
    "Zhejiang"
  ],

  Japan: [
    "Hokkaido",
    "Aomori",
    "Iwate",
    "Miyagi",
    "Akita",
    "Yamagata",
    "Fukushima",
    "Ibaraki",
    "Tochigi",
    "Gunma",
    "Saitama",
    "Chiba",
    "Tokyo",
    "Kanagawa",
    "Niigata",
    "Toyama",
    "Ishikawa",
    "Fukui",
    "Yamanashi",
    "Nagano",
    "Gifu",
    "Shizuoka",
    "Aichi",
    "Mie",
    "Shiga",
    "Kyoto",
    "Osaka",
    "Hyogo",
    "Nara",
    "Wakayama"
  ],

  Pakistan: [
    "Punjab",
    "Sindh",
    "Khyber Pakhtunkhwa",
    "Balochistan",
    "Gilgit-Baltistan",
    "Azad Jammu and Kashmir"
  ],

  Bangladesh: [
    "Dhaka",
    "Chattogram",
    "Rajshahi",
    "Khulna",
    "Barisal",
    "Sylhet",
    "Rangpur",
    "Mymensingh"
  ],

  Nepal: [
    "Koshi",
    "Madhesh",
    "Bagmati",
    "Gandaki",
    "Lumbini",
    "Karnali",
    "Sudurpashchim"
  ],

  "Sri Lanka": [
    "Central",
    "Eastern",
    "Northern",
    "North Central",
    "North Western",
    "Sabaragamuwa",
    "Southern",
    "Uva",
    "Western"
  ],

  Bhutan: [
    "Bumthang",
    "Chukha",
    "Dagana",
    "Gasa",
    "Haa",
    "Lhuntse",
    "Mongar",
    "Paro",
    "Pemagatshel",
    "Punakha",
    "Samdrup Jongkhar",
    "Samtse",
    "Sarpang",
    "Thimphu",
    "Trashigang",
    "Trashiyangtse",
    "Trongsa",
    "Tsirang",
    "Wangdue Phodrang",
    "Zhemgang"
  ],

  Myanmar: [
    "Kachin",
    "Kayah",
    "Kayin",
    "Chin",
    "Mon",
    "Rakhine",
    "Shan",
    "Sagaing",
    "Tanintharyi",
    "Bago",
    "Magway",
    "Mandalay",
    "Yangon",
    "Ayeyarwady"
  ],

  Thailand: [
    "Bangkok",
    "Chiang Mai",
    "Chiang Rai",
    "Phuket",
    "Chon Buri",
    "Krabi",
    "Pattaya",
    "Ayutthaya"
  ],

  Vietnam: [
    "Hanoi",
    "Ho Chi Minh City",
    "Da Nang",
    "Hai Phong",
    "Can Tho",
    "Quang Ninh",
    "Thanh Hoa",
    "Nghe An"
  ],

  Indonesia: [
    "Aceh",
    "Bali",
    "Banten",
    "Bengkulu",
    "Central Java",
    "Central Kalimantan",
    "Central Sulawesi",
    "East Java",
    "East Kalimantan",
    "East Nusa Tenggara",
    "Gorontalo",
    "Jakarta",
    "Jambi",
    "Lampung",
    "Maluku",
    "North Kalimantan",
    "North Maluku",
    "North Sulawesi",
    "North Sumatra",
    "Papua",
    "Riau",
    "Riau Islands",
    "South Kalimantan",
    "South Sulawesi",
    "South Sumatra",
    "West Java",
    "West Kalimantan",
    "West Nusa Tenggara",
    "West Papua",
    "West Sulawesi",
    "West Sumatra"
  ],

  Philippines: [
    "Abra",
    "Agusan del Norte",
    "Agusan del Sur",
    "Aklan",
    "Albay",
    "Antique",
    "Apayao",
    "Aurora",
    "Bataan",
    "Batangas",
    "Benguet",
    "Bohol",
    "Bulacan",
    "Cavite",
    "Cebu",
    "Davao del Sur",
    "Ilocos Norte",
    "Ilocos Sur",
    "Laguna",
    "Leyte",
    "Pampanga",
    "Pangasinan",
    "Quezon",
    "Rizal",
    "Palawan"
  ],

  Malaysia: [
    "Johor",
    "Kedah",
    "Kelantan",
    "Malacca",
    "Negeri Sembilan",
    "Pahang",
    "Penang",
    "Perak",
    "Perlis",
    "Sabah",
    "Sarawak",
    "Selangor",
    "Terengganu"
  ],

  "South Korea": [
    "Seoul",
    "Busan",
    "Daegu",
    "Incheon",
    "Gwangju",
    "Daejeon",
    "Ulsan",
    "Gyeonggi",
    "Gangwon",
    "North Chungcheong",
    "South Chungcheong",
    "North Jeolla",
    "South Jeolla",
    "North Gyeongsang",
    "South Gyeongsang",
    "Jeju"
  ]

};


// ======================================================
// GET HTML ELEMENTS
// ======================================================

const country = document.getElementById("country");
const state = document.getElementById("state");

const form = document.getElementById("admissionForm");

const firstName = document.getElementById("firstName");
const middleName = document.getElementById("middleName");
const lastName = document.getElementById("lastName");

const dob = document.getElementById("dob");
const gender = document.getElementById("gender");
const email = document.getElementById("email");

const phone = document.getElementById("phone");
const guardianPhone = document.getElementById("guardianPhone");

const studentClass = document.getElementById("class");
const division = document.getElementById("division");
const batch = document.getElementById("batch");

const zip = document.getElementById("zip");


// ======================================================
// SET MAXIMUM DOB TO TODAY
// ======================================================

const today = new Date()
  .toISOString()
  .split("T")[0];

dob.max = today;


// ======================================================
// COUNTRY DROPDOWN
// ======================================================

Object.keys(countries).forEach(function (countryName) {

  const option = document.createElement("option");

  option.value = countryName;
  option.textContent = countryName;

  country.appendChild(option);

});


// ======================================================
// STATE DROPDOWN
// ======================================================

country.addEventListener("change", function () {

  const selectedCountry = country.value;

  state.innerHTML =
    '<option value="" disabled selected>-- Select a State --</option>';

  state.disabled = true;

  if (selectedCountry && countries[selectedCountry]) {

    countries[selectedCountry].forEach(function (stateName) {

      const option = document.createElement("option");

      option.value = stateName;
      option.textContent = stateName;

      state.appendChild(option);

    });

    state.disabled = false;

  }

});


// ======================================================
// VALIDATION HELPERS
// ======================================================

function showError(input, message) {

  input.classList.add("is-invalid");
  input.classList.remove("is-valid");

  const feedback =
    input.parentElement.querySelector(".invalid-feedback");

  if (feedback) {
    feedback.textContent = message;
  }

}


function showSuccess(input) {

  input.classList.remove("is-invalid");
  input.classList.add("is-valid");

}


function clearValidation(input) {

  input.classList.remove(
    "is-invalid",
    "is-valid"
  );

}


// ======================================================
// NAME VALIDATION
// ======================================================

function validateName(input, fieldName) {

  const value = input.value.trim();

  const namePattern =
    /^[A-Za-z]+(?: [A-Za-z]+)*$/;


  if (value === "") {

    showError(
      input,
      `${fieldName} is required.`
    );

    return false;

  }


  if (value.length < 2) {

    showError(
      input,
      `${fieldName} must contain at least 2 characters.`
    );

    return false;

  }


  if (!namePattern.test(value)) {

    showError(
      input,
      `${fieldName} should contain letters only.`
    );

    return false;

  }


  showSuccess(input);

  return true;

}


// ======================================================
// EMAIL VALIDATION
// ======================================================

function validateEmail() {

  const value = email.value.trim();

  const emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


  if (value === "") {

    showError(
      email,
      "Email is required."
    );

    return false;

  }


  if (!emailPattern.test(value)) {

    showError(
      email,
      "Please enter a valid email address."
    );

    return false;

  }


  showSuccess(email);

  return true;

}


// ======================================================
// PHONE VALIDATION
// ======================================================

function validatePhone(input, required = false) {

  const value = input.value.trim();

  const phonePattern =
    /^[6-9][0-9]{9}$/;


  // Optional field left empty
  if (value === "" && !required) {

    clearValidation(input);

    return true;

  }


  // Required field left empty
  if (value === "") {

    showError(
      input,
      "Mobile number is required."
    );

    return false;

  }


  if (!phonePattern.test(value)) {

    showError(
      input,
      "Enter a valid 10-digit mobile number."
    );

    return false;

  }


  showSuccess(input);

  return true;

}


// ======================================================
// DOB VALIDATION
// ======================================================

function validateDOB() {

  const value = dob.value;


  if (value === "") {

    showError(
      dob,
      "Date of birth is required."
    );

    return false;

  }


  const selectedDate = new Date(value);

  const currentDate = new Date();

  currentDate.setHours(0, 0, 0, 0);


  if (selectedDate > currentDate) {

    showError(
      dob,
      "Date of birth cannot be in the future."
    );

    return false;

  }


  showSuccess(dob);

  return true;

}


// ======================================================
// SELECT VALIDATION
// ======================================================

function validateSelect(input, fieldName) {

  if (input.value === "") {

    showError(
      input,
      `${fieldName} is required.`
    );

    return false;

  }


  showSuccess(input);

  return true;

}


// ======================================================
// ZIP VALIDATION
// ======================================================

function validateZip() {

  const value = zip.value.trim();


  // Optional field
  if (value === "") {

    clearValidation(zip);

    return true;

  }


  const zipPattern =
    /^[0-9]{6}$/;


  if (!zipPattern.test(value)) {

    showError(
      zip,
      "PIN code must contain exactly 6 digits."
    );

    return false;

  }


  showSuccess(zip);

  return true;

}


// ======================================================
// FORM SUBMISSION
// ======================================================

form.addEventListener("submit", function (event) {

  event.preventDefault();

  let isValid = true;


  // ====================================================
  // NAME VALIDATION
  // ====================================================

  if (!validateName(firstName, "First name")) {
    isValid = false;
  }


  if (middleName.value.trim() !== "") {

    if (!validateName(middleName, "Middle name")) {
      isValid = false;
    }

  }


  if (!validateName(lastName, "Last name")) {
    isValid = false;
  }


  // ====================================================
  // DOB
  // ====================================================

  if (!validateDOB()) {
    isValid = false;
  }


  // ====================================================
  // GENDER
  // ====================================================

  if (!validateSelect(gender, "Gender")) {
    isValid = false;
  }


  // ====================================================
  // EMAIL
  // ====================================================

  if (!validateEmail()) {
    isValid = false;
  }


  // ====================================================
  // PHONE
  // ====================================================

  if (!validatePhone(phone, true)) {
    isValid = false;
  }


  if (!validatePhone(guardianPhone, false)) {
    isValid = false;
  }


  // ====================================================
  // ACADEMIC DETAILS
  // ====================================================

  if (!validateSelect(studentClass, "Class")) {
    isValid = false;
  }


  if (!validateSelect(division, "Division")) {
    isValid = false;
  }


  if (!validateSelect(batch, "Preferred batch")) {
    isValid = false;
  }


  // ====================================================
  // LOCATION
  // ====================================================

  if (!validateSelect(country, "Country")) {
    isValid = false;
  }


  if (!validateSelect(state, "State")) {
    isValid = false;
  }


  // ====================================================
  // ZIP
  // ====================================================

  if (!validateZip()) {
    isValid = false;
  }


  // ====================================================
  // SUCCESS
  // ====================================================

  if (isValid) {

    alert(
      "Student admission form submitted successfully!"
    );

    form.reset();


    // Reset state dropdown
    state.innerHTML =
      '<option value="" disabled selected>-- Select a State --</option>';

    state.disabled = true;


    // Remove validation styles
    const inputs =
      form.querySelectorAll(
        ".is-valid, .is-invalid"
      );


    inputs.forEach(function (input) {

      input.classList.remove(
        "is-valid",
        "is-invalid"
      );

    });

  }


  // ====================================================
  // ERROR
  // ====================================================

  else {

    const firstError =
      form.querySelector(".is-invalid");


    if (firstError) {

      firstError.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });

      firstError.focus();

    }

  }

});