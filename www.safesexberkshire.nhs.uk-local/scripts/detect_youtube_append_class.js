// Script takes embedded youtube videos and places a wrapper div with a class assigned.

// Calculates Aspect Ratio of Video - not effcient. <- Look into.
function Aspect_ratio(elem) {
    var w = elem.width,
        h = elem.height,
        aRatio;

    // Recursive greatest common devider (GCD) function
    // (http://stackoverflow.com/questions/17445231/js-how-to-find-the-greatest-common-divisor)
    function calc_ratio(a, b) {
        if (b === 0) {
            return a;
        } else {
            return calc_ratio(b, a % b);
        }
    }

    r = calc_ratio(w, h);
    aRatio = [w / r, h / r];
    // Returns a percentage for use in padding-bottom style
    return (aRatio[1] / aRatio[0]) * 100;
}



window.onload = (function() {
    // Variables
    var vid_wrapper,
        videoElem,
        videoElem_len,
        // Classes that could be used for something..
        classes = ['sm-vid','md-vid','lg-vid'],
        i;

    // Convert class array to string
    var classes_str = " " + classes.toString().replace(/\,/g, ' ');

    videoElem = document.getElementsByTagName('iframe');

    videoElem_len = videoElem.length - 1;

    // Check if iframes exist using truthy conditional. Loop iterates over all iframes creating
    // a new div element for each. The iframe is then placed inside its new wrapper div, which is itself
    // placed back into the original parent element ( in this case a p tag );
    if (videoElem) {
        for (i = 0; i <= videoElem_len; i++) {
            vid_wrapper = document.createElement('div');
            // Will add regex for vimeo also
            if (videoElem[i].src.match(/youtube/gi)) {
                vid_wrapper.className += classes_str;
                vid_wrapper.style.paddingBottom = Aspect_ratio(videoElem[i]) + "%";
                videoElem[i].parentNode.appendChild(vid_wrapper);
                vid_wrapper.appendChild(videoElem[i]);

            }
        }
    } else {
        console.log("No iframes present in page.");
    }

});
