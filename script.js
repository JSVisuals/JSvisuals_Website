
/* =====================================================
   JSVISUALS
   MAIN JAVASCRIPT
===================================================== */


/* =====================================================
   CENTRAL BUSINESS CONFIGURATION

   CHANGE YOUR BUSINESS DETAILS HERE
===================================================== */

const businessData = {

    name: "JSVisuals",

    category: "Creative Digital Services",

    tagline: "Imagine. Create. Inspire.",

    secondaryTagline:
        "Your Ideas. Our Visual Magic.",


    /* PHONE */

    phone:
        "6301865012",


    /* WHATSAPP */

    whatsappNumber:
        "916301865012",


    /* EMAIL */

    email:
        "jsvisuals4u@gmail.com",


    /* INSTAGRAM */

    instagramUsername:
        "jsvisuals4u",

    instagramUrl:
        "https://instagram.com/jsvisuals4u",


    /* OPTIONAL SOCIAL LINKS */

    facebookUrl:
        "",

    youtubeUrl:
        "",


    /* OPTIONAL LOCATION */

    address:
        "",

    mapUrl:
        ""

};


/* =====================================================
   SERVICE DATA

   EDIT SERVICES HERE
===================================================== */

const services = [

    {

        number: "01",

        title: "Websites",

        slug: "websites",

        description:
            "Modern, responsive websites designed to help businesses build credibility and attract customers.",

        icon:
            "fa-solid fa-globe",

        items: [

            "Business Websites",

            "Landing Pages",

            "Portfolio Websites",

            "Responsive Design",

            "Custom Website Experiences"

        ],

        cta:
            "GET A WEBSITE"

    },


    {

        number: "02",

        title: "Invitations",

        slug: "invitations",

        description:
            "Beautiful digital invitations designed for memorable celebrations and special occasions.",

        icon:
            "fa-regular fa-envelope",

        items: [

            "Wedding Invitations",

            "Birthday Invitations",

            "Event Invitations",

            "Animated Invitations",

            "Digital Invitation Websites"

        ],

        cta:
            "CREATE AN INVITATION"

    },


    {

        number: "03",

        title: "Promotional Ads",

        slug: "promotional-ads",

        description:
            "Eye-catching promotional creatives designed to help businesses showcase their products and services.",

        icon:
            "fa-solid fa-bullhorn",

        items: [

            "Social Media Ads",

            "Promotional Posters",

            "Business Creatives",

            "Video Ads",

            "Campaign Visuals"

        ],

        cta:
            "PROMOTE MY BUSINESS"

    },


    {

        number: "04",

        title: "Property Photo-to-Video",

        slug: "property-photo-to-video",

        description:
            "Transform property photographs into engaging visual videos suitable for real-estate promotion and social media.",

        icon:
            "fa-solid fa-house",

        items: [

            "Property Photo-to-Video",

            "Real Estate Videos",

            "Property Walkthroughs",

            "Promotional Property Reels",

            "Social Media Property Content"

        ],

        cta:
            "SHOWCASE MY PROPERTY"

    },


    {

        number: "05",

        title: "Logo Animation",

        slug: "logo-animation",

        description:
            "Turn your logo into a professional animated brand introduction that makes your business more memorable.",

        icon:
            "fa-solid fa-wand-magic-sparkles",

        items: [

            "Logo Reveal",

            "3D Logo Animation",

            "Brand Intro Videos",

            "Motion Logo",

            "Custom Animation"

        ],

        cta:
            "ANIMATE MY LOGO"

    }

];


/* =====================================================
   PORTFOLIO DATA

   REPLACE IMAGE PATHS WITH YOUR OWN
===================================================== */

const portfolioItems = [

    {

        title:
            "Modern Business Website",

        category:
            "websites",

        categoryName:
            "Websites",

        image:
            "website.png"

    },


    {

        title:
            "Elegant Wedding Invitation",

        category:
            "invitations",

        categoryName:
            "Invitations",

        image:
            "wedding.png"

    },


    {

        title:
            "Birthday Digital Invitation",

        category:
            "invitations",

        categoryName:
            "Invitations",

        image:
            "birthday.png"

    },


    {

        title:
            "Business Promotional Creative",

        category:
            "ads",

        categoryName:
            "Promotional Ads",

        image:
            "promotional.jpeg"

    },


    {

        title:
            "Luxury Property Visual",

        category:
            "property",

        categoryName:
            "Property Videos",

        image:
            "property.jpeg"

    },


    {

        title:
            "Professional Logo Reveal",

        category:
            "logo",

        categoryName:
            "Logo Animation",

        image:
            "logo.png"

    }

];


