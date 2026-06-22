/* =====================================
GLAM MIRROR BEAUTY PARLOUR
script.js
===================================== */

/* =====================================
WHATSAPP APPOINTMENT BOOKING
===================================== */

const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {

    bookingForm.addEventListener("submit", function (e) {

        e.preventDefault();

        let name = document.getElementById("name").value;
        let phone = document.getElementById("phone").value;
        let service = document.getElementById("service").value;
        let date = document.getElementById("date").value;
        let time = document.getElementById("time").value;
        let message = document.getElementById("message").value;

        let whatsappMessage =
`🌸 GLAM MIRROR APPOINTMENT BOOKING

👤 Name: ${name}

📞 Phone: ${phone}

💄 Service: ${service}

📅 Date: ${date}

⏰ Time: ${time}

📝 Message:
${message}`;

        let whatsappURL =
        `https://wa.me/919004130508?text=${encodeURIComponent(whatsappMessage)}`;

        window.open(whatsappURL, "_blank");

    });

}

/* =====================================
BRIDAL OFFER COUNTDOWN
===================================== */

const countdown = document.getElementById("countdown");

if (countdown) {

    const offerDate = new Date("December 31, 2026 23:59:59").getTime();

    setInterval(() => {

        const now = new Date().getTime();

        const distance = offerDate - now;

        const days =
            Math.floor(distance / (1000 * 60 * 60 * 24));

        const hours =
            Math.floor(
                (distance % (1000 * 60 * 60 * 24))
                /
                (1000 * 60 * 60)
            );

        const minutes =
            Math.floor(
                (distance % (1000 * 60 * 60))
                /
                (1000 * 60)
            );

        const seconds =
            Math.floor(
                (distance % (1000 * 60))
                /
                1000
            );

        countdown.innerHTML =
            `${days}d ${hours}h ${minutes}m ${seconds}s`;

    }, 1000);

}

/* =====================================
SCROLL ANIMATION
===================================== */

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll(".animate").forEach(el => {

    observer.observe(el);

});

/* =====================================
NUMBER COUNTER ANIMATION
===================================== */

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");

        const current = +counter.innerText;

        const increment = target / 100;

        if (current < target) {

            counter.innerText =
            Math.ceil(current + increment);

            setTimeout(updateCounter, 20);

        } else {

            counter.innerText = target;

        }

    };

    updateCounter();

});

/* =====================================
BEAUTY PACKAGE CALCULATOR
===================================== */

const calculateBtn =
document.getElementById("calculatePackage");

if (calculateBtn) {

    calculateBtn.addEventListener("click", () => {

        let total = 0;

        document
        .querySelectorAll(".package-service:checked")
        .forEach(item => {

            total += Number(item.value);

        });

        let discount = Math.round(total * 0.20);

        let finalPrice = total - discount;

        document.getElementById("packageTotal")
        .innerHTML = "₹" + total;

        document.getElementById("packageDiscount")
        .innerHTML = "₹" + discount;

        document.getElementById("packageFinal")
        .innerHTML = "₹" + finalPrice;

    });

}

/* =====================================
NEON PARTICLES
===================================== */

const canvas =
document.createElement("canvas");

canvas.id = "particles";

document.body.appendChild(canvas);

const ctx =
canvas.getContext("2d");

canvas.style.position = "fixed";
canvas.style.top = "0";
canvas.style.left = "0";
canvas.style.width = "100%";
canvas.style.height = "100%";
canvas.style.pointerEvents = "none";
canvas.style.zIndex = "-1";

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 60; i++) {

    particles.push({

        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,

        radius: Math.random() * 4 + 1,

        speedX:
        (Math.random() - 0.5) * 1,

        speedY:
        (Math.random() - 0.5) * 1

    });

}

function animateParticles() {

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    particles.forEach(p => {

        p.x += p.speedX;
        p.y += p.speedY;

        if (
            p.x < 0 ||
            p.x > canvas.width
        ) p.speedX *= -1;

        if (
            p.y < 0 ||
            p.y > canvas.height
        ) p.speedY *= -1;

        ctx.beginPath();

        ctx.arc(
            p.x,
            p.y,
            p.radius,
            0,
            Math.PI * 2
        );

        ctx.fillStyle =
        "rgba(255,20,147,0.7)";

        ctx.shadowBlur = 15;

        ctx.shadowColor =
        "#ff1493";

        ctx.fill();

    });

    requestAnimationFrame(
        animateParticles
    );

}

animateParticles();

/* =====================================
BACK TO TOP BUTTON
===================================== */

const topBtn =
document.createElement("button");

topBtn.innerHTML =
'<i class="fa-solid fa-arrow-up"></i>';

topBtn.classList.add("topBtn");

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});

/* =====================================
THEME TOGGLE
===================================== */

const themeToggle =
document.getElementById("themeToggle");

if(localStorage.getItem("theme")==="dark"){

    document.body.classList.add("dark");

    if(themeToggle){
        themeToggle.innerHTML =
        '<i class="fa-solid fa-sun"></i>';
    }
}

if(themeToggle){

    themeToggle.addEventListener("click",()=>{

        document.body.classList.toggle("dark");

        if(document.body.classList.contains("dark")){

            localStorage.setItem("theme","dark");

            themeToggle.innerHTML =
            '<i class="fa-solid fa-sun"></i>';

        }else{

            localStorage.setItem("theme","light");

            themeToggle.innerHTML =
            '<i class="fa-solid fa-moon"></i>';
        }

    });

}

/* =====================================
NAVBAR SHADOW ON SCROLL
===================================== */

window.addEventListener("scroll", () => {

    const navbar =
    document.querySelector(".navbar");

    if (!navbar) return;

    if (window.scrollY > 100) {

        navbar.style.boxShadow =
        "0 10px 30px rgba(255,20,147,.25)";

    } else {

        navbar.style.boxShadow =
        "none";

    }

});

/* =====================================
PRELOADER (OPTIONAL)
===================================== */

window.addEventListener("load", () => {

    const loader =
    document.getElementById("loader");

    if (loader) {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 500);

    }

});