document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".header")
    if (!header) return

    const toggleHeaderTransparency = () => {
        header.classList.toggle("transparent", window.scrollY > 0)
    }

    toggleHeaderTransparency()
    window.addEventListener("scroll", toggleHeaderTransparency, { passive: true })
})
