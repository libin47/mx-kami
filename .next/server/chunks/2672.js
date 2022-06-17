exports.id = 2672;
exports.ids = [2672];
exports.modules = {

/***/ 68739:
/***/ ((module) => {

// Exports
module.exports = {
	"avatar": "Avatar_avatar__umGUh",
	"image": "Avatar_image__iwsFj",
	"avatar-wrap": "Avatar_avatar-wrap__E9RcW",
	"shadow": "Avatar_shadow__7Ufnz"
};


/***/ }),

/***/ 44199:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ Avatar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var randomcolor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(30503);
/* harmony import */ var randomcolor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(randomcolor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19785);
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _FlexText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34947);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(68739);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_6__);







const Avatar = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.memo)((props)=>{
    const { useRandomColor =true , shadow =true , lazy =true  } = props;
    const avatarRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
    const randomColor = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>useRandomColor ? randomcolor__WEBPACK_IMPORTED_MODULE_2___default()({
            luminosity: "light",
            seed: props.src
        }) : "var(--gray)"
    , [
        props.src,
        useRandomColor
    ]);
    const { 0: loaded , 1: setLoaded  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const { 0: inView1 , 1: setInView  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(lazy ? false : true);
    const { ref  } = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__.useInView)({
        triggerOnce: true,
        onChange (inView) {
            if (inView) {
                setInView(true);
            }
        }
    });
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (!props.imageUrl) {
            return;
        }
        if (!inView1) {
            return;
        }
        const image = new Image();
        image.src = props.imageUrl;
        image.onload = ()=>{
            setLoaded(true);
        };
        image.onerror = ()=>{};
    }, [
        inView1,
        props.imageUrl
    ]);
    const { wrapperProps ={}  } = props;
    const { className , ...restProps } = wrapperProps;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()((_index_module_css__WEBPACK_IMPORTED_MODULE_6___default()["avatar-wrap"]), shadow && (_index_module_css__WEBPACK_IMPORTED_MODULE_6___default().shadow), className),
        ref: avatarRef,
        style: props.size ? {
            height: `${props.size}px`,
            width: `${props.size}px`
        } : undefined,
        ...restProps,
        children: [
            lazy && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                ref: ref
            }),
            /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.createElement)(props.url ? "a" : "div", {
                style: {
                    backgroundColor: loaded ? undefined : randomColor
                },
                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_6___default().avatar),
                ...props.url ? {
                    href: props.url,
                    target: "_blank",
                    rel: "noreferrer"
                } : {},
                children: props.imageUrl ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_index_module_css__WEBPACK_IMPORTED_MODULE_6___default().image),
                    style: props.imageUrl ? {
                        backgroundImage: loaded ? `url(${props.imageUrl})` : undefined,
                        opacity: loaded ? 1 : 0
                    } : {}
                }) : props.text ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex flex-grow relative h-full w-full items-center justify-center",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FlexText__WEBPACK_IMPORTED_MODULE_5__/* .FlexText */ .I, {
                        size: 0.8,
                        text: props.text
                    })
                }) : null
            })
        ]
    });
});


/***/ }),

/***/ 34947:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ FlexText)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


// TODO: wait for new CSS unit
const FlexText = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)((props)=>{
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { 0: done , 1: setDone  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!ref.current) {
            return;
        }
        const $el = ref.current;
        const $parent = $el.parentElement;
        let observe;
        if ($parent) {
            observe = new ResizeObserver(()=>{
                const { width  } = $parent.getBoundingClientRect();
                $el.style.fontSize = `${width / props.text.length * props.size}px`;
                setDone(true);
            });
            observe.observe($parent);
        }
        return ()=>{
            if (observe) {
                observe.disconnect();
            }
        };
    }, [
        props.size
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        ref: ref,
        className: done ? "" : "invisible",
        children: props.text
    });
});


/***/ }),

/***/ 27625:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ ImpressionView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19785);
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants_tracker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10609);
/* harmony import */ var _hooks_use_analyze__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74321);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_use_analyze__WEBPACK_IMPORTED_MODULE_4__]);
_hooks_use_analyze__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const ImpressionView = (props)=>{
    const { shouldTrack , ...rest } = props;
    if (!shouldTrack) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: props.children
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ImpressionView, {
        ...rest
    });
};
const _ImpressionView = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)((props)=>{
    const { 0: impression , 1: setImpression  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { event  } = (0,_hooks_use_analyze__WEBPACK_IMPORTED_MODULE_4__/* .useAnalyze */ .e)();
    const { ref  } = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__.useInView)({
        initialInView: false,
        triggerOnce: true,
        onChange (inView) {
            if (inView) {
                setImpression(true);
                event({
                    action: props.action ?? _constants_tracker__WEBPACK_IMPORTED_MODULE_3__/* .TrackerAction.Impression */ .b.Impression,
                    label: props.trackerMessage
                });
                props.onTrack?.();
            }
        }
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            props.children,
            !impression && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                ref: ref
            })
        ]
    });
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 58443:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ RelativeTime)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47097);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([utils__WEBPACK_IMPORTED_MODULE_3__]);
utils__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

/*
 * @Author: Innei
 * @Date: 2021-01-26 11:26:43
 * @LastEditTime: 2021-01-26 11:34:32
 * @LastEditors: Innei
 * @FilePath: /web/components/Time/index.tsx
 * @Mark: Coding with Love
 */ 


const RelativeTime = (props)=>{
    const { 0: relative , 1: setRelative  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)((0,utils__WEBPACK_IMPORTED_MODULE_3__/* .relativeTimeFromNow */ .eM)(props.date));
    const { displayAbsoluteTimeAfterDay =29  } = props;
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setRelative((0,utils__WEBPACK_IMPORTED_MODULE_3__/* .relativeTimeFromNow */ .eM)(props.date));
        let timer = setInterval(()=>{
            setRelative((0,utils__WEBPACK_IMPORTED_MODULE_3__/* .relativeTimeFromNow */ .eM)(props.date));
        }, 1000);
        if (Math.abs(dayjs__WEBPACK_IMPORTED_MODULE_1___default()(props.date).diff(new Date(), "d")) > displayAbsoluteTimeAfterDay) {
            timer = clearInterval(timer);
            setRelative(Intl.DateTimeFormat("en-us", {
                day: "2-digit",
                month: "2-digit",
                year: "2-digit"
            }).format(typeof props.date === "string" ? new Date(props.date) : props.date));
        }
        return ()=>{
            timer = clearInterval(timer);
        };
    }, [
        props.date,
        displayAbsoluteTimeAfterDay
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: relative
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 23448:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ ToastCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_universal_Avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44199);
/* harmony import */ var _components_universal_ImpressionView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27625);
/* harmony import */ var _components_universal_RelativeTime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(58443);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(38325);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_universal_ImpressionView__WEBPACK_IMPORTED_MODULE_3__, _components_universal_RelativeTime__WEBPACK_IMPORTED_MODULE_4__, _store__WEBPACK_IMPORTED_MODULE_5__]);
([_components_universal_ImpressionView__WEBPACK_IMPORTED_MODULE_3__, _components_universal_RelativeTime__WEBPACK_IMPORTED_MODULE_4__, _store__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const wrapperProps = {
    className: "!border-none !shadow-none"
};
const ToastCard = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)((props)=>{
    const { userStore  } = _store__WEBPACK_IMPORTED_MODULE_5__/* .store */ .h;
    const { description , text , title  } = props;
    const date = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(new Date());
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_ImpressionView__WEBPACK_IMPORTED_MODULE_3__/* .ImpressionView */ .X, {
        trackerMessage: `Toast 曝光 - ${title} · ${description} · ${text}`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "relative flex space-x-4 items-center p-4 w-full text-[12px] bg-bg-opacity overflow-hidden text-inherit border border-shallow border-opacity-50 rounded-xl backdrop-filter backdrop-brightness-150 backdrop-brightness-110 backdrop-saturate-150 backdrop-blur-md select-none cursor-pointer mb-4 ",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex-shrink-0",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Avatar__WEBPACK_IMPORTED_MODULE_2__/* .Avatar */ .q, {
                        useRandomColor: false,
                        imageUrl: userStore.master?.avatar || "",
                        size: 40,
                        wrapperProps: wrapperProps
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex-grow relative flex-shrink min-w-0 break-all leading-[1.5]",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-[1.05em] leading-none font-medium truncate",
                            children: title
                        }),
                        text && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "line-clamp-2",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: text
                            })
                        }),
                        description && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-gray-2 line-clamp-2",
                            children: description
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex-shrink-0 text-[0.8em] self-start text-gray-2",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_RelativeTime__WEBPACK_IMPORTED_MODULE_4__/* .RelativeTime */ .i, {
                        date: date.current
                    })
                })
            ]
        })
    });
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 66098:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ InitialContextProvider),
/* harmony export */   "y": () => (/* binding */ InitialContext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_es_cloneDeep__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54834);
/* harmony import */ var lodash_es_mergeWith__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26498);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _configs_default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96776);





const InitialContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});
const InitialContextProvider = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)((props)=>{
    const mergeThemeConfig = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        return (0,lodash_es_mergeWith__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)((0,lodash_es_cloneDeep__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(_configs_default__WEBPACK_IMPORTED_MODULE_2__/* .defaultConfigs */ .s), props.value.config, (old, newer)=>{
            // 数组不合并
            if (Array.isArray(old)) {
                return newer;
            }
        });
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        window.data = {
            ...props.value,
            config: mergeThemeConfig
        };
    }, [
        mergeThemeConfig,
        props.value
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(InitialContext.Provider, {
        value: {
            ...props.value,
            config: mergeThemeConfig
        },
        children: props.children
    });
});


/***/ }),

/***/ 85035:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LD": () => (/* binding */ RootStoreProvider),
/* harmony export */   "Yh": () => (/* binding */ useRootStore),
/* harmony export */   "h": () => (/* binding */ store)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36211);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45944);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_env__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(55812);
/* harmony import */ var _store_root_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(49184);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_root_store__WEBPACK_IMPORTED_MODULE_4__]);
_store_root_store__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






(0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__.enableStaticRendering)((0,_utils_env__WEBPACK_IMPORTED_MODULE_5__/* .isServerSide */ .s$)());
(0,mobx__WEBPACK_IMPORTED_MODULE_1__.configure)({
    useProxies: "always"
});
let $store;
const StoreContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.createContext)(undefined);
StoreContext.displayName = "StoreContext";
function useRootStore() {
    const context = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(StoreContext);
    if (context === undefined) {
        throw new Error("useRootStore must be used within RootStoreProvider");
    }
    return context;
}
const store = initializeStore();
function RootStoreProvider({ children  }) {
    if (_utils_env__WEBPACK_IMPORTED_MODULE_5__/* .isDev */ .r8 && (0,_utils_env__WEBPACK_IMPORTED_MODULE_5__/* .isClientSide */ .S_)() && !window.store) {
        Object.defineProperty(window, "store", {
            get () {
                return store;
            }
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StoreContext.Provider, {
        value: store,
        children: children
    });
}
function initializeStore() {
    const _store = $store ?? new _store_root_store__WEBPACK_IMPORTED_MODULE_4__/* .RootStore */ .M();
    // For SSG and SSR always create a new store
    if (true) return _store;
    // Create the store once in the client
    if (!$store) $store = _store;
    return _store;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 96776:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ defaultConfigs)
/* harmony export */ });
// sync with config.init.yaml
const defaultConfigs = {
    name: "kami",
    site: {
        favicon: "/favicon.svg",
        logoSvg: null,
        figure: null,
        background: {
            src: {
                light: "/assets/background.png",
                dark: "/assets/background-night.png"
            },
            position: "top center fixed"
        },
        header: {
            menu: [
                {
                    title: "\u6E90",
                    path: "/",
                    type: "Home",
                    icon: "faDotCircle",
                    subMenu: []
                },
                {
                    title: "\u6587",
                    path: "/posts",
                    type: "Post",
                    subMenu: [],
                    icon: "faGlasses"
                },
                {
                    title: "\u8BB0",
                    type: "Note",
                    path: "/notes/latest",
                    icon: "faFeatherAlt"
                },
                {
                    title: "\u8A00",
                    path: "/says",
                    icon: "faComments"
                },
                {
                    title: "\u89C8",
                    icon: "faHistory",
                    path: "/timeline",
                    subMenu: [
                        {
                            title: "\u751F\u6D3B",
                            icon: "faFeatherAlt",
                            path: "/timeline?type=note"
                        },
                        {
                            title: "\u535A\u6587",
                            icon: "faBookOpen",
                            path: "/timeline?type=post"
                        },
                        {
                            title: "\u56DE\u5FC6",
                            icon: "faCircle",
                            path: "/timeline?memory=1"
                        }, 
                    ]
                },
                {
                    title: "\u53CB",
                    icon: "faUserFriends",
                    path: "/friends"
                },
                {
                    title: "\u8BC9",
                    icon: "faComment",
                    path: "/recently"
                },
                {
                    title: "\u4F59",
                    icon: "faCircleNotch",
                    path: "/favorite/music",
                    subMenu: [
                        {
                            title: "\u542C\u6B4C",
                            icon: "faMusic",
                            type: "Music",
                            path: "/favorite/music"
                        },
                        {
                            title: "\u9879\u76EE",
                            icon: "faFlask",
                            path: "/projects"
                        }, 
                    ]
                },
                {
                    title: "",
                    icon: "faSubway",
                    path: "https://travellings.link"
                }, 
            ]
        },
        social: [],
        footer: {
            background: {
                src: {
                    dark: "",
                    light: "/assets/footer.png"
                },
                position: "top/cover"
            },
            homePage: "/",
            motto: {
                content: "Stay hungry. Stay foolish.",
                author: "Steve Jobs"
            },
            icp: {
                enable: false,
                label: "\u840C\u5907 20201212 \u53F7",
                link: "https://icp.gov.moe/"
            },
            navigation: [
                {
                    name: "\u5173\u4E8E",
                    path: "/about"
                },
                {
                    name: "\u7559\u8A00",
                    path: "/message"
                },
                {
                    name: "\u53CB\u94FE",
                    path: "/friends"
                },
                {
                    name: "RSS \u8BA2\u9605",
                    path: "/feed",
                    newtab: true
                },
                {
                    name: "\u7AD9\u70B9\u5730\u56FE",
                    path: "/sitemap",
                    newtab: true
                },
                {
                    name: "\u5F00\u5F80",
                    path: "https://travellings.link/",
                    newtab: true
                }, 
            ]
        },
        custom: {
            script: "",
            style: "",
            js: [],
            css: []
        }
    },
    function: {
        player: {
            id: [
                563534789,
                1447327083,
                1450252250
            ]
        },
        analyze: {
            enable: false,
            ga: "",
            baidu: "",
            umami: {
                id: "",
                url: ""
            }
        },
        donate: {
            enable: false,
            link: "https://afdian.net/@example",
            qrcode: []
        },
        banDevtool: {
            enable: false
        }
    }
};


/***/ }),

/***/ 10609:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ TrackerAction)
/* harmony export */ });
var TrackerAction;
(function(TrackerAction) {
    TrackerAction["Click"] = "click";
    TrackerAction["Interaction"] = "interaction";
    TrackerAction["Impression"] = "impression";
})(TrackerAction || (TrackerAction = {}));


/***/ }),

/***/ 74321:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ useAnalyze)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38325);
/* harmony import */ var _utils_env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55812);
/* harmony import */ var _use_initial_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92644);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store__WEBPACK_IMPORTED_MODULE_1__]);
_store__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const useAnalyze = ()=>{
    const config = (0,_use_initial_data__WEBPACK_IMPORTED_MODULE_2__/* .useThemeConfig */ .LU)();
    const { userStore  } = (0,_store__WEBPACK_IMPORTED_MODULE_1__/* .useStore */ .oR)();
    const GA_TRACKING_ID = config.function.analyze.ga;
    const isEnableGA = config.function.analyze.enable;
    const pageview = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((url)=>{
        if (!GA_TRACKING_ID || !isEnableGA) {
            return;
        }
        window.gtag("config", GA_TRACKING_ID, {
            page_path: url
        });
        window.umami?.trackView(url);
        window._hmt?.push([
            "_trackPageview",
            url
        ]);
    }, [
        GA_TRACKING_ID,
        isEnableGA
    ]);
    // https://developers.google.com/analytics/devguides/collection/gtagjs/events
    const event = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((options)=>{
        const { action , label , category =label , value  } = options;
        if (_utils_env__WEBPACK_IMPORTED_MODULE_3__/* .isDev */ .r8 || userStore.isLogged) {
            console.log("event", options);
            return;
        }
        if (!GA_TRACKING_ID || !isEnableGA) {
            return;
        }
        try {
            window.gtag("event", action, {
                event_category: category,
                event_label: label,
                value
            });
            window.umami?.trackEvent(label || value?.toString() || "", action);
            window._hmt?.push([
                "_trackEvent",
                category || "event",
                action,
                label
            ]);
        } catch (err) {
            console.log(err);
        }
    }, [
        GA_TRACKING_ID,
        isEnableGA,
        userStore.isLogged
    ]);
    return {
        event,
        pageview
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 92644:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L6": () => (/* binding */ useInitialData),
/* harmony export */   "LU": () => (/* binding */ useThemeConfig),
/* harmony export */   "r5": () => (/* binding */ useThemeConfig)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_initial_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66098);


const useInitialData = ()=>{
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_initial_data__WEBPACK_IMPORTED_MODULE_1__/* .InitialContext */ .y).aggregateData;
};
const useThemeConfig = ()=>{
    const config = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_initial_data__WEBPACK_IMPORTED_MODULE_1__/* .InitialContext */ .y).config;
    return config;
};



/***/ }),

