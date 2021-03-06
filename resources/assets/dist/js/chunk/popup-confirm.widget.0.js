webpackJsonp_name_([0,6,20],{

/***/ 46:
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

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _PopupBootstrap2 = __webpack_require__(46);

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

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0), __webpack_require__(2), __webpack_require__(3), __webpack_require__(48)], __WEBPACK_AMD_DEFINE_RESULT__ = (function ($, Widget, RequireInit, PopupConfirm) {
    var PopupConfirmWidget = function (_Widget) {
        _inherits(PopupConfirmWidget, _Widget);

        function PopupConfirmWidget() {
            _classCallCheck(this, PopupConfirmWidget);

            return _possibleConstructorReturn(this, (PopupConfirmWidget.__proto__ || Object.getPrototypeOf(PopupConfirmWidget)).apply(this, arguments));
        }

        _createClass(PopupConfirmWidget, [{
            key: '_init',
            value: function _init() {
                _get(PopupConfirmWidget.prototype.__proto__ || Object.getPrototypeOf(PopupConfirmWidget.prototype), '_init', this).call(this);

                var $body = $('body'),
                    popup = new PopupConfirm();

                $body.on('loading.popup-confirm', function (event, args) {
                    if (args && args.hasOwnProperty('loading') && args['loading']) {
                        popup.loading(true);
                    } else {
                        popup.loading(false);
                    }
                });

                $body.on('name.popup-confirm', function (event, args) {
                    if (args && args.hasOwnProperty('name') && args['name']) {
                        popup.name(args['name']);
                    } else {
                        popup.name('');
                    }
                });

                $body.on('show.popup-confirm', function (event, args) {
                    if (args && args.hasOwnProperty('content')) {
                        popup.content(args.content);
                    }

                    popup.show();
                });
            }
        }]);

        return PopupConfirmWidget;
    }(Widget);

    return PopupConfirmWidget;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

});
//# sourceMappingURL=popup-confirm.widget.0.js.map?7f85e522dc49c26a06d3