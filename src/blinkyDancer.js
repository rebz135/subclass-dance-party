var BlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.step = this.step.bind(this);
  this.step();
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;


BlinkyDancer.prototype.step = function() {
  let oldStep = Dancer.prototype.step.bind(this);
  oldStep();
  this.$node.toggle();
};

var BlinkyDancerBlue = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer-blue"></span>');
  this.setPosition(top, left);
  this.step = this.step.bind(this);
  this.step();
};

BlinkyDancerBlue.prototype = Object.create(Dancer.prototype);
BlinkyDancerBlue.prototype.constructor = BlinkyDancerBlue;


BlinkyDancerBlue.prototype.step = function() {
  let oldStep = Dancer.prototype.step.bind(this);
  oldStep();
  this.$node.toggle();
};

BlinkyDancerBlue.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

