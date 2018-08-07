var RandomDancer = function(top, left, timeBetweenSteps, data) {
  this.image = data;
  Dancer.call(this, top, left, timeBetweenSteps);
  console.log("data",this.image.images.original)
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
  // this.$node.toggle();
};

RandomDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left,
    width: this.image.images.original.width,
    height: this.image.images.original.height,
    'background-image': "url("+ this.image.images.original.url +")"
  };
  this.$node.css(styleSettings);
};