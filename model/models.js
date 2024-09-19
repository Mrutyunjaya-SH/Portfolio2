sap.ui.define([
    "sap/ui/model/json/JSONModel",
    "sap/ui/Device"
], 
    /**
     * provide app-view type models (as in the first "V" in MVVC)
     * 
     * @param {typeof sap.ui.model.json.JSONModel} JSONModel
     * @param {typeof sap.ui.Device} Device
     * 
     * @returns {Function} createDeviceModel() for providing runtime info for the device the UI5 app is running on
     */
    function (JSONModel, Device) {
        "use strict";

        return {
            createDeviceModel: function () {
                var oModel = new JSONModel(Device);
                oModel.setDefaultBindingMode("OneWay");
                return oModel;
        },
        createJSONModel(sFilePath){
            // Steps to create a model
                //Step1 : Create a brand new object
                var oModel = new sap.ui.model.json.JSONModel();
                //Step2 : Load or set data to the model
                // oModel.setData();
                oModel.loadData(sFilePath)
                return oModel;
        }
    };
});