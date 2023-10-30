const addListenerBtn = document.getElementById("add-listener-btn")
const clickableBtn = document.getElementById("clickable-btn")
const messageInput = document.getElementById("click-message-input")

// useless variable and make heap
let person = { name: "max" }
person = null

// useless function and make memory leak
function printMessage() {
   const value = messageInput.value
   console.log(value || "Clicked me!")
}

function addListener() {
   clickableBtn.addEventListener("click", function () {
      const value = messageInput.value
      console.log(value || "Clicked me!")
   })
}

addListenerBtn.addEventListener("click", addListener)
