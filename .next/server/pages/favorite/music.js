(() => {
var exports = {};
exports.id = 4899;
exports.ids = [4899];
exports.modules = {

/***/ 9480:
/***/ ((module) => {

// Exports
module.exports = {
	"kami-music": "SectionMusic_kami-music__njcLu",
	"sticky-cover": "SectionMusic_sticky-cover__73E_7",
	"music-list": "SectionMusic_music-list__a8CTZ",
	"song-item": "SectionMusic_song-item__3SSVt",
	"num": "SectionMusic_num__w2I13",
	"playing": "SectionMusic_playing__vHAOP",
	"active": "SectionMusic_active__ttcvK",
	"music-cover": "SectionMusic_music-cover__010Gd",
	"fixed-cover": "SectionMusic_fixed-cover__Gljcm",
	"fixed": "SectionMusic_fixed__H6rDt",
	"bottom": "SectionMusic_bottom__MT7NB"
};


/***/ }),

/***/ 6575:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ SectionMusic)
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
/* harmony import */ var _components_universal_Icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8337);
/* harmony import */ var _components_universal_Seo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4173);
/* harmony import */ var _constants_tracker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8277);
/* harmony import */ var _hooks_use_analyze__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8461);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3531);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9480);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_universal_Seo__WEBPACK_IMPORTED_MODULE_6__, _hooks_use_analyze__WEBPACK_IMPORTED_MODULE_8__, _store__WEBPACK_IMPORTED_MODULE_9__]);
([_components_universal_Seo__WEBPACK_IMPORTED_MODULE_6__, _hooks_use_analyze__WEBPACK_IMPORTED_MODULE_8__, _store__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const SectionMusic = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_4__.memo)((props)=>{
    const { musicStore  } = (0,_store__WEBPACK_IMPORTED_MODULE_9__/* .useStore */ .oR)();
    const { event  } = (0,_hooks_use_analyze__WEBPACK_IMPORTED_MODULE_8__/* .useAnalyze */ .e)();
    const loadList = (id)=>{
        (0,mobx__WEBPACK_IMPORTED_MODULE_2__.runInAction)(()=>{
            event({
                action: _constants_tracker__WEBPACK_IMPORTED_MODULE_7__/* .TrackerAction.Interaction */ .b.Interaction,
                label: `加载音乐播放列表，ID：${id.join(",")}`
            });
            musicStore.setPlaylist(id);
            musicStore.isHide = false;
            setTimeout(()=>{
                musicStore.isPlay = true;
            }, 1000);
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_10___default()["kami-music"]),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_10___default()["music-cover"]),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()((_index_module_css__WEBPACK_IMPORTED_MODULE_10___default()["fixed-cover"]), (_index_module_css__WEBPACK_IMPORTED_MODULE_10___default()["sticky-cover"])),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: props.src
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                            children: props.name
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_10___default()["music-list"]),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                    children: props.data.length ? props.data.map((i1, index)=>{
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SongItem, {
                            index: index,
                            name: i1.name,
                            time: i1.time,
                            id: i1.id,
                            onClick: (i2)=>{
                                loadList(props.data.slice(i2).map((i)=>i.id
                                ));
                            }
                        }, i1.id);
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().num),
                                children: "0"
                            }),
                            "\u8FD9\u91CC\u6682\u65F6\u6CA1\u6709\u5185\u5BB9"
                        ]
                    })
                })
            })
        ]
    });
});
const SongItem = (0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__.observer)((props)=>{
    const { index , name , time  } = props;
    const { musicStore  } = (0,_store__WEBPACK_IMPORTED_MODULE_9__/* .useStore */ .oR)();
    const { playId  } = musicStore;
    if (playId === props.id) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PlayingSongItem, {
            ...props
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
        onClick: ()=>props.onClick(index)
        ,
        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()((_index_module_css__WEBPACK_IMPORTED_MODULE_10___default()["song-item"])),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().num),
                children: index + 1
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "flex-grow truncate",
                children: name
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("time", {
                className: "font-mono flex-shrink-0",
                children: time
            })
        ]
    });
});
const PlayingSongItem = (0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__.observer)((props)=>{
    const { index , name , time  } = props;
    const { musicStore  } = (0,_store__WEBPACK_IMPORTED_MODULE_9__/* .useStore */ .oR)();
    const { playId , duration: totalTime , time: currentTime  } = musicStore;
    const { event  } = (0,_hooks_use_analyze__WEBPACK_IMPORTED_MODULE_8__/* .useAnalyze */ .e)();
    const playProgress = (0,react__WEBPACK_IMPORTED_MODULE_4__.useDeferredValue)(musicStore.playProgress);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if (playId === 0) {
            // if playId eq 0 is init state
            return;
        }
    }, [
        playId
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        event({
            action: _constants_tracker__WEBPACK_IMPORTED_MODULE_7__/* .TrackerAction.Interaction */ .b.Interaction,
            label: `开始播放音乐：${playId}`
        });
    }, [
        playId
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
        onClick: ()=>props.onClick(index)
        ,
        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()((_index_module_css__WEBPACK_IMPORTED_MODULE_10___default()["song-item"]), playId === props.id && totalTime && currentTime ? (_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().playing) : null),
        style: {
            backgroundSize: `${playProgress * 100}% 100%`
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Seo__WEBPACK_IMPORTED_MODULE_6__/* .Seo */ .p, {
                title: `${props.name} · 歌单`
            }),
            (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: (_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().num),
                    children: musicStore.isPlay ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Icons__WEBPACK_IMPORTED_MODULE_5__/* .MusicIcon */ .RZ, {
                        className: "inline"
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Icons__WEBPACK_IMPORTED_MODULE_5__/* .PauseIcon */ .fp, {
                        className: "inline"
                    })
                })
            , [
                musicStore.isPlay
            ]),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "flex-grow truncate",
                children: name
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("time", {
                className: "font-mono flex-shrink-0",
                children: time
            })
        ]
    });
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6943:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_message_popup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5255);
/* harmony import */ var react_message_popup__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_message_popup__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2649);
/* harmony import */ var _components_in_page_SectionMusic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6575);
/* harmony import */ var _components_universal_Icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8337);
/* harmony import */ var _components_universal_Loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4277);
/* harmony import */ var _constants_tracker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8277);
/* harmony import */ var _hooks_use_analyze__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8461);
/* harmony import */ var _components_universal_Seo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4173);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([utils__WEBPACK_IMPORTED_MODULE_3__, _components_in_page_SectionMusic__WEBPACK_IMPORTED_MODULE_4__, _hooks_use_analyze__WEBPACK_IMPORTED_MODULE_8__, _components_universal_Seo__WEBPACK_IMPORTED_MODULE_9__]);
([utils__WEBPACK_IMPORTED_MODULE_3__, _components_in_page_SectionMusic__WEBPACK_IMPORTED_MODULE_4__, _hooks_use_analyze__WEBPACK_IMPORTED_MODULE_8__, _components_universal_Seo__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const MusicView = ()=>{
    const { 0: data , 1: setData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        utils__WEBPACK_IMPORTED_MODULE_3__/* .apiClient.serverless.proxy.kami.netease.get */ .x1.serverless.proxy.kami.netease.get().then((res)=>{
            setData(res);
        }).catch((err)=>{
            react_message_popup__WEBPACK_IMPORTED_MODULE_2__.message.error(err.message);
        });
    }, []);
    const { event  } = (0,_hooks_use_analyze__WEBPACK_IMPORTED_MODULE_8__/* .useAnalyze */ .e)();
    const trackerClick = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        event({
            action: _constants_tracker__WEBPACK_IMPORTED_MODULE_7__/* .TrackerAction.Click */ .b.Click,
            label: "\u97F3\u4E50\u9875\u9762\u70B9\u51FB\u53BB\u4E2A\u4EBA\u4E3B\u9875"
        });
    }, []);
    if (!data) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Loading__WEBPACK_IMPORTED_MODULE_6__/* .Loading */ .g, {});
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Seo__WEBPACK_IMPORTED_MODULE_9__/* .Seo */ .p, {
                title: `歌单`
            }),
            data.detail && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex my-2 justify-end",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                    href: `https://music.163.com/#/user/home?id=${data.detail.userId}`,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "flex items-center justify-center",
                    onClick: trackerClick,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Icons__WEBPACK_IMPORTED_MODULE_5__/* .RiNeteaseCloudMusicFill */ .f3, {
                            height: "3rem",
                            width: "3rem"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "ml-2",
                            children: data.detail.nickname
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_in_page_SectionMusic__WEBPACK_IMPORTED_MODULE_4__/* .SectionMusic */ .S, {
                name: "\u5468\u6392\u884C",
                src: "https://p3.music.126.net/4HGEnXVexEfBACKi7wbq8A==/3390893860854924.jpg",
                data: data.weekdata
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_in_page_SectionMusic__WEBPACK_IMPORTED_MODULE_4__/* .SectionMusic */ .S, {
                name: "\u603B\u6392\u884C",
                data: data.alldata,
                src: "https://p1.music.126.net/xTCCKfCJuEh2ohPZDNMDLw==/19193074975054252.jpg"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_in_page_SectionMusic__WEBPACK_IMPORTED_MODULE_4__/* .SectionMusic */ .S, {
                name: data.playlist.name,
                src: data.playlist.coverImgUrl,
                data: data.playlist.data.slice(0, 10)
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MusicView);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 3104:
/***/ ((module) => {

"use strict";
module.exports = require("camelcase-keys");

/***/ }),

/***/ 8103:
/***/ ((module) => {

"use strict";
module.exports = require("clsx");

/***/ }),

/***/ 1705:
/***/ ((module) => {

"use strict";
module.exports = require("css-spring");

/***/ }),

/***/ 1635:
/***/ ((module) => {

"use strict";
module.exports = require("dayjs");

/***/ }),

/***/ 5468:
/***/ ((module) => {

"use strict";
module.exports = require("dayjs/locale/zh-cn");

/***/ }),

/***/ 4125:
/***/ ((module) => {

"use strict";
module.exports = require("dayjs/plugin/customParseFormat");

/***/ }),

/***/ 7424:
/***/ ((module) => {

"use strict";
module.exports = require("dayjs/plugin/localizedFormat");

/***/ }),

/***/ 3491:
/***/ ((module) => {

"use strict";
module.exports = require("devtools-detector");

/***/ }),

/***/ 6211:
/***/ ((module) => {

"use strict";
module.exports = require("mobx");

/***/ }),

/***/ 5944:
/***/ ((module) => {

"use strict";
module.exports = require("mobx-react-lite");

/***/ }),

/***/ 6641:
/***/ ((module) => {

"use strict";
module.exports = require("next-seo");

/***/ }),

/***/ 5832:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 503:
/***/ ((module) => {

"use strict";
module.exports = require("randomcolor");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 9785:
/***/ ((module) => {

"use strict";
module.exports = require("react-intersection-observer");

/***/ }),

/***/ 5255:
/***/ ((module) => {

"use strict";
module.exports = require("react-message-popup");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 4579:
/***/ ((module) => {

"use strict";
module.exports = require("remove-markdown");

/***/ }),

/***/ 9915:
/***/ ((module) => {

"use strict";
module.exports = import("js-cookie");;

/***/ }),

/***/ 352:
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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [1655,8034,6246,4598,4173,8337,4277], () => (__webpack_exec__(6943)));
module.exports = __webpack_exports__;

})();