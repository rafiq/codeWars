class Song {
    constructor(title, artist) {
        this.title = title;
        this.artist = artist;
        this.map = {};
        this.count = 0;
    }
    howMany(crowd) {
        this.count = 0;
        for (let listener of crowd) {
            listener = listener.toLowerCase();
            if (this.map[listener]) {
                continue;
            } else {
                this.count++;
                this.map[listener] = 1;
            }
        }
        return this.count;
    }
}


let mountMoose = new Song('Mount Moose', 'The Snazzy Moose');
console.log(
    mountMoose.title,//'Mount Moose');
    mountMoose.artist,//'The Snazzy Moose');
    mountMoose.howMany(['John', 'Fred', 'Bob', 'Carl', 'RyAn']), //5);
    mountMoose.howMany(['JoHn', 'Luke', 'AmAndA']), //2
    )

    // ! I like the logic the below answer used to get the new count. They just took the non duplicate size and subtracted the olde non duplicate size.

    class Song{
        constructor(title, artist){
          this.title = title;
          this.artist = artist;
          this.listener = new Set()
        };
        howMany(people){
          let oldSize = this.listener.size;
          people.map(p => this.listener.add(p.toLowerCase()));
          return this.listener.size - oldSize;
        }
      }

    //   ! Same but used better variable names . They interestingly also used a factory function which is different, and also keeps the hash table private.

    function Song(title, artist) {
        var seen = new Set();
        return {
          title,
          artist,
          howMany: function(ls) {
            var tot = 0;
            for (let s of ls) {
              s = s.toLowerCase();
              if (!seen.has(s)) tot++;
              seen.add(s);
            }
            return tot;
          }
        };
      }