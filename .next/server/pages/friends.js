(() => {
var exports = {};
exports.id = 5128;
exports.ids = [5128];
exports.modules = {

/***/ 10559:
/***/ ((module) => {

// Exports
module.exports = {
	"wrap": "ApplyLink_wrap__RgxPy"
};


/***/ }),

/***/ 61731:
/***/ ((module) => {

// Exports
module.exports = {
	"card": "section_card__0ZtF5",
	"border": "section_border__lLRJl"
};


/***/ }),

/***/ 94610:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ ApplyForLink)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_message_popup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15255);
/* harmony import */ var react_message_popup__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_message_popup__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_universal_Icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10298);
/* harmony import */ var _utils_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9908);
/* harmony import */ var _universal_Input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(72726);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10559);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_client__WEBPACK_IMPORTED_MODULE_4__]);
_utils_client__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const initialState = {
    author: "",
    avatar: "",
    description: "",
    email: "",
    url: "",
    name: ""
};
const useFormData = ()=>{
    const { 0: state1 , 1: dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)((state, payload)=>{
        switch(payload.type){
            case "set":
                return {
                    ...state,
                    ...payload.data
                };
            case "reset":
                return initialState;
        }
    }, {
        ...initialState
    });
    return [
        state1,
        dispatch
    ];
};
const ApplyForLink = ()=>{
    const [state, dispatch] = useFormData();
    const handleSubmit = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        const { author , avatar , description: desc , email , url , name  } = state;
        if (!author) {
            react_message_popup__WEBPACK_IMPORTED_MODULE_2__.message.error("\u8BF7\u586B\u5199\u6635\u79F0");
            return;
        }
        if (!avatar) {
            react_message_popup__WEBPACK_IMPORTED_MODULE_2__.message.error("\u8BF7\u586B\u5199\u5934\u50CF");
            return;
        }
        if (!desc) {
            react_message_popup__WEBPACK_IMPORTED_MODULE_2__.message.error("\u8BF7\u586B\u5199\u7B80\u4ECB");
            return;
        }
        if (!email) {
            react_message_popup__WEBPACK_IMPORTED_MODULE_2__.message.error("\u8BF7\u586B\u5199\u90AE\u7BB1");
            return;
        }
        if (!url) {
            react_message_popup__WEBPACK_IMPORTED_MODULE_2__.message.error("\u8BF7\u586B\u5199\u7F51\u5740");
            return;
        }
        if (!name) {
            react_message_popup__WEBPACK_IMPORTED_MODULE_2__.message.error("\u8BF7\u586B\u5199\u7F51\u7AD9\u540D\u79F0");
            return;
        }
        _utils_client__WEBPACK_IMPORTED_MODULE_4__/* .apiClient.link.applyLink */ .x.link.applyLink({
            ...state
        }).then(()=>{
            dispatch({
                type: "reset"
            });
        });
    }, [
        state
    ]);
    const handleReset = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        dispatch({
            type: "reset"
        });
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_6___default().wrap),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                children: "\u6211\u60F3\u548C\u4F60\u4EA4\u670B\u53CB\uFF01"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                action: "#",
                onSubmit: handleSubmit,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_universal_Input__WEBPACK_IMPORTED_MODULE_5__/* .Input */ .I, {
                        placeholder: "\u6635\u79F0 *",
                        required: true,
                        prefix: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Icons__WEBPACK_IMPORTED_MODULE_3__/* .PhUser */ .eD, {}),
                        value: state.author,
                        onChange: (e)=>{
                            dispatch({
                                type: "set",
                                data: {
                                    author: e.target.value
                                }
                            });
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_universal_Input__WEBPACK_IMPORTED_MODULE_5__/* .Input */ .I, {
                        placeholder: "\u7AD9\u70B9\u6807\u9898 *",
                        required: true,
                        prefix: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Icons__WEBPACK_IMPORTED_MODULE_3__/* .MdiFountainPenTip */ .VK, {}),
                        value: state.name,
                        onChange: (e)=>{
                            dispatch({
                                type: "set",
                                data: {
                                    name: e.target.value
                                }
                            });
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_universal_Input__WEBPACK_IMPORTED_MODULE_5__/* .Input */ .I, {
                        placeholder: "\u7F51\u7AD9 * https://",
                        required: true,
                        prefix: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Icons__WEBPACK_IMPORTED_MODULE_3__/* .SiGlyphGlobal */ .lk, {}),
                        value: state.url,
                        onChange: (e)=>{
                            dispatch({
                                type: "set",
                                data: {
                                    url: e.target.value
                                }
                            });
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_universal_Input__WEBPACK_IMPORTED_MODULE_5__/* .Input */ .I, {
                        placeholder: "\u5934\u50CF\u94FE\u63A5 * https://",
                        required: true,
                        prefix: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Icons__WEBPACK_IMPORTED_MODULE_3__/* .RadixIconsAvatar */ .Jb, {}),
                        value: state.avatar,
                        onChange: (e)=>{
                            dispatch({
                                type: "set",
                                data: {
                                    avatar: e.target.value
                                }
                            });
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_universal_Input__WEBPACK_IMPORTED_MODULE_5__/* .Input */ .I, {
                        placeholder: "\u7559\u4E0B\u4F60\u7684\u90AE\u7BB1\u54E6 *",
                        required: true,
                        prefix: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Icons__WEBPACK_IMPORTED_MODULE_3__/* .MdiEmailFastOutline */ ._s, {}),
                        value: state.email,
                        onChange: (e)=>{
                            dispatch({
                                type: "set",
                                data: {
                                    email: e.target.value
                                }
                            });
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_universal_Input__WEBPACK_IMPORTED_MODULE_5__/* .Input */ .I, {
                        multi: true,
                        maxLength: 50,
                        placeholder: "\u63CF\u8FF0 *",
                        required: true,
                        value: state.description,
                        onChange: (e)=>{
                            dispatch({
                                type: "set",
                                data: {
                                    description: e.target.value
                                }
                            });
                        }
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "text-right mt-[5px]",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "btn red mr-[12px]",
                        onClick: handleReset,
                        type: "reset",
                        children: "\u91CD\u7F6E"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        type: "submit",
                        className: "btn yellow",
                        onClick: handleSubmit,
                        children: "\u53D1\u9001"
                    })
                ]
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 87413:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ht": () => (/* binding */ FavoriteSection),
/* harmony export */   "kJ": () => (/* binding */ BannedSection),
/* harmony export */   "rp": () => (/* binding */ OutdateSection),
/* harmony export */   "uF": () => (/* binding */ FriendSection)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84466);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_transition_group__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_universal_Avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44199);
/* harmony import */ var _components_universal_Transition_bottom_up__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9987);
/* harmony import */ var _section_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(61731);
/* harmony import */ var _section_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_section_module_css__WEBPACK_IMPORTED_MODULE_5__);






