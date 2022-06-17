exports.id = 6076;
exports.ids = [6076];
exports.modules = {

/***/ 18754:
/***/ ((module) => {

// Exports
module.exports = {
	"md": "Markdown_md__syhaJ",
	"code-fully": "Markdown_code-fully__6udus"
};


/***/ }),

/***/ 76508:
/***/ ((module) => {

// Exports
module.exports = {
	"link": "renderers_link__7NdqH",
	"popup": "renderers_popup__xdJAP"
};


/***/ }),

/***/ 65606:
/***/ ((module) => {

// Exports
module.exports = {
	"code-wrap": "CodeHighlighter_code-wrap__ZPj9J",
	"copy-tip": "CodeHighlighter_copy-tip__DE60e",
	"language-tip": "CodeHighlighter_language-tip__YXFr4"
};


/***/ }),

/***/ 79440:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ CodeBlock)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_universal_Mermaid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98426);
/* harmony import */ var _components_widgets_CodeHighlighter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53268);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_widgets_CodeHighlighter__WEBPACK_IMPORTED_MODULE_2__]);
_components_widgets_CodeHighlighter__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const CodeBlock = (props)=>{
    if (props.language === "mermaid") {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Mermaid__WEBPACK_IMPORTED_MODULE_1__/* .Mermaid */ .G, {
            ...props
        });
    } else {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_widgets_CodeHighlighter__WEBPACK_IMPORTED_MODULE_2__/* .HighLighter */ .h, {
            ...props
        });
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 56076:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ Markdown)
/* harmony export */ });
/* unused harmony export TOC */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80352);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45944);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26958);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13702);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(69755);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_use__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_universal_Markdown_rules__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6299);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(38325);
/* harmony import */ var _CodeBlock__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(79440);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(18754);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _process_tag__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(63193);
/* harmony import */ var _renderers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(70198);
/* harmony import */ var _renderers_Heading__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(52751);
/* harmony import */ var _renderers_Image__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(35295);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([lodash_es__WEBPACK_IMPORTED_MODULE_2__, _store__WEBPACK_IMPORTED_MODULE_9__, _CodeBlock__WEBPACK_IMPORTED_MODULE_10__, _renderers__WEBPACK_IMPORTED_MODULE_11__, _renderers_Heading__WEBPACK_IMPORTED_MODULE_12__, _renderers_Image__WEBPACK_IMPORTED_MODULE_13__]);
([lodash_es__WEBPACK_IMPORTED_MODULE_2__, _store__WEBPACK_IMPORTED_MODULE_9__, _CodeBlock__WEBPACK_IMPORTED_MODULE_10__, _renderers__WEBPACK_IMPORTED_MODULE_11__, _renderers_Heading__WEBPACK_IMPORTED_MODULE_12__, _renderers_Image__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















const Toc = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(null, {
    loadableGenerated: {
        modules: [
            "../components/universal/Markdown/index.tsx -> " + "~/components/universal/Toc"
        ]
    },
    ssr: false
});
const __Markdown = (0,react_use__WEBPACK_IMPORTED_MODULE_7__.ensuredForwardRef)((props, ref)=>{
    const { value , renderers , style , wrapperProps ={} , codeBlockFully =false , ...rest } = props;
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        const _ = ref;
        if (!_.current) {
            return;
        }
        const $ = _.current;
        //  process raw html tag
        (0,_process_tag__WEBPACK_IMPORTED_MODULE_14__/* .processDetails */ .L)($);
    }, [
        ref
    ]);
    const { 0: headings , 1: setHeadings  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        const _ = ref;
        if (!_.current) {
            return;
        }
        const $ = _.current;
        // FIXME: 可能存在 memory leak
        setHeadings(Array.from($.querySelectorAll((0,lodash_es__WEBPACK_IMPORTED_MODULE_2__.range)(0, 6).map((i)=>`h${i}`
        ).join(", "))));
    }, [
        ref,
        value
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        id: "write",
        style: style,
        ...wrapperProps,
        ref: ref,
        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()((_index_module_css__WEBPACK_IMPORTED_MODULE_15___default().md), codeBlockFully ? (_index_module_css__WEBPACK_IMPORTED_MODULE_15___default()["code-fully"]) : undefined),
        suppressHydrationWarning: true,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_markdown__WEBPACK_IMPORTED_MODULE_6___default()), {
                source: value ?? props.children,
                ...rest,
                renderers: (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(()=>({
                        code: _CodeBlock__WEBPACK_IMPORTED_MODULE_10__/* .CodeBlock */ .d,
                        pre: _CodeBlock__WEBPACK_IMPORTED_MODULE_10__/* .CodeBlock */ .d,
                        image: _renderers_Image__WEBPACK_IMPORTED_MODULE_13__/* .Image */ .E,
                        heading: (0,_renderers_Heading__WEBPACK_IMPORTED_MODULE_12__/* .Heading */ .X)(),
                        link: _renderers__WEBPACK_IMPORTED_MODULE_11__/* .RenderLink */ .Gt,
                        spoiler: _renderers__WEBPACK_IMPORTED_MODULE_11__/* .RenderSpoiler */ .wH,
                        paragraph: _renderers__WEBPACK_IMPORTED_MODULE_11__/* .RenderParagraph */ .kH,
                        commentAt: _renderers__WEBPACK_IMPORTED_MODULE_11__/* .RenderCommentAt */ .h,
                        linkReference: _renderers__WEBPACK_IMPORTED_MODULE_11__/* .RenderReference */ .Tm,
                        listItem: _renderers__WEBPACK_IMPORTED_MODULE_11__/* .RenderListItem */ .Vh,
                        tableHead: _renderers__WEBPACK_IMPORTED_MODULE_11__/* .RenderTableHead */ .d$,
                        tableRow: _renderers__WEBPACK_IMPORTED_MODULE_11__/* .RenderTableRow */ .Ln,
                        tableBody: _renderers__WEBPACK_IMPORTED_MODULE_11__/* .RenderTableBody */ .GN,
                        ...renderers
                    })
                , [
                    renderers
                ]),
                plugins: _components_universal_Markdown_rules__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP
            }),
            props.toc && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TOC, {
                headings: headings
            })
        ]
    });
});
const Markdown = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_5__.memo)(__Markdown);
const TOC = (0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__.observer)((props)=>{
    const { appStore  } = (0,_store__WEBPACK_IMPORTED_MODULE_9__/* .useStore */ .oR)();
    const { isPadOrMobile  } = appStore;
    return !isPadOrMobile ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Toc, {
        ...props
    }) : null;
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 52751:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ Heading)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19785);
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47097);
/* harmony import */ var _types_events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(51113);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([utils__WEBPACK_IMPORTED_MODULE_3__]);
utils__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const Heading = ()=>{
    let index = 0;
    const RenderHeading = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)((props)=>{
        const currentIndex = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>index++
        , []);
        const title = props.children?.[0].props.value;
        const { ref  } = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__.useInView)({
            rootMargin: "-33% 0% -33% 0%",
            onChange (inView) {
                if (inView) {
                    utils__WEBPACK_IMPORTED_MODULE_3__/* .eventBus.emit */ .YB.emit(_types_events__WEBPACK_IMPORTED_MODULE_4__/* .CustomEventTypes.TOC */ .R.TOC, currentIndex);
                }
            }
        });
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
            children: /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(`h${props.level}`, {
                id: title,
                "data-index": currentIndex,
                ref
            }, props.children)
        });
    });
    // const isClient = useIsClient()
    return RenderHeading;
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 35295:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ Image)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36211);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45944);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_universal_Image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(66264);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(38325);
/* harmony import */ var _utils_images__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(58276);
/* harmony import */ var _context_image_size__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(93922);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_universal_Image__WEBPACK_IMPORTED_MODULE_4__, _store__WEBPACK_IMPORTED_MODULE_5__]);
([_components_universal_Image__WEBPACK_IMPORTED_MODULE_4__, _store__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const getContainerSize = ()=>{
    const $wrap = document.getElementById("write");
    if (!$wrap) {
        return;
    }
    return $wrap.getBoundingClientRect().width;
};
/**
 * This Component only can render in browser.
 */ const _Image = (0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__.observer)(({ src , alt  })=>{
    const { appUIStore  } = (0,_store__WEBPACK_IMPORTED_MODULE_5__/* .useStore */ .oR)();
    const imageRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        const disposer = (0,mobx__WEBPACK_IMPORTED_MODULE_1__.reaction)(()=>appUIStore.viewport.w | appUIStore.viewport.h
        , ()=>{
            if (imageRef.current?.status === "loaded") {
                disposer();
                return;
            }
            setMaxWidth(getContainerSize());
        });
        return ()=>{
            disposer();
        };
    }, []);
    const images = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_context_image_size__WEBPACK_IMPORTED_MODULE_7__/* .ImageSizeMetaContext */ .Q);
    const isPrintMode = appUIStore.mediaType === "print";
    const { 0: maxWidth , 1: setMaxWidth  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(getContainerSize());
    // 因为有动画开始不能获取到大小 , 直到获取到 container 的大小
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        let raf = requestAnimationFrame(function a() {
            const size = getContainerSize();
            if (!size) {
                requestAnimationFrame(a);
            } else {
                setMaxWidth(size);
            }
        });
        return ()=>{
            raf = cancelAnimationFrame(raf);
        };
    }, []);
    if (isPrintMode) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
            src: src,
            alt: alt
        });
    }
    const { accent , height , width  } = images.get(src) || {
        height: undefined,
        width: undefined
    };
    const max = {
        width: maxWidth ?? 644,
        height: Infinity
    };
    let cal = {};
    if (width && height) {
        cal = (0,_utils_images__WEBPACK_IMPORTED_MODULE_6__/* .calculateDimensions */ .jg)(width, height, max);
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Image__WEBPACK_IMPORTED_MODULE_4__/* .ImageLazy */ .X, {
        popup: true,
        ref: imageRef,
        src: src,
        alt: alt || src,
        backgroundColor: accent,
        height: cal.height,
        width: cal.width,
        style: style,
        "data-raw-height": height,
        "data-raw-width": width,
        overflowHidden: true
    });
});
const style = {
    padding: "1rem 0"
};
const Image = typeof document === "undefined" ? ({ src , alt  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
        src: src,
        alt: alt
    })
 : _Image;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 76558:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ RenderLink)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(76508);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_3__);




