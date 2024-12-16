"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _AlertDialog = _interopRequireDefault(require("./components/AlertDialog"));
var _ConfirmDialog = _interopRequireDefault(require("./components/ConfirmDialog"));
var _PromptDialog = _interopRequireDefault(require("./components/PromptDialog"));
var _DialogContext = _interopRequireDefault(require("./DialogContext"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var DialogProvider = /*#__PURE__*/function (_React$PureComponent) {
  function DialogProvider() {
    var _this;
    _classCallCheck(this, DialogProvider);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, DialogProvider, [].concat(args));
    _defineProperty(_this, "state", {
      alertDialog: null,
      confirmDialog: null,
      promptDialog: null
    });
    _defineProperty(_this, "handleAlertDialogClose", function (value) {
      var alertDialog = _this.state.alertDialog;
      _this.setState({
        alertDialog: _objectSpread(_objectSpread({}, alertDialog), {}, {
          open: false
        })
      });
      return alertDialog.resolve(value);
    });
    _defineProperty(_this, "handleConfirmDialogClose", function (value) {
      var confirmDialog = _this.state.confirmDialog;
      var _confirmDialog$throwO = confirmDialog.throwOnCancel,
        throwOnCancel = _confirmDialog$throwO === void 0 ? true : _confirmDialog$throwO;
      _this.setState({
        confirmDialog: _objectSpread(_objectSpread({}, confirmDialog), {}, {
          open: false
        })
      });
      if (throwOnCancel) {
        return value ? confirmDialog.resolve(value) : confirmDialog.reject();
      } else {
        return [true, false].includes(value) ? confirmDialog.resolve(value) : confirmDialog.reject();
      }
    });
    _defineProperty(_this, "handlePromptDialogClose", function (value) {
      var promptDialog = _this.state.promptDialog;
      _this.setState({
        promptDialog: _objectSpread(_objectSpread({}, promptDialog), {}, {
          open: false
        })
      });
      return value ? promptDialog.resolve(value) : promptDialog.reject();
    });
    _defineProperty(_this, "handleExited", function () {
      _this.setState({
        alertDialog: null,
        confirmDialog: null,
        promptDialog: null
      });
    });
    _defineProperty(_this, "alert", function (options) {
      return typeof options === 'string' ? new Promise(function (resolve, reject) {
        _this.setState({
          alertDialog: {
            message: options,
            resolve: resolve,
            reject: reject,
            open: true
          }
        });
      }) : new Promise(function (resolve, reject) {
        _this.setState({
          alertDialog: _objectSpread(_objectSpread({}, options), {}, {
            resolve: resolve,
            reject: reject,
            open: true
          })
        });
      });
    });
    _defineProperty(_this, "confirm", function (options) {
      return typeof options === 'string' ? new Promise(function (resolve, reject) {
        _this.setState({
          confirmDialog: {
            message: options,
            resolve: resolve,
            reject: reject,
            open: true
          }
        });
      }) : new Promise(function (resolve, reject) {
        _this.setState({
          confirmDialog: _objectSpread(_objectSpread({}, options), {}, {
            resolve: resolve,
            reject: reject,
            open: true
          })
        });
      });
    });
    _defineProperty(_this, "prompt", function (options) {
      return typeof options === 'string' ? new Promise(function (resolve, reject) {
        _this.setState({
          promptDialog: {
            message: options,
            resolve: resolve,
            reject: reject,
            open: true
          }
        });
      }) : new Promise(function (resolve, reject) {
        _this.setState({
          promptDialog: _objectSpread(_objectSpread({}, options), {}, {
            resolve: resolve,
            reject: reject,
            open: true
          })
        });
      });
    });
    _defineProperty(_this, "dialog", {
      alert: _this.alert,
      confirm: _this.confirm,
      prompt: _this.prompt
    });
    return _this;
  }
  _inherits(DialogProvider, _React$PureComponent);
  return _createClass(DialogProvider, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      var _this$state = this.state,
        alertDialog = _this$state.alertDialog,
        confirmDialog = _this$state.confirmDialog,
        promptDialog = _this$state.promptDialog;
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_DialogContext["default"].Provider, {
        value: {
          dialog: this.dialog
        },
        children: [children, alertDialog && /*#__PURE__*/(0, _jsxRuntime.jsx)(_AlertDialog["default"], _objectSpread(_objectSpread({}, alertDialog), {}, {
          open: alertDialog.open,
          onClose: this.handleAlertDialogClose,
          onExited: this.handleExited
        })), confirmDialog && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ConfirmDialog["default"], _objectSpread(_objectSpread({}, confirmDialog), {}, {
          open: confirmDialog.open,
          onClose: this.handleConfirmDialogClose,
          onExited: this.handleExited
        })), promptDialog && /*#__PURE__*/(0, _jsxRuntime.jsx)(_PromptDialog["default"], _objectSpread(_objectSpread({}, promptDialog), {}, {
          open: promptDialog.open,
          onClose: this.handlePromptDialogClose,
          onExited: this.handleExited
        }))]
      });
    }
  }]);
}(_react["default"].PureComponent);
DialogProvider.propTypes = {
  children: _propTypes["default"].node.isRequired
};
var _default = exports["default"] = DialogProvider;