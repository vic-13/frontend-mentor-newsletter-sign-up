const subscribeBtn = document.querySelector(".subscribe-button");
const mailInput = document.querySelector("#email");
const dismissBtn = document.querySelector(".dismiss-button");
const newsCard = document.querySelector(".card-contents");
const successCard = document.querySelector(".container");
const error = document.querySelector(".error");
const inputedMail = document.querySelector(".inputed-mail");
const greetingPar = document.querySelector(".greeting-message");

// email validation
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// subscribe button
subscribeBtn.addEventListener("click", () => {
  const email = mailInput.value;

  if (validateEmail(email)) {
    const oldPar = successCard.querySelector(".confirmation-message");
    if (oldPar) oldPar.remove();

    const par = document.createElement("p");
    par.classList.add("confirmation-message");

    par.innerHTML = `A confirmation email has been sent  to <strong>${email}</strong>. Please open it and click the button inside to confirm your subscription.`;

    greetingPar.after(par);

    newsCard.classList.add("hidden");
    successCard.classList.remove("hidden");
    return;
  } else {
    error.classList.remove("hidden");
    mailInput.style.borderColor = "hsl(4, 100%, 67%)";
    mailInput.style.backgroundColor = "hsl(3, 76%, 95%)";
    mailInput.style.color = "hsl(4, 100%, 67%)";
    return;
  }
});

// dismiss button

dismissBtn.addEventListener("click", () => {
  newsCard.classList.remove("hidden");
  successCard.classList.add("hidden");
  mailInput.value = "";
  error.classList.add("hidden");
  mailInput.style.borderColor = "";
  mailInput.style.backgroundColor = "";
  mailInput.style.color = "";
  return;
});
