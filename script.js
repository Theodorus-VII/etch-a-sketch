let mousedown = false;

document.body.onmousedown = ()=>{
    mousedown = true;
}
document.body.onmouseup = ()=>{
    mousedown = false;
}


function buildGrid(){
    let main_container = document.querySelector('.main-container');

    for (let i = 0; i < 16; i++){
        const container = document.createElement('div');
        container.classList.add('grid-row');
        for (let j = 0; j<16; j++){
            const grid_tile = document.createElement('div');

            grid_tile.classList.add('grid-tile');
            grid_tile.classList.add(`tile-${i}-${j}`);

            grid_tile.addEventListener('mouseenter', ()=>{
                console.log(grid_tile.style.backgroundColor);
                grid_tile.classList.toggle('tile-hover');
                if (mousedown){
                    grid_tile.style.backgroundColor = 'black';
                }
            })

            grid_tile.addEventListener('mouseleave', ()=>{
                console.log(grid_tile.style.backgroundColor);
                grid_tile.classList.toggle('tile-hover');
            })

            grid_tile.addEventListener('mousedown', ()=>{
                grid_tile.style.backgroundColor = 'black';
            })
            

            container.appendChild(grid_tile);
        }
        main_container.appendChild(container);
    }
}

buildGrid();