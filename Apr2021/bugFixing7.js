class List {
    constructor(type) {
      this.type = type;
      this.items = [];
    }
    get count() {
        return this.items.length;
    }
    add(item){
      if(typeof item != this.type)
        return `This item is not of type: ${this.type}`;

     this.items.push(item);
      return this;
    }
  }
  var myList = new List('string')
  console.log(
    myList.add('Hello').count, 1,// 'How many items in the List?');
    myList.add(5), `This item is not of type: ${'string'}`,// 'Wrong type added');
    myList.add(' ').add('World!').count, 3,//œ 'How many items in the List?');
  )