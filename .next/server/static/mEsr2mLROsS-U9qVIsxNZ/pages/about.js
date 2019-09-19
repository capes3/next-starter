module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+Nqg":
/***/ (function(module, exports) {

module.exports = {
	"bannerWrapper": "bannerWrapper___1QVkh",
	"title": "title___lHFqs",
	"shadow": "shadow___14oS8",
	"image": "image___ohk0X"
};

/***/ }),

/***/ "/+P4":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__("Bhuq");

var _Object$setPrototypeOf = __webpack_require__("TRZx");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "/+oN":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "/HRN":
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Juyh");


/***/ }),

/***/ "0iUn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "1Oay":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0iUn");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("sLSF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("MI3g");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("a7VT");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Tit0");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_paragraphimageright_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("ENa+");
/* harmony import */ var _components_paragraphimageright_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components_paragraphimageright_css__WEBPACK_IMPORTED_MODULE_6__);








var ParagraphImageRight =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(ParagraphImageRight, _React$Component);

  function ParagraphImageRight() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, ParagraphImageRight);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(ParagraphImageRight).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(ParagraphImageRight, [{
    key: "render",
    value: function render(props) {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: _components_paragraphimageright_css__WEBPACK_IMPORTED_MODULE_6___default.a.wrapper
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: this.props.className
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", null, this.props.data.data[this.props.id].title), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, this.props.data.data[this.props.id].content)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        className: _components_paragraphimageright_css__WEBPACK_IMPORTED_MODULE_6___default.a.image,
        src: this.props.data.data[0].image
      })));
    }
  }]);

  return ParagraphImageRight;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (ParagraphImageRight);

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "7fZ1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0iUn");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("sLSF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("MI3g");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("a7VT");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Tit0");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_home_banner_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("Iexx");
/* harmony import */ var _components_home_banner_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_components_home_banner_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_banner_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("+Nqg");
/* harmony import */ var _components_banner_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_components_banner_css__WEBPACK_IMPORTED_MODULE_8__);










var Banner =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Banner, _React$Component);

  function Banner() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Banner);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Banner).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Banner, [{
    key: "render",
    value: function render(props) {
      if (this.props.button) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: _components_home_banner_css__WEBPACK_IMPORTED_MODULE_7___default.a.bannerWrapper
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
          className: _components_banner_css__WEBPACK_IMPORTED_MODULE_8___default.a.image,
          src: '../static/image-one.jpg'
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: _components_home_banner_css__WEBPACK_IMPORTED_MODULE_7___default.a.textWrapper
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: _components_home_banner_css__WEBPACK_IMPORTED_MODULE_7___default.a.title
        }, this.props.text), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", null, this.props.h2), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", null, this.props.button)));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: _components_banner_css__WEBPACK_IMPORTED_MODULE_8___default.a.bannerWrapper
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
          className: _components_banner_css__WEBPACK_IMPORTED_MODULE_8___default.a.image,
          src: '../static/image-one.jpg'
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: _components_banner_css__WEBPACK_IMPORTED_MODULE_8___default.a.title
        }, this.props.text));
      }
    }
  }]);

  return Banner;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Banner);

/***/ }),

/***/ "8lYe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0iUn");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("sLSF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("MI3g");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("a7VT");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Tit0");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _footer_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("iQsK");
/* harmony import */ var _footer_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_footer_css__WEBPACK_IMPORTED_MODULE_6__);








