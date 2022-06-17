"use strict";
(() => {
var exports = {};
exports.id = 2888;
exports.ids = [2888];
exports.modules = {

/***/ 84441:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ BasicLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45944);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_shortcut_guide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35011);
/* harmony import */ var react_shortcut_guide__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_shortcut_guide__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_universal_Icons_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(72809);
/* harmony import */ var _constants_tracker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10609);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(29592);
/* harmony import */ var _hooks_use_analyze__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(74321);
/* harmony import */ var _hooks_use_media_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(80938);
/* harmony import */ var _hooks_use_theme_background__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(21865);
/* harmony import */ var _utils_spring__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(12335);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context__WEBPACK_IMPORTED_MODULE_6__, _hooks_use_analyze__WEBPACK_IMPORTED_MODULE_7__, _hooks_use_media_toggle__WEBPACK_IMPORTED_MODULE_8__, _hooks_use_theme_background__WEBPACK_IMPORTED_MODULE_9__]);
([_context__WEBPACK_IMPORTED_MODULE_6__, _hooks_use_analyze__WEBPACK_IMPORTED_MODULE_7__, _hooks_use_media_toggle__WEBPACK_IMPORTED_MODULE_8__, _hooks_use_theme_background__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const Header = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().lazy(()=>Promise.all(/* import() */[__webpack_require__.e(5811), __webpack_require__.e(7937), __webpack_require__.e(298), __webpack_require__.e(9781), __webpack_require__.e(444), __webpack_require__.e(5782), __webpack_require__.e(7612), __webpack_require__.e(1351), __webpack_require__.e(2263)]).then(__webpack_require__.bind(__webpack_require__, 59613)).then((mo)=>({
            default: mo.Header
        })
    )
);
const ColorModeNoticePanel = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().lazy(()=>Promise.all(/* import() */[__webpack_require__.e(9781), __webpack_require__.e(9751)]).then(__webpack_require__.bind(__webpack_require__, 11274)).then((mo)=>({
            default: mo.NoticePanel
        })
    )
);
const SearchHotKey = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().lazy(()=>Promise.all(/* import() */[__webpack_require__.e(5811), __webpack_require__.e(7937), __webpack_require__.e(298), __webpack_require__.e(9781), __webpack_require__.e(444), __webpack_require__.e(4742), __webpack_require__.e(2476)]).then(__webpack_require__.bind(__webpack_require__, 44742)).then((mo)=>({
            default: mo.SearchHotKey
        })
    )
);
const Footer = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().lazy(()=>Promise.all(/* import() */[__webpack_require__.e(5811), __webpack_require__.e(7937), __webpack_require__.e(298), __webpack_require__.e(3806)]).then(__webpack_require__.bind(__webpack_require__, 23806)).then((mo)=>({
            default: mo.Footer
        })
    )
);
const LampSwitch = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().lazy(()=>__webpack_require__.e(/* import() */ 4881).then(__webpack_require__.bind(__webpack_require__, 14881)).then((mo)=>({
            default: mo.LampSwitch
        })
    )
);
const MusicMiniPlayerStoreControlled = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().lazy(()=>__webpack_require__.e(/* import() */ 9696).then(__webpack_require__.bind(__webpack_require__, 79696)).then((mo)=>({
            default: mo.MusicMiniPlayerStoreControlled
        })
    )
);
const BasicLayout = (0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__.observer)(({ children  })=>{
    const { appStore , actionStore  } = (0,_context__WEBPACK_IMPORTED_MODULE_6__/* .useRootStore */ .Yh)();
    const { toggle , value: isDark  } = (0,_hooks_use_media_toggle__WEBPACK_IMPORTED_MODULE_8__/* .useMediaToggle */ ._)();
    (0,_hooks_use_theme_background__WEBPACK_IMPORTED_MODULE_9__/* .useThemeBackground */ .xS)();
    const { 0: showNotice , 1: setNotice  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: tip , 1: setTip  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        text: "\u767D\u5929\u6A21\u5F0F",
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Icons_layout__WEBPACK_IMPORTED_MODULE_4__/* .PhSunBold */ .z, {})
    });
    const handleChangeColorMode = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        toggle();
        // 去相反的值去比较, 因为 toggle 之后因为 react 的 batch 不会立刻更新
        setTip({
            text: !isDark ? "\u591C\u95F4\u6A21\u5F0F" : "\u767D\u5929\u6A21\u5F0F",
            icon: !isDark ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Icons_layout__WEBPACK_IMPORTED_MODULE_4__/* .BiMoonStarsFill */ .R, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Icons_layout__WEBPACK_IMPORTED_MODULE_4__/* .PhSunBold */ .z, {})
        });
        setNotice(!showNotice);
    }, [
        isDark,
        showNotice,
        toggle
    ]);
    const idSymbol = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(Symbol());
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        actionStore.removeActionBySymbol(idSymbol.current);
        if (appStore.viewport.mobile || appStore.viewport.pad) {
            const action = {
                id: idSymbol.current,
                icon: appStore.colorMode === "dark" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Icons_layout__WEBPACK_IMPORTED_MODULE_4__/* .PhSunBold */ .z, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Icons_layout__WEBPACK_IMPORTED_MODULE_4__/* .BiMoonStarsFill */ .R, {}),
                onClick: handleChangeColorMode
            };
            actionStore.appendActions(action);
            return ()=>{
                // eslint-disable-next-line react-hooks/exhaustive-deps
                actionStore.removeActionBySymbol(idSymbol.current);
            };
        }
    }, [
        actionStore,
        appStore.colorMode,
        appStore.viewport.mobile,
        appStore.viewport.pad,
        handleChangeColorMode, 
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)(()=>{
        if (location.hash) {
            const id = location.hash.replace(/^#/, "");
            setTimeout(()=>{
                const $el = document.getElementById(decodeURIComponent(id));
                $el && (0,_utils_spring__WEBPACK_IMPORTED_MODULE_10__/* .springScrollToElement */ .HE)($el, 1000, -window.innerHeight / 2 + 100);
            }, 50);
        }
    }, []);
    const { event  } = (0,_hooks_use_analyze__WEBPACK_IMPORTED_MODULE_7__/* .useAnalyze */ .e)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_shortcut_guide__WEBPACK_IMPORTED_MODULE_3__.ShortcutProvider, {
        options: (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({
                darkMode: "class",
                darkClassName: "html.dark",
                onGuidePanelOpen: ()=>{
                    event({
                        label: "Guide \u88AB\u6253\u5F00\u4E86",
                        action: _constants_tracker__WEBPACK_IMPORTED_MODULE_5__/* .TrackerAction.Interaction */ .b.Interaction
                    });
                }
            })
        , []),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "inset-0 fixed bg-fixed pointer-events-none transition-opacity duration-500 ease transform-gpu",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "bg absolute inset-0 transform-gpu"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, {
                fallback: null,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Header, {})
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "app-content",
                children: children
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, {
                fallback: null,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Footer, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MusicMiniPlayerStoreControlled, {}),
                    !(appStore.viewport.mobile || appStore.viewport.pad) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LampSwitch, {
                        onClick: handleChangeColorMode
                    }),
                    /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(ColorModeNoticePanel, {
                        ...tip,
                        onExited: ()=>setNotice(false)
                        ,
                        in: showNotice,
                        key: "notice"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SearchHotKey, {})
                ]
            })
        ]
    });
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 349:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ DebugLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const DebugLayout = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        style: {
            maxWidth: "600px",
            margin: "100px auto 0",
            position: "relative"
        },
        children: props.children
    });
};


/***/ }),

/***/ 33719:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ NoDataErrorView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86009);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53529);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([___WEBPACK_IMPORTED_MODULE_2__]);
___WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const NoDataErrorView = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(___WEBPACK_IMPORTED_MODULE_2__/* .ErrorView */ .o, {
        noSeo: true,
        statusCode: "\u65E0\u6570\u636E",
        showBackButton: false,
        description: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    children: "\u51FA\u73B0\u8FD9\u4E2A\u9519\u8BEF\u8868\u793A\u672A\u83B7\u53D6\u5230\u521D\u59CB\u6570\u636E"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    children: "\u53EF\u80FD\u662F API \u63A5\u53E3\u5730\u5740\u914D\u7F6E\u4E0D\u6B63\u786E, \u6216\u8005\u540E\u7AEF\u670D\u52A1\u51FA\u73B0\u5F02\u5E38"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                    children: [
                        "API \u5730\u5740: ",
                        _constants_env__WEBPACK_IMPORTED_MODULE_1__/* .API_URL */ .T
                    ]
                })
            ]
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 72809:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ BiMoonStarsFill),
/* harmony export */   "z": () => (/* binding */ PhSunBold)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function BiMoonStarsFill(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        width: "1em",
        height: "1em",
        viewBox: "0 0 16 16",
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
            fill: "currentColor",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M6 .278a.768.768 0 0 1 .08.858a7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277c.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316a.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71C0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"
                })
            ]
        })
    });
}
function PhSunBold(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        width: "1em",
        height: "1em",
        viewBox: "0 0 256 256",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            fill: "currentColor",
            d: "M128 56a72 72 0 1 0 72 72a72.1 72.1 0 0 0-72-72Zm0 120a48 48 0 1 1 48-48a48 48 0 0 1-48 48ZM116 28V12a12 12 0 0 1 24 0v16a12 12 0 0 1-24 0Zm74.2 37.8a12 12 0 0 1 0-17l11.3-11.3a12 12 0 0 1 17 17l-11.3 11.3a12 12 0 0 1-8.5 3.5a12.2 12.2 0 0 1-8.5-3.5ZM256 128a12 12 0 0 1-12 12h-16a12 12 0 0 1 0-24h16a12 12 0 0 1 12 12Zm-37.5 73.5a12 12 0 0 1 0 17a11.6 11.6 0 0 1-8.5 3.5a12 12 0 0 1-8.5-3.5l-11.3-11.3a12 12 0 0 1 17-17ZM140 228v16a12 12 0 0 1-24 0v-16a12 12 0 0 1 24 0Zm-74.2-37.8a12 12 0 0 1 0 17l-11.3 11.3A12 12 0 0 1 46 222a11.6 11.6 0 0 1-8.5-3.5a12 12 0 0 1 0-17l11.3-11.3a12 12 0 0 1 17 0ZM28 140H12a12 12 0 0 1 0-24h16a12 12 0 0 1 0 24Zm9.5-85.5a12 12 0 0 1 17-17l11.3 11.3a12 12 0 0 1 0 17a12.2 12.2 0 0 1-8.5 3.5a12 12 0 0 1-8.5-3.5Z"
        })
    });
}


/***/ }),

/***/ 67510:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_universal_Logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82612);



const Loader = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(()=>{
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "loader",
                ref: ref
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "loader-logo",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Logo__WEBPACK_IMPORTED_MODULE_2__/* .CustomLogo */ .uf, {
                    className: "animation",
                    height: "150px",
                    onAnimationEnd: (e)=>{
                        ref.current?.remove();
                        e.target?.remove();
                    }
                })
            })
        ]
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loader);


/***/ }),

/***/ 82612:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "uf": () => (/* binding */ CustomLogo)
/* harmony export */ });
/* unused harmony exports DefaultLogo, CustomLogoMy */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_use_initial_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92644);



