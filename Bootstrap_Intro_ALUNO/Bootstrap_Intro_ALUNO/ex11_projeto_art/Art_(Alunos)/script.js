// Animação do título Bolsonaro
document.addEventListener("DOMContentLoaded", function () {
    let title = document.querySelector("h1");
    let isBright = false;

    setInterval(() => {
        if (isBright) {
            title.style.textShadow = "0 0 5px #ffdd00, 0 0 10px #ffcc00, 0 0 15px #ffaa00";
        } else {
            title.style.textShadow = "none";
        }
        isBright = !isBright;
    }, 1000);
});

// Animação ao passar o mouse nos links do menu
document.querySelectorAll("#navbar a").forEach(link => {
    link.addEventListener("mouseenter", function () {
        this.style.color = "gold";
        this.style.textShadow = "0 0 10px yellow";
        this.style.transform = "scale(1.1)";
    });

    link.addEventListener("mouseleave", function () {
        this.style.color = "";
        this.style.textShadow = "";
        this.style.transform = "scale(1)";
    });
});

// Efeito pulsante nos botões "Detalhes"
document.querySelectorAll(".btn").forEach(button => {
    let scaleUp = true;

    setInterval(() => {
        if (scaleUp) {
            button.style.transform = "scale(1.1)";
        } else {
            button.style.transform = "scale(1)";
        }
        scaleUp = !scaleUp;
    }, 1500);
});

