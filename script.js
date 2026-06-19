function updateTime() {
    var Thetime = new Date().toLocaleString();
    var timeText = document.querySelector("#timeElement");
    timeText.innerHTML = Thetime;
}
    setInterval(updateTime, 1000);         



dragElement(document.getElementById("movingdiv"));

function dragElement(element) {
    var pos1 = 0;
    var pos2 = 0;
    var pos3 = 0;
    var pos4 = 0;
    if(document.getElementById(element.id + "header")) {
        document.getElementById(element.id + "header").onmousedown = startDragging;
    } else {
        element.onmousedown = startDragging;
    }
    element.onmousedown = startDragging;
}

function startDragging(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = stopDragging;
    document.onmousemove = dragElement;
}

function dragElement(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = pos1 - e.clientX;
    pos4 = pos2 - e.clientY;
    pos1 = e.clientX;
    pos2 = e.clientY;
    element.style.top = (element.offsetTop - pos4) + "px";
    element.style.left = (element.offsetLeft - pos3) + "px";
}

function stopDragging() {
    document.onmouseup = null;
    document.onmousemove = null;
}