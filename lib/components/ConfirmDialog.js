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
function ConfirmDialog(props, _context) {
  var open = props.open,
    _onClose = props.onClose,
    onExited = props.onExited,
    title = props.title,
    message = props.message,
    ok = props.ok,
    cancel = props.cancel;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Dialog["default"], {
    fullWidth: true,
    open: open,
    onClose: function onClose() {
      return _onClose();
    },
    "aria-labelledby": "confirm-dialog-title",
    "aria-describedby": "confirm-dialog-message",
    TransitionProps: {
      onExited: onExited
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_DialogTitle["default"], {
      id: "confirm-dialog-title",
      children: title
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_DialogContent["default"], {
      children: _typeof(message) === "string" ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_DialogContentText["default"], {
        id: "confirm-dialog-message",
        children: message
      }) : message
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_DialogActions["default"], {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Button["default"], {
        onClick: function onClick() {
          return _onClose(false);
        },
        color: cancel.color,
        variant: cancel.variant,
        startIcon: cancel.startIcon,
        endIcon: cancel.endIcon,
        children: cancel.text
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button["default"], {
        onClick: function onClick() {
          return _onClose(true);
        },
        color: ok.color,
        variant: ok.variant,
        startIcon: ok.startIcon,
        endIcon: ok.endIcon,
        autoFocus: true,
        children: ok.text
      })]
    })]
  });
}
ConfirmDialog.propTypes = {
  open: _propTypes["default"].bool.isRequired,
  onClose: _propTypes["default"].func.isRequired,
  onExited: _propTypes["default"].func.isRequired,
  title: _propTypes["default"].string,
  message: _propTypes["default"].node,
  throwOnCancel: _propTypes["default"].bool,
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
  })
};
ConfirmDialog.defaultProps = {
  open: false,
  title: '',
  ok: {
    text: 'OK',
    color: 'primary',
    variant: 'text'
  },
  cancel: {
    text: 'Cancel',
    color: 'primary',
    variant: 'text'
  }
};
var _default = exports["default"] = ConfirmDialog;