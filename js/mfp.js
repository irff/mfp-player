var episodes = [
	{
		title: '01: Datassette',
		source: 'http://datashat.net/music_for_programming_1-datassette.mp3'
	},
	{
		title: '02: Sunjammer',
		source: 'http://datashat.net/music_for_programming_2-sunjammer.mp3'
	},
	{
		title: '03: Datassette',
		source: 'http://datashat.net/music_for_programming_3-datassette.mp3'	
	},
	{
		title: '04: Com Truise',
		source: 'http://datashat.net/music_for_programming_4-com_truise.mp3'
	},
	{
		title: '05: Abe Mangger',
		source: 'http://datashat.net/music_for_programming_5-abe_mangger.mp3'
	},
	{
		title: '06: Gods Of The New Age',
		source: 'http://datashat.net/music_for_programming_6-gods_of_the_new_age.mp3'		
	},
	{
		title: '07: Tahlhoff Garten + Untitled',
		source: 'http://datashat.net/music_for_programming_7-tahlhoff_garten_and_untitled.mp3'		
	},
	{
		title: '08: Connectedness Locus',
		source: 'http://datashat.net/music_for_programming_8-connectedness_locus.mp3'		
	},
	{
		title: '09: Datassette',
		source: 'http://datashat.net/music_for_programming_9-datassette.mp3'		
	},
	{
		title: '10: Unity Gain Temple',
		source: 'http://datashat.net/music_for_programming_10-unity_gain_temple.mp3'		
	},
	{
		title: '11: Miles Tilmann',
		source: 'http://datashat.net/music_for_programming_11-miles_tilmann.mp3'		
	},
	{
		title: '12: Forgotten Light',
		source: 'http://datashat.net/music_for_programming_12-forgotten_light.mp3'		
	},
	{
		title: '13: Matt Whitehead',
		source: 'http://datashat.net/music_for_programming_13-matt_whitehead.mp3'		
	},
	{
		title: '14: Tahlhoff Garten + Untitled',
		source: 'http://datashat.net/music_for_programming_14-tahlhoff_garten_and_untitled.mp3'		
	},
	{
		title: '15: Dan Adeyemi',
		source: 'http://datashat.net/music_for_programming_15-dan_adeyemi.mp3'		
	},
	{
		title: '16: Silent Stelios',
		source: 'http://datashat.net/music_for_programming_16-silent_stelios.mp3'		
	},
	{
		title: '17: Graphplan',
		source: 'http://datashat.net/music_for_programming_17-graphplan.mp3'
	},
	{		
		title: '18: Konx Om Pax',
		source: 'http://datashat.net/music_for_programming_18-konx_om_pax.mp3'
	},
	{
		title: '19: Hivemind',
		source: 'http://datashat.net/music_for_programming_19-hivemind.mp3'
	},
	{
		title: '20: Uberdog',
		source: 'http://datashat.net/music_for_programming_20-uberdog.mp3'
	},
	{
		title: '21: Idol Eyes',
		source: 'http://datashat.net/music_for_programming_21-idol_eyes.mp3'
	},
	{
		title: '22: Mindaugaszq',
		source: 'http://datashat.net/music_for_programming_22-mindaugaszq.mp3'		
	},
	{
		title: '23: Panda Magic',
		source: 'http://datashat.net/music_for_programming_23-panda_magic.mp3'		
	},
	{
		title: '24: RITES',
		source: 'http://datashat.net/music_for_programming_24-rites.mp3'		
	},
	{
		title: '25: _nono_',
		source: 'http://datashat.net/music_for_programming_25-_nono_.mp3'		
	},
	{
		title: '26: Abstraction',
		source: 'http://datashat.net/music_for_programming_26-abstraction.mp3'		
	},
	{
		title: '27: Michael Hicks',
		source: 'http://datashat.net/music_for_programming_27-michael_hicks.mp3'		
	},
	{
		title: '28: Big War',
		source: 'http://datashat.net/music_for_programming_28-big_war.mp3'		
	},
	{
		title: '29: Luke Handsfree',
		source: 'http://datashat.net/music_for_programming_29-luke_handsfree.mp3'
	}];

var player = document.getElementById('player'),
	episode_title = document.getElementById('episode-title'),
	episode_duration = document.getElementById('episode-duration'),
	x = Math.floor(Math.random()*29);

function playMusic(trackID) {
	episode_title.innerHTML = episodes[x].title;
	player.src = episodes[x].source;
	player.play();
}

player.onloadedmetadata = function() {
	var duration = player.duration;
	var hour = Math.floor(duration / 3600);
	duration %= 3600;
	var min =  Math.floor(duration / 60);
	duration %= 60;
	var sec = Math.floor(duration);
	episode_duration.innerHTML = ((hour > 0) ? hour + 'h ' : '') + ((min > 0 && min < 10) ? '0' : '') + min  + 'm ' + ((sec > 0 && sec < 10) ? '0' : '') + sec + 's';
}

player.onended = function(prev) {
	do {
		x = Math.floor(Math.random() * 29);
	} while(x == prev);
	playMusic(x);
}

playMusic(x);