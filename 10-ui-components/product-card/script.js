document.addEventListener("DOMContentLoaded", () => {
    const swatches = Array.from(document.querySelectorAll(".color"))
    const colorLabel = document.getElementById("selected-color")
    const cartBtn = document.getElementById("add-to-cart")

    if (swatches.length && colorLabel) {
        swatches.forEach((btn) => {
            btn.addEventListener("click", () => {
                swatches.forEach((el) => {
                    el.classList.remove("is-active")
                    el.setAttribute("aria-pressed", "false")
                })
                btn.classList.add("is-active")
                btn.setAttribute("aria-pressed", "true")
                colorLabel.textContent = btn.dataset.color || "Classic Black"
            })
        })
    }

    if (cartBtn) {
        cartBtn.addEventListener("click", () => {
            const color = colorLabel ? colorLabel.textContent : "Classic Black"
            cartBtn.textContent = `Added (${color}) ✓`
            setTimeout(() => {
                cartBtn.textContent = "Add to cart"
            }, 1600)
        })
    }
})
