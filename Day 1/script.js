// function x() {
//     console.log("X start");
//     y();
//     console.log("X end");
// }

// function y() {
//     console.log("Y start");
//     z();
//     console.log("Y end");
// }

// function z() {
//     console.log("Z");
// }

// x();
//output
//x start
//y start
//z
//y end
//x end


// function one() {
//     console.log("One");
//     two();
// }

// function two() {
//     three();
//     console.log("Two");
// }

// function three() {
//     console.log("Three");
// }

// one();
//output
// One 
// Three
// Two

// function alpha() {
//     beta();
//     console.log("Alpha");
// }

// function beta() {
//     gamma();
//     console.log("Beta");
// }

// function gamma() {
//     console.log("Gamma start");
//     console.log("Gamma end");
// }

// alpha();
//output
//gamma start
//gamma end
//beta
//alpha



// function start() {
//     console.log("Start 1");
//     middle();
//     console.log("Start 2");
// }

// function middle() {
//     console.log("Middle 1");
//     end();
//     console.log("Middle 2");
// }

// function end() {
//     console.log("End 1");
//     console.log("End 2");
// }

// start();

//start() call -> push
//print: start 1
//middle() call -> push
//print: middle 1
//end() call -> push
//print: end 1
//print: end 2
//end pop
//print: middle 2
//middle pop
//print: start 2
//start pop


// function red() {
//     console.log("Red start");
//     green();
//     console.log("Red end");
// }

// function green() {
//     blue();
//     console.log("Green");
// }

// function blue() {
//     console.log("Blue 1");
//     console.log("Blue 2");
// }

// console.log("Program begin");
// red();
// console.log("Program end");


//Program begin
//red start
//blue 1
//blue 2
//green
//red end 
//program end


// function p() {
//     console.log("P1");
//     q();
//     console.log("P2");
// }

// function q() {
//     console.log("Q1");
//     r();
//     console.log("Q2");
// }

// function r() {
//     console.log("R1");
//     s();
//     console.log("R2");
// }

// function s() {
//     console.log("S1");
// }

// p();
// P1
// Q1
// R1
// S1
// R2
// Q2
// P2



console.log("Program Start");

function alpha() {
    console.log("Alpha 1");
    beta();
    console.log("Alpha 2");
}

function beta() {
    console.log("Beta 1");
    gamma();
    console.log("Beta 2");
}

function gamma() {
    console.log("Gamma 1");
    delta();
    console.log("Gamma 2");
}

function delta() {
    console.log("Delta 1");
    epsilon();
    console.log("Delta 2");
}

function epsilon() {
    console.log("Epsilon 1");
    console.log("Epsilon 2");
}

alpha();

console.log("Program End");

// program start 
// alpha 1
// beta 1
// gamma 1
// delta 1
//  epsilon 1
//   epsilon 2
//   delta 2
//   gamma 2
//    beta 2
//     alpha 2
//     program end


// function a() { b(); console.log("A"); }
// function b() { console.log("B"); }
// a();
// console.log("C");

// b 
// a 
// c 
