console.log(2 ** 10);				// (1)

console.log(Math.floor(100 / 7));	// (2)
console.log(100 % 7);

console.log((10 / 3).toFixed(2));	// (3)

console.log(Number("5") + 10);		// (4)

console.log(Math.PI * 7 * 7);		// (5)

console.log("hello" + "world");		// (6)

console.log(123 % 10);				// (7)

var num = 4;						// (8)
console.log(String(num) + "2");	

var x = 15;							// (9)
var result = x >= 10 && x <= 20;
console.log(result); 

var str = "hello";					// (10)
var result = str !== "" && str !== undefined;
console.log(result); 

var x = 25;							// (11)
var result = x % 2 === 0 ? "Even" : "Odd";
console.log(result); 
		
var x = 10;							// (12)
var y = 5;
var result = x > y ? x : y;
console.log(result); 