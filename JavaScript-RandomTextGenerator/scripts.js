/* The concept of this project is from the book
JavaScript For Kids: A Playful Introduction to Programming 
Chapter 3, Page 59 */

// An array of names or titles
var peopleArr = [
  "A Walmart Greeter", 
  "A Ninja", 
  "Happy Gilmore", 
  "Big Foot", 
  "Elon Musk",
  "Ash Williams",
  "Mike Tyson",
  "Jason Voorhees",
  "John Cena",
  "Ronald McDonald"
];

// An array of actions
  var actionArr = [
  "taken to the hospital", 
  "arrested", 
  "promoted", 
  "cancelled on Twitter", 
  "assaulted",
  "fired from their job",
  "committed to an asylum",
  "recommended for re-education",
  "forced into Community Service",
  "placed on a watch list"
];

// An array of causes 
  var causeArr = [
  "stealing shoes from Payless", 
  "eating Tide Pods on TikTok", 
  "Pirating episodes of The Golden Girls", 
  "skinny dipping at the zoo again", 
  "using a fake ID to buy hard seltzers",
  "performing pro-wrestling moves on a service dog",
  "pressing all of the buttons on the elevator",
  "doing suggestive Yoga moves on public transportation",
  "failing to use the 'Spoiler Warning' tag",
  "using two bathroom stalls at the same time"
];

// Function to randomize data from the arrays and display the output
function randomize() {

  // Functions that assign numerical values
  // Math.random pulls a random number
  // Math.floor rounds down to the nearest whole number
  // Multipled by 10 as rounding down would result in values 0 - 9
  var randomPeople = peopleArr[Math.floor(Math.random() * 10)];
  var randomAction = actionArr[Math.floor(Math.random() * 10)];
  var randomCause = causeArr[Math.floor(Math.random() * 10)];

  // Variable to the random data into a logical sentence      
  var randomSentence = randomPeople + " was " + randomAction + " for " + randomCause + ".";

  // Change the textOutput HTML element to the randomSentence output 
  document.getElementById("textOutput").innerHTML = randomSentence;
}