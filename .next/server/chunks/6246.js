"use strict";
exports.id = 6246;
exports.ids = [6246];
exports.modules = {

/***/ 2863:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ axiosAdaptor)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const $http = axios__WEBPACK_IMPORTED_MODULE_0___default().create({});
// ignore axios `method` declare not assignable to `Method`
const axiosAdaptor = Object.preventExtensions({
    get default () {
        return $http;
    },
    responseWrapper: {},
    get (url, options) {
        // @ts-ignore
        return $http.get(url, options);
    },
    post (url, options) {
        const { data , ...config } = options || {};
        // @ts-ignore
        return $http.post(url, data, config);
    },
    put (url, options) {
        const { data , ...config } = options || {};
        // @ts-ignore
        return $http.put(url, data, config);
    },
    delete (url, options) {
        const { ...config } = options || {};
        // @ts-ignore
        return $http.delete(url, config);
    },
    patch (url, options) {
        const { data , ...config } = options || {};
        // @ts-ignore
        return $http.patch(url, data, config);
    }
});


/***/ }),

/***/ 7876:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "PT": () => (/* reexport */ LinkState),
  "Un": () => (/* reexport */ LinkType),
  "Lu": () => (/* reexport */ RequestError),
  "Mh": () => (/* reexport */ allControllers),
  "U": () => (/* binding */ camelcaseKeys),
  "eI": () => (/* reexport */ createClient)
});

// UNUSED EXPORTS: AggregateController, AlbumController, CategoryController, CategoryType, CommentController, CommentState, EnumPageType, LinkController, NoteController, PageController, PhotoController, PostController, ProjectController, QAController, RecentlyController, RefType, SayController, SearchController, ServerlessController, SnippetController, SnippetType, TimelineType, TopicController, UserController, allContollerNames, camelcaseKeysDeep

// EXTERNAL MODULE: external "camelcase-keys"
var external_camelcase_keys_ = __webpack_require__(3104);
var external_camelcase_keys_default = /*#__PURE__*/__webpack_require__.n(external_camelcase_keys_);
;// CONCATENATED MODULE: ./src/api-client/utils/index.ts
const isPlainObject = (obj)=>isObject(obj) && Object.prototype.toString.call(obj) === "[object Object]" && Object.getPrototypeOf(obj) === Object.prototype
;
const sortOrderToNumber = (order)=>{
    return ({
        asc: 1,
        desc: -1
    })[order] || 1;
};
const isObject = (obj)=>obj && typeof obj === "object"
;
const destructureData = (payload)=>{
    if (typeof payload !== "object") {
        return payload;
    }
    if (payload === null) {
        return payload;
    }
    const data = payload.data;
    const dataIsPlainObject = isPlainObject(data);
    if (dataIsPlainObject && Object.keys(payload).length === 1) {
        const d = Object.assign({}, data);
        // attach raw onto new data
        attachRawFromOneToAnthor(payload, d);
        return d;
    }
    return payload;
};
const attachRawFromOneToAnthor = (from, to)=>{
    if (!from || !isObject(to)) {
        return;
    }
    from.$raw && Object.defineProperty(to, "$raw", {
        value: {
            ...from.$raw
        },
        enumerable: false
    });
    from.$request && Object.defineProperty(to, "$request", {
        value: {
            ...from.$request
        },
        enumerable: false
    });
};

;// CONCATENATED MODULE: ./src/api-client/utils/auto-bind.ts
// @ts-nocheck
// @copy: https://github.com/sindresorhus/auto-bind/blob/main/index.js
// Gets all non-builtin properties up the prototype chain.
const getAllProperties = (object)=>{
    const properties = new Set();
    do {
        for (const key of Reflect.ownKeys(object)){
            properties.add([
                object,
                key
            ]);
        }
    }while ((object = Reflect.getPrototypeOf(object)) && object !== Object.prototype);
    return properties;
};
function autoBind(self, { include , exclude  } = {}) {
    const filter = (key)=>{
        const match = (pattern)=>typeof pattern === "string" ? key === pattern : pattern.test(key)
        ;
        if (include) {
            return include.some(match);
        }
        if (exclude) {
            return !exclude.some(match);
        }
        return true;
    };
    for (const [object, key1] of getAllProperties(self.constructor.prototype)){
        if (key1 === "constructor" || !filter(key1)) {
            continue;
        }
        const descriptor = Reflect.getOwnPropertyDescriptor(object, key1);
        if (descriptor && typeof descriptor.value === "function") {
            self[key1] = self[key1].bind(self);
        }
    }
    return self;
}

