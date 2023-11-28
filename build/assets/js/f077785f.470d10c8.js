"use strict";(self.webpackChunkdaku=self.webpackChunkdaku||[]).push([[9338],{3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>m});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),s=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},c=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},u="mdxType",g={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},y=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,p=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),u=s(r),y=a,m=u["".concat(p,".").concat(y)]||u[y]||g[y]||i;return r?n.createElement(m,o(o({ref:e},c),{},{components:r})):n.createElement(m,o({ref:e},c))}));function m(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,o=new Array(i);o[0]=y;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l[u]="string"==typeof t?t:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},7473:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const i={title:"Playwright Into"},o=void 0,l={unversionedId:"SDET/Playwright/Introduction",id:"SDET/Playwright/Introduction",title:"Playwright Into",description:"Reference https://playwright.dev/",source:"@site/docs/SDET/Playwright/Introduction.md",sourceDirName:"SDET/Playwright",slug:"/SDET/Playwright/Introduction",permalink:"/SDET/Playwright/Introduction",draft:!1,tags:[],version:"current",frontMatter:{title:"Playwright Into"},sidebar:"SDETSidebar",previous:{title:"Waterafall Project",permalink:"/SDET/Jira/WaterFall-Project"},next:{title:"Maven Introduction",permalink:"/SDET/Maven/Introduction"}},p={},s=[],c={toc:s},u="wrapper";function g(t){let{components:e,...r}=t;return(0,a.kt)(u,(0,n.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Reference ",(0,a.kt)("inlineCode",{parentName:"p"},"https://playwright.dev/")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Cross-browser,Cross-platform, Mobile, Web and API's automation using TypeScript, JavaScript, Python, .NET and Java."),(0,a.kt)("li",{parentName:"ol"},"Supports Auto-wait, Assertions for Dynammic pages (like react pages), Tracing using Test retry stratagy and ditching Same origin policy."),(0,a.kt)("li",{parentName:"ol"},"Multipple Tabs multiple orrigins and multiple users with multiple test data simulation, Dorect interation interaction the browser by piercing the shadow DOM."),(0,a.kt)("li",{parentName:"ol"},"Seperate browser context for each test, Saving authentication state,")),(0,a.kt)("p",null,"Tools:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Codegen -> Record tests.\n2.Playwright inspector. -> Inspect pages."),(0,a.kt)("li",{parentName:"ol"},"Trace Viewer. Capture all the information to investigate the test failure. Playwright trace contains test execution screencast, live DOM snapshots, action explorer, test source, and many more.")),(0,a.kt)("p",null,"Installation Guide: ",(0,a.kt)("a",{parentName:"p",href:"https://playwright.dev/docs/intro#installing-playwright"},"https://playwright.dev/docs/intro#installing-playwright")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Javascript"},"npx playwright test //Run tests\nnpx playwright test --ui //Run tests with debugging\nnpx playwright show-report //Show test resuts\n")),(0,a.kt)("h4",{id:""}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-JavaScript"},"import { test, expect } from '@playwright/test'; //Basic import\n\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Test"},"test('This is the first test', async ({ page }) => {\n  await page.goto('https://playwright.dev/');\n\n  // Expect a title \"to contain\" a substring.\n  await expect(page).toHaveTitle(/Playwright/);\n});\n")))}g.isMDXComponent=!0}}]);