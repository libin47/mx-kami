"use strict";
exports.id = 558;
exports.ids = [558];
exports.modules = {

/***/ 29592:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Qd": () => (/* reexport safe */ _image_size__WEBPACK_IMPORTED_MODULE_0__.Q),
/* harmony export */   "Yh": () => (/* reexport safe */ _root_store__WEBPACK_IMPORTED_MODULE_2__.Yh)
/* harmony export */ });
/* harmony import */ var _image_size__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93922);
/* harmony import */ var _initial_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66098);
/* harmony import */ var _root_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85035);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_root_store__WEBPACK_IMPORTED_MODULE_2__]);
_root_store__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 21865:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "YB": () => (/* binding */ useFooterBackground),
/* harmony export */   "e9": () => (/* binding */ useBackgroundOpacity),
/* harmony export */   "xS": () => (/* binding */ useThemeBackground)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38325);
/* harmony import */ var _use_initial_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92644);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store__WEBPACK_IMPORTED_MODULE_1__]);
_store__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const loadStyle = (css)=>{
    const $style = document.createElement("style");
    $style.innerHTML = css;
    document.head.appendChild($style);
    return ()=>{
        document.head.removeChild($style);
    };
};
const useThemeBackground = ()=>{
    const { appStore: { colorMode  } ,  } = (0,_store__WEBPACK_IMPORTED_MODULE_1__/* .useStore */ .oR)();
    const { site: { background  } ,  } = (0,_use_initial_data__WEBPACK_IMPORTED_MODULE_2__/* .useKamiConfig */ .r5)();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const remove = loadStyle(`body .bg-fixed > .bg { background: url(${background.src[colorMode] || background.src.light || background.src.dark}) ${background.position}; background-color: var(--light-bg);  };`);
        return remove;
    }, [
        background.position,
        background.src,
        colorMode
    ]);
};
const useBackgroundOpacity = (opacity)=>{
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const remove = loadStyle(`body .bg-fixed { opacity: ${opacity}; }`);
        return remove;
    }, [
        opacity
    ]);
};
const useFooterBackground = (footerClassName)=>{
    const { appStore: { colorMode  } ,  } = (0,_store__WEBPACK_IMPORTED_MODULE_1__/* .useStore */ .oR)();
    const { site: { footer: { background  } ,  } ,  } = (0,_use_initial_data__WEBPACK_IMPORTED_MODULE_2__/* .useKamiConfig */ .r5)();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const remove = loadStyle(`.${footerClassName}::before { background: url(${background.src[colorMode] || background.src.light || background.src.dark}) ${background.position};  }`);
        return remove;
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;