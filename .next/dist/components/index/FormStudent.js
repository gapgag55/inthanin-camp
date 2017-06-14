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

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/kopkap/Desktop/works/inthanin-camp-next/components/index/FormStudent.js';


var FormStudent = function (_Component) {
    (0, _inherits3.default)(FormStudent, _Component);

    function FormStudent(props) {
        (0, _classCallCheck3.default)(this, FormStudent);

        var _this = (0, _possibleConstructorReturn3.default)(this, (FormStudent.__proto__ || (0, _getPrototypeOf2.default)(FormStudent)).call(this, props));

        _this.state = {
            submit: false,
            message: {
                title: 'ไม่สามารถลงทะเบียนได้'
            }
        };
        return _this;
    }

    (0, _createClass3.default)(FormStudent, [{
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

            _axios2.default.post('/student', data).then(function (response) {
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
                        lineNumber: 55
                    }
                }, _react2.default.createElement('div', { className: 'card', onClick: function onClick(e) {
                        return e.stopPropagation();
                    }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 56
                    }
                }, _react2.default.createElement('div', { className: 'close', onClick: function onClick() {
                        return _this2.closePopup();
                    }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 57
                    }
                }), _react2.default.createElement('h4', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 58
                    }
                }, this.state.message.title), _react2.default.createElement('p', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 59
                    }
                }, '\u0E01\u0E14\u0E41\u0E0A\u0E23\u0E4C\u0E25\u0E07 Facebook'), _react2.default.createElement('iframe', { src: 'https://www.facebook.com/plugins/share_button.php?href=http%3A%2F%2Fwww.inthanincamp.xyz%2F&layout=button_count&size=large&mobile_iframe=true&width=74&height=28&appId', width: '74', height: '28', style: { border: 'none', overflow: 'hidden', scrolling: 'no', frameborder: 0, allowTransparency: 'true' }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 60
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
                    lineNumber: 73
                }
            }, _react2.default.createElement('section', { id: 'section2', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 75
                }
            }, '\u0E43\u0E1A\u0E2A\u0E21\u0E31\u0E04\u0E23\u0E40\u0E02\u0E49\u0E32\u0E23\u0E48\u0E27\u0E21\u0E04\u0E48\u0E32\u0E22'), _react2.default.createElement('h4', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 76
                }
            }, '\u0E17\u0E38\u0E01\u0E04\u0E19\u0E08\u0E30\u0E16\u0E39\u0E01\u0E04\u0E31\u0E14\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E1E\u0E35\u0E48\u0E46\u0E01\u0E25\u0E38\u0E48\u0E21\u0E21\u0E2B\u0E32\u0E27\u0E34\u0E17\u0E22\u0E32\u0E25\u0E31\u0E22\u0E0B\u0E36\u0E48\u0E07\u0E1C\u0E25\u0E1B\u0E23\u0E30\u0E01\u0E32\u0E28\u0E08\u0E30\u0E41\u0E08\u0E49\u0E07\u0E43\u0E2B\u0E49\u0E17\u0E23\u0E32\u0E1A\u0E1C\u0E48\u0E32\u0E19\u0E17\u0E32\u0E07 ', _react2.default.createElement('a', { href: 'https://www.facebook.com/inthaninguidecamp/', target: '_blank', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 76
                }
            }, 'Fanpage'), ' ', _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 76
                }
            }), '\u0E42\u0E1B\u0E23\u0E14\u0E01\u0E23\u0E2D\u0E01\u0E41\u0E1A\u0E1A\u0E1F\u0E2D\u0E23\u0E4C\u0E21\u0E43\u0E2B\u0E49\u0E14\u0E35\u0E17\u0E35\u0E48\u0E2A\u0E38\u0E14'), _react2.default.createElement('form', { onSubmit: this.sendData.bind(this), className: 'flex flex-wrap', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 78
                }
            }, _react2.default.createElement('div', { className: 'flex-1-3 padding', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 79
                }
            }, _react2.default.createElement('input', { type: 'text', placeholder: '\u0E0A\u0E37\u0E48\u0E2D - \u0E19\u0E32\u0E21\u0E2A\u0E01\u0E38\u0E25', ref: 'fname', required: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 80
                }
            })), _react2.default.createElement('div', { className: 'flex-1-3 padding', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 82
                }
            }, _react2.default.createElement('input', { type: 'text', placeholder: '\u0E0A\u0E37\u0E48\u0E2D\u0E40\u0E25\u0E48\u0E19', ref: 'nname', required: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 83
                }
            })), _react2.default.createElement('div', { className: 'flex-1-3 padding', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 85
                }
            }, _react2.default.createElement('input', { type: 'text', placeholder: '\u0E2D\u0E34\u0E19\u0E17\u0E19\u0E34\u0E25\u0E23\u0E38\u0E48\u0E19', ref: 'gen', required: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 86
                }
            })), _react2.default.createElement('div', { className: 'flex-1 padding', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 88
                }
            }, _react2.default.createElement('input', { type: 'text', placeholder: '\u0E0A\u0E37\u0E48\u0E2D Facebook', ref: 'facebook', required: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 89
                }
            })), _react2.default.createElement('div', { className: 'flex-1-2 padding', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 91
                }
            }, _react2.default.createElement('textarea', { placeholder: '\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E19\u0E43\u0E08', ref: 'interest', required: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 92
                }
            })), _react2.default.createElement('div', { className: 'flex-1-2 padding', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 95
                }
            }, _react2.default.createElement('textarea', { placeholder: '\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E1E\u0E34\u0E40\u0E28\u0E29', ref: 'skill', required: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 96
                }
            })), _react2.default.createElement('div', { className: 'flex-1-2 padding', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 99
                }
            }, _react2.default.createElement('textarea', { placeholder: '\u0E40\u0E04\u0E22\u0E1C\u0E48\u0E32\u0E19\u0E04\u0E48\u0E32\u0E22\u0E44\u0E2B\u0E19\u0E21\u0E32\u0E1A\u0E49\u0E32\u0E07 (\u0E40\u0E27\u0E49\u0E19\u0E27\u0E48\u0E32\u0E07\u0E44\u0E14\u0E49)', ref: 'camp', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 100
                }
            })), _react2.default.createElement('div', { className: 'flex-1-2 padding', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 103
                }
            }, _react2.default.createElement('textarea', { placeholder: '\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E17\u0E35\u0E48\u0E1B\u0E23\u0E30\u0E17\u0E31\u0E1A\u0E43\u0E08 \u0E40\u0E1E\u0E23\u0E32\u0E30\u0E2D\u0E30\u0E44\u0E23', ref: 'activity_favorite', required: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 104
                }
            })), _react2.default.createElement('div', { className: 'flex-1 padding', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 107
                }
            }, _react2.default.createElement('textarea', { placeholder: '\u0E40\u0E2B\u0E15\u0E38\u0E1C\u0E25\u0E17\u0E35\u0E48\u0E21\u0E32\u0E2A\u0E21\u0E31\u0E04\u0E23\u0E40\u0E02\u0E49\u0E32\u0E23\u0E48\u0E27\u0E21\u0E04\u0E48\u0E32\u0E22', ref: 'why', required: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 108
                }
            })), _react2.default.createElement('div', { className: 'flex-1 padding', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 111
                }
            }, _react2.default.createElement('textarea', { placeholder: '\u0E02\u0E49\u0E2D\u0E40\u0E2A\u0E19\u0E2D\u0E41\u0E19\u0E30\u0E19\u0E33', ref: 'suggestion', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 112
                }
            })), _react2.default.createElement('div', { className: 'flex-1', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 115
                }
            }, _react2.default.createElement('button', { type: 'submit', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 116
                }
            }, '\u0E2A\u0E48\u0E07\u0E04\u0E33\u0E15\u0E2D\u0E1A')))), this.popup());
        }
    }]);

    return FormStudent;
}(_react.Component);

exports.default = FormStudent;