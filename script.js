function updateTime() {
    var Thetime = new Date().toLocaleString();
    var timeText = document.querySelector("#timeElement");
    timeText.innerHTML = Thetime;
}
    setInterval(updateTime, 1000);         



