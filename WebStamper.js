(function (ext) {
  // Load the image from the specified URL and add it as a sprite to the Scratch stage
  function loadImageAndStamp(url) {
    var img = new Image();
    img.onload = function() {
      // Create a new sprite with the image as its costume
      var sprite = new ScratchSprite();
      sprite.costumes.push(new ScratchCostume(null, img));
      sprite.scale = 1;
      sprite.visible = true;
      // Add the sprite to the Scratch stage
      vm.runtime.targets.push(sprite);
      // Notify Scratch that the sprite has been added
      vm.postIOData('addsprite', sprite.toJSON());
    };
    img.src = url;
  }

  // Define the extension
  ext._shutdown = function() {};
  ext._getStatus = function() {
    return {status: 2, msg: 'Ready'};
  };
  ext.stampImage = function(url) {
    loadImageAndStamp(url);
  };

  // Register the extension
  var descriptor = {
    blocks: [
      [' ', 'stamp image from url %s', 'stampImage', 'https://scratch.mit.edu/static/images/scratch-og.png'],
    ],
  };
  ScratchExtensions.register('Web Image Stamper', descriptor, ext);
})({});
