sap.ui.define([
    "sap/ui/base/ManagedObject",
    "sap/ui/core/Fragment"
], function (ManagedObject, Fragment) {
    "use strict";

    return ManagedObject.extend("sap.ui.demo.walkthrough.controller.HelloDialog", {

        constructor: function (oView) {
            this._oView = oView;
        },

        exit: function () {
            delete this._oView;
        },

        open: function () {
            var oView = this._oView;

            // create dialog lazily
            if (!oView.byId("helloDialog")) { // check if dialog is already created or not

                var oFragmentController = {
                    onCloseDialog: function () {
                        oView.byId("helloDialog").close();
                    }
                };

                // load asynchronous XML fragment
                Fragment.load({
                    id: oView.getId(),
                    name: "sap.ui.demo.walkthrough.view.HelloDialog", // i can also make folder for fragments
                    controller: oFragmentController // to make sure that the controller is connected to the fragment
                }).then(function (oDialog) {

                    // connect dialog to the root view of this component that has the dialog (models, lifecycle)
                    oView.addDependent(oDialog);
                    oDialog.open();

                });

            } else { // if dialog is already created then just open it

                oView.byId("helloDialog").open();

            }
        }

    });
});