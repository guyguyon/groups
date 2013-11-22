//Crossrider utilites
var CrossriderUtils = {
	countries:{"A1":"Anonymous Proxy", "A2":"Satellite Provider", "O1":"Other Country", "AD":"Andorra", "AE":"United Arab Emirates", "AF":"Afghanistan", "AG":"Antigua and Barbuda", "AI":"Anguilla", "AL":"Albania", "AM":"Armenia", "AO":"Angola", "AP":"Asia/Pacific Region", "AQ":"Antarctica", "AR":"Argentina", "AS":"American Samoa", "AT":"Austria", "AU":"Australia", "AW":"Aruba", "AX":"Aland Islands", "AZ":"Azerbaijan", "BA":"Bosnia and Herzegovina", "BB":"Barbados", "BD":"Bangladesh", "BE":"Belgium", "BF":"Burkina Faso", "BG":"Bulgaria", "BH":"Bahrain", "BI":"Burundi", "BJ":"Benin", "BL":"Saint Bartelemey", "BM":"Bermuda", "BN":"Brunei Darussalam", "BO":"Bolivia", "BQ":"Bonaire, Saint Eustatius and Saba", "BR":"Brazil", "BS":"Bahamas", "BT":"Bhutan", "BV":"Bouvet Island", "BW":"Botswana", "BY":"Belarus", "BZ":"Belize", "CA":"Canada", "CC":"Cocos (Keeling) Islands", "CD":"Congo, The Democratic Republic of the", "CF":"Central African Republic", "CG":"Congo", "CH":"Switzerland", "CI":"Cote d'Ivoire", "CK":"Cook Islands", "CL":"Chile", "CM":"Cameroon", "CN":"China", "CO":"Colombia", "CR":"Costa Rica", "CU":"Cuba", "CV":"Cape Verde", "CW":"Curacao", "CX":"Christmas Island", "CY":"Cyprus", "CZ":"Czech Republic", "DE":"Germany", "DJ":"Djibouti", "DK":"Denmark", "DM":"Dominica", "DO":"Dominican Republic", "DZ":"Algeria", "EC":"Ecuador", "EE":"Estonia", "EG":"Egypt", "EH":"Western Sahara", "ER":"Eritrea", "ES":"Spain", "ET":"Ethiopia", "EU":"Europe", "FI":"Finland", "FJ":"Fiji", "FK":"Falkland Islands (Malvinas)", "FM":"Micronesia, Federated States of", "FO":"Faroe Islands", "FR":"France", "GA":"Gabon", "GB":"United Kingdom", "GD":"Grenada", "GE":"Georgia", "GF":"French Guiana", "GG":"Guernsey", "GH":"Ghana", "GI":"Gibraltar", "GL":"Greenland", "GM":"Gambia", "GN":"Guinea", "GP":"Guadeloupe", "GQ":"Equatorial Guinea", "GR":"Greece", "GS":"South Georgia and the South Sandwich Islands", "GT":"Guatemala", "GU":"Guam", "GW":"Guinea-Bissau", "GY":"Guyana", "HK":"Hong Kong", "HM":"Heard Island and McDonald Islands", "HN":"Honduras", "HR":"Croatia", "HT":"Haiti", "HU":"Hungary", "ID":"Indonesia", "IE":"Ireland", "IL":"Israel", "IM":"Isle of Man", "IN":"India", "IO":"British Indian Ocean Territory", "IQ":"Iraq", "IR":"Iran, Islamic Republic of", "IS":"Iceland", "IT":"Italy", "JE":"Jersey", "JM":"Jamaica", "JO":"Jordan", "JP":"Japan", "KE":"Kenya", "KG":"Kyrgyzstan", "KH":"Cambodia", "KI":"Kiribati", "KM":"Comoros", "KN":"Saint Kitts and Nevis", "KP":"Korea, Democratic People's Republic of", "KR":"Korea, Republic of", "KW":"Kuwait", "KY":"Cayman Islands", "KZ":"Kazakhstan", "LA":"Lao People's Democratic Republic", "LB":"Lebanon", "LC":"Saint Lucia", "LI":"Liechtenstein", "LK":"Sri Lanka", "LR":"Liberia", "LS":"Lesotho", "LT":"Lithuania", "LU":"Luxembourg", "LV":"Latvia", "LY":"Libyan Arab Jamahiriya", "MA":"Morocco", "MC":"Monaco", "MD":"Moldova, Republic of", "ME":"Montenegro", "MF":"Saint Martin", "MG":"Madagascar", "MH":"Marshall Islands", "MK":"Macedonia", "ML":"Mali", "MM":"Myanmar", "MN":"Mongolia", "MO":"Macao", "MP":"Northern Mariana Islands", "MQ":"Martinique", "MR":"Mauritania", "MS":"Montserrat", "MT":"Malta", "MU":"Mauritius", "MV":"Maldives", "MW":"Malawi", "MX":"Mexico", "MY":"Malaysia", "MZ":"Mozambique", "NA":"Namibia", "NC":"New Caledonia", "NE":"Niger", "NF":"Norfolk Island", "NG":"Nigeria", "NI":"Nicaragua", "NL":"Netherlands", "NO":"Norway", "NP":"Nepal", "NR":"Nauru", "NU":"Niue", "NZ":"New Zealand", "OM":"Oman", "PA":"Panama", "PE":"Peru", "PF":"French Polynesia", "PG":"Papua New Guinea", "PH":"Philippines", "PK":"Pakistan", "PL":"Poland", "PM":"Saint Pierre and Miquelon", "PN":"Pitcairn", "PR":"Puerto Rico", "PS":"Palestinian Territory", "PT":"Portugal", "PW":"Palau", "PY":"Paraguay", "QA":"Qatar", "RE":"Reunion", "RO":"Romania", "RS":"Serbia", "RU":"Russian Federation", "RW":"Rwanda", "SA":"Saudi Arabia", "SB":"Solomon Islands", "SC":"Seychelles", "SD":"Sudan", "SE":"Sweden", "SG":"Singapore", "SH":"Saint Helena", "SI":"Slovenia", "SJ":"Svalbard and Jan Mayen", "SK":"Slovakia", "SL":"Sierra Leone", "SM":"San Marino", "SN":"Senegal", "SO":"Somalia", "SR":"Suriname", "SS":"South Sudan", "ST":"Sao Tome and Principe", "SV":"El Salvador", "SX":"Sint Maarten", "SY":"Syrian Arab Republic", "SZ":"Swaziland", "TC":"Turks and Caicos Islands", "TD":"Chad", "TF":"French Southern Territories", "TG":"Togo", "TH":"Thailand", "TJ":"Tajikistan", "TK":"Tokelau", "TL":"Timor-Leste", "TM":"Turkmenistan", "TN":"Tunisia", "TO":"Tonga", "TR":"Turkey", "TT":"Trinidad and Tobago", "TV":"Tuvalu", "TW":"Taiwan", "TZ":"Tanzania, United Republic of", "UA":"Ukraine", "UG":"Uganda", "UM":"United States Minor Outlying Islands", "US":"United States", "UY":"Uruguay", "UZ":"Uzbekistan", "VA":"Holy See (Vatican City State)", "VC":"Saint Vincent and the Grenadines", "VE":"Venezuela", "VG":"Virgin Islands, British", "VI":"Virgin Islands, U.S.", "VN":"Vietnam", "VU":"Vanuatu", "WF":"Wallis and Futuna", "WS":"Samoa", "YE":"Yemen", "YT":"Mayotte", "ZA":"South Africa", "ZM":"Zambia", "ZW":"Zimbabwe"},
	browsers:{IE:'Internet Explorer', FF:'Firefox', CH:'Chrome'},

	showMessage:function (type, cfg) {
		switch (type) {
			case 'dialog':
				var html = $(cfg.html), dialog;

				dialog = html
					.removeClass('hidden')
					.on('dialogopen', function () {
						if (cfg.onOpen) cfg.onOpen.call(this);

						$(document).trigger('crDialogOpen');
					})
					.on('dialogclose', function () {
						if (!cfg.preventDestroy) {
							$(this).dialog('destroy');

							html.off('dialogopen dialogclose');
						}
						if (cfg.destroyContent) html.remove();
						if (cfg.onClose) cfg.onClose.call(this);

						$(document).trigger('crDialogClose');
					})
					.dialog({
						dialogClass:'generic-dialog' + (cfg.cssClass !== undefined ? ' ' + cfg.cssClass : ''),
						autoOpen:cfg.autoOpen !== undefined ? cfg.autoOpen : false,
						modal:true,
						draggable:false,
						resizable:false,
						title:cfg.title || '',
						width:cfg.width || undefined,
						height:cfg.height || undefined,
						minHeight:cfg.minHeight || undefined,
						buttons:cfg.buttons || undefined,
						show:cfg.showEffect || undefined
					});

				if (cfg.hideClose) dialog.dialog('widget').find(' > div.ui-dialog-titlebar').addClass('hidden');
				if (cfg.closePrevious) $('div.ui-dialog-content').not(html).dialog('close');

				dialog.dialog('widget').find('div.ui-dialog-buttonset button').each(function (i, btn) {
					$(btn).addClass('dialog-button-' + (i + 1));
				});

				//add close button everywhere on popup
				dialog.dialog('widget').find('.dialog-close-button').on('click', function () {
					dialog.dialog('close');
				});

				//add submit button everywhere on popup
				dialog.dialog('widget').find('.dialog-submit-button').on('click', function () {
					if (cfg.onSubmit) {
						cfg.onSubmit();
					}
				});

				//if screen is too small prevent cut of X button
				if (dialog.dialog('widget').offset().top < 15) {
					dialog.dialog('widget').css('top', 15);
				}

				$('.ui-widget-overlay').width($('.ui-widget-overlay').width() - 1);

				return dialog;
				break;

			//{title:text / null, body:html, buttons[{title:text, callback:fn}]}
			case 'message':

				var messageBox = $('<div class="crossrider-fade-message"><div class="message_box_title"></div><div class="message_box_content"></div></div>').addClass('crossrider-fade-message').appendTo('body'),
					doc = $(document);

				messageBox.find('div.message_box_title').html(cfg.title || '')
				messageBox.find('div.message_box_content').html(cfg.subTitle || '');

				var delay = 2000;

				if (cfg.delay){
					delay = cfg.delay;
				}

				messageBox.removeClass('hidden').stop().css({
					'margin-left': - messageBox.outerWidth() / 2,
					'top':-55
				}).animate({ top: '5px'}, 600, 'easeOutBack', function() {
					$(this).delay(delay).animate({ 'top': '-55px' }, 600, 'easeInBack', function() { $(this).remove(); });
				});


				break;

			//{title:String, subtitle:String, callback:Function, buttonText:String, warning:Boolean, width:Int}
			case 'alert':
				var alertBox = $('<div class="generic-alert"><div class="alert-box-content"></div></div>'),
					click = function () {
						CrossriderUtils.isModal = false;
						
						$(alertBox).dialog('destroy');
						$('body').off('keydown', keypress);

						if (cfg.callback) cfg.callback();
					}, keypress = function (e) {
						if (e.which == 13) setTimeout(click, 200);

						e.preventDefault();
					};

				$('body').on('keydown', keypress);
				
				alertBox.dialog({
					dialogClass:'generic-dialog' + (cfg.cssClass !== undefined ? ' ' + cfg.cssClass : ''),
					closeOnEscape: cfg.closeOnEscape === true,
					modal:true,
					resizable:false,
					zIndex:10000,
					width:cfg.width || 400,
					minHeight:0,
					title:cfg.title,
					beforeClose: function(event, ui) {
						$('body').off('keydown', keypress);
					},
					buttons:[
						{
							text:cfg.buttonText || 'Ok',
							click:click,
							class: 'dialog-button-2 crossrider-alert-button'
						}
					]
				});

				alertBox.dialog('widget').find('div.alert-box-content').html(cfg.subTitle || '');
				alertBox.dialog('widget').find('div.alert-box-content').addClass(cfg.warning ? 'alert-box-warning' : 'alert_box_title_no_background');
				alertBox.dialog('widget').find('div.ui-dialog-buttonset button:first').addClass(cfg.buttonPositive ? 'crossrider-alert-positive' : 'crossrider-alert-negative');

				CrossriderUtils.isModal = true;

				return alertBox;
				break;

			//{title:String, subtitle:String, yesCallback:Function, noCallback:Function, buttonYesText:String, buttonNoText:String, warning:Boolean, width:Int}
			case 'confirm':
				var confirmBox = $('<div class="generic-confirm"><div class="confirm-box-content"></div></div>'),
					yesClick = function () {
						CrossriderUtils.isModal = false;

						if (!cfg.preventAutoClose) $(confirmBox).dialog('destroy');
						
						$('body').off('keydown', keypress);

						if (cfg.yesCallback) cfg.yesCallback();
					}, noClick = function () {
						CrossriderUtils.isModal = false;

						if (!cfg.preventAutoClose) $(confirmBox).dialog('destroy');

						$('body').off('keydown', keypress);

						if (cfg.noCallback) cfg.noCallback();
					}, keypress = function (e) {
						if (e.which == 13 && !cfg.preventEnter) setTimeout(yesClick, 200);

						e.preventDefault();
					}

				$('body').on('keydown', keypress);

				confirmBox.dialog({
					dialogClass:'generic-dialog' + (cfg.cssClass !== undefined ? ' ' + cfg.cssClass : ''),
					closeOnEscape:false,
					modal:true,
					resizable:false,
					zIndex:10000,
					width:cfg.width || 400,
					minHeight:cfg.minHeight || 0,
					title:cfg.title,
					buttons:[
						{
							text:cfg.buttonNoText || 'Cancel',
							click:noClick,
							class: 'dialog-button-1 crossrider-confirm-no'
						},
						{
							text:cfg.buttonYesText || 'Ok',
							click:yesClick,
							class: 'dialog-button-2 crossrider-confirm-yes' + (cfg.buttonWarning ? ' warning' : '')
						}
					]
				});

				confirmBox.dialog('widget').find('div.confirm-box-content').html(cfg.subTitle || '');
//				confirmBox.dialog('widget').find('div.ui-dialog-buttonset button:first').addClass('crossrider-confirm-yes' + (cfg.buttonWarning ? ' warning' : ''));
//				confirmBox.dialog('widget').find('div.ui-dialog-buttonset button:last').addClass('crossrider-confirm-no');
				confirmBox.dialog('widget').find('div.confirm_box_title')[cfg.warning === undefined || cfg.warning === true ? 'removeClass' : 'addClass']('confirm_box_title_no_background');

				CrossriderUtils.isModal = true;

				return confirmBox;
				break;
		}
	},

	getLocalStorage:function (key, def) {
		var item = localStorage.getItem(key);

		return item ? JSON.parse(item) : {};
	},

	setLocalStorage:function (key, value) {
		localStorage.setItem(key, JSON.stringify(value));
	},

	showValidationTipsy:function (cfg) {
		var actionType = cfg.field.is('select, .hasDatepicker') ? 'change' : 'keypress',
			hide = function (e) {
				this.hideValidationTipsy(cfg.display);
			}.bind(this);

		cfg.field
			.off(actionType, hide)
			.on(actionType, hide);

		cfg.display.tipsy({className:'crvalidate-tipsy-error', fade:true, relativeToInput:true, disableFadeOut:true, offset:3, gravity:'sw', trigger:'manual', pinToLeft:true, title:cfg.msg})
			.tipsy('show')
			.tipsy('tip');
	},

	hideValidationTipsy:function (field) {
		$(field).tipsy('hide');
	},

	getCountriesArray:function () {
		var arr = [{id:'*', label:'All'}];

		$.each(this.countries, function (id, name) {
			arr.push({id:id, label:name});
		});

		return arr;
	},

	getCountryKeyByName:function (name) {
		var countryCode;

		Object.keys(this.countries).forEach(function (key) {
			if (this.countries[key] == name) {
				countryCode = key;
			}
		}.bind(this));

		return countryCode || 'N/A';
	},

	getBrowsersArray:function () {
		var arr = [{id:'*', label:'All'}];

		$.each(this.browsers, function (id, name) {
			arr.push({id:id, label:name});
		});

		return arr;
	},

	getBroeserKeyByName:function (name) {
		var browserCode;

		Object.keys(this.browsers).forEach(function (key) {
			if (this.browsers[key] == name) {
				browserCode = key;
			}
		}.bind(this));

		return browserCode || 'N/A';
	},

	parseDateToServer:function (date) {
		return (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear() + ' ' + date.getHours() + ':' + date.getMinutes();
	},

	parseServerDate:function (str) {
		var dateParts = str.split(' ')[0].split('/'),
			hoursParts = (str.split(' ')[1] ? str.split(' ')[1] : '00:00').split(':');

		return new Date(dateParts[2], (dateParts[0] * 1 - 1), dateParts[1], hoursParts[0], hoursParts[1]);
	},

	getDropdownValuelist:function (sourceList, idFieldName, valueFieldName) {

		var values = [];

		sourceList.forEach(function (user) {
			var val = {};
			val.id = user[idFieldName];
			val.label = user[valueFieldName];
			values.push(val);
		});

		return values;
	},

	getMenuItems:function (sourceItems){
		var mi = new MBOS.Collections.MenuItems();

		sourceItems.forEach(function(item){
			mi.add(new MBOS.Models.MenuItemModel(item));
		});

		return mi;
	}
}


//=======================================================================
//================== scroll to view - start =============================
//=======================================================================
$.fn.scrollToView = function () {
	return this.each(function(i, el) {
		$('body').animate({
			scrollTop:$(el).offset().top
		}, 500);
	});
}

//=======================================================================
//================== scroll to view - end =============================
//=======================================================================


//=======================================================================
//========= enable / disable buttons jQuery plygin - start ==============
//=======================================================================

//=======================================================================
//========= enable / disable buttons jQuery plygin - start ==============
//=======================================================================
$.fn.waitingStatus = function(data) {
	var config = {
		position:'center',
		spinner:true,
		spinnerOffset:{
			left:'-15',
			right:'15',
			center:'0'
		}
	};
	
	return this.each(function(i, btn) {
		var btn = $(btn), css = {}, wrapper, spinner, cfg;
		
		if (data === false) {
			btn.removeClass('disabled').prop('disabled', false);

			switch (btn.prop('nodeName').toLowerCase()) {
				case 'div':
				case 'span':
				case 'button':
					btn.find('.spinner-generic').remove();
					break;

				default:
					if (btn.parent().is('.spinner-wrapper')) {
						btn.parent().find('.spinner-generic').remove();
						btn.unwrap();
					}
					break;
			}
		}
		else {
			cfg = $.extend({}, config, data);

			btn.addClass('disabled').prop('disabled', true);

			if (cfg.spinner) {
				switch (btn.prop('nodeName').toLowerCase()) {
					case 'div':
					case 'span':
					case 'button':
						$('<div class="spinner-generic" />').appendTo(btn).position({
							of:btn,
							my:'center',
							at:cfg.position + '+' + cfg.spinnerOffset[cfg.position] + ' center'
						});
						break;

					default:
						wrapper = btn.wrap('<span class="spinner-wrapper" />').parent().append('<div class="spinner-generic" />');
						spinner = wrapper.find('.spinner-generic').position({
							of:btn,
							my:'center',
							at:cfg.position + '+' + cfg.spinnerOffset[cfg.position] + ' center'
						});

						wrapper.css(css);
						break;
				}
			}
		}
	});
};
//=======================================================================
//========== enable / disable buttons jQuery plugin - end ===============
//=======================================================================



//=======================================================================
//========== serialize form to json jQuery plugin - start ===============
//=======================================================================
(function($){
    $.fn.serializeObject = function(){

        var self = this,
            json = {},
            push_counters = {},
            patterns = {
                "validate": /^[a-zA-Z][a-zA-Z0-9_]*(?:\[(?:\d*|[a-zA-Z0-9_]+)\])*$/,
                "key":      /[a-zA-Z0-9_]+|(?=\[\])/g,
                "push":     /^$/,
                "fixed":    /^\d+$/,
                "named":    /^[a-zA-Z0-9_]+$/
            };


        this.build = function(base, key, value){
            base[key] = value;
            return base;
        };

        this.push_counter = function(key){
            if(push_counters[key] === undefined){
                push_counters[key] = 0;
            }
            return push_counters[key]++;
        };

        $.each($(this).serializeArray(), function(){

            // skip invalid keys
            if(!patterns.validate.test(this.name)){
                return;
            }

            var k,
                keys = this.name.match(patterns.key),
                merge = this.value,
                reverse_key = this.name;

            while((k = keys.pop()) !== undefined){

                // adjust reverse_key
                reverse_key = reverse_key.replace(new RegExp("\\[" + k + "\\]$"), '');

                // push
                if(k.match(patterns.push)){
                    merge = self.build([], self.push_counter(reverse_key), merge);
                }

                // fixed
                else if(k.match(patterns.fixed)){
                    merge = self.build([], k, merge);
                }

                // named
                else if(k.match(patterns.named)){
                    merge = self.build({}, k, merge);
                }
            }

            json = $.extend(true, json, merge);
        });

        return json;
    };
})(jQuery);
//=======================================================================
//=========== serialize form to json jQuery plugin - end ================
//=======================================================================


//=======================================================================
//============= Copy to clipboard jQuery plugin - start =================
//=======================================================================
$.fn.copyClipboard = function(callback, cssClass) {
	var config = {
		path:{
			clipboard:'/new/javascripts/clipboard/zero-clipboard10.swf'
		},
		wrapperIdSuffix:'_wrapper'
	};
	
	return this.each(function(i, btn) {
		var btn = $(btn), id = btn.attr('id'), wrapperId = id + config.wrapperIdSuffix , wrapper, clipboard;

		if (!btn.is('.zero-clipboard')) {
			btn.addClass('zero-clipboard').css('z-index', 1000000);

			wrapper = btn.wrap('<span id="' + wrapperId + '" class="copyclipboard-wrapper ' + (cssClass || '') + '" />').parent();
			
			ZeroClipboard.setMoviePath(config.path.clipboard);
		
			clipboard = new ZeroClipboard.Client();
			clipboard.setHandCursor(true);

			clipboard.addEventListener('mouseDown', function(client) {
				clipboard.setText(callback());

				btn.addClass('click');

				setTimeout(function () {
					btn.removeClass('click');
				}, 400);
			});

			clipboard.glue(id, wrapperId);
		}
	});
};
//=======================================================================
//============== Copy to clipboard class wrapper - end ==================
//=======================================================================


//=======================================================================
//=================== SWFUpload class wrapper - start ===================
//=======================================================================
CrossriderUtils.Upload = function (cfg) {
	var config = {
		path:{
			flash10:'/new/javascripts/swfupload/swfupload.swf',
			flash9:'/new/javascripts/swfupload/swfupload_fp9.swf'
		},
		fileSizeLimit:'5 MB',
		fileUploadLimit:1,
		fileTypes:'*.gif;*.jpg;*.jpeg;*.png;',
		fileTypesDescription:'GIF, JPG, PNG',
		autoStartUpload: true
	}, upload, uploadingInProgress;
	
	upload = new (Class.extend({
		init:function (cfg) {
			this.flashLoad = false;
			this.cfg = $.extend({}, config, cfg);
			this.fail = 0; //num of files being failed to queue
			this.filesProgress = {};
			this.filesUploaded = [];
			this.fileQueueErrors = [];
			
			initConfig.call(this);
			initMarkup.call(this);
			initUpload.call(this);
			initEvents.call(this);
		},

		destroy:function () {
			destroy.call(this);
		},

		setOpenDialog:function () {
			buttonState.call(this, 'inactive');
		},

		setCloseDialog:function () {
			if (this.cfg.error) $(this.cfg.error).html('');

			removeSWF.call(this);
		},

		setDisabled:function (flag) {
			buttonState.call(this, flag ? 'inactive' : 'active');
		},

		startFileUpload:function () {
			this.swfupload.startUpload();
		},

		getSelectedFileName:function() {
			retVal = "";
			if(this.swfupload.getFile(0)) {
				retVal = this.swfupload.getFile(0).name;
			}
			return retVal;
		},

		addPostParam:function (key, value) {

			this.swfupload.addPostParam(key, value);
		}
	}))(cfg);

	this.events = upload.events;
	this.destroy = $.proxy(upload.destroy, upload);
	this.setOpenDialog = $.proxy(upload.setOpenDialog, upload);
	this.setCloseDialog = $.proxy(upload.setCloseDialog, upload);
	this.setDisabled = $.proxy(upload.setDisabled, upload);
	this.startFileUpload = $.proxy(upload.startFileUpload, upload);
	this.getSelectedFileName = $.proxy(upload.getSelectedFileName, upload);
	this.addPostParam = $.proxy(upload.addPostParam, upload);

	function initEvents() {
		if (this.cfg.cancelButton) $(this.cfg.cancelButton).on('click', $.proxy(cancelUpload, this));
	}

	function initConfig () {
		if (!this.cfg.name) throw 'Upload Error: name is missing in config';
		if (!this.cfg.url && !this.cfg.urlCallback) throw 'Upload Error: both url and urlCallback are missing in config';
		if (!this.cfg.appSessionId && this.cfg.mode !== 'readonly') throw 'Upload Error: appSessionId is missing in config';
		if (!this.cfg.uploadButton) throw 'Upload Error: uploadButton is missing in config';
	}

	function initMarkup() {
		var button = $(this.cfg.uploadButton),
			wrapper = button.wrap('<span class="swfupload-wrapper" />').parent(),
			placeholder = wrapper.append('<div class="swfupload-button-wrapper" />').find(' > div:last');
		
		this.cfg.els = {
			button:button,
			wrapper:wrapper,
			placeholder:placeholder
		};
	}

	function initPosition() {
		var button = this.cfg.els.button,
			wrapper = this.cfg.els.wrapper,
			swf = wrapper.find('object.swfupload');

		swf.css({width:button.outerWidth(), height:button.outerHeight()});
		buttonState.call(this, 'active');

		this.cfg.els.swf = swf;
	}

	function initUpload() {
		this.swfupload = new SWFUpload(getSWFConfig.call(this));

		if (!this.cfg.dialog) buttonState.call(this, 'inactive');
	}

	function getSWFConfig() {
		//config
		$.extend(this.cfg, {
			file_post_name:'fileData',
			post_params:{'sessionId':this.cfg.appSessionId},

			flash_url:this.cfg.path.flash10,
			flash9_url:this.cfg.path.flash9,

			file_size_limit:this.cfg.fileSizeLimit,
			file_upload_limit:this.cfg.fileUploadLimit,
			file_types:this.cfg.fileTypes,
			file_types_description:this.cfg.fileTypesDescription,

			button_placeholder:this.cfg.els.placeholder.get(0),
			button_action:SWFUpload.BUTTON_ACTION[this.cfg.fileUploadLimit > 1 ? 'SELECT_FILES' : 'SELECT_FILE'],
			button_window_mode:SWFUpload.WINDOW_MODE.TRANSPARENT,
			button_cursor:SWFUpload.CURSOR.HAND,

			prevent_swf_caching:true,

			debug:false,

			custom_settings:{
				session:this
			}
		});

		//events
		$.extend(this.cfg, {
			mouse_over_handler:mouseOver,
			mouse_out_handler:mouseOut,
			swfupload_preload_handler:swfuploadPreload,
			swfupload_load_failed_handler:swfuploadLoadFailed,
			swfupload_loaded_handler:swfuploadLoaded,
			file_dialog_start_handler:fileDialogStart,
			file_dialog_complete_handler:fileDialogComplete,
			file_queue_error_handler:fileQueueError,
			file_queued_handler:fileQueued,
			upload_start_handler:uploadStart,
			upload_progress_handler:uploadProgress,
			upload_error_handler:uploadError,
			upload_success_handler:uploadSuccess,
			upload_complete_handler:uploadComplete
		});

		return this.cfg;
	}

	// *************************************************************//
	// ******** upload handler functions - start *******************//
	// *************************************************************//
	function mouseOver() {
		var upload = this.customSettings.session;

		if (!uploadingInProgress && isButtonActive.call(upload)) buttonState.call(upload, 'hover');
	}

	function mouseOut() {
		var upload = this.customSettings.session;

		if (!uploadingInProgress && isButtonActive.call(upload)) buttonState.call(upload, 'normal');
	}

	function swfuploadPreload() {
		var upload = this.customSettings.session;

		if (!this.support.loading) showError.call(upload, {err:'swfupload_error'});
	}

	function swfuploadLoadFailed() {
		var upload = this.customSettings.session;

		showError.call(upload, {err:'swfupload_error'});

		upload.events.fire('swfLoadFail');
	}

	function swfuploadLoaded() {
		var upload = this.customSettings.session;

		initPosition.call(upload);

		upload.flashLoad = true;
		upload.events.fire('swfLoaded');
	}

	function fileDialogStart() {
	}

	function fileDialogComplete(numFilesQueued) {
		var upload = this.customSettings.session,
			cfg = upload.cfg;

		if (numFilesQueued && numFilesQueued <= cfg.file_upload_limit) {
			this.setUploadURL(cfg.url || cfg.urlCallback());
		
			if (cfg.autoStartUpload) {
				this.startUpload();
			}

			if (upload.fileQueueErrors.length) showError.call(upload, {err:'upload_queue_error'});
			if (numFilesQueued == upload.fail) reset.call(upload);
		}
		upload.events.fire('fileDialogComplete');
	}

	function fileQueued(file) {
		var upload = this.customSettings.session,
			progress;

		if (upload.cfg.progress) {
			progress = new FileProgress(file, upload.cfg.progress);

			progress.setStatus('pending');
			progress.toggleCancel(true, this);

			upload.filesProgress[file.id] = progress;
		}
	}

	function fileQueueError(file, errorCode) {
		var upload = this.customSettings.session;

		if (errorCode == SWFUpload.QUEUE_ERROR.QUEUE_LIMIT_EXCEEDED) showError.call(upload, {err:'upload_queue_limit_exceeded'});
		else if (errorCode == SWFUpload.QUEUE_ERROR.FILE_EXCEEDS_SIZE_LIMIT) upload.fileQueueErrors.push(file.name);
		else if (errorCode == SWFUpload.QUEUE_ERROR.ZERO_BYTE_FILE) showError.call(upload, {err:'zero_file_size', file:file});
		else if (errorCode == SWFUpload.QUEUE_ERROR.INVALID_FILETYPE) showError.call(upload, {err:'upload_invalid_file', file:file});

		upload.fail ++;
	}

	function uploadStart(file) {
		var upload = this.customSettings.session,
			progress;
		
		if (upload.cfg.progress) {
			progress = upload.filesProgress[file.id];

			progress.setStatus('uploading');
			progress.toggleCancel(true, this);
		}

		if (!uploadingInProgress) {
			uploadingInProgress = true;

			this.setButtonDisabled(true);
			this.setButtonCursor(SWFUpload.CURSOR.ARROW);

			buttonState.call(upload, 'disabled');

			if (upload.cfg.error) hideError.call(upload);

			upload.events.fire('uploadStart');
		}
	}
	
	function uploadProgress(file, bytesLoaded, bytesTotal) {
		var upload = this.customSettings.session,
			percent, progress;

		if (upload.cfg.progress) {
			progress = upload.filesProgress[file.id];
			percent = Math.ceil((bytesLoaded / bytesTotal) * 100),

			progress.setProgress(percent);
			progress.setStatus('uploading');
		}
	}

	function uploadSuccess(file, serverData) {
		var upload = this.customSettings.session,
			serverData = $.parseJSON(serverData),
			progress;
		
		if (upload.cfg.progress) {
			progress = upload.filesProgress[file.id];

			progress.setComplete();
			progress.setStatus('complete');
			progress.toggleCancel(false);
		}

		if (serverData.response === true) upload.filesUploaded.push({file:file, response:serverData});
		else uploadError.call(this, file, -200, serverData.message);
	}

	function uploadComplete(file) {
		var upload = this.customSettings.session;

		if (this.getStats().files_queued === 0) {
			this.setButtonDisabled(false);
			this.setButtonCursor(SWFUpload.CURSOR.HAND);
			
			buttonState.call(upload, 'enabled');
			reset.call(upload);

			uploadingInProgress = false;

			setTimeout(function () {
				upload.events.fire('uploadComplete', {name:upload.cfg.name, files:upload.filesUploaded});
			}, 1); //fix swf queue.upload bug
		}
	}

	function cancelUpload() {
		var upload = this;
		
		if (upload.flashLoad) {
			setTimeout(function () {
				reset.call(upload);
				upload.events.fire('uploadCancel');
			}, 1); //fix swf queue.upload bug
		}
		else {
			upload.events.fire('uploadCancel');
		}
	}

	function uploadError(file, errorCode, message) {

		var upload = this.customSettings.session,
			progress, message;

		if (upload.cfg.preventDefaultErrors)	{
			upload.filesUploaded.push({file:file, response:message});
			return;
		}
		switch (errorCode) {
			case SWFUpload.UPLOAD_ERROR.HTTP_ERROR:
			case SWFUpload.UPLOAD_ERROR.UPLOAD_FAILED:
			case SWFUpload.UPLOAD_ERROR.IO_ERROR:
			case SWFUpload.UPLOAD_ERROR.SECURITY_ERROR:
			case SWFUpload.UPLOAD_ERROR.UPLOAD_LIMIT_EXCEEDED:
			case SWFUpload.UPLOAD_ERROR.FILE_VALIDATION_FAILED:
			case SWFUpload.UPLOAD_ERROR.UPLOAD_STOPPED:
				message = 'Failure uploading file';
				break;

			case SWFUpload.UPLOAD_ERROR.FILE_CANCELLED:
				message = 'Canceled.';
				break;

			default:
				message = 'Failure uploading file';
				break;
		}

		if (upload.cfg.progress && file) {
			progress = upload.filesProgress[file.id];
			progress.toggleCancel(false);
			progress.setStatus(message);
		}
		else {
			showError.call(upload, {err:'upload_file_error', message:message});
		}
	}
	// *************************************************************//
	// ********* upload handler functions - end ********************//
	// *************************************************************//

	function showError(cfg) {
		var message;

		switch (cfg.err) {
			case 'swfupload_error':
				message = 'You need to have the flash plugin installed in order to proceed. Please <a href="http://get.adobe.com/flashplayer/">install</a> the flash plugin.';
				break;

			case 'upload_queue_limit_exceeded':
				message = 'You have exceeded the file limit of ' + this.cfg.fileUploadLimit + ' files.';
				break;

			case 'upload_queue_error':
				message = 'The following files have acceeded max size of ' + this.cfg.fileSizeLimit + ': ' + this.fileQueueErrors.join(', ');
				break;

			case 'upload_invalid_file':
				message = 'File ' + cfg.file.name + ' could not upload. This file type is invalid.'
				break;

			case 'zero_file_size':
				message = 'File ' + cfg.file.name + ' is empty.  You cannot upload an empty file';
				break;

			case 'upload_file_error':
				message = cfg.message;
				break;
		}

		if (message) {
			if (this.cfg.error) $(this.cfg.error).show().html(message);
			else CrossriderUtils.showMessage('alert', {
				title:'Upload error',
				subTitle:message
			});
		}
	}

	//helper functions
	function buttonState(state) {
		var button = $(this.cfg.els.button);

		if (!button.is('.upload-button')) button.addClass('upload-button');
		
		button.removeClass('disabled hover normal');
		
		switch (state) {
			case 'disabled':
				button.addClass('disabled');

				if (!this.cfg.progress) button.waitingStatus({'position':'center'});
				break;

			case 'enabled':
				button.removeClass('disabled');
				
				if (!this.cfg.progress) button.waitingStatus(false);
				break;

			case 'inactive':
				button.addClass('disabled');

				this.swfupload.setButtonDisabled(true);
				this.swfupload.setButtonCursor(SWFUpload.CURSOR.ARROW);
				break;

			case 'active':
				button.removeClass('disabled');

				this.swfupload.setButtonDisabled(false);
				this.swfupload.setButtonCursor(SWFUpload.CURSOR.HAND);
				break;

			default:
				button.addClass(state);
				break;
		}
	}

	function isButtonActive() {
		var button = $(this.cfg.els.button);

		return !button.is('.disabled');
	}

	//reset
	function hideError() {
		if (this.cfg.error && this.cfg.fileUploadLimit == 1) {
			$(this.cfg.error).html('');
		}
		else if (this.cfg.error && this.cfg.fileUploadLimit > 1) {
			setTimeout($.proxy(function () {
				$(this.cfg.error).slideUp('fast');
			}, this), 6000);
		}
	}

	function reset() {
		var queue;
		
		setTimeout($.proxy(function () {
			if (this.flashLoad) {
				queue = this.swfupload && this.swfupload.getStats() ? this.swfupload.getStats().files_queued : 0;

				if (queue) this.swfupload.cancelQueue();
			}
	
			this.fail = 0;
			this.filesProgress = {};
			this.filesUploaded = [];
			this.fileQueueErrors = [];
			
			if (this.cfg.progress) $(this.cfg.progress).html('');

			this.cfg.els.swf.addClass('hidden');

			setTimeout($.proxy(function () {
				this.cfg.els.swf.removeClass('hidden');
			}, this), 10);
		}, this), 10);
	}

	function removeSWF() {
		if (this.swfupload) {
			setTimeout($.proxy(function () {
				this.swfupload.destroy();
				this.swfupload = null;

				this.cfg.els.button.unwrap();
			}, this), 100);
		}
	}

	//destroy
	function destroy() {
		removeSWF.call(this);

		if (this.cfg.cancelButton) $(this.cfg.cancelButton).off('click');
	}
};
//=======================================================================
//===================== SWFUpload class wrapper - end ===================
//=======================================================================

//=======================================================================
//================ Utilities general prototypes - start =================
//=======================================================================
Object.defineProperty(Object.prototype, 'deepClone',{
	value: function() {
		return JSON.parse(JSON.stringify(this));
	}
});

String.prototype.capitalize = function () {
	return this.toLowerCase().replace(/\b[a-z]/g, function(letter) {
		return letter.toUpperCase();
	});
}

Array.prototype.remove = function (object) {
	var idx = this.indexOf(object);

	if (idx > -1){
		this.splice(idx, 1);
	}
}
//=======================================================================
//================ Utilities general prototypes - end =================
//=======================================================================