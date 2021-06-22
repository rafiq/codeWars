function Item(name, sell_in, quality) {
    this.name = name;
    this.sell_in = sell_in;
    this.quality = quality;
  }

  var items = []

  items.push(new Item('+5 Dexterity Vest', 10, 20));
  items.push(new Item('Aged Brie', 2, 0));
  items.push(new Item('Elixir of the Mongoose', 5, 7));
  items.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
  items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20));
  items.push(new Item('Conjured Mana Cake', 3, 6));

  function update_quality() {
    let inventoryList = ["Aged Brie", "Sufuras","Backstage passes","Conjured"];


    for (var i = 0; i < items.length; i++) {
        if (this.name.split("").some(el => inventoryList.includes(el))) {
            items.sell_in -= 1;
            if (el === "Sulfuras") {
                items.quality = 80;
                items.sell_in -= 1;
            }
            if (el ===  "Conjured") {
                items.quality -= 2;
            }
            if (el === "Aged Brie") {
                items.quality += 2;
                items.sell_in -= 1;
            }
            if (el === "Backstage passes") {
                if (this.sell_in < 11) {
                    items.quality += 2;
                    this.sell_in -= 1;
                } else if (this.sell_in < 6) {
                    items.quality += 3;
                    items.sell_in -= 1;
                } else if (this.sell_in <= 0) {
                    items.quality = 0;
                }
            }
        } else if (items.sell_in < 0) {
            items.quality -= 2;
            items.sell_in -= 1;
        } else {
            items.quality -= 1;
            items.sell_in -= 1;
        }
    }
    //   if (items[i].name != 'Aged Brie' && items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
    //     if (items[i].quality > 0) {
    //       if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
    //         items[i].quality = items[i].quality - 1
    //       }
    //     }
    //   } else {
    //     if (items[i].quality < 50) {
    //       items[i].quality = items[i].quality + 1
    //       if (items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
    //         if (items[i].sell_in < 11) {
    //           if (items[i].quality < 50) {
    //             items[i].quality = items[i].quality + 1
    //           }
    //         }
    //         if (items[i].sell_in < 6) {
    //           if (items[i].quality < 50) {
    //             items[i].quality = items[i].quality + 1
    //           }
    //         }
    //       }
    //     }
    //   }
    //   if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
    //     items[i].sell_in = items[i].sell_in - 1;
    //   }
    //   if (items[i].sell_in < 0) {
    //     if (items[i].name != 'Aged Brie') {
    //       if (items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
    //         if (items[i].quality > 0) {
    //           if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
    //             items[i].quality = items[i].quality - 1
    //           }
    //         }
    //       } else {
    //         items[i].quality = items[i].quality - items[i].quality
    //       }
    //     } else {
    //       if (items[i].quality < 50) {
    //         items[i].quality = items[i].quality + 1
    //       }
    //     }
    //   }
    // }
  }
  console.log(
   items[0].sell_in,9,//"Expected different value");
   items[0].quality,19,//"Expected different value");
  )

//   ! The answer below did a good job creating helper functions that increased or decreased quality, but allowed for a variable that would change how much increase or decrease. It also had a helper function that checked if the type of item was one of the speciality items.
function Item(name, sell_in, quality) {
    this.name = name;
    this.sell_in = sell_in;
    this.quality = quality;
  }

  Item.prototype.isType = function(type) {
    return this.name.toLowerCase().indexOf(type.toLowerCase()) !== -1;
  }

  Item.prototype.increaseQuality = function(n) {
    if(this.quality < 50) {
      var n = n || 1;
      this.quality = Math.min(50, this.quality + n);
    }
  }

  Item.prototype.decreaseQuality = function(n) {
    var n = n || 1;
    this.quality = Math.max(0, this.quality - n);
  }

  function updateBackstagePassesQuality(item) {
    if(item.sell_in > 10) {
      item.increaseQuality();
    } else if (item.sell_in > 5) {
      item.increaseQuality(2);
    } else if (item.sell_in > 0) {
      item.increaseQuality(3);
    } else {
      item.quality = 0;
    }
  }

  var items = []

  items.push(new Item('+5 Dexterity Vest', 10, 20));
  items.push(new Item('Aged Brie', 2, 0));
  items.push(new Item('Elixir of the Mongoose', 5, 7));
  items.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
  items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20));
  items.push(new Item('Conjured Mana Cake', 3, 6));

  function update_quality() {
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      var degradeFactor = 1;
      if (!item.isType('sulfuras')) {
              item.sell_in -= 1;
        if (item.isType('aged brie')) {
          item.increaseQuality();
        } else if(item.isType('backstage passes')) {
          updateBackstagePassesQuality(item);
        } else {
          if(item.sell_in < 0) degradeFactor *= 2;
          if(item.isType('conjured')) degradeFactor *= 2;
          item.decreaseQuality(degradeFactor);
        }


      }
    }
  }

