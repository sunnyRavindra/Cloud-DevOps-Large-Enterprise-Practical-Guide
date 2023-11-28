"use strict";(self.webpackChunkdaku=self.webpackChunkdaku||[]).push([[1752],{3905:(e,t,n)=>{n.d(t,{Zo:()=>f,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},f=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,f=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=i,m=p["".concat(l,".").concat(d)]||p[d]||u[d]||a;return n?r.createElement(m,o(o({ref:t},f),{},{components:n})):r.createElement(m,o({ref:t},f))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4425:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const a={title:"Defect LifeCycle"},o=void 0,s={unversionedId:"SDET/Testing-Concepts/Defect-LifeCycle",id:"SDET/Testing-Concepts/Defect-LifeCycle",title:"Defect LifeCycle",description:"The Defect Lifecycle, also known as the Bug Lifecycle or Issue Lifecycle, outlines the stages a defect or issue goes through from its discovery to its resolution. Understanding this lifecycle is crucial for efficient defect management. Here are notes on the typical stages of the Defect Lifecycle:",source:"@site/docs/SDET/Testing-Concepts/Defect-LifeCycle.md",sourceDirName:"SDET/Testing-Concepts",slug:"/SDET/Testing-Concepts/Defect-LifeCycle",permalink:"/SDET/Testing-Concepts/Defect-LifeCycle",draft:!1,tags:[],version:"current",frontMatter:{title:"Defect LifeCycle"},sidebar:"SDETSidebar",previous:{title:"Adhoc vs Exploretory",permalink:"/SDET/Testing-Concepts/Adhoc-vs-Exploretory"},next:{title:"Xray Intro",permalink:"/SDET/Xray/"}},l={},c=[],f={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Defect Lifecycle, also known as the Bug Lifecycle or Issue Lifecycle, outlines the stages a defect or issue goes through from its discovery to its resolution. Understanding this lifecycle is crucial for efficient defect management. Here are notes on the typical stages of the Defect Lifecycle:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"1. Defect Identification:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Discovery:")," A defect is discovered during testing, user feedback, or any phase of software development."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Logging:")," The defect is logged in a defect tracking system, often referred to as a bug tracking tool or issue tracking tool. It includes details like the defect's description, steps to reproduce, and its severity.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"2. Defect Triage:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Assessment:")," The defect is assessed to determine its validity and severity. It may be assigned a priority based on its impact on the software."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Assignment:")," The defect is assigned to the responsible individual or team (usually a developer or tester) who will investigate and address it.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"3. Defect Resolution:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Investigation:")," The assigned person investigates the defect to understand its root cause. This may involve reviewing code, system logs, and relevant documents."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Fixing:")," Once the cause is identified, the developer fixes the defect by modifying the code, configuration, or other relevant aspects."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Verification:")," The tester verifies the fix by retesting the software to ensure that the defect is resolved."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Validation:")," The defect is validated to ensure that the fix does not introduce new issues or negatively impact other parts of the software.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"4. Defect Closure:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Documentation:"),' If the defect is fixed and verified successfully, it is marked as "closed" in the defect tracking system. This includes documenting details of the fix and verification.'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Closure Report:")," A closure report may be generated, summarizing the defect's history and resolution, to help in knowledge sharing and future reference.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"5. Defect Reopening (if necessary):")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Rejection:")," If the defect reappears or is not fixed correctly, it may be reopened with detailed information about the regression."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Repeat Process:")," The defect is reassigned for investigation, fixing, and retesting. The lifecycle stages may be repeated until the defect is finally resolved and verified.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"6. Defect Reporting:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Communication:")," The status of defects and their resolutions are communicated to relevant stakeholders, including project managers, developers, testers, and other team members.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Key Points:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Defects may vary in severity, priority, and complexity, which impacts the time they spend in each lifecycle stage."),(0,i.kt)("li",{parentName:"ul"},"A well-organized defect tracking system and effective communication are essential for managing defects throughout their lifecycle."),(0,i.kt)("li",{parentName:"ul"},"Documentation is crucial at each stage to maintain a record of the defect's history and resolution.")),(0,i.kt)("p",null,"In summary, the Defect Lifecycle ensures a systematic approach to managing defects, from their identification to their resolution and closure. This process helps maintain software quality and provides transparency in defect management."))}u.isMDXComponent=!0}}]);