;// CONCATENATED MODULE: ./src/api-client/controllers/aggregate.ts


class AggregateController {
    base;
    name;
    constructor(client){
        this.client = client;
        this.base = "aggregate";
        this.name = "aggregate";
        autoBind(this);
    }
    get proxy() {
        return this.client.proxy(this.base);
    }
    /**
   * 获取聚合数据
   */ getAggregateData() {
        return this.proxy.get();
    }
    /**
   * 获取最新发布的内容
   */ getTop(size = 5) {
        return this.proxy.top.get({
            params: {
                size
            }
        });
    }
    getTimeline(options) {
        const { sort , type , year  } = options || {};
        return this.proxy.timeline.get({
            params: {
                sort: sort && sortOrderToNumber(sort),
                type,
                year
            }
        });
    }
    /**
   * 获取聚合数据统计
   */ getStat() {
        return this.proxy.stat.get();
    }
    client;
}

;// CONCATENATED MODULE: ./src/api-client/core/error.ts
class RequestError extends Error {
    constructor(message, status, path, raw){
        super(message);
        this.status = status;
        this.path = path;
        this.raw = raw;
    }
    status;
    path;
    raw;
}

;// CONCATENATED MODULE: ./src/api-client/models/category.ts
var CategoryType;
(function(CategoryType) {
    CategoryType[CategoryType["Category"] = 0] = "Category";
    CategoryType[CategoryType["Tag"] = 1] = "Tag";
})(CategoryType || (CategoryType = {}));

;// CONCATENATED MODULE: ./src/api-client/controllers/category.ts




class CategoryController {
    name;
    base;
    constructor(client){
        this.client = client;
        this.name = "category";
        this.base = "categories";
        autoBind(this);
    }
    get proxy() {
        return this.client.proxy(this.base);
    }
    getAllCategories() {
        return this.proxy.get({
            params: {
                type: CategoryType.Category
            }
        });
    }
    getAllTags() {
        return this.proxy.get({
            params: {
                type: CategoryType.Tag
            }
        });
    }
    async getCategoryDetail(ids) {
        if (typeof ids === "string") {
            const data = await this.proxy.get({
                params: {
                    ids
                }
            });
            const result = Object.values(data.entries)[0];
            attachRawFromOneToAnthor(data, result);
            return result;
        } else if (Array.isArray(ids)) {
            const data = await this.proxy.get({
                params: {
                    ids: ids.join(",")
                }
            });
            const entries = data?.entries;
            if (!entries) {
                throw new RequestError("data structure error", 500, data.$request.path, data);
            }
            const map = new Map(Object.entries(entries).map(([id, value])=>[
                    id.toLowerCase(),
                    value
                ]
            ));
            attachRawFromOneToAnthor(data, map);
            return map;
        }
    }
    async getCategoryByIdOrSlug(idOrSlug) {
        const res = await this.proxy(idOrSlug).get();
        return destructureData(res);
    }
    async getTagByName(name) {
        const res = await this.proxy(name).get({
            params: {
                tag: 1
            }
        });
        return res;
    }
    client;
}

;// CONCATENATED MODULE: ./src/api-client/controllers/comment.ts

class CommentController {
    base;
    name;
    constructor(client){
        this.client = client;
        this.base = "comments";
        this.name = "comment";
        autoBind(this);
    }
    get proxy() {
        return this.client.proxy(this.base);
    }
    /**
   * 根据 comment id 获取评论, 包括子评论
   */ getById(id) {
        return this.proxy(id).get();
    }
    /**
   * 获取文章的评论列表
   * @param refId 文章 Id
   */ getByRefId(refId, pagination = {}) {
        const { page , size  } = pagination;
        return this.proxy.ref(refId).get({
            params: {
                page: page || 1,
                size: size || 10
            }
        });
    }
    /**
   * 评论
   */ comment(refId, data) {
        return this.proxy(refId).post({
            data
        });
    }
    /**
   * 回复评论
   */ reply(commentId, data) {
        return this.proxy.reply(commentId).post({
            data
        });
    }
    client;
}

