document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.querySelector(".navbar .mobile-menu-toggle")
    const mobileMenu = document.querySelector(".navbar .mobile-menu-items")
    if (!toggleButton || !mobileMenu) return

    const setMenuState = (open) => {
        mobileMenu.classList.toggle("active", open)
        toggleButton.setAttribute("aria-expanded", String(open))
    }

    toggleButton.addEventListener("click", () => {
        const isOpen = mobileMenu.classList.contains("active")
        setMenuState(!isOpen)
    })

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && mobileMenu.classList.contains("active")) {
            setMenuState(false)
            toggleButton.focus()
        }
    })
})
