/// <reference path="../node_modules/@types/p5/global.d.ts" />

export function setup() {
    createCanvas(windowWidth, windowHeight);
    // x = windowWidth/2
    // y = windowHeight/2
}
const DIAMETER=10
// let x;
// let x_delta=2;
// let y;
// let y_delta=0;


let position = [20,0];
let movement = [0,20];
function getX(arr){
    return arr [0]
}
function getY(arr){
    return arr [1]
}

function isTopOutOfBounds(arr){
    let y = getY(arr)

    if (y<=DIAMETER){
        return true;
    }

    return false
}

function isBottomOutOfBounds(arr) {
    let y = getY(arr);

    if (y >= (windowHeight-DIAMETER)) {
        return true;
    }

    return false;
}

export function draw() {
    background(256);

    let topOutOfBounds = isTopOutOfBounds(position);
    if (topOutOfBounds) {
        let y = getY(movement);
        if (y <= 0) {
            movement[1] = movement[1] * -1;
        }
    }

    let bottomOutOfBounds = isBottomOutOfBounds(position);
    if (bottomOutOfBounds) {
        let y = getY(movement);
        if (y >= 0) {
            movement[1] = movement[1] * -1;
        }
    }

    // if (x<=(windowWidth-DIAMETER)){
    //     x=x+x_delta;
    // }

    // if (y<=(windowHeight-DIAMETER)){
    //     y=y+y_delta;
    // }

    // if (x<=DIAMETER){
    //     x=x-x_delta;
    // }

    // if (y<=DIAMETER){
    //     y=y-y_delta;
    // }


    // Positions Update
    let [x, y] = position;
    let [xm, ym] = movement;
    x += xm
    y += ym
    position = [x, y]
 

    noStroke();
    fill(206,0,0);
    circle(x,y,DIAMETER);

}

export function keyPressed() {


    switch (keyCode) {
        case LEFT_ARROW:
            movement = [-1, 0];
            break;
        case RIGHT_ARROW:
            movement = [1, 0];
            break;
        case UP_ARROW:
            movement = [0, -1];
            break;
        case DOWN_ARROW:
            movement = [0, 1];
            break;
    }
}