"use strict";

let curLetter = 'A';

// initialize header movement
function start() {
    console.log("start called");
    let header = $("<a></a>");
    addToElement(header);
    $("body").append(header);
    growElement(header);
    header.click(function(){ addToElement(header) });
}

function growElement(e) {
    console.log("increasing header font size");
    e.animate(
        {fontSize: "+=30px"},
        "slow",
        function(){ shrinkElement(e)} );
}

function shrinkElement(e) {
    console.log("decreasing header font size");
    e.animate(
        {fontSize: "-=30px"},
        "slow",
        function(){ growElement(e)} );
}

function addToElement(e) {
    console.log("adding to element");
    e.append(curLetter);

    // change current letter
    let curASCII = curLetter.charCodeAt(0);
    curASCII++;
    curLetter = String.fromCharCode(curASCII);
}