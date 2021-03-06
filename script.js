// Requisito 1 - Adicione à página o título "Paleta de Cores".
const creatTittle = document.createElement('h1');
document.body.appendChild(creatTittle).innerText = 'Paleta de Cores';
creatTittle.id = 'title';

// Requisito 2 - Adicione à página uma paleta de quatro cores distintas.
const colorPalette = document.createElement('section');
colorPalette.id = 'color-palette';
document.body.appendChild(colorPalette);

// Requisito 3 - Adicione a cor preta como a primeira cor da paleta de cores.
const color = ['black', 'pink', 'blue', 'Yellow'];
for (let index = 0; index < color.length; index += 1) {
  const i = color[index];
  const divColor = document.createElement('div');
  divColor.style.backgroundColor = i;
  if (divColor.style.backgroundColor === 'black') {
    divColor.className = 'color selected';
    colorPalette.appendChild(divColor);
  } else {
    divColor.className = 'color';
    colorPalette.appendChild(divColor);
  }
}

// Requisito 9 - Crie um botão que, ao ser clicado, limpa o quadro preenchendo a cor de todos seus pixels com branco.
const createButton = document.createElement('button');
document.body.appendChild(createButton).innerText = 'Limpar';
createButton.id = 'clear-board';

function pintaTudoBranco() {
  const pixel = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].style.backgroundColor = 'white';
  }
}
createButton.addEventListener('click', pintaTudoBranco);

// Requisito 4 - Adicione à página um quadro de pixels, com 25 pixels.
const boardPixel = document.createElement('section');
document.body.appendChild(boardPixel);

const table = document.createElement('table');
boardPixel.appendChild(table);
table.id = 'pixel-board';

function framePixels() {
  for (let index = 0; index < 5; index += 1) {
    const tableLine = document.createElement('tr');
    table.appendChild(tableLine);
    for (let index2 = 0; index2 < 5; index2 += 1) {
      const tableCelula = document.createElement('td');
      tableCelula.classList.add('pixel');
      tableCelula.style.backgroundColor = 'white';
      tableLine.appendChild(tableCelula);
    }
  }
}
framePixels();

// clicar na paleta
const paletaDeColor = document.querySelector('#color-palette');
function selectColor(event) {
  const selected = document.querySelectorAll('.selected');

  for (let i = 0; i < selected.length; i += 1) {
    selected[i].classList.remove('selected');
  }
  event.target.classList.add('selected');
}
paletaDeColor.addEventListener('click', selectColor);

const quadroPixel = document.querySelector('#pixel-board');
console.log(quadroPixel);
function pintaFrime(event) {
  const selected = document.querySelector('.selected');
  console.log(selected);
  const cor = selected.style.backgroundColor;
  event.target.style.backgroundColor = cor;
}
quadroPixel.addEventListener('click', pintaFrime);

// Bonus
const createInput = document.createElement('input');
document.body.appendChild(createInput).id = 'board-size';
const buttonInput = document.createElement('button');
document.body.appendChild(buttonInput).innerText = 'VQV';
buttonInput.id = 'generate-board';