const DefaultLogo = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)((props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        viewBox: "0 0 200 200",
        version: "1.1",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
            stroke: "none",
            strokeWidth: "1",
            fill: "none",
            fillRule: "evenodd",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                id: "Group",
                transform: "translate(1.000000, 0.000000)",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                        transform: "translate(0.891670, 0.001664)",
                        fillRule: "nonzero",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
                                id: "Shape-2",
                                fill: "currentColor",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    d: "M97.9232558,0 C43.8413297,0 0,43.8413297 0,97.9232558 C0,152.005182 43.8413297,195.846512 97.9232558,195.846512 C152.005182,195.846512 195.846512,152.005182 195.846512,97.9232558 C195.846512,43.8413297 152.005182,0 97.9232558,0 Z M97.9232558,184.96615 C49.8516415,184.96615 10.8803618,145.99487 10.8803618,97.9232558 C10.8803618,49.8516415 49.8516415,10.8803618 97.9232558,10.8803618 C145.99487,10.8803618 184.96615,49.8516415 184.96615,97.9232558 C184.96615,145.99487 145.99487,184.96615 97.9232558,184.96615 Z",
                                    id: "Shape"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                id: "Oval",
                                cx: "97.9232558",
                                cy: "97.9232558",
                                r: "78.8162791"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
                        transform: "translate(48.391670, 47.501664)",
                        id: "Shape",
                        stroke: "currentColor",
                        strokeWidth: "8.8",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                            d: "M50.1120234,100.116279 L0,50.1120234 L50.1120234,0 L100.116279,50.0042556 L50.1120234,100.116279 Z M90.5813953,57.2093023 L72.7145681,40.3711034 L50.1119553,19.0697674 L9.53488372,57.2093023 M71.5116279,42.9069767 L33.372093,81.0465116 M28.6046512,42.9069767 L66.744186,81.0465116"
                        })
                    })
                ]
            })
        })
    });
});
const CustomLogo = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)((props)=>{
    const { site: { logoSvg  } ,  } = (0,_hooks_use_initial_data__WEBPACK_IMPORTED_MODULE_2__/* .useKamiConfig */ .r5)();
    // FIXME: div props
    const { className , height , onAnimationEnd  } = props;
    if (logoSvg) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: className,
            style: {
                height
            },
            // @ts-ignore
            onAnimationEnd: onAnimationEnd,
            dangerouslySetInnerHTML: {
                __html: logoSvg
            }
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DefaultLogo, {
        ...props
    });
});
const CustomLogoMy = /*#__PURE__*/ (/* unused pure expression or super */ null && (memo((props)=>{
    return /*#__PURE__*/ _jsx("svg", {
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "182.374 266.336 252.726 258.71",
        "enable-background": "new 182.374 266.336 252.726 258.71",
        ...props,
        children: /*#__PURE__*/ _jsx("g", {
            id: "\u56FE\u5C42_1_1_",
            children: /*#__PURE__*/ _jsxs("g", {
                children: [
                    /*#__PURE__*/ _jsx("path", {
                        fill: "#090901",
                        d: "M182.54,396.347c3.278-3.229,1.229-2.139,3.278-3.229c4.415-2.351,8.703-3.683,13.747-1.843 c2.898,1.061,5.513-0.912,7.769-2.529c3.383-2.43,6.944-3.762,11.125-3.299c2.188,0.242,4.297-0.127,6.319-0.983 c3.539-1.501,7.062-1.337,10.6,0.021c1.852,0.711,3.709,1.597,5.729,0.525c4.136-2.188,8.43-3.379,13.189-3.836 c4.977-0.479,7.537-9.797,3.313-13.482c-6.757-5.892-8.846-15.166-16.078-20.551c-1.21-0.897-1.672-2.803-2.49-4.236 c-1.966-3.446-3.938-6.713-7.586-8.936c-3.258-1.984-5.593-5.225-6.756-8.99c-1.313-4.254-3.261-7.851-7.414-10.082 c-2.136-1.146-3.244-3.242-2.84-5.896c0.195-1.288-0.146-2.771,1.542-3.312c1.415-0.451,2.167,0.644,2.893,1.479 c1.712,1.969,3.905,2.92,6.357,3.624c5.046,1.444,9.354,3.842,12.142,8.69c2.024,3.522,5.2,5.654,9.524,6.25 c5.074,0.697,8.582,4.183,11.327,8.209c1.497,2.195,3.198,3.901,5.699,4.455c5.942,1.313,10.398,4.732,14.399,9.143 c3.527,3.887,6.408,4.008,11.493,1.166c4.509-2.521,5.502-4.668,4.127-9.826c-0.488-1.83-0.943-3.754-0.313-5.384 c2.217-5.767,0.803-11.94,2.05-17.619c1.789-8.142,4.241-16.044,2.89-24.503c-0.047-0.294,0.078-0.742,0.29-0.934 c6.803-6.508,2.053-14.176,2.117-21.439c0.728-5.042,2.603-1.708,3.186,0.125c0.949,3.141,0.417,5.542,4.612,5.918 c4.205,4.098,4.845,8.85,2.495,14.047c-1.49,3.297-1.87,6.189,1.309,8.832c4.293,3.566,3.281,8.563,2.528,13.006 c-0.401,2.383-0.216,4.567,0.942,6.002c2.586,3.2,2.849,6.739,2.391,10.358c-0.793,6.272,2.362,11.937,2.396,18.116 c0.017,3.121,2.851,5.447,6.017,5.891c3.93,0.549,8.096,0.826,10.965-2.961c0.897-1.186,2.007-2.371,2.411-3.736 c1.479-4.99,5.423-7.146,9.853-8.019c7.087-1.396,12.117-4.795,14.63-11.729c1.271-3.51,3.869-5.521,7.557-6.521 c4.308-1.165,8.177-2.958,10.874-7.08c2.756-4.212,6.828-6.741,12.327-5.815c1.406,0.236,2.727,0.358,2.938,2.043 c0.185,1.43-0.2,2.512-1.882,2.99c-3.965,1.131-5.405,3.938-5.049,7.943c0.388,4.333-1.663,7.682-4.705,10.496 c-2.374,2.195-3.98,4.607-4.549,7.982c-1.098,6.551-5.887,10.096-11.611,12.479c-3.085,1.281-5.471,3.15-6.232,6.456 c-1.208,5.226-4.218,9.144-8.102,12.687c-3.818,3.488-4.458,7.484-2.368,11.467c2.202,4.198,7.031,6.403,11.885,5.123 c4.037-1.063,7.918-1.228,11.465,1.213c2.727,1.877,5.523,1.857,8.433,0.85c3.633-1.264,7.311-1.203,10.656,0.429 c3.771,1.839,7.636,2.138,11.627,1.839c4.138-0.311,7.896,0.439,11.229,3.041c2.045,1.598,4.423,1.264,6.642,0.578 c1.479-0.457,3.104-1.063,4.354-0.438c1.67,0.837,4.456-0.127,4.854,3.146c0.403,3.313-2.324,2.537-3.761,3.433 c-8.12,5.065-17.609,3.426-26.412,5.104c-4.314,0.82-8.874,0.829-13.08,2.328c-3.446,1.229-6.912,1.353-10.252,0.403 c-2.315-0.653-4.435-0.728-6.122,0.652c-3.688,3.006-7.89,3.043-12.222,2.83c-3.731-0.185-6.908,0.639-8.684,4.379 c-1.896,3.998-0.4,6.979,2.672,9.574c1.694,1.432,2.82,3.227,3.329,5.414c0.188,0.791,0.366,1.813,0.924,2.256 c6.225,4.957,8.1,13.168,13.872,18.43c1.872,1.707,3.368,3.633,4.313,6.008c1.31,3.299,3.396,6.039,6.048,8.414 c1.956,1.754,3.711,3.588,4.488,6.367c1.027,3.684,3.417,6.23,7.427,7.311c2.206,0.594,4.496,2.27,3.67,5.066 c-0.866,2.936-3.65,2.029-5.491,1.385c-2.156-0.756-4.299-0.279-6.387-0.74c-5.223-1.146-10.154-2.564-12.93-7.977 c-0.994-1.938-2.86-3.938-5.277-4.342c-6.758-1.125-10.966-5.854-15.274-10.438c-3.676-3.91-7.6-7.209-12.927-8.879 c-3.546-1.107-5.511-4.684-8.119-7.215c-2.09-2.029-3.936-4.037-7.296-2.48c-3.618,1.682-6.88,3.539-7.035,8.113 c-0.084,2.496-0.091,5.002,0,7.496c0.146,3.951-0.894,7.48-3.164,10.736c-2.241,3.217-2.826,6.49-1.666,10.604 c1.57,5.564,1.97,11.461-1.302,16.855c-1.508,2.486-1.875,5.168-1.966,8.08c-0.18,5.75-2.459,11.246-2.265,17.111 c0.047,1.412-0.91,3.031-3.227,3.01c-2.607-0.029-1.898-1.9-2.592-3.264c-2.821-5.559-2.266-11.902-4.5-17.604 c-1.084-2.77-0.969-6.102-0.1-8.867c0.957-3.049,0.541-5.463-0.963-8.004c-2.303-3.885-2.545-8.16-2.346-12.529 c0.168-3.68-0.343-7.076-2.463-10.381c-2.122-3.309-2.091-7.408-1.285-11.152c0.951-4.418-0.405-7.24-4.339-9.217 c-4.591-2.301-7.529-2.084-10.825,1.176c-0.814,0.813-1.496,1.771-2.169,2.711c-2.06,2.873-4.391,5.646-7.859,6.564 c-6.014,1.596-10.608,4.822-14.243,9.861c-2.451,3.396-5.881,5.848-9.9,7.279c-7.54,2.688-13.512,7.369-18.206,13.846 c-1.007,1.389-2.176,3.139-4.336,2.99c-1.726-0.117-3.935,0.867-4.971-1.229c-1-2.021,1.087-2.945,2.188-3.99 c2.515-2.387,3.914-5.322,4.732-8.58c1.104-4.402,3.625-7.746,7.443-10.104c1.19-0.734,2.293-1.572,2.536-2.928 c1.1-6.088,4.874-10.223,9.582-13.799c1.013-0.768,2.119-1.971,2.333-3.129c1.479-7.984,7.396-12.736,12.784-17.828 c3.055-2.887,3.51-6.377,2.888-10.063c-0.813-4.818-3.072-6.192-7.887-5.406c-0.327,0.056-0.69,0.164-0.986,0.072 c-7.521-2.307-15.833-0.572-23.034-4.425c-2.449-1.312-4.657-1.657-7.534-0.907c-3.463,0.904-7.289,1.03-10.621-1.138 c-1.894-1.229-3.936-1.563-6.167-1.54c-4.085,0.044-7.911-0.063-11.923-2.186c-3.827-2.021-5.058,0.588-9.808-2.412 C182.371,396.881,182.54,398.345,182.54,396.347z M224.056,482.056c0.85-0.539,1.735-1.074,1.569-2.275 c-0.022-0.186-0.515-0.498-0.684-0.438c-1.243,0.428-0.908,1.592-1.089,2.514c-0.124,0.199-0.247,0.396-0.371,0.596 C223.676,482.317,223.866,482.187,224.056,482.056z M330.577,354.747c-6.641,0.01-12.631-3.364-12.968-8.32 c-0.429-6.302-3.273-12.22-2.438-18.676c0.432-3.322-0.079-6.458-2.211-9.452c-1.582-2.221-2.086-5.013-1.206-8.085 c1.116-3.912,1.146-8.008-2.343-11.082c-3.405-3.005-3.699-6.451-1.735-10.313c0.991-1.945,1.979-3.916,1.422-6.18 c-0.271-1.095-0.461-2.918-1.455-2.924c-1.538-0.008-0.916,1.748-0.849,2.678c0.158,2.26-1.144,3.832-2.347,5.356 c-2.694,3.419-3.433,7.06-2.114,11.222c0.713,2.252,1.136,4.93-0.029,6.848c-3.979,6.549-3.271,13.693-3.723,20.816 c-0.313,4.862-1.924,9.521-0.962,14.623c1.196,6.342-3.716,9.112-8.377,11.471c-4.624,2.345-8.954,1.524-12.536-2.42 c-3.806-4.188-8.132-7.302-13.696-8.617c-3.271-0.771-5.654-2.973-7.316-5.691c-2.545-4.164-6.235-6.282-10.836-7.245 c-3.876-0.813-7.013-2.575-9.194-6.172c-2.352-3.877-5.436-7.147-10.252-8.049c-0.771-0.146-1.654-0.808-2.213,0.063 c-0.178,0.277,0.498,1.109,0.793,1.686c3.855,7.484,7.531,15.089,14.862,20.025c0.893,0.604,1.313,1.894,1.974,2.854 c6.231,9.104,12.278,18.339,19.608,26.643c3.241,3.672,2.962,7.982,1.427,12.221c-1.548,4.277-4.416,6.945-9.359,6.746 c-2.908-0.114-5.547,1.067-8.021,2.44c-3.122,1.729-6.282,2.138-9.575,0.731c-3.229-1.377-6.438-1.563-9.646-0.043 c-1.889,0.896-3.885,0.986-5.872,0.814c-4.019-0.346-7.475,0.789-10.729,3.17c-3.487,2.553-7.31,3.774-11.733,2.174 c-2.63-0.951-5.275-0.31-7.612,1.265c-0.372,0.25-0.585,0.733-0.872,1.108c0.366,0.242,0.707,0.635,1.103,0.703 c5.604,0.963,10.726,4.45,16.777,3.125c1.501-0.328,2.965,0.305,4.275,1.1c3.324,2.021,6.781,2.414,10.529,1.234 c2.253-0.709,4.726-0.861,6.791,0.463c4.421,2.834,9.207,3.625,14.319,3.18c1.353-0.117,2.655,0.18,3.847,0.857 c2.15,1.229,4.323,1.373,6.721,0.6c3.941-1.273,6.782,0.486,8.824,3.773c3.772,6.067,2.85,12.408-2.05,17.688 c-3.563,3.848-8.569,6.582-9.966,12.191c-1,4.018-3.06,7.334-6.261,9.949c-3.404,2.777-6.104,5.922-6.993,10.498 c-0.521,2.68-2.615,4.564-5.021,5.939c-2.979,1.701-4.274,4.521-5.125,7.664c-0.223,0.824-0.632,1.797,0.145,2.283 c0.776,0.49,1.54-0.273,2.099-0.887c3.337-3.664,7.672-5.705,12.14-7.566c5.484-2.287,10.17-5.525,13.39-10.74 c1.104-1.791,2.669-3.744,4.782-4.25c7.498-1.791,12.784-6.379,17.621-12.141c3.395-4.043,8.479-3.979,13.692-1.016 c5.075,2.885,7.346,7.252,6.104,12.326c-0.878,3.596-0.6,7.025,1.26,10.111c1.9,3.154,2.541,6.461,2.292,10.02 c-0.345,4.932,0.374,9.615,2.935,13.93c1.362,2.303,1.526,4.846,0.729,7.25c-2.268,6.842,2.14,12.883,2.101,19.432 c-0.002,0.154,0.084,0.342,0.189,0.455c0.295,0.314,0.623,0.594,0.938,0.889c0.167-0.271,0.465-0.541,0.479-0.822 c0.179-3.508,2.54-6.551,2.132-10.188c-0.362-3.25,0.378-6.232,2.066-9.064c2.845-4.771,2.743-9.992,0.985-14.93 c-1.648-4.637-0.648-8.52,1.834-12.238c2.219-3.322,3.27-6.85,3.116-10.809c-0.082-2.164-0.06-4.334-0.005-6.498 c0.149-5.9,4.205-8.74,8.87-10.936c4.239-1.994,7.579-0.578,10.565,2.867c2.05,2.361,3.955,5.465,6.938,6.332 c7.894,2.285,12.596,8.438,17.994,13.768c2.186,2.156,4.421,4.041,7.502,4.645c4.943,0.973,8.52,4.232,10.927,8.146 c2.563,4.16,6.657,3.939,10.272,5.201c1.184,0.412,2.197-0.689,1.127-1.617c-4.622-4.012-4.941-10.971-10.219-14.514 c-2.279-1.531-3.397-4.063-4.483-6.506c-1.093-2.467-2.521-4.648-4.54-6.49c-5.788-5.291-7.768-13.467-13.917-18.518 c-0.461-0.379-0.678-1.158-0.82-1.797c-0.568-2.545-1.938-4.564-3.864-6.266c-3.604-3.182-4.351-7.062-2.276-11.273 c2.018-4.104,5.113-6.95,10.106-6.77c4.678,0.172,9.303,0.305,13.249-2.979c1.477-1.229,3.589-1.514,5.263-0.928 c5.265,1.848,10.169,0.404,15.079-1.17c2.59-0.832,5.201-0.895,7.871-0.957c6.955-0.16,13.663-2.731,20.713-2.195 c0.754,0.058,1.863-0.449,1.83-1.363c-0.04-1.073-1.222-0.923-1.933-0.846c-2.821,0.304-5.157-0.684-7.407-2.289 c-2.26-1.609-4.896-1.768-7.625-1.82c-3.612-0.072-7.354,0.882-10.819-0.932c-4.03-2.108-8.208-2.659-12.499-0.979 c-2.854,1.119-5.438,0.938-8.028-0.753c-3.362-2.194-6.822-2.628-10.914-1.558c-6.108,1.603-12.718-1.909-15.51-7.399 c-2.746-5.403-1.724-9.795,3.646-15.089c2.612-2.58,5.106-5.084,5.988-8.936c1.271-5.549,4.913-9.143,10.183-11.322 c4.334-1.797,7.718-4.73,8.396-9.699c0.483-3.529,2.251-6.141,4.79-8.462c3.091-2.826,4.821-6.284,4.561-10.621 c-0.079-1.298,0.208-2.629,0.405-3.933c0.143-0.912,1.823-1.733,0.873-2.504c-1.211-0.979-2.177,0.586-2.675,1.39 c-3.563,5.75-8.9,8.735-15.269,10.292c-2.188,0.533-3.107,2.386-3.896,4.254c-3.137,7.467-8.538,11.95-16.63,13.421 c-3.414,0.622-6.116,2.304-7.893,6.021C340.712,351.024,337.105,355.668,330.577,354.747z M306.247,277.591l0.229,0.146 l0.02-0.262L306.247,277.591z"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        fill: "#B0000E",
                        d: "M330.577,354.747c6.528,0.921,10.132-3.725,12.598-8.873c1.773-3.716,4.479-5.398,7.893-6.021 c8.092-1.472,13.493-5.955,16.63-13.42c0.785-1.869,1.704-3.721,3.896-4.254c6.363-1.557,11.704-4.543,15.269-10.293 c0.498-0.804,1.464-2.369,2.675-1.389c0.95,0.771-0.73,1.592-0.873,2.503c-0.197,1.304-0.484,2.636-0.405,3.933 c0.264,4.338-1.47,7.795-4.561,10.621c-2.539,2.323-4.307,4.937-4.789,8.463c-0.682,4.969-4.063,7.902-8.396,9.698 c-5.27,2.183-8.91,5.775-10.184,11.323c-0.881,3.85-3.376,6.354-5.987,8.936c-5.368,5.293-6.394,9.688-3.646,15.088 c2.792,5.49,9.398,9.002,15.51,7.4c4.091-1.07,7.552-0.638,10.914,1.557c2.592,1.69,5.177,1.873,8.028,0.754 c4.291-1.684,8.469-1.133,12.499,0.978c3.467,1.813,7.207,0.856,10.818,0.933c2.729,0.055,5.365,0.211,7.625,1.82 c2.25,1.604,4.586,2.592,7.408,2.288c0.711-0.077,1.893-0.229,1.933,0.847c0.032,0.914-1.076,1.42-1.83,1.362 c-7.05-0.536-13.758,2.036-20.713,2.198c-2.67,0.063-5.282,0.125-7.871,0.955c-4.911,1.574-9.815,3.017-15.079,1.172 c-1.674-0.588-3.786-0.305-5.263,0.925c-3.946,3.282-8.571,3.147-13.249,2.979c-4.993-0.185-8.093,2.662-10.106,6.769 c-2.071,4.215-1.328,8.097,2.276,11.272c1.927,1.699,3.296,3.723,3.864,6.268c0.146,0.639,0.359,1.42,0.82,1.799 c6.149,5.049,8.129,13.223,13.917,18.514c2.019,1.844,3.447,4.027,4.54,6.492c1.086,2.443,2.204,4.973,4.483,6.504 c5.274,3.543,5.597,10.502,10.219,14.514c1.07,0.93,0.057,2.031-1.127,1.619c-3.615-1.262-7.712-1.043-10.272-5.201 c-2.407-3.914-5.98-7.176-10.927-8.146c-3.081-0.605-5.315-2.49-7.502-4.646c-5.399-5.33-10.104-11.479-17.994-13.768 c-2.984-0.867-4.892-3.967-6.938-6.332c-2.986-3.445-6.326-4.861-10.565-2.865c-4.665,2.193-8.721,5.031-8.87,10.936 c-0.055,2.164-0.077,4.336,0.005,6.496c0.15,3.961-0.897,7.484-3.116,10.809c-2.482,3.721-3.482,7.604-1.835,12.242 c1.759,4.934,1.857,10.15-0.984,14.926c-1.689,2.834-2.433,5.814-2.066,9.064c0.408,3.641-1.953,6.682-2.132,10.189 c-0.015,0.281-0.313,0.549-0.479,0.824c-0.314-0.295-0.645-0.576-0.938-0.891c-0.105-0.111-0.191-0.303-0.189-0.455 c0.039-6.549-4.366-12.592-2.101-19.434c0.796-2.402,0.633-4.947-0.729-7.248c-2.561-4.313-3.277-9-2.935-13.93 c0.249-3.561-0.392-6.863-2.293-10.021c-1.857-3.086-2.138-6.518-1.26-10.107c1.24-5.078-1.027-9.445-6.104-12.328 c-5.214-2.963-10.3-3.029-13.692,1.016c-4.835,5.76-10.122,10.352-17.621,12.141c-2.113,0.508-3.679,2.461-4.781,4.25 c-3.22,5.215-7.903,8.451-13.39,10.738c-4.468,1.861-8.804,3.902-12.141,7.566c-0.559,0.613-1.318,1.377-2.099,0.887 c-0.774-0.486-0.364-1.459-0.145-2.283c0.851-3.143,2.146-5.963,5.125-7.664c2.407-1.375,4.501-3.262,5.021-5.939 c0.89-4.576,3.59-7.719,6.994-10.498c3.201-2.615,5.26-5.934,6.26-9.949c1.396-5.607,6.402-8.346,9.966-12.189 c4.897-5.279,5.822-11.619,2.05-17.688c-2.042-3.287-4.883-5.051-8.824-3.772c-2.396,0.772-4.568,0.628-6.721-0.601 c-1.189-0.682-2.494-0.979-3.847-0.857c-5.113,0.445-9.898-0.348-14.319-3.18c-2.064-1.323-4.538-1.172-6.791-0.463 c-3.748,1.182-7.205,0.783-10.529-1.233c-1.313-0.796-2.774-1.429-4.275-1.101c-6.054,1.324-11.174-2.164-16.777-3.125 c-0.396-0.066-0.734-0.461-1.103-0.703c0.287-0.375,0.5-0.859,0.872-1.109c2.337-1.572,4.981-2.213,7.612-1.264 c4.427,1.602,8.247,0.378,11.734-2.174c3.254-2.381,6.71-3.517,10.729-3.17c1.987,0.172,3.983,0.078,5.872-0.813 c3.207-1.521,6.415-1.334,9.646,0.043c3.294,1.401,6.453,0.997,9.575-0.733c2.478-1.373,5.114-2.557,8.021-2.439 c4.944,0.197,7.813-2.471,9.359-6.744c1.536-4.239,1.815-8.553-1.427-12.223c-7.33-8.305-13.377-17.539-19.608-26.644 c-0.657-0.96-1.081-2.249-1.974-2.853c-7.331-4.938-11.006-12.543-14.862-20.026c-0.295-0.573-0.972-1.405-0.793-1.687 c0.561-0.871,1.442-0.209,2.213-0.063c4.816,0.898,7.901,4.171,10.253,8.049c2.183,3.596,5.318,5.36,9.193,6.172 c4.602,0.963,8.291,3.082,10.836,7.246c1.662,2.719,4.049,4.918,7.316,5.692c5.564,1.313,9.893,4.427,13.696,8.616 c3.582,3.945,7.912,4.764,12.536,2.421c4.661-2.358,9.574-5.132,8.379-11.472c-0.964-5.103,0.647-9.762,0.96-14.625 c0.454-7.123-0.253-14.269,3.724-20.813c1.165-1.918,0.742-4.598,0.029-6.852c-1.316-4.162-0.58-7.803,2.114-11.221 c1.203-1.525,2.506-3.098,2.347-5.357c-0.067-0.93-0.689-2.686,0.849-2.678c0.994,0.006,1.188,1.832,1.455,2.924 c0.558,2.268-0.431,4.232-1.422,6.183c-1.963,3.856-1.67,7.306,1.736,10.312c3.484,3.072,3.461,7.17,2.342,11.082 c-0.881,3.071-0.376,5.863,1.206,8.084c2.132,2.996,2.643,6.131,2.211,9.451c-0.839,6.457,2.009,12.375,2.438,18.678 C317.946,351.383,323.937,354.757,330.577,354.747z M266.977,394.966c-1.188,1.704-1.238,3.412-0.021,5.125 c-0.432,15.922,11.784,29.758,24.703,34.479c11.687,4.271,23.748,4.162,35.326-2.41c9.468-5.373,15.949-13.126,18.715-23.164 c3.139-11.379,2.038-22.671-4.257-33.389c-4.739-8.066-11.758-13.582-19.826-16.277c-12.587-4.206-25.323-4.15-37.257,4.25 C273.208,371.433,267.142,381.383,266.977,394.966z"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        fill: "#46310D",
                        d: "M223.856,481.854c0.181-0.924-0.154-2.088,1.089-2.516c0.168-0.061,0.658,0.256,0.684,0.438 c0.166,1.203-0.723,1.738-1.569,2.277L223.856,481.854z"
                    }),
                    /*#__PURE__*/ _jsx("polygon", {
                        fill: "#B0000E",
                        points: "306.247,277.591 306.493,277.479 306.474,277.739 "
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        fill: "#46310D",
                        d: "M224.056,482.056c-0.19,0.131-0.383,0.264-0.571,0.395c0.124-0.195,0.247-0.396,0.371-0.596 L224.056,482.056z"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        fill: "#090901",
                        d: "M266.977,394.966c0.166-13.583,6.229-23.533,17.384-31.386c11.934-8.401,24.67-8.457,37.257-4.25 c8.068,2.694,15.087,8.211,19.826,16.276c6.295,10.719,7.396,22.011,4.257,33.39c-2.766,10.038-9.247,17.79-18.715,23.165 c-11.578,6.57-23.642,6.684-35.326,2.41c-12.919-4.725-25.135-18.561-24.703-34.479 C266.963,398.383,266.97,396.674,266.977,394.966z M269.002,397.556c-1.477,19.799,17.485,36.563,35.543,37.631 c23.146,1.367,40.121-18.644,40.656-36.199c0.723-23.604-18.248-39.484-37.272-40.16 C286.018,358.045,267.167,377.274,269.002,397.556z"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        fill: "#46310D",
                        d: "M266.977,394.966c-0.007,1.708-0.017,3.417-0.021,5.125C265.738,398.378,265.789,396.67,266.977,394.966z"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        fill: "#FCEB28",
                        d: "M269.002,397.556c-1.835-20.281,17.019-39.51,38.926-38.729c19.024,0.675,37.995,16.556,37.272,40.161 c-0.535,17.558-17.512,37.566-40.659,36.199C286.488,434.118,267.526,417.354,269.002,397.556z M287.999,389.95 c0.151,0.818,0.71,0.97,1.423,0.857c0.928-0.145,1.853-0.293,2.774-0.438c-0.935-0.087-1.869-0.184-2.804-0.26 c-0.489-0.041-0.981-0.053-1.474-0.073c0.226-1.422,3.835-1.921,1.275-4.019c-2.277-1.865-2.146,1.293-3.294,1.855 c-0.279,0.137-0.638,0.109-0.96,0.16c-1.563-3.078-0.303-4.057,2.815-4.489c4.146-0.575,8.089,2.53,12.225,0.438 c0.104,1.002,0.847,1.313,1.671,1.485c0.054,0.011,0.371-0.545,0.299-0.735c-0.386-1.028-1.217-0.883-2.045-0.664 c-2.916-0.769-5.806-1.655-8.753-2.266c-2.312-0.479-4.672-0.271-6.646,1.2c-2.155,1.608-4.77,1.688-7.19,2.411 c2.564,0.845,5.133,1.688,7.7,2.533C285.343,389.61,286.624,389.851,287.999,389.95z M313.869,377.856 c-3.979,0.763-3.354,3.944-2.627,6.258c1.029,3.273,0.545,6.188-0.39,9.234c-0.337,1.094-1.026,2.342-0.771,3.313 c1.141,4.31,0.099,6.146-4.593,4.795c-1.021-0.295-2.157,0.267-2.379,1.313c-0.372,1.758,1.295,0.801,1.961,1.222 c0.692,0.438,1.313,1.047,2.059,1.336c2.911,1.131,3.482-2.548,5.761-2.907c0.812-0.13,1.599-1.286,0.93-1.902 c-4.111-3.793-0.543-7.746-0.511-11.629c0.03-3.559,2.172-4.59,4.949-4.914c1.78-0.207,3.636,0.178,5.457,0.297 c1.393,3.426,7.477-1.274,7.583,4.377c0.437-0.059,0.977,0.026,1.29-0.201c0.992-0.723,1.609-1.772,1.324-3.006 c-0.271-1.183-1.408-1.256-2.402-1.307c-2.305-0.117-4.65,0.184-6.853-0.803c-3.099-1.596-6.225-1.434-9.337-0.08 c-2.893,1.257-3.182-0.289-2.598-2.484c0.234-0.895,0.983-1.648,1.501-2.469c4.216-0.457,8.058-2.814,12.446-2.438 c0.392,0.033,0.813-0.313,1.226-0.483c-0.476-0.103-0.951-0.292-1.425-0.286C322.087,375.146,317.707,375.282,313.869,377.856z M308.846,417.888c-1.254,1.027-4.069-1.361-4.458,0.816c-0.339,1.896,2.599,2.443,4.266,3.32 c0.845,0.443,1.884,1.021,2.727,0.879c3.531-0.596,4.404,1.109,4.071,4.184c-0.048,0.438-0.849,1.305,0.329,1.354 c0.756,0.033,0.986-0.783,1.163-1.402C318.235,422.507,314.109,417.685,308.846,417.888z M318.271,411.263 c-0.604-0.158-1.203-0.343-1.813-0.473c-6.512-1.387-12.989-1.146-19.435,0.404c-0.362,0.089-0.908,0.662-0.869,0.941 c0.164,1.164,1.258,1.041,1.883,0.78c6.155-2.567,12.358-2.942,18.7-0.748C317.241,412.345,318.012,412.349,318.271,411.263z M290.422,374.747c-1.296,0.223-2.611,0.355-3.878,0.697c-0.667,0.182-1.629,0.158-1.769,1.207 c0.633,0.07,1.354,0.375,1.884,0.175c2.947-1.134,5.5-0.138,7.985,1.308c1.338,0.776,2.749,1.129,4.278,0.922 c0.479-0.063,0.943-0.26,1.418-0.396c-0.235-0.208-0.47-0.599-0.706-0.603C296.229,377.998,294.059,374.342,290.422,374.747z M324.786,391.155c0.634-0.145,1.766-0.202,1.812-0.459c0.242-1.332-0.975-0.659-1.523-0.84c-1.274-0.418-1.045-1.402-1.216-2.361 c-0.241-1.352-1.43-2.385-2.336-1.075c-1.188,1.714-2.772,1.415-4.261,1.853c-0.44,0.131-0.789,0.57-1.182,0.869 c0.242,0.107,0.559,0.375,0.72,0.303C319.856,388.065,321.864,391.769,324.786,391.155z M296.453,389.3 c-0.579-0.084-1.023-0.208-1.466-0.188c-0.203,0.014-0.391,0.312-0.586,0.479c0.438,0.104,0.874,0.269,1.313,0.28 C295.91,389.877,296.115,389.575,296.453,389.3z"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        fill: "#46310D",
                        d: "M323.717,384.272c-1.821-0.119-3.677-0.506-5.457-0.297c-2.777,0.322-4.919,1.354-4.949,4.914 c-0.032,3.883-3.604,7.834,0.511,11.627c0.669,0.617-0.118,1.773-0.93,1.903c-2.275,0.362-2.847,4.038-5.761,2.907 c-0.746-0.289-1.364-0.898-2.059-1.336c-0.666-0.422-2.333,0.535-1.961-1.221c0.222-1.051,1.355-1.609,2.379-1.314 c4.688,1.35,5.73-0.484,4.593-4.795c-0.256-0.973,0.437-2.221,0.771-3.313c0.935-3.047,1.419-5.963,0.39-9.236 c-0.727-2.313-1.353-5.494,2.627-6.256c0.124,0.146,0.243,0.291,0.356,0.441c-0.515,0.818-1.264,1.575-1.501,2.469 c-0.584,2.195-0.295,3.741,2.598,2.484c3.112-1.354,6.238-1.516,9.337,0.08C324.344,383.646,324.029,383.96,323.717,384.272z"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        fill: "#46310D",
                        d: "M308.846,417.888c5.264-0.203,9.39,4.619,8.098,9.148c-0.177,0.619-0.407,1.439-1.163,1.402 c-1.178-0.051-0.377-0.916-0.329-1.354c0.333-3.07-0.54-4.775-4.071-4.184c-0.843,0.145-1.882-0.434-2.727-0.877 c-1.667-0.877-4.604-1.426-4.266-3.321C304.776,416.524,307.594,418.915,308.846,417.888z"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        fill: "#46310D",
                        d: "M299.981,383.985c-4.136,2.095-8.078-1.014-12.225-0.438c-3.118,0.434-4.381,1.411-2.815,4.489 l0.072-0.086c-2.566-0.847-5.136-1.688-7.7-2.533c2.423-0.724,5.035-0.801,7.19-2.411c1.977-1.472,4.336-1.678,6.646-1.201 c2.948,0.609,5.838,1.5,8.753,2.27L299.981,383.985z"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        fill: "#46310D",
                        d: "M318.271,411.263c-0.26,1.086-1.03,1.082-1.531,0.908c-6.342-2.195-12.545-1.82-18.7,0.748 c-0.625,0.262-1.719,0.385-1.883-0.779c-0.039-0.279,0.506-0.854,0.869-0.943c6.443-1.551,12.923-1.789,19.432-0.403 C317.068,410.92,317.67,411.104,318.271,411.263z"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        fill: "#46310D",
                        d: "M290.422,374.747c3.64-0.405,5.81,3.251,9.215,3.313c0.236,0.004,0.47,0.395,0.706,0.603 c-0.475,0.136-0.938,0.329-1.418,0.396c-1.529,0.207-2.939-0.146-4.278-0.922c-2.485-1.441-5.038-2.439-7.985-1.308 c-0.528,0.2-1.25-0.104-1.884-0.175c0.14-1.049,1.102-1.025,1.769-1.207C287.808,375.104,289.125,374.97,290.422,374.747z"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        fill: "#46310D",
                        d: "M324.786,391.155c-2.922,0.613-4.93-3.09-7.986-1.715c-0.161,0.072-0.478-0.191-0.72-0.303 c0.393-0.298,0.738-0.738,1.182-0.867c1.485-0.438,3.07-0.14,4.261-1.854c0.906-1.309,2.095-0.273,2.336,1.075 c0.171,0.959-0.062,1.944,1.216,2.36c0.553,0.183,1.769-0.488,1.523,0.842C326.552,390.951,325.42,391.008,324.786,391.155z"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        fill: "#46310D",
                        d: "M324.659,383.333c2.199,0.984,4.548,0.686,6.853,0.803c0.994,0.051,2.132,0.125,2.402,1.307 c0.285,1.231-0.332,2.283-1.324,3.009c-0.313,0.228-0.854,0.144-1.29,0.198c-0.106-5.652-6.19-0.949-7.583-4.377 C324.029,383.96,324.344,383.646,324.659,383.333z"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        fill: "#46310D",
                        d: "M313.869,377.856c3.838-2.574,8.215-2.711,12.604-2.766c0.474-0.006,0.949,0.188,1.425,0.286 c-0.409,0.171-0.834,0.519-1.226,0.483c-4.392-0.379-8.23,1.979-12.446,2.438C314.112,378.147,313.993,378.001,313.869,377.856z"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        fill: "#46310D",
                        d: "M287.999,389.95c-1.375-0.102-2.656-0.342-2.983-1.999l-0.072,0.086c0.322-0.052,0.681-0.022,0.96-0.16 c1.146-0.563,1.017-3.724,3.294-1.856c2.561,2.099-1.052,2.598-1.275,4.02L287.999,389.95z"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        fill: "#46310D",
                        d: "M287.921,390.038c0.49,0.021,0.982,0.031,1.474,0.072c0.936,0.078,1.87,0.174,2.804,0.261 c-0.925,0.146-1.849,0.295-2.774,0.438c-0.713,0.109-1.271-0.041-1.423-0.858L287.921,390.038z"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        fill: "#46310D",
                        d: "M299.906,384.073c0.828-0.221,1.659-0.365,2.045,0.662c0.072,0.191-0.245,0.748-0.299,0.736 c-0.824-0.174-1.565-0.484-1.671-1.486L299.906,384.073z"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        fill: "#46310D",
                        d: "M296.453,389.3c-0.338,0.271-0.543,0.577-0.739,0.572c-0.438-0.016-0.876-0.18-1.313-0.28 c0.195-0.168,0.383-0.466,0.586-0.479C295.427,389.092,295.875,389.216,296.453,389.3z"
                    })
                ]
            })
        })
    });
})));