/***/ 59259:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ActionStore)
/* harmony export */ });
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36211);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_0__);
/*
 * @Author: Innei
 * @Date: 2020-08-07 16:56:07
 * @LastEditTime: 2020-08-08 13:26:25
 * @LastEditors: Innei
 * @FilePath: /mx-web/common/store/action.ts
 * @Coding with Love
 */ 
class ActionStore {
    constructor(){
        (0,mobx__WEBPACK_IMPORTED_MODULE_0__.makeAutoObservable)(this);
    }
    _actions = [];
    resetActions() {
        this._actions = [];
    }
    /**
   * clear and set actions (replace)
   * @param actions
   */ setActions(actions) {
        this.resetActions();
        this._actions.push(...actions);
    }
    appendActions(actions) {
        if (Array.isArray(actions)) {
            this._actions.push(...actions);
        } else {
            this._actions.push(actions);
        }
    }
    removeAction(action) {
        const index = this._actions.indexOf(action);
        if (index !== -1) {
            this._actions.splice(index, 1);
        }
    }
    removeActionByIndex(index) {
        if (index !== -1) {
            this._actions.splice(index, 1);
        }
    }
    removeActionBySymbol(id) {
        const index = this._actions.findIndex((i)=>i.id === id
        );
        this.removeActionByIndex(index);
    }
    get actions() {
        return [
            ...this._actions
        ];
    }
};


/***/ }),

/***/ 82592:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ AppUIStore)
/* harmony export */ });
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36211);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var utils_env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(55812);


class AppUIStore {
    constructor(){
        (0,mobx__WEBPACK_IMPORTED_MODULE_0__.makeAutoObservable)(this);
    }
    viewport = {};
    position = 0;
    scrollDirection = null;
    colorMode = "light";
    mediaType = "screen";
    headerNav = {
        title: "",
        meta: "",
        show: false
    };
    shareData = null;
    updatePosition(direction) {
        if (typeof document !== "undefined") {
            (0,mobx__WEBPACK_IMPORTED_MODULE_0__.runInAction)(()=>{
                this.position = document.documentElement.scrollTop;
                this.scrollDirection = direction;
            });
        }
    }
    get isOverFirstScreenHeight() {
        if (!(0,utils_env__WEBPACK_IMPORTED_MODULE_1__/* .isClientSide */ .S_)()) {
            return;
        }
        return this.position > window.innerHeight || this.position > screen.height;
    }
    get isOverPostTitleHeight() {
        if (!(0,utils_env__WEBPACK_IMPORTED_MODULE_1__/* .isClientSide */ .S_)()) {
            return;
        }
        return this.position > 126 || this.position > screen.height / 3;
    }
    updateViewport() {
        const innerHeight = window.innerHeight;
        const width = document.documentElement.getBoundingClientRect().width;
        const { hpad , pad , mobile  } = this.viewport;
        // 忽略移动端浏览器 上下滚动 导致的视图大小变化
        if (this.viewport.h && // chrome mobile delta == 56
        Math.abs(innerHeight - this.viewport.h) < 80 && width === this.viewport.w && (hpad || pad || mobile)) {
            return;
        }
        this.viewport = {
            w: width,
            h: innerHeight,
            mobile: window.screen.width <= 568 || window.innerWidth <= 568,
            pad: window.innerWidth <= 768 && window.innerWidth > 568,
            hpad: window.innerWidth <= 1024 && window.innerWidth > 768,
            wider: window.innerWidth > 1024 && window.innerWidth < 1920,
            widest: window.innerWidth >= 1920
        };
    }
    get isPadOrMobile() {
        return this.viewport.pad || this.viewport.mobile;
    }
};


/***/ }),

/***/ 87754:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ CommentStore)
/* harmony export */ });
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36211);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var utils_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9908);
/* harmony import */ var _helper_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(90470);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([utils_client__WEBPACK_IMPORTED_MODULE_1__]);
utils_client__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



class CommentStore extends _helper_base__WEBPACK_IMPORTED_MODULE_2__/* .Store */ .y {
    constructor(){
        super();
        (0,mobx__WEBPACK_IMPORTED_MODULE_0__.makeObservable)(this, {
            currentRefId: mobx__WEBPACK_IMPORTED_MODULE_0__.observable,
            comments: mobx__WEBPACK_IMPORTED_MODULE_0__.observable,
            commentIdMap: mobx__WEBPACK_IMPORTED_MODULE_0__.computed,
            fetchComment: mobx__WEBPACK_IMPORTED_MODULE_0__.action,
            updateComment: mobx__WEBPACK_IMPORTED_MODULE_0__.action,
            addComment: mobx__WEBPACK_IMPORTED_MODULE_0__.action,
            deleteComment: mobx__WEBPACK_IMPORTED_MODULE_0__.action,
            reset: mobx__WEBPACK_IMPORTED_MODULE_0__.action
        });
    }
    currentRefId = "";
    comments = [];
    get commentIdMap() {
        return this.data;
    }
    setHighlightCommnet(id, highlight = true) {
        const comment = this.commentIdMap.get(id);
        if (!comment) {
            return;
        }
        comment.highlight = highlight;
    }
    async fetchComment(refId, page = 1, size = 10) {
        const data = await utils_client__WEBPACK_IMPORTED_MODULE_1__/* .apiClient.comment.getByRefId */ .x.comment.getByRefId(refId, {
            page,
            size
        });
        console.log(data);
        this.currentRefId = refId;
        this.comments = [
            ...data.data
        ];
        this.data.clear();
        const flatAllComments = this.walkComments(this.comments);
        flatAllComments.forEach((comment)=>{
            this.data.set(comment.id, comment);
        });
        return data;
    }
    updateComment(comment1) {
        const oldComment = this.commentIdMap.get(comment1.id);
        if (!oldComment) {
            return;
        }
        if (oldComment.ref !== comment1.ref) {
            return;
        }
        this.walkComments(comment1.children).forEach((comment)=>{
            this.commentIdMap.set(comment.id, comment);
        });
        return Object.assign(oldComment, comment1);
    }
    addComment(comment) {
        if (!comment) {
            return;
        }
        if (comment.ref !== this.currentRefId) {
            return;
        }
        const isSubComment = comment.parent && (typeof comment.parent === "string" && this.data.has(comment.parent) || this.data.has(comment.parent?.id));
        if (isSubComment) {
            const parentComment = this.data.get(typeof comment.parent === "string" ? comment.parent : comment.parent?.id || "");
            if (parentComment) {
                parentComment.children.push(comment);
                this.updateComment(parentComment);
            }
        } else {
            this.comments.unshift(comment);
            this.walkComments(comment.children).forEach((child)=>{
                this.commentIdMap.set(child.id, child);
            });
        }
        return comment;
    }
    deleteComment(id) {
        const hasComment = this.data.has(id);
        if (!hasComment) {
            return;
        }
        this.data.delete(id);
    // TODO
    }
    walkComments(comments) {
        const allComments1 = [];
        const walkChild = (comment)=>{
            const allComments = [];
            if (comment.children.length) {
                return comment.children.reduce((arr, child)=>[
                        ...arr,
                        child,
                        ...walkChild(child)
                    ]
                , allComments);
            }
            return allComments;
        };
        return comments.reduce((acc, comment)=>{
            return [
                ...acc,
                comment,
                ...walkChild(comment)
            ];
        }, allComments1);
    }
    reset() {
        this.commentIdMap.clear();
        this.comments.length = 0;
        this.currentRefId = "";
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 27140:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ NoteStore)
/* harmony export */ });
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36211);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_message_popup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15255);
/* harmony import */ var react_message_popup__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_message_popup__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9908);
/* harmony import */ var _utils_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57573);
/* harmony import */ var _helper_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(90470);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_client__WEBPACK_IMPORTED_MODULE_2__, _utils_cookie__WEBPACK_IMPORTED_MODULE_3__]);
([_utils_client__WEBPACK_IMPORTED_MODULE_2__, _utils_cookie__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* eslint-disable @typescript-eslint/no-non-null-assertion */ 




class NoteStore extends _helper_base__WEBPACK_IMPORTED_MODULE_4__/* .Store */ .y {
    constructor(){
        super();
        (0,mobx__WEBPACK_IMPORTED_MODULE_0__.makeObservable)(this, {
            relationMap: mobx__WEBPACK_IMPORTED_MODULE_0__.observable,
            likeIdList: mobx__WEBPACK_IMPORTED_MODULE_0__.observable
        });
    }
    // 记录前后关系
    relationMap = new Map();
    nidToIdMap = new Map();
    likeIdList = new Set();
    get(id) {
        if (typeof id === "string") {
            return super.get(id);
        } else {
            const realId = this.nidToIdMap.get(id);
            return realId ? super.get(realId) : undefined;
        }
    }
    async like(id) {
        const note = this.get(id);
        if (!note) {
            return false;
        }
        const errorMessage = "\u4F60\u5DF2\u7ECF\u559C\u6B22\u8FC7\u5566";
        if (this.isLiked(id)) {
            react_message_popup__WEBPACK_IMPORTED_MODULE_1__.message.error(errorMessage);
            return;
        }
        try {
            await _utils_client__WEBPACK_IMPORTED_MODULE_2__/* .apiClient.note.likeIt */ .x.note.likeIt(id);
            note.count.like = note.count.like + 1;
            react_message_popup__WEBPACK_IMPORTED_MODULE_1__.message.success("\u611F\u8C22\u559C\u6B22!");
        } catch  {
            react_message_popup__WEBPACK_IMPORTED_MODULE_1__.message.error(errorMessage);
        } finally{
            this.likeIdList.add(id.toString());
            (0,_utils_cookie__WEBPACK_IMPORTED_MODULE_3__/* .setLikeId */ .D2)(`note-${note.nid.toString()}`);
        }
        return true;
    }
    isLiked(id) {
        const storeLiked = this.likeIdList.has(id.toString());
        const inCookie = (0,_utils_cookie__WEBPACK_IMPORTED_MODULE_3__/* .isLikedBefore */ .MO)(`note-${id.toString()}`);
        if (!storeLiked && inCookie) {
            this.likeIdList.add(id.toString());
        }
        return storeLiked || inCookie;
    }
    async fetchById(id, answer, options = {}) {
        if (!options.force) {
            if (typeof id === "string" && this.has(id)) {
                return this.get(id);
            } else if (typeof id === "number") {
                const realId = this.nidToIdMap.get(id);
                if (realId && this.has(realId)) {
                    return this.get(realId);
                }
            }
        }
        const data = await _utils_client__WEBPACK_IMPORTED_MODULE_2__/* .apiClient.note.getNoteById */ .x.note.getNoteById(id, answer);
        // console.log(data)
        (0,mobx__WEBPACK_IMPORTED_MODULE_0__.runInAction)(()=>{
            this.add(data.data);
            // TODO 这边的关系映射的添加 是不是应该覆写 add 方法比较好, 下面也是
            this.nidToIdMap.set(data.data.nid, data.data.id);
            this.relationMap.set(data.data.id, [
                data.prev,
                data.next
            ]);
        });
        return this.get(data.data.id);
    }
    async fetchLatest() {
        const data = await _utils_client__WEBPACK_IMPORTED_MODULE_2__/* .apiClient.note.getLatest */ .x.note.getLatest();
        (0,mobx__WEBPACK_IMPORTED_MODULE_0__.runInAction)(()=>{
            this.add(data.data);
            this.nidToIdMap.set(data.data.nid, data.data.id);
            this.relationMap.set(data.data.id, [
                data.prev,
                data.next
            ]);
        });
        return data.data;
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7704:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ PageStore)
/* harmony export */ });
/* harmony import */ var _utils_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9908);
/* harmony import */ var _helper_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90470);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_client__WEBPACK_IMPORTED_MODULE_0__]);
_utils_client__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


