"use strict";
exports.id = 9372;
exports.ids = [9372];
exports.modules = {

/***/ 9372:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ RightLeftTransitionView)
/* harmony export */ });
/* harmony import */ var _utils_spring__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7427);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(871);


const name = `right-left-spring`;
(0,_utils_spring__WEBPACK_IMPORTED_MODULE_0__/* .genSpringKeyframes */ .UU)(name, {
    translateX: "3em",
    opacity: 0
}, {
    translateX: "0em",
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
        animation: `${name} 1000ms steps(60) both`
    },
    exiting: {
        animation: `${name} 1000ms steps(60) both reverse`
    },
    exited: {
        opacity: 0
    }
};
const RightLeftTransitionView = (0,_base__WEBPACK_IMPORTED_MODULE_1__/* .BaseTransitionView */ .I)(defaultStyle, transitionStyles);


/***/ })

};
;