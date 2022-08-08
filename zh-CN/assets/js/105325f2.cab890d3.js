"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[50329],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),s=c(t),m=i,h=s["".concat(p,".").concat(m)]||s[m]||u[m]||o;return t?r.createElement(h,l(l({ref:n},d),{},{components:t})):r.createElement(h,l({ref:n},d))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,l=new Array(o);l[0]=s;var a={};for(var p in n)hasOwnProperty.call(n,p)&&(a[p]=n[p]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var c=2;c<o;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},66990:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return d},default:function(){return s}});var r=t(87462),i=t(63366),o=(t(67294),t(3905)),l=["components"],a={title:"Linkis \u7ba1\u7406\u53f0\u7f16\u8bd1",sidebar_position:4},p=void 0,c={unversionedId:"development/web-build",id:"development/web-build",isDocsHomePage:!1,title:"Linkis \u7ba1\u7406\u53f0\u7f16\u8bd1",description:"1. \u524d\u7f6e\u51c6\u5907",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/web-build.md",sourceDirName:"development",slug:"/development/web-build",permalink:"/zh-CN/docs/1.1.3/development/web-build",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/web-build.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Linkis \u7ba1\u7406\u53f0\u7f16\u8bd1",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\u5982\u4f55\u5b9e\u73b0\u4e00\u4e2a\u65b0\u5f15\u64ce",permalink:"/zh-CN/docs/1.1.3/development/new-engine-conn"},next:{title:"Swwager \u6ce8\u89e3\u4f7f\u7528\u8bf4\u660e",permalink:"/zh-CN/docs/1.1.3/development/swwager-instructions"}},d=[{value:"1. \u524d\u7f6e\u51c6\u5907",id:"1-\u524d\u7f6e\u51c6\u5907",children:[]},{value:"1.1 \u5b89\u88c5Node.js",id:"11-\u5b89\u88c5nodejs",children:[]},{value:"1.2 \u6e90\u7801\u83b7\u53d6",id:"12-\u6e90\u7801\u83b7\u53d6",children:[]},{value:"2. \u7f16\u8bd1",id:"2-\u7f16\u8bd1",children:[]},{value:"2.1 \u5b89\u88c5npm\u4f9d\u8d56",id:"21-\u5b89\u88c5npm\u4f9d\u8d56",children:[]},{value:"2.2. \u6253\u5305\u9879\u76ee",id:"22-\u6253\u5305\u9879\u76ee",children:[]},{value:"3 . \u6ce8\u610f\u4e8b\u9879",id:"3--\u6ce8\u610f\u4e8b\u9879",children:[{value:"3.1 Windows\u4e0bnpm install \u6b65\u9aa4\u62a5\u9519",id:"31-windows\u4e0bnpm-install-\u6b65\u9aa4\u62a5\u9519",children:[]},{value:"3.2  \u5982\u679c\u51fa\u73b0\u517c\u5bb9\u95ee\u9898,\u5efa\u8bae\u91cd\u65b0\u5b89\u88c5node",id:"32--\u5982\u679c\u51fa\u73b0\u517c\u5bb9\u95ee\u9898\u5efa\u8bae\u91cd\u65b0\u5b89\u88c5node",children:[]},{value:"3.3  npm install\u4e0b\u8f7d\u524d\u7aef\u4f9d\u8d56\u65e0\u6cd5\u6210\u529f",id:"33--npm-install\u4e0b\u8f7d\u524d\u7aef\u4f9d\u8d56\u65e0\u6cd5\u6210\u529f",children:[]}]}],u={toc:d};function s(e){var n=e.components,t=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"1-\u524d\u7f6e\u51c6\u5907"},"1. \u524d\u7f6e\u51c6\u5907"),(0,o.kt)("h2",{id:"11-\u5b89\u88c5nodejs"},"1.1 \u5b89\u88c5Node.js"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u8be5\u6b65\u9aa4\u4ec5\u7b2c\u4e00\u6b21\u4f7f\u7528\u65f6\u9700\u8981\u6267\u884c,\u5982\u679c\u5df2\u6709node\u73af\u5883\uff0c\u53ef\u8df3\u8fc7 ")),(0,o.kt)("p",null,"\u5c06Node.js\u4e0b\u8f7d\u5230\u672c\u5730\uff0c\u5b89\u88c5\u5373\u53ef\u3002\u4e0b\u8f7d\u5730\u5740\uff1a",(0,o.kt)("a",{parentName:"p",href:"http://nodejs.cn/download/"},"http://nodejs.cn/download/")," \uff08\u5efa\u8bae\u4f7f\u7528node v14\u7248\u672c\uff09"),(0,o.kt)("h2",{id:"12-\u6e90\u7801\u83b7\u53d6"},"1.2 \u6e90\u7801\u83b7\u53d6"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u65b9\u5f0f1\uff1a\u4ece",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis"},"github\u4ed3\u5e93")," ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis"},"https://github.com/apache/incubator-linkis")," \u83b7\u53d6\u9879\u76ee\u7684\u6e90\u4ee3\u7801\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u65b9\u5f0f2\uff1a\u4ece",(0,o.kt)("a",{parentName:"li",href:"https://linkis.apache.org/download/main"},"linkis\u7684\u5b98\u65b9\u4e0b\u8f7d\u9875\u9762")," ",(0,o.kt)("a",{parentName:"li",href:"https://linkis.apache.org/download/main"},"https://linkis.apache.org/download/main")," \u4e0b\u8f7d\u6240\u9700\u7248\u672c\u7684\u6e90\u7801\u5305\u3002")),(0,o.kt)("h2",{id:"2-\u7f16\u8bd1"},"2. \u7f16\u8bd1"),(0,o.kt)("h2",{id:"21-\u5b89\u88c5npm\u4f9d\u8d56"},"2.1 \u5b89\u88c5npm\u4f9d\u8d56"),(0,o.kt)("p",null,"\u5728\u7ec8\u7aef\u547d\u4ee4\u884c\u4e2d\u6267\u884c\u4ee5\u4e0b\u6307\u4ee4\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"#\u8fdb\u5165\u9879\u76eeWEB\u6839\u76ee\u5f55\n$ cd incubator-linkis/web\n#\u5b89\u88c5\u9879\u76ee\u6240\u9700\u4f9d\u8d56\n$ npm install\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u8be5\u6b65\u9aa4\u4ec5\u7b2c\u4e00\u6b21\u4f7f\u7528\u65f6\u9700\u8981\u6267\u884c\u3002")),(0,o.kt)("h2",{id:"22-\u6253\u5305\u9879\u76ee"},"2.2. \u6253\u5305\u9879\u76ee"),(0,o.kt)("p",null,"\u5728\u7ec8\u7aef\u547d\u4ee4\u884c\u6267\u884c\u4ee5\u4e0b\u6307\u4ee4\u5bf9\u9879\u76ee\u8fdb\u884c\u6253\u5305\uff0c\u751f\u6210\u538b\u7f29\u540e\u7684\u90e8\u7f72\u5b89\u88c5\u5305\u3002\n\u68c0\u67e5web/package.json\uff0cweb/.env\u6587\u4ef6\uff0c\u68c0\u67e5\u524d\u7aef\u7ba1\u7406\u53f0\u7248\u672c\u53f7\u662f\u5426\u6b63\u786e\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ npm run build\n")),(0,o.kt)("p",null,"\u4e0a\u8ff0\u547d\u4ee4\u6267\u884c\u6210\u529f\u540e\uff0c\u4f1a\u751f\u6210\u524d\u7aef\u7ba1\u7406\u53f0\u5b89\u88c5\u5305 ",(0,o.kt)("inlineCode",{parentName:"p"},"apache-linkis-${version}-incubating-web-bin.tar.gz"),"\uff0c\u53ef\u4ee5\u76f4\u63a5\u5c06\u8be5\u6587\u4ef6\u5939\u653e\u8fdb\u60a8\u7684\u9759\u6001\u670d\u52a1\u5668\u4e2d\uff0c\u6216\u8005\u53c2\u8003",(0,o.kt)("a",{parentName:"p",href:"/zh-CN/docs/1.1.3/deployment/web-install"},"\u5b89\u88c5\u6587\u6863"),"\uff0c\u4f7f\u7528\u811a\u672c\u8fdb\u884c\u90e8\u7f72\u5b89\u88c5\u3002"),(0,o.kt)("h2",{id:"3--\u6ce8\u610f\u4e8b\u9879"},"3 . \u6ce8\u610f\u4e8b\u9879"),(0,o.kt)("h3",{id:"31-windows\u4e0bnpm-install-\u6b65\u9aa4\u62a5\u9519"},"3.1 Windows\u4e0bnpm install \u6b65\u9aa4\u62a5\u9519"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'Error: Can\'t find Python executable "python", you can set the PYTHON env variable\n\u5b89\u88c5windows-build-tools \uff08\u7ba1\u7406\u5458\u6743\u9650\uff09\n$ npm install --global --production windows-build-tools\n\u5b89\u88c5node-gyp\n$ npm install --global node-gyp\n\n2.\u5982\u679c\u7f16\u8bd1\u5931\u8d25 \u8bf7\u6309\u5982\u4e0b\u6b65\u9aa4\u6e05\u7406\u540e\u91cd\u65b0\u6267\u884c\n#\u8fdb\u5165\u9879\u76ee\u5de5\u4f5c\u76ee\u5f55\uff0c\u5220\u9664 node_modules\n$ rm -rf node_modules\n#\u5220\u9664 package-lock.json\n$ rm -rf package-lock.json\n#\u6e05\u9664 npm \u7f13\u5b58\n$ npm cache clear --force\n#\u91cd\u65b0\u4e0b\u8f7d\u4f9d\u8d56\n$ npm install\n\n')),(0,o.kt)("h3",{id:"32--\u5982\u679c\u51fa\u73b0\u517c\u5bb9\u95ee\u9898\u5efa\u8bae\u91cd\u65b0\u5b89\u88c5node"},"3.2  \u5982\u679c\u51fa\u73b0\u517c\u5bb9\u95ee\u9898,\u5efa\u8bae\u91cd\u65b0\u5b89\u88c5node"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/zh-cn/download/"},"node\u4e0b\u8f7d\u5730\u5740")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"1.\u67e5\u770bnode\u7248\u672c(\u63a8\u8350\u4f7f\u7528node v14\u7248\u672c)\n$ node -v\n2.\u4e0b\u8f7dnode v14\u7248\u672c\u5e76\u4e14\u91cd\u65b0\u5b89\u88c5node \n")),(0,o.kt)("h3",{id:"33--npm-install\u4e0b\u8f7d\u524d\u7aef\u4f9d\u8d56\u65e0\u6cd5\u6210\u529f"},"3.3  npm install\u4e0b\u8f7d\u524d\u7aef\u4f9d\u8d56\u65e0\u6cd5\u6210\u529f"),(0,o.kt)("p",null,"\u5982\u679c\u9047\u5230\u8be5\u60c5\u51b5\uff0c\u53ef\u4ee5\u4f7f\u7528\u56fd\u5185\u7684\u6dd8\u5b9dnpm\u955c\u50cf\uff1a    "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm install -g cnpm --registry=https://registry.npm.taobao.org\n")),(0,o.kt)("p",null,"\u63a5\u7740\uff0c\u901a\u8fc7\u6267\u884c\u4ee5\u4e0b\u6307\u4ee4\u4ee3\u66ffnpm install\u6307\u4ee4"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cnpm install\n")))}s.isMDXComponent=!0}}]);