/***/ }),

/***/ 38978:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ MetaFooter)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_use_initial_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92644);



const MetaFooter = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(()=>{
    const themeConfig = (0,_hooks_use_initial_data__WEBPACK_IMPORTED_MODULE_2__/* .useThemeConfig */ .LU)();
    const analyze = themeConfig.function.analyze;
    const AnalyzeScripts = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>analyze.enable && (()=>{
            const tags = [];
            if (analyze.ga) {
                tags.push(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
                    async: true,
                    src: `https://www.googletagmanager.com/gtag/js?id=${analyze.ga}`
                }, "ga"), /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
                    dangerouslySetInnerHTML: {
                        __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '${analyze.ga}', {page_path: window.location.pathname,});`
                    }
                }, "ga-init"));
            }
            if (analyze.baidu) {
                tags.push(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
                    async: true,
                    src: `https://hm.baidu.com/hm.js?${analyze.baidu}`
                }, "baidu-analyze"));
            }
            if (analyze.umami.url && analyze.umami.id) {
                tags.push(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
                    async: true,
                    defer: true,
                    "data-website-id": analyze.umami.id,
                    "data-cache": "true",
                    src: `${analyze.umami.url.replace(/\/$/, "")}/umami.js`
                }, "umami-analyze"));
            }
            return tags;
        })()
    , [
        analyze.baidu,
        analyze.enable,
        analyze.ga,
        analyze.umami
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: AnalyzeScripts
    });
});


