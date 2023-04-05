var userClickedPattern = [];   //array to store user generated pattern colors

var gamePattern = [];    //array to store game pattern generated by the system

var buttonColors = ['red', 'blue', 'green', 'yellow'];

var level = 0;


function nextSequence() {                    // function to generate next sequence
  var randomNumber = Math.floor(Math.random()*buttonColors.length);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);    // to generate the game pattern
  
$("#" + randomChosenColor).animate({opacity: 0}, 100)  // 
                  .delay(50)
                  .animate({opacity: 1}, 100)
                  .delay(50);
 $('h1').html("score =  " + level);
}
  

function checkAnswer(currentLevel){
   if(userClickedPattern.pop()===gamePattern.pop()){
    nextSequence();
    level++;
   }
   else
   {
    // $('h1').html("Game Over!!! ");
     level = 0;
     nextSequence();
     $("body").addClass("game-over");
     setTimeout(function(){
      $("body").removeClass('game-over');
    },600)
   }
}



$('.green').click(function() {
  var greenaudio = new Audio('sounds/green.mp3');
  greenaudio.play();
  userClickedPattern.push('green');
  $('.green').addClass('pressed');
  setTimeout(function(){
    $('.green').removeClass('pressed');
  },100)
});

$('.red').click(function() {
    var redaudio = new Audio('sounds/red.mp3');
    redaudio.play();
    userClickedPattern.push('red');
    $('.red').addClass('pressed');
    setTimeout(function(){
        $('.red').removeClass('pressed');
      },100)
    });


$('.blue').click(function() {
  var blueaudio = new Audio('sounds/blue.mp3');
  blueaudio.play();
  userClickedPattern.push('blue');
  $('.blue').addClass('pressed');
  setTimeout(function(){
    $('.blue').removeClass('pressed');
  },100)
});


$('.yellow').click(function() {
  var yellowaudio = new Audio('sounds/yellow.mp3');
  yellowaudio.play();
  userClickedPattern.push('yellow');
  $('.yellow').addClass('pressed');
  setTimeout(function(){
    $('.yellow').removeClass('pressed');
  },100)
});


var firstKeyPress = true;

$(document).keydown(function() {
  if (firstKeyPress) {
    nextSequence()
    
    firstKeyPress = false;
  }
});


$(document).click(function() {
  checkAnswer();
});

