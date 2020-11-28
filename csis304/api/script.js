/* -------- HTTP REQUESTS -------- */

function getBoards() {
    let kt = getKeyAndToken();

    // invalid request
    if (kt == null) {
        displayError("key or token are not valid");
    }

    // valid request
    else {
        // make HTTP request
        $.get(`https://api.trello.com/1/members/me/boards?${kt}`,
            function(data, status) {
                if (status === "success") {
                    displayBoards(data);
                }
                else {
                    displayError(status);
                }
            });
    }
}

function getLists() {
    let b = getBoardId();
    let kt = getKeyAndToken();

    // invalid request
    if (kt == null) {
        displayError("key or token are not valid");
    }
    else if (b == null) {
        displayError("board ID not valid");
    }

    // valid request
    else {
        // make HTTP request
        $.get(`https://api.trello.com/1/boards/${b}/lists?${kt}`,
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
}

function addCard() {
    let keyAndToken = getKeyAndToken();
    let name = getCardName();
    let desc = getCardDescription();
    let due = getDueDate();
    let list = getListId();
    let labels = getCardLabels();


    // invalid request
    if (keyAndToken == null) {
        displayError("key or token are not valid");
    }
    else if (name == null) {
        displayError("card name must be provided");
    }
    else if (list == null) {
        displayError("list must be provided");
    }


    // valid request
    else {
        let requestURL = `https://api.trello.com/1/cards?${keyAndToken}&${name}`;

        // due date is optional
        if (desc != null) {
            requestURL += "&" + desc;
        }
        if (due != null) {
            requestURL += "&" + due;
        }
        if (labels != null) {
            requestURL += "&" + labels;
        }

        // make HTTP request
        $.get(requestURL,
            function(data, status) {
                console.log("Request data: " + data);
                if (status === "success") {
                    displaySuccess("Card(s) added");
                }
                else {
                    displayError(status);
                }
            });
    }
}

/* -------- SHOW MESSAGES -------- */

function displaySuccess(message) {
    console.log("ERROR: " + message);

    // clears div
    let div = $("#data > div");
    div.html("");

    // display error message
    let p = $("<p></p>");
    p.html("Success! " + message);
    p.addClass("success");
    div.append(p);
}

function displayError(message) {
    console.log("ERROR: " + message);

    // clears div
    let div = $("#data > div");
    div.html("");

    // display error message
    let p = $("<p></p>");
    p.html("ERROR: " + message);
    p.addClass("error");
    div.append(p);
}

function displayBoards(data) {

    // clears div
    let div = $("#data > div");
    div.html("");

    // creates list with board names
    let ul = $("<ul></ul>");
    for (let i in data) {

        let li = $("<li></li>");
        li.html(data[i].name);
        li.click(function(){setBoardId(data[i].id)});

        // make closed boards look different
        if (data[i].closed) {
            //li.addClass("closed")
        }

        else{
            ul.append(li);
        }
    }

    // displays data in webpage
    div.append($("<h3>Boards</h3>"));
    div.append($("<p>Click on a board to copy its ID to the \"get lists\" input.</p>"));
    div.append(ul);
}

function displayLists(data) {

    // clears div
    let div = $("#data > div");
    div.html("");

    // creates list with list names
    let ul = $("<ul></ul>");
    for (let i in data) {
        let li = $("<li></li>");
        li.html(data[i].name);
        li.click(function(){setListId(data[i].id)});
        ul.append(li);
    }

    // displays data in webpage
    div.append($(`<h3>Lists in Board ${getBoardId()}</h3>`));
    div.append(ul);
}

/* -------- INPUT GETTERS -------- */

function getKeyAndToken() {

    // get values from form
    let key = $(".input-key").val();
    let token = $(".input-token").val();

    // validate input
    let regexKey = /^[0-9a-fA-F]{32}$/;
    let regexToken = /^[0-9a-fA-F]{64}$/;

    if (key != null && token != null
        && key.search(regexKey) !== -1
        && token.search(regexToken) !== -1) {

        // input is valid
        return "key=" + key + "&token=" + token;
    }
    return null;
}

function getBoardId() {

    // get values from form
    let id = $(".input-board-id").val();

    let regex = /^[0-9a-fA-F]{32}$/;

    if (id != null && id.search(regex) !== -1) {

        // input is valid
        return "id=" + id;
    }
    return null;
}

function getCardName() {

    // get values from form
    let name = $(".input-card-name").val();

    if (name != null && name.length > 0) {

        // input is valid
        return "name=" + name;
    }
    return null;
}

function getCardDescription() {
    return "desc=" + $(".input-card-desc").val();
}

function getListId() {

    // get values from form
    let id = $(".input-list-id").val();

    if (id != null && id.length > 0) {

        // input is valid
        return "idList=" + id;
    }
    return null;
}

function getDueDate() {

    // get values from form
    let date = $(".input-card-due").val();

    if (date != null) {

        let regex = /\d+/;
        let match = date.match(regex);

        if (match != null && match.length === 3
            && match[0] >= 2020
            && match[1] >= 1 && match[1] <= 12
            && match[2] >= 1 && match[2] <= 31) {

            // input is valid!
            return "due=" + date;
        }
    }
    return null;
}

function getCardLabels() {

    // get values from form
    let labels = $(".input-card-labels").val();

    // expects comma-separated list
    if (labels != null && labels.length > 0) {

        // input is valid!
        return labels;
    }
    return null;
}

/* -------- INPUT SETTERS -------- */

function setBoardId(id) {
    $(".input-board-id").val(id);
}

function setListId(id) {
    $(".input-list-id").val(id);
}