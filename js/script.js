/* ==========================================
   MONEXA LANDING PAGE
   script.js
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================
       NAVBAR SCROLL
    ===================================== */

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 60) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    });

    /* =====================================
       FADE UP
    ===================================== */

    const observer = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{

        threshold:.15

    });

    document.querySelectorAll("section,.feature-card,.dashboard-card,.quiz-card,.level-card")
    .forEach(el=>{

        el.classList.add("fade-up");

        observer.observe(el);

    });

    /* =====================================
       QUIZ OPTION
    ===================================== */

    document.querySelectorAll(".option").forEach(button=>{

        button.addEventListener("click",()=>{

            document.querySelectorAll(".option").forEach(b=>{

                b.style.background="#071c29";
                b.style.borderColor="rgba(255,255,255,.05)";

            });

            button.style.background="#0f394d";
            button.style.borderColor="#00d9ff";

        });

    });

    /* =====================================
       RIPPLE BUTTON
    ===================================== */

    document.querySelectorAll(".btn").forEach(btn=>{

        btn.addEventListener("click",function(e){

            const circle=document.createElement("span");

            const diameter=Math.max(this.clientWidth,this.clientHeight);

            const radius=diameter/2;

            circle.style.width=
            circle.style.height=
            `${diameter}px`;

            circle.style.left=
            `${e.clientX-this.getBoundingClientRect().left-radius}px`;

            circle.style.top=
            `${e.clientY-this.getBoundingClientRect().top-radius}px`;

            circle.classList.add("ripple");

            const ripple=this.getElementsByClassName("ripple")[0];

            if(ripple){

                ripple.remove();

            }

            this.appendChild(circle);

        });

    });

    /* =====================================
       PARALLAX HERO
    ===================================== */

    const hero=document.getElementById("hero");

    document.addEventListener("mousemove",(e)=>{

        const x=(e.clientX/window.innerWidth-.5)*20;

        const y=(e.clientY/window.innerHeight-.5)*20;

        hero.style.backgroundPosition=
        `${50+x}% ${50+y}%`;

    });

    /* =====================================
       COUNTER
    ===================================== */

    document.querySelectorAll(".hud h4").forEach(counter=>{

        let target=counter.innerText;

        if(target.includes("%")){

            let value=parseInt(target);

            animate(counter,0,value,"%");

        }

        else if(target.includes("K")){

            let value=parseFloat(target);

            animate(counter,0,value,"K");

        }

        else{

            animate(counter,0,parseInt(target),"");

        }

    });

    function animate(element,start,end,suffix){

        let current=start;

        const step=end/80;

        const timer=setInterval(()=>{

            current+=step;

            if(current>=end){

                current=end;

                clearInterval(timer);

            }

            if(suffix==="K"){

                element.innerText=current.toFixed(1)+"K";

            }

            else if(suffix==="%"){

                element.innerText=Math.floor(current)+"%";

            }

            else{

                element.innerText=Math.floor(current);

            }

        },18);

    }

    /* =====================================
       FLOATING PARTICLES
    ===================================== */

    createParticles();

});

/* =====================================
   PARTICLES
===================================== */

function createParticles(){

    for(let i=0;i<25;i++){

        const dot=document.createElement("div");

        dot.className="particle";

        dot.style.left=Math.random()*100+"vw";

        dot.style.top=Math.random()*100+"vh";

        dot.style.animationDuration=
        (5+Math.random()*8)+"s";

        dot.style.animationDelay=
        (Math.random()*5)+"s";

        document.body.appendChild(dot);

    }

}

/* =====================================
   MOUSE GLOW
===================================== */

const glow=document.createElement("div");

glow.id="mouseGlow";

document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

    glow.style.left=e.clientX+"px";

    glow.style.top=e.clientY+"px";

});

/* =====================================
   SMOOTH SCROLL
===================================== */

document.querySelectorAll("a[href^='#']").forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
        ?.scrollIntoView({

            behavior:"smooth"

        });

    });

});

/* =====================================
   SONAR
===================================== */

setInterval(()=>{

    const sonar=document.querySelector(".sonar-circle");

    if(!sonar) return;

    sonar.animate([

        {

            transform:"scale(1)",
            opacity:1

        },

        {

            transform:"scale(1.06)",
            opacity:.8

        },

        {

            transform:"scale(1)",
            opacity:1

        }

    ],{

        duration:1800

    });

},2000);