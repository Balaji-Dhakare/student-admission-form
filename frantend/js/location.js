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