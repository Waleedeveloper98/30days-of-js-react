//js-lexical scoping mean apka code physically kaha available hai us ke basis per decide hota hai k kaha access kr skte hain.
//lexical mean physical



//dynamic scoping
// not followed in js

// let num = 34;
// function a() {
//     console.log(num);
// }

// function b() {
//     let num = 54;
//     a()
// }
// b()



//closure defination
//A parent function which return a child function and child function use parent function variable called closure

// function parent() {
//     let val = 100;
//     return function () {
//         console.log(val);
//     }
// }

//benefits
//private variables
//global pollution


//how variables are preserved
//when function end all variables are end but when closure become a backlink of your function and its variables made it name is [[environment]]


// function count() {
//     let c = 0;
//     return function () {
//         c++
//         console.log(c);
//     }
// }
// let fnc = count()
// fnc()
// fnc()
// fnc()

// let fnc2 = count()
// fnc2()
// fnc2()
// fnc2()
// fnc2()

//when you call parent function it make it own here fnc have it own c and fnc2 has it own c


//encaplucation

// function clickLimiter() {
//     let click = 0;
//     return function () {
//         if (click < 5) {
//             click++
//             console.log(`Clicked times ${click}`);
//         }else{
//             console.error("Limit Exceeded");
//         }
//     }
// }

// let fnc = clickLimiter()
// fnc()
// fnc()
// fnc()
// fnc()
// fnc()
// fnc()


// function createToaster(config) {
//     return function (noti) {
//         let parent = document.querySelector(".parent")
//         parent.classList.add(
//             config.positionX === "right" ? "right-5" : "left-5",
//             config.positionY === "top" ? "top-5" : "bottom-5"
//         );
//         let div = document.createElement("div")
//         div.className = `max-w-fit px-4 py-1 h-fit border border-green-200 rounded-lg shadow-lg p-4 text-green-500 gap-3  ${config.theme === "dark" ? "bg-zinc-100 text-black" : "bg-zinc-800 text-white"}`
//         div.textContent = noti
//         parent.appendChild(div)
//         setTimeout(() => {
//             parent.removeChild(div)
//         }, config.duration);
//     }
// }

// let toaster = createToaster({
//     positionX: "right",
//     positionY: "top",
//     theme: "light",
//     duration: 3000
// })
// setTimeout(() => {
//     toaster("Successfully Logged In!")
// }, 1000);
// setTimeout(() => {
//     toaster("Successfully Logged In!")
// }, 2000);


function multiply(n){
    return function(){
        let val = 10;
        console.log(val * n);
    }
}
let fnc = multiply(20)
fnc()

function outer() {
  let count = 0;
  return function() { count++; return count; }
}
const counter = outer();
console.log(counter());
console.log(counter());

