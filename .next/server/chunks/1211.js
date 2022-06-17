"use strict";
exports.id = 1211;
exports.ids = [1211];
exports.modules = {

/***/ 1105:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ eventHandler)
/* harmony export */ });
/* unused harmony export notice */
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36211);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_message_popup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15255);
/* harmony import */ var react_message_popup__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_message_popup__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47097);
/* harmony import */ var _types_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(51113);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38325);
/* harmony import */ var _utils_danmaku__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(96262);
/* harmony import */ var _utils_notice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(49198);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([utils__WEBPACK_IMPORTED_MODULE_2__, _store__WEBPACK_IMPORTED_MODULE_4__, _utils_notice__WEBPACK_IMPORTED_MODULE_5__]);
([utils__WEBPACK_IMPORTED_MODULE_2__, _store__WEBPACK_IMPORTED_MODULE_4__, _utils_notice__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const notice = _utils_notice__WEBPACK_IMPORTED_MODULE_5__/* .Notice.shared */ .q.shared;
const eventHandler = (type, data)=>{
    const title = window.data?.aggregateData.seo.title || "Kami";
    const webUrl = window.data?.aggregateData.url.webUrl.replace(/\/$/, "") || globalThis?.location.host || "";
    const { gatewayStore , noteStore , postStore , userStore , pageStore  } = _store__WEBPACK_IMPORTED_MODULE_4__/* .store */ .h;
    switch(type){
        case _types_events__WEBPACK_IMPORTED_MODULE_3__/* .EventTypes.VISITOR_ONLINE */ .G.VISITOR_ONLINE:
        case _types_events__WEBPACK_IMPORTED_MODULE_3__/* .EventTypes.VISITOR_OFFLINE */ .G.VISITOR_OFFLINE:
            {
                const { online  } = data;
                (0,mobx__WEBPACK_IMPORTED_MODULE_0__.runInAction)(()=>{
                    gatewayStore.online = online;
                });
                break;
            }
        case _types_events__WEBPACK_IMPORTED_MODULE_3__/* .EventTypes.RECENTLY_CREATE */ .G.RECENTLY_CREATE:
            {
                notice.notice({
                    title,
                    text: "\u7AD9\u957F\u53D1\u5E03\u4E00\u6761\u65B0\u52A8\u6001",
                    description: data.content,
                    onclick: ()=>{
                        window.open(`${webUrl}/recently`);
                    }
                });
                break;
            }
        case _types_events__WEBPACK_IMPORTED_MODULE_3__/* .EventTypes.POST_CREATE */ .G.POST_CREATE:
        case _types_events__WEBPACK_IMPORTED_MODULE_3__/* .EventTypes.NOTE_CREATE */ .G.NOTE_CREATE:
            {
                if (data.hide) {
                    break;
                }
                const message1 = noticeHead("\u6587\u7AE0", data.title);
                const _type = {
                    [_types_events__WEBPACK_IMPORTED_MODULE_3__/* .EventTypes.POST_CREATE */ .G.POST_CREATE]: "post",
                    [_types_events__WEBPACK_IMPORTED_MODULE_3__/* .EventTypes.NOTE_CREATE */ .G.NOTE_CREATE]: "note"
                };
                notice.notice({
                    title,
                    text: message1,
                    description: getDescription(data.text),
                    onclick: ()=>{
                        window.open(webUrl + (_type[type] === "post" ? `/posts/${data.category.slug}/${data.slug}` : `/notes/${data.nid}`));
                    }
                });
                break;
            }
        case _types_events__WEBPACK_IMPORTED_MODULE_3__/* .EventTypes.SAY_CREATE */ .G.SAY_CREATE:
            {
                _store__WEBPACK_IMPORTED_MODULE_4__/* .store.sayStore.add */ .h.sayStore.add(data);
                const message2 = noticeHead("\u8BF4\u8BF4");
                notice.notice({
                    title,
                    text: message2,
                    description: getDescription(data.text),
                    onclick: ()=>{
                        window.open(`${webUrl}/says`);
                    }
                });
                break;
            }
        case _types_events__WEBPACK_IMPORTED_MODULE_3__/* .EventTypes.SAY_DELETE */ .G.SAY_DELETE:
            {
                const id = data;
                _store__WEBPACK_IMPORTED_MODULE_4__/* .store.sayStore.remove */ .h.sayStore.remove(id);
                break;
            }
        case _types_events__WEBPACK_IMPORTED_MODULE_3__/* .EventTypes.COMMENT_CREATE */ .G.COMMENT_CREATE:
            {
                _store__WEBPACK_IMPORTED_MODULE_4__/* .store.commentStore.addComment */ .h.commentStore.addComment(data);
                break;
            }
        case _types_events__WEBPACK_IMPORTED_MODULE_3__/* .EventTypes.DANMAKU_CREATE */ .G.DANMAKU_CREATE:
            {
                (0,_utils_danmaku__WEBPACK_IMPORTED_MODULE_6__/* .createDangmaku */ .Z)({
                    text: `${data.author}: ${data.text}`,
                    color: data.color
                });
                if ((data.author == userStore.name || data.author == userStore.username) && !userStore.isLogged) {
                    notice.notice({
                        title: `${userStore.name} 敲了你一下`,
                        text: data.text,
                        options: {
                            image: userStore.master?.avatar
                        }
                    });
                }
                break;
            }
        // handle update event
        case _types_events__WEBPACK_IMPORTED_MODULE_3__/* .EventTypes.POST_UPDATE */ .G.POST_UPDATE:
            {
                postStore.addAndPatch(data);
                break;
            }
        case _types_events__WEBPACK_IMPORTED_MODULE_3__/* .EventTypes.POST_DELETE */ .G.POST_DELETE:
            {
                const id = data;
                postStore.softDelete(id);
                break;
            }
        case _types_events__WEBPACK_IMPORTED_MODULE_3__/* .EventTypes.NOTE_UPDATE */ .G.NOTE_UPDATE:
            {
                (0,mobx__WEBPACK_IMPORTED_MODULE_0__.runInAction)(()=>{
                    noteStore.addAndPatch(data);
                    const note = noteStore.get(data.id);
                    if (note) {
                        if (note.hide && !_store__WEBPACK_IMPORTED_MODULE_4__/* .store.userStore.isLogged */ .h.userStore.isLogged) {
                            note.title = "\u5DF2\u9690\u85CF";
                            note.text = "\u8BE5\u7B14\u8BB0\u5DF2\u88AB\u9690\u85CF";
                        }
                    }
                });
                break;
            }
        case _types_events__WEBPACK_IMPORTED_MODULE_3__/* .EventTypes.NOTE_DELETE */ .G.NOTE_DELETE:
            {
                const id = data;
                (0,mobx__WEBPACK_IMPORTED_MODULE_0__.runInAction)(()=>{
                    noteStore.softDelete(id);
                    const note = noteStore.get(id);
                    if (note) {
                        note.title = "\u5DF2\u5220\u9664";
                        note.text = "\u8BE5\u7B14\u8BB0\u5DF2\u88AB\u5220\u9664";
                    }
                });
                break;
            }
        case _types_events__WEBPACK_IMPORTED_MODULE_3__/* .EventTypes.PAGE_UPDATED */ .G.PAGE_UPDATED:
            {
                react_message_popup__WEBPACK_IMPORTED_MODULE_1__.message.info("\u9875\u9762\u5185\u5BB9\u5DF2\u66F4\u65B0");
                pageStore.addAndPatch(data);
                break;
            }
        default:
            {
                if (utils__WEBPACK_IMPORTED_MODULE_2__/* .isDev */ .r8) {
                    console.log(type, data);
                }
            }
    }
};
function noticeHead(type, title) {
    return `${_store__WEBPACK_IMPORTED_MODULE_4__/* .store.userStore.name */ .h.userStore.name}发布了新的${type}${title ? `: ${title}` : ""}`;
}
function getDescription(text) {
    return text.length > 20 ? `${text.slice(0, 20)}...` : text;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 81211:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "socketClient": () => (/* binding */ socketClient)
/* harmony export */ });
/* harmony import */ var _socket_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9047);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_socket_client__WEBPACK_IMPORTED_MODULE_0__]);
_socket_client__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/*
 * @Author: Innei
 * @Date: 2020-05-23 13:17:53
 * @LastEditTime: 2020-05-23 13:22:08
 * @LastEditors: Innei
 * @FilePath: /mx-web/socket/index.ts
 * @MIT
 */ 