class PageStore extends _helper_base__WEBPACK_IMPORTED_MODULE_1__/* .Store */ .y {
    slugToIdMap = new Map();
    async fetchById(id, options = {}) {
        if (!options.force && this.has(id)) {
            return this.get(id);
        }
        const data = await _utils_client__WEBPACK_IMPORTED_MODULE_0__/* .apiClient.page.getById */ .x.page.getById(id);
        this.add(data);
        this.slugToIdMap.set(data.slug, data.id);
        return this.get(id);
    }
    async fetchBySlug(slug, options = {}) {
        if (!options.force && this.has(this.slugToIdMap.get(slug))) {
            return this.get(this.slugToIdMap.get(slug));
        }
        const data = await _utils_client__WEBPACK_IMPORTED_MODULE_0__/* .apiClient.page.getBySlug */ .x.page.getBySlug(slug);
        this.add(data);
        this.slugToIdMap.set(data.slug, data.id);
        return data;
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 92317:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ PostStore)
/* harmony export */ });
/* harmony import */ var _utils_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9908);
/* harmony import */ var _helper_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90470);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_client__WEBPACK_IMPORTED_MODULE_0__]);
_utils_client__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


class PostStore extends _helper_base__WEBPACK_IMPORTED_MODULE_1__/* .Store */ .y {
    async fetchById(id, options = {}) {
        if (!options.force && this.has(id)) {
            return this.get(id);
        }
        const data = await _utils_client__WEBPACK_IMPORTED_MODULE_0__/* .apiClient.post.getPost */ .x.post.getPost(id);
        this.add(data);
        return this.get(id);
    }
    async fetchBySlug(category, slug) {
        const data = await _utils_client__WEBPACK_IMPORTED_MODULE_0__/* .apiClient.post.getPost */ .x.post.getPost(category, encodeURIComponent(slug));
        this.add(data);
        return data;
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 88511:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ ProjectStore)
/* harmony export */ });
/* harmony import */ var _store_helper_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90470);
/* harmony import */ var _utils_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9908);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_client__WEBPACK_IMPORTED_MODULE_1__]);
_utils_client__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


class ProjectStore extends _store_helper_base__WEBPACK_IMPORTED_MODULE_0__/* .Store */ .y {
    async fetchById(id, force = false) {
        if (!force && this.has(id)) {
            return this.get(id);
        }
        const data = await _utils_client__WEBPACK_IMPORTED_MODULE_1__/* .apiClient.project.getById */ .x.project.getById(id);
        this.add(data);
        return this.get(id);
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 49291:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ SayStore)
/* harmony export */ });
/* harmony import */ var _store_helper_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90470);
/* harmony import */ var _utils_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9908);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_client__WEBPACK_IMPORTED_MODULE_1__]);
_utils_client__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


class SayStore extends _store_helper_base__WEBPACK_IMPORTED_MODULE_0__/* .Store */ .y {
    async fetch(page, size) {
        const data = await _utils_client__WEBPACK_IMPORTED_MODULE_1__/* .apiClient.say.getAllPaginated */ .x.say.getAllPaginated(page, size);
        this.add(data.data);
        return {
            ...data
        };
    }
    async fetchAll() {
        const data = await _utils_client__WEBPACK_IMPORTED_MODULE_1__/* .apiClient.say.getAll */ .x.say.getAll();
        this.add(data.data);
        return {
            ...data
        };
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 39731:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ GatewayStore)
/* harmony export */ });
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36211);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_0__);
/*
 * @Author: Innei
 * @Date: 2020-05-23 13:35:49
 * @LastEditTime: 2020-05-23 13:35:49
 * @LastEditors: Innei
 * @FilePath: /mx-web/store/gateway.ts
 * @MIT
 */ 
class GatewayStore {
    constructor(){
        (0,mobx__WEBPACK_IMPORTED_MODULE_0__.makeAutoObservable)(this);
    }
    online = 0;
};


/***/ }),

/***/ 90470:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "y": () => (/* binding */ Store)
});

// EXTERNAL MODULE: external "mobx"
var external_mobx_ = __webpack_require__(36211);
;// CONCATENATED MODULE: ./src/store/helper/structure.ts
class KeyValueCollection extends Map {
    constructor(){
        super();
    }
    // for mobx
    data = new Map();
    forEach(callbackfn, thisArg) {
        return this.data.forEach(callbackfn, thisArg);
    }
    clear() {
        this.data.clear();
    }
    delete(key) {
        return this.data.delete(key);
    }
    softDelete(key) {
        const data = this.data.get(key);
        if (!data) {
            return false;
        }
        data.isDeleted = true;
        return true;
    }
    get(key) {
        return this.data.get(key);
    }
    has(key) {
        return this.data.has(key);
    }
    set(key, value) {
        this.data.set(key, value);
        return this;
    }
    get size() {
        return this.data.size;
    }
    [Symbol.iterator]() {
        return this.entries();
    }
    entries() {
        return this.data.entries();
    }
    keys() {
        return this.data.keys();
    }
    values() {
        return this.data.values();
    }
    find(fn, thisArg) {
        if (typeof thisArg !== "undefined") fn = fn.bind(thisArg);
        for (const [key, val] of this){
            if (fn(val, key, this)) return val;
        }
        return undefined;
    }
    findKey(fn, thisArg) {
        if (typeof thisArg !== "undefined") fn = fn.bind(thisArg);
        for (const [key, val] of this){
            if (fn(val, key, this)) return key;
        }
        return undefined;
    }
    filter(fn, thisArg) {
        if (typeof thisArg !== "undefined") fn = fn.bind(thisArg);
        const results = new this.constructor[Symbol.species]();
        for (const [key, val] of this){
            if (fn(val, key, this)) results.set(key, val);
        }
        return results;
    }
    map(fn, thisArg) {
        if (typeof thisArg !== "undefined") fn = fn.bind(thisArg);
        const arr = new Array(this.size);
        let i = 0;
        for (const [key, val] of this)arr[i++] = fn(val, key, this);
        return arr;
    }
    some(fn, thisArg) {
        if (typeof thisArg !== "undefined") fn = fn.bind(thisArg);
        for (const [key, val] of this){
            if (fn(val, key, this)) return true;
        }
        return false;
    }
    every(fn, thisArg) {
        if (typeof thisArg !== "undefined") fn = fn.bind(thisArg);
        for (const [key, val] of this){
            if (!fn(val, key, this)) return false;
        }
        return true;
    }
    reduce(fn, initialValue) {
        let accumulator;
        if (typeof initialValue !== "undefined") {
            accumulator = initialValue;
            for (const [key, val] of this)accumulator = fn(accumulator, val, key, this);
        } else {
            let first = true;
            for (const [key, val] of this){
                if (first) {
                    accumulator = val;
                    first = false;
                    continue;
                }
                accumulator = fn(accumulator, val, key, this);
            }
        }
        return accumulator;
    }
    each(fn, thisArg) {
        this.forEach(fn, thisArg);
        return this;
    }
    clone() {
        return new this.constructor[Symbol.species](this);
    }
    merge(...collections) {
        // eslint-disable-next-line
        for (const coll of collections){
            // eslint-disable-next-line
            for (const [key, val] of coll)this.set(key, val);
        }
        return this;
    }
    concat(...collections) {
        const newColl = this.clone();
        // eslint-disable-next-line
        for (const coll of collections){
            // eslint-disable-next-line
            for (const [key, val] of coll)newColl.set(key, val);
        }
        return newColl;
    }
    sort(compareFunction = (x, y)=>+(x > y) || +(x === y) - 1
    ) {
        return new this.constructor[Symbol.species]([
            ...this.entries()
        ].sort((a, b)=>compareFunction(a[1], b[1])
        ));
    }
    get first() {
        return this.data.values().next().value;
    }
    get list() {
        return this.map((v)=>v
        );
    }
    static get [Symbol.species]() {
        return KeyValueCollection;
    }
    get [Symbol.toStringTag]() {
        return "KeyValueCollection";
    }
}

