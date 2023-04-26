/*L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.*/

const eleGrid = document.querySelector('.grid');
const btnPlay = document.querySelector('#play');
const selectLevel = document.querySelector('#level');
const eleRequest = document.querySelector('.request')

btnPlay.addEventListener('click',function(){
    eleRequest.classList.add('hidden');
    eleGrid.classList.add('active');

    const cell = parseInt(selectLevel.value)

    createGrid(cell,eleGrid)
});

function createGrid(cell,eleContainer){
   
eleContainer.innerHTML = '';

    for (let i = 1 ; i <= cell; i++){
        const eleCell = document.createElement('div');
        eleCell.innerHTML = i;
        eleCell.classList.add('cell');
        eleContainer.append(eleCell);

        eleCell.addEventListener('click',function(){
            eleCell.classList.toggle('clicked');
        });
    }
    console.log('hai cliccato la casella', cell)
}
