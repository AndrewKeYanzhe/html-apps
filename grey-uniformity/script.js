var lum_8bit = 13

function setColor(color){
	lum_8bit = color
	document.getElementById("luminance_8bit").textContent = color
	document.getElementById("luminance_percent").textContent = Math.round(color/255*100)
	document.body.style.backgroundColor = "rgb("+color+","+color+","+color+")"
	slider.noUiSlider.set(color);
}

function setColorFromSlider(color){
	lum_8bit = color
	document.getElementById("luminance_8bit").textContent = color
	document.getElementById("luminance_percent").textContent = Math.round(color/255*100)
	document.body.style.backgroundColor = "rgb("+color+","+color+","+color+")"
}

function uncheckRadios(){
	let radios = document.getElementsByClassName("form-check-input")

	for (var i = 0; i < radios.length; i++) {
		radios.item(i).checked = false;
	}
}

function applyRadioValue(color){
	document.getElementById("textValue").value = "";
	setColor(color)
	document.activeElement.blur()
}

function applyTextValue(){
	lum_8bit = Math.round(document.getElementById("textValue").value)
	lum_8bit = Math.min(Math.max(lum_8bit, 0), 255);

	document.getElementById("textValue").value = lum_8bit
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

		var newColor = lum_8bit + colorChange
		newColor = Math.min(Math.max(newColor, 0), 255);
		setColor(newColor)
	}

	if (e.keyCode == '32') {

		var panel = document.getElementById("panel")
		if (panel.style.display === "none") {
			panel.style.display = "block";
		} else {
			panel.classList.toggle('hide');
		}
	}


}



function init(){
	var slider = document.getElementById('slider');
	// slider.noUiSlider.set(200);
	slider.noUiSlider.on('update', function (values, handle) {
		setColorFromSlider(Math.round(values))
	});
}

window.onload = init;