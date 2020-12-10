/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"kpmg/home/crud_demo/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});