
sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/base/strings/formatMessage"
], function (Controller, formatMessage) {
	"use strict";

	return Controller.extend("por.portfolio.controller.ZMain", {
		formatMessage: formatMessage,

		onNavButtonPressed: function () {
			this.getOwnerComponent().getRouter().navTo("RouteZMain");
		},
        getValuesDelta: function(fFirstValue, fSecondValue) {
            return fSecondValue - fFirstValue;
        },
        onNodePressed: function(oEvent) {
            var sItemTitle = oEvent.getParameters().getTitle();
            MessageToast.show(this.getResourceBundle().getText("processFlowNodeClickedMessage", [sItemTitle]));
       },

       getResourceBundle: function() {
           return this.getOwnerComponent().getModel("i18n").getResourceBundle();
       }
	});
});
