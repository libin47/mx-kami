(() => {
var exports = {};
exports.id = 6205;
exports.ids = [6205];
exports.modules = {

/***/ 45665:
/***/ ((module) => {

// Exports
module.exports = {
	"head": "AlbumBlock_head__5ls0p",
	"title": "AlbumBlock_title__SDe6J",
	"text": "AlbumBlock_text__4ob5F",
	"btn": "AlbumBlock_btn__EjP_U",
	"gradual-change": "AlbumBlock_gradual-change__6urEI",
	"navigator": "AlbumBlock_navigator__4VjGp",
	"post-image-preview": "AlbumBlock_post-image-preview__wiAa2",
	"has-image": "AlbumBlock_has-image__0eGzl"
};


/***/ }),

/***/ 30781:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ AlbumBlock)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45944);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(38325);
/* harmony import */ var utils_spring__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12335);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(45665);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([store__WEBPACK_IMPORTED_MODULE_5__]);
store__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const AlbumBlock = (0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__.observer)((props)=>{
    const { appStore: { viewport  } ,  } = (0,store__WEBPACK_IMPORTED_MODULE_5__/* .useStore */ .oR)();
    const { id , name , slug , count  } = props;
    const goToPost = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(()=>{
        next_router__WEBPACK_IMPORTED_MODULE_3___default().push("/photos/[album]", `/photos/${slug}`);
        (0,utils_spring__WEBPACK_IMPORTED_MODULE_6__/* .springScrollToTop */ .YG)();
    }, [
        slug,
        slug
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                className: clsx__WEBPACK_IMPORTED_MODULE_1___default()((_index_module_css__WEBPACK_IMPORTED_MODULE_7___default().head), "headline"),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "inline-flex items-center",
                        children: [
                            name,
                            "(",
                            count,
                            ")"
                        ]
                    }),
                    !viewport?.mobile && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_7___default().title),
                        onClick: goToPost,
                        children: name
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_7___default().text),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                    className: (_index_module_css__WEBPACK_IMPORTED_MODULE_7___default().navigator),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_7___default().btn),
                        onClick: goToPost,
                        children: "\u6253\u5F00\u76F8\u96C6"
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "pb-8 mb-4"
            })
        ]
    });
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 17439:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_in_page_AlbumBlock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30781);
/* harmony import */ var components_in_page_SpecialButton_float_post_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1549);
/* harmony import */ var components_layouts_ArticleLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86235);
/* harmony import */ var components_universal_Icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10298);
/* harmony import */ var components_universal_Transition_bottom_up__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9987);
/* harmony import */ var components_widgets_Search__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(44742);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(84466);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_transition_group__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var utils_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9908);
/* harmony import */ var _components_universal_Seo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(14302);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_in_page_AlbumBlock__WEBPACK_IMPORTED_MODULE_1__, components_in_page_SpecialButton_float_post_tag__WEBPACK_IMPORTED_MODULE_2__, components_layouts_ArticleLayout__WEBPACK_IMPORTED_MODULE_3__, components_widgets_Search__WEBPACK_IMPORTED_MODULE_6__, utils_client__WEBPACK_IMPORTED_MODULE_10__, _components_universal_Seo__WEBPACK_IMPORTED_MODULE_11__]);
([components_in_page_AlbumBlock__WEBPACK_IMPORTED_MODULE_1__, components_in_page_SpecialButton_float_post_tag__WEBPACK_IMPORTED_MODULE_2__, components_layouts_ArticleLayout__WEBPACK_IMPORTED_MODULE_3__, components_widgets_Search__WEBPACK_IMPORTED_MODULE_6__, utils_client__WEBPACK_IMPORTED_MODULE_10__, _components_universal_Seo__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const AlbumsListPage = ()=>{
    const { 0: posts , 1: setPosts  } = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)([]);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(()=>{
        fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        router.query.page,
        router.query.year
    ]);
    const fetch = async ()=>{
        const payload = await utils_client__WEBPACK_IMPORTED_MODULE_10__/* .apiClient.album.getAllAlbums */ .x.album.getAllAlbums();
        setPosts(payload.data);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_layouts_ArticleLayout__WEBPACK_IMPORTED_MODULE_3__/* .ArticleLayout */ .B, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Seo__WEBPACK_IMPORTED_MODULE_11__/* .SEO */ .H, {
                title: "\u76F8\u518C"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_9__.TransitionGroup, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("article", {
                    children: posts.length > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
                        children: posts.map((post, i)=>{
                            const { id , name , slug , count  } = post;
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_universal_Transition_bottom_up__WEBPACK_IMPORTED_MODULE_5__/* .BottomUpTransitionView */ ._, {
                                timeout: {
                                    enter: 250 * i
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_in_page_AlbumBlock__WEBPACK_IMPORTED_MODULE_1__/* .AlbumBlock */ .E, {
                                    name: name,
                                    id: id,
                                    slug: slug,
                                    count: count
                                })
                            }, id);
                        })
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_universal_Icons__WEBPACK_IMPORTED_MODULE_4__/* .EmptyIcon */ .tL, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "\u7AD9\u957F\u6CA1\u6709\u4E0A\u4F20\u8FC7\u7167\u7247"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "\u7A0D\u540E\u6765\u770B\u770B\u5427!"
                            })
                        ]
                    })
                }, "album")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_in_page_SpecialButton_float_post_tag__WEBPACK_IMPORTED_MODULE_2__/* .TagFAB */ .e, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_widgets_Search__WEBPACK_IMPORTED_MODULE_6__.SearchFAB, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AlbumsListPage);

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

/***/ 92796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 34014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 78524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 95832:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 78020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 64406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 24964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 23938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 29565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 64365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 91292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 80979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 36052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 84226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 95052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 59232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

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

/***/ 35011:
/***/ ((module) => {

"use strict";
module.exports = require("react-shortcut-guide");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4225,8034,5811,7937,9908,2672,4302,298,9987,6235,9781,444,4742,2331,1549], () => (__webpack_exec__(17439)));
module.exports = __webpack_exports__;

})();