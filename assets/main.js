// main.js

// console.log("Hello, World!");

// let divs = document.querySelectorAll(".grid-container div");

// let rotation =0;
// document.addEventListener("click", function () {
//     let min = 10;
//    let max = 40;
// rotation += Math.floor(Math.random() * (max - min + 1))+min;
// rotation += randomNumber(1,200);
// document.body.style.transform = `rotate(${rotation}deg)`;
// });

// function randomNumber(min, max) {
//     return Math.floor(Math.random() * (max-min) +1) +min;
// }



// function randomize () {

//     divs.forEach(function(div){
//         let scale = randomNumber(.5, 1.2);
//         let translateX = randomNumber (0, 50);
//         let translateY = randomNumber (0,20);
//         let rotate = randomNumber (0, 360);
//         div.style.transform =
//             `scale(${scale})
//             translate(${translateX}%, ${translateY}%)
//             rotate(${rotate}deg)`;
//     })
//     console.log(divs.length, "randomize!");
// }

// document.addEventListener("click", randomize);

let grid = document.querySelectorAll(".grid-container");
let divs = document.querySelectorAll(".grid-container div");

function randomize() {
    console.log(divs.length, "randomize!")

    // affect the whole grid
    grid[0].style.transform = `rotate(${Math.random() * 360}deg)`;

    // just the grid divs
    divs.forEach(function (div) {
        let scale = randomNumber(.5, 1.2);
        let translateX = randomNumber(0, 50);
        let translateY = randomNumber(0, 20);
        let rotate = randomNumber(0, 360);

        // 50% of the time ...
        if (Math.random() > .5) {
            scale = 1; // don't affect scale
            translateX = randomNumber(0, 80);
            translateY = randomNumber(0, 80);
        }

        div.style.transform = `scale(${scale}) translate(${translateX}%, ${translateY}%) rotate(${rotate}deg)`;
    });
}
document.addEventListener("click", randomize);

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}