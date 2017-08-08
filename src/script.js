const talkButton = document.querySelector('.talk-button');
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.lang = 'de-DE';
recognition.interimResults = false;

const DEFAULT = 'das habe ich nicht verstanden du otto';
const ANSWERS = {
  'hallo': 'was geht ab',
};

/**
 * say something
 */
function talk(text) {
  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance();

  utterance.text = text;
  synth.speak(utterance);
}

/**
 * handles the result
 */
function handleResult(text) {
  const key = text.toLowerCase();
  const answer = ANSWERS[key] || DEFAULT;
  talk(answer);
}

/**
 * add click listener
 */
talkButton.addEventListener('click', () => {
  recognition.start();
});

/**
 * add speech end listener
 */
recognition.addEventListener('result', (e) => {
  let last = e.results.length - 1;
  let text = e.results[last][0].transcript;

  console.log('Confidence: ' + e.results[0][0].confidence);
  console.log(text);

  handleResult(text);
});
