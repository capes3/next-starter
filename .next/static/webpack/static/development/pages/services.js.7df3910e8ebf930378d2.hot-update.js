webpackHotUpdate("static\\development\\pages\\services.js",{

/***/ "./components/HorizontalTab.js":
/*!*************************************!*\
  !*** ./components/HorizontalTab.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _horizontalTab_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./horizontalTab.css */ "./components/horizontalTab.css");
/* harmony import */ var _horizontalTab_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_horizontalTab_css__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "C:\\Users\\capen\\Desktop\\WorkProjects\\next-js-starter\\components\\HorizontalTab.js";



var HorizontalTab =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HorizontalTab, _React$Component);

  function HorizontalTab(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, HorizontalTab);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(HorizontalTab).call(this, props));
    _this.state = {
      selected: 2
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(HorizontalTab, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var titleArray = this.props.data.title;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: _horizontalTab_css__WEBPACK_IMPORTED_MODULE_6___default.a.wrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: _horizontalTab_css__WEBPACK_IMPORTED_MODULE_6___default.a.tabWrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, "Other Services"), titleArray.map(function (object, i) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: _horizontalTab_css__WEBPACK_IMPORTED_MODULE_6___default.a.tab,
          onClick: function onClick() {
            _this2.setState({
              selected: i
            });
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          },
          __self: this
        }, object.title);
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: _horizontalTab_css__WEBPACK_IMPORTED_MODULE_6___default.a.tabContent,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        className: _horizontalTab_css__WEBPACK_IMPORTED_MODULE_6___default.a.title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, titleArray[this.state.selected].title), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: titleArray[this.state.selected].image,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, titleArray[this.state.selected].content)));
    }
  }]);

  return HorizontalTab;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (HorizontalTab);

/***/ })

})
//# sourceMappingURL=services.js.7df3910e8ebf930378d2.hot-update.js.map