/***/ }),

/***/ 115:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ DynamicHeadMeta)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants_env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86009);
/* harmony import */ var _hooks_use_initial_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(92644);
/* harmony import */ var _utils_env__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(55812);
/* harmony import */ var _utils_load_script__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(66886);







const DynamicHeadMeta = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(()=>{
    const initialData = (0,_hooks_use_initial_data__WEBPACK_IMPORTED_MODULE_4__/* .useInitialData */ .L6)();
    const title = initialData.seo.title;
    const themeConfig = (0,_hooks_use_initial_data__WEBPACK_IMPORTED_MODULE_4__/* .useKamiConfig */ .r5)();
    const favicon = themeConfig.site.favicon || "/favicon.svg";
    const { dark: darkBg , light: lightBg  } = themeConfig.site.background.src;
    const { dark: darkFooter , light: lightFooter  } = themeConfig.site.footer.background.src;
    const { css , js , script , style  } = themeConfig.site.custom;
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        js && js.length && js.forEach((src, i)=>(0,_utils_load_script__WEBPACK_IMPORTED_MODULE_5__/* .loadScript */ .ve)(src)
        );
        if (script) {
            eval(script);
        }
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "api_url",
                content: _constants_env__WEBPACK_IMPORTED_MODULE_3__/* .API_URL */ .T
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "viewport",
                content: "width=device-width, initial-scale=1, shrink-to-fit=no"
            }),
            !_utils_env__WEBPACK_IMPORTED_MODULE_6__/* .isDev */ .r8 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                httpEquiv: "Content-Security-Policy",
                content: "upgrade-insecure-requests"
            }) : null,
            style ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("style", {
                dangerouslySetInnerHTML: {
                    __html: style
                }
            }) : null,
            css && css.length ? css.map((href, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                    rel: "stylesheet",
                    href: href
                }, i)
            ) : null,
            initialData.seo.keywords && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "keywords",
                content: initialData.seo.keywords.join(",")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "application-name",
                content: title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "apple-mobile-web-app-title",
                content: title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "msapplication-tooltip",
                content: title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "theme-color",
                content: "#39C5BB"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "msapplication-navbutton-color",
                content: "#39C5BB"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "apple-mobile-web-app-status-bar-style",
                content: "black"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "shortcut icon",
                href: favicon
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "icon",
                href: favicon
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "apple-touch-icon",
                href: favicon
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "preload",
                href: darkBg,
                as: "image"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "preload",
                href: lightBg,
                as: "image"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "preload",
                href: darkFooter,
                as: "image"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "preload",
                href: lightFooter,
                as: "image"
            })
        ]
    });
});


