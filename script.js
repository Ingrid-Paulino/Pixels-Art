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
            tableLine.appendChild(tableCelula)
            tableLine.appendChild(tableCelula)


        }
    }
} 
framePixels()









// let startWhite = document.getElementsByClassName('pixel');
// window.onload.startWhite.style.backgroundColor = 'white';
