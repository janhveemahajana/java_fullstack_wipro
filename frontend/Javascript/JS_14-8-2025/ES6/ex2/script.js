let arr = [1, 2, 3, 4];

const doubleNumbers = (nums) => {
  let total = nums.map((num) => num * 2);
  return total;
};

console.log(doubleNumbers(arr));
