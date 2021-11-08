// Funzione Toggle

const darkModeBtn = document.querySelector(".enableDarkMode");


darkModeBtn.addEventListener(
    "click", 
    () => {
    document.body.classList.toggle("darkMode");
    
}
);

const light = document.querySelector("#illumina");
const lightSecond = document.querySelector(".anotherOne");

lightSecond.addEventListener(
    "click", () => {
      light.classList.toggle("lightBlue");
      },
  );


// seleziona tutti i paragrafi INSERIRE AL CLICK
window.addEventListener("click", () =>{
    let paragraph = document.getElementsByName("p");
    console.log(paragraph)
},
{
    once:true
}
);

const sum = (numOne, numTwo) => numOne + numTwo;



function calculator(operation, numbers) {
  let totOperation = 0;
  totOperation = operation(...numbers);
  return totOperation;
}

let operationChoice = prompt("Inserisci operazione: ");
let numbersChoiche = prompt("Inserisci numeri: ");
const numbers = numbersChoiche.split(",");
const parsedNumbers = [];

for (x of numbers) {
  parsedNumbers.push(parseInt(x));
}

if (operationChoice === "somma") {
  console.log(calculator(sum, parsedNumbers));
} 
setTimeout(() => {
    console.log(calculator(sum, parsedNumbers));
  }, 10000);




  
  let index = 0;

  function change() {
    let div = document.querySelector(".cerchio");
    let color = ["black", "blue", "brown", "green"];
    div.style.backgroundColor = color[index];
    index = (index + 1) % color.length;

  }

    
    setInterval(change, 1000);

    document.addEventListener("keypress",(event) => {
      if(event.key === "Enter"){

        clearInterval(index);
        index = null;
      }





    })
  
    
    
  


  

  

   
  
  
  
       
  
  
  
  

    


  
  
  
  