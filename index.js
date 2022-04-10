(() => {
  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
  });

  const addValidationBehavior = (inputID, validationMessage) => {
    const inputField = document.querySelector(`#${inputID}`);
    const inputMessageError = document.querySelector(`#${inputID}-error`);
    inputField.addEventListener("blur", () => {
      if (!inputField.checkValidity() || inputField.value === "") {
        inputField.classList.add("invalid");
        inputMessageError.textContent = validationMessage;
        inputField.addEventListener("input", () => {
          if (inputField.checkValidity() && inputField.value !== "") {
            inputField.classList.remove("invalid");
            inputMessageError.textContent = "";
          } else {
            inputField.classList.add("invalid");
            inputMessageError.textContent = validationMessage;
          }
        });
      }
    });
  };

  addValidationBehavior("email", "*Add a valid email!");

  const countryInput = document.querySelector("#country");
  countryInput.pattern = "[a-zA-Z]+";
  addValidationBehavior("country", "*Add a valid country!");

  const zipInput = document.querySelector("#zip");
  zipInput.pattern = "^[0-9]{5}(:?-?[0-9]{4})$";
  addValidationBehavior("zip", "*Add a valid zip code!");
})();
