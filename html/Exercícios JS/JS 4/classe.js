class IntegerSet {
    constructor(maxValue) {
      this.maxValue = maxValue;
      this.set = new Array(maxValue + 1).fill(false);
    }
  
    insert(value) {
      if (value >= 0 && value <= this.maxValue) {
        this.set[value] = true;
      }
    }
  
    remove(value) {
      if (value >= 0 && value <= this.maxValue) {
        this.set[value] = false;
      }
    }
  
    union(otherSet) {
      let newSet = new IntegerSet(this.maxValue);
      for (let i = 0; i <= this.maxValue; i++) {
        newSet.set[i] = this.set[i] || otherSet.set[i];
      }
      return newSet;
    }
  
    intersection(otherSet) {
      let newSet = new IntegerSet(this.maxValue);
      for (let i = 0; i <= this.maxValue; i++) {
        newSet.set[i] = this.set[i] && otherSet.set[i];
      }
      return newSet;
    }
  
    difference(otherSet) {
      let newSet = new IntegerSet(this.maxValue);
      for (let i = 0; i <= this.maxValue; i++) {
        newSet.set[i] = this.set[i] && !otherSet.set[i];
      }
      return newSet;
    }
  
    toString() {
      let setString = "{";
      for (let i = 0; i <= this.maxValue; i++) {
        if (this.set[i]) {
          setString += i + ", ";
        }
      }
      setString = setString.slice(0, -2);
      setString += "}";
      return setString;
    }
  }