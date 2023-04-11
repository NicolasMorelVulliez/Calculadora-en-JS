let operacion = prompt("¿Qué operación desea realizar? (suma, resta, multiplicacion, division)");

let num1 = parseFloat(prompt("Ingrese el primer número:"));
let num2 = parseFloat(prompt("Ingrese el segundo número:"));

let resultado;

switch (operacion) {
    case "suma":
        resultado = num1 + num2;
        break;
    case "resta":
        resultado = num1 - num2;
        break;
    case "multiplicacion":
        resultado = num1 * num2;
        break;
    case "division":
        resultado = num1 / num2;
        break;
    default:
        alert("Operación no válida");
}

alert("El resultado de la operación " + operacion + " es: " + resultado);