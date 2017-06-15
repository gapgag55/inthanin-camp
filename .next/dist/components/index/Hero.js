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

var _jsxFileName = '/Users/kopkap/Desktop/works/inthanin-camp-next/components/index/Hero.js';


var Hero = function (_Component) {
    (0, _inherits3.default)(Hero, _Component);

    function Hero(props) {
        (0, _classCallCheck3.default)(this, Hero);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Hero.__proto__ || (0, _getPrototypeOf2.default)(Hero)).call(this, props));

        _this.state = {
            show: false
        };
        return _this;
    }

    (0, _createClass3.default)(Hero, [{
        key: 'show',
        value: function show() {
            this.setState({
                show: true
            });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            window.addEventListener('scroll', this.show.bind(this));
        }
    }, {
        key: 'render',
        value: function render() {
            var show = this.state.show ? 'bar is-show' : 'bar';
            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                }
            }, _react2.default.createElement('div', { className: show, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 27
                }
            }, '\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E01\u0E32\u0E23 :', _react2.default.createElement('ul', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            }, _react2.default.createElement('li', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            }, '\u0E23\u0E31\u0E1A\u0E2A\u0E21\u0E31\u0E04\u0E23 Staff \u0E27\u0E31\u0E19\u0E19\u0E35\u0E49 - 20 \u0E21\u0E34.\u0E22. 2560 \u0E1B\u0E23\u0E30\u0E01\u0E32\u0E28\u0E1C\u0E25\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48 21 \u0E21\u0E34.\u0E22. 2560'), _react2.default.createElement('li', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            }, '\u0E23\u0E31\u0E1A\u0E2A\u0E21\u0E31\u0E04\u0E23\u0E19\u0E49\u0E2D\u0E07\u0E04\u0E48\u0E32\u0E22 21 - 30  \u0E21\u0E34.\u0E22. 2560 \u0E1B\u0E23\u0E30\u0E01\u0E32\u0E28\u0E1C\u0E25\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48 5 \u0E01.\u0E04. 2560'))), _react2.default.createElement('section', { className: 'header', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }, _react2.default.createElement('div', { className: 'heading', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }, _react2.default.createElement('h1', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            }, 'Inthanin'), _react2.default.createElement('h2', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                }
            }, 'guide camp #1'), _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            }, '\u0E04\u0E48\u0E32\u0E22\u0E08\u0E31\u0E14\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48 8,9,10 \u0E01\u0E23\u0E01\u0E0E\u0E32\u0E04\u0E21 2560 - \u0E2A\u0E16\u0E32\u0E19\u0E17\u0E35\u0E48\u0E08\u0E30\u0E41\u0E08\u0E49\u0E07\u0E43\u0E2B\u0E49\u0E17\u0E23\u0E32\u0E1A\u0E1C\u0E48\u0E32\u0E19\u0E41\u0E1F\u0E19\u0E40\u0E1E\u0E08'), _react2.default.createElement(_reactScrollchor2.default, { to: '#section2', animate: { offset: 0, duration: 800 }, className: 'button', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            }, '\u0E2A\u0E21\u0E31\u0E04\u0E23\u0E40\u0E1B\u0E47\u0E19 Staff - (\u0E40\u0E09\u0E1E\u0E32\u0E30\u0E23\u0E38\u0E48\u0E19\u0E1E\u0E35\u0E48\u0E17\u0E35\u0E48\u0E08\u0E1A \u0E21.\u0E1B\u0E25\u0E32\u0E22)')), _react2.default.createElement('svg', { version: '1.1', xmlns: 'http://www.w3.org/2000/svg', x: '0px', y: '0px', style: { display: 'none' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            }, _react2.default.createElement('symbol', { id: 'wave', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }, _react2.default.createElement('path', { d: 'M420,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C514,6.5,518,4.7,528.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H420z', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            }), _react2.default.createElement('path', { d: 'M420,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C326,6.5,322,4.7,311.5,2.7C304.3,1.4,293.6-0.1,280,0c0,0,0,0,0,0v20H420z', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            }), _react2.default.createElement('path', { d: 'M140,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C234,6.5,238,4.7,248.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H140z', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            }), _react2.default.createElement('path', { d: 'M140,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C46,6.5,42,4.7,31.5,2.7C24.3,1.4,13.6-0.1,0,0c0,0,0,0,0,0l0,20H140z', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }))), _react2.default.createElement('svg', { className: 'water__wave water__wave_front', viewBox: '0 0 560 20', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }, _react2.default.createElement('use', { xlinkHref: '#wave', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            })), _react2.default.createElement('svg', { className: 'water__wave water__wave_back', viewBox: '0 0 560 20', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }, _react2.default.createElement('use', { xlinkHref: '#wave', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            })), _react2.default.createElement('img', { src: 'static/images/Cartoon-2.svg', className: 'cartoon cartoon-1', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            }), _react2.default.createElement('img', { src: 'static/images/Cartoon.svg', className: 'cartoon cartoon-2', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            }), _react2.default.createElement('img', { src: 'static/images/Cartoon.svg', className: 'cartoon cartoon-3', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            })));
        }
    }]);

    return Hero;
}(_react.Component);

exports.default = Hero;