(() => {
var exports = {};
exports.id = 5405;
exports.ids = [5405];
exports.modules = {

/***/ 94273:
/***/ ((module) => {

// Exports
module.exports = {
	"avatar-item": "SectionNews_avatar-item__nXaU7",
	"avatar-name": "SectionNews_avatar-name__aUSJI",
	"friends-wrap": "SectionNews_friends-wrap__ViPqk",
	"card-container": "SectionNews_card-container__V5ZgY",
	"card-cover-wrap": "SectionNews_card-cover-wrap__y0HNr",
	"card-title": "SectionNews_card-title__zpQfi",
	"card-body": "SectionNews_card-body__7I51K",
	"card-header": "SectionNews_card-header__2nws9",
	"text-shade": "SectionNews_text-shade__qmZ8A",
	"news-article": "SectionNews_news-article__CXBta",
	"text-mask": "SectionNews_text-mask__WNKwU"
};


/***/ }),

/***/ 4057:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "intro_root__nNLie"
};


/***/ }),

/***/ 23306:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "section_root__G_etu"
};


/***/ }),

/***/ 68125:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ FriendsSection)
/* harmony export */ });
/* unused harmony export FriendItem */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var api_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9378);
/* harmony import */ var _utils_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9908);
/* harmony import */ var _universal_Avatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44199);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(94273);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_client__WEBPACK_IMPORTED_MODULE_3__]);
_utils_client__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const FriendItem = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)((props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_5___default()["avatar-item"]),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_universal_Avatar__WEBPACK_IMPORTED_MODULE_4__/* .Avatar */ .q, {
                imageUrl: props.avatar,
                alt: props.name,
                url: props.url
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_5___default()["avatar-name"]),
                children: props.name
            })
        ]
    });
});
const FriendsSection = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(()=>{
    const { 0: friends , 1: setFriends  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        _utils_client__WEBPACK_IMPORTED_MODULE_3__/* .apiClient.link.getAllPaginated */ .x.link.getAllPaginated(1, 20).then((res)=>{
            const data = res.data;
            setFriends(data.filter((i)=>i.type === api_client__WEBPACK_IMPORTED_MODULE_2__/* .LinkType.Friend */ .Un.Friend && i.state === api_client__WEBPACK_IMPORTED_MODULE_2__/* .LinkState.Pass */ .PT.Pass && !i.hide
            ));
        });
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_5___default()["friends-wrap"]),
        children: friends.map((item)=>{
            return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(FriendItem, {
                ...item,
                key: item.id
            });
        })
    });
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9146:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "q": () => (/* binding */ SectionCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_es_pick__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(87092);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37937);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_universal_Image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(66264);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(94273);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _section__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(75784);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_universal_Image__WEBPACK_IMPORTED_MODULE_3__, _section__WEBPACK_IMPORTED_MODULE_4__]);
([_components_universal_Image__WEBPACK_IMPORTED_MODULE_3__, _section__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const Card = (props)=>{
    const { cover , shade =true , title , children  } = props;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_5___default()["card-container"]),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_5___default()["card-cover-wrap"]),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Image__WEBPACK_IMPORTED_MODULE_3__/* .ImageLazy */ .X, {
                    src: cover,
                    className: "dark:brightness-50 dark:filter"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_5___default()["card-header"])
            }),
            title && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_5___default()["card-title"]),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                    children: title
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_5___default()["card-body"]),
                children: children
            }),
            shade && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_5___default()["text-shade"])
            })
        ]
    });
};
const SectionNews = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)((props, ref)=>{
    const { content , ...rest } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_section__WEBPACK_IMPORTED_MODULE_4__/* .SectionWrap */ .K, {
        ...rest,
        ref: ref,
        children: content.map((item, i)=>{
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    ...(0,lodash_es_pick__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(item, [
                        "href",
                        "as"
                    ]),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_5___default()["news-article"]),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Card, {
                            cover: item.background,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_5___default()["text-mask"]),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: item.title
                                })
                            })
                        })
                    })
                })
            }, i);
        })
    });
}));
const SectionCard = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(({ title , desc , src , onClick , href  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `col-6 col-m-3`,
        style: {
            marginTop: "2rem"
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            className: (_index_module_css__WEBPACK_IMPORTED_MODULE_5___default()["news-article"]),
            href: href,
            onClick: onClick,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Card, {
                cover: src,
                title: title,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    children: desc
                })
            })
        })
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SectionNews);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 75784:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ SectionWrap)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45944);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37937);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var randomcolor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30503);
/* harmony import */ var randomcolor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(randomcolor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_universal_Icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10298);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(38325);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store__WEBPACK_IMPORTED_MODULE_6__]);
_store__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const SectionWrap = (0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__.observer)(/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_4__.forwardRef)((props, ref)=>{
    const { title , icon , moreUrl , color =randomcolor__WEBPACK_IMPORTED_MODULE_3___default()({
        luminosity: "dark"
    }) , showMoreIcon =true , ...rest } = props;
    const { appStore  } = (0,_store__WEBPACK_IMPORTED_MODULE_6__/* .useStore */ .oR)();
    const mode = appStore.colorMode;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "news-item",
            ref: ref,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "news-head",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                            className: "title",
                            style: {
                                backgroundColor: color,
                                filter: mode === "dark" ? "brightness(0.8)" : undefined
                            },
                            suppressHydrationWarning: true,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "absolute left-4 z-1 transform scale-120",
                                    children: icon
                                }),
                                title
                            ]
                        }),
                        showMoreIcon && moreUrl && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                            className: "more",
                            style: {
                                backgroundColor: color,
                                filter: mode === "dark" ? "brightness(0.8)" : undefined
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: moreUrl,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Icons__WEBPACK_IMPORTED_MODULE_5__/* .IcBaselineArrowForwardIos */ .MM, {})
                                })
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "news-body",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "grid sm:grid-cols-4 grid-cols-2 gap-4",
                        ...rest,
                        children: props.children
                    })
                })
            ]
        })
    });
}));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 51816:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ HomeIntro)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45944);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var pages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(66217);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(84466);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_transition_group__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(47097);
/* harmony import */ var _components_universal_Animate_text_anim__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(36872);
/* harmony import */ var _components_universal_Avatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(44199);
/* harmony import */ var _components_universal_FloatPopover__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(85782);
/* harmony import */ var _components_universal_FontIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(17612);
/* harmony import */ var _components_universal_Transition_bottom_up__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9987);
/* harmony import */ var _hooks_use_initial_data__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(92644);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(38325);
/* harmony import */ var _intro_module_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4057);
/* harmony import */ var _intro_module_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_intro_module_css__WEBPACK_IMPORTED_MODULE_12__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([pages__WEBPACK_IMPORTED_MODULE_2__, utils__WEBPACK_IMPORTED_MODULE_4__, _components_universal_FloatPopover__WEBPACK_IMPORTED_MODULE_7__, _store__WEBPACK_IMPORTED_MODULE_11__]);
([pages__WEBPACK_IMPORTED_MODULE_2__, utils__WEBPACK_IMPORTED_MODULE_4__, _components_universal_FloatPopover__WEBPACK_IMPORTED_MODULE_7__, _store__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const wrapperProps = {
    className: "!w-full !h-full !border-none !shadow-none"
};
const HomeIntro = (0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__.observer)(()=>{
    const { doAnimation  } = (0,pages__WEBPACK_IMPORTED_MODULE_2__.useIndexViewContext)();
    const { userStore  } = (0,_store__WEBPACK_IMPORTED_MODULE_11__/* .useStore */ .oR)();
    const { master: user  } = userStore;
    if (!user) {
        return null;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: (_intro_module_css__WEBPACK_IMPORTED_MODULE_12___default().root),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "intro-avatar",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Avatar__WEBPACK_IMPORTED_MODULE_6__/* .Avatar */ .q, {
                    useRandomColor: false,
                    imageUrl: user.avatar || "",
                    alt: user.name,
                    wrapperProps: wrapperProps
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "intro-info",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Animate_text_anim__WEBPACK_IMPORTED_MODULE_5__/* .TextFade */ .S, {
                            children: user.name || ""
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "paragraph",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Animate_text_anim__WEBPACK_IMPORTED_MODULE_5__/* .TextFade */ .S, {
                            duration: 10,
                            appear: doAnimation,
                            children: user.introduce || ""
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Social, {})
                ]
            })
        ]
    });
});
// 首页 社交 图标栏
const Social = (0,utils__WEBPACK_IMPORTED_MODULE_4__/* .NoSSR */ .ri)(()=>{
    const config = (0,_hooks_use_initial_data__WEBPACK_IMPORTED_MODULE_10__/* .useThemeConfig */ .LU)();
    const { doAnimation  } = (0,pages__WEBPACK_IMPORTED_MODULE_2__.useIndexViewContext)();
    const { social  } = config.site;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_3__.TransitionGroup, {
        appear: doAnimation,
        className: "social-icons space-x-4",
        children: social.map((item, i)=>{
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Transition_bottom_up__WEBPACK_IMPORTED_MODULE_9__/* .BottomUpTransitionView */ ._, {
                appear: doAnimation,
                timeout: {
                    enter: 500 + 50 * i
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_FloatPopover__WEBPACK_IMPORTED_MODULE_7__/* .FloatPopover */ .r, {
                    placement: "bottom",
                    triggerComponent: ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            href: item.url,
                            target: "_blank",
                            style: item.color ? {
                                color: item.color
                            } : undefined,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_FontIcon__WEBPACK_IMPORTED_MODULE_8__/* .FontIcon */ .x, {
                                icon: item.icon
                            })
                        })
                    ,
                    children: item.title
                })
            }, item.title);
        })
    });
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 61214:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ HomeRandomSay)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69755);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_use__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47097);
/* harmony import */ var _components_universal_Animate_text_anim__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(36872);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([utils__WEBPACK_IMPORTED_MODULE_3__]);
utils__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





