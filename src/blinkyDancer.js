// blinky
var BlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer dancer-red"></span>');
  this.setPosition = this.setPosition.bind(this);
  this.setPosition(top, left);
  this.step = this.step.bind(this);
  this.step();
  window.dancers.push(this);
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function() {
  let oldStep = Dancer.prototype.step.bind(this);
  oldStep();
};

// blink blue 
var BlinkyDancerBlue = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer dancer-blue"></span>');
  this.setPosition = this.setPosition.bind(this);
  this.setPosition(top, left);
  this.step = this.step.bind(this);
  this.step();
  window.dancers.push(this);
};

BlinkyDancerBlue.prototype = Object.create(Dancer.prototype);
BlinkyDancerBlue.prototype.constructor = BlinkyDancerBlue;

BlinkyDancerBlue.prototype.step = function() {
  let oldStep = Dancer.prototype.step.bind(this);
  oldStep();
};




