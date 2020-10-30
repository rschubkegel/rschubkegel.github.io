function start() {
    console.log("initializing webpage");

    // fade in the portfolio banner
    anime({
        targets: "#portfolio",
        opacity: "20%",
        duration: 4000,
        left: "-4.2em",
        easing: "easeOutExpo"
    });

    // rotate icon
    anime({
        targets: "#logo",
        rotate: "360deg",
        easing: "spring(1, 50, 8, 0)"
    });

    // slide in headers
    anime({
        targets: "h1, h2, h3",
        marginLeft: "0",
        opacity: "100%",
        duration: 1000,
        easing: "easeOutCubic"
    });

    // expand horizontal rules
    anime({
        targets: "hr",
        width: "100%",
        opacity: "50%",
        duration: 1000,
        easing: "easeOutBounce"
    });
}