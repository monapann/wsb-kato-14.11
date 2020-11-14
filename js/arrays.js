const obj = {
    country: "Poland",
    city: "Katowice"
}

const arr = [1,"Marcin",2,{name:"Marcin",family:"yes"}, obj];
console.log(arr[4].country);
console.log(arr[0]=3);
console.log(arr);

//sprawdzenie długości tablicy
console.log("Długość tabllicy to: " + arr.length)
//wyzerowanie tablicy 
arr.length=0;
console.log(arr);
//dodanie nowego elementu na końcu
arr.push(1);
arr.push(23);
arr.push(54);
arr.push(81);
arr.push(14);
arr.push(234);
arr.push("przedostatni element");
arr.push("ostatni element");
console.log("Tablica po dodaniu ostatniego argumentu: " + arr);
//usunięcie wartości z tablicy
delete arr[1]
console.log(arr);
//usunięcie ostatniego elementu tablicy
arr.pop();
console.log(arr);
//usunięcie pierwszego elementu tablicy
arr.shift();
console.log(arr);
//usunięcie kilku elementów tablicy
console.log("splice" ,arr.splice(2,1))
console.log("cała tablica", arr);
//wydobycie fragmentów tablicy i zwrócenie ich jako nowa tablica
console.log("slice", arr.slice(3,5));
console.log("cała tablica", arr);

// interowanie po tablicy 

const numbersArrays = [23,543,6,57,54,3,21,23,24];

// sposób 1, 
for (let i=0;i<numbersArrays.length;i++){
    console.log("index" + i + ", wartość: " + numbersArrays[i])
}
// sposób 2. 
for (let numbersArray of numbersArrays){
    console.log(numbersArray);
}

//Zadanie 1

// wygeneruj 10-elementową tablicę liczb losowych, a następnie wypisz te liczby w konsoli


// const randonNumber = Math.random()*(max-min) + min 

let arrNumbers = [];

for (let i=0;i<10;i++){
    const randomNumber = Math.floor(Math.random()*(100-0) + 0)
    arrNumbers.push(randomNumber)    
}
console.log(arrNumbers);

// Zadanie 2.
// Utwórz funkcję tworzącą tablicę 10-elementową z wylosowanymi liczbami. Następnie napisz nową funkcję, która przyjmuje tę tablicę i zwraca tylko wartości parzyste.

noOdds([1, 2, 3, 4, 5, 6, 7, 8]) ➞ [2, 4, 6, 8]

noOdds([43, 65, 23, 89, 53, 9, 6]) ➞ [6]

noOdds([718, 991, 449, 644, 380, 440]) ➞ [718, 644, 380, 440]
