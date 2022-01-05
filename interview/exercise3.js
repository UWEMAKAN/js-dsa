var twoSum = function(nums, target) {
  const compMap = {};
  for (let i = 0; i < nums.length; i++) {
      const num = nums[i];
      if (compMap[num] !== undefined) {
          const j = compMap[num];
          return [i, j];
      }
      const comp = target - num;
      compMap[comp] = i;
  }
};

const arr = [2,7,11,15];
const target = 9;

const result = twoSum(arr, target);
console.log(result);