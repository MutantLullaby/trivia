// Trivia game Psuedo Code

// Welcome Page with msg "Welcome to Disney Trivia"
// Directions?
// Three strikes and you lose.
// The user should type their name.
// When user clicks button to submit their name the first question appears

$(document).ready(function() {

var playerName = '';
var playerAnswer1 = '';
var answer1 = "Slumber Party Panic" 
//hide player name

$('#show-player-name').hide();
$('question').hide();
//allow user to type name immediately 

$('#player-Name').focus(); 

//when user submits name
function removeWelcomeScreen() {
  $('#welcome-screen').detach();
  $('#show-player-name').show().addClass ('animated fadeIn');
  $('#question1').show().addClass('animated fadeIn')
};

  // Store player name
  $('#name-button').on('click', function(e) {
    e.preventDefault(); 
    // prevents form from submitting to a database
    
    playerName = $('#player-name').val();
    console.log(playerName);
    $('#show-player-name').text(playerName);
    $('#welcome-screen').addClass('animated fadeOut');
    setTimeout(removeWelcomeScreen, 1000);
  });

 //store answer 1
$('#question1-btn').on('click', function(e) {
  e.preventDefault(); //prevents form from submitting to a database

  playerAnswer1 = $('#input-question1').val().trim();
  console.log(answer1);
  showPlayerAnswer1();
});

// show answers
function showPlayerAnswer1() {
  $('#show-player-answer1').text(playerAnswer);
  $('#correct-answer').text(answer1)
};

});


