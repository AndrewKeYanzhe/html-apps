function setColor(lum_8bit){
	document.getElementById("luminance_8bit").textContent = lum_8bit
	document.getElementById("luminance_percent").textContent = Math.round(lum_8bit/255*100)
	document.body.style.backgroundColor = "rgb("+lum_8bit+","+lum_8bit+","+lum_8bit+")"

}

function uncheckRadios(){
	let radios = document.getElementsByClassName("custom-switch-input")
			// console.log(radios)
			for (var i = 0; i < radios.length; i++) {
				radios.item(i).checked = false;
			}
		}

		function applyRadiovalue(lum_8bit){
			document.getElementById("textValue").value = "";
			setColor(lum_8bit)
			document.activeElement.blur()
		}

		function applyTextValue(){
			lum_8bit = Math.round(document.getElementById("textValue").value)
			lum_8bit = Math.min(Math.max(lum_8bit, 0), 255);

			document.getElementById("textValue").value = lum_8bit

			// console.log(isNaN(lum_8bit))
			if (!isNaN(lum_8bit)){
				uncheckRadios()
				setColor(lum_8bit)
			}
		}

		document.onkeydown = checkKey;
		function checkKey(e) {
			e = e || window.event;
			var colorChange = 0

			if (e.keyCode == '38') {
				var colorChange = 1
			}
			else if (e.keyCode == '40') {
				var colorChange = -1
			}

			if (colorChange==1 || colorChange==-1){
				document.getElementById("textValue").value = "";
				uncheckRadios()

				var newColor = Number(document.getElementById("luminance_8bit").textContent) + colorChange
				newColor = Math.min(Math.max(newColor, 0), 255);
				setColor(newColor)
			}

			if (e.keyCode == '32') {
				// console.log("hi")
				var panel = document.getElementById("panel")
				if (panel.style.display === "none") {
					panel.style.display = "block";
				} else {
					panel.classList.toggle('hide');
				}
			}


		}



		function init(){
			// setColor(128)
			// uncheckRadios()
		}

		window.onload = init;