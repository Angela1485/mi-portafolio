(function() {
  // Prompt the user for their age
  var userAge = prompt("Que edad tiene?:");

  let audioPlayer = document.getElementById("audio-player");


  // Check if the user's age is greater than or equal to the legal age
  var legalAge = 18; // Replace with the legal age in your jurisdiction

  if (userAge >= legalAge) {
    alert("Enhorabuena! superas la mayoria de edad! Tienes gusto musical!");
    // Set audio source to ./to/audio/nene.mp3
    audioPlayer.src = "./to/audio/adulto.mp3";
  } else {
    alert("Lo siento, aun puede que no conozcas EXTREMODURO");
    // Set audio source to ./to/audio/nene.mp3
    audioPlayer.src = "./to/audio/nene.mp3";
  }
})();