var Footer =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Footer, _React$Component);

  function Footer() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Footer);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Footer).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Footer, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: _footer_css__WEBPACK_IMPORTED_MODULE_6___default.a.footer
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        className: _footer_css__WEBPACK_IMPORTED_MODULE_6___default.a.logo,
        src: "../static/RuppsLogo-NoBackground-Gray.png"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: _footer_css__WEBPACK_IMPORTED_MODULE_6___default.a.contacts
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        className: _footer_css__WEBPACK_IMPORTED_MODULE_6___default.a.pin,
        src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAACJ0lEQVRIS81Wu3EbQQwFhhccI0sVmKpAYsIZbCKrA7kCSRVYrsB2BWYHtiqQXIGtZDHD5KgKxBLkjAE58MBzN3NcYj+6hNrkgsXiYR/w3h7CgRYeCBdeDczME0Q8FZEzLRoRlyLyRESr11yiGJiZrwHgCwBMLAARWSLinIjuSgrIAusNReQeEf/fMLfaAj7mGEgCLxaLs81m8xsRj3KA/X0Reamq6mI2my1j56LATdMcrdfrJkZtQSGruq6n0+n0xYqNAjPzTwC4igA8AsCfdu8DAJxH4u6ISGdjb5nA2lcAeDbin0aj0XVIYduSB0R8b5w5sfodA/7aTnA/z9+6ricx6tpitafvgn5/ds7Nw4JiwEpjSN8NESn90eW9v0XE70HAIxFpO3ZWDFgHYqdyADAp62ezWqQT7pw7LgWWMJCIsprXM8xcdNZM5r1fGYMy6MYAoHa6Zz5vq8fe+zkifgrdaDwen6SmWkQaw+W+EZGqJD9cqsvtdquutbPUh6uqugl1zMw6tT8iLleu43ZIVJOnEe2o3PrOtSeX9pwpJd2LTqr3/hIR71O6Ldi7IKKuwDzVXQQzW0ZSgAcgIr+cc5ex4KQ2YzZYgJy01yTVXfKBlEcp7vKWupH1aJgXFxHzUSiSk5Ux8z53R6Lv72DgVmKpn4Ni0KIeh5Uy8x7tpfT2cxX12ADX35nucb/NvdNW6wYBayK1Vf2m/iRTshsMXKDlZMjBgP8Bd3bwH32bmRUAAAAASUVORK5CYII="
      }), "Tremonton | UT"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        className: _footer_css__WEBPACK_IMPORTED_MODULE_6___default.a.phone,
        src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAABmElEQVRIS+2WwXHCMBBF/97kU+ggdBBzhAukg3SAOyCpIOkg6SCkg6QDTt4ZX0wqICWEE3AAZXbGzHhkyZI8znBBR3v9n/Zr/W3ChRZdiIsruJPzzDwEMNVap0SUViIzAEul1NNoNPo1hTtbXZbl4HA4zE+nU1aDNTautV4nSXJvwqPBAtzv9wut9SMRDQIt+hiPx1m9NgrMzGLfOwCxNnR9K6VmnTtmZtmxQGOWFSoCQR3neS62vsYQATihQeCWTrcAPgHIFN8Zm2qFesFFUaTH47E0O9VafyVJksm5VcO2qsG9UC84z/MfIro1wI0JrcFhGyTbETnPmJlfADzXH5JOJ5PJg01I4HLdFhbBYBHZ7XYb4z3dKqWGocK+QbR27JjihsU+8bb7VjAzr81JdUVfV3gDXAX+xibYJ7wB9oVFX3Ab+I2IFi0WBr2nviOwWS1hMHU82AvUGiDM7AL3BnWB5W/hJjZ7fdaa921WLwHMa4W9dnrWbYCN0P8XqPMjUUXm8vwFirUxpD7oRyBEKLbmCo51rHP9H1Hgwx/ZxDrHAAAAAElFTkSuQmCC"
      }), "(123)-456-7890"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        className: _footer_css__WEBPACK_IMPORTED_MODULE_6___default.a.mail,
        src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAABK0lEQVRIS+2WQbKCMAyGkyn38N1A3TCTnUfhnUQ8id7EZWbYqDfw3YNO3pQBRK01WBQXsANCvvx/2lCEkS4ciQsT+GPOX1nNzBkArAHgZ+AKzgCwIaJdk7cFM/MKAPYDA6/SGWOWaZoe3cMuOK/VvpPtVDuOH+wqs9Y6W+aRVZyMMZm19lDnCYOJqHKCmWNcaCHMLL3ALrgoikVP9ZXKppe1AB1YRI5JkvzefKxR36psii7LcouIC5XiTl9zIto09wH1PpW+QsM97i4ohfpnKrvp9OCQeveuZzteAoNP/YNePtqFr4F96ntuuWhwpb6aQJcVq5k18WANxRMzgaPnstb577J6nINA/RfJRCRHxJnWO02ciPwhopv790cfTYIhY6Zz9ZBuBnONZvU/iWDZH7HnugYAAAAASUVORK5CYII="
      }), "email@gmail.com"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAABPElEQVRIS+2XzU3DQBCF38gXH9MBpAP7YmlOJBWkBOgAOiAd0AIl0AHk4pF8Siog6SAUYA0a5LXWUQyKsptf9rQXz6f35mfHhCMdOhIXpwMWkVtVvQnpBBGtmHnpx+woNiiAz5BQL9bQh2+CRwDeI4HHzPzhYp89+EtVp0Q0d4pUNSOiF8+94IoXaZqO8jxf+ykSkc20BQd3Ajp4dDAzt3VSVVVW1/UjAGvJARFlsayeMbNZ+nPKsnwjoklPVwS1ugMWEWuXu4sDLwA8maokSdZFUbQt1OR40Ch+AHAfMscde/umnIhMATwfHLyl0PYuLntlXhsl9uq4O0TE7HUvm93t0XFnb7Dv7nVU9b/idmRe7OSKkuNdl71d2ql/2TMpzabpN37v7vfHrPa/W/663kbaLreGPZ0/iUOp/gbQTfMfyZUFMgAAAABJRU5ErkJggg=="
      }), "Follow Us")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: _footer_css__WEBPACK_IMPORTED_MODULE_6___default.a.copyright
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, "\xA9 ALL RIGHTS RESERVED")));
    }
  }]);

  return Footer;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),

