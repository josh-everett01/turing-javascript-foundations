class Pirate {
  constructor(name, job) {
    this.name = name;
    this.job = job;
    this.cursed = false;
    this.booty = 0;
    this.robShip = function () {
      this.booty = this.booty + 100;
      return 'YAARRR!'
    }
    if (this.job === undefined) {
      this.job = 'scallywag';
    }
  }
}


module.exports = Pirate;