const RenderLink = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.memo)((props)=>{
    const ExtendIcon = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            x: "0px",
            y: "0px",
            viewBox: "0 0 100 100",
            width: "15",
            height: "15",
            className: "inline align-middle leading-normal",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    fill: "var(--shizuku-text-color)",
                    d: "M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("polygon", {
                    fill: "var(--shizuku-text-color)",
                    points: "45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
                })
            ]
        })
    , []);
    const handleRedirect = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((e)=>{
        const href = props.href;
        const locateUrl = new URL(location.href);
        const toUrlParser = new URL(href);
        if (toUrlParser.host === locateUrl.host ||  false && 0) {
            e.preventDefault();
            const pathArr = toUrlParser.pathname.split("/").filter(Boolean);
            const headPath = pathArr[0];
            switch(headPath){
                case "posts":
                    {
                        next_router__WEBPACK_IMPORTED_MODULE_1___default().push("/posts/[category]/[slug]", toUrlParser.pathname);
                        break;
                    }
                case "notes":
                    {
                        next_router__WEBPACK_IMPORTED_MODULE_1___default().push("/notes/[id]", toUrlParser.pathname);
                        break;
                    }
                case "category":
                    {
                        next_router__WEBPACK_IMPORTED_MODULE_1___default().push("/categories/[slug]", toUrlParser.pathname);
                        break;
                    }
                default:
                    {
                        window.open(toUrlParser.pathname);
                    }
            }
        }
    }, [
        props.href
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_3___default().link),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                href: props.href,
                target: "_blank",
                onClick: handleRedirect,
                children: props.children
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_3___default().popup),
                children: props.href
            }),
            ExtendIcon
        ]
    });
});


