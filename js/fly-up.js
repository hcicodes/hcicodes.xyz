var imgs = document.images,
    len = imgs.length,
    counter = 0;


[].forEach.call( imgs, function( img ) {
    if(img.complete)
        incrementCounter();
    else
        img.addEventListener( 'load', incrementCounter, false );

} );

async function incrementCounter() {
    counter++;
    if ( counter === len ) {
        let loading = document.getElementById('boxes')
        if (loading){
            await sleep(500)
            anime.remove(loading)
            loading.remove()
        }
        unhideElements();
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

function unhideElements(){
    document.getElementsByClassName('fly-up')[0].removeAttribute('hidden')
    document.getElementsByTagName('footer')[0].removeAttribute('hidden')
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


