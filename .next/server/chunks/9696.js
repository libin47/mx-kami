exports.id = 9696;
exports.ids = [9696];
exports.modules = {

/***/ 96589:
/***/ ((module) => {

// Exports
module.exports = {
	"player": "Player_player__kcVnk",
	"hide": "Player_hide__qvOTL",
	"root": "Player_root__kQLu4",
	"cover": "Player_cover__EM5FM",
	"anime-frame": "Player_anime-frame__Sxt1q",
	"pic": "Player_pic__kAENT",
	"control-btn": "Player_control-btn__6z1aa",
	"play": "Player_play__Z5Ecl",
	"tip": "Player_tip__OWkUl"
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

/***/ 79696:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MusicMiniPlayer": () => (/* binding */ MusicMiniPlayer),
/* harmony export */   "MusicMiniPlayerStoreControlled": () => (/* binding */ MusicMiniPlayerStoreControlled),
/* harmony export */   "_MusicMiniPlayerStoreControlled": () => (/* binding */ _MusicMiniPlayerStoreControlled)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80352);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45944);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(69755);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_use__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(47097);
/* harmony import */ var _components_universal_Portal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(45953);
/* harmony import */ var _constants_tracker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(10609);
/* harmony import */ var _hooks_use_analyze__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(74321);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(38325);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(96589);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([lodash_es__WEBPACK_IMPORTED_MODULE_2__, utils__WEBPACK_IMPORTED_MODULE_6__, _components_universal_Portal__WEBPACK_IMPORTED_MODULE_7__, _hooks_use_analyze__WEBPACK_IMPORTED_MODULE_9__, _store__WEBPACK_IMPORTED_MODULE_10__]);
([lodash_es__WEBPACK_IMPORTED_MODULE_2__, utils__WEBPACK_IMPORTED_MODULE_6__, _components_universal_Portal__WEBPACK_IMPORTED_MODULE_7__, _hooks_use_analyze__WEBPACK_IMPORTED_MODULE_9__, _store__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const METO_ENDPOINT = "https://api.i-meto.com/meting/api";
const MusicMiniPlayer = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_4__.forwardRef)(({ playlist , hide =false , onPlayStateChange , onChange  }, ref)=>{
    const len = playlist.length;
    const { 0: cur , 1: setCur  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);
    const { 0: cursor1 , 1: setCursor  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0);
    const fetchData = async (id, type = "netease")=>{
        if (!id) {
            return;
        }
        const stream = await fetch(`${METO_ENDPOINT}/?server=${type}&id=${id}`);
        const json = await stream.json();
        const [data] = await utils__WEBPACK_IMPORTED_MODULE_6__/* .apiClient.serverless.proxy.kami.song.get */ .x1.serverless.proxy.kami.song.get({
            params: {
                id
            }
        });
        const songUrl = data.url?.replace("http://", "https://");
        setCur({
            ...json[0],
            id,
            url: songUrl
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        fetchData(playlist[cursor1]);
    }, [
        cursor1,
        playlist
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        setCur(null);
        setCursor(0);
    }, [
        playlist
    ]);
    const onChangeAudio = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)((e)=>{
        const $audio = e.target;
        if (playState.current && $audio.paused) {
            $audio.play();
        }
    }, []);
    const [audioEl, state, controls] = (0,react_use__WEBPACK_IMPORTED_MODULE_5__.useAudio)({
        src: cur?.url || "",
        autoPlay: false,
        loop: false,
        onEnded () {
            setCursor((cursor)=>{
                return ++cursor % len;
            });
        },
        onLoadedData: onChangeAudio,
        // onDurationChange: onChangeAudio,
        onTimeUpdate (e) {
            if (onChange) {
                const $audio = e.target;
                const duration = $audio.duration;
                const currentTime = $audio.currentTime;
                onChange(cur?.id || 0, currentTime, duration);
            }
        },
        onLoad: onChangeAudio
    });
    const playState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(false);
    const play = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(()=>{
        controls.play();
        playState.current = true;
    }, [
        controls
    ]);
    const pause = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(()=>{
        controls.pause();
        playState.current = false;
    }, [
        controls
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useImperativeHandle)(ref, ()=>({
            pause,
            play,
            setCursor (cursor) {
                setCursor(cursor % len);
            },
            next () {
                setCursor((c)=>++c % len
                );
            },
            prev () {
                setCursor((c)=>--c % len
                );
            },
            seek (time) {
                controls.seek(time);
            }
        })
    );
    const handleChangePlayState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(()=>{
        if (state.paused) {
            play();
            onPlayStateChange("play");
        } else {
            pause();
            onPlayStateChange("pause");
        }
    }, [
        onPlayStateChange,
        pause,
        play,
        state.paused
    ]);
    const Pic = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(()=>cur?.pic && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: clsx__WEBPACK_IMPORTED_MODULE_1___default()((_index_module_css__WEBPACK_IMPORTED_MODULE_11___default().pic), "bg-cover bg-center bg-no-repeat h-full w-full"),
            style: {
                backgroundImage: `url(${cur.pic})`
            }
        })
    , [
        cur?.pic
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()((_index_module_css__WEBPACK_IMPORTED_MODULE_11___default().player), !state.paused && (_index_module_css__WEBPACK_IMPORTED_MODULE_11___default().play), hide && (_index_module_css__WEBPACK_IMPORTED_MODULE_11___default().hide)),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_index_module_css__WEBPACK_IMPORTED_MODULE_11___default().root),
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_index_module_css__WEBPACK_IMPORTED_MODULE_11___default().cover),
                    children: [
                        Pic,
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: clsx__WEBPACK_IMPORTED_MODULE_1___default()((_index_module_css__WEBPACK_IMPORTED_MODULE_11___default()["control-btn"])),
                            onClick: handleChangePlayState,
                            children: state.paused ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                width: "1em",
                                height: "1em",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    d: "M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18a1 1 0 0 0 0-1.69L9.54 5.98A.998.998 0 0 0 8 6.82z",
                                    fill: "currentColor"
                                })
                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                width: "1em",
                                height: "1em",
                                viewBox: "0 0 32 32",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                        d: "M12 6h-2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2z",
                                        fill: "currentColor"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                        d: "M22 6h-2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2z",
                                        fill: "currentColor"
                                    })
                                ]
                            })
                        }),
                        cur && audioEl
                    ]
                }),
                cur && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_index_module_css__WEBPACK_IMPORTED_MODULE_11___default().tip),
                    onClick: ()=>{
                        window.open(cur.url);
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            children: cur.title
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-sm text-gray-2",
                            children: cur.author
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            className: "text-xs text-opacity-80",
                            children: [
                                (0,utils__WEBPACK_IMPORTED_MODULE_6__/* .hms */ .WZ)(state.time | 0),
                                "/",
                                (0,utils__WEBPACK_IMPORTED_MODULE_6__/* .hms */ .WZ)(state.duration | 0)
                            ]
                        })
                    ]
                })
            ]
        })
    });
});
const BottomProgressBar = (0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__.observer)(()=>{
    const { musicStore: { playProgress  } ,  } = (0,_store__WEBPACK_IMPORTED_MODULE_10__/* .useStore */ .oR)();
    const progress = (0,react__WEBPACK_IMPORTED_MODULE_4__.useDeferredValue)(playProgress);
    if (progress === 0) {
        return null;
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Portal__WEBPACK_IMPORTED_MODULE_7__/* .RootPortal */ .K, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "fixed bottom-0 left-0 origin-left transform-gpu ease-linear transition-transform right-0" + " transform scale-y-50 pt-[2px] bg-yellow duration-1000 z-99",
            style: {
                transform: `scaleX(${progress})`
            }
        })
    });
});
const changeOfPlayerHandler = (0,lodash_es__WEBPACK_IMPORTED_MODULE_2__.throttle)((id, time, totalTime)=>{
    _store__WEBPACK_IMPORTED_MODULE_10__/* .store.musicStore.setPlayingInfo */ .h.musicStore.setPlayingInfo(id, time, totalTime);
}, 1000, {
    trailing: false
});
const _MusicMiniPlayerStoreControlled = (0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__.observer)(()=>{
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);
    const { musicStore  } = (0,_store__WEBPACK_IMPORTED_MODULE_10__/* .useStore */ .oR)();
    const { event  } = (0,_hooks_use_analyze__WEBPACK_IMPORTED_MODULE_9__/* .useAnalyze */ .e)();
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if (!ref.current) {
            console.log("player not ready");
            return;
        }
        if (musicStore.isPlay) {
            requestAnimationFrame(()=>{
                event({
                    action: _constants_tracker__WEBPACK_IMPORTED_MODULE_8__/* .TrackerAction.Interaction */ .b.Interaction,
                    label: `音乐播放状态：${musicStore.isPlay ? "\u64AD\u653E" : "\u6682\u505C"}`
                });
                ref.current?.play();
            });
        } else {
            ref.current.pause();
        }
    }, [
        musicStore.isPlay
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if (!musicStore.isHide) {
        // auto play disable
        // ref.current?.play()
        } else {
            ref.current?.pause();
        }
    }, [
        musicStore.isHide
    ]);
    const handleChangePlayState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)((state)=>{
        if (state === "play") {
            musicStore.isPlay = true;
        } else {
            musicStore.isPlay = false;
        }
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MusicMiniPlayer, {
                ref: ref,
                onPlayStateChange: handleChangePlayState,
                playlist: musicStore.list,
                hide: musicStore.isHide,
                onChange: changeOfPlayerHandler
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BottomProgressBar, {})
        ]
    });
});
const MusicMiniPlayerStoreControlled = (0,utils__WEBPACK_IMPORTED_MODULE_6__/* .NoSSR */ .ri)(_MusicMiniPlayerStoreControlled);

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

/***/ })

};
;