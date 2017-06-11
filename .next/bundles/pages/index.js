
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 546:
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

module.exports = "html, body, h1, h2, h3, h4 {\n  padding: 0;\n  margin: 0; }\n\nbody {\n  overflow-x: hidden; }\n\n@font-face {\n  font-family: 'db_heaventbold_it';\n  src: url(\"static/fonts/db_heavent/db_heavent_bd_it_v3.2-webfont.eot\");\n  src: url(\"static/fonts/db_heavent/db_heavent_bd_it_v3.2-webfont.eot?#iefix\") format(\"embedded-opentype\"), url(\"static/fonts/db_heavent/db_heavent_bd_it_v3.2-webfont.woff2\") format(\"woff2\"), url(\"static/fonts/db_heavent/db_heavent_bd_it_v3.2-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: 'db_heaventbold';\n  src: url(\"static/fonts/db_heavent/db_heavent_bd_v3.2-webfont.eot\");\n  src: url(\"static/fonts/db_heavent/db_heavent_bd_v3.2-webfont.eot?#iefix\") format(\"embedded-opentype\"), url(\"static/fonts/db_heavent/db_heavent_bd_v3.2-webfont.woff2\") format(\"woff2\"), url(\"static/fonts/db_heavent/db_heavent_bd_v3.2-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: 'db_heaventblack_it';\n  src: url(\"static/fonts/db_heavent/db_heavent_blk_it_v3.2-webfont.eot\");\n  src: url(\"static/fonts/db_heavent/db_heavent_blk_it_v3.2-webfont.eot?#iefix\") format(\"embedded-opentype\"), url(\"static/fonts/db_heavent/db_heavent_blk_it_v3.2-webfont.woff2\") format(\"woff2\"), url(\"static/fonts/db_heavent/db_heavent_blk_it_v3.2-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: 'db_heaventblack';\n  src: url(\"static/fonts/db_heavent/db_heavent_blk_v3.2-webfont.eot\");\n  src: url(\"static/fonts/db_heavent/db_heavent_blk_v3.2-webfont.eot?#iefix\") format(\"embedded-opentype\"), url(\"static/fonts/db_heavent/db_heavent_blk_v3.2-webfont.woff2\") format(\"woff2\"), url(\"static/fonts/db_heavent/db_heavent_blk_v3.2-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: 'db_heaventitalic';\n  src: url(\"static/fonts/db_heavent/db_heavent_it_v3.2-webfont.eot\");\n  src: url(\"static/fonts/db_heavent/db_heavent_it_v3.2-webfont.eot?#iefix\") format(\"embedded-opentype\"), url(\"static/fonts/db_heavent/db_heavent_it_v3.2-webfont.woff2\") format(\"woff2\"), url(\"static/fonts/db_heavent/db_heavent_it_v3.2-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: 'db_heaventlight_it';\n  src: url(\"static/fonts/db_heavent/db_heavent_li_it_v3.2-webfont.eot\");\n  src: url(\"static/fonts/db_heavent/db_heavent_li_it_v3.2-webfont.eot?#iefix\") format(\"embedded-opentype\"), url(\"static/fonts/db_heavent/db_heavent_li_it_v3.2-webfont.woff2\") format(\"woff2\"), url(\"static/fonts/db_heavent/db_heavent_li_it_v3.2-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: 'db_heaventlight';\n  src: url(\"static/fonts/db_heavent/db_heavent_li_v3.2-webfont.eot\");\n  src: url(\"static/fonts/db_heavent/db_heavent_li_v3.2-webfont.eot?#iefix\") format(\"embedded-opentype\"), url(\"static/fonts/db_heavent/db_heavent_li_v3.2-webfont.woff2\") format(\"woff2\"), url(\"static/fonts/db_heavent/db_heavent_li_v3.2-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: 'db_heaventmed_it';\n  src: url(\"static/fonts/db_heavent/db_heavent_med_it_v3.2-webfont.eot\");\n  src: url(\"static/fonts/db_heavent/db_heavent_med_it_v3.2-webfont.eot?#iefix\") format(\"embedded-opentype\"), url(\"static/fonts/db_heavent/db_heavent_med_it_v3.2-webfont.woff2\") format(\"woff2\"), url(\"static/fonts/db_heavent/db_heavent_med_it_v3.2-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: 'db_heaventmed';\n  src: url(\"static/fonts/db_heavent/db_heavent_med_v3.2-webfont.eot\");\n  src: url(\"static/fonts/db_heavent/db_heavent_med_v3.2-webfont.eot?#iefix\") format(\"embedded-opentype\"), url(\"static/fonts/db_heavent/db_heavent_med_v3.2-webfont.woff2\") format(\"woff2\"), url(\"static/fonts/db_heavent/db_heavent_med_v3.2-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: 'db_heaventthin_it';\n  src: url(\"static/fonts/db_heavent/db_heavent_thin_it_v3.2-webfont.eot\");\n  src: url(\"static/fonts/db_heavent/db_heavent_thin_it_v3.2-webfont.eot?#iefix\") format(\"embedded-opentype\"), url(\"static/fonts/db_heavent/db_heavent_thin_it_v3.2-webfont.woff2\") format(\"woff2\"), url(\"static/fonts/db_heavent/db_heavent_thin_it_v3.2-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: 'db_heaventthin';\n  src: url(\"static/fonts/db_heavent/db_heavent_thin_v3.2-webfont.eot\");\n  src: url(\"static/fonts/db_heavent/db_heavent_thin_v3.2-webfont.eot?#iefix\") format(\"embedded-opentype\"), url(\"static/fonts/db_heavent/db_heavent_thin_v3.2-webfont.woff2\") format(\"woff2\"), url(\"static/fonts/db_heavent/db_heavent_thin_v3.2-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: 'db_heaventultrali_it';\n  src: url(\"static/fonts/db_heavent/db_heavent_ulli_it_v3.2-webfont.eot\");\n  src: url(\"static/fonts/db_heavent/db_heavent_ulli_it_v3.2-webfont.eot?#iefix\") format(\"embedded-opentype\"), url(\"static/fonts/db_heavent/db_heavent_ulli_it_v3.2-webfont.woff2\") format(\"woff2\"), url(\"static/fonts/db_heavent/db_heavent_ulli_it_v3.2-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal; }\n\n.header {\n  background-color: #7BDFF2;\n  height: 100vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  position: relative;\n  overflow: hidden; }\n\n.heading {\n  text-align: center;\n  position: relative;\n  z-index: 1000; }\n\nh1, h2, .button {\n  color: #FFFFFF; }\n\nh1 {\n  font-family: Pacifico;\n  font-size: 144px;\n  letter-spacing: -0.32px;\n  line-height: 160px; }\n\nh2 {\n  font-family: 'db_heaventlight';\n  font-size: 48px;\n  letter-spacing: -0.11px;\n  line-height: 70px;\n  text-transform: uppercase;\n  font-weight: normal; }\n\n.button {\n  background: #3D3E3E;\n  border-radius: 30px;\n  padding: 10px 40px;\n  text-decoration: none;\n  margin: 20px 0;\n  display: inline-block;\n  font-family: 'db_heaventlight';\n  -webkit-box-shadow: 2px 2px 0px #2176a9;\n          box-shadow: 2px 2px 0px #2176a9;\n  font-size: 20px; }\n\n.cartoon {\n  width: 100px;\n  position: absolute;\n  bottom: 0; }\n\n.cartoon-1 {\n  -webkit-animation: cartoon-1 3.4s infinite ease-in-out;\n          animation: cartoon-1 3.4s infinite ease-in-out;\n  left: 45%;\n  z-index: 1000;\n  bottom: -20px; }\n\n.cartoon-2 {\n  -webkit-animation: cartoon-2 2.5s infinite ease-in-out;\n          animation: cartoon-2 2.5s infinite ease-in-out;\n  left: 30%;\n  width: 60px; }\n\n.cartoon-3 {\n  -webkit-animation: cartoon-3 3s infinite ease-in-out;\n          animation: cartoon-3 3s infinite ease-in-out;\n  left: 70%;\n  width: 50px; }\n\n.water {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  z-index: 5;\n  bottom: -20px;\n  left: 0;\n  background: #32bafa;\n  -webkit-transform: translate(0, 50%);\n          transform: translate(0, 50%); }\n\n.water__inner {\n    position: absolute;\n    width: 100%;\n    height: 50%;\n    top: 0;\n    left: 0;\n    overflow: hidden; }\n\n.water__wave {\n    width: 200%;\n    position: absolute;\n    bottom: 100%;\n    z-index: 999;\n    bottom: -1px; }\n\n.water__wave_back {\n      right: 0;\n      fill: #F7FDFC;\n      -webkit-animation: wave-back 3.5s infinite linear;\n              animation: wave-back 3.5s infinite linear;\n      z-index: 1001; }\n\n.water__wave_front {\n      left: 0;\n      fill: #A2E8F5;\n      -webkit-animation: wave-front 3s infinite linear;\n              animation: wave-front 3s infinite linear; }\n\n@-webkit-keyframes wave-front {\n  100% {\n    -webkit-transform: translate(-50%, 0);\n            transform: translate(-50%, 0); } }\n\n@keyframes wave-front {\n  100% {\n    -webkit-transform: translate(-50%, 0);\n            transform: translate(-50%, 0); } }\n\n@-webkit-keyframes wave-back {\n  100% {\n    -webkit-transform: translate(50%, 0);\n            transform: translate(50%, 0); } }\n\n@keyframes wave-back {\n  100% {\n    -webkit-transform: translate(50%, 0);\n            transform: translate(50%, 0); } }\n\n@-webkit-keyframes cartoon-1 {\n  50% {\n    -webkit-transform: translateY(-10%) rotate(-2deg);\n            transform: translateY(-10%) rotate(-2deg); } }\n\n@keyframes cartoon-1 {\n  50% {\n    -webkit-transform: translateY(-10%) rotate(-2deg);\n            transform: translateY(-10%) rotate(-2deg); } }\n\n@-webkit-keyframes cartoon-2 {\n  50% {\n    -webkit-transform: translateY(-5%) rotate(-2deg);\n            transform: translateY(-5%) rotate(-2deg); } }\n\n@keyframes cartoon-2 {\n  50% {\n    -webkit-transform: translateY(-5%) rotate(-2deg);\n            transform: translateY(-5%) rotate(-2deg); } }\n\n@-webkit-keyframes cartoon-3 {\n  50% {\n    -webkit-transform: translateY(-10%) rotate(-2deg);\n            transform: translateY(-10%) rotate(-2deg); } }\n\n@keyframes cartoon-3 {\n  50% {\n    -webkit-transform: translateY(-10%) rotate(-2deg);\n            transform: translateY(-10%) rotate(-2deg); } }\n\n#section2 {\n  height: 100%;\n  background-color: #F7FDFC;\n  padding: 40px 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\nh3, h4 {\n  font-family: '.SFNSDisplay';\n  text-align: center; }\n\nh3 {\n  font-family: 'db_heaventlight';\n  font-size: 50px;\n  color: #454950;\n  letter-spacing: -0.11px;\n  line-height: 82px; }\n\nh4 {\n  font-family: 'db_heaventthin';\n  font-size: 24px;\n  color: #959AA8;\n  line-height: 36px;\n  letter-spacing: 1.2px;\n  margin-bottom: 20px !important; }\n\nh4 a {\n  color: #333;\n  text-decoration: none;\n  letter-spacing: 1.2px; }\n\nform {\n  width: 900px;\n  margin: 0 auto; }\n\n.padding {\n  padding: 10px; }\n\n.flex {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.flex-wrap {\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n\n.flex-1-3 {\n  -ms-flex-preferred-size: 31.1%;\n      flex-basis: 31.1%; }\n\n.flex-1-2 {\n  -ms-flex-preferred-size: 47.7%;\n      flex-basis: 47.7%; }\n\n.flex-1 {\n  width: 100%; }\n\ninput,\ntextarea {\n  width: 100%;\n  padding: 15px 20px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  outline: 0;\n  font-size: 20px;\n  border-radius: 30px;\n  font-family: 'db_heaventlight';\n  background: #FFFFFF;\n  border: 1px solid #EDEDED; }\n\ninput.required,\n  textarea.required {\n    border-color: red; }\n\ntextarea {\n  min-height: 150px; }\n\ninput:focus,\ntextarea:focus {\n  border-color: #DDD; }\n\nbutton {\n  font-family: 'db_heaventlight';\n  font-size: 20px;\n  cursor: pointer;\n  display: block;\n  margin: 20px auto;\n  padding: 10px 40px;\n  background-color: #454950;\n  color: #FFF;\n  border: 0;\n  border-radius: 20px;\n  -webkit-box-shadow: 2px 2px 0px #000;\n          box-shadow: 2px 2px 0px #000;\n  outline: 0; }\n\nfooter {\n  padding: 20px;\n  background-color: #FFF;\n  font-family: 'db_heaventmed'; }\n\n.flex-half {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\n\n.wrapper {\n  width: 900px;\n  margin: 0 auto; }\n\n.wrapper .left {\n    text-transform: uppercase;\n    letter-spacing: 1.2px; }\n\n.wrapper .right {\n    text-transform: uppercase;\n    text-align: right; }\n\n.wrapper .right a {\n      text-decoration: none;\n      color: #222; }\n\n.popup {\n  position: fixed;\n  top: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.3);\n  color: #000;\n  z-index: 9999; }\n\n.popup .close {\n    width: 10px;\n    height: 10px;\n    position: absolute;\n    right: 0;\n    top: 0;\n    padding: 20px;\n    cursor: pointer; }\n\n.popup .close:before, .popup .close:after {\n      content: '';\n      display: block;\n      width: 2px;\n      height: 20px;\n      background-color: #333;\n      position: absolute; }\n\n.popup .close:before {\n      -webkit-transform: rotate(45deg);\n              transform: rotate(45deg); }\n\n.popup .close:after {\n      -webkit-transform: rotate(135deg);\n              transform: rotate(135deg); }\n\n.popup .card {\n    background-color: #fff;\n    padding: 40px;\n    border-radius: 10px;\n    width: 30%;\n    height: 200px;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    position: relative; }\n\n.popup .card h4, .popup .card p {\n      margin: 0; }\n\n.popup .card h4 {\n      font-size: 40px;\n      color: #222; }\n\n.popup .card p {\n      font-family: 'db_heaventlight';\n      text-align: center;\n      letter-spacing: 1.2px;\n      color: #222;\n      font-size: 20px; }\n\n.popup .card iframe {\n      margin-top: 20px; }\n";

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

