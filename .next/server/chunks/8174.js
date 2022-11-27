exports.id = 8174;
exports.ids = [8174];
exports.modules = {

/***/ 4210:
/***/ ((module) => {

// Exports
module.exports = {
	"tag": "Tag_tag__Hr7G_"
};


/***/ }),

/***/ 8174:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ TagFAB)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5944);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(553);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4466);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_transition_group__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2649);
/* harmony import */ var _components_universal_Icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8337);
/* harmony import */ var _components_universal_Overlay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(150);
/* harmony import */ var _components_universal_Tag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9136);
/* harmony import */ var _components_universal_Transition_bottom_up__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7735);
/* harmony import */ var _components_universal_Transition_right_left__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9372);
/* harmony import */ var _constants_tracker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8277);
/* harmony import */ var _hooks_use_analyze__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8461);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3531);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([utils__WEBPACK_IMPORTED_MODULE_5__, _components_universal_Overlay__WEBPACK_IMPORTED_MODULE_7__, _components_universal_Tag__WEBPACK_IMPORTED_MODULE_8__, _hooks_use_analyze__WEBPACK_IMPORTED_MODULE_12__, _store__WEBPACK_IMPORTED_MODULE_13__]);
([utils__WEBPACK_IMPORTED_MODULE_5__, _components_universal_Overlay__WEBPACK_IMPORTED_MODULE_7__, _components_universal_Tag__WEBPACK_IMPORTED_MODULE_8__, _hooks_use_analyze__WEBPACK_IMPORTED_MODULE_12__, _store__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














const _FloatPostTagButton = (0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__.observer)(()=>{
    const { actionStore , appUIStore  } = _store__WEBPACK_IMPORTED_MODULE_13__/* .store */ .h;
    const { 0: showTags , 1: setShowTags  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const { 0: postWithTag , 1: setTagPost  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
    const fetchPostsWithTag = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(async (tagName)=>{
        setTagPost(null);
        const { data: posts  } = await utils__WEBPACK_IMPORTED_MODULE_5__/* .apiClient.category.getTagByName */ .x1.category.getTagByName(tagName);
        setTagPost(posts);
    }, []);
    const { 0: tags1 , 1: setTags  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
    const fetchTags = async ()=>{
        const { data: tags  } = await utils__WEBPACK_IMPORTED_MODULE_5__/* .apiClient.category.getAllTags */ .x1.category.getAllTags();
        setTags(tags);
    };
    const idSymbol = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(Symbol());
    const { event  } = (0,_hooks_use_analyze__WEBPACK_IMPORTED_MODULE_12__/* .useAnalyze */ .e)();
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        actionStore.removeActionBySymbol(idSymbol.current);
        const action = {
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Icons__WEBPACK_IMPORTED_MODULE_6__/* .JamTags */ .y_, {}),
            id: idSymbol.current,
            onClick: ()=>{
                if (tags1.length == 0) {
                    fetchTags();
                }
                setShowTags(true);
                event({
                    action: _constants_tracker__WEBPACK_IMPORTED_MODULE_11__/* .TrackerAction.Click */ .b.Click,
                    label: "\u6807\u7B7E FAB \u70B9\u51FB"
                });
            }
        };
        requestAnimationFrame(()=>{
            actionStore.appendActions(action);
        });
        return ()=>{
            // eslint-disable-next-line react-hooks/exhaustive-deps
            actionStore.removeActionBySymbol(idSymbol.current);
        };
    }, [
        tags1.length
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Overlay__WEBPACK_IMPORTED_MODULE_7__/* .OverLay */ .v, {
        show: showTags,
        onClose: ()=>{
            setShowTags(false);
            setTagPost([]);
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            style: {
                maxWidth: appUIStore.viewport.w > 800 ? "50vw" : "calc(100vw - 100px)"
            },
            className: "m-auto relative h-full",
            onClick: ()=>{
                setShowTags(false);
                setTagPost([]);
            },
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "absolute z-[3] bottom-[50vh] top-[100px]",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_4__.TransitionGroup, {
                        className: "flex items-end flex-wrap",
                        children: tags1.map(({ name  }, i)=>{
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Transition_bottom_up__WEBPACK_IMPORTED_MODULE_9__/* .BottomUpTransitionView */ ._, {
                                appear: true,
                                unmountOnExit: true,
                                className: "pr-4",
                                timeout: {
                                    enter: 50 * i
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Tag__WEBPACK_IMPORTED_MODULE_8__/* .BigTag */ .A, {
                                    tagName: name,
                                    onClick: (e)=>{
                                        e.stopPropagation();
                                        fetchPostsWithTag(name);
                                    }
                                })
                            }, name);
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "top-[50vh] absolute",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("article", {
                        className: "article-list !all:text-light-400",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_4__.TransitionGroup, {
                                children: postWithTag ? postWithTag.map((child, i)=>{
                                    const date = new Date(child.created);
                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Transition_right_left__WEBPACK_IMPORTED_MODULE_10__/* .RightLeftTransitionView */ .A, {
                                        timeout: {
                                            enter: 50 * i
                                        },
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    href: "/posts/[category]/[slug]",
                                                    as: `/posts/${child.category.slug}/${child.slug}`,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        children: child.title
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "meta",
                                                    children: Intl.DateTimeFormat("en-US").format(date)
                                                })
                                            ]
                                        })
                                    }, child.id);
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Transition_right_left__WEBPACK_IMPORTED_MODULE_10__/* .RightLeftTransitionView */ .A, {
                                    timeout: 100,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "\u8F7D\u5165\u4E2D."
                                    })
                                })
                            })
                        })
                    })
                })
            ]
        })
    });
});
const TagFAB = (0,utils__WEBPACK_IMPORTED_MODULE_5__/* .NoSSR */ .ri)(_FloatPostTagButton);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9136:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ BigTag)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5944);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var randomcolor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(503);
/* harmony import */ var randomcolor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(randomcolor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3531);
/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8337);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4210);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store__WEBPACK_IMPORTED_MODULE_4__]);
_store__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const BigTag = (0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__.observer)(({ tagName , onClick  })=>{
    const { appStore  } = (0,_store__WEBPACK_IMPORTED_MODULE_4__/* .useStore */ .oR)();
    const bgColor = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>randomcolor__WEBPACK_IMPORTED_MODULE_2___default()({
            format: "hex",
            luminosity: appStore.colorMode == "dark" ? "dark" : "light",
            seed: tagName
        })
    , [
        appStore.colorMode,
        tagName
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_6___default().tag),
        style: {
            background: bgColor
        },
        onClick: onClick,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Icons__WEBPACK_IMPORTED_MODULE_5__/* .MdiTagHeartOutline */ .Kw, {
                className: "inline-block mr-2 text-lg"
            }),
            tagName
        ]
    });
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;