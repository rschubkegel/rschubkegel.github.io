"use strict";

const TILE_ID_FORMAT = "tile-x-y";
const COUNTER_FORMAT = "Iteration: x";
const STATE_FORMAT = "State: <span class='x'>x</span>";
const MIN_INTERVAL = 50;
const MAX_INTERVAL = 1000;

// board is a table of boolean states
let boardTileCount;
let htmlBoard;
let curGameBoard;
let nextGameBoard;
let mouseDown;
let timedTick;
let tickCount;
let tickText;
let stateText;
let interval;

// called on load
function start() {
    console.log("start called");

    // initialize variables
    boardTileCount = getComputedStyle(document.body).getPropertyValue("--board-tile-width");
    boardTileCount = parseInt(boardTileCount);
    htmlBoard = [];
    curGameBoard = [];
    nextGameBoard = [];
    mouseDown = false;
    timedTick = null;
    tickCount = 1;
    interval = 250;

    // add state indicator
    stateText = $("#state-text");
    setStateHtml("stopped");

    // add tick counter
    tickText = $("#iteration-text");
    resetTickCounter();

    // add text
    let boardText = $("#board-text");
    boardText.append(stateText);
    boardText.append(tickText);

    // add board
    console.log("adding characters to board");
    let board = $("#board-grid");
    for (let y = 0; y < boardTileCount; y++) {
        // add empty "column" to game boards
        htmlBoard.push([]);
        curGameBoard.push([]);
        nextGameBoard.push([]);

        // add div (row) to contain tiles
        let div = $("<div></div>");
        div.css({
            display: "flex",
            flexDirection: "row",
            justifyContent: "center"
        });
        board.append(div);

        for (let x = 0; x < boardTileCount; x++) {
            // add button to represent tile on board
            let tile = $("<div></div>");
            let borderClass = "";
            if (x === 0) {
                borderClass += " no-left-border";
            }
            if (y === 0) {
                borderClass += " no-top-border";
            }
            tile.attr("class", "tile" + borderClass);
            tile.attr("id", getTileId(x, y));
            setTileState(tile, false);

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

    // register button actions
    $("#start-button").click(function() {
        startSimulation();
        tick();
    });
    $("#stop-button").click(stopSimulation);
    $("#step-button").click(tick);
    $("#reset-button").click(resetSim);

    //data validation for iteration interval input
    let intervalField = $("#interval-input");
    intervalField.attr("max", MAX_INTERVAL);
    intervalField.attr("min", MIN_INTERVAL);
    intervalField.change(function(){
        updateInterval($(this).val());
    });
    intervalField.blur(function(){
        $(this).val(interval);
    });
}

function startSimulation() {
    if (!timedTick)
    {
        timedTick = setInterval(tick, interval);
        setStateHtml("running");
    }
}

function stopSimulation() {
    if (timedTick) {
        clearInterval(timedTick);
        timedTick = null;
        setStateHtml("stopped");
    }
}

// loops through all states, calculates next tick's state
function tick() {

    // track whether any changes to board were made
    let changed = false;

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

            // determine next state
            if (curState) {

                // if this tile was alive...
                nextState =
                    liveNeighborCount === 2
                    || liveNeighborCount === 3;
            }
            else {

                // if this tile was dead...
                nextState = liveNeighborCount === 3;
            }

            // was the state changed?
            if (curState !== nextState) {
                changed = true;
            }

            // update next game board
            nextGameBoard[y][x] = nextState;
        }
    }

    // if any changes happened in the simulation, update board and iteration
    if (changed) {

        // update board
        for (let y = 0; y < curGameBoard.length; y++) {
            for (let x = 0; x < curGameBoard.length; x++) {
                curGameBoard[y][x] = nextGameBoard[y][x];
                setTileState(htmlBoard[y][x], curGameBoard[y][x])
            }
        }

        // update tick counter
        incrementTickCounter();
    }

    // if no changes happened this iteration, pause simulation
    else {
        // stopSimulation();
    }
}

function resetSim() {

    // clear the board
    for (let y = 0; y < curGameBoard.length; y++) {
        for (let x = 0; x < curGameBoard.length; x++) {
            curGameBoard[y][x] = nextGameBoard[y][x] = false;
            setTileState(htmlBoard[y][x], false);
        }
    }

    // reset counter
    resetTickCounter();

    stopSimulation();
}

// if value = 1, tickCount incremented, else tickCount reset to 1
function setTickCounter(value) {
    tickCount = value;
    tickText.html(COUNTER_FORMAT.replace("x", tickCount));
}

function incrementTickCounter() {
    setTickCounter(tickCount + 1);
}

function resetTickCounter() {
    setTickCounter(1);
}

function setStateHtml(state) {
    stateText.html(STATE_FORMAT.replace(
        "x", state).replace(
            "x", state));

    // animate state change!
    let stateSpan = $("#state-text span");
    console.log(stateSpan);
    if (stateSpan) {
        stateSpan.css({
            opacity: "0",
            fontSize: "-=4pt"
        });
        stateSpan.animate({
            opacity: "100%",
            fontSize: "+=4pt"
        }, 200);
    }
}

function updateInterval(millis) {

    // validate interval
    if (millis < MIN_INTERVAL) {
        millis = MIN_INTERVAL;
    }
    else if (millis > MAX_INTERVAL) {
        millis = MAX_INTERVAL;
    }

    // set simulation milliseconds
    interval = millis;

    // see if simulation event needs to be re-registered
    if (timedTick)
    {
        stopSimulation();
        startSimulation();
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
function tileClicked(tile) {

    // get tile location on board
    let position = getTileIndices(tile);

    // toggle this tile
    setTileState(tile, toggleTile(position.x, position.y));
}

// toggles the state on the board
// returns the new state of the tile
function toggleTile(x, y) {
    return curGameBoard[y][x] = !curGameBoard[y][x];
}

// toggle class of the tile
function setTileState(element, state) {
    //console.log("toggling " + button.attr("id"))
    if (element == null) {
        console.error("element null!")
    }
    else {
        if (state) {
            element.addClass("alive");
            element.removeClass("dead");
        }
        else {
            element.addClass("dead");
            element.removeClass("alive");
        }
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

// returns true if index is valid x or y index on board, false otherwise
function isValidIndex(i) {
    let result = true;
    if (i < 0 || i >= curGameBoard.length) {
        result = false;
    }
    //console.log("index " + i + " is " + (result ? "" : "not") + " valid");
    return result;
}