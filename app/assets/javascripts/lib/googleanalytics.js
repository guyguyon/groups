var GoogleAnalytics = {
	isActive: true,

	addEvent: function(elType, eventName, elName, val) {
		if (!this.isActive || typeof _gaq == 'undefined'){
			return;
		}

		_gaq.push(['_trackEvent', elType, eventName, elName, val]);
	},

	addEventObject: function (dataObj){
		this.addEvent(dataObj.elType, dataObj.eventName, dataObj.elName, dataObj.val);
	}
}
