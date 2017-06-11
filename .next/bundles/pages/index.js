
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 545:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(38);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(41);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(40);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _head = __webpack_require__(195);

var _head2 = _interopRequireDefault(_head);

var _Hero = __webpack_require__(571);

var _Hero2 = _interopRequireDefault(_Hero);

var _Form = __webpack_require__(570);

var _Form2 = _interopRequireDefault(_Form);

var _Footer = __webpack_require__(569);

var _Footer2 = _interopRequireDefault(_Footer);

var _index = __webpack_require__(568);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/kopkap/Desktop/works/inthanin-camp-next/pages/index.js?entry';


var App = function (_Component) {
  (0, _inherits3.default)(App, _Component);

  function App() {
    (0, _classCallCheck3.default)(this, App);

    return (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).apply(this, arguments));
  }

  (0, _createClass3.default)(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, _react2.default.createElement('title', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, 'Inthanin Guild Camp #1'), _react2.default.createElement('link', { rel: 'shortcut icon', type: 'image/png', href: 'static/images/favicon.png', __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }), _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _index2.default }, __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      })), _react2.default.createElement(_Hero2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }), _react2.default.createElement(_Form2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }), _react2.default.createElement(_Footer2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }));
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/kopkap/Desktop/works/inthanin-camp-next/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/kopkap/Desktop/works/inthanin-camp-next/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(85)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 568:
/***/ (function(module, exports) {

module.exports = "html, body, h1, h2, h3, h4 {\n  padding: 0;\n  margin: 0; }\n\nbody {\n  overflow-x: hidden; }\n\n@font-face {\n  font-family: 'db_heaventbold_it';\n  src: url(\"static/fonts/db_heavent/db_heavent_bd_it_v3.2-webfont.eot\");\n  src: url(\"static/fonts/db_heavent/db_heavent_bd_it_v3.2-webfont.eot?#iefix\") format(\"embedded-opentype\"), url(\"static/fonts/db_heavent/db_heavent_bd_it_v3.2-webfont.woff2\") format(\"woff2\"), url(\"static/fonts/db_heavent/db_heavent_bd_it_v3.2-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: 'db_heaventbold';\n  src: url(\"static/fonts/db_heavent/db_heavent_bd_v3.2-webfont.eot\");\n  src: url(\"static/fonts/db_heavent/db_heavent_bd_v3.2-webfont.eot?#iefix\") format(\"embedded-opentype\"), url(\"static/fonts/db_heavent/db_heavent_bd_v3.2-webfont.woff2\") format(\"woff2\"), url(\"static/fonts/db_heavent/db_heavent_bd_v3.2-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: 'db_heaventblack_it';\n  src: url(\"static/fonts/db_heavent/db_heavent_blk_it_v3.2-webfont.eot\");\n  src: url(\"static/fonts/db_heavent/db_heavent_blk_it_v3.2-webfont.eot?#iefix\") format(\"embedded-opentype\"), url(\"static/fonts/db_heavent/db_heavent_blk_it_v3.2-webfont.woff2\") format(\"woff2\"), url(\"static/fonts/db_heavent/db_heavent_blk_it_v3.2-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: 'db_heaventblack';\n  src: url(\"static/fonts/db_heavent/db_heavent_blk_v3.2-webfont.eot\");\n  src: url(\"static/fonts/db_heavent/db_heavent_blk_v3.2-webfont.eot?#iefix\") format(\"embedded-opentype\"), url(\"static/fonts/db_heavent/db_heavent_blk_v3.2-webfont.woff2\") format(\"woff2\"), url(\"static/fonts/db_heavent/db_heavent_blk_v3.2-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: 'db_heaventitalic';\n  src: url(\"static/fonts/db_heavent/db_heavent_it_v3.2-webfont.eot\");\n  src: url(\"static/fonts/db_heavent/db_heavent_it_v3.2-webfont.eot?#iefix\") format(\"embedded-opentype\"), url(\"static/fonts/db_heavent/db_heavent_it_v3.2-webfont.woff2\") format(\"woff2\"), url(\"static/fonts/db_heavent/db_heavent_it_v3.2-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: 'db_heaventlight_it';\n  src: url(\"static/fonts/db_heavent/db_heavent_li_it_v3.2-webfont.eot\");\n  src: url(\"static/fonts/db_heavent/db_heavent_li_it_v3.2-webfont.eot?#iefix\") format(\"embedded-opentype\"), url(\"static/fonts/db_heavent/db_heavent_li_it_v3.2-webfont.woff2\") format(\"woff2\"), url(\"static/fonts/db_heavent/db_heavent_li_it_v3.2-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: 'db_heaventlight';\n  src: url(\"static/fonts/db_heavent/db_heavent_li_v3.2-webfont.eot\");\n  src: url(\"static/fonts/db_heavent/db_heavent_li_v3.2-webfont.eot?#iefix\") format(\"embedded-opentype\"), url(\"static/fonts/db_heavent/db_heavent_li_v3.2-webfont.woff2\") format(\"woff2\"), url(\"static/fonts/db_heavent/db_heavent_li_v3.2-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: 'db_heaventmed_it';\n  src: url(\"static/fonts/db_heavent/db_heavent_med_it_v3.2-webfont.eot\");\n  src: url(\"static/fonts/db_heavent/db_heavent_med_it_v3.2-webfont.eot?#iefix\") format(\"embedded-opentype\"), url(\"static/fonts/db_heavent/db_heavent_med_it_v3.2-webfont.woff2\") format(\"woff2\"), url(\"static/fonts/db_heavent/db_heavent_med_it_v3.2-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: 'db_heaventmed';\n  src: url(\"static/fonts/db_heavent/db_heavent_med_v3.2-webfont.eot\");\n  src: url(\"static/fonts/db_heavent/db_heavent_med_v3.2-webfont.eot?#iefix\") format(\"embedded-opentype\"), url(\"static/fonts/db_heavent/db_heavent_med_v3.2-webfont.woff2\") format(\"woff2\"), url(\"static/fonts/db_heavent/db_heavent_med_v3.2-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: 'db_heaventthin_it';\n  src: url(\"static/fonts/db_heavent/db_heavent_thin_it_v3.2-webfont.eot\");\n  src: url(\"static/fonts/db_heavent/db_heavent_thin_it_v3.2-webfont.eot?#iefix\") format(\"embedded-opentype\"), url(\"static/fonts/db_heavent/db_heavent_thin_it_v3.2-webfont.woff2\") format(\"woff2\"), url(\"static/fonts/db_heavent/db_heavent_thin_it_v3.2-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: 'db_heaventthin';\n  src: url(\"static/fonts/db_heavent/db_heavent_thin_v3.2-webfont.eot\");\n  src: url(\"static/fonts/db_heavent/db_heavent_thin_v3.2-webfont.eot?#iefix\") format(\"embedded-opentype\"), url(\"static/fonts/db_heavent/db_heavent_thin_v3.2-webfont.woff2\") format(\"woff2\"), url(\"static/fonts/db_heavent/db_heavent_thin_v3.2-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: 'db_heaventultrali_it';\n  src: url(\"static/fonts/db_heavent/db_heavent_ulli_it_v3.2-webfont.eot\");\n  src: url(\"static/fonts/db_heavent/db_heavent_ulli_it_v3.2-webfont.eot?#iefix\") format(\"embedded-opentype\"), url(\"static/fonts/db_heavent/db_heavent_ulli_it_v3.2-webfont.woff2\") format(\"woff2\"), url(\"static/fonts/db_heavent/db_heavent_ulli_it_v3.2-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal; }\n\n.header {\n  background-color: #7BDFF2;\n  height: 100vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  position: relative;\n  overflow: hidden; }\n\n.heading {\n  text-align: center;\n  position: relative;\n  z-index: 1000; }\n\nh1, h2, .button {\n  color: #FFFFFF; }\n\nh1 {\n  font-family: Pacifico;\n  font-size: 144px;\n  letter-spacing: -0.32px;\n  line-height: 160px; }\n\nh2 {\n  font-family: 'db_heaventlight';\n  font-size: 48px;\n  letter-spacing: -0.11px;\n  line-height: 70px;\n  text-transform: uppercase;\n  font-weight: normal; }\n\n.button {\n  background: #3D3E3E;\n  border-radius: 30px;\n  padding: 10px 40px;\n  text-decoration: none;\n  margin: 20px 0;\n  display: inline-block;\n  font-family: 'db_heaventlight';\n  -webkit-box-shadow: 2px 2px 0px #2176a9;\n          box-shadow: 2px 2px 0px #2176a9;\n  font-size: 20px; }\n\n.cartoon {\n  width: 100px;\n  position: absolute;\n  bottom: 0; }\n\n.cartoon-1 {\n  -webkit-animation: cartoon-1 3.4s infinite ease-in-out;\n          animation: cartoon-1 3.4s infinite ease-in-out;\n  left: 45%;\n  z-index: 1000;\n  bottom: -20px; }\n\n.cartoon-2 {\n  -webkit-animation: cartoon-2 2.5s infinite ease-in-out;\n          animation: cartoon-2 2.5s infinite ease-in-out;\n  left: 30%;\n  width: 60px; }\n\n.cartoon-3 {\n  -webkit-animation: cartoon-3 3s infinite ease-in-out;\n          animation: cartoon-3 3s infinite ease-in-out;\n  left: 70%;\n  width: 50px; }\n\n.water {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  z-index: 5;\n  bottom: -20px;\n  left: 0;\n  background: #32bafa;\n  -webkit-transform: translate(0, 50%);\n          transform: translate(0, 50%); }\n\n.water__inner {\n    position: absolute;\n    width: 100%;\n    height: 50%;\n    top: 0;\n    left: 0;\n    overflow: hidden; }\n\n.water__wave {\n    width: 200%;\n    position: absolute;\n    bottom: 100%;\n    z-index: 999;\n    bottom: -1px; }\n\n.water__wave_back {\n      right: 0;\n      fill: #F7FDFC;\n      -webkit-animation: wave-back 3.5s infinite linear;\n              animation: wave-back 3.5s infinite linear;\n      z-index: 1001; }\n\n.water__wave_front {\n      left: 0;\n      fill: #A2E8F5;\n      -webkit-animation: wave-front 3s infinite linear;\n              animation: wave-front 3s infinite linear; }\n\n@-webkit-keyframes wave-front {\n  100% {\n    -webkit-transform: translate(-50%, 0);\n            transform: translate(-50%, 0); } }\n\n@keyframes wave-front {\n  100% {\n    -webkit-transform: translate(-50%, 0);\n            transform: translate(-50%, 0); } }\n\n@-webkit-keyframes wave-back {\n  100% {\n    -webkit-transform: translate(50%, 0);\n            transform: translate(50%, 0); } }\n\n@keyframes wave-back {\n  100% {\n    -webkit-transform: translate(50%, 0);\n            transform: translate(50%, 0); } }\n\n@-webkit-keyframes cartoon-1 {\n  50% {\n    -webkit-transform: translateY(-10%) rotate(-2deg);\n            transform: translateY(-10%) rotate(-2deg); } }\n\n@keyframes cartoon-1 {\n  50% {\n    -webkit-transform: translateY(-10%) rotate(-2deg);\n            transform: translateY(-10%) rotate(-2deg); } }\n\n@-webkit-keyframes cartoon-2 {\n  50% {\n    -webkit-transform: translateY(-5%) rotate(-2deg);\n            transform: translateY(-5%) rotate(-2deg); } }\n\n@keyframes cartoon-2 {\n  50% {\n    -webkit-transform: translateY(-5%) rotate(-2deg);\n            transform: translateY(-5%) rotate(-2deg); } }\n\n@-webkit-keyframes cartoon-3 {\n  50% {\n    -webkit-transform: translateY(-10%) rotate(-2deg);\n            transform: translateY(-10%) rotate(-2deg); } }\n\n@keyframes cartoon-3 {\n  50% {\n    -webkit-transform: translateY(-10%) rotate(-2deg);\n            transform: translateY(-10%) rotate(-2deg); } }\n\n#section2 {\n  height: 100vh;\n  background-color: #F7FDFC;\n  padding: 40px 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\nh3, h4 {\n  font-family: '.SFNSDisplay';\n  text-align: center; }\n\nh3 {\n  font-family: 'db_heaventlight';\n  font-size: 50px;\n  color: #454950;\n  letter-spacing: -0.11px;\n  line-height: 82px; }\n\nh4 {\n  font-family: 'db_heaventthin';\n  font-size: 24px;\n  color: #959AA8;\n  line-height: 36px;\n  letter-spacing: 1.2px;\n  margin-bottom: 20px !important; }\n\nh4 a {\n  color: #333;\n  text-decoration: none;\n  letter-spacing: 1.2px; }\n\nform {\n  width: 900px;\n  margin: 0 auto; }\n\n.padding {\n  padding: 10px; }\n\n.flex {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.flex-wrap {\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n\n.flex-1-3 {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  width: 32%; }\n\n.flex-1 {\n  width: 100%; }\n\ninput,\ntextarea {\n  width: 100%;\n  padding: 15px 20px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  outline: 0;\n  font-size: 20px;\n  border-radius: 30px;\n  font-family: 'db_heaventlight';\n  background: #FFFFFF;\n  border: 1px solid #EDEDED; }\n\ninput:focus,\ntextarea:focus {\n  border-color: #DDD; }\n\nbutton {\n  font-family: 'db_heaventlight';\n  font-size: 20px;\n  cursor: pointer;\n  display: block;\n  margin: 20px auto;\n  padding: 10px 40px;\n  background-color: #454950;\n  color: #FFF;\n  border: 0;\n  border-radius: 20px;\n  -webkit-box-shadow: 2px 2px 0px #000;\n          box-shadow: 2px 2px 0px #000;\n  outline: 0; }\n\nfooter {\n  padding: 20px;\n  background-color: #FFF;\n  font-family: 'db_heaventmed'; }\n\n.flex-half {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\n\n.wrapper {\n  width: 900px;\n  margin: 0 auto; }\n\n.wrapper .left {\n    text-transform: uppercase;\n    letter-spacing: 1.2px; }\n\n.wrapper .right {\n    text-transform: uppercase;\n    text-align: right; }\n\n.wrapper .right a {\n      text-decoration: none;\n      color: #222; }\n";

/***/ }),

