let board = []

let boardFull = true
let topLeft = board[0];
let topCenter = board[1];
let topRight = board[2];
let midLeft = board[3];
let midCenter = board[4];
let midRight = board[5];
let botLeft = board[6];
let botCenter = board[7];
let botRight = board[8];

function play(clickedId) {
  let playerSpan = document.getElementById("player")
  
  let clickedElement = document.getElementById(clickedId)
  if (playerSpan.innerText === 'X') {
    playerSpan.innerText = 'O'
    clickedElement.innerText = 'X'
    board[clickedId] = 'X'
  }
  else {
    playerSpan.innerText = 'X'
    clickedElement.innerText = 'O'
    board[clickedId] = 'O'

  }
  


  // if (topRight !== undefined && topRight === topCenter && topRight === topLeft){
  //   alert(`${topRight} is the winner`);

  // }

  if (board[0] !== undefined && board[0] === board[1] && board[0] === board[2]) {
    alert(`${board[0]} is the winmner`)
    return
  }

  if (board[0] !== undefined && board[0] === board[4] && board[0] === board[8]) {
    alert(`${board[0]} is the winmner`)
    return
  }
  if (board[0] !== undefined && board[0] === board[3] && board[0] === board[6]) {
    alert(`${board[0]} is the winmner`)
    return
  }
  if (board[1] !== undefined && board[1] === board[4] && board[1] === board[7]) {
    alert(`${board[1]} is the winmner`)
    return
  }
  if (board[2] !== undefined && board[2] === board[4] && board[2] === board[6]) {
    alert(`${board[2]} is the winmner`)
    return
  }
  if (board[2] !== undefined && board[2] === board[5] && board[2] === board[8]) {
    alert(`${board[0]} is the winmner`)
    return
  }
  if (board[8] !== undefined && board[8] === board[7] && board[8] === board[6]) {
    alert(`${board[8]} is the winmner`)
    return
  }

  
  
  for (let i = 0; i < 9; i++) {
    if (board[i] === undefined) {
      boardFull = false
    }
  }
  
  if (boardFull === true) {
    alert("it is a tie")
  }
}