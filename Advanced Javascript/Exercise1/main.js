var weaponsArray = [
	'Broadsword',
	'Crossbow',
	'Magic staff'
];


function OnLoad()
{
	console.log("test");
	for (var i = 0; i < weaponsArray.length; i++){
		var weaponTag = "<option value='" + i + "'>" + weaponsArray[i] + "</option>";
		document.forms[0]["weapons"].innerHTML += weaponTag;
	}
}


function SelectWeapon()
{
	var element = document.getElementById('currentWeapon');
	element.innerHTML	= "Current Weapon: " + weaponsArray[document.forms[0]["weapons"].value];
}
