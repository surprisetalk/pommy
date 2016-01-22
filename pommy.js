
var app = require('commander');
var lapse = require('lapse');

// --- CONFIG ---

var pommy_duration = 0;
var task_duration = 25;
var long_break_duration = 15;
var short_break_duration = 5;


// --- COMMANDER ---

app
    .version( require('./package.json').version )
    .option( "-t, --task", "Start " + task_duration + "-minute task." )
    .option( "-b, --shortbreak", "Start " + short_break_duration + "-minute break." )
    .option( "-B, --longbreak", "Start " + long_break_duration + "-minute break." )
    .option( "-m, --military", "Use 24-hour clock." )
    .option( "-T, --time [duration]", "Set custom duration." )
    .option( "-c, --character [character]", "Set your own progress character." )
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

var ansi_colorize = function( c, cc ) { return "\u001b[" + cc + "m" + c + "\u001b[0m" };
var ansi_yellow = function( c ) { return ansi_colorize( c, 33 ) };
var ansi_cyan = function( c ) { return ansi_colorize( c, 36 ) };

var dot = "⋅";
var cyan_dot = ansi_cyan( dot );
var progress_char = app.character ? app.character : "✈";

var lapse_start_tag = ansi_yellow( app.military ? "#mstart" : "#start" );
var lapse_eta_tag = ansi_yellow( "#eta" );
var lapse_line = " " + lapse_start_tag + " #bar " + lapse_eta_tag + " ";

// --- BAR ---

lapse( pommy_duration * 60, { format: lapse_line,
			      car_char: progress_char,
			      road_char: cyan_dot } );
