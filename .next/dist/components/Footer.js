'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

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
            }, _react2.default.createElement('iframe', { src: 'https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2Finthaninguidecamp%2F&width=450&layout=standard&action=like&size=small&show_faces=true&share=true&height=80&appId', width: '450', height: '80', style: { border: 'none', overflow: 'hidden', scrolling: 'no', frameborder: 0, allowTransparency: 'true' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 11
                }
            }))));
        }
    }]);

    return Footer;
}(_react.Component);

exports.default = Footer;