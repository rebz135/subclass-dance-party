var RandomDancer = function(top, left, timeBetweenSteps, data) {
  console.log("data", data);
  this.image = data.images.original;
  console.log("image", this.image)
  this.$node = $('<span class="dancer dancer-random"></span>');
  this.setPosition(top, left);
};

RandomDancer.prototype = Object.create(Dancer.prototype);
RandomDancer.prototype.constructor = RandomDancer;

RandomDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left,
    "background-size": "cover",                    
    "background-position": "center center",
    width: this.image.width / 2,
    height: this.image.height / 2,
    'background-image': "url("+ this.image.url +")"
  };
  this.$node.css(styleSettings);
};