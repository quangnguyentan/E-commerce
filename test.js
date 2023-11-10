// // const ok = new Object("64b9431d3342085445e366f8").toString();
// // console.log(ok);
const testArray = [
  {
    id: 1,
    rating: 3.5,
  },
  {
    id: 2,
    rating: 5,
  },
  {
    id: 3,
    rating: 3.5,
  },
];

// // testArray.reduce(function (sum, result) {
// //   return (sum += result.rating);
// // }, 0);

// const x = testArray.some((e) => {
//   return e.rating === 3.5;
// });
// console.log(x);
// const queries = { math: "math" };
// const excludeFiels = ["limit", "sort", "page", "fields"];
// excludeFiels.forEach((e) => delete queries[e]);
// let queryString = JSON.stringify(queries);
// queryString = queryString.replace(
//   /\b(gte|gt|lt|lte)\b/g,
//   (macthedEl) => `$${macthedEl}`
// );
// console.log(queryString);

// // function x(el) {
// //   console.log(el);
// // }
// // let num = 16949518;
// // let n = Number(num.toFixed(1)).toLocaleString();
// // console.log(n);
// // console.log(typeof n);
// // let a = Number(19466265) / 1000;
// // console.log(a);
// // let h = Math.floor(a / 3600);
// // let m = Math.floor((a % 3600) / 60);
// // let s = Math.floor((a % 3600) % 60);
// // let x = 1466;
// // console.log(x);
// // console.log(h);
// // console.log(m);
// // console.log(s);
// // function twoSum(numbers, target) {
// //   for (let i = 0; i < numbers.length; i++) {
// //     for (let j = i + 1; j < numbers.length; j++) {
// //       if (numbers[i] + numbers[j] === target) {
// //         // target = [i, j];
// //         console.log(target);
// //       }
// //     }
// //   }
// // }
// // twoSum([3, 2, 4], 6);

// // function isValid(s) {
// //   console.log(Boolean(s));
// // }
// // isValid("()");
// // isValid("()[]{}");
// // isValid("(]");

// function ListNode(val, next) {
//   this.val = val === undefined ? 0 : val;
//   this.next = next === undefined ? null : next;
// }
// // var mergeTwoLists = function (list1, list2) {
// //   for (let i = 0; i < list2.length; i++) {
// //     list1.push(list2[i]);
// //   }
// //   console.log("list", list);
// //   for (var i = 0; i < list1.length; i++) {
// //     // Last i elements are already in place
// //     for (var j = 0; j < list1.length - i - 1; j++) {
// //       // Checking if the item at present iteration
// //       // is greater than the next iteration
// //       if (list1[j] > list1[j + 1]) {
// //         // If the condition is true
// //         // then swap them
// //         var temp = list1[j];
// //         list1[j] = list1[j + 1];
// //         list1[j + 1] = temp;
// //       }
// //     }
// //   }
// //   console.log(list1);
// // };
// // console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));

// // var maxProfit = function (prices) {
// //   let profit = 0;
// //   let result = [];
// //   for (let i = 2; i < prices.length; i++) {
// //     if (prices[i] - prices[2] > 0) {
// //       result.push(prices[i]);
// //     }
// //     result.sort((a, b) => b - a);
// //     if (result[0] > 0) {
// //       profit = result[0];
// //     }
// //   }
// //   console.log(profit - prices[1]);
// // };
// // maxProfit([7, 1, 5, 3, 6, 4]);

// // var maxProfit = function (prices) {
// //   let max;
// //   let day2 = prices[1];
// //   const [a, ...arr] = prices;
// //   for (let i = prices.length; i > 2; i--) {}
// // };

// // maxProfit([7, 1, 5, 3, 6, 4]);

// // var isOk = true;
// // var ok = "quang";
// // function test() {
// //   if (isOk && ok) {
// //     console.log(ok);
// //   } else {
// //     console.log("Sai");
// //   }
// // }
// // test();

// // var s = "tanquanga6k10@gmail.com";

// // var encode = btoa(s);
// // console.log(encode);
// // var decode = atob(encode);
// // console.log(decode);

// // if (encode === decode) {
// //   console.log("ok");
// // } else {
// //   console.log("hehe");
// // }

// let a = 5;
// let b = 10;
// a = b;
// b = 8;
// console.log(a);
// console.log(b);

// var x = 1231;
// var myArr = String(x)
//   .split("")
//   .map((num) => {
//     return Number(num);
//   });
// console.log(typeof myArr);
// // let y = [];
// for (var i = 0; i < myArr.length; i++) {
//   console.log(i);
// }

/**
//  * @param {number} x
//  * @return {boolean}
//  */
// var isPalindrome = function (x) {
//   if (x < 0) {
//     return false; // Nếu số âm, không phải là palindrome
//   }
//   const original = x;
//   let reverse = 0;

//   while (x > 0) {
//     const digit = x % 10;
//     console.log("digit", digit);

//     reverse = reverse * 10 + digit;
//     console.log("revers", reverse);
//     x = Math.floor(x / 10);
//     console.log("x", x);
//   }

//   return original === reverse;
// };

// let res = isPalindrome(203);
// console.log(res);

// let n = 2 % 10;
// console.log(n);

// var romanToInt = function (s) {
//   const sym = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
//   };

//   let result = 0;
//   for (i = 0; i < s.length; i++) {
//     //MCMXCIV
//     const cur = sym[s[i]];
//     console.log("cur", cur);

//     const next = sym[s[i + 1]];
//     console.log("next", next);

//     if (cur < next) {
//       result += next - cur; // IV -> 5 - 1 = 4
//       i++;
//       console.log("result", result);
//     } else {
//       result += cur;
//     }
//   }

//   return result;
// };

// var result = romanToInt("MCMXCIV");
// console.log(result);

// var string = "LogiGear VietNam";

// var twoSum = function (nums, target) {
//   var arr = [];
//   for (let i = 0; i < nums.length; i++)
//     for (j = i + 1; j < nums.length; j++)
//       if (nums[i] + nums[j] === target) {
//         arr.push(i);
//         arr.push(j);
//       }
//   return arr;
// };

// const x = twoSum([2, 7, 11, 15], 9);
// const y = twoSum([3, 2, 4], 6);

// console.log(x);
// console.log(y);

const a = {
  x: "quang",
  y: "deptrai",
};

const b = {
  ...a,
  x: "haha",
  y: "hehe",
  n: "hihi",
};
const n = "quangdeptrai";
const p = "hehe";
console.log(n.concat(p));
console.log(b);
