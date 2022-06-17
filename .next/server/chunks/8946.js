exports.id = 8946;
exports.ids = [8946];
exports.modules = {

/***/ 55233:
/***/ ((module) => {

// Exports
module.exports = {
	"loading": "Loading_loading__7nOdi"
};


/***/ }),

/***/ 68946:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ Loading)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19785);
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55233);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_3__);




const Loading = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(({ loadingText  })=>{
    const { 0: pause , 1: setPause  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const { ref  } = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__.useInView)({
        threshold: 0.5,
        onChange (inView) {
            if (inView) {
                setPause(false);
            } else {
                setPause(true);
            }
        }
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_3___default().loading),
        ref: ref,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "icon",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                    className: "m-auto bg-transparent block",
                    width: "200px",
                    height: "200px",
                    viewBox: "0 0 100 100",
                    preserveAspectRatio: "xMidYMid",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                        cx: "50",
                        cy: "51.3828",
                        r: "13",
                        fill: "#e15b64",
                        children: !pause && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("animate", {
                            attributeName: "cy",
                            dur: "1s",
                            repeatCount: "indefinite",
                            calcMode: "spline",
                            keySplines: "0.45 0 0.9 0.55;0 0.45 0.55 0.9",
                            keyTimes: "0;0.5;1",
                            values: "23;77;23"
                        })
                    })
                })
            }, "icon"),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                children: loadingText
            })
        ]
    });
});


/***/ })

};
;