/* =====================================================
   DOM READY
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        initializeWebsite();

    }
);


/* =====================================================
   INITIALIZE
===================================================== */

function initializeWebsite() {

    setupLoader();

    setupHeader();

    setupMobileMenu();

    renderServices();

    renderPortfolio();

    setupPortfolioFilters();

    setupServiceModal();

    setupPortfolioModal();

    setupAppointmentForm();

    setupWhatsAppLinks();

    setupScrollReveal();

    setupCurrentYear();

    setupSmoothNavigation();

}


/* =====================================================
   PAGE LOADER
===================================================== */

function setupLoader() {

    const loader =
        document.getElementById("pageLoader");


    window.addEventListener(
        "load",
        () => {

            setTimeout(
                () => {

                    loader.classList.add(
                        "hidden"
                    );

                },
                500
            );

        }
    );

}


/* =====================================================
   HEADER SCROLL
===================================================== */

function setupHeader() {

    const header =
        document.getElementById("header");


    function checkScroll() {

        if (window.scrollY > 30) {

            header.classList.add(
                "scrolled"
            );

        } else {

            header.classList.remove(
                "scrolled"
            );

        }

    }


    window.addEventListener(
        "scroll",
        checkScroll
    );


    checkScroll();

}


/* =====================================================
   MOBILE MENU
===================================================== */

function setupMobileMenu() {

    const button =
        document.getElementById("mobileMenu");

    const nav =
        document.getElementById("navMenu");


    button.addEventListener(
        "click",
        () => {

            button.classList.toggle(
                "active"
            );

            nav.classList.toggle(
                "active"
            );

        }
    );


    nav.querySelectorAll("a")
        .forEach(
            link => {

                link.addEventListener(
                    "click",
                    () => {

                        button.classList.remove(
                            "active"
                        );

                        nav.classList.remove(
                            "active"
                        );

                    }
                );

            }
        );

}


/* =====================================================
   SERVICES
===================================================== */

function renderServices() {

    const grid =
        document.getElementById(
            "servicesGrid"
        );


    grid.innerHTML = "";


    services.forEach(
        (service, index) => {

            const card =
                document.createElement(
                    "article"
                );


            card.className =
                "service-card reveal";


            card.innerHTML = `

                <span class="service-number">
                    ${service.number}
                </span>

                <div class="service-icon">

                    <i class="${service.icon}">
                    </i>

                </div>

                <h3>
                    ${service.title}
                </h3>

                <p>
                    ${service.description}
                </p>

                <ul class="service-list">

                    ${service.items
                        .map(
                            item => `
                                <li>

                                    <i class="fa-solid fa-check">
                                    </i>

                                    ${item}

                                </li>
                            `
                        )
                        .join("")}

                </ul>

                <button
                    class="service-button"
                    data-service="${index}"
                    type="button">

                    ${service.cta}

                    <i class="fa-solid fa-arrow-right">
                    </i>

                </button>

            `;


            grid.appendChild(card);

        }
    );


    grid.querySelectorAll(
        ".service-button"
    ).forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    const index =
                        Number(
                            button.dataset.service
                        );

                    openServiceModal(
                        services[index]
                    );

                }
            );

        }
    );


    /* Re-run reveal */

    setupScrollReveal();

}


/* =====================================================
   SERVICE MODAL
===================================================== */

function setupServiceModal() {

    const modal =
        document.getElementById(
            "serviceModal"
        );

    const close =
        document.getElementById(
            "modalClose"
        );

    const overlay =
        modal.querySelector(
            ".modal-overlay"
        );


    close.addEventListener(
        "click",
        closeServiceModal
    );


    overlay.addEventListener(
        "click",
        closeServiceModal
    );


    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape" &&
                modal.classList.contains(
                    "active"
                )
            ) {

                closeServiceModal();

            }

        }
    );


    document
        .getElementById("modalCTA")
        .addEventListener(
            "click",
            closeServiceModal
        );

}


/* =====================================================
   OPEN SERVICE MODAL
===================================================== */

