// const EvenOddEelements = (arr = [], filter = 'odds') => {
//     var evens = [];
//     var odds = [];
//     for (var item of arr) {

//         if (item % 2 === 0) {
//             evens.push(item)
//         } else {
//             odds.push(item)
//         }
//     }

//     if (filter === "odds") {
//         return odds;
//     } else {
//         return evens;
//     }
// }

// var ArrayElements = [20, 30, 11, 13, 5, 6, 8, 9];
// console.log("the evens Elements are:", EvenOddEelements(ArrayElements, "evens"));
// console.log("the odds Elements are:", EvenOddEelements(ArrayElements));

const filterEvenOddArray = (array = [], filter = "odd") => {
  var even = [];
  var odd = [];

  for (let element of array) {
    if (element % 2 === 0) {
      even.push(element);
    } else {
      odd.push(element);
    }
  }

  if (filter === "odd") {
    return odd;
  } else {
    return even;
  }
};

var Array2 = [2, 4, 7, 9, 3];
console.log("The even number",   filterEvenOddArray(Array2, "even"));
console.log("The odd number",   filterEvenOddArray(Array2));
