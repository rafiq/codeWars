class Block{

    constructor([width, length, height]){
      this.width = width,
      this.length = length,
      this.height = height
    }

    getWidth() {
        return this.width
    }
    getLength() {
        return this.length
    }
    getHeight() {
        return this.height
    }
    getVolume() {
        // let
        return this.width * this.length * this.height
    }
    getSurfaceArea() {
        return 2 * (this.width * this.length + this.width * this.height + this.length * this.height)
    }

  }
  let block = new Block([2,4,6]);
  console.log(
    block.getWidth(),//  2)
    block.getLength(),// 4)
    block.getHeight(),// 6)
    block.getVolume(),// 48)
    block.getSurfaceArea(),// 88)
  )