(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2431],{39807:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/says",function(){return c(88288)}])},70871:function(c,b,a){"use strict";a.d(b,{I:function(){return h}});var d=a(62086),e=a(18256);function f(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function g(d){for(var a=1;a<arguments.length;a++){var c=null!=arguments[a]?arguments[a]:{},b=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(b=b.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),b.forEach(function(a){f(d,a,c[a])})}return d}var h=function(a,b){return function(c){var h=c.id,j=c.className,f=c.component,k=void 0===f?"div":f,i=function(a,d){if(null==a)return{};var b,c,e=function(c,f){if(null==c)return{};var a,b,d={},e=Object.keys(c);for(b=0;b<e.length;b++)a=e[b],f.indexOf(a)>=0||(d[a]=c[a]);return d}(a,d);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(c=0;c<f.length;c++)b=f[c],!(d.indexOf(b)>=0)&&Object.prototype.propertyIsEnumerable.call(a,b)&&(e[b]=a[b])}return e}(c,["id","className","component"]);return(0,d.jsx)(e.ZP,g({in:!0,appear:!0,mountOnEnter:!0,unmountOnExit:!0,timeout:0},i,{children:function(e){return(0,d.jsx)(k,{style:g({},a,b[e]),className:j,children:c.children})}}),h)}}},37735:function(g,c,a){"use strict";a.d(c,{"_":function(){return h},v:function(){return f}});var d=a(17427),e=a(70871),b="bottom-up-spring";(0,d.UU)(b,{translateY:"3em",opacity:0},{translateY:"0em",opacity:1});var f={entering:{opacity:0},entered:{animation:"".concat(b," 1000ms steps(60) both"),opacity:1},exiting:{animation:"".concat(b," 1000ms steps(60) both reverse"),opacity:1},exited:{opacity:0}},h=(0,e.I)({opacity:0},f)},88288:function(i,b,a){"use strict";a.r(b),a.d(b,{"default":function(){return z}});var j=a(62086),d=a(57397),e=a(42475),k=a.n(e),f=a(93236),g=a(45496),l=a.n(g);function m(){return(m=Object.assign||function(d){for(var a=1;a<arguments.length;a++){var b=arguments[a];for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&(d[c]=b[c])}return d}).apply(this,arguments)}function n(c,d){var a=Object.keys(c);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(c);d&&(b=b.filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable})),a.push.apply(a,b)}return a}function o(c){for(var a=1;a<arguments.length;a++){var b=null!=arguments[a]?arguments[a]:{};a%2?n(Object(b),!0).forEach(function(a){p(c,a,b[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(b)):n(Object(b)).forEach(function(a){Object.defineProperty(c,a,Object.getOwnPropertyDescriptor(b,a))})}return c}function p(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}let q=2;class c extends f.Component{constructor(b){super(b),this.reCalculateColumnCount=this.reCalculateColumnCount.bind(this),this.reCalculateColumnCountDebounce=this.reCalculateColumnCountDebounce.bind(this);let a;a=this.props.breakpointCols&&this.props.breakpointCols.default?this.props.breakpointCols.default:parseInt(this.props.breakpointCols)||q,this.state={columnCount:a}}componentDidMount(){this.reCalculateColumnCount(),window&&window.addEventListener("resize",this.reCalculateColumnCountDebounce)}componentDidUpdate(){this.reCalculateColumnCount()}componentWillUnmount(){window&&window.removeEventListener("resize",this.reCalculateColumnCountDebounce)}reCalculateColumnCountDebounce(){if(!window||!window.requestAnimationFrame){this.reCalculateColumnCount();return}window.cancelAnimationFrame&&window.cancelAnimationFrame(this._lastRecalculateAnimationFrame),this._lastRecalculateAnimationFrame=window.requestAnimationFrame(()=>{this.reCalculateColumnCount()})}reCalculateColumnCount(){let f=window&&window.innerWidth||1/0,a=this.props.breakpointCols;"object"!=typeof a&&(a={default:parseInt(a)||q});let d=1/0,b=a.default||q;for(let e in a){let c=parseInt(e),g=c>0&&f<=c;g&&c<d&&(d=c,b=a[e])}b=Math.max(1,parseInt(b)||1),this.state.columnCount!==b&&this.setState({columnCount:b})}itemsInColumns(){let d=this.state.columnCount,a=new Array(d),e=f.Children.toArray(this.props.children);for(let b=0;b<e.length;b++){let c=b%d;a[c]||(a[c]=[]),a[c].push(e[b])}return a}renderColumns(){let{column:d,columnAttrs:b={},columnClassName:e}=this.props,c=this.itemsInColumns(),g=`${100/c.length}%`,a=e;a&&"string"!=typeof a&&(this.logDeprecated('The property "columnClassName" requires a string'),void 0===a&&(a="my-masonry-grid_column"));let h=o(o(o({},d),b),{},{style:o(o({},b.style),{},{width:g}),className:a});return c.map((a,b)=>f.createElement("div",m({},h,{key:b}),a))}logDeprecated(a){console.error("[Masonry]",a)}render(){let b=this.props,{children:e,breakpointCols:g,columnClassName:h,columnAttrs:i,column:j,className:a}=b,d=function(a,d){if(null==a)return{};var b,c,e=function(c,f){if(null==c)return{};var a,b,d={},e=Object.keys(c);for(b=0;b<e.length;b++)a=e[b],f.indexOf(a)>=0||(d[a]=c[a]);return d}(a,d);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(c=0;c<f.length;c++)b=f[c],!(d.indexOf(b)>=0)&&Object.prototype.propertyIsEnumerable.call(a,b)&&(e[b]=a[b])}return e}(b,["children","breakpointCols","columnClassName","columnAttrs","column","className"]),c=a;return"string"!=typeof a&&(this.logDeprecated('The property "className" requires a string'),void 0===a&&(c="my-masonry-grid")),f.createElement("div",m({},d,{className:c}),this.renderColumns())}}c.defaultProps={breakpointCols:void 0,className:void 0,columnClassName:void 0,children:void 0,columnAttrs:void 0,column:void 0};var r=c,s=a(9523),t=a(37735),u=a(75664),v=a(94173),w=a(33531);function x(a,b){var c=parseInt(a.slice(1,3),16),d=parseInt(a.slice(3,5),16),e=parseInt(a.slice(5,7),16);return b?"rgba(".concat(c,", ").concat(d,", ").concat(e,", ").concat(b,")"):"rgb(".concat(c,", ").concat(d,", ").concat(e,")")}var h=a(44537),y=a.n(h),z=(0,d.Pi)(function(){var a=(0,w.oR)(),d=a.sayStore,b=a.appStore;(0,f.useEffect)(function(){d.fetchAll()},[]);var c=d.list.sort(function(a,b){return+new Date(b.created)- +new Date(a.created)}),e=(0,f.useMemo)(function(){return new Map(c.map(function(a){return[a.id,k()({luminosity:"light"===b.colorMode?"bright":"dark",seed:a.id}),]}))},[b.colorMode,c]);return(0,j.jsxs)("main",{children:[(0,j.jsx)(v.H,{title:"\u8BF4\u8BF4"}),(0,j.jsx)(s.Z,{children:(0,j.jsx)(r,{breakpointCols:b.viewport.mobile?1:2,className:y()["kami-say"],children:c.map(function(a,f){var b=!!a.source,c=!!a.author,d=e.get(a.id);return(0,j.jsx)(t._,{timeout:{enter:50*f},in:!0,children:(0,j.jsxs)("blockquote",{className:"transition-all duration-500",style:{borderLeftColor:x(d||"",.7),backgroundColor:x(d||"",.05)},children:[(0,j.jsx)(l(),{className:"mb-2",allowedTypes:["paragraph","link","inlineCode","strong","text",],escapeHtml:!1,children:a.text}),(0,j.jsxs)("p",{className:y().author,children:[(0,j.jsx)("div",{className:"flex-shrink-0",children:"\u53D1\u5E03\u4E8E ".concat((0,u.eM)(a.created))}),(0,j.jsxs)("div",{className:"flex-shrink-0 flex-grow",children:[b&&" \u51FA\u81EA \u201C".concat(a.source,"\u201D"),b&&c&&", ",c&&"\u4F5C\u8005\uFF1A".concat(a.author),!c&&!b&&"\u7AD9\u957F\u8BF4"]})]})]},a.id)},a.id)})})})]})})},44537:function(a){a.exports={author:"says_author__2GQKs","kami-say":"says_kami-say__N4PhC"}},74049:function(a,e,b){"use strict";var f=b(36257);function c(){}function d(){}d.resetWarningCache=c,a.exports=function(){function a(c,d,e,g,h,b){if(b!==f){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function b(){return a}a.isRequired=a;var e={array:a,bigint:a,bool:a,func:a,number:a,object:a,string:a,symbol:a,any:a,arrayOf:b,element:a,elementType:a,instanceOf:b,node:a,objectOf:b,oneOf:b,oneOfType:b,shape:b,exact:b,checkPropTypes:d,resetWarningCache:c};return e.PropTypes=e,e}},40507:function(a,c,b){a.exports=b(74049)()},36257:function(a){"use strict";a.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},18256:function(l,d,b){"use strict";b.d(d,{ZP:function(){return q}});var m=b(13010),n=b(85446),e=b(93236),o=b(19103),p={disabled:!1},f=b(89381),g="unmounted",h="exited",i="entering",j="entered",k="exiting",a=function(c){function b(a,e){b=c.call(this,a,e)||this;var b,d,f=e,k=f&&!f.isMounting?a.enter:a.appear;return b.appearStatus=null,a.in?k?(d=h,b.appearStatus=i):d=j:d=a.unmountOnExit||a.mountOnEnter?g:h,b.state={status:d},b.nextCallback=null,b}(0,n.Z)(b,c),b.getDerivedStateFromProps=function(a,b){return a.in&&b.status===g?{status:h}:null};var a=b.prototype;return a.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},a.componentDidUpdate=function(c){var b=null;if(c!==this.props){var a=this.state.status;this.props.in?a!==i&&a!==j&&(b=i):(a===i||a===j)&&(b=k)}this.updateStatus(!1,b)},a.componentWillUnmount=function(){this.cancelNextCallback()},a.getTimeouts=function(){var c,b,d,a=this.props.timeout;return c=b=d=a,null!=a&&"number"!=typeof a&&(c=a.exit,b=a.enter,d=void 0!==a.appear?a.appear:b),{exit:c,enter:b,appear:d}},a.updateStatus=function(a,b){void 0===a&&(a=!1),null!==b?(this.cancelNextCallback(),b===i?this.performEnter(a):this.performExit()):this.props.unmountOnExit&&this.state.status===h&&this.setState({status:g})},a.performEnter=function(b){var h=this,e=this.props.enter,a=this.context?this.context.isMounting:b,c=this.props.nodeRef?[a]:[o.findDOMNode(this),a],f=c[0],g=c[1],d=this.getTimeouts(),k=a?d.appear:d.enter;if(!b&&!e||p.disabled){this.safeSetState({status:j},function(){h.props.onEntered(f)});return}this.props.onEnter(f,g),this.safeSetState({status:i},function(){h.props.onEntering(f,g),h.onTransitionEnd(k,function(){h.safeSetState({status:j},function(){h.props.onEntered(f,g)})})})},a.performExit=function(){var c=this,a=this.props.exit,d=this.getTimeouts(),b=this.props.nodeRef?void 0:o.findDOMNode(this);if(!a||p.disabled){this.safeSetState({status:h},function(){c.props.onExited(b)});return}this.props.onExit(b),this.safeSetState({status:k},function(){c.props.onExiting(b),c.onTransitionEnd(d.exit,function(){c.safeSetState({status:h},function(){c.props.onExited(b)})})})},a.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},a.safeSetState=function(b,a){a=this.setNextCallback(a),this.setState(b,a)},a.setNextCallback=function(a){var b=this,c=!0;return this.nextCallback=function(d){c&&(c=!1,b.nextCallback=null,a(d))},this.nextCallback.cancel=function(){c=!1},this.nextCallback},a.onTransitionEnd=function(a,d){this.setNextCallback(d);var b=this.props.nodeRef?this.props.nodeRef.current:o.findDOMNode(this),e=null==a&&!this.props.addEndListener;if(!b||e){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var c=this.props.nodeRef?[this.nextCallback]:[b,this.nextCallback],f=c[0],g=c[1];this.props.addEndListener(f,g)}null!=a&&setTimeout(this.nextCallback,a)},a.render=function(){var c=this.state.status;if(c===g)return null;var a=this.props,b=a.children,d=(a.in,a.mountOnEnter,a.unmountOnExit,a.appear,a.enter,a.exit,a.timeout,a.addEndListener,a.onEnter,a.onEntering,a.onEntered,a.onExit,a.onExiting,a.onExited,a.nodeRef,(0,m.Z)(a,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return e.createElement(f.Z.Provider,{value:null},"function"==typeof b?b(c,d):e.cloneElement(e.Children.only(b),d))},b}(e.Component);function c(){}a.contextType=f.Z,a.propTypes={},a.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:c,onEntering:c,onEntered:c,onExit:c,onExiting:c,onExited:c},a.UNMOUNTED=g,a.EXITED=h,a.ENTERING=i,a.ENTERED=j,a.EXITING=k;var q=a},9523:function(e,c,a){"use strict";a.d(c,{Z:function(){return n}});var f=a(13010),g=a(45443),h=a(15535),i=a(85446),d=a(93236),j=a(89381);function k(a,c){var b=Object.create(null);return a&&d.Children.map(a,function(a){return a}).forEach(function(e){var a;b[e.key]=(a=e,c&&(0,d.isValidElement)(a)?c(a):a)}),b}function l(c,a,b){return null!=b[a]?b[a]:c.props[a]}var m=Object.values||function(a){return Object.keys(a).map(function(b){return a[b]})},b=function(c){function a(b,d){var a,e=(a=c.call(this,b,d)||this).handleExited.bind((0,h.Z)(a));return a.state={contextValue:{isMounting:!0},handleExited:e,firstRender:!0},a}(0,i.Z)(a,c);var b=a.prototype;return b.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},b.componentWillUnmount=function(){this.mounted=!1},a.getDerivedStateFromProps=function(c,a){var e,i,f,g,j,m,b,n=a.children,h=a.handleExited,o=a.firstRender;return{children:o?(e=c,i=h,k(e.children,function(a){return(0,d.cloneElement)(a,{onExited:i.bind(null,a),in:!0,appear:l(a,"appear",e),enter:l(a,"enter",e),exit:l(a,"exit",e)})})):(f=c,g=n,j=h,b=function(g,e){function h(a){return a in e?e[a]:g[a]}g=g||{},e=e||{};var a,d=Object.create(null),b=[];for(var i in g)i in e?b.length&&(d[i]=b,b=[]):b.push(i);var f={};for(var c in e){if(d[c])for(a=0;a<d[c].length;a++){var j=d[c][a];f[d[c][a]]=h(j)}f[c]=h(c)}for(a=0;a<b.length;a++)f[b[a]]=h(b[a]);return f}(g,m=k(f.children)),Object.keys(b).forEach(function(c){var a=b[c];if((0,d.isValidElement)(a)){var h=c in g,i=c in m,e=g[c],k=(0,d.isValidElement)(e)&&!e.props.in;i&&(!h||k)?b[c]=(0,d.cloneElement)(a,{onExited:j.bind(null,a),in:!0,exit:l(a,"exit",f),enter:l(a,"enter",f)}):i||!h||k?i&&h&&(0,d.isValidElement)(e)&&(b[c]=(0,d.cloneElement)(a,{onExited:j.bind(null,a),in:e.props.in,exit:l(a,"exit",f),enter:l(a,"enter",f)})):b[c]=(0,d.cloneElement)(a,{in:!1})}}),b),firstRender:!1}},b.handleExited=function(a,b){var c=k(this.props.children);a.key in c||(a.props.onExited&&a.props.onExited(b),this.mounted&&this.setState(function(c){var b=(0,g.Z)({},c.children);return delete b[a.key],{children:b}}))},b.render=function(){var b=this.props,c=b.component,h=b.childFactory,a=(0,f.Z)(b,["component","childFactory"]),e=this.state.contextValue,g=m(this.state.children).map(h);return(delete a.appear,delete a.enter,delete a.exit,null===c)?d.createElement(j.Z.Provider,{value:e},g):d.createElement(j.Z.Provider,{value:e},d.createElement(c,a,g))},a}(d.Component);b.propTypes={},b.defaultProps={component:"div",childFactory:function(a){return a}};var n=b},89381:function(d,a,b){"use strict";var c=b(93236);a.Z=c.createContext(null)},15535:function(c,a,b){"use strict";function d(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}b.d(a,{Z:function(){return d}})},45443:function(c,a,b){"use strict";function d(){return(d=Object.assign?Object.assign.bind():function(d){for(var a=1;a<arguments.length;a++){var b=arguments[a];for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&(d[c]=b[c])}return d}).apply(this,arguments)}b.d(a,{Z:function(){return d}})},85446:function(c,b,a){"use strict";a.d(b,{Z:function(){return e}});var d=a(42916);function e(a,b){a.prototype=Object.create(b.prototype),a.prototype.constructor=a,(0,d.Z)(a,b)}},13010:function(c,a,b){"use strict";function d(c,f){if(null==c)return{};var a,b,d={},e=Object.keys(c);for(b=0;b<e.length;b++)a=e[b],f.indexOf(a)>=0||(d[a]=c[a]);return d}b.d(a,{Z:function(){return d}})},42916:function(c,a,b){"use strict";function d(a,b){return(d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(a,b){return a.__proto__=b,a})(a,b)}b.d(a,{Z:function(){return d}})}},function(a){a.O(0,[5496,9774,2888,179],function(){return a(a.s=39807)}),_N_E=a.O()}])