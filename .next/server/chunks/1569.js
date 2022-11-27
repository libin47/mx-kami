exports.id = 1569;
exports.ids = [1569];
exports.modules = {

/***/ 9215:
/***/ ((module) => {

// Exports
module.exports = {
	"placeholder-image": "Image_placeholder-image__CL0os",
	"hide": "Image_hide__M6yqQ",
	"image-hide": "Image_image-hide__sxvqC",
	"lazyload-image": "Image_lazyload-image__XLjJg",
	"blur": "Image_blur__Vc5rh",
	"blur-dark": "Image_blur-dark__OmBDG",
	"img-alt": "Image_img-alt__R49ae"
};


/***/ }),

/***/ 1569:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ ImageLazy)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var medium_zoom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1985);
/* harmony import */ var medium_zoom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(medium_zoom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9346);
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_lazyload__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks_use_calculate_size__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4510);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2649);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9215);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_use_calculate_size__WEBPACK_IMPORTED_MODULE_5__, _utils__WEBPACK_IMPORTED_MODULE_6__]);
([_hooks_use_calculate_size__WEBPACK_IMPORTED_MODULE_5__, _utils__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const Image = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.memo)(({ src , alt , popup =false , loaded , loaderFn  })=>{
    const imageRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (!popup) {
            return;
        }
        const $image = imageRef.current;
        if ($image) {
            medium_zoom__WEBPACK_IMPORTED_MODULE_2___default()($image, {
                background: "var(--light-bg)",
                margin: 50
            });
        }
    }, [
        popup
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        loaderFn();
    }, [
        loaderFn
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: clsx__WEBPACK_IMPORTED_MODULE_1___default()((_index_module_css__WEBPACK_IMPORTED_MODULE_7___default()["lazyload-image"]), !loaded && (_index_module_css__WEBPACK_IMPORTED_MODULE_7___default()["image-hide"])),
            "data-status": loaded ? "loaded" : "loading",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                src: src,
                alt: alt,
                ref: imageRef,
                loading: "lazy"
            })
        })
    });
});
const ImageLazy = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.memo)(/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)((props, ref)=>{
    const { defaultImage , src , alt =src , height , width , backgroundColor , popup =false , style , overflowHidden =false , ...rest } = props;
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useImperativeHandle)(ref, ()=>{
        return {
            status: loaded ? "loaded" : "loading"
        };
    });
    const realImageRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
    const placeholderRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
    const wrapRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
    const [calculatedSize, calculateDimensions] = (0,_hooks_use_calculate_size__WEBPACK_IMPORTED_MODULE_5__/* .useCalculateSize */ .L)();
    const { 0: loaded , 1: setLoad  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const loaderFn = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(()=>{
        if (!src) {
            return;
        }
        const image = new window.Image();
        image.src = src;
        if (!height && !width && wrapRef.current?.parentElement?.parentElement) {
            calculateDimensions(wrapRef.current?.parentElement?.parentElement, image);
        }
        image.onload = ()=>{
            setLoad(true);
            try {
                if (placeholderRef && placeholderRef.current) {
                    placeholderRef.current.classList.add("hide");
                }
            // eslint-disable-next-line no-empty
            } catch  {}
        };
        image.onerror = ()=>{
            try {
                if (placeholderRef && placeholderRef.current) {
                    placeholderRef.current.innerHTML = `<p style="color: currentColor; filter: invert(100%) brightness(1.5)"><span>图片加载失败!</span><br/>
          <a href="${(0,_utils__WEBPACK_IMPORTED_MODULE_6__/* .escapeHTMLTag */ .nd)(image.src)}" target="_blank">${(0,_utils__WEBPACK_IMPORTED_MODULE_6__/* .escapeHTMLTag */ .nd)(image.src)}</a></p>`;
                    placeholderRef.current.style.zIndex = "2";
                }
            // eslint-disable-next-line no-empty
            } catch  {}
        };
    }, [
        calculateDimensions,
        height,
        src,
        width
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("figure", {
        style: style,
        className: "inline-block",
        children: [
            defaultImage ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                src: defaultImage,
                alt: alt,
                ...rest,
                ref: realImageRef
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("transition-none relative max-w-full m-auto inline-block min-h-[1px]", rest.className),
                style: {
                    height: loaded ? undefined : height || calculatedSize.height,
                    width: loaded ? undefined : width || calculatedSize.width,
                    ...overflowHidden ? {
                        overflow: "hidden",
                        borderRadius: "3px"
                    } : {}
                },
                ref: wrapRef,
                "data-info": JSON.stringify({
                    height,
                    width,
                    calculatedSize
                }),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_lazyload__WEBPACK_IMPORTED_MODULE_4___default()), {
                    offset: 300,
                    once: true,
                    placeholder: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PlaceholderImage, {
                        height: height,
                        width: width,
                        backgroundColor: backgroundColor
                    }),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Image, {
                            src: src,
                            alt: alt.replace(/^[!¡]/, "") || "",
                            popup: popup,
                            loaded: loaded,
                            loaderFn: loaderFn
                        }),
                        !loaded && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PlaceholderImage, {
                            height: height,
                            width: width,
                            backgroundColor: backgroundColor
                        })
                    ]
                })
            }),
            alt && (alt.startsWith("!") || alt.startsWith("\xa1")) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figcaption", {
                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_7___default()["img-alt"]),
                children: alt.slice(1)
            })
        ]
    });
}));
const PlaceholderImage = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.memo)(/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)((props, ref)=>{
    const { backgroundColor , height , width  } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()((_index_module_css__WEBPACK_IMPORTED_MODULE_7___default()["placeholder-image"]), props.className),
        ref: ref,
        style: {
            height,
            width,
            color: backgroundColor
        }
    });
}));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4510:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ useCalculateSize)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2649);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils__WEBPACK_IMPORTED_MODULE_1__]);
_utils__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const initialState = {
    height: 0,
    width: 0
};
const useCalculateSize = ()=>{
    const { 0: state1 , 1: dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)((state, payload)=>{
        switch(payload.type){
            case "set":
                return {
                    height: payload.height,
                    width: payload.width
                };
            case "reset":
                return initialState;
            default:
                return state;
        }
    }, initialState);
    const timer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    const calculateOnImageEl = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((parentEl, imageEl)=>{
        if (!parentEl || !imageEl) {
            return;
        }
        timer.current = setInterval(()=>{
            const w = imageEl.naturalWidth, h = imageEl.naturalHeight;
            if (w && h) {
                clearInterval(timer.current);
                const parentElWidth = getComputedStyle(parentEl).width;
                const calculated = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .calculateDimensions */ .jg)(w, h, {
                    height: Infinity,
                    width: parseInt(parentElWidth)
                });
                dispatch({
                    type: "set",
                    height: calculated.height,
                    width: calculated.width
                });
            }
        }, 30);
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        return ()=>{
            clearInterval(timer.current);
        };
    }, []);
    return [
        state1,
        calculateOnImageEl
    ];
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;