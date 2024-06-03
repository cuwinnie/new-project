let i = 5;

while(i >= 1) {
  let row = "";
  let j = 1;
  while(j <= i) {
    row += "*";
    j++;
  }
  console.log(row);
  i--;
}