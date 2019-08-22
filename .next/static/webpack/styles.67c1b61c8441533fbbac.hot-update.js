webpackHotUpdate("styles",{

/***/ "./components/header.css":
/*!*******************************!*\
  !*** ./components/header.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"hamburgerContainer":"hamburgerContainer___xAdXq","menuIcon":"menuIcon___CXDdv","logo":"logo___2qumV","headerWrapper":"headerWrapper___snjFD","linkWrapper":"linkWrapper___3hNju","contactBar":"contactBar___3m9ZO","social":"social___2bccx","contactButton":"contactButton___2oLtU"};;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1566438364697");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.67c1b61c8441533fbbac.hot-update.js.map