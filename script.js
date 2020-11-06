function start() {
    console.log("initializing webpage");

    let baseDuration = 1000;

    // fade in the portfolio banner
    anime({
        targets: "#portfolio",
        keyframes: [
            { left: "-50vh", duration: 0 },
            { opacity: "20%", left: "-41vh", duration: baseDuration * 4 }
        ],
        easing: "easeOutExpo"
    });

    // rotate icon
    anime({
        targets: "#logo",
        rotate: "360deg",
        easing: "spring(1, 50, 8, 0)"
    });

    // fade in headers
    anime({
        targets: "h1, h2, h3",
        keyframes: [
            { opacity: "100%", duration: baseDuration }
        ],
        easing: "easeOutCubic"
    });

    // expand horizontal rules
    anime({
        targets: "hr",
        width: "100%",
        opacity: "50%",
        duration: baseDuration,
        easing: "easeOutBounce"
    });

    // fade in everything else
    anime({
        targets: "#body-container > div",
        opacity: "100%",
        duration: baseDuration,
        easing: "easeInOutExpo"
    });
}