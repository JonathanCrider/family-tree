class FamilyTree {
  constructor(name) {
    this.parentName = name;
    this.children = [];
  }

  insert(child) {
    this.children.push(child);
  }

  findMember(child) {
    return new FamilyTree(child);
    // this.children[this.children.indexOf(child)] = newFamily.children;
  }
}

module.exports = FamilyTree;

const szwajkowskis = new FamilyTree('Pops');

szwajkowskis.insert('Mike');
szwajkowskis.insert('Amy');
szwajkowskis.insert('Todd');

console.log(szwajkowskis.children);

const mikesFamily = szwajkowskis.findMember('Mike');

console.log(mikesFamily.children);

// mikesFamily.insert('Eliot');
// mikesFamily.insert('Elise');
// mikesFamily.insert('Cas');
// mikesFamily.insert('George');
// mikesFamily.insert('Lear');
