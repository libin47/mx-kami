"use strict";
(() => {
var exports = {};
exports.id = 4820;
exports.ids = [4820];
exports.modules = {

/***/ 79694:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80352);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_message_popup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15255);
/* harmony import */ var react_message_popup__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_message_popup__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var api_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9378);
/* harmony import */ var _components_universal_Error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(53529);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([lodash_es__WEBPACK_IMPORTED_MODULE_1__, _components_universal_Error__WEBPACK_IMPORTED_MODULE_5__]);
([lodash_es__WEBPACK_IMPORTED_MODULE_1__, _components_universal_Error__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const ErrorPage = ({ statusCode =500 , err ,  })=>{
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        console.log("[ErrorPage]: ", statusCode, err);
        if (err) {
            const errMessage = err._message || err.message;
            if (errMessage) {
                react_message_popup__WEBPACK_IMPORTED_MODULE_3__.message.error(errMessage);
            }
        }
    }, [
        err,
        statusCode
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Error__WEBPACK_IMPORTED_MODULE_5__/* .ErrorView */ .o, {
        showBackButton: true,
        showRefreshButton: true,
        statusCode: statusCode
    });
};
const getCode = (err, res)=>{
    if (!err && !res) {
        return 500;
    }
    if (err instanceof api_client__WEBPACK_IMPORTED_MODULE_4__/* .RequestError */ .Lu) {
        // @see:  https://github.com/axios/axios/pull/3645
        const axiosError = err.raw;
        return (0,lodash_es__WEBPACK_IMPORTED_MODULE_1__.isNumber)(axiosError.response?.status) ? axiosError.response.status : 408;
    }
    if (res?.statusCode === 500 && err?.statusCode === 500) {
        return 500;
    } else if (res && res.statusCode !== 500) {
        return res.statusCode || 500;
    } else if (err && err.statusCode !== 500) {
        return err.statusCode || 500;
    }
    return 500;
};
ErrorPage.getInitialProps = async ({ res , err  })=>{
    const statusCode = +getCode(err, res) || 500;
    res && (res.statusCode = statusCode);
    if (statusCode === 404) {
        return {
            statusCode: 404,
            err
        };
    }
    const serializeErr = (()=>{
        try {
            return JSON.parse(JSON.stringify(err));
        } catch (e) {
            console.log(e.message);
            return err;
        }
    })();
    serializeErr["_message"] = err?.raw?.response?.data?.message || err.message || err.response?.data?.message;
    return {
        statusCode,
        err: serializeErr
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ 16641:
/***/ ((module) => {

module.exports = require("next-seo");

/***/ }),

/***/ 95832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 71853:
/***/ ((module) => {

module.exports = require("next/router");

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

/***/ 80352:
/***/ ((module) => {

module.exports = import("lodash-es");;

/***/ }),

/***/ 3590:
/***/ ((module) => {

module.exports = import("react-toastify");;

/***/ }),

/***/ 69708:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33918);
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13795);



/** `Object#toString` result references. */
var numberTag = '[object Number]';

/**
 * Checks if `value` is classified as a `Number` primitive or object.
 *
 * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
 * classified as numbers, use the `_.isFinite` method.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a number, else `false`.
 * @example
 *
 * _.isNumber(3);
 * // => true
 *
 * _.isNumber(Number.MIN_VALUE);
 * // => true
 *
 * _.isNumber(Infinity);
 * // => true
 *
 * _.isNumber('3');
 * // => false
 */
function isNumber(value) {
  return typeof value == 'number' ||
    ((0,_isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(value) && (0,_baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(value) == numberTag);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isNumber);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4225,8034,9908,2672,4302,3529], () => (__webpack_exec__(79694)));
module.exports = __webpack_exports__;

})();