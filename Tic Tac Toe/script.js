let boxes = document.querySelectorAll('.box');
let resetbtn = document.querySelector('.reset_btn');
let newgamebtn = document.querySelector('#new-game');
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');

let turn0 = true;    //playerX, PlayerO

const winPatterns =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

boxes.forEach(box => {
    box.addEventListener("click", () => {
        console.log("Box Was Clicked");
        
        if (turn0) {
            box.innerText = "O";
            turn0 = false;
        } else {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;               //box should not change its value if clicked again
    
        checkWinner();
    
    });
});

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;

    }
}

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
        
    }
}


const showWinner = (winner) =>{
    msg.innerText = ` Congratulations!! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
};

const checkWinner = () =>{
     for(patterns of winPatterns){
        
            let pos1Val = boxes[patterns[0]].innerText;
            let pos2Val = boxes[patterns[1]].innerText;
            let pos3Val = boxes[patterns[2]].innerText;

            if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
                if(pos1Val == pos2Val && pos2Val == pos3Val){
                    showWinner(pos1Val);
                    disableBoxes();

                }
            }
     }
};

const resetGame = () =>{
    enableBoxes();
    turn0 = true;
    msgContainer.classList.add("hide");
}

newgamebtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);
