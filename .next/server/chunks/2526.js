exports.id = 2526;
exports.ids = [2526];
exports.modules = {

/***/ 6662:
/***/ ((module) => {

// Exports
module.exports = {
	"input-wrap": "Input_input-wrap__moLd0",
	"rect": "Input_rect__1L74p",
	"border": "Input_border__bG35z",
	"input": "Input_input__VVv0F",
	"prefix-wrap": "Input_prefix-wrap__T6wPI"
};


/***/ }),

/***/ 2526:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ Input)
/* harmony export */ });
/* unused harmony export InputContext */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_es_merge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8034);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6662);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_4__);





const InputContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)({
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setFocus (state) {}
});
const Input = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)((props, ref)=>{
    // const [value, setValue] = useState(props.value)
    const { prefix , value , onChange , multi =false , wrapperProps , ...rest } = props;
    const { 0: focused , 1: setFocus  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const inputWrapRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const { 0: size1 , 1: setSize  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        height: 0,
        width: 0
    });
    const C = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>(size1.height + size1.width) * 2
    , [
        size1
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        requestAnimationFrame(()=>{
            if (!inputWrapRef.current) {
                return;
            }
            const $input = inputWrapRef.current;
            const size = {
                height: $input.clientHeight,
                width: $input.clientWidth
            };
            setSize(size);
        });
    }, [
        inputWrapRef
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
        ...(0,lodash_es_merge__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(props.wrapperProps, {
            className: clsx__WEBPACK_IMPORTED_MODULE_1___default()((_index_module_css__WEBPACK_IMPORTED_MODULE_4___default()["input-wrap"]), wrapperProps?.className)
        }),
        // className={classNames(
        //   styles['input-wrap'],
        //   focused ? styles['focus'] : undefined,
        // )}
        ref: inputWrapRef,
        children: [
            prefix && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default()["prefix-wrap"]),
                children: prefix
            }),
            typeof C === "number" && !!C && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().border),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                        height: size1.height,
                        width: size1.width,
                        // x={1}
                        // y={0}
                        style: {
                            strokeDasharray: `${C}px`,
                            strokeDashoffset: !focused ? `${C}px` : undefined
                        },
                        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().rect)
                    })
                })
            }),
            props.children ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(InputContext.Provider, {
                value: {
                    setFocus: (state)=>{
                        setFocus(state);
                    }
                },
                children: props.children
            }) : multi ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                ref: ref,
                value: value,
                ...rest,
                onFocus: (e)=>{
                    setFocus(true);
                    props.onFocus?.(e);
                },
                onBlur: (e)=>{
                    setFocus(false);
                    props.onBlur?.(e);
                },
                // @ts-ignore
                onChange: onChange,
                className: clsx__WEBPACK_IMPORTED_MODULE_1___default()((_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().input), prefix ? (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default()["has-prefix"]) : null)
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                ref: ref,
                value: value,
                ...rest,
                onFocus: (e)=>{
                    setFocus(true);
                    props.onFocus?.(e);
                },
                onBlur: (e)=>{
                    setFocus(false);
                    props.onBlur?.(e);
                },
                // @ts-ignore
                onChange: onChange,
                className: clsx__WEBPACK_IMPORTED_MODULE_1___default()((_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().input), prefix ? (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default()["has-prefix"]) : null)
            })
        ]
    });
}));


/***/ })

};
;