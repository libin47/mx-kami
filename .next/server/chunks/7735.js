"use strict";
exports.id = 7735;
exports.ids = [7735,871];
exports.modules = {

/***/ 871:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ BaseTransitionView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4466);
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


/***/ }),

/***/ 7735:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ BottomUpTransitionView),
/* harmony export */   "v": () => (/* binding */ transitionStyles)
/* harmony export */ });
/* harmony import */ var _utils_spring__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7427);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(871);


const name = `bottom-up-spring`;
(0,_utils_spring__WEBPACK_IMPORTED_MODULE_0__/* .genSpringKeyframes */ .UU)(name, {
    translateY: "3em",
    opacity: 0
}, {
    translateY: "0em",
    opacity: 1
});
const defaultStyle = {
    opacity: 0
};
const transitionStyles = {
    entering: {
        opacity: 0
    },
    entered: {
        animation: `${name} 1000ms steps(60) both`,
        opacity: 1
    },
    exiting: {
        animation: `${name} 1000ms steps(60) both reverse`,
        opacity: 1
    },
    exited: {
        opacity: 0
    }
};
const BottomUpTransitionView = (0,_base__WEBPACK_IMPORTED_MODULE_1__/* .BaseTransitionView */ .I)(defaultStyle, transitionStyles);


/***/ })

};
;