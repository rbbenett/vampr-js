class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;

  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let numberOfVampire = 0;
    let currentVampire = this;

    while (currentVampire.creator) {
      currentVampire = currentVampire.creator;
      numberOfVampire++;
    }
    return numberOfVampire;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    if (this.offspring === null)
      return false;

    for (let i = 0; i < this.numberOfOffspring; i++) {
      if (vampire.name === this.offspring[i].name)
        return true;
    }
    return false;
  }

  vampireWithName(name) {
    if (name === this.name){
       return this;
    }
    for (let vampyr of this.offspring) {
     let search = vampyr.vampireWithName(name);
     if(search){
       return search;
     }
    }
    return null; 
  }

  // Returns the total number of vampires that exist
  get totalDescendents() {
    let sumOfVampyrs = 0;
    for (let vampyr of this.offspring) {
      sumOfVampyrs += vampyr.totalDescendents + 1;
    }

    return sumOfVampyrs;
  };

  // Returns an array of all the vampires that were converted after 1980
  get allMillennialVampires() {
    let millenialVampyrs = []; // 1
    if (this.yearConverted > 1980) {
      millenialVampyrs.push(this); // 2
    }
    for (let vampyr of this.offspring) {
      millenialVampyrs = millenialVampyrs.concat(vampyr.allMillennialVampires);
    }
    return millenialVampyrs;
  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {

  }
}

module.exports = Vampire;

