document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Messaggio inviato! (simulazione)");
});

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

document.querySelector("#formContatti").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Grazie! Il tuo messaggio è stato inviato (simulazione).");
});
