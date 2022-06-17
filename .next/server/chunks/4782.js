exports.id = 4782;
exports.ids = [4782];
exports.modules = {

/***/ 50066:
/***/ ((module) => {

// Exports
module.exports = {
	"icon": "ArticleAction_icon__gRaNV",
	"root": "ArticleAction_root__ZBwKD"
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

/***/ 54575:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ NumberTransition)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_smooth_number_counter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91327);
/* harmony import */ var react_smooth_number_counter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_smooth_number_counter__WEBPACK_IMPORTED_MODULE_2__);



const NumberTransition = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)((props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_smooth_number_counter__WEBPACK_IMPORTED_MODULE_2___default()), {
        value: props.number,
        transition: 500,
        className: props.className
    });
});


/***/ }),

/***/ 89931:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ ArticleFooterAction)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_universal_FloatPopover__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85782);
/* harmony import */ var _components_universal_Icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10298);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(50066);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_universal_FloatPopover__WEBPACK_IMPORTED_MODULE_3__]);
_components_universal_FloatPopover__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const ArticleFooterAction = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.memo)((props)=>{
    const { actions =[] , informs =[] , copyright =true , ...rest } = props;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_5___default().root),
        "data-hide-print": true,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "note-inform space-x-3",
                ...rest,
                children: [
                    informs.map((inform, index)=>{
                        const Inner = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                            className: "inline-flex items-center space-x-2",
                            children: [
                                inform.icon && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "flex items-center mr-2",
                                    style: {
                                        color: inform.color
                                    },
                                    children: inform.icon
                                }),
                                inform.name
                            ]
                        });
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
                            children: inform.tip ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_FloatPopover__WEBPACK_IMPORTED_MODULE_3__/* .FloatPopover */ .r, {
                                triggerComponent: ()=>Inner
                                ,
                                wrapperClassNames: "inline-flex items-center",
                                children: mountJSXElementOrFC(inform.tip)
                            }) : Inner
                        }, index);
                    }),
                    copyright && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: "https://creativecommons.org/licenses/by-nc-nd/4.0/",
                        target: "_blank",
                        className: "inline-flex items-center text-current cursor-pointer",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            title: "\u521B\u4F5C\u5171\u7528\u4FDD\u7559\u7F72\u540D-\u975E\u5546\u4E1A-\u7981\u6B62\u6F14\u7ECE4.0\u56FD\u9645\u8BB8\u53EF\u8BC1",
                            className: "inline-flex items-center",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Icons__WEBPACK_IMPORTED_MODULE_4__/* .EntypoCreativeCommons */ .w2, {})
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "note-action min-h-4 space-x-4",
                children: actions.map((action, i)=>{
                    if (!action) {
                        return null;
                    }
                    const { wrapperComponent  } = action;
                    const Wrapper = wrapperComponent || react__WEBPACK_IMPORTED_MODULE_2__.Fragment;
                    const Inner = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(!!action.callback && "cursor-pointer", "inline-flex items-center space-x-2"),
                        onClick: action.callback,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Wrapper, {
                            children: [
                                action.icon && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "inline-flex items-center",
                                    style: {
                                        color: action.color
                                    },
                                    children: action.icon
                                }),
                                action.name
                            ]
                        })
                    });
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
                        children: action.tip ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_FloatPopover__WEBPACK_IMPORTED_MODULE_3__/* .FloatPopover */ .r, {
                            triggerComponent: ()=>Inner
                            ,
                            wrapperClassNames: "inline-flex items-center",
                            children: mountJSXElementOrFC(action.tip)
                        }) : Inner
                    }, i);
                })
            })
        ]
    });
});
const mountJSXElementOrFC = (render)=>{
    if (typeof render === "function") {
        return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)(render);
    }
    return render;
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 46992:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ DonatePopover)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6470);
/* harmony import */ var _components_universal_FloatPopover__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85782);
/* harmony import */ var _components_universal_ImpressionView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(27625);
/* harmony import */ var _hooks_use_initial_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(92644);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_2__, _components_universal_FloatPopover__WEBPACK_IMPORTED_MODULE_3__, _components_universal_ImpressionView__WEBPACK_IMPORTED_MODULE_4__]);
([_floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_2__, _components_universal_FloatPopover__WEBPACK_IMPORTED_MODULE_3__, _components_universal_ImpressionView__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const DonatePopover = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)((props)=>{
    const { function: { donate: { qrcode =[]  } ,  } ,  } = (0,_hooks_use_initial_data__WEBPACK_IMPORTED_MODULE_5__/* .useThemeConfig */ .LU)();
    const El = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: props.children
        })
    , [
        props.children
    ]);
    if (!qrcode.length) {
        return El;
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_FloatPopover__WEBPACK_IMPORTED_MODULE_3__/* .FloatPopover */ .r, {
        wrapperClassNames: "inline-flex items-center",
        middleware: [
            (0,_floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_2__.autoPlacement)({
                autoAlignment: true
            }),
            (0,_floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_2__.shift)(),
            (0,_floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_2__.offset)(10), 
        ],
        triggerComponent: ()=>El
        ,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_ImpressionView__WEBPACK_IMPORTED_MODULE_4__/* .ImpressionView */ .X, {
            trackerMessage: "\u66DD\u5149 - \u8D44\u52A9\u5F39\u5C42",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex space-x-2",
                children: qrcode.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: item,
                        className: "w-[300px]"
                    })
                )
            })
        })
    });
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;