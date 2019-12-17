function wow_default_alert () {
	alert("Fonctionnalité non disponible");
}

function wow_default_alert_with_callback(){
	alert("Hello World! Press 'YES' & Check Your Console Log.",
	{
		label: "YES",
		success: function () {
			console.log("User clicked YES");
		}
	}
	);
}