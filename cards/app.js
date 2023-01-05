$(function() {
    let baseURL = 'https://deckofcardsapi.com/api/deck';
  
    $.getJSON(`${baseURL}/new/draw/`, function(data){
      let {suit, value} = data.cards[0];
      console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
    });
  
    $.getJSON(`${baseURL}/new/draw/`, function(data){
      let firstCard = data.cards[0];
      let deckId = data.deck_id;
      $.getJSON(`${baseURL}/${deckId}/draw/`, function(data){
        let secondCard = data.cards[0];
        [firstCard, secondCard].forEach(function(card){
          console.log(
            `${card.value.toLowerCase()} of ${card.suit.toLowerCase()}`
          );
        });
      });
    });
  
    let deckId = null;
    let $btn = $('button');
    let $table = $('#table');
    $.getJSON(`${baseURL}/new/shuffle/`, function(data){
      deckId = data.deck_id;
      $btn.show();
    });
    $btn.on('click', function() {
      $.getJSON(`${baseURL}/${deckId}/draw/`, function(data){
        let cardSrc = data.cards[0].image;
        $table.append(
          $('<img>', {src: cardSrc,})
        );
        if (data.remaining === 0) $btn.remove();
      });
    });
  });
  