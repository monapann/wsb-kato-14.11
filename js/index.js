/////////// Obiekty ////////////

const firstNameEmployee = "Marcin";
const familyNameEmployee = "Dłubis";
const ageEmployee = "32";
const occupationEmployee = "dev";

const employee = {
    firstName: "Marcin",
    familyName: "Dłubis",
    age: 32,
    occupation: "dev",
    "start salary": 3200,
    introduction: function() {
        // return "Pracownik " + employee.firstName
        return `Pracownik ${this.firstName} ${this.familyName}, w wieku ${this.age} zatrudniony jest na stanowisku ${this.occupation} i jego pensja początkowa to ${this["start salary"]}`
    }
}
console.log(employee.introduction())
// console.log(employee["start salary"])


//Zadanie 1
// Utwórz funkcję, która przyjmuje rozmiary argumentów obiektu (zawiera klucze szerokości, długości, wysokości) i zwraca objętość pudełka.

// volumeOfBox({ width: 2, length: 5, height: 1 }) ➞ 10
// volumeOfBox({ width: 4, length: 2, height: 2 }) ➞ 16
// volumeOfBox({ width: 2, length: 3, height: 5 }) ➞ 30

const boxSizes = {
    width: 10,
    height: 20,
    length: 10
}

// function volumeOfBox(box){
//     // console.log(box.height)
//     return `Objętość pudełka wynosi: ${box.height * box.width * box.length}`
// }

// console.log(volumeOfBox(boxSizes))

const volumeOfBox = box => `Objętość pudełka wynosi: ${box.height * box.width * box.length}`

console.log(volumeOfBox(boxSizes))