const FavoriteSection = ({ data  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
        children: data.map((link)=>{
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: link.url,
                        target: "_blank",
                        children: link.name
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "meta",
                        children: link.description || ""
                    })
                ]
            }, link.id);
        })
    });
};
const OutdateSection = ({ data  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
        children: data.map((link)=>{
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        className: "cursor-not-allowed",
                        children: link.name
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "meta",
                        children: link.description || ""
                    })
                ]
            }, link.id);
        })
    });
};
const BannedSection = ({ data  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
        children: data.map((link)=>{
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "cursor-not-allowed",
                    children: link.name
                })
            }, link.id);
        })
    });
};
const friendAvatarWrapperProps = {
    className: "flex-shrink-0 !border-0 bg-light-bg avatar"
};
const FriendSection = ({ data  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_2__.TransitionGroup, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "grid <sm:grid-cols-1 grid-cols-2 gap-6",
            children: data.map((link, i)=>{
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Transition_bottom_up__WEBPACK_IMPORTED_MODULE_4__/* .BottomUpTransitionView */ ._, {
                    timeout: {
                        enter: 100 * i
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Card, {
                        link: link
                    })
                }, link.id);
            })
        })
    });
};
const Card = ({ link  })=>{
    const { 0: focused , 1: setFocus  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
        href: link.url,
        target: "_blank",
        className: (_section_module_css__WEBPACK_IMPORTED_MODULE_5___default().card),
        onMouseEnter: (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
            setFocus(true);
        }, []),
        onMouseLeave: (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
            setFocus(false);
        }, []),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CircleAvatar, {
                focus: focused,
                size: 80,
                src: link.avatar
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                className: "flex flex-col justify-start space-y-2 h-full py-3",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "text-lg",
                        children: link.name
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "text-deepgray text-sm line-clamp-2 break-all",
                        children: link.description
                    })
                ]
            })
        ]
    });
};
const CircleAvatar = (props)=>{
    const { size , src , focus  } = props;
    const C = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>size * Math.PI
    , [
        size
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
        className: "inline-block relative",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Avatar__WEBPACK_IMPORTED_MODULE_3__/* .Avatar */ .q, {
                imageUrl: src,
                wrapperProps: friendAvatarWrapperProps
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: (_section_module_css__WEBPACK_IMPORTED_MODULE_5___default().border),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                        cx: size >> 1,
                        cy: size >> 1,
                        r: size >> 1,
                        style: {
                            strokeDasharray: `${C}px`,
                            strokeDashoffset: !focus ? `${C}px` : "0"
                        }
                    })
                })
            })
        ]
    });
};


/***/ }),

