const arr = [1, 5, 2, 7, 3];
let max = arr[0];

for (const element of arr) {
  if (element > max) {
    max = element;
  }
}

console.log(max);