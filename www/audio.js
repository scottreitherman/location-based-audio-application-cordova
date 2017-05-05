var locations = [
	{"type": "point", "lat": 42.342031, "lng": -71.093646, "label": "label", "audio": "some-audio.mp3","maxdistance": "0.010","volume": 0,  "fadeintime": 250, "fadeouttime": 500, "probability": 100},

	{
		"type": "region_array",
		"mode": "random",
		"lat": 42.34398047870971,
		"lng": -71.10525637865067,
		"label": "label",
		"bounds": [{"lat":42.34405581210496,"lng":-71.10505253076553},{"lat":42.34413114540996,"lng":-71.10488891601562},{"lat":42.34408554894667,"lng":-71.10476285219193},{"lat":42.34419161023419,"lng":-71.10460862517357},{"lat":42.344164847122464,"lng":-71.10435783863068},{"lat":42.343867478447564,"lng":-71.10476285219193},{"lat":42.34394281197823,"lng":-71.10488086938858},{"lat":42.344006250670894,"lng":-71.10496401786804}],
		"volume": 1,
		"fadeintime": 1000,
		"fadeouttime": 2000,
		"audio_array": ["some_audio.mp3",
			"some_other_audio.mp3"
		]
	},

		{
		"type": "region",
		"lat": 42.34398047870971,
		"lng": -71.10525637865067,
		"label": "label",
		"audio": "someaudio.mp3",
		"bounds": [{"lat":42.34398047870971,"lng":-71.10525637865067},{"lat":42.34404589982128,"lng":-71.10510617494583},{"lat":42.34403598753603,"lng":-71.10499888658524},{"lat":42.34398444362749,"lng":-71.10492914915085},{"lat":42.34394281197826,"lng":-71.10487818717957},{"lat":42.343918031221556,"lng":-71.10482923686504},{"lat":42.343886807454226,"lng":-71.10479671508074},{"lat":42.34386747844762,"lng":-71.10476016998291},{"lat":42.34367716175749,"lng":-71.10504180192947},{"lat":42.34360777532093,"lng":-71.10514372587204},{"lat":42.34291192425092,"lng":-71.1059108376503},{"lat":42.34318649888368,"lng":-71.10631316900253},{"lat":42.34385360120838,"lng":-71.10536903142929}],
		"volume": "0.7",
		"fadeintime": 1000,
		"fadeouttime": 1000,
		"probability": 100

	},

	
	{"type": "point_array", "mode": "sequential", "lat": 42.3437, "lng":
-71.10423, "maxdistance": ".01", "label": "MP-Bend-Muddy-Point-Array", "volume": 1,
"fadeintime": 1000, "fadeouttime": 1000, "probability": 100,
"audio_array":
["someaudio.mp3",
"someotheraudio.mp3"]}

];