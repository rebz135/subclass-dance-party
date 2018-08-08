
// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {
  this.timeBetweenSteps = timeBetweenSteps;
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.setPosition(top, left);
};  

Dancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  let dancer = this;
  let top = parseFloat(this.$node.css('top'));
  let left = parseFloat(this.$node.css('left'));
  let stepUp = function() {dancer.$node.css({'top': top += 40})};
  let stepRight = function() {dancer.$node.css({'left': left += 40})};
  let stepDown = function() {dancer.$node.css({'top': top -= 40})};
  let stepLeft = function() {dancer.$node.css({'left': left -= 40})};
  setTimeout(stepUp, 100);
  setTimeout(stepRight, 200);
  setTimeout(stepDown, 300);
  setTimeout(stepLeft, 400);
  setTimeout(dancer.step, this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

