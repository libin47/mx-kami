(() => {
var exports = {};
exports.id = 2358;
exports.ids = [2358];
exports.modules = {

/***/ 9454:
/***/ ((module) => {

// Exports
module.exports = {
	"pagination": "_page__pagination__UNZd4"
};


/***/ }),

/***/ 970:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ buildStoreDataLoadableView)
/* harmony export */ });
/* unused harmony export LoadableView */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5944);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_universal_Loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4277);




const LoadableView = /*#__PURE__*/ (/* unused pure expression or super */ null && (memo(({ data , ...props })=>{
    if (!data) {
        return /*#__PURE__*/ _jsx(Loading, {
            ...props
        });
    }
    return /*#__PURE__*/ React.createElement(Fragment, props.children);
})));
function buildStoreDataLoadableView(store, View) {
    return (0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__.observer)((props)=>{
        const post = store.get(props.id);
        // eslint-disable-next-line react-hooks/rules-of-hooks
        (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
            store.add(props);
        }, [
            props.id
        ]);
        if (!post) {
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Loading__WEBPACK_IMPORTED_MODULE_3__/* .Loading */ .g, {});
        }
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(View, {
            id: post.id
        });
    });
}


/***/ }),

/***/ 3681:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ RootPortal)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6405);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_use_is_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7866);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_use_is_client__WEBPACK_IMPORTED_MODULE_2__]);
_hooks_use_is_client__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const RootPortal = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.memo)((props)=>{
    const isClient = (0,_hooks_use_is_client__WEBPACK_IMPORTED_MODULE_2__/* .useIsClient */ .O)();
    if (!isClient) {
        return null;
    }
    return /*#__PURE__*/ (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)(props.children, document.body);
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4938:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5944);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(553);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var remove_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4579);
/* harmony import */ var remove_markdown__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(remove_markdown__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2649);
/* harmony import */ var _components_layouts_ArticleLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5945);
/* harmony import */ var _components_universal_LoadableView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(970);
/* harmony import */ var _components_universal_Markdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1759);
/* harmony import */ var _components_widgets_Comment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6165);
/* harmony import */ var _hooks_use_header_meta__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9649);
/* harmony import */ var _hooks_use_initial_data__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3086);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3531);
/* harmony import */ var _utils_images__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7247);
/* harmony import */ var _utils_spring__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(7427);
/* harmony import */ var _components_universal_Seo__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(4173);
/* harmony import */ var _context_image_size__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(3478);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(9454);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_17__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([utils__WEBPACK_IMPORTED_MODULE_5__, _components_layouts_ArticleLayout__WEBPACK_IMPORTED_MODULE_6__, _components_universal_Markdown__WEBPACK_IMPORTED_MODULE_8__, _components_widgets_Comment__WEBPACK_IMPORTED_MODULE_9__, _hooks_use_header_meta__WEBPACK_IMPORTED_MODULE_10__, _store__WEBPACK_IMPORTED_MODULE_12__, _components_universal_Seo__WEBPACK_IMPORTED_MODULE_15__]);
([utils__WEBPACK_IMPORTED_MODULE_5__, _components_layouts_ArticleLayout__WEBPACK_IMPORTED_MODULE_6__, _components_universal_Markdown__WEBPACK_IMPORTED_MODULE_8__, _components_widgets_Comment__WEBPACK_IMPORTED_MODULE_9__, _hooks_use_header_meta__WEBPACK_IMPORTED_MODULE_10__, _store__WEBPACK_IMPORTED_MODULE_12__, _components_universal_Seo__WEBPACK_IMPORTED_MODULE_15__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


















const PageView = (0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__.observer)((props)=>{
    const { pageStore  } = (0,_store__WEBPACK_IMPORTED_MODULE_12__/* .useStore */ .oR)();
    const page = pageStore.get(props.id) || utils__WEBPACK_IMPORTED_MODULE_5__/* .noop */ .ZT;
    const { title , subtitle , text  } = page;
    // useEffect(() => {
    //   if (page.meta?.style) {
    //     const $style = appendStyle(page.meta.style)
    //     return () => {
    //       $style && $style.remove()
    //     }
    //   }
    // }, [page.meta?.style])
    (0,_hooks_use_header_meta__WEBPACK_IMPORTED_MODULE_10__/* .useHeaderMeta */ .Z)(page.title, page.subtitle || "");
    (0,_hooks_use_header_meta__WEBPACK_IMPORTED_MODULE_10__/* .useHeaderShare */ .Q)(page.title, page.text);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        (0,_utils_spring__WEBPACK_IMPORTED_MODULE_14__/* .springScrollToTop */ .YG)();
    }, [
        props.id
    ]);
    const { pageMeta  } = (0,_hooks_use_initial_data__WEBPACK_IMPORTED_MODULE_11__/* .useInitialData */ .L6)();
    const pages = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>pageMeta || []
    , [
        pageMeta
    ]);
    const indexInPages = pages.findIndex((i)=>i.title == page.title
    );
    const n = pages.length;
    const hasNext = indexInPages + 1 < n;
    const hasPrev = indexInPages - 1 >= 0;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_layouts_ArticleLayout__WEBPACK_IMPORTED_MODULE_6__/* .ArticleLayout */ .B, {
        title: title,
        subtitle: subtitle,
        id: props.id,
        type: "page",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Seo__WEBPACK_IMPORTED_MODULE_15__/* .Seo */ .p, {
                title: title,
                openGraph: {
                    type: "article"
                },
                description: remove_markdown__WEBPACK_IMPORTED_MODULE_4___default()(text).slice(0, 100).replace("\n", "")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_context_image_size__WEBPACK_IMPORTED_MODULE_16__/* .ImageSizeMetaContext.Provider */ .Q.Provider, {
                value: (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>(0,_utils_images__WEBPACK_IMPORTED_MODULE_13__/* .imagesRecord2Map */ .Gj)(page.images || [])
                , [
                    page.images
                ]),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: "sr-only",
                            children: title
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Markdown__WEBPACK_IMPORTED_MODULE_8__/* .Markdown */ .U, {
                            value: text,
                            escapeHtml: false,
                            toc: true
                        })
                    ]
                })
            }),
            (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_index_module_css__WEBPACK_IMPORTED_MODULE_17___default().pagination),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: hasPrev && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: `/${pages[indexInPages - 1].slug}`,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                        className: "flex flex-col justify-end",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                className: "text-indigo-400",
                                                children: "\u56DE\u987E\u4E00\u4E0B\uFF1A"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "text-left",
                                                children: pages[indexInPages - 1].title
                                            })
                                        ]
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: hasNext && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: `/${pages[indexInPages + 1].slug}`,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                        className: "flex flex-col justify-end",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                className: "text-indigo-400",
                                                children: "\u7EE7\u7EED\u4E86\u89E3\uFF1A"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "text-right",
                                                children: pages[indexInPages + 1].title
                                            })
                                        ]
                                    })
                                })
                            })
                        })
                    ]
                })
            , [
                hasNext,
                hasPrev,
                indexInPages,
                pages
            ]),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_widgets_Comment__WEBPACK_IMPORTED_MODULE_9__/* .CommentLazy */ .pT, {
                id: page.id,
                allowComment: page.allowComment ?? true
            }, page.id)
        ]
    });
});
const PP = (0,_components_universal_LoadableView__WEBPACK_IMPORTED_MODULE_7__/* .buildStoreDataLoadableView */ .q)(_store__WEBPACK_IMPORTED_MODULE_12__/* .store.pageStore */ .h.pageStore, PageView);
PP.getInitialProps = async (ctx)=>{
    const { page: slug  } = ctx.query;
    const data = await _store__WEBPACK_IMPORTED_MODULE_12__/* .store.pageStore.fetchBySlug */ .h.pageStore.fetchBySlug(slug);
    return data;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PP);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7866:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ useIsClient)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2649);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils__WEBPACK_IMPORTED_MODULE_1__]);
