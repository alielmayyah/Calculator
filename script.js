function add() {
	var firstNumber = parseFloat(document.getElementById('firstNumber').value);
	var secondNumber = parseFloat(document.getElementById('secondNumber').value);
	document.getElementById('result').value = firstNumber + secondNumber;
    document.getElementById('result').style.display = "block"; 
}

function subtract() {
	var firstNumber = parseFloat(document.getElementById('firstNumber').value);
	var secondNumber = parseFloat(document.getElementById('secondNumber').value);
	document.getElementById('result').value = firstNumber - secondNumber;
    document.getElementById('result').style.display = "block"; 
}

function clearForm() {
    document.getElementById('firstNumber').value = "";
    document.getElementById('secondNumber').value = "";
    document.getElementById('result').value = "";
    document.getElementById('result').style.display = "none";
}