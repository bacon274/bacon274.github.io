document.addEventListener('DOMContentLoaded', function (event) {
    var dataText = ["Jacob Mitchell: ","Designer", "Engineer", "Coder", "Maker"];

    function typeWriter(wordCount, i, callback) { 
        console.log(i);

        var word = dataText[wordCount];
        // typing //
        if (i < word.length && callback == true) {
            console.log("typing");
            // first word, type normally //
            if (wordCount == 0) {
                document.getElementById("dynamicHeader").innerHTML = word.substring(0, i + 1);
            }
            // next words, keep first word in place //
            else {
                document.getElementById("dynamicHeader").innerHTML = dataText[0] + word.substring(0, i + 1);
            }
            
            setTimeout(function () { typeWriter(wordCount, i + 1, true); }, Math.floor(Math.random() * 300)+50  );
        }
        // typing finished, pause, reverse//
        else if (i == word.length) {
            console.log("typing finished, pause, reverse");
            if (wordCount == 0) {
                setTimeout(function () { typeWriter(wordCount, i - 1, false); }, 10);
            }
            else {
                setTimeout(function () { typeWriter(wordCount, i - 1, false); }, 1000);
            }
        }
        // backspacing //
        else if (i < word.length && callback == false && i != 0) {
            // first word, dont backspace, start next word //
            if (wordCount == 0) {
                setTimeout(function () { typeWriter(wordCount + 1, 0, true); }, 10);
            }
            // backspace 2nd word onwards //
            else {
                document.getElementById("dynamicHeader").innerHTML = dataText[0] + word.substring(0, i - 1);
                setTimeout(function () { typeWriter(wordCount, i - 1, false); }, 100);
            }
        }
        // deleted, pause, start next word //
        else if (i == 0 && callback == false && wordCount + 1 < dataText.length) {
            console.log("deleted, pause, start next word");
            setTimeout(function () { typeWriter(wordCount + 1, i, true); }, 1000);
        }
        // restart word list//
        else {
            console.log("restart word list");
            setTimeout(function () { typeWriter(1, 0, true); }, 1000);
        }

};
    typeWriter(0, 0, true);
    
});
