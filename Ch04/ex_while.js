let num = prompt("輸入一個大於1的自然數");
let i = 2;
let isPrime = true;

while(i < num) {
  if(num % i === 0) {
    isPrime = false;
    break;
  }
  i++;
}

if(isPrime) {
  window.alert(num + "是質數");
} else {
  window.alert(num + "不是質數");
}