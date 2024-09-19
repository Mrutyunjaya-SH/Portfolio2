sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "por/portfolio/model/models",
    "sap/ui/model/json/JSONModel",
    'sap/m/library',
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Models, JSONModel, mobileLibrary,) {
        "use strict";

        var URLHelper = mobileLibrary.URLHelper;

        return Controller.extend("por.portfolio.controller.ZMain", {
            onInit: function () {
                // this.oModel = Models.createJSONModel("model/images.json");
                this.oModel = Models.createJSONModel("model/mockdata/images.json");
                this.getView().setModel(this.oModel);

                this.oAboutModel = Models.createJSONModel("model/mockdata/about.json");
                this.getView().setModel(this.oAboutModel, "about");
                
                this.cardManifests = new JSONModel();
                this.cardManifests.loadData("model/mockdata/cardsManifest.json");
                this.getView().setModel(this.cardManifests, "cards");
                
            },
           
            // On click of Astronut Avatar - Toggles 2nd page to dark mode
            onAstronut: function(){
                // const image = this.getView().byId('avAst');
                var oAvatar = this.byId("avAst");
                var osubPage2 = this.byId("subPage2");
                var oIndExp1 = this.byId("IndExp1");
                var oIndExp2 = this.byId("IndExp2");
                var oIndExp3 = this.byId("IndExp3");
                
                oAvatar.attachBrowserEvent("click", function () {
                osubPage2.toggleStyleClass("imageInv");
                oIndExp1.toggleStyleClass("IndExp1");
                oIndExp2.toggleStyleClass("IndExp2");
                oIndExp3.toggleStyleClass("IndExp3");
                });                
            },
            // On click of the avatars in 1st page, navigates to respective links
            onLinkedIn: function(){
                URLHelper.redirect("https://in.linkedin.com/in/mrutyunjaya-hugar-162322197", true);
            },
            onGit: function(){
                URLHelper.redirect("https://github.com/Mrutyunjaya-SH", true);
            },
            onInsta: function(){
                URLHelper.redirect("https://www.instagram.com/mjay_mj_/", true);
            },
            onMail: function(){
                URLHelper.triggerEmail("mrutyunjaya911@gmail.com", "Info Request", false, false, false, true);
            },
        });
    });