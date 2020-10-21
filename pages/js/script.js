"use strict";

const ALIVE = 'X';
const DEAD = ".";
const BOARD_TILE_COUNT = 32;
const BOARD_SIZE = "60vmin";
const FOREGROUND_COLOR = "#7ae570";
const BACKGROUND_COLOR = "#4a514b";
const TILE_ID_FORMAT = "tile-x-y";

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
    for (let y = 0; y < BOARD_TILE_COUNT; y++)
    {
        for (let x = 0; x < BOARD_TILE_COUNT; x++)
        {
            content += "<span class=\"tile\" id=\""
                + getTileId(x, y)
                + "\">"
                + DEAD
                + "</span>";
        }
        content += "\n";
    }
    board.html(content);
    board.css("user-select", "none");

    // resize characters
    let fontSize = "calc(" + BOARD_SIZE + " / " + BOARD_TILE_COUNT + ")";
    board.css({
        "font-size": fontSize,
        "letter-spacing": "0.5em",
        "text-align": "center",
        "cursor": "pointer",
    });

    // set colors
    console.log("setting color");
    $(".foreground").css("color", FOREGROUND_COLOR);
    $(".background").css("background-color", BACKGROUND_COLOR);

    // register clicks
    console.log("registering clicks");
    $(".tile").click(function() {
        tileClicked($(this));
    });
}

// called when a span with class="tile" is clicked
function tileClicked(span) {

    // toggle this tile
    toggleChar(span);

    // get tile location on board
    let spanIndices = getSpanIndices(span);
    let x = spanIndices[0];
    let y = spanIndices[1];

    // get adjacent tiles if possible
    let adjacentTiles = [null, null, null, null];
    if (isValidIndex(x + 1)) adjacentTiles[0] = getTile(x + 1, y);
    if (isValidIndex(x - 1)) adjacentTiles[1] = getTile(x - 1, y);
    if (isValidIndex(y + 1)) adjacentTiles[2] = getTile(x, y + 1);
    if (isValidIndex(y - 1)) adjacentTiles[3] = getTile(x, y - 1);

    // loop through adjacent tiles
    for (let i = 0; i < adjacentTiles.length; i++) {
        if (adjacentTiles[i] != null)
        {
            toggleChar(adjacentTiles[i]);
        }
    }
}

// if the specified span's character is dead, make it alive, and vice versa
function toggleChar(span) {
    console.log("toggling " + span.attr("id"))
    let curChar = span.html();
    if (curChar === ALIVE) {
        curChar = DEAD;
    }
    else {
        curChar = ALIVE;
    }
    span.html(curChar);
}

// adds leading zeroes to ensure number becomes string of specified length
function addLeadingZeros(num, len)
{
    let sNum = num.toString();
    while (sNum.length < len)
    {
        sNum = "0" + sNum;
    }
    return sNum;
}

// returns the correctly formatted id of a tile at the given indices
function getTileId(x, y) {
    return TILE_ID_FORMAT
        .replace("x", addLeadingZeros(x, 2))
        .replace("y", addLeadingZeros(y, 2));
}

// returns indices of tile span
function getSpanIndices(span) {
    let id = span.attr("id");
    let x = id.substr(5, 2);
    let y = id.substr(8, 2);
    console.log("un-cast indices of span are " + x + ", " + y);
    x = Number(x);
    y = Number(y);
    console.log("cast indices of span are " + x + ", " + y);
    return [x, y];
}

// returns state of specified tile (DEAD or ALIVE)
function getTile(x, y) {
    console.log("getting tile at " + x + ", " + y);
    return $("#" + getTileId(x, y));
}

// returns true if index is valid x or y index on board, false otherwise
function isValidIndex(i) {
    let result = true;
    if (i < 0 || i >= BOARD_TILE_COUNT)
    {
        result = false;
    }
    console.log("index " + i + " is " + (result ? "" : "not") + " valid");
    return result;
}