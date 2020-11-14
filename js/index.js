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
    "startSalary": 3200,
    introduction: function() {
        // return "Pracownik " + employee.firstName
        return `Pracownik ${this.firstName} ${this.familyName}, w wieku ${this.age} zatrudniony jest na stanowisku ${this.occupation} i jego pensja początkowa to ${this["start salary"]}`
    }
}
console.log(employee.introduction())
// console.log(employee["start salary"])