/***/ "9Jkg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fozc");

/***/ }),

/***/ "AT/M":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "Bhuq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/+oN");

/***/ }),

/***/ "ENa+":
/***/ (function(module, exports) {

module.exports = {
	"paragraphWrapper0": "paragraphWrapper0___3-2YW",
	"image": "image___tZI0z",
	"wrapper": "wrapper___IzfCV",
	"title0": "title0___WGDF2",
	"home": "home___34OCf",
	"firstParagraph": "firstParagraph___3xpkS",
	"secondParagraph": "secondParagraph___1vHqp"
};

/***/ }),

/***/ "Iexx":
/***/ (function(module, exports) {

module.exports = {
	"textWrapper": "textWrapper___M84ax",
	"bannerWrapper": "bannerWrapper___2H5JF"
};

/***/ }),

/***/ "Juyh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/Header.js + 3 modules
var Header = __webpack_require__("b0oO");

// EXTERNAL MODULE: ./components/Footer.js
var Footer = __webpack_require__("8lYe");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./components/Banner.js
var Banner = __webpack_require__("7fZ1");

// EXTERNAL MODULE: ./components/ParagraphImageRight.js
var ParagraphImageRight = __webpack_require__("1Oay");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("AT/M");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("vYYK");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("0iUn");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js
var createClass = __webpack_require__("sLSF");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__("MI3g");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("a7VT");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__("Tit0");

// EXTERNAL MODULE: ./components/accordian.css
var accordian = __webpack_require__("OPZA");
var accordian_default = /*#__PURE__*/__webpack_require__.n(accordian);

// CONCATENATED MODULE: ./components/Accordian.js










