class Vampire {
  constructor(name, pet) {
    this.name = name;
    this.pet = pet;
    if (pet === undefined) {
      this.pet = 'bat'
    }
    this.thirsty = true
    this.drink = function drink() {
      this.thirsty = false;
    }
  }
}

module.exports = Vampire;