(() => {
var exports = {};
exports.id = 9851;
exports.ids = [9851];
exports.modules = {

/***/ 78207:
/***/ ((module) => {

// Exports
module.exports = {
	"copyright-session": "Copyright_copyright-session__UTT9k"
};


/***/ }),

/***/ 88903:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ buildStoreDataLoadableView)
/* harmony export */ });
/* unused harmony export LoadableView */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45944);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_universal_Loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(68946);




const LoadableView = /*#__PURE__*/ (/* unused pure expression or super */ null && (memo(({ data , ...props })=>{
    if (!data) {
        return /*#__PURE__*/ _jsx(Loading, {
            ...props
        });
    }
    return /*#__PURE__*/ React.createElement(Fragment, props.children);
})));
function buildStoreDataLoadableView(store, View) {
    return (0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__.observer)((props)=>{
        const post = store.get(props.id);
        // eslint-disable-next-line react-hooks/rules-of-hooks
        (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
            store.add(props);
        }, [
            props.id
        ]);
        if (!post) {
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Loading__WEBPACK_IMPORTED_MODULE_3__/* .Loading */ .g, {});
        }
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(View, {
            id: post.id
        });
    });
}


/***/ }),

/***/ 88007:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ OutdateNotice)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_universal_RelativeTime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(58443);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_universal_RelativeTime__WEBPACK_IMPORTED_MODULE_3__]);
_components_universal_RelativeTime__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

/*
 * @Author: Innei
 * @Date: 2020-09-17 14:02:24
 * @LastEditTime: 2021-02-16 21:13:38
 * @LastEditors: Innei
 * @FilePath: /web/components/Outdate/index.tsx
 * @Mark: Coding with Love
 */ 


