let mouseMoved = document.getElementById("center");

mouseMoved.addEventListener('mousemove', (e) => {
    e.preventDefault(); 
    console.log(e);
    let dist = (530 + 136)/2; 
    console.log(dist);
    let x = e.clientX; 
    if(x < dist) {
        let redIntense = (x/dist)*255;
        console.log(redIntense);
        mouseMoved.style.backgroundColor = `rgba(${redIntense},0,0,1)`;
    } else {
        let blueIntense = ((x - 255)/dist)*255;
        console.log(blueIntense);
        mouseMoved.style.backgroundColor = `rgba(0,0,${blueIntense},1)`;
    }
})

mouseMoved.addEventListener('mouseleave', (e) => {
    e.preventDefault(); 
    mouseMoved.style.backgroundColor = 'white';
})