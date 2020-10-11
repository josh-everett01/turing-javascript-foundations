class Hobbit {
  constructor(name) {
    this.name = name;
    this.age = 0;
    this.child = true;
    this.adult = false;
    this.old = false;
    this.hasRing = false;

    if (this.name === 'Frodo') {
      this.hasRing = true;
    }

    this.celebrateBirthday = function () {
      this.age++


      if (this.age >= 101) {
        this.old = true;
      }
      else if (this.age >= 33) {
        this.adult = true;
        this.child = false;
      }
      else if (this.age < 32) {
        this.child = true;
        this.adult = false;
      }
    }

  }
}


module.exports = Hobbit;