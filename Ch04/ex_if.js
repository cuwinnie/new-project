let year = prompt('請輸入西元年份');

if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
  window.alert(year + " 是閏年");
} 
else {
  window.alert(year + " 不是閏年");
}