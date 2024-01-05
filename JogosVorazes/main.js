let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function () {
    nextImage();
}, 1000)

function nextImage() {
    count++;
    if (count > 9) {
        count = 1;
    }
    document.getElementById("radio" + count).checked = true;

}


document.getElementById("radio2-1").checked = true;

setInterval(function () {
    nextImage();
}, 1000)

function nextImage() {
    count++;
    if (count > 11) {
        count = 1;
    }
    document.getElementById("radio2-" + count).checked = true;

}

