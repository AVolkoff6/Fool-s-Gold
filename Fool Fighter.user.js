// ==UserScript==
// @name         Fool's Gold
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Warns you about youtube videos posted on April First.
// @author       AVolkoff
// @match        https://www.youtube.com/*
// @icon         https://www.gstatic.com/youtube/img/branding/favicon/favicon_192x192.png
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var USE_POPUP=true;
    function getElementByXpath(path) {
        return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    }
    var checkDate = function() {
        var xpath = "/html/body/ytd-app/div[1]/ytd-page-manager/ytd-watch-flexy/div[5]/div[1]/div/div[2]/div[5]/div[1]/div[2]/ytd-video-primary-info-renderer/div/div/div[1]/div[2]/yt-formatted-string"
        var dateElement = getElementByXpath(xpath);
        var date = dateElement.innerHTML;
        var isAprilFirst = date.indexOf("Apr 1,")!==-1;
        if(isAprilFirst)
        {
            dateElement.style.color = "lightgreen";
            if(USE_POPUP)
            {
            alert("This video was posted on April 1st!");
            }
        }

    }
    window.setTimeout(checkDate, 2000);

})();
