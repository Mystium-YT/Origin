class Origin {
  getInfo() {
    return {
      id: 'Origin',
      name: 'Strict Equality',
      blocks: [
        {
          opcode: 'split',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[ONE] strictly equals [TWO]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'apple'
            },
            TWO: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'l'
            }
          }
        }
      ]
    };
  }

  split(args) {
    return (args.ONE).split (args.TWO);
  }
}
Scratch.extensions.register(new Origin());
