/*global QUnit*/

sap.ui.define([
	"kpmg/home/crud_demo/controller/crud_demo.controller"
], function (Controller) {
	"use strict";

	QUnit.module("crud_demo Controller");

	QUnit.test("I should test the crud_demo controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});