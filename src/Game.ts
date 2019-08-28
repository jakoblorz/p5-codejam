/// <reference path="../node_modules/@types/p5/global.d.ts" />

export function setup() {
    createCanvas(windowWidth, windowHeight);
}

let x=0;
let x_delta=2;
let y=0;
let y_delta=0;

export function draw() {
    background(51);

    if (x<=(windowWidth-10)){
        x=x+x_delta;
    }

    if (y<=(windowHeight-10)){
        y=y+y_delta;
    }

    circle(x,y,10);

}

export function keyPressed() {


    switch (keyCode) {
        case LEFT_ARROW:
            x_delta=-2;
            break;
        case RIGHT_ARROW:
            x_delta=2;
            break;
        case UP_ARROW:
            y_delta=-2;
            break;
        case DOWN_ARROW:
            y_delta=2;
            break;
    }
}