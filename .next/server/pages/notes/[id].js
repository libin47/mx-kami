(() => {
var exports = {};
exports.id = 4245;
exports.ids = [4245];
exports.modules = {

/***/ 78711:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "NoteTimelineList_container__n0aHd",
	"item": "NoteTimelineList_item__opW0U",
	"list": "NoteTimelineList_list__VZYY0",
	"active": "NoteTimelineList_active__Hc3Qo"
};


/***/ }),

/***/ 40956:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ NoteFooterActionBar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45944);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_universal_Icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10298);
/* harmony import */ var _components_universal_LikeButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(21351);
/* harmony import */ var _components_universal_NumberRecorder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(54575);
/* harmony import */ var _components_universal_RelativeTime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(58443);
/* harmony import */ var _components_widgets_ArticleAction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(89931);
/* harmony import */ var _components_widgets_Donate__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(46992);
/* harmony import */ var _constants_meta_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(42685);
/* harmony import */ var _constants_tracker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(10609);
/* harmony import */ var _hooks_use_analyze__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(74321);
/* harmony import */ var _hooks_use_initial_data__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(92644);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(38325);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_universal_RelativeTime__WEBPACK_IMPORTED_MODULE_7__, _components_widgets_ArticleAction__WEBPACK_IMPORTED_MODULE_8__, _components_widgets_Donate__WEBPACK_IMPORTED_MODULE_9__, _hooks_use_analyze__WEBPACK_IMPORTED_MODULE_12__, _store__WEBPACK_IMPORTED_MODULE_14__]);
([_components_universal_RelativeTime__WEBPACK_IMPORTED_MODULE_7__, _components_widgets_ArticleAction__WEBPACK_IMPORTED_MODULE_8__, _components_widgets_Donate__WEBPACK_IMPORTED_MODULE_9__, _hooks_use_analyze__WEBPACK_IMPORTED_MODULE_12__, _store__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















const NoteFooterActionBar = (0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__.observer)(({ id  })=>{
    const { noteStore  } = (0,_store__WEBPACK_IMPORTED_MODULE_14__/* .useStore */ .oR)();
    const note = noteStore.get(id);
    const trackerLikeOnce = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(false);
    const { event  } = (0,_hooks_use_analyze__WEBPACK_IMPORTED_MODULE_12__/* .useAnalyze */ .e)();
    if (!note) {
        return null;
    }
    const nid = note.nid;
    const { mood , weather  } = note;
    const isSecret = note.secret ? dayjs__WEBPACK_IMPORTED_MODULE_1___default()(note.secret).isAfter(new Date()) : false;
    const isLiked = noteStore.isLiked(nid);
    const themeConfig = (0,_hooks_use_initial_data__WEBPACK_IMPORTED_MODULE_13__/* .useThemeConfig */ .LU)();
    const donateConfig = themeConfig.function.donate;
    const actions = {
        informs: [],
        actions: [
            donateConfig.enable && {
                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Icons__WEBPACK_IMPORTED_MODULE_4__/* .GgCoffee */ .j, {
                    fontSize: "1.2em"
                }),
                name: "",
                wrapperComponent: _components_widgets_Donate__WEBPACK_IMPORTED_MODULE_9__/* .DonatePopover */ .E,
                callback: ()=>{
                    window.open(donateConfig.link);
                }
            },
            {
                name: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "inline-flex items-center leading-[1]",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "h-[1rem] w-[1rem] relative mr-2",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_LikeButton__WEBPACK_IMPORTED_MODULE_5__/* .LikeButton */ .d, {
                                checked: isLiked,
                                width: "2rem",
                                className: "absolute inset-0 -translate-y-1/2 -translate-x-1/2 transform "
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_NumberRecorder__WEBPACK_IMPORTED_MODULE_6__/* .NumberTransition */ .Z, {
                            number: note.count?.like || 0,
                            className: "ml-4"
                        })
                    ]
                }),
                color: isLiked ? "#e74c3c" : undefined,
                callback: ()=>{
                    noteStore.like(nid);
                    if (!trackerLikeOnce.current) {
                        event({
                            action: _constants_tracker__WEBPACK_IMPORTED_MODULE_11__/* .TrackerAction.Interaction */ .b.Interaction,
                            label: "\u65E5\u8BB0\u5E95\u90E8\u559C\u6B22\u89E6\u53D1"
                        });
                        trackerLikeOnce.current = true;
                    }
                }
            }, 
        ]
    };
    {
        if (weather) {
            actions.informs.push({
                name: weather,
                icon: (0,_constants_meta_icon__WEBPACK_IMPORTED_MODULE_10__/* .weather2icon */ .I)(weather)
            });
        }
        if (mood) {
            actions.informs.push({
                name: mood,
                icon: (0,_constants_meta_icon__WEBPACK_IMPORTED_MODULE_10__/* .mood2icon */ .b)(mood)
            });
        }
        actions.informs.push({
            name: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_RelativeTime__WEBPACK_IMPORTED_MODULE_7__/* .RelativeTime */ .i, {
                date: note.created
            }),
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Icons__WEBPACK_IMPORTED_MODULE_4__/* .MdiClockTimeThreeOutline */ .a4, {}),
            tip: ()=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                    className: "leading-7",
                    children: [
                        "\u521B\u5EFA\u65F6\u95F4\uFF1A",
                        note.created,
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        "\u4FEE\u6539\u4E8E\uFF1A",
                        note.modified || "-"
                    ]
                })
        }, {
            name: note.count.read.toString(),
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Icons__WEBPACK_IMPORTED_MODULE_4__/* .PhBookOpen */ .NM, {})
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: !isSecret && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_widgets_ArticleAction__WEBPACK_IMPORTED_MODULE_8__/* .ArticleFooterAction */ .B, {
            ...actions
        })
    });
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 22559:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ NoteFooterNavigation)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80352);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45944);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants_tracker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10609);
/* harmony import */ var _hooks_use_analyze__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(74321);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(38325);
/* harmony import */ var _utils_spring__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(12335);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([lodash_es__WEBPACK_IMPORTED_MODULE_1__, _hooks_use_analyze__WEBPACK_IMPORTED_MODULE_5__, _store__WEBPACK_IMPORTED_MODULE_6__]);
([lodash_es__WEBPACK_IMPORTED_MODULE_1__, _hooks_use_analyze__WEBPACK_IMPORTED_MODULE_5__, _store__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const NoteFooterNavigation = (0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__.observer)(({ id  })=>{
    const { noteStore  } = (0,_store__WEBPACK_IMPORTED_MODULE_6__/* .useStore */ .oR)();
    const [prev, next] = noteStore.relationMap.get(id) || [
        lodash_es__WEBPACK_IMPORTED_MODULE_1__.noop,
        lodash_es__WEBPACK_IMPORTED_MODULE_1__.noop
    ];
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { event  } = (0,_hooks_use_analyze__WEBPACK_IMPORTED_MODULE_5__/* .useAnalyze */ .e)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: (!!next || !!prev) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
            className: "mt-4 text-center",
            children: [
                !!next && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    className: "btn green",
                    onClick: ()=>{
                        router.push("/notes/[id]", `/notes/${next.nid}`);
                    },
                    children: "\u524D\u4E00\u7BC7"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    className: "btn yellow",
                    onClick: ()=>{
                        const note = noteStore.get(id);
                        event({
                            action: _constants_tracker__WEBPACK_IMPORTED_MODULE_4__/* .TrackerAction.Click */ .b.Click,
                            label: `时间线点击 - ${note?.nid} - ${note?.title}`
                        });
                        (0,_utils_spring__WEBPACK_IMPORTED_MODULE_7__/* .springScrollToTop */ .YG)();
                        router.push("/timeline?type=note");
                    },
                    children: "\u65F6\u95F4\u7EBF"
                }),
                !!prev && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    className: "btn green",
                    onClick: ()=>{
                        router.push("/notes/[id]", `/notes/${prev.nid}`);
                    },
                    children: "\u540E\u4E00\u7BC7"
                })
            ]
        })
    });
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 15668:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ NotePasswordConfrim)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_universal_Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72726);



