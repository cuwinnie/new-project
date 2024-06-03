let n = prompt("請輸入一個正整數");
let result = 1;
let i = 1;

do {
  result *= i;
  i++;
} while (i <= n);

window.alert(n + "! = " + result);