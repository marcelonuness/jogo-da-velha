document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll('.square')

    squares.forEach(square => {
        square.addEventListener('click', handleClick)
    })
});

function handleClick(event) {
    let square = event.target
    let position = square.id

    if(handleMove(position) == true){
        
        setTimeout(()=>{
            
            if(playerTime == 0) {
                playerTime = "de escudo"
            } else {
                playerTime = "de espadas"
            }

            let textovitoria = document.querySelector(".msg-vitoria")
            let container2 = document.querySelector("#container2")
            let container = document.querySelector("#container")

            container.style.display = "none"
            container2.style.display = "flex"          
            textovitoria.innerHTML = `o jogador vitorioso foi o ${playerTime} !!!`
            
        }, 10)       
        
    }

    updateSquare(position)
}

function updateSquare(position) {
    let square = document.getElementById(position.toString())
    let symbol = board[position]
    square.innerHTML = `<div class='${symbol}'></div>`
}


//REINICIAR:
let restart = document.getElementById("restart")

restart.addEventListener("click", ()=>{
    
    let container2 = document.querySelector("#container2")
    let container = document.querySelector("#container")

    container2.style.display = "none"
    container.style.display = "flex"
    
})