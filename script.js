// ===============================
// EL ZOZE PORTFOLIO
// Main JavaScript
// ===============================


// ===============================
// Loader
// ===============================

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    setTimeout(() => {

        if (loader) {
            loader.style.display = "none";
        }

    }, 2500);

});


// ===============================
// Theme
// ===============================

const themeBtn = document.getElementById("themeBtn");

let lightMode = false;

if (themeBtn) {

    themeBtn.addEventListener("click", () => {

        lightMode = !lightMode;

        if (lightMode) {

            document.body.classList.add("light-mode");

            themeBtn.textContent = "🌙";

        } else {

            document.body.classList.remove("light-mode");

            themeBtn.textContent = "☀️";

        }

    });

}


// ===============================
// Scroll Reveal
// ===============================

const sections =
    document.querySelectorAll(".section");

sections.forEach(section => {

    section.style.opacity = "0";

    section.style.transform =
        "translateY(40px)";

    section.style.transition =
        "opacity 0.8s ease, transform 0.8s ease";

});


function revealSections() {

    const windowHeight =
        window.innerHeight;

    sections.forEach(section => {

        const sectionTop =
            section.getBoundingClientRect().top;

        if (sectionTop <
            windowHeight - 100) {

            section.style.opacity = "1";

            section.style.transform =
                "translateY(0)";

        }

    });

}


window.addEventListener(
    "scroll",
    revealSections
);

revealSections();


// ===============================
// Smooth Navigation
// ===============================

document.querySelectorAll(
    'a[href^="#"]'
).forEach(link => {

    link.addEventListener("click", event => {

        const targetId =
            link.getAttribute("href");

        const target =
            document.querySelector(targetId);

        if (!target) return;

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});


// ===============================
// Project Buttons
// ===============================

const projectButtons =
    document.querySelectorAll(
        ".project-card button"
    );


projectButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            alert(
                "🚀 سيتم إضافة رابط المشروع الحقيقي قريبًا!"
            );

        }
    );

});


// ===============================
// Contact Form
// ===============================

const contactForm =
    document.getElementById(
        "contactForm"
    );


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        event => {

            event.preventDefault();

            const name =
                document.getElementById(
                    "name"
                ).value.trim();

            const email =
                document.getElementById(
                    "email"
                ).value.trim();

            const subject =
                document.getElementById(
                    "subject"
                ).value.trim();

            const message =
                document.getElementById(
                    "message"
                ).value.trim();


            if (
                !name ||
                !email ||
                !subject ||
                !message
            ) {

                alert(
                    "⚠️ من فضلك املأ جميع البيانات."
                );

                return;

            }


            alert(
                `✅ شكرًا ${name}!\n\nتم تجهيز رسالتك بنجاح.\n\nالموضوع: ${subject}`
            );


            contactForm.reset();

        }
    );

}


// ===============================
// Mouse Glow
// ===============================

document.addEventListener(
    "mousemove",
    event => {

        document.documentElement.style
            .setProperty(
                "--mouse-x",
                `${event.clientX}px`
            );

        document.documentElement.style
            .setProperty(
                "--mouse-y",
                `${event.clientY}px`
            );

    }
);


// ===============================
// Skill Animation
// ===============================

const skillBars =
    document.querySelectorAll(
        ".progress span"
    );


let skillsAnimated = false;


function animateSkills() {

    const skillsSection =
        document.getElementById(
            "skills"
        );

    if (!skillsSection) return;

    const position =
        skillsSection.getBoundingClientRect();

    if (
        position.top <
        window.innerHeight - 100 &&
        !skillsAnimated
    ) {

        skillsAnimated = true;

        skillBars.forEach(bar => {

            const finalWidth =
                bar.style.width;

            bar.style.width = "0";

            setTimeout(() => {

                bar.style.transition =
                    "width 1.5s ease";

                bar.style.width =
                    finalWidth;

            }, 100);

        });

    }

}


window.addEventListener(
    "scroll",
    animateSkills
);

animateSkills();


// ===============================
// Console Message
// ===============================

console.log(
    "🚀 EL ZOZE Portfolio Loaded Successfully!"
);