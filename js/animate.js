window.onload(anime({
    targets: 'div.fly-up',
    translateY:[
        {value: $(window).height(), duration: 0},
        {value: 0, duration: 1000}
    ],
    elasticity: 10,
}));