const NotePasswordConfrim = (props)=>{
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex h-full w-full absolute items-center justify-center flex-col",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                    className: "font-medium text-2xl",
                    children: "\u6B64\u6587\u7AE0\u9700\u8981\u5BC6\u7801"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "space-x-3 text-center space-y-3",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Input__WEBPACK_IMPORTED_MODULE_2__/* .Input */ .I, {
                        ref: ref,
                        type: "password"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "btn yellow flex-shrink-0",
                        onClick: ()=>{
                            if (!ref.current) {
                                return;
                            }
                            props.onSubmit(ref.current.value);
                        },
                        children: "\u63D0\u4EA4"
                    })
                ]
            })
        ]
    });
};


/***/ }),

/***/ 95647:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ NoteTimelineList)
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
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(84466);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_transition_group__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(69755);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_use__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_universal_Divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(73968);
/* harmony import */ var _components_universal_FloatPopover__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(85782);
/* harmony import */ var _components_universal_ImpressionView__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(27625);
/* harmony import */ var _components_universal_Transition_bottom_up__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9987);
/* harmony import */ var _constants_tracker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(10609);
/* harmony import */ var _hooks_use_analyze__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(74321);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(38325);
/* harmony import */ var _utils_client__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(9908);
/* harmony import */ var _NoteTopic_inner_detail__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(36917);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(78711);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_16__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_universal_FloatPopover__WEBPACK_IMPORTED_MODULE_8__, _components_universal_ImpressionView__WEBPACK_IMPORTED_MODULE_9__, _hooks_use_analyze__WEBPACK_IMPORTED_MODULE_12__, _store__WEBPACK_IMPORTED_MODULE_13__, _utils_client__WEBPACK_IMPORTED_MODULE_14__, _NoteTopic_inner_detail__WEBPACK_IMPORTED_MODULE_15__]);
([_components_universal_FloatPopover__WEBPACK_IMPORTED_MODULE_8__, _components_universal_ImpressionView__WEBPACK_IMPORTED_MODULE_9__, _hooks_use_analyze__WEBPACK_IMPORTED_MODULE_12__, _store__WEBPACK_IMPORTED_MODULE_13__, _utils_client__WEBPACK_IMPORTED_MODULE_14__, _NoteTopic_inner_detail__WEBPACK_IMPORTED_MODULE_15__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

/**
 * 日记: 左侧时间线
 */ 















const NoteTimelineList = (0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__.observer)((props)=>{
    const { className , noteId  } = props;
    const { noteStore  } = (0,_store__WEBPACK_IMPORTED_MODULE_13__/* .useStore */ .oR)();
    const note = noteStore.get(noteId);
    const { 0: list , 1: setList  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);
    const prevList = (0,react_use__WEBPACK_IMPORTED_MODULE_6__.usePrevious)(list);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        _utils_client__WEBPACK_IMPORTED_MODULE_14__/* .apiClient.note.getMiddleList */ .x.note.getMiddleList(noteId, 10).then(({ data  })=>{
            setList(data);
        });
    }, [
        noteId
    ]);
    const { event  } = (0,_hooks_use_analyze__WEBPACK_IMPORTED_MODULE_12__/* .useAnalyze */ .e)();
    const TopicComp = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
            href: `/notes/topics/${note?.topic?.slug}`,
            onClick: ()=>event({
                    action: _constants_tracker__WEBPACK_IMPORTED_MODULE_11__/* .TrackerAction.Click */ .b.Click,
                    label: `左侧时间线点击去话题页 - ${note?.topic?.name}`
                })
            ,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "flex-grow truncate",
                    children: note?.topic?.name
                })
            })
        })
    , [
        note?.topic?.name,
        note?.topic?.slug
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(className, (_index_module_css__WEBPACK_IMPORTED_MODULE_16___default().container)),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: clsx__WEBPACK_IMPORTED_MODULE_1___default()((_index_module_css__WEBPACK_IMPORTED_MODULE_16___default().list)),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_5__.TransitionGroup, {
                    component: "ul",
                    children: list.map((item, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Transition_bottom_up__WEBPACK_IMPORTED_MODULE_10__/* .BottomUpTransitionView */ ._, {
                            component: "li",
                            timeout: {
                                enter: prevList?.length ? 100 * Math.abs(prevList.length - i) : 100 * i
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                href: `/notes/${item.nid}`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(item.id === props.noteId ? (_index_module_css__WEBPACK_IMPORTED_MODULE_16___default().active) : null, (_index_module_css__WEBPACK_IMPORTED_MODULE_16___default().item)),
                                    children: item.title
                                })
                            }, item.id)
                        }, item.id)
                    )
                }),
                note?.topic && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Divider__WEBPACK_IMPORTED_MODULE_7__/* .Divider */ .i, {
                            className: "!w-3/4"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            className: "text-gray-1 flex flex-col min-w-0 overflow-hidden",
                            children: [
                                "\u6B64\u6587\u7AE0\u6536\u5F55\u4E8E\u4E13\u680F\uFF1A",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_FloatPopover__WEBPACK_IMPORTED_MODULE_8__/* .FloatPopover */ .r, {
                                    placement: "right",
                                    strategy: "fixed",
                                    wrapperClassNames: "flex flex-grow flex-shrink min-w-0",
                                    triggerComponent: TopicComp,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_ImpressionView__WEBPACK_IMPORTED_MODULE_9__/* .ImpressionView */ .X, {
                                        trackerMessage: `曝光 - 左侧时间线话题内页展开 - ${note?.topic?.name}`,
                                        action: _constants_tracker__WEBPACK_IMPORTED_MODULE_11__/* .TrackerAction.Impression */ .b.Impression,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NoteTopic_inner_detail__WEBPACK_IMPORTED_MODULE_15__/* .InnerTopicDetail */ .D, {
                                            topic: note?.topic
                                        })
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 82316:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ NoteTopic)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37937);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_linkify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(83826);
/* harmony import */ var react_linkify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_linkify__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_universal_Avatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44199);
/* harmony import */ var _components_universal_Divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(73968);
/* harmony import */ var _components_universal_FloatPopover__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85782);
/* harmony import */ var _components_universal_ImpressionView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(27625);
/* harmony import */ var _constants_tracker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(10609);
/* harmony import */ var _hooks_use_analyze__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(74321);
/* harmony import */ var _utils_word__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2256);
/* harmony import */ var _inner_detail__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(36917);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_universal_FloatPopover__WEBPACK_IMPORTED_MODULE_6__, _components_universal_ImpressionView__WEBPACK_IMPORTED_MODULE_7__, _hooks_use_analyze__WEBPACK_IMPORTED_MODULE_9__, _inner_detail__WEBPACK_IMPORTED_MODULE_10__]);
([_components_universal_FloatPopover__WEBPACK_IMPORTED_MODULE_6__, _components_universal_ImpressionView__WEBPACK_IMPORTED_MODULE_7__, _hooks_use_analyze__WEBPACK_IMPORTED_MODULE_9__, _inner_detail__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const NoteTopic = (props)=>{
    const { topic  } = props;
    const { icon , name , introduce  } = topic;
    const { event  } = (0,_hooks_use_analyze__WEBPACK_IMPORTED_MODULE_9__/* .useAnalyze */ .e)();
    const handleTrackerClick = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{
        event({
            action: _constants_tracker__WEBPACK_IMPORTED_MODULE_8__/* .TrackerAction.Click */ .b.Click,
            label: `话题点击 进入详情 / ${name}`
        });
    }, [
        name
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_ImpressionView__WEBPACK_IMPORTED_MODULE_7__/* .ImpressionView */ .X, {
        action: _constants_tracker__WEBPACK_IMPORTED_MODULE_8__/* .TrackerAction.Impression */ .b.Impression,
        trackerMessage: `曝光底部话题 - ${topic.name}`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            "data-hide-print": true,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "text-md",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                        children: "\u6587\u7AE0\u88AB\u4E13\u680F\u6536\u5F55\uFF1A"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Divider__WEBPACK_IMPORTED_MODULE_5__/* .Divider */ .i, {}),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex items-center gap-4",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Avatar__WEBPACK_IMPORTED_MODULE_4__/* .Avatar */ .q, {
                            size: 60,
                            imageUrl: icon,
                            text: (0,_utils_word__WEBPACK_IMPORTED_MODULE_11__/* .textToBigCharOrWord */ .m)(name),
                            className: "flex-shrink-0",
                            useRandomColor: false,
                            shadow: false,
                            wrapperProps: (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>({
                                    className: "text-white dark:text-opacity-80"
                                })
                            , [])
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex-grow flex flex-col self-start",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "text-md font-medium mb-2",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_FloatPopover__WEBPACK_IMPORTED_MODULE_6__/* .FloatPopover */ .r, {
                                        strategy: "absolute",
                                        triggerComponent: ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                href: `/notes/topics/${topic.slug}`,
                                                onClick: handleTrackerClick,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: name
                                                    })
                                                })
                                            })
                                        ,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_ImpressionView__WEBPACK_IMPORTED_MODULE_7__/* .ImpressionView */ .X, {
                                            trackerMessage: `曝光 - 内页话题 - ${topic.name}`,
                                            action: _constants_tracker__WEBPACK_IMPORTED_MODULE_8__/* .TrackerAction.Impression */ .b.Impression,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_inner_detail__WEBPACK_IMPORTED_MODULE_10__/* .InnerTopicDetail */ .D, {
                                                topic: topic
                                            })
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "opacity-80 text-shizuku-text text-sm line-clamp-2",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_linkify__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        children: introduce
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 36917:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ InnerTopicDetail)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37937);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_linkify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(83826);
/* harmony import */ var react_linkify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_linkify__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(47097);
/* harmony import */ var _components_universal_Divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(73968);
/* harmony import */ var _components_universal_Icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10298);
/* harmony import */ var _components_universal_RelativeTime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(58443);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([utils__WEBPACK_IMPORTED_MODULE_4__, _components_universal_RelativeTime__WEBPACK_IMPORTED_MODULE_7__]);
([utils__WEBPACK_IMPORTED_MODULE_4__, _components_universal_RelativeTime__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const InnerTopicDetail = (props)=>{
    const { topic  } = props;
    const { id: topicId  } = topic;
    const { 0: notes , 1: setNotes  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const { 0: pagination1 , 1: setPagination  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        utils__WEBPACK_IMPORTED_MODULE_4__/* .apiClient.note.getNoteByTopicId */ .x1.note.getNoteByTopicId(topicId, 1, 1, {
            sortBy: "created",
            sortOrder: -1
        }).then((res)=>{
            const { data , pagination  } = res;
            setNotes(data);
            setPagination(pagination);
        });
    }, [
        topicId
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col w-[400px]",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                href: `/notes/topics/${topic.slug}`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: "text-lg font-medium !m-0 py-2",
                        children: topic.name
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "break-all line-clamp-2 text-gray-2",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_linkify__WEBPACK_IMPORTED_MODULE_3___default()), {
                    children: topic.introduce
                })
            }),
            topic.description && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Divider__WEBPACK_IMPORTED_MODULE_5__/* .Divider */ .i, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-gray-1 leading-8",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_linkify__WEBPACK_IMPORTED_MODULE_3___default()), {
                            children: topic.description
                        })
                    })
                ]
            }),
            notes[0] && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Divider__WEBPACK_IMPORTED_MODULE_5__/* .Divider */ .i, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: "flex items-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Icons__WEBPACK_IMPORTED_MODULE_6__/* .MdiClockOutline */ .xW, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Divider__WEBPACK_IMPORTED_MODULE_5__/* .DividerVertical */ .x, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "flex-shrink-0",
                                children: "\u6700\u8FD1\u66F4\u65B0"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Divider__WEBPACK_IMPORTED_MODULE_5__/* .DividerVertical */ .x, {}),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                className: "flex-shrink inline-flex min-w-0",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        href: `/notes/${notes[0].nid}`,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            className: "truncate",
                                            children: notes[0]?.title
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        className: "flex-shrink-0",
                                        children: [
                                            "\uFF08",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_RelativeTime__WEBPACK_IMPORTED_MODULE_7__/* .RelativeTime */ .i, {
                                                date: notes[0].modified || notes[0].created,
                                                displayAbsoluteTimeAfterDay: Infinity
                                            }),
                                            "\uFF09"
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Divider__WEBPACK_IMPORTED_MODULE_5__/* .Divider */ .i, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                className: "flex items-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Icons__WEBPACK_IMPORTED_MODULE_6__/* .MdiFountainPenTip */ .VK, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Divider__WEBPACK_IMPORTED_MODULE_5__/* .DividerVertical */ .x, {}),
                    "\u5171\u6709\u6587\u7AE0\uFF1A",
                    pagination1?.total,
                    " \u7BC7"
                ]
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 15253:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ BanCopy)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45944);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_universal_Overlay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20444);
/* harmony import */ var _constants_tracker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10609);
/* harmony import */ var _hooks_use_analyze__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(74321);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(38325);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_universal_Overlay__WEBPACK_IMPORTED_MODULE_4__, _hooks_use_analyze__WEBPACK_IMPORTED_MODULE_6__, _store__WEBPACK_IMPORTED_MODULE_7__]);
([_components_universal_Overlay__WEBPACK_IMPORTED_MODULE_4__, _hooks_use_analyze__WEBPACK_IMPORTED_MODULE_6__, _store__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const BanCopy = (0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__.observer)((props)=>{
    const { userStore  } = (0,_store__WEBPACK_IMPORTED_MODULE_7__/* .useStore */ .oR)();
    const isLogged = userStore.isLogged;
    const { 0: showCopyWarn , 1: setShowCopyWarn  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
    const { event  } = (0,_hooks_use_analyze__WEBPACK_IMPORTED_MODULE_6__/* .useAnalyze */ .e)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (!ref.current) {
            return;
        }
        const $el = ref.current;
        $el.oncopy = (e)=>{
            if (isLogged) {
                return;
            }
            e.preventDefault();
            setShowCopyWarn(true);
            event({
                action: _constants_tracker__WEBPACK_IMPORTED_MODULE_5__/* .TrackerAction.Interaction */ .b.Interaction,
                label: `禁止复制触发，在 ${router.asPath}`
            });
        };
        return ()=>{
            $el.oncopy = null;
        };
    }, [
        event,
        isLogged,
        router.asPath
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                ref: ref,
                children: props.children
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_universal_Overlay__WEBPACK_IMPORTED_MODULE_4__/* .OverLay */ .v, {
                onClose: ()=>{
                    setShowCopyWarn(false);
                },
                show: showCopyWarn,
                center: true,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: "mt-0 text-red pointer-events-none",
                        children: "\u6CE8\u610F: "
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "my-3 text-white text-opacity-80 pointer-events-none",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            children: "\u672C\u6587\u7AE0\u4E3A\u7AD9\u957F\u539F\u521B, \u4FDD\u7559\u7248\u6743\u6240\u6709, \u7981\u6B62\u590D\u5236."
                        })
                    })
                ]
            })
        ]
    });
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 15489:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ NoteLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45944);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(47097);
/* harmony import */ var _components_in_page_Note_NoteTimelineList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(95647);
/* harmony import */ var _components_universal_FloatPopover__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85782);
/* harmony import */ var _components_universal_Icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(10298);
/* harmony import */ var _components_universal_Transition_bottom_up__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9987);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(38325);
/* harmony import */ var _utils_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9908);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([utils__WEBPACK_IMPORTED_MODULE_4__, _components_in_page_Note_NoteTimelineList__WEBPACK_IMPORTED_MODULE_5__, _components_universal_FloatPopover__WEBPACK_IMPORTED_MODULE_6__, _store__WEBPACK_IMPORTED_MODULE_9__, _utils_client__WEBPACK_IMPORTED_MODULE_10__]);
([utils__WEBPACK_IMPORTED_MODULE_4__, _components_in_page_Note_NoteTimelineList__WEBPACK_IMPORTED_MODULE_5__, _components_universal_FloatPopover__WEBPACK_IMPORTED_MODULE_6__, _store__WEBPACK_IMPORTED_MODULE_9__, _utils_client__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const NoteLayout = (0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__.observer)(/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)((props, ref)=>{
    const { date , id , title , tips , children  } = props;
    const dateFormat = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(date).locale("cn").format("YYYY\u5E74M\u6708D\u65E5 dddd");
    const { userStore: { isLogged , url  } , noteStore ,  } = (0,_store__WEBPACK_IMPORTED_MODULE_9__/* .useStore */ .oR)();
    const note = noteStore.get(id);
    const bookmark = note?.hasMemory;
    const onMarkToggle = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(async ()=>{
        await _utils_client__WEBPACK_IMPORTED_MODULE_10__/* .apiClient.note.proxy */ .x.note.proxy(id).patch({
            data: {
                hasMemory: !bookmark
            }
        });
    }, [
        bookmark,
        id
    ]);
    const noAppear = globalThis.location ? location.hash : false;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
        className: "max-w-[50em] relative is-note",
        ref: ref,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Transition_bottom_up__WEBPACK_IMPORTED_MODULE_8__/* .BottomUpTransitionView */ ._, {
                id: id,
                in: true,
                appear: !noAppear,
                mountOnEnter: true,
                unmountOnExit: true,
                timeout: 0,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "note-article relative",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "title-headline text-light-brown dark:text-shizuku-text",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                className: "inline-flex items-center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("time", {
                                        className: "font-medium",
                                        children: dateFormat
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "ml-4 inline-flex space-x-2 items-center",
                                        children: [
                                            isLogged ? bookmark ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Icons__WEBPACK_IMPORTED_MODULE_7__/* .SolidBookmark */ .CK, {
                                                className: "text-red cursor-pointer",
                                                onClick: onMarkToggle
                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Icons__WEBPACK_IMPORTED_MODULE_7__/* .RegularBookmark */ .aJ, {
                                                className: "cursor-pointer",
                                                onClick: onMarkToggle
                                            }) : bookmark ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Icons__WEBPACK_IMPORTED_MODULE_7__/* .SolidBookmark */ .CK, {
                                                className: "text-red"
                                            }) : null,
                                            note?.hide && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Icons__WEBPACK_IMPORTED_MODULE_7__/* .FluentEyeHide20Regular */ .hb, {
                                                className: !isLogged ? "text-red" : ""
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                    className: "text-center !mt-8 !before:hidden headline text-brown dark:text-shizuku-text",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_FloatPopover__WEBPACK_IMPORTED_MODULE_6__/* .FloatPopover */ .r, {
                                            triggerComponent: ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                    children: title
                                                })
                                            ,
                                            placement: "bottom",
                                            children: tips
                                        }),
                                        isLogged && url ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            className: "edit-link",
                                            target: "_blank",
                                            href: (0,utils__WEBPACK_IMPORTED_MODULE_4__/* .resolveUrl */ .Kk)(`#/notes/edit?id=${id}`, url.adminUrl),
                                            children: "\u7F16\u8F91"
                                        }) : null
                                    ]
                                }),
                                children
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_in_page_Note_NoteTimelineList__WEBPACK_IMPORTED_MODULE_5__/* .NoteTimelineList */ .R, {
                noteId: id
            })
        ]
    });
}));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 72809:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 77072:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80352);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(36211);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45944);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_message_popup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(15255);
/* harmony import */ var react_message_popup__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_message_popup__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(69755);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_use__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var api_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9378);
/* harmony import */ var utils_spring__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(12335);
/* harmony import */ var utils_client__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9908);
/* harmony import */ var _components_in_page_Note_NoteActionBar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(40956);
/* harmony import */ var _components_in_page_Note_NoteFooterNavigation__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(22559);
/* harmony import */ var _components_in_page_Note_NotePasswordConfirm__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(15668);
/* harmony import */ var _components_in_page_Note_NoteTopic__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(82316);
/* harmony import */ var _components_in_page_WarningOverlay_ban_copy__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(15253);
/* harmony import */ var _components_layouts_ArticleLayout__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(86235);
/* harmony import */ var _components_layouts_NoteLayout__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(15489);
/* harmony import */ var _components_universal_Loading__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(68946);
/* harmony import */ var _components_universal_Markdown__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(56076);
/* harmony import */ var _components_widgets_Comment__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(64414);
/* harmony import */ var _components_widgets_Search__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(44742);
/* harmony import */ var _constants_tracker__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(10609);
/* harmony import */ var _hooks_use_analyze__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(74321);
/* harmony import */ var _hooks_use_header_meta__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(61837);
/* harmony import */ var _hooks_use_load_serif_font__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(7653);
/* harmony import */ var _hooks_use_music__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(90147);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(38325);
/* harmony import */ var _utils_images__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(58276);
/* harmony import */ var _utils_time__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(52861);
/* harmony import */ var _components_universal_Seo__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(14302);
/* harmony import */ var _context_image_size__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(93922);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(47097);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(45725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(78717);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_35__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([lodash_es__WEBPACK_IMPORTED_MODULE_2__, utils_client__WEBPACK_IMPORTED_MODULE_11__, _components_in_page_Note_NoteActionBar__WEBPACK_IMPORTED_MODULE_12__, _components_in_page_Note_NoteFooterNavigation__WEBPACK_IMPORTED_MODULE_13__, _components_in_page_Note_NoteTopic__WEBPACK_IMPORTED_MODULE_15__, _components_in_page_WarningOverlay_ban_copy__WEBPACK_IMPORTED_MODULE_16__, _components_layouts_ArticleLayout__WEBPACK_IMPORTED_MODULE_17__, _components_layouts_NoteLayout__WEBPACK_IMPORTED_MODULE_18__, _components_universal_Markdown__WEBPACK_IMPORTED_MODULE_20__, _components_widgets_Comment__WEBPACK_IMPORTED_MODULE_21__, _components_widgets_Search__WEBPACK_IMPORTED_MODULE_22__, _hooks_use_analyze__WEBPACK_IMPORTED_MODULE_24__, _hooks_use_header_meta__WEBPACK_IMPORTED_MODULE_25__, _hooks_use_load_serif_font__WEBPACK_IMPORTED_MODULE_26__, _hooks_use_music__WEBPACK_IMPORTED_MODULE_27__, _store__WEBPACK_IMPORTED_MODULE_28__, _components_universal_Seo__WEBPACK_IMPORTED_MODULE_31__, _utils__WEBPACK_IMPORTED_MODULE_33__]);
([lodash_es__WEBPACK_IMPORTED_MODULE_2__, utils_client__WEBPACK_IMPORTED_MODULE_11__, _components_in_page_Note_NoteActionBar__WEBPACK_IMPORTED_MODULE_12__, _components_in_page_Note_NoteFooterNavigation__WEBPACK_IMPORTED_MODULE_13__, _components_in_page_Note_NoteTopic__WEBPACK_IMPORTED_MODULE_15__, _components_in_page_WarningOverlay_ban_copy__WEBPACK_IMPORTED_MODULE_16__, _components_layouts_ArticleLayout__WEBPACK_IMPORTED_MODULE_17__, _components_layouts_NoteLayout__WEBPACK_IMPORTED_MODULE_18__, _components_universal_Markdown__WEBPACK_IMPORTED_MODULE_20__, _components_widgets_Comment__WEBPACK_IMPORTED_MODULE_21__, _components_widgets_Search__WEBPACK_IMPORTED_MODULE_22__, _hooks_use_analyze__WEBPACK_IMPORTED_MODULE_24__, _hooks_use_header_meta__WEBPACK_IMPORTED_MODULE_25__, _hooks_use_load_serif_font__WEBPACK_IMPORTED_MODULE_26__, _hooks_use_music__WEBPACK_IMPORTED_MODULE_27__, _store__WEBPACK_IMPORTED_MODULE_28__, _components_universal_Seo__WEBPACK_IMPORTED_MODULE_31__, _utils__WEBPACK_IMPORTED_MODULE_33__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




































const renderLines = ({ value  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        className: "indent",
        children: value
    });
};
const useUpdateNote = (id)=>{
    const note = _store__WEBPACK_IMPORTED_MODULE_28__/* .store.noteStore.get */ .h.noteStore.get(id);
    const beforeModel = (0,react__WEBPACK_IMPORTED_MODULE_6__.useRef)();
    const { event  } = (0,_hooks_use_analyze__WEBPACK_IMPORTED_MODULE_24__/* .useAnalyze */ .e)();
    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{
        const hideMessage = "\u6B64\u751F\u6D3B\u8BB0\u5F55\u5DF2\u88AB\u4F5C\u8005\u5220\u9664\u6216\u9690\u85CF";
        if (note?.isDeleted) {
            react_message_popup__WEBPACK_IMPORTED_MODULE_7__.message.error(hideMessage);
            return;
        }
        const before = beforeModel.current;
        if (!before && note) {
            beforeModel.current = (0,mobx__WEBPACK_IMPORTED_MODULE_3__.toJS)(note);
            return;
        }
        if (!before || !note || (0,lodash_es__WEBPACK_IMPORTED_MODULE_2__.isEqual)(before, (0,mobx__WEBPACK_IMPORTED_MODULE_3__.toJS)(note))) {
            return;
        }
        if (before.id === note.id) {
            if (note.hide && !_store__WEBPACK_IMPORTED_MODULE_28__/* .store.userStore.isLogged */ .h.userStore.isLogged) {
                react_message_popup__WEBPACK_IMPORTED_MODULE_7__.message.error(hideMessage);
                return;
            }
            if (note.statcode == -2) {
                react_message_popup__WEBPACK_IMPORTED_MODULE_7__.message.error("\u53E3\u4EE4\u9519\u8BEF");
                return;
            }
            if ((before.statcode == -1 || before.statcode == -2) && note.statcode == 0) {
                react_message_popup__WEBPACK_IMPORTED_MODULE_7__.message.success("\u53E3\u4EE4\u6B63\u786E");
                return;
            }
            react_message_popup__WEBPACK_IMPORTED_MODULE_7__.message.info("\u751F\u6D3B\u8BB0\u5F55\u5DF2\u66F4\u65B0");
            event({
                action: _constants_tracker__WEBPACK_IMPORTED_MODULE_23__/* .TrackerAction.Interaction */ .b.Interaction,
                label: `实时更新生活记录触发 - ${note.title}`
            });
            if (_utils__WEBPACK_IMPORTED_MODULE_33__/* .isDev */ .r8) {
                console.log("note-change: ", JSON.stringify(note), "before: ", JSON.stringify(before));
            }
        }
        beforeModel.current = (0,mobx__WEBPACK_IMPORTED_MODULE_3__.toJS)(note);
    // TODO password etc.
    }, [
        note?.title,
        note?.text,
        note?.modified,
        note?.weather,
        note?.hide,
        note?.isDeleted,
        note?.topicId,
        note?.statcode, 
    ]);
};
const Markdownrenderers = {
    text: renderLines
};
const NoteView = (0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_4__.observer)((props)=>{
    const { userStore , noteStore  } = (0,_store__WEBPACK_IMPORTED_MODULE_28__/* .useStore */ .oR)();
    const note = noteStore.get(props.id) || _utils__WEBPACK_IMPORTED_MODULE_33__/* .noop */ .ZT;
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{
        if (router.query.id === "latest") {
            router.replace({
                pathname: `/notes/${note.nid}`,
                query: {
                    ...(0,lodash_es__WEBPACK_IMPORTED_MODULE_2__.omit)(router.query, "id")
                }
            });
        }
    }, [
        note.nid
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{
        // FIXME: SSR 之后的 hydrate 没有同步数据
        if (!noteStore.relationMap.has(props.id)) {
            noteStore.fetchById(note.nid, props.answer, {
                force: true
            });
        }
    }, [
        note.nid
    ]);
    (0,_hooks_use_header_meta__WEBPACK_IMPORTED_MODULE_25__/* .useHeaderShare */ .Q)(note.title, note.text);
    useUpdateNote(note.id);
    (0,_hooks_use_load_serif_font__WEBPACK_IMPORTED_MODULE_26__/* .useLoadSerifFont */ .o)();
    (0,_hooks_use_header_meta__WEBPACK_IMPORTED_MODULE_25__/* .useHeaderMeta */ .Z)(note.title, `生活观察日记${note.topic ? ` / ${note.topic.name}` : ""}`);
    (0,_hooks_use_music__WEBPACK_IMPORTED_MODULE_27__/* .useNoteMusic */ .l)(note.music);
    const { title , id: id1 , text  } = note;
    const { 0: tips , 1: setTips  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(``);
    const { description , wordCount  } = (0,_utils__WEBPACK_IMPORTED_MODULE_33__/* .getSummaryFromMd */ .D_)(text, {
        count: true,
        length: 150
    });
    const { 0: question , 1: setQuestion  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)();
    const fetchQuestion = async (id)=>{
        const payload = await utils_client__WEBPACK_IMPORTED_MODULE_11__/* .apiClient.qa.getQuestionByID */ .x.qa.getQuestionByID(id);
        if (payload) {
            setQuestion(payload.question);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{
        try {
            setTips(`创建于 ${(0,_utils_time__WEBPACK_IMPORTED_MODULE_30__/* .parseDate */ .sG)(note.created, "YYYY-MM-DD dddd")}${note.modified ? `, 修改于 ${(0,_utils_time__WEBPACK_IMPORTED_MODULE_30__/* .parseDate */ .sG)(note.modified, "YYYY-MM-DD dddd")}` : ""}, 全文字数: ${wordCount}, 阅读次数: ${note.count.read}, 喜欢次数: ${note.count.like}`);
            if (note.qa) {
                fetchQuestion(note.qa);
            }
        // eslint-disable-next-line no-empty
        } catch  {}
    }, [
        text,
        note.created,
        note.modified,
        note.count.read,
        note.count.like,
        wordCount, 
    ]);
    const isSecret = note.secret ? dayjs__WEBPACK_IMPORTED_MODULE_1___default()(note.secret).isAfter(new Date()) : false;
    const secretDate = (0,react__WEBPACK_IMPORTED_MODULE_6__.useMemo)(()=>new Date(note.secret)
    , [
        note.secret
    ]);
    const dateFormat = note.secret ? Intl.DateTimeFormat("zh-cn", {
        hour12: false,
        hour: "numeric",
        minute: "numeric",
        year: "numeric",
        day: "numeric",
        month: "long"
    }).format(secretDate) : "";
    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{
        let timer;
        if (isSecret) {
            timer = setTimeout(()=>{
                react_message_popup__WEBPACK_IMPORTED_MODULE_7__.message.info("\u5237\u65B0\u4EE5\u67E5\u770B\u89E3\u9501\u7684\u6587\u7AE0", 3);
            }, +secretDate - +new Date());
        }
        return ()=>{
            clearTimeout(timer);
        };
    }, [
        isSecret,
        secretDate
    ]);
    const { 0: myAnswer , 1: setAnswer  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)("");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Seo__WEBPACK_IMPORTED_MODULE_31__/* .Seo */ .p, {
                title,
                description,
                openGraph: {
                    title,
                    type: "article",
                    description,
                    article: {
                        publishedTime: note.created,
                        modifiedTime: note.modified || undefined
                    }
                }
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_layouts_NoteLayout__WEBPACK_IMPORTED_MODULE_18__/* .NoteLayout */ .O, {
                title: title,
                date: note.created,
                tips: tips,
                id: note.id,
                children: [
                    isSecret && !userStore.isLogged ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: "text-center my-8",
                        children: [
                            "\u8FD9\u7BC7\u6587\u7AE0\u6682\u65F6\u6CA1\u6709\u516C\u5F00\u5462\uFF0C\u5C06\u4F1A\u5728 ",
                            dateFormat,
                            " \u89E3\u9501\uFF0C\u518D\u7B49\u7B49\u54E6"
                        ]
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: "text-center my-8 text-light-brown dark:text-shizuku-text",
                                hidden: note.statcode == 0,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        hidden: note.statcode != -1,
                                        children: "\u8FD9\u7BC7\u6587\u7AE0\u8BBE\u7F6E\u4E86\u8BBF\u95EE\u53E3\u4EE4\uFF0C\u4F60\u9700\u8981\u6B63\u786E\u56DE\u7B54\u4EE5\u4E0B\u95EE\u9898\u65B9\u53EF\u9605\u8BFB\u3002"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        hidden: note.statcode != -2,
                                        children: "\u53E3\u4EE4\u9519\u8BEF\uFF0C\u4F60\u9700\u8981\u6B63\u786E\u56DE\u7B54\u4EE5\u4E0B\u95EE\u9898\u65B9\u53EF\u9605\u8BFB\u3002"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: "text-left font-black",
                                        children: [
                                            "\u3010Q\u3011",
                                            question
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_34__.Input, {
                                        placeholder: "Answer",
                                        value: myAnswer,
                                        type: "text",
                                        onChange: (e)=>setAnswer(e.target.value)
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: "btn blue",
                                        type: "submit",
                                        onClick: ()=>{
                                            (0,utils_spring__WEBPACK_IMPORTED_MODULE_10__/* .springScrollToTop */ .YG)();
                                            router.push("/notes/" + note.nid + "?answer=" + myAnswer);
                                        },
                                        children: "\u63D0\u4EA4"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_context_image_size__WEBPACK_IMPORTED_MODULE_32__/* .ImageSizeMetaContext.Provider */ .Q.Provider, {
                                value: (0,react__WEBPACK_IMPORTED_MODULE_6__.useMemo)(()=>(0,_utils_images__WEBPACK_IMPORTED_MODULE_29__/* .imagesRecord2Map */ .Gj)(note.images || [])
                                , [
                                    note.images
                                ]),
                                children: [
                                    isSecret && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        className: "flex justify-center -mb-3.5",
                                        children: [
                                            "\u8FD9\u662F\u4E00\u7BC7\u975E\u516C\u5F00\u7684\u6587\u7AE0\u3002(\u5C06\u5728 ",
                                            dateFormat,
                                            " \u89E3\u9501)"
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_in_page_WarningOverlay_ban_copy__WEBPACK_IMPORTED_MODULE_16__/* .BanCopy */ .J, {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                    className: "sr-only",
                                                    children: title
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Markdown__WEBPACK_IMPORTED_MODULE_20__/* .Markdown */ .U, {
                                                    value: text,
                                                    escapeHtml: false,
                                                    renderers: Markdownrenderers,
                                                    toc: true
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "pb-4"
                    }),
                    note.topic && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_in_page_Note_NoteTopic__WEBPACK_IMPORTED_MODULE_15__/* .NoteTopic */ .K, {
                        noteId: props.id,
                        topic: note.topic
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_in_page_Note_NoteFooterNavigation__WEBPACK_IMPORTED_MODULE_13__/* .NoteFooterNavigation */ .R, {
                        id: props.id
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "pb-4"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_in_page_Note_NoteActionBar__WEBPACK_IMPORTED_MODULE_12__/* .NoteFooterActionBar */ .l, {
                        id: props.id
                    })
                ]
            }),
            !isSecret && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layouts_ArticleLayout__WEBPACK_IMPORTED_MODULE_17__/* .ArticleLayout */ .B, {
                style: {
                    minHeight: "unset",
                    paddingTop: "0"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_widgets_Comment__WEBPACK_IMPORTED_MODULE_21__/* .CommentLazy */ .pT, {
                    id: id1,
                    allowComment: note.allowComment ?? true
                }, id1)
            }, "at"),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_widgets_Search__WEBPACK_IMPORTED_MODULE_22__.SearchFAB, {})
        ]
    });
});
const PP = (0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_4__.observer)((props)=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    const { noteStore  } = (0,_store__WEBPACK_IMPORTED_MODULE_28__/* .useStore */ .oR)();
    const note = noteStore.get(props?.id);
    const update = (0,react_use__WEBPACK_IMPORTED_MODULE_8__.useUpdate)();
    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{
        if (!note) {
            update();
        }
    }, [
        note
    ]);
    if ("answer" in props) {
        if (note?.code == -1) {
            const fetchData = (answer)=>{
                const id = router.query.id;
                noteStore.fetchById(isNaN(+id) ? id : +id, answer).catch((err)=>{
                    react_message_popup__WEBPACK_IMPORTED_MODULE_7__.message.error("\u5BC6\u7801\u9519\u8BEF");
                }).then(()=>{
                    update();
                });
            };
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_in_page_Note_NotePasswordConfirm__WEBPACK_IMPORTED_MODULE_14__/* .NotePasswordConfrim */ .X, {
                onSubmit: fetchData
            });
        } else {
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NoteView, {
                id: props.id,
                answer: props?.answer
            });
        }
    }
    if (!note) {
        noteStore.add(props);
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Loading__WEBPACK_IMPORTED_MODULE_19__/* .Loading */ .g, {});
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NoteView, {
        id: props.id
    });
});
PP.getInitialProps = async (ctx)=>{
    const id = ctx.query.id;
    const answer = ctx.query.answer;
    if (id == "latest") {
        return await _store__WEBPACK_IMPORTED_MODULE_28__/* .store.noteStore.fetchLatest */ .h.noteStore.fetchLatest();
    }
    try {
        const res = await _store__WEBPACK_IMPORTED_MODULE_28__/* .store.noteStore.fetchById */ .h.noteStore.fetchById(isNaN(+id) ? id : +id, answer ? String(answer) : undefined, {
            force: true
        });
        res.answer = answer;
        return res;
    } catch (err) {
        if (err instanceof api_client__WEBPACK_IMPORTED_MODULE_9__/* .RequestError */ .Lu) {
            if (err.status !== 403) {
                throw err;
            }
            return {
                answer: answer,
                id: +id
            };
        } else {
            throw err;
        }
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PP);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 42685:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "b": () => (/* binding */ mood2icon),
  "I": () => (/* binding */ weather2icon)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./src/components/universal/Icons/index.tsx
var Icons = __webpack_require__(10298);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
;// CONCATENATED MODULE: ./src/components/universal/Icons/emoji.tsx

function FaSolidSmile(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        width: "0.97em",
        height: "1em",
        viewBox: "0 0 496 512",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            fill: "currentColor",
            d: "M248 8C111 8 0 119 0 256s111 248 248 248s248-111 248-248S385 8 248 8zm80 168c17.7 0 32 14.3 32 32s-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32zm-160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32zm194.8 170.2C334.3 380.4 292.5 400 248 400s-86.3-19.6-114.8-53.8c-13.6-16.3 11-36.7 24.6-20.5c22.4 26.9 55.2 42.2 90.2 42.2s67.8-15.4 90.2-42.2c13.4-16.2 38.1 4.2 24.6 20.5z"
        })
    });
}
function FaSolidSadCry(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        width: "0.97em",
        height: "1em",
        viewBox: "0 0 496 512",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            fill: "currentColor",
            d: "M248 8C111 8 0 119 0 256c0 90.1 48.2 168.7 120 212.1V288c0-8.8 7.2-16 16-16s16 7.2 16 16v196.7c29.5 12.4 62 19.3 96 19.3s66.5-6.9 96-19.3V288c0-8.8 7.2-16 16-16s16 7.2 16 16v180.1C447.8 424.7 496 346 496 256C496 119 385 8 248 8zm-65.5 216.5c-14.8-13.2-46.2-13.2-61 0L112 233c-3.8 3.3-9.3 4-13.7 1.6c-4.4-2.4-6.9-7.4-6.1-12.4c4-25.2 34.2-42.1 59.9-42.1S208 197 212 222.2c.8 5-1.7 10-6.1 12.4c-5.8 3.1-11.2.7-13.7-1.6l-9.7-8.5zM248 416c-26.5 0-48-28.7-48-64s21.5-64 48-64s48 28.7 48 64s-21.5 64-48 64zm149.8-181.5c-5.8 3.1-11.2.7-13.7-1.6l-9.5-8.5c-14.8-13.2-46.2-13.2-61 0L304 233c-3.8 3.3-9.3 4-13.7 1.6c-4.4-2.4-6.9-7.4-6.1-12.4c4-25.2 34.2-42.1 59.9-42.1S400 197 404 222.2c.6 4.9-1.8 9.9-6.2 12.3z"
        })
    });
}
function FaSolidSadTear(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        width: "0.97em",
        height: "1em",
        viewBox: "0 0 496 512",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            fill: "currentColor",
            d: "M248 8C111 8 0 119 0 256s111 248 248 248s248-111 248-248S385 8 248 8zm80 168c17.7 0 32 14.3 32 32s-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32zM152 416c-26.5 0-48-21-48-47c0-20 28.5-60.4 41.6-77.8c3.2-4.3 9.6-4.3 12.8 0C171.5 308.6 200 349 200 369c0 26-21.5 47-48 47zm16-176c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32zm170.2 154.2C315.8 367.4 282.9 352 248 352c-21.2 0-21.2-32 0-32c44.4 0 86.3 19.6 114.7 53.8c13.8 16.4-11.2 36.5-24.5 20.4z"
        })
    });
}
function FaSolidAngry(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        width: "0.97em",
        height: "1em",
        viewBox: "0 0 496 512",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            fill: "currentColor",
            d: "M248 8C111 8 0 119 0 256s111 248 248 248s248-111 248-248S385 8 248 8zM136 240c0-9.3 4.1-17.5 10.5-23.4l-31-9.3c-8.5-2.5-13.3-11.5-10.7-19.9c2.5-8.5 11.4-13.2 19.9-10.7l80 24c8.5 2.5 13.3 11.5 10.7 19.9c-2.1 6.9-8.4 11.4-15.3 11.4c-.5 0-1.1-.2-1.7-.2c.7 2.7 1.7 5.3 1.7 8.2c0 17.7-14.3 32-32 32S136 257.7 136 240zm168 154.2c-27.8-33.4-84.2-33.4-112.1 0c-13.5 16.3-38.2-4.2-24.6-20.5c20-24 49.4-37.8 80.6-37.8s60.6 13.8 80.6 37.8c13.8 16.5-11.1 36.6-24.5 20.5zm76.6-186.9l-31 9.3c6.3 5.8 10.5 14.1 10.5 23.4c0 17.7-14.3 32-32 32s-32-14.3-32-32c0-2.9.9-5.6 1.7-8.2c-.6.1-1.1.2-1.7.2c-6.9 0-13.2-4.5-15.3-11.4c-2.5-8.5 2.3-17.4 10.7-19.9l80-24c8.4-2.5 17.4 2.3 19.9 10.7c2.5 8.5-2.3 17.4-10.8 19.9z"
        })
    });
}
function FaSolidTired(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        width: "0.97em",
        height: "1em",
        viewBox: "0 0 496 512",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            fill: "currentColor",
            d: "M248 8C111 8 0 119 0 256s111 248 248 248s248-111 248-248S385 8 248 8zm33.8 189.7l80-48c11.6-6.9 24 7.7 15.4 18L343.6 208l33.6 40.3c8.7 10.4-3.9 24.8-15.4 18l-80-48c-7.7-4.7-7.7-15.9 0-20.6zm-163-30c-8.6-10.3 3.8-24.9 15.4-18l80 48c7.8 4.7 7.8 15.9 0 20.6l-80 48c-11.5 6.8-24-7.6-15.4-18l33.6-40.3l-33.6-40.3zM248 288c51.9 0 115.3 43.8 123.2 106.7c1.7 13.6-8 24.6-17.7 20.4c-25.9-11.1-64.4-17.4-105.5-17.4s-79.6 6.3-105.5 17.4c-9.8 4.2-19.4-7-17.7-20.4C132.7 331.8 196.1 288 248 288z"
        })
    });
}
function FaSolidMeh(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        width: "0.97em",
        height: "1em",
        viewBox: "0 0 496 512",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            fill: "currentColor",
            d: "M248 8C111 8 0 119 0 256s111 248 248 248s248-111 248-248S385 8 248 8zm-80 168c17.7 0 32 14.3 32 32s-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32zm176 192H152c-21.2 0-21.2-32 0-32h192c21.2 0 21.2 32 0 32zm-16-128c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z"
        })
    });
}
function FaSolidGrinSquintTears(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        width: "1em",
        height: "1em",
        viewBox: "0 0 512 512",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            fill: "currentColor",
            d: "M409.6 111.9c22.6-3.2 73.5-12 88.3-26.8c19.2-19.2 18.9-50.6-.7-70.2S446-5 426.9 14.2c-14.8 14.8-23.5 65.7-26.8 88.3c-.8 5.5 3.9 10.2 9.5 9.4zM102.4 400.1c-22.6 3.2-73.5 12-88.3 26.8c-19.1 19.1-18.8 50.6.8 70.2s51 19.9 70.2.7c14.8-14.8 23.5-65.7 26.8-88.3c.8-5.5-3.9-10.2-9.5-9.4zm311.7-256.5c-33 3.9-48.6-25.1-45.7-45.7c3.4-24 7.4-42.1 11.5-56.5C285.1-13.4 161.8-.5 80.6 80.6C-.5 161.7-13.4 285 41.4 379.9c14.4-4.1 32.4-8 56.5-11.5c33.2-3.9 48.6 25.2 45.7 45.7c-3.4 24-7.4 42.1-11.5 56.5c94.8 54.8 218.1 41.9 299.3-39.2s94-204.4 39.2-299.3c-14.4 4.1-32.5 8-56.5 11.5zM255.7 106c3.3-13.2 22.4-11.5 23.6 1.8l4.8 52.3l52.3 4.8c13.4 1.2 14.9 20.3 1.8 23.6l-90.5 22.6c-8.9 2.2-16.7-5.9-14.5-14.5l22.5-90.6zm-90.9 230.3L160 284l-52.3-4.8c-13.4-1.2-14.9-20.3-1.8-23.6l90.5-22.6c8.8-2.2 16.7 5.8 14.5 14.5L188.3 338c-3.1 13.2-22.2 11.7-23.5-1.7zm215.7 44.2c-29.3 29.3-75.7 50.4-116.7 50.4c-18.9 0-36.6-4.5-51-14.7c-9.8-6.9-8.7-21.8 2-27.2c28.3-14.6 63.9-42.4 97.8-76.3s61.7-69.6 76.3-97.8c5.4-10.5 20.2-11.9 27.3-2c32.3 45.3 7.1 124.7-35.7 167.6z"
        })
    });
}
function FaSolidFrownOpen(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        width: "0.97em",
        height: "1em",
        viewBox: "0 0 496 512",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            fill: "currentColor",
            d: "M248 8C111 8 0 119 0 256s111 248 248 248s248-111 248-248S385 8 248 8zM136 208c0-17.7 14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32s-32-14.3-32-32zm187.3 183.3c-31.2-9.6-59.4-15.3-75.3-15.3s-44.1 5.7-75.3 15.3c-11.5 3.5-22.5-6.3-20.5-18.1c7-40 60.1-61.2 95.8-61.2s88.8 21.3 95.8 61.2c2 11.9-9.1 21.6-20.5 18.1zM328 240c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z"
        })
    });
}
function FaSolidGrimace(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        width: "0.97em",
        height: "1em",
        viewBox: "0 0 496 512",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            fill: "currentColor",
            d: "M248 8C111 8 0 119 0 256s111 248 248 248s248-111 248-248S385 8 248 8zM144 400h-8c-17.7 0-32-14.3-32-32v-8h40v40zm0-56h-40v-8c0-17.7 14.3-32 32-32h8v40zm-8-136c0-17.7 14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32s-32-14.3-32-32zm72 192h-48v-40h48v40zm0-56h-48v-40h48v40zm64 56h-48v-40h48v40zm0-56h-48v-40h48v40zm64 56h-48v-40h48v40zm0-56h-48v-40h48v40zm-8-104c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32zm64 128c0 17.7-14.3 32-32 32h-8v-40h40v8zm0-24h-40v-40h8c17.7 0 32 14.3 32 32v8z"
        })
    });
}
function FaSolidFlushed(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        width: "0.97em",
        height: "1em",
        viewBox: "0 0 496 512",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            fill: "currentColor",
            d: "M344 200c-13.3 0-24 10.7-24 24s10.7 24 24 24s24-10.7 24-24s-10.7-24-24-24zm-192 0c-13.3 0-24 10.7-24 24s10.7 24 24 24s24-10.7 24-24s-10.7-24-24-24zM248 8C111 8 0 119 0 256s111 248 248 248s248-111 248-248S385 8 248 8zM80 224c0-39.8 32.2-72 72-72s72 32.2 72 72s-32.2 72-72 72s-72-32.2-72-72zm232 176H184c-21.2 0-21.2-32 0-32h128c21.2 0 21.2 32 0 32zm32-104c-39.8 0-72-32.2-72-72s32.2-72 72-72s72 32.2 72 72s-32.2 72-72 72z"
        })
    });
}