;// CONCATENATED MODULE: ./src/store/helper/base.ts


class Store extends KeyValueCollection {
    constructor(){
        super();
        (0,external_mobx_.makeObservable)(this, {
            data: external_mobx_.observable,
            set: external_mobx_.action,
            delete: external_mobx_.action,
            softDelete: external_mobx_.action,
            clear: external_mobx_.action,
            size: external_mobx_.computed,
            add: external_mobx_.action,
            remove: external_mobx_.action,
            addAndPatch: external_mobx_.action,
            list: external_mobx_.computed,
            first: external_mobx_.computed
        });
    }
    get raw() {
        return (0,external_mobx_.toJS)(this.data);
    }
    add(...args) {
        const add = (id, data)=>{
            if (Array.isArray(data)) {
                (0,external_mobx_.runInAction)(()=>{
                    data.forEach((d)=>{
                        this.add(d);
                    });
                });
                return;
            }
            this.set(id, {
                ...data
            });
        };
        if (typeof args[0] === "string") {
            const id = args[0];
            const data = args[1];
            add(id, data);
        } else {
            const data = args[0];
            add(data.id, data);
        }
        return this;
    }
    // same as add, but ignores `undefined`
    addAndPatch(data) {
        if (Array.isArray(data)) {
            data.forEach((d)=>{
                this.addAndPatch(d);
            });
            return this;
        }
        if (this.has(data.id)) {
            const exist = this.get(data.id);
            this.set(data.id, {
                ...exist,
                ...data
            });
        } else {
            this.set(data.id, data);
        }
        return this;
    }
    remove(id) {
        this.delete(id);
        return this;
    }
    hydrate(data) {
        if (data) {
            this.data = data;
        }
    }
}


/***/ }),

/***/ 38325:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* reexport safe */ _context_root_store__WEBPACK_IMPORTED_MODULE_0__.h),
/* harmony export */   "oR": () => (/* binding */ useStore)
/* harmony export */ });
/* harmony import */ var _context_root_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85035);
/* harmony import */ var _root_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49184);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_root_store__WEBPACK_IMPORTED_MODULE_0__, _root_store__WEBPACK_IMPORTED_MODULE_1__]);
([_context_root_store__WEBPACK_IMPORTED_MODULE_0__, _root_store__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

const useStore = _context_root_store__WEBPACK_IMPORTED_MODULE_0__/* .useRootStore */ .Yh;



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7408:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ MusicStore)
/* harmony export */ });
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36211);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_0__);

class MusicStore {
    constructor(){
        (0,mobx__WEBPACK_IMPORTED_MODULE_0__.makeAutoObservable)(this);
        if (!this.isHide) {
            this.reset();
        }
    }
    list = [];
    isHide = true;
    isPlay = false;
    /** 正在播放的歌曲 ID */ playId = 0;
    /** 当前时间 */ time = 0;
    /** 持续时间 */ duration = 0;
    get playProgress() {
        const percent = this.time / this.duration;
        return isNaN(percent) ? 0 : percent;
    }
    setPlayingInfo(id, time, duration) {
        (0,mobx__WEBPACK_IMPORTED_MODULE_0__.runInAction)(()=>{
            this.playId = id;
            this.time = time;
            this.duration = duration;
        });
    }
    reset() {
        this.isHide = true;
        this.isPlay = false;
        this.resetPlayingSongState();
        this.resetList();
    }
    resetPlayingSongState() {
        this.duration = 0;
        this.time = 0;
        this.playId = 0;
    }
    resetList() {
        this.resetPlayingSongState();
        this.list = window.data?.config.function.player.id ?? [
            563534789,
            1447327083,
            1450252250, 
        ];
    }
    empty() {
        this.resetPlayingSongState();
        this.list = [];
        this.isPlay = false;
    }
    setPlay(play) {
        if (this.list.length === 0) {
            this.resetList();
        }
        this.isPlay = play;
    }
    setHide(hide) {
        this.isHide = hide;
        if (hide) {
            this.isPlay = false;
        }
    }
    async setPlaylist(list) {
        this.list = [
            ...list
        ];
        this.resetPlayingSongState();
        return this.list;
    }
    play() {
        if (this.list.length == 0) {
            this.reset();
        }
        this.isHide = false;
        this.isPlay = true;
    }
}


/***/ }),

/***/ 49184:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ RootStore)
/* harmony export */ });
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59259);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82592);
/* harmony import */ var _collections_comment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87754);
/* harmony import */ var _collections_note__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27140);
/* harmony import */ var _collections_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7704);
/* harmony import */ var _collections_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(92317);
/* harmony import */ var _collections_project__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(88511);
/* harmony import */ var _collections_say__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(49291);
/* harmony import */ var _gateway__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(39731);
/* harmony import */ var _music__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7408);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(86638);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_collections_comment__WEBPACK_IMPORTED_MODULE_2__, _collections_note__WEBPACK_IMPORTED_MODULE_3__, _collections_page__WEBPACK_IMPORTED_MODULE_4__, _collections_post__WEBPACK_IMPORTED_MODULE_5__, _collections_project__WEBPACK_IMPORTED_MODULE_6__, _collections_say__WEBPACK_IMPORTED_MODULE_7__, _user__WEBPACK_IMPORTED_MODULE_10__]);
([_collections_comment__WEBPACK_IMPORTED_MODULE_2__, _collections_note__WEBPACK_IMPORTED_MODULE_3__, _collections_page__WEBPACK_IMPORTED_MODULE_4__, _collections_post__WEBPACK_IMPORTED_MODULE_5__, _collections_project__WEBPACK_IMPORTED_MODULE_6__, _collections_say__WEBPACK_IMPORTED_MODULE_7__, _user__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











class RootStore {
    constructor(){
        this.gatewayStore = new _gateway__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z();
        this.userStore = new _user__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z();
        this.appUIStore = new _app__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z();
        this.musicStore = new _music__WEBPACK_IMPORTED_MODULE_9__/* .MusicStore */ .w();
        this.actionStore = new _action__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z();
        this.commentStore = new _collections_comment__WEBPACK_IMPORTED_MODULE_2__/* .CommentStore */ .T();
        this.postStore = new _collections_post__WEBPACK_IMPORTED_MODULE_5__/* .PostStore */ .S();
        this.noteStore = new _collections_note__WEBPACK_IMPORTED_MODULE_3__/* .NoteStore */ .D();
        this.pageStore = new _collections_page__WEBPACK_IMPORTED_MODULE_4__/* .PageStore */ .j();
        this.sayStore = new _collections_say__WEBPACK_IMPORTED_MODULE_7__/* .SayStore */ .Y();
        this.projectStore = new _collections_project__WEBPACK_IMPORTED_MODULE_6__/* .ProjectStore */ .U();
    }
    get appStore() {
        return this.appUIStore;
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 86638:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ UserStore)
/* harmony export */ });
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36211);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9908);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_client__WEBPACK_IMPORTED_MODULE_1__]);
_utils_client__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/*
 * @Author: Innei
 * @Date: 2020-09-17 14:02:24
 * @LastEditTime: 2021-01-14 13:39:35
 * @LastEditors: Innei
 * @FilePath: /web/common/store/user.ts
 * @Mark: Coding with Love
 */ 