/***/ }),

/***/ 58163:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GN": () => (/* binding */ RenderTableBody),
/* harmony export */   "Ln": () => (/* binding */ RenderTableRow),
/* harmony export */   "d$": () => (/* binding */ RenderTableHead)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const RenderTableHead = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
        children: props.children
    });
};
const RenderTableRow = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
        children: props.children
    });
};
const RenderTableBody = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
        children: props.children
    });
};


/***/ }),

/***/ 27124:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tm": () => (/* binding */ RenderReference),
/* harmony export */   "Vh": () => (/* binding */ RenderListItem),
/* harmony export */   "h": () => (/* binding */ RenderCommentAt),
/* harmony export */   "kH": () => (/* binding */ RenderParagraph),
/* harmony export */   "wH": () => (/* binding */ RenderSpoiler)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const RenderSpoiler = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("del", {
        className: "spoiler",
        title: "\u4F60\u77E5\u9053\u7684\u592A\u591A\u4E86",
        children: props.value
    });
};
const RenderParagraph = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
        className: "paragraph",
        children: props.children
    });
};
const RenderCommentAt = ({ value  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            "@",
            value
        ]
    });
};
const RenderReference = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("sup", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            title: props.title || undefined,
            href: props.href,
            children: props.children
        })
    });
};
const RenderListItem = (props)=>{
    const isChecked = typeof props.checked == "boolean";
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(isChecked ? "list-none" : undefined, "mb-2"),
        children: isChecked ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
            className: "inline-flex items-center",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    type: "checkbox",
                    checked: props.checked,
                    readOnly: true
                }),
                props.children
            ]
        }) : props.children
    });
};


