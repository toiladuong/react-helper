"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _TiktokLoaderModule = _interopRequireDefault(require("../component/styles/TiktokLoader.module.scss"));
var _bind = _interopRequireDefault(require("classnames/bind"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const cx = _bind.default.bind(_TiktokLoaderModule.default);
function TiktokLoader(_ref) {
  let {
    size = '32px',
    classNames
  } = _ref;
  return /*#__PURE__*/React.createElement("div", {
    className: cx('tiktok-loader')
  }, /*#__PURE__*/React.createElement("div", {
    className: cx('loader-container')
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size
    },
    className: cx('loader', classNames)
  })));
}
TiktokLoader.PropTypes = {
  //Prop to customize the size of loader circle, default is '32px'
  size: _propTypes.default.string,
  //classNames for loader circle
  classNames: _propTypes.default.string
};
var _default = exports.default = TiktokLoader;