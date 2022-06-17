(() => {
var exports = {};
exports.id = 60;
exports.ids = [60];
exports.modules = {

/***/ 90308:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_layouts_ArticleLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86235);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45944);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(38325);
/* harmony import */ var utils_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9908);
/* harmony import */ var components_universal_Icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(10298);
/* harmony import */ var components_universal_Transition_bottom_up__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9987);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(84466);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_transition_group__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_universal_Seo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(14302);
/* harmony import */ var components_universal_Transition_base__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(32476);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(45725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(78717);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_13__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_layouts_ArticleLayout__WEBPACK_IMPORTED_MODULE_1__, store__WEBPACK_IMPORTED_MODULE_5__, utils_client__WEBPACK_IMPORTED_MODULE_6__, _components_universal_Seo__WEBPACK_IMPORTED_MODULE_10__]);
([components_layouts_ArticleLayout__WEBPACK_IMPORTED_MODULE_1__, store__WEBPACK_IMPORTED_MODULE_5__, utils_client__WEBPACK_IMPORTED_MODULE_6__, _components_universal_Seo__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














const AlbumView = (0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__.observer)((props)=>{
    const { 0: data , 1: setData  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();
    const { appStore: { viewport  } ,  } = (0,store__WEBPACK_IMPORTED_MODULE_5__/* .useStore */ .oR)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const album = router.query.album;
    const slug = router.query.slug;
    let albumslug = "";
    let photoslug = "";
    if (typeof album == "string") {
        albumslug = album;
    }
    if (typeof slug == "string") {
        photoslug = slug;
    }
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        fetch();
    }, [
        router.query.album,
        router.query.slug
    ]);
    const fetch = async ()=>{
        const payload = await utils_client__WEBPACK_IMPORTED_MODULE_6__/* .apiClient.photo.getPhotoBySlug */ .x.photo.getPhotoBySlug(albumslug, photoslug);
        setData(payload);
    };
    const defaultStyle = viewport?.mobile ? {
        opacity: 0,
        display: "inline-block",
        width: "50%",
        height: "120px"
    } : {
        opacity: 0,
        display: "inline-block",
        width: "50%",
        height: "200px"
    };
    const BottomUpTransitionView = (0,components_universal_Transition_base__WEBPACK_IMPORTED_MODULE_11__/* .BaseTransitionView */ .I)(defaultStyle, components_universal_Transition_bottom_up__WEBPACK_IMPORTED_MODULE_8__/* .transitionStyles */ .v);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_layouts_ArticleLayout__WEBPACK_IMPORTED_MODULE_1__/* .ArticleLayout */ .B, {
            title: data?.album?.name + "-" + data?.title,
            subtitle: [
                "\u5171\u6709" + data?.photos?.length + "\u5F20\u76F8\u7247",
                data?.text ? data.text : ""
            ],
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Seo__WEBPACK_IMPORTED_MODULE_10__/* .SEO */ .H, {
                    title: "\u76F8\u518C"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_9__.TransitionGroup, {
                    children: data && data?.photos?.length > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_12__.Image.PreviewGroup, {
                            children: data.photos.map((photo, i)=>{
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BottomUpTransitionView, {
                                    timeout: {
                                        enter: 250 * i
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_12__.Image, {
                                        style: {
                                            "objectFit": "contain",
                                            "padding": "0.5rem"
                                        },
                                        width: "100%",
                                        src: "https://image.wind-watcher.cn/" + photo
                                    })
                                }, photo);
                            })
                        })
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_universal_Icons__WEBPACK_IMPORTED_MODULE_7__/* .EmptyIcon */ .tL, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "\u8FD9\u4E2A\u76F8\u96C6\u8FD8\u662F\u7A7A\u7684\u5594~"
                            })
                        ]
                    })
                })
            ]
        })
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AlbumView);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 78717:
/***/ (() => {



/***/ }),

/***/ 45725:
/***/ ((module) => {

"use strict";
module.exports = require("antd");

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

/***/ 71853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

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

/***/ 15255:
/***/ ((module) => {

"use strict";
module.exports = require("react-message-popup");

/***/ }),

/***/ 84466:
/***/ ((module) => {

"use strict";
module.exports = require("react-transition-group");

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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4225,8034,9908,2672,4302,298,9987,6235], () => (__webpack_exec__(90308)));
module.exports = __webpack_exports__;

})();