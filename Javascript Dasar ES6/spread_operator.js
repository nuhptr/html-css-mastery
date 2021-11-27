var meats = ["ham", "salami", "bacon"];

// make your list change to sentences
console.log(...meats);

var nums1 = [1, 2, 3];
var nums2 = [...nums1, 4, 5, 6];

/* if you dont use spread there are array in array => [[1, 2, 3], 4 ,5, 6]
 * if you use spread make to one array [1, 2, 3, 4, 5, 6]
 * make from array to object individual
 */
console.log(nums2);
