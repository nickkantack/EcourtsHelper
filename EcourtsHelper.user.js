// ==UserScript==
// @name         EcourtsHelper
// @namespace    EcourtsHelperNamespace
// @version      2024-09-06
// @description  Enhance the Ecourts experience
// @author       Nick Kantack
// @match        https://ecourts.sd.gov/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=sd.gov
// @grant        GM.xmlHttpRequest
// @grant        GM_xmlhttpRequest
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM.getValue
// @grant        GM.setValue
// @require      https://raw.githubusercontent.com/nickkantack/KantackJsCommons/mainline/dist/KJSC.js
// ==/UserScript==

(function() {
    'use strict';


    console.log(`EcourtsHelper started`);

    // Schedule GET calls to the server to trigger a refresh of the session
    setInterval(() => {
        KJSC.WebClient.loadUrlSync(window.location.href);
        console.log(`Refreshed session`);
    }, 10000);

})();
