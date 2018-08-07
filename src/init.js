$(document).ready(function() {
  window.dancers = [];
  // api key = VVEqW8XqU17C5W1o6Bl4yre9SlLGJ9hC
  $('.giphybutton').on('click', function(event) {
  
     
     
    // var promise = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=VVEqW8XqU17C5W1o6Bl4yre9SlLGJ9hC&limit=5");
    // promise.then(function(data) { console.log("success got data", data)}, console.log("didnt get it"))
    // // xhr.done(function(data) { console.log("success got data", data); });  
    var tester
    $.ajax({url: "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=VVEqW8XqU17C5W1o6Bl4yre9SlLGJ9hC&limit=5", 
      success: function(result){
        // console.log("result", result);
    
      // // make a dancer with a random position

      var dancer = new RandomDancer(
        $("body").height() * Math.random(),
        $("body").width() * Math.random(),
        Math.random() * 1000, 
        result.data[0]
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