let cacheSay = "";
const HomeRandomSay = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(()=>{
    const update = (0,react_use__WEBPACK_IMPORTED_MODULE_2__.useUpdate)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const timer = setInterval(()=>{
            cacheSay = "";
        }, 60 * 1000);
        return ()=>{
            clearInterval(timer);
        };
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (cacheSay.length > 0) {
            return;
        }
        utils__WEBPACK_IMPORTED_MODULE_3__/* .apiClient.say.getRandom */ .x1.say.getRandom().then(({ data  })=>{
            if (!data) {
                return;
            }
            cacheSay = `${data.text}  ——${(data.author ?? data.source) ?? "\u7AD9\u957F\u8BF4"}`;
            update();
        });
        update();
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "overflow-hidden leading-6 text-[#aaa] my-[2rem]",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Animate_text_anim__WEBPACK_IMPORTED_MODULE_4__/* .TextFade */ .S, {
            text: cacheSay
        })
    });
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1315:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ HomeSections)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80352);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var pages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(66217);
/* harmony import */ var react_message_popup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15255);
/* harmony import */ var react_message_popup__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_message_popup__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(84466);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_transition_group__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(47097);
/* harmony import */ var _components_universal_Icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(10298);
/* harmony import */ var _components_universal_Icons_menu_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(93961);
/* harmony import */ var _components_universal_Transition_bottom_up__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9987);
/* harmony import */ var _hooks_use_initial_data__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(92644);
/* harmony import */ var _SectionNews__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9146);
/* harmony import */ var _SectionNews_friend__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(68125);
/* harmony import */ var _SectionNews_section__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(75784);
/* harmony import */ var _section_module_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(23306);
/* harmony import */ var _section_module_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_section_module_css__WEBPACK_IMPORTED_MODULE_15__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([lodash_es__WEBPACK_IMPORTED_MODULE_2__, pages__WEBPACK_IMPORTED_MODULE_4__, utils__WEBPACK_IMPORTED_MODULE_7__, _SectionNews__WEBPACK_IMPORTED_MODULE_12__, _SectionNews_friend__WEBPACK_IMPORTED_MODULE_13__, _SectionNews_section__WEBPACK_IMPORTED_MODULE_14__]);
([lodash_es__WEBPACK_IMPORTED_MODULE_2__, pages__WEBPACK_IMPORTED_MODULE_4__, utils__WEBPACK_IMPORTED_MODULE_7__, _SectionNews__WEBPACK_IMPORTED_MODULE_12__, _SectionNews_friend__WEBPACK_IMPORTED_MODULE_13__, _SectionNews_section__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

















// export interface PhotoModel extends TextBaseModel {
//   hide: boolean;
//   copyright: boolean;
//   title: string;
//   slug: string;
//   photos: string[];
//   album: {name:string;slug:string};
// }
// export interface AggregateTopMy extends AggregateTop {
//   photos: Pick<PhotoModel, 'id' | 'slug' | 'title' | 'photos' | 'album'>[];
// }
const _Sections = ({ notes , posts , photos  })=>{
    const config = (0,_hooks_use_initial_data__WEBPACK_IMPORTED_MODULE_11__/* .useThemeConfig */ .LU)();
    const randomImages = config.site.figure?.length ? (0,lodash_es__WEBPACK_IMPORTED_MODULE_2__.shuffle)(config.site.figure) : (0,utils__WEBPACK_IMPORTED_MODULE_7__/* .getRandomImage */ .Ou)();
    const currentImageIndex = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(0);
    const getRandomUnRepeatImage = ()=>randomImages[(currentImageIndex.current++) % randomImages.length]
    ;
    const sections = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)({
        postSection: {
            title: "\u6700\u65B0\u535A\u6587",
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Icons_menu_icon__WEBPACK_IMPORTED_MODULE_9__/* .IcTwotoneSignpost */ .$F, {}),
            moreUrl: "posts",
            content: posts.slice(0, 4).map((p)=>{
                return {
                    title: p.title,
                    background: getRandomUnRepeatImage(),
                    id: p.id,
                    ...buildRoute("Post", p)
                };
            })
        },
        noteSection: {
            title: "\u968F\u4FBF\u5199\u5199",
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Icons__WEBPACK_IMPORTED_MODULE_8__/* .MdiDrawPen */ .Mr, {}),
            moreUrl: "notes",
            content: notes.slice(0, 4).map((n)=>{
                return {
                    title: n.title,
                    background: getRandomUnRepeatImage(),
                    id: n.id,
                    ...buildRoute("Note", n)
                };
            })
        },
        photoSection: {
            title: "\u6700\u65B0\u76F8\u518C",
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Icons__WEBPACK_IMPORTED_MODULE_8__/* .FasPhoto */ .AM, {}),
            moreUrl: "photos",
            content: photos.slice(0, 4).map((n)=>{
                return {
                    title: n.title,
                    background: "https://image.wind-watcher.cn/" + n.photos.pop(),
                    id: n.id,
                    ...buildRoute("Photo", n)
                };
            })
        }
    });
    const { 0: like1 , 1: setLike  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        utils__WEBPACK_IMPORTED_MODULE_7__/* .apiClient.proxy */ .x1.proxy("like_this").get().then((number)=>{
            setLike(~~number);
        });
    }, []);
    const { doAnimation  } = (0,pages__WEBPACK_IMPORTED_MODULE_4__.useIndexViewContext)();
    const SectionCompList = [
        /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_SectionNews__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
            ...sections.current.postSection,
            key: "1"
        }),
        /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_SectionNews__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
            ...sections.current.noteSection,
            key: "2"
        }),
        /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_SectionNews__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
            ...sections.current.photoSection,
            key: "3"
        }),
        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SectionNews_section__WEBPACK_IMPORTED_MODULE_14__/* .SectionWrap */ .K, {
            title: "\u670B\u53CB\u4EEC",
            moreUrl: "friends",
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Icons__WEBPACK_IMPORTED_MODULE_8__/* .PhUsersDuotone */ .AQ, {}),
            className: "w-full",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SectionNews_friend__WEBPACK_IMPORTED_MODULE_13__/* .FriendsSection */ .k, {})
        }, "3"),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_SectionNews_section__WEBPACK_IMPORTED_MODULE_14__/* .SectionWrap */ .K, {
            title: "\u4E86\u89E3\u66F4\u591A",
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Icons__WEBPACK_IMPORTED_MODULE_8__/* .FaSolidKissWinkHeart */ .zm, {}),
            showMoreIcon: false,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SectionNews__WEBPACK_IMPORTED_MODULE_12__/* .SectionCard */ .q, {
                    title: "\u7559\u8A00",
                    desc: "\u4F60\u7684\u8BDD\u5BF9\u6211\u5F88\u91CD\u8981",
                    src: (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>getRandomUnRepeatImage()
                    , []),
                    href: "/message",
                    onClick: (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((e)=>{
                        (0,utils__WEBPACK_IMPORTED_MODULE_7__/* .stopEventDefault */ .G7)(e);
                        next_router__WEBPACK_IMPORTED_MODULE_3___default().push("/[page]", "/message");
                    }, [])
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SectionNews__WEBPACK_IMPORTED_MODULE_12__/* .SectionCard */ .q, {
                    title: "\u5173\u4E8E",
                    desc: "\u8FD9\u91CC\u6709\u6211\u7684\u5C0F\u79D8\u5BC6",
                    src: (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>getRandomUnRepeatImage()
                    , []),
                    href: "/about",
                    onClick: (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((e)=>{
                        (0,utils__WEBPACK_IMPORTED_MODULE_7__/* .stopEventDefault */ .G7)(e);
                        next_router__WEBPACK_IMPORTED_MODULE_3___default().push("/[page]", "/about");
                    }, [])
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SectionNews__WEBPACK_IMPORTED_MODULE_12__/* .SectionCard */ .q, {
                    title: `点赞 (${like1})`,
                    desc: "\u5982\u679C\u4F60\u559C\u6B22\u7684\u8BDD\u70B9\u4E2A\u8D5E\u5457",
                    src: (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>getRandomUnRepeatImage()
                    , []),
                    href: "/like_this",
                    onClick: (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((e)=>{
                        (0,utils__WEBPACK_IMPORTED_MODULE_7__/* .stopEventDefault */ .G7)(e);
                        utils__WEBPACK_IMPORTED_MODULE_7__/* .apiClient.proxy */ .x1.proxy("like_this").post({
                            params: {
                                ts: Date.now()
                            }
                        }).then(()=>{
                            react_message_popup__WEBPACK_IMPORTED_MODULE_5__.message.success("\u611F\u8C22\u559C\u6B22 \u2764\uFE0F");
                            setLike((like)=>like + 1
                            );
                        });
                    }, [])
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SectionNews__WEBPACK_IMPORTED_MODULE_12__/* .SectionCard */ .q, {
                    title: "\u8BA2\u9605",
                    desc: "\u5173\u6CE8\u8BA2\u9605\u4E0D\u8FF7\u8DEF\u54E6",
                    src: (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>getRandomUnRepeatImage()
                    , []),
                    href: "/feed"
                })
            ]
        }, "4"), 
    ];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: (_section_module_css__WEBPACK_IMPORTED_MODULE_15___default().root),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_6__.TransitionGroup, {
            appear: doAnimation,
            children: SectionCompList.map((s, i)=>{
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Transition_bottom_up__WEBPACK_IMPORTED_MODULE_10__/* .BottomUpTransitionView */ ._, {
                    timeout: {
                        enter: 1200 + 200 * i
                    },
                    children: s
                }, i);
            })
        })
    });
};
const HomeSections = (0,utils__WEBPACK_IMPORTED_MODULE_7__/* .NoSSR */ .ri)(_Sections);
function buildRoute(type, obj) {
    switch(type){
        case "Post":
            {
                const { slug , category  } = obj;
                return {
                    as: `/posts/${category.slug}/${slug}`,
                    href: `/posts/[category]/[slug]`
                };
            }
        case "Photo":
            {
                const { slug , album  } = obj;
                return {
                    as: `/photos/${album.slug}/${slug}`,
                    href: `/photos/[album]/[slug]`
                };
            }
        case "Note":
            {
                const { nid  } = obj;
                return {
                    as: `/notes/${nid}`,
                    href: `/notes/[id]`
                };
            }
        case "Say":
            {
                return {
                    as: `/says`,
                    href: `/says`
                };
            }
    }
}
var ContentType;
(function(ContentType) {
    ContentType[ContentType["Note"] = 0] = "Note";
    ContentType[ContentType["Post"] = 1] = "Post";
    ContentType[ContentType["Say"] = 2] = "Say";
    ContentType[ContentType["Photo"] = 3] = "Photo";
})(ContentType || (ContentType = {}));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 36872:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ TextFade)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_spring__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12335);


