webpackHotUpdate("static\\development\\pages\\about.js",{

/***/ "./components/Banner.js":
/*!******************************!*\
  !*** ./components/Banner.js ***!
  \******************************/
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
/* harmony import */ var _components_home_banner_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/home-banner.css */ "./components/home-banner.css");
/* harmony import */ var _components_home_banner_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components_home_banner_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_banner_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/banner.css */ "./components/banner.css");
/* harmony import */ var _components_banner_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_components_banner_css__WEBPACK_IMPORTED_MODULE_7__);





var _jsxFileName = "C:\\Users\\capen\\Desktop\\WorkProjects\\next-js-starter\\components\\Banner.js";




var Banner =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Banner, _React$Component);

  function Banner() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Banner);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Banner).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Banner, [{
    key: "render",
    value: function render(props) {
      if (this.props.button) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: _components_home_banner_css__WEBPACK_IMPORTED_MODULE_6___default.a.bannerWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 8
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Head, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 9
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("link", {
          href: "https://fonts.googleapis.com/css?family=Lato|Oswald&display=swap",
          rel: "stylesheet",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 10
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
          className: _components_banner_css__WEBPACK_IMPORTED_MODULE_7___default.a.image,
          src: '../static/image-one.jpg',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: _components_home_banner_css__WEBPACK_IMPORTED_MODULE_6___default.a.textWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: _components_home_banner_css__WEBPACK_IMPORTED_MODULE_6___default.a.title,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          },
          __self: this
        }, this.props.text), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          },
          __self: this
        }, this.props.h2), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          },
          __self: this
        }, this.props.button)));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: _components_banner_css__WEBPACK_IMPORTED_MODULE_7___default.a.bannerWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
          className: _components_banner_css__WEBPACK_IMPORTED_MODULE_7___default.a.image,
          src: '../static/image-one.jpg',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: _components_banner_css__WEBPACK_IMPORTED_MODULE_7___default.a.title,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        }, this.props.text));
      }
    }
  }]);

  return Banner;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Banner);

/***/ })

})
//# sourceMappingURL=about.js.10d5b1d0bd060f7462ba.hot-update.js.map