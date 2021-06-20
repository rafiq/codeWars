
function PaginationHelper(collection, itemsPerPage){
    this.collection = collection, this.itemsPerPage = itemsPerPage;

}

PaginationHelper.prototype.itemCount = function() {
    return this.collection.length;
}

PaginationHelper.prototype.pageCount = function() {
    return Math.ceil(this.collection.length / this.itemsPerPage);
}

PaginationHelper.prototype.pageItemCount = function(pageIndex) {
    let countArray = [];
    let count = this.collection.length;
    while (count > 0) {
        countArray.push(Math.min(this.itemsPerPage,Math.abs(count)))
        count = count - this.itemsPerPage;
    }
    console.log(countArray)
    return countArray[pageIndex] ? countArray[pageIndex] : -1;
}

PaginationHelper.prototype.pageIndex = function(itemIndex) {
    return itemIndex < this.collection.length && itemIndex >= 0
    ? Math.floor(itemIndex / this.itemsPerPage)
    : -1;
}
var helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
console.log(
    helper.pageCount(), //should == 2
    helper.itemCount(), //should == 6
    helper.pageItemCount(0), //should == 4
    helper.pageItemCount(1), // last page - should == 2
    helper.pageItemCount(2), // should == -1 since the page is invalid

    // pageIndex takes an item index and returns the page that it belongs on
    helper.pageIndex(5), //should == 1 (zero based index)
    helper.pageIndex(2), //should == 0
    helper.pageIndex(20), //should == -1
    helper.pageIndex(-10), //should == -1
)