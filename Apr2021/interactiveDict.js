class Dictionary {
    constructor() {
      this.dict = {};
    }

    newEntry(key, value) {
      return this.dict[key] = value;
    }

    look(key) {
        if (!this.dict[key]) return "Can't find entry for " + key;
      else return this.dict[key];
    }
  }
  let d = new Dictionary();
  d.newEntry('Apple', 'A fruit');
  //   d.look("hi")
    d.newEntry('Soccer', 'A sport');
    d.newEntry('soccer', 'a sport');

  console.log(
    d.look('Apple'),// 'A fruit');
    d.look('Soccer'),// 'A sport');
    d.look('Hi'),// 'Can\'t find entry for Hi');
    d.look('Ball'),// 'Can\'t find entry for Ball');
    d.look('soccer'),// 'a sport');
  )