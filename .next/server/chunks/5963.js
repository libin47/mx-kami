exports.id = 5963;
exports.ids = [5963];
exports.modules = {

/***/ 6320:
/***/ ((module) => {

// Exports
module.exports = {
	"wrap": "Comment_wrap___vXGw",
	"comment-box-head": "Comment_comment-box-head__KyJEt",
	"comment": "Comment_comment__eivbF",
	"empty": "Comment_empty__6BJkV",
	"guest-avatar": "Comment_guest-avatar__8Zo6c",
	"avatar": "Comment_avatar__5OC_R",
	"inner": "Comment_inner__R3_sh",
	"comment-avatar": "Comment_comment-avatar__ZTvjP",
	"content": "Comment_content__JqHUL",
	"content-author": "Comment_content-author__zNbUv",
	"name": "Comment_name__NMpEb",
	"datetime": "Comment_datetime__zQOWJ",
	"actions": "Comment_actions__bvDgn",
	"nested": "Comment_nested__l_so7",
	"highlight": "Comment_highlight__lnOkZ"
};


/***/ }),

/***/ 75534:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ Avatar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45944);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var randomcolor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(30503);
/* harmony import */ var randomcolor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(randomcolor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29346);
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_lazyload__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(38325);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6320);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store__WEBPACK_IMPORTED_MODULE_5__]);
_store__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const generateColorFromMode = (mode, seed)=>{
    return randomcolor__WEBPACK_IMPORTED_MODULE_2___default()({
        luminosity: mode,
        alpha: 0.28,
        format: "hex",
        seed
    });
};
const Avatar = (0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__.observer)(({ src  })=>{
    const { 0: ready , 1: setReady  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (!src) {
            return;
        }
        const image = new Image();
        image.src = src;
        image.crossOrigin = "anonymous";
        image.onload = ()=>{
            setReady(true);
        };
        image.onerror = ()=>{};
    }, [
        src
    ]);
    const { appStore  } = (0,_store__WEBPACK_IMPORTED_MODULE_5__/* .useStore */ .oR)();
    const randomColor = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>{
        if (appStore.colorMode === "dark") {
            return generateColorFromMode("dark", src);
        } else {
            return generateColorFromMode("light", src);
        }
    }, [
        appStore.colorMode,
        src
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_6___default()["guest-avatar"]),
        style: ready ? undefined : {
            backgroundColor: randomColor
        },
        "data-avatar": src,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_lazyload__WEBPACK_IMPORTED_MODULE_4___default()), {
            offset: 250,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_6___default().avatar),
                style: ready ? {
                    backgroundImage: `url(${src})`,
                    opacity: 1
                } : undefined
            })
        })
    });
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 13911:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ CommentBox)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80352);
/* harmony import */ var lodash_es_omit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(18081);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_message_popup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15255);
/* harmony import */ var react_message_popup__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_message_popup__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(47097);
/* harmony import */ var validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(27379);
/* harmony import */ var validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var validator_lib_isURL__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(90159);
/* harmony import */ var validator_lib_isURL__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(validator_lib_isURL__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_universal_FloatPopover__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(85782);
/* harmony import */ var _components_universal_Icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(10298);
/* harmony import */ var _components_universal_ImpressionView__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(27625);
/* harmony import */ var _constants_kaomoji__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(81402);
/* harmony import */ var _constants_tracker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(10609);
/* harmony import */ var _hooks_use_analyze__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(74321);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(38325);
/* harmony import */ var _universal_Input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(72726);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(6320);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_15__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([lodash_es__WEBPACK_IMPORTED_MODULE_1__, utils__WEBPACK_IMPORTED_MODULE_4__, _components_universal_FloatPopover__WEBPACK_IMPORTED_MODULE_7__, _components_universal_ImpressionView__WEBPACK_IMPORTED_MODULE_9__, _hooks_use_analyze__WEBPACK_IMPORTED_MODULE_11__, _store__WEBPACK_IMPORTED_MODULE_12__]);
([lodash_es__WEBPACK_IMPORTED_MODULE_1__, utils__WEBPACK_IMPORTED_MODULE_4__, _components_universal_FloatPopover__WEBPACK_IMPORTED_MODULE_7__, _components_universal_ImpressionView__WEBPACK_IMPORTED_MODULE_9__, _hooks_use_analyze__WEBPACK_IMPORTED_MODULE_11__, _store__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

















const USER_PREFIX = "mx-space-comment-author";
const USER_DRAFT = "mx-space-comment-draft";
const CommentBox = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(({ onSubmit , onCancel , autoFocus =false  })=>{
    const { 0: author , 1: setAuthor  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(utils__WEBPACK_IMPORTED_MODULE_4__/* .isDev */ .r8 ? "\u6D4B\u8BD5\u6635\u79F0" : "");
    const { 0: mail , 1: setMail  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(utils__WEBPACK_IMPORTED_MODULE_4__/* .isDev */ .r8 ? "test@innei.ren" : "");
    const { 0: url , 1: setUrl  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(utils__WEBPACK_IMPORTED_MODULE_4__/* .isDev */ .r8 ? "https://test.innei.ren" : "");
    const { 0: text1 , 1: setText  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const taRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const $ref = taRef.current;
        if ($ref && utils__WEBPACK_IMPORTED_MODULE_4__/* .isDev */ .r8) {
            if (utils__WEBPACK_IMPORTED_MODULE_4__/* .isDev */ .r8) {
                const testText = "\u5E7B\u306A\u3093\u304B\u3058\u3083\u306A\u3044 \u4EBA\u751F\u306F\u5922\u3058\u3083\u306A\u3044 \u50D5\u9054\u306F\u306F\u3063\u304D\u308A\u3068\u751F\u304D\u3066\u308B\u3093\u3060";
                $ref.value = testText;
                setText(testText);
            } else {
                const draftText = localStorage.getItem(USER_DRAFT) ?? "";
                $ref.value = draftText;
                setText(draftText);
            }
        }
        return ()=>{
            if ($ref && $ref.value) {
                localStorage.setItem(USER_DRAFT, $ref.value);
            }
        };
    }, []);
    const { userStore  } = (0,_store__WEBPACK_IMPORTED_MODULE_12__/* .useStore */ .oR)();
    const logged = userStore.isLogged;
    const reset = ()=>{
        if (taRef.current) {
            taRef.current.value = "";
            setText("");
        }
    };
    const handleInsertEmoji = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((emoji)=>{
        if (!taRef.current) {
            return;
        }
        const $ta = taRef.current;
        const start = $ta.selectionStart;
        const end = $ta.selectionEnd;
        $ta.value = `${$ta.value.substring(0, start)} ${emoji} ${$ta.value.substring(end, $ta.value.length)}`;
        setText($ta.value) // force update react state.
        ;
        requestAnimationFrame(()=>{
            const shouldMoveToPos = start + emoji.length + 2;
            $ta.selectionStart = shouldMoveToPos;
            $ta.selectionEnd = shouldMoveToPos;
            $ta.focus();
        });
    }, []);
    const handleCancel = ()=>{
        onCancel?.();
        reset();
    };
    const handleSubmit = ()=>{
        if (!taRef.current) {
            return;
        }
        const text = taRef.current.value;
        if (!logged) {
            if (author === userStore.name || author === userStore.username) {
                return react_message_popup__WEBPACK_IMPORTED_MODULE_3__.message.error("\u6635\u79F0\u4E0E\u6211\u4E3B\u4EBA\u91CD\u540D\u4E86, \u4F46\u662F\u4F60\u597D\u50CF\u5E76\u4E0D\u662F\u6211\u7684\u4E3B\u4EBA\u5509");
            }
            if (!author || !text || !mail) {
                react_message_popup__WEBPACK_IMPORTED_MODULE_3__.message.error("\u5C0F\u53EF\u7231, \u80FD\u628A\u4FE1\u606F\u586B\u5B8C\u6574\u4E48");
                return;
            }
            if (url && !validator_lib_isURL__WEBPACK_IMPORTED_MODULE_6___default()(url, {
                require_protocol: true
            })) {
                react_message_popup__WEBPACK_IMPORTED_MODULE_3__.message.error("\u5C0F\u53EF\u7231, \u7F51\u5740\u683C\u5F0F\u4E0D\u6B63\u786E\u54E6");
                return;
            }
            if (!validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_5___default()(mail)) {
                react_message_popup__WEBPACK_IMPORTED_MODULE_3__.message.error("\u5C0F\u53EF\u7231, \u90AE\u7BB1\u683C\u5F0F\u4E0D\u6B63\u786E\u54E6");
                return;
            }
            if (author.length > 20) {
                react_message_popup__WEBPACK_IMPORTED_MODULE_3__.message.error("\u6635\u79F0\u592A\u957F\u4E86\u4E86\u5566, \u670D\u52A1\u5668\u4F1A\u574F\u6389\u7684");
                return;
            }
        }
        if (text.length > 500) {
            react_message_popup__WEBPACK_IMPORTED_MODULE_3__.message.error("\u5185\u5BB9\u592A\u957F\u4E86\u4E86\u5566, \u670D\u52A1\u5668\u4F1A\u574F\u6389\u7684");
            return;
        }
        const model = {
            author,
            text,
            mail,
            url: url || undefined
        };
        localStorage.setItem(USER_PREFIX, JSON.stringify((0,lodash_es_omit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(model, [
            "text"
        ])));
        onSubmit(model).then(()=>{
            reset();
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const store = localStorage.getItem(USER_PREFIX);
        if (store) {
            try {
                const model = JSON.parse(store);
                setMail(model.mail || "");
                setAuthor(model.author || "");
                setUrl(model.url || "");
            // eslint-disable-next-line no-empty
            } catch  {}
        }
    }, []);
    const setWrapper = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((fn)=>{
        return (e)=>{
            fn(e.target.value);
        };
    }, []);
    const setter = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>({
            author: setWrapper(setAuthor),
            mail: setWrapper(setMail),
            url: setWrapper(setUrl),
            text: setWrapper(setText)
        })
    , []);
    const prefixIcon = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>({
            author: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Icons__WEBPACK_IMPORTED_MODULE_8__/* .PhUser */ .eD, {}),
            mail: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Icons__WEBPACK_IMPORTED_MODULE_8__/* .MdiEmailFastOutline */ ._s, {}),
            url: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Icons__WEBPACK_IMPORTED_MODULE_8__/* .SiGlyphGlobal */ .lk, {})
        })
    , []);
    const handleCommentBoxClick = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{
        if (userStore.isLogged) {
            return;
        }
        react_message_popup__WEBPACK_IMPORTED_MODULE_3__.message.warn("\u6B27\u5C3C\u9171\uFF0C\u6587\u660E\u53D1\u8A00\u54E6\uFF0C\u5426\u5219\u8BC4\u8BBA\u4F1A\u88AB\u79FB\u5165\u5783\u573E\u7BB1\u54E6");
    }, [
        userStore.isLogged
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "my-4",
        children: [
            !logged && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_15___default()["comment-box-head"]),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_universal_Input__WEBPACK_IMPORTED_MODULE_13__/* .Input */ .I, {
                        placeholder: "\u6635\u79F0 *",
                        required: true,
                        name: "author",
                        prefix: prefixIcon["author"],
                        value: author,
                        onChange: setter["author"]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_universal_Input__WEBPACK_IMPORTED_MODULE_13__/* .Input */ .I, {
                        placeholder: "\u90AE\u7BB1 *",
                        name: "mail",
                        required: true,
                        prefix: prefixIcon["mail"],
                        value: mail,
                        onChange: setter["mail"]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_universal_Input__WEBPACK_IMPORTED_MODULE_13__/* .Input */ .I, {
                        placeholder: "\u7F51\u7AD9 https?://",
                        name: "website",
                        prefix: prefixIcon["url"],
                        value: url,
                        onChange: setter["url"]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_universal_Input__WEBPACK_IMPORTED_MODULE_13__/* .Input */ .I, {
                // @ts-ignore
                ref: taRef,
                multi: true,
                maxLength: 500,
                // @ts-ignore
                rows: 4,
                required: true,
                onChange: setter["text"],
                autoFocus: autoFocus,
                onClick: handleCommentBoxClick,
                placeholder: !logged ? "\u563F \uFE3F(\uFFE3\uFE36\uFFE3)\uFE3F, \u7559\u4E2A\u8BC4\u8BBA\u597D\u4E0D\u597D\u561B~" : "\u4E3B\u4EBA, \u8BF4\u70B9\u4EC0\u4E48\u597D\u5462? "
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "relative flex justify-between mt-2 flex-wrap items-center",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex-shrink-0 flex space-x-2 items-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_FloatPopover__WEBPACK_IMPORTED_MODULE_7__/* .FloatPopover */ .r, {
                                triggerComponent: ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        "aria-label": "support markdown",
                                        className: "btn blue text-lg flex-shrink-0 mr-[12px] cursor-default pointer-events-none",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Icons__WEBPACK_IMPORTED_MODULE_8__/* .MdiLanguageMarkdown */ .IS, {})
                                    })
                                ,
                                children: "\u8BC4\u8BBA\u652F\u6301\u90E8\u5206 Markdown \u8BED\u6CD5"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(KaomojiButton, {
                                onClickKaomoji: handleInsertEmoji
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "whitespace-nowrap flex-shrink-0",
                        children: [
                            onCancel && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "btn red",
                                onClick: handleCancel,
                                children: "\u53D6\u6D88\u56DE\u590D"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "btn yellow ml-[12px]",
                                onClick: handleSubmit,
                                disabled: text1.trim().length === 0,
                                children: "\u53D1\u9001"
                            })
                        ]
                    })
                ]
            })
        ]
    });
});
const KaomojiButton = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(({ onClickKaomoji  })=>{
    const { event  } = (0,_hooks_use_analyze__WEBPACK_IMPORTED_MODULE_11__/* .useAnalyze */ .e)();
    const { 0: trackerOnce , 1: setOnce  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const randomKaomoji = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)((0,lodash_es__WEBPACK_IMPORTED_MODULE_1__.sample)(_constants_kaomoji__WEBPACK_IMPORTED_MODULE_16__/* .kaomoji */ .H));
    const handleTrack = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{
        setOnce(true);
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_FloatPopover__WEBPACK_IMPORTED_MODULE_7__/* .FloatPopover */ .r, {
        trigger: "both",
        wrapperClassNames: "flex-shrink-0",
        triggerComponent: /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                className: "btn green mr-[12px] cursor-pointer",
                children: randomKaomoji.current
            })
        ),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_ImpressionView__WEBPACK_IMPORTED_MODULE_9__/* .ImpressionView */ .X, {
            shouldTrack: !trackerOnce,
            trackerMessage: "\u66DD\u5149 Kaomoji \u9762\u677F",
            onTrack: handleTrack,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-[300px] overflow-auto max-w-[80vw] h-[300px] max-h-[50vh]",
                children: _constants_kaomoji__WEBPACK_IMPORTED_MODULE_16__/* .kaomoji.map */ .H.map((emoji, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        "aria-label": "kaomoji panel",
                        className: "text-blue p-2",
                        onClick: ()=>{
                            event({
                                action: _constants_tracker__WEBPACK_IMPORTED_MODULE_10__/* .TrackerAction.Click */ .b.Click,
                                label: "Kaomoji"
                            });
                            onClickKaomoji(emoji);
                        },
                        children: emoji
                    }, i)
                )
            })
        })
    });
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 32848:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ Comment)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_universal_RelativeTime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(58443);
/* harmony import */ var _utils_spring__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12335);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6320);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_universal_RelativeTime__WEBPACK_IMPORTED_MODULE_3__]);
_components_universal_RelativeTime__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const Comment = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.memo)((props)=>{
    const { actions , author , children , avatar , content , datetime , commentKey , highlight , id , location , ...rest } = props;
    const { className , ...htmlProps } = rest;
    const key = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{
        const keyArr = commentKey.split("#").slice(1);
        return `#${keyArr.length > 5 ? `${keyArr.slice(0, 3).join(".")}...${keyArr.slice(4, keyArr.length - 1).reduce((acc, cur)=>acc + +cur
        , 0)}+${keyArr[keyArr.length - 1]}` : keyArr.join(".")}`;
    }, [
        commentKey
    ]);
    const handleJump = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{
        if (!id) {
            return;
        }
        const $el = document.getElementById(id);
        $el && (0,_utils_spring__WEBPACK_IMPORTED_MODULE_4__/* .springScrollToElement */ .HE)($el, 1000, -window.innerHeight / 2 + 50);
    }, [
        id
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()((_index_module_css__WEBPACK_IMPORTED_MODULE_5___default().comment), className),
        id: id,
        ...htmlProps,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(highlight && (_index_module_css__WEBPACK_IMPORTED_MODULE_5___default().highlight), (_index_module_css__WEBPACK_IMPORTED_MODULE_5___default().inner)),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_5___default()["comment-avatar"]),
                        children: avatar
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_5___default().content),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_5___default()["content-author"]),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_5___default().name),
                                        children: author
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_5___default().datetime),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_RelativeTime__WEBPACK_IMPORTED_MODULE_3__/* .RelativeTime */ .i, {
                                                date: datetime
                                            }),
                                            " ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "truncate break-all cursor-pointer",
                                                onClick: handleJump,
                                                children: key
                                            })
                                        ]
                                    }),
                                    location && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        children: [
                                            "\u6765\u81EA\uFF1A",
                                            location
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "text-shizuku-text",
                                children: content
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_5___default().actions),
                                children: actions && actions.map((action, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: action
                                    }, i)
                                )
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_5___default().nested),
                children: children
            })
        ]
    });
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 39942:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ Comments)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45944);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_message_popup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15255);
/* harmony import */ var react_message_popup__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_message_popup__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var socket__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(81211);
/* harmony import */ var _components_universal_Markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(56076);
/* harmony import */ var _components_universal_Transition_bottom_up__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9987);
/* harmony import */ var _utils_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9908);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(64414);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(38325);
/* harmony import */ var _avatar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(75534);
/* harmony import */ var _box__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(13911);
/* harmony import */ var _comment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(32848);
/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7799);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(6320);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _renderers_comment_at__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(71002);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([socket__WEBPACK_IMPORTED_MODULE_4__, _components_universal_Markdown__WEBPACK_IMPORTED_MODULE_5__, _utils_client__WEBPACK_IMPORTED_MODULE_7__, ___WEBPACK_IMPORTED_MODULE_8__, _store__WEBPACK_IMPORTED_MODULE_9__, _avatar__WEBPACK_IMPORTED_MODULE_10__, _box__WEBPACK_IMPORTED_MODULE_11__, _comment__WEBPACK_IMPORTED_MODULE_12__, _empty__WEBPACK_IMPORTED_MODULE_13__, _renderers_comment_at__WEBPACK_IMPORTED_MODULE_14__]);
([socket__WEBPACK_IMPORTED_MODULE_4__, _components_universal_Markdown__WEBPACK_IMPORTED_MODULE_5__, _utils_client__WEBPACK_IMPORTED_MODULE_7__, ___WEBPACK_IMPORTED_MODULE_8__, _store__WEBPACK_IMPORTED_MODULE_9__, _avatar__WEBPACK_IMPORTED_MODULE_10__, _box__WEBPACK_IMPORTED_MODULE_11__, _comment__WEBPACK_IMPORTED_MODULE_12__, _empty__WEBPACK_IMPORTED_MODULE_13__, _renderers_comment_at__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















const Comments = (0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__.observer)(()=>{
    const { commentStore  } = (0,_store__WEBPACK_IMPORTED_MODULE_9__/* .useStore */ .oR)();
    const { comments  } = commentStore;
    if (comments.length === 0) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_empty__WEBPACK_IMPORTED_MODULE_13__/* .Empty */ .H, {});
    }
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)(CommentList);
});
const CommentList = (0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__.observer)(()=>{
    const { commentStore  } = (0,_store__WEBPACK_IMPORTED_MODULE_9__/* .useStore */ .oR)();
    const { comments  } = commentStore;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Transition_bottom_up__WEBPACK_IMPORTED_MODULE_6__/* .BottomUpTransitionView */ ._, {
        appear: true,
        id: "comments-wrap",
        timeout: (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>({
                appear: 300,
                enter: 500
            })
        , []),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            id: "comments-wrap",
            children: comments.map((comment)=>{
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(InnerCommentList, {
                    id: comment.id
                }, comment.id);
            })
        })
    });
});
const disallowedTypes = [
    "html",
    "virtualHtml",
    "linkReference",
    "imageReference",
    "table",
    "tableBody",
    "tableCell",
    "tableHead",
    "tableRow",
    "emphasis",
    "thematicBreak",
    "heading", 
];
const SingleComment = (0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__.observer)(({ id: id1 , children  })=>{
    const { 0: replyId , 1: setReplyId  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const { userStore  } = (0,_store__WEBPACK_IMPORTED_MODULE_9__/* .useStore */ .oR)();
    const logged = userStore.isLogged;
    const { commentStore  } = (0,_store__WEBPACK_IMPORTED_MODULE_9__/* .useStore */ .oR)();
    const { commentIdMap  } = commentStore;
    const comment = commentIdMap.get(id1);
    const { 0: sure , 1: setSure  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const handleReply = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async (model)=>{
        const { success , error  } = await (0,___WEBPACK_IMPORTED_MODULE_8__/* .openCommentMessage */ .DY)();
        try {
            let data;
            if (logged) {
                data = await _utils_client__WEBPACK_IMPORTED_MODULE_7__/* .apiClient.comment.proxy.master.reply */ .x.comment.proxy.master.reply(comment.id).post({
                    data: model
                });
            } else {
                data = await _utils_client__WEBPACK_IMPORTED_MODULE_7__/* .apiClient.comment.reply */ .x.comment.reply(comment.id, model);
            }
            success();
            if (!socket__WEBPACK_IMPORTED_MODULE_4__.socketClient.socket.connected) {
                commentStore.addComment(data);
            }
            setReplyId("");
        } catch (err) {
            error();
            console.error(err);
        }
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        comment.id,
        logged
    ]);
    const handleDelete = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((id)=>async ()=>{
            await _utils_client__WEBPACK_IMPORTED_MODULE_7__/* .apiClient.comment.proxy */ .x.comment.proxy(id).delete();
            react_message_popup__WEBPACK_IMPORTED_MODULE_3__.message.success("\u5220\u9664\u6210\u529F~");
            commentStore.deleteComment(id);
        }
    , // eslint-disable-next-line react-hooks/exhaustive-deps
    []);
    const url = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{
        try {
            const host = new URL(comment.url || "").host;
            return `//${host}`;
        } catch  {
            return undefined;
        }
    }, [
        comment.url
    ]);
    const actionsEl = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>[
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                onClick: ()=>{
                    if (replyId !== comment.id) setReplyId(comment.id);
                    else setReplyId("");
                },
                children: replyId !== comment.id ? "\u56DE\u590D" : "\u53D6\u6D88\u56DE\u590D"
            }, "comment-list-reply-to-0"),
            logged ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
                children: [
                    sure !== comment.id && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        onClick: ()=>{
                            setSure(comment.id);
                            setTimeout(()=>{
                                try {
                                    setSure(null);
                                // eslint-disable-next-line no-empty
                                } catch  {}
                            }, 8000);
                        },
                        children: "\u5220\u9664"
                    }, "comment-list-delete"),
                    sure === comment.id && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        onClick: ()=>{
                            handleDelete(comment.id)();
                            setSure(null);
                        },
                        children: "\u771F\u7684\u9700\u8981\u5220\u9664?"
                    }, "comment-list-delete text-red")
                ]
            }) : null, 
        ]
    , [
        comment.id,
        handleDelete,
        logged,
        replyId,
        sure
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_comment__WEBPACK_IMPORTED_MODULE_12__/* .Comment */ .s, {
        // @ts-expect-error
        location: comment.location,
        "data-comment-id": comment.id,
        id: `comments-${comment.id}`,
        highlight: comment.highlight,
        author: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            href: url,
            rel: "nofollow",
            children: comment.author
        }),
        avatar: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_avatar__WEBPACK_IMPORTED_MODULE_10__/* .Avatar */ .q, {
            src: comment.avatar
        }),
        content: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Markdown__WEBPACK_IMPORTED_MODULE_5__/* .Markdown */ .U, {
            value: `${comment.parent ? `@${(commentIdMap.get(comment.parent)?.id ?? comment.parent?.id) ?? ""} ` : ""}${comment.text}`,
            className: (_index_module_css__WEBPACK_IMPORTED_MODULE_15___default().comment),
            skipHtml: true,
            escapeHtml: true,
            disallowedTypes: disallowedTypes,
            renderers: (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>({
                    commentAt: ({ value  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_renderers_comment_at__WEBPACK_IMPORTED_MODULE_14__/* .CommentAtRender */ .R, {
                            id: value
                        })
                })
            , [])
        }),
        datetime: comment.created,
        commentKey: comment.key,
        actions: actionsEl,
        children: [
            replyId === comment.id && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_box__WEBPACK_IMPORTED_MODULE_11__/* .CommentBox */ .q, {
                autoFocus: true,
                onSubmit: handleReply,
                onCancel: ()=>setReplyId("")
            }, "box"),
            children
        ]
    }, comment.id);
});
const InnerCommentList = (0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__.observer)(({ id  })=>{
    const { commentStore  } = (0,_store__WEBPACK_IMPORTED_MODULE_9__/* .useStore */ .oR)();
    const { commentIdMap  } = commentStore;
    const comment = commentIdMap.get(id);
    if (!comment) {
        return null;
    }
    if (comment.children.length > 0) {
        const children = comment.children;
        const childComments = children.map((child)=>{
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(InnerCommentList, {
                id: child.id
            }, child.id);
        });
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SingleComment, {
            id: comment.id,
            children: childComments
        }, comment.id);
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SingleComment, {
        id: comment.id
    }, comment.id);
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7799:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ Empty)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80352);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_universal_Icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10298);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(64414);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6320);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([lodash_es__WEBPACK_IMPORTED_MODULE_1__, ___WEBPACK_IMPORTED_MODULE_4__]);
([lodash_es__WEBPACK_IMPORTED_MODULE_1__, ___WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const Empty = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        style: {
            ...___WEBPACK_IMPORTED_MODULE_4__/* .minHeightProperty */ .oz
        },
        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_5___default().empty),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Icons__WEBPACK_IMPORTED_MODULE_3__/* .EmptyIcon */ .tL, {}),
            (0,lodash_es__WEBPACK_IMPORTED_MODULE_1__.sample)([
                "\u8FD9\u91CC\u7A7A\u7A7A\u5982\u4E5F...",
                "\u5BA2\u5B98, \u611F\u89C9\u5982\u4F55?",
                "\u563F, \u5C0F\u53EF\u7231, \u8BF4\u70B9\u4EC0\u4E48\u5462?", 
            ])
        ]
    });
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 64414:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DY": () => (/* binding */ openCommentMessage),
/* harmony export */   "oz": () => (/* binding */ minHeightProperty),
/* harmony export */   "pT": () => (/* binding */ CommentLazy)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45944);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19785);
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_message_popup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15255);
/* harmony import */ var react_message_popup__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_message_popup__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(69755);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_use__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9908);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(38325);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(47097);
/* harmony import */ var _universal_Pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(13834);
/* harmony import */ var _box__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(13911);
/* harmony import */ var _comments__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(39942);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6320);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(93412);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_client__WEBPACK_IMPORTED_MODULE_6__, _store__WEBPACK_IMPORTED_MODULE_7__, _utils__WEBPACK_IMPORTED_MODULE_8__, _box__WEBPACK_IMPORTED_MODULE_10__, _comments__WEBPACK_IMPORTED_MODULE_11__]);
([_utils_client__WEBPACK_IMPORTED_MODULE_6__, _store__WEBPACK_IMPORTED_MODULE_7__, _utils__WEBPACK_IMPORTED_MODULE_8__, _box__WEBPACK_IMPORTED_MODULE_10__, _comments__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














const openCommentMessage = async ()=>{
    const { destory  } = await react_message_popup__WEBPACK_IMPORTED_MODULE_4__.message.loading({
        content: "\u53D1\u9001\u4E2D",
        duration: 20000
    });
    return {
        success: ()=>{
            destory();
            react_message_popup__WEBPACK_IMPORTED_MODULE_4__.message.success({
                content: "\u6210\u529F\u5566",
                duration: 2000
            });
        },
        error: ()=>{
            destory();
            react_message_popup__WEBPACK_IMPORTED_MODULE_4__.message.error({
                content: "\u5931\u8D25\u4E86, 555",
                duration: 2000
            });
        }
    };
};
const _CommentWrap = (0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__.observer)((props)=>{
    const { id , allowComment  } = props;
    const { 0: comments , 1: setComments  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const { 0: pagination1 , 1: setPagination  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});
    const { userStore  } = (0,_store__WEBPACK_IMPORTED_MODULE_7__/* .useStore */ .oR)();
    const logged = userStore.isLogged;
    const { commentStore  } = (0,_store__WEBPACK_IMPORTED_MODULE_7__/* .useStore */ .oR)();
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        return ()=>{
            commentStore.reset();
        };
    }, []);
    const fetchComments = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async (page = 1, size = 10)=>{
        return commentStore.fetchComment(id, page, size).then(({ data , pagination  })=>{
            setComments(data);
            setPagination(pagination);
            setCommentShow(true);
            return data;
        });
    }, [
        id
    ]);
    const handleComment = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async (model)=>{
        const { success , error  } = await openCommentMessage();
        try {
            if (logged) {
                await _utils_client__WEBPACK_IMPORTED_MODULE_6__/* .apiClient.comment.proxy.master.comment */ .x.comment.proxy.master.comment(id).post({
                    params: {
                        ts: Date.now()
                    },
                    data: {
                        ...model
                    }
                });
            } else {
                await _utils_client__WEBPACK_IMPORTED_MODULE_6__/* .apiClient.comment.comment */ .x.comment.comment(id, model);
            }
            requestAnimationFrame(()=>{
                success();
                fetchComments();
            });
        } catch (e) {
            error();
            console.error(e);
        }
    }, [
        fetchComments,
        id,
        logged
    ]);
    const hash = (0,react_use__WEBPACK_IMPORTED_MODULE_5__.useHash)();
    const shouldPreloadComment = (0,_utils__WEBPACK_IMPORTED_MODULE_8__/* .isClientSide */ .S_)() && hash.includes("#comments-");
    const { 0: commentShow , 1: setCommentShow  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(shouldPreloadComment);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (shouldPreloadComment) {
            setCommentShow(true);
            fetchComments().then(()=>{
                setTimeout(()=>{
                    const $el = document.getElementById(location.hash.slice(1));
                    $el && (0,_utils__WEBPACK_IMPORTED_MODULE_8__/* .springScrollToElement */ .HE)($el, 1000, -250);
                }, 1000);
            });
        }
    }, [
        fetchComments,
        shouldPreloadComment
    ]);
    const { ref  } = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__.useInView)({
        threshold: 0.5,
        triggerOnce: true,
        onChange (inView) {
            if (inView && !commentShow) {
                fetchComments();
            }
        }
    });
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setComments([]);
        setCommentShow(false);
    }, [
        id
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_13___default().wrap),
        ref: ref,
        "data-hide-print": true,
        id: "comments",
        children: [
            allowComment && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: "headline",
                children: comments.length ? `共有${comments.length}条评论` : "\u4EB2\u4EB2\u7559\u4E2A\u8BC4\u8BBA\u518D\u8D70\u5457"
            }),
            allowComment ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_box__WEBPACK_IMPORTED_MODULE_10__/* .CommentBox */ .q, {
                onSubmit: handleComment
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: "headline",
                children: "\u4E3B\u4EBA\u7981\u6B62\u4E86\u8BC4\u8BBA"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                id: "comment-anchor"
            }),
            commentShow ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_comments__WEBPACK_IMPORTED_MODULE_11__/* .Comments */ .H, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "text-center",
                        children: pagination1 && pagination1.totalPage !== 0 && pagination1.total !== undefined && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_universal_Pagination__WEBPACK_IMPORTED_MODULE_9__/* .Pagination */ .t, {
                            current: pagination1.currentPage || 1,
                            onChange: (page)=>{
                                document.getElementById("comment-anchor")?.scrollIntoView({
                                    behavior: "smooth",
                                    block: "center"
                                });
                                requestAnimationFrame(()=>{
                                    fetchComments(page);
                                });
                            },
                            total: pagination1.totalPage
                        })
                    })
                ]
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_loading__WEBPACK_IMPORTED_MODULE_12__/* .CommentLoading */ .o, {})
        ]
    });
});
const CommentLazy = (0,_utils__WEBPACK_IMPORTED_MODULE_8__/* .NoSSR */ .ri)(_CommentWrap);
const minHeightProperty = {
    minHeight: "400px"
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 93412:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ CommentLoading)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_universal_Loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(68946);



