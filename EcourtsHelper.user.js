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
        // The get request
        /*
        fetch(window.location.href, {
            method: 'GET',
            credentials: 'include' // Include cookies for session
        }).then(response => {
            // Handle response if needed
            console.log('Session keep-alive request sent');
        }).catch(error => {
            console.error('Error sending keep-alive request:', error);
        });
        console.log(`Refreshed session`);

        // Try a mouse move
        let mouseEvent = new MouseEvent('mousemove', {
            bubbles: true,
            cancelable: true
        });
        document.dispatchEvent(mouseEvent);

        // Simulate focus
        let focusedElement = document.activeElement || document.body;
        focusedElement.focus();

        // Click the nav bar
        document.getElementById(`main-footer`).click();
        */

        // Calling the page's keepAlive() method
        const staySignedInButton = document.getElementById(`SessionPop`).querySelector(`div.modal-footer button`);
        console.log(staySignedInButton.innerHTML);
        staySignedInButton.click();

        console.log(`Interacted with page a bit to keep session alive`);

    }, 10000);

})();

