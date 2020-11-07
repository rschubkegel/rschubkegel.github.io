function start() {
    console.log("initializing webpage");

    let baseDuration = 1000;
    let baseDelay = 250;

    // fade in the portfolio banner
    /*anime({
        targets: "#portfolio",
        keyframes: [
            { left: "-50vh", duration: 0 },
            { opacity: "20%", left: "-41vh", duration: baseDuration * 4 }
        ],
        easing: "easeOutExpo"
    });*/

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
            { marginLeft: "100px", duration: 0 },
            { marginLeft: "0", duration: baseDuration }
        ],
        easing: "easeOutBounce",
        delay: anime.stagger(100, {start: baseDelay})
    });

    // expand horizontal rules
    /*anime({
        targets: "hr",
        keyframes: [
            { width: "0", opacity: "0", duration: 0 },
            { width: "100%", opacity: "50%", duration: baseDuration }
        ],
        easing: "easeOutBounce"
    });*/

    // fade in everything else
    anime({
        targets: "#wrapper > div",
        opacity: "100%",
        duration: baseDuration,
        easing: "easeInOutExpo",
        delay: anime.stagger(50)
    });
}