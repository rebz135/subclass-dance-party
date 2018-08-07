$(document).ready(function() {
  window.dancers = [];
  // api key = VVEqW8XqU17C5W1o6Bl4yre9SlLGJ9hC

  $('.giphysticker').on('click', function(event) {

    $.ajax({url: "http://api.giphy.com/v1/stickers/random?api_key=VVEqW8XqU17C5W1o6Bl4yre9SlLGJ9hC", 
      success: function(result){

      var dancer = new RandomDancer(
        $("body").height() * Math.random(),
        $("body").width() * Math.random(),
        Math.random() * 1000, 
        result.data
      );
      $('body').append(dancer.$node);
    }});
  });

  $('.giphysearchbutton').on('click', function(event) {
  
    var searchText = document.getElementById('searchtext').value
    console.log("searchtext",searchText);

    $.ajax({url: "http://api.giphy.com/v1/gifs/random?api_key=VVEqW8XqU17C5W1o6Bl4yre9SlLGJ9hC&tag=" + searchText, 
      success: function(result){

      var dancer = new RandomDancer(
        $("body").height() * Math.random(),
        $("body").width() * Math.random(),
        Math.random() * 1000, 
        result.data
      );
      $('body').append(dancer.$node);
    }});
  });

  $('.giphybutton').on('click', function(event) {
  
     
     
    // var promise = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=VVEqW8XqU17C5W1o6Bl4yre9SlLGJ9hC&limit=5");
    // a working test
    // http://api.giphy.com/v1/gifs/random?api_key=VVEqW8XqU17C5W1o6Bl4yre9SlLGJ9hC
    $.ajax({url: "http://api.giphy.com/v1/gifs/random?api_key=VVEqW8XqU17C5W1o6Bl4yre9SlLGJ9hC&tag=dance", 
      success: function(result){
    

      var dancer = new RandomDancer(
        $("body").height() * Math.random(),
        $("body").width() * Math.random(),
        Math.random() * 1000, 
        result.data
      );
      $('body').append(dancer.$node);
  
    }});
  
  
  
  
  
  });
 
  
  $('.addDancerButton').on('click', function(event) {
  
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    console.log(dancerMakerFunctionName);
    console.log(window[dancerMakerFunctionName]);
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
  });
});

