// 1 exersise

let a = 3;
let b = 9;
let c = 4;

if (a<=b) {
    if (b<=c) {
        console.log (a, b, c);
    } else {
        if (a<=c) {
            console.log (a, c, b);
        } else {
            console.log (c, a, b);
        }
    }
} else {
    if (c<=b) {
        console.log (c, b, a)
    } else {
        if (a<=c) {
            console.log (b, a, c)
        } else {
            console.log (b, c, a)
        }
    }
}

// 2 exersise

let temp = 196;
let unit = "c" ;

if (unit === "f") {
    F = temp;
    C = (F-32)*5/9;
    K = C+273.15;
    console.log ("F", F, "C", C, "K", K);
} else {
    if (unit === "c") {
        C = temp;
        F = (C*9/5)+32;
        K = C+273.15;
        console.log ("F", F, "C", C, "K", K);
    } else if (unit === "k"){
        K = temp;
        C = K-273.15;
        F = (C*9/5)+32;
        console.log ("F", F, "C", C, "K", K);
    }
}

// 3 exersise

let T = 0;
let i = 2;


for (T, i; i<3, T<2; i++, T++) {
    console.log(T, i)
}