var Accordian_Accordian =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(Accordian, _React$Component);

  function Accordian(props) {
    Object(classCallCheck["a" /* default */])(this, Accordian);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Accordian).call(this, props));
  }

  Object(createClass["a" /* default */])(Accordian, [{
    key: "render",
    value: function render() {
      var titleArray = this.props.data.title;
      return external_react_default.a.createElement("div", {
        className: accordian_default.a.wrapper
      }, external_react_default.a.createElement("div", {
        className: accordian_default.a.title
      }, "FAQ"), titleArray.map(function (object, i) {
        return external_react_default.a.createElement("div", {
          className: accordian_default.a.item
        }, external_react_default.a.createElement(Accordian_AccordianItem, {
          title: object,
          key: i
        }));
      }));
    }
  }]);

  return Accordian;
}(external_react_default.a.Component);

var Accordian_AccordianItem =
/*#__PURE__*/
function (_React$Component2) {
  Object(inherits["a" /* default */])(AccordianItem, _React$Component2);

  function AccordianItem(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, AccordianItem);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(AccordianItem).call(this, props));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "toggleContent", function () {
      _this.setState(function (prevState) {
        return {
          isOpen: !prevState.isOpen
        };
      });
    });

    _this.state = {
      isOpen: false
    };
    return _this;
  }

  Object(createClass["a" /* default */])(AccordianItem, [{
    key: "render",
    value: function render() {
      if (this.state.isOpen === true) {
        return external_react_default.a.createElement("div", {
          className: accordian_default.a.itemWrapper
        }, external_react_default.a.createElement("div", {
          className: accordian_default.a.itemTitle,
          onClick: this.toggleContent
        }, this.props.title.title), external_react_default.a.createElement("div", null, this.props.title.content));
      } else {
        return external_react_default.a.createElement("div", {
          className: accordian_default.a.itemTitle,
          onClick: this.toggleContent
        }, this.props.title.title);
      }
    }
  }]);

  return AccordianItem;
}(external_react_default.a.Component);

/* harmony default export */ var components_Accordian = (Accordian_Accordian);
// EXTERNAL MODULE: ./data/paragraphimageright.json
var paragraphimageright = __webpack_require__("zCci");

// EXTERNAL MODULE: ./data/accordian.json
var data_accordian = __webpack_require__("Yelk");

// EXTERNAL MODULE: ./components/paragraphimageright.css
var components_paragraphimageright = __webpack_require__("ENa+");
var paragraphimageright_default = /*#__PURE__*/__webpack_require__.n(components_paragraphimageright);

// CONCATENATED MODULE: ./pages/about.js











var about_About = function About() {
  return external_react_default.a.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("style", null, "\n                body {\n                margin: 0;\n                }"), external_react_default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Lato|Oswald&display=swap",
    rel: "stylesheet"
  }), external_react_default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  }), external_react_default.a.createElement("link", {
    rel: "stylesheet",
    href: "/static/base.css"
  }), external_react_default.a.createElement("script", {
    src: "https://unpkg.com/boxicons@latest/dist/boxicons.js"
  })), external_react_default.a.createElement(Header["a" /* default */], null), external_react_default.a.createElement(Banner["a" /* default */], {
    text: "About Us"
  }), external_react_default.a.createElement(ParagraphImageRight["a" /* default */], {
    data: paragraphimageright,
    id: 0,
    className: paragraphimageright_default.a.home
  }), external_react_default.a.createElement(ParagraphImageRight["a" /* default */], {
    data: paragraphimageright,
    id: 1,
    className: paragraphimageright_default.a.secondParagraph
  }), external_react_default.a.createElement(components_Accordian, {
    data: data_accordian
  }), external_react_default.a.createElement(Footer["a" /* default */], null));
};

/* harmony default export */ var about = __webpack_exports__["default"] = (about_About);

/***/ }),

