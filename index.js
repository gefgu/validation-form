(() => {
  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
  });

  const emailInput = document.querySelector("#email");
  const emailMessageError = document.querySelector("#email-error");
  emailInput.addEventListener("blur", () => {
    if (!emailInput.checkValidity()) {
      emailInput.classList.add("invalid");
      emailMessageError.textContent = "*Enter a valid email!";
      emailInput.addEventListener("input", () => {
        if (emailInput.checkValidity() && emailInput.value !== "") {
          emailInput.classList.remove("invalid");
          emailMessageError.textContent = "";
        } else {
          emailInput.classList.add("invalid");
          emailMessageError.textContent = "*Enter a valid email!";
        }
      });
    }
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

  const countryInput = document.querySelector("#country");
  countryInput.pattern = "[a-zA-Z]+";
  addValidationBehavior("country", "*Add a valid country!");
})();
