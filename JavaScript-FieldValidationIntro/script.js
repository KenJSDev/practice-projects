function returnValue() {
  var minlen = 1; // Declare the minimum length
  var maxlen = 20; // Declare the maximum length
  let txt =  document.getElementById('input').value; // Variable to store entered values
  let len = txt.length; // variable to pull the length of the txt variable
	
  if (len >= minlen && len <= maxlen) {
    let output = document.getElementById('input').value;
    document.getElementById('output').innerHTML = "Value: " + output;

  /* Set guideBox to reset any potential error messages 
  when an acceptable value is added */
    document.getElementById("guideBox").innerHTML = "Enter a Value Between 1 and 20 Characters";		
  }
	
  else if (len < minlen) {
	document.getElementById('guideBox').innerHTML = ("You have not entered a value".fontcolor("red"));			
  }
	
  else {
  /* The only remaining scenario is that the length of the value 
  exceeds 20 characters. Do not display output and return error message */
  document.getElementById('guideBox').innerHTML = ("You have entered more than 20 characters".fontcolor("red"));
  }		
}
		
function clearValue() {
/* Clear input and output values, reset error message */
  let output = document.getElementById('output').innerHTML = "Value: ";
  document.getElementById("guideBox").innerHTML = "Enter a Value Between 1 and 20 Characters";
  document.getElementById('input').value = "";
}