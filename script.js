 // Funzione che generara la lista di FizzBuzz e la agggiunge nell'html
 function fizzBuzz() {
    const outputList = document.getElementById("output");

    for (let i = 1; i <= 100; i++) {
      let listItem = document.createElement("li");
      listItem.classList.add("col-2", "mb-2", "p-2", "text-center");
      let bgColorClass = "";
      if (i % 3 === 0 && i % 5 === 0) {
        listItem.textContent = "FizzBuzz";
        bgColorClass = "bg-danger";
      } else if (i % 3 === 0) {
        listItem.textContent = "Fizz";
        bgColorClass = "bg-success";
      } else if (i % 5 === 0) {
        listItem.textContent = "Buzz";
        bgColorClass = "bg-warning";
      } else {
        listItem.textContent = i;
      }

      if (bgColorClass) {
        listItem.classList.add(bgColorClass);
      }
      outputList.appendChild(listItem);
    }
  }

  fizzBuzz();