;// CONCATENATED MODULE: ./src/api-client/controllers/base.ts

class BaseCrudController {
    base;
    constructor(client){
        this.client = client;
        autoBind(this);
    }
    get proxy() {
        return this.client.proxy(this.base);
    }
    getById(id) {
        return this.proxy(id).get();
    }
    getAll() {
        return this.proxy.all.get();
    }
    /**
   * 带分页的查询
   * @param page
   * @param perPage
   */ getAllPaginated(page, perPage) {
        return this.proxy.get({
            params: {
                page,
                size: perPage
            }
        });
    }
    client;
}

;// CONCATENATED MODULE: ./src/api-client/controllers/link.ts


class LinkController extends BaseCrudController {
    constructor(client){
        super(client);
        this.client = client;
        this.name = [
            "link",
            "friend"
        ];
        this.base = "links";
        autoBind(this);
    }
    // 是否可以申请友链
    async canApplyLink() {
        const { can  } = await this.proxy.audit.get();
        return can;
    }
    // 申请友链
    async applyLink(data) {
        return await this.proxy.audit.post({
            data
        });
    }
    name;
    base;
    client;
}

;// CONCATENATED MODULE: ./src/api-client/controllers/note.ts

class NoteController {
    base;
    name;
    constructor(client){
        this.client = client;
        this.base = "notes";
        this.name = "note";
        autoBind(this);
    }
    get proxy() {
        return this.client.proxy(this.base);
    }
    /**
   * 最新日记
   */ getLatest() {
        return this.proxy.latest.get();
    }
    /**
   * 获取一篇日记
   * @param id id | nid
   * @param answer 访问密码
   */ getNoteById(id, answer) {
        if (typeof id === "number") {
            return this.proxy.nid(id.toString()).get({
                params: {
                    answer
                }
            });
        } else {
            return this.proxy(id).get({
                params: {
                    answer
                }
            });
        }
    }
    /**
   * 日记列表分页
   */ getList(page = 1, perPage = 10, options = {}) {
        const { select , sortBy , sortOrder , year  } = options;
        return this.proxy.get({
            params: {
                page,
                size: perPage,
                select: select?.join(" "),
                sortBy,
                sortOrder,
                year
            }
        });
    }
    /**
   * 获取当前日记的上下各 n / 2 篇日记
   */ getMiddleList(id, size = 5) {
        return this.proxy.list(id).get({
            params: {
                size
            }
        });
    }
    /**
   * 喜欢这篇日记
   */ likeIt(id) {
        return this.proxy.like(id).get();
    }
    /**
   * 获取专栏内的所有日记
   */ getNoteByTopicId(topicId, page = 1, size = 10, sortOptions = {}) {
        return this.proxy.topics(topicId).get({
            params: {
                page,
                size,
                ...sortOptions
            }
        });
    }
    client;
}

;// CONCATENATED MODULE: ./src/api-client/controllers/page.ts

class PageController {
    constructor(client){
        this.client = client;
        this.base = "pages";
        this.name = "page";
        autoBind(this);
    }
    base;
    name;
    get proxy() {
        return this.client.proxy(this.base);
    }
    /**
   * 页面列表
   */ getList(page = 1, perPage = 10, options = {}) {
        const { select , sortBy , sortOrder  } = options;
        return this.proxy.get({
            params: {
                page,
                size: perPage,
                select: select?.join(" "),
                sortBy,
                sortOrder
            }
        });
    }
    /**
   * 页面详情
   */ getById(id) {
        return this.proxy(id).get();
    }
    /**
   * 根据路径获取页面
   * @param slug 路径
   * @returns
   */ getBySlug(slug) {
        return this.proxy.slug(slug).get({});
    }
    client;
}

;// CONCATENATED MODULE: ./src/api-client/controllers/post.ts