var _link = __webpack_require__(545);

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

var _axios = __webpack_require__(547);

var _axios2 = _interopRequireDefault(_axios);

var _link = __webpack_require__(545);

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/kopkap/Desktop/works/inthanin-camp-next/components/Form.js';

// import MyOwnInput from './form/MyOwnInput'

var Form = function (_Component) {
    (0, _inherits3.default)(Form, _Component);

    function Form(props) {
        (0, _classCallCheck3.default)(this, Form);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Form.__proto__ || (0, _getPrototypeOf2.default)(Form)).call(this, props));

        _this.state = {
            submit: false,
            message: {
                title: 'ไม่สามารถลงทะเบียนได้'
            }
        };
        return _this;
    }

    (0, _createClass3.default)(Form, [{
        key: 'sendData',
        value: function sendData(event) {
            event.preventDefault();

            var data = {
                fname: this.refs.fname.value,
                nname: this.refs.nname.value,
                gen: this.refs.gen.value,
                facebook: this.refs.facebook.value,
                interest: this.refs.interest.value,
                skill: this.refs.skill.value,
                camp: this.refs.camp.value,
                activity_favorite: this.refs.activity_favorite.value,
                why: this.refs.why.value,
                suggestion: this.refs.suggestion.value
            };

            _axios2.default.post('/staff', data).then(function (response) {
                if (response.data.added) {
                    this.setState({
                        submit: true,
                        message: {
                            title: 'สมัครเรียบร้อย'
                        }
                    });
                }
            }.bind(this)).catch(function (error) {
                console.log(error);
            });
        }
    }, {
        key: 'popup',
        value: function popup() {
            var _this2 = this;

            if (this.state.submit) {
                return _react2.default.createElement('div', { className: 'popup', onClick: function onClick() {
                        return _this2.closePopup();
                    }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 56
                    }
                }, _react2.default.createElement('div', { className: 'card', onClick: function onClick(e) {
                        return e.stopPropagation();
                    }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 57
                    }
                }, _react2.default.createElement('div', { className: 'close', onClick: function onClick() {
                        return _this2.closePopup();
                    }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 58
                    }
                }), _react2.default.createElement('h4', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 59
                    }
                }, this.state.message.title), _react2.default.createElement('p', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 60
                    }
                }, '\u0E01\u0E14\u0E41\u0E0A\u0E23\u0E4C\u0E25\u0E07 Facebook'), _react2.default.createElement('iframe', { src: 'https://www.facebook.com/plugins/share_button.php?href=http%3A%2F%2Fwww.inthanincamp.xyz%2F&layout=button_count&size=large&mobile_iframe=true&width=74&height=28&appId', width: '74', height: '28', style: { border: 'none', overflow: 'hidden', scrolling: 'no', frameborder: 0, allowTransparency: 'true' }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 61
                    }
                })));
            }
        }
    }, {
        key: 'closePopup',
        value: function closePopup() {
            this.setState({ submit: false });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                }
            }, _react2.default.createElement('section', { id: 'section2', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 75
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 76
                }
            }, '\u0E43\u0E1A\u0E2A\u0E21\u0E31\u0E04\u0E23\u0E40\u0E1B\u0E47\u0E19\u0E1E\u0E35\u0E48 Staff'), _react2.default.createElement('h4', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 77
                }
            }, '\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E40\u0E1B\u0E47\u0E19\u0E1E\u0E35\u0E48 Staff \u0E19\u0E31\u0E49\u0E19\u0E17\u0E38\u0E01\u0E04\u0E19\u0E08\u0E30\u0E16\u0E39\u0E01\u0E04\u0E31\u0E14\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E1E\u0E35\u0E48\u0E46\u0E01\u0E25\u0E38\u0E48\u0E21\u0E21\u0E2B\u0E32\u0E27\u0E34\u0E17\u0E22\u0E32\u0E25\u0E31\u0E22\u0E0B\u0E36\u0E48\u0E07\u0E1C\u0E25\u0E1B\u0E23\u0E30\u0E01\u0E32\u0E28\u0E08\u0E30\u0E41\u0E08\u0E49\u0E07\u0E43\u0E2B\u0E49\u0E17\u0E23\u0E32\u0E1A\u0E1C\u0E48\u0E32\u0E19\u0E17\u0E32\u0E07 ', _react2.default.createElement('a', { href: 'https://www.facebook.com/inthaninguidecamp/', target: '_blank', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 77
                }
            }, 'Fanpage'), ' ', _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 77
                }
            }), '\u0E42\u0E1B\u0E23\u0E14\u0E01\u0E23\u0E2D\u0E01\u0E41\u0E1A\u0E1A\u0E1F\u0E2D\u0E23\u0E4C\u0E21\u0E43\u0E2B\u0E49\u0E14\u0E35\u0E17\u0E35\u0E48\u0E2A\u0E38\u0E14'), _react2.default.createElement('form', { onSubmit: this.sendData.bind(this), className: 'flex flex-wrap', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 79
                }
            }, _react2.default.createElement('div', { className: 'flex-1-3 padding', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 80
                }
            }, _react2.default.createElement('input', { type: 'text', placeholder: '\u0E0A\u0E37\u0E48\u0E2D - \u0E19\u0E32\u0E21\u0E2A\u0E01\u0E38\u0E25', ref: 'fname', required: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 81
                }
            })), _react2.default.createElement('div', { className: 'flex-1-3 padding', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 83
                }
            }, _react2.default.createElement('input', { type: 'text', placeholder: '\u0E0A\u0E37\u0E48\u0E2D\u0E40\u0E25\u0E48\u0E19', ref: 'nname', required: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 84
                }
            })), _react2.default.createElement('div', { className: 'flex-1-3 padding', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 86
                }
            }, _react2.default.createElement('input', { type: 'text', placeholder: '\u0E2D\u0E34\u0E19\u0E17\u0E19\u0E34\u0E25\u0E23\u0E38\u0E48\u0E19', ref: 'gen', required: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 87
                }
            })), _react2.default.createElement('div', { className: 'flex-1 padding', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 89
                }
            }, _react2.default.createElement('input', { type: 'text', placeholder: '\u0E0A\u0E37\u0E48\u0E2D Facebook', ref: 'facebook', required: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 90
                }
            })), _react2.default.createElement('div', { className: 'flex-1-2 padding', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 92
                }
            }, _react2.default.createElement('textarea', { placeholder: '\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E19\u0E43\u0E08', ref: 'interest', required: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 93
                }
            })), _react2.default.createElement('div', { className: 'flex-1-2 padding', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 96
                }
            }, _react2.default.createElement('textarea', { placeholder: '\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E1E\u0E34\u0E40\u0E28\u0E29', ref: 'skill', required: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 97
                }
            })), _react2.default.createElement('div', { className: 'flex-1-2 padding', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 100
                }
            }, _react2.default.createElement('textarea', { placeholder: '\u0E40\u0E04\u0E22\u0E1C\u0E48\u0E32\u0E19\u0E04\u0E48\u0E32\u0E22\u0E44\u0E2B\u0E19\u0E21\u0E32\u0E1A\u0E49\u0E32\u0E07 (\u0E40\u0E27\u0E49\u0E19\u0E27\u0E48\u0E32\u0E07\u0E44\u0E14\u0E49)', ref: 'camp', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 101
                }
            })), _react2.default.createElement('div', { className: 'flex-1-2 padding', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 104
                }
            }, _react2.default.createElement('textarea', { placeholder: '\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E17\u0E35\u0E48\u0E1B\u0E23\u0E30\u0E17\u0E31\u0E1A\u0E43\u0E08 \u0E40\u0E1E\u0E23\u0E32\u0E30\u0E2D\u0E30\u0E44\u0E23', ref: 'activity_favorite', required: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 105
                }
            })), _react2.default.createElement('div', { className: 'flex-1 padding', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 108
                }
            }, _react2.default.createElement('textarea', { placeholder: '\u0E40\u0E2B\u0E15\u0E38\u0E1C\u0E25\u0E17\u0E35\u0E48\u0E21\u0E32\u0E2A\u0E21\u0E31\u0E04\u0E23\u0E40\u0E1B\u0E47\u0E19 Staff', ref: 'why', required: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 109
                }
            })), _react2.default.createElement('div', { className: 'flex-1 padding', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 112
                }
            }, _react2.default.createElement('textarea', { placeholder: '\u0E02\u0E49\u0E2D\u0E40\u0E2A\u0E19\u0E2D\u0E41\u0E19\u0E30\u0E19\u0E33', ref: 'suggestion', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 113
                }
            })), _react2.default.createElement('div', { className: 'flex-1', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 116
                }
            }, _react2.default.createElement('button', { type: 'submit', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 117
                }
            }, '\u0E2A\u0E48\u0E07\u0E04\u0E33\u0E15\u0E2D\u0E1A')))), this.popup());
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

