(function () {
	CrossriderUtils.ValidationMixin = {
		showErrors:function (errors, options) {
			var options = this.options = $.extend({
					scrollintoview:true,
					form:this.$el
				}, options),
				fields = [], field, display, items;

			this.hideAllValidationErrors();
		
			$.each(errors, function (name, err) {
				if (err.indexes) {
					items = options.form.find('[name="' + name + '[]"]');
					
					err.indexes.forEach(function (index) {
						field = $(items[index]);
						
						fields.push({field:field, display:field, msg:err.msg});
					}.bind(this));
				} else {
					field = options.form.find('[name="' + name + '"]');

					if (field.is('input:hidden')) {
						display = $('#' + field.data('display-id'));
						field = $('#' + field.data('field-id'));
					} else if (field.is('select:hidden')) {
						display = $('#' + field.data('display-id'));
					} else {
						display = field;
					}

					fields.push({field:field, display:display, msg:err.msg});
				}
			}.bind(this));

			fields.forEach(function (item) {
				this.showError(item);
			}.bind(this));

			if (options.scrollintoview) {
				fields[0].display.scrollintoview({direction:'y', offsetY:-50});
			}
		},

		showError:function (cfg) {
			var parent = cfg.display.parent(),
				message = $('<span class="error-message error-message-' + cfg.display.prop('nodeName').toLowerCase() + '" data-class="' + cfg.display.prop('className') + '">' + cfg.msg + '</span>'),
				actionType = cfg.field.is('select, .hasDatepicker') ? 'change' : 'keypress',
				hide = function (e) {
					cfg.field.off(actionType, hide);

					message.remove();
				}.bind(this);

			cfg.field
				.off(actionType, hide)
				.on(actionType, hide);

			message
				.appendTo(parent);
		},

		hideAllValidationErrors:function () {
			$.each(this.options.form.find('.error-message'), function (i, err) {
				$(err).remove();
			}.bind(this));
		},

		hideValidationError:function (field) {
			var field = typeof field === 'string' ? this.options.form.find('[name="' + field + '"]') : $(this);

			CrossriderUtils.hideValidationTipsy(field);
		}
	};
})();

_.extend(Backbone.Validation.validators, {
	negative_pattern: function(value, attr, customValue, model) {
		value = value ? value.trim() : '';

		if (value && customValue.test(value)) {
			return 'err';
		}
	}
});

_.extend(Backbone.Validation.callbacks, {
	valid: function(view, attr, selector) {
	// do something
	},

	invalid: function(view, attr, error, selector) {
	}
});