//   ! THE below is also a very short and smooth one that embeded a lot of ternary operators which made it a alittle difficlut to understand, but still short and smooth.
function Item(name, sell_in, quality) {
    this.name = name;
    this.sell_in = sell_in;
    this.quality = quality;
  }

  var items = []

  items.push(new Item('+5 Dexterity Vest', 10, 20));
  items.push(new Item('Aged Brie', 2, 0));
  items.push(new Item('Elixir of the Mongoose', 5, 7));
  items.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
  items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20));
  items.push(new Item('Conjured Mana Cake', 3, 6));

  function update_quality() {
    for (var i = 0; i < items.length; i++) {
      let item = items[i];

      const maxQuality = Math.max(50, item.quality);

      if(item.name.indexOf("Aged Brie") >= 0){
        item.quality = Math.min(maxQuality, item.quality + 1);
      } else if (item.name.indexOf("Backstage") >= 0) {
        item.quality = (item.sell_in > 1) * (Math.min(maxQuality, item.quality + (item.sell_in <= 6 ? 3 : item.sell_in <= 11 ? 2 : 1)));
      } else if (item.name.indexOf("Sulfuras") < 0) {
        item.quality = item.quality - (/Conjured/i.test(item.name) ? 2 : 1) * (item.sell_in > 0 ? 1 : 2);
      }
      if(item.name.indexOf("Sulfuras") < 0){
        item.quality = Math.max(0, item.quality)
        item.sell_in = item.sell_in - 1
      }
    }
  }

//   ! Very interesting problems. I like them becasue they are very real worldish
function Item(name, sell_in, quality) {
    this.name = name;
    this.sell_in = sell_in;
    this.quality = quality;
  }

  var items = []

  items.push(new Item('+5 Dexterity Vest', 10, 20));
  items.push(new Item('Aged Brie', 2, 0));
  items.push(new Item('Elixir of the Mongoose', 5, 7));
  items.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
  items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20));
  items.push(new Item('Conjured Mana Cake', 3, 6));

  function update_quality() {
    var normal = 0, aged_brie = 1, sulfuras = 2, backstage_passes = 3, conjured = 4;
    function getType(name){
      if(name.indexOf('aged brie') >= 0)
        return aged_brie;
      else if(name.indexOf('sulfuras') >= 0)
        return sulfuras;
      else if(name.indexOf('backstage passes') >= 0)
        return backstage_passes;
      else if(name.indexOf('conjured') >= 0)
        return conjured;
      else
        return normal;
    }
    for (var i = 0; i < items.length; i++) {
      var name = items[i].name.toLowerCase(), type = getType(name), sellIn = items[i].sell_in, quality = items[i].quality;
      if(type == sulfuras)
        continue;
      sellIn--;
      var inRange = 0 <= quality && quality <= 50, adjust;
      if(type == aged_brie){
        adjust = 1;
      }else if(type == backstage_passes){
        if(sellIn <= 0)
          adjust = -quality;
        else if(sellIn <= 5)
          adjust = 3;
        else if(sellIn <= 10)
          adjust = 2;
        else
          adjust = 1;
      }else if(type == conjured){
        if(sellIn < 0)
          adjust = -4;
        else
          adjust = -2;
      }else{
        if(sellIn < 0)
          adjust = -2;
        else
          adjust = -1;
      }
      if(inRange){
        quality += adjust;
        quality = Math.max(Math.min(quality, 50), 0);
      }else{
        if(adjust < 0)
          quality += adjust;
      }
      items[i].sell_in = sellIn;
      items[i].quality = quality;
    }
  }