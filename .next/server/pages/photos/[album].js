(() => {
var exports = {};
exports.id = 4402;
exports.ids = [4402];
exports.modules = {

/***/ 3653:
/***/ ((module) => {

// Exports
module.exports = {
	"main": "AlbumDeBlock_main__YBvbb",
	"album": "AlbumDeBlock_album__PhmJG",
	"top": "AlbumDeBlock_top__vECW7",
	"image0": "AlbumDeBlock_image0___5XGu",
	"image1": "AlbumDeBlock_image1__33RqE",
	"image2": "AlbumDeBlock_image2__bBhcY",
	"image3": "AlbumDeBlock_image3__8kt_O",
	"image4": "AlbumDeBlock_image4__swejC",
	"down": "AlbumDeBlock_down__Hvw6a",
	"head": "AlbumDeBlock_head__5vqQ2",
	"title": "AlbumDeBlock_title__oADSw",
	"text": "AlbumDeBlock_text___BE1l",
	"btn": "AlbumDeBlock_btn__QYLaB",
	"gradual-change": "AlbumDeBlock_gradual-change__Tvwkl",
	"navigator": "AlbumDeBlock_navigator__Ay_Pc",
	"post-image-preview": "AlbumDeBlock_post-image-preview__e_WZb",
	"has-image": "AlbumDeBlock_has-image__n_V_X"
};


/***/ }),

/***/ 5856:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ AlbumDeBlock)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5944);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var utils_spring__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7427);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3653);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var utils_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6246);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([utils_client__WEBPACK_IMPORTED_MODULE_5__]);
utils_client__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const AlbumDeBlock = (0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__.observer)((props)=>{
    const { 0: phdata , 1: setPhdata  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
    const { id , title , slug , created , album  } = props;
    const fetch = async ()=>{
        const payload = await utils_client__WEBPACK_IMPORTED_MODULE_5__/* .apiClient.photo.getPhotoByID */ .x.photo.getPhotoByID(id);
        setPhdata(payload);
        console.log(payload);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        fetch();
    }, [
        id
    ]);
    const goToPhoto = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(()=>{
        next_router__WEBPACK_IMPORTED_MODULE_2___default().push("/photos/[album]/[slug]", `/photos/${album}/${slug}`);
        (0,utils_spring__WEBPACK_IMPORTED_MODULE_4__/* .springScrollToTop */ .YG)();
    }, [
        album,
        slug
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_6___default().main),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_index_module_css__WEBPACK_IMPORTED_MODULE_6___default().album),
            onClick: goToPhoto,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_index_module_css__WEBPACK_IMPORTED_MODULE_6___default().top),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            style: phdata && phdata.photos.length < 1 ? {
                                display: "none"
                            } : {},
                            className: (_index_module_css__WEBPACK_IMPORTED_MODULE_6___default().image0),
                            src: "http://image.wind-watcher.cn/" + phdata?.photos[0] + "?w=512"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            style: phdata && phdata.photos.length < 2 ? {
                                display: "none"
                            } : {},
                            className: (_index_module_css__WEBPACK_IMPORTED_MODULE_6___default().image1),
                            src: "http://image.wind-watcher.cn/" + phdata?.photos[1] + "?w=512"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            style: phdata && phdata.photos.length < 3 ? {
                                display: "none"
                            } : {},
                            className: (_index_module_css__WEBPACK_IMPORTED_MODULE_6___default().image2),
                            src: "http://image.wind-watcher.cn/" + phdata?.photos[2] + "?w=512"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            style: phdata && phdata.photos.length < 4 ? {
                                display: "none"
                            } : {},
                            className: (_index_module_css__WEBPACK_IMPORTED_MODULE_6___default().image3),
                            src: "http://image.wind-watcher.cn/" + phdata?.photos[3] + "?w=512"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            style: phdata && phdata.photos.length < 5 ? {
                                display: "none"
                            } : {},
                            className: (_index_module_css__WEBPACK_IMPORTED_MODULE_6___default().image4),
                            src: "http://image.wind-watcher.cn/" + phdata?.photos[4] + "?w=512"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_index_module_css__WEBPACK_IMPORTED_MODULE_6___default().down),
                    children: [
                        phdata?.title,
                        "(",
                        phdata?.photos.length,
                        ")"
                    ]
                })
            ]
        })
    });
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8966:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_layouts_ArticleLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5945);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5944);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var utils_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6246);
/* harmony import */ var components_in_page_AlbumDeBlock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5856);
/* harmony import */ var components_in_page_SpecialButton_float_post_tag__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8174);
/* harmony import */ var components_universal_Icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8337);
/* harmony import */ var components_universal_Transition_bottom_up__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7735);
/* harmony import */ var components_widgets_Search__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4538);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4466);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_transition_group__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_universal_Seo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4173);
/* harmony import */ var components_universal_Transition_base__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(871);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_layouts_ArticleLayout__WEBPACK_IMPORTED_MODULE_1__, utils_client__WEBPACK_IMPORTED_MODULE_5__, components_in_page_AlbumDeBlock__WEBPACK_IMPORTED_MODULE_6__, components_in_page_SpecialButton_float_post_tag__WEBPACK_IMPORTED_MODULE_7__, components_widgets_Search__WEBPACK_IMPORTED_MODULE_10__, _components_universal_Seo__WEBPACK_IMPORTED_MODULE_12__]);
([components_layouts_ArticleLayout__WEBPACK_IMPORTED_MODULE_1__, utils_client__WEBPACK_IMPORTED_MODULE_5__, components_in_page_AlbumDeBlock__WEBPACK_IMPORTED_MODULE_6__, components_in_page_SpecialButton_float_post_tag__WEBPACK_IMPORTED_MODULE_7__, components_widgets_Search__WEBPACK_IMPORTED_MODULE_10__, _components_universal_Seo__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














const AlbumView = (0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__.observer)((props)=>{
    const { 0: albmData , 1: setAlbumData  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();
    const { 0: data , 1: setData  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const album1 = router.query.album;
    let albumslug = "";
    if (typeof album1 == "string") {
        albumslug = album1;
    }
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        fetch();
    }, [
        router.query.album
    ]);
    const fetch = async ()=>{
        const payload = await utils_client__WEBPACK_IMPORTED_MODULE_5__/* .apiClient.album.getAlbum */ .x.album.getAlbum(albumslug);
        console.log(payload);
        setAlbumData(payload.data);
        setData(payload.data.children);
    };
    const defaultStyle = {
        opacity: 0,
        display: "inline-block",
        width: "12rem"
    };
    const BottomUpTransitionView = (0,components_universal_Transition_base__WEBPACK_IMPORTED_MODULE_13__/* .BaseTransitionView */ .I)(defaultStyle, components_universal_Transition_bottom_up__WEBPACK_IMPORTED_MODULE_9__/* .transitionStyles */ .v);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_layouts_ArticleLayout__WEBPACK_IMPORTED_MODULE_1__/* .ArticleLayout */ .B, {
            title: "\u76F8\u96C6 - " + albmData?.name,
            subtitle: "\u5F53\u524D\u5171\u6709" + data?.length + "\u4E2A\u76F8\u518C, \u52A0\u6CB9!",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Seo__WEBPACK_IMPORTED_MODULE_12__/* .SEO */ .H, {
                    title: "\u76F8\u518C"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_11__.TransitionGroup, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("article", {
                        children: data?.length > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
                            children: data.map((album, i)=>{
                                const { id , title , slug , created  } = album;
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BottomUpTransitionView, {
                                    timeout: {
                                        enter: 250 * i
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_in_page_AlbumDeBlock__WEBPACK_IMPORTED_MODULE_6__/* .AlbumDeBlock */ .J, {
                                        title: title,
                                        id: id,
                                        slug: slug,
                                        created: created,
                                        album: albumslug
                                    })
                                }, id);
                            })
                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-col",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_universal_Icons__WEBPACK_IMPORTED_MODULE_8__/* .EmptyIcon */ .tL, {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: "\u8FD9\u4E2A\u76F8\u96C6\u8FD8\u662F\u7A7A\u7684\u5594~"
                                })
                            ]
                        })
                    }, "album")
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_in_page_SpecialButton_float_post_tag__WEBPACK_IMPORTED_MODULE_7__/* .TagFAB */ .e, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_widgets_Search__WEBPACK_IMPORTED_MODULE_10__.SearchFAB, {})
            ]
        })
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AlbumView);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 3104:
/***/ ((module) => {

"use strict";
module.exports = require("camelcase-keys");

/***/ }),

