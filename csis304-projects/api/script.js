function login() {

    // compile URL
    let URL = "https://api.trello.com/1/members/me/boards?" + getKeyAndToken();
    console.log("Compiled URL: " + URL);

    // send request
    $.get(URL, function(data, status) {
        console.log("Status: " + status);
        alert(data);
    });
    console.log("GET request sent");
}

function getKeyAndToken() {
    return "key=" + $("#key").val() + "&token=" + $("#token").val();
}
