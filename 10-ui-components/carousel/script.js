document.addEventListener("DOMContentLoaded", () => {
    const slides = [
        {
            quote: '"Our design studio switched every workstation to these ergonomic chairs last spring. Back fatigue disappeared within two weeks and the craftsmanship still looks brand new."',
            author: "Maria Christie",
            role: "Senior Product Manager at EDP Commercial",
        },
        {
            quote: '"The solid beechwood frame feels rock solid even after 10-hour coding sessions. Easily the cleanest minimalist chair we have ever ordered for our Lisbon office."',
            author: "Lucas Ferreira",
            role: "Staff Frontend Engineer at Studio North",
        },
        {
            quote: '"Delivery took five days, assembly took zero tools, and the lumbar support hits the exact sweet spot without bulky plastic levers."',
            author: "Hannah Lindqvist",
            role: "Creative Director at Nordic Form",
        },
    ]

    const quoteEl = document.getElementById("quote-text")
    const authorEl = document.getElementById("quote-author")
    const roleEl = document.getElementById("quote-role")
    const prevBtn = document.getElementById("prev-slide")
    const nextBtn = document.getElementById("next-slide")
    const dots = Array.from(document.querySelectorAll(".dot"))

    if (!quoteEl || !authorEl || !roleEl || !prevBtn || !nextBtn || dots.length === 0) return

    let currentIndex = 0

    const renderSlide = (index) => {
        currentIndex = (index + slides.length) % slides.length
        const slide = slides[currentIndex]
        quoteEl.textContent = slide.quote
        authorEl.textContent = slide.author
        roleEl.textContent = slide.role

        dots.forEach((dot, idx) => {
            const active = idx === currentIndex
            dot.classList.toggle("dot--fill", active)
            if (active) dot.setAttribute("aria-current", "true")
            else dot.removeAttribute("aria-current")
        })
    }

    prevBtn.addEventListener("click", () => renderSlide(currentIndex - 1))
    nextBtn.addEventListener("click", () => renderSlide(currentIndex + 1))

    dots.forEach((dot) => {
        dot.addEventListener("click", () => {
            const idx = Number(dot.dataset.index)
            if (!Number.isNaN(idx)) renderSlide(idx)
        })
    })
})
