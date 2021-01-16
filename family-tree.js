
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

  findMember(name) {
    let child = undefined;
    this.children.forEach(obj => {
      if (obj.value === name) {
        child = obj;
      }
    });
    return child;
  }

  log() {
    function members(obj, level) {
      let string = `${level} ${obj.value}\n`;
      if (obj.children.length === 0) {
        return string;
      } else {
        level += '--'
        obj.children.forEach(child => {
          string += `${members(child, level)}`
        })
        return string;
      }
    }
    return members(this, '--');
  }

  insert(name) {
    let child = new FamilyTree(name);
    this.children.push(child);
  }
}

module.exports = FamilyTree;
