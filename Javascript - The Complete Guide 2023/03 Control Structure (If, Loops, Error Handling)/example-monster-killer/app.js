const ATTACK_VALUE = 10
const STRONG_ATTACK_VALUE = 17
const MONSTER_ATTACK_VALUE = 14
const HEAL_VALUE = 20

const MODE_ATTACK = "ATTACK" // MODE_ATTACK = 0
const MODE_STRONG_ATTACK = "STRONG_ATTACK" // MODE_STRONG_ATTACK = 1
const LOG_EVENT_PLAYER_ATTACK = "PLAYER_ATTACK"
const LOG_EVENT_PLAYER_STRONG_ATTACK = "PLAYER_STRONG_ATTACK"
const LOG_EVENT_MONSTER_ATTACK = "MONSTER_ATTACK"
const LOG_EVENT_PLAYER_HEAL = "PLAYER_HEAL"

const LOG_EVENT_GAME_OVER = "GAME_OVER"
const LOG_EVENT_BONUS_LIFE = "BONUS_LIFE"
const LOG_EVENT_PLAYER_WON = "PLAYER_WON"
const LOG_EVENT_PLAYER_LOST = "PLAYER_LOST"
const LOG_EVENT_DRAW = "DRAW"

const enteredValue = prompt("Maximum life for you and the monster.", "100")

let chosenMaxLife = parseInt(enteredValue)
if (isNaN(chosenMaxLife) || chosenMaxLife <= 0) {
   chosenMaxLife = 100
}

let currentMonsterHealth = chosenMaxLife
let currentPlayerHealth = chosenMaxLife
let hasBonusLife = true
let battleLog = []

adjustHealthBars(chosenMaxLife)

// write to log
function writeToLog(event, value, monsterHealth, playerHealth) {
   let logEntry = {
      event: event,
      value: value,
      finalMonsterHealth: monsterHealth,
      finalPlayerHealth: playerHealth,
      target: "",
   }

   // Using switch case
   switch (event) {
      case LOG_EVENT_PLAYER_ATTACK:
         logEntry.target = "MONSTER"
         break
      case LOG_EVENT_PLAYER_STRONG_ATTACK:
         logEntry.target = "MONSTER"
         break
      case LOG_EVENT_MONSTER_ATTACK:
         logEntry.target = "PLAYER"
         break
      case LOG_EVENT_PLAYER_HEAL:
         logEntry.target = "PLAYER"
         break
   }
   // if (event === LOG_EVENT_PLAYER_ATTACK) logEntry.target = "MONSTER"
   // else if (event === LOG_EVENT_MONSTER_ATTACK) logEntry.target = "PLAYER"
   // else if (event === LOG_EVENT_PLAYER_STRONG_ATTACK) logEntry.target = "MONSTER"
   // else if (event === LOG_EVENT_PLAYER_HEAL) logEntry.target = "PLAYER"

   battleLog.push(logEntry)
}

// Reset game
const reset = () => {
   currentMonsterHealth = chosenMaxLife
   currentPlayerHealth = chosenMaxLife
   resetGame(chosenMaxLife)
}

// End round after the game
const endRound = () => {
   const initialPlayerHealth = currentPlayerHealth
   const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE)
   currentPlayerHealth -= playerDamage
   writeToLog(LOG_EVENT_MONSTER_ATTACK, playerDamage, currentMonsterHealth, currentPlayerHealth)

   // Bonus life
   if (currentPlayerHealth <= 0 && hasBonusLife) {
      hasBonusLife = false
      removeBonusLife()
      currentPlayerHealth = initialPlayerHealth
      setPlayerHealth(chosenMaxLife)
      alert("You would be dead but the bonus life saved you!")
   }

   if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
      alert("You won!")
      writeToLog(LOG_EVENT_GAME_OVER, LOG_EVENT_PLAYER_WON, currentMonsterHealth, currentPlayerHealth)
   } else if (currentMonsterHealth > 0 && currentPlayerHealth <= 0) {
      alert("You lost!")
      writeToLog(LOG_EVENT_GAME_OVER, LOG_EVENT_PLAYER_LOST, currentMonsterHealth, currentPlayerHealth)
   } else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
      alert("You have a draw!")
      writeToLog(LOG_EVENT_GAME_OVER, LOG_EVENT_DRAW, currentMonsterHealth, currentPlayerHealth)
   }

   if (currentMonsterHealth <= 0 || currentPlayerHealth <= 0) reset()
}

const attackMonster = (mode) => {
   const maxDamage = mode === MODE_ATTACK ? ATTACK_VALUE : STRONG_ATTACK_VALUE
   const logEvent = mode === MODE_ATTACK ? LOG_EVENT_PLAYER_ATTACK : LOG_EVENT_PLAYER_STRONG_ATTACK
   writeToLog(logEvent, maxDamage, currentMonsterHealth, currentPlayerHealth)

   const damage = dealMonsterDamage(maxDamage)
   currentMonsterHealth -= damage
   endRound()
}

const healPlayerHandler = () => {
   const maxHealth = currentPlayerHealth >= chosenMaxLife - HEAL_VALUE
   const healValue = maxHealth ? chosenMaxLife - currentPlayerHealth : HEAL_VALUE

   if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) alert("You can't heal to more than your max initial health.")

   increasePlayerHealth(HEAL_VALUE)
   currentPlayerHealth += HEAL_VALUE
   writeToLog(LOG_EVENT_PLAYER_HEAL, healValue, currentMonsterHealth, currentPlayerHealth)
   endRound()
}

const attackHandler = () => attackMonster(MODE_ATTACK)
const strongAttackHandler = () => attackMonster(MODE_STRONG_ATTACK)

const logHandler = () => {
   // implement for loop-of
   for (const logBattle of battleLog) {
      console.log(logBattle)
      // implement for-in
      // for (const key in logBattle) {
      //    console.log(`${key} => ${logBattle[key]}`)
      // }
   }
}

attackBtn.addEventListener("click", attackHandler)
strongAttackBtn.addEventListener("click", strongAttackHandler)
healBtn.addEventListener("click", healPlayerHandler)
logBtn.addEventListener("click", logHandler)
