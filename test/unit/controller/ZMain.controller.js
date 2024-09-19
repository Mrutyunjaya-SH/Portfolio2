/*global QUnit*/

sap.ui.define([
	"por/portfolio/controller/ZMain.controller"
], function (Controller) {
	"use strict";

	QUnit.module("ZMain Controller");

	QUnit.test("I should test the ZMain controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
