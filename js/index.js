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
// console.log(employee.introduction())
// console.log(employee["start salary"])


//Zadanie 1
// Utwórz funkcję, która przyjmuje rozmiary argumentów obiektu (zawiera klucze szerokości, długości, wysokości) i zwraca objętość pudełka.

// volumeOfBox({ width: 2, length: 5, height: 1 }) ➞ 10
// volumeOfBox({ width: 4, length: 2, height: 2 }) ➞ 16
// volumeOfBox({ width: 2, length: 3, height: 5 }) ➞ 30

const boxSizes = {
    width: 10,
    height: 20,
    length: 10,
    volume: function(){
        console.log(this)
        return this.width*this.length*this.height
    }
    // volume: () => {
    //     console.log(this)
    //     this.width*this.length*this.height
    // }
}
console.log(boxSizes.volume())
// function volumeOfBox(box){
//     // console.log(box.height)
//     return `Objętość pudełka wynosi: ${box.height * box.width * box.length}`
// }

// console.log(volumeOfBox(boxSizes))

// const volumeOfBox = box => ( `Objętość pudełka wynosi: ${box.height * box.width * box.length}`)

// console.log(volumeOfBox(boxSizes))

// Zadanie 2

// Napisz funkcję, która przyjmuje dwa parametry: liczbę oraz obiekt z wartościami min i max. Sprawdź, czy podana liczba zawiera się w przedzialen <min;max>

// isInRange(4, { min: 0, max: 5 }) ➞ true

// isInRange(4, { min: 4, max: 5 }) ➞ true

// isInRange(4, { min: 6, max: 10 }) ➞ false

// isInRange(5, { min: 5, max: 5 }) ➞ true

const myRange = {
    min: 0,
    max: 5
}

// function isInRange(myNumber,range){
//     return myNumber>= range.min && myNumber<= range.max
// }

// console.log(isInRange(6,myRange))

const isInRange = (myNumber,range) => (myNumber>= range.min && myNumber<= range.max)

console.log(isInRange(8,myRange))