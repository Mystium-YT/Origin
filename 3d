class ThreeExtension {
  getInfo () {
    return {
      id: 'three',
      name: 'Three.js',
      blocks: [
        {
          opcode: 'showModel',
          blockType: Scratch.BlockType.COMMAND,
          text: 'show model [MODEL]',
          arguments: {
            MODEL: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'model.obj'
            }
          }
        }
      ]
    };
  }

  showModel ({ MODEL }) {
    const loader = new THREE.OBJLoader();
    loader.load(MODEL, (object) => {
      const sprite = new ThreeSprite();
      sprite._scene.add(object);
      sprite._camera.position.z = 5;
      sprite._camera.lookAt(new THREE.Vector3());
      sprite.visible = true;
      sprite.costumes = [
        {
          name: '3D Model',
          bitmapResolution: 2,
          rotationCenterX: 0,
          rotationCenterY: 0,
          skinId: 0,
          imageData: sprite._surface.renderer._gl.canvas.toDataURL()
        }
      ];
      this.runtime.addSprite(sprite);
    });
  }
}

Scratch.extensions.register(new ThreeExtension());
