let str = prompt("請輸入字串");
let reversedStr = "";

for(let i = str.length - 1; i >= 0; i--) {
  reversedStr += str[i];
}

window.alert(reversedStr);