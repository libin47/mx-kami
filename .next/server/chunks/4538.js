exports.id = 4538;
exports.ids = [4538];
exports.modules = {

/***/ 4876:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "Search_root__IpdXg",
	"item": "Search_item__Fp97E",
	"active": "Search_active__sQC8E",
	"status-bar": "Search_status-bar__Lvrc4",
	"loading": "Search_loading__BuQGY",
	"move": "Search_move__NVEht"
};


/***/ }),

/***/ 4538:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchFAB": () => (/* binding */ SearchFAB),
/* harmony export */   "SearchHotKey": () => (/* binding */ SearchHotKey),
/* harmony export */   "SearchOverlay": () => (/* binding */ SearchOverlay),
/* harmony export */   "SearchPanel": () => (/* binding */ SearchPanel)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(352);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(553);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_shortcut_guide__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5011);
/* harmony import */ var react_shortcut_guide__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_shortcut_guide__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2649);
/* harmony import */ var _components_universal_Icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8337);
/* harmony import */ var _components_universal_Overlay__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(150);
/* harmony import */ var _constants_tracker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8277);
/* harmony import */ var _hooks_use_analyze__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8461);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3531);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4876);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_12__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([lodash_es__WEBPACK_IMPORTED_MODULE_2__, utils__WEBPACK_IMPORTED_MODULE_6__, _components_universal_Overlay__WEBPACK_IMPORTED_MODULE_8__, _hooks_use_analyze__WEBPACK_IMPORTED_MODULE_10__, _store__WEBPACK_IMPORTED_MODULE_11__]);
([lodash_es__WEBPACK_IMPORTED_MODULE_2__, utils__WEBPACK_IMPORTED_MODULE_6__, _components_universal_Overlay__WEBPACK_IMPORTED_MODULE_8__, _hooks_use_analyze__WEBPACK_IMPORTED_MODULE_10__, _store__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













let lastResponse = [
    +new Date(),
    null
];
const search = (0,lodash_es__WEBPACK_IMPORTED_MODULE_2__.throttle)((keyword)=>{
    return new Promise((resolve, reject)=>{
        const date = +new Date();
        if (!keyword) {
            lastResponse = [
                date,
                null
            ];
            resolve(null);
            return;
        }
        utils__WEBPACK_IMPORTED_MODULE_6__/* .apiClient.search.searchByAlgolia */ .x1.search.searchByAlgolia(keyword).then((data)=>{
            // 只给最后一个请求返回结果
            if (date > lastResponse[0]) {
                lastResponse = [
                    date,
                    data
                ];
            }
            resolve(lastResponse[1]);
        }).catch((err)=>{
            reject(err);
        });
    });
}, 1000);
const SearchPanel = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_4__.memo)((props)=>{
    const { defaultKeyword  } = props;
    const { 0: keyword , 1: setKeyword  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(defaultKeyword || "");
    const deferValue = (0,react__WEBPACK_IMPORTED_MODULE_4__.useDeferredValue)(keyword);
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const { 0: list , 1: setList  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);
    const { event  } = (0,_hooks_use_analyze__WEBPACK_IMPORTED_MODULE_10__/* .useAnalyze */ .e)();
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        setLoading(true);
        setCurrentSelect(0);
        search(deferValue)?.then((res)=>{
            event({
                action: _constants_tracker__WEBPACK_IMPORTED_MODULE_9__/* .TrackerAction.Interaction */ .b.Interaction,
                label: `搜索触发：${deferValue}`
            });
            if (!res) {
                setLoading(false);
                setList([]);
                return;
            }
            const data = res.data;
            if (!data) {
                setLoading(false);
                return;
            }
            const _list = data.map((item)=>{
                switch(item.type){
                    case "post":
                        return {
                            title: item.title,
                            subtitle: item.category.name,
                            id: item.id,
                            url: `/posts/${item.category.slug}/${item.slug}`
                        };
                    case "note":
                        return {
                            title: item.title,
                            subtitle: "\u751F\u6D3B\u8BB0\u5F55",
                            id: item.id,
                            url: `/notes/${item.nid}`
                        };
                    case "page":
                        return {
                            title: item.title,
                            subtitle: "\u9875\u9762",
                            id: item.id,
                            url: `/pages/${item.slug}`
                        };
                }
            });
            setList(_list);
            setLoading(false);
        }).catch((err)=>{
            console.log(err);
            setLoading(false);
        });
    }, [
        deferValue
    ]);
    const { 0: currentSelect1 , 1: setCurrentSelect  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0);
    const listRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);
    const trackerOne = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(false);
    const handleKeyDown = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)((e)=>{
        if (!listRef.current) {
            return;
        }
        const $ = listRef.current;
        const tracker = ()=>{
            if (trackerOne.current) {
                return;
            }
            event({
                action: _constants_tracker__WEBPACK_IMPORTED_MODULE_9__/* .TrackerAction.Interaction */ .b.Interaction,
                label: `搜索触发键盘操作：${e.key}`
            });
            trackerOne.current = true;
        };
        switch(e.key){
            case "Enter":
                {
                    $.children.item(currentSelect1).children.item(0)?.click();
                    tracker();
                    break;
                }
            case "ArrowDown":
                {
                    setCurrentSelect((currentSelect)=>{
                        const index = currentSelect + 1;
                        return index ? index % list.length : 0;
                    });
                    tracker();
                    break;
                }
            case "ArrowUp":
                {
                    setCurrentSelect((currentSelect)=>{
                        const index = currentSelect - 1;
                        return index < 0 ? list.length - 1 : index;
                    });
                    tracker();
                    break;
                }
        }
        $.children.item(currentSelect1)?.scrollIntoView({
            behavior: "smooth"
        });
    }, [
        currentSelect1,
        list.length
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_12___default().root),
        onKeyDown: handleKeyDown,
        role: "dialog",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                autoFocus: true,
                className: "p-4 px-5 w-full text-[16px] leading-4 bg-transparent",
                placeholder: "Search...",
                defaultValue: defaultKeyword,
                value: keyword,
                onChange: (e)=>setKeyword(e.target.value)
                ,
                onKeyDown: (e)=>{
                    if (e.key === "ArrowDown" || e.key === "ArrowUp" || e.key === "Enter") {
                        e.preventDefault();
                    }
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: clsx__WEBPACK_IMPORTED_MODULE_1___default()((_index_module_css__WEBPACK_IMPORTED_MODULE_12___default()["status-bar"]), loading && (_index_module_css__WEBPACK_IMPORTED_MODULE_12___default().loading))
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex-grow flex-shrink relative overflow-overlay",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                    className: "py-4 px-3 h-full",
                    ref: listRef,
                    children: list.length === 0 && !loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex h-full items-center justify-center",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-col items-center space-y-2",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Icons__WEBPACK_IMPORTED_MODULE_7__/* .EmptyIcon */ .tL, {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: "\u65E0\u5185\u5BB9"
                                })
                            ]
                        })
                    }) : list.map((item, index)=>{
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            onMouseOver: (0,lodash_es__WEBPACK_IMPORTED_MODULE_2__.throttle)(()=>{
                                setCurrentSelect(index);
                            }, 40),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                href: item.url,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()((_index_module_css__WEBPACK_IMPORTED_MODULE_12___default().item), index === currentSelect1 && (_index_module_css__WEBPACK_IMPORTED_MODULE_12___default().active)),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "block flex-1 flex-shrink-0 truncate",
                                            children: item.title
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "text-gray-2 block text-deepgray flex-grow-0 flex-shrink-0",
                                            children: item.subtitle
                                        })
                                    ]
                                })
                            })
                        }, item.id);
                    })
                })
            })
        ]
    });
});
const SearchOverlay = (props)=>{
    const { ...rest } = props;
    (0,react_shortcut_guide__WEBPACK_IMPORTED_MODULE_5__.useShortcut)("Escape", [
        react_shortcut_guide__WEBPACK_IMPORTED_MODULE_5__.Modifier.None
    ], ()=>{
        props.onClose();
    }, "\u5173\u95ED\u641C\u7D22\u6846", {
        hiddenInPanel: true
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Overlay__WEBPACK_IMPORTED_MODULE_8__/* .OverLay */ .v, {
        childrenOutside: true,
        center: true,
        ...rest,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SearchPanel, {})
    });
};
const SearchHotKey = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_4__.memo)(()=>{
    const { event  } = (0,_hooks_use_analyze__WEBPACK_IMPORTED_MODULE_10__/* .useAnalyze */ .e)();
    const { 0: show , 1: setShow  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const handler = ()=>{
        event({
            action: _constants_tracker__WEBPACK_IMPORTED_MODULE_9__/* .TrackerAction.Click */ .b.Click,
            label: "cmd+k"
        });
        setShow(true);
    };
    (0,react_shortcut_guide__WEBPACK_IMPORTED_MODULE_5__.useShortcut)("K", [
        react_shortcut_guide__WEBPACK_IMPORTED_MODULE_5__.Modifier.Command
    ], handler, "\u641C\u7D22");
    (0,react_shortcut_guide__WEBPACK_IMPORTED_MODULE_5__.useShortcut)("K", [
        react_shortcut_guide__WEBPACK_IMPORTED_MODULE_5__.Modifier.Control
    ], handler, "\u641C\u7D22", {
        hiddenInPanel: true
    });
    (0,react_shortcut_guide__WEBPACK_IMPORTED_MODULE_5__.useShortcut)("/", [
        react_shortcut_guide__WEBPACK_IMPORTED_MODULE_5__.Modifier.None
    ], handler, "\u641C\u7D22");
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SearchOverlay, {
        show: show,
        onClose: ()=>setShow(false)
    });
});
const SearchFAB = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_4__.memo)(()=>{
    const { 0: show , 1: setShow  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const { actionStore  } = (0,_store__WEBPACK_IMPORTED_MODULE_11__/* .useStore */ .oR)();
    const idSymbol = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(Symbol());
    const { event  } = (0,_hooks_use_analyze__WEBPACK_IMPORTED_MODULE_10__/* .useAnalyze */ .e)();
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if (show) {
            event({
                action: _constants_tracker__WEBPACK_IMPORTED_MODULE_9__/* .TrackerAction.Impression */ .b.Impression,
                label: `搜索框被唤醒`
            });
        }
    }, [
        show
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        actionStore.removeActionBySymbol(idSymbol.current);
        const action = {
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Icons__WEBPACK_IMPORTED_MODULE_7__/* .IonSearch */ .qh, {}),
            id: idSymbol.current,
            onClick: ()=>{
                setShow(true);
            }
        };
        requestAnimationFrame(()=>{
            actionStore.appendActions(action);
        });
        return ()=>{
            // eslint-disable-next-line react-hooks/exhaustive-deps
            actionStore.removeActionBySymbol(idSymbol.current);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SearchOverlay, {
        show: show,
        onClose: ()=>setShow(false)
    });
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;