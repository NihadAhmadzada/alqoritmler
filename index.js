// 1 while

let n = 1;

while (n <= 100) {
    console.log(n);
    n++;
}
// for

for (let i = 1; i < 101; i++) {
    console.log(i);
}

// 2
const array = [12, 23, 34, 45, 56, 67, 78, 89];
let enkicik = array[0];
for (let a = 0; a < array.length; a++) {
    if (array[a] < enkicik) {
        enkicik = array[a];
    }
}
console.log(enkicik);

// 3

let enboyuk = array[0];
for (let b = 0; b < array.length; b++) {
    if (array[b] > enkicik) {
        enboyuk = array[b];
    }
}
console.log(enboyuk);

// 4    
let num = prompt("reqem yazin");
let reqem = true;
if (num === 1) {
} else if (num > 1) {
    for (let i = 2; i < num / 2; i++) {
        if (num % i === 0) {
            reqem = false;
            break;
        } else {
            reqem = true;
        }
    }
    if (reqem) {
        console.log("sadedir");
    } else {
        console.log("Murekkebdir");
    }
}


//  5 ve 6-ni yaza bilmedim :)  <3

