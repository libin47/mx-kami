"use strict";
(() => {
var exports = {};
exports.id = 9290;
exports.ids = [9290];
exports.modules = {

/***/ 52167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 33104:
/***/ ((module) => {

module.exports = require("camelcase-keys");

/***/ }),

/***/ 1635:
/***/ ((module) => {

module.exports = require("dayjs");

/***/ }),

/***/ 15255:
/***/ ((module) => {

module.exports = require("react-message-popup");

/***/ }),

/***/ 69915:
/***/ ((module) => {

module.exports = import("js-cookie");;

/***/ }),

/***/ 75398:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ sitemapFunc)
/* harmony export */ });
/* harmony import */ var _utils_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64640);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_client__WEBPACK_IMPORTED_MODULE_0__]);
_utils_client__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

async function sitemapFunc(req, res) {
    const xml = await _utils_client__WEBPACK_IMPORTED_MODULE_0__/* .apiClient.proxy.sitemap.get */ .x.proxy.sitemap.get();
    res.setHeader("Content-Type", "text/xml");
    res.write(xml);
    res.end();
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4640], () => (__webpack_exec__(75398)));
module.exports = __webpack_exports__;

})();