webpackHotUpdate("static\\development\\pages\\projects.js",{

/***/ "./components/AlternatingImg.js":
/*!**************************************!*\
  !*** ./components/AlternatingImg.js ***!
  \**************************************/
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
/* harmony import */ var _components_alternatingImg_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/alternatingImg.css */ "./components/alternatingImg.css");
/* harmony import */ var _components_alternatingImg_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components_alternatingImg_css__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "C:\\Users\\capen\\Desktop\\WorkProjects\\next-js-starter\\components\\AlternatingImg.js";



var AlternatingImg =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(AlternatingImg, _React$Component);

  function AlternatingImg(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AlternatingImg);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(AlternatingImg).call(this, props));
    _this.state = {
      selected: 0
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AlternatingImg, [{
    key: "render",
    value: function render() {
      var titleArray = this.props.data.title;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: _components_alternatingImg_css__WEBPACK_IMPORTED_MODULE_6___default.a.wrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, titleArray.map(function (object, i) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: _components_alternatingImg_css__WEBPACK_IMPORTED_MODULE_6___default.a.alternateItems,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(AlternatingItem, {
          title: object,
          index: i,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          },
          __self: this
        }));
      }));
    }
  }]);

  return AlternatingImg;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

var AlternatingItem =
/*#__PURE__*/
function (_React$Component2) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(AlternatingItem, _React$Component2);

  function AlternatingItem() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AlternatingItem);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(AlternatingItem).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AlternatingItem, [{
    key: "render",
    value: function render() {
      if (this.props.index % 2 === 0) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: _components_alternatingImg_css__WEBPACK_IMPORTED_MODULE_6___default.a.odds,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          },
          __self: this
        }, this.props.title.title), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          __self: this
        }, this.props.title.content)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
          src: this.props.title.image,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          },
          __self: this
        }));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: _components_alternatingImg_css__WEBPACK_IMPORTED_MODULE_6___default.a.evens,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          __self: this
        }, this.props.title.title), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          },
          __self: this
        }, this.props.title.content)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
          src: this.props.title.image,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          },
          __self: this
        }));
      }
    }
  }]);

  return AlternatingItem;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AlternatingImg);

/***/ })

})
//# sourceMappingURL=projects.js.d25c8d775055ddf57143.hot-update.js.map