// ==UserScript==
// @name         Instagram unprotect
// @namespace    http://lbreda.com/
// @version      1.1
// @description  Unprotects Instagram images in the single-image pages
// @author       Lorenzo Breda
// @match        https://*.instagram.com/*
// @grant        none
// ==/UserScript==

function lbreda_instagram_unprotect() {
    'use strict';

    var elems_img = document.getElementsByClassName("_ovg3g");
    Array.prototype.forEach.call(elems_img, function(item, index) {
        item.parentNode.removeChild(item);
    });
    
    var elems_vid1 = document.getElementsByClassName("_c2kdw");
    Array.prototype.forEach.call(elems_vid1, function(item, index) {
        item.parentNode.removeChild(item);
    });
    
    var elems_vid2 = document.getElementsByClassName("_80v0r");
    Array.prototype.forEach.call(elems_vid2, function(item, index) {
        item.parentNode.removeChild(item);
    });
    
}

lbreda_instagram_unprotect();
