// The keys and notes variables store the piano keys
const keys = ['c-key', 'd-key', 'e-key', 'f-key', 'g-key', 'a-key', 'b-key', 'high-c-key', 'c-sharp-key', 'd-sharp-key', 'f-sharp-key', 'g-sharp-key', 'a-sharp-key'];
const notes = [];
keys.forEach(function(key){
  notes.push(document.getElementById(key));

})

// Function to change the key color when pressed
function keyPlay(event){
  event.target.style.backgroundColor = 'blue';
}

// Function to reset the key color when released
function keyReturn(event){
  event.target.style.backgroundColor = '';
}

// Write a named function with event handler properties
function assignKeyEvents(note){
    // Assign the keyPlay function to the mouse down event
 note.onmousedown = keyPlay;
    // Assign the keyReturn function to the mouse up event
 note.onmouseup = keyReturn;
}

// Write a loop that runs the array elements through the function
notes.forEach(assignKeyEvents);

// These variables store the buttons that progress the user through the lyrics
let nextOne = document.getElementById('first-next-line');
let nextTwo = document.getElementById('second-next-line');
let nextThree = document.getElementById('third-next-line');
let startOver = document.getElementById('fourth-next-line');

// This variable stores the '-END' lyric element
let lastLyric = document.getElementById('column-optional');

// These statements are "hiding" all the progress buttons, but the first one
nextTwo.hidden = true;
nextThree.hidden = true;
startOver.hidden= true;

// Write anonymous event handler property and function for the first progress button
nextOne.onclick = function(){
    // Show the second progress button
   nextTwo.hidden = false;
    // Hide the first progress button
   nextOne.hidden = true;
    // Update the notes for the next lyrics
    document.getElementById('letter-note-five').innerHTML = 'D';
    document.getElementById('letter-note-six').innerHTML = 'C';
}

// Write anonymous event handler property and function for the second progress button
nextTwo.onclick = function(){
    // Show the third progress button
  nextThree.hidden = false;
    // Hide the second progress button
  nextTwo.hidden = true;
    // Change the lyrics for the second line
  document.getElementById('word-five').innerHTML = 'DEAR';
  document.getElementById('word-six').innerHTML = 'FRI-';
    // Show the -END lyrics
  lastLyric.style.display = 'inline-block';
    // Change the musical notes
 document.getElementById('letter-note-three').innerHTML = 'G';
 document.getElementById('letter-note-four').innerHTML = 'E';
 document.getElementById('letter-note-five').innerHTML = 'C';
 document.getElementById('letter-note-six').innerHTML = 'B';
}

// Write anonymous event handler property and function for the third progress button
nextThree.onclick = function(){
    // Reveal the startOver button
  startOver.hidden = false;
    // Hide the nextThree button
  nextThree.hidden = true;
    // Update the lyrics in the song box
   document.getElementById('word-one').innerHTML = 'HAP-';
   document.getElementById('word-two').innerHTML = 'PY';
   document.getElementById('word-three').innerHTML = 'BIRTH';
   document.getElementById('word-four').innerHTML = 'DAY';
   document.getElementById('word-five').innerHTML = 'TO';
   document.getElementById('word-six').innerHTML = 'YOU!';
    // Update the notes in the song box
 document.getElementById('letter-note-one').innerHTML = 'F';
  document.getElementById('letter-note-two').innerHTML = 'F';
   document.getElementById('letter-note-three').innerHTML = 'E';
 document.getElementById('letter-note-four').innerHTML = 'C';
 document.getElementById('letter-note-five').innerHTML = 'D';
 document.getElementById('letter-note-six').innerHTML = 'C';
    // Hide the -END lyric element
 lastLyric.style.display = 'none';

}

// This is the event handler property and function for the startOver button
startOver.onclick = function() {
  nextOne.hidden = false;
  startOver.hidden = true;
   document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('letter-note-one').innerHTML = 'G';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('letter-note-two').innerHTML = 'G';
  document.getElementById('word-three').innerHTML = 'BIRTH-';
  document.getElementById('letter-note-three').innerHTML = 'A';
  document.getElementById('word-four').innerHTML = 'DAY';
  document.getElementById('letter-note-four').innerHTML = 'G';
  document.getElementById('word-five').innerHTML = 'TO';
  document.getElementById('letter-note-five').innerHTML = 'C';
  document.getElementById('word-six').innerHTML = 'YOU!';
  document.getElementById('letter-note-six').innerHTML = 'B';
}