/***/ 8103:
/***/ ((module) => {

"use strict";
module.exports = require("clsx");

/***/ }),

/***/ 1705:
/***/ ((module) => {

"use strict";
module.exports = require("css-spring");

/***/ }),

/***/ 1635:
/***/ ((module) => {

"use strict";
module.exports = require("dayjs");

/***/ }),

/***/ 5468:
/***/ ((module) => {

"use strict";
module.exports = require("dayjs/locale/zh-cn");

/***/ }),

/***/ 4125:
/***/ ((module) => {

"use strict";
module.exports = require("dayjs/plugin/customParseFormat");

/***/ }),

/***/ 7424:
/***/ ((module) => {

"use strict";
module.exports = require("dayjs/plugin/localizedFormat");

/***/ }),

/***/ 3491:
/***/ ((module) => {

"use strict";
module.exports = require("devtools-detector");

/***/ }),

/***/ 6211:
/***/ ((module) => {

"use strict";
module.exports = require("mobx");

/***/ }),

/***/ 5944:
/***/ ((module) => {

"use strict";
module.exports = require("mobx-react-lite");

/***/ }),

/***/ 6641:
/***/ ((module) => {

"use strict";
module.exports = require("next-seo");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 4331:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 503:
/***/ ((module) => {

"use strict";
module.exports = require("randomcolor");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 9785:
/***/ ((module) => {

"use strict";
module.exports = require("react-intersection-observer");

/***/ }),

/***/ 5255:
/***/ ((module) => {

"use strict";
module.exports = require("react-message-popup");

/***/ }),

/***/ 5011:
/***/ ((module) => {

"use strict";
module.exports = require("react-shortcut-guide");

/***/ }),

/***/ 4466:
/***/ ((module) => {

"use strict";
module.exports = require("react-transition-group");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 4579:
/***/ ((module) => {

"use strict";
module.exports = require("remove-markdown");

/***/ }),

/***/ 9915:
/***/ ((module) => {

"use strict";
module.exports = import("js-cookie");;

/***/ }),

/***/ 352:
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
var __webpack_exports__ = __webpack_require__.X(0, [1655,8034,1796,553,6246,4598,4173,8337,7735,5945,9012,150,4538,9372,8174], () => (__webpack_exec__(8966)));
module.exports = __webpack_exports__;

})();