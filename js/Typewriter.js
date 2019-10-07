document.addEventListener('DOMContentLoaded', function (event) {
    var dataText = ["Jacob Mitchell", "Design Engineer", "Software Developer"];

    function typeWriter(wordCount, i, callback) { 
        var word = dataText[wordCount];

        if (i < word.length && callback == true) {
            document.getElementById("dynamicHeader").innerHTML = word.substring(0, i + 1);
            setTimeout(function () { typeWriter(wordCount, i + 1, true); }, 200);
        }
        else if (i == word.length) {
            setTimeout(function () { typeWriter(wordCount, i - 1, false); }, 200);
        }
        else if (i < word.length && callback == false && i != 0) {
            document.getElementById("dynamicHeader").innerHTML = word.substring(0, i - 1);
            setTimeout(function () { typeWriter(wordCount, i - 1, false); }, 200);
        }
        else if (i == 0 && callback == false && wordCount +1 < dataText.length) {
            setTimeout(function () { typeWriter(wordCount + 1, i, true); }, 200);
        }
        else {
            setTimeout(function () { typeWriter(0, 0, true); }, 200);
        }

};
    typeWriter(2, 0, true);
    
});