class UserStore {
    constructor(){
        (0,mobx__WEBPACK_IMPORTED_MODULE_0__.makeAutoObservable)(this);
    }
    master = null;
    token = null;
    get isLogged() {
        return !!this.token;
    }
    url = null;
    setUser(model) {
        this.master = model;
    }
    async fetchUrl() {
        if (!this.isLogged) {
            return;
        }
        const { data  } = await _utils_client__WEBPACK_IMPORTED_MODULE_1__/* .apiClient.proxy.options.url.get */ .x.proxy.options.url.get();
        this.url = data;
    }
    get username() {
        return this.master?.username || "";
    }
    get name() {
        return this.master?.name || "";
    }
    get introduce() {
        return this.master?.introduce || null;
    }
    setToken(token) {
        if (!token) {
            return this.token = null;
        }
        this.token = token;
        this.fetchUrl();
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 47635:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H_": () => (/* binding */ devtoolForbidden),
/* harmony export */   "nq": () => (/* binding */ releaseDevtool),
/* harmony export */   "zC": () => (/* binding */ printToConsole)
/* harmony export */ });
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4147);
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(55812);


const version = `v${_package_json__WEBPACK_IMPORTED_MODULE_0__/* .version */ .i8}` || "";
const isSpiderBot = ()=>{
    if ((0,_env__WEBPACK_IMPORTED_MODULE_1__/* .isServerSide */ .s$)()) {
        return false;
    }
    const ua = navigator.userAgent;
    if (/bot/.test(ua.toLowerCase())) {
        return true;
    }
    return false;
};
// for debug
const devTest = true;
const handler = async (isOpen, detail)=>{
    if (_env__WEBPACK_IMPORTED_MODULE_1__/* .isDev */ .r8 && !devTest || isSpiderBot()) {
        return;
    }
    const { removeListener , stop  } = await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 43491, 23));
    if (isOpen) {
        removeListener(handler);
        stop();
        document.body.innerHTML = "<h1>\u304A\u53EF\u611B\u3044\u3053\u3068\u3002</h1>";
        console.log(detail);
        document.body.style.cssText = `
background: #fff;
color: #000;
display: flex;
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
align-items: center;
justify-content: center;
flex-direction: column;
padding: 5rem;
margin: 0;
text-align: center;
`;
        console.clear();
        printToConsole();
    }
};
async function devtoolForbidden() {
    if (_env__WEBPACK_IMPORTED_MODULE_1__/* .isDev */ .r8 && !devTest) {
        return;
    }
    const { addListener , launch  } = await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 43491, 23));
    addListener(handler);
    launch();
}
const releaseDevtool = async ()=>{
    const { stop  } = await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 43491, 23));
    stop();
};
const motto = `
This Personal Space Powered By Mix Space.
Written by TypeScript, Coding with Love.
--------
Stay hungry. Stay foolish. --Steve Jobs
`;
function printToConsole() {
    try {
        if (document.firstChild?.nodeType !== Node.COMMENT_NODE) {
            document.prepend(document.createComment(motto));
        }
        console.log("%c Paul Style %c https://paugram.com ", "color: #fff; margin: 1em 0; padding: 5px 0; background: #3498db;", "margin: 1em 0; padding: 5px 0; background: #efefef;");
        console.log(`%c Mix Space %c https://innei.ren `, "color: #fff; margin: 1em 0; padding: 5px 0; background: #2980b9;", "margin: 1em 0; padding: 5px 0; background: #efefef;");
        console.log(`%c Kami ${version} %c https://innei.ren `, "color: #fff; margin: 1em 0; padding: 5px 0; background: #39C5BB;", "margin: 1em 0; padding: 5px 0; background: #efefef;");
    // eslint-disable-next-line no-empty
    } catch  {}
}


/***/ }),

/***/ 45562:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ stopEventDefault)
/* harmony export */ });
/* unused harmony export getElementViewTop */
const stopEventDefault = (e)=>{
    e.preventDefault();
    e.stopPropagation();
};
function getElementViewTop(element) {
    let actualTop = element.offsetTop;
    let current = element.offsetParent;
    while(current !== null){
        actualTop += current.offsetTop;
        current = current.offsetParent;
    }
    let elementScrollTop = 0;
    if (document.compatMode == "BackCompat") {
        elementScrollTop = document.body.scrollTop;
    } else {
        elementScrollTop = document.documentElement.scrollTop;
    }
    return actualTop - elementScrollTop;
}


/***/ }),

/***/ 43025:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ eventBus)
/* harmony export */ });
/* unused harmony export EventEmitter */
class EventEmitter {
    observers = {};
    on(event, handler) {
        const queue = this.observers[event];
        if (!queue) {
            this.observers[event] = [
                handler
            ];
            return;
        }
        const isExist = queue.some((func)=>{
            return func === handler;
        });
        if (!isExist) {
            this.observers[event].push(handler);
        }
    }
    emit(event, payload) {
        const queue = this.observers[event];
        if (!queue) {
            return;
        }
        for (const func of queue){
            func.call(this, payload);
        }
    }
    off(event, handler) {
        const queue = this.observers[event];
        if (!queue) {
            return;
        }
        if (handler) {
            const index = queue.findIndex((func)=>{
                return func === handler;
            });
            if (index !== -1) {
                queue.splice(index, 1);
            }
        } else {
            queue.length = 0;
        }
    }
}
const eventBus = new EventEmitter();


/***/ }),

/***/ 58276:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gj": () => (/* binding */ imagesRecord2Map),
/* harmony export */   "Ou": () => (/* binding */ getRandomImage),
/* harmony export */   "jg": () => (/* binding */ calculateDimensions)
/* harmony export */ });
/* harmony import */ var lodash_es_shuffle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66303);

const imagesRecord2Map = (images)=>{
    const map = new Map();
    images.forEach((image)=>{
        map.set(image.src, image);
    });
    return map;
};
const animeImages = [
    "qsNmnC2zHB5FW41.jpg",
    "GwJzq4SYtClRcZh.jpg",
    "6nOYcygRGXvpsFd.jpg",
    "Qr2ykmsEFpJn4BC.jpg",
    "KiOuTlCzge7JHh3.jpg",
    "sM2XCJTW8BdUe5i.jpg",
    "18KQYP9fNGbrzJu.jpg",
    "rdjZo6Sg2JReyiA.jpg",
    "X2MVRDe1tyJil3O.jpg",
    "EDoKvz5p7BXZ46U.jpg",
    "EGk4qUvcXDygV2z.jpg",
    "5QdwFC82gT3XPSZ.jpg",
    "KPyTCARHBzpxJ46.jpg",
    "7TOEIPwGrZB1qFb.jpg",
    "Ihj5QAZgVMqr9fJ.jpg",
    "KZ6jv8C92Vpwcih.jpg", 
].map((i)=>`/assets/images/${i}`
);
const getRandomImage = (count)=>{
    return (0,lodash_es_shuffle__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(animeImages).slice(0, count);
};
const calculateDimensions = (width, height, max)=>{
    const { height: maxHeight , width: maxWidth  } = max;
    const wRatio = maxWidth / width;
    const hRatio = maxHeight / height;
    let ratio = 1;
    if (maxWidth == Infinity && maxHeight == Infinity) {
        ratio = 1;
    } else if (maxWidth == Infinity) {
        if (hRatio < 1) ratio = hRatio;
    } else if (maxHeight == Infinity) {
        if (wRatio < 1) ratio = wRatio;
    } else if (wRatio < 1 || hRatio < 1) {
        ratio = wRatio <= hRatio ? wRatio : hRatio;
    }
    if (ratio < 1) {
        return {
            width: width * ratio,
            height: height * ratio
        };
    }
    return {
        width,
        height
    };
};


/***/ }),

