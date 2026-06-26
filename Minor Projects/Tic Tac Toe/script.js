let boxes = document.querySelectorAll('.button');
let resetbtn = document.getElementById('reset-btn');
let newGameBtn = document.getElementById('new-btn');
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');
let turnO = true;
let moveCount = 0;



let winpatterns = [
   [0,1,2],
   [0,3,6],
   [0,4,8],
   [1,4,7],
   [2,5,8],
   [2,4,6],
   [3,4,5],
   [6,7,8],
];

const resetGame = () => {
  turnO = true;
  moveCount = 0;
  enableBoxes();
  msgContainer.classList.add('hide');
}
boxes.forEach((box) => {
    box.addEventListener('click', () => {
        console.log('box clicked');
      if(turnO)
      {
        box.innerText = "O";
        box.style.color = "red";
        turnO = false;
      }
      else{
        box.innerText = "X";
        box.style.color = "blue";
        turnO = true;
      }

      box.disabled = true;
      moveCount++;

      checkWinner();
    })
});

const disableBoxes = () => {
  for ( let box of boxes) {
    box.disabled = true;
  }
};


const enableBoxes = () => {
  for ( let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
}

const showDraw = () => {   
  msg.innerText = "It's a Draw!";
  msgContainer.classList.remove('hide');
};


const showWinner = (winner) => {
  msg.innerText = `Congratulations,Winner is ${winner} !! `;
  msgContainer.classList.remove('hide');
}

const checkWinner = () => {
  for(let pattern of winpatterns)   {        
         let pos1Val = boxes[pattern[0]].innerText;
         let pos2Val = boxes[pattern[1]].innerText; 
         let pos3Val = boxes[pattern[2]].innerText;

         if(pos1Val != "" && pos2Val != "" && pos3Val != "") {
             if(pos1Val === pos2Val && pos2Val === pos3Val) {
              console.log("winner",pos1Val);
              disableBoxes();
              showWinner(pos1Val);
           }
      
    }
  }
if (moveCount === 9) {
    showDraw();
  }


};
newGameBtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);

