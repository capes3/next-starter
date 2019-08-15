webpackHotUpdate("styles",{

/***/ "./components/carousel.css":
/*!*********************************!*\
  !*** ./components/carousel.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"carouselWrapper":"carouselWrapper___qz1ci","carousel":"carousel___2vM-W","carouselTitle":"carouselTitle___2qt1Y","imageWrapper":"imageWrapper___25qmt","image":"image___2KLfO"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1565842990235");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.c20be896945202fb9019.hot-update.js.map