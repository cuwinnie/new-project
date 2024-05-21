// 第(1)題
function daysFromNow(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const timeDiff = date.getTime() - now.getTime();
  const dayDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
  return dayDiff;
}

// 顯示2023-3-31距離現在有幾天
console.log('2023-3-31距離現在有' + daysFromNow('2023-3-31') + '天');

// 第(2)題
function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString('hello')); // 'olleh'
console.log(reverseString('world')); // 'dlrow'

// 第(3)題
function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

console.log(isPalindrome('racecar')); // true
console.log(isPalindrome('level'));   // true
console.log(isPalindrome('hello'));   // false