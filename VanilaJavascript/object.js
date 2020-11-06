const Person = {
    firstName : "Kimi",
    lastName : "Hime",
    fullName : function() {
        return `${this.firstName}` + " " + `${this.lastName}`;
    },
    weight : 65,
    height : 172,
    isWeightIdeal: function() {
        const heightMinus100 = this.height - 100;
        return (heightMinus100 - (heightMinus100 * 10) / 100) < this.weight
    },
    needDiet: function() {
        const isWeightIdeal = this.isWeightIdeal()
        if (isWeightIdeal - 5 > this.weight) return "you are need more protein"
        else if (isWeightIdeal + 5 < this.weight) return "You need a mayo diet"
        return "You are in a good shape"
    },
}

console.log(Person.fullName()) // jadi jika membuat sebuah return di construct jadi harus menggunakan function
console.log(Person.isWeightIdeal()) // true -> jadi kimi hime ideal
console.log(Person.needDiet())


// index -> dimulai dari 0
const Countries = {
    ID : {
        provience : ["Bali", "Jawa Timur", "Jawa Tengah"],
        city : ["Singaraja", "Gianyar", "Negare", "Bandung"]
    },
    MY : {},
    // TH : {
    //     provience : ["Bangkok"],
    // },
}

console.log(Countries.ID.provience)
console.log(Countries.ID)
console.log(Countries.ID.city)

console.log(Countries?.TH?.provience ?? "Not Found") // jika tidak ada maka not found akan terpanggil
