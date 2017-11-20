var roomObject = {
	title:'room name',
	text:'you are standing in a room, there is a picture on the wall and a table',
	choices:['examine picture','examine table']
}


function OnLoad()
{
	var title = document.getElementById('roomtitle');
	var text = document.getElementById('roomtext');
	var choices = document.getElementById('roomchoices');

	title.innerHTML = roomObject.title;
	text.innerHTML = roomObject.text;

	for (var i = 0; i < roomObject.choices.length; i++ ){
		var tag = "<button type = 'button'>" + roomObject.choices[i] + "</button>";
		choices.innerHTML += tag;
	}
}
