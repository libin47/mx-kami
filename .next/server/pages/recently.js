(() => {
var exports = {};
exports.id = 4612;
exports.ids = [4612];
exports.modules = {

/***/ 56417:
/***/ ((module) => {

// Exports
module.exports = {
	"bubble-list": "recently_bubble-list__oT_im"
};


/***/ }),

/***/ 71466:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_es_throttle__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(20057);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45944);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19785);
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(47097);
/* harmony import */ var _components_universal_Icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10298);
/* harmony import */ var _components_universal_Input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(72726);
/* harmony import */ var _components_universal_Loading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(68946);
/* harmony import */ var _components_universal_Markdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(56076);
/* harmony import */ var _components_universal_RelativeTime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(58443);
/* harmony import */ var _components_universal_Seo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(14302);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(38325);
/* harmony import */ var _types_events__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(51113);
/* harmony import */ var _utils_client__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(9908);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(56417);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_16__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([utils__WEBPACK_IMPORTED_MODULE_5__, _components_universal_Markdown__WEBPACK_IMPORTED_MODULE_9__, _components_universal_RelativeTime__WEBPACK_IMPORTED_MODULE_10__, _components_universal_Seo__WEBPACK_IMPORTED_MODULE_11__, _store__WEBPACK_IMPORTED_MODULE_12__, _utils_client__WEBPACK_IMPORTED_MODULE_14__]);
([utils__WEBPACK_IMPORTED_MODULE_5__, _components_universal_Markdown__WEBPACK_IMPORTED_MODULE_9__, _components_universal_RelativeTime__WEBPACK_IMPORTED_MODULE_10__, _components_universal_Seo__WEBPACK_IMPORTED_MODULE_11__, _store__WEBPACK_IMPORTED_MODULE_12__, _utils_client__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

















const FETCH_SIZE = 10;
const RecentlyPage = ()=>{
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);
    const { 0: data1 , 1: setData  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
    const { 0: hasNext , 1: setHasNext  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);
    const { userStore: { isLogged  } ,  } = (0,_store__WEBPACK_IMPORTED_MODULE_12__/* .useStore */ .oR)();
    // bind event
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        const create = (payload)=>{
            data1.unshift(payload);
            setData([
                ...data1
            ]);
        };
        const del = ({ id  })=>{
            const index = data1.findIndex((d)=>d.id === id
            );
            if (index != -1) {
                data1.splice(index, 1);
                setData([
                    ...data1
                ]);
            }
        };
        utils__WEBPACK_IMPORTED_MODULE_5__/* .eventBus.on */ .YB.on(_types_events__WEBPACK_IMPORTED_MODULE_13__/* .EventTypes.RECENTLY_CREATE */ .G.RECENTLY_CREATE, create);
        utils__WEBPACK_IMPORTED_MODULE_5__/* .eventBus.on */ .YB.on(_types_events__WEBPACK_IMPORTED_MODULE_13__/* .EventTypes.RECENTLY_DElETE */ .G.RECENTLY_DElETE, del);
        return ()=>{
            utils__WEBPACK_IMPORTED_MODULE_5__/* .eventBus.off */ .YB.off(_types_events__WEBPACK_IMPORTED_MODULE_13__/* .EventTypes.RECENTLY_CREATE */ .G.RECENTLY_CREATE, create);
            utils__WEBPACK_IMPORTED_MODULE_5__/* .eventBus.off */ .YB.off(_types_events__WEBPACK_IMPORTED_MODULE_13__/* .EventTypes.RECENTLY_DElETE */ .G.RECENTLY_DElETE, del);
        };
    }, [
        data1
    ]);
    const fetch = (0,lodash_es_throttle__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)(async ({ before , size =FETCH_SIZE  })=>{
        setLoading(true);
        const { data  } = await _utils_client__WEBPACK_IMPORTED_MODULE_14__/* .apiClient.shorthand.getList */ .x.shorthand.getList(before, undefined, size);
        if (data.length < FETCH_SIZE) {
            setHasNext(false);
        }
        setLoading(false);
        return data;
    }, 1000);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        fetch({})?.then((data)=>{
            setData(data);
        });
    }, []);
    const { ref , inView  } = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__.useInView)();
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (inView && hasNext) {
            fetch({
                before: data1[data1.length - 1].id
            })?.then((newData)=>{
                setData((data)=>data.concat(newData)
                );
            });
        }
    }, [
        data1,
        hasNext,
        inView
    ]);
    const handleDelete = async (id)=>{
        await _utils_client__WEBPACK_IMPORTED_MODULE_14__/* .apiClient.shorthand.proxy */ .x.shorthand.proxy(id).delete();
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
        className: "max-w-[50em] relative",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                children: "\u52A8\u6001"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Seo__WEBPACK_IMPORTED_MODULE_11__/* .Seo */ .p, {
                title: "\u52A8\u6001"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: "text-opacity-80",
                children: "\u8C22\u8C22\u4F60\u542C\u6211\u8BC9\u8BF4"
            }),
            isLogged && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(RecentlyBox, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "pb-4"
            }),
            data1.length === 0 && loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Loading__WEBPACK_IMPORTED_MODULE_8__/* .Loading */ .g, {}) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
                children: [
                    data1.length == 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-center",
                        children: "\u8FD9\u91CC\u8FD8\u6CA1\u6709\u5185\u5BB9\u54E6"
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_16___default()["bubble-list"]),
                        children: data1.map((d)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("bubble", isLogged ? "from-me" : "from-them"),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Markdown__WEBPACK_IMPORTED_MODULE_9__/* .Markdown */ .U, {
                                                value: d.content
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "text-sm float-right",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_RelativeTime__WEBPACK_IMPORTED_MODULE_10__/* .RelativeTime */ .i, {
                                                    date: d.created
                                                })
                                            }),
                                            isLogged && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "del",
                                                onClick: ()=>handleDelete(d.id)
                                                ,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Icons__WEBPACK_IMPORTED_MODULE_6__/* .JamTrash */ .bH, {
                                                        className: "mr-2"
                                                    }),
                                                    "\u5220\u9664"
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "clear-both"
                                    })
                                ]
                            }, d.id)
                        )
                    }),
                    hasNext && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        style: {
                            height: "20px"
                        },
                        ref: ref,
                        children: loading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Loading__WEBPACK_IMPORTED_MODULE_8__/* .Loading */ .g, {})
                    })
                ]
            })
        ]
    });
};
const RecentlyBox = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.memo)(()=>{
    const { 0: content , 1: setText  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const taRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
    const handleSubmit = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(()=>{
        _utils_client__WEBPACK_IMPORTED_MODULE_14__/* .apiClient.shorthand.proxy.post */ .x.shorthand.proxy.post({
            data: {
                content
            }
        }).then(()=>{
            setText("");
            taRef.current && (taRef.current.value = "");
        });
    }, [
        content
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
        action: "#",
        onSubmit: (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((e)=>{
            e.preventDefault();
            handleSubmit();
        }, [
            handleSubmit
        ]),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Input__WEBPACK_IMPORTED_MODULE_7__/* .Input */ .I, {
                multi: true,
                // @ts-ignore
                ref: taRef,
                // @ts-ignore
                rows: 4,
                required: true,
                onChange: (e)=>{
                    setText(e.target.value);
                },
                autoFocus: true,
                placeholder: "\u4ECA\u5929\u9047\u5230\u4E86\u4EC0\u4E48\u70E6\u5FC3\u4E8B?"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mt-3 text-right",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    className: "btn yellow",
                    onClick: (e)=>{
                        e.preventDefault();
                        handleSubmit();
                    },
                    disabled: content.trim().length === 0,
                    children: "\u53D1\u9001"
                })
            })
        ]
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,utils__WEBPACK_IMPORTED_MODULE_5__/* .NoSSR */ .ri)((0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__.observer)(RecentlyPage)));

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

/***/ 29346:
/***/ ((module) => {

"use strict";
module.exports = require("react-lazyload");

/***/ }),

/***/ 13702:
/***/ ((module) => {

"use strict";
module.exports = require("react-markdown");

/***/ }),

/***/ 15255:
/***/ ((module) => {

"use strict";
module.exports = require("react-message-popup");

/***/ }),

/***/ 69755:
/***/ ((module) => {

"use strict";
module.exports = require("react-use");

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

/***/ 22281:
/***/ ((module) => {

"use strict";
module.exports = require("validator/lib/isMongoId");

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
var __webpack_exports__ = __webpack_require__.X(0, [4225,8034,8106,1614,9908,2672,4302,298,6264,8946,2726,1113,6076], () => (__webpack_exec__(71466)));
module.exports = __webpack_exports__;

})();