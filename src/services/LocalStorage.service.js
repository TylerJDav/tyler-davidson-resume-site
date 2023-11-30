/* Class LocalStorageService- a class for persistant CRUD in LocalStorage
Some tips on order of implementation:
1.  Implement Utility Functions (cloneObject(done),  getItemIndex)
2.  Implement 'size' and 'list' getters
3.  Implement localStorage functions 'reset', 'clear', 'store', 'retrieve'
4.  Implement 'read', 'create', 'update', 'delete'
5.  Implement 'sort', 'filter'
*/
export default class LocalStorageService {
  "use strict";
  constructor(model, key) {
    this.model = model;

    this.origModel = this.model;
    this.key = key;
    this.increment = 100000;

    if (!this.retrieve()) {
      this.model.data = this.cloneObject(model.data); //get copy of data
      //this.sort(this.sortCol, this.sortDir, true); //apply default sort
    }
  }
  //Getters
  get sortCol() {
    return this.model.options.sortCol;
  }
  set sortCol(col) {
    this.model.options.sortCol = col;
  }
  get sortDir() {
    return this.model.options.sortDir;
  }
  set sortDir(dir) {
    this.model.options.sortDir = dir;
  }
  /*KJ: Todo add filterStr*/
  get filterStr() {
    return this.model.options.filterStr;
  }
  set filterStr(filterStr) {
    this.model.options.filterStr = filterStr;
  }
  get size() {
    return this.model.data.length;
  }
  async list() {
    /*KJ: modified list getter to sort and filter based on current options set in 'app'*/

    this.sort(this.sortCol, this.sortDir, true);
    let filterObj = {};

    if (this.filterStr) {
      filterObj[this.sortCol] = this.filterStr;
      return this.filter(filterObj);
    }

    return this.model.data;
  }

  //CRUD FUNCTIONS
  async create(obj) {
    obj.id = this.increment;
    this.model.data.push(obj);
    this.store();
  }
  async read(getId) {
    let index = this.getItemIndex(getId);

    if (index !== -1) {
      return this.model.data[index];
    }
    return null;
  }
  async update(id, obj) {
    let index = this.getItemIndex(id);
    obj.id = id;
    if (index !== -1) {
      this.model.data[index] = obj;
      this.store();
    }
  }

  async delete(removeId) {
    let index = this.getItemIndex(removeId);
    if (index !== -1) {
      this.model.data.splice(index, 1);
      this.store();
    }
  }

  //LocalStorage Functions
  reset() {
    this.model = this.cloneObject(this.origModel);
    this.clear();
  }
  clear() {
    localStorage.removeItem(this.key);
    localStorage.clear();
  }
  store() {
    localStorage[this.key] = JSON.stringify(this.model);
  }
  retrieve() {
    if (localStorage.getItem(this.key) !== null) {
      this.model = JSON.parse(localStorage[this.key]);
      return true;
    }
    return false;
  }

  //Sorting and Filtering Functions
  sort(col, direction, perm = false) {
    let copy = this.cloneObject(this.model.data);
    let dir = direction === "asc" ? 1 : -1;

    let sorted = copy.sort((a, b) => {
      return a[col].localeCompare(b[col]) * dir;
      //    if (a[col]==b[col])
      //       return 0;
      //    if (a[col] < b[col]){
      //       return direction==="asc"?-1:1;
      //    }
      //    if (a[col] > b[col]){
      //       return direction==="asc"?1:-1;
      //    }
    });
    if (perm) {
      this.model.data = sorted;
      this.sortCol = col;
      this.sortDir = direction;

      this.store();
    }
    return sorted;
  }

  filter(filterObj) {
    function filterFunc(team) {
      for (let key in filterObj) {
        let val1 = team[key].toLowerCase();
        let val2 = filterObj[key].toLowerCase();
        if (!val1.includes(val2)) {
          return false;
        }
      }
      return true;
    }
    let result = this.model.data.filter(filterFunc);
    return this.cloneObject(result);
  }
  async getLookup(lookupName) {
    return this.model.lookups[lookupName];
  }

  //Utility functions
  getItemIndex(id) {
    return this.model.data.findIndex((element) => element.id == id);
  }
  cloneObject(obj) {
    return JSON.parse(JSON.stringify(obj));
  }
}
