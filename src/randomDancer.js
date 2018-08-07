var RandomDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer-random"></span>');
  this.setPosition(top, left);
  this.step = this.step.bind(this);
  this.step();
};

RandomDancer.prototype = Object.create(Dancer.prototype);
RandomDancer.prototype.constructor = RandomDancer;


RandomDancer.prototype.step = function() {
  let oldStep = Dancer.prototype.step.bind(this);
  oldStep();
  this.$node.toggle();
};

RandomDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
    // background-image:;
  };
  this.$node.css(styleSettings);
};