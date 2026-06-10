const buttons = document.querySelectorAll(".plan-card button");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        alert("Plan selected successfully!");

    });

});