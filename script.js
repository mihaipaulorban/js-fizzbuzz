document.addEventListener("DOMContentLoaded", function () {
    // Funzione che genera la lista FizzBuzz e la aggiunge all'HTML
    function fizzBuzz() {
      const outputList = document.getElementById("output");
  
      for (let i = 1; i <= 100; i++) {
        let square = document.createElement("div");
        square.classList.add("square");
        let output = "";
  
        if (i % 3 === 0 && i % 5 === 0) {
          square.classList.add("fizzbuzz");
          output = "FizzBuzz";
        } else if (i % 3 === 0) {
          square.classList.add("fizz");
          output = "Fizz";
        } else if (i % 5 === 0) {
          square.classList.add("buzz");
          output = "Buzz";
        } else {
          square.classList.add("normal");
          output = i;
        }
  
        square.textContent = output;
  
        outputList.appendChild(square);
  
        // Aggiunge il contenuto alla console
        console.log(output);
      }
    }
  
    fizzBuzz();
  });
  