/***/ }),

/***/ 29828:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45944);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16641);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14291);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4147);
/* harmony import */ var _components_layouts_BasicLayout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(84441);
/* harmony import */ var _components_layouts_DebugLayout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(349);
/* harmony import */ var _components_universal_Error_no_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(33719);
/* harmony import */ var _components_universal_Loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(67510);
/* harmony import */ var _components_universal_Meta_footer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(38978);
/* harmony import */ var _components_universal_Meta_head__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(115);
/* harmony import */ var _configs_default__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(96776);
/* harmony import */ var _context_initial_data__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(66098);
/* harmony import */ var _context_root_store__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(85035);
/* harmony import */ var _hooks_use_check_logged__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(46104);
/* harmony import */ var _hooks_use_check_old_browser__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(46031);
/* harmony import */ var _hooks_use_initial_data__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(92644);
/* harmony import */ var _hooks_use_resize_scroll_event__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(88120);
/* harmony import */ var _hooks_use_router_event__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(48899);
/* harmony import */ var _hooks_use_screen_media__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(54244);
/* harmony import */ var _utils_client__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(9908);
/* harmony import */ var _utils_console__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(47635);
/* harmony import */ var _utils_env__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(55812);
/* harmony import */ var _utils_load_script__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(66886);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(38325);
/* harmony import */ var _utils_cookie__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(57573);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_layouts_BasicLayout__WEBPACK_IMPORTED_MODULE_7__, _components_universal_Error_no_data__WEBPACK_IMPORTED_MODULE_9__, _context_root_store__WEBPACK_IMPORTED_MODULE_15__, _hooks_use_check_logged__WEBPACK_IMPORTED_MODULE_16__, _hooks_use_resize_scroll_event__WEBPACK_IMPORTED_MODULE_19__, _hooks_use_router_event__WEBPACK_IMPORTED_MODULE_20__, _hooks_use_screen_media__WEBPACK_IMPORTED_MODULE_21__, _utils_client__WEBPACK_IMPORTED_MODULE_22__, _store__WEBPACK_IMPORTED_MODULE_25__, _utils_cookie__WEBPACK_IMPORTED_MODULE_26__]);
([_components_layouts_BasicLayout__WEBPACK_IMPORTED_MODULE_7__, _components_universal_Error_no_data__WEBPACK_IMPORTED_MODULE_9__, _context_root_store__WEBPACK_IMPORTED_MODULE_15__, _hooks_use_check_logged__WEBPACK_IMPORTED_MODULE_16__, _hooks_use_resize_scroll_event__WEBPACK_IMPORTED_MODULE_19__, _hooks_use_router_event__WEBPACK_IMPORTED_MODULE_20__, _hooks_use_screen_media__WEBPACK_IMPORTED_MODULE_21__, _utils_client__WEBPACK_IMPORTED_MODULE_22__, _store__WEBPACK_IMPORTED_MODULE_25__, _utils_cookie__WEBPACK_IMPORTED_MODULE_26__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

// prettier-ignore-start









// prettier-ignore-end





















const version = `v${_package_json__WEBPACK_IMPORTED_MODULE_6__/* .version */ .i8}` || "";
if ((0,_utils_env__WEBPACK_IMPORTED_MODULE_27__/* .isServerSide */ .s$)()) {
    (react__WEBPACK_IMPORTED_MODULE_5___default().useLayoutEffect) = react__WEBPACK_IMPORTED_MODULE_5__.useEffect;
}
const Content = (0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__.observer)((props)=>{
    const { userStore: master  } = (0,_store__WEBPACK_IMPORTED_MODULE_25__/* .useStore */ .oR)();
    (0,_hooks_use_screen_media__WEBPACK_IMPORTED_MODULE_21__/* .useScreenMedia */ .p)();
    const { check: checkBrowser  } = (0,_hooks_use_check_old_browser__WEBPACK_IMPORTED_MODULE_17__/* .useCheckOldBrowser */ .k)();
    const { check: checkLogin  } = (0,_hooks_use_check_logged__WEBPACK_IMPORTED_MODULE_16__/* .useCheckLogged */ .y)();
    (0,_hooks_use_router_event__WEBPACK_IMPORTED_MODULE_20__/* .useRouterEvent */ .B)();
    (0,_hooks_use_resize_scroll_event__WEBPACK_IMPORTED_MODULE_19__/* .useResizeScrollEvent */ .S)();
    const initialData = (0,_hooks_use_initial_data__WEBPACK_IMPORTED_MODULE_18__/* .useInitialData */ .L6)();
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        (0,_utils_load_script__WEBPACK_IMPORTED_MODULE_24__/* .loadStyleSheet */ .Wx)("https://fonts.loli.net/css2?family=Noto+Sans+SC:wght@100;300;400;500&display=swap");
        try {
            const { user  } = initialData;
            // set user
            master.setUser(user);
            checkLogin();
            Promise.all(/* import() */[__webpack_require__.e(8825), __webpack_require__.e(1113), __webpack_require__.e(1211)]).then(__webpack_require__.bind(__webpack_require__, 81211)).then(({ socketClient  })=>{
                socketClient.initIO();
            });
        } finally{
            document.body.classList.remove("loading");
        }
        checkBrowser();
        (0,_utils_console__WEBPACK_IMPORTED_MODULE_23__/* .printToConsole */ .zC)();
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Meta_head__WEBPACK_IMPORTED_MODULE_12__/* .DynamicHeadMeta */ .x, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_seo__WEBPACK_IMPORTED_MODULE_2__.NextSeo, {
                title: `${initialData.seo.title} · ${initialData.seo.description}`,
                description: initialData.seo.description
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                id: "next",
                children: props.children
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Loader__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Meta_footer__WEBPACK_IMPORTED_MODULE_11__/* .MetaFooter */ .q, {})
        ]
    });
});
const App = (props)=>{
    const { initData , Component , pageProps  } = props;
    if (!initData) {
        return null;
    }
    const Inner = (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(()=>{
        // 兜底页
        return initData.aggregateData ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Wrapper, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                ...pageProps
            })
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Error_no_data__WEBPACK_IMPORTED_MODULE_9__/* .NoDataErrorView */ .C, {});
    }, [
        Component,
        initData.aggregateData,
        pageProps
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_context_root_store__WEBPACK_IMPORTED_MODULE_15__/* .RootStoreProvider */ .LD, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_context_initial_data__WEBPACK_IMPORTED_MODULE_14__/* .InitialContextProvider */ .S, {
            value: initData,
            children: Inner
        })
    });
};
const Wrapper = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_5__.memo)((props)=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    if (router.route.startsWith("/dev")) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layouts_DebugLayout__WEBPACK_IMPORTED_MODULE_8__/* .DebugLayout */ .V, {
            children: props.children
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layouts_BasicLayout__WEBPACK_IMPORTED_MODULE_7__/* .BasicLayout */ .i, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Content, {
            children: props.children
        })
    });
});
// @ts-ignore
App.getInitialProps = async (props)=>{
    const ctx = props.ctx;
    const request = ctx.req;
    if (request && (0,_utils_env__WEBPACK_IMPORTED_MODULE_27__/* .isServerSide */ .s$)()) {
        let ip = request.headers["x-forwarded-for"] || request.headers["X-Forwarded-For"] || request.headers["X-Real-IP"] || request.headers["x-real-ip"] || request.connection.remoteAddress || request.socket.remoteAddress || undefined;
        if (ip && ip.split(",").length > 0) {
            ip = ip.split(",")[0];
        }
        ip && (_utils_client__WEBPACK_IMPORTED_MODULE_22__/* .$axios.defaults.headers.common["x-forwarded-for"] */ .K.defaults.headers.common["x-forwarded-for"] = ip);
        _utils_client__WEBPACK_IMPORTED_MODULE_22__/* .$axios.defaults.headers.common["User-Agent"] */ .K.defaults.headers.common["User-Agent"] = `${request.headers["user-agent"]} NextJS/v${_package_json__WEBPACK_IMPORTED_MODULE_6__/* .dependencies.next */ .HO.lp} Kami/${version}`;
        // forward auth token
        const cookie = request.headers.cookie;
        if (cookie) {
            const token = cookie.split(";").find((str)=>{
                const [key] = str.split("=");
                return key === _utils_cookie__WEBPACK_IMPORTED_MODULE_26__/* .TokenKey */ .$;
            })?.split("=")[1];
            if (token) {
                _utils_client__WEBPACK_IMPORTED_MODULE_22__/* .$axios.defaults.headers.Authorization */ .K.defaults.headers.Authorization = `bearer ${token.replace(/^Bearer\s/i, "")}`;
            }
        // $axios.defaults.headers['cookie'] = cookie
        }
    }
    async function getInitialData() {
        const [aggregateDataState, configSnippetState] = await Promise.allSettled([
            _utils_client__WEBPACK_IMPORTED_MODULE_22__/* .apiClient.aggregate.getAggregateData */ .x.aggregate.getAggregateData(),
            _utils_client__WEBPACK_IMPORTED_MODULE_22__/* .apiClient.snippet.getByReferenceAndName */ .x.snippet.getByReferenceAndName("theme", "kami" || 0), 
        ]);
        let aggregateData = null;
        let configSnippet = null;
        let reason = null;
        if (aggregateDataState.status === "fulfilled") {
            aggregateData = aggregateDataState.value;
        } else {
            //  TODO 请求异常处理
            reason = aggregateDataState?.reason;
            console.error(`Fetch aggregate data error: ${aggregateDataState.reason}`);
        }
        if (configSnippetState.status === "fulfilled") {
            configSnippet = {
                ...configSnippetState.value
            };
        } else {
            configSnippet = _configs_default__WEBPACK_IMPORTED_MODULE_13__/* .defaultConfigs */ .s;
        }
        return {
            aggregateData,
            config: configSnippet,
            reason
        };
    }
    const initialData = globalThis.data ?? await getInitialData();
    const appProps = await (async ()=>{
        try {
            return await next_app__WEBPACK_IMPORTED_MODULE_3__["default"].getInitialProps(props);
        } catch (e) {
            // 只有无数据 也就是 服务端不跑起来 或者接口不对的时候 捕获异常
            // 这是为什么呢 说来说去还是 nextjs 太辣鸡了 只能各种 hack
            // 只能这样了
            if (!initialData.reason) {
                // 这里抛出，和官网直接 await getProps 一样，异常走到 _error 处理
                throw e;
            }
            // 这里捕获， 为了走全局无数据页
            if (ctx.res) {
                ctx.res.statusCode = 466;
                ctx.res.statusMessage = "No Data";
            }
            return null;
        }
    })();
    return {
        ...appProps,
        initData: initialData
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 93922:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ ImageSizeMetaContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const ImageSizeMetaContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(new Map());


/***/ }),

