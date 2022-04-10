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
})();
