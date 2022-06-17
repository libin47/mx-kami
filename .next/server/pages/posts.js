(() => {
var exports = {};
exports.id = 2679;
exports.ids = [2679];
exports.modules = {

/***/ 87362:
/***/ ((module) => {

// Exports
module.exports = {
	"head": "PostBlock_head__iqKjS",
	"title": "PostBlock_title__cXmQV",
	"text": "PostBlock_text__w1mG_",
	"btn": "PostBlock_btn__6x_uN",
	"gradual-change": "PostBlock_gradual-change__eoL7t",
	"navigator": "PostBlock_navigator__WSsVD",
	"post-image-preview": "PostBlock_post-image-preview__GJHRJ",
	"has-image": "PostBlock_has-image__6_ojh",
	"content": "PostBlock_content__kTU_a"
};


/***/ }),

/***/ 51539:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ PostBlock)
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
/* harmony import */ var remove_markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4579);
/* harmony import */ var remove_markdown__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(remove_markdown__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_universal_Icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10298);
/* harmony import */ var _hooks_use_initial_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(92644);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(38325);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(47097);
/* harmony import */ var _utils_spring__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(12335);
/* harmony import */ var _utils_time__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(52861);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(87362);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_12__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store__WEBPACK_IMPORTED_MODULE_8__, _utils__WEBPACK_IMPORTED_MODULE_9__]);
([_store__WEBPACK_IMPORTED_MODULE_8__, _utils__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const PostBlock = (0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__.observer)((props)=>{
    const { appStore: { viewport  } , userStore: { isLogged  } ,  } = (0,_store__WEBPACK_IMPORTED_MODULE_8__/* .useStore */ .oR)();
    const post = props.post;
    const { created: date , title , slug , pin , text , id  } = post;
    const parsedTime = viewport?.mobile ? (0,_utils_time__WEBPACK_IMPORTED_MODULE_11__/* .parseDate */ .sG)(date, "MM-DD ddd") : (0,_utils_time__WEBPACK_IMPORTED_MODULE_11__/* .parseDate */ .sG)(date, "YYYY-MM-DD ddd");
    const [d, week] = parsedTime.split(" ");
    const initialData = (0,_hooks_use_initial_data__WEBPACK_IMPORTED_MODULE_7__/* .useInitialData */ .L6)();
    const categoryMap = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(()=>{
        const categories = initialData.categories;
        const map = new Map();
        categories.map((category)=>{
            map.set(category.id, category.slug);
        });
        return map;
    }, [
        initialData.categories
    ]);
    const goToPost = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(()=>{
        const categorySlug = post.category?.slug ?? categoryMap.get(post.categoryId);
        next_router__WEBPACK_IMPORTED_MODULE_3___default().push("/posts/[category]/[slug]", `/posts/${categorySlug}/${slug}`);
        (0,_utils_spring__WEBPACK_IMPORTED_MODULE_10__/* .springScrollToTop */ .YG)();
    }, [
        categoryMap,
        post.category?.slug,
        post.categoryId,
        slug
    ]);
    const hasImage = post.images?.length > 0 && post.images[0].src;
    const { 0: pinState , 1: setPinState  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(!!pin);
    const handlePin = async ()=>{
        await _utils__WEBPACK_IMPORTED_MODULE_9__/* .apiClient.post.proxy */ .x1.post.proxy(id).patch({
            data: {
                pin: !pin
            }
        });
        setPinState(!pinState);
        props.onPinChange();
    };
    const pinEl = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("absolute right-0 top-0 bottom-0 items-center hidden", isLogged && "cursor-pointer !inline-flex", !isLogged && pinState && "pointer-events-none", pinState && "text-red !inline-flex"),
        role: "button",
        onClick: handlePin,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Icons__WEBPACK_IMPORTED_MODULE_6__/* .PhPushPin */ .EJ, {})
    });
    const tilteEl = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (_index_module_css__WEBPACK_IMPORTED_MODULE_12___default().title),
            onClick: goToPost,
            children: title
        })
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                className: clsx__WEBPACK_IMPORTED_MODULE_1___default()((_index_module_css__WEBPACK_IMPORTED_MODULE_12___default().head), "headline"),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "inline-flex items-center relative w-[calc(100%-1rem)]",
                        children: [
                            d,
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("small", {
                                className: "text-gray-2",
                                children: [
                                    "\uFF08",
                                    week,
                                    "\uFF09"
                                ]
                            }),
                            viewport.mobile && pinEl
                        ]
                    }),
                    !viewport?.mobile && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            tilteEl,
                            " ",
                            pinEl
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_12___default().text),
                children: [
                    viewport?.mobile && tilteEl,
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
                        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()((_index_module_css__WEBPACK_IMPORTED_MODULE_12___default().content), hasImage ? (_index_module_css__WEBPACK_IMPORTED_MODULE_12___default()["has-image"]) : null),
                        children: [
                            hasImage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_12___default()["post-image-preview"]),
                                style: {
                                    backgroundImage: `url(${hasImage})`
                                }
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(()=>{
                                    const r = remove_markdown__WEBPACK_IMPORTED_MODULE_5___default()(text);
                                    return r.length >= 250 ? `${r.slice(0, 250)}..` : r;
                                }, [
                                    text
                                ])
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "mb-10"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_12___default().navigator),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: (_index_module_css__WEBPACK_IMPORTED_MODULE_12___default().btn),
                            onClick: goToPost,
                            children: "\u67E5\u770B\u539F\u6587"
                        })
                    })
                ]
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

