"use strict";
exports.id = 4173;
exports.ids = [4173];
exports.modules = {

/***/ 4173:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ SEO),
/* harmony export */   "p": () => (/* binding */ Seo)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(352);
/* harmony import */ var lodash_es_merge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8034);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5944);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6641);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_use_initial_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3086);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3531);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2649);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([lodash_es__WEBPACK_IMPORTED_MODULE_1__, _store__WEBPACK_IMPORTED_MODULE_5__, _utils__WEBPACK_IMPORTED_MODULE_6__]);
([lodash_es__WEBPACK_IMPORTED_MODULE_1__, _store__WEBPACK_IMPORTED_MODULE_5__, _utils__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const SEO = (0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__.observer)((props)=>{
    const { title , description , openGraph , ...rest } = props;
    const { userStore  } = (0,_store__WEBPACK_IMPORTED_MODULE_5__/* .useStore */ .oR)();
    const { url: { webUrl  } , seo , user ,  } = (0,_hooks_use_initial_data__WEBPACK_IMPORTED_MODULE_4__/* .useInitialData */ .L6)();
    const Title = `${title} - ${seo.title}`;
    const themeConfig = (0,_hooks_use_initial_data__WEBPACK_IMPORTED_MODULE_4__/* .useThemeConfig */ .LU)();
    const { site: { figure  } ,  } = themeConfig;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_seo__WEBPACK_IMPORTED_MODULE_3__.NextSeo, {
        title,
        titleTemplate: `%s - ${seo.title}`,
        openGraph: (0,lodash_es_merge__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)({
            profile: {
                username: user.name || user.username
            },
            type: "article",
            locale: "zh-cn",
            site_name: seo.title || "",
            description: description || seo.description || userStore.introduce || "",
            article: {
                authors: [
                    user.name || userStore.name
                ]
            },
            title: Title,
            images: [
                {
                    url: (0,lodash_es__WEBPACK_IMPORTED_MODULE_1__.sample)(figure) || (0,_utils__WEBPACK_IMPORTED_MODULE_6__/* .getRandomImage */ .Ou)()[0],
                    alt: `${title} - ${seo.title}`
                }, 
            ]
        }, openGraph),
        description: description || seo.description || user.introduce || userStore.introduce || "",
        twitter: {
            cardType: "summary",
            site: webUrl
        },
        ...rest
    });
});
const Seo = SEO;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;