// EXTERNAL MODULE: ./src/components/universal/Icons/layout.tsx
var layout = __webpack_require__(72809);
;// CONCATENATED MODULE: ./src/constants/meta-icon.ts




const weather2icon = (weather)=>{
    const map = {
        晴: layout/* PhSunBold */.z,
        多云: Icons/* RiSunCloudyFill */.T$,
        阴: Icons/* MdiCloud */.cA,
        雪: Icons/* MdiSnowflake */.bm,
        雨: Icons/* BiCloudRainFill */.DR,
        雷雨: Icons/* BiCloudLightningRainFill */.e8
    };
    return external_react_default().createElement(map[weather] || layout/* PhSunBold */.z);
};
const mood2icon = (mood)=>{
    const map = {
        开心: FaSolidSmile,
        伤心: FaSolidSadTear,
        大哭: FaSolidSadCry,
        生气: FaSolidAngry,
        痛苦: FaSolidTired,
        悲哀: FaSolidMeh,
        不快: FaSolidMeh,
        激动: FaSolidGrinSquintTears,
        担心: FaSolidFrownOpen,
        可怕: FaSolidGrimace,
        可恶: FaSolidAngry,
        绝望: FaSolidFrownOpen,
        焦虑: FaSolidFlushed
    };
    return external_react_default().createElement(map[mood] || FaSolidSmile);
};


