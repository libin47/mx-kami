(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4899],{57374:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/favorite/music",function(){return c(52935)}])},24277:function(e,b,a){"use strict";a.d(b,{g:function(){return i}});var f=a(62086),c=a(93236),g=a(32320),d=a(78091),h=a.n(d),i=(0,c.memo)(function(b){var d=b.loadingText,a=(0,c.useState)(!0),e=a[0],j=a[1],i=(0,g.YD)({threshold:.5,onChange:function(a){a?j(!1):j(!0)}}).ref;return(0,f.jsxs)("div",{className:h().loading,ref:i,children:[(0,f.jsx)("div",{className:"icon",children:(0,f.jsx)("svg",{className:"m-auto bg-transparent block",width:"200px",height:"200px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",children:(0,f.jsx)("circle",{cx:"50",cy:"51.3828",r:"13",fill:"#e15b64",children:!e&&(0,f.jsx)("animate",{attributeName:"cy",dur:"1s",repeatCount:"indefinite",calcMode:"spline",keySplines:"0.45 0 0.9 0.55;0 0.45 0.55 0.9",keyTimes:"0;0.5;1",values:"23;77;23"})})})},"icon"),(0,f.jsx)("span",{children:d})]})})},52935:function(f,b,a){"use strict";a.r(b),a.d(b,{"default":function(){return w}});var g=a(62086),d=a(93236),h=a(79533),i=a(59083),j=a(51626),k=a(19360),c=a(57397),l=a(48337),m=a(94173),n=a(58277),o=a(78461),p=a(33531),e=a(98656),q=a.n(e);function r(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}var s=(0,d.memo)(function(a){var b=(0,p.oR)().musicStore,c=(0,o.e)().event,d=function(a){(0,k.z)(function(){c({action:n.b.Interaction,label:"\u52A0\u8F7D\u97F3\u4E50\u64AD\u653E\u5217\u8868\uFF0CID\uFF1A".concat(a.join(","))}),b.setPlaylist(a),b.isHide=!1,setTimeout(function(){b.isPlay=!0},1e3)})};return(0,g.jsxs)("section",{className:q()["kami-music"],children:[(0,g.jsx)("div",{className:q()["music-cover"],children:(0,g.jsxs)("div",{className:(0,j.Z)(q()["fixed-cover"],q()["sticky-cover"]),children:[(0,g.jsx)("img",{src:a.src}),(0,g.jsx)("h3",{children:a.name})]})}),(0,g.jsx)("div",{className:q()["music-list"],children:(0,g.jsx)("ul",{children:a.data.length?a.data.map(function(b,c){return(0,g.jsx)(t,{index:c,name:b.name,time:b.time,id:b.id,onClick:function(b){d(a.data.slice(b).map(function(a){return a.id}))}},b.id)}):(0,g.jsxs)("li",{children:[(0,g.jsx)("span",{className:q().num,children:"0"}),"\u8FD9\u91CC\u6682\u65F6\u6CA1\u6709\u5185\u5BB9"]})})})]})}),t=(0,c.Pi)(function(a){var b=a.index,c=a.name,d=a.time,e=(0,p.oR)().musicStore,f=e.playId;return f===a.id?(0,g.jsx)(u,function(d){for(var a=1;a<arguments.length;a++){var c=null!=arguments[a]?arguments[a]:{},b=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(b=b.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),b.forEach(function(a){r(d,a,c[a])})}return d}({},a)):(0,g.jsxs)("li",{onClick:function(){return a.onClick(b)},className:(0,j.Z)(q()["song-item"]),children:[(0,g.jsx)("span",{className:q().num,children:b+1}),(0,g.jsx)("span",{className:"flex-grow truncate",children:c}),(0,g.jsx)("time",{className:"font-mono flex-shrink-0",children:d})]})}),u=(0,c.Pi)(function(a){var r=a.index,e=a.name,f=a.time,b=(0,p.oR)().musicStore,c=b.playId,h=b.duration,i=b.time,s=(0,o.e)().event,k=(0,d.useDeferredValue)(b.playProgress);return(0,d.useEffect)(function(){if(0===c)return},[c]),(0,d.useEffect)(function(){s({action:n.b.Interaction,label:"\u5F00\u59CB\u64AD\u653E\u97F3\u4E50\uFF1A".concat(c)})},[c]),(0,g.jsxs)("li",{onClick:function(){return a.onClick(r)},className:(0,j.Z)(q()["song-item"],c===a.id&&h&&i?q().playing:null),style:{backgroundSize:"".concat(100*k,"% 100%")},children:[(0,g.jsx)(m.p,{title:"".concat(a.name," \xb7 \u6B4C\u5355")}),(0,d.useMemo)(function(){return(0,g.jsx)("span",{className:q().num,children:b.isPlay?(0,g.jsx)(l.RZ,{className:"inline"}):(0,g.jsx)(l.fp,{className:"inline"})})},[b.isPlay]),(0,g.jsx)("span",{className:"flex-grow truncate",children:e}),(0,g.jsx)("time",{className:"font-mono flex-shrink-0",children:f})]})}),v=a(24277),w=function(){var b=(0,d.useState)(null),a=b[0],e=b[1];(0,d.useEffect)(function(){i.x1.serverless.proxy.kami.netease.get().then(function(a){e(a)}).catch(function(a){h.yw.error(a.message)})},[]);var f=(0,o.e)().event,c=(0,d.useCallback)(function(){f({action:n.b.Click,label:"\u97F3\u4E50\u9875\u9762\u70B9\u51FB\u53BB\u4E2A\u4EBA\u4E3B\u9875"})},[]);return a?(0,g.jsxs)("main",{children:[(0,g.jsx)(m.p,{title:"\u6B4C\u5355"}),a.detail&&(0,g.jsx)("div",{className:"flex my-2 justify-end",children:(0,g.jsxs)("a",{href:"https://music.163.com/#/user/home?id=".concat(a.detail.userId),target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-center",onClick:c,children:[(0,g.jsx)(l.f3,{height:"3rem",width:"3rem"}),(0,g.jsx)("span",{className:"ml-2",children:a.detail.nickname})]})}),(0,g.jsx)(s,{name:"\u5468\u6392\u884C",src:"https://p3.music.126.net/4HGEnXVexEfBACKi7wbq8A==/3390893860854924.jpg",data:a.weekdata}),(0,g.jsx)(s,{name:"\u603B\u6392\u884C",data:a.alldata,src:"https://p1.music.126.net/xTCCKfCJuEh2ohPZDNMDLw==/19193074975054252.jpg"}),(0,g.jsx)(s,{name:a.playlist.name,src:a.playlist.coverImgUrl,data:a.playlist.data.slice(0,10)})]}):(0,g.jsx)(v.g,{})}},98656:function(a){a.exports={"kami-music":"SectionMusic_kami-music__njcLu","sticky-cover":"SectionMusic_sticky-cover__73E_7","music-list":"SectionMusic_music-list__a8CTZ","song-item":"SectionMusic_song-item__3SSVt",num:"SectionMusic_num__w2I13",playing:"SectionMusic_playing__vHAOP",active:"SectionMusic_active__ttcvK","music-cover":"SectionMusic_music-cover__010Gd","fixed-cover":"SectionMusic_fixed-cover__Gljcm",fixed:"SectionMusic_fixed__H6rDt",bottom:"SectionMusic_bottom__MT7NB"}},78091:function(a){a.exports={loading:"Loading_loading__7nOdi"}}},function(a){a.O(0,[8337,9774,2888,179],function(){return a(a.s=57374)}),_N_E=a.O()}])