const socketClient = new _socket_client__WEBPACK_IMPORTED_MODULE_0__/* .SocketClient */ .$();

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9047:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ SocketClient)
/* harmony export */ });
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14612);
/* harmony import */ var api_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9378);
/* harmony import */ var _constants_env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86009);
/* harmony import */ var _utils_env__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(55812);
/* harmony import */ var _utils_event_emitter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43025);
/* harmony import */ var _handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1105);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([socket_io_client__WEBPACK_IMPORTED_MODULE_0__, _handler__WEBPACK_IMPORTED_MODULE_4__]);
([socket_io_client__WEBPACK_IMPORTED_MODULE_0__, _handler__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






class SocketClient {
    socket;
    constructor(){
        this.socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_0__.io)(`${_constants_env__WEBPACK_IMPORTED_MODULE_2__/* .GATEWAY_URL */ .j}/web`, {
            timeout: 10000,
            reconnectionDelay: 3000,
            autoConnect: false,
            reconnectionAttempts: 3,
            transports: [
                "websocket"
            ]
        });
    }
    initIO() {
        if (!this.socket) {
            return;
        }
        this.socket.close();
        this.socket.open();
        this.socket.on("message", (payload)=>{
            if (typeof payload !== "string") {
                return this.handleEvent(payload.type, (0,api_client__WEBPACK_IMPORTED_MODULE_1__/* .camelcaseKeys */ .U)(payload.data, {
                    deep: true
                }));
            }
            const { data , type  } = JSON.parse(payload);
            this.handleEvent(type, (0,api_client__WEBPACK_IMPORTED_MODULE_1__/* .camelcaseKeys */ .U)(data, {
                deep: true
            }));
        });
    }
    reconnect() {
        this.socket.open();
    }
    handleEvent(type, data) {
        if (_utils_env__WEBPACK_IMPORTED_MODULE_5__/* .isDev */ .r8) {
            console.log(data);
        }
        _utils_event_emitter__WEBPACK_IMPORTED_MODULE_3__/* .eventBus.emit */ .Y.emit(type, data);
        (0,_handler__WEBPACK_IMPORTED_MODULE_4__/* .eventHandler */ .$)(type, data);
    }
    emit(event, payload1) {
        return new Promise((resolve)=>{
            if (this.socket && this.socket.connected) {
                this.socket.emit(event, payload1, (payload)=>{
                    resolve(payload);
                });
            }
        });
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 96262:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ createDangmaku)
/* harmony export */ });
/* harmony import */ var lodash_es_range__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12464);
/* harmony import */ var lodash_es_sample__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23116);
/*
 * @Author: Innei
 * @Date: 2020-05-28 12:24:14
 * @LastEditTime: 2020-06-07 16:22:18
 * @LastEditors: Innei
 * @FilePath: /mx-web/utils/danmaku.ts
 * @Copyright
 */ 

