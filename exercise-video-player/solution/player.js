// Video Element
var vid = document.getElementById('northstar-movie');

// Buttons
var btn_play = document.getElementById('play');
var btn_pause = document.getElementById('pause');
var btn_reset = document.getElementById('reset');

// Indicators
var duration = document.getElementById('duration');
var currentTime = document.getElementById('currentTime');
var progress = document.getElementById('status-bar');
var playing = document.getElementById('playing');

// Click Handlers
btn_play.onclick = function () {
    vid.play();
    playing.style.visibility = 'visible';
};

btn_pause.onclick = function () {
    vid.pause();
    playing.style.visibility = 'hidden';
};

btn_reset.onclick = function () {
    vid.currentTime = 0;
    vid.pause();
    playing.style.visibility = 'hidden';
};

progress.onclick = function (e) {
    var p = (e.x - this.offsetLeft) / this.offsetWidth;
    var t = p * vid.duration;
    vid.currentTime = t;
    this.value = t;
};

// Video Event Handlers
vid.ontimeupdate = function () {
    currentTime.innerHTML = Math.round(vid.currentTime);
    progress.value = vid.currentTime || 0;
    progress.max = vid.duration || 0;
};

vid.ondurationchange = function () {
    duration.innerHTML = Math.round(vid.duration);
};

vid.onended = function() {
    btn_reset.onclick();
};
