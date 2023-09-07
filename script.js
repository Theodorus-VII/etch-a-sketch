let mousedown = false;

let grid = document.querySelector('.grid-container');
grid.onmousedown = ()=>{
    console.log('mousedown')
    mousedown = true;
}
grid.onmouseup = ()=>{
    console.log('mouseup')
    mousedown = false;
}

let COLOR = 'black'

let slider = document.querySelector('#input-grid-slider');


function updateSlider(value){
    let slider_preview = document.querySelector('.grid-size-preview');
    slider_preview.textContent = `${value}x${value}`;
}

function buildGrid(grid_size=16){
    let grid = document.querySelector('.grid-container');
    grid.setAttribute('draggable', 'false'); 

    for (let i = 0; i < grid_size; i++){
        const container = document.createElement('div');
        container.setAttribute('draggable', 'false');
        container.classList.add('grid-row');
        container.style.height = `${(1/grid_size)*100}%`;
        for (let j = 0; j<grid_size; j++){
            const grid_tile = document.createElement('div');

            grid_tile.classList.add('grid-tile');
            grid_tile.classList.add(`tile-${i}-${j}`);

            grid_tile.style.width = `${(1/grid_size)*100}%`
            grid_tile.setAttribute('draggable', 'false'); 
            grid_tile.setAttribute('ondragstart', 'return false;')
            

            grid_tile.addEventListener('mouseenter', ()=>{
                if (mousedown){
                    grid_tile.style.backgroundColor = COLOR;
                }
                else{
                    grid_tile.classList.toggle('tile-hover');
                }
            })
            grid_tile.addEventListener('mouseleave', ()=>{
                if (mousedown) return;
                grid_tile.classList.toggle('tile-hover');
            })

            grid_tile.addEventListener('mousedown', ()=>{
                if (grid_tile.style.backgroundColor) return;
                grid_tile.style.backgroundColor = COLOR;
            })
            container.appendChild(grid_tile);
        }
        grid.appendChild(container);
    }
}

function rebuildGrid(){
    let grid_size = document.getElementById('input-grid-slider').value;
    document.querySelector('.grid-container').innerHTML = "";
    buildGrid(grid_size);
}

buildGrid(50);