/***/ 46104:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ useCheckLogged)
/* harmony export */ });
/* harmony import */ var react_message_popup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15255);
/* harmony import */ var react_message_popup__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_message_popup__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38325);
/* harmony import */ var _utils_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9908);
/* harmony import */ var _utils_console__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47635);
/* harmony import */ var _utils_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57573);
/* harmony import */ var _use_initial_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(92644);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store__WEBPACK_IMPORTED_MODULE_1__, _utils_client__WEBPACK_IMPORTED_MODULE_2__, _utils_cookie__WEBPACK_IMPORTED_MODULE_4__]);
([_store__WEBPACK_IMPORTED_MODULE_1__, _utils_client__WEBPACK_IMPORTED_MODULE_2__, _utils_cookie__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const useCheckLogged = ()=>{
    const { userStore: master  } = (0,_store__WEBPACK_IMPORTED_MODULE_1__/* .useStore */ .oR)();
    const { function: { banDevtool: { enable: banDevtoolEnable  } ,  } ,  } = (0,_use_initial_data__WEBPACK_IMPORTED_MODULE_5__/* .useThemeConfig */ .LU)();
    return {
        check () {
            return requestAnimationFrame(()=>{
                const token = (0,_utils_cookie__WEBPACK_IMPORTED_MODULE_4__/* .getToken */ .LP)();
                if (token) {
                    _utils_client__WEBPACK_IMPORTED_MODULE_2__/* .apiClient.user.checkTokenValid */ .x.user.checkTokenValid(token).then(({ ok  })=>{
                        if (ok) {
                            master.setToken(token);
                            react_message_popup__WEBPACK_IMPORTED_MODULE_0__.message.success(`欢迎回来, ${master.name}`, 1500);
                        } else {
                            (0,_utils_cookie__WEBPACK_IMPORTED_MODULE_4__/* .removeToken */ .gy)();
                            react_message_popup__WEBPACK_IMPORTED_MODULE_0__.message.warn("\u767B\u5F55\u8EAB\u4EFD\u8FC7\u671F\u4E86, \u518D\u767B\u5F55\u4E00\u4E0B\u5427!", 2000);
                        }
                    }).catch(()=>{
                        (0,_utils_cookie__WEBPACK_IMPORTED_MODULE_4__/* .removeToken */ .gy)();
                        react_message_popup__WEBPACK_IMPORTED_MODULE_0__.message.warn("\u767B\u5F55\u8EAB\u4EFD\u8FC7\u671F\u4E86, \u518D\u767B\u5F55\u4E00\u4E0B\u5427!", 2000);
                    });
                } else {
                    if (banDevtoolEnable) {
                        (0,_utils_console__WEBPACK_IMPORTED_MODULE_3__/* .devtoolForbidden */ .H_)();
                    }
                }
            });
        }
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 46031:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ useCheckOldBrowser)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_message_popup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15255);
/* harmony import */ var react_message_popup__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_message_popup__WEBPACK_IMPORTED_MODULE_1__);


const useCheckOldBrowser = ()=>{
    const checkBrowser = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        const { isOld , msg: errMsg  } = checkOldBrowser();
        if (isOld) {
            const msg = "\u6B27\u5C3C\u9171, \u4E43\u7684\u6D4F\u89C8\u5668\u592A\u8001\u4E86, \u66F4\u65B0\u4E00\u4E0B\u5566\uFF08o\xb4\uFF9F\u25A1\uFF9F`o\uFF09";
            alert(msg);
            react_message_popup__WEBPACK_IMPORTED_MODULE_1__.message.warn(msg, Infinity);
            class BrowserTooOldError extends Error {
                constructor(){
                    super(errMsg);
                }
            }
            throw new BrowserTooOldError();
        }
    }, []);
    return {
        check: checkBrowser
    };
};
function checkOldBrowser() {
    const ua = window.navigator.userAgent;
    const isIE = function() {
        const msie = ua.indexOf("MSIE") // IE 10 or older
        ;
        const trident = ua.indexOf("Trident/") // IE 11
        ;
        return msie > 0 || trident > 0;
    }();
    const isOld = (()=>{
        if (isIE) {
            alert("\u6B27\u5C3C\u9171, \u4E43\u771F\u7684\u8981\u4F7F\u7528 IE \u6D4F\u89C8\u5668\u5417, \u4E0D\u5982\u6362\u4E2A Chrome \u597D\u4E0D\u597D\u561B\uFF08o\xb4\uFF9F\u25A1\uFF9F`o\uFF09");
            location.href = "https://www.google.cn/chrome/";
            return true;
        }
        // check build-in methods
        const ObjectMethods = [
            "fromEntries",
            "entries"
        ];
        const ArrayMethods = [
            "flat"
        ];
        if (!window.Reflect || !(ObjectMethods.every((m)=>Reflect.has(Object, m)
        ) && ArrayMethods.every((m)=>Reflect.has(Array.prototype, m)
        )) || !window.requestAnimationFrame || !window.Proxy || !window.IntersectionObserver || !window.ResizeObserver || !window.Intl || typeof globalThis === "undefined" || typeof Set === "undefined" || typeof Map === "undefined") {
            return true;
        }
        return false;
    })();
    if (isOld) {
        window.alert("\u6B27\u5C3C\u9171, \u4E43\u7684\u6D4F\u89C8\u5668\u592A\u8001\u4E86, \u66F4\u65B0\u4E00\u4E0B\u5566\uFF08o\xb4\uFF9F\u25A1\uFF9F`o\uFF09");
        return {
            isOld: true,
            msg: `User browser is too old. UA: ${ua}`
        };
    }
    return {
        isOld: false,
        msg: ""
    };
}