/***/ 569:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(38);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(41);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(40);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(567);

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/kopkap/Desktop/works/inthanin-camp-next/components/Footer.js';


var Footer = function (_Component) {
    (0, _inherits3.default)(Footer, _Component);

    function Footer() {
        (0, _classCallCheck3.default)(this, Footer);

        return (0, _possibleConstructorReturn3.default)(this, (Footer.__proto__ || (0, _getPrototypeOf2.default)(Footer)).apply(this, arguments));
    }

    (0, _createClass3.default)(Footer, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement('footer', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 8
                }
            }, _react2.default.createElement('div', { className: 'wrapper flex', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 9
                }
            }, _react2.default.createElement('div', { className: 'flex-half left', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 10
                }
            }, 'Inthanin Guild Camp'), _react2.default.createElement('div', { className: 'flex-half right', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 11
                }
            }, _react2.default.createElement(_link2.default, { href: 'https://www.facebook.com/inthaninguidecamp/', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 11
                }
            }, _react2.default.createElement('a', { target: '_blank', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 11
                }
            }, 'Fanpage')))));
        }
    }]);

    return Footer;
}(_react.Component);

exports.default = Footer;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/kopkap/Desktop/works/inthanin-camp-next/components/Footer.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/kopkap/Desktop/works/inthanin-camp-next/components/Footer.js"); } } })();

