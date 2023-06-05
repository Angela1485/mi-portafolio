(function () {
  // Prompt the user for their age
  var userAge = prompt("Que edad tiene?:");

  // Check if the user's age is greater than or equal to the legal age
  var legalAge = 18; // Replace with the legal age in your jurisdiction

  if (userAge >= legalAge) {
    var audio = new Audio("adulto.mp3");
    audio.play();
    alert("Enhorabuena! superas la mayoria de edad! Tienes gusto musical!");
  } else {
    var audio = new Audio("nene.mp3");
    audio.play();
    alert("Lo siento, aun puede que no conozcas EXTREMODURO");
  }
})();
