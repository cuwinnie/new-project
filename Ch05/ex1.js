// 第(1)題, 其中length屬性可以用來取得數字的個數
function average(...nums) {
  let sum = 0;
  for (let num of nums) {
    sum += num;
  }
  return sum / nums.length; 
}

console.log(average(1, 2, 3, 4, 5)); 

// 第(2)題, 其中Math.sqrt(x) 可以用來取得參數x的平方根
function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(7));


// 第(3)題, 其中Math.floor(x) 可以用來取得參數x的整數部分
function decimalToBinary(decimal) {
  let binary = "";
  let remainder;

  while (decimal !== 0) {
    remainder = decimal % 2;
    decimal = Math.floor(decimal / 2);
    binary = remainder + binary;
  }

  return binary;
}

console.log(decimalToBinary(14));
console.log(decimalToBinary(20)); 

// 第(4)題, 其中length屬性可以用來取得陣列的元素個數
function findMinMax(array) {
  let min = array[0], max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    } else if (array[i] > max) {
      max = array[i];
    }
  }
  return {min: min, max: max};
}

console.log(findMinMax([1, 2, 3, 4, 5]));
console.log(findMinMax([-1, 0, 1])); 