/***/ }),

/***/ 570:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(38);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(41);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(40);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _axios = __webpack_require__(546);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/kopkap/Desktop/works/inthanin-camp-next/components/Form.js';


var Form = function (_Component) {
    (0, _inherits3.default)(Form, _Component);

    function Form() {
        (0, _classCallCheck3.default)(this, Form);

        return (0, _possibleConstructorReturn3.default)(this, (Form.__proto__ || (0, _getPrototypeOf2.default)(Form)).apply(this, arguments));
    }

    (0, _createClass3.default)(Form, [{
        key: 'sendData',
        value: function sendData(event) {
            event.preventDefault();

            _axios2.default.post('/post', {
                name: this.refs.fname.value,
                lname: this.refs.lname.value,
                nname: this.refs.nname.value,
                why: this.refs.why.value
            }).then(function (response) {
                console.log(response);
            }).catch(function (error) {
                console.log(error);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('section', { id: 'section2', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 27
                }
            }, '\u0E43\u0E1A\u0E2A\u0E21\u0E31\u0E04\u0E23\u0E40\u0E1B\u0E47\u0E19\u0E1E\u0E35\u0E48 Staff'), _react2.default.createElement('h4', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                }
            }, '\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E40\u0E1B\u0E47\u0E19\u0E1E\u0E35\u0E48 Staff \u0E19\u0E31\u0E49\u0E19\u0E17\u0E38\u0E01\u0E04\u0E19\u0E08\u0E30\u0E16\u0E39\u0E01\u0E04\u0E31\u0E14\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E1E\u0E35\u0E48\u0E46\u0E01\u0E25\u0E38\u0E48\u0E21\u0E21\u0E2B\u0E32\u0E27\u0E34\u0E17\u0E22\u0E32\u0E25\u0E31\u0E22\u0E0B\u0E36\u0E48\u0E07\u0E1C\u0E25\u0E1B\u0E23\u0E30\u0E01\u0E32\u0E28\u0E08\u0E30\u0E41\u0E08\u0E49\u0E07\u0E43\u0E2B\u0E49\u0E17\u0E23\u0E32\u0E1A\u0E1C\u0E48\u0E32\u0E19\u0E17\u0E32\u0E07 ', _react2.default.createElement('a', { href: 'https://www.facebook.com/inthaninguidecamp/', target: '_blank', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                }
            }, 'Fanpage')), _react2.default.createElement('form', { onSubmit: this.sendData.bind(this), className: 'flex flex-wrap', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            }, _react2.default.createElement('div', { className: 'flex-1-3 padding', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            }, _react2.default.createElement('input', { type: 'text', placeholder: '\u0E0A\u0E37\u0E48\u0E2D', ref: 'fname', name: 'fname', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            })), _react2.default.createElement('div', { className: 'flex-1-3 padding', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            }, _react2.default.createElement('input', { type: 'text', placeholder: '\u0E19\u0E32\u0E21\u0E2A\u0E01\u0E38\u0E25', ref: 'lname', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            })), _react2.default.createElement('div', { className: 'flex-1-3 padding', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            }, _react2.default.createElement('input', { type: 'text', placeholder: '\u0E0A\u0E37\u0E48\u0E2D\u0E40\u0E25\u0E48\u0E19', ref: 'nname', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                }
            })), _react2.default.createElement('div', { className: 'flex-1 padding', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }, _react2.default.createElement('textarea', { placeholder: '\u0E17\u0E33\u0E44\u0E21\u0E16\u0E36\u0E07\u0E2A\u0E21\u0E31\u0E04\u0E23\u0E40\u0E1B\u0E47\u0E19\u0E1E\u0E35\u0E48 Staff?', ref: 'why', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            })), _react2.default.createElement('div', { className: 'flex-1', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            }, _react2.default.createElement('button', { type: 'submit', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            }, '\u0E2A\u0E48\u0E07\u0E04\u0E33\u0E15\u0E2D\u0E1A'))));
        }
    }]);

    return Form;
}(_react.Component);

exports.default = Form;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/kopkap/Desktop/works/inthanin-camp-next/components/Form.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/kopkap/Desktop/works/inthanin-camp-next/components/Form.js"); } } })();

/***/ }),

/***/ 571:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(38);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(41);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(40);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _reactScrollchor = __webpack_require__(572);

var _reactScrollchor2 = _interopRequireDefault(_reactScrollchor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/kopkap/Desktop/works/inthanin-camp-next/components/Hero.js';


var Hero = function (_Component) {
    (0, _inherits3.default)(Hero, _Component);

    function Hero() {
        (0, _classCallCheck3.default)(this, Hero);

        return (0, _possibleConstructorReturn3.default)(this, (Hero.__proto__ || (0, _getPrototypeOf2.default)(Hero)).apply(this, arguments));
    }

    (0, _createClass3.default)(Hero, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement('section', { className: 'header', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 7
                }
            }, _react2.default.createElement('div', { className: 'heading', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 8
                }
            }, _react2.default.createElement('h1', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 9
                }
            }, 'Inthanin'), _react2.default.createElement('h2', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 10
                }
            }, 'guide camp #1'), _react2.default.createElement(_reactScrollchor2.default, { to: '#section2', animate: { offset: 0, duration: 800 }, className: 'button', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 11
                }
            }, '\u0E2A\u0E21\u0E31\u0E04\u0E23\u0E40\u0E1B\u0E47\u0E19 Staff')), _react2.default.createElement('svg', { version: '1.1', xmlns: 'http://www.w3.org/2000/svg', x: '0px', y: '0px', style: { display: 'none' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 13
                }
            }, _react2.default.createElement('symbol', { id: 'wave', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 14
                }
            }, _react2.default.createElement('path', { d: 'M420,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C514,6.5,518,4.7,528.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H420z', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 15
                }
            }), _react2.default.createElement('path', { d: 'M420,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C326,6.5,322,4.7,311.5,2.7C304.3,1.4,293.6-0.1,280,0c0,0,0,0,0,0v20H420z', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 16
                }
            }), _react2.default.createElement('path', { d: 'M140,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C234,6.5,238,4.7,248.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H140z', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 17
                }
            }), _react2.default.createElement('path', { d: 'M140,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C46,6.5,42,4.7,31.5,2.7C24.3,1.4,13.6-0.1,0,0c0,0,0,0,0,0l0,20H140z', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 18
                }
            }))), _react2.default.createElement('svg', { className: 'water__wave water__wave_front', viewBox: '0 0 560 20', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 21
                }
            }, _react2.default.createElement('use', { xlinkHref: '#wave', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 22
                }
            })), _react2.default.createElement('svg', { className: 'water__wave water__wave_back', viewBox: '0 0 560 20', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 24
                }
            }, _react2.default.createElement('use', { xlinkHref: '#wave', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 25
                }
            })), _react2.default.createElement('img', { src: 'static/images/Cartoon-2.svg', className: 'cartoon cartoon-1', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 27
                }
            }), _react2.default.createElement('img', { src: 'static/images/Cartoon.svg', className: 'cartoon cartoon-2', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                }
            }), _react2.default.createElement('img', { src: 'static/images/Cartoon.svg', className: 'cartoon cartoon-3', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            }));
        }
    }]);

    return Hero;
}(_react.Component);

