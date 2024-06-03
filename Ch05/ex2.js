// 第(1)題
function fibonacci(n) {
  if (n === 1 || n === 2) 
    return 1;  
  else
    return fibonacci(n - 1) + fibonacci(n - 2);  
}

// 印出費氏數列前15項
for(let i = 1; i < 16; i++)
  console.log(fibonacci(i));

// 第(2)題
function GCD(m, n) {
  if (m % n === 0)
    return n;
  else
    return GCD(n, m % n);
}

console.log("84和1080的最大公因數為", GCD(84, 1080));

