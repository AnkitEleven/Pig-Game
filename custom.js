'use strict';
console.log("hello world");

let currentPlayer0 = document.querySelector(".current-player-0");
let currentPlayer1 = document.querySelector(".current-player-1");
let player0 = document.querySelector(".player-0");
let player1 = document.querySelector(".player-1");
let totalsum0 = document.querySelector(".score-player-0");
let totalsum1 = document.querySelector(".score-player-1");
let holdButton = document.querySelector(".hold");
let newbutton = document.querySelector(".newgame");
let totalRotation = 0;
let rolldice = document.querySelector(".rolldice");
let score = 0;
let currentPlayer = 0;
let sum  = [0, 0];
const switchPlayer = function( )
{
    
    currentPlayer = (currentPlayer === 0) ? 1 : 0;
    player0.classList.toggle("activeplayer");
    player1.classList.toggle("activeplayer");
};
rolldice.addEventListener("click", function() {
    let diceValue = Math.trunc(Math.random() * 6 + 1);
    let image = document.querySelector(".diceimage");
     totalRotation += 3600;
    image.style.transform = `rotate3d(1, 1, 1, ${totalRotation}deg)`;
    image.src = `dice${diceValue}.png`;
    if(diceValue !=1)
    {

        score = diceValue+ score;
        document.querySelector(`.current-player-${currentPlayer}`).textContent = score;
        
    }
    else
    {
        score = 0;
        document.querySelector(`.current-player-${currentPlayer}`).textContent = score;
        switchPlayer();
        
    }
});

holdButton.addEventListener("click", function() 
{
    sum[currentPlayer] += score;
    if(sum[currentPlayer] >=20)
    {
        document.querySelector(`.score-player-${currentPlayer}`).textContent = sum[currentPlayer];
        document.querySelector(`.player-${currentPlayer}`).classList.add("won");
        rolldice.disabled = true;
        rolldice.style.border = "1px solid red";
        holdButton.style.border = "1px solid red";
        holdButton.disabled = true;
        newbutton.disabled = false;
        newbutton.addEventListener("click" , function( )
        {
            
            player0.classList.add("activeplayer");
            player1.classList.remove("activeplayer");
            document.querySelector(`.player-${currentPlayer}`).classList.remove("won");
             score = 0;
            currentPlayer = 0;
            sum  = [0, 0];
            document.querySelector(`.score-player-0`).textContent = 0;
            document.querySelector(`.score-player-1`).textContent = 0;
            document.querySelector(`.current-player-0`).textContent = 0;
            document.querySelector(`.current-player-1`).textContent = 0;
          
            holdButton.disabled = false;
            rolldice.disabled = false;
            newbutton.disabled = true;
        });
    }
    else
        {
         // console.log(currentPlayer);
    
    console.log(sum[currentPlayer]);
    document.querySelector(`.current-player-${currentPlayer}`).textContent = 0;
    document.querySelector(`.score-player-${currentPlayer}`).textContent = sum[currentPlayer];
        switchPlayer();
        score = 0;
    }
   
   
   
   
});

// Ensure the following line is placed within the appropriate context (e.g., inside a function or event handler)
// document.querySelector(`.score-player-${currentPlayer}`).textContent = sum[currentPlayer];