/***/ }),

/***/ 7653:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ useLoadSerifFont)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47097);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([utils__WEBPACK_IMPORTED_MODULE_1__]);
utils__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const useLoadSerifFont = ()=>{
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        (0,utils__WEBPACK_IMPORTED_MODULE_1__/* .loadStyleSheet */ .Wx)("https://fonts.loli.net/css?family=Noto+Serif+SC&display=swap");
    }, []);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 90147:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ useNoteMusic)
/* harmony export */ });
/* unused harmony export useMusic */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38325);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store__WEBPACK_IMPORTED_MODULE_1__]);
_store__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const useMusic = (musicList)=>{
    const { musicStore  } = (0,_store__WEBPACK_IMPORTED_MODULE_1__/* .useStore */ .oR)();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (!musicList) {
            return;
        }
        if (musicList.length === 0) {
            musicStore.empty();
            return;
        }
        musicStore.setPlaylist(musicList);
        musicStore.setHide(false);
        return ()=>{
            musicStore.empty();
            musicStore.setHide(true);
        };
    }, [
        musicList
    ]);
};
const useNoteMusic = (music)=>{
    const ids = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>music && Array.isArray(music) && music.length > 0 ? music.filter((m)=>m.id && m.type === "netease"
        ).map((m)=>~~m.id
        ) : null
    , [
        music
    ]);
    useMusic(ids);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2256:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ textToBigCharOrWord)
/* harmony export */ });
/**
 * 2022 xxxx -> 2022
 * 月色真美！ -> 月
 */ const textToBigCharOrWord = (name)=>{
    if (!name) {
        return "";
    }
    const splitOnce = name.split(" ")[0];
    const bigChar = splitOnce.length > 4 ? name[0] : splitOnce;
    return bigChar;
};


/***/ }),

/***/ 78717:
/***/ (() => {



/***/ }),

/***/ 45725:
/***/ ((module) => {

"use strict";
module.exports = require("antd");

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

/***/ 83826:
/***/ ((module) => {

"use strict";
module.exports = require("react-linkify");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4225,8034,5811,7937,8747,8106,8825,8081,9908,2672,4302,298,9987,6235,6264,8946,9781,2726,444,1113,6076,4742,5782,1211,3834,5963,1351,4782], () => (__webpack_exec__(77072)));
module.exports = __webpack_exports__;

})();