// Example activation logic for "eva"
const activationPhrases = ["eva", "ava", "ever"];
const threshold = 0.6; // confidence threshold

recognition.onresult = function(event) {
  for (let i = 0; i < event.results.length; i++) {
    let transcript = event.results[i][0].transcript.toLowerCase();
    let confidence = event.results[i][0].confidence;

    // Fuzzy check: does transcript contain any activation phrase?
    if (activationPhrases.some(phrase => transcript.includes(phrase)) && confidence > threshold) {
      activateEva();
      break;
    }
  }
};

function activateEva() {
  // Your activation code here
  console.log("Eva activated!");
}