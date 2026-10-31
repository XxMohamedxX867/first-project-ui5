sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/core/Fragment"

], function (Controller, MessageToast, Fragment) {
    "use strict";

   return Controller.extend("sap.ui.demo.walkthrough.controller.HelloPanel", {
       onPress: function () {
           // read msg from i18n model
           var oBundle = this.getView().getModel("i18n_test").getResourceBundle();
           var sRecipient = this.getView().getModel().getProperty("/recipient/name");
           var sMsg = oBundle.getText("HelloMsg", [sRecipient]);

   // show message
   MessageToast.show(sMsg)
       },
       onOpenDialog: function(){

        this.getOwnerComponent().openHelloDialog(); // we can access the component from any controller by using getOwnerComponent() and then we can call the function openHelloDialog() that we created in the component.js file

        // we made this reusable by separating it in Component.js and HelloDialog.js so we can use it in any controller without writing the same code again and again

        //    var oView = this.getView();
        //    // create dialog lazily
        //    if(!this.byId("helloDialog")){ // check if dialog is already created or not
        //        // load asynchronous XML fragment
        //        Fragment.load({
        //            id: oView.getId(),
        //            name: "sap.ui.demo.walkthrough.view.HelloDialog", // i can also make folder for fragements
        //            controller: this // to make sure that the controller is connected to the fragment مش فاهما اوي
        //         }).then(function(oDialog){
        //            // connect dialog to the root view of this component that has the dialog(models, lifecycle)
        //            oView.addDependent(oDialog);
        //            oDialog.open();
        //        })
        //    } else { // if dialog is already created then just open it
        //        this.byId("helloDialog").open();
        //    }
       }
// ,
//        onCloseDialog : function(){
//         this.byId("helloDialog").close();
//        }

 });

});