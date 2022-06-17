exports.id = 6235;
exports.ids = [6235];
exports.modules = {

/***/ 15579:
/***/ ((module) => {

// Exports
module.exports = {
	"post-title": "ArticleLayout_post-title__Zf0kJ",
	"is-article": "ArticleLayout_is-article__uLhmt",
	"h1": "ArticleLayout_h1__tk6Mj"
};


/***/ }),

/***/ 71765:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ ArticleLayoutContextProvider),
/* harmony export */   "x": () => (/* binding */ useArticleLayoutProps)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const ArticleLayoutContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
const ArticleLayoutContextProvider = ArticleLayoutContext.Provider;
const useArticleLayoutProps = ()=>(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ArticleLayoutContext)
;


/***/ }),

/***/ 86235:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ ArticleLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_universal_Transition_bottom_up__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9987);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71765);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15579);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39937);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_title__WEBPACK_IMPORTED_MODULE_4__]);
_title__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const ArticleLayout = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(({ children , title , subtitle , delay , type , id , titleAnimate , ...rest }, ref)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_hooks__WEBPACK_IMPORTED_MODULE_3__/* .ArticleLayoutContextProvider */ .W, {
        value: {
            title,
            id,
            subtitle,
            type
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
            className: (_index_module_css__WEBPACK_IMPORTED_MODULE_5___default()["is-article"]),
            ref: ref,
            ...rest,
            id: "article-wrap",
            "data-type": type,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_title__WEBPACK_IMPORTED_MODULE_4__/* .ArticleLayoutTitle */ .p, {
                    animate: titleAnimate
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Transition_bottom_up__WEBPACK_IMPORTED_MODULE_2__/* .BottomUpTransitionView */ ._, {
                    timeout: (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({
                            enter: delay ?? 300
                        })
                    , [
                        delay
                    ]),
                    children: children
                }, id)
            ]
        })
    });
}));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 39937:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ ArticleLayoutTitle)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45944);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47097);
/* harmony import */ var _components_universal_Animate_text_anim__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(36872);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38325);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71765);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(15579);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([utils__WEBPACK_IMPORTED_MODULE_2__, _store__WEBPACK_IMPORTED_MODULE_4__]);
([utils__WEBPACK_IMPORTED_MODULE_2__, _store__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const ArticleLayoutTitle = (0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__.observer)(({ animate =true  })=>{
    const { userStore  } = (0,_store__WEBPACK_IMPORTED_MODULE_4__/* .useStore */ .oR)();
    const { title , type , id , subtitle , subtitleAnimation =true ,  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_5__/* .useArticleLayoutProps */ .x)();
    const { isLogged , url  } = userStore;
    if (!title) {
        return null;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_6___default()["post-title"]),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_6___default().h1),
                suppressHydrationWarning: true,
                children: [
                    (0,utils__WEBPACK_IMPORTED_MODULE_2__/* .isClientSide */ .S_)() ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Animate_text_anim__WEBPACK_IMPORTED_MODULE_3__/* .TextFade */ .S, {
                        appear: animate,
                        children: title
                    }, title) : title,
                    type && id && isLogged && url ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        className: "edit-link float-right text-green",
                        target: "_blank",
                        href: (0,utils__WEBPACK_IMPORTED_MODULE_2__/* .resolveUrl */ .Kk)(`#/${type === "page" ? "pages" : "posts"}/edit?id=${id}`, url.adminUrl),
                        children: "\u7F16\u8F91"
                    }) : null
                ]
            }),
            subtitle && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                suppressHydrationWarning: true,
                children: (0,utils__WEBPACK_IMPORTED_MODULE_2__/* .isClientSide */ .S_)() && subtitleAnimation ? typeof subtitle === "string" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Animate_text_anim__WEBPACK_IMPORTED_MODULE_3__/* .TextFade */ .S, {
                    appear: animate,
                    children: subtitle
                }, subtitle) : subtitle.map((str, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Animate_text_anim__WEBPACK_IMPORTED_MODULE_3__/* .TextFade */ .S, {
                        appear: animate,
                        className: "mb-2",
                        delay: index,
                        children: str
                    }, subtitle[index])
                ) : subtitle
            })
        ]
    });
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 36872:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ TextFade)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_spring__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12335);


const [name] = (0,_utils_spring__WEBPACK_IMPORTED_MODULE_1__/* .genSpringKeyframes */ .UU)("text-up", {
    translateY: "10px",
    opacity: 0
}, {
    translateY: "0px",
    opacity: 1
});
const TextFade = (props)=>{
    const { duration =500 , appear =true , delay =100 , children , text , ...rest } = props;
    if (!appear) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            ...rest,
            children: text ?? children
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ...rest,
        children: Array.from(text ?? children).map((char, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "inline-block whitespace-pre",
                style: {
                    animation: `${name} ${duration}ms both linear`,
                    animationDelay: `${i * delay}ms`
                },
                children: char
            }, i)
        )
    });
};


/***/ })

};
;