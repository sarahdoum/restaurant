(function () {
    'use strict';

    var suteMenuClone = function () {
        var jsCloneNavs = document.querySelectorAll('.js-clone-nav'),
            siteMobileMenuBody = document.querySelector('.site-mobile-menu-body');

        jsCloneNavs.forEach(nav => {
            var navCloned = nav.cloneNode(true);
            navCloned.setAttribute('class', 'site-nav-wrap');
            siteMobileMenuBody.appendChild(navCloned);
        });

       /*setTimeout(function () {
            var hasChildrens = document.querySelector('.site-mobile-menu').querySelectorAll('.has-children');
            var counter = 0;
            hasChildrens.forEach(hasChild => {
                var refEl = hasChild.querySelector('a');
                var newElSpan = document.createElement('span');
                newElSpan.setAttribute('class', 'arrow-collapse collapsed');
                hasChild.insertBefore(newElSpan, refEl);

                var arrowCollapse = hasChild.querySelector('.arrow-collapse');
                arrowCollapse.setAttribute('data-toggle', 'collapse');
                arrowCollapse.setAttribute('data-target', '#collapseItem' + counter);

                var dropdown = hasChild.querySelector('.dropdown');
                dropdown.setAttribute('class', 'collapse');
                dropdown.setAttribute('id', 'collapseItem' + counter);

                counter++;
            });
        }, 1000); */

        var menuToggle = document.querySelectorAll('.js-menu-toggle'),
            mTog;

        menuToggle.forEach(mtoggle => {
            mTog = mtoggle;
            mtoggle.addEventListener('click', (e) => {
                if (document.body.classList.contains('offcanvas-menu')) {
                    document.body.classList.remove('offcanvas-menu');
                    mtoggle.classList.remove('active');
                    mTog.classList.remove('active');
                } else {
                    document.body.classList.add('offcanvas-menu');
                    mtoggle.classList.add('active');
                    mTog.classList.add('active');
                }
            });
        });

        // Click outside
        var specifiedElement = document.querySelector('.site-mobile-menu'),
            mt, mtoggleTemp;

        document.addEventListener('click', function (event) {
            var isClickInside = specifiedElement.contains(event.target);
            menuToggle.forEach(mtoggle => {
                mtoggleTemp = mtoggle;
                mt = mtoggle.contains(event.target);
            });
            if (!isClickInside && !mt) {
                if (document.body.classList.contains('offcanvas-menu')) {
                    document.body.classList.remove('offcanvas-menu');
                    mtoggleTemp.classList.remove('active');
                }
            }
        });
    };

    suteMenuClone();
})();