class PostController {
    constructor(client){
        this.client = client;
        this.base = "posts";
        this.name = "post";
        autoBind(this);
    }
    base;
    name;
    get proxy() {
        return this.client.proxy(this.base);
    }
    /**
   * 获取文章列表分页
   * @param page
   * @param perPage
   * @returns
   */ getList(page = 1, perPage = 10, options = {}) {
        const { select , sortBy , sortOrder , year  } = options;
        return this.proxy.get({
            params: {
                page,
                size: perPage,
                select: select?.join(" "),
                sortBy,
                sortOrder,
                year
            }
        });
    }
    getPost(idOrCategoryName, slug) {
        if (arguments.length == 1) {
            return this.proxy(idOrCategoryName).get();
        } else {
            return this.proxy(idOrCategoryName)(slug).get();
        }
    }
    /**
   * 获取最新的文章
   */ getLatest() {
        return this.proxy.latest.get();
    }
    /**
   * 点赞
   */ thumbsUp(id) {
        return this.proxy("_thumbs-up").get({
            params: {
                id
            }
        });
    }
    client;
}

;// CONCATENATED MODULE: ./src/api-client/controllers/project.ts


class ProjectController extends BaseCrudController {
    constructor(client){
        super(client);
        this.client = client;
        this.base = "projects";
        this.name = "project";
        autoBind(this);
    }
    base;
    name;
    client;
}

;// CONCATENATED MODULE: ./src/api-client/controllers/recently.ts

class RecentlyController {
    base;
    name;
    constructor(client){
        this.client = client;
        this.base = "recently";
        this.name = [
            "recently",
            "shorthand"
        ];
        autoBind(this);
    }
    get proxy() {
        return this.client.proxy(this.base);
    }
    /**
   * 获取最新一条
   */ getLatestOne() {
        return this.proxy.latest.get();
    }
    getAll() {
        return this.proxy.all.get();
    }
    getList(before, after, size) {
        return this.proxy.get({
            params: {
                before,
                after,
                size
            }
        });
    }
    client;
}

;// CONCATENATED MODULE: ./src/api-client/controllers/say.ts


class SayController extends BaseCrudController {
    base;
    name;
    constructor(client){
        super(client);
        this.client = client;
        this.base = "says";
        this.name = "say";
        autoBind(this);
    }
    get proxy() {
        return this.client.proxy(this.base);
    }
    /**
   * 获取随机一条
   */ getRandom() {
        return this.proxy.random.get();
    }
    client;
}

;// CONCATENATED MODULE: ./src/api-client/controllers/severless.ts

class ServerlessController {
    base;
    name;
    constructor(client){
        this.client = client;
        this.base = "serverless";
        this.name = "serverless";
        autoBind(this);
    }
    get proxy() {
        return this.client.proxy(this.base);
    }
    getByReferenceAndName(reference, name) {
        return this.proxy(reference)(name).get();
    }
    client;
}

;// CONCATENATED MODULE: ./src/api-client/controllers/topic.ts


class TopicController extends BaseCrudController {
    base;
    name;
    constructor(client){
        super(client);
        this.client = client;
        this.base = "topics";
        this.name = "topic";
        autoBind(this);
    }
    get proxy() {
        return this.client.proxy(this.base);
    }
    getTopicBySlug(slug) {
        return this.proxy.slug(slug).get();
    }
    client;
}

;// CONCATENATED MODULE: ./src/api-client/controllers/search.ts

class SearchController {
    base;
    name;
    constructor(client){
        this.client = client;
        this.base = "search";
        this.name = "search";
        autoBind(this);
    }
    get proxy() {
        return this.client.proxy(this.base);
    }
    search(type, keyword, options = {}) {
        return this.proxy(type).get({
            params: {
                keyword,
                ...options
            }
        });
    }
    /**
   * 从 algolya 搜索
   * https://www.algolia.com/doc/api-reference/api-methods/search/
   * @param keyword
   * @param options
   * @returns
   */ searchByAlgolia(keyword, options) {
        return this.proxy("algolia").get({
            params: {
                keyword,
                ...options
            }
        });
    }
    client;
}

;// CONCATENATED MODULE: ./src/api-client/controllers/snippet.ts

class SnippetController {
    base;
    name;
    constructor(client){
        this.client = client;
        this.base = "snippets";
        this.name = "snippet";
        autoBind(this);
    }
    get proxy() {
        return this.client.proxy(this.base);
    }
    getById(id) {
        return this.proxy(id).get();
    }
    getByReferenceAndName(reference, name) {
        return this.proxy(reference)(name).get();
    }
    client;
}

