exports.id = 2263;
exports.ids = [2263,2476];
exports.modules = {

/***/ 45401:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "Header_header__XfmU_",
	"head-swiper": "Header_head-swiper__zNb6E",
	"head-info": "Header_head-info__iqw3V",
	"title": "Header_title__JrcMn",
	"more-button": "Header_more-button__fkEAZ",
	"header-logo": "Header_header-logo__z0LTQ",
	"link-group": "Header_link-group__tG2mI",
	"anchor-ball": "Header_anchor-ball__NyiZ0",
	"link-item": "Header_link-item__SOaek",
	"link-title": "Header_link-title__P_jP5",
	"drawer": "Header_drawer__PAfpA",
	"show": "Header_show__jctie",
	"parent": "Header_parent__IvDb5",
	"children": "Header_children__9LP8D",
	"children-wrapper": "Header_children-wrapper__GzzBo",
	"link-section": "Header_link-section__vEE9J",
	"hide": "Header_hide__pIzf7",
	"nav-container": "Header_nav-container__Cjlmo",
	"toggle": "Header_toggle__OMzEx",
	"desc": "Header_desc__fABFH",
	"swipe-up": "Header_swipe-up__d4_RA",
	"meta": "Header_meta__klVih",
	"site-info": "Header_site-info__6GDDY",
	"swiper-metawrapper": "Header_swiper-metawrapper__hRgVd",
	"sub-dropdown": "Header_sub-dropdown__CHEwP",
	"right-wrapper": "Header_right-wrapper__MDkXP",
	"like-button": "Header_like-button__3azlZ"
};


/***/ }),

