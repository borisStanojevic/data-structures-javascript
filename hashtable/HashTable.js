class HashTable {
  
  constructor(size) {
    this.data = new Array(size);
  }

  put(key, value) {
    const index = this._getHash(key);

    const entry = {key, value};

    if(!this.data[index])
      this.data[index] = [];
    this.data[index].push(entry);
  }

  get(key) {
    const index = this._getHash(key);

    if(!this.data[index])
      return null 
    
    for(entry of this.data[index])
      if(entry.key === key)
        return entry;

    return null; 
  }

  remove(key) {
    //TODO
  }

  getKeys() {
    //TODO
  }

  getValues() {
    //TODO
  }

  _getHash(key) {
    let hash = 0;
    for(let i = 0; i < key.length; i++)
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;

    return hash;
  }

}

class Entry {

  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}

const hashTable = new HashTable(50);
hashTable.put("mitar@grand.rs", 99_999);
hashTable.put("brena@grand.rs", 999_999);