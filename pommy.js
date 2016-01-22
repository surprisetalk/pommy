
var app = require('commander');
var lapse = require('lapse');

// --- CONFIG ---

var pommy_duration = 0;
var task_duration = 25;
var long_break_duration = 15;
var short_break_duration = 5;


// --- COMMANDER ---

app
    .version( "1.0.0" )
    .option( "-t, --task", "Start " + task_duration + "-minute task." )
    .option( "-b, --shortbreak", "Start " + short_break_duration + "-minute break." )
    .option( "-B, --longbreak", "Start " + long_break_duration + "-minute break." )
    .option( "-c, --character", "Set your own progress character." )
    .option( "-T, --time [time]", "Set custom time." )
    .parse( process.argv );


// --- POMO ---

if( app.task )
    pommy_duration = task_duration;
else if( app.shortbreak )
    pommy_duration = short_break_duration;
else if( app.longbreak )
    pommy_duration = long_break_duration;
else if( app.time )
    pommy_duration = app.time;
else
    pommy_duration = task_duration;

    
// --- UI ---

var progress_char = app.character ? app.character : "✈";
var cyan_dot = "\u001b[36m⋅\u001b[0m";

// --- BAR ---

lapse( pommy_duration * 60, {car_char: progress_char,
			road_char: cyan_dot } );
