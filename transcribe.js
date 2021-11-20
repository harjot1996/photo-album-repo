if (!('webkitSpeechRecognition' in window)) {
  console.log("Not Supported");
  //Speech API not supported here…
} else { //Let’s do some cool stuff :)
  var recognition = new webkitSpeechRecognition(); //That is the object that will manage our whole recognition process. 
  recognition.continuous = true;   //Suitable for dictation. 
  recognition.interimResults = true;  //If we want to start receiving results even if they are not final.
  //Define some more additional parameters for the recognition:
  console.log("Supported");
  recognition.lang = "en-US"; 
  recognition.maxAlternatives = 1; //Since from our experience, the highest result is really the best...
}

recognition.onstart = function() {
  //Listening (capturing voice from audio input) started.
  //This is a good place to give the user visual feedback about that (i.e. flash a red light, etc.)
};

recognition.onend = function() {
  //Again – give the user feedback that you are not listening anymore. If you wish to achieve continuous recognition – you can write a script to start the recognizer again here.
};

recognition.onresult = function(event) { //the event holds the results
//Yay – we have results! Let’s check if they are defined and if final or not:
  for (var i = event.resultIndex; i < event.results.length; ++i) {
      if (event.results[i].isFinal) { //Final results
        document.getElementById("transcript").value = event.results[i][0].transcript;
      }
  } //end for loop
};

function startButton(event) {
  recognition.start();
  document.getElementById("start-button").style.backgroundColor = "#007bff";
  document.getElementById("start-button").style.color = "#fff";
}

function stopButton(event) {
  element_ = "start-button";
  recognition.stop();
  document.getElementById("start-button").style.backgroundColor = "#fff";
  document.getElementById("start-button").style.color = "#007bff";
}