/***/ 65961:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(84466);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_transition_group__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_in_page_PostBlock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(51539);
/* harmony import */ var _components_in_page_SpecialButton_float_post_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1549);
/* harmony import */ var _components_layouts_ArticleLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(86235);
/* harmony import */ var _components_universal_Icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(10298);
/* harmony import */ var _components_universal_Loading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(68946);
/* harmony import */ var _components_universal_Transition_bottom_up__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9987);
/* harmony import */ var _components_widgets_Search__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(44742);
/* harmony import */ var _utils_client__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9908);
/* harmony import */ var _utils_spring__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(12335);
/* harmony import */ var _components_universal_Seo__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(14302);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_in_page_PostBlock__WEBPACK_IMPORTED_MODULE_4__, _components_in_page_SpecialButton_float_post_tag__WEBPACK_IMPORTED_MODULE_5__, _components_layouts_ArticleLayout__WEBPACK_IMPORTED_MODULE_6__, _components_widgets_Search__WEBPACK_IMPORTED_MODULE_10__, _utils_client__WEBPACK_IMPORTED_MODULE_11__, _components_universal_Seo__WEBPACK_IMPORTED_MODULE_13__]);
([_components_in_page_PostBlock__WEBPACK_IMPORTED_MODULE_4__, _components_in_page_SpecialButton_float_post_tag__WEBPACK_IMPORTED_MODULE_5__, _components_layouts_ArticleLayout__WEBPACK_IMPORTED_MODULE_6__, _components_widgets_Search__WEBPACK_IMPORTED_MODULE_10__, _utils_client__WEBPACK_IMPORTED_MODULE_11__, _components_universal_Seo__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














const PostListPage = ()=>{
    const { 0: pagination , 1: setPagination  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const { 0: posts , 1: setPosts  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const { query: { page: currentPage  } ,  } = router;
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        (0,_utils_spring__WEBPACK_IMPORTED_MODULE_12__/* .springScrollToTop */ .YG)();
    }, [
        currentPage
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        router.query.page,
        router.query.year
    ]);
    const fetch = async ()=>{
        const { page , year , size =10  } = router.query, payload = await _utils_client__WEBPACK_IMPORTED_MODULE_11__/* .apiClient.post.getList */ .x.post.getList(page, size, {
            year: +year || undefined
        });
        setPagination(payload.pagination);
        setPosts(payload.data);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_layouts_ArticleLayout__WEBPACK_IMPORTED_MODULE_6__/* .ArticleLayout */ .B, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Seo__WEBPACK_IMPORTED_MODULE_13__/* .SEO */ .H, {
                title: "\u535A\u6587"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_3__.TransitionGroup, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("article", {
                    children: posts.length > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
                        children: posts.map((post, i)=>{
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Transition_bottom_up__WEBPACK_IMPORTED_MODULE_9__/* .BottomUpTransitionView */ ._, {
                                timeout: {
                                    enter: 250 * i
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_in_page_PostBlock__WEBPACK_IMPORTED_MODULE_4__/* .PostBlock */ .y, {
                                    post: post,
                                    onPinChange: ()=>{
                                        fetch();
                                    }
                                })
                            }, post.id);
                        })
                    }) : pagination ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Icons__WEBPACK_IMPORTED_MODULE_7__/* .EmptyIcon */ .tL, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "\u7AD9\u957F\u6CA1\u6709\u5199\u8FC7\u4E00\u7BC7\u6587\u7AE0\u5566"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "\u7A0D\u540E\u6765\u770B\u770B\u5427!"
                            })
                        ]
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Loading__WEBPACK_IMPORTED_MODULE_8__/* .Loading */ .g, {
                        loadingText: "\u6B63\u5728\u52A0\u8F7D.."
                    })
                }, "note")
            }),
            pagination && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                className: "mt-4 text-center",
                children: [
                    pagination.hasPrevPage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "btn brown",
                        onClick: ()=>{
                            router.push(`/posts?page=${pagination.currentPage - 1}`, undefined, {
                                shallow: true
                            });
                        },
                        children: "\u4E0A\u4E00\u9875"
                    }),
                    pagination.hasNextPage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "btn brown",
                        style: pagination.hasNextPage && pagination.hasPrevPage ? {
                            marginLeft: "6px"
                        } : undefined,
                        onClick: ()=>{
                            router.push(`/posts?page=${pagination.currentPage + 1}`, undefined, {
                                shallow: true
                            });
                        },
                        children: "\u4E0B\u4E00\u9875"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_in_page_SpecialButton_float_post_tag__WEBPACK_IMPORTED_MODULE_5__/* .TagFAB */ .e, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_widgets_Search__WEBPACK_IMPORTED_MODULE_10__.SearchFAB, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostListPage);

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
var __webpack_exports__ = __webpack_require__.X(0, [4225,8034,5811,7937,9908,2672,4302,298,9987,6235,8946,9781,444,4742,2331,1549], () => (__webpack_exec__(65961)));
module.exports = __webpack_exports__;

})();