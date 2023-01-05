let baseURL = "http://numbersapi.com";
let number = 8;

$.getJSON(`${baseURL}/${number}?json`, function(data){
  console.log(data);
});

let numbers = [1, 10, 66, 99];
$.getJSON(`${baseURL}/${numbers}?json`, function(data){
  console.log(data);
});

let facts = [];
$.getJSON(`${baseURL}/${number}?json`, function(data){
  facts.push(data.text);
  $.getJSON(`${baseURL}/${number}?json`, function(data){
    facts.push(data.text);
    $.getJSON(`${baseURL}/${number}?json`, function(data){
      facts.push(data.text);
      $.getJSON(`${baseURL}/${number}?json`, function(data){
        facts.push(data.text);
        facts.forEach(fact => {
          $("body").append(`<p>${fact}</p>`);
        });
      });
    });
  });
});