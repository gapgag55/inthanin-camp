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

var _Header = require('../components/Header');

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/kopkap/Desktop/works/inthanin-camp-next/pages/people.js?entry';


var People = function (_Component) {
    (0, _inherits3.default)(People, _Component);

    function People(props) {
        (0, _classCallCheck3.default)(this, People);

        var _this = (0, _possibleConstructorReturn3.default)(this, (People.__proto__ || (0, _getPrototypeOf2.default)(People)).call(this, props));

        _this.state = {
            people: []
        };
        return _this;
    }

    (0, _createClass3.default)(People, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            _axios2.default.get('/staff').then(function (response) {
                _this2.setState({
                    people: response.data.staff
                });
            });
        }
    }, {
        key: 'change',
        value: function change(e, id) {
            this.setState({
                people: this.state.people.map(function (person) {
                    if (person._id == id) {
                        person.pass = !person.pass;

                        _axios2.default.post('/pass', { id: id, value: person.pass });
                    }

                    return person;
                })
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }, _react2.default.createElement(_Header2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            }), _react2.default.createElement('div', { className: 'people', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }, _react2.default.createElement('div', { className: 'wrapper', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            }, _react2.default.createElement('div', { className: 'flex', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            }, _react2.default.createElement('span', { className: 'flex-1', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            }, '\u0E08\u0E33\u0E19\u0E27\u0E19 ', this.state.people.length, ' \u0E04\u0E19'), _react2.default.createElement('span', { className: 'flex-1 text-right', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }, '\u0E04\u0E19\u0E1C\u0E48\u0E32\u0E19 ', this.state.people.filter(function (person) {
                return person.pass;
            }).length, ' \u0E04\u0E19')), _react2.default.createElement('div', { className: 'head flex', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }, _react2.default.createElement('div', { className: 'flex-1', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }, '\u0E0A\u0E37\u0E48\u0E2D-\u0E19\u0E32\u0E21\u0E2A\u0E01\u0E38\u0E25'), _react2.default.createElement('div', { className: 'flex-1', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }, '\u0E0A\u0E37\u0E48\u0E2D\u0E40\u0E25\u0E48\u0E19'), _react2.default.createElement('div', { className: 'flex-1', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }, '\u0E23\u0E38\u0E48\u0E19'), _react2.default.createElement('div', { className: 'flex-1', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }, 'Facebook'), _react2.default.createElement('div', { className: 'flex-1', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }, '\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E19\u0E43\u0E08'), _react2.default.createElement('div', { className: 'flex-1', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }, '\u0E40\u0E2B\u0E15\u0E38\u0E1C\u0E25\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E32\u0E01\u0E40\u0E02\u0E49\u0E32\u0E23\u0E48\u0E27\u0E21'), _react2.default.createElement('div', { className: 'flex-1', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            }, '\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E17\u0E35\u0E48\u0E0A\u0E2D\u0E1A'), _react2.default.createElement('div', { className: 'flex-1', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            }, '\u0E04\u0E48\u0E32\u0E22\u0E17\u0E35\u0E48\u0E40\u0E04\u0E22\u0E1C\u0E48\u0E32\u0E19'), _react2.default.createElement('div', { className: 'flex-1', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            }, '\u0E2A\u0E01\u0E34\u0E25'), _react2.default.createElement('div', { className: 'flex-1', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            }, '\u0E02\u0E49\u0E2D\u0E41\u0E19\u0E30\u0E19\u0E33'), _react2.default.createElement('div', { className: 'flex-1', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            }, '\u0E1C\u0E48\u0E32\u0E19/\u0E44\u0E21\u0E48\u0E1C\u0E48\u0E32\u0E19')), _react2.default.createElement('div', { className: 'body', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                }
            }, this.state.people.map(function (person) {
                return _react2.default.createElement('div', { className: 'row flex', key: person._id, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 64
                    }
                }, _react2.default.createElement('div', { className: 'flex-1', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 65
                    }
                }, person.fullname), _react2.default.createElement('div', { className: 'flex-1', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 66
                    }
                }, person.nickName), _react2.default.createElement('div', { className: 'flex-1', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 67
                    }
                }, person.generation), _react2.default.createElement('div', { className: 'flex-1', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 68
                    }
                }, person.facebook), _react2.default.createElement('div', { className: 'flex-1', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 69
                    }
                }, person.interest), _react2.default.createElement('div', { className: 'flex-1', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 70
                    }
                }, person.why), _react2.default.createElement('div', { className: 'flex-1', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 71
                    }
                }, person.activity_favorite), _react2.default.createElement('div', { className: 'flex-1', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 72
                    }
                }, person.camp), _react2.default.createElement('div', { className: 'flex-1', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 73
                    }
                }, person.skill), _react2.default.createElement('div', { className: 'flex-1', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 74
                    }
                }, person.suggestion), _react2.default.createElement('div', { className: 'flex-1', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 75
                    }
                }, _react2.default.createElement('form', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 76
                    }
                }, _react2.default.createElement('input', { type: 'checkbox', checked: person.pass, onChange: function onChange(e) {
                        return _this3.change(e, person._id);
                    }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 77
                    }
                }))));
            })))));
        }
    }]);

    return People;
}(_react.Component);

exports.default = People;