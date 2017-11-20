
function StorePlayerData()
{
	var name = document.forms[0]['playername'];
	var health = document.forms[0]['playerhealth'];
	var colour = document.forms[0]['playercolour'];

	localStorage.setItem("playername", name.value);
	localStorage.setItem("playerhealth", health.value);
	localStorage.setItem("playercolour", colour.value);
}
