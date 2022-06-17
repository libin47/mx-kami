exports.id = 4881;
exports.ids = [4881];
exports.modules = {

/***/ 93298:
/***/ ((module) => {

// Exports
module.exports = {
	"select-container": "LampSwitch_select-container__GKO_y",
	"select-line": "LampSwitch_select-line__i4Wx1",
	"line": "LampSwitch_line__gVosa",
	"sakura-wrap": "LampSwitch_sakura-wrap__4KKfR",
	"rotating": "LampSwitch_rotating__gicrm",
	"sakura-img": "LampSwitch_sakura-img__rKcV5"
};


/***/ }),

/***/ 14881:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LampSwitch": () => (/* binding */ LampSwitch)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47097);
/* harmony import */ var _constants_tracker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10609);
/* harmony import */ var _hooks_use_analyze__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74321);
/* harmony import */ var _utils_spring__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12335);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(93298);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([utils__WEBPACK_IMPORTED_MODULE_2__, _hooks_use_analyze__WEBPACK_IMPORTED_MODULE_4__]);
([utils__WEBPACK_IMPORTED_MODULE_2__, _hooks_use_analyze__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const [down] = (0,_utils_spring__WEBPACK_IMPORTED_MODULE_5__/* .genSpringKeyframes */ .UU)("sakura", {
    translateY: "0vh"
}, {
    translateY: "10vh"
});
const [up] = (0,_utils_spring__WEBPACK_IMPORTED_MODULE_5__/* .genSpringKeyframes */ .UU)("sakura-up", {
    translateY: "10vh"
}, {
    translateY: "0"
});
const LampSwitch = (0,utils__WEBPACK_IMPORTED_MODULE_2__/* .NoSSR */ .ri)(/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)((props = {})=>{
    const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { event  } = (0,_hooks_use_analyze__WEBPACK_IMPORTED_MODULE_4__/* .useAnalyze */ .e)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_6___default()["select-container"]),
        ref: containerRef,
        "data-hide-print": true,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_6___default()["select-line"]),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_index_module_css__WEBPACK_IMPORTED_MODULE_6___default().line)
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_6___default()["sakura-wrap"]),
                ...props,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_index_module_css__WEBPACK_IMPORTED_MODULE_6___default()["sakura-img"]),
                    onClick: ()=>{
                        event({
                            action: _constants_tracker__WEBPACK_IMPORTED_MODULE_3__/* .TrackerAction.Interaction */ .b.Interaction,
                            label: `颜色切换`
                        });
                        if (containerRef.current) {
                            // containerRef.current.style.top = '0'
                            containerRef.current.style.animation = `${down} .5s steps(60) both`;
                            containerRef.current.onanimationend = ()=>{
                                if (containerRef.current) {
                                    containerRef.current.style.animation = `${up} .5s steps(60) both`;
                                    containerRef.current.onanimationend = ()=>{
                                        containerRef.current.style.animation = "";
                                    };
                                }
                            };
                        }
                    }
                })
            })
        ]
    });
}));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;