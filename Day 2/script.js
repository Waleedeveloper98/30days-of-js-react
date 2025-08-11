console.log(a);
var a = 10;
//output: undefined

console.log(b);
let b = 20;
//output: referenceerror

const c = 30;
c = 40;
console.log(c);
//output: cannot redclear const variable


function test() {
  console.log(d);
  var d = 50;
}
test();
//output: undefined

{
  let e = 60;
}
console.log(e);
//output: e is not defined


var f = 70;
if(true) {
  var f = 80;
}
console.log(f);
//output: 80

let g = 90;
if(true) {
  let g = 100;
}
console.log(g);
//output: 90

for(var i=0; i<3; i++) {
  setTimeout(() => console.log(i), 100);
}
//output: 2

for(let j=0; j<3; j++) {
  setTimeout(() => console.log(j), 100);
}
//output: 222

console.log(typeof h);
let h;
//output: error