class Origin {
  getInfo () {
    return {
      id: 'origin',
      name: 'Origin Utils',
      blocks: [
        {
          opcode: 'split',
          text: 'split [TEXT] by [SPLITCHAR]',
          blockType: Scratch.BlockType.REPORTER,
          arguments: {
            TEXT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 1
            },
            SPLITCHAR: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 1
            }
          }
        }
      ]
    }
  }

  split (args) {
    entryArray = args.TEXT.split(args.SPLITCHAR)
    return entryArray
  }
}

Scratch.extensions.register(new Origin())
