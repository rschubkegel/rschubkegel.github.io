// to be run when a page loads
function start() {
    addSectionLinks();
    addFooter();
    generateTOC();
    playAnimations();
}

// animates if not on mobile device 📱
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

// adds > next to h2 so a section of a page can be linked to 🔗
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

// creates a table of conents in the element with id "section-welcome" 📃
// (indented to be called after start() on homepage)
function generateTOC() {
    console.log("Generating TOC");

    // add HR to DOM
    var wrapper = document.getElementById("wrapper");
    var welcomeDiv = document.getElementById("section-welcome");
    var rule = document.createElement("hr");
    wrapper.insertBefore(rule, welcomeDiv.nextSibling);

    // generate TOC
    var tocDiv = document.createElement("div");
    tocDiv.id = "section-toc";
    tocDiv.style.margin = "auto";
    tocDiv.style.padding = "0 1rem 0";

    // add header to TOC
    var tocHeader = document.createElement("h2");
    tocHeader.innerHTML = "Table of Contents";
    tocDiv.appendChild(tocHeader);

    // get all h2 headers in page and link for them
    var toc = document.createElement("ul");
    var headers = document.getElementsByTagName("h2");
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

    // add list of headers to TOC div
    tocDiv.appendChild(toc);
    
    wrapper.insertBefore(tocDiv, rule.nextSibling);
}

// adds copyright footer 🦶
function addFooter() {
    console.log("Creating footer");

    var div = document.getElementById("wrapper");
    var footer = document.createElement("p");
    footer.innerHTML = "© Rylan Schubkegel 2021";
    div.appendChild(document.createElement("hr"));
    div.appendChild(footer);
}