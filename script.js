

let humanscore=0;
let aiscore=0;
const jsConfetti = new JSConfetti()
function play(user){
    let num=Math.random()*10;
    console.log(num);
    let ai;

    if (num>=0 && num<=3) ai="scissor";
    else if(num>3 && num<=7) ai = "paper";
    else ai= "rock";

    document.getElementById('user').innerHTML = "Your Choice " + user;
    document.getElementById('ai').innerHTML = "AI Choice " + ai;

    if ((user=="paper" && ai=="rock") ||
        (user == "rock" && ai == "scissor") ||
        (user == "scissor" && ai == "paper"))
        {
        document.getElementById('result').innerHTML = "You Win";
        humanscore++;
        jsConfetti.addConfetti()
    }
    else if(
        (ai== "paper" && user== "rock") ||
        (ai=="rock" && user=="scissor") ||
        (ai=="scissor" && user=="paper")
    ){
        document.getElementById('result').innerHTML = "AI Wins";
        aiscore++;
    }
    else {
        document.getElementById('result').innerHTML = "Game Draw";
    }
    document.getElementById('humanscore').innerHTML = "Your Score: " + humanscore;
    document.getElementById('aiscore').innerHTML = "AI Score: " + aiscore;
}