_utils__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const useIsClient = ()=>{
    const { 0: isClient , 1: setIsClient  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .isClientSide */ .S_)());
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        setIsClient(true);
    }, []);
    return isClient;
};

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

/***/ 1985:
/***/ ((module) => {

"use strict";
module.exports = require("medium-zoom");

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

/***/ 9346:
/***/ ((module) => {

"use strict";
module.exports = require("react-lazyload");

/***/ }),

/***/ 3702:
/***/ ((module) => {

"use strict";
module.exports = require("react-markdown");

/***/ }),

/***/ 5255:
/***/ ((module) => {

"use strict";
module.exports = require("react-message-popup");

/***/ }),

/***/ 4466:
/***/ ((module) => {

"use strict";
module.exports = require("react-transition-group");

/***/ }),

/***/ 9755:
/***/ ((module) => {

"use strict";
module.exports = require("react-use");

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

/***/ 7379:
/***/ ((module) => {

"use strict";
module.exports = require("validator/lib/isEmail");

/***/ }),

/***/ 2281:
/***/ ((module) => {

"use strict";
module.exports = require("validator/lib/isMongoId");

/***/ }),

/***/ 159:
/***/ ((module) => {

"use strict";
module.exports = require("validator/lib/isURL");

/***/ }),

/***/ 6470:
/***/ ((module) => {

"use strict";
module.exports = import("@floating-ui/react-dom");;

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

/***/ }),

/***/ 4612:
/***/ ((module) => {

"use strict";
module.exports = import("socket.io-client");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [1655,8034,1796,553,8747,8106,8825,8081,6246,4598,4173,8337,7735,5945,1569,4277,2526,1773,1759,1745,3124,102,58], () => (__webpack_exec__(4938)));
module.exports = __webpack_exports__;

})();