let btn = document.querySelector('.pushable');
let output = document.getElementById('output');
let quote = [
    "Have you ever heard the tale of the deep gnome and the spinning wheel? - BoomBap McDrum",
    "If you have any diamonds hand them over immediately! - Bjorn Hammersmith",
    "SUFFER THE FLAMES OF HELL! - Axe Demon",
    "WHO THE FUCK STANK OUT THE TOILET! - Halla",
    "I'm here to talk to you about our lord and saviour Sharindlar! - Bjorn Hammersmith",
    "Subtlety is an art imbued within the cloth. - Feynora",
    "WE OWE EVERYTHING TO THE SACK PACK! - Father Toublechek",
    "FREEZE CUNTS! - Obu Backhand",
    "OOOOOOOOOHHHH EEEEBBBOOONNNSSSOOOONNNNGGGGGGGG! - Obu Backhand",
    "TELL EVERYBODY I'M ON MY WAY! - Aurora Whiteclaw",
    "Bite 'em in the nuts. - Sack Pack",
    "FUUCK OFF! - Obu Backhand",
    "Exploit the chaos - BoomBap McDrum",
    "SQWAAAAAUUKK - Falco Lombardi",
    "Yesh M'lord - Scuffknee"
    

];

var quotesToShow = [...quote]; // Create a copy of the original array

btn.addEventListener('click', function() {
    if (quotesToShow.length === 0) {
        // If all quotes have been shown, reset the array
        quotesToShow = [...quote];
    }
    
    var randomIndex = Math.floor(Math.random() * quotesToShow.length);
    var randomQuote = quotesToShow[randomIndex];
    
    // Remove the displayed quote from the array
    quotesToShow.splice(randomIndex, 1);
    
    output.innerHTML = randomQuote;
});

btn.addEventListener('touchstart', function() {
    if (quotesToShow.length === 0) {
        // If all quotes have been shown, reset the array
        quotesToShow = [...quote];
    }
    
    var randomIndex = Math.floor(Math.random() * quotesToShow.length);
    var randomQuote = quotesToShow[randomIndex];
    
    // Remove the displayed quote from the array
    quotesToShow.splice(randomIndex, 1);
    
    output.innerHTML = randomQuote;
});