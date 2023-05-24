(function() {
  // Prompt the user for their age
  var userAge = prompt("Que edad tiene?:");

  // Check if the user's age is greater than or equal to the legal age
  var legalAge = 18; // Replace with the legal age in your jurisdiction

  if (userAge >= legalAge) {
    alert("Enhorabuena! superas la mayoria de edad! Tienes gusto musical!");
  } else {
    alert("Lo siento, aun puede que no conozcas EXTREMODURO");
  }
})();