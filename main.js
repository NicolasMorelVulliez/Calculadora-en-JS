
do {
    let operacion = prompt("¿Qué operación desea realizar? (suma, resta, multiplicacion, division)");

    if (operacion === "suma" || operacion === "resta" || operacion === "multiplicacion" || operacion === "division") {

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
        }
        alert("El resultado de la operación " + operacion + " es: " + resultado);
    }
    else {
        alert("Operación no válida");
    }
} while (confirm("¿Deseas realizar otra operación?"));







