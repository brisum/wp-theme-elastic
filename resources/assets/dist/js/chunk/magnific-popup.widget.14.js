webpackJsonp_name_([14],{

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0), __webpack_require__(2), __webpack_require__(4), __webpack_require__(1), __webpack_require__(3)], __WEBPACK_AMD_DEFINE_RESULT__ = (function ($, Widget, SourceLoader, BundleLoader, RequireInit) {
    var MagnificPopupWidget = function (_Widget) {
        _inherits(MagnificPopupWidget, _Widget);

        function MagnificPopupWidget() {
            _classCallCheck(this, MagnificPopupWidget);

            return _possibleConstructorReturn(this, (MagnificPopupWidget.__proto__ || Object.getPrototypeOf(MagnificPopupWidget)).apply(this, arguments));
        }

        _createClass(MagnificPopupWidget, [{
            key: '_init',
            value: function _init() {
                _get(MagnificPopupWidget.prototype.__proto__ || Object.getPrototypeOf(MagnificPopupWidget.prototype), '_init', this).call(this);

                var self = this;

                SourceLoader.loadStylesheets([Theme.url.theme + '/resources/assets/dist/magnific_popup_style.css?' + Theme.THEME_VERSION]);
                BundleLoader.load([__webpack_require__(6)], function () {

                    self.$element.magnificPopup($.extend({}, MagnificPopupWidget.defaults, { type: self.options.type }));

                    self.$element.on('click', function (e) {
                        e.stopPropagation();

                        return false;
                    });
                });
            }
        }]);

        return MagnificPopupWidget;
    }(Widget);

    MagnificPopupWidget.defaults = {
        iframe: {
            markup: '<div class="mfp-iframe-scaler">' + '<div class="mfp-close"></div>' + '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' + '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button

            patterns: {
                youtube: {
                    index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

                    id: null, // String that splits URL in a two parts, second part should be %id%
                    // Or null - full URL will be returned
                    // Or a function that should return %id%, for example:
                    // id: function(url) { return 'parsed id'; }

                    src: '%id%&autoplay=1' // URL that will be set as a source for iframe.
                }
            }
        }
    };

    return MagnificPopupWidget;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

});
//# sourceMappingURL=magnific-popup.widget.14.js.map?ab49c19f56b49ecf13b5