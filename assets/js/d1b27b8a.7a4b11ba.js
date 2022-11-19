"use strict";(self.webpackChunkalbumie_docs=self.webpackChunkalbumie_docs||[]).push([[290],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>b});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(r),b=n,f=u["".concat(l,".").concat(b)]||u[b]||m[b]||o;return r?a.createElement(f,p(p({ref:t},s),{},{components:r})):a.createElement(f,p({ref:t},s))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,p=new Array(o);p[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,p[1]=i;for(var c=2;c<o;c++)p[c]=r[c];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9285:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const o={sidebar_label:"\u30a2\u30eb\u30d0\u30e0\u306e\u4f5c\u6210",sidebar_position:5},p="\u30a2\u30eb\u30d0\u30e0\u306e\u4f5c\u6210",i={unversionedId:"tutorial/create-album",id:"tutorial/create-album",title:"\u30a2\u30eb\u30d0\u30e0\u306e\u4f5c\u6210",description:"\u30a2\u30eb\u30d0\u30e0\u4f5c\u6210\u306e\u64cd\u4f5c\u306f\u4ee5\u4e0b\u306e\u3068\u304a\u308a\u3067\u3059\u3002",source:"@site/docs/tutorial/05_create-album.md",sourceDirName:"tutorial",slug:"/tutorial/create-album",permalink:"/tutorial/create-album",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_label:"\u30a2\u30eb\u30d0\u30e0\u306e\u4f5c\u6210",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\u5199\u771f\u306e\u89e3\u6790",permalink:"/tutorial/analyze-photos"}},l={},c=[],s={toc:c};function m(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u30a2\u30eb\u30d0\u30e0\u306e\u4f5c\u6210"},"\u30a2\u30eb\u30d0\u30e0\u306e\u4f5c\u6210"),(0,n.kt)("p",null,"\u30a2\u30eb\u30d0\u30e0\u4f5c\u6210\u306e\u64cd\u4f5c\u306f\u4ee5\u4e0b\u306e\u3068\u304a\u308a\u3067\u3059\u3002"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u30da\u30fc\u30b8\u5de6\u306e\u300c\u30a2\u30eb\u30d0\u30e0\u300d\u30e1\u30cb\u30e5\u30fc\u3092\u30af\u30ea\u30c3\u30af\u3057\u3001\u30da\u30fc\u30b8\u53f3\u306b\u3042\u308b\u300c\u30a2\u30eb\u30d0\u30e0\u3092\u4f5c\u6210\u300d\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","\u30a2\u30eb\u30d0\u30e0\u8a73\u7d30\u30da\u30fc\u30b8\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u306e\u3067\u3001\u30a2\u30eb\u30d0\u30e0\u540d\u3092\u5165\u529b\u3057\u307e\u3059\u3002"),(0,n.kt)("p",{parentName:"li"}," ",(0,n.kt)("img",{alt:"create album",src:r(5219).Z,width:"1776",height:"773"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u30a2\u30eb\u30d0\u30e0\u306b\u5199\u771f\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","\u30a2\u30eb\u30d0\u30e0\u3078\u306e\u5199\u771f\u306e\u8ffd\u52a0\u306f\u5199\u771f\u306e\u4e00\u89a7\u304b\u3089\u9078\u629e\u3059\u308b\u65b9\u6cd5\u3068\u3001\u5bfe\u8c61\u306e\u4eba\u7269\u304c\u5199\u3063\u305f\u5199\u771f\u304b\u3089\u9078\u629e\u3059\u308b\u65b9\u6cd5\u304c\u3042\u308a\u307e\u3059\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","\u306f\u3058\u3081\u306b\u5199\u771f\u306e\u4e00\u89a7\u304b\u3089\u9078\u629e\u3057\u3066\u307f\u307e\u3057\u3087\u3046\u3002  "),(0,n.kt)("p",{parentName:"li"}," \u30da\u30fc\u30b8\u53f3\u4e0a\u90e8\u306e\u300c\u5199\u771f\u306e\u8ffd\u52a0\u300d\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","\u5199\u771f\u306e\u4e00\u89a7\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u306e\u3067\u3001\u30a2\u30eb\u30d0\u30e0\u306b\u8ffd\u52a0\u3057\u305f\u3044\u5199\u771f\u306e\u30c1\u30a7\u30c3\u30af\u30de\u30fc\u30af\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","\u5199\u771f\u306e\u9078\u629e\u304c\u7d42\u308f\u308a\u307e\u3057\u305f\u3089\u300c\u5b8c\u4e86\u300d\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u3001\u30a2\u30eb\u30d0\u30e0\u306b\u9078\u629e\u3057\u305f\u5199\u771f\u304c\u8ffd\u52a0\u3055\u308c\u307e\u3059\u3002"),(0,n.kt)("p",{parentName:"li"}," ",(0,n.kt)("img",{alt:"select photo from photos",src:r(2204).Z,width:"1328",height:"901"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u6b21\u306b\u5199\u771f\u3092\u8ffd\u52a0\u3057\u305f\u3044\u4eba\u7269\u306e\u5199\u771f\u304b\u3089\u9078\u629e\u3059\u308b\u65b9\u6cd5\u3092\u3084\u3063\u3066\u307f\u307e\u3057\u3087\u3046\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","\u30da\u30fc\u30b8\u53f3\u4e0a\u90e8\u306e\u8868\u793a\u30e1\u30cb\u30e5\u30fc\u304b\u3089\u300c\u4eba\u7269\u6bce\u306b\u8868\u793a\u300d\u3092\u9078\u629e\u3057\u307e\u3059\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","\u3053\u306e\u30da\u30fc\u30b8\u3067\u306f\u4eba\u7269\u6bce\u306b\u30a2\u30eb\u30d0\u30e0\u5185\u306b\u3042\u308b\u5199\u771f\u3092\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002"),(0,n.kt)("p",{parentName:"li"}," ",(0,n.kt)("img",{alt:"photos in album by person",src:r(117).Z,width:"1399",height:"902"})))),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5199\u771f\u3092\u8ffd\u52a0\u3057\u305f\u3044\u4eba\u7269\u306e\u53f3\u306b\u3042\u308b\u300c\u3053\u306e\u4eba\u7269\u306e\u4ed6\u306e\u5199\u771f\u3092\u8ffd\u52a0\u300d\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","\u5bfe\u8c61\u306e\u4eba\u7269\u306e\u5199\u771f\u4e00\u89a7\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u306e\u3067\u3001\u30a2\u30eb\u30d0\u30e0\u306b\u8ffd\u52a0\u3057\u305f\u3044\u5199\u771f\u306e\u30c1\u30a7\u30c3\u30af\u30de\u30fc\u30af\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","\u5199\u771f\u306e\u9078\u629e\u304c\u7d42\u308f\u308a\u307e\u3057\u305f\u3089\u300c\u5b8c\u4e86\u300d\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u3001\u30a2\u30eb\u30d0\u30e0\u306b\u9078\u629e\u3057\u305f\u5199\u771f\u304c\u8ffd\u52a0\u3055\u308c\u307e\u3059\u3002"),(0,n.kt)("p",{parentName:"li"}," ",(0,n.kt)("img",{alt:"select photo from person&#39;s photos",src:r(7986).Z,width:"1240",height:"972"})))),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"\u5199\u771f\u306e\u9078\u629e\u30da\u30fc\u30b8\u3067\u306f\u5199\u771f\u306e\u4e26\u3073\u9806\u3092\u300c\u64ae\u5f71\u65e5\u306e\u65b0\u3057\u3044\u9806\u300d\u3001\u300c\u64ae\u5f71\u65e5\u306e\u53e4\u3044\u9806\u300d\u3001\u300c\u9854\u306e\u5927\u304d\u3055\u9806\u300d\u3001\u300c\u4f3c\u3066\u3044\u308b\u9806\u300d\u304b\u3089\u9078\u629e\u3067\u304d\u307e\u3059\u3002  ")),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u30a2\u30eb\u30d0\u30e0\u306b\u8ffd\u52a0\u3057\u305f\u5199\u771f\u306e\u30d5\u30a1\u30a4\u30eb\u540d\u4e00\u89a7\u306f\u30c6\u30ad\u30b9\u30c8\u30d5\u30a1\u30a4\u30eb\u306b\u51fa\u529b\u3067\u304d\u307e\u3059\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","\u30da\u30fc\u30b8\u53f3\u4e0a\u90e8\u306e\u8868\u793a\u30e1\u30cb\u30e5\u30fc\u3092\u300c\u30a2\u30eb\u30d0\u30e0\u8868\u793a\u300d\u306b\u3057\u3066\u300c\ufe19\u300d\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u300c\u30d5\u30a1\u30a4\u30eb\u540d\u4e00\u89a7\u3092\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u300d\u3092\u9078\u629e\u3059\u308b\u3068\u51fa\u529b\u3055\u308c\u307e\u3059\u3002"),(0,n.kt)("p",{parentName:"li"}," ",(0,n.kt)("img",{alt:"export to text",src:r(8178).Z,width:"1094",height:"412"})))))}m.isMDXComponent=!0},117:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/album-by-person-87116ece7aa0a4e5042138b063b00e8b.jpg"},5219:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/create-album-ffa69c4c94834732c2910abe3531bd9e.jpg"},8178:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/export-to-text-e209870376d858568dd69cbaf6603328.jpg"},7986:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/select-photo-from-person-photos-e18bda24cb071fe6b81edcf2cd7fa49e.jpg"},2204:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/select-photo-from-photos-5ba01034e350b747358b8ab554fcf9c5.jpg"}}]);