// ==UserScript==
// @name         Instagram unprotect
// @namespace    http://lbreda.com/
// @version      2.0
// @description  Unprotects Instagram images in the single-image pages
// @author       Lorenzo Breda
// @license      MIT
// @match        https://www.instagram.com/p/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

function unprotectImage() {
    let imgContainer = document.querySelector('img[src*=cdninstagram][srcset*=cdninstagram]')?.parentNode.parentNode;
    if(imgContainer?.getElementsByTagName('div')[1]) imgContainer?.removeChild(imgContainer?.getElementsByTagName('div')[1]);
}

function callback(mutationList, observer) {
    unprotectImage();
}

(function() {
    'use strict';

    window.addEventListener('load', function() {
        (new MutationObserver(callback)).observe(document.querySelector('body'), { attributes: false, childList: true, subtree: true });
    }, false);

})();