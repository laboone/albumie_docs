"use strict";(self.webpackChunkalbumie_docs=self.webpackChunkalbumie_docs||[]).push([[839],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,f=d["".concat(c,".").concat(m)]||d[m]||s[m]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6220:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_label:"\u30a2\u30eb\u30d0\u30e0\u306e\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9",sidebar_position:6},i="\u30a2\u30eb\u30d0\u30e0\u306e\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9",l={unversionedId:"tutorial/download-album",id:"tutorial/download-album",title:"\u30a2\u30eb\u30d0\u30e0\u306e\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9",description:"\u30a2\u30eb\u30d0\u30e0\u306b\u8ffd\u52a0\u3057\u305f\u5199\u771f\u306f\u3001\u30d5\u30a1\u30a4\u30eb\u540d\u4e00\u89a7\u3068\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3057\u305f\u5143\u30d5\u30a1\u30a4\u30eb\u306e\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u304c\u3067\u304d\u307e\u3059\u3002",source:"@site/docs/tutorial/06_download-album.md",sourceDirName:"tutorial",slug:"/tutorial/download-album",permalink:"/tutorial/download-album",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_label:"\u30a2\u30eb\u30d0\u30e0\u306e\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"\u30a2\u30eb\u30d0\u30e0\u306e\u5199\u771f\u9078\u3073",permalink:"/tutorial/create-album"},next:{title:"\u5199\u771f\u3092\u5206\u3051\u3066\u7ba1\u7406\u3059\u308b",permalink:"/advanced/create-collection"}},c={},p=[],u={toc:p};function s(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u30a2\u30eb\u30d0\u30e0\u306e\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9"},"\u30a2\u30eb\u30d0\u30e0\u306e\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9"),(0,o.kt)("p",null,"\u30a2\u30eb\u30d0\u30e0\u306b\u8ffd\u52a0\u3057\u305f\u5199\u771f\u306f\u3001\u30d5\u30a1\u30a4\u30eb\u540d\u4e00\u89a7\u3068\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3057\u305f\u5143\u30d5\u30a1\u30a4\u30eb\u306e\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u304c\u3067\u304d\u307e\u3059\u3002  "),(0,o.kt)("p",null,"\u30da\u30fc\u30b8\u53f3\u4e0a\u90e8\u306e\u8868\u793a\u30e1\u30cb\u30e5\u30fc\u3092\u300c\u30a2\u30eb\u30d0\u30e0\u8868\u793a\u300d\u306b\u3057\u3066\u300c\ufe19\u300d\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3001\u300c\u30d5\u30a1\u30a4\u30eb\u540d\u4e00\u89a7\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u300d\u3092\u9078\u629e\u3059\u308b\u3068\u30d5\u30a1\u30a4\u30eb\u540d\u4e00\u89a7\u3001\u300c\u30d5\u30a1\u30a4\u30eb\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u300d\u3092\u9078\u629e\u3059\u308b\u3068\u30d5\u30a1\u30a4\u30eb\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3067\u304d\u307e\u3059\u3002  "),(0,o.kt)("p",null," ",(0,o.kt)("img",{alt:"\u30d5\u30a1\u30a4\u30eb\u306e\u30a8\u30af\u30b9\u30dd\u30fc\u30c8",src:r(9043).Z,width:"1594",height:"574"})),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u30d5\u30a1\u30a4\u30eb\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3059\u308b\u5834\u5408\u3001\u3054\u5229\u7528\u306e\u30d6\u30e9\u30a6\u30b6\u306b\u3088\u3063\u3066\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u8907\u6570\u30d5\u30a1\u30a4\u30eb\u306e\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u306e\u8a31\u53ef\u3092\u6c42\u3081\u308b\u30dd\u30c3\u30d7\u30a2\u30c3\u30d7\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u306e\u3067\u8a31\u53ef\u3059\u308b\u8a2d\u5b9a\u3092\u304a\u9858\u3044\u3057\u307e\u3059\u3002"),"  ",(0,o.kt)("img",{src:"/img/docs/allow-to-download.jpg",alt:"\u8907\u6570\u30d5\u30a1\u30a4\u30eb\u306e\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u306e\u8a31\u53ef",width:"500"})),(0,o.kt)("p",null,"\u57fa\u672c\u7684\u306a\u64cd\u4f5c\u65b9\u6cd5\u306f\u4ee5\u4e0a\u3067\u3059\u3002  "),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/advanced/create-collection"},"\u4e00\u6b69\u3059\u3059\u3093\u3060\u64cd\u4f5c"),"\u306e\u30da\u30fc\u30b8\u3067\u306f\u3001\u5199\u771f\u306e\u7ba1\u7406\u65b9\u6cd5\u3084\u4ed6\u306e\u30e6\u30fc\u30b6\u3092\u62db\u5f85\u3059\u308b\u65b9\u6cd5\u306a\u3069\u3092\u8aac\u660e\u3057\u3066\u3044\u307e\u3059\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","\u5fc5\u8981\u306b\u5fdc\u3058\u3066\u3054\u78ba\u8a8d\u304f\u3060\u3055\u3044\u3002"))}s.isMDXComponent=!0},9043:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/export-text-or-file-6cc208631ebb703a1627ec843a48166d.jpg"}}]);