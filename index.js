(() => {
  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
  });

  const emailInput = document.querySelector("#email");
  emailInput.addEventListener("blur", () => {
    if(!emailInput.checkValidity()) {
      emailInput.classList.add("invalid");
      emailInput.addEventListener("input", () => {
        if(emailInput.checkValidity()) {
          emailInput.classList.remove("invalid");
        } else {
          emailInput.classList.add("invalid");
        }
      });
    }
  })
})();
