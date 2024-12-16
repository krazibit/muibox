"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Dialog = _interopRequireDefault(require("@mui/material/Dialog"));
var _DialogActions = _interopRequireDefault(require("@mui/material/DialogActions"));
var _DialogContent = _interopRequireDefault(require("@mui/material/DialogContent"));
var _DialogContentText = _interopRequireDefault(require("@mui/material/DialogContentText"));
var _DialogTitle = _interopRequireDefault(require("@mui/material/DialogTitle"));
var _Button = _interopRequireDefault(require("@mui/material/Button"));
var _TextField = _interopRequireDefault(require("@mui/material/TextField"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
var PromptDialog = /*#__PURE__*/function (_React$Component) {
  function PromptDialog() {
    var _this;
    _classCallCheck(this, PromptDialog);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, PromptDialog, [].concat(args));
    _defineProperty(_this, "state", {
      value: _this.props.defaultValue
    });
    _defineProperty(_this, "handleChange", function (event) {
      _this.setState({
        value: event.target.value
      });
    });
    return _this;
  }
  _inherits(PromptDialog, _React$Component);
  return _createClass(PromptDialog, [{
    key: "render",
    value: function render() {
      var value = this.state.value;
      var _this$props = this.props,
        open = _this$props.open,
        _onClose = _this$props.onClose,
        onExited = _this$props.onExited,
        title = _this$props.title,
        message = _this$props.message,
        placeholder = _this$props.placeholder,
        ok = _this$props.ok,
        cancel = _this$props.cancel,
        required = _this$props.required,
        defaultValue = _this$props.defaultValue,
        inputType = _this$props.inputType,
        inputProps = _this$props.inputProps;
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Dialog["default"], {
        fullWidth: true,
        open: open,
        onClose: function onClose() {
          return _onClose(null);
        },
        "aria-labelledby": "prompt-dialog-title",
        "aria-describedby": "prompt-dialog-message",
        TransitionProps: {
          onExited: onExited
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_DialogTitle["default"], {
          id: "prompt-dialog-title",
          children: title
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_DialogContent["default"], {
          children: [_typeof(message) === "string" ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_DialogContentText["default"], {
            id: "confirm-dialog-message",
            children: message
          }) : message, /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextField["default"], {
            id: "prompt-dialog-text-field",
            onChange: this.handleChange,
            defaultValue: defaultValue,
            required: true,
            placeholder: placeholder,
            margin: "dense",
            fullWidth: true,
            type: inputType,
            autoFocus: true,
            inputProps: inputProps
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_DialogActions["default"], {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Button["default"], {
            onClick: function onClick() {
              return _onClose(null);
            },
            color: cancel.color,
            variant: cancel.variant,
            startIcon: cancel.startIcon,
            endIcon: cancel.endIcon,
            children: cancel.text
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button["default"], {
            onClick: function onClick() {
              return _onClose(value);
            },
            color: ok.color,
            variant: ok.variant,
            disabled: required && !value,
            startIcon: ok.startIcon,
            endIcon: ok.endIcon,
            children: ok.text
          })]
        })]
      });
    }
  }]);
}(_react["default"].Component);
PromptDialog.propTypes = {
  open: _propTypes["default"].bool.isRequired,
  onClose: _propTypes["default"].func.isRequired,
  onExited: _propTypes["default"].func.isRequired,
  title: _propTypes["default"].string,
  message: _propTypes["default"].node,
  placeholder: _propTypes["default"].string,
  ok: _propTypes["default"].shape({
    text: _propTypes["default"].string,
    color: _propTypes["default"].string,
    variant: _propTypes["default"].string,
    startIcon: _propTypes["default"].element,
    endIcon: _propTypes["default"].element
  }),
  cancel: _propTypes["default"].shape({
    text: _propTypes["default"].string,
    color: _propTypes["default"].string,
    variant: _propTypes["default"].string,
    startIcon: _propTypes["default"].element,
    endIcon: _propTypes["default"].element
  }),
  required: _propTypes["default"].bool,
  inputType: _propTypes["default"].oneOf(['string', 'password']),
  defaultValue: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  inputProps: _propTypes["default"].object
};
PromptDialog.defaultProps = {
  open: false,
  title: '',
  placeholder: '',
  ok: {
    text: 'OK',
    color: 'primary',
    variant: 'text'
  },
  cancel: {
    text: 'Cancel',
    color: 'primary',
    variant: 'text'
  },
  required: false,
  inputProps: {}
};
var _default = exports["default"] = PromptDialog;