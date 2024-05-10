// fancifymytext
//Assigment 5 
document.getElementById('biggerButton').addEventListener('click', function() {
    alert("Hello, world!"); // Show alert when the button is clicked
});
document.getElementById('biggerButton').addEventListener('click', function() {
    // Access the text area by its ID and change its font size to 24pt
    document.getElementById('textArea').style.fontSize = '24pt';
});
function applyStyles() {
    // Access the text area by its ID
    var textArea = document.getElementById('textArea');
    
    // Check if "FancyShmancy" radio button is selected
    if (document.getElementById('fancyShmancy').checked) {
        textArea.style.fontWeight = 'bold';
        textArea.style.color = 'blue';
        textArea.style.textDecoration = 'underline';
    } else {
        // If "BoringBetty" is selected, remove the styles
        removeStyles();
    }
}

function removeStyles() {
    // Access the text area by its ID
    var textArea = document.getElementById('textArea');

    // Reset styles to default
    textArea.style.fontWeight = 'normal';
    textArea.style.color = 'black'; // You can set any default color you prefer
    textArea.style.textDecoration = 'none';
}
document.getElementById('mooButton').addEventListener('click', function() {
    var textArea = document.getElementById('textArea');
    var text = textArea.value;

    // Uppercase the text
    textArea.value = text.toUpperCase();

    // Add "-Moo" suffix to the last word of each sentence
    var sentences = text.split('.');
    var modifiedSentences = sentences.map(function(sentence) {
        var words = sentence.trim().split(' ');
        if (words.length > 1) {
            words[words.length - 1] += '-Moo';
        }
        return words.join(' ');
    });
    textArea.value = modifiedSentences.join('. ');
});