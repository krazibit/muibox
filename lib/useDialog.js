"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = require("react");
var _DialogContext = _interopRequireDefault(require("./DialogContext"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function useDialog() {
  var _useContext = (0, _react.useContext)(_DialogContext["default"]),
    dialog = _useContext.dialog;
  return dialog;
}
var _default = exports["default"] = useDialog;