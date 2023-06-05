(function () {
        // Prompt the user for their age
        var userAge = prompt("Que edad tiene?:");

        // Check if the user's age is less than the legal age
        var legalAge = 18; // Replace with the legal age in your jurisdiction

        var audio = new Audio();
        
        // Function to play the audio
        function playAudio() {
          audio.play();
        }
        
        // Function to pause the audio
        function pauseAudio() {
          audio.pause();
        }

        if (userAge < legalAge) {
          audio.src = "audio/nene.mp3";
          alert("Lo siento, aún puede que no conozcas EXTREMODURO");
        } else {
          audio.src = "audio/adulto.mp3";
          alert("¡Enhorabuena! ¡Superas la mayoría de edad! ¡Tienes gusto musical!");
        }
        
        // Create the play button
        var playButton = document.createElement("button");
        playButton.textContent = "Play";
        playButton.addEventListener("click", playAudio);
        document.body.appendChild(playButton);
        
        // Create the pause button
        var pauseButton = document.createElement("button");
        pauseButton.textContent = "Pause";
        pauseButton.addEventListener("click", pauseAudio);
        document.body.appendChild(pauseButton);
      })();
