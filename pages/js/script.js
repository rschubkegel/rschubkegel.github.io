"use strict";

const ALIVE_COLOR = "rgb(0, 255, 0)";
const DEAD_COLOR = "rgb(0, 0, 0)";
const BOARD_TILE_COUNT = 32;
const BOARD_SIZE = "60vmin";
const TILE_SIZE = "calc(" + BOARD_SIZE + " / " + BOARD_TILE_COUNT + ")";
const FOREGROUND_COLOR = "#7ae570";
const BACKGROUND_COLOR = "#4a514b";
const TILE_ID_FORMAT = "tile-x-y";

// board is a table of boolean states
let gameBoard;

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
    board.css({
        width: BOARD_SIZE,
        display: "flex",
        flexDirection: "column"
    });
    for (let y = 0; y < BOARD_TILE_COUNT; y++)
    {
        //gameBoard.add([]);

        // add div (row) to contain tiles
        let div = $("<div></div>");
        div.css({
            display: "flex",
            flexDirection: "row"
        });
        board.append(div);

        for (let x = 0; x < BOARD_TILE_COUNT; x++)
        {
            //gameBoard[y].add(false);

            // add button to represent tile on board
            let b = $("<button></button>");
            b.attr("class", "tile ui-button ui-widget ui-corner-all");
            b.attr("id", getTileId(x, y));
            b.css({
                width: TILE_SIZE,
                height: TILE_SIZE,
                backgroundColor: DEAD_COLOR
            });
            div.append(b);
        }
        //content += "\n";
    }

    // resize characters
    // board.css({
    //     fontSize: FONT_SIZE,
    //     letterSpacing: "0.6em",
    //     textAlign: "center",
    // });

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
function tileClicked(button) {

    // toggle this tile
    toggleColor(button);

    // get tile location on board
    let spanIndices = getButtonIndices(button);
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
            toggleColor(adjacentTiles[i]);
        }
    }
}

// toggle color of the tile
function toggleColor(button) {
    //console.log("toggling " + button.attr("id"))
    let c = button.css("background-color");
    if (c === DEAD_COLOR)
    {
        button.css("background-color", ALIVE_COLOR);
    }
    else
    {
        button.css("background-color", DEAD_COLOR);
    }
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
function getButtonIndices(button) {
    let id = button.attr("id");
    let x = id.substr(5, 2);
    let y = id.substr(8, 2);
    x = Number(x);
    y = Number(y);
    return [x, y];
}

// returns state of specified tile (DEAD or ALIVE)
function getTile(x, y) {
    //console.log("getting tile at " + x + ", " + y);
    return $("#" + getTileId(x, y));
}

// returns true if index is valid x or y index on board, false otherwise
function isValidIndex(i) {
    let result = true;
    if (i < 0 || i >= BOARD_TILE_COUNT)
    {
        result = false;
    }
    //console.log("index " + i + " is " + (result ? "" : "not") + " valid");
    return result;
}