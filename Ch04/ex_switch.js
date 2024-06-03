let month = prompt("請輸入月份");

switch (month) {
  case "1":
  case "3":
  case "5":
  case "7":
  case "8":
  case "10":
  case "12":
    window.alert("31天");
    break;
  case "4":
  case "6":
  case "9":
  case "11":
    window.alert("30天");
    break;
  case "2":
    let year = prompt("請輸入年份");
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
      window.alert("29天");
    } else {
      window.alert("28天");
    }
    break;
  default:
    window.alert("輸入錯誤");
    break;
}