/***/ }),

/***/ 98426:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ Mermaid)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_load_script__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(66886);



const Mermaid = (props)=>{
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        (0,_utils_load_script__WEBPACK_IMPORTED_MODULE_2__/* .loadScript */ .ve)("https://lf26-cdn-tos.bytecdntp.com/cdn/expire-1-M/mermaid/8.9.0/mermaid.min.js").then(()=>{
            if (window.mermaid) {
                window.mermaid.initialize({
                    theme: "default",
                    startOnLoad: false
                });
                window.mermaid.init(undefined, ".mermaid");
            }
        });
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "mermaid",
        children: props.value
    });
};


/***/ }),

/***/ 53268:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ HighLighter)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45944);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_message_popup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15255);
/* harmony import */ var react_message_popup__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_message_popup__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(47097);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(38325);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(65606);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([utils__WEBPACK_IMPORTED_MODULE_4__, _store__WEBPACK_IMPORTED_MODULE_5__]);
([utils__WEBPACK_IMPORTED_MODULE_4__, _store__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const HighLighter = (0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__.observer)((props)=>{
    const { language , value  } = props;
    const { appUIStore  } = (0,_store__WEBPACK_IMPORTED_MODULE_5__/* .useStore */ .oR)();
    const { colorMode  } = appUIStore;
    const handleCopy = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{
        navigator.clipboard.writeText(value);
        react_message_popup__WEBPACK_IMPORTED_MODULE_3__.message.success("COPIED!");
    }, [
        value
    ]);
    const isPrintMode = appUIStore.mediaType === "print";
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const css = (0,utils__WEBPACK_IMPORTED_MODULE_4__/* .loadStyleSheet */ .Wx)(`https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-M/prism-themes/1.9.0/prism-one-${isPrintMode ? "light" : colorMode}.css`);
        return ()=>{
            css?.remove();
        };
    }, [
        colorMode,
        isPrintMode
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        (0,utils__WEBPACK_IMPORTED_MODULE_4__/* .loadStyleSheet */ .Wx)("https://lf26-cdn-tos.bytecdntp.com/cdn/expire-1-M/prism/1.23.0/plugins/line-numbers/prism-line-numbers.min.css");
        Promise.all([
            (0,utils__WEBPACK_IMPORTED_MODULE_4__/* .loadScript */ .ve)("https://lf26-cdn-tos.bytecdntp.com/cdn/expire-1-M/prism/1.23.0/components/prism-core.min.js"), 
        ]).then(()=>Promise.all([
                (0,utils__WEBPACK_IMPORTED_MODULE_4__/* .loadScript */ .ve)("https://lf26-cdn-tos.bytecdntp.com/cdn/expire-1-M/prism/1.23.0/plugins/autoloader/prism-autoloader.min.js"),
                (0,utils__WEBPACK_IMPORTED_MODULE_4__/* .loadScript */ .ve)("https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-M/prism/1.23.0/plugins/line-numbers/prism-line-numbers.min.js"), 
            ])
        ).then(()=>{
            if (ref.current) {
                requestAnimationFrame(()=>{
                    window.Prism?.highlightElement(ref.current);
                    requestAnimationFrame(()=>{
                        window.Prism?.highlightElement(ref.current);
                    });
                });
            } else {
                requestAnimationFrame(()=>{
                    window.Prism?.highlightAll();
                    // highlightAll twice
                    requestAnimationFrame(()=>{
                        window.Prism?.highlightAll();
                    });
                });
            }
        });
    }, []);
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_6___default()["code-wrap"]),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_6___default()["language-tip"]),
                "aria-hidden": true,
                children: language?.toUpperCase()
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("pre", {
                className: "line-numbers !bg-transparent",
                "data-start": "1",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("code", {
                    className: `language-${language ?? "markup"}`,
                    ref: ref,
                    children: value
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_6___default()["copy-tip"]),
                onClick: handleCopy,
                "aria-hidden": true,
                children: "Copy"
            })
        ]
    });
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 63193:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "L": () => (/* binding */ processDetails)
});

