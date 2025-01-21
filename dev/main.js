// ==UserScript==
// @name         Hide Omnivox Grades
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Removes grades from Omnivox for peace of mind
// @author       Your Name
// @match        https://*.omnivox.ca/*
// @grant        none
// ==/UserScript==


(function() {
    'use strict';
    main();
})() /* main */

function main() {
    if (window.location.href.includes("omnivox.ca/intr/")) {
		clear_intr();
	}
	if (window.location.href.includes("cvir")) {
		window.location.href = '/cvir/Quitter.aspx?Retour=Accueil&C=ROS&E=P&L=FRA&';
	}
}

function clear_intr() {
	// clear shortcuts to lea
	var shortcuts = document.getElementById("region-raccourcis-services-skytech").childNodes
	shortcuts[1].remove();
	// clear notifications too
	function removeNotifs() {
		var notifications = document.getElementById("qdn-sans-bouton-wrapper").childNodes;
		for (var notificationId in notifications) {
			var notification = notifications[notificationId]
			if (notification instanceof HTMLElement && notification.getAttribute != null) {
				if (notification.getAttribute('data-type-service') != null) {
					if (notification.getAttribute('data-type-service').includes("CVIR")) {
						notification.remove();
					}
				}
			}
		}
	};
	setInterval(removeNotifs, 100);


}