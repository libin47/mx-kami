(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3341],{40203:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/notes/topics",function(){return c(37812)}])},63180:function(g,c,a){"use strict";a.d(c,{B:function(){return q}});var h=a(62086),b=a(93236),i=a(37735),d=(0,b.createContext)({}),j=d.Provider,e=a(3101),k=a.n(e),f=a(57397),l=a(59083),m=a(94760),n=a(33531),o=(0,f.Pi)(function(r){var f=r.animate,g=void 0===f||f,i=(0,n.oR)().userStore,c=(0,b.useContext)(d),e=c.title,j=c.type,o=c.id,a=c.subtitle,p=c.subtitleAnimation,s=i.isLogged,q=i.url;return e?(0,h.jsxs)("section",{className:k()["post-title"],children:[(0,h.jsxs)("h1",{className:k().h1,suppressHydrationWarning:!0,children:[(0,l.S_)()?(0,h.jsx)(m.S,{appear:g,children:e},e):e,j&&o&&s&&q?(0,h.jsx)("a",{className:"edit-link float-right text-green",target:"_blank",href:(0,l.Kk)("#/".concat("page"===j?"pages":"posts","/edit?id=").concat(o),q.adminUrl),children:"\u7F16\u8F91"}):null]}),a&&(0,h.jsx)("h2",{suppressHydrationWarning:!0,children:(0,l.S_)()&&(void 0===p||p)?"string"==typeof a?(0,h.jsx)(m.S,{appear:g,children:a},a):a.map(function(c,b){return(0,h.jsx)(m.S,{appear:g,className:"mb-2",delay:b,children:c},a[b])}):a})]}):null});function p(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}var q=(0,b.memo)((0,b.forwardRef)(function(a,e){var f=a.children,g=a.title,l=a.subtitle,m=a.delay,c=a.type,d=a.id,n=a.titleAnimate,q=function(a,d){if(null==a)return{};var b,c,e=function(c,f){if(null==c)return{};var a,b,d={},e=Object.keys(c);for(b=0;b<e.length;b++)a=e[b],f.indexOf(a)>=0||(d[a]=c[a]);return d}(a,d);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(c=0;c<f.length;c++)b=f[c],!(d.indexOf(b)>=0)&&Object.prototype.propertyIsEnumerable.call(a,b)&&(e[b]=a[b])}return e}(a,["children","title","subtitle","delay","type","id","titleAnimate"]);return(0,h.jsx)(j,{value:{title:g,id:d,subtitle:l,type:c},children:(0,h.jsxs)("main",function(d){for(var a=1;a<arguments.length;a++){var c=null!=arguments[a]?arguments[a]:{},b=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(b=b.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),b.forEach(function(a){p(d,a,c[a])})}return d}({className:k()["is-article"],ref:e},q,{id:"article-wrap","data-type":c,children:[(0,h.jsx)(o,{animate:n}),(0,h.jsx)(i._,{timeout:(0,b.useMemo)(function(){return{enter:null!=m?m:300}},[m]),children:f},d)]}))})}))},94760:function(f,d,b){"use strict";b.d(d,{S:function(){return l}});var g=b(62086),e=b(17427);function h(c,a){(null==a||a>c.length)&&(a=c.length);for(var b=0,d=new Array(a);b<a;b++)d[b]=c[b];return d}function i(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function j(d){for(var a=1;a<arguments.length;a++){var c=null!=arguments[a]?arguments[a]:{},b=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(b=b.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),b.forEach(function(a){i(d,a,c[a])})}return d}var a,c,k=(a=(0,e.UU)("text-up",{translateY:"10px",opacity:0},{translateY:"0px",opacity:1}),c=1,function(a){if(Array.isArray(a))return a}(a)||function(b,e){var f,g,a=null==b?null:"undefined"!=typeof Symbol&&b[Symbol.iterator]||b["@@iterator"];if(null!=a){var c=[],d=!0,h=!1;try{for(a=a.call(b);!(d=(f=a.next()).done)&&(c.push(f.value),!e||c.length!==e);d=!0);}catch(i){h=!0,g=i}finally{try{d||null==a.return||a.return()}finally{if(h)throw g}}return c}}(a,c)||function(a,c){if(a){if("string"==typeof a)return h(a,c);var b=Object.prototype.toString.call(a).slice(8,-1);if("Object"===b&&a.constructor&&(b=a.constructor.name),"Map"===b||"Set"===b)return Array.from(b);if("Arguments"===b||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b))return h(a,c)}}(a,c)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0],l=function(a){var c=a.duration,i=void 0===c?500:c,d=a.appear,e=a.delay,l=void 0===e?100:e,f=a.children,b=a.text,h=function(a,d){if(null==a)return{};var b,c,e=function(c,f){if(null==c)return{};var a,b,d={},e=Object.keys(c);for(b=0;b<e.length;b++)a=e[b],f.indexOf(a)>=0||(d[a]=c[a]);return d}(a,d);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(c=0;c<f.length;c++)b=f[c],!(d.indexOf(b)>=0)&&Object.prototype.propertyIsEnumerable.call(a,b)&&(e[b]=a[b])}return e}(a,["duration","appear","delay","children","text"]);return void 0===d||d?(0,g.jsx)("div",j({},h,{children:Array.from(null!=b?b:f).map(function(b,a){return(0,g.jsx)("span",{className:"inline-block whitespace-pre",style:{animation:"".concat(k," ").concat(i,"ms both linear"),animationDelay:"".concat(a*l,"ms")},children:b},a)})})):(0,g.jsx)("div",j({},h,{children:null!=b?b:f}))}},70871:function(c,b,a){"use strict";a.d(b,{I:function(){return h}});var d=a(62086),e=a(18256);function f(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function g(d){for(var a=1;a<arguments.length;a++){var c=null!=arguments[a]?arguments[a]:{},b=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(b=b.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),b.forEach(function(a){f(d,a,c[a])})}return d}var h=function(a,b){return function(c){var h=c.id,j=c.className,f=c.component,k=void 0===f?"div":f,i=function(a,d){if(null==a)return{};var b,c,e=function(c,f){if(null==c)return{};var a,b,d={},e=Object.keys(c);for(b=0;b<e.length;b++)a=e[b],f.indexOf(a)>=0||(d[a]=c[a]);return d}(a,d);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(c=0;c<f.length;c++)b=f[c],!(d.indexOf(b)>=0)&&Object.prototype.propertyIsEnumerable.call(a,b)&&(e[b]=a[b])}return e}(c,["id","className","component"]);return(0,d.jsx)(e.ZP,g({in:!0,appear:!0,mountOnEnter:!0,unmountOnExit:!0,timeout:0},i,{children:function(e){return(0,d.jsx)(k,{style:g({},a,b[e]),className:j,children:c.children})}}),h)}}},37735:function(g,c,a){"use strict";a.d(c,{"_":function(){return h},v:function(){return f}});var d=a(17427),e=a(70871),b="bottom-up-spring";(0,d.UU)(b,{translateY:"3em",opacity:0},{translateY:"0em",opacity:1});var f={entering:{opacity:0},entered:{animation:"".concat(b," 1000ms steps(60) both"),opacity:1},exiting:{animation:"".concat(b," 1000ms steps(60) both reverse"),opacity:1},exited:{opacity:0}},h=(0,e.I)({opacity:0},f)},79372:function(g,c,a){"use strict";a.d(c,{A:function(){return h}});var d=a(17427),e=a(70871),b="right-left-spring";(0,d.UU)(b,{translateX:"3em",opacity:0},{translateX:"0em",opacity:1});var f={entering:{opacity:0},entered:{animation:"".concat(b," 1000ms steps(60) both")},exiting:{animation:"".concat(b," 1000ms steps(60) both reverse")},exited:{opacity:0}},h=(0,e.I)({opacity:0},f)},37812:function(d,b,a){"use strict";a.r(b);var e=a(62086),c=a(10553),f=a.n(c),g=a(93236),h=a(9523),i=a(63180),j=a(94173),k=a(79372),l=a(59083);b.default=function(){var a=(0,g.useState)([]),b=a[0],c=a[1];return(0,g.useEffect)(function(){l.x1.topic.getAll().then(function(a){c(a.data)})},[]),(0,e.jsxs)(i.B,{title:"\u4E13\u680F",children:[(0,e.jsx)(j.H,{title:"\u4E13\u680F"}),(0,e.jsx)("div",{className:"article-list",children:(0,e.jsx)("ul",{children:(0,e.jsx)(h.Z,{children:b.map(function(a){return(0,e.jsx)(k.A,{component:"li",children:(0,e.jsx)(f(),{href:"/notes/topics/".concat(a.slug),children:(0,e.jsx)("a",{children:a.name})})},a.id)})})})})]})}},3101:function(a){a.exports={"post-title":"ArticleLayout_post-title__Zf0kJ","is-article":"ArticleLayout_is-article__uLhmt",h1:"ArticleLayout_h1__tk6Mj"}},9523:function(e,c,a){"use strict";a.d(c,{Z:function(){return n}});var f=a(13010),g=a(45443),h=a(15535),i=a(85446),d=a(93236),j=a(89381);function k(a,c){var b=Object.create(null);return a&&d.Children.map(a,function(a){return a}).forEach(function(e){var a;b[e.key]=(a=e,c&&(0,d.isValidElement)(a)?c(a):a)}),b}function l(c,a,b){return null!=b[a]?b[a]:c.props[a]}var m=Object.values||function(a){return Object.keys(a).map(function(b){return a[b]})},b=function(c){function a(b,d){var a,e=(a=c.call(this,b,d)||this).handleExited.bind((0,h.Z)(a));return a.state={contextValue:{isMounting:!0},handleExited:e,firstRender:!0},a}(0,i.Z)(a,c);var b=a.prototype;return b.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},b.componentWillUnmount=function(){this.mounted=!1},a.getDerivedStateFromProps=function(c,a){var e,i,f,g,j,m,b,n=a.children,h=a.handleExited,o=a.firstRender;return{children:o?(e=c,i=h,k(e.children,function(a){return(0,d.cloneElement)(a,{onExited:i.bind(null,a),in:!0,appear:l(a,"appear",e),enter:l(a,"enter",e),exit:l(a,"exit",e)})})):(f=c,g=n,j=h,b=function(g,e){function h(a){return a in e?e[a]:g[a]}g=g||{},e=e||{};var a,d=Object.create(null),b=[];for(var i in g)i in e?b.length&&(d[i]=b,b=[]):b.push(i);var f={};for(var c in e){if(d[c])for(a=0;a<d[c].length;a++){var j=d[c][a];f[d[c][a]]=h(j)}f[c]=h(c)}for(a=0;a<b.length;a++)f[b[a]]=h(b[a]);return f}(g,m=k(f.children)),Object.keys(b).forEach(function(c){var a=b[c];if((0,d.isValidElement)(a)){var h=c in g,i=c in m,e=g[c],k=(0,d.isValidElement)(e)&&!e.props.in;i&&(!h||k)?b[c]=(0,d.cloneElement)(a,{onExited:j.bind(null,a),in:!0,exit:l(a,"exit",f),enter:l(a,"enter",f)}):i||!h||k?i&&h&&(0,d.isValidElement)(e)&&(b[c]=(0,d.cloneElement)(a,{onExited:j.bind(null,a),in:e.props.in,exit:l(a,"exit",f),enter:l(a,"enter",f)})):b[c]=(0,d.cloneElement)(a,{in:!1})}}),b),firstRender:!1}},b.handleExited=function(a,b){var c=k(this.props.children);a.key in c||(a.props.onExited&&a.props.onExited(b),this.mounted&&this.setState(function(c){var b=(0,g.Z)({},c.children);return delete b[a.key],{children:b}}))},b.render=function(){var b=this.props,c=b.component,h=b.childFactory,a=(0,f.Z)(b,["component","childFactory"]),e=this.state.contextValue,g=m(this.state.children).map(h);return(delete a.appear,delete a.enter,delete a.exit,null===c)?d.createElement(j.Z.Provider,{value:e},g):d.createElement(j.Z.Provider,{value:e},d.createElement(c,a,g))},a}(d.Component);b.propTypes={},b.defaultProps={component:"div",childFactory:function(a){return a}};var n=b},15535:function(c,a,b){"use strict";function d(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}b.d(a,{Z:function(){return d}})},45443:function(c,a,b){"use strict";function d(){return(d=Object.assign?Object.assign.bind():function(d){for(var a=1;a<arguments.length;a++){var b=arguments[a];for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&(d[c]=b[c])}return d}).apply(this,arguments)}b.d(a,{Z:function(){return d}})}},function(a){a.O(0,[5537,9774,2888,179],function(){return a(a.s=40203)}),_N_E=a.O()}])