module.exports = __webpack_require__(546);


/***/ })

},[574]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzP2QxNGM2OGQiLCJ3ZWJwYWNrOi8vL3Njc3MvaW5kZXguc2Nzcz9kMTRjNjhkIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRm9vdGVyLmpzP2QxNGM2OGQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb3JtLmpzP2QxNGM2OGQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZXJvLmpzP2QxNGM2OGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcblxuaW1wb3J0IEhlcm8gZnJvbSAnLi4vY29tcG9uZW50cy9IZXJvJ1xuaW1wb3J0IEZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9Gb3JtJ1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3RlcidcblxuaW1wb3J0IHN0eWxlc2hlZXQgZnJvbSAnLi4vc2Nzcy9pbmRleC5zY3NzJ1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT5JbnRoYW5pbiBHdWlsZCBDYW1wICMxPC90aXRsZT5cbiAgICAgICAgICA8bGluayByZWw9XCJzaG9ydGN1dCBpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIGhyZWY9XCJzdGF0aWMvaW1hZ2VzL2Zhdmljb24ucG5nXCIvPlxuICAgICAgICAgIDxzdHlsZSBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHN0eWxlc2hlZXQgfX0gLz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8SGVybyAvPlxuICAgICAgICA8Rm9ybSAvPlxuICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSIsIm1vZHVsZS5leHBvcnRzID0gXCJodG1sLCBib2R5LCBoMSwgaDIsIGgzLCBoNCB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwOyB9XFxuXFxuYm9keSB7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47IH1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnZGJfaGVhdmVudGJvbGRfaXQnO1xcbiAgc3JjOiB1cmwoXFxcInN0YXRpYy9mb250cy9kYl9oZWF2ZW50L2RiX2hlYXZlbnRfYmRfaXRfdjMuMi13ZWJmb250LmVvdFxcXCIpO1xcbiAgc3JjOiB1cmwoXFxcInN0YXRpYy9mb250cy9kYl9oZWF2ZW50L2RiX2hlYXZlbnRfYmRfaXRfdjMuMi13ZWJmb250LmVvdD8jaWVmaXhcXFwiKSBmb3JtYXQoXFxcImVtYmVkZGVkLW9wZW50eXBlXFxcIiksIHVybChcXFwic3RhdGljL2ZvbnRzL2RiX2hlYXZlbnQvZGJfaGVhdmVudF9iZF9pdF92My4yLXdlYmZvbnQud29mZjJcXFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIiksIHVybChcXFwic3RhdGljL2ZvbnRzL2RiX2hlYXZlbnQvZGJfaGVhdmVudF9iZF9pdF92My4yLXdlYmZvbnQud29mZlxcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDsgfVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdkYl9oZWF2ZW50Ym9sZCc7XFxuICBzcmM6IHVybChcXFwic3RhdGljL2ZvbnRzL2RiX2hlYXZlbnQvZGJfaGVhdmVudF9iZF92My4yLXdlYmZvbnQuZW90XFxcIik7XFxuICBzcmM6IHVybChcXFwic3RhdGljL2ZvbnRzL2RiX2hlYXZlbnQvZGJfaGVhdmVudF9iZF92My4yLXdlYmZvbnQuZW90PyNpZWZpeFxcXCIpIGZvcm1hdChcXFwiZW1iZWRkZWQtb3BlbnR5cGVcXFwiKSwgdXJsKFxcXCJzdGF0aWMvZm9udHMvZGJfaGVhdmVudC9kYl9oZWF2ZW50X2JkX3YzLjItd2ViZm9udC53b2ZmMlxcXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKSwgdXJsKFxcXCJzdGF0aWMvZm9udHMvZGJfaGVhdmVudC9kYl9oZWF2ZW50X2JkX3YzLjItd2ViZm9udC53b2ZmXFxcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsOyB9XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ2RiX2hlYXZlbnRibGFja19pdCc7XFxuICBzcmM6IHVybChcXFwic3RhdGljL2ZvbnRzL2RiX2hlYXZlbnQvZGJfaGVhdmVudF9ibGtfaXRfdjMuMi13ZWJmb250LmVvdFxcXCIpO1xcbiAgc3JjOiB1cmwoXFxcInN0YXRpYy9mb250cy9kYl9oZWF2ZW50L2RiX2hlYXZlbnRfYmxrX2l0X3YzLjItd2ViZm9udC5lb3Q/I2llZml4XFxcIikgZm9ybWF0KFxcXCJlbWJlZGRlZC1vcGVudHlwZVxcXCIpLCB1cmwoXFxcInN0YXRpYy9mb250cy9kYl9oZWF2ZW50L2RiX2hlYXZlbnRfYmxrX2l0X3YzLjItd2ViZm9udC53b2ZmMlxcXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKSwgdXJsKFxcXCJzdGF0aWMvZm9udHMvZGJfaGVhdmVudC9kYl9oZWF2ZW50X2Jsa19pdF92My4yLXdlYmZvbnQud29mZlxcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDsgfVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdkYl9oZWF2ZW50YmxhY2snO1xcbiAgc3JjOiB1cmwoXFxcInN0YXRpYy9mb250cy9kYl9oZWF2ZW50L2RiX2hlYXZlbnRfYmxrX3YzLjItd2ViZm9udC5lb3RcXFwiKTtcXG4gIHNyYzogdXJsKFxcXCJzdGF0aWMvZm9udHMvZGJfaGVhdmVudC9kYl9oZWF2ZW50X2Jsa192My4yLXdlYmZvbnQuZW90PyNpZWZpeFxcXCIpIGZvcm1hdChcXFwiZW1iZWRkZWQtb3BlbnR5cGVcXFwiKSwgdXJsKFxcXCJzdGF0aWMvZm9udHMvZGJfaGVhdmVudC9kYl9oZWF2ZW50X2Jsa192My4yLXdlYmZvbnQud29mZjJcXFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIiksIHVybChcXFwic3RhdGljL2ZvbnRzL2RiX2hlYXZlbnQvZGJfaGVhdmVudF9ibGtfdjMuMi13ZWJmb250LndvZmZcXFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXN0eWxlOiBub3JtYWw7IH1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnZGJfaGVhdmVudGl0YWxpYyc7XFxuICBzcmM6IHVybChcXFwic3RhdGljL2ZvbnRzL2RiX2hlYXZlbnQvZGJfaGVhdmVudF9pdF92My4yLXdlYmZvbnQuZW90XFxcIik7XFxuICBzcmM6IHVybChcXFwic3RhdGljL2ZvbnRzL2RiX2hlYXZlbnQvZGJfaGVhdmVudF9pdF92My4yLXdlYmZvbnQuZW90PyNpZWZpeFxcXCIpIGZvcm1hdChcXFwiZW1iZWRkZWQtb3BlbnR5cGVcXFwiKSwgdXJsKFxcXCJzdGF0aWMvZm9udHMvZGJfaGVhdmVudC9kYl9oZWF2ZW50X2l0X3YzLjItd2ViZm9udC53b2ZmMlxcXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKSwgdXJsKFxcXCJzdGF0aWMvZm9udHMvZGJfaGVhdmVudC9kYl9oZWF2ZW50X2l0X3YzLjItd2ViZm9udC53b2ZmXFxcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsOyB9XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ2RiX2hlYXZlbnRsaWdodF9pdCc7XFxuICBzcmM6IHVybChcXFwic3RhdGljL2ZvbnRzL2RiX2hlYXZlbnQvZGJfaGVhdmVudF9saV9pdF92My4yLXdlYmZvbnQuZW90XFxcIik7XFxuICBzcmM6IHVybChcXFwic3RhdGljL2ZvbnRzL2RiX2hlYXZlbnQvZGJfaGVhdmVudF9saV9pdF92My4yLXdlYmZvbnQuZW90PyNpZWZpeFxcXCIpIGZvcm1hdChcXFwiZW1iZWRkZWQtb3BlbnR5cGVcXFwiKSwgdXJsKFxcXCJzdGF0aWMvZm9udHMvZGJfaGVhdmVudC9kYl9oZWF2ZW50X2xpX2l0X3YzLjItd2ViZm9udC53b2ZmMlxcXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKSwgdXJsKFxcXCJzdGF0aWMvZm9udHMvZGJfaGVhdmVudC9kYl9oZWF2ZW50X2xpX2l0X3YzLjItd2ViZm9udC53b2ZmXFxcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsOyB9XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ2RiX2hlYXZlbnRsaWdodCc7XFxuICBzcmM6IHVybChcXFwic3RhdGljL2ZvbnRzL2RiX2hlYXZlbnQvZGJfaGVhdmVudF9saV92My4yLXdlYmZvbnQuZW90XFxcIik7XFxuICBzcmM6IHVybChcXFwic3RhdGljL2ZvbnRzL2RiX2hlYXZlbnQvZGJfaGVhdmVudF9saV92My4yLXdlYmZvbnQuZW90PyNpZWZpeFxcXCIpIGZvcm1hdChcXFwiZW1iZWRkZWQtb3BlbnR5cGVcXFwiKSwgdXJsKFxcXCJzdGF0aWMvZm9udHMvZGJfaGVhdmVudC9kYl9oZWF2ZW50X2xpX3YzLjItd2ViZm9udC53b2ZmMlxcXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKSwgdXJsKFxcXCJzdGF0aWMvZm9udHMvZGJfaGVhdmVudC9kYl9oZWF2ZW50X2xpX3YzLjItd2ViZm9udC53b2ZmXFxcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsOyB9XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ2RiX2hlYXZlbnRtZWRfaXQnO1xcbiAgc3JjOiB1cmwoXFxcInN0YXRpYy9mb250cy9kYl9oZWF2ZW50L2RiX2hlYXZlbnRfbWVkX2l0X3YzLjItd2ViZm9udC5lb3RcXFwiKTtcXG4gIHNyYzogdXJsKFxcXCJzdGF0aWMvZm9udHMvZGJfaGVhdmVudC9kYl9oZWF2ZW50X21lZF9pdF92My4yLXdlYmZvbnQuZW90PyNpZWZpeFxcXCIpIGZvcm1hdChcXFwiZW1iZWRkZWQtb3BlbnR5cGVcXFwiKSwgdXJsKFxcXCJzdGF0aWMvZm9udHMvZGJfaGVhdmVudC9kYl9oZWF2ZW50X21lZF9pdF92My4yLXdlYmZvbnQud29mZjJcXFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIiksIHVybChcXFwic3RhdGljL2ZvbnRzL2RiX2hlYXZlbnQvZGJfaGVhdmVudF9tZWRfaXRfdjMuMi13ZWJmb250LndvZmZcXFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXN0eWxlOiBub3JtYWw7IH1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnZGJfaGVhdmVudG1lZCc7XFxuICBzcmM6IHVybChcXFwic3RhdGljL2ZvbnRzL2RiX2hlYXZlbnQvZGJfaGVhdmVudF9tZWRfdjMuMi13ZWJmb250LmVvdFxcXCIpO1xcbiAgc3JjOiB1cmwoXFxcInN0YXRpYy9mb250cy9kYl9oZWF2ZW50L2RiX2hlYXZlbnRfbWVkX3YzLjItd2ViZm9udC5lb3Q/I2llZml4XFxcIikgZm9ybWF0KFxcXCJlbWJlZGRlZC1vcGVudHlwZVxcXCIpLCB1cmwoXFxcInN0YXRpYy9mb250cy9kYl9oZWF2ZW50L2RiX2hlYXZlbnRfbWVkX3YzLjItd2ViZm9udC53b2ZmMlxcXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKSwgdXJsKFxcXCJzdGF0aWMvZm9udHMvZGJfaGVhdmVudC9kYl9oZWF2ZW50X21lZF92My4yLXdlYmZvbnQud29mZlxcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDsgfVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdkYl9oZWF2ZW50dGhpbl9pdCc7XFxuICBzcmM6IHVybChcXFwic3RhdGljL2ZvbnRzL2RiX2hlYXZlbnQvZGJfaGVhdmVudF90aGluX2l0X3YzLjItd2ViZm9udC5lb3RcXFwiKTtcXG4gIHNyYzogdXJsKFxcXCJzdGF0aWMvZm9udHMvZGJfaGVhdmVudC9kYl9oZWF2ZW50X3RoaW5faXRfdjMuMi13ZWJmb250LmVvdD8jaWVmaXhcXFwiKSBmb3JtYXQoXFxcImVtYmVkZGVkLW9wZW50eXBlXFxcIiksIHVybChcXFwic3RhdGljL2ZvbnRzL2RiX2hlYXZlbnQvZGJfaGVhdmVudF90aGluX2l0X3YzLjItd2ViZm9udC53b2ZmMlxcXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKSwgdXJsKFxcXCJzdGF0aWMvZm9udHMvZGJfaGVhdmVudC9kYl9oZWF2ZW50X3RoaW5faXRfdjMuMi13ZWJmb250LndvZmZcXFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXN0eWxlOiBub3JtYWw7IH1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnZGJfaGVhdmVudHRoaW4nO1xcbiAgc3JjOiB1cmwoXFxcInN0YXRpYy9mb250cy9kYl9oZWF2ZW50L2RiX2hlYXZlbnRfdGhpbl92My4yLXdlYmZvbnQuZW90XFxcIik7XFxuICBzcmM6IHVybChcXFwic3RhdGljL2ZvbnRzL2RiX2hlYXZlbnQvZGJfaGVhdmVudF90aGluX3YzLjItd2ViZm9udC5lb3Q/I2llZml4XFxcIikgZm9ybWF0KFxcXCJlbWJlZGRlZC1vcGVudHlwZVxcXCIpLCB1cmwoXFxcInN0YXRpYy9mb250cy9kYl9oZWF2ZW50L2RiX2hlYXZlbnRfdGhpbl92My4yLXdlYmZvbnQud29mZjJcXFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIiksIHVybChcXFwic3RhdGljL2ZvbnRzL2RiX2hlYXZlbnQvZGJfaGVhdmVudF90aGluX3YzLjItd2ViZm9udC53b2ZmXFxcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsOyB9XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ2RiX2hlYXZlbnR1bHRyYWxpX2l0JztcXG4gIHNyYzogdXJsKFxcXCJzdGF0aWMvZm9udHMvZGJfaGVhdmVudC9kYl9oZWF2ZW50X3VsbGlfaXRfdjMuMi13ZWJmb250LmVvdFxcXCIpO1xcbiAgc3JjOiB1cmwoXFxcInN0YXRpYy9mb250cy9kYl9oZWF2ZW50L2RiX2hlYXZlbnRfdWxsaV9pdF92My4yLXdlYmZvbnQuZW90PyNpZWZpeFxcXCIpIGZvcm1hdChcXFwiZW1iZWRkZWQtb3BlbnR5cGVcXFwiKSwgdXJsKFxcXCJzdGF0aWMvZm9udHMvZGJfaGVhdmVudC9kYl9oZWF2ZW50X3VsbGlfaXRfdjMuMi13ZWJmb250LndvZmYyXFxcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpLCB1cmwoXFxcInN0YXRpYy9mb250cy9kYl9oZWF2ZW50L2RiX2hlYXZlbnRfdWxsaV9pdF92My4yLXdlYmZvbnQud29mZlxcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDsgfVxcblxcbi5oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdCREZGMjtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxcblxcbi5oZWFkaW5nIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDEwMDA7IH1cXG5cXG5oMSwgaDIsIC5idXR0b24ge1xcbiAgY29sb3I6ICNGRkZGRkY7IH1cXG5cXG5oMSB7XFxuICBmb250LWZhbWlseTogUGFjaWZpY287XFxuICBmb250LXNpemU6IDE0NHB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjMycHg7XFxuICBsaW5lLWhlaWdodDogMTYwcHg7IH1cXG5cXG5oMiB7XFxuICBmb250LWZhbWlseTogJ2RiX2hlYXZlbnRsaWdodCc7XFxuICBmb250LXNpemU6IDQ4cHg7XFxuICBsZXR0ZXItc3BhY2luZzogLTAuMTFweDtcXG4gIGxpbmUtaGVpZ2h0OiA3MHB4O1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7IH1cXG5cXG4uYnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6ICMzRDNFM0U7XFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgcGFkZGluZzogMTBweCA0MHB4O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgbWFyZ2luOiAyMHB4IDA7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LWZhbWlseTogJ2RiX2hlYXZlbnRsaWdodCc7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDJweCAycHggMHB4ICMyMTc2YTk7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IDJweCAycHggMHB4ICMyMTc2YTk7XFxuICBmb250LXNpemU6IDIwcHg7IH1cXG5cXG4uY2FydG9vbiB7XFxuICB3aWR0aDogMTAwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDA7IH1cXG5cXG4uY2FydG9vbi0xIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBjYXJ0b29uLTEgMy40cyBpbmZpbml0ZSBlYXNlLWluLW91dDtcXG4gICAgICAgICAgYW5pbWF0aW9uOiBjYXJ0b29uLTEgMy40cyBpbmZpbml0ZSBlYXNlLWluLW91dDtcXG4gIGxlZnQ6IDQ1JTtcXG4gIHotaW5kZXg6IDEwMDA7XFxuICBib3R0b206IC0yMHB4OyB9XFxuXFxuLmNhcnRvb24tMiB7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogY2FydG9vbi0yIDIuNXMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XFxuICAgICAgICAgIGFuaW1hdGlvbjogY2FydG9vbi0yIDIuNXMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XFxuICBsZWZ0OiAzMCU7XFxuICB3aWR0aDogNjBweDsgfVxcblxcbi5jYXJ0b29uLTMge1xcbiAgLXdlYmtpdC1hbmltYXRpb246IGNhcnRvb24tMyAzcyBpbmZpbml0ZSBlYXNlLWluLW91dDtcXG4gICAgICAgICAgYW5pbWF0aW9uOiBjYXJ0b29uLTMgM3MgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XFxuICBsZWZ0OiA3MCU7XFxuICB3aWR0aDogNTBweDsgfVxcblxcbi53YXRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHotaW5kZXg6IDU7XFxuICBib3R0b206IC0yMHB4O1xcbiAgbGVmdDogMDtcXG4gIGJhY2tncm91bmQ6ICMzMmJhZmE7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDUwJSk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDUwJSk7IH1cXG5cXG4ud2F0ZXJfX2lubmVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA1MCU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxcblxcbi53YXRlcl9fd2F2ZSB7XFxuICAgIHdpZHRoOiAyMDAlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMTAwJTtcXG4gICAgei1pbmRleDogOTk5O1xcbiAgICBib3R0b206IC0xcHg7IH1cXG5cXG4ud2F0ZXJfX3dhdmVfYmFjayB7XFxuICAgICAgcmlnaHQ6IDA7XFxuICAgICAgZmlsbDogI0Y3RkRGQztcXG4gICAgICAtd2Via2l0LWFuaW1hdGlvbjogd2F2ZS1iYWNrIDMuNXMgaW5maW5pdGUgbGluZWFyO1xcbiAgICAgICAgICAgICAgYW5pbWF0aW9uOiB3YXZlLWJhY2sgMy41cyBpbmZpbml0ZSBsaW5lYXI7XFxuICAgICAgei1pbmRleDogMTAwMTsgfVxcblxcbi53YXRlcl9fd2F2ZV9mcm9udCB7XFxuICAgICAgbGVmdDogMDtcXG4gICAgICBmaWxsOiAjQTJFOEY1O1xcbiAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiB3YXZlLWZyb250IDNzIGluZmluaXRlIGxpbmVhcjtcXG4gICAgICAgICAgICAgIGFuaW1hdGlvbjogd2F2ZS1mcm9udCAzcyBpbmZpbml0ZSBsaW5lYXI7IH1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgd2F2ZS1mcm9udCB7XFxuICAxMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTsgfSB9XFxuXFxuQGtleWZyYW1lcyB3YXZlLWZyb250IHtcXG4gIDEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApOyB9IH1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgd2F2ZS1iYWNrIHtcXG4gIDEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgMCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCAwKTsgfSB9XFxuXFxuQGtleWZyYW1lcyB3YXZlLWJhY2sge1xcbiAgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCAwKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIDApOyB9IH1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgY2FydG9vbi0xIHtcXG4gIDUwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMCUpIHJvdGF0ZSgtMmRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMCUpIHJvdGF0ZSgtMmRlZyk7IH0gfVxcblxcbkBrZXlmcmFtZXMgY2FydG9vbi0xIHtcXG4gIDUwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMCUpIHJvdGF0ZSgtMmRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMCUpIHJvdGF0ZSgtMmRlZyk7IH0gfVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBjYXJ0b29uLTIge1xcbiAgNTAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUlKSByb3RhdGUoLTJkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNSUpIHJvdGF0ZSgtMmRlZyk7IH0gfVxcblxcbkBrZXlmcmFtZXMgY2FydG9vbi0yIHtcXG4gIDUwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01JSkgcm90YXRlKC0yZGVnKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUlKSByb3RhdGUoLTJkZWcpOyB9IH1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgY2FydG9vbi0zIHtcXG4gIDUwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMCUpIHJvdGF0ZSgtMmRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMCUpIHJvdGF0ZSgtMmRlZyk7IH0gfVxcblxcbkBrZXlmcmFtZXMgY2FydG9vbi0zIHtcXG4gIDUwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMCUpIHJvdGF0ZSgtMmRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMCUpIHJvdGF0ZSgtMmRlZyk7IH0gfVxcblxcbiNzZWN0aW9uMiB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjdGREZDO1xcbiAgcGFkZGluZzogNDBweCAwO1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XFxuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcblxcbmgzLCBoNCB7XFxuICBmb250LWZhbWlseTogJy5TRk5TRGlzcGxheSc7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cXG5oMyB7XFxuICBmb250LWZhbWlseTogJ2RiX2hlYXZlbnRsaWdodCc7XFxuICBmb250LXNpemU6IDUwcHg7XFxuICBjb2xvcjogIzQ1NDk1MDtcXG4gIGxldHRlci1zcGFjaW5nOiAtMC4xMXB4O1xcbiAgbGluZS1oZWlnaHQ6IDgycHg7IH1cXG5cXG5oNCB7XFxuICBmb250LWZhbWlseTogJ2RiX2hlYXZlbnR0aGluJztcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGNvbG9yOiAjOTU5QUE4O1xcbiAgbGluZS1oZWlnaHQ6IDM2cHg7XFxuICBsZXR0ZXItc3BhY2luZzogMS4ycHg7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4ICFpbXBvcnRhbnQ7IH1cXG5cXG5oNCBhIHtcXG4gIGNvbG9yOiAjMzMzO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDEuMnB4OyB9XFxuXFxuZm9ybSB7XFxuICB3aWR0aDogOTAwcHg7XFxuICBtYXJnaW46IDAgYXV0bzsgfVxcblxcbi5wYWRkaW5nIHtcXG4gIHBhZGRpbmc6IDEwcHg7IH1cXG5cXG4uZmxleCB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDsgfVxcblxcbi5mbGV4LXdyYXAge1xcbiAgLW1zLWZsZXgtd3JhcDogd3JhcDtcXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7IH1cXG5cXG4uZmxleC0xLTMge1xcbiAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDMxLjElO1xcbiAgICAgIGZsZXgtYmFzaXM6IDMxLjElOyB9XFxuXFxuLmZsZXgtMS0yIHtcXG4gIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiA0Ny43JTtcXG4gICAgICBmbGV4LWJhc2lzOiA0Ny43JTsgfVxcblxcbi5mbGV4LTEge1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG5pbnB1dCxcXG50ZXh0YXJlYSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDE1cHggMjBweDtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG91dGxpbmU6IDA7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgZm9udC1mYW1pbHk6ICdkYl9oZWF2ZW50bGlnaHQnO1xcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNFREVERUQ7IH1cXG5cXG5pbnB1dC5yZXF1aXJlZCxcXG4gIHRleHRhcmVhLnJlcXVpcmVkIHtcXG4gICAgYm9yZGVyLWNvbG9yOiByZWQ7IH1cXG5cXG50ZXh0YXJlYSB7XFxuICBtaW4taGVpZ2h0OiAxNTBweDsgfVxcblxcbmlucHV0OmZvY3VzLFxcbnRleHRhcmVhOmZvY3VzIHtcXG4gIGJvcmRlci1jb2xvcjogI0RERDsgfVxcblxcbmJ1dHRvbiB7XFxuICBmb250LWZhbWlseTogJ2RiX2hlYXZlbnRsaWdodCc7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbjogMjBweCBhdXRvO1xcbiAgcGFkZGluZzogMTBweCA0MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ1NDk1MDtcXG4gIGNvbG9yOiAjRkZGO1xcbiAgYm9yZGVyOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMnB4IDJweCAwcHggIzAwMDtcXG4gICAgICAgICAgYm94LXNoYWRvdzogMnB4IDJweCAwcHggIzAwMDtcXG4gIG91dGxpbmU6IDA7IH1cXG5cXG5mb290ZXIge1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XFxuICBmb250LWZhbWlseTogJ2RiX2hlYXZlbnRtZWQnOyB9XFxuXFxuLmZsZXgtaGFsZiB7XFxuICAtd2Via2l0LWJveC1mbGV4OiAxO1xcbiAgICAgIC1tcy1mbGV4OiAxO1xcbiAgICAgICAgICBmbGV4OiAxOyB9XFxuXFxuLndyYXBwZXIge1xcbiAgd2lkdGg6IDkwMHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87IH1cXG5cXG4ud3JhcHBlciAubGVmdCB7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIGxldHRlci1zcGFjaW5nOiAxLjJweDsgfVxcblxcbi53cmFwcGVyIC5yaWdodCB7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0OyB9XFxuXFxuLndyYXBwZXIgLnJpZ2h0IGEge1xcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgICBjb2xvcjogIzIyMjsgfVxcblxcbi5wb3B1cCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgei1pbmRleDogOTk5OTsgfVxcblxcbi5wb3B1cCAuY2xvc2Uge1xcbiAgICB3aWR0aDogMTBweDtcXG4gICAgaGVpZ2h0OiAxMHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcblxcbi5wb3B1cCAuY2xvc2U6YmVmb3JlLCAucG9wdXAgLmNsb3NlOmFmdGVyIHtcXG4gICAgICBjb250ZW50OiAnJztcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICB3aWR0aDogMnB4O1xcbiAgICAgIGhlaWdodDogMjBweDtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgfVxcblxcbi5wb3B1cCAuY2xvc2U6YmVmb3JlIHtcXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTsgfVxcblxcbi5wb3B1cCAuY2xvc2U6YWZ0ZXIge1xcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTtcXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7IH1cXG5cXG4ucG9wdXAgLmNhcmQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICBwYWRkaW5nOiA0MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICB3aWR0aDogMzAlO1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG4gICAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxuICAgICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG5cXG4ucG9wdXAgLmNhcmQgaDQsIC5wb3B1cCAuY2FyZCBwIHtcXG4gICAgICBtYXJnaW46IDA7IH1cXG5cXG4ucG9wdXAgLmNhcmQgaDQge1xcbiAgICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgICBjb2xvcjogIzIyMjsgfVxcblxcbi5wb3B1cCAuY2FyZCBwIHtcXG4gICAgICBmb250LWZhbWlseTogJ2RiX2hlYXZlbnRsaWdodCc7XFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgIGxldHRlci1zcGFjaW5nOiAxLjJweDtcXG4gICAgICBjb2xvcjogIzIyMjtcXG4gICAgICBmb250LXNpemU6IDIwcHg7IH1cXG5cXG4ucG9wdXAgLmNhcmQgaWZyYW1lIHtcXG4gICAgICBtYXJnaW4tdG9wOiAyMHB4OyB9XFxuXCJcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc2Nzcy9pbmRleC5zY3NzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5jbGFzcyBGb290ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGZvb3Rlcj5cbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlciBmbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1oYWxmIGxlZnRcIj5JbnRoYW5pbiBHdWlsZCBDYW1wPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1oYWxmIHJpZ2h0XCI+PExpbmsgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9pbnRoYW5pbmd1aWRlY2FtcC9cIj48YSB0YXJnZXQ9XCJfYmxhbmtcIj5GYW5wYWdlPC9hPjwvTGluaz48L2Rpdj5cbiAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9mb290ZXI+XG4gICAgICAgIClcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0Zvb3Rlci5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbi8vIGltcG9ydCBNeU93bklucHV0IGZyb20gJy4vZm9ybS9NeU93bklucHV0J1xuXG5jbGFzcyBGb3JtIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICBcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHN1Ym1pdDogZmFsc2UsXG4gICAgICAgICAgICBtZXNzYWdlOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfguYTguKHguYjguKrguLLguKHguLLguKPguJbguKXguIfguJfguLDguYDguJrguLXguKLguJnguYTguJTguYknXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHNlbmREYXRhKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgdmFyIGRhdGEgPSB7XG4gICAgICAgICAgICBmbmFtZTogICAgIHRoaXMucmVmcy5mbmFtZS52YWx1ZSxcbiAgICAgICAgICAgIG5uYW1lOiAgICAgdGhpcy5yZWZzLm5uYW1lLnZhbHVlLFxuICAgICAgICAgICAgZ2VuOiAgICAgICB0aGlzLnJlZnMuZ2VuLnZhbHVlLFxuICAgICAgICAgICAgZmFjZWJvb2s6ICB0aGlzLnJlZnMuZmFjZWJvb2sudmFsdWUsXG4gICAgICAgICAgICBpbnRlcmVzdDogIHRoaXMucmVmcy5pbnRlcmVzdC52YWx1ZSxcbiAgICAgICAgICAgIHNraWxsOiAgICAgdGhpcy5yZWZzLnNraWxsLnZhbHVlLFxuICAgICAgICAgICAgY2FtcDogICAgICB0aGlzLnJlZnMuY2FtcC52YWx1ZSxcbiAgICAgICAgICAgIGFjdGl2aXR5X2Zhdm9yaXRlOiAgdGhpcy5yZWZzLmFjdGl2aXR5X2Zhdm9yaXRlLnZhbHVlLFxuICAgICAgICAgICAgd2h5OiAgICAgICAgIHRoaXMucmVmcy53aHkudmFsdWUsXG4gICAgICAgICAgICBzdWdnZXN0aW9uOiAgdGhpcy5yZWZzLnN1Z2dlc3Rpb24udmFsdWUsXG4gICAgICAgIH1cblxuICAgICAgICBheGlvcy5wb3N0KCcvc3RhZmYnLCBkYXRhKVxuICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLmRhdGEuYWRkZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgc3VibWl0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+C4quC4oeC4seC4hOC4o+C5gOC4o+C4teC4ouC4muC4o+C5ieC4reC4oidcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0uYmluZCh0aGlzKSlcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgcG9wdXAoKSB7XG4gICAgICAgIGlmKHRoaXMuc3RhdGUuc3VibWl0KSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9wdXBcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLmNsb3NlUG9wdXAoKX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiIG9uQ2xpY2s9eyhlKSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xvc2VcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLmNsb3NlUG9wdXAoKX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQ+e3RoaXMuc3RhdGUubWVzc2FnZS50aXRsZX08L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+4LiB4LiU4LmB4LiK4Lij4LmM4Lil4LiHIEZhY2Vib29rPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlmcmFtZSBzcmM9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vcGx1Z2lucy9zaGFyZV9idXR0b24ucGhwP2hyZWY9aHR0cCUzQSUyRiUyRnd3dy5pbnRoYW5pbmNhbXAueHl6JTJGJmxheW91dD1idXR0b25fY291bnQmc2l6ZT1sYXJnZSZtb2JpbGVfaWZyYW1lPXRydWUmd2lkdGg9NzQmaGVpZ2h0PTI4JmFwcElkXCIgd2lkdGg9XCI3NFwiIGhlaWdodD1cIjI4XCIgc3R5bGU9e3tib3JkZXI6J25vbmUnLCBvdmVyZmxvdzogJ2hpZGRlbicsIHNjcm9sbGluZzogJ25vJywgZnJhbWVib3JkZXI6IDAsICBhbGxvd1RyYW5zcGFyZW5jeTogJ3RydWUnfX0+PC9pZnJhbWU+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xvc2VQb3B1cCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c3VibWl0OiBmYWxzZX0pXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBpZD1cInNlY3Rpb24yXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMz7guYPguJrguKrguKHguLHguITguKPguYDguJvguYfguJnguJ7guLXguYggU3RhZmY8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8aDQ+4Liq4Liz4Lir4Lij4Lix4Lia4LiB4Liy4Lij4LmA4Lib4LmH4LiZ4Lie4Li14LmIIFN0YWZmIOC4meC4seC5ieC4meC4l+C4uOC4geC4hOC4meC4iOC4sOC4luC4ueC4geC4hOC4seC4lOC5gOC4peC4t+C4reC4geC4iOC4suC4geC4nuC4teC5iOC5huC4geC4peC4uOC5iOC4oeC4oeC4q+C4suC4p+C4tOC4l+C4ouC4suC4peC4seC4ouC4i+C4tuC5iOC4h+C4nOC4peC4m+C4o+C4sOC4geC4suC4qOC4iOC4sOC5geC4iOC5ieC4h+C5g+C4q+C5ieC4l+C4o+C4suC4muC4nOC5iOC4suC4meC4l+C4suC4hyA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2ludGhhbmluZ3VpZGVjYW1wL1wiIHRhcmdldD1cIl9ibGFua1wiPkZhbnBhZ2U8L2E+IDxici8+4LmC4Lib4Lij4LiU4LiB4Lij4Lit4LiB4LmB4Lia4Lia4Lif4Lit4Lij4LmM4Lih4LmD4Lir4LmJ4LiU4Li14LiX4Li14LmI4Liq4Li44LiUPC9oND5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLnNlbmREYXRhLmJpbmQodGhpcyl9IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMS0zIHBhZGRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIuC4iuC4t+C5iOC4rSAtIOC4meC4suC4oeC4quC4geC4uOC4pVwiIHJlZj1cImZuYW1lXCIgcmVxdWlyZWQvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMS0zIHBhZGRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIuC4iuC4t+C5iOC4reC5gOC4peC5iOC4mVwiIHJlZj1cIm5uYW1lXCIgcmVxdWlyZWQvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMS0zIHBhZGRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIuC4reC4tOC4meC4l+C4meC4tOC4peC4o+C4uOC5iOC4mVwiIHJlZj1cImdlblwiIHJlcXVpcmVkLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgcGFkZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwi4LiK4Li34LmI4LitIEZhY2Vib29rXCIgcmVmPVwiZmFjZWJvb2tcIiByZXF1aXJlZC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xLTIgcGFkZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBwbGFjZWhvbGRlcj1cIuC4hOC4p+C4suC4oeC4quC4meC5g+C4iFwiIHJlZj1cImludGVyZXN0XCIgcmVxdWlyZWQ+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMS0yIHBhZGRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgcGxhY2Vob2xkZXI9XCLguITguKfguLLguKHguKrguLLguKHguLLguKPguJbguJ7guLTguYDguKjguKlcIiByZWY9XCJza2lsbFwiIHJlcXVpcmVkPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEtMiBwYWRkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIHBsYWNlaG9sZGVyPVwi4LmA4LiE4Lii4Lic4LmI4Liy4LiZ4LiE4LmI4Liy4Lii4LmE4Lir4LiZ4Lih4Liy4Lia4LmJ4Liy4LiHICjguYDguKfguYnguJnguKfguYjguLLguIfguYTguJTguYkpXCIgcmVmPVwiY2FtcFwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEtMiBwYWRkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIHBsYWNlaG9sZGVyPVwi4LiB4Li04LiI4LiB4Lij4Lij4Lih4LiX4Li14LmI4Lib4Lij4Liw4LiX4Lix4Lia4LmD4LiIIOC5gOC4nuC4o+C4suC4sOC4reC4sOC5hOC4o1wiIHJlZj1cImFjdGl2aXR5X2Zhdm9yaXRlXCIgcmVxdWlyZWQ+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBwYWRkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIHBsYWNlaG9sZGVyPVwi4LmA4Lir4LiV4Li44Lic4Lil4LiX4Li14LmI4Lih4Liy4Liq4Lih4Lix4LiE4Lij4LmA4Lib4LmH4LiZIFN0YWZmXCIgcmVmPVwid2h5XCIgcmVxdWlyZWQ+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBwYWRkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIHBsYWNlaG9sZGVyPVwi4LiC4LmJ4Lit4LmA4Liq4LiZ4Lit4LmB4LiZ4Liw4LiZ4LizXCIgcmVmPVwic3VnZ2VzdGlvblwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj7guKrguYjguIfguITguLPguJXguK3guJo8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgICAgICAgICAge3RoaXMucG9wdXAoKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEZvcm1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvRm9ybS5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBTY3JvbGxjaG9yIGZyb20gJ3JlYWN0LXNjcm9sbGNob3InO1xuXG5jbGFzcyBIZXJvIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgxPkludGhhbmluPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPGgyPmd1aWRlIGNhbXAgIzE8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8U2Nyb2xsY2hvciB0bz1cIiNzZWN0aW9uMlwiIGFuaW1hdGU9e3sgb2Zmc2V0OiAwLCBkdXJhdGlvbjogODAwIH19IGNsYXNzTmFtZT1cImJ1dHRvblwiPuC4quC4oeC4seC4hOC4o+C5gOC4m+C5h+C4mSBTdGFmZjwvU2Nyb2xsY2hvcj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8c3ZnIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeD1cIjBweFwiIHk9XCIwcHhcIiBzdHlsZT17e2Rpc3BsYXk6ICdub25lJ319PlxuICAgICAgICAgICAgICAgICAgICA8c3ltYm9sIGlkPVwid2F2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk00MjAsMjBjMjEuNS0wLjQsMzguOC0yLjUsNTEuMS00LjVjMTMuNC0yLjIsMjYuNS01LjIsMjcuMy01LjRDNTE0LDYuNSw1MTgsNC43LDUyOC41LDIuN2M3LjEtMS4zLDE3LjktMi44LDMxLjUtMi43YzAsMCwwLDAsMCwwdjIwSDQyMHpcIj48L3BhdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTQyMCwyMGMtMjEuNS0wLjQtMzguOC0yLjUtNTEuMS00LjVjLTEzLjQtMi4yLTI2LjUtNS4yLTI3LjMtNS40QzMyNiw2LjUsMzIyLDQuNywzMTEuNSwyLjdDMzA0LjMsMS40LDI5My42LTAuMSwyODAsMGMwLDAsMCwwLDAsMHYyMEg0MjB6XCI+PC9wYXRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xNDAsMjBjMjEuNS0wLjQsMzguOC0yLjUsNTEuMS00LjVjMTMuNC0yLjIsMjYuNS01LjIsMjcuMy01LjRDMjM0LDYuNSwyMzgsNC43LDI0OC41LDIuN2M3LjEtMS4zLDE3LjktMi44LDMxLjUtMi43YzAsMCwwLDAsMCwwdjIwSDE0MHpcIj48L3BhdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE0MCwyMGMtMjEuNS0wLjQtMzguOC0yLjUtNTEuMS00LjVjLTEzLjQtMi4yLTI2LjUtNS4yLTI3LjMtNS40QzQ2LDYuNSw0Miw0LjcsMzEuNSwyLjdDMjQuMywxLjQsMTMuNi0wLjEsMCwwYzAsMCwwLDAsMCwwbDAsMjBIMTQwelwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgICAgPC9zeW1ib2w+XG4gICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJ3YXRlcl9fd2F2ZSB3YXRlcl9fd2F2ZV9mcm9udFwiIHZpZXdCb3g9XCIwIDAgNTYwIDIwXCI+XG4gICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbmtIcmVmPVwiI3dhdmVcIj48L3VzZT5cbiAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cIndhdGVyX193YXZlIHdhdGVyX193YXZlX2JhY2tcIiB2aWV3Qm94PVwiMCAwIDU2MCAyMFwiPlxuICAgICAgICAgICAgICAgICAgICA8dXNlIHhsaW5rSHJlZj1cIiN3YXZlXCI+PC91c2U+XG4gICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJzdGF0aWMvaW1hZ2VzL0NhcnRvb24tMi5zdmdcIiBjbGFzc05hbWU9XCJjYXJ0b29uIGNhcnRvb24tMVwiIC8+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJzdGF0aWMvaW1hZ2VzL0NhcnRvb24uc3ZnXCIgY2xhc3NOYW1lPVwiY2FydG9vbiBjYXJ0b29uLTJcIiAvPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwic3RhdGljL2ltYWdlcy9DYXJ0b29uLnN2Z1wiIGNsYXNzTmFtZT1cImNhcnRvb24gY2FydG9vbi0zXCIgLz5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVybztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0hlcm8uanMiXSwibWFwcGluZ3MiOiI7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7Ozs7OztBQUNBOzs7Ozs7Ozs7OztBQUVBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBR0E7QUFIQTtBQUFBOzs7OztBQU1BO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7O0FBR0E7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7Ozs7O0FBSUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBRUE7O0FBQ0E7QUFBQTtBQUZBO0FBS0E7Ozs7O0FBR0E7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVRBO0FBQ0E7QUFXQTtBQUVBO0FBQ0E7QUFFQTs7QUFJQTtBQUhBO0FBRkE7QUFNQTtBQVRBO0FBV0E7QUFHQTs7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUlBO0FBSkE7O0FBS0E7Ozs7QUFHQTtBQUFBOzs7O0FBSUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTtBQUZBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTtBQUZBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBR0E7QUFIQTtBQUdBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUdBO0FBSEE7QUFHQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFHQTtBQUhBO0FBR0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBR0E7QUFIQTtBQUdBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUdBO0FBSEE7QUFHQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFHQTtBQUhBO0FBR0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUtBOzs7OztBQU9BO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pJQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUNBOzs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFHQTtBQUhBO0FBR0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUdBO0FBSEE7Ozs7OztBQU1BO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        