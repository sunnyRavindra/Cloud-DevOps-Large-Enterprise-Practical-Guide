"use strict";(self.webpackChunkdaku=self.webpackChunkdaku||[]).push([[2306],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=l(n),m=i,y=u["".concat(c,".").concat(m)]||u[m]||f[m]||a;return n?r.createElement(y,s(s({ref:t},p),{},{components:n})):r.createElement(y,s({ref:t},p))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:i,s[1]=o;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2425:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var r=n(7462),i=(n(7294),n(3905));const a={title:"Smoke vs Sanity"},s=void 0,o={unversionedId:"SDET/Testing-Concepts/Smoke-vs-Sanity",id:"SDET/Testing-Concepts/Smoke-vs-Sanity",title:"Smoke vs Sanity",description:"Smoke Testing",source:"@site/docs/SDET/Testing-Concepts/Smoke-vs-Sanity.md",sourceDirName:"SDET/Testing-Concepts",slug:"/SDET/Testing-Concepts/Smoke-vs-Sanity",permalink:"/SDET/Testing-Concepts/Smoke-vs-Sanity",draft:!1,tags:[],version:"current",frontMatter:{title:"Smoke vs Sanity"},sidebar:"SDETSidebar",previous:{title:"Priority vs Severity",permalink:"/SDET/Testing-Concepts/Priority-vs-severity"},next:{title:"Functional vs Non Functional",permalink:"/SDET/Testing-Concepts/Functional-vs-NonFunctional"}},c={},l=[{value:"Smoke Testing",id:"smoke-testing",level:3},{value:"Sanity Testing",id:"sanity-testing",level:3}],p={toc:l},u="wrapper";function f(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"smoke-testing"},"Smoke Testing"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Purpose:")," Smoke testing, also known as build verification testing, is a preliminary test that checks whether the software build is stable enough for more comprehensive testing. It helps ensure that the critical functionalities of the application work without major issues."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Scope:")," Smoke tests cover a basic set of test cases that exercise core features and critical paths of the software. These tests do not aim to explore all functionalities but focus on essential functionality."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Execution Time:")," Smoke tests are quick to execute and are typically run after a new build is deployed. If a build fails the smoke test, it indicates that there are severe defects that need immediate attention.")),(0,i.kt)("h3",{id:"sanity-testing"},"Sanity Testing"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Purpose:")," Sanity testing is a subset of regression testing that focuses on verifying that specific code changes or new features have not adversely affected the existing, stable functionalities of the application. It ensures that the recent modifications have not introduced unexpected issues."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Scope:")," Sanity tests are narrower in scope than comprehensive regression tests. They concentrate on the areas of the application affected by recent changes or enhancements."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Execution Time:")," Sanity tests are relatively quick and are typically performed during the later stages of the testing cycle, after more extensive testing has taken place.")),(0,i.kt)("p",null,"In summary, both smoke testing and sanity testing are important types of software testing, but they serve different purposes and are conducted at different stages of the testing process. Smoke testing determines whether a newly built application is fit for further testing, while sanity testing verifies that specific changes or new features have not broken the existing, stable parts of the application. Both testing types are designed to catch critical issues early in the development cycle."))}f.isMDXComponent=!0}}]);