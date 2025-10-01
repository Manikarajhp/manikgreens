const startBtn = document.getElementById("startBtn");
const checkBtn = document.getElementById("checkBtn");
let response = document.getElementById("response");



let computerGuess = 0;
startBtn.onclick = function(){
    let minRange = document.getElementById("minRange");
    let maxRange = document.getElementById("maxRange");
    
    computerGuess = Math.floor(Math.random()*maxRange.value);
    if(computerGuess < minRange.value){
        computerGuess = computerGuess + (maxRange.value - minRange.value)
    }
    startBtn.disabled = true;
    checkBtn.disabled = false;
    console.log(computerGuess);
    
    
}


let count = 1;
const Count = document.getElementById("Count");
checkBtn.onclick = function(){
    Count.textContent = count;
    let Guess = document.getElementById("Guess").value;
    
    if(Guess == ''){
        response.textContent = "Enter your Guess"
        count++;
    }else if(Guess < 0){
        response.textContent = "My guess is not a negative value."
        count++;
    }else if(Guess == computerGuess){
        response.textContent = "You Win!🎉";
        startBtn.disabled = false;
        checkBtn.disabled = true;
        count = 1;
    }else if(Guess < computerGuess){
        response.textContent = "Your Guess is smaller than mine."
        count++;
    }else{
        response.textContent = "Your Guess is Greater than mine."
        count++;
    }

}

