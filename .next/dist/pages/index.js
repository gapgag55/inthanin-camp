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

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _Header = require('../components/Header');

var _Header2 = _interopRequireDefault(_Header);

var _Footer = require('../components/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _Hero = require('../components/index/Hero');

var _Hero2 = _interopRequireDefault(_Hero);

var _FormStaff = require('../components/index/FormStaff');

var _FormStaff2 = _interopRequireDefault(_FormStaff);

var _index = require('../scss/index.scss');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/kopkap/Desktop/works/inthanin-camp-next/pages/index.js?entry';
// import FormStudent from '../components/index/FormStudent'

var App = function (_Component) {
  (0, _inherits3.default)(App, _Component);

  function App(props) {
    (0, _classCallCheck3.default)(this, App);

    var _this = (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).call(this, props));

    _this.state = {
      isStaff: false
    };
    return _this;
  }

  (0, _createClass3.default)(App, [{
    key: 'nextTabs',
    value: function nextTabs() {
      this.setState({
        isStaff: !this.state.isStaff
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var render;
      // if(this.state.isStaff) {
      render = _react2.default.createElement(_FormStaff2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      });
      // } else {
      // render = <FormStudent />
      // }

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, _react2.default.createElement(_Header2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }), _react2.default.createElement(_Hero2.default, { changeTab: this.nextTabs.bind(this), __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }), render, _react2.default.createElement(_Footer2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }));
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;