document.addEventListener("DOMContentLoaded", () => {
    const status = document.getElementById("status-live")
    const demoBtn = document.getElementById("demo-action")
    const imgBtn = document.getElementById("img-trigger")

    if (demoBtn && status) {
        demoBtn.addEventListener("click", () => {
            status.textContent = "Action triggered and announced via aria-live polite status."
        })
    }

    if (imgBtn && status) {
        imgBtn.addEventListener("click", () => {
            status.textContent = "Image button activated cleanly via keyboard or pointer."
        })
    }
})
