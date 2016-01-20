
var ProgressBar = require('progress');

// todo commander: inputs -t -b -c
// todo add terminal notifier to readme

// --- TIME ---

// todo math is off
var ms_per_minute = 60 * 1000;
var refresh_rate = 1000 / 10;

// --- UI ---

var green = '\u001b[42m \u001b[0m';
var red = '\u001b[41m \u001b[0m';

// --- POMO ---

var task_time = 25;
var break_time = 5;

// --- BAR ---

var bar = new ProgressBar(
    ":bar :percent",
    {
	total: task_time * ms_per_minute / refresh_rate,
	//complete: green,
	//incomplete: red,
	clear: true
    }
);

// --- TIMER ---

var timer = setInterval(function () {
    bar.tick();
    if( bar.complete ) 
	clearInterval(timer);
}, refresh_rate);
