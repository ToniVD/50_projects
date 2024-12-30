const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

function checkBoxes () {
    // console.log(window.innerHeight);
    const triggerBottom = window.innerHeight / 5 * 4;

    boxes.forEach (box => {
        // The getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
        // DOMRect object with eight properties: left, top, right, bottom, x, y, width, height.
        const boxTop = box.getBoundingClientRect().top

        if (boxTop < triggerBottom) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    })

}