/***/ 89547:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45944);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_universal_Icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10298);
/* harmony import */ var _components_universal_Logo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(82612);
/* harmony import */ var _constants_tracker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(10609);
/* harmony import */ var _hooks_use_analyze__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(74321);
/* harmony import */ var _hooks_use_initial_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(92644);
/* harmony import */ var _hooks_use_is_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(10861);
/* harmony import */ var _hooks_use_single_double_click__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(33628);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(38325);
/* harmony import */ var _HeaderActionBasedOnRouterPath__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(70257);
/* harmony import */ var _HeaderDrawer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(61241);
/* harmony import */ var _HeaderDrawerNavigation__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2159);
/* harmony import */ var _HeaderMenuList__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(1712);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(45401);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_17__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_use_analyze__WEBPACK_IMPORTED_MODULE_8__, _hooks_use_is_client__WEBPACK_IMPORTED_MODULE_10__, _store__WEBPACK_IMPORTED_MODULE_12__, _HeaderActionBasedOnRouterPath__WEBPACK_IMPORTED_MODULE_13__, _HeaderDrawer__WEBPACK_IMPORTED_MODULE_14__, _HeaderDrawerNavigation__WEBPACK_IMPORTED_MODULE_15__, _HeaderMenuList__WEBPACK_IMPORTED_MODULE_16__]);
([_hooks_use_analyze__WEBPACK_IMPORTED_MODULE_8__, _hooks_use_is_client__WEBPACK_IMPORTED_MODULE_10__, _store__WEBPACK_IMPORTED_MODULE_12__, _HeaderActionBasedOnRouterPath__WEBPACK_IMPORTED_MODULE_13__, _HeaderDrawer__WEBPACK_IMPORTED_MODULE_14__, _HeaderDrawerNavigation__WEBPACK_IMPORTED_MODULE_15__, _HeaderMenuList__WEBPACK_IMPORTED_MODULE_16__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


















const Header = (0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__.observer)(()=>{
    const { seo: { title  } ,  } = (0,_hooks_use_initial_data__WEBPACK_IMPORTED_MODULE_9__/* .useInitialData */ .L6)();
    const { appStore  } = (0,_store__WEBPACK_IMPORTED_MODULE_12__/* .useStore */ .oR)();
    const { isPadOrMobile  } = appStore;
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { event  } = (0,_hooks_use_analyze__WEBPACK_IMPORTED_MODULE_8__/* .useAnalyze */ .e)();
    const clickFunc = (0,_hooks_use_single_double_click__WEBPACK_IMPORTED_MODULE_11__/* .useSingleAndDoubleClick */ .h)(()=>{
        router.push("/");
        event({
            action: _constants_tracker__WEBPACK_IMPORTED_MODULE_7__/* .TrackerAction.Click */ .b.Click,
            label: "\u70B9\u51FB - \u9876\u90E8 Logo"
        });
    }, ()=>void router.push("/login")
    );
    const { 0: drawerOpen , 1: setDrawerOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const showPageHeader = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(()=>appStore.headerNav.show && (appStore.scrollDirection == "down" || appStore.viewport.mobile) && appStore.isOverPostTitleHeight
    , [
        appStore.headerNav.show,
        appStore.isOverPostTitleHeight,
        appStore.scrollDirection,
        appStore.viewport.mobile, 
    ]);
    // NOTE: fix `tab` focus element lead to header dislocation
    const appHeaderRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        appHeaderRef.current?.scrollIntoView();
    }, [
        showPageHeader
    ]);
    const MemoComponent = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(()=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: clsx__WEBPACK_IMPORTED_MODULE_1___default()((_index_module_css__WEBPACK_IMPORTED_MODULE_17___default()["head-swiper"]), (_index_module_css__WEBPACK_IMPORTED_MODULE_17___default()["swiper-metawrapper"]), "flex justify-between truncate"),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_index_module_css__WEBPACK_IMPORTED_MODULE_17___default()["head-info"]),
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_17___default().desc),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_17___default().meta),
                                children: appStore.headerNav.meta
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_17___default().title),
                                children: appStore.headerNav.title
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_index_module_css__WEBPACK_IMPORTED_MODULE_17___default()["right-wrapper"]),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_HeaderActionBasedOnRouterPath__WEBPACK_IMPORTED_MODULE_13__/* .HeaderActionBasedOnRouterPath */ .g, {})
                })
            ]
        })
    , [
        appStore.headerNav.meta,
        appStore.headerNav.title
    ]);
    const isClient = (0,_hooks_use_is_client__WEBPACK_IMPORTED_MODULE_10__/* .useIsClient */ .O)();
    if (!isClient) {
        return null;
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
            className: clsx__WEBPACK_IMPORTED_MODULE_1___default()((_index_module_css__WEBPACK_IMPORTED_MODULE_17___default().header), !appStore.headerNav.show && appStore.isOverFirstScreenHeight && appStore.viewport.mobile ? (_index_module_css__WEBPACK_IMPORTED_MODULE_17___default().hide) : null),
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()((_index_module_css__WEBPACK_IMPORTED_MODULE_17___default()["nav-container"]), "overflow-hidden", showPageHeader ? (_index_module_css__WEBPACK_IMPORTED_MODULE_17___default().toggle) : null),
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: clsx__WEBPACK_IMPORTED_MODULE_1___default()((_index_module_css__WEBPACK_IMPORTED_MODULE_17___default()["head-swiper"]), "justify-between"),
                            ref: appHeaderRef,
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex items-center justify-center cursor-pointer select-none",
                                    onClick: clickFunc,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_index_module_css__WEBPACK_IMPORTED_MODULE_17___default()["header-logo"]),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Logo__WEBPACK_IMPORTED_MODULE_6__/* .CustomLogo */ .uf, {})
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                            className: (_index_module_css__WEBPACK_IMPORTED_MODULE_17___default().title),
                                            children: title
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_index_module_css__WEBPACK_IMPORTED_MODULE_17___default()["more-button"]),
                                    onClick: ()=>{
                                        setDrawerOpen(true);
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Icons__WEBPACK_IMPORTED_MODULE_5__/* .IcBaselineMenuOpen */ .jl, {
                                        className: "text-2xl"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_HeaderMenuList__WEBPACK_IMPORTED_MODULE_16__/* .MenuList */ .q, {})
                            ]
                        }),
                        MemoComponent
                    ]
                }),
                isPadOrMobile && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_HeaderDrawer__WEBPACK_IMPORTED_MODULE_14__/* .HeaderDrawer */ .x, {
                    show: drawerOpen,
                    onExit: ()=>{
                        setDrawerOpen(false);
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_HeaderDrawerNavigation__WEBPACK_IMPORTED_MODULE_15__/* .HeaderDrawerNavigation */ .D, {})
                })
            ]
        })
    });
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 70257:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ HeaderActionBasedOnRouterPath)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_use_initial_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92644);
/* harmony import */ var _HeaderActionButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80246);
/* harmony import */ var _HeaderActionShareButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2451);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(45401);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_HeaderActionButton__WEBPACK_IMPORTED_MODULE_4__, _HeaderActionShareButton__WEBPACK_IMPORTED_MODULE_5__]);
([_HeaderActionButton__WEBPACK_IMPORTED_MODULE_4__, _HeaderActionShareButton__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const HeaderActionBasedOnRouterPath = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const pathname = router.pathname;
    const { seo: { title  } ,  } = (0,_hooks_use_initial_data__WEBPACK_IMPORTED_MODULE_3__/* .useInitialData */ .L6)();
    const Comp = (()=>{
        const titleComp = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (_index_module_css__WEBPACK_IMPORTED_MODULE_6___default()["site-info"]),
            children: title
        });
        switch(pathname){
            case "/notes/[id]":
                {
                    const id = parseInt(router.query.id);
                    if (id && typeof id === "number") {
                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_HeaderActionButton__WEBPACK_IMPORTED_MODULE_4__/* .HeaderActionButtonsContainer */ .vn, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_HeaderActionButton__WEBPACK_IMPORTED_MODULE_4__/* .HeaderActionButton */ .DH, {
                                        className: "h-10 w-20",
                                        tabIndex: -1,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_HeaderActionButton__WEBPACK_IMPORTED_MODULE_4__/* .HeaderActionLikeButtonForNote */ .gJ, {
                                            id: id
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex flex-col flex-shrink-0",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: id
                                        }),
                                        titleComp
                                    ]
                                })
                            ]
                        });
                    }
                    return null;
                }
            case "/[page]":
                {
                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_HeaderActionShareButton__WEBPACK_IMPORTED_MODULE_5__/* .HeaderActionShareButton */ .T, {}),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col flex-shrink-0",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        children: [
                                            "/",
                                            router.query.page
                                        ]
                                    }),
                                    titleComp
                                ]
                            })
                        ]
                    });
                }
            default:
                {
                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_HeaderActionShareButton__WEBPACK_IMPORTED_MODULE_5__/* .HeaderActionShareButton */ .T, {}),
                            titleComp
                        ]
                    });
                }
        }
    })();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
        children: Comp
    });
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 80246:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DH": () => (/* binding */ HeaderActionButton),
/* harmony export */   "gJ": () => (/* binding */ HeaderActionLikeButtonForNote),
/* harmony export */   "vn": () => (/* binding */ HeaderActionButtonsContainer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45944);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_universal_LikeButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21351);
/* harmony import */ var _constants_tracker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10609);
/* harmony import */ var _hooks_use_analyze__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(74321);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(38325);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(45401);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_use_analyze__WEBPACK_IMPORTED_MODULE_6__, _store__WEBPACK_IMPORTED_MODULE_7__]);
([_hooks_use_analyze__WEBPACK_IMPORTED_MODULE_6__, _store__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const HeaderActionButton = (props)=>{
    const { className , ...rest } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("flex items-center justify-center rounded-full px-3 bg-shallow cursor-pointer h-10", className),
        ...rest
    });
};
const HeaderActionButtonsContainer = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.memo)((props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "mr-3 flex items-center",
        children: props.children
    });
});
const HeaderActionLikeButtonForNote = (0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__.observer)((props)=>{
    const { id  } = props;
    const { noteStore  } = (0,_store__WEBPACK_IMPORTED_MODULE_7__/* .useStore */ .oR)();
    const liked = noteStore.isLiked(id);
    const onLike = ()=>{
        noteStore.like(id);
        trackerLike();
    };
    const { event  } = (0,_hooks_use_analyze__WEBPACK_IMPORTED_MODULE_6__/* .useAnalyze */ .e)();
    const trackerLikeOnce = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(false);
    const trackerLike = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(()=>{
        if (!trackerLikeOnce.current) {
            event({
                action: _constants_tracker__WEBPACK_IMPORTED_MODULE_5__/* .TrackerAction.Interaction */ .b.Interaction,
                label: "\u9876\u90E8\u559C\u6B22\u89E6\u53D1"
            });
            trackerLikeOnce.current = true;
        }
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(HeaderActionButton, {
        onClick: onLike,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex items-center justify-center",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_index_module_css__WEBPACK_IMPORTED_MODULE_8___default()["like-button"]),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_LikeButton__WEBPACK_IMPORTED_MODULE_4__/* .LikeButton */ .d, {
                        checked: liked
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "flex-shrink-0",
                    children: "\u559C\u6B22"
                })
            ]
        })
    });
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2451:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ HeaderActionShareButton),
/* harmony export */   "l": () => (/* binding */ HeaderActionButtonWithIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45944);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_universal_Icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10298);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38325);
/* harmony import */ var _HeaderActionButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(80246);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store__WEBPACK_IMPORTED_MODULE_4__, _HeaderActionButton__WEBPACK_IMPORTED_MODULE_5__]);
([_store__WEBPACK_IMPORTED_MODULE_4__, _HeaderActionButton__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const HeaderActionShareButton = (0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__.observer)(()=>{
    const { appUIStore  } = (0,_store__WEBPACK_IMPORTED_MODULE_4__/* .useStore */ .oR)();
    const hasShare = "share" in navigator;
    return hasShare && appUIStore.shareData ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_HeaderActionButton__WEBPACK_IMPORTED_MODULE_5__/* .HeaderActionButtonsContainer */ .vn, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_HeaderActionButton__WEBPACK_IMPORTED_MODULE_5__/* .HeaderActionButton */ .DH, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(HeaderActionButtonWithIcon, {
                onClick: ()=>{
                    navigator.share(appUIStore.shareData)// eslint-disable-next-line @typescript-eslint/no-empty-function
                    .then(()=>{})// eslint-disable-next-line @typescript-eslint/no-empty-function
                    .catch(()=>{});
                },
                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Icons__WEBPACK_IMPORTED_MODULE_3__/* .MdiShare */ .Gk, {}),
                title: "\u5206\u4EAB"
            })
        })
    }) : null;
});
const HeaderActionButtonWithIcon = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(({ icon , title , onClick  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        onClick: onClick,
        className: "flex items-center justify-center",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "inline-flex items-center mr-2",
                children: icon
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "flex-shrink-0",
                children: title
            })
        ]
    });
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 61241:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ HeaderDrawer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(47097);
/* harmony import */ var _components_universal_Icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10298);
/* harmony import */ var _components_universal_Overlay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20444);
/* harmony import */ var _components_universal_Portal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(45953);
/* harmony import */ var _constants_tracker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(10609);
/* harmony import */ var _hooks_use_analyze__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(74321);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(45401);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([utils__WEBPACK_IMPORTED_MODULE_4__, _components_universal_Overlay__WEBPACK_IMPORTED_MODULE_6__, _components_universal_Portal__WEBPACK_IMPORTED_MODULE_7__, _hooks_use_analyze__WEBPACK_IMPORTED_MODULE_9__]);
([utils__WEBPACK_IMPORTED_MODULE_4__, _components_universal_Overlay__WEBPACK_IMPORTED_MODULE_6__, _components_universal_Portal__WEBPACK_IMPORTED_MODULE_7__, _hooks_use_analyze__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const _HeaderDrawer = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.memo)(({ children , onExit , show  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { event  } = (0,_hooks_use_analyze__WEBPACK_IMPORTED_MODULE_9__/* .useAnalyze */ .e)();
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (show) {
            event({
                action: _constants_tracker__WEBPACK_IMPORTED_MODULE_8__/* .TrackerAction.Interaction */ .b.Interaction,
                label: "\u9876\u90E8\u5BFC\u822A\u88AB\u6253\u5F00\u4E86"
            });
        }
    }, [
        show
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        const handler = ()=>{
            onExit();
        };
        router.events.on("routeChangeStart", handler);
        return ()=>{
            router.events.off("routeChangeStart", handler);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        router
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Portal__WEBPACK_IMPORTED_MODULE_7__/* .RootPortal */ .K, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Overlay__WEBPACK_IMPORTED_MODULE_6__/* .OverLay */ .v, {
                    show: show,
                    onClose: onExit
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()((_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().drawer), show ? (_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().show) : null),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "pb-4 text-right",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "p-4 inline-block -mr-5 -mt-4",
                                onClick: onExit,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Icons__WEBPACK_IMPORTED_MODULE_5__/* .LaTimes */ .vC, {})
                            })
                        }),
                        children
                    ]
                })
            ]
        })
    });
});
const HeaderDrawer = (0,utils__WEBPACK_IMPORTED_MODULE_4__/* .NoSSR */ .ri)(_HeaderDrawer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2159:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ HeaderDrawerNavigation)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37937);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_universal_FontIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17612);
/* harmony import */ var _constants_tracker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10609);
/* harmony import */ var _hooks_use_analyze__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(74321);
/* harmony import */ var _hooks_use_header_nav_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(84435);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(45401);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_use_analyze__WEBPACK_IMPORTED_MODULE_5__, _hooks_use_header_nav_list__WEBPACK_IMPORTED_MODULE_6__]);
([_hooks_use_analyze__WEBPACK_IMPORTED_MODULE_5__, _hooks_use_header_nav_list__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const HeaderDrawerNavigation = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(()=>{
    const { mergedMenu  } = (0,_hooks_use_header_nav_list__WEBPACK_IMPORTED_MODULE_6__/* .useHeaderNavList */ .J)();
    const { event  } = (0,_hooks_use_analyze__WEBPACK_IMPORTED_MODULE_5__/* .useAnalyze */ .e)();
    const tracker = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((message)=>{
        event({
            action: _constants_tracker__WEBPACK_IMPORTED_MODULE_4__/* .TrackerAction.Click */ .b.Click,
            label: message
        });
    }, []);
    const doTracker = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((message)=>{
        tracker(`内页导航点击 - ${message}`);
    }, [
        tracker
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: mergedMenu.map((m1)=>{
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_7___default()["link-section"]),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: m1.path,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            onClick: ()=>doTracker(m1.title)
                            ,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_7___default().parent),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_FontIcon__WEBPACK_IMPORTED_MODULE_3__/* .FontIcon */ .x, {
                                        icon: m1.icon
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: m1.title
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_7___default()["children-wrapper"]),
                        children: m1.subMenu && m1.subMenu.map((m)=>{
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                href: m.path,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    onClick: ()=>doTracker(m.title)
                                    ,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_7___default().children),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_FontIcon__WEBPACK_IMPORTED_MODULE_3__/* .FontIcon */ .x, {
                                                icon: m.icon
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: m.title
                                            })
                                        ]
                                    })
                                })
                            }, m.title);
                        })
                    })
                ]
            }, m1.title);
        })
    });
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1712:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ MenuList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_use_initial_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92644);
/* harmony import */ var _HeaderNavigationList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(95302);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45401);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_HeaderNavigationList__WEBPACK_IMPORTED_MODULE_4__]);
_HeaderNavigationList__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const MenuList = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(()=>{
    const groupRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const kamiConfig = (0,_hooks_use_initial_data__WEBPACK_IMPORTED_MODULE_3__/* .useKamiConfig */ .r5)();
    const ballIndex = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{
        const asPath = router.asPath;
        const menu = kamiConfig.site.header.menu;
        if (asPath === "" || asPath === "/") {
            const idx = menu.findIndex((item)=>item.type == "Home"
            );
            return ~idx ? idx : -1;
        }
        const firstPath = asPath.split("/")[1];
        const inMenuIndex = menu.findIndex((item)=>item.path != "/" && (asPath.startsWith(item.path) || item.subMenu?.find((subItem)=>asPath.startsWith(subItem.path)
            ))
        );
        if (inMenuIndex > -1) {
            return inMenuIndex;
        }
        switch(firstPath){
            case "category":
            case "posts":
                {
                    return menu.findIndex((item)=>item.type == "Post"
                    );
                }
            case "notes":
                {
                    return menu.findIndex((item)=>item.type == "Note"
                    );
                }
            case "says":
                {
                    return menu.findIndex((item)=>item.path == "/says"
                    );
                }
            case "timeline":
                {
                    return menu.findIndex((item)=>item.path.startsWith("/timeline")
                    );
                }
            case "friends":
                {
                    return menu.findIndex((item)=>item.path == "/friends"
                    );
                }
            case "recently":
                {
                    return menu.findIndex((item)=>item.path.startsWith("/recently")
                    );
                }
            default:
                return 0;
        }
    }, [
        kamiConfig.site.header.menu,
        router.asPath
    ]);
    const { 0: ballOffsetLeft , 1: setBallOffsetLeft  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (!groupRef.current || typeof ballIndex === "undefined") {
            return;
        }
        const $group = groupRef.current;
        const $child = $group.children.item(ballIndex);
        if ($child) {
            setBallOffsetLeft($child.offsetLeft + $child.getBoundingClientRect().width / 2);
        }
    }, [
        ballIndex
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_5___default()["link-group"]),
        ref: groupRef,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_HeaderNavigationList__WEBPACK_IMPORTED_MODULE_4__/* .HeaderNavigationList */ .p, {}),
            ballOffsetLeft ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_5___default()["anchor-ball"]),
                style: {
                    left: `${ballOffsetLeft}px`
                }
            }) : null
        ]
    });
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 95302:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ HeaderNavigationList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45944);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37937);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_shortcut_guide__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(35011);
/* harmony import */ var react_shortcut_guide__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_shortcut_guide__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_universal_FloatPopover__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85782);
/* harmony import */ var _components_universal_FontIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(17612);
/* harmony import */ var _constants_tracker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(10609);
/* harmony import */ var _hooks_use_analyze__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(74321);
/* harmony import */ var _hooks_use_header_nav_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(84435);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(45401);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_universal_FloatPopover__WEBPACK_IMPORTED_MODULE_6__, _hooks_use_analyze__WEBPACK_IMPORTED_MODULE_9__, _hooks_use_header_nav_list__WEBPACK_IMPORTED_MODULE_10__]);
([_components_universal_FloatPopover__WEBPACK_IMPORTED_MODULE_6__, _hooks_use_analyze__WEBPACK_IMPORTED_MODULE_9__, _hooks_use_header_nav_list__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const MenuLink = (props)=>{
    const { menu , isPublicUrl , index  } = props;
    const { event  } = (0,_hooks_use_analyze__WEBPACK_IMPORTED_MODULE_9__/* .useAnalyze */ .e)();
    const tracker = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)((message)=>{
        event({
            action: _constants_tracker__WEBPACK_IMPORTED_MODULE_8__/* .TrackerAction.Click */ .b.Click,
            label: message
        });
    }, []);
    const { registerShortcut  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(react_shortcut_guide__WEBPACK_IMPORTED_MODULE_5__.ShortcutContext);
    const id = `header-menu-${index}`;
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if (index + 1 >= 10) {
            return;
        }
        if (!menu.title) {
            return;
        }
        const key = (index + 1).toString();
        return registerShortcut(key, [
            react_shortcut_guide__WEBPACK_IMPORTED_MODULE_5__.Modifier.None
        ], ()=>{
            document.getElementById(id)?.click();
        }, `前往 - ${menu.title}`);
    }, [
        index,
        menu.path,
        menu.title,
        id
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_FloatPopover__WEBPACK_IMPORTED_MODULE_6__/* .FloatPopover */ .r, {
        strategy: "fixed",
        headless: true,
        placement: "bottom",
        offset: 0,
        popoverWrapperClassNames: "z-19 relative",
        triggerComponent: ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                href: menu.path,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    id: id,
                    tabIndex: -1,
                    onClick: ()=>tracker(`一级导航点击 - ${menu.title}`)
                    ,
                    rel: isPublicUrl ? "noopener noreferrer" : undefined,
                    target: isPublicUrl ? "_blank" : undefined,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_11___default()["link-item"]),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_FontIcon__WEBPACK_IMPORTED_MODULE_7__/* .FontIcon */ .x, {
                                icon: menu.icon
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_11___default()["link-title"]),
                                children: menu.title
                            }),
                            !menu.title && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "sr-only",
                                children: "header icon"
                            })
                        ]
                    })
                })
            })
        ,
        children: menu.subMenu?.length ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
            className: clsx__WEBPACK_IMPORTED_MODULE_1___default()((_index_module_css__WEBPACK_IMPORTED_MODULE_11___default()["sub-dropdown"])),
            children: menu.subMenu?.map((m, i)=>{
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                    href: m.path,
                    tabIndex: i + 10,
                    role: "button",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        onClick: ()=>tracker(`二级导航点击 - ${m.title}`)
                        ,
                        tabIndex: i + 10,
                        role: "button",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_FontIcon__WEBPACK_IMPORTED_MODULE_7__/* .FontIcon */ .x, {
                                    icon: m.icon
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: m.title
                                })
                            ]
                        }, m.title)
                    })
                }, m.path);
            })
        }) : null
    });
};
const HeaderNavigationList = (0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__.observer)(()=>{
    const { mergedMenu  } = (0,_hooks_use_header_nav_list__WEBPACK_IMPORTED_MODULE_10__/* .useHeaderNavList */ .J)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: mergedMenu.map((_menu, index)=>{
            const isPublicUrl = _menu.path.startsWith("http");
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "relative",
                role: "button",
                "aria-label": _menu.title || "header nav",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MenuLink, {
                    isPublicUrl: isPublicUrl,
                    menu: _menu,
                    index: index
                })
            }, _menu.title);
        })
    });
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 32476:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ BaseTransitionView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84466);
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

