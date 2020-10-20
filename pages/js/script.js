"use strict";

const ALIVE = 'X';
const DEAD = '.';
const BOARD_TILES = 32;
const BOARD_SIZE = "60vmin";
const FOREGROUND_COLOR = "#7ae570";
const BACKGROUND_COLOR = "#4a514b";

// called on load
function start() {
    console.log("start called");

    // set up CSS
    console.log("setting up CSS");
    $("*").css({
        "margin": "0",
        "padding": "0",
        "font-family": "monospace",
        //"outline": "red solid 1px",
    });
    $("#page-wrapper").css({
        "display": "flex",
        "flex-direction": "row",
        "align-items": "center",
        "width": "100vw",
        "height": "100vh",
    });
    $(".center-pane").css("flex", "1 1 " + BOARD_SIZE);
    $(".side-pane").css("flex", "1 1 20%");

    // add board
    console.log("adding characters to board");
    let board = $("#board");
    let content = "";
    for (let y = 0; y < BOARD_TILES; y++)
    {
        for (let y = 0; y < BOARD_TILES; y++)
        {
            content += DEAD;
        }
        content += "\n";
    }
    board.html(content);

    // resize characters
    let fontSize = "calc(" + BOARD_SIZE + " / " + BOARD_TILES + ")";
    board.css({
        "font-size": fontSize,
        "letter-spacing": "0.5em",
        "text-align": "center",
    });

    // set color
    console.log("setting color");
    $(".foreground").css("color", FOREGROUND_COLOR);
    $(".background").css("background-color", BACKGROUND_COLOR);
}