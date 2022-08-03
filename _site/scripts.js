$('#game-button').click(function(){
  
    let gameOptions = [
      'Scrabble',
      'BackGammon',
      'Chess',
      'Checkers',
      'Monopoly',
      'ShitHead'
    ]
  
    let gameSuggestion = gameOptions[Math.floor(Math.random()*gameOptions.length)];
  
    $('#game-suggestion').text('You should play ' + gameSuggestion + ' for game tonight');
  
      alert('You should play ' + gameSuggestion + ' for game tonight!');
    
  });
  