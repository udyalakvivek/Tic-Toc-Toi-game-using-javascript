let boxes = document.querySelectorAll('.box')
let resetbtn = document.querySelector('#reset-btn')
let newgamebtn = document.querySelector('#new-btn')
let msgcontainer = document.querySelector('.msg-container')
// let count ;
let turnO = true // playerX , playerO
const winpattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],

];
boxes.forEach((box) => {
    box.addEventListener('click', () => {

        // console.log("box was clicked ");+
        if (turnO === true) { //player O
            box.innerHTML = 'O'
            turnO = false;
        } else {  // player X
            box.innerHTML = "X"
            turnO = true;
        }
        box.disabled = true;
        checkwin();
    });
});

const checkwin = () => {
   
    for (let pattern of winpattern) {
        // console.log([pattern[0]], [pattern[1]], [pattern[2]]);

        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("Winner", pos1val);
                showwinner(pos1val);
                
            }
        }
    }
 
}


const showwinner = (winner) => {
    msg.innerText = `Congraulation ,Winner is ${winner}`
    msgcontainer.classList.remove("hide")
    disabledbox();

}
const disabledbox = () => {
    for (box of boxes) {
        box.disabled = true;
    }
}

const resetgame = () => {
    turnO = true;
    enablebox();
    msgcontainer.classList.add("hide")
}
const enablebox = () => {
    for (box of boxes) {
        box.disabled = false;
        box.innerText = ""
    }
}
newgamebtn.addEventListener('click', resetgame);
resetbtn.addEventListener('click', resetgame);

