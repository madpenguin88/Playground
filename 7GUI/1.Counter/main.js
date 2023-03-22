const incrementCount = document.getElementById("increment");
const resetCount = document.getElementById("reset");
const totalCount = document.getElementById("total");

var count = 0;

totalCount.innerHTML = count;

function plusOne() {
    count++;
    totalCount.innerHTML = count;
}

function reset() {
    count = 0;
    totalCount.innerHTML = count;
}

incrementCount.addEventListener("click", plusOne);
resetCount.addEventListener("click", reset);