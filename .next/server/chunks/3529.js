exports.id = 3529;
exports.ids = [3529];
exports.modules = {

/***/ 36483:
/***/ ((module) => {

// Exports
module.exports = {
	"error": "Error_error__mpFu_",
	"desc": "Error_desc__UZ1VW"
};


/***/ }),

/***/ 53529:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ ErrorView)
/* harmony export */ });
/* unused harmony export errorToText */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_es_isNumber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69708);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_universal_Seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14302);
/* harmony import */ var _utils_env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55812);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(36483);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_universal_Seo__WEBPACK_IMPORTED_MODULE_2__]);
_components_universal_Seo__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const errorToText = (statusCode)=>{
    switch(statusCode){
        case 404:
            return "\u62B1\u6B49\u5566, \u9875\u9762\u8D70\u4E22\u4E86";
        case 403:
            return "\u4E0D\u8981\u505A\u4E00\u4E9B\u4E0D\u5141\u8BB8\u7684\u4E8B\u60C5\u5566";
        case 401:
            return "\u8FD9\u662F\u4E3B\u4EBA\u7684\u5C0F\u79D8\u5BC6\u54E6, \u4F60\u662F\u6211\u7684\u4E3B\u4EBA\u5417";
        case 408:
            return (0,_utils_env__WEBPACK_IMPORTED_MODULE_3__/* .isServerSide */ .s$)() ? "\u4E0A\u6E38\u670D\u52A1\u5668\u8FDE\u63A5\u8D85\u65F6" : "\u8FDE\u63A5\u8D85\u65F6, \u8BF7\u68C0\u67E5\u4E00\u4E0B\u7F51\u7EDC\u54E6!";
        case 406:
        case 418:
            return "\u8336\u58F6\u51FA\u73B0\u9519\u8BEF";
        case 666:
            return "\u4F60\u5728\u5E72\u4EC0\u4E48\u5440";
        case 500:
        default:
            return "\u62B1\u6B49, \u51FA\u4E86\u70B9\u5C0F\u95EE\u9898";
    }
};
const ErrorView = ({ statusCode =500 , showBackButton =true , showRefreshButton =true , description , noSeo =false ,  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const message = errorToText((0,lodash_es_isNumber__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(statusCode) ? statusCode : 500);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_5___default().error),
        children: [
            !noSeo && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Seo__WEBPACK_IMPORTED_MODULE_2__/* .Seo */ .p, {
                title: message
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        children: statusCode
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_5___default().desc),
                        children: description ?? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            children: message
                        })
                    })
                ]
            }),
            (showBackButton || showBackButton) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mt-5",
                children: [
                    showBackButton && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "btn red mr-3",
                        onClick: ()=>router.push("/")
                        ,
                        children: "\u56DE\u5230\u9996\u9875"
                    }),
                    showRefreshButton && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "btn yellow",
                        onClick: ()=>router.reload()
                        ,
                        children: "\u5237\u65B0"
                    })
                ]
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;