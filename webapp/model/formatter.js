sap.ui.define([], function () {
    "use strict";

    return {
        statusText: function (sStatus) {
            var resuourceBundle = this.getView().getModel("i18n_test").getResourceBundle();
            switch (sStatus) {
                case "A":
                    return resuourceBundle.getText("invoiceStatusA");
                case "B":
                    return resuourceBundle.getText("invoiceStatusB");
                case "C":
                    return resuourceBundle.getText("invoiceStatusC");
                default:
                    return sStatus;
            }
        }
    }
})