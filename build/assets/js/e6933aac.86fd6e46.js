"use strict";(self.webpackChunkdaku=self.webpackChunkdaku||[]).push([[4136],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(r),k=o,m=d["".concat(i,".").concat(k)]||d[k]||s[k]||a;return r?n.createElement(m,c(c({ref:t},p),{},{components:r})):n.createElement(m,c({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=k;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[d]="string"==typeof e?e:o,c[1]=l;for(var u=2;u<a;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},3946:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const a={title:"Docker"},c=void 0,l={unversionedId:"SDET/Docker/Docker-Introduction",id:"SDET/Docker/Docker-Introduction",title:"Docker",description:"Architecture",source:"@site/docs/SDET/Docker/Docker-Introduction.md",sourceDirName:"SDET/Docker",slug:"/SDET/Docker/Docker-Introduction",permalink:"/SDET/Docker/Docker-Introduction",draft:!1,tags:[],version:"current",frontMatter:{title:"Docker"},sidebar:"SDETSidebar",previous:{title:"XSS Attack",permalink:"/SDET/Security-Testing/XSS-Attack"},next:{title:"Docker Commands",permalink:"/SDET/Docker/Docker-Commands"}},i={},u=[{value:"Architecture",id:"architecture",level:3},{value:"Docker run",id:"docker-run",level:3},{value:"Docker pull",id:"docker-pull",level:3},{value:"Docker file",id:"docker-file",level:3},{value:"Build Image",id:"build-image",level:3},{value:"List containers",id:"list-containers",level:3},{value:"Stop containers",id:"stop-containers",level:3},{value:"Remove stoped containers",id:"remove-stoped-containers",level:3},{value:"Push image to dockerhub",id:"push-image-to-dockerhub",level:3},{value:"Create Volume.",id:"create-volume",level:3},{value:"Mount the created volume.",id:"mount-the-created-volume",level:3},{value:"Bind Mount",id:"bind-mount",level:3},{value:"Create network",id:"create-network",level:3},{value:"References",id:"references",level:3}],p={toc:u},d="wrapper";function s(e){let{components:t,...a}=e;return(0,o.kt)(d,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"architecture"},"Architecture"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Architecture.png",src:r(1663).Z,width:"912",height:"707"})),(0,o.kt)("h3",{id:"docker-run"},"Docker run"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ docker run -i -t ubuntu /bin/bash\n")),(0,o.kt)("h3",{id:"docker-pull"},"Docker pull"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker pull ubuntu/latest\n")),(0,o.kt)("h3",{id:"docker-file"},"Docker file"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'FROM node:18-alpine\nWORKDIR /app\nCOPY . .\nRUN yarn install --production\nCMD ["node", "src/index.js"]\nEXPOSE 3000\n')),(0,o.kt)("h3",{id:"build-image"},"Build Image"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ cd /path/to/getting-started-app\n$ docker build -t getting-started \n")),(0,o.kt)("h3",{id:"list-containers"},"List containers"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"docker ps\ndocker ps -a //list container with all those were stopped\n")),(0,o.kt)("h3",{id:"stop-containers"},"Stop containers"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ docker stop <the-container-id>\n")),(0,o.kt)("h3",{id:"remove-stoped-containers"},"Remove stoped containers"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ docker rm <the-container-id>\n")),(0,o.kt)("h3",{id:"push-image-to-dockerhub"},"Push image to dockerhub"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"docker tag getting-started YOUR-USER-NAME/getting-started\ndocker push YOUR-USER-NAME/getting-started\n")),(0,o.kt)("p",null,"Continue from here\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-started/05_persisting_data/"},"https://docs.docker.com/get-started/05_persisting_data/")),(0,o.kt)("h3",{id:"create-volume"},"Create Volume."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker volume create mynewvolume\n")),(0,o.kt)("h3",{id:"mount-the-created-volume"},"Mount the created volume."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker run -dp 3000:3000 --mount type=volume,src=mynewvolume,target=/etc/todos ubuntu \n")),(0,o.kt)("h3",{id:"bind-mount"},"Bind Mount"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker run -it --rm -v ~/code/app:/app image:latest\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},' docker run -it --mount type=bind,src="$(pwd)",target=/src ubuntu bash\n')),(0,o.kt)("h3",{id:"create-network"},"Create network"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker network create todo-app\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-d"},'services:\n  app:\n    image: node:18-alpine\n    command: sh -c "yarn install && yarn run dev"\n    ports:\n      - 127.0.0.1:3000:3000\n    working_dir: /app\n    volumes:\n      - ./:/app\n    environment:\n      MYSQL_HOST: mysql\n      MYSQL_USER: root\n      MYSQL_PASSWORD: secret\n      MYSQL_DB: todos\n\n  mysql:\n    image: mysql:8.0\n    volumes:\n      - todo-mysql-data:/var/lib/mysql\n    environment:\n      MYSQL_ROOT_PASSWORD: secret\n      MYSQL_DATABASE: todos\n\nvolumes:\n  todo-mysql-data:\n')),(0,o.kt)("h3",{id:"references"},"References"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-started/overview/"},"Docker Overview"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-started/overview/"},"Docker Quick Start Guide"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://medium.com/@saschagrunert/demystifying-containers-part-i-kernel-space-2c53d6979504"},"kernel namespaces and cgroups")))))}s.isMDXComponent=!0},1663:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Architecture-0b12ae52eebeda86042767128bfbd674.png"}}]);