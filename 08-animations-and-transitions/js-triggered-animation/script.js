document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("button")
    const heading = document.querySelector("h1")
    if (!button || !heading) return

    button.addEventListener("click", () => {
        const isDark = document.body.classList.toggle("dark")
        heading.classList.toggle("yellow", isDark)
        button.setAttribute("aria-pressed", String(isDark))
    })
})
