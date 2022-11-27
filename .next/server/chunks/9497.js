exports.id = 9497;
exports.ids = [9497,871];
exports.modules = {

/***/ 6202:
/***/ ((module) => {

// Exports
module.exports = {
	"message-btn": "actions_message-btn__y31tx",
	"count": "actions_count__D8BNG",
	"fade-small-large": "actions_fade-small-large__eEuaQ",
	"action": "actions_action__gPY2_",
	"top": "actions_top__8PWJu",
	"active": "actions_active__042p1",
	"hidden": "actions_hidden__458DS"
};


/***/ }),

/***/ 9984:
/***/ ((module) => {

// Exports
module.exports = {
	"footer": "Footer_footer__Fg026",
	"wrap": "Footer_wrap__7mHa5"
};


/***/ }),

/***/ 2763:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ FooterActions)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6211);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5944);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_shortcut_guide__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5011);
/* harmony import */ var react_shortcut_guide__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_shortcut_guide__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4466);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_transition_group__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_universal_Icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8337);
/* harmony import */ var _components_universal_Portal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3681);
/* harmony import */ var _components_universal_Transition_scale__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6331);
/* harmony import */ var _constants_tracker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8277);
/* harmony import */ var _hooks_use_analyze__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8461);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3531);
/* harmony import */ var _utils_spring__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7427);
/* harmony import */ var _actions_module_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6202);
/* harmony import */ var _actions_module_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_actions_module_css__WEBPACK_IMPORTED_MODULE_14__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_universal_Portal__WEBPACK_IMPORTED_MODULE_8__, _hooks_use_analyze__WEBPACK_IMPORTED_MODULE_11__, _store__WEBPACK_IMPORTED_MODULE_12__]);
([_components_universal_Portal__WEBPACK_IMPORTED_MODULE_8__, _hooks_use_analyze__WEBPACK_IMPORTED_MODULE_11__, _store__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















const timeout = {
    exit: 300
};
const FooterActions = (0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__.observer)(()=>{
    const { appStore , actionStore , musicStore  } = (0,_store__WEBPACK_IMPORTED_MODULE_12__/* .useStore */ .oR)();
    const { isOverFirstScreenHeight: isOverflow , isPadOrMobile , scrollDirection ,  } = appStore;
    const shouldHideActionButtons = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(()=>{
        if (!isPadOrMobile) {
            return false;
        }
        return isOverflow && scrollDirection == "down";
    }, [
        isOverflow,
        isPadOrMobile,
        scrollDirection
    ]);
    const { event  } = (0,_hooks_use_analyze__WEBPACK_IMPORTED_MODULE_11__/* .useAnalyze */ .e)();
    const toTop = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(()=>{
        (0,_utils_spring__WEBPACK_IMPORTED_MODULE_13__/* .springScrollToTop */ .YG)();
        event({
            action: _constants_tracker__WEBPACK_IMPORTED_MODULE_10__/* .TrackerAction.Click */ .b.Click,
            label: "\u5E95\u90E8\u70B9\u51FB\u56DE\u5230\u9876\u90E8"
        });
    }, []);
    const handlePlayMusic = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(()=>{
        event({
            action: _constants_tracker__WEBPACK_IMPORTED_MODULE_10__/* .TrackerAction.Click */ .b.Click,
            label: `底部播放器点击`
        });
        (0,mobx__WEBPACK_IMPORTED_MODULE_2__.runInAction)(()=>{
            musicStore.setHide(!musicStore.isHide);
            musicStore.setPlay(!musicStore.isHide);
        });
    }, []);
    (0,react_shortcut_guide__WEBPACK_IMPORTED_MODULE_5__.useShortcut)("P", [
        react_shortcut_guide__WEBPACK_IMPORTED_MODULE_5__.Modifier.Command,
        react_shortcut_guide__WEBPACK_IMPORTED_MODULE_5__.Modifier.Shift
    ], handlePlayMusic, "\u64AD\u653E\u97F3\u4E50");
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Portal__WEBPACK_IMPORTED_MODULE_8__/* .RootPortal */ .K, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: clsx__WEBPACK_IMPORTED_MODULE_1___default()((_actions_module_css__WEBPACK_IMPORTED_MODULE_14___default().action), shouldHideActionButtons && (_actions_module_css__WEBPACK_IMPORTED_MODULE_14___default().hidden)),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    "aria-label": "to top",
                    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()((_actions_module_css__WEBPACK_IMPORTED_MODULE_14___default().top), isOverflow ? (_actions_module_css__WEBPACK_IMPORTED_MODULE_14___default().active) : ""),
                    onClick: toTop,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Icons__WEBPACK_IMPORTED_MODULE_7__/* .BxBxsArrowToTop */ .lR, {})
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_6__.TransitionGroup, {
                    children: actionStore.actions.map((action, i)=>{
                        const El = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            "aria-label": "footer action button",
                            onClick: action.onClick,
                            children: action.icon
                        });
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Transition_scale__WEBPACK_IMPORTED_MODULE_9__/* .ScaleTransitionView */ .r, {
                            unmountOnExit: true,
                            timeout: timeout,
                            children: El
                        }, i);
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    "aria-label": "open player",
                    onClick: handlePlayMusic,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Icons__WEBPACK_IMPORTED_MODULE_7__/* .FaSolidHeadphonesAlt */ .Se, {})
                })
            ]
        })
    });
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3241:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Footer": () => (/* binding */ Footer),
/* harmony export */   "FooterContent": () => (/* binding */ FooterContent)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5944);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(553);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4147);
/* harmony import */ var _components_universal_ImpressionView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2492);
/* harmony import */ var _constants_tracker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8277);
/* harmony import */ var _hooks_use_analyze__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8461);
/* harmony import */ var _hooks_use_initial_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3086);
/* harmony import */ var _hooks_use_theme_background__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3457);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2649);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3531);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2763);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9984);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_13__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_universal_ImpressionView__WEBPACK_IMPORTED_MODULE_5__, _hooks_use_analyze__WEBPACK_IMPORTED_MODULE_7__, _hooks_use_theme_background__WEBPACK_IMPORTED_MODULE_9__, _utils__WEBPACK_IMPORTED_MODULE_10__, _store__WEBPACK_IMPORTED_MODULE_11__, _actions__WEBPACK_IMPORTED_MODULE_12__]);
([_components_universal_ImpressionView__WEBPACK_IMPORTED_MODULE_5__, _hooks_use_analyze__WEBPACK_IMPORTED_MODULE_7__, _hooks_use_theme_background__WEBPACK_IMPORTED_MODULE_9__, _utils__WEBPACK_IMPORTED_MODULE_10__, _store__WEBPACK_IMPORTED_MODULE_11__, _actions__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














const version = _package_json__WEBPACK_IMPORTED_MODULE_4__/* .version */ .i8;
const FooterContainer = (props)=>{
    (0,_hooks_use_theme_background__WEBPACK_IMPORTED_MODULE_9__/* .useFooterBackground */ .YB)((_index_module_css__WEBPACK_IMPORTED_MODULE_13___default().footer));
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_13___default().footer),
        id: "app-footer",
        children: props.children
    });
};
const _Footer = (0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__.observer)(()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(FooterContainer, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FooterContent, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_actions__WEBPACK_IMPORTED_MODULE_12__/* .FooterActions */ .p, {})
        ]
    });
});
const FooterContent = (0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__.observer)(()=>{
    const { gatewayStore  } = (0,_store__WEBPACK_IMPORTED_MODULE_11__/* .useStore */ .oR)();
    const thisYear = new Date().getFullYear();
    const initialData = (0,_hooks_use_initial_data__WEBPACK_IMPORTED_MODULE_8__/* .useInitialData */ .L6)();
    const name = initialData.user.name;
    const kamiConfig = (0,_hooks_use_initial_data__WEBPACK_IMPORTED_MODULE_8__/* .useThemeConfig */ .LU)();
    const motto = kamiConfig.site.footer.motto;
    const icp = kamiConfig.site.footer.icp;
    const navigation = kamiConfig.site.footer.navigation;
    const { event  } = (0,_hooks_use_analyze__WEBPACK_IMPORTED_MODULE_7__/* .useAnalyze */ .e)();
    const trackerToGithub = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(()=>{
        event({
            action: _constants_tracker__WEBPACK_IMPORTED_MODULE_6__/* .TrackerAction.Click */ .b.Click,
            label: "\u5E95\u90E8\u70B9\u51FB\u53BB Github"
        });
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_13___default().wrap),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "left to-center",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        children: [
                            "\xa9 ",
                            thisYear !== 2020 && "2020-",
                            thisYear,
                            " ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: kamiConfig.site.footer.homePage ?? "#",
                                target: "_blank",
                                children: name
                            }),
                            ".",
                            " ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                title: `${motto.content} -- ${motto.author}`,
                                children: motto.content
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_ImpressionView__WEBPACK_IMPORTED_MODULE_5__/* .ImpressionView */ .X, {
                        trackerMessage: "\u5E95\u90E8\u66DD\u5149",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            className: "justify-center flex space-x-2 children:flex-shrink-0 flex-wrap",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: "Powered by "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: "https://github.com/mx-space",
                                    onClick: trackerToGithub,
                                    children: "mx-space"
                                }),
                                ".",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: "https://github.com/mx-space/kami",
                                    onClick: trackerToGithub,
                                    title: version,
                                    children: "Kami"
                                }),
                                ".",
                                icp.enable && !!icp.label && !!icp.link && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "text-center inline-block",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: icp.link,
                                        target: "_blank",
                                        rel: "noreferrer",
                                        children: icp.label
                                    })
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "right to-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "phone:mr-0 mr-12",
                        children: navigation.map((nav, i)=>{
                            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        href: nav.path,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            target: nav.newtab ? "_blank" : undefined,
                                            children: nav.name
                                        })
                                    }),
                                    i === navigation.length - 1 ? "" : " \xb7 "
                                ]
                            }, nav.name);
                        })
                    }),
                    (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            className: "mr-12 phone:mr-0",
                            children: [
                                gatewayStore.online || 1,
                                " \u4E2A\u5C0F\u4F19\u4F34\u6B63\u5728\u6D4F\u89C8"
                            ]
                        })
                    , [
                        gatewayStore.online
                    ])
                ]
            })
        ]
    });
});
const Footer = (0,_utils__WEBPACK_IMPORTED_MODULE_10__/* .NoSSR */ .ri)(_Footer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3681:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ RootPortal)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6405);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_use_is_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7866);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_use_is_client__WEBPACK_IMPORTED_MODULE_2__]);
_hooks_use_is_client__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const RootPortal = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.memo)((props)=>{
    const isClient = (0,_hooks_use_is_client__WEBPACK_IMPORTED_MODULE_2__/* .useIsClient */ .O)();
    if (!isClient) {
        return null;
    }
    return /*#__PURE__*/ (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)(props.children, document.body);
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 871:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 6331:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ ScaleTransitionView)
/* harmony export */ });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(871);

const defaultStyle = {
    transition: `transform 500ms ease`,
    transform: `scale(0)`
};
const transitionStyles = {
    entering: {
        transform: `scale(0)`
    },
    entered: {
        transform: `scale(1)`
    },
    exiting: {
        transform: `scale(0)`
    },
    exited: {
        transform: `scale(0)`
    }
};
const ScaleTransitionView = (0,_base__WEBPACK_IMPORTED_MODULE_0__/* .BaseTransitionView */ .I)(defaultStyle, transitionStyles);


/***/ }),

/***/ 7866:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ useIsClient)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2649);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils__WEBPACK_IMPORTED_MODULE_1__]);
_utils__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const useIsClient = ()=>{
    const { 0: isClient , 1: setIsClient  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .isClientSide */ .S_)());
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        setIsClient(true);
    }, []);
    return isClient;
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;