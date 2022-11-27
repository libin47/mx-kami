(() => {
var exports = {};
exports.id = 5092;
exports.ids = [5092];
exports.modules = {

/***/ 8184:
/***/ ((module) => {

// Exports
module.exports = {
	"head": "detail_head__0RUd5",
	"screenshot": "detail_screenshot__effQQ"
};


/***/ }),

/***/ 9891:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ ProjectDetail)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_universal_Loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4277);
/* harmony import */ var _components_universal_Markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1759);
/* harmony import */ var _components_universal_SliderImagesPopup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3076);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3531);
/* harmony import */ var _detail_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8184);
/* harmony import */ var _detail_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_detail_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _project_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8980);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_universal_Markdown__WEBPACK_IMPORTED_MODULE_3__, _store__WEBPACK_IMPORTED_MODULE_5__, _project_icon__WEBPACK_IMPORTED_MODULE_6__]);
([_components_universal_Markdown__WEBPACK_IMPORTED_MODULE_3__, _store__WEBPACK_IMPORTED_MODULE_5__, _project_icon__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const ProjectDetail = (props)=>{
    const { id  } = props;
    const { projectStore  } = (0,_store__WEBPACK_IMPORTED_MODULE_5__/* .useStore */ .oR)();
    const project = projectStore.get(id);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        projectStore.fetchById(id);
    }, [
        id
    ]);
    if (!project) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Loading__WEBPACK_IMPORTED_MODULE_2__/* .Loading */ .g, {});
    }
    const { name , description , previewUrl , projectUrl , docUrl , images , text  } = project;
    const imageSet = images?.map((image, i)=>{
        return {
            src: image,
            alt: `${name} - ${i}`
        };
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                className: (_detail_module_css__WEBPACK_IMPORTED_MODULE_7___default().head),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_project_icon__WEBPACK_IMPORTED_MODULE_6__/* .ProjectIcon */ .R, {
                        avatar: project.avatar,
                        name: project.name
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col project-detail",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                children: name
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: description
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: "space-x-4",
                                children: [
                                    previewUrl && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: previewUrl,
                                        className: "btn blue",
                                        target: "_blank",
                                        children: "\u9884\u89C8\u7AD9\u70B9"
                                    }),
                                    projectUrl && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: projectUrl,
                                        className: "btn green",
                                        target: "_blank",
                                        children: "\u83B7\u53D6\u9879\u76EE"
                                    }),
                                    docUrl && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: docUrl,
                                        className: "btn bg-transparent text-shizuku-text",
                                        target: "_blank",
                                        children: "\u9879\u76EE\u6587\u6863"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            imageSet?.length && imageSet.length > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: (_detail_module_css__WEBPACK_IMPORTED_MODULE_7___default().screenshot),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_SliderImagesPopup__WEBPACK_IMPORTED_MODULE_4__/* .SliderImagesPopup */ .P, {
                    images: imageSet
                })
            }) : null,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("article", {
                className: "mt-12",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Markdown__WEBPACK_IMPORTED_MODULE_3__/* .Markdown */ .U, {
                    value: text,
                    escapeHtml: false,
                    codeBlockFully: true,
                    renderers: {
                        link: Link
                    }
                })
            })
        ]
    });
};
const Link = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
        href: props.href,
        target: "_blank",
        rel: "noreferrer",
        children: props.children
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8980:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ ProjectIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_universal_FlexText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2755);
/* harmony import */ var _components_universal_Image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1569);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_universal_Image__WEBPACK_IMPORTED_MODULE_4__]);
_components_universal_Image__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const ProjectIcon = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.memo)((props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("project-icon flex-shrink-0 flex-grow flex items-center justify-center bg-light-bg", props.avatar ? "" : "bg-gray text-white"),
        children: props.avatar ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Image__WEBPACK_IMPORTED_MODULE_4__/* .ImageLazy */ .X, {
            src: props.avatar,
            alt: props.name
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_FlexText__WEBPACK_IMPORTED_MODULE_3__/* .FlexText */ .I, {
            text: props.name?.charAt(0).toUpperCase() || "",
            size: 0.5
        })
    });
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3076:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ SliderImagesPopup)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var medium_zoom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1985);
/* harmony import */ var medium_zoom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(medium_zoom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const SliderImagesPopup = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.memo)((props)=>{
    const { images  } = props;
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        requestAnimationFrame(()=>{
            medium_zoom__WEBPACK_IMPORTED_MODULE_1___default()("[data-image-zoom]", {
                background: "var(--light-bg)",
                margin: 50
            });
        });
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: images.map((image, i)=>{
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                src: image.src,
                "data-image-zoom": true
            }, i);
        })
    });
});


/***/ }),

/***/ 9497:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_in_page_Project_detail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9891);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3531);
/* harmony import */ var _utils_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6246);
/* harmony import */ var _components_universal_Seo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4173);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_in_page_Project_detail__WEBPACK_IMPORTED_MODULE_1__, _store__WEBPACK_IMPORTED_MODULE_2__, _utils_client__WEBPACK_IMPORTED_MODULE_3__, _components_universal_Seo__WEBPACK_IMPORTED_MODULE_4__]);
([_components_in_page_Project_detail__WEBPACK_IMPORTED_MODULE_1__, _store__WEBPACK_IMPORTED_MODULE_2__, _utils_client__WEBPACK_IMPORTED_MODULE_3__, _components_universal_Seo__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const ProjectView = (props)=>{
    const store = (0,_store__WEBPACK_IMPORTED_MODULE_2__/* .useStore */ .oR)();
    store.projectStore.add(props);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Seo__WEBPACK_IMPORTED_MODULE_4__/* .SEO */ .H, {
                title: props.name,
                description: props.description
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_in_page_Project_detail__WEBPACK_IMPORTED_MODULE_1__/* .ProjectDetail */ .r, {
                id: props.id
            })
        ]
    });
};
ProjectView.getInitialProps = async (ctx)=>{
    const { query  } = ctx;
    const id = query.id;
    const data = await _utils_client__WEBPACK_IMPORTED_MODULE_3__/* .apiClient.project.getById */ .x.project.getById(id);
    return data;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectView);

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

/***/ 1985:
/***/ ((module) => {

"use strict";
module.exports = require("medium-zoom");

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

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

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

/***/ 9346:
/***/ ((module) => {

"use strict";
module.exports = require("react-lazyload");

/***/ }),

/***/ 3702:
/***/ ((module) => {

"use strict";
module.exports = require("react-markdown");

/***/ }),

/***/ 5255:
/***/ ((module) => {

"use strict";
module.exports = require("react-message-popup");

/***/ }),

/***/ 9755:
/***/ ((module) => {

"use strict";
module.exports = require("react-use");

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

/***/ 2281:
/***/ ((module) => {

"use strict";
module.exports = require("validator/lib/isMongoId");

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
var __webpack_exports__ = __webpack_require__.X(0, [1655,8034,6246,4598,4173,1569,4277,1773,1759], () => (__webpack_exec__(9497)));
module.exports = __webpack_exports__;

})();