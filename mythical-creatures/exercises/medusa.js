const Person = require("./person");

class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
    this.stareCount = 0;
    this.stare = function (Person) {
      this.stareCount++;
      Person.stoned = true;
      if (this.statues.length < 3) {
        this.statues.push(Person);
      } else if (this.statues.length === 3) {
        this.statues[0].stoned = false;
        this.statues.shift()
        this.statues.push(Person);
      }
    }
  }
}

module.exports = Medusa;