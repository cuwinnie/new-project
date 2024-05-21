// 第(1)題
// 第(1)題
function generateRandomString(strlength) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < strlength; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

// 生成長度為8的隨機字串
console.log(generateRandomString(8));

// 第(2)題
function isPerfectNumber(num) {
  let sum = 1;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      sum += i + num / i;
    }
  }
  return sum === num && num !== 1;
}

console.log(isPerfectNumber(6));
console.log(isPerfectNumber(12));

// 第(3)題
function bubbleSort(arr) {
  var len = arr.length;
  for (var i = 0; i < len - 1; i++) {
    for (var j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort([5, 1, 2, 4, 3])); 