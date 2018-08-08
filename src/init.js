$(document).ready(function() {
  window.dancers = [];
  
  // old apikey, rate limited exceeded while testing. Will try again tmr. 
  // var apikey = VVEqW8XqU17C5W1o6Bl4yre9SlLGJ9hC

  // new apikey, just to make sure everything went well before going to sleep
  var apikey = "1FB9YdkFdXsboWlCYrHWXe0bw7AHWyxk"
  $('.giphysticker').on('click', function(event) {

    $.ajax({url: "http://api.giphy.com/v1/stickers/random?api_key=" + apikey, 
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

    $.ajax({url: "http://api.giphy.com/v1/gifs/random?api_key=" + apikey + "&tag=" + searchText, 
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
    $.ajax({url: "http://api.giphy.com/v1/gifs/random?api_key=" + apikey + "&tag=dance", 
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
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    
    $('.dancer').hover(function() {
      $(this).fadeOut( 100 );
      $(this).fadeIn( 500 );
      $(this).css({"border": "20px solid yellow"})},
      function(){
        $(this).css({"border": "10px solid blue"})
      });
  });
  
  $('.lineup').on('click', function(event) {
    $('.dancer-blue, .dancer').css({"top": "50%"})
  });
  
});