/***/ "K47E":
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "KI45":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "MI3g":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js
var iterator = __webpack_require__("XVgq");
var iterator_default = /*#__PURE__*/__webpack_require__.n(iterator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol.js
var symbol = __webpack_require__("Z7t5");
var symbol_default = /*#__PURE__*/__webpack_require__.n(symbol);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js



function typeof_typeof2(obj) { if (typeof symbol_default.a === "function" && typeof iterator_default.a === "symbol") { typeof_typeof2 = function _typeof2(obj) { return typeof obj; }; } else { typeof_typeof2 = function _typeof2(obj) { return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof obj; }; } return typeof_typeof2(obj); }

function typeof_typeof(obj) {
  if (typeof symbol_default.a === "function" && typeof_typeof2(iterator_default.a) === "symbol") {
    typeof_typeof = function _typeof(obj) {
      return typeof_typeof2(obj);
    };
  } else {
    typeof_typeof = function _typeof(obj) {
      return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof_typeof2(obj);
    };
  }

  return typeof_typeof(obj);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("AT/M");

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _possibleConstructorReturn; });


function _possibleConstructorReturn(self, call) {
  if (call && (typeof_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(assertThisInitialized["a" /* default */])(self);
}

/***/ }),

/***/ "N9n2":
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__("SqZg");

var setPrototypeOf = __webpack_require__("vjea");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "NwcT":
/***/ (function(module, exports) {

module.exports = {
	"menuList": "menuList___2ZlsW"
};

/***/ }),

/***/ "OPZA":
/***/ (function(module, exports) {

module.exports = {
	"wrapper": "wrapper___3yMX7",
	"title": "title___1nf0U",
	"item": "item___3byWd",
	"itemWrapper": "itemWrapper___1iU0Q",
	"itemTitle": "itemTitle___olevx"
};

/***/ }),

/***/ "SqZg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "TRZx":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Wk4r");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "Tit0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/create.js
var create = __webpack_require__("SqZg");
var create_default = /*#__PURE__*/__webpack_require__.n(create);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js
var set_prototype_of = __webpack_require__("TRZx");
var set_prototype_of_default = /*#__PURE__*/__webpack_require__.n(set_prototype_of);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js

function _setPrototypeOf(o, p) {
  _setPrototypeOf = set_prototype_of_default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _inherits; });


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = create_default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

/***/ }),

/***/ "WaGi":
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__("hfKm");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "Wk4r":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "XVgq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "Yelk":
/***/ (function(module) {

module.exports = {"title":[{"title":"Title1","content":"Content for the 0 index"},{"title":"Title2","content":"Content for the 1 index"},{"title":"Title3","content":"Content for the 2 index"},{"title":"Title4","content":"Content for the 3 index"}]};

/***/ }),

/***/ "Z7t5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

/***/ }),

/***/ "ZDA2":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("iZP3");

var assertThisInitialized = __webpack_require__("K47E");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "a7VT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Bhuq");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("TRZx");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "b0oO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./components/Hamburger.js


var Hamburger_Hamburger = function Hamburger() {
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement("div", null, "Open"), external_react_default.a.createElement("div", null, "Closed"));
};

/* harmony default export */ var components_Hamburger = (Hamburger_Hamburger);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");

// EXTERNAL MODULE: ./components/header.css
var header = __webpack_require__("iMgQ");
var header_default = /*#__PURE__*/__webpack_require__.n(header);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("0iUn");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js
var createClass = __webpack_require__("sLSF");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__("MI3g");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("a7VT");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("AT/M");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__("Tit0");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("vYYK");

// EXTERNAL MODULE: ./components/menu.css
var menu = __webpack_require__("NwcT");
var menu_default = /*#__PURE__*/__webpack_require__.n(menu);

// CONCATENATED MODULE: ./components/Menu.js









var Menu_Item =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(Item, _React$Component);

  function Item() {
    Object(classCallCheck["a" /* default */])(this, Item);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Item).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(Item, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(link_default.a, null, external_react_default.a.createElement("a", {
        href: this.props.href
      }, this.props.name));
    }
  }]);

  return Item;
}(external_react_default.a.Component);

