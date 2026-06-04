const form = document.getElementById("contactForm");
const successMessage =
document.getElementById("successMessage");

form.addEventListener("submit", (e) => {

    e.preventDefault();

    successMessage.textContent =
    "Message sent successfully!";

    form.reset();

    setTimeout(() => {

        successMessage.textContent = "";

    }, 4000);

});