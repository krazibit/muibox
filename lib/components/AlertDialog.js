"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Dialog = _interopRequireDefault(require("@mui/material/Dialog"));
var _DialogActions = _interopRequireDefault(require("@mui/material/DialogActions"));
var _DialogContent = _interopRequireDefault(require("@mui/material/DialogContent"));
var _DialogContentText = _interopRequireDefault(require("@mui/material/DialogContentText"));
var _DialogTitle = _interopRequireDefault(require("@mui/material/DialogTitle"));
var _Button = _interopRequireDefault(require("@mui/material/Button"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function AlertDialog(props, _context) {
  var open = props.open,
    _onClose = props.onClose,
    onExited = props.onExited,
    title = props.title,
    message = props.message,
    ok = props.ok;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Dialog["default"], {
    fullWidth: true,
    open: open,
    onClose: function onClose() {
      return _onClose();
    },
    "aria-labelledby": "alert-dialog-title",
    "aria-describedby": "alert-dialog-message",
    TransitionProps: {
      onExited: onExited
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_DialogTitle["default"], {
      id: "alert-dialog-title",
      children: title
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_DialogContent["default"], {
      children: _typeof(message) === "string" ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_DialogContentText["default"], {
        id: "confirm-dialog-message",
        children: message
      }) : message
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_DialogActions["default"], {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button["default"], {
        onClick: function onClick() {
          return _onClose();
        },
        color: ok.color,
        variant: ok.variant,
        startIcon: ok.startIcon,
        endIcon: ok.endIcon,
        autoFocus: true,
        children: ok.text
      })
    })]
  });
}
AlertDialog.propTypes = {
  open: _propTypes["default"].bool.isRequired,
  onClose: _propTypes["default"].func.isRequired,
  onExited: _propTypes["default"].func.isRequired,
  title: _propTypes["default"].string,
  message: _propTypes["default"].node,
  ok: _propTypes["default"].shape({
    text: _propTypes["default"].string,
    color: _propTypes["default"].string,
    variant: _propTypes["default"].string,
    startIcon: _propTypes["default"].element,
    endIcon: _propTypes["default"].element
  })
};
AlertDialog.defaultProps = {
  open: false,
  title: '',
  ok: {
    text: 'OK',
    color: 'primary',
    variant: 'text'
  }
};
var _default = exports["default"] = AlertDialog;