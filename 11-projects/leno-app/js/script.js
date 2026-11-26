document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.querySelector(".navbar__mobile-menu-toggle")
    const mobileMenu = document.querySelector(".navbar__mobile-menu-items")

    if (toggleButton && mobileMenu) {
        toggleButton.addEventListener("click", () => {
            const isOpen = mobileMenu.classList.toggle("active")
            toggleButton.setAttribute("aria-expanded", String(isOpen))
        })
    }

    const modal = document.getElementById("videoModal")
    const videoButton = document.querySelector(".preview__video-button")
    const closeButton = document.querySelector(".modal__close-button")
    const videoPlayer = document.getElementById("videoPlayer")

    const closeModal = () => {
        if (!modal || !videoPlayer) return
        modal.style.display = "none"
        videoPlayer.src = ""
    }

    if (videoButton && modal && videoPlayer) {
        videoButton.addEventListener("click", () => {
            modal.style.display = "block"
            videoPlayer.src = "https://www.youtube.com/embed/8sXRyHI3bLw"
        })
    }

    if (closeButton) {
        closeButton.addEventListener("click", closeModal)
    }

    if (modal) {
        window.addEventListener("click", (event) => {
            if (event.target === modal) {
                closeModal()
            }
        })

        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape" && modal.style.display === "block") {
                closeModal()
            }
        })
    }
})

window.addEventListener(
    "scroll",
    () => {
        const navbar = document.querySelector(".navbar")
        if (!navbar) return
        navbar.classList.toggle("navbar--scroll", window.scrollY > 0)
    },
    { passive: true },
)