function openServiceModal(service) {

    const modal =
        document.getElementById(
            "serviceModal"
        );


    document.getElementById(
        "modalIcon"
    ).innerHTML =
        `<i class="${service.icon}"></i>`;


    document.getElementById(
        "modalTitle"
    ).textContent =
        service.title;


    document.getElementById(
        "modalDescription"
    ).textContent =
        service.description;


    const list =
        document.getElementById(
            "modalServices"
        );


    list.innerHTML =
        service.items
            .map(
                item => `

                    <div class="modal-service-item">

                        <i class="fa-solid fa-check"></i>

                        ${item}

                    </div>

                `
            )
            .join("");


    document.getElementById(
        "modalCTA"
    ).dataset.service =
        service.title;


    modal.classList.add(
        "active"
    );

    modal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.classList.add(
        "modal-open"
    );

}


/* =====================================================
   CLOSE SERVICE MODAL
===================================================== */

function closeServiceModal() {

    const modal =
        document.getElementById(
            "serviceModal"
        );


    modal.classList.remove(
        "active"
    );

    modal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.classList.remove(
        "modal-open"
    );

}


/* =====================================================
   PORTFOLIO
===================================================== */

function renderPortfolio(
    filter = "all"
) {

    const grid =
        document.getElementById(
            "portfolioGrid"
        );


    grid.innerHTML = "";


    const filtered =
        filter === "all"

            ? portfolioItems

            : portfolioItems.filter(
                item =>
                    item.category === filter
            );


    filtered.forEach(
        (item, index) => {

            const card =
                document.createElement(
                    "article"
                );


            card.className =
                "portfolio-item reveal";


            card.dataset.category =
                item.category;


            card.innerHTML = `

                <img
                    src="${item.image}"
                    alt="${item.title}"
                    loading="lazy">

                <div class="portfolio-overlay">

                    <span>
                        ${item.categoryName}
                    </span>

                    <h3>
                        ${item.title}
                    </h3>

                    <div class="view-project">

                        VIEW PROJECT

                        <i class="fa-solid fa-arrow-right">
                        </i>

                    </div>

                </div>

            `;


            card.addEventListener(
                "click",
                () => {

                    openPortfolioModal(
                        item
                    );

                }
            );


            grid.appendChild(card);

        }
    );


    setupScrollReveal();

}


/* =====================================================
   PORTFOLIO FILTERS
===================================================== */

function setupPortfolioFilters() {

    const buttons =
        document.querySelectorAll(
            ".filter-btn"
        );


    buttons.forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    buttons.forEach(
                        item =>
                            item.classList.remove(
                                "active"
                            )
                    );


                    button.classList.add(
                        "active"
                    );


                    renderPortfolio(
                        button.dataset.filter
                    );

                }
            );

        }
    );

}


/* =====================================================
   PORTFOLIO MODAL
===================================================== */

function setupPortfolioModal() {

    const modal =
        document.getElementById(
            "portfolioModal"
        );

    const close =
        document.getElementById(
            "portfolioClose"
        );

    const overlay =
        modal.querySelector(
            ".portfolio-modal-overlay"
        );


    close.addEventListener(
        "click",
        closePortfolioModal
    );


    overlay.addEventListener(
        "click",
        closePortfolioModal
    );


    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape" &&
                modal.classList.contains(
                    "active"
                )
            ) {

                closePortfolioModal();

            }

        }
    );

}


/* =====================================================
   OPEN PORTFOLIO
===================================================== */

function openPortfolioModal(item) {

    const modal =
        document.getElementById(
            "portfolioModal"
        );


    document.getElementById(
        "portfolioPreviewImage"
    ).src =
        item.image;


    document.getElementById(
        "portfolioPreviewImage"
    ).alt =
        item.title;


    document.getElementById(
        "portfolioPreviewCategory"
    ).textContent =
        item.categoryName;


    document.getElementById(
        "portfolioPreviewTitle"
    ).textContent =
        item.title;


    modal.classList.add(
        "active"
    );


    document.body.classList.add(
        "modal-open"
    );

}


/* =====================================================
   CLOSE PORTFOLIO
===================================================== */

function closePortfolioModal() {

    const modal =
        document.getElementById(
            "portfolioModal"
        );


    modal.classList.remove(
        "active"
    );


    document.body.classList.remove(
        "modal-open"
    );

}


