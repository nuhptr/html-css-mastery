document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.querySelector(".navbar .mobile-menu-toggle")
    const mobileMenu = document.querySelector(".navbar .mobile-menu-items")

    if (toggleButton && mobileMenu) {
        const toggleMenu = () => {
            const isOpen = mobileMenu.classList.toggle("active")
            toggleButton.setAttribute("aria-expanded", String(isOpen))
        }

        toggleButton.addEventListener("click", toggleMenu)
        toggleButton.addEventListener("keydown", (event) => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault()
                toggleMenu()
            }
        })
    }
})

window.addEventListener(
    "scroll",
    () => {
        const navbar = document.querySelector(".navbar")
        if (!navbar) return
        navbar.classList.toggle("navbar-scroll", window.scrollY > 0)
    },
    { passive: true },
)
