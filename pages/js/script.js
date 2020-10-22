"use strict";

const BOARD_TILE_COUNT = 16;
const BOARD_SIZE = "60vmin";
const TILE_SIZE = "calc(" + BOARD_SIZE + " / " + BOARD_TILE_COUNT + ")";
const FOREGROUND_COLOR = "rgb(122, 230, 112)";
const BACKGROUND_COLOR = "#4a514b";
const ACCENT_COLOR = "#92a083";
const CONTRAST_COLOR = "rgb(40,55,42)";
const TILE_ID_FORMAT = "tile-x-y";

// board is a table of boolean states
let buttonBoard;
let curGameBoard;
let nextGameBoard;

// called on load
function start() {
    console.log("start called");

    // initialize tables of states
    buttonBoard = [];
    curGameBoard = [];
    nextGameBoard = [];

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
    let centerPane = $(".center-pane");
    centerPane.css({
        flex: "1 1 " + BOARD_SIZE,
        display: "flex",
        flexDirection: "column"
    });
    $(".side-pane").css("flex", "1 1 20%");

    // add board
    console.log("adding characters to board");
    let board = $("#board");
    board.css({
        width: BOARD_SIZE,
        display: "flex",
        flexDirection: "column"
    });
    for (let y = 0; y < BOARD_TILE_COUNT; y++) {
        // add empty "column" to game boards
        buttonBoard.push([]);
        curGameBoard.push([]);
        nextGameBoard.push([]);

        // add div (row) to contain tiles
        let div = $("<div></div>");
        div.css({
            display: "flex",
            flexDirection: "row"
        });
        board.append(div);

        for (let x = 0; x < BOARD_TILE_COUNT; x++) {
            // add button to represent tile on board
            let b = $("<button></button>");
            b.attr("class", "tile ui-button ui-widget ui-corner-all");
            b.attr("id", getTileButtonId(x, y));
            b.css({
                width: TILE_SIZE,
                height: TILE_SIZE,
                backgroundColor: CONTRAST_COLOR,
                border: "1px solid " + ACCENT_COLOR,
                borderRadius: "0"
            });
            div.append(b);

            // add state to board
            buttonBoard[y].push(b);
            curGameBoard[y].push(false);
            nextGameBoard[y].push(false);
        }
        //content += "\n";
    }

    // register board clicks
    console.log("registering clicks");
    $(".tile").click(function() {
        tileClicked($(this));
    });

    // add board controls
    let tickButton = $("<button>Next Iteration</button>");
    tickButton.css({
        width: BOARD_SIZE,
    })
    tickButton.click(tick);
    centerPane.append(tickButton);

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
}

// loops through all states, calculates next tick's state
function tick() {
    // store entire next board of states before updating actual board
    for (let y = 0; y < curGameBoard.length; y++) {
        for (let x = 0; x < curGameBoard.length; x++) {

            // calculate next state
            let curState = curGameBoard[y][x];
            let nextState = false;
            let adjacentIndices = getAdjacentIndices(x, y);
            let liveNeighborCount = 0;
            for (let i = 0; i < adjacentIndices.length; i++) {
                if (isValidIndex(adjacentIndices[i].x)
                    && isValidIndex(adjacentIndices[i].y)) {
                    liveNeighborCount
                        += curGameBoard[adjacentIndices[i].y][adjacentIndices[i].x]
                        ? 1 : 0;
                }
            }

            // store in next board variable
            if (curState) {
                nextState =
                    liveNeighborCount === 2
                    || liveNeighborCount === 3;
            }
            else {
                nextState = liveNeighborCount === 3;
            }
            nextGameBoard[y][x] = nextState;
        }
    }

    // update actual board
    for (let y = 0; y < curGameBoard.length; y++) {
        for (let x = 0; x < curGameBoard.length; x++) {
            curGameBoard[y][x] = nextGameBoard[y][x];
            setButtonColor(buttonBoard[y][x], curGameBoard[y][x])
        }
    }
}

// returns an array of dictionaries, each with an x and y value
// note: adjacent tiles include corners
function getAdjacentIndices(x, y) {
    return [
        {"x": x + 1, "y": y},
        {"x": x - 1, "y": y},
        {"x": x, "y": y + 1},
        {"x": x, "y": y - 1},
        {"x": x + 1, "y": y + 1},
        {"x": x + 1, "y": y - 1},
        {"x": x - 1, "y": y + 1},
        {"x": x - 1, "y": y - 1}
    ];
}

// called when a span with class="tile" is clicked
function tileClicked(button) {

    // get tile location on board
    let buttonPos = getButtonIndices(button);

    // toggle this tile
    setButtonColor(button, toggleTile(buttonPos.x, buttonPos.y));
}

// toggles the state on the board
// returns the new state of the tile
function toggleTile(x, y) {
    return curGameBoard[y][x] = !curGameBoard[y][x];
}

// toggle color of the tile
function setButtonColor(button, state) {
    //console.log("toggling " + button.attr("id"))
    if (button == null) {
        console.error("button null!")
    }
    else {
        let c = state ? FOREGROUND_COLOR : CONTRAST_COLOR;
        button.css("background-color", c);
    }
}

// adds leading zeroes to ensure number becomes string of specified length
function addLeadingZeros(num, len) {
    let sNum = num.toString();
    while (sNum.length < len) {
        sNum = "0" + sNum;
    }
    return sNum;
}

// returns the correctly formatted id of a tile at the given indices
function getTileButtonId(x, y) {
    return TILE_ID_FORMAT
        .replace("x", addLeadingZeros(x, 2))
        .replace("y", addLeadingZeros(y, 2));
}

// returns indices of tile span
function getButtonIndices(button) {
    let id = button.attr("id");
    let x = id.substr(5, 2);
    let y = id.substr(8, 2);
    return {"x": Number(x), "y": Number(y)};
}

// returns html button at given indices
function getTileButton(x, y) {
    //console.log("getting tile at " + x + ", " + y);
    let result = null;
    if (isValidIndex(x, y)) {
        // result = $("#" + getTileId(x, y))
        result = buttonBoard[y][x];
    }
    return result;
}

// returns true if index is valid x or y index on board, false otherwise
function isValidIndex(i) {
    let result = true;
    if (i < 0 || i >= BOARD_TILE_COUNT) {
        result = false;
    }
    //console.log("index " + i + " is " + (result ? "" : "not") + " valid");
    return result;
}