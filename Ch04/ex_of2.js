const arr = [1, 2, 3, 4, 5, 6, 7, 8];
let sum = 0;

for (const element of arr) {
  if (element % 2 === 0) {
    sum += element;
  }
}

console.log(sum);