/***/ 47097:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D2": () => (/* reexport safe */ _cookie__WEBPACK_IMPORTED_MODULE_2__.D2),
/* harmony export */   "D_": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_11__.D_),
/* harmony export */   "G7": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_3__.G),
/* harmony export */   "Gj": () => (/* reexport safe */ _images__WEBPACK_IMPORTED_MODULE_6__.Gj),
/* harmony export */   "HE": () => (/* reexport safe */ _spring__WEBPACK_IMPORTED_MODULE_9__.HE),
/* harmony export */   "Kk": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_11__.Kk),
/* harmony export */   "MO": () => (/* reexport safe */ _cookie__WEBPACK_IMPORTED_MODULE_2__.MO),
/* harmony export */   "Ou": () => (/* reexport safe */ _images__WEBPACK_IMPORTED_MODULE_6__.Ou),
/* harmony export */   "S_": () => (/* reexport safe */ _env__WEBPACK_IMPORTED_MODULE_4__.S_),
/* harmony export */   "WZ": () => (/* reexport safe */ _time__WEBPACK_IMPORTED_MODULE_10__.WZ),
/* harmony export */   "Wx": () => (/* reexport safe */ _load_script__WEBPACK_IMPORTED_MODULE_7__.Wx),
/* harmony export */   "YB": () => (/* reexport safe */ _event_emitter__WEBPACK_IMPORTED_MODULE_5__.Y),
/* harmony export */   "ZT": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_11__.ZT),
/* harmony export */   "eM": () => (/* reexport safe */ _time__WEBPACK_IMPORTED_MODULE_10__.eM),
/* harmony export */   "jg": () => (/* reexport safe */ _images__WEBPACK_IMPORTED_MODULE_6__.jg),
/* harmony export */   "nd": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_11__.nd),
/* harmony export */   "nq": () => (/* reexport safe */ _console__WEBPACK_IMPORTED_MODULE_1__.nq),
/* harmony export */   "r8": () => (/* reexport safe */ _env__WEBPACK_IMPORTED_MODULE_4__.r8),
/* harmony export */   "ri": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_11__.ri),
/* harmony export */   "ve": () => (/* reexport safe */ _load_script__WEBPACK_IMPORTED_MODULE_7__.ve),
/* harmony export */   "x1": () => (/* reexport safe */ _client__WEBPACK_IMPORTED_MODULE_0__.x)
/* harmony export */ });
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9908);
/* harmony import */ var _console__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47635);
/* harmony import */ var _cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57573);
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45562);
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55812);
/* harmony import */ var _event_emitter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(43025);
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(58276);
/* harmony import */ var _load_script__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(66886);
/* harmony import */ var _notice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(49198);
/* harmony import */ var _spring__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(12335);
/* harmony import */ var _time__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(52861);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(12727);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_client__WEBPACK_IMPORTED_MODULE_0__, _cookie__WEBPACK_IMPORTED_MODULE_2__, _notice__WEBPACK_IMPORTED_MODULE_8__]);
([_client__WEBPACK_IMPORTED_MODULE_0__, _cookie__WEBPACK_IMPORTED_MODULE_2__, _notice__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 66886:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Wx": () => (/* binding */ loadStyleSheet),
/* harmony export */   "ve": () => (/* binding */ loadScript)
/* harmony export */ });
/* unused harmony export appendStyle */
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55812);

const isLoadScriptMap = {};
const loadingQueueMap = {};
function loadScript(url) {
    return new Promise((resolve1, reject1)=>{
        const status = isLoadScriptMap[url];
        if (status === "loaded") {
            return resolve1(null);
        } else if (status === "loading") {
            loadingQueueMap[url] = !loadingQueueMap[url] ? [
                [
                    resolve1,
                    reject1
                ]
            ] : [
                ...loadingQueueMap[url],
                [
                    resolve1,
                    reject1
                ]
            ];
            return;
        }
        const script = document.createElement("script");
        script.src = url;
        script.crossOrigin = "anonymous";
        isLoadScriptMap[url] = "loading";
        script.onload = function() {
            isLoadScriptMap[url] = "loaded";
            resolve1(null);
            if (loadingQueueMap[url]) {
                loadingQueueMap[url].forEach(([resolve, reject])=>{
                    resolve(null);
                });
                delete loadingQueueMap[url];
            }
        };
        if (_env__WEBPACK_IMPORTED_MODULE_0__/* .isDev */ .r8) {
            console.log("load script: ", url);
        }
        script.onerror = function(e) {
            // this.onload = null here is necessary
            // because even IE9 works not like others
            this.onerror = this.onload = null;
            delete isLoadScriptMap[url];
            loadingQueueMap[url].forEach(([resolve, reject])=>{
                reject(e);
            });
            delete loadingQueueMap[url];
            reject1(e);
        };
        document.head.appendChild(script);
    });
}
const cssSet = new Set();
function loadStyleSheet(href) {
    if (cssSet.has(href)) {
        return;
    }
    const $link = document.createElement("link");
    $link.href = href;
    $link.rel = "stylesheet";
    $link.type = "text/css";
    $link.crossOrigin = "anonymous";
    cssSet.add(href);
    $link.onerror = (e)=>{
        $link.onerror = null;
        cssSet.delete(href);
    };
    document.head.appendChild($link);
    return {
        remove: ()=>{
            $link.parentNode && $link.parentNode.removeChild($link);
            cssSet.delete(href);
        }
    };
}
function appendStyle(style) {
    const $style = document.createElement("style");
    $style.innerHTML = style;
    document.head.appendChild($style);
    return {
        remove: ()=>{
            $style.parentNode && $style.parentNode.removeChild($style);
        }
    };
}


/***/ }),

/***/ 49198:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ Notice)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66405);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3590);
/* harmony import */ var _components_widgets_Toast_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23448);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38325);
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(55812);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_2__, _components_widgets_Toast_card__WEBPACK_IMPORTED_MODULE_3__, _store__WEBPACK_IMPORTED_MODULE_4__]);
([react_toastify__WEBPACK_IMPORTED_MODULE_2__, _components_widgets_Toast_card__WEBPACK_IMPORTED_MODULE_3__, _store__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






class Notice {
    static shared = new Notice();
    isInit = false;
    $wrap;
    initNotice() {
        if ((0,_env__WEBPACK_IMPORTED_MODULE_5__/* .isServerSide */ .s$)()) {
            return new Promise((r)=>r(false)
            );
        }
        if (!this.$wrap) {
            this.$wrap = document.createElement("div");
            document.documentElement.appendChild(this.$wrap);
            react_dom__WEBPACK_IMPORTED_MODULE_1___default().render(react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_toastify__WEBPACK_IMPORTED_MODULE_2__.ToastContainer, {
                autoClose: 3000,
                pauseOnHover: true,
                hideProgressBar: true,
                newestOnTop: true,
                closeOnClick: true,
                closeButton: false,
                toastClassName: ({ type  })=>""
                ,
                bodyClassName: ()=>""
                ,
                style: {
                    width: 350
                }
            }), this.$wrap);
        }
        return new Promise((r)=>{
            if ((0,_env__WEBPACK_IMPORTED_MODULE_5__/* .isServerSide */ .s$)()) {
                return;
            }
            if (!("Notification" in window)) {
                r(false);
            } else if (Notification.permission !== "denied") {
                try {
                    Notification.requestPermission().then((p)=>p === "granted" ? r(true) : r(false)
                    );
                } catch (error) {
                    // Safari doesn't return a promise for requestPermissions and it
                    // throws a TypeError. It takes a callback as the first argument
                    // instead.
                    if (error instanceof TypeError) {
                        Notification.requestPermission((p)=>p === "granted" ? r(true) : r(false)
                        );
                    } else {
                        throw error;
                    }
                }
            } else if (Notification.permission === "denied") {
                return r(false);
            } else {
                r(true);
            }
        });
    }
    async notice({ title , text , description , onclick =null , options ={}  }) {
        if (!this.isInit) {
            this.isInit = await this.initNotice();
        }
        if (document.hasFocus() || _env__WEBPACK_IMPORTED_MODULE_5__/* .isDev */ .r8) {
            this.createFrameNotification({
                title: text,
                text: description,
                duration: 5000,
                onclick
            });
        }
        return new Promise((r)=>{
            this.initNotice().then((b)=>{
                if (b && !document.hasFocus()) {
                    const notification = new Notification(title, {
                        body: text,
                        image: _store__WEBPACK_IMPORTED_MODULE_4__/* .store.userStore.master */ .h.userStore.master?.avatar || `${location.origin}/manifest-icon-192.png`,
                        ...options
                    });
                    notification.onclick = (e)=>{
                        onclick?.(e);
                        notification.close();
                    };
                    r(notification);
                }
            });
        });
    }
    /** 页面内通知 */ createFrameNotification({ text , title , duration =5000 , onclick =null , description  }) {
        if ((0,_env__WEBPACK_IMPORTED_MODULE_5__/* .isServerSide */ .s$)()) {
            return;
        }
        (0,react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast)(react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_widgets_Toast_card__WEBPACK_IMPORTED_MODULE_3__/* .ToastCard */ .J, {
            text,
            title,
            description
        }), {
            autoClose: duration,
            onClick (e) {
                onclick?.(e.nativeEvent);
            }
        });
    }
}
if (!(0,_env__WEBPACK_IMPORTED_MODULE_5__/* .isServerSide */ .s$)()) {
    window.n = Notice.shared;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 12335:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HE": () => (/* binding */ springScrollToElement),
/* harmony export */   "UU": () => (/* binding */ genSpringKeyframes),
/* harmony export */   "YG": () => (/* binding */ springScrollToTop)
/* harmony export */ });
/* unused harmony export springScrollTo */
/* harmony import */ var css_spring__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71705);
/* harmony import */ var css_spring__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(css_spring__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(55812);


const cache = new Map();
const genSpringKeyframes = (name, from, to, options = {
    preset: "gentle"
})=>{
    if (!(0,_env__WEBPACK_IMPORTED_MODULE_1__/* .isClientSide */ .S_)() || cache.has(name)) {
        return [
            name,
            null,
            null
        ];
    }
    const transformProperty = [
        "translateX",
        "translateY",
        "translateZ",
        "scale",
        "rotate", 
    ];
    const keyframes = (0,css_spring__WEBPACK_IMPORTED_MODULE_0__.toString)(css_spring__WEBPACK_IMPORTED_MODULE_0___default()(from, to, options), (property, value)=>transformProperty.includes(property) ? `transform: ${property}(${value});` : `${property}:${value};`
    );
    const css = document.createElement("style");
    css.innerHTML = `
  @keyframes ${name} {${keyframes}}`;
    document.head.appendChild(css);
    cache.set(name, keyframes);
    return [
        name,
        css,
        keyframes
    ];
};
const springScrollToTop = ()=>springScrollTo(0)
;
const springScrollTo = (to, duration = 1000, container)=>{
    if (!(0,_env__WEBPACK_IMPORTED_MODULE_1__/* .isClientSide */ .S_)()) {
        return;
    }
    const scrollContainer = container || document.documentElement;
    const res = css_spring__WEBPACK_IMPORTED_MODULE_0___default()({
        top: scrollContainer.scrollTop
    }, {
        top: to
    }, {
        stiffness: 300,
        damping: 55
    });
    let raf;
    const cancelScroll = ()=>{
        raf = cancelAnimationFrame(raf);
        scrollContainer.removeEventListener("wheel", cancelScroll);
        scrollContainer.removeEventListener("touchstart", cancelScroll);
    };
    scrollContainer.addEventListener("wheel", cancelScroll);
    scrollContainer.addEventListener("touchstart", cancelScroll, {
        passive: true
    });
    setTimeout(()=>{
        cancelScroll();
    }, duration + 50);
    const ts = +new Date();
    raf = requestAnimationFrame(function an() {
        const current = +new Date();
        const percent = Math.floor((current - ts) / duration * 100);
        if (percent > 100) {
            scrollContainer.scrollTop = res[`${100}%`].top;
            return;
        }
        raf = requestAnimationFrame(an);
        if (res[`${percent}%`]?.top) {
            scrollContainer.scrollTop = res[`${percent}%`].top;
        }
    });
};
const springScrollToElement = (el, duration = 1000, offset = 0, container)=>{
    if (!(0,_env__WEBPACK_IMPORTED_MODULE_1__/* .isClientSide */ .S_)()) {
        return;
    }
    const height = calculateElementTop(el) + offset;
    return springScrollTo(height, duration, container);
};
const calculateElementTop = (el)=>{
    let top = 0;
    while(el){
        top += el.offsetTop;
        el = el.offsetParent;
    }
    return top;
};


/***/ }),