const [name] = (0,_utils_spring__WEBPACK_IMPORTED_MODULE_1__/* .genSpringKeyframes */ .UU)("text-up", {
    translateY: "10px",
    opacity: 0
}, {
    translateY: "0px",
    opacity: 1
});
const TextFade = (props)=>{
    const { duration =500 , appear =true , delay =100 , children , text , ...rest } = props;
    if (!appear) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            ...rest,
            children: text ?? children
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ...rest,
        children: Array.from(text ?? children).map((char, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "inline-block whitespace-pre",
                style: {
                    animation: `${name} ${duration}ms both linear`,
                    animationDelay: `${i * delay}ms`
                },
                children: char
            }, i)
        )
    });
};


/***/ }),

/***/ 45953:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ RootPortal)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66405);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_use_is_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10861);
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

/***/ 66217:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "useIndexViewContext": () => (/* binding */ useIndexViewContext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80352);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45944);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16641);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_in_page_Home_intro__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(51816);
/* harmony import */ var _components_in_page_Home_random_say__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(61214);
/* harmony import */ var _components_in_page_Home_section__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1315);
/* harmony import */ var _hooks_use_initial_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(92644);
/* harmony import */ var _utils_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9908);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([lodash_es__WEBPACK_IMPORTED_MODULE_1__, _components_in_page_Home_intro__WEBPACK_IMPORTED_MODULE_5__, _components_in_page_Home_random_say__WEBPACK_IMPORTED_MODULE_6__, _components_in_page_Home_section__WEBPACK_IMPORTED_MODULE_7__, _utils_client__WEBPACK_IMPORTED_MODULE_9__]);
([lodash_es__WEBPACK_IMPORTED_MODULE_1__, _components_in_page_Home_intro__WEBPACK_IMPORTED_MODULE_5__, _components_in_page_Home_random_say__WEBPACK_IMPORTED_MODULE_6__, _components_in_page_Home_section__WEBPACK_IMPORTED_MODULE_7__, _utils_client__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const IndexViewContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_4__.createContext)({
    doAnimation: true
});
const useIndexViewContext = ()=>(0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(IndexViewContext)
;
const IndexView = (props)=>{
    const initData = (0,_hooks_use_initial_data__WEBPACK_IMPORTED_MODULE_8__/* .useInitialData */ .L6)();
    const doAnimation = Boolean(globalThis.history ? !history.backPath || history.backPath.length === 0 : false);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(IndexViewContext.Provider, {
            value: {
                doAnimation
            },
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_seo__WEBPACK_IMPORTED_MODULE_3__.NextSeo, {
                    title: `${initData.seo.title} · ${initData.seo.description}`,
                    description: initData.seo.description
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_in_page_Home_intro__WEBPACK_IMPORTED_MODULE_5__/* .HomeIntro */ .B, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_in_page_Home_random_say__WEBPACK_IMPORTED_MODULE_6__/* .HomeRandomSay */ .b, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_in_page_Home_section__WEBPACK_IMPORTED_MODULE_7__/* .HomeSections */ .X, {
                    ...props
                })
            ]
        })
    });
};
IndexView.getInitialProps = async ()=>{
    const aggregateData = await _utils_client__WEBPACK_IMPORTED_MODULE_9__/* .apiClient.aggregate.getTop */ .x.aggregate.getTop();
    return (0,lodash_es__WEBPACK_IMPORTED_MODULE_1__.omit)(aggregateData, [
        "says"
    ]);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__.observer)(IndexView));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 10861:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ useIsClient)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47097);
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

