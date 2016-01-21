
var app = require('commander');
var ProgressBar = require('progress');

// --- CONFIG ---

var tomo_duration = 0;
var task_duration = 25;
var long_break_duration = 15;
var short_break_duration = 5;


// --- COMMANDER ---

app
    .version( "1.0.0" )
    .option( "-t, --task", "Start " + task_duration + "-minute task." )
    .option( "-b, --shortbreak", "Start " + short_break_duration + "-minute break." )
    .option( "-B, --longbreak", "Start " + long_break_duration + "-minute break." )
    //.option( "-c, --character", "Set your own completion character." )
    .option( "-T, --time [time]", "Set custom time." )
    .parse( process.argv );

// --- TIME ---

var ms_per_minute = 60 * 1000;
var refresh_rate = 1000 / 10;

// --- POMO ---

if( app.task )
    tomo_duration = task_duration;
else if( app.shortbreak )
    tomo_duration = short_break_duration;
else if( app.longbreak )
    tomo_duration = long_break_duration;
else if( app.time )
    tomo_duration = app.time;
else
    tomo_duration = task_duration;
    
// --- UI ---

var dot = "⋅";
var cyan_dot = "\u001b[36m⋅\u001b[0m";

// --- BAR ---

console.log( "\r\n" );
var bar = new ProgressBar(
    " :bar ",
    {
	total: tomo_duration * ms_per_minute / refresh_rate,
	complete: app.character ? app.character : dot,
	incomplete: cyan_dot,
	clear: false, // true
	callback: function() { console.log('\r\n'); }
    }
);

// --- TIMER ---

var timer = setInterval(
    function()
    {
	bar.tick();
	if( bar.complete ) 
	    clearInterval( timer );
    },
    refresh_rate
);
