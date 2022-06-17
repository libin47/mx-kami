"use strict";
exports.id = 2476;
exports.ids = [2476];
exports.modules = {

/***/ 32476:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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