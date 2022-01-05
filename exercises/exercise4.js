var maxSubArray = function(nums) {
  let maxSum = 0;
  for (let i = 0; i < nums.length; i++) {
      let sums = [nums[i]];
      for (let j = i + 1, k = 0; j < nums.length; j++, k++) {
          const num = nums[j];
          const sum = sums[k] + num;
          sums.push(sum);
      }
      const max = Math.max(...sums);
      if (maxSum < max) maxSum = max;
  }
  return maxSum;
};

const nums1 = [-2,1,-3,4,-1,2,1,-5,4]
const nums2 = [1];
const nums3 = [5,4,-1,7,8]

const result1 = maxSubArray(nums1);
const result2 = maxSubArray(nums2);
const result3 = maxSubArray(nums3);

console.log('result1', result1);
console.log('result2', result2);
console.log('result3', result3);