/***/ }),

/***/ 52167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 33104:
/***/ ((module) => {

"use strict";
module.exports = require("camelcase-keys");

/***/ }),

/***/ 68103:
/***/ ((module) => {

"use strict";
module.exports = require("clsx");

/***/ }),

/***/ 71705:
/***/ ((module) => {

"use strict";
module.exports = require("css-spring");

/***/ }),

/***/ 1635:
/***/ ((module) => {

"use strict";
module.exports = require("dayjs");

/***/ }),

/***/ 95468:
/***/ ((module) => {

"use strict";
module.exports = require("dayjs/locale/zh-cn");

/***/ }),

/***/ 84125:
/***/ ((module) => {

"use strict";
module.exports = require("dayjs/plugin/customParseFormat");

/***/ }),

/***/ 67424:
/***/ ((module) => {

"use strict";
module.exports = require("dayjs/plugin/localizedFormat");

/***/ }),

/***/ 43491:
/***/ ((module) => {

"use strict";
module.exports = require("devtools-detector");

/***/ }),

/***/ 21985:
/***/ ((module) => {

"use strict";
module.exports = require("medium-zoom");

/***/ }),

/***/ 36211:
/***/ ((module) => {

"use strict";
module.exports = require("mobx");

/***/ }),

/***/ 45944:
/***/ ((module) => {

"use strict";
module.exports = require("mobx-react-lite");

/***/ }),

