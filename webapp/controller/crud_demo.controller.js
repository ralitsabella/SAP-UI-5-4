sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("kpmg.home.crud_demo.controller.crud_demo", {
		onInit: function () {

		},
		oDataCall: function (oEvent) {

			var myModel = this.getView().getModel("usersModel");

			// CREATE******************
			if (oEvent.oSource.mProperties.text == "Create") {
				var obj = {};
				obj.Id = this.getView().byId("uniqueid").getValue();
				obj.Name = this.getView().byId("nameid").getValue();
				obj.Email = this.getView().byId("emailid").getValue();
				obj.Mobile = this.getView().byId("mobid").getValue();
				myModel.create("/userdataSet", obj, {
					success: function (oData, oResponse) {

						sap.m.MessageToast.show("Record Created Successfully...");
					},
					error: function (err, oResponse) {

						sap.m.MessageToast.show("Error while creating record - ");
					}
				});
			}
			// READ******************
			else if (oEvent.oSource.mProperties.text == "Read") {
				var readurl = "/userdataSet";
				myModel.read(readurl, {
					success: function (oData, oResponse) {
						
					},
					error: function (err) {

					}
				});
			}
			// UPDATE******************
			if (oEvent.oSource.mProperties.text == "Update") {
				var obj2 = {};
				obj2.Id = this.getView().byId("uniqueid").getValue();
				obj2.Name = this.getView().byId("nameid").getValue();
				obj2.Email = this.getView().byId("emailid").getValue();
				obj2.Mobile = this.getView().byId("mobid").getValue();
				var updateurl = "/userdataSet(Id='" + this.getView().byId("uniqueid").getValue() + "')";

				myModel.update(updateurl, obj2, {
					success: function (oData, oResponse) {

						sap.m.MessageToast.show("Record Updated Successfully...");
					},
					error: function (err, oResponse) {

						sap.m.MessageToast.show("Error while updating record - ");
					}
				});
			}
			// DELETE******************
			if (oEvent.oSource.mProperties.text == "Delete") {
				var delurl = "/userdataSet(Id='" + this.getView().byId("uniqueid").getValue() + "')";
				myModel.remove(delurl, {
					success: function (oData, oResponse) {

						sap.m.MessageToast.show("Record Removed Successfully...");
					},
					error: function (err, oResponse) {

						sap.m.MessageToast.show("Error while removing record - ");
					}
				});
			}
		}
	});
});