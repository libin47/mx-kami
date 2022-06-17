exports.id = 444;
exports.ids = [444];
exports.modules = {

/***/ 8028:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Overlay_container__wJ28a",
	"center": "Overlay_center__LGJA3",
	"overlay": "Overlay_overlay__PVnXL"
};


/***/ }),

/***/ 20444:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ OverLay)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80352);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(47097);
/* harmony import */ var _hooks_use_is_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10861);
/* harmony import */ var _Portal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(45953);
/* harmony import */ var _Transition_fade_in_out__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(45079);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8028);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([lodash_es__WEBPACK_IMPORTED_MODULE_2__, utils__WEBPACK_IMPORTED_MODULE_4__, _hooks_use_is_client__WEBPACK_IMPORTED_MODULE_5__, _Portal__WEBPACK_IMPORTED_MODULE_6__]);
([lodash_es__WEBPACK_IMPORTED_MODULE_2__, utils__WEBPACK_IMPORTED_MODULE_4__, _hooks_use_is_client__WEBPACK_IMPORTED_MODULE_5__, _Portal__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const _OverLay = (props)=>{
    const { onClose , center , darkness , blur =false  } = props;
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        document.documentElement.style.overflow = "hidden";
        return ()=>{
            document.documentElement.style.overflow = "";
        };
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()((_index_module_css__WEBPACK_IMPORTED_MODULE_8___default().container), center && (_index_module_css__WEBPACK_IMPORTED_MODULE_8___default().center)),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_8___default().overlay),
                style: (0,lodash_es__WEBPACK_IMPORTED_MODULE_2__.merge)(darkness ? {
                    backgroundColor: `rgba(0,0,0,${darkness})`
                } : {}, blur ? {
                    backdropFilter: "blur(5px)"
                } : {}),
                onClick: onClose
            }, "overlay"),
            props.child
        ]
    });
};
const __OverLay = ({ show , childrenOutside =false , ...props })=>{
    const isClient = (0,_hooks_use_is_client__WEBPACK_IMPORTED_MODULE_5__/* .useIsClient */ .O)();
    if (!isClient) {
        return null;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Portal__WEBPACK_IMPORTED_MODULE_6__/* .RootPortal */ .K, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Transition_fade_in_out__WEBPACK_IMPORTED_MODULE_7__/* .FadeInOutTransitionView */ ._, {
                className: "z-30",
                in: show,
                unmountOnExit: true,
                timeout: {
                    exit: 500
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_OverLay, {
                    ...props,
                    child: childrenOutside ? null : props.children
                })
            }),
            show && childrenOutside && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "z-99 fixed inset-0 flex items-center justify-center",
                tabIndex: -1,
                onClick: props.onClose,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    onClick: utils__WEBPACK_IMPORTED_MODULE_4__/* .stopEventDefault */ .G7,
                    tabIndex: -1,
                    children: props.children
                })
            })
        ]
    });
};
const OverLay = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.memo)(__OverLay);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;