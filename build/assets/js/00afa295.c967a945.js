"use strict";(self.webpackChunkdaku=self.webpackChunkdaku||[]).push([[5881],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),i=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=i(r),f=o,d=s["".concat(p,".").concat(f)]||s[f]||m[f]||a;return r?n.createElement(d,l(l({ref:t},u),{},{components:r})):n.createElement(d,l({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[s]="string"==typeof e?e:o,l[1]=c;for(var i=2;i<a;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9514:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>i});var n=r(7462),o=(r(7294),r(3905));const a={title:"Docker Compose"},l=void 0,c={unversionedId:"SDET/Docker/Compose",id:"SDET/Docker/Compose",title:"Docker Compose",description:"- Install Docker Compose",source:"@site/docs/SDET/Docker/Compose.md",sourceDirName:"SDET/Docker",slug:"/SDET/Docker/Compose",permalink:"/SDET/Docker/Compose",draft:!1,tags:[],version:"current",frontMatter:{title:"Docker Compose"},sidebar:"SDETSidebar",previous:{title:"Interacting with container",permalink:"/SDET/Docker/ContainerInteractions"},next:{title:"Basics",permalink:"/SDET/Java/Basics"}},p={},i=[{value:"Reference",id:"reference",level:3}],u={toc:i},s="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(s,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Install Docker Compose")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo pacman -S docker-compose\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Check Docker Compose Version")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker compose version\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Start from compose file")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"compose up\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Start from compose file")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"compose down \n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"By default, named volumes in your compose file are NOT removed when running docker compose down. If you want to remove the volumes, you will need to add the --volumes flag.")),(0,o.kt)("h3",{id:"reference"},"Reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-started/08_using_compose/"},"Github Project"))))}m.isMDXComponent=!0}}]);