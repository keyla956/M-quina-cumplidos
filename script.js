const cumplidos=[

["Eres una persona increíble, tu energía transforma todo a tu alrededor","😊"],

["Tu creatividad es algo que destaca mucho","🎨"],

["Tienes una actitud que inspira a los demás","⭐"],

["Eres capaz de lograr grandes cosas","🚀"],

["Tu esfuerzo merece reconocimiento","🏆"],

["Tienes una mente brillante","🧠"],

["Nunca dejes de brillar como lo haces","🔥"]

];


const romanticos=[

["hacen una conexión muy bonita ❤️","❤️"],

["juntos crean momentos especiales ✨","💞"],

["son un gran equipo y se complementan mucho","💕"],

["su historia tiene algo muy especial","🌹"]

];



function generar(){


let n1=document.getElementById("nombre1").value;

let n2=document.getElementById("nombre2").value;


let ruleta=document.getElementById("ruleta");


ruleta.classList.add("girar");



setTimeout(()=>{


let lista=n2 ? romanticos : cumplidos;


let r=Math.floor(Math.random()*lista.length);



document.getElementById("texto").innerHTML=

(n1 || "Persona")+

" "+

lista[r][0];


if(n2){

document.getElementById("texto").innerHTML=

n1+" y "+n2+" "+lista[r][0];

}



document.getElementById("emoji").innerHTML=

lista[r][1];


ruleta.classList.remove("girar");


},1500);



}