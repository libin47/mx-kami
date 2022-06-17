(() => {
var exports = {};
exports.id = 5972;
exports.ids = [5972];
exports.modules = {

/***/ 34783:
/***/ ((module) => {

// Exports
module.exports = {
	"timeline": "TimelineListWrapper_timeline__f0js5"
};


/***/ }),

/***/ 73968:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ Divider),
/* harmony export */   "x": () => (/* binding */ DividerVertical)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);


const Divider = (props)=>{
    const { className , ...rest } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("border-0 h-[0.5px] my-4 !bg-opacity-30 bg-black dark:bg-white", className),
        ...rest
    });
};
const DividerVertical = (props)=>{
    const { className , ...rest } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("!bg-opacity-30 bg-black dark:bg-white inline-block h-full mx-4 w-[0.5px] text-transparent", className),
        ...rest,
        children: "w"
    });
};


/***/ }),

/***/ 785:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ TimelineListWrapper)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34783);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_1__);


const TimelineListWrapper = ({ children ,  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_1___default().timeline),
        children: children
    });
};


/***/ }),

/***/ 56442:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var react_linkify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(83826);
/* harmony import */ var react_linkify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_linkify__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(84466);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_transition_group__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(47097);
/* harmony import */ var _components_layouts_ArticleLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(86235);
/* harmony import */ var _components_universal_Divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(73968);
/* harmony import */ var _components_universal_Pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(13834);
/* harmony import */ var _components_universal_Seo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(14302);
/* harmony import */ var _components_universal_TimelineListWrapper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(785);
/* harmony import */ var _components_universal_Transition_right_left__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(52331);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([utils__WEBPACK_IMPORTED_MODULE_5__, _components_layouts_ArticleLayout__WEBPACK_IMPORTED_MODULE_6__, _components_universal_Seo__WEBPACK_IMPORTED_MODULE_9__]);
([utils__WEBPACK_IMPORTED_MODULE_5__, _components_layouts_ArticleLayout__WEBPACK_IMPORTED_MODULE_6__, _components_universal_Seo__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const TopicDetailPage = (props)=>{
    const { name  } = props;
    const { 0: notes , 1: setNotes  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const { 0: pager , 1: setPager  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const fetch = (page = 1, size = 20)=>{
        utils__WEBPACK_IMPORTED_MODULE_5__/* .apiClient.note.getNoteByTopicId */ .x1.note.getNoteByTopicId(props.id, page, size).then((res)=>{
            const { data , pagination  } = res;
            setNotes(data);
            setPager(pagination);
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        fetch();
    }, []);
    const handleChangePage = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((page)=>{
        fetch(page);
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_layouts_ArticleLayout__WEBPACK_IMPORTED_MODULE_6__/* .ArticleLayout */ .B, {
        title: `专栏 · ${name}`,
        subtitle: pager ? pager.total ? `共收录${pager.total}篇文章` : "\u8FD9\u91CC\u8FD8\u6CA1\u6709\u6536\u5F55\u4EFB\u4F55\u5185\u5BB9\u54E6" : "",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Seo__WEBPACK_IMPORTED_MODULE_9__/* .SEO */ .H, {
                title: `专栏 - ${name}`
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "topic-info -mt-8",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            children: props.introduce
                        })
                    }),
                    props.description && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Divider__WEBPACK_IMPORTED_MODULE_7__/* .Divider */ .i, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_linkify__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    children: props.description
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "article-list mt-16",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_4__.TransitionGroup, {
                        component: _components_universal_TimelineListWrapper__WEBPACK_IMPORTED_MODULE_10__/* .TimelineListWrapper */ .e,
                        children: notes && notes.map((note)=>{
                            const date = new Date(note.created);
                            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_universal_Transition_right_left__WEBPACK_IMPORTED_MODULE_11__/* .RightLeftTransitionView */ .A, {
                                component: "li",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        href: `/notes/${note.nid}`,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            children: note.title
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        className: "meta",
                                        children: [
                                            (date.getMonth() + 1).toString().padStart(2, "0"),
                                            "/",
                                            date.getDate().toString().padStart(2, "0"),
                                            "/",
                                            date.getFullYear()
                                        ]
                                    })
                                ]
                            }, note.id);
                        })
                    }),
                    pager && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Pagination__WEBPACK_IMPORTED_MODULE_8__/* .Pagination */ .t, {
                        current: pager.currentPage,
                        onChange: handleChangePage,
                        total: pager.totalPage
                    })
                ]
            })
        ]
    });
};
TopicDetailPage.getInitialProps = async (ctx)=>{
    const { topicSlug  } = ctx.query;
    return await utils__WEBPACK_IMPORTED_MODULE_5__/* .apiClient.topic.getTopicBySlug */ .x1.topic.getTopicBySlug(topicSlug);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TopicDetailPage);

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

/***/ 83826:
/***/ ((module) => {

"use strict";
module.exports = require("react-linkify");

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
var __webpack_exports__ = __webpack_require__.X(0, [4225,8034,5811,7937,9908,2672,4302,9987,6235,2726,2331,3834], () => (__webpack_exec__(56442)));
module.exports = __webpack_exports__;

})();