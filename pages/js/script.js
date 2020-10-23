"use strict";

const BOARD_TILE_COUNT = 16;
const BOARD_SIZE = "60vmin";
const TILE_SIZE = "calc(" + BOARD_SIZE + " / " + BOARD_TILE_COUNT + ")";
const COLOR_FOREGROUND = "rgb(122, 230, 112)";
const COLOR_ACCENT = "#92a083";
const COLOR_BACKGROUND = "#4a514b";
const COLOR_CONTRAST = "rgb(40,55,42)";
const TILE_ID_FORMAT = "tile-x-y";
const COUNTER_FORMAT = "Iteration: x";

// board is a table of boolean states
let htmlBoard;
let curGameBoard;
let nextGameBoard;
let mouseDown;
let timedTick;
let tickCount;
let tickCounter;
let interval;

// called on load
function start() {
    console.log("start called");

    // initialize variables
    htmlBoard = [];
    curGameBoard = [];
    nextGameBoard = [];
    mouseDown = false;
    timedTick = null;
    tickCount = 1;
    interval = 250;

    // set up CSS
    console.log("setting up CSS");
    $("*").css({
        "margin": "0",
        "padding": "0",
        "font-family": "monospace",
        //"outline": "red solid 1px",
        draggable: "false"
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

    // add tick counter
    tickCounter = $("<p></p>");
    tickCounter.attr("id", "tick-counter");
    tickCounter.css({
        fontSize: "large",
        color: COLOR_FOREGROUND
    });
    tickCounter.html(COUNTER_FORMAT.replace("x", "1"));
    centerPane.prepend(tickCounter);

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
        htmlBoard.push([]);
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
            let tile = $("<div></div>");
            tile.attr("class", "tile");
            tile.attr("id", getTileId(x, y));
            tile.css({
                width: TILE_SIZE,
                height: TILE_SIZE,
                backgroundColor: COLOR_CONTRAST,
                border: "1px solid " + COLOR_ACCENT
            });

            // register clicks
            tile.mousedown(function() {
                tileClicked($(this));
                mouseDown = true;
            });
            tile.mouseup(function() { mouseDown = false; });
            tile.mouseover(function() {
                if (mouseDown) {
                    tileClicked($(this));
                }
            });

            // add to DOM
            div.append(tile);

            // add state to board
            htmlBoard[y].push(tile);
            curGameBoard[y].push(false);
            nextGameBoard[y].push(false);
        }
        //content += "\n";
    }

    // add board controls
    let controls = $("<div></div>");
    controls.attr("id", "controls");
    controls.css({
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        width: BOARD_SIZE
    });
    centerPane.append(controls);

    let play = $("<button>Play</button>");
    play.click(function() {
        if (!timedTick)
        {
            tick();
            timedTick = setInterval(tick, interval);
        }
    });
    controls.append(play);

    let pause = $("<button>Pause</button>");
    pause.click(function() {
        if (timedTick) {
            clearInterval(timedTick);
            timedTick = null;
        }
    });
    controls.append(pause);

    let tickButton = $("<button>Step</button>");
    tickButton.click(tick);
    controls.append(tickButton);

    let buttonStyle = {
        fontFamily: "monospace",
        fontSize: "large",
        padding: "1ex",
        margin: "1ex",
        color: COLOR_FOREGROUND,
        backgroundColor: COLOR_CONTRAST,
        border: "solid 1px " + COLOR_ACCENT,
        cursor: "pointer",
        width: "6em"
    };

    let intervalTime = $("<input type='text' id='interval-time'>");
    intervalTime.attr("value", interval);
    intervalTime.css({
        fontFamily: "monospace",
        fontSize: "large",
        padding: "1ex",
        margin: "1ex",
        color: COLOR_FOREGROUND,
        backgroundColor: COLOR_CONTRAST,
        border: "solid 1px " + COLOR_ACCENT,
    });
    intervalTime.change(function() {
        // TODO validate input
        interval = $(this).val();
    });
    controls.append(intervalTime);

    $("button").css(buttonStyle);
    let inputs = $("button,input");
    inputs.mouseenter(function() {
        $(this).css("border-color", COLOR_FOREGROUND);
    });
    inputs.mouseout(function() {
        $(this).css("border-color", COLOR_ACCENT);
    });

    // set page colors
    console.log("setting color");
    $(".foreground").css("color", COLOR_FOREGROUND);
    $(".background").css("background-color", COLOR_BACKGROUND);
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
            setElementColor(htmlBoard[y][x], curGameBoard[y][x])
        }
    }

    // update tick counter
    tickCount++;
    tickCounter.html(COUNTER_FORMAT.replace("x", tickCount));
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
function tileClicked(tile) {

    // get tile location on board
    let position = getTileIndices(tile);

    // toggle this tile
    setElementColor(tile, toggleTile(position.x, position.y));
}

// toggles the state on the board
// returns the new state of the tile
function toggleTile(x, y) {
    return curGameBoard[y][x] = !curGameBoard[y][x];
}

// toggle color of the tile
function setElementColor(element, state) {
    //console.log("toggling " + button.attr("id"))
    if (element == null) {
        console.error("button null!")
    }
    else {
        let c = state ? COLOR_FOREGROUND : COLOR_CONTRAST;
        element.css("background-color", c);
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
function getTileId(x, y) {
    return TILE_ID_FORMAT
        .replace("x", addLeadingZeros(x, 2))
        .replace("y", addLeadingZeros(y, 2));
}

// returns indices of tile span
function getTileIndices(button) {
    let id = button.attr("id");
    let x = id.substr(5, 2);
    let y = id.substr(8, 2);
    return {"x": Number(x), "y": Number(y)};
}

// returns html element at given indices
function getTile(x, y) {
    //console.log("getting tile at " + x + ", " + y);
    let result = null;
    if (isValidIndex(x, y)) {
        // result = $("#" + getTileId(x, y))
        result = htmlBoard[y][x];
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