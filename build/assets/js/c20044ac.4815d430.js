"use strict";(self.webpackChunkdaku=self.webpackChunkdaku||[]).push([[2954],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(n),p=i,f=m["".concat(c,".").concat(p)]||m[p]||d[p]||a;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6745:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(7462),i=(n(7294),n(3905));const a={title:"Introduction"},o=void 0,l={unversionedId:"SDET/Selenium/Introduction",id:"SDET/Selenium/Introduction",title:"Introduction",description:"Components",source:"@site/docs/SDET/Selenium/Introduction.md",sourceDirName:"SDET/Selenium",slug:"/SDET/Selenium/Introduction",permalink:"/SDET/Selenium/Introduction",draft:!1,tags:[],version:"current",frontMatter:{title:"Introduction"},sidebar:"SDETSidebar",next:{title:"Grid",permalink:"/SDET/Selenium/Grid"}},c={},u=[{value:"Components",id:"components",level:3},{value:"Architecture",id:"architecture",level:3},{value:"Initialise Browser",id:"initialise-browser",level:3},{value:"Selenium Manager(<em>official driver manager</em>)",id:"selenium-managerofficial-driver-manager",level:3},{value:"Code Reference",id:"code-reference",level:3}],s={toc:u},m="wrapper";function d(e){let{components:t,...a}=e;return(0,i.kt)(m,(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"components"},"Components"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Selenium",src:n(5196).Z,width:"835",height:"275"})),(0,i.kt)("h3",{id:"architecture"},"Architecture"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Selenium",src:n(9843).Z,width:"897",height:"775"})),(0,i.kt)("h3",{id:"initialise-browser"},"Initialise Browser"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Selenium",src:n(6253).Z,width:"2369",height:"1067"})),(0,i.kt)("h3",{id:"selenium-managerofficial-driver-manager"},"Selenium Manager(",(0,i.kt)("em",{parentName:"h3"},"official driver manager"),")"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Selenium bindings use this tool by default")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"SeleniumManager.png",src:n(8011).Z,width:"697",height:"759"})),(0,i.kt)("h3",{id:"code-reference"},"Code Reference"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sunnyRavindra/DataDrivenFramework/blob/main/src/test/java/com/amazon/testcase/InitializeBrowser.java"},"Browser Initialise")))}d.isMDXComponent=!0},5196:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Selenium-2bbb0f0441677e6bd42d53db67f03292.png"},9843:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/SeleniumArchitecture-0d27f44b7ef45744f0b3d4236cbf15af.png"},6253:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/SeleniumCode-404bbde1f208943772793f37577833ba.png"},8011:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/SeleniumManager-47f2d5b3db87f7d5f77d9e20430a9712.png"}}]);