;// CONCATENATED MODULE: ./src/api-client/controllers/user.ts

class UserController {
    constructor(client){
        this.client = client;
        this.base = "master";
        this.name = [
            "user",
            "master"
        ];
        autoBind(this);
    }
    base;
    name;
    get proxy() {
        return this.client.proxy(this.base);
    }
    getMasterInfo() {
        return this.proxy.get();
    }
    login(username, password) {
        return this.proxy.login.post({
            data: {
                username,
                password
            }
        });
    }
    checkTokenValid(token) {
        return this.proxy.check_logged.get({
            params: {
                token: "bearer " + token.replace(/^Bearer\s/i, "")
            }
        });
    }
    client;
}

;// CONCATENATED MODULE: ./src/api-client/controllers/album.ts

class AlbumController {
    name;
    base;
    constructor(client){
        this.client = client;
        this.name = "album";
        this.base = "albums";
        autoBind(this);
    }
    get proxy() {
        return this.client.proxy(this.base);
    }
    getAllAlbums() {
        return this.proxy.get({
            params: {}
        });
    }
    getAlbum(slug) {
        return this.proxy(slug).get();
    }
    client;
}

;// CONCATENATED MODULE: ./src/api-client/controllers/photo.ts

class PhotoController {
    name;
    base;
    constructor(client){
        this.client = client;
        this.name = "photo";
        this.base = "photos";
        autoBind(this);
    }
    get proxy() {
        return this.client.proxy(this.base);
    }
    getPhotoBySlug(album, slug) {
        return this.proxy(album)(slug).get();
    }
    getPhotoByID(id) {
        return this.proxy(id).get();
    }
    client;
}

;// CONCATENATED MODULE: ./src/api-client/controllers/QA.ts

class QAController {
    name;
    base;
    constructor(client){
        this.client = client;
        this.name = "QA";
        this.base = "QA";
        autoBind(this);
    }
    get proxy() {
        return this.client.proxy(this.base);
    }
    getQuestionByID(id) {
        return this.proxy(id).get();
    }
    client;
}

;// CONCATENATED MODULE: ./src/api-client/controllers/index.ts


















const allControllers = [
    AlbumController,
    AggregateController,
    CategoryController,
    CommentController,
    LinkController,
    NoteController,
    PageController,
    PostController,
    ProjectController,
    PhotoController,
    QAController,
    RecentlyController,
    SayController,
    SearchController,
    SnippetController,
    ServerlessController,
    TopicController,
    UserController, 
];
const allContollerNames = [
    "album",
    "aggregate",
    "category",
    "comment",
    "link",
    "note",
    "page",
    "post",
    "project",
    "photo",
    "qa",
    "recently",
    "say",
    "search",
    "snippet",
    "serverless",
    "topic",
    "user",
    // alias,
    "friend",
    "master",
    "shorthand", 
];


;// CONCATENATED MODULE: ./src/api-client/utils/path.ts
const resolveFullPath = (endpoint, path)=>{
    if (!path.startsWith("/")) {
        path = `/${path}`;
    }
    return `${endpoint}${path}`;
};

;// CONCATENATED MODULE: ./src/api-client/core/attach-request.ts
function attachRequestMethod(target) {
    Object.defineProperty(target, "$$get", {
        value (url, options) {
            // HINT: method get only accept search params;
            const { params ={} , ...rest } = options;
            const qs = handleSearchParams(params);
            return target.instance.get(`${url}${qs ? `${`?${qs}`}` : ""}`, rest);
        }
    });
    [
        "put",
        "post",
        "patch",
        "delete"
    ].forEach((method)=>{
        Object.defineProperty(target, `$$${method}`, {
            value (path, options) {
                return target.instance[method](path, options);
            }
        });
    });
}
// FIXME: only support string value
function handleSearchParams(obj) {
    if (!obj && typeof obj !== "object") {
        throw new TypeError("params must be object.");
    }
    if (obj instanceof URLSearchParams) {
        return obj.toString();
    }
    const search = new URLSearchParams();
    Object.entries(obj).forEach(([k, v])=>{
        if (typeof v === "undefined" || Object.prototype.toString.call(v) === "[object Null]") {
            return;
        }
        search.set(k, v);
    });
    return search.toString();
}

