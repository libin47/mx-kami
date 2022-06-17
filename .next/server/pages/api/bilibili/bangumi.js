"use strict";
(() => {
var exports = {};
exports.id = 6454;
exports.ids = [6454];
exports.modules = {

/***/ 60886:
/***/ ((module) => {

module.exports = require("@mx-space/extra");

/***/ }),

/***/ 52167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 33104:
/***/ ((module) => {

module.exports = require("camelcase-keys");

/***/ }),

/***/ 68103:
/***/ ((module) => {

module.exports = require("clsx");

/***/ }),

/***/ 71705:
/***/ ((module) => {

module.exports = require("css-spring");

/***/ }),

/***/ 1635:
/***/ ((module) => {

module.exports = require("dayjs");

/***/ }),

/***/ 95468:
/***/ ((module) => {

module.exports = require("dayjs/locale/zh-cn");

/***/ }),

/***/ 84125:
/***/ ((module) => {

module.exports = require("dayjs/plugin/customParseFormat");

/***/ }),

/***/ 67424:
/***/ ((module) => {

module.exports = require("dayjs/plugin/localizedFormat");

/***/ }),

/***/ 43491:
/***/ ((module) => {

module.exports = require("devtools-detector");

/***/ }),

/***/ 36211:
/***/ ((module) => {

module.exports = require("mobx");

/***/ }),

/***/ 45944:
/***/ ((module) => {

module.exports = require("mobx-react-lite");

/***/ }),

/***/ 95832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 30503:
/***/ ((module) => {

module.exports = require("randomcolor");

/***/ }),

/***/ 16689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 66405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 19785:
/***/ ((module) => {

module.exports = require("react-intersection-observer");

/***/ }),

/***/ 15255:
/***/ ((module) => {

module.exports = require("react-message-popup");

/***/ }),

/***/ 20997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 4579:
/***/ ((module) => {

module.exports = require("remove-markdown");

/***/ }),

/***/ 69915:
/***/ ((module) => {

module.exports = import("js-cookie");;

/***/ }),

/***/ 3590:
/***/ ((module) => {

module.exports = import("react-toastify");;

/***/ }),

/***/ 63477:
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ 57310:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 96199:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getBangumi)
/* harmony export */ });
/* harmony import */ var _mx_space_extra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60886);
/* harmony import */ var _mx_space_extra__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mx_space_extra__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63477);
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57310);
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(77314);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([utils__WEBPACK_IMPORTED_MODULE_3__]);
utils__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/*
 * @Author: Innei
 * @Date: 2021-02-11 13:01:38
 * @LastEditTime: 2021-02-11 13:53:22
 * @LastEditors: Innei
 * @FilePath: /web/pages/api/bilibili/bangumi.ts
 * @Mark: Coding with Love
 */ 



async function getBangumi(req, res) {
    const queryObject = (0,querystring__WEBPACK_IMPORTED_MODULE_1__.parse)((0,url__WEBPACK_IMPORTED_MODULE_2__.parse)(req.url).query);
    const { uid , len =10  } = queryObject;
    try {
        const client = new _mx_space_extra__WEBPACK_IMPORTED_MODULE_0__.BiliClient(parseInt(uid));
        const bangumi = await client.getFavoriteBangumi(parseInt(len));
        (0,utils__WEBPACK_IMPORTED_MODULE_3__/* .writeBody */ .l7)(res, {
            data: bangumi
        });
    } catch (e) {
        console.log(e);
        (0,utils__WEBPACK_IMPORTED_MODULE_3__/* .writeBody */ .l7)(res, {
            message: "error"
        }, 400);
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [8494,4640,2752], () => (__webpack_exec__(96199)));
module.exports = __webpack_exports__;

})();