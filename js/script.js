/* ==========================================
   MONEXA LANDING PAGE - INTEGRATED SCRIPT
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* --- 1. NAVBAR SCROLL EFFECT --- */
    const navbar = document.querySelector(".navbar");
    if (navbar) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 60) {
                navbar.classList.add("scrolled");
            } else {
                navbar.classList.remove("scrolled");
            }
        });
    }

    /* --- 2. INTERSECTION OBSERVER (FADE UP ANIMATION) --- */
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll("section, .feature-card, .dashboard-card, .quiz-card, .level-card")
        .forEach(el => {
            el.classList.add("fade-up");
            observer.observe(el);
        });

    /* --- 3. QUIZ OPTION SELECTOR --- */
    const options = document.querySelectorAll(".option");
    options.forEach(button => {
        button.addEventListener("click", () => {
            options.forEach(b => {
                b.style.background = "#071c29";
                b.style.borderColor = "rgba(255,255,255,.05)";
            });
            button.style.background = "#0f394d";
            button.style.borderColor = "#00d9ff";
        });
    });

    /* --- 4. RIPPLE BUTTON EFFECT --- */
    document.querySelectorAll(".btn").forEach(btn => {
        btn.addEventListener("click", function (e) {
            const circle = document.createElement("span");
            const diameter = Math.max(this.clientWidth, this.clientHeight);
            const radius = diameter / 2;

            circle.style.width = circle.style.height = `${diameter}px`;
            circle.style.left = `${e.clientX - this.getBoundingClientRect().left - radius}px`;
            circle.style.top = `${e.clientY - this.getBoundingClientRect().top - radius}px`;
            circle.classList.add("ripple");

            const oldRipple = this.querySelector(".ripple");
            if (oldRipple) oldRipple.remove();

            this.appendChild(circle);
        });
    });

    /* --- 5. PARALLAX HERO BACKGROUND --- */
    const hero = document.getElementById("hero");
    if (hero) {
        document.addEventListener("mousemove", (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 20;
            const y = (e.clientY / window.innerHeight - 0.5) * 20;
            hero.style.backgroundPosition = `${50 + x}% ${50 + y}%`;
        });
    }

    /* --- 6. HUD DASHBOARD COUNTER ANIMATION --- */
    document.querySelectorAll(".hud h4").forEach(counter => {
        const targetText = counter.innerText;
        let suffix = "";
        let value = parseFloat(targetText);

        if (targetText.includes("%")) suffix = "%";
        if (targetText.includes("K")) suffix = "K";

        animateCounter(counter, 0, value, suffix);
    });

    function animateCounter(element, start, end, suffix) {
        let current = start;
        const step = end / 80;
        const timer = setInterval(() => {
            current += step;
            if (current >= end) {
                current = end;
                clearInterval(timer);
            }

            if (suffix === "K") {
                element.innerText = current.toFixed(1) + "K";
            } else if (suffix === "%") {
                element.innerText = Math.floor(current) + "%";
            } else {
                element.innerText = Math.floor(current);
            }
        }, 18);
    }

    /* --- 7. BACKGROUND PARTICLES GENERATOR --- */
    createParticles();

    /* --- 8. SMOOTH SCROLL FOR ANCHORS --- */
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href"))?.scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    /* --- 9. SONAR RADAR BEAT ANIMATION --- */
    const sonar = document.querySelector(".sonar-circle");
    if (sonar) {
        setInterval(() => {
            sonar.animate([
                { transform: "scale(1)", opacity: 1 },
                { transform: "scale(1.06)", opacity: 0.8 },
                { transform: "scale(1)", opacity: 1 }
            ], { duration: 1800 });
        }, 2000);
    }

    /* --- 10. SCREEN INITIAL FADE IN --- */
    const centerContent = document.querySelector('.my-auto');
    if (centerContent) {
        centerContent.style.opacity = '0';
        centerContent.style.transition = 'opacity 1.2s ease-in-out';
        setTimeout(() => { centerContent.style.opacity = '1'; }, 200);
    }

    /* --- 11. LUMO AI SPEECH TYPING EFFECT --- */
    const titleText = "Halo User, aku Lumo!, penjaga gerbang The Shallow.";
    const descText = "Selamat datang di level 1. Aku akan memandumu dalam perjalanan kali ini.";
    const titleContainer = document.getElementById('typingTitle');
    const descContainer = document.getElementById('typingDesc');
    
    let titleIndex = 0;
    let descIndex = 0;
    const typingSpeed = 40;

    function typeTitle() {
        if (titleContainer && titleIndex < titleText.length) {
            titleContainer.classList.add('typing-cursor');
            titleContainer.innerHTML += titleText.charAt(titleIndex);
            titleIndex++;
            setTimeout(typeTitle, typingSpeed);
        } else if (titleContainer) {
            titleContainer.classList.remove('typing-cursor');
            setTimeout(typeDescription, 300);
        }
    }

    function typeDescription() {
        if (descContainer && descIndex < descText.length) {
            descContainer.classList.add('typing-cursor');
            descContainer.innerHTML += descText.charAt(descIndex);
            descIndex++;
            setTimeout(typeDescription, typingSpeed - 15);
        } else if (descContainer) {
            descContainer.classList.remove('typing-cursor');
        }
    }

    // Trigger ketikan jika elemennya eksis di halaman
    if (titleContainer || descContainer) {
        setTimeout(typeTitle, 500);
    }

    /* --- 12. ACTION CONTINUE BUTTON --- */
    const btnContinue = document.getElementById('btnContinue');
    if (btnContinue) {
        btnContinue.addEventListener('click', function () {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
                alert("Misi dimulai! Melanjutkan ke materi Zone 1...");
                // window.location.href = "materi-selanjutnya.html"; 
            }, 100);
        });
    }
});

/* ==========================================
   GLOBAL MOUSE & PARTICLE GENERATORS
========================================== */

// Generator Partikel Laut
function createParticles() {
    for (let i = 0; i < 25; i++) {
        const dot = document.createElement("div");
        dot.className = "particle";
        dot.style.left = Math.random() * 100 + "vw";
        dot.style.top = Math.random() * 100 + "vh";
        dot.style.animationDuration = (5 + Math.random() * 8) + "s";
        dot.style.animationDelay = (Math.random() * 5) + "s";
        document.body.appendChild(dot);
    }
}

// Mouse Glowing Aura
const glow = document.createElement("div");
glow.id = "mouseGlow";
document.body.appendChild(glow);

document.addEventListener("mousemove", (e) => {
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
});