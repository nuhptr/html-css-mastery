document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("lesson-search")
    const searchForm = document.getElementById("search-form")
    const pills = Array.from(document.querySelectorAll(".pill"))
    const moduleCards = Array.from(document.querySelectorAll(".module-card"))
    const featuredSection = document.getElementById("featured-projects")
    const emptyState = document.getElementById("empty-state")

    if (!searchInput || !moduleCards.length || !emptyState) return

    if (searchForm) {
        searchForm.addEventListener("submit", (event) => event.preventDefault())
    }

    let activeFilter = "all"

    const applyFilters = () => {
        const query = searchInput.value.trim().toLowerCase()
        let visibleModules = 0

        moduleCards.forEach((card) => {
            const category = card.dataset.category || ""
            const matchesCategory = activeFilter === "all" || category === activeFilter

            const items = Array.from(card.querySelectorAll(".lesson-list li"))
            const headingText = card.querySelector(".module-head")?.textContent.toLowerCase() || ""
            let matchingItems = 0

            items.forEach((li) => {
                const text = li.textContent.toLowerCase()
                const showItem = !query || text.includes(query) || headingText.includes(query)
                li.hidden = !showItem
                if (showItem) matchingItems += 1
            })

            const showCard = matchesCategory && matchingItems > 0
            card.hidden = !showCard
            if (showCard) visibleModules += 1
        })

        if (featuredSection) {
            const showFeatured = (activeFilter === "all" || activeFilter === "projects") && !query
            featuredSection.hidden = !showFeatured
        }

        emptyState.hidden = visibleModules > 0
    }

    searchInput.addEventListener("input", applyFilters)

    pills.forEach((pill) => {
        pill.addEventListener("click", () => {
            activeFilter = pill.dataset.filter || "all"

            pills.forEach((btn) => {
                const isSelected = btn === pill
                btn.classList.toggle("is-active", isSelected)
                btn.setAttribute("aria-pressed", String(isSelected))
            })

            applyFilters()
        })
    })
})
