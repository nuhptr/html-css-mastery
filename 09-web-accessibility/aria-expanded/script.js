document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".accordion-header")
    if (!header) return

    const contentId = header.getAttribute("aria-controls")
    const content = contentId ? document.getElementById(contentId) : null
    const indicator = header.querySelector(".accordion-indicator")
    if (!content) return

    header.addEventListener("click", () => {
        const expanded = header.getAttribute("aria-expanded") === "true"
        const nextState = !expanded

        header.setAttribute("aria-expanded", String(nextState))
        content.hidden = !nextState

        if (indicator) {
            indicator.textContent = nextState ? "−" : "+"
        }
    })
})
