console.log("terhubung");

// ES5

name = "hendra"
    // the minus from var is can declare before initializer
var name = "Adi"
console.log(name)



// updated to ES6

const error = "damn it!"
    // error = "woow" -> value can't be changed
console.log(error)

// number = 11  -> error
let number = 10
console.log(number);

console.log("=======")

const array = ["adi", "nugraha", "putra"]

// looping the value of array
for (let index = 0; index <
    array.length; index++) {
    console.log(array[index]);
}

console.log("=======");

// string concretination
const userPlace = document.getElementById('user')
const userLogged = "Adi"
userPlace.innerHTML = `Hi ${userLogged} Apa kabar`


// object Literal
const cartItem = document.getElementById('cart')

function addProduct(name, category) {
    return {
        name,
        category
    }
}

var getProduct = addProduct("Iphone 11", "Gadget")
console.log(getProduct)
cartItem.innerHTML = `${getProduct.name} ${getProduct.category}`

console.log("======");


// array forEach
const skillHolder = document.getElementById("skills")

const yourSkill = [
    'UX Design',
    'Web Development',
    'Video Editor'
]

yourSkill.push("Makan")

let parent = '<ul>'

yourSkill.forEach((skill) => {
    parent += '<li>' + skill + '</li>'
    console.log(`${skill}`)
})

parent += '</ul>'
skillHolder.innerHTML = parent

console.log("=========");

// map dan filter
const viewMap = document.getElementById("skill")
const myName = ["Adi", "Nugraha", "Putra"]

const myPrimaryName = myName.filter(skill => {
    return skill === "Adi"
})

console.log(myPrimaryName)
viewMap.innerHTML = myPrimaryName


// Classes and inheritance
const viewClass = document.getElementById("event")

class Siswa {
    constructor(username, password, id_kelas) {
        this.username = username
        this.password = password
        this.id_kelas = id_kelas
    }

    gabung() {
        console.log(this.username +
            'telah bergabung pada kelas' + this.id_kelas);

    }
}

// let tambahSiswa = new Siswa("bwastudio", '230fsdf', 12);
// tambahSiswa.gabung()

class Langganan extends Siswa {
    constructor(username, paket) {
        super(username);
        this.paket = paket;
    }

    gabungPaket() {
        console.log('Hi ' + this.username + ' Telah berlangganan paket' + this.paket);
    }
}

let tambahLangganan = new Langganan('bwastudiox', 'Premium')
tambahLangganan.gabungPaket()