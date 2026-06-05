const cumplidos = [
    "Eres una persona increíble",
    "Tu esfuerzo vale la pena",
    "Tienes mucho talento",
    "Nunca dejes de intentarlo",
    "Tu sonrisa ilumina el día",
    "Eres más fuerte de lo que crees",
    "Tienes grandes capacidades",
    "Hoy será un gran día",
    "Confía en ti mismo",
    "Puedes lograr tus metas"
];

function generarCumplido() {

    let numero = Math.floor(
        Math.random() * cumplidos.length
    );

    document.getElementById("mensaje").innerHTML =
        cumplidos[numero];
}