"use strict";(self.webpackChunkdaku=self.webpackChunkdaku||[]).push([[479],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),f=i,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||a;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2521:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(7462),i=(r(7294),r(3905));const a={title:"Grid"},o=void 0,l={unversionedId:"SDET/Selenium/Grid",id:"SDET/Selenium/Grid",title:"Grid",description:"Parallel Tests on Multiple Machines with Differen versions of Browser on different Platform",source:"@site/docs/SDET/Selenium/Grid.md",sourceDirName:"SDET/Selenium",slug:"/SDET/Selenium/Grid",permalink:"/SDET/Selenium/Grid",draft:!1,tags:[],version:"current",frontMatter:{title:"Grid"},sidebar:"SDETSidebar",previous:{title:"Introduction",permalink:"/SDET/Selenium/Introduction"},next:{title:"Browser Options",permalink:"/SDET/Selenium/BrowserOptions"}},c={},s=[{value:"Development Server on 4444",id:"development-server-on-4444",level:4},{value:"Architecture",id:"architecture",level:3},{value:"Hub Registration",id:"hub-registration",level:3},{value:"Hub on a specific port",id:"hub-on-a-specific-port",level:3},{value:"Node registration",id:"node-registration",level:3},{value:"Node registration on a specific port",id:"node-registration-on-a-specific-port",level:3},{value:"Connect to a hub",id:"connect-to-a-hub",level:3},{value:"connect to a hub with specific port",id:"connect-to-a-hub-with-specific-port",level:3},{value:"Reference",id:"reference",level:3}],p={toc:s},u="wrapper";function d(e){let{components:t,...a}=e;return(0,i.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Parallel Tests on Multiple Machines with Differen versions of Browser on different Platform")),(0,i.kt)("h4",{id:"development-server-on-4444"},"Development Server on 4444"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"java -jar selenium-server-<version>.jar standalone\n")),(0,i.kt)("h3",{id:"architecture"},"Architecture"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"GridOfficialArchitecture",src:r(9174).Z,width:"1208",height:"725"}),"\n",(0,i.kt)("img",{alt:"Grid.png",src:r(399).Z,width:"1204",height:"1194"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"GridFacts.png",src:r(5444).Z,width:"737",height:"192"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Not applicable in case of Safari -- It can only spin up one instance")),(0,i.kt)("h3",{id:"hub-registration"},"Hub Registration"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"java -jar selenium-server-<version>.jar hub\n")),(0,i.kt)("h3",{id:"hub-on-a-specific-port"},"Hub on a specific port"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"java -jar selenium-server-<version>.jar hub --publish-events tcp://<hub-ip>:8886 --subscribe-events tcp://<hub-ip>:8887 --port 8888\n")),(0,i.kt)("h3",{id:"node-registration"},"Node registration"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"java -jar selenium-server-<version>.jar node \n")),(0,i.kt)("h3",{id:"node-registration-on-a-specific-port"},"Node registration on a specific port"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"java -jar selenium-server-<version>.jar node --port 5555\n")),(0,i.kt)("h3",{id:"connect-to-a-hub"},"Connect to a hub"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"java -jar selenium-server-<version>.jar node --hub http://<hub-ip>:4444\n")),(0,i.kt)("h3",{id:"connect-to-a-hub-with-specific-port"},"connect to a hub with specific port"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"java -jar selenium-server-<version>.jar node --publish-events tcp://<hub-ip>:8886 --subscribe-events tcp://<hub-ip>:8887\n")),(0,i.kt)("h3",{id:"reference"},"Reference"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.selenium.dev/documentation/grid/configuration/cli_options/"},"CLI Options")))}d.isMDXComponent=!0},399:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Grid-770e531e9ba6cbb223ccdff0f2302e41.png"},5444:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/GridFacts-bb70be21631b03742feee30605ee930c.png"},9174:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/gridOfficial-1090f21bc19bce849d52a588cb2fa1fa.png"}}]);