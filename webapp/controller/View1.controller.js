sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("devsks.Calculator.Calculator.controller.View1", {
		onInit: function () {
			var inputModel = new JSONModel({
				"expression": ""
			});
			this.getView().setModel(inputModel, "inputModel");
			
		},
		clearInput: function () {
			this.getView().getModel("inputModel").setProperty("/expression","");
		},
		editInput : function( ch)
		{
			var expression = this.getView().getModel("inputModel").getProperty("/expression");
			if("+/*-".indexOf(ch)==-1)
			{
				expression+=ch;
			}
			else{
				expression+= (" "+ch+" ");
			}
			this.getView().getModel("inputModel").setProperty("/expression",expression);
		},
		validCompute : function()
		{
			var expression = this.getView().getModel("inputModel").getProperty("/expression");
			var expList = expression.split(" ");
			if(isValid(expList) == true)
			{
				
			}
			else
			{
				alert("Invalid Expression. Please Correct Manually");
			}
			
		},
		isValid : function(expList)
		{
			for(var i = 1; i< expList.length ;++i)
			{
				if( ("+-/*".indexOf(expList[i]) != -1) && ("+-/*".indexOf(expList[i]) != -1))
					return false;
			}
			return true;
		}
	});
});