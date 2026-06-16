const buttons =
document.querySelectorAll(".plan-card button");

const modal =
document.getElementById("paymentModal");

const paymentForm =
document.getElementById("paymentForm");

const paymentMessage =
document.getElementById("paymentMessage");

const selectedPlanTitle =
document.getElementById("selectedPlanTitle");

/* ARRAY */

const plans = [
    "Free",
    "Standard",
    "Premium",
    "Ultimate"
];

let currentPlanCard = null;

/* LOOP */

buttons.forEach(button => {

    button.addEventListener("click", () => {

        currentPlanCard =
        button.closest(".plan-card");

        const planName =
        currentPlanCard.querySelector("h2").textContent;

        selectedPlanTitle.textContent =
        "Purchase " + planName;

        paymentMessage.textContent = "";

        paymentForm.reset();

        modal.style.display = "flex";
    });

});

/* FUNCTION */

function validatePayment() {

    const fullName =
    document.getElementById("fullName").value.trim();

    const cardNumber =
    document.getElementById("cardNumber").value.trim();

    const expiry =
    document.getElementById("expiry").value.trim();

    const cvv =
    document.getElementById("cvv").value.trim();

    const nameRegex =
    /^[A-Za-z ]+$/;

    const numberRegex =
    /^[0-9]+$/;

    if(!nameRegex.test(fullName)){

        return "Name can only contain letters.";
    }

    if(fullName.length < 3){

        return "Name is too short.";
    }

    if(!numberRegex.test(cardNumber)){

        return "Card number must contain only numbers.";
    }

    if(cardNumber.length !== 16){

    return "Card number must be exactly 16 digits.";
    }

    if(!numberRegex.test(expiry)){

        return "Expiry date must contain numbers only.";
    }

    if(expiry.length !== 4){

        return "Expiry date must be exactly 4 digits.";
    }

    if(!numberRegex.test(cvv)){

        return "CVV must contain numbers only.";
    }

    if(cvv.length !== 3){

        return "CVV must be exactly 3 digits.";
    }

    return "success";
}

paymentForm.addEventListener("submit", (e) => {

    e.preventDefault();

    const result =
    validatePayment();

    if(result !== "success"){

        paymentMessage.style.color =
        "#ff7b7b";

        paymentMessage.textContent =
        result;

        return;
    }

    document
    .querySelectorAll(".plan-card")
    .forEach(card => {

        card.classList.remove(
            "active-plan"
        );

        card.querySelector("button")
        .textContent =
        "Select Plan";
    });

    currentPlanCard.classList.add(
        "active-plan"
    );

    currentPlanCard.querySelector("button")
    .textContent =
    "ACTIVE";

    paymentMessage.style.color =
    "#78ff9a";

    paymentMessage.textContent =
    "Purchase successful!";

    setTimeout(() => {

        modal.style.display = "none";

    }, 1500);
});

modal.addEventListener("click", (e) => {

    if(e.target === modal){

        modal.style.display = "none";
    }

});

document
.getElementById("cardNumber")
.addEventListener("input", function(){

    this.value =
    this.value
    .replace(/[^0-9]/g,"")
    .slice(0,16);

});

document
.getElementById("expiry")
.addEventListener("input", function(){

    this.value =
    this.value.replace(/[^0-9]/g,"")
    .slice(0,4);
});

document
.getElementById("cvv")
.addEventListener("input", function(){

    this.value =
    this.value.replace(/[^0-9]/g,"")
    .slice(0,3);
});

document
.getElementById("fullName")
.addEventListener("input", function(){

    this.value =
    this.value.replace(/[^A-Za-z ]/g,"");
});