exports.default = Hero;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/kopkap/Desktop/works/inthanin-camp-next/components/Hero.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/kopkap/Desktop/works/inthanin-camp-next/components/Hero.js"); } } })();

/***/ }),

/***/ 574:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(545);


/***/ })

},[574]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzP2ExMjY3NWIiLCJ3ZWJwYWNrOi8vL3Njc3MvaW5kZXguc2Nzcz9hMTI2NzViIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRm9vdGVyLmpzP2ExMjY3NWIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb3JtLmpzP2ExMjY3NWIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZXJvLmpzP2ExMjY3NWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcblxuaW1wb3J0IEhlcm8gZnJvbSAnLi4vY29tcG9uZW50cy9IZXJvJ1xuaW1wb3J0IEZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9Gb3JtJ1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3RlcidcblxuaW1wb3J0IHN0eWxlc2hlZXQgZnJvbSAnLi4vc2Nzcy9pbmRleC5zY3NzJ1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT5JbnRoYW5pbiBHdWlsZCBDYW1wICMxPC90aXRsZT5cbiAgICAgICAgICA8bGluayByZWw9XCJzaG9ydGN1dCBpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIGhyZWY9XCJzdGF0aWMvaW1hZ2VzL2Zhdmljb24ucG5nXCIvPlxuICAgICAgICAgIDxzdHlsZSBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHN0eWxlc2hlZXQgfX0gLz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8SGVybyAvPlxuICAgICAgICA8Rm9ybSAvPlxuICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSIsIm1vZHVsZS5leHBvcnRzID0gXCJodG1sLCBib2R5LCBoMSwgaDIsIGgzLCBoNCB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwOyB9XFxuXFxuYm9keSB7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47IH1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnZGJfaGVhdmVudGJvbGRfaXQnO1xcbiAgc3JjOiB1cmwoXFxcInN0YXRpYy9mb250cy9kYl9oZWF2ZW50L2RiX2hlYXZlbnRfYmRfaXRfdjMuMi13ZWJmb250LmVvdFxcXCIpO1xcbiAgc3JjOiB1cmwoXFxcInN0YXRpYy9mb250cy9kYl9oZWF2ZW50L2RiX2hlYXZlbnRfYmRfaXRfdjMuMi13ZWJmb250LmVvdD8jaWVmaXhcXFwiKSBmb3JtYXQoXFxcImVtYmVkZGVkLW9wZW50eXBlXFxcIiksIHVybChcXFwic3RhdGljL2ZvbnRzL2RiX2hlYXZlbnQvZGJfaGVhdmVudF9iZF9pdF92My4yLXdlYmZvbnQud29mZjJcXFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIiksIHVybChcXFwic3RhdGljL2ZvbnRzL2RiX2hlYXZlbnQvZGJfaGVhdmVudF9iZF9pdF92My4yLXdlYmZvbnQud29mZlxcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDsgfVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdkYl9oZWF2ZW50Ym9sZCc7XFxuICBzcmM6IHVybChcXFwic3RhdGljL2ZvbnRzL2RiX2hlYXZlbnQvZGJfaGVhdmVudF9iZF92My4yLXdlYmZvbnQuZW90XFxcIik7XFxuICBzcmM6IHVybChcXFwic3RhdGljL2ZvbnRzL2RiX2hlYXZlbnQvZGJfaGVhdmVudF9iZF92My4yLXdlYmZvbnQuZW90PyNpZWZpeFxcXCIpIGZvcm1hdChcXFwiZW1iZWRkZWQtb3BlbnR5cGVcXFwiKSwgdXJsKFxcXCJzdGF0aWMvZm9udHMvZGJfaGVhdmVudC9kYl9oZWF2ZW50X2JkX3YzLjItd2ViZm9udC53b2ZmMlxcXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKSwgdXJsKFxcXCJzdGF0aWMvZm9udHMvZGJfaGVhdmVudC9kYl9oZWF2ZW50X2JkX3YzLjItd2ViZm9udC53b2ZmXFxcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsOyB9XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ2RiX2hlYXZlbnRibGFja19pdCc7XFxuICBzcmM6IHVybChcXFwic3RhdGljL2ZvbnRzL2RiX2hlYXZlbnQvZGJfaGVhdmVudF9ibGtfaXRfdjMuMi13ZWJmb250LmVvdFxcXCIpO1xcbiAgc3JjOiB1cmwoXFxcInN0YXRpYy9mb250cy9kYl9oZWF2ZW50L2RiX2hlYXZlbnRfYmxrX2l0X3YzLjItd2ViZm9udC5lb3Q/I2llZml4XFxcIikgZm9ybWF0KFxcXCJlbWJlZGRlZC1vcGVudHlwZVxcXCIpLCB1cmwoXFxcInN0YXRpYy9mb250cy9kYl9oZWF2ZW50L2RiX2hlYXZlbnRfYmxrX2l0X3YzLjItd2ViZm9udC53b2ZmMlxcXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKSwgdXJsKFxcXCJzdGF0aWMvZm9udHMvZGJfaGVhdmVudC9kYl9oZWF2ZW50X2Jsa19pdF92My4yLXdlYmZvbnQud29mZlxcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDsgfVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdkYl9oZWF2ZW50YmxhY2snO1xcbiAgc3JjOiB1cmwoXFxcInN0YXRpYy9mb250cy9kYl9oZWF2ZW50L2RiX2hlYXZlbnRfYmxrX3YzLjItd2ViZm9udC5lb3RcXFwiKTtcXG4gIHNyYzogdXJsKFxcXCJzdGF0aWMvZm9udHMvZGJfaGVhdmVudC9kYl9oZWF2ZW50X2Jsa192My4yLXdlYmZvbnQuZW90PyNpZWZpeFxcXCIpIGZvcm1hdChcXFwiZW1iZWRkZWQtb3BlbnR5cGVcXFwiKSwgdXJsKFxcXCJzdGF0aWMvZm9udHMvZGJfaGVhdmVudC9kYl9oZWF2ZW50X2Jsa192My4yLXdlYmZvbnQud29mZjJcXFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIiksIHVybChcXFwic3RhdGljL2ZvbnRzL2RiX2hlYXZlbnQvZGJfaGVhdmVudF9ibGtfdjMuMi13ZWJmb250LndvZmZcXFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXN0eWxlOiBub3JtYWw7IH1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnZGJfaGVhdmVudGl0YWxpYyc7XFxuICBzcmM6IHVybChcXFwic3RhdGljL2ZvbnRzL2RiX2hlYXZlbnQvZGJfaGVhdmVudF9pdF92My4yLXdlYmZvbnQuZW90XFxcIik7XFxuICBzcmM6IHVybChcXFwic3RhdGljL2ZvbnRzL2RiX2hlYXZlbnQvZGJfaGVhdmVudF9pdF92My4yLXdlYmZvbnQuZW90PyNpZWZpeFxcXCIpIGZvcm1hdChcXFwiZW1iZWRkZWQtb3BlbnR5cGVcXFwiKSwgdXJsKFxcXCJzdGF0aWMvZm9udHMvZGJfaGVhdmVudC9kYl9oZWF2ZW50X2l0X3YzLjItd2ViZm9udC53b2ZmMlxcXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKSwgdXJsKFxcXCJzdGF0aWMvZm9udHMvZGJfaGVhdmVudC9kYl9oZWF2ZW50X2l0X3YzLjItd2ViZm9udC53b2ZmXFxcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsOyB9XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ2RiX2hlYXZlbnRsaWdodF9pdCc7XFxuICBzcmM6IHVybChcXFwic3RhdGljL2ZvbnRzL2RiX2hlYXZlbnQvZGJfaGVhdmVudF9saV9pdF92My4yLXdlYmZvbnQuZW90XFxcIik7XFxuICBzcmM6IHVybChcXFwic3RhdGljL2ZvbnRzL2RiX2hlYXZlbnQvZGJfaGVhdmVudF9saV9pdF92My4yLXdlYmZvbnQuZW90PyNpZWZpeFxcXCIpIGZvcm1hdChcXFwiZW1iZWRkZWQtb3BlbnR5cGVcXFwiKSwgdXJsKFxcXCJzdGF0aWMvZm9udHMvZGJfaGVhdmVudC9kYl9oZWF2ZW50X2xpX2l0X3YzLjItd2ViZm9udC53b2ZmMlxcXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKSwgdXJsKFxcXCJzdGF0aWMvZm9udHMvZGJfaGVhdmVudC9kYl9oZWF2ZW50X2xpX2l0X3YzLjItd2ViZm9udC53b2ZmXFxcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsOyB9XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ2RiX2hlYXZlbnRsaWdodCc7XFxuICBzcmM6IHVybChcXFwic3RhdGljL2ZvbnRzL2RiX2hlYXZlbnQvZGJfaGVhdmVudF9saV92My4yLXdlYmZvbnQuZW90XFxcIik7XFxuICBzcmM6IHVybChcXFwic3RhdGljL2ZvbnRzL2RiX2hlYXZlbnQvZGJfaGVhdmVudF9saV92My4yLXdlYmZvbnQuZW90PyNpZWZpeFxcXCIpIGZvcm1hdChcXFwiZW1iZWRkZWQtb3BlbnR5cGVcXFwiKSwgdXJsKFxcXCJzdGF0aWMvZm9udHMvZGJfaGVhdmVudC9kYl9oZWF2ZW50X2xpX3YzLjItd2ViZm9udC53b2ZmMlxcXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKSwgdXJsKFxcXCJzdGF0aWMvZm9udHMvZGJfaGVhdmVudC9kYl9oZWF2ZW50X2xpX3YzLjItd2ViZm9udC53b2ZmXFxcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsOyB9XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ2RiX2hlYXZlbnRtZWRfaXQnO1xcbiAgc3JjOiB1cmwoXFxcInN0YXRpYy9mb250cy9kYl9oZWF2ZW50L2RiX2hlYXZlbnRfbWVkX2l0X3YzLjItd2ViZm9udC5lb3RcXFwiKTtcXG4gIHNyYzogdXJsKFxcXCJzdGF0aWMvZm9udHMvZGJfaGVhdmVudC9kYl9oZWF2ZW50X21lZF9pdF92My4yLXdlYmZvbnQuZW90PyNpZWZpeFxcXCIpIGZvcm1hdChcXFwiZW1iZWRkZWQtb3BlbnR5cGVcXFwiKSwgdXJsKFxcXCJzdGF0aWMvZm9udHMvZGJfaGVhdmVudC9kYl9oZWF2ZW50X21lZF9pdF92My4yLXdlYmZvbnQud29mZjJcXFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIiksIHVybChcXFwic3RhdGljL2ZvbnRzL2RiX2hlYXZlbnQvZGJfaGVhdmVudF9tZWRfaXRfdjMuMi13ZWJmb250LndvZmZcXFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXN0eWxlOiBub3JtYWw7IH1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnZGJfaGVhdmVudG1lZCc7XFxuICBzcmM6IHVybChcXFwic3RhdGljL2ZvbnRzL2RiX2hlYXZlbnQvZGJfaGVhdmVudF9tZWRfdjMuMi13ZWJmb250LmVvdFxcXCIpO1xcbiAgc3JjOiB1cmwoXFxcInN0YXRpYy9mb250cy9kYl9oZWF2ZW50L2RiX2hlYXZlbnRfbWVkX3YzLjItd2ViZm9udC5lb3Q/I2llZml4XFxcIikgZm9ybWF0KFxcXCJlbWJlZGRlZC1vcGVudHlwZVxcXCIpLCB1cmwoXFxcInN0YXRpYy9mb250cy9kYl9oZWF2ZW50L2RiX2hlYXZlbnRfbWVkX3YzLjItd2ViZm9udC53b2ZmMlxcXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKSwgdXJsKFxcXCJzdGF0aWMvZm9udHMvZGJfaGVhdmVudC9kYl9oZWF2ZW50X21lZF92My4yLXdlYmZvbnQud29mZlxcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDsgfVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdkYl9oZWF2ZW50dGhpbl9pdCc7XFxuICBzcmM6IHVybChcXFwic3RhdGljL2ZvbnRzL2RiX2hlYXZlbnQvZGJfaGVhdmVudF90aGluX2l0X3YzLjItd2ViZm9udC5lb3RcXFwiKTtcXG4gIHNyYzogdXJsKFxcXCJzdGF0aWMvZm9udHMvZGJfaGVhdmVudC9kYl9oZWF2ZW50X3RoaW5faXRfdjMuMi13ZWJmb250LmVvdD8jaWVmaXhcXFwiKSBmb3JtYXQoXFxcImVtYmVkZGVkLW9wZW50eXBlXFxcIiksIHVybChcXFwic3RhdGljL2ZvbnRzL2RiX2hlYXZlbnQvZGJfaGVhdmVudF90aGluX2l0X3YzLjItd2ViZm9udC53b2ZmMlxcXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKSwgdXJsKFxcXCJzdGF0aWMvZm9udHMvZGJfaGVhdmVudC9kYl9oZWF2ZW50X3RoaW5faXRfdjMuMi13ZWJmb250LndvZmZcXFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXN0eWxlOiBub3JtYWw7IH1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnZGJfaGVhdmVudHRoaW4nO1xcbiAgc3JjOiB1cmwoXFxcInN0YXRpYy9mb250cy9kYl9oZWF2ZW50L2RiX2hlYXZlbnRfdGhpbl92My4yLXdlYmZvbnQuZW90XFxcIik7XFxuICBzcmM6IHVybChcXFwic3RhdGljL2ZvbnRzL2RiX2hlYXZlbnQvZGJfaGVhdmVudF90aGluX3YzLjItd2ViZm9udC5lb3Q/I2llZml4XFxcIikgZm9ybWF0KFxcXCJlbWJlZGRlZC1vcGVudHlwZVxcXCIpLCB1cmwoXFxcInN0YXRpYy9mb250cy9kYl9oZWF2ZW50L2RiX2hlYXZlbnRfdGhpbl92My4yLXdlYmZvbnQud29mZjJcXFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIiksIHVybChcXFwic3RhdGljL2ZvbnRzL2RiX2hlYXZlbnQvZGJfaGVhdmVudF90aGluX3YzLjItd2ViZm9udC53b2ZmXFxcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsOyB9XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ2RiX2hlYXZlbnR1bHRyYWxpX2l0JztcXG4gIHNyYzogdXJsKFxcXCJzdGF0aWMvZm9udHMvZGJfaGVhdmVudC9kYl9oZWF2ZW50X3VsbGlfaXRfdjMuMi13ZWJmb250LmVvdFxcXCIpO1xcbiAgc3JjOiB1cmwoXFxcInN0YXRpYy9mb250cy9kYl9oZWF2ZW50L2RiX2hlYXZlbnRfdWxsaV9pdF92My4yLXdlYmZvbnQuZW90PyNpZWZpeFxcXCIpIGZvcm1hdChcXFwiZW1iZWRkZWQtb3BlbnR5cGVcXFwiKSwgdXJsKFxcXCJzdGF0aWMvZm9udHMvZGJfaGVhdmVudC9kYl9oZWF2ZW50X3VsbGlfaXRfdjMuMi13ZWJmb250LndvZmYyXFxcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpLCB1cmwoXFxcInN0YXRpYy9mb250cy9kYl9oZWF2ZW50L2RiX2hlYXZlbnRfdWxsaV9pdF92My4yLXdlYmZvbnQud29mZlxcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDsgfVxcblxcbi5oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdCREZGMjtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxcblxcbi5oZWFkaW5nIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDEwMDA7IH1cXG5cXG5oMSwgaDIsIC5idXR0b24ge1xcbiAgY29sb3I6ICNGRkZGRkY7IH1cXG5cXG5oMSB7XFxuICBmb250LWZhbWlseTogUGFjaWZpY287XFxuICBmb250LXNpemU6IDE0NHB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjMycHg7XFxuICBsaW5lLWhlaWdodDogMTYwcHg7IH1cXG5cXG5oMiB7XFxuICBmb250LWZhbWlseTogJ2RiX2hlYXZlbnRsaWdodCc7XFxuICBmb250LXNpemU6IDQ4cHg7XFxuICBsZXR0ZXItc3BhY2luZzogLTAuMTFweDtcXG4gIGxpbmUtaGVpZ2h0OiA3MHB4O1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7IH1cXG5cXG4uYnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6ICMzRDNFM0U7XFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgcGFkZGluZzogMTBweCA0MHB4O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgbWFyZ2luOiAyMHB4IDA7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LWZhbWlseTogJ2RiX2hlYXZlbnRsaWdodCc7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDJweCAycHggMHB4ICMyMTc2YTk7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IDJweCAycHggMHB4ICMyMTc2YTk7XFxuICBmb250LXNpemU6IDIwcHg7IH1cXG5cXG4uY2FydG9vbiB7XFxuICB3aWR0aDogMTAwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDA7IH1cXG5cXG4uY2FydG9vbi0xIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBjYXJ0b29uLTEgMy40cyBpbmZpbml0ZSBlYXNlLWluLW91dDtcXG4gICAgICAgICAgYW5pbWF0aW9uOiBjYXJ0b29uLTEgMy40cyBpbmZpbml0ZSBlYXNlLWluLW91dDtcXG4gIGxlZnQ6IDQ1JTtcXG4gIHotaW5kZXg6IDEwMDA7XFxuICBib3R0b206IC0yMHB4OyB9XFxuXFxuLmNhcnRvb24tMiB7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogY2FydG9vbi0yIDIuNXMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XFxuICAgICAgICAgIGFuaW1hdGlvbjogY2FydG9vbi0yIDIuNXMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XFxuICBsZWZ0OiAzMCU7XFxuICB3aWR0aDogNjBweDsgfVxcblxcbi5jYXJ0b29uLTMge1xcbiAgLXdlYmtpdC1hbmltYXRpb246IGNhcnRvb24tMyAzcyBpbmZpbml0ZSBlYXNlLWluLW91dDtcXG4gICAgICAgICAgYW5pbWF0aW9uOiBjYXJ0b29uLTMgM3MgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XFxuICBsZWZ0OiA3MCU7XFxuICB3aWR0aDogNTBweDsgfVxcblxcbi53YXRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHotaW5kZXg6IDU7XFxuICBib3R0b206IC0yMHB4O1xcbiAgbGVmdDogMDtcXG4gIGJhY2tncm91bmQ6ICMzMmJhZmE7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDUwJSk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDUwJSk7IH1cXG5cXG4ud2F0ZXJfX2lubmVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA1MCU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxcblxcbi53YXRlcl9fd2F2ZSB7XFxuICAgIHdpZHRoOiAyMDAlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMTAwJTtcXG4gICAgei1pbmRleDogOTk5O1xcbiAgICBib3R0b206IC0xcHg7IH1cXG5cXG4ud2F0ZXJfX3dhdmVfYmFjayB7XFxuICAgICAgcmlnaHQ6IDA7XFxuICAgICAgZmlsbDogI0Y3RkRGQztcXG4gICAgICAtd2Via2l0LWFuaW1hdGlvbjogd2F2ZS1iYWNrIDMuNXMgaW5maW5pdGUgbGluZWFyO1xcbiAgICAgICAgICAgICAgYW5pbWF0aW9uOiB3YXZlLWJhY2sgMy41cyBpbmZpbml0ZSBsaW5lYXI7XFxuICAgICAgei1pbmRleDogMTAwMTsgfVxcblxcbi53YXRlcl9fd2F2ZV9mcm9udCB7XFxuICAgICAgbGVmdDogMDtcXG4gICAgICBmaWxsOiAjQTJFOEY1O1xcbiAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiB3YXZlLWZyb250IDNzIGluZmluaXRlIGxpbmVhcjtcXG4gICAgICAgICAgICAgIGFuaW1hdGlvbjogd2F2ZS1mcm9udCAzcyBpbmZpbml0ZSBsaW5lYXI7IH1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgd2F2ZS1mcm9udCB7XFxuICAxMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTsgfSB9XFxuXFxuQGtleWZyYW1lcyB3YXZlLWZyb250IHtcXG4gIDEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApOyB9IH1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgd2F2ZS1iYWNrIHtcXG4gIDEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgMCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCAwKTsgfSB9XFxuXFxuQGtleWZyYW1lcyB3YXZlLWJhY2sge1xcbiAgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCAwKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIDApOyB9IH1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgY2FydG9vbi0xIHtcXG4gIDUwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMCUpIHJvdGF0ZSgtMmRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMCUpIHJvdGF0ZSgtMmRlZyk7IH0gfVxcblxcbkBrZXlmcmFtZXMgY2FydG9vbi0xIHtcXG4gIDUwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMCUpIHJvdGF0ZSgtMmRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMCUpIHJvdGF0ZSgtMmRlZyk7IH0gfVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBjYXJ0b29uLTIge1xcbiAgNTAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUlKSByb3RhdGUoLTJkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNSUpIHJvdGF0ZSgtMmRlZyk7IH0gfVxcblxcbkBrZXlmcmFtZXMgY2FydG9vbi0yIHtcXG4gIDUwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01JSkgcm90YXRlKC0yZGVnKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUlKSByb3RhdGUoLTJkZWcpOyB9IH1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgY2FydG9vbi0zIHtcXG4gIDUwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMCUpIHJvdGF0ZSgtMmRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMCUpIHJvdGF0ZSgtMmRlZyk7IH0gfVxcblxcbkBrZXlmcmFtZXMgY2FydG9vbi0zIHtcXG4gIDUwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMCUpIHJvdGF0ZSgtMmRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMCUpIHJvdGF0ZSgtMmRlZyk7IH0gfVxcblxcbiNzZWN0aW9uMiB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y3RkRGQztcXG4gIHBhZGRpbmc6IDQwcHggMDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxuICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cXG5cXG5oMywgaDQge1xcbiAgZm9udC1mYW1pbHk6ICcuU0ZOU0Rpc3BsYXknO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuXFxuaDMge1xcbiAgZm9udC1mYW1pbHk6ICdkYl9oZWF2ZW50bGlnaHQnO1xcbiAgZm9udC1zaXplOiA1MHB4O1xcbiAgY29sb3I6ICM0NTQ5NTA7XFxuICBsZXR0ZXItc3BhY2luZzogLTAuMTFweDtcXG4gIGxpbmUtaGVpZ2h0OiA4MnB4OyB9XFxuXFxuaDQge1xcbiAgZm9udC1mYW1pbHk6ICdkYl9oZWF2ZW50dGhpbic7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBjb2xvcjogIzk1OUFBODtcXG4gIGxpbmUtaGVpZ2h0OiAzNnB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDEuMnB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweCAhaW1wb3J0YW50OyB9XFxuXFxuaDQgYSB7XFxuICBjb2xvcjogIzMzMztcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGxldHRlci1zcGFjaW5nOiAxLjJweDsgfVxcblxcbmZvcm0ge1xcbiAgd2lkdGg6IDkwMHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87IH1cXG5cXG4ucGFkZGluZyB7XFxuICBwYWRkaW5nOiAxMHB4OyB9XFxuXFxuLmZsZXgge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7IH1cXG5cXG4uZmxleC13cmFwIHtcXG4gIC1tcy1mbGV4LXdyYXA6IHdyYXA7XFxuICAgICAgZmxleC13cmFwOiB3cmFwOyB9XFxuXFxuLmZsZXgtMS0zIHtcXG4gIC13ZWJraXQtYm94LWZsZXg6IDE7XFxuICAgICAgLW1zLWZsZXg6IDE7XFxuICAgICAgICAgIGZsZXg6IDE7XFxuICB3aWR0aDogMzIlOyB9XFxuXFxuLmZsZXgtMSB7XFxuICB3aWR0aDogMTAwJTsgfVxcblxcbmlucHV0LFxcbnRleHRhcmVhIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMTVweCAyMHB4O1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgb3V0bGluZTogMDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICBmb250LWZhbWlseTogJ2RiX2hlYXZlbnRsaWdodCc7XFxuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI0VERURFRDsgfVxcblxcbmlucHV0OmZvY3VzLFxcbnRleHRhcmVhOmZvY3VzIHtcXG4gIGJvcmRlci1jb2xvcjogI0RERDsgfVxcblxcbmJ1dHRvbiB7XFxuICBmb250LWZhbWlseTogJ2RiX2hlYXZlbnRsaWdodCc7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbjogMjBweCBhdXRvO1xcbiAgcGFkZGluZzogMTBweCA0MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ1NDk1MDtcXG4gIGNvbG9yOiAjRkZGO1xcbiAgYm9yZGVyOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMnB4IDJweCAwcHggIzAwMDtcXG4gICAgICAgICAgYm94LXNoYWRvdzogMnB4IDJweCAwcHggIzAwMDtcXG4gIG91dGxpbmU6IDA7IH1cXG5cXG5mb290ZXIge1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XFxuICBmb250LWZhbWlseTogJ2RiX2hlYXZlbnRtZWQnOyB9XFxuXFxuLmZsZXgtaGFsZiB7XFxuICAtd2Via2l0LWJveC1mbGV4OiAxO1xcbiAgICAgIC1tcy1mbGV4OiAxO1xcbiAgICAgICAgICBmbGV4OiAxOyB9XFxuXFxuLndyYXBwZXIge1xcbiAgd2lkdGg6IDkwMHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87IH1cXG5cXG4ud3JhcHBlciAubGVmdCB7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIGxldHRlci1zcGFjaW5nOiAxLjJweDsgfVxcblxcbi53cmFwcGVyIC5yaWdodCB7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0OyB9XFxuXFxuLndyYXBwZXIgLnJpZ2h0IGEge1xcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgICBjb2xvcjogIzIyMjsgfVxcblwiXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNjc3MvaW5kZXguc2NzcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuY2xhc3MgRm9vdGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxmb290ZXI+XG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXIgZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtaGFsZiBsZWZ0XCI+SW50aGFuaW4gR3VpbGQgQ2FtcDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtaGFsZiByaWdodFwiPjxMaW5rIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vaW50aGFuaW5ndWlkZWNhbXAvXCI+PGEgdGFyZ2V0PVwiX2JsYW5rXCI+RmFucGFnZTwvYT48L0xpbms+PC9kaXY+XG4gICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZm9vdGVyPlxuICAgICAgICApXG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9Gb290ZXIuanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbmNsYXNzIEZvcm0gZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgc2VuZERhdGEoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBheGlvcy5wb3N0KCcvcG9zdCcsIHtcbiAgICAgICAgICAgIG5hbWU6IHRoaXMucmVmcy5mbmFtZS52YWx1ZSxcbiAgICAgICAgICAgIGxuYW1lOiB0aGlzLnJlZnMubG5hbWUudmFsdWUsXG4gICAgICAgICAgICBubmFtZTogdGhpcy5yZWZzLm5uYW1lLnZhbHVlLFxuICAgICAgICAgICAgd2h5OiB0aGlzLnJlZnMud2h5LnZhbHVlLFxuICAgICAgICB9KVxuICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHNlY3Rpb24gaWQ9XCJzZWN0aW9uMlwiPlxuICAgICAgICAgICAgICAgIDxoMz7guYPguJrguKrguKHguLHguITguKPguYDguJvguYfguJnguJ7guLXguYggU3RhZmY8L2gzPlxuICAgICAgICAgICAgICAgIDxoND7guKrguLPguKvguKPguLHguJrguIHguLLguKPguYDguJvguYfguJnguJ7guLXguYggU3RhZmYg4LiZ4Lix4LmJ4LiZ4LiX4Li44LiB4LiE4LiZ4LiI4Liw4LiW4Li54LiB4LiE4Lix4LiU4LmA4Lil4Li34Lit4LiB4LiI4Liy4LiB4Lie4Li14LmI4LmG4LiB4Lil4Li44LmI4Lih4Lih4Lir4Liy4Lin4Li04LiX4Lii4Liy4Lil4Lix4Lii4LiL4Li24LmI4LiH4Lic4Lil4Lib4Lij4Liw4LiB4Liy4Lio4LiI4Liw4LmB4LiI4LmJ4LiH4LmD4Lir4LmJ4LiX4Lij4Liy4Lia4Lic4LmI4Liy4LiZ4LiX4Liy4LiHIDxhIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vaW50aGFuaW5ndWlkZWNhbXAvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+RmFucGFnZTwvYT48L2g0PlxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLnNlbmREYXRhLmJpbmQodGhpcyl9IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xLTMgcGFkZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCLguIrguLfguYjguK1cIiByZWY9XCJmbmFtZVwiIG5hbWU9XCJmbmFtZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xLTMgcGFkZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCLguJnguLLguKHguKrguIHguLjguKVcIiByZWY9XCJsbmFtZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xLTMgcGFkZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCLguIrguLfguYjguK3guYDguKXguYjguJlcIiByZWY9XCJubmFtZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgcGFkZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIHBsYWNlaG9sZGVyPVwi4LiX4Liz4LmE4Lih4LiW4Li24LiH4Liq4Lih4Lix4LiE4Lij4LmA4Lib4LmH4LiZ4Lie4Li14LmIIFN0YWZmP1wiIHJlZj1cIndoeVwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj7guKrguYjguIfguITguLPguJXguK3guJo8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICApXG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEZvcm1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvRm9ybS5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBTY3JvbGxjaG9yIGZyb20gJ3JlYWN0LXNjcm9sbGNob3InO1xuXG5jbGFzcyBIZXJvIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgxPkludGhhbmluPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPGgyPmd1aWRlIGNhbXAgIzE8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8U2Nyb2xsY2hvciB0bz1cIiNzZWN0aW9uMlwiIGFuaW1hdGU9e3sgb2Zmc2V0OiAwLCBkdXJhdGlvbjogODAwIH19IGNsYXNzTmFtZT1cImJ1dHRvblwiPuC4quC4oeC4seC4hOC4o+C5gOC4m+C5h+C4mSBTdGFmZjwvU2Nyb2xsY2hvcj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8c3ZnIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeD1cIjBweFwiIHk9XCIwcHhcIiBzdHlsZT17e2Rpc3BsYXk6ICdub25lJ319PlxuICAgICAgICAgICAgICAgICAgICA8c3ltYm9sIGlkPVwid2F2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk00MjAsMjBjMjEuNS0wLjQsMzguOC0yLjUsNTEuMS00LjVjMTMuNC0yLjIsMjYuNS01LjIsMjcuMy01LjRDNTE0LDYuNSw1MTgsNC43LDUyOC41LDIuN2M3LjEtMS4zLDE3LjktMi44LDMxLjUtMi43YzAsMCwwLDAsMCwwdjIwSDQyMHpcIj48L3BhdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTQyMCwyMGMtMjEuNS0wLjQtMzguOC0yLjUtNTEuMS00LjVjLTEzLjQtMi4yLTI2LjUtNS4yLTI3LjMtNS40QzMyNiw2LjUsMzIyLDQuNywzMTEuNSwyLjdDMzA0LjMsMS40LDI5My42LTAuMSwyODAsMGMwLDAsMCwwLDAsMHYyMEg0MjB6XCI+PC9wYXRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xNDAsMjBjMjEuNS0wLjQsMzguOC0yLjUsNTEuMS00LjVjMTMuNC0yLjIsMjYuNS01LjIsMjcuMy01LjRDMjM0LDYuNSwyMzgsNC43LDI0OC41LDIuN2M3LjEtMS4zLDE3LjktMi44LDMxLjUtMi43YzAsMCwwLDAsMCwwdjIwSDE0MHpcIj48L3BhdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE0MCwyMGMtMjEuNS0wLjQtMzguOC0yLjUtNTEuMS00LjVjLTEzLjQtMi4yLTI2LjUtNS4yLTI3LjMtNS40QzQ2LDYuNSw0Miw0LjcsMzEuNSwyLjdDMjQuMywxLjQsMTMuNi0wLjEsMCwwYzAsMCwwLDAsMCwwbDAsMjBIMTQwelwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgICAgPC9zeW1ib2w+XG4gICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJ3YXRlcl9fd2F2ZSB3YXRlcl9fd2F2ZV9mcm9udFwiIHZpZXdCb3g9XCIwIDAgNTYwIDIwXCI+XG4gICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbmtIcmVmPVwiI3dhdmVcIj48L3VzZT5cbiAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cIndhdGVyX193YXZlIHdhdGVyX193YXZlX2JhY2tcIiB2aWV3Qm94PVwiMCAwIDU2MCAyMFwiPlxuICAgICAgICAgICAgICAgICAgICA8dXNlIHhsaW5rSHJlZj1cIiN3YXZlXCI+PC91c2U+XG4gICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJzdGF0aWMvaW1hZ2VzL0NhcnRvb24tMi5zdmdcIiBjbGFzc05hbWU9XCJjYXJ0b29uIGNhcnRvb24tMVwiIC8+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJzdGF0aWMvaW1hZ2VzL0NhcnRvb24uc3ZnXCIgY2xhc3NOYW1lPVwiY2FydG9vbiBjYXJ0b29uLTJcIiAvPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwic3RhdGljL2ltYWdlcy9DYXJ0b29uLnN2Z1wiIGNsYXNzTmFtZT1cImNhcnRvb24gY2FydG9vbi0zXCIgLz5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVybztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0hlcm8uanMiXSwibWFwcGluZ3MiOiI7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7Ozs7OztBQUNBOzs7Ozs7Ozs7OztBQUVBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBR0E7QUFIQTtBQUFBOzs7OztBQU1BO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7O0FBR0E7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7Ozs7O0FBSUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7O0FBRUE7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFQQTtBQVVBO0FBR0E7Ozs7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTtBQUZBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBR0E7QUFIQTtBQUdBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUdBO0FBSEE7QUFHQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBS0E7Ozs7O0FBSUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdERBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUdBO0FBSEE7QUFHQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTtBQUZBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBR0E7QUFIQTs7Ozs7O0FBTUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        