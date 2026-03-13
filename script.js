let difficulty = document.getElementById("difficulty").value;
let randomNumber = Math.floor(Math.random()*difficulty) + 1;
let attempts = 0;
let maxAttempts = 10;
let guessHistory = [];
function checkGuess(){
let guess = Number(document.getElementById("guessInput").value);
let message = document.getElementById("message");
if(!guess){
message.innerText="Enter a valid number!";
return;
}
attempts++;
guessHistory.push(guess);
let difference = Math.abs(randomNumber - guess);
if(guess > randomNumber){
message.innerText="📈 Too High!";
message.style.color="red";
}
else if(guess < randomNumber){
message.innerText="📉 Too Low!";
message.style.color="orange";
}
else{
let score = 100 - attempts*5;
message.innerText="🎉 Correct! Score: "+score;
message.style.color="green";
document.getElementById("guessInput").disabled=true;
}
if(difference<=5 && guess!==randomNumber){
message.innerText += " 🔥 Very Close!";
}
if(attempts>=maxAttempts && guess!==randomNumber){
message.innerText="❌ Game Over! Number was "+randomNumber;
message.style.color="black";
document.getElementById("guessInput").disabled=true;
}
document.getElementById("attempts").innerText =
"Attempts: "+attempts+" / "+maxAttempts;
document.getElementById("history").innerText =
"Previous guesses: "+guessHistory.join(", ");
document.getElementById("guessInput").value="";
}
function restartGame(){
difficulty = document.getElementById("difficulty").value;
randomNumber = Math.floor(Math.random()*difficulty) + 1;
attempts = 0;
guessHistory = [];
document.getElementById("guessInput").disabled=false;
document.getElementById("guessInput").value="";
document.getElementById("message").innerText="";
document.getElementById("attempts").innerText="";
document.getElementById("history").innerText="";
}
document.getElementById("guessInput").addEventListener("keydown", function(event){
if(event.key==="Enter"){
event.preventDefault();
checkGuess();
}
});