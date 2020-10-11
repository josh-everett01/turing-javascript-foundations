class Dragon {
  constructor(name, rider, color) {
    this.name = name;
    this.rider = rider;
    this.color = color;
    this.hungry = true;

    this.timesAte = 0;
  }
  eat() {
    this.timesAte++
    if (this.timesAte === 3) {
      this.hungry = false;
    }
  }
}

module.exports = Dragon