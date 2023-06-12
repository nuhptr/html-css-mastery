const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;

const MODE_ATTACK = "ATTACK"; // MODE_ATTACK = 0
const MODE_STRONG_ATTACK = "STRONG_ATTACK"; // MODE_STRONG_ATTACK = 1

const LOG_EVENT_PLAYER_ATTACK = "PLAYER_ATTACK";
const LOG_EVENT_PLAYER_STRONG_ATTACK = "PLAYER_STRONG_ATTACK";
const LOG_EVENT_MONSTER_ATTACK = "MONSTER_ATTACK";
const LOG_EVENT_PLAYER_HEAL = "PLAYER_HEAL";
const LOG_EVENT_GAME_OVER = "GAME_OVER";

let battleLog = [];

// Input from user
const enteredValue = prompt("Maximum life for you and the monster.", "100");

let choosenMaxLife = parseInt(enteredValue);
// Check if the input is a number
if (isNaN(choosenMaxLife) || choosenMaxLife <= 0) {
   choosenMaxLife = 100;
}

let currentMonsterHealth = choosenMaxLife;
let currentPlayerHealth = choosenMaxLife;
let hasBonusLife = true;

adjustHealthBars(choosenMaxLife);

// logBattle function
function logBattle(event, value, monsterHealth, playerHealth) {
   let logEntry = {
      event: event,
      value: value,
      finalMonsterHealth: monsterHealth,
      finalPlayerHealth: playerHealth,
   };

   if (event === LOG_EVENT_PLAYER_ATTACK) {
      logEntry.target = "MONSTER";
   } else if (event === LOG_EVENT_PLAYER_STRONG_ATTACK) {
      logEntry.target = "MONSTER";
   } else if (event === LOG_EVENT_MONSTER_ATTACK) {
      logEntry.target = "PLAYER";
   } else if (event === LOG_EVENT_PLAYER_HEAL) {
      logEntry.target = "PLAYER";
   } else if (event === LOG_EVENT_GAME_OVER) {
      logEntry = {
         event: event,
         value: value,
         finalMonsterHealth: monsterHealth,
         finalPlayerHealth: playerHealth,
      };
   }

   battleLog.push(logEntry);
}

// printLogHandler function
function printLogHandler() {
   console.log(battleLog);
}

// reset function
function reset() {
   currentMonsterHealth = choosenMaxLife;
   currentPlayerHealth = choosenMaxLife;
   resetGame(choosenMaxLife);
}

// endRound function
function endRound() {
   const initalPlayerHealth = currentPlayerHealth;
   const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
   currentPlayerHealth -= playerDamage;
   logBattle(
      LOG_EVENT_MONSTER_ATTACK,
      playerDamage,
      currentMonsterHealth,
      currentPlayerHealth
   );

   if (currentPlayerHealth <= 0 && hasBonusLife) {
      hasBonusLife = false;
      removeBonusLife();
      currentPlayerHealth = initalPlayerHealth;
      setPlayerHealth(initalPlayerHealth);
      alert("You would be dead but the bonus life saved you!");
   }

   if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
      alert("You won!");
      logBattle(
         LOG_EVENT_GAME_OVER,
         "PLAYER WON",
         currentMonsterHealth,
         currentPlayerHealth
      );
   } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
      alert("You lost!");
      logBattle(
         LOG_EVENT_GAME_OVER,
         "MONSTER WON",
         currentMonsterHealth,
         currentPlayerHealth
      );
   } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
      alert("You have a draw!");
      logBattle(
         LOG_EVENT_GAME_OVER,
         "A DRAW",
         currentMonsterHealth,
         currentPlayerHealth
      );
   }

   if (currentPlayerHealth <= 0 || currentMonsterHealth <= 0) {
      reset();
   }
}

// attackMonster function
function attackMonster(mode) {
   // use ternary operator => logic ? condition(true) : condition(false)
   const maxDamage = mode === MODE_ATTACK ? ATTACK_VALUE : STRONG_ATTACK_VALUE;
   const logEvent =
      mode === MODE_ATTACK
         ? LOG_EVENT_PLAYER_ATTACK
         : LOG_EVENT_PLAYER_STRONG_ATTACK;

   const damage = dealMonsterDamage(maxDamage);
   currentMonsterHealth -= damage;
   logBattle(logEvent, damage, currentMonsterHealth, currentPlayerHealth);
   endRound();
}

// attackHandler function
function attackHandler() {
   attackMonster(MODE_ATTACK);
}

// strongAttackHandler function
function strongAttackHandler() {
   attackMonster(MODE_STRONG_ATTACK);
}

// healPlayerHandler function
function healPlayerHandler() {
   let healValue;
   if (currentPlayerHealth >= choosenMaxLife - HEAL_VALUE) {
      alert("You can't heal to more than your max initial health.");
      healValue = choosenMaxLife - currentPlayerHealth;
   } else {
      healValue = HEAL_VALUE;
   }

   increasePlayerHealth(healValue);
   currentPlayerHealth += healValue;
   logBattle(
      LOG_EVENT_PLAYER_HEAL,
      healValue,
      currentMonsterHealth,
      currentPlayerHealth
   );
   endRound();
}

// event listeners
attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click", strongAttackHandler);
healBtn.addEventListener("click", healPlayerHandler);
logBtn.addEventListener("click", printLogHandler);
