"use strict";
(() => {
var exports = {};
exports.id = 3341;
exports.ids = [3341];
exports.modules = {

/***/ 85876:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37937);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(84466);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_transition_group__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_layouts_ArticleLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(86235);
/* harmony import */ var _components_universal_Seo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14302);
/* harmony import */ var _components_universal_Transition_right_left__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(52331);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(47097);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_layouts_ArticleLayout__WEBPACK_IMPORTED_MODULE_4__, _components_universal_Seo__WEBPACK_IMPORTED_MODULE_5__, _utils__WEBPACK_IMPORTED_MODULE_7__]);
([_components_layouts_ArticleLayout__WEBPACK_IMPORTED_MODULE_4__, _components_universal_Seo__WEBPACK_IMPORTED_MODULE_5__, _utils__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








// TODO
const TopicPage = ()=>{
    const { 0: topics , 1: setTopics  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        _utils__WEBPACK_IMPORTED_MODULE_7__/* .apiClient.topic.getAll */ .x1.topic.getAll().then((res)=>{
            setTopics(res.data);
        });
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_layouts_ArticleLayout__WEBPACK_IMPORTED_MODULE_4__/* .ArticleLayout */ .B, {
        title: "\u4E13\u680F",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Seo__WEBPACK_IMPORTED_MODULE_5__/* .SEO */ .H, {
                title: "\u4E13\u680F"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "article-list",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_3__.TransitionGroup, {
                        children: topics.map((topic)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Transition_right_left__WEBPACK_IMPORTED_MODULE_6__/* .RightLeftTransitionView */ .A, {
                                component: "li",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    href: `/notes/topics/${topic.slug}`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        children: topic.name
                                    })
                                })
                            }, topic.id)
                        )
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TopicPage);

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

/***/ 92796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 34014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 78524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 95832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 78020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 64406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 24964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 23938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 29565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 64365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 91292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 80979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 36052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 84226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 95052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 59232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

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

/***/ 84466:
/***/ ((module) => {

module.exports = require("react-transition-group");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4225,8034,5811,7937,9908,2672,4302,9987,6235,2331], () => (__webpack_exec__(85876)));
module.exports = __webpack_exports__;

})();