webpackHotUpdate(5,{

/***/ 572:
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

var _reactScrollchor = __webpack_require__(573);

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
            }, '\u0E23\u0E31\u0E1A\u0E2A\u0E21\u0E31\u0E04\u0E23 Staff \u0E15\u0E31\u0E49\u0E07\u0E41\u0E15\u0E48\u0E27\u0E31\u0E19\u0E19\u0E35\u0E49 - 20 \u0E21\u0E34\u0E16\u0E38\u0E19\u0E32\u0E22\u0E19 2560'), _react2.default.createElement('li', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            }, '\u0E23\u0E31\u0E1A\u0E2A\u0E21\u0E31\u0E04\u0E23\u0E19\u0E49\u0E2D\u0E07\u0E04\u0E48\u0E32\u0E22 \u0E27\u0E31\u0E19\u0E17\u0E35\u0E48 21 - 30 \u0E21\u0E34\u0E16\u0E38\u0E19\u0E32\u0E22\u0E19 2560'), _react2.default.createElement('li', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            }, '\u0E1B\u0E23\u0E30\u0E01\u0E32\u0E28\u0E1C\u0E25\u0E17\u0E31\u0E49\u0E07 Staff \u0E41\u0E25\u0E30\u0E19\u0E49\u0E2D\u0E07\u0E04\u0E48\u0E32\u0E22 \u0E27\u0E31\u0E19\u0E17\u0E35\u0E48 6 \u0E01\u0E23\u0E01\u0E0E\u0E32\u0E04\u0E21 2560'))), _react2.default.createElement('section', { className: 'header', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }, _react2.default.createElement('div', { className: 'heading', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            }, _react2.default.createElement('h1', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                }
            }, 'Inthanin'), _react2.default.createElement('h2', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            }, 'guide camp #1'), _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            }, '\u0E04\u0E48\u0E32\u0E22\u0E08\u0E31\u0E14\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48 8,9,10 \u0E01\u0E23\u0E01\u0E0E\u0E32\u0E04\u0E21 2560 - \u0E2A\u0E16\u0E32\u0E19\u0E17\u0E35\u0E48\u0E08\u0E30\u0E41\u0E08\u0E49\u0E07\u0E43\u0E2B\u0E49\u0E17\u0E23\u0E32\u0E1A\u0E1C\u0E48\u0E32\u0E19\u0E41\u0E1F\u0E19\u0E40\u0E1E\u0E08'), _react2.default.createElement(_reactScrollchor2.default, { to: '#section2', animate: { offset: 0, duration: 800 }, className: 'button', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }, '\u0E2A\u0E21\u0E31\u0E04\u0E23\u0E40\u0E1B\u0E47\u0E19 Staff - (\u0E40\u0E09\u0E1E\u0E32\u0E30\u0E23\u0E38\u0E48\u0E19\u0E1E\u0E35\u0E48\u0E17\u0E35\u0E48\u0E08\u0E1A \u0E21.\u0E1B\u0E25\u0E32\u0E22)')), _react2.default.createElement('svg', { version: '1.1', xmlns: 'http://www.w3.org/2000/svg', x: '0px', y: '0px', style: { display: 'none' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }, _react2.default.createElement('symbol', { id: 'wave', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            }, _react2.default.createElement('path', { d: 'M420,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C514,6.5,518,4.7,528.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H420z', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            }), _react2.default.createElement('path', { d: 'M420,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C326,6.5,322,4.7,311.5,2.7C304.3,1.4,293.6-0.1,280,0c0,0,0,0,0,0v20H420z', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            }), _react2.default.createElement('path', { d: 'M140,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C234,6.5,238,4.7,248.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H140z', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }), _react2.default.createElement('path', { d: 'M140,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C46,6.5,42,4.7,31.5,2.7C24.3,1.4,13.6-0.1,0,0c0,0,0,0,0,0l0,20H140z', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }))), _react2.default.createElement('svg', { className: 'water__wave water__wave_front', viewBox: '0 0 560 20', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }, _react2.default.createElement('use', { xlinkHref: '#wave', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            })), _react2.default.createElement('svg', { className: 'water__wave water__wave_back', viewBox: '0 0 560 20', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }, _react2.default.createElement('use', { xlinkHref: '#wave', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            })), _react2.default.createElement('img', { src: 'static/images/Cartoon-2.svg', className: 'cartoon cartoon-1', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            }), _react2.default.createElement('img', { src: 'static/images/Cartoon.svg', className: 'cartoon cartoon-2', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            }), _react2.default.createElement('img', { src: 'static/images/Cartoon.svg', className: 'cartoon cartoon-3', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            })));
        }
    }]);

    return Hero;
}(_react.Component);

