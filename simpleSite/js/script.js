function changePink(){
	var background = document.body;

	if (background.classList.contains("changeYellow") || background.classList.contains("changeBlue")){
		background.classList.remove("changeBlue");
		background.classList.remove("changeYellow");
		background.classList.add("changePink");
	} else if (background.classList.contains("changePink")) {
		background.classList.remove('changePink');
	} else {
		background.classList.add('changePink')
	}
}

function changeBlue(){
	var background = document.body;

	if (background.classList.contains("changePink") || background.classList.contains("changeYellow")){
		background.classList.remove("changePink");
		background.classList.remove("changeYellow");
		background.classList.add('changeBlue');
	} else if (background.classList.contains("changeBlue")) {
		background.classList.remove('changeBlue');
	} else {
		background.classList.add('changeBlue')
	}
}

function changeYellow(){
	var background = document.body;

	if (background.classList.contains("changePink") || background.classList.contains("changeBlue")){
		background.classList.remove("changePink");
		background.classList.remove("changeBlue");
		background.classList.add('changeYellow')
	} else if (background.classList.contains("changeYellow")) {
		background.classList.remove('changeYellow');
	} else {
		background.classList.add('changeYellow')
	}
}