/***/ 16641:
/***/ ((module) => {

"use strict";
module.exports = require("next-seo");

/***/ }),

/***/ 92796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 34014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 78524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 95832:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 78020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 64406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 24964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 23938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 29565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 64365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 91292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 80979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 36052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 84226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 95052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 59232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 71853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 30503:
/***/ ((module) => {

"use strict";
module.exports = require("randomcolor");

/***/ }),

/***/ 16689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 66405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 19785:
/***/ ((module) => {

"use strict";
module.exports = require("react-intersection-observer");

/***/ }),

/***/ 29346:
/***/ ((module) => {

"use strict";
module.exports = require("react-lazyload");

/***/ }),

/***/ 15255:
/***/ ((module) => {

"use strict";
module.exports = require("react-message-popup");

/***/ }),

/***/ 84466:
/***/ ((module) => {

"use strict";
module.exports = require("react-transition-group");

/***/ }),

/***/ 69755:
/***/ ((module) => {

"use strict";
module.exports = require("react-use");

/***/ }),

/***/ 20997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 4579:
/***/ ((module) => {

"use strict";
module.exports = require("remove-markdown");

/***/ }),

/***/ 6470:
/***/ ((module) => {

"use strict";
module.exports = import("@floating-ui/react-dom");;

/***/ }),

/***/ 69915:
/***/ ((module) => {

"use strict";
module.exports = import("js-cookie");;

/***/ }),

/***/ 80352:
/***/ ((module) => {

"use strict";
module.exports = import("lodash-es");;

/***/ }),

/***/ 3590:
/***/ ((module) => {

"use strict";
module.exports = import("react-toastify");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4225,5811,7937,8747,7092,9908,2672,298,9987,6264,5782,7612], () => (__webpack_exec__(66217)));
module.exports = __webpack_exports__;

})();