 // Funzione che generara la lista di FizzBuzz e la agggiunge nell'html
 function fizzBuzz() {
    const fizzList = document.getElementById("listafizz");

    for (let i = 1; i <= 100; i++) {
      let listItem = document.createElement("li");

      if (i % 3 === 0 && i % 5 === 0) {
        listItem.textContent = "FizzBuzz";
      } else if (i % 3 === 0) {
        listItem.textContent = "Fizz";
      } else if (i % 5 === 0) {
        listItem.textContent = "Buzz";
      } else {
        listItem.textContent = i;
      }

      fizzList.appendChild(listItem);
    }
  }

  fizzBuzz();