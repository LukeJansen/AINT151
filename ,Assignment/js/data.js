var inventory = []
var lastRoom = 0

var roomArray = [
	{
		title:'Room 1',
		text:'You wake up on the stone floor of an empty room. You look around and see a wooden door and a chest.',
		choices:[
			{
				text:'Search the chest',
				index:1
			},
			{
				text:'Go to the door',
				index:2
			}
		],
		item: "",
		requirement:""
	},
	{
		title:'Room 1',
		text:'After searching the chest you find a key!',
		choices:[
			{
				text:'Go to the door',
				index:2
			}
		],
		item: "Key",
		requirement:""
	},
	{
		title:'Room 3',
		text:'You go through the door.',
		choices:[
			{
				text:'Go to room 2',
				index:1
			}
		],
		item: "",
		requirement:"Key"
	}
]
