var imgs = document.images,
    len = imgs.length,
    counter = 0;


[].forEach.call( imgs, function( img ) {
    if(img.complete)
        incrementCounter();
    else
        img.addEventListener( 'load', incrementCounter, false );

} );

function incrementCounter() {
    counter++;
    if ( counter === len ) {
        let loading = document.getElementById('boxes')
        if (loading){
            loading.remove()
        }
        document.getElementsByClassName('fly-up')[0].removeAttribute('hidden')
        document.getElementsByTagName('footer')[0].removeAttribute('hidden')
        anime({
            targets: 'div.fly-up',
            translateY:[
                {value: $(window).height(), duration: 0},
                {value: 0, duration: 1000}
            ],
            elasticity: 10,
        });
    }
}


