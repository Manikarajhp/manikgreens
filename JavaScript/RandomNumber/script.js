const generatedNumber = document.getElementById("generatedNumber");
const generateBtn = document.getElementById("generateBtn");

let value = 0;
generateBtn.onclick = function(){
    let minRange = document.getElementById("minRange").value;
    let maxRange = document.getElementById("maxRange").value;
    
    value = Math.floor(Math.random()*maxRange);
    if(value < minRange){
        value = value + (maxRange - minRange)
    }

    generatedNumber.textContent = value;
}
