const addListenerBtn = document.getElementById("add-listener-btn")
const clickableBtn = document.getElementById("clickable-btn")
const messageInput = document.getElementById("click-message-input")

//! USELESS OBJECT AND MAKE HEAP
let person = { name: "max" }
person = null

//! USELESS FUNCTION AND MAKE HEAP
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
