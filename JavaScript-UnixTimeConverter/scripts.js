function convert() {
// Get the value of the unix time stamp that the user entered
	var inDate = document.getElementById('inputDate').value;
// Get the element to display the converted result
	var outDate = document.getElementById('displayDate');

// Declare a variable to store the date in milliseconds
	var mSeconds = parseInt(inDate);
// Create a new Date object based on the previously delcared variable
	var date = new Date(mSeconds);
// Display the date in a string format within the outDate div 
	outDate.innerHTML = date.toString();
	}