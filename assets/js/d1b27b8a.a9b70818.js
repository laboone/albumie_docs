"use strict";(self.webpackChunkalbumie_docs=self.webpackChunkalbumie_docs||[]).push([[290],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(r),b=a,f=m["".concat(p,".").concat(b)]||m[b]||s[b]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9285:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_label:"\u30a2\u30eb\u30d0\u30e0\u306e\u4f5c\u6210",sidebar_position:5},i="\u30a2\u30eb\u30d0\u30e0\u306e\u4f5c\u6210",l={unversionedId:"tutorial/create-album",id:"tutorial/create-album",title:"\u30a2\u30eb\u30d0\u30e0\u306e\u4f5c\u6210",description:"\u30a2\u30eb\u30d0\u30e0\u4f5c\u6210\u306e\u64cd\u4f5c\u306f\u4ee5\u4e0b\u306e\u3068\u304a\u308a\u3067\u3059\u3002",source:"@site/docs/tutorial/05_create-album.md",sourceDirName:"tutorial",slug:"/tutorial/create-album",permalink:"/tutorial/create-album",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_label:"\u30a2\u30eb\u30d0\u30e0\u306e\u4f5c\u6210",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\u5199\u771f\u306e\u89e3\u6790",permalink:"/tutorial/analyze-photos"}},p={},c=[],u={toc:c};function s(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u30a2\u30eb\u30d0\u30e0\u306e\u4f5c\u6210"},"\u30a2\u30eb\u30d0\u30e0\u306e\u4f5c\u6210"),(0,a.kt)("p",null,"\u30a2\u30eb\u30d0\u30e0\u4f5c\u6210\u306e\u64cd\u4f5c\u306f\u4ee5\u4e0b\u306e\u3068\u304a\u308a\u3067\u3059\u3002"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u30da\u30fc\u30b8\u5de6\u306e\u300c\u30a2\u30eb\u30d0\u30e0\u300d\u30e1\u30cb\u30e5\u30fc\u3092\u30af\u30ea\u30c3\u30af\u3057\u3001\u30da\u30fc\u30b8\u53f3\u306b\u3042\u308b\u300c\u30a2\u30eb\u30d0\u30e0\u3092\u4f5c\u6210\u300d\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u30a2\u30eb\u30d0\u30e0\u8a73\u7d30\u30da\u30fc\u30b8\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u306e\u3067\u3001\u30a2\u30eb\u30d0\u30e0\u540d\u3092\u5165\u529b\u3057\u307e\u3059\u3002"),(0,a.kt)("p",{parentName:"li"}," ",(0,a.kt)("img",{alt:"create album",src:r(5219).Z,width:"1776",height:"773"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u30a2\u30eb\u30d0\u30e0\u306b\u5199\u771f\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u30a2\u30eb\u30d0\u30e0\u3078\u306e\u5199\u771f\u306e\u8ffd\u52a0\u306f\u5199\u771f\u306e\u4e00\u89a7\u304b\u3089\u9078\u629e\u3059\u308b\u65b9\u6cd5\u3068\u3001\u5bfe\u8c61\u306e\u4eba\u7269\u304c\u5199\u3063\u305f\u5199\u771f\u304b\u3089\u9078\u629e\u3059\u308b\u65b9\u6cd5\u304c\u3042\u308a\u307e\u3059\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u306f\u3058\u3081\u306b\u5199\u771f\u306e\u4e00\u89a7\u304b\u3089\u9078\u629e\u3057\u3066\u307f\u307e\u3057\u3087\u3046\u3002  "),(0,a.kt)("p",{parentName:"li"}," \u30da\u30fc\u30b8\u53f3\u4e0a\u90e8\u306e\u300c\u5199\u771f\u306e\u8ffd\u52a0\u300d\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u5199\u771f\u306e\u4e00\u89a7\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u306e\u3067\u3001\u30a2\u30eb\u30d0\u30e0\u306b\u8ffd\u52a0\u3057\u305f\u3044\u5199\u771f\u306e\u30c1\u30a7\u30c3\u30af\u30de\u30fc\u30af\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u5199\u771f\u306e\u9078\u629e\u304c\u7d42\u308f\u308a\u307e\u3057\u305f\u3089\u300c\u5b8c\u4e86\u300d\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,a.kt)("p",{parentName:"li"}," ",(0,a.kt)("img",{alt:"create album",src:r(2204).Z,width:"1328",height:"901"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u6b21\u306b\u5199\u771f\u3092\u8ffd\u52a0\u3057\u305f\u3044\u4eba\u7269\u306e\u5199\u771f\u304b\u3089\u9078\u629e\u3059\u308b\u65b9\u6cd5\u3092\u3084\u3063\u3066\u307f\u307e\u3057\u3087\u3046\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u30da\u30fc\u30b8\u53f3\u4e0a\u90e8\u306e\u8868\u793a\u30e1\u30cb\u30e5\u30fc\u304b\u3089\u300c\u4eba\u7269\u6bce\u306b\u8868\u793a\u300d\u3092\u9078\u629e\u3057\u307e\u3059\u3002"))),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u5199\u771f\u306e\u89e3\u6790\u5f8c\u306b\u65b0\u3057\u304f\u5199\u771f\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3057\u305f\u5834\u5408\u3084\u5225\u306e\u4eba\u7269\u3092\u65b0\u898f\u767b\u9332\u3057\u305f\u5834\u5408\u306f\u3001\u518d\u5ea6\u3001\u5199\u771f\u306e\u89e3\u6790\u4f5c\u696d\u304c\u5fc5\u8981\u306b\u306a\u308a\u307e\u3059\u3002  ")))}s.isMDXComponent=!0},5219:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/create-album-ffa69c4c94834732c2910abe3531bd9e.jpg"},2204:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/select-photo-from-photos-5ba01034e350b747358b8ab554fcf9c5.jpg"}}]);