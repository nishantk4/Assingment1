sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("Fragments.Fragments_assignment.controller.View1", {
	    OnValuehelp: function (oEvent) {

                                                var oDialog = new sap.ui.xmlfragment("Fragments.Fragments_assignment.fragmentfolder.SelectDialog", this);

                                                this.getView().addDependent(oDialog);

                                                oDialog.bindAggregation("items", {

                                                                path: "city>/city",

                                                                template: new sap.m.StandardListItem({

                                                                                title: "{city>cityname}"

                                                                })

                                                });

                                                oDialog.open();

                                },

                                _handleValueHelpClose: function (evt) {

 

                                                var oSelectedItem = evt.getParameter("selectedItem");

                                                if (oSelectedItem) {

                                                                var productInput = this.byId("input8");

                                                                productInput.setValue(oSelectedItem.getTitle());

                                                }

                                                evt.getSource().getBinding("items").filter([]);

                                }
	});
});