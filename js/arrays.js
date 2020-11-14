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



