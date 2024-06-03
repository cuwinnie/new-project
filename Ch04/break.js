var str = '';

for (let i = 1; i <= 10; i++) {
  if (i === 3) {
    break;
  }
  str = str + i + '\t';
}

window.alert(str);


