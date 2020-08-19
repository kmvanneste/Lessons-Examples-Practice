var incrementButton = document.querySelector("#increment");
var decrementButton = document.querySelector("#decrement");
var counter = document.querySelector("#count");

var count = 0;

incrementButton.addEventListener("click", function () {
    count++;
    counter.textContent = count;
})

decrementButton.addEventListener("click", function () {
    if(count > 0) {
    count--;
    counter.textContent = count;
}
})
