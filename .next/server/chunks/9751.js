exports.id = 9751;
exports.ids = [9751,2476];
exports.modules = {

/***/ 35304:
/***/ ((module) => {

// Exports
module.exports = {
	"notice-darwin": "Notice_notice-darwin__gIu87",
	"box": "Notice_box___pxPH",
	"icon-wrap": "Notice_icon-wrap__rwHhJ",
	"icon": "Notice_icon__MWWFO",
	"mask": "Notice_mask__PQvJk",
	"f-wrap": "Notice_f-wrap__1A7Gh",
	"notice-text": "Notice_notice-text__HDf0N"
};


/***/ }),

/***/ 11274:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoticePanel": () => (/* binding */ NoticePanel)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Portal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45953);
/* harmony import */ var _Transition_fade_in_out__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45079);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35304);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Portal__WEBPACK_IMPORTED_MODULE_1__]);
_Portal__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const _Notice = (props)=>{
    const { icon , text  } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_3___default()["f-wrap"]),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (_index_module_css__WEBPACK_IMPORTED_MODULE_3___default().mask),
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_3___default()["notice-darwin"]),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_index_module_css__WEBPACK_IMPORTED_MODULE_3___default().box),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_index_module_css__WEBPACK_IMPORTED_MODULE_3___default()["icon-wrap"]),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_3___default().icon),
                                children: icon
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_index_module_css__WEBPACK_IMPORTED_MODULE_3___default()["notice-text"]),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: text
                            })
                        })
                    ]
                })
            })
        })
    });
};
const NoticePanel = (props)=>{
    if (typeof document === "undefined") {
        return null;
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Portal__WEBPACK_IMPORTED_MODULE_1__/* .RootPortal */ .K, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Transition_fade_in_out__WEBPACK_IMPORTED_MODULE_2__/* .FadeInOutTransitionView */ ._, {
            in: props.in,
            timeout: {
                exit: 500
            },
            appear: true,
            unmountOnExit: true,
            onEntered: ()=>{
                setTimeout(()=>{
                    props.onExited();
                }, 3000);
            },
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Notice, {
                ...props
            })
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 32476:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ BaseTransitionView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84466);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_transition_group__WEBPACK_IMPORTED_MODULE_1__);


const BaseTransitionView = (defaultStyle, transitionStyles)=>(props)=>{
        const { id , className , component: Component = "div" , ...rest } = props;
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_1__.Transition, {
            in: true,
            appear: true,
            mountOnEnter: true,
            unmountOnExit: true,
            timeout: 0,
            ...rest,
            children: (state)=>{
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                    style: {
                        ...defaultStyle,
                        ...transitionStyles[state]
                    },
                    className: className,
                    children: props.children
                });
            }
        }, id);
    }
;


/***/ })

};
;