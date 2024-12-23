'use strict';
// webinar

// Nov-21
/*
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */

// [1,2,3,4]
// [1,2]
// [3,4]
const chunk = function (arr, size) {
	const result = [];

	for (let i = 0; i < arr.length; i++) {}
};

console.log(chunk([1, 2, 3, 4, 5], 1));
// Input: arr = [1,2,3,4,5], size = 1
// Output: [[1],[2],[3],[4],[5]]
// Explanation: The arr has been split into subarrays each with 1 element.

console.log(chunk([1, 9, 6, 3, 2], 3));
// Input: arr = [1,9,6,3,2], size = 3
// Output: [[1,9,6],[3,2]]
// Explanation: The arr has been split into subarrays with 3 elements. However, only two elements are left for the 2nd subarray.

console.log(chunk([8, 5, 3, 2, 6], 6));
// Input: arr = [8,5,3,2,6], size = 6
// Output: [[8,5,3,2,6]]
// Explanation: Size is greater than arr.length thus all elements are in the first subarray.

console.log(chunk([], 6));
// Input: arr = [], size = 1
// Output: []
// Explanation: There are no elements to be chunked so an empty array is returned.
