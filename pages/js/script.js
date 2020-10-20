"use strict";

const ALIVE = 'X';
const DEAD = '.';
const BOARD_SIZE = 32;
const FOREGROUND_COLOR = "#7ae570";
const BACKGROUND_COLOR = "#4a514b";

// called on load
function start() {
    console.log("start called");

    // add board
    console.log("adding characters to board");
    let board = $("#board");
    let content = "";
    for (let y = 0; y < BOARD_SIZE; y++)
    {
        for (let y = 0; y < BOARD_SIZE; y++)
        {
            content += DEAD;
        }
        content += "\n";
    }
    board.html(content);

    // set color
    console.log("setting color");
    $(".foreground").css("color", FOREGROUND_COLOR);
    $(".background").css("background-color", BACKGROUND_COLOR);
}