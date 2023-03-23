// ==UserScript==
// @name         Instagram unprotect
// @namespace    http://lbreda.com/
// @version      2.2
// @description  Unprotects Instagram images in the single-image pages
// @author       Lorenzo Breda
// @license      MIT
// @match        https://*.instagram.com/*
// @grant        none
// ==/UserScript==

function unprotectImage() {
    [...document.querySelectorAll('._aagv img')].forEach((image) => {
        let imgContainer = image?.parentNode.parentNode;
        if(imgContainer?.getElementsByTagName('div')[1]) imgContainer?.removeChild(imgContainer?.getElementsByTagName('div')[1]);
    })
}

function callback(mutationList, observer) {
    unprotectImage();
}

function attachObserverToArticle() {
    let waitForArticle = setInterval(() => {
        if (document.querySelector('body')) {
            (new MutationObserver(callback)).observe(document.querySelector('body'), { attributes: false, childList: true, subtree: true });
            clearInterval(waitForArticle);
        }
    }, 20)
}

(function() {
    'use strict';

    let currentURL = location.href;
    let firstCycle = true;

    let mainCycle = setInterval(() => {
        if(currentURL != location.href || firstCycle) {
            currentURL = location.href;
            firstCycle = false;
            if(currentURL.startsWith("https://www.instagram.com/p/")) {
               attachObserverToArticle();
            }
        }
    }, 20)
})();