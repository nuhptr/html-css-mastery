document.addEventListener("DOMContentLoaded", function () {
   const header = document.querySelector(".accordion-header")

   header.addEventListener("click", () => {
      // Get the next sibling of the header
      const content = header.nextElementSibling
      // Get the value of the aria-expanded attribute
      const expanded = header.getAttribute("aria-expanded") === "true"

      // Toggle aria-expanded attribute
      header.setAttribute("aria-expanded", !expanded)
      // Toggle aria-hidden attribute
      content.setAttribute("aria-hidden", expanded)

      console.log("Accordion header clicked")
      console.log("aria-expanded:", header.getAttribute("aria-expanded"))
   })
})
