const ATTACK_VALUE = 10;

let choosenMaxLife = 100;
let currentMonsterHealth = choosenMaxLife;
let currentPlayerHealth = choosenMaxLife;

adjustHealthBars(choosenMaxLife);

function attackHandler() {
   const damage = dealMonsterDamage(ATTACK_VALUE);
   currentMonsterHealth -= damage;
}

attackBtn.addEventListener("click", attackHandler);
