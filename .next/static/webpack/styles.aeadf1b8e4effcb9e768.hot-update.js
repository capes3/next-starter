webpackHotUpdate("styles",{

/***/ "./components/paragraphimageright.css":
/*!********************************************!*\
  !*** ./components/paragraphimageright.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"paragraphWrapper0":"paragraphWrapper0___3-2YW","image":"image___tZI0z","wrapper":"wrapper___IzfCV","title0":"title0___WGDF2","home":"home___34OCf","firstParagraph":"firstParagraph___3xpkS","secondParagraph":"secondParagraph___1vHqp"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1567730512395");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.aeadf1b8e4effcb9e768.hot-update.js.map