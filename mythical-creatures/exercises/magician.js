class Magician {
  constructor(name, topHat) {
    this.name = name;
    this.topHat = true;
    this.spellCount = 0;
    this.confident = false;
    this.spellCount = 0;
    this.incantation = function (spell) {
      return spell.toUpperCase() + "!"
    }
    if (topHat === 'false' || topHat === false) {
      this.topHat = false;
    }

    this.cast = function () {
      this.spellCount++
      if (this.spellCount >= 3) {
        this.confident = true;
      }
      if (this.topHat === false) {
        return 'PULL DOVE FROM SLEEVE'
      } else if (this.topHat === true) {
        return 'PULL RABBIT FROM TOP HAT'
      }
    }
    this.performShowStopper = function () {
      if (this.confident === true) {
        return 'WOW! The magician totally just sawed that person in half!';
      }
      else if (this.confident === false) {
        return 'Oh no! Practice more before attempting this trick!'
      }
    }
  }
}


module.exports = Magician;