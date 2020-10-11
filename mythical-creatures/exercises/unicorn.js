class Unicorn {
  constructor(name, color) {
    this.name = name;
    this.color = color;
    if (color === undefined) {
      this.color = 'white'
    }
    this.isWhite = function isWhite(color) {
      if (color === 'white') {
        return true
      } else {
        return false;
      }
    }
    this.says = function says(phrase) {
      return `**;* ${phrase} *;**`
    }
  }
}

module.exports = Unicorn;
