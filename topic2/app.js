
	// Number of lights
	var numLights = 3;

	// Function to change the color of the given light
	function changeLightColor(lightNum) {
		// Get the input field for the color of the given light
		var colorInput = document.querySelector("#light" + lightNum + " #light" + lightNum + "-color");

		// Get the selected color
		var color = colorInput.value;

		// Get the card element for the given light
		var card = document.querySelector("#light" + lightNum + " .card");

		// Set the background color of the card to the selected color
		card.style.backgroundColor = color;

		// Display the selected color
		// var colorDisplay = card.querySelector(".color-display");
		colorDisplay.textContent = color;
	}