exports.default = Hero;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/kopkap/Desktop/works/inthanin-camp-next/components/index/Hero.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/kopkap/Desktop/works/inthanin-camp-next/components/index/Hero.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS4yZDE0Y2RkZmM1N2IxOTU2Y2E5OC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pbmRleC9IZXJvLmpzPzAxYzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFNjcm9sbGNob3IgZnJvbSAncmVhY3Qtc2Nyb2xsY2hvcic7XG5cbmNsYXNzIEhlcm8gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgc2hvdzogZmFsc2VcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNob3coKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc2hvdzogdHJ1ZVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5zaG93LmJpbmQodGhpcykpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB2YXIgc2hvdyA9IHRoaXMuc3RhdGUuc2hvdyA/ICdiYXIgaXMtc2hvdycgOiAnYmFyJztcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c2hvd30+XG4gICAgICAgICAgICAgICAg4LiB4Liz4Lir4LiZ4LiU4LiB4Liy4LijIDogXG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICA8bGk+4Lij4Lix4Lia4Liq4Lih4Lix4LiE4LijIFN0YWZmIOC4leC4seC5ieC4h+C5geC4leC5iOC4p+C4seC4meC4meC4teC5iSAtIDIwIOC4oeC4tOC4luC4uOC4meC4suC4ouC4mSAyNTYwPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPuC4o+C4seC4muC4quC4oeC4seC4hOC4o+C4meC5ieC4reC4h+C4hOC5iOC4suC4oiDguKfguLHguJnguJfguLXguYggMjEgLSAzMCDguKHguLTguJbguLjguJnguLLguKLguJkgMjU2MDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT7guJvguKPguLDguIHguLLguKjguJzguKXguJfguLHguYnguIcgU3RhZmYg4LmB4Lil4Liw4LiZ4LmJ4Lit4LiH4LiE4LmI4Liy4LiiIOC4p+C4seC4meC4l+C4teC5iCA2IOC4geC4o+C4geC4juC4suC4hOC4oSAyNTYwPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgxPkludGhhbmluPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPGgyPmd1aWRlIGNhbXAgIzE8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8cD7guITguYjguLLguKLguIjguLHguJTguKfguLHguJnguJfguLXguYggOCw5LDEwIOC4geC4o+C4geC4juC4suC4hOC4oSAyNTYwIC0g4Liq4LiW4Liy4LiZ4LiX4Li14LmI4LiI4Liw4LmB4LiI4LmJ4LiH4LmD4Lir4LmJ4LiX4Lij4Liy4Lia4Lic4LmI4Liy4LiZ4LmB4Lif4LiZ4LmA4Lie4LiIPC9wPlxuICAgICAgICAgICAgICAgICAgICA8U2Nyb2xsY2hvciB0bz1cIiNzZWN0aW9uMlwiIGFuaW1hdGU9e3sgb2Zmc2V0OiAwLCBkdXJhdGlvbjogODAwIH19IGNsYXNzTmFtZT1cImJ1dHRvblwiPuC4quC4oeC4seC4hOC4o+C5gOC4m+C5h+C4mSBTdGFmZiAtICjguYDguInguJ7guLLguLDguKPguLjguYjguJnguJ7guLXguYjguJfguLXguYjguIjguJog4LihLuC4m+C4peC4suC4oik8L1Njcm9sbGNob3I+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHN2ZyB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHg9XCIwcHhcIiB5PVwiMHB4XCIgc3R5bGU9e3tkaXNwbGF5OiAnbm9uZSd9fT5cbiAgICAgICAgICAgICAgICAgICAgPHN5bWJvbCBpZD1cIndhdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNDIwLDIwYzIxLjUtMC40LDM4LjgtMi41LDUxLjEtNC41YzEzLjQtMi4yLDI2LjUtNS4yLDI3LjMtNS40QzUxNCw2LjUsNTE4LDQuNyw1MjguNSwyLjdjNy4xLTEuMywxNy45LTIuOCwzMS41LTIuN2MwLDAsMCwwLDAsMHYyMEg0MjB6XCI+PC9wYXRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk00MjAsMjBjLTIxLjUtMC40LTM4LjgtMi41LTUxLjEtNC41Yy0xMy40LTIuMi0yNi41LTUuMi0yNy4zLTUuNEMzMjYsNi41LDMyMiw0LjcsMzExLjUsMi43QzMwNC4zLDEuNCwyOTMuNi0wLjEsMjgwLDBjMCwwLDAsMCwwLDB2MjBINDIwelwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTQwLDIwYzIxLjUtMC40LDM4LjgtMi41LDUxLjEtNC41YzEzLjQtMi4yLDI2LjUtNS4yLDI3LjMtNS40QzIzNCw2LjUsMjM4LDQuNywyNDguNSwyLjdjNy4xLTEuMywxNy45LTIuOCwzMS41LTIuN2MwLDAsMCwwLDAsMHYyMEgxNDB6XCI+PC9wYXRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xNDAsMjBjLTIxLjUtMC40LTM4LjgtMi41LTUxLjEtNC41Yy0xMy40LTIuMi0yNi41LTUuMi0yNy4zLTUuNEM0Niw2LjUsNDIsNC43LDMxLjUsMi43QzI0LjMsMS40LDEzLjYtMC4xLDAsMGMwLDAsMCwwLDAsMGwwLDIwSDE0MHpcIj48L3BhdGg+XG4gICAgICAgICAgICAgICAgICAgIDwvc3ltYm9sPlxuICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwid2F0ZXJfX3dhdmUgd2F0ZXJfX3dhdmVfZnJvbnRcIiB2aWV3Qm94PVwiMCAwIDU2MCAyMFwiPlxuICAgICAgICAgICAgICAgICAgICA8dXNlIHhsaW5rSHJlZj1cIiN3YXZlXCI+PC91c2U+XG4gICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJ3YXRlcl9fd2F2ZSB3YXRlcl9fd2F2ZV9iYWNrXCIgdmlld0JveD1cIjAgMCA1NjAgMjBcIj5cbiAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGlua0hyZWY9XCIjd2F2ZVwiPjwvdXNlPlxuICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwic3RhdGljL2ltYWdlcy9DYXJ0b29uLTIuc3ZnXCIgY2xhc3NOYW1lPVwiY2FydG9vbiBjYXJ0b29uLTFcIiAvPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwic3RhdGljL2ltYWdlcy9DYXJ0b29uLnN2Z1wiIGNsYXNzTmFtZT1cImNhcnRvb24gY2FydG9vbi0yXCIgLz5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cInN0YXRpYy9pbWFnZXMvQ2FydG9vbi5zdmdcIiBjbGFzc05hbWU9XCJjYXJ0b29uIGNhcnRvb24tM1wiIC8+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVybztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2luZGV4L0hlcm8uanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7Ozs7O0FBR0E7QUFBQTtBQUdBO0FBRkE7Ozs7QUFLQTtBQUFBOzs7O0FBSUE7QUFBQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFHQTtBQUhBO0FBR0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUlBO0FBSkE7Ozs7OztBQU9BO0FBQ0E7QUFEQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9