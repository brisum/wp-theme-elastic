webpackJsonp_name_([1,6,15],{

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PopupBootstrap = function () {
    function PopupBootstrap($element) {
        _classCallCheck(this, PopupBootstrap);

        var self = this;

        self.$element = $element;

        if (self.$element.data('bs.modal')) {
            return;
        }

        self.$element.modal({
            show: false
        });

        self.$element.on('hidden.bs.modal', function () {
            self.loading(false);
            self.name('');
            self.content('');
        });
    }

    _createClass(PopupBootstrap, [{
        key: 'getContext',
        value: function getContext() {
            return this.$element.find('.modal-content .modal-body');
        }
    }, {
        key: 'loading',
        value: function loading(isLoading) {
            if (isLoading) {
                this.$element.addClass('loading');
            } else {
                this.$element.removeClass('loading');
            }
        }
    }, {
        key: 'show',
        value: function show() {
            this.$element.modal('show');
        }
    }, {
        key: 'hide',
        value: function hide() {
            this.$element.modal('hide');
        }
    }, {
        key: 'name',
        value: function name(_name) {
            this.$element.attr('data-name', _name);
        }
    }, {
        key: 'content',
        value: function content(_content) {
            this.getContext().html(_content);
        }
    }]);

    return PopupBootstrap;
}();

module.exports = PopupBootstrap;

/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _PopupBootstrap2 = __webpack_require__(40);

var _PopupBootstrap3 = _interopRequireDefault(_PopupBootstrap2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PopupConfirm = function (_PopupBootstrap) {
    _inherits(PopupConfirm, _PopupBootstrap);

    function PopupConfirm() {
        _classCallCheck(this, PopupConfirm);

        return _possibleConstructorReturn(this, (PopupConfirm.__proto__ || Object.getPrototypeOf(PopupConfirm)).call(this, $('#popup-confirm')));
    }

    return PopupConfirm;
}(_PopupBootstrap3.default);

module.exports = PopupConfirm;

/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0), __webpack_require__(2), __webpack_require__(42)], __WEBPACK_AMD_DEFINE_RESULT__ = (function ($, Widget, PopupConfirm) {
    var FormConfirmationWidget = function (_Widget) {
        _inherits(FormConfirmationWidget, _Widget);

        function FormConfirmationWidget() {
            _classCallCheck(this, FormConfirmationWidget);

            return _possibleConstructorReturn(this, (FormConfirmationWidget.__proto__ || Object.getPrototypeOf(FormConfirmationWidget)).apply(this, arguments));
        }

        _createClass(FormConfirmationWidget, [{
            key: '_init',
            value: function _init() {
                _get(FormConfirmationWidget.prototype.__proto__ || Object.getPrototypeOf(FormConfirmationWidget.prototype), '_init', this).call(this);

                // allow only form
                if ('form' !== this.$element[0].nodeName.toLowerCase()) {
                    return;
                }

                var self = this,
                    popup = new PopupConfirm(),
                    $popup = popup.$element;

                self.$element.on('submit', function () {
                    if (self.$element.attr('data-confirmed')) {
                        setTimeout(function () {
                            self.$element.removeAttr('data-confirmed');
                        }, 1000);
                        return true;
                    }

                    popup.content(self.options.confirmation);
                    popup.show(self.options.confirmation);

                    $popup.one('click', 'button.confirm', function () {
                        self.$element.attr('data-confirmed', true);
                        self.$element.trigger('submit');
                        popup.hide();
                    });

                    $popup.one('hidden.bs.modal', function () {
                        $popup.off('click', 'button.confirm');
                    });

                    return false;
                });
            }
        }]);

        return FormConfirmationWidget;
    }(Widget);

    return FormConfirmationWidget;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

});
//# sourceMappingURL=form-confirmation.widget.1.js.map?07b8b97eb79b80a6ce02