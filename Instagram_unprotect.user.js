// ==UserScript==
// @name         Instagram unprotect
// @namespace    http://lbreda.com/
// @version      1.3
// @description  Unprotects Instagram images in the single-image pages
// @author       Lorenzo Breda
// @match        https://*.instagram.com/*
// @grant        none
// ==/UserScript==

function lbreda_instagram_unprotect() {
    'use strict';

    var toRemove = document.querySelectorAll("._ovg3g, ._si7dy, ._c2kdw, ._80v0r, ._9AhH0");
    Array.prototype.forEach.call(toRemove, function(item) {
        item.parentNode.removeChild(item);
    });
}

lbreda_instagram_unprotect();
