let variable1 = "собака" < "dog"; //false
console.log ('variable1', variable1, typeof variable1) ;


let variable2 = !9 || !!9; //true
console.log ('variable2', variable2, typeof variable2) ;

let variable3 = (null && 2) || (null === 0); //false
console.log ('variable3', variable3, typeof variable3) ;

let variable4 = "3">"21"; //true
console.log ('variable4', variable4, typeof variable4) ;

let variable5 = !true + false + true ; //1
console.log ('variable5', variable5, typeof variable5) ;

let variable6 = 4 && null && 1 || ( false + 2 ) ; // 2
console.log ('variable6', variable6, typeof variable6) ; 

let variable7 = !1 || 1 && null ; // null
console.log ('variable7', variable7, typeof variable7) ;

let variable8 = !true === false ; // true
console.log ('variable8', variable8, typeof variable8) ;

let variable9 = "egg" + 1 ; // egg1
console.log ('variable9', variable9, typeof variable9) ;

let variable10 = !(5<4) || (4<1); // true
console.log ('variable10', variable10, typeof variable10) ;

let variable11 = "" === null; // false
console.log ('variable11', variable11, typeof variable11) ;

let variable12 = (0 < -1) == !(4 >= 4); // true
console.log ('variable12', variable12, typeof variable12) ;

let variable13 = "о" + + "false" + "изм"; // оNaNизм
console.log ('variable13', variable13, typeof variable13) ;