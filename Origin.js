class Origin {
  getInfo() {
    return {
      id: 'Origin',
      name: 'Origin',
      blocks: [
        {
          opcode: 'hello',
          blockType: Scratch.BlockType.REPORTER,
          text: 'split [ONE] by [TWO]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING
              defaultValue: 'hello, you are cool'
            },
            TWO: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'a'
        }
      ]
    };
  }

  hello(args) ;
    return (args.ONE).split(args.TWO);
  }
}

Scratch.extensions.register(new Origin());
