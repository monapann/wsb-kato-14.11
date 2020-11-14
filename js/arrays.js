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
//usunięcie ostatniego elementu z tablicy
arr.pop();
console.log(arr);
//usunięcie pierwszego elementu z tablicy
arr.shift();
console.log(arr);


