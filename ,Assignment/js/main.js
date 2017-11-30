function OnLoad()
{
	SelectRoom(0);
}

function SelectRoom(roomIndex)
{
	var title = document.getElementById('roomTitle');
	var text = document.getElementById('roomText');
	var choices = document.getElementById('roomChoices');
	var inv = document.getElementById('inventory');

	var item = roomArray[roomIndex].item;
	var requirement = roomArray[roomIndex].requirement;

if (requirement != ""){
	if (inventory.includes(requirement)){
		inventory.pop(requirement);
	} else{
		alert("You do not have what is required to enter this room!\n" + requirement);
		SelectRoom(lastRoom);
		return;
	}
}
	choices.innerHTML = "";

	title.innerHTML = roomArray[roomIndex].title;
	text.innerHTML = roomArray[roomIndex].text;

	for (var i = 0; i < roomArray[roomIndex].choices.length; i++ ){
		var tag = "<button type = 'button' onclick = '" + "SelectRoom(" + roomArray[roomIndex].choices[i].index + ")'" + " id = 'b" + (i % 2) + "'>" + roomArray[roomIndex].choices[i].text + "</button>";
		choices.innerHTML += tag;
	}

	if (!(inventory.includes(item)) && item != ""){
	 	inventory.push(item);
		console.log(inventory);
	}

	inv.innerHTML = "<h1>Inventory:</h1>"
	for (var i = 0; i < inventory.length; i++){
		inv.innerHTML += "<h3>" + inventory[i] + "</h3><br>"
	}

	lastRoom = roomIndex;
}
