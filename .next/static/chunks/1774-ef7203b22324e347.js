"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1774],{12464:function(c,b,a){a.d(b,{Z:function(){return k}});var d=Math.ceil,e=Math.max,f=function(a,g,c,h){for(var i=-1,b=e(d((g-a)/(c||1)),0),f=Array(b);b--;)f[h?b:++i]=a,a+=c;return f},g=a(61833),h=a(28106),i=1/0,j=function(a){return a?(a=(0,h.Z)(a))===i||a=== -i?(a<0?-1:1)*17976931348623157e292:a==a?a:0:0===a?a:0},k=function(c,a,b){return b&&"number"!=typeof b&&(0,g.Z)(c,a,b)&&(a=b=void 0),c=j(c),void 0===a?(a=c,c=0):a=j(a),b=void 0===b?c<a?1:-1:j(b),f(c,a,b,void 0)}},67697:function(x,q,e){e.d(q,{io:function(){return i}});var b,j,k={};e.r(k),e.d(k,{Decoder:function(){return ax},Encoder:function(){return aw},PacketType:function(){return j},protocol:function(){return av}});let c=Object.create(null);c.open="0",c.close="1",c.ping="2",c.pong="3",c.message="4",c.upgrade="5",c.noop="6";let y=Object.create(null);Object.keys(c).forEach(a=>{y[c[a]]=a});let z={type:"error",data:"parser error"},A="function"==typeof Blob||"undefined"!=typeof Blob&&"[object BlobConstructor]"===Object.prototype.toString.call(Blob),B="function"==typeof ArrayBuffer,C=a=>"function"==typeof ArrayBuffer.isView?ArrayBuffer.isView(a):a&&a.buffer instanceof ArrayBuffer,D=(b,c)=>{let a=new FileReader;return a.onload=function(){let b=a.result.split(",")[1];c("b"+b)},a.readAsDataURL(b)};var E=({type:e,data:a},d,b)=>A&&a instanceof Blob?d?b(a):D(a,b):B&&(a instanceof ArrayBuffer||C(a))?d?b(a):D(new Blob([a]),b):b(c[e]+(a||""));let l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",r="undefined"==typeof Uint8Array?[]:new Uint8Array(256);for(let f=0;f<l.length;f++)r[l.charCodeAt(f)]=f;let F=a=>{let c=.75*a.length,k=a.length,b,d=0,h,e,f,i;"="===a[a.length-1]&&(c--,"="===a[a.length-2]&&c--);let j=new ArrayBuffer(c),g=new Uint8Array(j);for(b=0;b<k;b+=4)h=r[a.charCodeAt(b)],e=r[a.charCodeAt(b+1)],f=r[a.charCodeAt(b+2)],i=r[a.charCodeAt(b+3)],g[d++]=h<<2|e>>4,g[d++]=(15&e)<<4|f>>2,g[d++]=(3&f)<<6|63&i;return j},G="function"==typeof ArrayBuffer,H=(a,b)=>{if(!G)return{base64:!0,data:a};{let c=F(a);return I(c,b)}},I=(a,b)=>"blob"===b&&a instanceof ArrayBuffer?new Blob([a]):a;var J=(a,c)=>{if("string"!=typeof a)return{type:"message",data:I(a,c)};let b=a.charAt(0);if("b"===b)return{type:"message",data:H(a.substring(1),c)};let d=y[b];return d?a.length>1?{type:y[b],data:a.substring(1)}:{type:y[b]}:z};let K=(a,c)=>{let b=a.length,d=new Array(b),e=0;a.forEach((a,f)=>{E(a,!1,a=>{d[f]=a,++e===b&&c(d.join("\x1e"))})})},L=(e,f)=>{let b=e.split("\x1e"),c=[];for(let a=0;a<b.length;a++){let d=J(b[a],f);if(c.push(d),"error"===d.type)break}return c};function a(a){if(a)return M(a)}function M(b){for(var c in a.prototype)b[c]=a.prototype[c];return b}a.prototype.on=a.prototype.addEventListener=function(a,b){return this._callbacks=this._callbacks||{},(this._callbacks["$"+a]=this._callbacks["$"+a]||[]).push(b),this},a.prototype.once=function(b,c){function a(){this.off(b,a),c.apply(this,arguments)}return a.fn=c,this.on(b,a),this},a.prototype.off=a.prototype.removeListener=a.prototype.removeAllListeners=a.prototype.removeEventListener=function(c,d){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var e,a=this._callbacks["$"+c];if(!a)return this;if(1==arguments.length)return delete this._callbacks["$"+c],this;for(var b=0;b<a.length;b++)if((e=a[b])===d||e.fn===d){a.splice(b,1);break}return 0===a.length&&delete this._callbacks["$"+c],this},a.prototype.emit=function(d){this._callbacks=this._callbacks||{};for(var c=new Array(arguments.length-1),b=this._callbacks["$"+d],a=1;a<arguments.length;a++)c[a-1]=arguments[a];if(b){b=b.slice(0);for(var a=0,e=b.length;a<e;++a)b[a].apply(this,c)}return this},a.prototype.emitReserved=a.prototype.emit,a.prototype.listeners=function(a){return this._callbacks=this._callbacks||{},this._callbacks["$"+a]||[]},a.prototype.hasListeners=function(a){return!!this.listeners(a).length};let h="undefined"!=typeof self?self:"undefined"!=typeof window?window:Function("return this")();function N(b,...a){return a.reduce((c,a)=>(b.hasOwnProperty(a)&&(c[a]=b[a]),c),{})}let O=setTimeout,P=clearTimeout;function Q(a,b){b.useNativeTimers?(a.setTimeoutFn=O.bind(h),a.clearTimeoutFn=P.bind(h)):(a.setTimeoutFn=setTimeout.bind(h),a.clearTimeoutFn=clearTimeout.bind(h))}function R(a){return"string"==typeof a?S(a):Math.ceil(1.33*(a.byteLength||a.size))}function S(d){let b=0,a=0;for(let c=0,e=d.length;c<e;c++)(b=d.charCodeAt(c))<128?a+=1:b<2048?a+=2:b<55296||b>=57344?a+=3:(c++,a+=4);return a}class T extends Error{constructor(a,b,c){super(a),this.description=b,this.context=c,this.type="TransportError"}}class U extends a{constructor(a){super(),this.writable=!1,Q(this,a),this.opts=a,this.query=a.query,this.readyState="",this.socket=a.socket}onError(a,b,c){return super.emitReserved("error",new T(a,b,c)),this}open(){return("closed"===this.readyState||""===this.readyState)&&(this.readyState="opening",this.doOpen()),this}close(){return("opening"===this.readyState||"open"===this.readyState)&&(this.doClose(),this.onClose()),this}send(a){"open"===this.readyState&&this.write(a)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(a){let b=J(a,this.socket.binaryType);this.onPacket(b)}onPacket(a){super.emitReserved("packet",a)}onClose(a){this.readyState="closed",super.emitReserved("close",a)}}let s="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),t={},V=0,g=0,W;function X(a){let b="";do b=s[a%64]+b,a=Math.floor(a/64);while(a>0)return b}function Y(){let a=X(+new Date);return a!==W?(V=0,W=a):a+"."+X(V++)}for(;g<64;g++)t[s[g]]=g;function Z(b){let a="";for(let c in b)b.hasOwnProperty(c)&&(a.length&&(a+="&"),a+=encodeURIComponent(c)+"="+encodeURIComponent(b[c]));return a}let m=!1;try{m="undefined"!=typeof XMLHttpRequest&&"withCredentials"in new XMLHttpRequest}catch($){}let _=m;function aa(b){let a=b.xdomain;try{if("undefined"!=typeof XMLHttpRequest&&(!a||_))return new XMLHttpRequest}catch(c){}if(!a)try{return new h[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch(d){}}function ab(){}let ac=function(){let a=new aa({xdomain:!1});return null!=a.responseType}();class n extends a{constructor(b,a){super(),Q(this,a),this.opts=a,this.method=a.method||"GET",this.uri=b,this.async=!1!==a.async,this.data=void 0!==a.data?a.data:null,this.create()}create(){let b=N(this.opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");b.xdomain=!!this.opts.xd,b.xscheme=!!this.opts.xs;let a=this.xhr=new aa(b);try{a.open(this.method,this.uri,this.async);try{if(this.opts.extraHeaders)for(let c in a.setDisableHeaderCheck&&a.setDisableHeaderCheck(!0),this.opts.extraHeaders)this.opts.extraHeaders.hasOwnProperty(c)&&a.setRequestHeader(c,this.opts.extraHeaders[c])}catch(d){}if("POST"===this.method)try{a.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch(e){}try{a.setRequestHeader("Accept","*/*")}catch(f){}"withCredentials"in a&&(a.withCredentials=this.opts.withCredentials),this.opts.requestTimeout&&(a.timeout=this.opts.requestTimeout),a.onreadystatechange=()=>{4===a.readyState&&(200===a.status||1223===a.status?this.onLoad():this.setTimeoutFn(()=>{this.onError("number"==typeof a.status?a.status:0)},0))},a.send(this.data)}catch(g){this.setTimeoutFn(()=>{this.onError(g)},0);return}"undefined"!=typeof document&&(this.index=n.requestsCount++,n.requests[this.index]=this)}onError(a){this.emitReserved("error",a,this.xhr),this.cleanup(!0)}cleanup(a){if(void 0!==this.xhr&&null!==this.xhr){if(this.xhr.onreadystatechange=ab,a)try{this.xhr.abort()}catch(b){}"undefined"!=typeof document&&delete n.requests[this.index],this.xhr=null}}onLoad(){let a=this.xhr.responseText;null!==a&&(this.emitReserved("data",a),this.emitReserved("success"),this.cleanup())}abort(){this.cleanup()}}if(n.requestsCount=0,n.requests={},"undefined"!=typeof document){if("function"==typeof attachEvent)attachEvent("onunload",ad);else if("function"==typeof addEventListener){let u="onpagehide"in h?"pagehide":"unload";addEventListener(u,ad,!1)}}function ad(){for(let a in n.requests)n.requests.hasOwnProperty(a)&&n.requests[a].abort()}let ae=(()=>{let a="function"==typeof Promise&&"function"==typeof Promise.resolve;return a?a=>Promise.resolve().then(a):(a,b)=>b(a,0)})(),af=h.WebSocket||h.MozWebSocket;e(28371).Buffer;let ag="undefined"!=typeof navigator&&"string"==typeof navigator.product&&"reactnative"===navigator.product.toLowerCase(),ah={websocket:class extends U{constructor(a){super(a),this.supportsBinary=!a.forceBase64}get name(){return"websocket"}doOpen(){if(!this.check())return;let a=this.uri(),b=this.opts.protocols,c=ag?{}:N(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(c.headers=this.opts.extraHeaders);try{this.ws=ag?new af(a,b,c):b?new af(a,b):new af(a)}catch(d){return this.emitReserved("error",d)}this.ws.binaryType=this.socket.binaryType||"arraybuffer",this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=a=>this.onClose({description:"websocket connection closed",context:a}),this.ws.onmessage=a=>this.onData(a.data),this.ws.onerror=a=>this.onError("websocket error",a)}write(b){this.writable=!1;for(let a=0;a<b.length;a++){let c=b[a],d=a===b.length-1;E(c,this.supportsBinary,a=>{try{this.ws.send(a)}catch(b){}d&&ae(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){void 0!==this.ws&&(this.ws.close(),this.ws=null)}uri(){let a=this.query||{},b=this.opts.secure?"wss":"ws",c="";this.opts.port&&("wss"===b&&443!==Number(this.opts.port)||"ws"===b&&80!==Number(this.opts.port))&&(c=":"+this.opts.port),this.opts.timestampRequests&&(a[this.opts.timestampParam]=Y()),this.supportsBinary||(a.b64=1);let d=Z(a),e=-1!==this.opts.hostname.indexOf(":");return b+"://"+(e?"["+this.opts.hostname+"]":this.opts.hostname)+c+this.opts.path+(d.length?"?"+d:"")}check(){return!!af}},polling:class extends U{constructor(a){if(super(a),this.polling=!1,"undefined"!=typeof location){let c="https:"===location.protocol,b=location.port;b||(b=c?"443":"80"),this.xd="undefined"!=typeof location&&a.hostname!==location.hostname||b!==a.port,this.xs=a.secure!==c}let d=a&&a.forceBase64;this.supportsBinary=ac&&!d}get name(){return"polling"}doOpen(){this.poll()}pause(c){this.readyState="pausing";let b=()=>{this.readyState="paused",c()};if(this.polling||!this.writable){let a=0;this.polling&&(a++,this.once("pollComplete",function(){--a||b()})),this.writable||(a++,this.once("drain",function(){--a||b()}))}else b()}poll(){this.polling=!0,this.doPoll(),this.emitReserved("poll")}onData(a){L(a,this.socket.binaryType).forEach(a=>{if("opening"===this.readyState&&"open"===a.type&&this.onOpen(),"close"===a.type)return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(a)}),"closed"!==this.readyState&&(this.polling=!1,this.emitReserved("pollComplete"),"open"===this.readyState&&this.poll())}doClose(){let a=()=>{this.write([{type:"close"}])};"open"===this.readyState?a():this.once("open",a)}write(a){this.writable=!1,K(a,a=>{this.doWrite(a,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){let a=this.query||{},b=this.opts.secure?"https":"http",c="";!1!==this.opts.timestampRequests&&(a[this.opts.timestampParam]=Y()),this.supportsBinary||a.sid||(a.b64=1),this.opts.port&&("https"===b&&443!==Number(this.opts.port)||"http"===b&&80!==Number(this.opts.port))&&(c=":"+this.opts.port);let d=Z(a),e=-1!==this.opts.hostname.indexOf(":");return b+"://"+(e?"["+this.opts.hostname+"]":this.opts.hostname)+c+this.opts.path+(d.length?"?"+d:"")}request(a={}){return Object.assign(a,{xd:this.xd,xs:this.xs},this.opts),new n(this.uri(),a)}doWrite(b,c){let a=this.request({method:"POST",data:b});a.on("success",c),a.on("error",(a,b)=>{this.onError("xhr post error",a,b)})}doPoll(){let a=this.request();a.on("data",this.onData.bind(this)),a.on("error",(a,b)=>{this.onError("xhr poll error",a,b)}),this.pollXhr=a}}},ai=/^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,aj=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function ak(b){let f=b,c=b.indexOf("["),d=b.indexOf("]");-1!=c&& -1!=d&&(b=b.substring(0,c)+b.substring(c,d).replace(/:/g,";")+b.substring(d,b.length));let g=ai.exec(b||""),a={},e=14;for(;e--;)a[aj[e]]=g[e]||"";return -1!=c&& -1!=d&&(a.source=f,a.host=a.host.substring(1,a.host.length-1).replace(/;/g,":"),a.authority=a.authority.replace("[","").replace("]","").replace(/;/g,":"),a.ipv6uri=!0),a.pathNames=al(a,a.path),a.queryKey=am(a,a.query),a}function al(c,a){let b=a.replace(/\/{2,9}/g,"/").split("/");return("/"==a.substr(0,1)||0===a.length)&&b.splice(0,1),"/"==a.substr(a.length-1,1)&&b.splice(b.length-1,1),b}function am(c,a){let b={};return a.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(d,a,c){a&&(b[a]=c)}),b}class o extends a{constructor(b,a={}){super(),b&&"object"==typeof b&&(a=b,b=null),b?(b=ak(b),a.hostname=b.host,a.secure="https"===b.protocol||"wss"===b.protocol,a.port=b.port,b.query&&(a.query=b.query)):a.host&&(a.hostname=ak(a.host).host),Q(this,a),this.secure=null!=a.secure?a.secure:"undefined"!=typeof location&&"https:"===location.protocol,a.hostname&&!a.port&&(a.port=this.secure?"443":"80"),this.hostname=a.hostname||("undefined"!=typeof location?location.hostname:"localhost"),this.port=a.port||("undefined"!=typeof location&&location.port?location.port:this.secure?"443":"80"),this.transports=a.transports||["polling","websocket"],this.readyState="",this.writeBuffer=[],this.prevBufferLen=0,this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!0},a),this.opts.path=this.opts.path.replace(/\/$/,"")+"/","string"==typeof this.opts.query&&(this.opts.query=function(e){let b={},c=e.split("&");for(let a=0,f=c.length;a<f;a++){let d=c[a].split("=");b[decodeURIComponent(d[0])]=decodeURIComponent(d[1])}return b}(this.opts.query)),this.id=null,this.upgrades=null,this.pingInterval=null,this.pingTimeout=null,this.pingTimeoutTimer=null,"function"==typeof addEventListener&&(this.opts.closeOnBeforeunload&&addEventListener("beforeunload",()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},!1),"localhost"!==this.hostname&&(this.offlineEventListener=()=>{this.onClose("transport close",{description:"network connection lost"})},addEventListener("offline",this.offlineEventListener,!1))),this.open()}createTransport(b){let a=Object.assign({},this.opts.query);a.EIO=4,a.transport=b,this.id&&(a.sid=this.id);let c=Object.assign({},this.opts.transportOptions[b],this.opts,{query:a,socket:this,hostname:this.hostname,secure:this.secure,port:this.port});return new ah[b](c)}open(){let a;if(this.opts.rememberUpgrade&&o.priorWebsocketSuccess&& -1!==this.transports.indexOf("websocket"))a="websocket";else if(0===this.transports.length){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}else a=this.transports[0];this.readyState="opening";try{a=this.createTransport(a)}catch(b){this.transports.shift(),this.open();return}a.open(),this.setTransport(a)}setTransport(a){this.transport&&this.transport.removeAllListeners(),this.transport=a,a.on("drain",this.onDrain.bind(this)).on("packet",this.onPacket.bind(this)).on("error",this.onError.bind(this)).on("close",a=>this.onClose("transport close",a))}probe(b){let a=this.createTransport(b),h=!1;o.priorWebsocketSuccess=!1;let c=()=>{h||(a.send([{type:"ping",data:"probe"}]),a.once("packet",b=>{if(!h){if("pong"===b.type&&"probe"===b.data)this.upgrading=!0,this.emitReserved("upgrading",a),a&&(o.priorWebsocketSuccess="websocket"===a.name,this.transport.pause(()=>{h||"closed"!==this.readyState&&(j(),this.setTransport(a),a.send([{type:"upgrade"}]),this.emitReserved("upgrade",a),a=null,this.upgrading=!1,this.flush())}));else{let c=new Error("probe error");c.transport=a.name,this.emitReserved("upgradeError",c)}}}))};function i(){h||(h=!0,j(),a.close(),a=null)}let d=c=>{let b=new Error("probe error: "+c);b.transport=a.name,i(),this.emitReserved("upgradeError",b)};function e(){d("transport closed")}function f(){d("socket closed")}function g(b){a&&b.name!==a.name&&i()}let j=()=>{a.removeListener("open",c),a.removeListener("error",d),a.removeListener("close",e),this.off("close",f),this.off("upgrading",g)};a.once("open",c),a.once("error",d),a.once("close",e),this.once("close",f),this.once("upgrading",g),a.open()}onOpen(){if(this.readyState="open",o.priorWebsocketSuccess="websocket"===this.transport.name,this.emitReserved("open"),this.flush(),"open"===this.readyState&&this.opts.upgrade&&this.transport.pause){let a=0,b=this.upgrades.length;for(;a<b;a++)this.probe(this.upgrades[a])}}onPacket(a){if("opening"===this.readyState||"open"===this.readyState||"closing"===this.readyState)switch(this.emitReserved("packet",a),this.emitReserved("heartbeat"),a.type){case"open":this.onHandshake(JSON.parse(a.data));break;case"ping":this.resetPingTimeout(),this.sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong");break;case"error":let b=new Error("server error");b.code=a.data,this.onError(b);break;case"message":this.emitReserved("data",a.data),this.emitReserved("message",a.data)}}onHandshake(a){this.emitReserved("handshake",a),this.id=a.sid,this.transport.query.sid=a.sid,this.upgrades=this.filterUpgrades(a.upgrades),this.pingInterval=a.pingInterval,this.pingTimeout=a.pingTimeout,this.maxPayload=a.maxPayload,this.onOpen(),"closed"!==this.readyState&&this.resetPingTimeout()}resetPingTimeout(){this.clearTimeoutFn(this.pingTimeoutTimer),this.pingTimeoutTimer=this.setTimeoutFn(()=>{this.onClose("ping timeout")},this.pingInterval+this.pingTimeout),this.opts.autoUnref&&this.pingTimeoutTimer.unref()}onDrain(){this.writeBuffer.splice(0,this.prevBufferLen),this.prevBufferLen=0,0===this.writeBuffer.length?this.emitReserved("drain"):this.flush()}flush(){if("closed"!==this.readyState&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){let a=this.getWritablePackets();this.transport.send(a),this.prevBufferLen=a.length,this.emitReserved("flush")}}getWritablePackets(){let d=this.maxPayload&&"polling"===this.transport.name&&this.writeBuffer.length>1;if(!d)return this.writeBuffer;let b=1;for(let a=0;a<this.writeBuffer.length;a++){let c=this.writeBuffer[a].data;if(c&&(b+=R(c)),a>0&&b>this.maxPayload)return this.writeBuffer.slice(0,a);b+=2}return this.writeBuffer}write(a,b,c){return this.sendPacket("message",a,b,c),this}send(a,b,c){return this.sendPacket("message",a,b,c),this}sendPacket(e,b,a,c){if("function"==typeof b&&(c=b,b=void 0),"function"==typeof a&&(c=a,a=null),"closing"===this.readyState||"closed"===this.readyState)return;(a=a||{}).compress=!1!==a.compress;let d={type:e,data:b,options:a};this.emitReserved("packetCreate",d),this.writeBuffer.push(d),c&&this.once("flush",c),this.flush()}close(){let a=()=>{this.onClose("forced close"),this.transport.close()},c=()=>{this.off("upgrade",c),this.off("upgradeError",c),a()},b=()=>{this.once("upgrade",c),this.once("upgradeError",c)};return("opening"===this.readyState||"open"===this.readyState)&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?b():a()}):this.upgrading?b():a()),this}onError(a){o.priorWebsocketSuccess=!1,this.emitReserved("error",a),this.onClose("transport error",a)}onClose(a,b){("opening"===this.readyState||"open"===this.readyState||"closing"===this.readyState)&&(this.clearTimeoutFn(this.pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),"function"==typeof removeEventListener&&removeEventListener("offline",this.offlineEventListener,!1),this.readyState="closed",this.id=null,this.emitReserved("close",a,b),this.writeBuffer=[],this.prevBufferLen=0)}filterUpgrades(b){let c=[],a=0,d=b.length;for(;a<d;a++)~this.transports.indexOf(b[a])&&c.push(b[a]);return c}}o.protocol=4,o.protocol;let an="function"==typeof ArrayBuffer,ao=a=>"function"==typeof ArrayBuffer.isView?ArrayBuffer.isView(a):a.buffer instanceof ArrayBuffer,p=Object.prototype.toString,ap="function"==typeof Blob||"undefined"!=typeof Blob&&"[object BlobConstructor]"===p.call(Blob),aq="function"==typeof File||"undefined"!=typeof File&&"[object FileConstructor]"===p.call(File);function ar(a){return an&&(a instanceof ArrayBuffer||ao(a))||ap&&a instanceof Blob||aq&&a instanceof File}function as(a,e){if(!a||"object"!=typeof a)return!1;if(Array.isArray(a)){for(let b=0,d=a.length;b<d;b++)if(as(a[b]))return!0;return!1}if(ar(a))return!0;if(a.toJSON&&"function"==typeof a.toJSON&&1===arguments.length)return as(a.toJSON(),!0);for(let c in a)if(Object.prototype.hasOwnProperty.call(a,c)&&as(a[c]))return!0;return!1}function at(a,b){if(!a)return a;if(ar(a)){let g={_placeholder:!0,num:b.length};return b.push(a),g}if(Array.isArray(a)){let e=new Array(a.length);for(let c=0;c<a.length;c++)e[c]=at(a[c],b);return e}if("object"==typeof a&&!(a instanceof Date)){let f={};for(let d in a)Object.prototype.hasOwnProperty.call(a,d)&&(f[d]=at(a[d],b));return f}return a}function au(a,c){if(!a)return a;if(a&&a._placeholder)return c[a.num];if(Array.isArray(a))for(let b=0;b<a.length;b++)a[b]=au(a[b],c);else if("object"==typeof a)for(let d in a)Object.prototype.hasOwnProperty.call(a,d)&&(a[d]=au(a[d],c));return a}let av=5;(b=j||(j={}))[b.CONNECT=0]="CONNECT",b[b.DISCONNECT=1]="DISCONNECT",b[b.EVENT=2]="EVENT",b[b.ACK=3]="ACK",b[b.CONNECT_ERROR=4]="CONNECT_ERROR",b[b.BINARY_EVENT=5]="BINARY_EVENT",b[b.BINARY_ACK=6]="BINARY_ACK";class aw{constructor(a){this.replacer=a}encode(a){return(a.type===j.EVENT||a.type===j.ACK)&&as(a)?(a.type=a.type===j.EVENT?j.BINARY_EVENT:j.BINARY_ACK,this.encodeAsBinary(a)):[this.encodeAsString(a)]}encodeAsString(a){let b=""+a.type;return(a.type===j.BINARY_EVENT||a.type===j.BINARY_ACK)&&(b+=a.attachments+"-"),a.nsp&&"/"!==a.nsp&&(b+=a.nsp+","),null!=a.id&&(b+=a.id),null!=a.data&&(b+=JSON.stringify(a.data,this.replacer)),b}encodeAsBinary(c){let a=function(c){let a=[],d=c.data,b=c;return b.data=at(d,a),b.attachments=a.length,{packet:b,buffers:a}}(c),d=this.encodeAsString(a.packet),b=a.buffers;return b.unshift(d),b}}class ax extends a{constructor(a){super(),this.reviver=a}add(b){let a;if("string"==typeof b)(a=this.decodeString(b)).type===j.BINARY_EVENT||a.type===j.BINARY_ACK?(this.reconstructor=new ay(a),0===a.attachments&&super.emitReserved("decoded",a)):super.emitReserved("decoded",a);else if(ar(b)||b.base64){if(this.reconstructor)(a=this.reconstructor.takeBinaryData(b))&&(this.reconstructor=null,super.emitReserved("decoded",a));else throw new Error("got binary data when not reconstructing a packet")}else throw new Error("Unknown type: "+b)}decodeString(b){let a=0,c={type:Number(b.charAt(0))};if(void 0===j[c.type])throw new Error("unknown packet type "+c.type);if(c.type===j.BINARY_EVENT||c.type===j.BINARY_ACK){let h=a+1;for(;"-"!==b.charAt(++a)&&a!=b.length;);let d=b.substring(h,a);if(d!=Number(d)||"-"!==b.charAt(a))throw new Error("Illegal attachments");c.attachments=Number(d)}if("/"===b.charAt(a+1)){let i=a+1;for(;++a;){let k=b.charAt(a);if(","===k)break;if(a===b.length)break}c.nsp=b.substring(i,a)}else c.nsp="/";let e=b.charAt(a+1);if(""!==e&&Number(e)==e){let l=a+1;for(;++a;){let f=b.charAt(a);if(null==f||Number(f)!=f){--a;break}if(a===b.length)break}c.id=Number(b.substring(l,a+1))}if(b.charAt(++a)){let g=this.tryParse(b.substr(a));if(ax.isPayloadValid(c.type,g))c.data=g;else throw new Error("invalid payload")}return c}tryParse(a){try{return JSON.parse(a,this.reviver)}catch(b){return!1}}static isPayloadValid(b,a){switch(b){case j.CONNECT:return"object"==typeof a;case j.DISCONNECT:return void 0===a;case j.CONNECT_ERROR:return"string"==typeof a||"object"==typeof a;case j.EVENT:case j.BINARY_EVENT:return Array.isArray(a)&&a.length>0;case j.ACK:case j.BINARY_ACK:return Array.isArray(a)}}destroy(){this.reconstructor&&this.reconstructor.finishedReconstruction()}}class ay{constructor(a){this.packet=a,this.buffers=[],this.reconPack=a}takeBinaryData(c){if(this.buffers.push(c),this.buffers.length===this.reconPack.attachments){var a,b;let d=(a=this.reconPack,b=this.buffers,a.data=au(a.data,b),a.attachments=void 0,a);return this.finishedReconstruction(),d}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}function az(a,b,c){return a.on(b,c),function(){a.off(b,c)}}let aA=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class v extends a{constructor(b,c,a){super(),this.connected=!1,this.receiveBuffer=[],this.sendBuffer=[],this.ids=0,this.acks={},this.flags={},this.io=b,this.nsp=c,a&&a.auth&&(this.auth=a.auth),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;let a=this.io;this.subs=[az(a,"open",this.onopen.bind(this)),az(a,"packet",this.onpacket.bind(this)),az(a,"error",this.onerror.bind(this)),az(a,"close",this.onclose.bind(this)),]}get active(){return!!this.subs}connect(){return this.connected||(this.subEvents(),this.io["_reconnecting"]||this.io.open(),"open"===this.io._readyState&&this.onopen()),this}open(){return this.connect()}send(...a){return a.unshift("message"),this.emit.apply(this,a),this}emit(c,...b){if(aA.hasOwnProperty(c))throw new Error('"'+c+'" is a reserved event name');b.unshift(c);let a={type:j.EVENT,data:b};if(a.options={},a.options.compress=!1!==this.flags.compress,"function"==typeof b[b.length-1]){let d=this.ids++,e=b.pop();this._registerAckCallback(d,e),a.id=d}let f=this.io.engine&&this.io.engine.transport&&this.io.engine.transport.writable,g=this.flags.volatile&&(!f||!this.connected);return g||(this.connected?(this.notifyOutgoingListeners(a),this.packet(a)):this.sendBuffer.push(a)),this.flags={},this}_registerAckCallback(a,c){let b=this.flags.timeout;if(void 0===b){this.acks[a]=c;return}let d=this.io.setTimeoutFn(()=>{delete this.acks[a];for(let b=0;b<this.sendBuffer.length;b++)this.sendBuffer[b].id===a&&this.sendBuffer.splice(b,1);c.call(this,new Error("operation has timed out"))},b);this.acks[a]=(...a)=>{this.io.clearTimeoutFn(d),c.apply(this,[null,...a])}}packet(a){a.nsp=this.nsp,this.io._packet(a)}onopen(){"function"==typeof this.auth?this.auth(a=>{this.packet({type:j.CONNECT,data:a})}):this.packet({type:j.CONNECT,data:this.auth})}onerror(a){this.connected||this.emitReserved("connect_error",a)}onclose(a,b){this.connected=!1,delete this.id,this.emitReserved("disconnect",a,b)}onpacket(a){let c=a.nsp===this.nsp;if(c)switch(a.type){case j.CONNECT:if(a.data&&a.data.sid){let d=a.data.sid;this.onconnect(d)}else this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case j.EVENT:case j.BINARY_EVENT:this.onevent(a);break;case j.ACK:case j.BINARY_ACK:this.onack(a);break;case j.DISCONNECT:this.ondisconnect();break;case j.CONNECT_ERROR:this.destroy();let b=new Error(a.data.message);b.data=a.data.data,this.emitReserved("connect_error",b)}}onevent(a){let b=a.data||[];null!=a.id&&b.push(this.ack(a.id)),this.connected?this.emitEvent(b):this.receiveBuffer.push(Object.freeze(b))}emitEvent(a){if(this._anyListeners&&this._anyListeners.length){let b=this._anyListeners.slice();for(let c of b)c.apply(this,a)}super.emit.apply(this,a)}ack(a){let b=this,c=!1;return function(...d){c||(c=!0,b.packet({type:j.ACK,id:a,data:d}))}}onack(a){let b=this.acks[a.id];"function"==typeof b&&(b.apply(this,a.data),delete this.acks[a.id])}onconnect(a){this.id=a,this.connected=!0,this.emitBuffered(),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(a=>this.emitEvent(a)),this.receiveBuffer=[],this.sendBuffer.forEach(a=>{this.notifyOutgoingListeners(a),this.packet(a)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(a=>a()),this.subs=void 0),this.io["_destroy"](this)}disconnect(){return this.connected&&this.packet({type:j.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(a){return this.flags.compress=a,this}get volatile(){return this.flags.volatile=!0,this}timeout(a){return this.flags.timeout=a,this}onAny(a){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(a),this}prependAny(a){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(a),this}offAny(c){if(!this._anyListeners)return this;if(c){let b=this._anyListeners;for(let a=0;a<b.length;a++)if(c===b[a])return b.splice(a,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(a){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(a),this}prependAnyOutgoing(a){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(a),this}offAnyOutgoing(c){if(!this._anyOutgoingListeners)return this;if(c){let b=this._anyOutgoingListeners;for(let a=0;a<b.length;a++)if(c===b[a])return b.splice(a,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(a){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){let b=this._anyOutgoingListeners.slice();for(let c of b)c.apply(this,a.data)}}}function d(a){a=a||{},this.ms=a.min||100,this.max=a.max||1e4,this.factor=a.factor||2,this.jitter=a.jitter>0&&a.jitter<=1?a.jitter:0,this.attempts=0}d.prototype.duration=function(){var a=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var b=Math.random(),c=Math.floor(b*this.jitter*a);a=(1&Math.floor(10*b))==0?a-c:a+c}return 0|Math.min(a,this.max)},d.prototype.reset=function(){this.attempts=0},d.prototype.setMin=function(a){this.ms=a},d.prototype.setMax=function(a){this.max=a},d.prototype.setJitter=function(a){this.jitter=a};class w extends a{constructor(b,a){var c;super(),this.nsps={},this.subs=[],b&&"object"==typeof b&&(a=b,b=void 0),(a=a||{}).path=a.path||"/socket.io",this.opts=a,Q(this,a),this.reconnection(!1!==a.reconnection),this.reconnectionAttempts(a.reconnectionAttempts||1/0),this.reconnectionDelay(a.reconnectionDelay||1e3),this.reconnectionDelayMax(a.reconnectionDelayMax||5e3),this.randomizationFactor(null!==(c=a.randomizationFactor)&& void 0!==c?c:.5),this.backoff=new d({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(null==a.timeout?2e4:a.timeout),this._readyState="closed",this.uri=b;let e=a.parser||k;this.encoder=new e.Encoder,this.decoder=new e.Decoder,this._autoConnect=!1!==a.autoConnect,this._autoConnect&&this.open()}reconnection(a){return arguments.length?(this._reconnection=!!a,this):this._reconnection}reconnectionAttempts(a){return void 0===a?this._reconnectionAttempts:(this._reconnectionAttempts=a,this)}reconnectionDelay(a){var b;return void 0===a?this._reconnectionDelay:(this._reconnectionDelay=a,null===(b=this.backoff)|| void 0===b||b.setMin(a),this)}randomizationFactor(a){var b;return void 0===a?this._randomizationFactor:(this._randomizationFactor=a,null===(b=this.backoff)|| void 0===b||b.setJitter(a),this)}reconnectionDelayMax(a){var b;return void 0===a?this._reconnectionDelayMax:(this._reconnectionDelayMax=a,null===(b=this.backoff)|| void 0===b||b.setMax(a),this)}timeout(a){return arguments.length?(this._timeout=a,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&0===this.backoff.attempts&&this.reconnect()}open(f){if(~this._readyState.indexOf("open"))return this;this.engine=new o(this.uri,this.opts);let a=this.engine,g=this;this._readyState="opening",this.skipReconnect=!1;let b=az(a,"open",function(){g.onopen(),f&&f()}),d=az(a,"error",a=>{g.cleanup(),g._readyState="closed",this.emitReserved("error",a),f?f(a):g.maybeReconnectOnOpen()});if(!1!==this._timeout){let c=this._timeout;0===c&&b();let e=this.setTimeoutFn(()=>{b(),a.close(),a.emit("error",new Error("timeout"))},c);this.opts.autoUnref&&e.unref(),this.subs.push(function(){clearTimeout(e)})}return this.subs.push(b),this.subs.push(d),this}connect(a){return this.open(a)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");let a=this.engine;this.subs.push(az(a,"ping",this.onping.bind(this)),az(a,"data",this.ondata.bind(this)),az(a,"error",this.onerror.bind(this)),az(a,"close",this.onclose.bind(this)),az(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(a){this.decoder.add(a)}ondecoded(a){this.emitReserved("packet",a)}onerror(a){this.emitReserved("error",a)}socket(b,c){let a=this.nsps[b];return a||(a=new v(this,b,c),this.nsps[b]=a),a}_destroy(d){let a=Object.keys(this.nsps);for(let b of a){let c=this.nsps[b];if(c.active)return}this._close()}_packet(b){let c=this.encoder.encode(b);for(let a=0;a<c.length;a++)this.engine.write(c[a],b.options)}cleanup(){this.subs.forEach(a=>a()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close"),this.engine&&this.engine.close()}disconnect(){return this._close()}onclose(a,b){this.cleanup(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",a,b),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;let c=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{let a=this.backoff.duration();this._reconnecting=!0;let b=this.setTimeoutFn(()=>{!c.skipReconnect&&(this.emitReserved("reconnect_attempt",c.backoff.attempts),c.skipReconnect||c.open(a=>{a?(c._reconnecting=!1,c.reconnect(),this.emitReserved("reconnect_error",a)):c.onreconnect()}))},a);this.opts.autoUnref&&b.unref(),this.subs.push(function(){clearTimeout(b)})}}onreconnect(){let a=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",a)}}let aB={};function i(d,a){"object"==typeof d&&(a=d,d=void 0),a=a||{};let b=function(b,e="",c){let a=b;c=c||"undefined"!=typeof location&&location,null==b&&(b=c.protocol+"//"+c.host),"string"==typeof b&&("/"===b.charAt(0)&&(b="/"===b.charAt(1)?c.protocol+b:c.host+b),/^(https?|wss?):\/\//.test(b)||(b=void 0!==c?c.protocol+"//"+b:"https://"+b),a=ak(b)),!a.port&&(/^(http|ws)$/.test(a.protocol)?a.port="80":/^(http|ws)s$/.test(a.protocol)&&(a.port="443")),a.path=a.path||"/";let f=-1!==a.host.indexOf(":"),d=f?"["+a.host+"]":a.host;return a.id=a.protocol+"://"+d+":"+a.port+e,a.href=a.protocol+"://"+d+(c&&c.port===a.port?"":":"+a.port),a}(d,a.path||"/socket.io"),f=b.source,c=b.id,g=b.path,h=aB[c]&&g in aB[c].nsps,i=a.forceNew||a["force new connection"]|| !1===a.multiplex||h,e;return i?e=new w(f,a):(aB[c]||(aB[c]=new w(f,a)),e=aB[c]),b.query&&!a.query&&(a.query=b.queryKey),e.socket(b.path,a)}Object.assign(i,{Manager:w,Socket:v,io:i,connect:i})}}])