;// CONCATENATED MODULE: ./src/api-client/core/client.ts






const methodPrefix = "_$";
class HTTPClient {
    _proxy;
    constructor(_endpoint, _adaptor, options = {}){
        this._endpoint = _endpoint;
        this._adaptor = _adaptor;
        this.options = options;
        this._endpoint = _endpoint.replace(/\/*$/, "").replace("localhost", "127.0.0.1");
        this._proxy = this.buildRoute(this)();
        this.initGetClient();
        attachRequestMethod(this);
    }
    initGetClient() {
        for (const name of allContollerNames){
            Object.defineProperty(this, name, {
                get () {
                    const client = Reflect.get(this, `${methodPrefix}${name}`);
                    if (!client) {
                        throw new ReferenceError(`${name.charAt(0).toUpperCase() + name.slice(1)} Client not inject yet, please inject with client.injectClients(...)`);
                    }
                    return client;
                },
                configurable: false,
                enumerable: false
            });
        }
    }
    injectControllers(Controller, ...rest) {
        Controller = Array.isArray(Controller) ? Controller : [
            Controller,
            ...rest
        ];
        for (const Client of Controller){
            const cl = new Client(this);
            if (Array.isArray(cl.name)) {
                for (const name of cl.name){
                    attach.call(this, name, cl);
                }
            } else {
                attach.call(this, cl.name, cl);
            }
        }
        function attach(name, cl) {
            Object.defineProperty(this, `${methodPrefix}${name.toLowerCase()}`, {
                get () {
                    return cl;
                },
                enumerable: false,
                configurable: false
            });
        }
    }
    get endpoint() {
        return this._endpoint;
    }
    get instance() {
        return this._adaptor;
    }
    request(options) {
        return this[`$$${String(options.method || "get").toLowerCase()}`](options.url, options);
    }
    get proxy() {
        return this._proxy;
    }
    buildRoute(manager) {
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        const noop = ()=>{};
        const methods = [
            "get",
            "post",
            "delete",
            "patch",
            "put"
        ];
        const reflectors = [
            "toString",
            "valueOf",
            "inspect",
            "constructor",
            Symbol.toPrimitive, 
        ];
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const that = this;
        return ()=>{
            const route = [
                ""
            ];
            const handler = {
                get (target, name) {
                    if (reflectors.includes(name)) return (withBase)=>{
                        if (withBase) {
                            const path = resolveFullPath(that.endpoint, route.join("/"));
                            route.length = 0;
                            return path;
                        } else {
                            const path = route.join("/");
                            route.length = 0;
                            return path.startsWith("/") ? path : `/${path}`;
                        }
                    };
                    if (methods.includes(name)) {
                        return async (options)=>{
                            const url = resolveFullPath(that.endpoint, route.join("/"));
                            route.length = 0;
                            let res;
                            try {
                                res = await manager.request({
                                    method: name,
                                    ...options,
                                    url
                                });
                            } catch (e) {
                                let message = e.message;
                                let code = e.code || e.status || e.statusCode || e.response?.status || e.response?.statusCode || e.response?.code || 500;
                                if (that.options.getCodeMessageFromException) {
                                    const errorInfo = that.options.getCodeMessageFromException(e);
                                    message = errorInfo.message || message;
                                    code = errorInfo.code || code;
                                }
                                throw new RequestError(message, code, url, e);
                            }
                            const data = res.data;
                            if (!data) {
                                return null;
                            }
                            const transform = Array.isArray(data) || isPlainObject(data) ? external_camelcase_keys_default()(data, {
                                deep: true
                            }) : data;
                            if (transform && typeof transform === "object") {
                                Object.defineProperty(transform, "$raw", {
                                    get () {
                                        return res;
                                    },
                                    enumerable: false,
                                    configurable: false
                                });
                                // attach request config onto response
                                Object.defineProperty(transform, "$request", {
                                    get () {
                                        return {
                                            url,
                                            method: name,
                                            options
                                        };
                                    },
                                    enumerable: false
                                });
                            }
                            return transform;
                        };
                    }
                    route.push(name);
                    return new Proxy(noop, handler);
                },
                // @ts-ignore
                apply (target, _, args) {
                    route.push(...args.filter((x)=>x !== null
                    ));
                    return new Proxy(noop, handler);
                }
            };
            return new Proxy(noop, handler);
        };
    }
    _endpoint;
    _adaptor;
    options;
}
function createClient(adapter) {
    return (endpoint, options)=>{
        const client = new HTTPClient(endpoint, adapter, options);
        const { controllers  } = options || {};
        if (controllers) {
            client.injectControllers(controllers);
        }
        return client;
    };
}

;// CONCATENATED MODULE: ./src/api-client/core/index.ts



;// CONCATENATED MODULE: ./src/api-client/models/aggregate.ts
var TimelineType;
(function(TimelineType) {
    TimelineType[TimelineType["Post"] = 0] = "Post";
    TimelineType[TimelineType["Note"] = 1] = "Note";
})(TimelineType || (TimelineType = {}));

;// CONCATENATED MODULE: ./src/api-client/models/comment.ts
var RefType;
(function(RefType) {
    RefType["Page"] = "Page";
    RefType["Post"] = "Post";
    RefType["Note"] = "Note";
})(RefType || (RefType = {}));
var CommentState;
(function(CommentState) {
    CommentState[CommentState["Unread"] = 0] = "Unread";
    CommentState[CommentState["Read"] = 1] = "Read";
    CommentState[CommentState["Junk"] = 2] = "Junk";
})(CommentState || (CommentState = {}));

;// CONCATENATED MODULE: ./src/api-client/models/link.ts
var LinkType;
(function(LinkType) {
    LinkType[LinkType["Friend"] = 0] = "Friend";
    LinkType[LinkType["Collection"] = 1] = "Collection";
})(LinkType || (LinkType = {}));
var LinkState;
(function(LinkState) {
    LinkState[LinkState["Pass"] = 0] = "Pass";
    LinkState[LinkState["Audit"] = 1] = "Audit";
    LinkState[LinkState["Outdate"] = 2] = "Outdate";
    LinkState[LinkState["Banned"] = 3] = "Banned";
})(LinkState || (LinkState = {}));

;// CONCATENATED MODULE: ./src/api-client/models/page.ts
var EnumPageType;
(function(EnumPageType) {
    EnumPageType["md"] = "md";
    EnumPageType["html"] = "html";
    EnumPageType["frame"] = "frame";
})(EnumPageType || (EnumPageType = {}));

;// CONCATENATED MODULE: ./src/api-client/models/snippet.ts
var SnippetType;
(function(SnippetType) {
    SnippetType["JSON"] = "json";
    SnippetType[// Function = 'function',
    "Text"] = "text";
    SnippetType["YAML"] = "yaml";
})(SnippetType || (SnippetType = {}));

;// CONCATENATED MODULE: ./src/api-client/models/index.ts















;// CONCATENATED MODULE: ./src/api-client/index.ts




// export helper lib
const camelcaseKeysDeep = (obj)=>{
    return camelcaseKeys(obj, {
        deep: true
    });
};
const camelcaseKeys = (external_camelcase_keys_default());


/***/ }),

/***/ 6879:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ API_URL),
/* harmony export */   "j": () => (/* binding */ GATEWAY_URL)
/* harmony export */ });
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://server.wind-watcher.cn/api/v2" || 0;
const GATEWAY_URL = "http://server.wind-watcher.cn" || 0;


