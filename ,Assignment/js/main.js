function OnLoad()
{
	SelectRoom(0);
}

function SelectRoom(roomIndex)
{
	var title = document.getElementById('roomTitle');
	var text = document.getElementById('roomText');
	var choices = document.getElementById('roomChoices');

	choices.innerHTML = "";

	title.innerHTML = roomArray[roomIndex].title;
	text.innerHTML = roomArray[roomIndex].text;

	for (var i = 0; i < roomArray[roomIndex].choices.length; i++ ){
		var tag = "<button type = 'button' onclick = '" + "SelectRoom(" + roomArray[roomIndex].choices[i].index + ")'" + " id = 'b" + (i % 2) + "'>" + roomArray[roomIndex].choices[i].text + "</button>";
		choices.innerHTML += tag;
	}
}
