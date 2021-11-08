const q = (selector) => document.querySelector(selector);


const render = (container, items) => {
  const elements = items.map((element) => 
    `<div>
      <h3>${element.title}</h3>
    </div>`
  );
  
  const content = elements.join('');

  container.innerHTML = content;
}

document.addEventListener('DOMContentLoaded', () => {
  const form = q('checkbox');
  const input = q('checkbox input');
  const list = q('div');
  
  render(list, app);
});