let speech = new SpeechSynthesisUtterance(); // represents a speech request and information how to read it.

document.querySelector("button").addEventListener("click", () => {
  speech.text = document.querySelector("textarea").value;
  window.speechSynthesis.speak(speech); //speechsysthesis -> voice available on device,start and pause speech
});

let voices = [];

let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices(); //getvoices() provided -> all the voices available in devices
  speech.voice = voices[0]; //voices[0] means-> speak in the first voice that is available on the device.

  voices.forEach(
    (voice, i) => (voiceSelect.options[i] = new Option(voice.name, i))
  );
};

voiceSelect.addEventListener("change", () => {
  speech.voice = voices[voiceSelect.value];
});