var Menu_Menu =
/*#__PURE__*/
function (_React$Component2) {
  Object(inherits["a" /* default */])(Menu, _React$Component2);

  function Menu() {
    Object(classCallCheck["a" /* default */])(this, Menu);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Menu).call(this));
  }

  Object(createClass["a" /* default */])(Menu, [{
    key: "list",
    value: function list(data) {
      var _this = this;

      var children = function children(items) {
        if (items) {
          return external_react_default.a.createElement("ul", null, _this.list(items));
        }
      };

      return data.map(function (link, index) {
        return external_react_default.a.createElement(Menu_Item, {
          key: link.id,
          name: link.name,
          href: link.href
        }, children(link.items));
      });
    }
  }, {
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("ul", {
        className: menu_default.a.menuList
      }, this.list(this.props.data));
    }
  }]);

  return Menu;
}(external_react_default.a.Component);

/* harmony default export */ var components_Menu = (Menu_Menu); //map through the array and render each element
// EXTERNAL MODULE: ./data/menuItems.json
var menuItems = __webpack_require__("qkq0");

// CONCATENATED MODULE: ./components/MenuIcon.js












var MenuIcon_MenuIcon =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(MenuIcon, _React$Component);

  function MenuIcon() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, MenuIcon);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(MenuIcon).call(this));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleClick", function () {
      _this.setState(function (prevState) {
        return {
          isOpen: !prevState.isOpen
        };
      });
    });

    _this.state = {
      isOpen: false
    };
    return _this;
  }

  Object(createClass["a" /* default */])(MenuIcon, [{
    key: "render",
    value: function render() {
      if (this.state.isOpen === true) {
        return external_react_default.a.createElement("div", {
          onClick: this.handleClick,
          className: header_default.a.open
        }, external_react_default.a.createElement("img", {
          className: header_default.a.menuIcon,
          src: "../static/bx-x.svg"
        }), external_react_default.a.createElement(components_Menu, {
          data: menuItems.data
        }));
      } else {
        return external_react_default.a.createElement("div", {
          onClick: this.handleClick
        }, external_react_default.a.createElement("img", {
          className: header_default.a.menuIcon,
          src: "../static/bx-menu.svg"
        }));
      }
    }
  }]);

  return MenuIcon;
}(external_react_default.a.Component);

/* harmony default export */ var components_MenuIcon = (MenuIcon_MenuIcon);
// CONCATENATED MODULE: ./components/Header.js





 //put in state here that controls whether the menu is open and which menu icon displays with a boolean then probably pass state down to a
//menu component that conditionally renders the menu based on what that boolean is.  
//think through how an abstract nested menu needs to be built.  

var Header_Header = function Header() {
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement("div", {
    className: header_default.a.contactBar
  }, external_react_default.a.createElement("div", {
    className: header_default.a.phone
  }, "(435)257-7333"), external_react_default.a.createElement("div", {
    className: header_default.a.social
  }, external_react_default.a.createElement("div", null, "follow us on:"), external_react_default.a.createElement("box-icon", {
    name: "facebook-square",
    type: "logo",
    color: "white"
  }))), external_react_default.a.createElement("div", {
    className: header_default.a.headerWrapper
  }, external_react_default.a.createElement("div", {
    className: header_default.a.logoWrapper
  }, external_react_default.a.createElement("img", {
    className: header_default.a.logo,
    src: "../static/RuppsLogo-WhiteBorder.png"
  })), external_react_default.a.createElement("div", {
    className: header_default.a.linkWrapper
  }, external_react_default.a.createElement(link_default.a, null, external_react_default.a.createElement("a", {
    href: "/"
  }, "Home")), external_react_default.a.createElement(link_default.a, null, external_react_default.a.createElement("a", {
    href: "/about"
  }, "About")), external_react_default.a.createElement(link_default.a, null, external_react_default.a.createElement("a", {
    href: "/services"
  }, "Services")), external_react_default.a.createElement(link_default.a, null, external_react_default.a.createElement("a", {
    href: "/projects"
  }, "Projects")), external_react_default.a.createElement(link_default.a, null, external_react_default.a.createElement("a", {
    className: header_default.a.contactButton,
    href: "/contact"
  }, "Contact"))), external_react_default.a.createElement("div", {
    className: header_default.a.hamburgerContainer
  }, external_react_default.a.createElement(components_MenuIcon, null))));
};