;// CONCATENATED MODULE: ./src/components/universal/Markdown/helper.ts
class Accordion {
    summary;
    content;
    animation;
    isClosing;
    isExpanding;
    constructor(el){
        this.el = el;
        // Store the <details> element
        this.el = el;
        // Store the <summary> element
        this.summary = el.querySelector("summary");
        // Store the <div class="content"> element
        this.content = el.querySelector(".content");
        // Store the animation object (so we can cancel it if needed)
        this.animation = null;
        // Store if the element is closing
        this.isClosing = false;
        // Store if the element is expanding
        this.isExpanding = false;
        // Detect user clicks on the summary element
        this.summary.addEventListener("click", (e)=>this.onClick(e)
        );
    }
    onClick(e) {
        // Stop default behaviour from the browser
        e.preventDefault();
        // Add an overflow on the <details> to avoid content overflowing
        this.el.style.overflow = "hidden";
        // Check if the element is being closed or is already closed
        if (this.isClosing || !this.el.open) {
            this.open();
        // Check if the element is being openned or is already open
        } else if (this.isExpanding || this.el.open) {
            this.shrink();
        }
    }
    shrink() {
        // Set the element as "being closed"
        this.isClosing = true;
        // Store the current height of the element
        const startHeight = `${this.el.offsetHeight}px`;
        // Calculate the height of the summary
        const endHeight = `${this.summary.offsetHeight}px`;
        // If there is already an animation running
        if (this.animation) {
            // Cancel the current animation
            this.animation.cancel();
        }
        // Start a WAAPI animation
        this.animation = this.el.animate({
            // Set the keyframes from the startHeight to endHeight
            height: [
                startHeight,
                endHeight
            ]
        }, {
            duration: 400,
            easing: "linear"
        });
        // When the animation is complete, call onAnimationFinish()
        this.animation.onfinish = ()=>this.onAnimationFinish(false)
        ;
        // If the animation is cancelled, isClosing variable is set to false
        this.animation.oncancel = ()=>this.isClosing = false
        ;
    }
    open() {
        // Apply a fixed height on the element
        this.el.style.height = `${this.el.offsetHeight}px`;
        // Force the [open] attribute on the details element
        this.el.open = true;
        // Wait for the next frame to call the expand function
        window.requestAnimationFrame(()=>this.expand()
        );
    }
    expand() {
        // Set the element as "being expanding"
        this.isExpanding = true;
        // Get the current fixed height of the element
        const startHeight = `${this.el.offsetHeight}px`;
        // Calculate the open height of the element (summary height + content height)
        const endHeight = `${this.summary.offsetHeight + this.content.offsetHeight}px`;
        // If there is already an animation running
        if (this.animation) {
            // Cancel the current animation
            this.animation.cancel();
        }
        // Start a WAAPI animation
        this.animation = this.el.animate({
            // Set the keyframes from the startHeight to endHeight
            height: [
                startHeight,
                endHeight
            ]
        }, {
            duration: 400,
            easing: "ease-out"
        });
        // When the animation is complete, call onAnimationFinish()
        this.animation.onfinish = ()=>this.onAnimationFinish(true)
        ;
        // If the animation is cancelled, isExpanding variable is set to false
        this.animation.oncancel = ()=>this.isExpanding = false
        ;
    }
    onAnimationFinish(open) {
        // Set the open attribute based on the parameter
        this.el.open = open;
        // Clear the stored animation
        this.animation = null;
        // Reset isClosing & isExpanding
        this.isClosing = false;
        this.isExpanding = false;
        // Remove the overflow hidden and the fixed height
        this.el.style.height = this.el.style.overflow = "";
    }
    el;
}

