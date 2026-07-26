/*==========================================
    ENAFOL
    app.js
==========================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*==============================
        ELEMENTOS
    ==============================*/

    const header = document.getElementById("header");
    const btnMenu = document.getElementById("btnMenu");
    const menu = document.getElementById("menu");
    const btnTop = document.getElementById("btnTop");
    const menuLinks = document.querySelectorAll("#menu a");

    /*==============================
        MENU MOVIL
    ==============================*/

    if (btnMenu && menu) {

        btnMenu.addEventListener("click", () => {

            menu.classList.toggle("active");

        });

        menuLinks.forEach(link => {

            link.addEventListener("click", () => {

                menu.classList.remove("active");

            });

        });

    }

    /*==============================
        HEADER SCROLL
    ==============================*/

    window.addEventListener("scroll", () => {

        if (window.scrollY > 80) {

            header.style.background = "#003049";
            header.style.boxShadow = "0 5px 20px rgba(0,0,0,.20)";

        } else {

            header.style.background = "rgba(0,0,0,.25)";
            header.style.boxShadow = "none";

        }

    });

    /*==============================
        BOTON VOLVER ARRIBA
    ==============================*/

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            btnTop.classList.add("show");

        } else {

            btnTop.classList.remove("show");

        }

    });

    btnTop.addEventListener("click", () => {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    });

    /*==============================
        ANIMACIONES
    ==============================*/

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    }, {

        threshold: 0.15

    });

    document.querySelectorAll(
        ".about-card, .service-card, .gallery-item, .video-card, .social-card"
    ).forEach(item => {

        item.classList.add("hidden");

        observer.observe(item);

    });

    /*==============================
        LIGHTBOX GALERIA
    ==============================*/

    const galleryImages = document.querySelectorAll(".gallery-item img");

    const lightbox = document.createElement("div");

    lightbox.id = "lightbox";

    lightbox.innerHTML = "<img>";

    document.body.appendChild(lightbox);

    const lightboxImg = lightbox.querySelector("img");

    galleryImages.forEach(img => {

        img.addEventListener("click", () => {

            lightbox.classList.add("active");

            lightboxImg.src = img.src;

            lightboxImg.alt = img.alt;

        });

    });

    lightbox.addEventListener("click", () => {

        lightbox.classList.remove("active");

    });

});
/*==========================================
    ANIMACIONES
==========================================*/

.hidden{

    opacity:0;

    transform:translateY(40px);

    transition:.8s;

}

.visible{

    opacity:1;

    transform:translateY(0);

}

/*==========================================
    LIGHTBOX
==========================================*/

#lightbox{

    position:fixed;

    inset:0;

    background:rgba(0,0,0,.92);

    display:flex;

    justify-content:center;

    align-items:center;

    opacity:0;

    visibility:hidden;

    transition:.35s;

    z-index:9999;

    cursor:pointer;

    padding:20px;

}

#lightbox.active{

    opacity:1;

    visibility:visible;

}

#lightbox img{

    max-width:90%;

    max-height:90%;

    border-radius:10px;

    box-shadow:0 15px 40px rgba(0,0,0,.50);

}