/* harmony default export */ var components_Header = __webpack_exports__["a"] = (Header_Header);

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__("KI45");

var _stringify = _interopRequireDefault(__webpack_require__("9Jkg"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("ZDA2"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("/+P4"));

var _inherits2 = _interopRequireDefault(__webpack_require__("N9n2"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__("bzos");

var react_1 = __importStar(__webpack_require__("cDcd"));

var prop_types_1 = __importDefault(__webpack_require__("rf6O"));

var router_1 = __importStar(__webpack_require__("4Q3z"));

var utils_1 = __webpack_require__("p8BD");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? utils_1.formatWithValidation(url) : url;
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: formatUrl(asHref, true)
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (true) {
        if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
          props.href = router_1.Router._rewriteUrlForNextExport(props.href);
        }
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (false) { var exact, warn; }

exports.default = Link;

/***/ }),

/***/ "fozc":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "iMgQ":
/***/ (function(module, exports) {

module.exports = {
	"hamburgerContainer": "hamburgerContainer___xAdXq",
	"menuIcon": "menuIcon___CXDdv",
	"logo": "logo___2qumV",
	"headerWrapper": "headerWrapper___snjFD",
	"linkWrapper": "linkWrapper___3hNju",
	"contactBar": "contactBar___3m9ZO",
	"social": "social___2bccx",
	"contactButton": "contactButton___2oLtU"
};

/***/ }),

/***/ "iQsK":
/***/ (function(module, exports) {

module.exports = {
	"footer": "footer___J0gcl",
	"contacts": "contacts___oJsmQ",
	"copyright": "copyright___2ziwk",
	"logo": "logo___vKz-K"
};

/***/ }),

/***/ "iZP3":
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__("XVgq");

var _Symbol = __webpack_require__("Z7t5");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "p8BD":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "qkq0":
/***/ (function(module) {

module.exports = {"data":[{"id":1,"name":"Home","href":"/"},{"id":2,"name":"About","href":"/about"},{"id":3,"name":"Contact","href":"/contact"},{"id":4,"name":"Services","href":"/services"},{"id":5,"name":"Projects","href":"/projects"}]};

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "sLSF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "vYYK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "vjea":
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__("TRZx");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "zCci":
/***/ (function(module) {

module.exports = {"data":[{"id":0,"title":"Title for the first","content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.","image":"https://picsum.photos/id/785/1600/400?blur=2"},{"id":1,"title":"Title for the second","content":"1Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis lectus nulla at volutpat diam ut venenatis. Facilisis volutpat est velit egestas dui id. Enim ut tellus elementum sagittis vitae et leo. Iaculis urna id volutpat lacus. Curabitur vitae nunc sed velit dignissim sodales. Amet porttitor eget dolor morbi non. Metus dictum at tempor commodo ullamcorper a lacus. Ridiculus mus mauris vitae ultricies. Senectus et netus et malesuada fames ac turpis. Mattis rhoncus urna neque viverra justo. Ac odio tempor orci dapibus ultrices in iaculis nunc. Auctor augue mauris augue neque gravida in fermentum et sollicitudin. Vitae tempus quam pellentesque nec nam aliquam sem et. Tempus quam pellentesque nec nam aliquam sem et. Viverra vitae congue eu consequat ac. Ut tristique et egestas quis.","image":"https://picsum.photos/id/785/1600/400?blur=2"}]};

/***/ })

/******/ });