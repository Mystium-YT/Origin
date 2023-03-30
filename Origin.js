class Origin {
  getInfo () {
    return {
      id: 'origin',
      name: 'Origin Utils',
      blocks: [
        {
          opcode: 'str',
          text: 'str([TEXT])',
          blockType: Scratch.BlockType.REPORTER,
          arguments: {
            TEXT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 1
            },
            opcode: 'destring',
            text: 'destring([TEXT])',
            blockType: Scratch.BlockType.REPORTER,
            arguments: {
              TEXT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '"Hello"'
              }
            }
          }
        }
      ]
    }
  }

  str (args) {
    return '"' + args.TEXT + '"'
  }

  destring (args) {
    if (args.TEXT[1] === '"' && args.TEXT[args.TEXT.length]) { return args.TEXT } else { return 'not a string' }
  }
}

Scratch.extensions.register(new Origin())

