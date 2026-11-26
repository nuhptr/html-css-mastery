document.addEventListener("DOMContentLoaded", () => {
    const messages = [
        {
            sender: "Design System Sync",
            time: "09:42",
            subject: "Updated spacing & color tokens for v2.4",
            body: [
                "Hey team, I pushed the updated CSS custom properties for surfaces, borders, and focus rings. All components now share consistent spacing and accessible contrast ratios out of the box.",
                "Let me know if any card variants need additional elevation tokens before Friday's release.",
            ],
        },
        {
            sender: "Laura Jones",
            time: "08:15",
            subject: "Code Magazine Layout Review",
            body: [
                "Looks super clean! The CSS Grid 2-column layout stacks nicely on tablet and mobile without fixed-pixel overflow.",
                "Ready to merge whenever you finish the final component polish.",
            ],
        },
        {
            sender: "Jonas Schmedtmann",
            time: "Yesterday",
            subject: "Component accessibility checklist",
            body: [
                "Great job replacing div click targets with native button and details elements. Keyboard Tab and Enter/Space navigation feels effortless now.",
            ],
        },
        {
            sender: "GitHub Actions",
            time: "Nov 24",
            subject: "Build #184 passed all link checks",
            body: [
                "All HTML references, stylesheet paths, and local image assets across 11 modules passed validation with zero errors.",
            ],
        },
        {
            sender: "Cloudflare Pages",
            time: "Nov 22",
            subject: "Production preview deployed",
            body: [
                "Static Curriculum Hub deployed cleanly. Every module and interactive project preview is live.",
            ],
        },
    ]

    const items = Array.from(document.querySelectorAll(".email-item"))
    const subjectEl = document.getElementById("mail-subject")
    const metaEl = document.getElementById("mail-meta")
    const bodyEl = document.getElementById("mail-body")
    const senderEl = document.getElementById("aside-sender")

    if (!items.length || !subjectEl || !metaEl || !bodyEl || !senderEl) return

    items.forEach((btn) => {
        btn.addEventListener("click", () => {
            const idx = Number(btn.dataset.id)
            const msg = messages[idx]
            if (!msg) return

            items.forEach((el) => el.classList.remove("is-selected"))
            btn.classList.add("is-selected")

            subjectEl.textContent = msg.subject
            metaEl.textContent = `From ${msg.sender} · ${msg.time}`
            senderEl.textContent = msg.sender
            bodyEl.replaceChildren(
                ...msg.body.map((text) => {
                    const p = document.createElement("p")
                    p.textContent = text
                    return p
                }),
            )
        })
    })
})
