// const backToTopBtnElement = document.querySelector("button.backToTop");
const modalElement = document.querySelector("div.modal");
const modalImageElement = document.querySelector(".modal .modal__img");
const burguerMenuElement = document.querySelector(".header__burguer-menu");

// function handleBodyOnScroll() {
//     const shouldBtnBeVisible = document.documentElement.scrollTop >= 100 || document.body.scrollTop >= 100;

//     if (shouldBtnBeVisible && backToTopBtnElement.className === "backToTop backToTop--hidden") {
//         backToTopBtnElement.className = "backToTop";
//     } else if (!shouldBtnBeVisible && backToTopBtnElement.className === "backToTop") {
//         backToTopBtnElement.className = "backToTop backToTop--hidden";
//     }
// }

// function backToTop() {
//     document.documentElement.scrollTop = 0;
//     document.body.scrollTop = 0;
// }

async function handleFormOnSubmit() {
    const formData = await getFormData();

    if (formData.grecaptcha.length === 0) {
        alert("Por favor, verifique se você não é um robô.");
        return;
    }

    sendEmail("https://leandrofreelancer.herokuapp.com/api/v1/email", formData);
    clearFormInputs();
}

async function getFormData() {
    return {
        name: document.querySelector("#contact #name").value,
        email: document.querySelector("#contact #email").value,
        message: document.querySelector("#contact #message").value,
        grecaptcha: await grecaptcha.getResponse(),
    };
}

function sendEmail(addressURL, formData) {
    fetch(addressURL, {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(formData),
    })
        .then(() => {
            console.log("Email enviado");
        })
        .catch(() => {
            console.error("Não foi possível enviar o email");
        });
}

function clearFormInputs() {
    document.querySelector("#contact #name").value = "";
    document.querySelector("#contact #email").value = "";
    document.querySelector("#contact #message").value = "";
}

function toggleModal(src = "", alt = "") {
    modalImageElement.src = src;
    modalImageElement.alt = alt;

    modalElement.classList.toggle("modal--hidden");
}

function toggleBurguerMenu() {
    burguerMenuElement.classList.toggle("active");
}

// Wait for lib Swiper to load async
const waitSwiper = setInterval(() => {
    if (typeof Swiper === "undefined")
        return
    
        new Swiper(".swiper", {
            direction: "horizontal",
            loop: true,
            slidesPerView: window.outerWidth > 767 ? 5 : 1,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });

        clearInterval(waitSwiper)
}, 500)

document.querySelectorAll(".portfolio__img").forEach((element) => {
    element.addEventListener("click", () => {
        toggleModal(element.src, element.alt);
    });
});
