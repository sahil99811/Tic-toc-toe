const boxes=document.querySelectorAll(".box");
const gameInfo=document.querySelector(".game-info");
const newGameBtn=document.querySelector(".btn");
let currentPlayer;
let gameGrid
const winningPositions=[
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[2,4,6],[0,4,8]
];
//lets create a function to initialize game
let answer;
function initGame()
{  answer="";
   currentPlayer="X";
   gameGrid=["","","","","","","","",""];
   boxes.forEach((box,index)=>{
     box.innerText="";
     boxes[index].style.pointerEvents="all";
     boxes[index].classList.remove("win");
   })
   newGameBtn.classList.remove("active");
   let x=`Current Player -${currentPlayer}`;
   gameInfo.innerText=x;
}
initGame();
boxes.forEach((box,index)=>{
    box.addEventListener("click",()=>{
        if(answer=="")
        handleClick(index);
    })
})
function handleClick(index){
    if(gameGrid[index]==="")
    {
        boxes[index].innerText=currentPlayer;
        gameGrid[index]=currentPlayer;
        boxes[index].style.pointerEvents="none";
        swapTurn();
        checkGameOver();
    }
}
function swapTurn()
{
    if(currentPlayer==="X")
    {
        currentPlayer="O";
    }
    else
    {
        currentPlayer="X"
    }
    gameInfo.innerText=`Current Player -${currentPlayer}`;
}
function checkGameOver()
{
    
    winningPositions.forEach((position)=>{
        if((gameGrid[position[0]]!==""||gameGrid[position[1]]!==""||gameGrid[position[2]]!="")&&((gameGrid[position[0]]===gameGrid[position[1]])&&(gameGrid[position[1]]===gameGrid[position[2]])))
        {
            if(gameGrid[position[0]]=="X")
            answer="X"
            else
            answer="O";
            boxes[position[0]].classList.add("win");
            boxes[position[1]].classList.add("win");
            boxes[position[2]].classList.add("win");
        }
        
        if(answer!=""){
            gameInfo.innerText=`Winner Player -${answer}`;
            newGameBtn.classList.add("active");
        }
        else if(gameGrid[0]!=""&&gameGrid[1]!=""&&gameGrid[2]!=""&&gameGrid[3]!=""&&gameGrid[4]!=""&&gameGrid[5]!=""&&gameGrid[6]!=""&&gameGrid[7]!=""&&gameGrid[8]!=""&&gameGrid[9]!="")
        {
            gameInfo.innerText=`No one Wins a game`;
            newGameBtn.classList.add("active");
        }
    })
}
newGameBtn.addEventListener("click",initGame);