/***/ }),

/***/ 80938:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ useMediaToggle)
/* harmony export */ });
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36211);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38325);
/* harmony import */ var _utils_env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55812);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store__WEBPACK_IMPORTED_MODULE_2__]);
_store__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const useDarkMode = (initialState, options)=>{
    const { classNameDark ="dark" , classNameLight ="light" , storageKey , element ,  } = options;
    const { 0: darkMode , 1: setDarkMode  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialState);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const presentedDarkMode = storageKey ? (0,_utils_env__WEBPACK_IMPORTED_MODULE_3__/* .isServerSide */ .s$)() ? null : localStorage.getItem(storageKey) : null;
        if (presentedDarkMode !== null) {
            if (presentedDarkMode === "true") {
                setDarkMode(true);
            } else if (presentedDarkMode === "false") {
                setDarkMode(false);
            }
        } else if (typeof initialState === "undefined") {
            setDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
        }
    }, [
        storageKey
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const handler = (e)=>{
            const storageValue = localStorage.getItem(storageKey || "darkMode");
            if (storageValue === null) {
                setDarkMode(e.matches);
            }
        };
        const focusHandler = ()=>{
            const storageValue = localStorage.getItem(storageKey || "darkMode");
            if (storageValue === null) {
                setDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
            }
        };
        window.addEventListener("focus", focusHandler);
        window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", handler);
        return ()=>{
            window.removeEventListener("focus", focusHandler);
            window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", handler);
        };
    }, [
        storageKey
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if ((0,_utils_env__WEBPACK_IMPORTED_MODULE_3__/* .isServerSide */ .s$)()) {
            return;
        }
        const $el = element || document.documentElement;
        if (darkMode) {
            $el.classList.remove(classNameLight);
            $el.classList.add(classNameDark);
        } else {
            $el.classList.remove(classNameDark);
            $el.classList.add(classNameLight);
        }
    }, [
        classNameDark,
        classNameLight,
        darkMode,
        element
    ]);
    if ((0,_utils_env__WEBPACK_IMPORTED_MODULE_3__/* .isServerSide */ .s$)()) {
        return {
            toggle: ()=>{},
            value: false
        };
    }
    return {
        value: darkMode,
        toggle: ()=>{
            setDarkMode((d)=>{
                if (storageKey && !(0,_utils_env__WEBPACK_IMPORTED_MODULE_3__/* .isServerSide */ .s$)()) {
                    localStorage.setItem(storageKey, String(!d));
                }
                return !d;
            });
        }
    };
};
const noop = ()=>{};
const mockElement = {
    classList: {
        add: noop,
        remove: noop
    }
};
const darkModeKey = "darkMode";
const useMediaToggle = ()=>{
    const { appStore: app  } = (0,_store__WEBPACK_IMPORTED_MODULE_2__/* .useStore */ .oR)();
    const { toggle , value  } = useDarkMode(undefined, {
        classNameDark: "dark",
        classNameLight: "light",
        storageKey: darkModeKey,
        element: globalThis.document && document.documentElement || mockElement
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        (0,mobx__WEBPACK_IMPORTED_MODULE_0__.runInAction)(()=>{
            app.colorMode = value ? "dark" : "light";
        });
    }, [
        value
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const handler = ()=>{
            if (window.matchMedia("(prefers-color-scheme: dark)").matches === value) {
                localStorage.removeItem(darkModeKey);
            }
        };
        window.addEventListener("beforeunload", handler);
        return ()=>{
            window.removeEventListener("beforeunload", handler);
        };
    }, [
        value
    ]);
    return {
        toggle,
        value
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 88120:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ useResizeScrollEvent)
/* harmony export */ });
/* harmony import */ var lodash_es_debounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48831);
/* harmony import */ var lodash_es_throttle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20057);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38325);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store__WEBPACK_IMPORTED_MODULE_1__]);
_store__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const useResizeScrollEvent = ()=>{
    const _currentY = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);
    const { appStore: app  } = (0,_store__WEBPACK_IMPORTED_MODULE_1__/* .useStore */ .oR)();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const handleScroll = (0,lodash_es_throttle__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(()=>{
            const currentY = document.documentElement.scrollTop;
            const direction = _currentY.current > currentY ? "up" : "down";
            app.updatePosition(direction);
            _currentY.current = currentY;
        }, 50, {
            leading: false
        });
        const resizeHandler = (0,lodash_es_debounce__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(()=>{
            app.updateViewport();
        }, 500, {
            leading: true
        });
        window.onresize = resizeHandler;
        app.updateViewport();
        if (typeof document !== "undefined") {
            document.addEventListener("scroll", handleScroll);
        }
        return ()=>{
            window.onresize = null;
            document.removeEventListener("scroll", handleScroll);
        };
    }, []);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 48899:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ useRouterEvent)
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_env__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55812);
/* harmony import */ var _third_qp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63734);
/* harmony import */ var _use_analyze__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74321);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_use_analyze__WEBPACK_IMPORTED_MODULE_3__]);
_use_analyze__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const useRouterEvent = ()=>{
    const { pageview  } = (0,_use_analyze__WEBPACK_IMPORTED_MODULE_3__/* .useAnalyze */ .e)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if ((0,_utils_env__WEBPACK_IMPORTED_MODULE_4__/* .isServerSide */ .s$)()) {
            return;
        }
        const Progress = new _third_qp__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z({
            colorful: false,
            color: "#27ae60"
        });
        if ((0,_utils_env__WEBPACK_IMPORTED_MODULE_4__/* .isClientSide */ .S_)()) {
            window.process = Progress;
        }
        next_router__WEBPACK_IMPORTED_MODULE_0__.Router.events.on("routeChangeStart", ()=>{
            Progress.start();
            history.backPath = history.backPath ? [
                ...history.backPath,
                history.state.as
            ] : [
                history.state.as
            ];
        });
        next_router__WEBPACK_IMPORTED_MODULE_0__.Router.events.on("routeChangeComplete", ()=>{
            Progress.finish();
        });
        next_router__WEBPACK_IMPORTED_MODULE_0__.Router.events.on("routeChangeError", ()=>{
            history.backPath?.pop();
            Progress.finish();
        });
        next_router__WEBPACK_IMPORTED_MODULE_0__.Router.events.on("routeChangeComplete", (url)=>pageview(url)
        );
    }, []);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 54244:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ useScreenMedia)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38325);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store__WEBPACK_IMPORTED_MODULE_1__]);
_store__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const useScreenMedia = ()=>{
    const { appStore: app  } = (0,_store__WEBPACK_IMPORTED_MODULE_1__/* .useStore */ .oR)();
    // initMediaListener
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const getMediaType = (e)=>{
            app.mediaType = e.matches ? "screen" : "print";
            return app.mediaType;
        };
        getMediaType(window.matchMedia("screen"));
        const callback = (e)=>{
            getMediaType(e);
        };
        try {
            window.matchMedia("screen").addEventListener("change", callback);
        // eslint-disable-next-line no-empty
        } catch  {}
        return ()=>{
            window.matchMedia("screen").removeEventListener("change", callback);
        };
    }, []);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 63734:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ qp)
});

