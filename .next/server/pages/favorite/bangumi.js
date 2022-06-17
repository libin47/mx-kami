(() => {
var exports = {};
exports.id = 8727;
exports.ids = [8727];
exports.modules = {

/***/ 93256:
/***/ ((module) => {

// Exports
module.exports = {
	"bangumi-item": "bangumi_bangumi-item__qYdI1",
	"bangumi-status": "bangumi_bangumi-status___jdOX",
	"bangumi-status-bar": "bangumi_bangumi-status-bar__lEWwB"
};


/***/ }),

/***/ 46648:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45944);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_message_popup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15255);
/* harmony import */ var react_message_popup__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_message_popup__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(47097);
/* harmony import */ var _components_universal_Loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(68946);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(38325);
/* harmony import */ var _components_universal_Image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(66264);
/* harmony import */ var _components_universal_Seo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(14302);
/* harmony import */ var _bangumi_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(93256);
/* harmony import */ var _bangumi_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_bangumi_module_css__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([utils__WEBPACK_IMPORTED_MODULE_5__, _store__WEBPACK_IMPORTED_MODULE_7__, _components_universal_Image__WEBPACK_IMPORTED_MODULE_8__, _components_universal_Seo__WEBPACK_IMPORTED_MODULE_9__]);
([utils__WEBPACK_IMPORTED_MODULE_5__, _store__WEBPACK_IMPORTED_MODULE_7__, _components_universal_Image__WEBPACK_IMPORTED_MODULE_8__, _components_universal_Seo__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const BangumiView = ()=>{
    const { 0: data , 1: setData  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
    const { userStore  } = (0,_store__WEBPACK_IMPORTED_MODULE_7__/* .useStore */ .oR)();
    const master = userStore.master;
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (!master) {
            return;
        }
        utils__WEBPACK_IMPORTED_MODULE_5__/* .apiClient.serverless.proxy.kami.bangumi.get */ .x1.serverless.proxy.kami.bangumi.get().then((res)=>{
            setData(res);
        }).catch((err)=>{
            react_message_popup__WEBPACK_IMPORTED_MODULE_4__.message.error(err.message);
        });
    }, [
        master
    ]);
    if (!data) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Loading__WEBPACK_IMPORTED_MODULE_6__/* .Loading */ .g, {});
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    name: "referrer",
                    content: "no-referrer"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Seo__WEBPACK_IMPORTED_MODULE_9__/* .Seo */ .p, {
                title: "\u8FFD\u756A",
                description: "\u8FFD\u756A"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "grid grid-cols-4 <md:grid-cols-2 gap-8",
                    children: data.map((bangumi)=>{
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                className: (_bangumi_module_css__WEBPACK_IMPORTED_MODULE_10___default()["bangumi-item"]),
                                href: `https://www.bilibili.com/bangumi/media/md${bangumi.id}`,
                                target: "_blank",
                                rel: "nofollow",
                                "data-total": bangumi.count,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Image__WEBPACK_IMPORTED_MODULE_8__/* .ImageLazy */ .X, {
                                        height: "100%",
                                        width: "100%",
                                        src: `https://i0.wp.com/${bangumi.cover.replace(/^https?:\/\//, "")}`
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", {
                                        children: [
                                            bangumi.title,
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: (_bangumi_module_css__WEBPACK_IMPORTED_MODULE_10___default()["bangumi-status"]),
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: (_bangumi_module_css__WEBPACK_IMPORTED_MODULE_10___default()["bangumi-status-bar"])
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "leading-6",
                                                        children: bangumi.countText ?? "N/A"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        }, bangumi.id);
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__.observer)(BangumiView));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 52167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 33104:
/***/ ((module) => {

"use strict";
module.exports = require("camelcase-keys");

/***/ }),

/***/ 68103:
/***/ ((module) => {

"use strict";
module.exports = require("clsx");

/***/ }),

/***/ 71705:
/***/ ((module) => {

"use strict";
module.exports = require("css-spring");

/***/ }),

/***/ 1635:
/***/ ((module) => {

"use strict";
module.exports = require("dayjs");

/***/ }),

/***/ 95468:
/***/ ((module) => {

"use strict";
module.exports = require("dayjs/locale/zh-cn");

/***/ }),

/***/ 84125:
/***/ ((module) => {

"use strict";
module.exports = require("dayjs/plugin/customParseFormat");

/***/ }),

/***/ 67424:
/***/ ((module) => {

"use strict";
module.exports = require("dayjs/plugin/localizedFormat");

/***/ }),

/***/ 43491:
/***/ ((module) => {

"use strict";
module.exports = require("devtools-detector");

/***/ }),

/***/ 21985:
/***/ ((module) => {

"use strict";
module.exports = require("medium-zoom");

/***/ }),

/***/ 36211:
/***/ ((module) => {

"use strict";
module.exports = require("mobx");

/***/ }),

/***/ 45944:
/***/ ((module) => {

"use strict";
module.exports = require("mobx-react-lite");

/***/ }),

/***/ 16641:
/***/ ((module) => {

"use strict";
module.exports = require("next-seo");

/***/ }),

/***/ 95832:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 40968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 30503:
/***/ ((module) => {

"use strict";
module.exports = require("randomcolor");

/***/ }),

/***/ 16689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 66405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 19785:
/***/ ((module) => {

"use strict";
module.exports = require("react-intersection-observer");

/***/ }),

/***/ 29346:
/***/ ((module) => {

"use strict";
module.exports = require("react-lazyload");

/***/ }),

/***/ 15255:
/***/ ((module) => {

"use strict";
module.exports = require("react-message-popup");

/***/ }),

/***/ 20997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 4579:
/***/ ((module) => {

"use strict";
module.exports = require("remove-markdown");

/***/ }),

/***/ 69915:
/***/ ((module) => {

"use strict";
module.exports = import("js-cookie");;

/***/ }),

/***/ 80352:
/***/ ((module) => {

"use strict";
module.exports = import("lodash-es");;

/***/ }),

/***/ 3590:
/***/ ((module) => {

"use strict";
module.exports = import("react-toastify");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4225,8034,9908,2672,4302,6264,8946], () => (__webpack_exec__(46648)));
module.exports = __webpack_exports__;

})();