;// CONCATENATED MODULE: ./src/components/universal/Markdown/process-tag.ts

function processDetails($) {
    const details = Array.from($.querySelectorAll("details"));
    for (const $details of details){
        const firstEl = $details.children[0];
        if (!firstEl || firstEl.nodeName != "summary".toUpperCase()) {
            continue;
        }
        const parent = $details;
        const $content = document.createElement("div");
        $content.setAttribute("class", "content");
        for(let i = 1, cnt = $details.childElementCount; i < cnt; i++){
            $content.appendChild($details.children[i].cloneNode(true));
        }
        const $newDetails = document.createElement("details");
        $newDetails.append(firstEl, $content);
        new Accordion($newDetails);
        parent.replaceWith($newDetails);
    }
}


/***/ }),

/***/ 70198:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GN": () => (/* reexport safe */ _Table__WEBPACK_IMPORTED_MODULE_4__.GN),
/* harmony export */   "Gt": () => (/* reexport safe */ _Link__WEBPACK_IMPORTED_MODULE_2__.G),
/* harmony export */   "Ln": () => (/* reexport safe */ _Table__WEBPACK_IMPORTED_MODULE_4__.Ln),
/* harmony export */   "Tm": () => (/* reexport safe */ _renderers__WEBPACK_IMPORTED_MODULE_3__.Tm),
/* harmony export */   "Vh": () => (/* reexport safe */ _renderers__WEBPACK_IMPORTED_MODULE_3__.Vh),
/* harmony export */   "d$": () => (/* reexport safe */ _Table__WEBPACK_IMPORTED_MODULE_4__.d$),
/* harmony export */   "h": () => (/* reexport safe */ _renderers__WEBPACK_IMPORTED_MODULE_3__.h),
/* harmony export */   "kH": () => (/* reexport safe */ _renderers__WEBPACK_IMPORTED_MODULE_3__.kH),
/* harmony export */   "wH": () => (/* reexport safe */ _renderers__WEBPACK_IMPORTED_MODULE_3__.wH)
/* harmony export */ });
/* harmony import */ var _Heading__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52751);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35295);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76558);
/* harmony import */ var _renderers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27124);
/* harmony import */ var _Table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(58163);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Heading__WEBPACK_IMPORTED_MODULE_0__, _Image__WEBPACK_IMPORTED_MODULE_1__]);
([_Heading__WEBPACK_IMPORTED_MODULE_0__, _Image__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6299:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ZP": () => (/* binding */ rules)
});

// UNUSED EXPORTS: commentAt, plugins

// EXTERNAL MODULE: external "validator/lib/isMongoId"
var isMongoId_ = __webpack_require__(22281);
var isMongoId_default = /*#__PURE__*/__webpack_require__.n(isMongoId_);
;// CONCATENATED MODULE: ./src/components/universal/Markdown/rules/comment-at.tsx
/*
 * @Author: Innei
 * @Date: 2020-06-11 13:01:08
 * @LastEditTime: 2020-10-17 20:02:42
 * @LastEditors: Innei
 * @FilePath: /web/common/markdown/rules/comment-at.tsx
 * @Coding with Love
 */ 
/**
 * parse (@username) to github user profile
 */ // @ts-ignore
