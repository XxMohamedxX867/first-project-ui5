sap.ui.define([                //Can consider it as a declaration file that centralize your (root view, Models)
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"

], function (UIComponent, JSONModel, ResourceModel) {
    "use strict"
    return UIComponent.extend("sap.ui.demo.walkthrough.Component", {
        metadata: {
            rootView: { // instead of creating XMLView in index.js
                "viewName": "sap.ui.demo.walkthrough.view.App",    // like I tell him to start with this view
                "type": "XML",
                "async": true,
                "id": "app"
            }
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

            // set i18n model
            var i18nModel = new ResourceModel({
                bundleName: "sap.ui.demo.walkthrough.i18n.i18n",
                supportedLocales: [""],
                fallbackLocale: ""
            })
            // alias name is i18n_test
            this.setModel(i18nModel, "i18n_test") // means to set model called i18n_test so i can use it in view or even the controller itself 

        }
    });
})