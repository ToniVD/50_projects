const loading = document.querySelector('.loading');
const background = document.querySelector('.background');

let load = 0;

//setInterval() method calls a function at specified intervals (in milliseconds).

let interval = setInterval(blur, 30);


function blur() {
    load ++;

    if (load > 99)  {
        // The clearInterval() method clears a timer set with the setInterval() method.
        clearInterval(interval);
    }

    loading.innerText = `${load}%`;
    // Loading text disappears after image loads (1 -> 0)
    loading.style.opacity = scale(load, 0, 100, 1, 0);
    background.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;

    // console.log(load);
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers#:~:text=You%20can%20implement%20this%20as%20a%20pure%20Javascript%20function%3A
function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}