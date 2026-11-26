document.addEventListener("DOMContentLoaded", () => {
    const links = Array.from(document.querySelectorAll(".page-link"))
    const prevBtn = document.getElementById("prev-page")
    const nextBtn = document.getElementById("next-page")
    const statusEl = document.getElementById("page-status")

    if (!links.length || !prevBtn || !nextBtn || !statusEl) return

    let activeIdx = links.findIndex((el) => el.classList.contains("page-link--current"))
    if (activeIdx < 0) activeIdx = 0

    const setActive = (nextIdx) => {
        activeIdx = Math.max(0, Math.min(links.length - 1, nextIdx))
        links.forEach((link, idx) => {
            const active = idx === activeIdx
            link.classList.toggle("page-link--current", active)
            if (active) link.setAttribute("aria-current", "page")
            else link.removeAttribute("aria-current")
        })
        statusEl.textContent = `Showing page ${links[activeIdx].dataset.page} of 23`
    }

    links.forEach((link, idx) => {
        link.addEventListener("click", (event) => {
            event.preventDefault()
            setActive(idx)
        })
    })

    prevBtn.addEventListener("click", () => setActive(activeIdx - 1))
    nextBtn.addEventListener("click", () => setActive(activeIdx + 1))
})