/* =====================================================
   WHATSAPP
===================================================== */

function setupWhatsAppLinks() {

    const links =
        document.querySelectorAll(
            ".whatsapp-link"
        );


    const message =
        "Hello JSVisuals! I would like to know more about your creative services.";


    const whatsappURL =
        `https://wa.me/${businessData.whatsappNumber}?text=${encodeURIComponent(message)}`;


    links.forEach(
        link => {

            link.href =
                whatsappURL;

            link.target =
                "_blank";

            link.rel =
                "noopener";

        }
    );

}


/* =====================================================
   APPOINTMENT FORM
===================================================== */

function setupAppointmentForm() {

    const form =
        document.getElementById(
            "appointmentForm"
        );


    const success =
        document.getElementById(
            "formSuccess"
        );


    form.addEventListener(
        "submit",
        event => {

            event.preventDefault();


            const formData =
                new FormData(form);


            const fullName =
                formData.get(
                    "fullName"
                );

            const phone =
                formData.get(
                    "phone"
                );

            const email =
                formData.get(
                    "email"
                );

            const service =
                formData.get(
                    "service"
                );

            const date =
                formData.get(
                    "preferredDate"
                );

            const time =
                formData.get(
                    "preferredTime"
                );

            const description =
                formData.get(
                    "description"
                );


            /*
                CURRENT BEHAVIOUR:

                Shows local success message.

                No appointment is confirmed.

                For real backend integration,
                connect this form to:

                - Formspree
                - EmailJS
                - Supabase
                - Firebase
                - Node.js
                - PHP
                - Your own API

            */


            success.classList.add(
                "show"
            );


            /*
                Optional WhatsApp enquiry.

                Uncomment if you want
                appointment form submission
                to open WhatsApp.
            */


            const message = `

Hello JSVisuals!

I would like to request an appointment.

Name: ${fullName}

Phone: ${phone}

Email: ${email || "Not provided"}

Service: ${service}

Preferred Date: ${date || "Not specified"}

Preferred Time: ${time || "Not specified"}

Project Description:
${description || "Not provided"}

Please get back to me regarding this enquiry.

            `;


            
                // Uncomment the following line
                // if you want form submission
                // to open WhatsApp automatically.

                window.open(
                    "https://wa.me/" +
                    businessData.whatsappNumber +
                    "?text=" +
                    encodeURIComponent(message),
                    "_blank"
                );
            


            form.reset();


            setTimeout(
                () => {

                    success.classList.remove(
                        "show"
                    );

                },
                7000
            );

        }
    );

}


/* =====================================================
   SCROLL REVEAL
===================================================== */

function setupScrollReveal() {

    const elements =
        document.querySelectorAll(
            ".reveal"
        );


    if (
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches
    ) {

        elements.forEach(
            element =>
                element.classList.add(
                    "visible"
                )
        );

        return;

    }


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(
                    entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "visible"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold: .12
            }
        );


    elements.forEach(
        element =>
            observer.observe(
                element
            )
    );

}


/* =====================================================
   CURRENT YEAR
===================================================== */

function setupCurrentYear() {

    const year =
        document.getElementById(
            "year"
        );


    year.textContent =
        new Date().getFullYear();

}


/* =====================================================
   SMOOTH NAVIGATION
===================================================== */

function setupSmoothNavigation() {

    document
        .querySelectorAll(
            'a[href^="#"]'
        )
        .forEach(
            link => {

                link.addEventListener(
                    "click",
                    event => {

                        const targetID =
                            link.getAttribute(
                                "href"
                            );


                        if (
                            targetID === "#" ||
                            !targetID
                        ) {

                            return;

                        }


                        const target =
                            document.querySelector(
                                targetID
                            );


                        if (target) {

                            event.preventDefault();


                            target.scrollIntoView(
                                {
                                    behavior:
                                        window.matchMedia(
                                            "(prefers-reduced-motion: reduce)"
                                        ).matches
                                            ? "auto"
                                            : "smooth"
                                }
                            );

                        }

                    }
                );

            }
        );

}


/* =====================================================
   OPTIONAL:
   MAKE BUSINESS DATA AVAILABLE GLOBALLY

   Useful if you later add more scripts.
===================================================== */

window.JSVisuals = {

    businessData,

    services,

    portfolioItems

};