/***/ 59613:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Header": () => (/* reexport safe */ _Header__WEBPACK_IMPORTED_MODULE_0__.h),
/* harmony export */   "HeaderActionBasedOnRouterPath": () => (/* reexport safe */ _HeaderActionBasedOnRouterPath__WEBPACK_IMPORTED_MODULE_1__.g),
/* harmony export */   "HeaderActionButton": () => (/* reexport safe */ _HeaderActionButton__WEBPACK_IMPORTED_MODULE_2__.DH),
/* harmony export */   "HeaderActionButtonWithIcon": () => (/* reexport safe */ _HeaderActionShareButton__WEBPACK_IMPORTED_MODULE_3__.l),
/* harmony export */   "HeaderActionButtonsContainer": () => (/* reexport safe */ _HeaderActionButton__WEBPACK_IMPORTED_MODULE_2__.vn),
/* harmony export */   "HeaderActionLikeButtonForNote": () => (/* reexport safe */ _HeaderActionButton__WEBPACK_IMPORTED_MODULE_2__.gJ),
/* harmony export */   "HeaderActionShareButton": () => (/* reexport safe */ _HeaderActionShareButton__WEBPACK_IMPORTED_MODULE_3__.T),
/* harmony export */   "HeaderDrawer": () => (/* reexport safe */ _HeaderDrawer__WEBPACK_IMPORTED_MODULE_4__.x),
/* harmony export */   "HeaderDrawerNavigation": () => (/* reexport safe */ _HeaderDrawerNavigation__WEBPACK_IMPORTED_MODULE_5__.D),
/* harmony export */   "HeaderNavigationList": () => (/* reexport safe */ _HeaderNavigationList__WEBPACK_IMPORTED_MODULE_7__.p),
/* harmony export */   "MenuList": () => (/* reexport safe */ _HeaderMenuList__WEBPACK_IMPORTED_MODULE_6__.q)
/* harmony export */ });
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89547);
/* harmony import */ var _HeaderActionBasedOnRouterPath__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70257);
/* harmony import */ var _HeaderActionButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80246);
/* harmony import */ var _HeaderActionShareButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2451);
/* harmony import */ var _HeaderDrawer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(61241);
/* harmony import */ var _HeaderDrawerNavigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2159);
/* harmony import */ var _HeaderMenuList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1712);
/* harmony import */ var _HeaderNavigationList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(95302);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Header__WEBPACK_IMPORTED_MODULE_0__, _HeaderActionBasedOnRouterPath__WEBPACK_IMPORTED_MODULE_1__, _HeaderActionButton__WEBPACK_IMPORTED_MODULE_2__, _HeaderActionShareButton__WEBPACK_IMPORTED_MODULE_3__, _HeaderDrawer__WEBPACK_IMPORTED_MODULE_4__, _HeaderDrawerNavigation__WEBPACK_IMPORTED_MODULE_5__, _HeaderMenuList__WEBPACK_IMPORTED_MODULE_6__, _HeaderNavigationList__WEBPACK_IMPORTED_MODULE_7__]);
([_Header__WEBPACK_IMPORTED_MODULE_0__, _HeaderActionBasedOnRouterPath__WEBPACK_IMPORTED_MODULE_1__, _HeaderActionButton__WEBPACK_IMPORTED_MODULE_2__, _HeaderActionShareButton__WEBPACK_IMPORTED_MODULE_3__, _HeaderDrawer__WEBPACK_IMPORTED_MODULE_4__, _HeaderDrawerNavigation__WEBPACK_IMPORTED_MODULE_5__, _HeaderMenuList__WEBPACK_IMPORTED_MODULE_6__, _HeaderNavigationList__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 84435:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ useHeaderNavList)
/* harmony export */ });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80352);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _use_initial_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92644);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([lodash_es__WEBPACK_IMPORTED_MODULE_0__]);
lodash_es__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const useHeaderNavList = ()=>{
    const { site: { header: { menu: menu1  } ,  } ,  } = (0,_use_initial_data__WEBPACK_IMPORTED_MODULE_2__/* .useKamiConfig */ .r5)();
    const { pageMeta , categories  } = (0,_use_initial_data__WEBPACK_IMPORTED_MODULE_2__/* .useInitialData */ .L6)();
    const mergedMenu = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        const merged = [
            ...menu1
        ];
        const homeMenuIndex = merged.findIndex((menu)=>menu.type === "Home"
        );
        // 1. merge pages
        const homeMenu = merged[homeMenuIndex];
        if (!homeMenu || !homeMenu.subMenu || !pageMeta) {
            return menu1;
        }
        const models = pageMeta.map((page)=>{
            const { title , id , slug  } = page;
            return {
                title,
                id,
                path: `/${slug}`,
                type: "Page"
            };
        });
        const old = homeMenu.subMenu;
        homeMenu.subMenu = (0,lodash_es__WEBPACK_IMPORTED_MODULE_0__.uniqBy)([
            ...old,
            ...models
        ], "id");
        // 2. merge categories
        {
            const postMenu = merged.find((menu)=>menu.type === "Post"
            );
            if (!postMenu || !postMenu.subMenu) {
                return merged;
            }
            const models = categories.map((category)=>{
                const { id , slug , name  } = category;
                return {
                    title: name,
                    id,
                    path: `/categories/${slug}`,
                    type: "Custom"
                };
            });
            const old = postMenu.subMenu;
            postMenu.subMenu = (0,lodash_es__WEBPACK_IMPORTED_MODULE_0__.uniqBy)([
                ...models,
                ...old
            ], "id");
        }
        return merged;
    }, [
        categories,
        menu1,
        pageMeta
    ]);
    return {
        mergedMenu
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 33628:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ useSingleAndDoubleClick)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useSingleAndDoubleClick(actionSimpleClick, actionDoubleClick, delay = 250) {
    const { 0: click , 1: setClick  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const timer = setTimeout(()=>{
            // simple click
            if (click === 1) actionSimpleClick();
            setClick(0);
        }, delay);
        // the duration between this click and the previous one
        // is less than the value of delay = double-click
        if (click === 2) actionDoubleClick();
        return ()=>clearTimeout(timer)
        ;
    }, [
        click
    ]);
    return ()=>setClick((prev)=>prev + 1
        )
    ;
}


/***/ })

};
;