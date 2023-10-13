function calcularPromedio() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var nota1 = parseFloat(document.getElementById("cuatrimestre1").value);
    var nota2 = parseFloat(document.getElementById("cuatrimestre2").value);
    var nota3 = parseFloat(document.getElementById("cuatrimestre3").value);

    var promedio = (nota1 + nota2 + nota3) / 3;
    var resultadoElement = document.getElementById("resultado");

    if (!isNaN(promedio)) {
        resultadoElement.textContent = `El promedio de ${nombre} ${apellido} es: ${promedio.toFixed(2)}`;

        if (promedio >= 6) {
            resultadoElement.textContent += " - Aprobado";
        } else {
            resultadoElement.textContent += " - Desaprobado";
        }
    } else {
        resultadoElement.textContent = "Por favor, ingrese notas válidas.";
    }
}