;// CONCATENATED MODULE: ./third/qp/helpers.ts
/**
 * Take the middle value from three numbers.
 */ function middleNum(n, min, max) {
    if (n < min) return min;
    if (n > max) return max;
    return n;
}
/**
 * Adds a class to an element.
 */ function addClass(element, name) {
    const oldList = classList(element);
    const newList = oldList + name;
    if (hasClass(oldList, name)) return;
    // Trim the opening space because of <function>classList.
    element.className = newList.substring(1);
}
/**
 * Gets a space separated list of the class names on the element.
 * The list is wrapped with a single space on each end to facilitate finding
 * matches within the list.
 */ function classList(element) {
    return ` ${element && element.className || ""} `.replace(/\s+/gi, " ");
}
/**
 * Determines if an element or space separated list of class names contains a class name.
 */ function hasClass(list, name) {
    return list.indexOf(` ${name} `) >= 0;
}
/**
 * Converts a percentage (`0..1`) to a bar translateX
 * percentage (`-100%..0%`).
 */ function toBarPerc(n) {
    return String((-1 + n) * 100);
}
/**
 * Applies css properties to an element, similar to the jQuery
 * css method.
 *
 * While this helper does assist with vendor prefixed property names, it
 * does not perform any manipulation of values prior to setting styles.
 */ const css = function() {
    const cssPrefixes = [
        "Webkit",
        "O",
        "Moz",
        "ms"
    ];
    const cssProps = {};
    function camelCase(str) {
        return str.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, (match, letter)=>{
            return letter.toUpperCase();
        });
    }
    function getVendorProp(name) {
        const style = document.body.style;
        if (name in style) return name;
        let i = cssPrefixes.length;
        const capName = name.charAt(0).toUpperCase() + name.slice(1);
        let vendorName;
        while(i--){
            vendorName = cssPrefixes[i] + capName;
            if (vendorName in style) return vendorName;
        }
        return name;
    }
    function getStyleProp(name) {
        name = camelCase(name);
        return cssProps[name] || (cssProps[name] = getVendorProp(name));
    }
    function applyCss(element, prop, value) {
        prop = getStyleProp(prop);
        element.style[prop] = value;
    }
    return function(element, properties) {
        // eslint-disable-next-line prefer-rest-params
        const args = arguments;
        let prop;
        let value;
        if (args.length === 2) {
            for(prop in properties){
                value = properties[prop];
                // eslint-disable-next-line no-prototype-builtins
                if (properties.hasOwnProperty(prop)) applyCss(element, prop, value);
            }
        } else {
            applyCss(element, args[1], args[2]);
        }
    };
}();
/**
 * Queues a function to be executed.
 */ const queue = function() {
    const pending = [];
    function next() {
        const fn = pending.shift();
        if (fn) {
            fn(next);
        }
    }
    return function(fn) {
        pending.push(fn);
        if (pending.length === 1) next();
    };
}();
/**
 * Determine which positioning CSS rule to use.
 */ function getPositioningCSS() {
    // Sniff on document.body.style
    const bodyStyle = document.body.style;
    // Sniff prefixes
    const vendorPrefix = "webkitTransform" in bodyStyle ? "webkit" : "mozTransform" in bodyStyle ? "moz" : "msTransform" in bodyStyle ? "ms" : "oTransform" in bodyStyle ? "o" : "";
    if (`${vendorPrefix}Perspective` in bodyStyle) {
        // Modern browsers with 3D support, e.g. Webkit, IE10
        return "translate3d";
    } else if (`${vendorPrefix}Transform` in bodyStyle) {
        // Browsers without 3D support, e.g. IE9
        return "translate";
    } else {
        // Browsers without translate() support, e.g. IE7-8
        return "margin";
    }
}
/**
 * Returns the correct CSS for changing the bar's
 * position given an n percentage, and speed and ease from Settings
 */ function barPositionCSS(n, speed, ease, position) {
    let barCSS;
    if (position === "translate3d") {
        barCSS = {
            transform: `translate3d(${toBarPerc(n)}%, 0, 0)`
        };
    } else if (position === "translate") {
        barCSS = {
            transform: `translate(${toBarPerc(n)}%, 0)`
        };
    } else {
        barCSS = {
            "margin-left": `${toBarPerc(n)}%`
        };
    }
    barCSS.transition = `all ${speed}ms ${ease}`;
    return barCSS;
}
/**
 * Removes the element. Opposite of render().
 */ function remove(parent) {
    removeClass(document.documentElement, "qprogress-busy");
    if (typeof parent === "string" && parent.length !== 0) {
        removeClass(document.querySelector(parent), "qprogress-custom-parent");
    } else {
        removeClass(parent, "qprogress-custom-parent");
    }
    const progress = document.getElementById("qprogress");
    progress && removeElement(progress);
}
/**
 * Removes a class from an element.
 */ function removeClass(element, name) {
    const oldList = classList(element);
    let newList = "";
    if (!hasClass(oldList, name)) return;
    // Replace the class name.
    newList = oldList.replace(` ${name} `, " ");
    // Trim the opening and closing spaces.
    element.className = newList.substring(1, newList.length - 1);
}
/**
 * Removes an element from the DOM.
 */ function removeElement(element) {
    element && element.parentNode && element.parentNode.removeChild(element);
}

;// CONCATENATED MODULE: ./third/qp/index.ts
/**
 *  Author： vortesnail
 *  License： MIT
 *  Github： https://github.com/vortesnail
 */ 
/********************************************************
 *  Usage:                                              *
 *    const qprogress = new QProgress({ minimum: 0.1 }) *
 *    qprogress.start()                                 *
 *    // some code...                                   *
 *    qprogress.finish()                                *
 ********************************************************/ class QProgress {
    // Configuration
    config;
    // Last number
    status = null;
    constructor(config){
        this.config = {
            minimum: 0.12,
            height: 2,
            color: "#1890ff",
            colorful: true,
            easing: "ease",
            speed: 400,
            positionUsing: "",
            trickle: true,
            trickleSpeed: 400,
            parentNode: "body",
            barSelector: '[role="bar"]',
            pegSelector: '[role="peg"]',
            template: '<div class="bar" role="bar"><div class="peg" role="peg"></div></div>',
            ...config
        };
    }
    /**
   * Sets the progress bar status, where `n` is a number from `0.0` to `1.0`.
   *
   *     qprogress.set(0.4)
   *     qprogress.set(1.0)
   */ set(n) {
        const started = this.isStarted();
        n = middleNum(n, this.config.minimum, 1);
        this.status = n === 1 ? null : n;
        const { barSelector , speed: speedCopy , easing , parentNode  } = this.config;
        let { positionUsing  } = this.config;
        const progress = this.render(!started);
        const bar = progress.querySelector(barSelector);
        const speed = speedCopy;
        const ease = easing;
        void progress.offsetWidth /* Compulsory repainting */ ;
        queue((next)=>{
            // Set positionUsing if it hasn't already been set
            if (positionUsing === "") positionUsing = getPositioningCSS();
            // Add transition
            css(bar, barPositionCSS(n, speed, ease, positionUsing));
            if (n === 1) {
                // Fade out
                css(progress, {
                    transition: "none",
                    opacity: 1
                });
                void progress.offsetWidth /* Compulsory repainting */ ;
                setTimeout(()=>{
                    css(progress, {
                        transition: `all ${speed}ms linear`,
                        opacity: 0
                    });
                    setTimeout(()=>{
                        remove(parentNode);
                        next();
                    }, speed);
                }, speed);
            } else {
                setTimeout(next, speed);
            }
        });
    }
    /**
   * Checks if the progress is started, `0.0` to `1.0`: `true`, `null`: `false` .
   */ isStarted() {
        return typeof this.status === "number";
    }
    /**
   * Shows the progress bar.
   * This is the same as setting the status to 0%, except that it doesn't go backwards.
   *
   *     qprogress.start()
   *
   */ start() {
        const { trickle , trickleSpeed  } = this.config;
        if (!this.status) this.set(0);
        const work = ()=>{
            setTimeout(()=>{
                if (!this.status) return;
                this.trickle();
                work();
            }, trickleSpeed);
        };
        if (trickle) work();
    }
    /**
   * Hides the progress bar.
   * This is the *sort of* the same as setting the status to 100%, with the
   * difference being `finish()` makes some placebo effect of some realistic motion.
   *
   *     qprogress.finish()
   *
   * If `true` is passed, it will show the progress bar even if its hidden.
   *
   *     qprogress.finish(true)
   */ finish(force) {
        if (!force && !this.status) return;
        this.inc(0.3 + 0.5 * Math.random());
        this.set(1);
    }
    trickle() {
        this.inc();
    }
    /**
   * Increments by a random amount.
   */ inc(amount) {
        let n = this.status;
        if (!n) {
            return this.start();
        } else if (n > 1) {
            return;
        } else {
            if (typeof amount !== "number") {
                if (n >= 0 && n < 0.2) {
                    amount = 0.1;
                } else if (n >= 0.2 && n < 0.5) {
                    amount = 0.04;
                } else if (n >= 0.5 && n < 0.8) {
                    amount = 0.02;
                } else if (n >= 0.8 && n < 0.99) {
                    amount = 0.005;
                } else {
                    amount = 0;
                }
            }
            n = middleNum(n + amount, 0, 0.994);
            return this.set(n);
        }
    }
    /**
   * Checks if the progress bar is rendered.
   */ isRendered() {
        return !!document.getElementById("qprogress");
    }
    /**
   * renders the progress bar markup based on the `template` setting.
   */ render(fromStart) {
        if (this.isRendered()) return document.getElementById("qprogress");
        addClass(document.documentElement, "qprogress-busy");
        const { template , barSelector , pegSelector , parentNode , height , color , colorful ,  } = this.config;
        const progress = document.createElement("div");
        progress.id = "qprogress";
        progress.innerHTML = template;
        const bar = progress.querySelector(barSelector);
        const peg = bar.querySelector(pegSelector);
        const perc = fromStart ? "-100" : toBarPerc(this.status || 0);
        const parent = typeof parentNode === "string" ? document.querySelector(parentNode) : parentNode;
        css(bar, {
            height: `${height}px`,
            backgroundColor: color,
            transition: "all 0 steps(30)",
            transform: `translate3d(${perc}%, 0, 0)`
        });
        if (!colorful) {
            css(peg, {
                boxShadow: `0 0 10px ${color}, 0 0 5px ${color}`
            });
        } else {
            bar && addClass(bar, "colorful-bar");
        }
        if (parent !== document.body) {
            addClass(parent, "qprogress-custom-parent");
        }
        parent.appendChild(progress);
        return progress;
    }
}
/* harmony default export */ const qp = (QProgress);


/***/ }),

/***/ 52167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 33104:
/***/ ((module) => {

module.exports = require("camelcase-keys");

/***/ }),

/***/ 68103:
/***/ ((module) => {

module.exports = require("clsx");

/***/ }),

/***/ 71705:
/***/ ((module) => {

module.exports = require("css-spring");

/***/ }),

/***/ 1635:
/***/ ((module) => {

module.exports = require("dayjs");

/***/ }),

/***/ 95468:
/***/ ((module) => {

module.exports = require("dayjs/locale/zh-cn");

/***/ }),

/***/ 84125:
/***/ ((module) => {

module.exports = require("dayjs/plugin/customParseFormat");

/***/ }),

/***/ 67424:
/***/ ((module) => {

module.exports = require("dayjs/plugin/localizedFormat");

/***/ }),

/***/ 43491:
/***/ ((module) => {

module.exports = require("devtools-detector");

/***/ }),

/***/ 36211:
/***/ ((module) => {

module.exports = require("mobx");

/***/ }),

/***/ 45944:
/***/ ((module) => {

module.exports = require("mobx-react-lite");

/***/ }),

/***/ 16641:
/***/ ((module) => {

module.exports = require("next-seo");

/***/ }),

/***/ 92796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 34014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 78524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 95832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 78020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 64406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 24964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 23938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 29565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 64365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 91292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 80979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 36052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 84226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 95052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 59232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 40968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 71853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 30503:
/***/ ((module) => {

module.exports = require("randomcolor");

/***/ }),

/***/ 16689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 66405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 19785:
/***/ ((module) => {

module.exports = require("react-intersection-observer");

/***/ }),

/***/ 15255:
/***/ ((module) => {

module.exports = require("react-message-popup");

/***/ }),

/***/ 35011:
/***/ ((module) => {

module.exports = require("react-shortcut-guide");

/***/ }),

/***/ 84466:
/***/ ((module) => {

module.exports = require("react-transition-group");

/***/ }),

/***/ 69755:
/***/ ((module) => {

module.exports = require("react-use");

/***/ }),

/***/ 20997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 4579:
/***/ ((module) => {

module.exports = require("remove-markdown");

/***/ }),

/***/ 6470:
/***/ ((module) => {

module.exports = import("@floating-ui/react-dom");;

/***/ }),

/***/ 69915:
/***/ ((module) => {

module.exports = import("js-cookie");;

/***/ }),

/***/ 80352:
/***/ ((module) => {

module.exports = import("lodash-es");;

/***/ }),

/***/ 3590:
/***/ ((module) => {

module.exports = import("react-toastify");;

/***/ }),

/***/ 14612:
/***/ ((module) => {

module.exports = import("socket.io-client");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4225,8034,8106,1614,3161,9908,2672,4302,3529,558], () => (__webpack_exec__(29828)));
module.exports = __webpack_exports__;

})();