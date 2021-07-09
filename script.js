const creatTittle = document.createElement('h1');
document.body.appendChild(creatTittle).innerText = 'Paleta de Cores';
creatTittle.id = 'title'; 


const colorPalette = document.createElement('section');
colorPalette.id = 'color-palette'
document.body.appendChild(colorPalette);


const color = ['black', 'pink', 'blue', 'Yellow']

for(let index = 0; index < color.length; index += 1){
    const i = color[index]
    const divColor = document.createElement('div');
    divColor.style.backgroundColor = i;
    if(divColor.style.backgroundColor === 'black') {
        divColor.className = 'color selected'
        colorPalette.appendChild(divColor);
    }else {
        divColor.className = 'color';
        colorPalette.appendChild(divColor);
    }
}
    // let colorHaveSelected = document.getElementsByClassName('selected');
    // let selectColor = document.getElementsByClassName('color')
    // window.onload.colorHaveSelected.style.backgroundColor = color1;
    // let color1 = document.querySelector('color')[0];
    // let color2 = document.querySelector('color')[1];
    // let color3 = document.querySelector('color')[2];
    // let color4 = document.querySelector('color')[3];

    // let corSelecionada = selectColor.addEventListener('click', selectPalette);

//     function selectPalette() {
//         if(color2 = corSelecionada){
//             colorHaveSelected.classList.remove('selected');
//             color2.className = 'selected'  
//             let cor = color2;  
//             cor.style.backgroundColor = color2; 
//         }else if(color3 = corSelecionada) {
//             colorHaveSelected.classList.remove('selected');
//             color3.className = 'selected' 
//             let cor = color3;  
//             cor.style.backgroundColor = color3; 
//         }else if(color4 = corSelecionada) {
//             colorHaveSelected.classList.remove('selected');
//             color4.className = 'selected'
//             let cor = color4;  
//             cor.style.backgroundColor = color4; 
//         }else if(color1 = corSelecionada){
//             colorHaveSelected.classList.remove('selected');
//             color1.className = 'selected'
//             let cor = color0;  
//             cor.style.backgroundColor = color0; 
//         }

//         // let quadradinhos = document.getElementsByClassName('pixel');

//         // if(quadradinhos = 'click'){

//         // }

//         // pixel.style.backgroundColor = colorSelect;
// }; selectPalette()


    //  function selectFrameColor() {
        
    //     let frames = document.getElementsByClassName('pixel')

    //     if(pixel === 'click') {
    //         pixel = selectPalette
    //     }
    //  }
const createButton = document.createElement('button')
document.body.appendChild(createButton).innerText = 'Limpar'
createButton.id = 'clear-board'

let boardPixel = document.createElement('section');
document.body.appendChild(boardPixel)

let table = document.createElement('table');
boardPixel.appendChild(table);
table.id = 'pixel-board';

function framePixels(){
    for(let index = 0; index < 5; index += 1) {
        let tableLine = document.createElement('tr')
        table.appendChild(tableLine);
        for(let index2 = 0; index2 < 5; index2 += 1) {
            let tableCelula = document.createElement('td');
            tableCelula.classList.add('pixel')
            tableCelula.style.backgroundColor = 'white'
            tableLine.appendChild(tableCelula)
        }
    }
} 
framePixels()