const CommentLoading = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "pt-[150px]"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Loading__WEBPACK_IMPORTED_MODULE_2__/* .Loading */ .g, {
                loadingText: "\u6B63\u5728\u52A0\u8F7D\u8BC4\u8BBA\u533A..."
            })
        ]
    });
});


/***/ }),

/***/ 71002:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ CommentAtRender)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45944);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38325);
/* harmony import */ var _utils_spring__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12335);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store__WEBPACK_IMPORTED_MODULE_3__]);
_store__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const CommentAtRender = (0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__.observer)(({ id: value  })=>{
    const { commentStore  } = (0,_store__WEBPACK_IMPORTED_MODULE_3__/* .useStore */ .oR)();
    const { commentIdMap  } = commentStore;
    const comment = typeof value === "string" ? commentIdMap.get(value) : value;
    const onMouseOver = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{
        if (comment?.id) {
            commentStore.setHighlightCommnet(comment.id);
        }
    }, [
        comment?.id
    ]);
    const onClick = (e)=>{
        e.preventDefault();
        const $el = document.getElementById(`comments-${comment?.id}`);
        $el && (0,_utils_spring__WEBPACK_IMPORTED_MODULE_4__/* .springScrollToElement */ .HE)($el, 1000, -120);
    };
    const onLeave = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{
        if (comment?.id) {
            commentStore.setHighlightCommnet(comment.id, false);
        }
    }, [
        comment?.id
    ]);
    if (!comment) {
        return null;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
        href: "javascript:;",
        className: "mr-[12px] text-primary",
        onMouseOver: onMouseOver,
        onMouseLeave: onLeave,
        onClick: onClick,
        children: [
            "@",
            comment.author
        ]
    });
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 81402:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ kaomoji)
/* harmony export */ });
const kaomoji = [
    "(o^\u25BD^o)",
    "(\u2312\u25BD\u2312)\u2606",
    "<(\uFFE3\uFE36\uFFE3)>",
    "\u30FD(\u30FB\u2200\u30FB)\uFF89",
    "(\uFFE3\u03C9\uFFE3)",
    "(o\uFF65\u03C9\uFF65o)",
    "(\uFF20\uFF3E\u25E1\uFF3E)",
    "(^\u4EBA^)",
    "(o\xb4\u25BD`o)",
    "(*\xb4\u25BD`*)",
    "(\u2267\u25E1\u2266)",
    "(o\xb4\u2200`o)",
    "(\uFF3E\u25BD\uFF3E)",
    "(\u2312\u03C9\u2312)",
    "\u2570(\u2594\u2200\u2594)\u256F",
    "(\u2500\u203F\u203F\u2500)",
    "(*^\u203F^*)",
    "(\u272F\u25E1\u272F)",
    "(\u25D5\u203F\u25D5)",
    "(*\u2267\u03C9\u2266*)",
    "(\u2606\u25BD\u2606)",
    "(\u2312\u203F\u2312)",
    "\uFF3C(\u2267\u25BD\u2266)\uFF0F",
    "(*\xb0\u25BD\xb0*)",
    "(\u2727\u03C9\u2727)",
    "(\uFFE3\u25BD\uFFE3)",
    "o(\u2267\u25BD\u2266)o",
    "(\u2606\u03C9\u2606)",
    "\uFF3C(\uFFE3\u25BD\uFFE3)\uFF0F",
    "(*\xaf\uFE36\xaf*)",
    "\uFF3C(\uFF3E\u25BD\uFF3E)\uFF0F",
    "\u0669(\u25D5\u203F\u25D5)\u06F6",
    "(o\u02D8\u25E1\u02D8o)",
    "\\(\u2605\u03C9\u2605)/",
    "\\(^\u30EE^)/",
    "(\u3003\uFF3E\u25BD\uFF3E\u3003)",
    "(\u256F\u2727\u25BD\u2727)\u256F",
    "o(>\u03C9<)o",
    "(\u0E51\u02C3\u1D17\u02C2)\uFEED",
    "(\u0E51\u02D8\uFE36\u02D8\u0E51)",
    "(\u2040\u15E2\u2040)",
    "(\uFFE2\u203F\uFFE2 )",
    "(\xac\u203F\xac )",
    "(*\uFFE3\u25BD\uFFE3)b",
    "( \u02D9\u25BF\u02D9 )",
    "(\xaf\u25BF\xaf)",
    "( \u25D5\u25BF\u25D5 )",
    "(\u1D54\u25E1\u1D54)",
    "(\u2661\u03BC_\u03BC)",
    "(*^^*)\u2661",
    "(\u2661-_-\u2661)",
    "(\uFFE3\u03B5\uFFE3\uFF20)",
    "\u30FD(\u2661\u203F\u2661)\u30CE",
    "(\u2500\u203F\u203F\u2500)\u2661",
    "(*\u2661\u2200\u2661)",
    "(\u25D5\u203F\u25D5)\u2661",
    "(\u10E6\u02D8\u2323\u02D8\u10E6)",
    "(\u2661\xb0\u25BD\xb0\u2661)",
    "(\u2661\u02D9\uFE36\u02D9\u2661)",
    "(\u2267\u25E1\u2266) \u2661",
    "(\u2312\u25BD\u2312)\u2661",
    "\u0669(\u2661\u03B5\u2661)\u06F6",
    "\u2661 (\uFFE3\u0417\uFFE3)",
    "(\u2764\u03C9\u2764)",
    "(\xb4\u2661\u203F\u2661`)",
    "(\xb0\u25E1\xb0\u2661)",
    "(\xb4\uA4B3`)\u2661",
    "\u2661(>\u1D17\u2022)",
    "(\u2312_\u2312;)",
    "(o^ ^o)",
    "(*/\u03C9\uFF3C)",
    "(*/\u3002\uFF3C)",
    "(*/_\uFF3C)",
    "(*\uFF89\u03C9\uFF89)",
    "(o-_-o)",
    "(*\u03BC_\u03BC)",
    "(\u1D54.\u1D54)",
    "(*\uFF89\u2200`*)",
    "(//\u25BD//)",
    "(//\u03C9//)",
    "(*^.^*)",
    "(*\uFF89\u25BD\uFF89)",
    "(\uFFE3\u25BD\uFFE3*)\u309E",
    "(*/\u25BD\uFF3C*)",
    "(\u201E\u0CA1\u03C9\u0CA1\u201E)",
    "( \u3003\u25BD\u3003)",
    "(/\u25BF\uFF3C )",
    "(\uFF03\uFF1E\uFF1C)",
    "(\uFF1B\uFFE3\u0414\uFFE3)",
    "(\uFFE3\u25A1\uFFE3\u300D)",
    "(\uFF03\uFFE30\uFFE3)",
    "(\uFF03\uFFE3\u03C9\uFFE3)",
    "(\uFFE2_\uFFE2;)",
    "(\uFF1E\uFF4D\uFF1C)",
    "(\u300D\xb0\u30ED\xb0)\u300D",
    "(\uFF3E\uFF3E\uFF03)",
    "(\uFE36\uFE39\uFE3A)",
    "(\uFFE3\u30D8\uFFE3)",
    "(\uFFE3\uFE3F\uFFE3)",
    "(\uFF1E\uFE4F\uFF1C)",
    "(--_--)",
    "\u51F8(\uFFE3\u30D8\uFFE3)",
    "(\u21C0\u2038\u21BC\u2036)",
    "o(>< )o",
    "(\u300D\uFF1E\uFF1C)\u300D",
    "(\u15D2\u15E3\u15D5)\u055E",
    "(\uB208_\uB208)",
    "(\uFF03`\u0414\xb4)",
    "(`\u76BF\xb4\uFF03)",
    "(\u30FB`\u03C9\xb4\u30FB)",
    "(`\u30FC\xb4)",
    "\u51F8(`\u25B3\xb4\uFF03)",
    "( `\u03B5\xb4 )",
    "\u30FD(\u2035\uFE4F\xb4)\u30CE",
    "(\u256C`\u76CA\xb4)",
    "\u03A3(\u25BC\u25A1\u25BC\u30E1)",
    "(\xb0\u3142\xb0\u256C)",
    "(\u30CE\xb0\u76CA\xb0)\u30CE",
    "(\u2021\u25BC\u76CA\u25BC)",
    "(\u256C \xd2\uFE4F\xd3)",
    "(\u51F8\u0CA0\u76CA\u0CA0)\u51F8",
    "\u0669(\u0C20\u76CA\u0C20)\u06F6",
    "(\uFF89\u0CA5\u76CA\u0CA5)\uFF89",
    "(\u2256\uFF64\u2256\u256C)",
    "(\u30CE_<\u3002)",
    "(-_-)",
    "(\xb4-\u03C9-`)",
    "(\u03BC_\u03BC)",
    "(\uFF89\u0414`)",
    "(-\u03C9-\u3001)",
    "o(T\u30D8To)",
    "(\uFF61\u256F\uFE35\u2570\uFF61)",
    "(\u4E2A_\u4E2A)",
    "(\u256F\uFE35\u2570,)",
    "( \u2565\u03C9\u2565 )",
    "(\u256F_\u2570)",
    "(\u2565_\u2565)",
    "(\uFF0F\u02CD\u30FB\u3001)",
    "(\u30CE_<\u3001)",
    "(\u2565\uFE4F\u2565)",
    "(\u3064\u03C9`\uFF61)",
    "(\uFF89\u03C9\uFF65\uFF64)",
    "(T_T)",
    "(>_<)",
    "o(\u3012\uFE4F\u3012)o",
    "(\u0CA5\uFE4F\u0CA5)",
    "(\u0CA1\u2038\u0CA1)",
    "~(>_<~)",
    "\u2606\u2312(>\u3002<)",
    "(\u2606_@)",
    "(\xd7_\xd7)",
    "(x_x)",
    "(\xd7_\xd7)\u2312\u2606",
    "(x_x)\u2312\u2606",
    "(\xd7\uFE4F\xd7)",
    "\u2606(\uFF03\xd7\xd7)",
    "(\uFF0B_\uFF0B)",
    "\u0669(\xd7 \xd7)\u06F6",
    "(\uFF92\uFE4F\uFF92)",
    "(\u30CE\u03C9\u30FD)",
    "(\uFF0F\u3002\uFF3C)",
    "(\uFF89_\u30FD)",
    "(\u2033\u30ED\u309B)",
    "(\u30FB\u4EBA\u30FB)",
    "\uFF3C(\u3007_\uFF4F)\uFF0F",
    "(/\u03C9\uFF3C)",
    "(/_\uFF3C)",
    "\u301C(\uFF1E\uFF1C)\u301C",
    "\u2510(\uFFE3\u30D8\uFFE3)\u250C",
    "\u256E(\uFFE3_\uFFE3)\u256D",
    "\u30FD(\u02C7\u30D8\u02C7)\u30CE",
    "\u2510(\uFFE3\uFF5E\uFFE3)\u250C",
    "\u2510(\uFE36\u25BD\uFE36)\u250C",
    "\u256E(\uFFE3\uFF5E\uFFE3)\u256D",
    "\u256E(\uFE36\uFE3F\uFE36)\u256D",
    "\u2510(\uFFE3\u2200\uFFE3)\u250C",
    "\u256E(\uFE36\u25BD\uFE36)\u256D",
    "\u2510(\uFFE3\u30EE\uFFE3)\u250C",
    "\u1555( \u141B )\u1557",
    "\u2510(\u30B7)\u250C",
    "(\uFFE3\u03C9\uFFE3;)",
    "\u03C3(\uFFE3\u3001\uFFE3\u3003)",
    "(\uFFE3\uFF5E\uFFE3;)",
    "(\u30FB_\u30FB\u30FE",
    "(\u3003\uFFE3\u03C9\uFFE3\u3003\u309E",
    "(\u30FB_\u30FB;)",
    "(\uFF20_\uFF20)",
    "(\u30FB\u30FB;)\u309E",
    "\u03A3(\uFFE3\u3002\uFFE3\uFF89)",
    "(\u30FB\u30FB ) ?",
    "(\u25CE \u25CE)\u309E",
    "(\u30FC\u30FC;)",
    "(\xaf  \xaf\u0665)",
    "(\uFFE2_\uFFE2)",
    "(\u2192_\u2192)",
    "(\uFFE2 \uFFE2)",
    "(\uFFE2\u203F\uFFE2 )",
    "(\xac_\xac )",
    "(\u2190_\u2190)",
    "(\xac \xac )",
    "(\xac\u203F\xac )",
    "(\u21BC_\u21BC)",
    "(\u21C0_\u21C0)",
    "(\u14C0 \u14C0)",
    "w(\xb0\uFF4F\xb0)w",
    "\u30FD(\xb0\u3007\xb0)\uFF89",
    "\u03A3(O_O)",
    "\u03A3(\xb0\u30ED\xb0)",
    "(\u2299_\u2299)",
    "(o_O)",
    "(O_O;)",
    "(O.O)",
    "(\xb0\u30ED\xb0) !",
    "(o_O) !",
    "(\u25A1_\u25A1)",
    "\u03A3(\u25A1_\u25A1)",
    "\u2211(O_O;)",
    "(*\u30FB\u03C9\u30FB)\uFF89",
    "(\uFFE3\u25BD\uFFE3)\u30CE",
    "(\xb0\u25BD\xb0)/",
    "(^-^*)/",
    "\uFF3C(\u2312\u25BD\u2312)",
    "\u30FE(\u2606\u25BD\u2606)",
    "(^\uFF10^)\u30CE",
    "~\u30FE(\u30FB\u03C9\u30FB)",
    "(\u30FB\u2200\u30FB)\u30CE",
    "\u30FE(\u30FB\u03C9\u30FB*)",
    "(*\xb0\uFF70\xb0)\uFF89",
    "(\u30FB_\u30FB)\u30CE",
    "(\uFFE3\u03C9\uFFE3)/",
    "(\u2312\u03C9\u2312)\uFF89",
    "(\u2267\u25BD\u2266)/",
    "(\u2727\u2200\u2727)/",
    "(\uFFE3\u25BD\uFFE3)/",
    "(\u3064\u2267\u25BD\u2266)\u3064",
    "(\u3064\u2727\u03C9\u2727)\u3064",
    "(\u3063\u0CA0\u203F\u0CA0)\u3063",
    "(\u3065\u25E1\uFE4F\u25E1)\u3065",
    "\u2282(\uFFE3\u25BD\uFFE3)\u2283",
    "(^_~)",
    "( \uFF9F\uFF4F\u2312)",
    "(^_-)\u2261\u2606",
    "(^\u03C9~)",
    "(>\u03C9^)",
    "(~\u4EBA^)",
    "(^_-)",
    "( -_\u30FB)",
    "(^_<)\u301C\u2606",
    "(^\u4EBA<)\u301C\u2606",
    "\u2606\u2312(\u309D\u3002\u2202)",
    "(^_<)",
    "(^_\u2212)\u2606",
    "(\uFF65\u03C9<)\u2606",
    "(^.~)\u2606",
    "(^.~)",
    "(>\u1D17\u2022)",
    "m(_ _)m",
    "(\u30B7_ _)\u30B7",
    "m(. .)m",
    "<(_ _)>",
    "\u4EBA(_ _*)",
    "(*_ _)\u4EBA",
    "(\u30B7. .)\u30B7",
    "(*\uFFE3ii\uFFE3)",
    "(\uFFE3\uFF8A\uFFE3*)",
    "\\(\uFFE3\uFF8A\uFFE3)",
    "(\uFF3E\u0F0B\u0F0D\uFF3E)",
    "(\uFF3E\u3003\uFF3E)",
    "(\uFFE3 \xa8\u30FD\uFFE3)",
    "(\uFFE3 ;\uFFE3)",
    "(\uFFE3 ;;\uFFE3)",
    "|\uFF65\u03C9\uFF65)",
    "\uFF8D(\uFF65_|",
    "|\u03C9\uFF65)\uFF89",
    "\u30FE(\uFF65|",
    "|\u0434\uFF65)",
    "|_\uFFE3))",
    "|\u25BD//)",
    "|_\u30FB)",
    "|\uFF65\u0434\uFF65)\uFF89",
    "|\u0298\u203F\u0298)\u256F",
    "__\u03C6(\uFF0E\uFF0E)",
    "__\u03C6(\u3002\u3002)",
    "(=\u2460\u03C9\u2460=)",
    "(=`\u03C9\xb4=)",
    "(=^\u2025^=)",
    "( =\u03C9= )",
    "( =\u03C9= )",
    "(^\u25D4\u1D25\u25D4^)",
    "(^\u25D5\u1D25\u25D5^)",
    "\u0E15(=\u03C9=)\u0E15",
    "(\uFFE3(\uFF74)\uFFE3)",
    "(\uFF0F(\uFF74)\uFF3C)",
    "\u0295 \u1D54\u1D25\u1D54 \u0294",
    "\u0295 \u2022\u1D25\u2022 \u0294",
    "\u0295\u0CA0\u1D25\u0CA0\u0294",
    "\u222A\uFF3E\u30A7\uFF3E\u222A",
    "\u222A\uFF65\u03C9\uFF65\u222A",
    "\u222A\uFFE3-\uFFE3\u222A",
    "\u222A\uFF65\uFF6A\uFF65\u222A",
    "\uFF35^\u76BF^\uFF35",
    "\uFF35\uFF34\uFF6A\uFF34\uFF35",
    "U^\uFF6A^U",
    "V\u25CF\u1D25\u25CFV",
    "U\u30FB\u1D25\u30FBU",
    "\uFF0F(\uFF1E\xd7\uFF1C)\uFF3C",
    "\uFF0F(\u02C3\u11BA\u02C2)\uFF3C",
    "(\uFFE3(\u03C9)\uFFE3)",
    "(\uFFE3\u0398\uFFE3)",
    "(`\uFF65\u0398\uFF65\xb4)",
    "(\u25C9\u0398\u25C9)",
    "(\uFF65\u03B8\uFF65)",
    "(\u30FB\u0398\u30FB)",
    "(\uFF65\u0398\uFF65)",
    "\u03B6\xb0)))\u5F61",
    ">\xb0))))\u5F61",
    "(\xb0))<<",
    "\u2015(T_T)\u2192",
    "Q(`\u2312\xb4Q)",
    "(\u3063\u02D8\u06A1\u02D8\u03C2)",
    "\u30D8(\uFFE3\u03C9\uFFE3\u30D8)",
    "(\u301C\uFFE3\u25BD\uFFE3)\u301C",
    "\u301C(\uFFE3\u25BD\uFFE3\u301C)",
    "(\uFF89\u2267\u2200\u2266)\uFF89",
    "\u221A(\uFFE3\u2025\uFFE3\u221A)",
    "\u2514(\uFF3E\uFF3E)\u2510",
    "\u250C(\uFF3E\uFF3E)\u2518",
    "\uFF3C(\uFFE3\u25BD\uFFE3)\uFF3C",
    "\uFF0F(\uFFE3\u25BD\uFFE3)\uFF0F",
    "(^_^\u266A)",
    "(~\u02D8\u25BD\u02D8)~",
    "~(\u02D8\u25BD\u02D8~)",
    "(\u301C\uFFE3\u25B3\uFFE3)\u301C",
    "(~\u203E\u25BD\u203E)~",
    "~(\u02D8\u25BD\u02D8)~",
    "(\u2256 \u035C\u0296\u2256)",
    "(\uFFE3^\uFFE3)\u309E",
    "(\uFF0D\u2038\u10DA)",
    "(oT-T)\u5C38",
    "(\u0CA0_\u0CA0)",
    "(\uFFE3\uFE43\uFFE3)",
    "(\u3000\uFF65\u03C9\uFF65)\u261E",
    "(\u2310\u25A0_\u25A0)",
    "(\u25D5\u203F\u25D5\u273F)", 
];


/***/ }),

/***/ 61837:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ useHeaderShare),
/* harmony export */   "Z": () => (/* binding */ useHeaderMeta)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38325);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store__WEBPACK_IMPORTED_MODULE_1__]);
_store__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


/**
 * 设置头部 信息 (标题) 分享等操作
 */ const useHeaderMeta = (title, description)=>{
    const { appStore  } = (0,_store__WEBPACK_IMPORTED_MODULE_1__/* .useStore */ .oR)();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        appStore.headerNav = {
            title,
            meta: description,
            show: true
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        description,
        title
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        return ()=>{
            appStore.headerNav.show = false;
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};
const useHeaderShare = (title, text)=>{
    const { appStore  } = (0,_store__WEBPACK_IMPORTED_MODULE_1__/* .useStore */ .oR)();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        appStore.shareData = {
            text,
            title,
            url: location.href
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        title,
        text
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        return ()=>{
            appStore.shareData = null;
        };
    }, []);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;