/***/ }),

/***/ 6246:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ $axios),
/* harmony export */   "x": () => (/* binding */ apiClient)
/* harmony export */ });
/* harmony import */ var react_message_popup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5255);
/* harmony import */ var react_message_popup__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_message_popup__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var api_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7876);
/* harmony import */ var api_client_adaptors_axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2863);
/* harmony import */ var _constants_env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6879);
/* harmony import */ var _cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7637);
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(925);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_cookie__WEBPACK_IMPORTED_MODULE_4__]);
_cookie__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const genUUID = ()=>{
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c)=>{
        const r = Math.random() * 16 | 0;
        const v = c === "x" ? r : r & 0x3 | 0x8;
        return v.toString(16);
    });
};
const apiClient = (0,api_client__WEBPACK_IMPORTED_MODULE_1__/* .createClient */ .eI)(api_client_adaptors_axios__WEBPACK_IMPORTED_MODULE_2__/* .axiosAdaptor */ .N)(_constants_env__WEBPACK_IMPORTED_MODULE_3__/* .API_URL */ .T, {
    controllers: api_client__WEBPACK_IMPORTED_MODULE_1__/* .allControllers */ .Mh
});
const uuid = genUUID();
const $axios = api_client_adaptors_axios__WEBPACK_IMPORTED_MODULE_2__/* .axiosAdaptor["default"] */ .N["default"];
$axios.defaults.timeout = 10000;
$axios.interceptors.request.use((config)=>{
    const token = (0,_cookie__WEBPACK_IMPORTED_MODULE_4__/* .getToken */ .LP)();
    if (config.headers) {
        if (token) {
            config.headers["Authorization"] = token;
        }
        config.headers["x-uuid"] = uuid;
    }
    return config;
});
$axios.interceptors.response.use(undefined, (error)=>{
    if (false) {}
    if (!error.response || error.response.status === 408 || error.code === "ECONNABORTED") {
        if ((0,_env__WEBPACK_IMPORTED_MODULE_5__/* .isClientSide */ .S_)()) {
            react_message_popup__WEBPACK_IMPORTED_MODULE_0__.message.error("\u8BF7\u6C42\u8D85\u65F6, \u8BF7\u68C0\u67E5\u4E00\u4E0B\u7F51\u7EDC\u54E6!");
        } else {
            const msg = "\u4E0A\u6E38\u670D\u52A1\u5668\u8BF7\u6C42\u8D85\u65F6";
            react_message_popup__WEBPACK_IMPORTED_MODULE_0__.message.error(msg);
            console.error(msg, error.message);
        }
    }
    const response = error.response;
    if (response) {
        const data = response.data;
        // eslint-disable-next-line no-empty
        if (response.status == 401) {} else if (data && data.message) {
            react_message_popup__WEBPACK_IMPORTED_MODULE_0__.message.error(typeof data.message == "string" ? data.message : Array.isArray(data.message) ? data.message[0] : "\u8BF7\u6C42\u9519\u8BEF");
        }
    }
    return Promise.reject(error);
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7637:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ TokenKey),
/* harmony export */   "D2": () => (/* binding */ setLikeId),
/* harmony export */   "LP": () => (/* binding */ getToken),
/* harmony export */   "MO": () => (/* binding */ isLikedBefore),
/* harmony export */   "gy": () => (/* binding */ removeToken),
/* harmony export */   "o4": () => (/* binding */ setToken)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9915);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_1__]);
js_cookie__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const TokenKey = "mx-token";
/**
 * 带了 bearer
 */ function getToken() {
    const token = js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].get(TokenKey);
    return token ? `bearer ${token}` : null;
}
function setToken(token) {
    if (typeof token !== "string") {
        return;
    }
    return js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].set(TokenKey, token);
}
function removeToken() {
    return js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].remove(TokenKey);
}
const LikePrefix = "mx-like";
function setLikeId(id) {
    const has = getLikes();
    if (!has) {
        js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].set(LikePrefix, JSON.stringify([
            id
        ]), {
            expires: getTomorrow()
        });
    } else {
        if (isLikedBefore(id)) {
            return;
        }
        js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].set(LikePrefix, JSON.stringify(JSON.parse(has).concat(id)), {
            expires: getTomorrow()
        });
    }
}
function getLikes() {
    return decodeURIComponent(js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].get(LikePrefix) ?? "");
}
function isLikedBefore(id) {
    const has = getLikes();
    if (!has) {
        return false;
    }
    const list = JSON.parse(has);
    return list.includes(id);
}
function getTomorrow() {
    return dayjs__WEBPACK_IMPORTED_MODULE_0___default()().add(1, "d").set("h", 2).set("m", 0).toDate();
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 925:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S_": () => (/* binding */ isClientSide),
/* harmony export */   "r8": () => (/* binding */ isDev),
/* harmony export */   "s$": () => (/* binding */ isServerSide)
/* harmony export */ });
const isClientSide = ()=>{
    return "undefined" !== "undefined";
};
const isServerSide = ()=>{
    return !isClientSide();
};
const isDev = "production" === "development";


/***/ })

};
;