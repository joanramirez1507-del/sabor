const menuBtn = document.getElementById("menuBtn");
const navbar = document.querySelector(".navbar");

menuBtn.onclick = () => {
    navbar.classList.toggle("active");
};

document.querySelectorAll(".navbar a").forEach(a => {
    a.onclick = () => navbar.classList.remove("active");
});

const botones = document.querySelectorAll(".add-cart");
const mensaje = document.getElementById("cartMessage");

botones.forEach(boton => {
    boton.onclick = () => {
        mensaje.style.display = "block";

        setTimeout(() => {
            mensaje.style.display = "none";
        }, 2000);
    };
});

document.getElementById("contactForm").onsubmit = e => {
    e.preventDefault();
    alert("¡Gracias por contactarnos!");
    e.target.reset();
};