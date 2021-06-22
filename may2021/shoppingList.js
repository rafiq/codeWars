var groceries = { 'Orange Juice': { price: 1.5, discount: 10, bogof: false },
Chocolate: { price: 2, discount: 0, bogof: true },
Sweetcorn: { price: 4, discount: 20, bogof: true },
Apples: { price: 6, discount: 0, bogof: false },
Pears: { price: 2, discount: 50, bogof: false } }

// var groceries = { 'Orange Juice': { price: 1.5, discount: 10, bogof: false },
// Chocolate: { price: 2, discount: 0, bogof: true },
// Sweetcorn: { price: 4, discount: 20, bogof: true },
// Apples: { price: 6, discount: 0, bogof: false },
// Pears: { price: 2, discount: 50, bogof: false } }

function shoppingListCost(arr) {
    let total = 0;

    for (let item of arr) {
        let currentItem = item[0];
        let quantity = item[1];

        if (groceries[currentItem]) {
            if (groceries[currentItem]["bogof"]) {
                if (quantity % 2 === 0) {
                    quantity = quantity / 2
                }
                else {
                  quantity = Math.ceil(quantity / 2)
                }
                total += quantity * groceries[currentItem]["price"] * ((100 - groceries[currentItem]["discount"] ) / 100)
            } else {
                total += quantity * groceries[currentItem]["price"] * ((100 - groceries[currentItem]["discount"] ) / 100)
            }
        }
    }
    return Number(total.toFixed(2));
  }
  console.log(
   shoppingListCost([["Chocolate", 3],["Apples", 8],["Orange Juice", 15],["Pears",1]]),// 73.25, "Failed")
   shoppingListCost([["Sweetcorn", 12],["Pears", 6],["Apples", 5]]),// 55.2, "Failed")
   shoppingListCost([["Pears", 4],["Chocolate", 87],["Sweetcorn", 3]]),// 98.4, "Failed")
   shoppingListCost([["Orange Juice", 100]]),// 135, "Failed")
  )

//   function shoppingListCost(arr) {
//     var total = 0;
//     for (var i = 0; i < arr.length; i++) {
//       // Find item name in array [i] is the name [0] is the first position of element in array
//       var itemName = arr[i][0]
//       // Find quantity in array [i] is the amount [1] is the second position of element in array
//       var quantity = arr[i][1]
//       // get details from groceries class
//       var details = groceries[itemName]
//       // if Buy One Get One Free is true then / quantity by 2
//       if(details.bogof === true){
//          if (quantity % 2 === 0) {
//            quantity = quantity / 2
//          }
//          else {
//            // Math.ceil rounds up so 5/2 = 3
//            quantity = Math.ceil(quantity / 2)
//          }
//       }
//       // Get discount which is between 0.0 - 1 if det.dis is 30 then 100 - 30 / 100 = 0.7
//       var discount = (100 - details.discount) / 100
//       total += (details.price * quantity * discount)
//     }
//     // Return float because toFixed returns number as string
//     return parseFloat(total.toFixed(2))
//   }