$(document).ready(function() {
  window.dancers = [];
  

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */
     
    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var gif;
    var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=VVEqW8XqU17C5W1o6Bl4yre9SlLGJ9hC&limit=5");
    xhr.done(function(data) { 
      console.log("success got data", data);
      console.log(data);
      gif = data;
    });
    console.log("gif:", gif);
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

