const foo = "papayas"
let namaBuah = ""

switch (foo) {
    case "papayas":
        namaBuah = "Papaya" // di execute
        break;
        
    case "Salak":
        namaBuah = "Salak"
        break;

    default:
        namaBuah = "Semongko"
        break;
}

console.log(namaBuah)

const nomor = 1;

function pilihBuah(nomor) {
    switch (nomor) {
        case 1:
            return "Salak"
            break;
        case 2:
            return "Apel"
            break;
        case 3:
            return "Jeruk"
            break;
        default:
            return "Semangka"
    }
}

console.log(pilihBuah(2)); // menentukan hasil dari switch diatas
