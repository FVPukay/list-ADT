class List {
  constructor() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = [];
  }

  append(element) {
    this.dataStore[this.listSize++] = element;
  }
  
  find(element) {
    for (let i = 0; i < this.dataStore.length; i++) {
      if (this.dataStore[i] === element) return i;
    }
    return -1;
  }
  
  remove(element) {
    const foundAt = this.find(element);
    if (foundAt > -1) {
      this.dataStore.splice(foundAt, 1);
      --this.listSize;
      return true;
    }
    return false;
  }
  
  length() {
    return this.listSize;
  }
  
  toString() {
    return this.dataStore.join(', ');
  }

  insert(element, after) {
    const insertPos = this.find(after);
    if (insertPos > -1) {
      this.dataStore.splice(insertPos+1, 0, element);
      ++this.listSize;
      return true;
    }
    return false;
  }

  clear() {
    delete this.dataStore;
    this.dataStore = [];
    this.listSize = this.pos = 0;
  }

  contains(element) {
    for(let i = 0; i < this.dataStore.length; i++) {
      if (this.dataStore[i] === element) return true;
    }
    return false;
  }

  moveTo(position) {
    this.pos = position;
  }

  getElement() {
    return this.dataStore[this.pos];
  }

  previous() {
    return this.dataStore[--this.pos];
  }

  next() {
    return this.dataStore[++this.pos];
  }

  hasNext() {
    return this.pos >= this.listSize - 1 ? false : true;
  }

  hasPrevious() {
    return this.pos <= 0 ? false : true;
  }

  front() {
    this.pos = 0;
  }

  end() {
    this.pos = this.listSize - 1;
  }

  currPos() {
    return this.pos;
  }
}

const names = new List();
names.append("Cynthia");
names.append("Raymond");
names.append("Barbara");

console.log(names.toString());
names.remove("Raymond");
console.log(names.toString());

console.log(names.insert("Debra", "Raymond"));
console.log(names.toString());
names.insert("Debra", "Cynthia");
console.log(names.toString());

console.log(names.contains("Cynthia"));  // true
console.log(names.contains("Barbara"));  // true
console.log(names.contains("Debra"));  // true
console.log(names.contains("Raymond"));  // false

names.clear();
console.log(names.toString());

names.append("Raymond");
names.append("Debra");
names.append("Robert");
names.moveTo(1)
names.insert("Ally", names.getElement());  // Raymond, Debra, Ally, Robert
console.log(names.toString());

console.log(names.previous());  // Raymond
console.log(names.next());  // Debra
console.log(names.getElement());  // Debra

console.log(names.currPos());  // 1
console.log(names.hasPrevious());  // true
console.log(names.hasNext());  // true
names.front();
console.log(names.currPos());  // 0
console.log(names.hasPrevious());  // false
names.end();
console.log(names.currPos());  // this.listSize - 1 === 3
console.log(names.toString());
console.log(names);
console.log(names.hasNext());  // false
console.log(names.getElement());  // Robert

// Iterators

names.clear();
console.log(names.toString());  // ""

names.append("Raymond");
names.append("Debra");
names.append("Ally");
names.append("Twins");
names.append("Frank");
names.append("Marie");

names.front();  // this.pos === 0
console.log(names.getElement());  // Raymond

console.log(names.next());  // Debra

console.log(names.next());  // Ally
console.log(names.next());  // Twins
console.log(names.previous());  // Ally
console.log(names.previous());  // Debra

console.log("=======");

console.log(names.toString());

// Skips Raymond, prints rest of list
for (names.front(); names.hasNext();) {
  console.log(names.next());
}

console.log("=======");

// Print in reverse, skipping Marie
for (names.end(); names.hasPrevious();) {
  console.log(names.previous());
}
