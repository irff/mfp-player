var episodes = ['http://datashat.net/music_for_programming_1-datassette.mp3',
				'http://datashat.net/music_for_programming_2-sunjammer.mp3',
				'http://datashat.net/music_for_programming_3-datassette.mp3',
				'http://datashat.net/music_for_programming_4-com_truise.mp3',
				'http://datashat.net/music_for_programming_5-abe_mangger.mp3',
				'http://datashat.net/music_for_programming_6-gods_of_the_new_age.mp3',
				'http://datashat.net/music_for_programming_7-tahlhoff_garten_and_untitled.mp3',
				'http://datashat.net/music_for_programming_8-connectedness_locus.mp3',
				'http://datashat.net/music_for_programming_9-datassette.mp3',
				'http://datashat.net/music_for_programming_10-unity_gain_temple.mp3',
				'http://datashat.net/music_for_programming_11-miles_tilmann.mp3',
				'http://datashat.net/music_for_programming_12-forgotten_light.mp3',
				'http://datashat.net/music_for_programming_13-matt_whitehead.mp3',
				'http://datashat.net/music_for_programming_14-tahlhoff_garten_and_untitled.mp3',
				'http://datashat.net/music_for_programming_15-dan_adeyemi.mp3',
				'http://datashat.net/music_for_programming_16-silent_stelios.mp3',
				'http://datashat.net/music_for_programming_17-graphplan.mp3',
				'http://datashat.net/music_for_programming_18-konx_om_pax.mp3',
				'http://datashat.net/music_for_programming_19-hivemind.mp3',
				'http://datashat.net/music_for_programming_20-uberdog.mp3',
				'http://datashat.net/music_for_programming_21-idol_eyes.mp3',
				'http://datashat.net/music_for_programming_22-mindaugaszq.mp3',
				'http://datashat.net/music_for_programming_23-panda_magic.mp3',
				'http://datashat.net/music_for_programming_24-rites.mp3',
				'http://datashat.net/music_for_programming_25-_nono_.mp3',
				'http://datashat.net/music_for_programming_26-abstraction.mp3',
				'http://datashat.net/music_for_programming_27-michael_hicks.mp3',
				'http://datashat.net/music_for_programming_28-big_war.mp3',
				'http://datashat.net/music_for_programming_29-luke_handsfree.mp3'
				];

var player = document.getElementById('player');
var episode_title = document.getElementById('episode-title');

function playMusic(trackID) {
	episode_title.innerHTML = episodes[x];
	player.src = episodes[x];
	player.play();
}

var x = Math.floor(Math.random()*29);
playMusic(x);

player.onended = function(prev) {
	do {
		x = Math.floor(Math.random() * 29);
	} while(x == prev);
	playMusic(x);
}
