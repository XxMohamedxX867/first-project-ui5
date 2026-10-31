sap.ui.define([                //Can consider it as a declaration file that centralize your (root view, Models)
    "sap/ui/core/UIComponent", // When We create models here so we don't need to create it on every controller if we have multiple controllers (like top include)
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
    "./controller/HelloDialog"

], function (UIComponent, JSONModel, ResourceModel,HelloDialog) {
    "use strict"
    return UIComponent.extend("sap.ui.demo.walkthrough.Component", {
        metadata: {
            manifest: "json"

            // we configured this in manifest.json so we don't need to write this here

            // rootView: { // instead of creating XMLView in index.js
            //     "viewName": "sap.ui.demo.walkthrough.view.App",    // like I tell him to start with this view
            //     "type": "XML",
            //     "async": true,
            //     "id": "app"
            // }
        },
        init: function () {
            // call the init function of the parent 
            UIComponent.prototype.init.apply(this, arguments); // there is a standard code of SAPUI5 that should be executed first so we write this line 

            // set data models
            var oData = {
                recipient: {
                    name: "Mohamed"
                }
            };
            var oModel = new JSONModel(oData);
            this.setModel(oModel); // here no need to write getView()


            // we configured this in manifest.json so we don't need to write this here

            // // set i18n model
            // var i18nModel = new ResourceModel({
            //     bundleName: "sap.ui.demo.walkthrough.i18n.i18n",
            //     supportedLocales: [""],
            //     fallbackLocale: ""
            // })
            // // alias name is i18n_test
            // this.setModel(i18nModel, "i18n_test") // means to set model called i18n_test so i can use it in view or even the controller itself 
            
            // set dialog, _ means private variable, we don't want to access it from outside the component
            this._helloDialog = new HelloDialog(this.getRootControl()); // we pass the root view to the dialog so it can be connected to the root view and it can access the models and lifecycle of the root view

        },

        exit: function () {
            this._helloDialog.destroy(); // to destroy the dialog when the component is destroyed
            delete this._helloDialog; // to delete the reference to the dialog when the component is destroyed
        },
        openHelloDialog: function () {
            this._helloDialog.open(); // to open the dialog when the button is pressed
        }

    });
})