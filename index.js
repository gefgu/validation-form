(() => {
  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    let isEmpty = false;
    for (data of formData.entries()) {
      if (data[1].trim() === "") {
        isEmpty = true;
        break;
      }
    }
    if (!isEmpty) {
      alert("Successful Form Submit!");
    }
    document.querySelectorAll("form input").forEach((element) => {
      console.log(element);
      if (element.nodeName === "INPUT") {
        element.focus();
      }
    });
    document.activeElement.blur();
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

  const passwordInput = document.querySelector("#password");
  passwordInput.pattern =
    "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$";
  addValidationBehavior(
    "password",
    "Your password needs: Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"
  );

  const confirmPasswordInput = document.querySelector("#confirm-password");
  const confirmPasswordMessage = document.querySelector(
    "#confirm-password-error"
  );
  confirmPasswordInput.addEventListener("blur", () => {
    if (confirmPasswordInput.value !== passwordInput.value) {
      confirmPasswordInput.classList.add("invalid");
      confirmPasswordMessage.textContent = "Your passwords don't match!";
      confirmPasswordInput.addEventListener("input", () => {
        if (confirmPasswordInput.value === passwordInput.value) {
          confirmPasswordInput.classList.remove("invalid");
          confirmPasswordMessage.textContent = "";
        } else {
          confirmPasswordInput.classList.add("invalid");
          confirmPasswordMessage.textContent = "Your passwords don't match!";
        }
      });
    }
  });
})();
