let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");
let resetButton = document.getElementById("reset");
celsius.oninput = function () {
    let f = (parseFloat(celsius.value) * 9) / 5 + 32;
    fahrenheit.value = parseFloat(f.toFixed(1));
};

fahrenheit.oninput = function () {
    let c = ((parseFloat(fahrenheit.value) - 32) * 5) / 9;
    celsius.value = parseFloat(c.toFixed(1));
};

function reset() {
    celsius.value="";
    fahrenheit.value="";
}

resetButton.addEventListener("click", reset);