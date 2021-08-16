/**
 * @param {number[]} arr
 * @return {boolean}
 */

var arr = [2, 0, 2];
/**
 * @param {number[]} arr
 * @return {boolean}
 */
 var validMountainArray = function (arr) {
    let upCount = false;
    let downCount = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i + 1] - arr[i] > 0 && arr[i + 1] - arr[i] !==(arr[i] || arr[i+1]) ) {
        upCount = true;
        console.log(upCount);
      } else if (arr[i + 1] - arr[i] < 0 && (arr[i + 1] - arr[i] !==(arr[i] || arr[i+1]))) {
        downCount = true;
      }
    }
    return upCount && downCount;
  };
console.log(validMountainArray(arr));