function tokenizeMention(eat, value, silent) {
    const match = /^@(.*?)\s/i.exec(value);
    if (match && isMongoId_default()(match[1])) {
        if (silent) {
            return true;
        }
        try {
            return eat(match[0])({
                type: "commentAt",
                value: match[1]
            });
        // eslint-disable-next-line no-empty
        } catch  {}
    }
}
tokenizeMention.notInLink = true;
tokenizeMention.locator = locateMention;
function locateMention(value, fromIndex) {
    return value.indexOf("@", fromIndex);
}
function mentions() {
    const Parser = this.Parser;
    const tokenizers = Parser.prototype.inlineTokenizers;
    const methods = Parser.prototype.inlineMethods;
    // Add an inline tokenizer (defined in the following example).
    tokenizers.commentAt = tokenizeMention;
    // Run it just before `text`.
    methods.splice(methods.indexOf("text"), 0, "commentAt");
}


;// CONCATENATED MODULE: ./src/components/universal/Markdown/rules/mentions.ts
/*
 * @Author: Innei
 * @Date: 2020-06-11 13:01:08
 * @LastEditTime: 2020-06-12 20:19:16
 * @LastEditors: Innei
 * @FilePath: /mx-web/common/markdown/rules/mentions.ts
 * @Coding with Love
 */ /**
 * parse (@username) to github user profile
 */ function mentions_tokenizeMention(eat, value, silent) {
    const match = /\((@(\w+\b))\)\s?(?!\[.*?\])/.exec(value);
    if (match) {
        if (silent) {
            return true;
        }
        try {
            return eat(match[0])({
                type: "link",
                url: `https://github.com/${match[2]}`,
                children: [
                    {
                        type: "text",
                        value: match[1]
                    }
                ]
            });
        // eslint-disable-next-line no-empty
        } catch  {}
    }
}
mentions_tokenizeMention.notInLink = true;
mentions_tokenizeMention.locator = mentions_locateMention;
function mentions_locateMention(value, fromIndex) {
    return value.indexOf("@", fromIndex);
}
function mentions_mentions() {
    const Parser = this.Parser;
    const tokenizers = Parser.prototype.inlineTokenizers;
    const methods = Parser.prototype.inlineMethods;
    // Add an inline tokenizer (defined in the following example).
    tokenizers.mention = mentions_tokenizeMention;
    // Run it just before `text`.
    methods.splice(methods.indexOf("text"), 0, "mention");
}


;// CONCATENATED MODULE: ./src/components/universal/Markdown/rules/spoiler.ts
/*
 * @Author: Innei
 * @Date: 2020-06-11 13:31:05
 * @LastEditTime: 2020-09-02 20:03:18
 * @LastEditors: Innei
 * @FilePath: /mx-web/common/markdown/rules/spoiler.ts
 * @Coding with Love
 */ function tokenizeSpoiler(eat, value, silent) {
    const match = /^\|\|([\s\S]+?)\|\|(?!\|)/.exec(value);
    if (match) {
        if (silent) {
            return true;
        }
        try {
            return eat(match[0])({
                type: "spoiler",
                value: match[1]
            });
        // eslint-disable-next-line no-empty
        } catch  {}
    }
}
tokenizeSpoiler.notInLink = true;
tokenizeSpoiler.locator = function(value, fromIndex) {
    return value.indexOf("||", fromIndex);
};
function spoiler() {
    const Parser = this.Parser;
    const tokenizers = Parser.prototype.inlineTokenizers;
    const methods = Parser.prototype.inlineMethods;
    // Add an inline tokenizer (defined in the following example).
    tokenizers.spoiler = tokenizeSpoiler;
    // Run it just before `text`.
    methods.splice(methods.indexOf("text"), 0, "spoiler");
}


;// CONCATENATED MODULE: ./src/components/universal/Markdown/rules/index.ts

/*
 * @Author: Innei
 * @Date: 2020-06-11 12:25:50
 * @LastEditTime: 2020-07-21 16:55:56
 * @LastEditors: Innei
 * @FilePath: /mx-web/common/markdown/rules/index.ts
 * @Coding with Love
 */ 


const plugins = {
    mentions: mentions_mentions,
    spoiler: spoiler,
    commentAt: mentions
};
/* harmony default export */ const rules = (Object.values(plugins));


/***/ }),

/***/ 93922:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ ImageSizeMetaContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const ImageSizeMetaContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(new Map());


/***/ })

};
;