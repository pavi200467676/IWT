document.addEventListener('DOMContentLoaded', function() {
    const convertBtn = document.getElementById('convertBtn');
    const recordBtn = document.getElementById('recordBtn');
    const textToConvert = document.getElementById('textToConvert');
    const errorPara = document.querySelector('.error-para');

    // Text-to-Speech Functionality
    convertBtn.addEventListener('click', () => {
        const text = textToConvert.value;
        if (text.trim() !== "") {
            const speech = new SpeechSynthesisUtterance(text);
            window.speechSynthesis.speak(speech);
        } else {
            errorPara.textContent = "Please enter some text to convert.";
        }
    });

    // Speech-to-Text Functionality
    if ('webkitSpeechRecognition' in window) {
        const recognition = new webkitSpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = 'en-US';

        recordBtn.addEventListener('click', () => {
            recognition.start();
        });

        recognition.onresult = function(event) {
            const transcript = event.results[0][0].transcript;
            textToConvert.value = transcript;
        };

        recognition.onerror = function(event) {
            errorPara.textContent = "Error occurred in recognition: " + event.error;
        };
    } else {
        errorPara.textContent = "Speech recognition not supported in this browser.";
    }
});