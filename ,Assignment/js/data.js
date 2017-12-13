var item = ""
var lastRoom = 0

var roomArray = [
	// {
	// 	title:'Test',
	// 	text:"# Even though you can't bring yourself to touch the body you can see, there seems to be three rips in her clothing that look like something was stabbed through them. [sound/static.wav]<br/><br/>Something clicks into place and pieces of last night coming back to you. Amy came over for dinner, her phone kept making these weird noises[sound/tracking.wav]. She kept saying it was just her boss keeping track of her workload. The next thing you see is Amy standing over you with a syringe in her hand. The memory skips again, you have a knife in your hand. Skips again. Amy is on the floor a pool of blood expanding around her. <br/><br/>Coming back to reality, you look down on her corpse the realisation hits you, your heart is pounding. Amy tried to kill you, so you killed her. \n\nThe noise from her phone, you realise it's the same noise from the person on the train. There must be more answers on her phone.",
	// 	choices:[
	// 		{
	// 			text:"Reload",
	// 			index:0
	// 		}
	// 	],
	// 	item: "",
	// 	requirement:""
	// }
	{
		title:'Waking Up',
		text:'Your eyes slowly open, your head is pounding. You have no recollection of the previous nights events. You try to stand up but a sharp pain from your side forces you back to the floor. You move your hand to your side, looking down your clothing is soaked in blood. Looking around you discover you are in a dark alleyway, only illuminated by the neon spill from the street. There is only one way out of the alleyway and next to you is a industrial waste bin.',
		choices:[
			{
				text:'Search the waste bin',
				index:1
			}
		],
		item: "",
		requirement:""
	},
	{
		title:'The Waste Bin',
		text:'After searching the waste bin you find some old clothes that have been thrown out. You rip up the fabric and use it to bandage your side. You also find a transportation card that allows you to use the city transport.',
		choices:[
			{
				text:'Leave the alleyway',
				index:2
			}
		],
		item: "Transportation Card",
		requirement:""
	},
	{
		title:'Leaving the alleyway',
		text:'As you leave the alleyway you are blinded by the neon sights around you. The street is bustling with people and you find yourself being pushed around the crowd.',
		choices:[
			{
				text:'Go left',
				index:3
			},
			{
				text:'Go right',
				index: 4
			}
		],
		item: "",
		requirement:""
	},
	{
		title:'Turning Left',
		text:'You turn left and push through the crowds, as you move down the road you start to see a medical centre at the end of the street.',
		choices:[
			{
				text:'Medical centre',
				index:5
			},
			{
				text:'Turn Right',
				index:4
			}
		],
		item: "",
		requirement:""
	},
	{
		title:'Turning Right',
		text:'Turning right you see a set of stairs leading down to a tube station. You go down the stairs and enter the station. You look at the tube map and see that this station provides two lines.',
		choices:[
			{
				text:'Orange Line',
				index:6
			},
			{
				text:'Blue Line',
				index:7
			}
		],
		item: "",
		requirement:""
	}

]