// TODO re-design style
function OutdateNotice({ time  }) {
    return dayjs__WEBPACK_IMPORTED_MODULE_1___default()().diff(dayjs__WEBPACK_IMPORTED_MODULE_1___default()(time), "day") > 60 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("blockquote", {
        style: {
            marginBottom: "5rem"
        },
        children: [
            "\u8FD9\u7BC7\u6587\u7AE0\u4E0A\u6B21\u4FEE\u6539\u4E8E ",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_RelativeTime__WEBPACK_IMPORTED_MODULE_3__/* .RelativeTime */ .i, {
                date: new Date(time)
            }),
            "\uFF0C\u53EF\u80FD\u5176\u90E8\u5206\u5185\u5BB9\u5DF2\u7ECF\u53D1\u751F\u53D8\u5316\uFF0C\u5982\u6709\u7591\u95EE\u53EF\u8BE2\u95EE\u4F5C\u8005\u3002"
        ]
    }) : null;
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 69701:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ Copyright)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45944);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_universal_Divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73968);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38325);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(78207);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store__WEBPACK_IMPORTED_MODULE_4__]);
_store__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const Copyright = (0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__.observer)((props)=>{
    const { title , link , date  } = props;
    const { userStore: { name  } ,  } = (0,_store__WEBPACK_IMPORTED_MODULE_4__/* .useStore */ .oR)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_5___default()["copyright-session"]),
        id: "copyright",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                children: [
                    "\u6587\u7AE0\u6807\u9898: ",
                    title
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                children: [
                    "\u6587\u7AE0\u4F5C\u8005: ",
                    name
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                children: [
                    "\u6587\u7AE0\u94FE\u63A5: ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        children: link
                    }),
                    " ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        onClick: ()=>{
                            navigator.clipboard.writeText(link);
                        },
                        "data-hide-print": true,
                        children: "[\u590D\u5236]"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                children: [
                    "\u6700\u540E\u4FEE\u6539\u65F6\u95F4:",
                    " ",
                    date ? dayjs__WEBPACK_IMPORTED_MODULE_1___default()(date).format("YYYY\u5E74MM\u6708DD\u65E5 H:mm") : "\u6682\u6CA1\u6709\u4FEE\u6539\u8FC7"
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Divider__WEBPACK_IMPORTED_MODULE_3__/* .Divider */ .i, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                    children: [
                        "\u5546\u4E1A\u8F6C\u8F7D\u8BF7\u8054\u7CFB\u7AD9\u957F\u83B7\u5F97\u6388\u6743\uFF0C\u975E\u5546\u4E1A\u8F6C\u8F7D\u8BF7\u6CE8\u660E\u672C\u6587\u51FA\u5904\u53CA\u6587\u7AE0\u94FE\u63A5\uFF0C\u672A\u7ECF\u7AD9\u957F\u5141\u8BB8\u4E0D\u5F97\u5BF9\u6587\u7AE0\u6587\u5B57\u5185\u5BB9\u8FDB\u884C\u4FEE\u6539\u6F14\u7ECE\u3002",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        "\u672C\u6587\u91C7\u7528",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            href: "https://creativecommons.org/licenses/by-nc-nd/4.0/",
                            children: "\u521B\u4F5C\u5171\u7528\u4FDD\u7559\u7F72\u540D-\u975E\u5546\u4E1A-\u7981\u6B62\u6F14\u7ECE4.0\u56FD\u9645\u8BB8\u53EF\u8BC1"
                        })
                    ]
                })
            })
        ]
    });
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 76597:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostView": () => (/* binding */ PostView),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29592);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80352);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(36211);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45944);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(37937);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_message_popup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(15255);
/* harmony import */ var react_message_popup__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_message_popup__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_layouts_ArticleLayout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(86235);
/* harmony import */ var _components_universal_Icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(10298);
/* harmony import */ var _components_universal_LoadableView__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(88903);
/* harmony import */ var _components_universal_Markdown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(56076);
/* harmony import */ var _components_universal_NumberRecorder__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(54575);
/* harmony import */ var _components_universal_Outdate__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(88007);
/* harmony import */ var _components_universal_Seo__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(14302);
/* harmony import */ var _components_widgets_ArticleAction__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(89931);
/* harmony import */ var _components_widgets_Comment__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(64414);
/* harmony import */ var _components_widgets_Donate__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(46992);
/* harmony import */ var _components_widgets_Search__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(44742);
/* harmony import */ var _hooks_use_header_meta__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(61837);
/* harmony import */ var _hooks_use_initial_data__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(92644);
/* harmony import */ var _hooks_use_theme_background__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(21865);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(38325);
/* harmony import */ var _utils_client__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(9908);
/* harmony import */ var _utils_spring__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(12335);
/* harmony import */ var _components_widgets_Copyright__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(69701);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(47097);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([context__WEBPACK_IMPORTED_MODULE_1__, lodash_es__WEBPACK_IMPORTED_MODULE_3__, _components_layouts_ArticleLayout__WEBPACK_IMPORTED_MODULE_10__, _components_universal_Markdown__WEBPACK_IMPORTED_MODULE_13__, _components_universal_Outdate__WEBPACK_IMPORTED_MODULE_15__, _components_universal_Seo__WEBPACK_IMPORTED_MODULE_16__, _components_widgets_ArticleAction__WEBPACK_IMPORTED_MODULE_17__, _components_widgets_Comment__WEBPACK_IMPORTED_MODULE_18__, _components_widgets_Donate__WEBPACK_IMPORTED_MODULE_19__, _components_widgets_Search__WEBPACK_IMPORTED_MODULE_20__, _hooks_use_header_meta__WEBPACK_IMPORTED_MODULE_21__, _hooks_use_theme_background__WEBPACK_IMPORTED_MODULE_23__, _store__WEBPACK_IMPORTED_MODULE_24__, _utils_client__WEBPACK_IMPORTED_MODULE_25__, _components_widgets_Copyright__WEBPACK_IMPORTED_MODULE_27__, _utils__WEBPACK_IMPORTED_MODULE_28__]);
([context__WEBPACK_IMPORTED_MODULE_1__, lodash_es__WEBPACK_IMPORTED_MODULE_3__, _components_layouts_ArticleLayout__WEBPACK_IMPORTED_MODULE_10__, _components_universal_Markdown__WEBPACK_IMPORTED_MODULE_13__, _components_universal_Outdate__WEBPACK_IMPORTED_MODULE_15__, _components_universal_Seo__WEBPACK_IMPORTED_MODULE_16__, _components_widgets_ArticleAction__WEBPACK_IMPORTED_MODULE_17__, _components_widgets_Comment__WEBPACK_IMPORTED_MODULE_18__, _components_widgets_Donate__WEBPACK_IMPORTED_MODULE_19__, _components_widgets_Search__WEBPACK_IMPORTED_MODULE_20__, _hooks_use_header_meta__WEBPACK_IMPORTED_MODULE_21__, _hooks_use_theme_background__WEBPACK_IMPORTED_MODULE_23__, _store__WEBPACK_IMPORTED_MODULE_24__, _utils_client__WEBPACK_IMPORTED_MODULE_25__, _components_widgets_Copyright__WEBPACK_IMPORTED_MODULE_27__, _utils__WEBPACK_IMPORTED_MODULE_28__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





























const storeThumbsUpCookie = _utils__WEBPACK_IMPORTED_MODULE_28__/* .setLikeId */ .D2;
const isThumbsUpBefore = _utils__WEBPACK_IMPORTED_MODULE_28__/* .isLikedBefore */ .MO;
const useUpdatePost = (id)=>{
    const post = _store__WEBPACK_IMPORTED_MODULE_24__/* .store.postStore.get */ .h.postStore.get(id);
    const beforeModel = (0,react__WEBPACK_IMPORTED_MODULE_8__.useRef)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(()=>{
        const before = beforeModel.current;
        if (!before && post) {
            beforeModel.current = (0,mobx__WEBPACK_IMPORTED_MODULE_4__.toJS)(post);
            return;
        }
        if (!before || !post) {
            return;
        }
        if (before.id === post.id) {
            if ((0,lodash_es__WEBPACK_IMPORTED_MODULE_3__.isEqual)(before, post)) {
                return;
            }
            if (before.categoryId !== post.categoryId || before.slug !== post.slug && post.category?.slug) {
                router.replace("/posts/" + `${post.category.slug}/${post.slug}`, undefined, {
                    shallow: true,
                    scroll: false
                });
                return;
            }
            if (post.isDeleted) {
                router.push("/posts");
                react_message_popup__WEBPACK_IMPORTED_MODULE_9__.message.error("\u6587\u7AE0\u5DF2\u5220\u9664\u6216\u9690\u85CF");
                return;
            }
            react_message_popup__WEBPACK_IMPORTED_MODULE_9__.message.info("\u6587\u7AE0\u5DF2\u66F4\u65B0");
        }
        beforeModel.current = (0,mobx__WEBPACK_IMPORTED_MODULE_4__.toJS)(post);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        post?.id,
        post?.slug,
        post?.categoryId,
        post?.text,
        post?.summary,
        post?.category?.slug,
        post?.isDeleted, 
    ]);
};
const PostView = (0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_5__.observer)((props)=>{
    const { postStore  } = (0,_store__WEBPACK_IMPORTED_MODULE_24__/* .useStore */ .oR)();
    const post = postStore.get(props.id) || _utils__WEBPACK_IMPORTED_MODULE_28__/* .noop */ .ZT;
    const { 0: actions , 1: setAction  } = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)({});
    const description = post.summary ?? (0,_utils__WEBPACK_IMPORTED_MODULE_28__/* .getSummaryFromMd */ .D_)(post.text).slice(0, 150);
    const themeConfig = (0,_hooks_use_initial_data__WEBPACK_IMPORTED_MODULE_22__/* .useThemeConfig */ .LU)();
    const donateConfig = themeConfig.function.donate;
    const { url: { webUrl  } ,  } = (0,_hooks_use_initial_data__WEBPACK_IMPORTED_MODULE_22__/* .useInitialData */ .L6)();
    (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(()=>{
        (0,_utils_spring__WEBPACK_IMPORTED_MODULE_26__/* .springScrollToTop */ .YG)();
    }, [
        post.id
    ]);
    const createTime = dayjs__WEBPACK_IMPORTED_MODULE_2___default()(post.created).locale("cn").format("YYYY\u5E74M\u6708D\u65E5");
    (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(()=>{
        setAction({
            informs: [
                {
                    icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Icons__WEBPACK_IMPORTED_MODULE_11__/* .MdiCalendar */ .EP, {}),
                    name: createTime
                },
                {
                    icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Icons__WEBPACK_IMPORTED_MODULE_11__/* .FeHash */ .n_, {}),
                    name: `${post.category.name}${post.tags.length ? `[${post.tags[0]}]` : ""}`,
                    tip: ()=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "leading-7",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    children: [
                                        "\u5206\u7C7B\uFF1A",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                                            href: `/categories/${post.category.slug}`,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                children: post.category.name
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: post.tags.length ? `标签：${post.tags.join(", ")}` : ""
                                })
                            ]
                        })
                },
                {
                    icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Icons__WEBPACK_IMPORTED_MODULE_11__/* .PhBookOpen */ .NM, {}),
                    name: post.count.read ?? 0
                }, 
            ],
            actions: [
                donateConfig.enable && {
                    icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Icons__WEBPACK_IMPORTED_MODULE_11__/* .GgCoffee */ .j, {}),
                    name: "",
                    wrapperComponent: _components_widgets_Donate__WEBPACK_IMPORTED_MODULE_19__/* .DonatePopover */ .E,
                    callback: ()=>{
                        window.open(donateConfig.link);
                    }
                },
                {
                    icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Icons__WEBPACK_IMPORTED_MODULE_11__/* .IonThumbsup */ .UB, {}),
                    name: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "leading-[1.1] inline-flex items-center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_NumberRecorder__WEBPACK_IMPORTED_MODULE_14__/* .NumberTransition */ .Z, {
                            number: post.count?.like || 0
                        })
                    }),
                    color: isThumbsUpBefore(post.id) ? "#f1c40f" : undefined,
                    callback: ()=>{
                        if (isThumbsUpBefore(post.id)) {
                            return react_message_popup__WEBPACK_IMPORTED_MODULE_9__.message.error("\u4F60\u5DF2\u7ECF\u652F\u6301\u8FC7\u5566!");
                        }
                        _utils_client__WEBPACK_IMPORTED_MODULE_25__/* .apiClient.post.thumbsUp */ .x.post.thumbsUp(post.id).then(()=>{
                            react_message_popup__WEBPACK_IMPORTED_MODULE_9__.message.success("\u611F\u8C22\u652F\u6301!");
                            storeThumbsUpCookie(post.id);
                            post.count.like = post.count.like + 1;
                        });
                    }
                }, 
            ],
            copyright: post.copyright
        });
    }, [
        post.id,
        post.category.name,
        post.copyright,
        post.count.read,
        post.tags,
        donateConfig.enable,
        donateConfig.link,
        post.count.like,
        post.count,
        createTime,
        post.category.slug, 
    ]);
    // header meta
    (0,_hooks_use_header_meta__WEBPACK_IMPORTED_MODULE_21__/* .useHeaderMeta */ .Z)(post.title, post.category.name);
    (0,_hooks_use_header_meta__WEBPACK_IMPORTED_MODULE_21__/* .useHeaderShare */ .Q)(post.title, post.text);
    useUpdatePost(post.id);
    (0,_hooks_use_theme_background__WEBPACK_IMPORTED_MODULE_23__/* .useBackgroundOpacity */ .e9)(0.2);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Seo__WEBPACK_IMPORTED_MODULE_16__/* .Seo */ .p, {
                title: post.title,
                description: description,
                openGraph: {
                    type: "article",
                    article: {
                        publishedTime: post.created,
                        modifiedTime: post.modified || undefined,
                        section: post.category.name,
                        tags: post.tags ?? []
                    }
                }
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_layouts_ArticleLayout__WEBPACK_IMPORTED_MODULE_10__/* .ArticleLayout */ .B, {
                title: post.title,
                id: post.id,
                type: "post",
                titleAnimate: false,
                children: [
                    (0,react__WEBPACK_IMPORTED_MODULE_8__.useMemo)(()=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Outdate__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                    time: post.modified || post.created
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(context__WEBPACK_IMPORTED_MODULE_1__/* .ImageSizeMetaContext.Provider */ .Qd.Provider, {
                                    value: (0,_utils__WEBPACK_IMPORTED_MODULE_28__/* .imagesRecord2Map */ .Gj)(post.images),
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                className: "sr-only",
                                                children: post.title
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Markdown__WEBPACK_IMPORTED_MODULE_13__/* .Markdown */ .U, {
                                                codeBlockFully: true,
                                                value: post.text,
                                                escapeHtml: false,
                                                toc: true
                                            })
                                        ]
                                    })
                                }),
                                post.copyright && (0,_utils__WEBPACK_IMPORTED_MODULE_28__/* .isClientSide */ .S_)() ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_widgets_Copyright__WEBPACK_IMPORTED_MODULE_27__/* .Copyright */ .w, {
                                    date: post.modified,
                                    link: new URL(location.pathname, webUrl).toString(),
                                    title: post.title
                                }) : null,
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_widgets_ArticleAction__WEBPACK_IMPORTED_MODULE_17__/* .ArticleFooterAction */ .B, {
                                    ...actions
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_widgets_Comment__WEBPACK_IMPORTED_MODULE_18__/* .CommentLazy */ .pT, {
                                    id: post.id,
                                    allowComment: post.allowComment ?? true
                                }, post.id)
                            ]
                        })
                    , [
                        actions,
                        post.allowComment,
                        post.copyright,
                        post.created,
                        post.id,
                        post.images,
                        post.modified,
                        post.text,
                        post.title,
                        webUrl, 
                    ]),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_widgets_Search__WEBPACK_IMPORTED_MODULE_20__.SearchFAB, {})
                ]
            })
        ]
    });
});
const PP = (0,_components_universal_LoadableView__WEBPACK_IMPORTED_MODULE_12__/* .buildStoreDataLoadableView */ .q)(_store__WEBPACK_IMPORTED_MODULE_24__/* .store.postStore */ .h.postStore, PostView);
PP.getInitialProps = async (ctx)=>{
    const { query  } = ctx;
    const { category , slug  } = query;
    const data = await _store__WEBPACK_IMPORTED_MODULE_24__/* .store.postStore.fetchBySlug */ .h.postStore.fetchBySlug(category, slug);
    return data;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PP);

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

/***/ 13702:
/***/ ((module) => {

"use strict";
module.exports = require("react-markdown");

/***/ }),

/***/ 15255:
/***/ ((module) => {

"use strict";
module.exports = require("react-message-popup");

/***/ }),

/***/ 35011:
/***/ ((module) => {

"use strict";
module.exports = require("react-shortcut-guide");

/***/ }),

/***/ 91327:
/***/ ((module) => {

"use strict";
module.exports = require("react-smooth-number-counter");

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

/***/ 27379:
/***/ ((module) => {

"use strict";
module.exports = require("validator/lib/isEmail");

/***/ }),

/***/ 22281:
/***/ ((module) => {

"use strict";
module.exports = require("validator/lib/isMongoId");

/***/ }),

/***/ 90159:
/***/ ((module) => {

"use strict";
module.exports = require("validator/lib/isURL");

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

/***/ }),

/***/ 14612:
/***/ ((module) => {

"use strict";
module.exports = import("socket.io-client");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4225,8034,5811,7937,8747,8106,8825,8081,9908,2672,4302,298,9987,6235,6264,8946,9781,2726,444,1113,6076,4742,5782,1211,3834,5963,4782,558], () => (__webpack_exec__(76597)));
module.exports = __webpack_exports__;

})();