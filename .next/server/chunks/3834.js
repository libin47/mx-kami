exports.id = 3834;
exports.ids = [3834];
exports.modules = {

/***/ 75176:
/***/ ((module) => {

// Exports
module.exports = {
	"pager": "Pagination_pager__PxACL",
	"input": "Pagination_input__jXBt8",
	"icon": "Pagination_icon__LdPOO",
	"nav": "Pagination_nav__sn5bb"
};


/***/ }),

/***/ 13834:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ Pagination)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_message_popup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15255);
/* harmony import */ var react_message_popup__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_message_popup__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_universal_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(72726);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(75176);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_4__);





const noStyle = {
    pointerEvents: "none",
    opacity: "0"
};
const Pagination = (props)=>{
    const { total , current , onChange , hideOnSinglePage =true  } = props;
    const { 0: value , 1: setValue  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(current.toString());
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setValue(current.toString());
    }, [
        current
    ]);
    if (hideOnSinglePage && total <= 1) {
        return null;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().pager),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().icon),
                style: current - 1 <= 0 ? noStyle : undefined,
                onClick: ()=>{
                    const prev = current - 1;
                    if (prev > 0) {
                        onChange(current - 1);
                    }
                },
                width: "1em",
                height: "1em",
                viewBox: "0 0 24 24",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    fill: "currentColor",
                    d: "M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6l6 6l1.41-1.41z"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().nav),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Input__WEBPACK_IMPORTED_MODULE_3__/* .Input */ .I, {
                        value: value,
                        type: "text",
                        wrapperProps: {
                            className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().input)
                        },
                        onChange: (e)=>{
                            setValue(e.target.value);
                        },
                        onKeyDown: (e)=>{
                            if (e.keyCode === 13 || e.key == "Enter" || e.code == "Enter") {
                                const _value = parseInt(value);
                                if (_value > total || _value <= 0) {
                                    return react_message_popup__WEBPACK_IMPORTED_MODULE_2__.message.error("\u9875\u6570\u8F93\u5165\u9519\u8BEF, \u5E94\u5728 1 - ".concat(total.toString(), " \u4E4B\u95F4"));
                                }
                                // @ts-ignore
                                onChange(parseInt(e.target.value));
                            }
                        }
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        className: "flex-shrink-0",
                        children: [
                            "/ ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "ml-4",
                                children: total
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                width: "1em",
                height: "1em",
                onClick: ()=>{
                    const next = current + 1;
                    if (next <= total) {
                        onChange(current + 1);
                    }
                },
                style: current + 1 > total ? noStyle : undefined,
                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().icon),
                viewBox: "0 0 24 24",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    fill: "currentColor",
                    d: "M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.41z"
                })
            })
        ]
    });
};


/***/ })

};
;