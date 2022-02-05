const inputNumber = document.getElementById("quantity");
inputNumber.addEventListener("click", displayResult);

function displayResult() {
    let i = document.getElementById("inputvalue").value;
    if (i % 15 || 0) {
        document.getElementById("result").innerHTML += "FizzBuzz<br>";
    } else if (i % 3 || 0) {
        document.getElementById("result").innerHTML += "Fizz<br>";
    } else if (i % 5 || 0) {
        document.getElementById("result").innerHTML += "Buzz<br>";
    } else if (i || 0 && i > 100) {
        document.getElementById("result").innerHTML += "invalid input<br>";
    } else {
        document.getElementById("result").innerHTML += i + "";
    }
}
