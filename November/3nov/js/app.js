const app = [
    {
      title: "delectus aut autem",
      "completed": false
    },
    {
      title: "quis ut nam facilis et officia qui",
      "completed": false
    },
    {
      title: "fugiat veniam minus",
      "completed": false
    },
    {
      title: "et porro tempora",
      "completed": true
    },
    {
      title: "laboriosam mollitia et enim quasi adipisci quia providen  illum",
      "completed": false
    },
    {
      title: "qui ullam ratione quibusdam voluptatem quia omnis",
      "completed": false
    },
    {
      title: "illo expedita consequatur quia in",
      "completed": false
    },
    {
      title: "quo adipisci enim quam ut ab",
      "completed": true
    },
    {
      title: "molestiae perspiciatis ipsa",
      "completed": false
    },
    {
      title: "illo est ratione doloremque quia maiores aut",
      "completed": true
    }
  ]


  
  const q = (selector) => document.querySelector(selector);
  const btnPop = document.querySelector('#btnPop');
  
  document.addEventListener('DOMContentLoaded', () => {
      const form = q('form');
  
      render(form, app);
  });
  
  
  const render = (container, items) => {
      const elements = items.map((element) => {
          if (element.completed === true) {
              return `<form>
              <input type="checkbox" name="lorem" id="box" checked>
              <label for="lorem">${element.title}</label>
            </form>`
          } else  {
              return `<form>
              <input type="checkbox" name="lorem" id="box">
              <label for="lorem">${element.title}</label>
            </form>`
          }
      });
  
      const content = elements.join('');
      container.innerHTML = content;
    }
  
  
  // aggiungere un pulsante che al click rimuove l'ultimo elemento della lista con il metodo .pop() aggiornando il render in pagina.
  
  const content = elements.join(" ");
  
  btnPop.addEventListener('click', () => {
      elements.pop("");
      const content = elements.join(" ");
      container.innerHTML = content;
  });
  
  container.innerHTML = content;