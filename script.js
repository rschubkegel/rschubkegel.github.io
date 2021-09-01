// runs when a page loads
function start() {
    addSectionLinks();
    playAnimations();
}

function playAnimations() {
    let baseDuration = 1000;
    let baseDelay = 250;

    // only do all animations if not on phone
    if (!navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i)) {

        // rotate icon
        anime({
            targets: "#logo",
            keyframes: [
                { rotate: "180deg", duration: 0 },
                { rotate: "360deg", duration: baseDuration * 2 }
            ],
            easing: "easeOutElastic(1, .5)",
            delay: baseDelay
        });
    
        // fade in headers
        anime({
            targets: "h1, h2, h3",
            keyframes: [
                { marginLeft: "5rem", duration: 0 },
                { marginLeft: "0", duration: baseDuration }
            ],
            easing: "easeOutBounce",
            delay: anime.stagger(70, {start: baseDelay})
        });
    
        // expand horizontal rules
        anime({
            targets: "hr",
            keyframes: [
                { width: "0", opacity: "0", duration: 0 },
                { width: "100%", opacity: "100%", duration: baseDuration * 1.2 }
            ],
            easing: "easeInOutCubic",
            delay: anime.stagger(50)
        });
    }

    // fade in everything else
    anime({
        targets: "#wrapper > div",
        opacity: "100%",
        duration: baseDuration,
        easing: "easeInOutExpo",
        delay: anime.stagger(100)
    });
}

function addSectionLinks() {
    console.log("Adding links to h2 elements");
    var headers = document.getElementsByTagName("h2");

    // add links for every h2 element
    for (i = 0; i < headers.length; i++) {

        // add > symbol next to header
        console.log("Adding link to section " + headers[i].innerHTML);
        headers[i].innerHTML =
            '<a href="#'
            + headers[i].parentElement.id
            + '" class="section-link">&gt;</a> '
            + headers[i].innerHTML;
    }
}

function generateTOC() {
    console.log("Generating TOC");

    // add TOC to DOM
    var welcomeDiv = document.getElementById("section-welcome");
    welcomeDiv.appendChild(document.createElement("hr"));
    var tocHeader = document.createElement("h2");
    tocHeader.innerHTML = "Table of Contents";
    var toc = document.createElement("ul");

    // get headers
    var headers = document.getElementsByTagName("h2");

    // add link for every h2 element on page
    for (i = 0; i < headers.length; i++) {

        // add section link to TOC
        var nameIndex = headers[i].innerHTML.search("</a>") + 5;
        var name = headers[i].innerHTML.substring(nameIndex);
        console.log("Adding link for " + name);

        var link = document.createElement("li");
        link.innerHTML =
            '<a href="#'
            + headers[i].parentElement.id
            + '">'
            + name
            + '</a>';
        toc.appendChild(link);
    }

    welcomeDiv.appendChild(tocHeader);
    welcomeDiv.appendChild(toc);
}