const createDanmakuWrap = ()=>{
    const $root = document.body;
    const $wrap = document.getElementById("dangmaku");
    if (!$wrap) {
        const $wrap = document.createElement("div");
        $wrap.setAttribute("id", "dangmaku");
        $wrap.style.cssText = `
      position: fixed;
      top: 4rem;
      bottom: 50vh;
      z-index: -1;
      overflow: hidden;
      left: 0;
      right: 0;
    `;
        $root.appendChild($wrap);
        return $wrap;
    }
    return $wrap;
};
const createDangmaku = ({ color , duration , text  })=>{
    const $wrap = createDanmakuWrap();
    const wrapHeight = $wrap.getBoundingClientRect().height;
    const dangmaku = document.createElement("div");
    Object.assign(dangmaku.style, {
        color: color ?? "",
        position: "absolute",
        fontSize: "16px",
        top: `${(0,lodash_es_sample__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)((0,lodash_es_range__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(0, wrapHeight >> 8)) * 14}px`
    });
    Object.assign(dangmaku, {
        textContent: text,
        onanimationend: (e)=>{
            dangmaku.remove();
        }
    });
    // console.log(dangmaku)
    $wrap.appendChild(dangmaku);
    requestAnimationFrame(()=>{
        // dangmaku.style.right = '100vw'
        dangmaku.style.animation = `dangmaku ${duration && duration / 1000 > 8 ? duration : 8}s steps(30) `;
    });
};


/***/ })

};
;