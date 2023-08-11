
var turns =0;
var playerscore=0;
var computerscore=0;

function Play() 
{  
    const array = ['Rock', 'Paper', 'Scissor'];
     // Math random will generate a random index between 0 to 1 (but 1 is exclusive),
    let index = Math.floor(Math.random() * 3);
    let choice = array[index];
     return choice; 

}

function RockChoice() //will be called when the rock-button is chosen 
{
    
    turns++;
    document.getElementById('p1').innerHTML = 'You chose rock';
    let computer = Play()
    document.getElementById('p2').innerHTML= 'The computer chose: ' + computer; 
    
    if (computer =='Rock' && turns<=5) 
    { 
         document.getElementById('result').innerHTML='its a tie';
    }
    else if (computer=="Scissor" && turns<=5)
     { 
        document.getElementById('result').innerHTML='You won!'; 
        playerscore++;   document.getElementById('p4').innerHTML= 'Playerscore: '+ playerscore;
     }
    else if (computer=='Paper' && turns<=5) 
    { document.getElementById('result').innerHTML='You lose!';
     computerscore++;  document.getElementById('p5').innerHTML= 'Computerscore: '+ computerscore; 
    }
    else if (turns>5)
    {
        clearBoard()
    }
    document.getElementById('p3').innerHTML = 'Number of turns: ' + turns; 
    }
  

    function PaperChoice() 
    {
        
    turns++;
    document.getElementById('p1').innerHTML = 'You chose paper';
    let computer = Play()
    document.getElementById('p2').innerHTML= 'The computer chose: ' + computer; 
    
    if (computer =='Rock' && turns<=5) 
    { document.getElementById('result').innerHTML='You won!';
     playerscore++;  
     document.getElementById('p4').innerHTML= 'Playerscore: '+ playerscore; }

    else if (computer=="Scissor" && turns<=5) 
    { 
      document.getElementById('result').innerHTML='You lose!';
     computerscore++;
     document.getElementById('p5').innerHTML= 'Computerscore: '+ computerscore; 
     }
     
     else if (computer=='Paper' && turns<=5)  
     {
         document.getElementById('result').innerHTML='Its a tie!'; 
    }
    else if (turns>5)
    {
        clearBoard()
    }

    document.getElementById('p3').innerHTML= 'Number of turns: '+ turns; 

    }

    function clearBoard()
    {
       turns =0;
       playerscore=0;
       computerscore=0;
       document.getElementById('p3').innerHTML= 'Number of turns: ' + turns; 
       document.getElementById('p4').innerHTML= 'Playerscore: '+ playerscore;
       document.getElementById('p5').innerHTML= 'Computerscore: '+ computerscore; 
    }



function ScissorChoice() 
{
    turns++;
    document.getElementById('p1').innerHTML = 'You chose scissor';
    let computer = Play()
    document.getElementById('p2').innerHTML= 'The computer chose: ' + computer; 
    
    if (computer =='Rock' && turns<=5)
    {
        document.getElementById('result').innerHTML='You lose!'; 
        computerscore++;  document.getElementById('p5').innerHTML= 'Computerscore: '+ computerscore; 
    }

    else if (computer=="Scissor" && turns<=5) { document.getElementById('result').innerHTML='Its a tie!'; }

    else if (computer=='Paper' && turns<=5)
     {
      document.getElementById('result').innerHTML='You win!';
      playerscore++;  document.getElementById('p4').innerHTML= 'Playerscore: '+ playerscore; 
    }
    else if (turns>5)
    {
        clearBoard()
    }
    document.getElementById('p3').innerHTML= 'Number of turns: ' + turns; 
}
