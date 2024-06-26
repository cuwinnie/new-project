console.log(Array.isArray([1, 2, 3]));
console.log(Array.of(5));
console.log(Array.of(1, 2, 3));
console.log(Array.from('foo'));
console.log(Array.from([1, 2, 3], x => x + x));
console.log([1, 2, 3].toString());
console.log([1, 2, 3, 1, 2].indexOf(1));
console.log([1, 2, 3, 1, 2].indexOf(1, 2));
console.log([1, 2, 3, 1, 2].lastIndexOf(1));
console.log([1, 2, 3, 1, 2].lastIndexOf(1, 2));
let iterator1 = ['a', 'b' , 'c'].entries();
console.log(iterator1.next().value);
let iterator2 = ['a', 'b' , 'c'].keys();
console.log(iterator2.next().value);
let iterator3 = ['a', 'b' , 'c'].values();
console.log(iterator3.next().value);
console.log([1, 2, 3].concat(['a', 'b']));
console.log(['a', 'b', 'c'].join('-'));
console.log(['a', 'b', 'c', 'd'].slice(1, 3));
console.log(['a', 'b', 'c', 'd'].fill('x', 1, 3));
console.log([1, 5, 3, 2, 4].sort());
console.log([1, 2, 3, 4, 5].reverse());
let arr1 = ['a', 'b', 'c', 'd', 'e'];
console.log(arr1.pop());
let arr2 = ['a', 'b', 'c'];
console.log(arr2.push('x'));
let arr3 = ['a', 'b', 'c'];
console.log(arr3.shift());
let arr4 = ['a', 'b', 'c'];
console.log(arr4.unshift('x', 'y'));
let arr5 = ['a', 'b', 'c', 'd'];
console.log(arr5.splice(1, 2, "x"));
