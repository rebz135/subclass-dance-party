$(document).ready(function() {
  
  // we didn't really use the dancers array
  window.dancers = [];
  
  // old apikey, rate limited exceeded while testing. Will try again tmr. 
  // var apikey = VVEqW8XqU17C5W1o6Bl4yre9SlLGJ9hC
  
  // giphy random sticker api -> used to get stickers tagged with what was in the search bar
  var apikey = "1FB9YdkFdXsboWlCYrHWXe0bw7AHWyxk"
  $('.giphysticker').on('click', function(event) {
    var searchText = document.getElementById('searchtextsticker').value
    $.ajax({url: "http://api.giphy.com/v1/stickers/random?api_key=" + apikey + "&tag=" + searchText, 
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

  // giphy search api -> used to get gifs tagged with what was in the search bar
  $('.giphysearchbutton').on('click', function(event) {
    var searchText = document.getElementById('searchtext').value
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

  // giphy api -> used to get stickers tagged with what was in the search bar
  $('.giphybutton').on('click', function(event) {

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

