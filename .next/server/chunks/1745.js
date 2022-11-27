exports.id = 1745;
exports.ids = [1745];
exports.modules = {

/***/ 4706:
/***/ ((module) => {

// Exports
module.exports = {
	"popover-root": "FloatPopover_popover-root__Nb86s",
	"headless": "FloatPopover_headless__Dxtkx",
	"show": "FloatPopover_show__zmize"
};


/***/ }),

/***/ 1745:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ FloatPopover)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9755);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_use__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2649);
/* harmony import */ var _floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6470);
/* harmony import */ var _Portal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3681);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4706);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([utils__WEBPACK_IMPORTED_MODULE_4__, _floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_5__, _Portal__WEBPACK_IMPORTED_MODULE_6__]);
([utils__WEBPACK_IMPORTED_MODULE_4__, _floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_5__, _Portal__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const FloatPopover = (0,utils__WEBPACK_IMPORTED_MODULE_4__/* .NoSSR */ .ri)(/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.memo)((props)=>{
    const { headless =false , wrapperClassNames , triggerComponent: TriggerComponent , trigger ="hover" , padding , offset: offsetValue , popoverWrapperClassNames , debug , ...rest } = props;
    const { 0: mounted , 1: setMounted  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { x , y , reference , floating , strategy , update  } = (0,_floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_5__.useFloating)({
        middleware: rest.middleware ?? [
            (0,_floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_5__.flip)({
                padding: padding ?? 20
            }),
            (0,_floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_5__.offset)(offsetValue ?? 10),
            (0,_floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_5__.shift)(), 
        ],
        strategy: rest.strategy,
        placement: rest.placement ?? "bottom-start",
        whileElementsMounted: rest.whileElementsMounted
    });
    const { 0: currentStatus , 1: setCurrentStatus  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: open , 1: setOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const updateOnce = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(false);
    const doPopoverShow = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{
        setCurrentStatus(true);
        setMounted(true);
        if (!updateOnce.current) {
            requestAnimationFrame(()=>{
                update();
                updateOnce.current = true;
            });
        }
    }, []);
    const { 0: containerAnchorRef , 1: setContainerAnchorRef  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const handleTransition = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((status)=>{
        const nextElementSibling = containerAnchorRef?.nextElementSibling;
        if (!nextElementSibling) {
            return;
        }
        if (status === "in") {
            nextElementSibling.ontransitionend = null;
            nextElementSibling?.classList.add((_index_module_css__WEBPACK_IMPORTED_MODULE_7___default().show));
        } else {
            nextElementSibling?.classList.remove((_index_module_css__WEBPACK_IMPORTED_MODULE_7___default().show));
            nextElementSibling.ontransitionend = ()=>{
                setOpen(false);
                setMounted(false);
            };
        }
    }, [
        containerAnchorRef?.nextElementSibling
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (!containerAnchorRef) {
            return;
        }
        if (currentStatus) {
            setOpen(true);
            requestAnimationFrame(()=>{
                handleTransition("in");
            });
        } else {
            requestAnimationFrame(()=>{
                handleTransition("out");
            });
        }
    }, [
        currentStatus,
        containerAnchorRef,
        handleTransition
    ]);
    (0,react_use__WEBPACK_IMPORTED_MODULE_3__.useClickAway)(containerRef, ()=>{
        if (trigger == "click" || trigger == "both") {
            doPopoverDisappear();
            clickTriggerFlag.current = false;
        }
    });
    const doPopoverDisappear = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{
        if (debug) {
            return;
        }
        setCurrentStatus(false);
    }, [
        debug
    ]);
    const clickTriggerFlag = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(false);
    const handleMouseOut = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{
        if (clickTriggerFlag.current === true) {
            return;
        }
        doPopoverDisappear();
    }, []);
    const handleClickTrigger = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{
        clickTriggerFlag.current = true;
        doPopoverShow();
    }, []);
    const listener = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{
        const baseListener = {
            onFocus: doPopoverShow,
            onBlur: doPopoverDisappear
        };
        switch(trigger){
            case "click":
                return {
                    ...baseListener,
                    onClick: doPopoverShow
                };
            case "hover":
                return {
                    ...baseListener,
                    onMouseOver: doPopoverShow,
                    onMouseOut: doPopoverDisappear
                };
            case "both":
                return {
                    ...baseListener,
                    onClick: handleClickTrigger,
                    onMouseOver: doPopoverShow,
                    onMouseOut: handleMouseOut
                };
        }
    }, [
        doPopoverDisappear,
        doPopoverShow,
        handleClickTrigger,
        handleMouseOut,
        trigger, 
    ]);
    const TriggerWrapper = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        role: trigger === "both" || trigger === "click" ? "button" : "note",
        tabIndex: 0,
        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("inline-block", wrapperClassNames),
        ref: reference,
        ...listener,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TriggerComponent, {})
    });
    if (!props.children) {
        return TriggerWrapper;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            TriggerWrapper,
            mounted && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Portal__WEBPACK_IMPORTED_MODULE_6__/* .RootPortal */ .K, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("float-popover", popoverWrapperClassNames),
                    ...trigger === "hover" || trigger === "both" ? listener : {},
                    ref: containerRef,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            ref: setContainerAnchorRef
                        }),
                        open && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: headless ? (_index_module_css__WEBPACK_IMPORTED_MODULE_7___default().headless) : (_index_module_css__WEBPACK_IMPORTED_MODULE_7___default()["popover-root"]),
                            ref: floating,
                            style: {
                                position: strategy,
                                top: y ?? "",
                                left: x ?? ""
                            },
                            role: "dialog",
                            children: props.children
                        })
                    ]
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