/***/ 79499:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var api_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9378);
/* harmony import */ var components_in_page_Friend_section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87413);
/* harmony import */ var components_universal_Markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56076);
/* harmony import */ var hooks_use_initial_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(92644);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(80352);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(47097);
/* harmony import */ var utils_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9908);
/* harmony import */ var _components_in_page_ApplyLink__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(94610);
/* harmony import */ var _components_layouts_ArticleLayout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(86235);
/* harmony import */ var _components_universal_Seo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(14302);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_universal_Markdown__WEBPACK_IMPORTED_MODULE_3__, lodash_es__WEBPACK_IMPORTED_MODULE_5__, utils__WEBPACK_IMPORTED_MODULE_7__, utils_client__WEBPACK_IMPORTED_MODULE_8__, _components_in_page_ApplyLink__WEBPACK_IMPORTED_MODULE_9__, _components_layouts_ArticleLayout__WEBPACK_IMPORTED_MODULE_10__, _components_universal_Seo__WEBPACK_IMPORTED_MODULE_11__]);
([components_universal_Markdown__WEBPACK_IMPORTED_MODULE_3__, lodash_es__WEBPACK_IMPORTED_MODULE_5__, utils__WEBPACK_IMPORTED_MODULE_7__, utils_client__WEBPACK_IMPORTED_MODULE_8__, _components_in_page_ApplyLink__WEBPACK_IMPORTED_MODULE_9__, _components_layouts_ArticleLayout__WEBPACK_IMPORTED_MODULE_10__, _components_universal_Seo__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const renderTitle = (text)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
        className: "!text-xl headline !mt-12",
        children: text
    });
};
const FriendsView = (props)=>{
    const { banned , collections , friends , outdated  } = props;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_layouts_ArticleLayout__WEBPACK_IMPORTED_MODULE_10__/* .ArticleLayout */ .B, {
        title: "\u670B\u53CB\u4EEC",
        subtitle: "\u6D77\u5185\u5B58\u77E5\u5DF1, \u5929\u6DAF\u82E5\u6BD4\u90BB",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_universal_Seo__WEBPACK_IMPORTED_MODULE_11__/* .SEO */ .H, {
                title: "\u670B\u53CB\u4EEC"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
                className: "article-list",
                children: [
                    friends.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            collections.length !== 0 && renderTitle("\u6211\u7684\u670B\u53CB"),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_in_page_Friend_section__WEBPACK_IMPORTED_MODULE_2__/* .FriendSection */ .uF, {
                                data: friends
                            })
                        ]
                    }),
                    collections.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            friends.length !== 0 && renderTitle("\u6211\u7684\u6536\u85CF"),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_in_page_Friend_section__WEBPACK_IMPORTED_MODULE_2__/* .FavoriteSection */ .ht, {
                                data: collections
                            })
                        ]
                    }),
                    outdated.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            friends.length !== 0 && renderTitle("\u4EE5\u4E0B\u7AD9\u70B9\u65E0\u6CD5\u8BBF\u95EE\uFF0C\u5DF2\u5931\u8054"),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_in_page_Friend_section__WEBPACK_IMPORTED_MODULE_2__/* .OutdateSection */ .rp, {
                                data: outdated
                            })
                        ]
                    }),
                    banned.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            friends.length !== 0 && renderTitle("\u4EE5\u4E0B\u7AD9\u70B9\u4E0D\u5408\u89C4\uFF0C\u5DF2\u88AB\u7981\u6B62"),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_in_page_Friend_section__WEBPACK_IMPORTED_MODULE_2__/* .BannedSection */ .kJ, {
                                data: banned
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "pb-12"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Footer, {})
        ]
    });
};
const _Footer = ()=>{
    const { seo , user: { avatar , name  } ,  } = (0,hooks_use_initial_data__WEBPACK_IMPORTED_MODULE_4__/* .useInitialData */ .L6)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_in_page_ApplyLink__WEBPACK_IMPORTED_MODULE_9__/* .ApplyForLink */ .f, {}, "link"),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_universal_Markdown__WEBPACK_IMPORTED_MODULE_3__/* .Markdown */ .U, {
                wrapperProps: {
                    id: undefined,
                    style: {
                        whiteSpace: "pre-line"
                    }
                },
                renderers: {
                    heading: (props)=>{
                        return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_6__.createElement)(`h${props.level}`, {
                            className: "headline"
                        }, props.children);
                    }
                },
                escapeHtml: false,
                value: [
                    `**在申请友链之前请先将本站加入贵站的友链中**`,
                    `**填写邮箱后, 待通过申请后会发送邮件**`,
                    `**我希望贵站不是商业化门户网站，亦或是植有影响观看体验广告的网站。**`,
                    `**失联站点将会定期移除，非法网站会立即禁止并拉黑。**`,
                    `<br />`,
                    `**本站信息**`, 
                ].join("\n\n") + [
                    "",
                    `**站点标题**: [${seo.title}](${location.protocol + "//" + location.host})`,
                    `**站点描述**: ${seo.description}`,
                    `**主人头像**: [点击下载](${avatar})`,
                    `**主人名字**: ${name}`, 
                ].join("\n")
            }, "md")
        ]
    });
};
const Footer = (0,utils__WEBPACK_IMPORTED_MODULE_7__/* .NoSSR */ .ri)(_Footer);
FriendsView.getInitialProps = async ()=>{
    const { data  } = await utils_client__WEBPACK_IMPORTED_MODULE_8__/* .apiClient.link.getAll */ .x.link.getAll();
    const friends = [];
    const collections = [];
    const outdated = [];
    const banned = [];
    for (const link of data){
        if (link.hide) {
            continue;
        }
        switch(link.state){
            case api_client__WEBPACK_IMPORTED_MODULE_1__/* .LinkState.Banned */ .PT.Banned:
                banned.push(link);
                continue;
            case api_client__WEBPACK_IMPORTED_MODULE_1__/* .LinkState.Outdate */ .PT.Outdate:
                outdated.push(link);
                continue;
        }
        switch(link.type){
            case api_client__WEBPACK_IMPORTED_MODULE_1__/* .LinkType.Friend */ .Un.Friend:
                {
                    friends.push(link);
                    break;
                }
            case api_client__WEBPACK_IMPORTED_MODULE_1__/* .LinkType.Collection */ .Un.Collection:
                {
                    collections.push(link);
                }
        }
    }
    return {
        friends: (0,lodash_es__WEBPACK_IMPORTED_MODULE_5__.shuffle)(friends),
        collections,
        outdated,
        banned
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FriendsView);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 52167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 33104:
/***/ ((module) => {

"use strict";
module.exports = require("camelcase-keys");

/***/ }),

/***/ 68103:
/***/ ((module) => {

"use strict";
module.exports = require("clsx");

/***/ }),

/***/ 71705:
/***/ ((module) => {

"use strict";
module.exports = require("css-spring");

/***/ }),

/***/ 1635:
/***/ ((module) => {

"use strict";
module.exports = require("dayjs");

/***/ }),

/***/ 95468:
/***/ ((module) => {

"use strict";
module.exports = require("dayjs/locale/zh-cn");

/***/ }),

/***/ 84125:
/***/ ((module) => {

"use strict";
module.exports = require("dayjs/plugin/customParseFormat");

/***/ }),

/***/ 67424:
/***/ ((module) => {

"use strict";
module.exports = require("dayjs/plugin/localizedFormat");

/***/ }),

/***/ 43491:
/***/ ((module) => {

"use strict";
module.exports = require("devtools-detector");

/***/ }),

/***/ 21985:
/***/ ((module) => {

"use strict";
module.exports = require("medium-zoom");

/***/ }),

/***/ 36211:
/***/ ((module) => {

"use strict";
module.exports = require("mobx");

/***/ }),

/***/ 45944:
/***/ ((module) => {

"use strict";
module.exports = require("mobx-react-lite");

/***/ }),

/***/ 16641:
/***/ ((module) => {

"use strict";
module.exports = require("next-seo");

/***/ }),

/***/ 95832:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 71853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 30503:
/***/ ((module) => {

"use strict";
module.exports = require("randomcolor");

/***/ }),

/***/ 16689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 66405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 19785:
/***/ ((module) => {

"use strict";
module.exports = require("react-intersection-observer");

/***/ }),

/***/ 29346:
/***/ ((module) => {

"use strict";
module.exports = require("react-lazyload");

/***/ }),

/***/ 13702:
/***/ ((module) => {

"use strict";
module.exports = require("react-markdown");

/***/ }),

/***/ 15255:
/***/ ((module) => {

"use strict";
module.exports = require("react-message-popup");

/***/ }),

/***/ 84466:
/***/ ((module) => {

"use strict";
module.exports = require("react-transition-group");

/***/ }),

/***/ 69755:
/***/ ((module) => {

"use strict";
module.exports = require("react-use");

/***/ }),

/***/ 20997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 4579:
/***/ ((module) => {

"use strict";
module.exports = require("remove-markdown");

/***/ }),

/***/ 22281:
/***/ ((module) => {

"use strict";
module.exports = require("validator/lib/isMongoId");

/***/ }),

/***/ 69915:
/***/ ((module) => {

"use strict";
module.exports = import("js-cookie");;

/***/ }),

/***/ 80352:
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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4225,8034,9908,2672,4302,298,9987,6235,6264,2726,1113,6076], () => (__webpack_exec__(79499)));
module.exports = __webpack_exports__;

})();