function getBoards() {

    // TODO validate request

    // make HTTP request
    $.get(`https://api.trello.com/1/members/me/boards?${getKeyAndToken()}`,
        function(data, status) {
            if (status === "success") {
                displayBoards(data);
            }
            else {
                displayError(status);
            }
    });
}

function getLists() {

    // validate request
    if (getBoardId() === undefined || getBoardId() === null) {
        displayError("invalid board ID");
        return;
    }

    // make HTTP request
    $.get(`https://api.trello.com/1/boards/${getBoardId()}/lists?${getKeyAndToken()}`,
        function(data, status) {
            console.log("Request data: " + data);
            if (status === "success") {
                displayLists(data);
            }
            else {
                displayError(status);
            }
    });
}

function displayError(errorMessage) {

    // clears div
    let div = $("#data");
    div.html("");

    // display error message
    let message = $("<p></p>");
    message.html("ERROR: " + errorMessage);
    message.addClass("error");
    div.append(message);
}

function displayBoards(data) {

    // clears div
    let div = $("#data");
    div.html("");

    // creates list with board names
    let ul = $("<ul></ul>");
    for (let i in data) {

        let li = $("<li></li>");
        li.html(data[i].name);
        li.click(function(){setBoardId(data[i].id)});

        // closed boards shown in italics
        if (data[i].closed) {
            li.addClass("closed")
        }

        ul.append(li);
    }

    // displays data in webpage
    div.append($("<h3>Boards</h3>"));
    div.append(ul);
}

function displayLists(data) {

    // clears div
    let div = $("#data");
    div.html("");

    // creates list with list names
    let ul = $("<ul></ul>");
    for (let i in data) {
        let li = $("<li></li>");
        li.html(data[i].name);
        ul.append(li);
    }

    // displays data in webpage
    div.append($(`<h3>Lists in Board ${getBoardId()}</h3>`));
    div.append(ul);
}

function getKeyAndToken() {
    return "key=" + $("#input-key").val() + "&token=" + $("#input-token").val();
}

function getBoardId() {
    return $("#input-board-id").val();
}

function setBoardId(id) {
    return $("#input-board-id").val(id);
}