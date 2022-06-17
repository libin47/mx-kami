exports.id = 1351;
exports.ids = [1351];
exports.modules = {

/***/ 18856:
/***/ ((module) => {

// Exports
module.exports = {
	"like-button": "LikeButton_like-button__RGgSw",
	"checked": "LikeButton_checked__WPR18",
	"animateHeart": "LikeButton_animateHeart__PH_NS",
	"animateCircle": "LikeButton_animateCircle__6br16",
	"animateHeartOut": "LikeButton_animateHeartOut__M__iI"
};


/***/ }),

/***/ 21351:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ LikeButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18856);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_2__);



const LikeButton = ({ checked , width , className  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()((_index_module_css__WEBPACK_IMPORTED_MODULE_2___default()["like-button"]), checked ? (_index_module_css__WEBPACK_IMPORTED_MODULE_2___default().checked) : "", className),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
            htmlFor: "checkbox",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                style: {
                    width
                },
                id: "heart-svg",
                viewBox: "467 392 58 57",
                xmlns: "http://www.w3.org/2000/svg",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                    id: "Group",
                    fill: "none",
                    fillRule: "evenodd",
                    transform: "translate(467 392)",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                            d: "M29.144 20.773c-.063-.13-4.227-8.67-11.44-2.59C7.63 28.795 28.94 43.256 29.143 43.394c.204-.138 21.513-14.6 11.44-25.213-7.214-6.08-11.377 2.46-11.44 2.59z",
                            id: "heart",
                            fill: "currentColor"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                            id: "main-circ",
                            fill: "#E2264D",
                            opacity: "0",
                            cx: "29.5",
                            cy: "29.5",
                            r: "1.5"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                            id: "grp7",
                            opacity: "0",
                            transform: "translate(7 6)",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                    id: "oval1",
                                    fill: "#9CD8C3",
                                    cx: "2",
                                    cy: "6",
                                    r: "2"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                    id: "oval2",
                                    fill: "#8CE8C3",
                                    cx: "5",
                                    cy: "2",
                                    r: "2"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                            id: "grp6",
                            opacity: "0",
                            transform: "translate(0 28)",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                    id: "oval1",
                                    fill: "#CC8EF5",
                                    cx: "2",
                                    cy: "7",
                                    r: "2"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                    id: "oval2",
                                    fill: "#91D2FA",
                                    cx: "3",
                                    cy: "2",
                                    r: "2"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                            id: "grp3",
                            opacity: "0",
                            transform: "translate(52 28)",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                    id: "oval2",
                                    fill: "#9CD8C3",
                                    cx: "2",
                                    cy: "7",
                                    r: "2"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                    id: "oval1",
                                    fill: "#8CE8C3",
                                    cx: "4",
                                    cy: "2",
                                    r: "2"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                            id: "grp2",
                            opacity: "0",
                            transform: "translate(44 6)",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                    id: "oval2",
                                    fill: "#CC8EF5",
                                    cx: "5",
                                    cy: "6",
                                    r: "2"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                    id: "oval1",
                                    fill: "#CC8EF5",
                                    cx: "2",
                                    cy: "2",
                                    r: "2"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                            id: "grp5",
                            opacity: "0",
                            transform: "translate(14 50)",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                    id: "oval1",
                                    fill: "#91D2FA",
                                    cx: "6",
                                    cy: "5",
                                    r: "2"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                    id: "oval2",
                                    fill: "#91D2FA",
                                    cx: "2",
                                    cy: "2",
                                    r: "2"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                            id: "grp4",
                            opacity: "0",
                            transform: "translate(35 50)",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                    id: "oval1",
                                    fill: "#F48EA7",
                                    cx: "6",
                                    cy: "5",
                                    r: "2"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                    id: "oval2",
                                    fill: "#F48EA7",
                                    cx: "2",
                                    cy: "2",
                                    r: "2"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                            id: "grp1",
                            opacity: "0",
                            transform: "translate(24)",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                    id: "oval1",
                                    fill: "#9FC7FA",
                                    cx: "2.5",
                                    cy: "3",
                                    r: "2"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                    id: "oval2",
                                    fill: "#9FC7FA",
                                    cx: "7.5",
                                    cy: "2",
                                    r: "2"
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
};


/***/ })

};
;