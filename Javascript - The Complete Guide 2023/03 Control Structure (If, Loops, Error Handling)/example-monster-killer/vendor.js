const monsterHealthBar = document.getElementById("monster-health")
const playerHealthBar = document.getElementById("player-health")
const bonusLifeEl = document.getElementById("bonus-life")

const attackBtn = document.getElementById("attack-btn")
const strongAttackBtn = document.getElementById("strong-attack-btn")
const healBtn = document.getElementById("heal-btn")
const logBtn = document.getElementById("log-btn")

function adjustHealthBars(maxLife) {
   monsterHealthBar.max = maxLife
   monsterHealthBar.value = maxLife
   playerHealthBar.max = maxLife
   playerHealthBar.value = maxLife
}

const increasePlayerHealth = (healValue) => (playerHealthBar.value = +playerHealthBar.value + healValue)
const removeBonusLife = () => bonusLifeEl.parentNode.removeChild(bonusLifeEl)
const setPlayerHealth = (health) => (playerHealthBar.value = health)

function dealMonsterDamage(damage) {
   const dealtDamage = Math.random() * damage
   monsterHealthBar.value = +monsterHealthBar.value - dealtDamage
   return dealtDamage
}

function dealPlayerDamage(damage) {
   const dealtDamage = Math.random() * damage
   playerHealthBar.value = +playerHealthBar.value - dealtDamage
   return dealtDamage
}

function resetGame(value) {
   playerHealthBar.value = value
   monsterHealthBar.value = value
}