/***/ 52861:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IW": () => (/* binding */ secondOfDay),
/* harmony export */   "T8": () => (/* binding */ secondOfDays),
/* harmony export */   "WZ": () => (/* binding */ hms),
/* harmony export */   "eM": () => (/* binding */ relativeTimeFromNow),
/* harmony export */   "fJ": () => (/* binding */ daysOfYear),
/* harmony export */   "sG": () => (/* binding */ parseDate),
/* harmony export */   "vz": () => (/* binding */ dayOfYear)
/* harmony export */ });
/* unused harmony exports DateFormat, isLeapYear */
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayjs_locale_zh_cn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95468);
/* harmony import */ var dayjs_locale_zh_cn__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs_locale_zh_cn__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84125);
/* harmony import */ var dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var dayjs_plugin_localizedFormat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67424);
/* harmony import */ var dayjs_plugin_localizedFormat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_localizedFormat__WEBPACK_IMPORTED_MODULE_3__);
/*
 * @Author: Innei
 * @Date: 2020-09-17 14:02:24
 * @LastEditTime: 2021-05-29 18:17:15
 * @LastEditors: Innei
 * @FilePath: /web/utils/time.ts
 * Mark: Coding with Love
 */ 



// import relativeTime from 'dayjs/plugin/relativeTime'
dayjs__WEBPACK_IMPORTED_MODULE_0___default().extend((dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_2___default()));
// dayjs.extend(relativeTime)
dayjs__WEBPACK_IMPORTED_MODULE_0___default().extend((dayjs_plugin_localizedFormat__WEBPACK_IMPORTED_MODULE_3___default()));
dayjs__WEBPACK_IMPORTED_MODULE_0___default().locale("zh-cn");
var DateFormat;
(function(DateFormat) {
    DateFormat[DateFormat["MMM DD YYYY"] = 0] = "MMM DD YYYY";
    DateFormat[DateFormat["HH:mm"] = 1] = "HH:mm";
    DateFormat[DateFormat["LLLL"] = 2] = "LLLL";
    DateFormat[DateFormat["H:mm:ss A"] = 3] = "H:mm:ss A";
    DateFormat[DateFormat["YYYY-MM-DD"] = 4] = "YYYY-MM-DD";
    DateFormat[DateFormat["YYYY-MM-DD dddd"] = 5] = "YYYY-MM-DD dddd";
    DateFormat[DateFormat["YYYY-MM-DD ddd"] = 6] = "YYYY-MM-DD ddd";
    DateFormat[DateFormat["MM-DD ddd"] = 7] = "MM-DD ddd";
})(DateFormat || (DateFormat = {}));
const parseDate = (time, format)=>dayjs__WEBPACK_IMPORTED_MODULE_0___default()(time).format(format)
;
const relativeTimeFromNow = (time, current = new Date())=>{
    time = new Date(time);
    const msPerMinute = 60 * 1000;
    const msPerHour = msPerMinute * 60;
    const msPerDay = msPerHour * 24;
    const msPerMonth = msPerDay * 30;
    const msPerYear = msPerDay * 365;
    const elapsed = +current - +time;
    if (elapsed < msPerMinute) {
        const gap = Math.ceil(elapsed / 1000);
        return gap <= 0 ? "\u521A\u521A" : `${gap} 秒前`;
    } else if (elapsed < msPerHour) {
        return `${Math.round(elapsed / msPerMinute)} 分钟前`;
    } else if (elapsed < msPerDay) {
        return `${Math.round(elapsed / msPerHour)} 小时前`;
    } else if (elapsed < msPerMonth) {
        return `${Math.round(elapsed / msPerDay)} 天前`;
    } else if (elapsed < msPerYear) {
        return `${Math.round(elapsed / msPerMonth)} 个月前`;
    } else {
        return `${Math.round(elapsed / msPerYear)} 年前`;
    }
};
const dayOfYear = ()=>{
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now.getTime() - start.getTime();
    const oneDay = 1000 * 60 * 60 * 24;
    const day = Math.floor(diff / oneDay);
    return day;
};
function daysOfYear(year) {
    return isLeapYear(year ?? new Date().getFullYear()) ? 366 : 365;
}
function isLeapYear(year) {
    return year % 400 === 0 || year % 100 !== 0 && year % 4 === 0;
}
const secondOfDay = ()=>{
    const dt = new Date();
    const secs = dt.getSeconds() + 60 * (dt.getMinutes() + 60 * dt.getHours());
    return secs;
};
const secondOfDays = 86400;
function hms(seconds) {
    // @ts-ignore
    // return [3600, 60] // 00:00:00
    return [
        60
    ].reduceRight(// @ts-ignore
    (p, b)=>(r)=>[
                Math.floor(r / b)
            ].concat(p(r % b))
    , (r)=>[
            r
        ]
    )(seconds).map((a)=>a.toString().padStart(2, "0")
    ).join(":");
}


/***/ }),

/***/ 12727:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D_": () => (/* binding */ getSummaryFromMd),
/* harmony export */   "Kk": () => (/* binding */ resolveUrl),
/* harmony export */   "ZT": () => (/* binding */ noop),
/* harmony export */   "nd": () => (/* binding */ escapeHTMLTag),
/* harmony export */   "ri": () => (/* binding */ NoSSR)
/* harmony export */ });
/* unused harmony export writeBody */
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26958);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var remove_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4579);
/* harmony import */ var remove_markdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(remove_markdown__WEBPACK_IMPORTED_MODULE_1__);


function getSummaryFromMd(text, options = {
    count: false,
    length: 150
}) {
    const rawText = remove_markdown__WEBPACK_IMPORTED_MODULE_1___default()(text, {
        gfm: true
    });
    const description = rawText.slice(0, options.length).replace(/[\s]/gm, " ");
    if (options.count) {
        return {
            description,
            wordCount: rawText.length
        };
    }
    return description;
}
const resolveUrl = (pathname, base)=>{
    return base.replace(/\/$/, "").concat(pathname || "");
};
const NoSSR = (comp)=>next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(()=>Promise.resolve(comp)
    , {
        ssr: false
    })
;
// for api server
const writeBody = (res, bodyJSON, code)=>{
    res.writeHead(code ?? 200, {
        "Content-Type": "application/json"
    });
    const json = JSON.stringify(bodyJSON);
    res.end(json);
};
const escapeHTMLTag = (html)=>{
    const lt = /</g, gt = />/g, ap = /'/g, ic = /"/g;
    return html.toString().replace(lt, "&lt;").replace(gt, "&gt;").replace(ap, "&#39;").replace(ic, "&#34;");
};
const _noop = {};
const noop = new Proxy(_noop, {
    get (a, b, c) {
        return noop;
    },
    apply () {
        // eslint-disable-next-line prefer-rest-params
        return Reflect.apply(noop, this, arguments);
    }
});


/***/ }),

/***/ 4147:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"i8":"3.9.5","HO":{"lp":"12.1.6"}}');

/***/ })

};
;