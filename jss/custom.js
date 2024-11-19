(function () {
    'use strict';

    // Vérification si AOS est disponible
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 700,
            easing: 'ease',
            once: true
        });
    } else {
        console.error('AOS is not defined. Please include the AOS library.');
    }

    // Vérification si CircleType est disponible
    if (typeof CircleType !== 'undefined' && document.getElementById('circle-type')) {
        new CircleType(document.getElementById('circle-type'));
    } else {
        console.error('CircleType is not defined or element #circle-type is missing.');
    }

    // Ajout de la rotation sur le scroll
    var circleText = document.getElementById('circle-type');
    if (circleText) {
        window.addEventListener('scroll', function () {
            circleText.style.transform = "rotate(" + window.pageYOffset + "deg)";
        });
    } else {
        console.warn('Element #circle-type is not found for scroll effect.');
    }
    var tinyslider=function () {
        var el=document.querySelectorAll('.testimonial-slider');
    if (el.length > 0) {
        var slider = tns({
            'container' : '.testimonial-slider',
            'items':1,
            'center':true,
            'loop':false,
            'mouseDrag':true,
            'slideBy':1,
            'axis':'horizontal',
            'swipeAngle' : true , 
            'speed' : 700,
            'nav':true,
            'controls':false,
            'responsive':{
                '900':{
                    'edgePadding':30,
                    'items':2
                }
            }
        });
    }
    }
    tinyslider(); 
})();
