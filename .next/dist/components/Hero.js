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

var _reactScrollchor = require('react-scrollchor');

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
            }, '\u0E2A\u0E21\u0E31\u0E04\u0E23\u0E40\u0E1B\u0E47\u0E19 Staff')));
        }
    }]);

    return Hero;
}(_react.Component);

exports.default = Hero;