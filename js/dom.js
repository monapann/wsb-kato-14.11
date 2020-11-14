const identifyID_1 = document.getElementById("sample");
console.log(identifyID_1);
const identifyID_2 = document.querySelector("#sample");
console.log(identifyID_2);
const identifyID_3 = document.querySelector(".sampleCl");
console.log(identifyID_3);
const identifyID_4 = document.querySelector("a");
console.log(identifyID_4);
const identifyID_5 = document.querySelectorAll("a");
console.log(identifyID_5);
const identifyID_6 = document.getElementsByTagName("a");
console.log(identifyID_6);
const identifyID_7 = document.getElementsByClassName("sampleCl");
console.log(identifyID_7);
const identifyID_8 = document.querySelector(".container .text");
console.log(identifyID_8);

////////// manipulowanie DOMem

//dodanie klasy bcg z elementu o ID container
document.getElementById("container").classList.add("bcg");
//usunięcie klasy container z elementu o ID container
document.getElementById("container").classList.remove("container");
//sprawdzenie, czy ID container posiada klasę bcg
console.log(document.getElementById("container").classList.contains("bcg"));
//włączanie-wyłączanie klasy active w elemencie o ID hyp
document.getElementById("hyp").classList.toggle("active")
//dodanie kodu HTML
document.getElementById("sampleTxt").innerHTML=`<div class='new' style='background-color: red'>Nowy tekst</div>`
//dodanie tekstu TextContent
// document.getElementById("sampleTxt").textContent="Nowy tekst"
//dodanie tekstu innerText
// document.getElementById("sampleTxt").innerText="Nowy tekst"


//zdarzenia

//sposób 1
function changeText(){
    document.getElementById("sposob1").innerText = "nowy tekst"
}

//sposób 2
document.getElementById("sampleBtn").onclick = changeText2;

function changeText2(){
    document.getElementById("sposob2").innerText = "nowy tekst"
}

//sposób 3
document.getElementById("sampleBtn2").addEventListener("click",changeText3)

function changeText3(){
    document.getElementById("sposob3").innerText = "nowy tekst"
}
//sposób 4
document.getElementById("sampleBtn3").addEventListener("click",function(){
    document.getElementById("sposob4").innerText = "nowy tekst"
})


//////////////// zadanie 1 

const x = 10;
const y = 20;

const add = (a,b) => a+b;
document.getElementById("zad1_sum").innerText = add(x,y);

