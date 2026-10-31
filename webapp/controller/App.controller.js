sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
], function (Controller, MessageToast, JSONModel, ResourceModel) {
    "use strict";

    return Controller.extend("sap.ui.demo.walkthrough.controller.App", {

        // instead of writing init here we can write it in component file
        
        // onInit: function () {
        //     var oData = {
        //         recipient: {
        //             name: "Mohamed"
        //         }
        //     };
        //     var oModel = new JSONModel(oData);
        //     this.getView().setModel(oModel);
            
        //     // Set i18n model on view
        //     var i18nModel = new ResourceModel({
        //         bundleName: "sap.ui.demo.walkthrough.i18n.i18n",
        //         supportedLocales: [""],
        //         fallbackLocale: ""
        //     })
        //                 // alias name is i18n_test
        //     this.getView().setModel(i18nModel, "i18n_test") // means to set model called i18n_test so i can use it in view or even the controller itself  
        // },

        onPress: function () {
            // read msg from i18n model
            var oBundle = this.getView().getModel("i18n_test").getResourceBundle();
            var sRecipient = this.getView().getModel().getProperty("/recipient/name")
            var sMsg = oBundle.getText("HelloMsg", [sRecipient]);

            // show message
            MessageToast.show(sMsg)
        }

    });

    alert("MAAAAAZEN");
});