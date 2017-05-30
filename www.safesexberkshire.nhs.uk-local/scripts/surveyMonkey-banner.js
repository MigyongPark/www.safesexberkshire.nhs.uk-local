// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.

//#####https://davidwalsh.name/javascript-debounce-function#####//

function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this,
            args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

function isMobile() {
    var scrW = window.screen.width;

    var dsktpScrll = ((document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop) ? true : false;

    // console.log(scrW, dsktpScrll);

    if (scrW <= 768 && dsktpScrll === false) {
        return true;
    } else {
        return false;
    }
};

var timer = null;

window.onload = function() {
    var surveyBarMobile = document.getElementsByClassName('surveyBanner')[0],
		rmBanner = document.getElementsByClassName('surveyBanner__svg--cross')[0],
        elem_classList = surveyBarMobile.classList,
        dragging = 0,
        currY = 0,
        newY = 0,
        deltaY = 0,
        objY = surveyBarMobile.offsetTop;
    function scrollHandler() {
        if (isMobile() === true) {
            dragging = 1;
            currY = window.pageYOffset;
            deltaY = currY - newY;
            // currY > objY not needed..??
            if (currY > objY && deltaY >= 100 || deltaY < -100) {
                surveyBarMobile.classList.add('surveyBanner--fixed--hidden')
            }
        } else {
            currY = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
            if (!elem_classList.contains('surveyBanner--fixed--hidden')) {
                surveyBarMobile.classList.add('surveyBanner--fixed--hidden');
            }
        }
    }

    function scrollHandler_Remove() {
        if (isMobile() === true) {
            newY = window.pageYOffset;
            // console.log(newY - initY);
            if (dragging === 0) {
                console.log('no dragging', dragging);
                return
            } else {
                surveyBarMobile.classList.remove('surveyBanner--fixed--hidden')
                dragging = 0;
                console.log('was dragging', dragging);
            }
        } else {
            console.log('timer ended..');
        }
    }

    var effi_scrllH = debounce(scrollHandler, 250, true),
        effi_scrllH_Rem = debounce(scrollHandler_Remove, 250);
	
	var effi_dsktpScrl = function() {
        window.clearTimeout(timer);
        effi_scrllH();
        timer = window.setTimeout(function() {
            elem_classList.remove('surveyBanner--fixed--hidden')
        }, 1000);
    };

    document.addEventListener('touchmove', effi_scrllH, false);
    document.addEventListener('touchend', effi_scrllH_Rem, false);
    window.addEventListener('scroll', function() {
		/*console.log(window.pageYOffset);*/
		if (window.pageYOffset >= 212 && surveyBarMobile.classList.contains('surveyBanner--hide')) {
				surveyBarMobile.classList.remove('surveyBanner--hide');
		}
        window.clearTimeout(timer);
        effi_scrllH();
        timer = window.setTimeout(function() {
            elem_classList.remove('surveyBanner--fixed--hidden')
        }, 1000);
    }, false);
	
    rmBanner.addEventListener('click', function(event) {
        surveyBarMobile.classList.add('surveyBanner--rm');
        surveyBarMobile = undefined;
        document.removeEventListener('touchmove', effi_scrllH, false);
        document.removeEventListener('touchmove', effi_scrllH_Rem, false);
        window.removeEventListener('scroll', effi_dsktpScrl, false);
		window.clearTimeout(timer);
    }, true);
};
