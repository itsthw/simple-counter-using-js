const increase = document.getElementById("btn--increase");
const reset = document.getElementById("btn--reset");
const decrease = document.getElementById("btn--decrease");
const counter = document.getElementById("counter");
let count = 0;

increase.onclick = function() {
    count++;
    counter.textContent = count;
}
decrease.onclick = function() {
    count--;
    counter.textContent = count;
}
reset.onclick = function() {
    count = 0;
    counter.textContent = count;
}
