// class FamilyTree {
//   constructor(name) {
//     if (name === undefined || typeof name !== 'string') {
//       throw error;
//     }
//     this.value = name;
//     this.children = [];
//     this.familyTree = { [this.value]: [this.children] };
//   }
//   insert(child) {
//     const newFamily = new FamilyTree(child);
//     this.children.push(newFamily);
//   }
//   findMember(child) {
//     // this.children
//     // const newFamily = new FamilyTree(child);
//     // this.children[this.children.indexOf(child)] = newFamily.familyTree;
//     // return newFamily;
//     console.log(this.familyTree[this.value]);
//     return this.familyTree[this.value];
//   }
//   familySize() {}
//   log() {}
// }
// module.exports = FamilyTree;

// const szwajkowskis = new FamilyTree('Pop');
// szwajkowskis.insert('Mike');
// szwajkowskis.insert('Amy');
// const mikeNode = szwajkowskis.findMember('Mike');
// console.log(mikeNode);

// const szwajkowskis = new FamilyTree('Pops');

// szwajkowskis.insert('Mike');
// szwajkowskis.insert('Amy');
// szwajkowskis.insert('Todd');

// const mikesFamily = szwajkowskis.findMember('Mike');

// mikesFamily.insert('Eliot');
// mikesFamily.insert('Elise');
// mikesFamily.insert('Cas');
// mikesFamily.insert('George');
// mikesFamily.insert('Lear');

// const amysFamily = szwajkowskis.findMember('Amy');

// amysFamily.insert('Henry');
// amysFamily.insert('Vivian');

// console.log(szwajkowskis.familyTree);

class FamilyTree {
  constructor(name) {
    if (typeof name !== 'string') {
      throw 'error';
    }
    this.value = name;
    this.children = [];
  }
  familySize() {
    return this.children.length + 1;
  }
  findMember() {}
  log() {}
  insert(name) {
    let child = new FamilyTree(name);
    this.children.push(child);
  }
}

// const szwajkowskis = new FamilyTree('Pops');

// szwajkowskis.insert('Mike');
// szwajkowskis.insert('Amy');
// szwajkowskis.insert('Todd');

// const mikesFamily = szwajkowskis.findMember('Mike');

// mikesFamily.insert('Eliot');
// mikesFamily.insert('Elise');
// mikesFamily.insert('Cas');
// mikesFamily.insert('George');
// mikesFamily.insert('Lear');

// const amysFamily = szwajkowskis.findMember('Amy');

// amysFamily.insert('Henry');
// amysFamily.insert('Vivian');

// const log = szwajkowskis.log();
// console.log(log);

module.exports = FamilyTree;
