function calcular() {
    const numerador = parseFloat(document.getElementById("numerador").value);
    const denominador = parseFloat(document.getElementById("denominador").value);

    const calculo = (numerador / denominador);

    document.getElementById("resultado").textContent = calculo.toFixed(2);
}