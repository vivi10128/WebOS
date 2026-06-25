function updateTime() {
    var Thetime = new Date().toLocaleString();
    var timeText = document.querySelector("#timeElement");
    timeText.innerHTML = Thetime;
}
    setInterval(updateTime, 1000);         


dragElement(document.getElementById("Welcome"));

function dragElement(element) {
    var initialX = 0;
    var initialY = 0;
    var currentX = 0;
    var currentY = 0;

    if (document.getElementById(element.id + "header")) {
        document.getElementById(element.id + "header").onmousedown = startDragging;
    } else {
        element.onmousedown = startDragging;
    }
    function startDragging(e) {
        e = e || window.event;
        e.preventDefault();
        initialX = e.clientX;
        initialY = e.clientY;
        document.onmouseup = stopDragging;
        document.onmousemove = dragElement;
    }

    function dragElement(e) {
        e = e || window.event;
        e.preventDefault();
        currentX = initialX - e.clientX;
        currentY = initialY - e.clientY;
        initialX = e.clientX;
        initialY = e.clientY;
        element.style.top = (element.offsetTop - currentY) + "px";
        element.style.left = (element.offsetLeft - currentX) + "px";
    }
    
    function stopDragging() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

var welcomeScreen =
document.querySelector("#Welcome")

function openWindow(element) {
    element.style.display = "flex";
}

function closeWindow(element) {
    element.style.display = "none";
}

 var welcomescreenopen = document.querySelector("#Welcomeopen")
 var welcomescreenclose = document.querySelector("#Welcomeclose")
 welcomescreenclose.addEventListener("click", function() {
    closeWindow(Welcome);
 });
 welcomescreenopen.addEventListener("click", function() {
    openWindow(Welcome);
 });



