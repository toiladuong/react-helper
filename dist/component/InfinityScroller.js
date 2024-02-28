"use strict";

require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _TiktokLoader = _interopRequireDefault(require("./TiktokLoader"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
//This state decide should the Scroller invoke
let hasMore = true;
function InfinityScroller(_ref) {
  let {
    children,
    className,
    loader = /*#__PURE__*/_react.default.createElement(_TiktokLoader.default, null),
    endMessage = /*#__PURE__*/_react.default.createElement("div", null, "No more result"),
    fetchMore
  } = _ref;
  const scrollerRef = (0, _react.useRef)();
  const fetchState = {
    loaded: () => {
      hasMore = true;
    },
    completed: () => {
      hasMore = false;
    }
  };
  (0, _react.useEffect)(() => {
    if (hasMore) {
      const observer = new IntersectionObserver(entries => {
        //Check the scroller is in-view
        if (entries[0].isIntersecting) {
          fetchMore(fetchState);
        }
      });
      if (scrollerRef.current) {
        observer.observe(scrollerRef.current);
      }
      return () => {
        if (scrollerRef.current) {
          observer.unobserve(scrollerRef.current);
        }
      };
    }
  }, [hasMore]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: className
  }, children, hasMore ? /*#__PURE__*/_react.default.createElement("div", {
    ref: scrollerRef
  }, loader) : endMessage);
}
InfinityScroller.PropTypes = {
  children: _propTypes.default.element,
  className: _propTypes.default.string,
  //You can customize the loader for Infinity Scroller
  loader: _propTypes.default.element,
  //The React element shown on UI when fetch state marked as completed and no more loading
  endMessage: _propTypes.default.element,
  //When the Scroller is in-view, this is loading handler passed to run
  fetchMore: _propTypes.default.func.isRequired
};
var _default = exports.default = InfinityScroller;