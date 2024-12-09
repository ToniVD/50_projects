const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');


let active = 1;

next.addEventListener('click', () => {
    active++
    if (active > circles.length) {
        active = circles.length;
    }
    // console.log(active)
    update();
})

prev.addEventListener('click', () => {
    active--
    if (active < 1) {
        active = 1;
    }
    // console.log(active)
    update();
})

function update() {
    circles.forEach((circle,index)=> {
        if(index < active) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    })

    const activeCircles = document.querySelectorAll('.active');

    // Calculate progress line width percentange: (no.of active circles/total no.of circles)*100

    // The line is divided in 3 by 4 circles so 1/3*100 (33%) would bring the line up to each number
    // So (2-1 actives)/(4-1 circles) = 1/3 
    progress.style.width = `${((activeCircles.length-1)/(circles.length-1))*100}%`;


    if (active === 1) {
        prev.disabled = true;
    }  else if (active === circles.length) {
        next.disabled = true;
    }
    else {
        prev.disabled = false;
        next.disabled = false;
    }


}