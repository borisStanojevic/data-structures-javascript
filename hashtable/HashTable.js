class HashTable {
  
  constructor(size) {
    this.data = new Array(size);
  }

  put(key, value) {
    const index = this._getIndex(key);

    if(!this.data[index])
      this.data[index] = [];
    this.data[index].push(new Entry(key, value));
  }

  get(key) {
    const index = this._getIndex(key);

    if(!this.data[index]) return null;
    
    for(const entry of this.data[index])
      if(entry.key === key)
        return entry;

    return null; 
  }

  remove(key) {
    const index = this._getIndex(key);

    if(!this.data[index]) throw new Error("There is no bucket for the given key.")

    let bucket = this.data[index];

    let removedEntry = {};
    for(let i = 0; i < bucket.length;i++) {
      const entry = bucket[i];
      if(entry.key === key){
        bucket.splice(i, 1);
        return entry;
      }
    }

    throw new Error("There is no entry for the given key.")
  }

  getKeys() {
    return this._getPropertyValues("key");
  }

  getValues() {
    return this._getPropertyValues("value");
  }

  _getPropertyValues(property) {
    const values = [];
    for(const bucket of this.data)
      if(bucket)
        for(const entry of bucket)
          values.push(entry[property]);
      
    return values;
  }

  _getIndex(key) {
    return this._createHash(key) % this.data.length;
  }

  _createHash(key) {
    let hash = 0;
    for(let i = 0; i < key.length; i++)
      hash = hash + key.charCodeAt(i) * i

    return hash;
  }
}

class Entry {

  constructor(key, value) {
    this.key = key;
    this.value = value;
  }

}

const hashTable = new HashTable(10);
hashTable.put("mitar@grand.rs", 99_999);
hashTable.put("brena@grand.rs", 999_999);
hashTable.put("jashar@grand.rs", 9_999_999);

hashTable.remove("jashar@grand.rs");

console.log(hashTable.getKeys());
console.log(hashTable.getValues());
