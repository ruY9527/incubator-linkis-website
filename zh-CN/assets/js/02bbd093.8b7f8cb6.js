"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[86264],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),h=r,m=d["".concat(s,".").concat(h)]||d[h]||c[h]||l;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},11714:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],o={title:"\u5982\u4f55\u53c2\u4e0e\u5b98\u7f51\u8d21\u732e",sidebar_position:2.1},s=void 0,p={unversionedId:"how-to-contribute-to-website",id:"how-to-contribute-to-website",title:"\u5982\u4f55\u53c2\u4e0e\u5b98\u7f51\u8d21\u732e",description:"\u5206\u652f",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs-community/current/how-to-contribute-to-website.md",sourceDirName:".",slug:"/how-to-contribute-to-website",permalink:"/zh-CN/community/how-to-contribute-to-website",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/i18n/zh-CN/how-to-contribute-to-website.md",tags:[],version:"current",sidebarPosition:2.1,frontMatter:{title:"\u5982\u4f55\u53c2\u4e0e\u5b98\u7f51\u8d21\u732e",sidebar_position:2.1},sidebar:"tutorialSidebar",previous:{title:"\u9700\u6c42\u5e2e\u52a9",permalink:"/zh-CN/community/how-to-ask-for-help"},next:{title:"\u5982\u4f55\u53c2\u4e0e\u5f00\u53d1\u8005\u4f8b\u4f1a",permalink:"/zh-CN/community/how-to-participate-in-developer-meetings"}},u=[{value:"\u5206\u652f",id:"\u5206\u652f",children:[],level:2},{value:"1 \u9884\u89c8\u5e76\u751f\u6210\u9759\u6001\u6587\u4ef6",id:"1-\u9884\u89c8\u5e76\u751f\u6210\u9759\u6001\u6587\u4ef6",children:[],level:2},{value:"2 \u76ee\u5f55\u7ed3\u6784",id:"2-\u76ee\u5f55\u7ed3\u6784",children:[],level:2},{value:"3 \u89c4\u8303",id:"3-\u89c4\u8303",children:[{value:"3.1 \u76ee\u5f55\u547d\u540d\u89c4\u8303",id:"31-\u76ee\u5f55\u547d\u540d\u89c4\u8303",children:[],level:3},{value:"3.2 vue\u4ee5\u53ca\u9759\u6001\u8d44\u6e90\u6587\u4ef6\u547d\u540d\u89c4\u8303",id:"32-vue\u4ee5\u53ca\u9759\u6001\u8d44\u6e90\u6587\u4ef6\u547d\u540d\u89c4\u8303",children:[],level:3},{value:"3.3 \u8d44\u6e90\u8def\u5f84",id:"33-\u8d44\u6e90\u8def\u5f84",children:[],level:3},{value:"3.4 \u9875\u9762\u5185\u5bb9\u4fee\u6539",id:"34-\u9875\u9762\u5185\u5bb9\u4fee\u6539",children:[],level:3},{value:"3.5 \u9996\u9875\u9875\u9762\u4fee\u6539",id:"35-\u9996\u9875\u9875\u9762\u4fee\u6539",children:[],level:3},{value:"3.6 \u56e2\u961f\u9875\u9762\u4fee\u6539",id:"36-\u56e2\u961f\u9875\u9762\u4fee\u6539",children:[],level:3},{value:"3.7  \u7528\u6237 \u5217\u8868\u9875\u9762\u4fee\u6539",id:"37--\u7528\u6237-\u5217\u8868\u9875\u9762\u4fee\u6539",children:[],level:3},{value:"3.8 version \u5217\u8868\u9875\u9762\u4fee\u6539",id:"38-version-\u5217\u8868\u9875\u9762\u4fee\u6539",children:[],level:3},{value:"3.9 user\u5217\u8868\u9875\u4fee\u6539",id:"39-user\u5217\u8868\u9875\u4fee\u6539",children:[],level:3},{value:"3.10 \u8def\u5f84\u89c4\u8303",id:"310-\u8def\u5f84\u89c4\u8303",children:[],level:3},{value:"\u82f1\u6587\u6587\u6863\u6807\u9898\u89c4\u8303",id:"\u82f1\u6587\u6587\u6863\u6807\u9898\u89c4\u8303",children:[],level:3}],level:2},{value:"4 \u65b0\u589e\u6587\u6863",id:"4-\u65b0\u589e\u6587\u6863",children:[],level:2},{value:"5 \u5982\u4f55\u90e8\u7f72",id:"5-\u5982\u4f55\u90e8\u7f72",children:[],level:2},{value:"6 \u6ce8\u610f\u70b9",id:"6-\u6ce8\u610f\u70b9",children:[],level:2},{value:"7 \u5176\u4ed6",id:"7-\u5176\u4ed6",children:[],level:2}],c={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u5206\u652f"},"\u5206\u652f"),(0,l.kt)("p",null,"dev\u4e3a\u5f00\u53d1\u5206\u652f\uff0c\u8bf7\u5148fork\u5230\u81ea\u5df1\u7684\u4ed3\u5e93\uff0c\u57fa\u4e8edev\u5206\u652f\u521b\u5efafix/feature\u5206\u652f\uff0c\u7136\u540e\u5728\u8be5\u5206\u652f\u4e0a\u8fdb\u884c\u5f00\u53d1\u4fee\u6539\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"master  \u4e3b\u5206\u652f\ndev     \u5f00\u53d1\u5206\u652f\nasf-site    \u5b98\u7f51\u6b63\u5f0f\u73af\u5883  \u901a\u8fc7https://linkis.apache.org \u8bbf\u95ee\nasf-staging \u5b98\u7f51\u6d4b\u8bd5\u73af\u5883  \u901a\u8fc7https://linkis.staged.apache.org \u8bbf\u95ee\n")),(0,l.kt)("h2",{id:"1-\u9884\u89c8\u5e76\u751f\u6210\u9759\u6001\u6587\u4ef6"},"1 \u9884\u89c8\u5e76\u751f\u6210\u9759\u6001\u6587\u4ef6"),(0,l.kt)("p",null,"\u672c\u7f51\u7ad9\u662f\u4f7f\u7528node\u7f16\u8bd1\u7684\uff0c\u4f7f\u7528\u7684\u662fDocusaurus\u6846\u67b6\u7ec4\u4ef6"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u4e0b\u8f7d\u5e76\u5b89\u88c5 nodejs(version>12.5.0)"),(0,l.kt)("li",{parentName:"ol"},"\u514b\u9686\u4ee3\u7801\u5230\u672c\u5730 ",(0,l.kt)("inlineCode",{parentName:"li"},"git clone  git@github.com:{githubid}/incubator-linkis-website.git")),(0,l.kt)("li",{parentName:"ol"},"\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"li"},"npm install")," \u6765\u5b89\u88c5\u6240\u9700\u7684\u4f9d\u8d56\u5e93\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5728\u6839\u76ee\u5f55\u8fd0\u884c",(0,l.kt)("inlineCode",{parentName:"li"},"npm run start"),"\uff0c\u53ef\u4ee5\u8bbf\u95eehttp://localhost:3000\u67e5\u770b\u7ad9\u70b9\u82f1\u6587\u6a21\u5f0f\u9884\u89c8"),(0,l.kt)("li",{parentName:"ol"},"\u5728\u6839\u76ee\u5f55\u8fd0\u884c",(0,l.kt)("inlineCode",{parentName:"li"},"npm run start-zh"),"\uff0c\u53ef\u4ee5\u8bbf\u95eehttp://localhost:3000\u67e5\u770b\u7ad9\u70b9\u7684\u4e2d\u6587\u6a21\u5f0f\u9884\u89c8"),(0,l.kt)("li",{parentName:"ol"},"\u8981\u751f\u6210\u9759\u6001\u7f51\u7ad9\u8d44\u6e90\u6587\u4ef6\uff0c\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"li"},"npm run build"),"\u3002\u6784\u5efa\u7684\u9759\u6001\u8d44\u6e90\u5728build\u76ee\u5f55\u4e2d\u3002")),(0,l.kt)("h2",{id:"2-\u76ee\u5f55\u7ed3\u6784"},"2 \u76ee\u5f55\u7ed3\u6784"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"|-- blog      //\u535a\u5ba2\n|-- community //\u793e\u533a\n|-- docs      //\u6587\u6863  \u5b58\u653e\u4e0b\u4e00\u4e2a\u5373\u5c06\u53d1\u5e03\u7684\u7248\u672c\n|-- download  //\u4e0b\u8f7d\n|-- faq       //Q&A\n|-- i18n    \n|   `-- zh-CN //\u5bf9\u5e94\u7684\u4e2d\u6587\u6587\u6863\n|       |-- code.json\n|       |-- docusaurus-plugin-content-blog\n|       |-- docusaurus-plugin-content-docs\n|       |-- docusaurus-plugin-content-docs-community\n|       |-- docusaurus-plugin-content-docs-download\n|       |-- docusaurus-plugin-content-docs-faq\n|       `-- docusaurus-theme-classic\n|-- resource // \u67b6\u6784/\u65f6\u5e8f/\u6d41\u7a0b\u56fe\u7b49\u7684\u539f\u59cb\u5de5\u7a0b\u6587\u4ef6\n|-- src\n|   |-- components\n|   |-- css\n|   |-- js\n|   |-- pages\n|   |   |-- home\n|   |   |-- index.jsx\n|   |   |-- team\n|   |   |-- user\n|   |   `-- versions\n|   |-- styles\n|-- static //\u56fe\u7247\u9759\u6001\u8d44\u6e90\n|   |-- Images\n|   |-- Images-zh\n|   |-- faq\n|   |-- home\n|   `-- img\n|-- docusaurus.config.js\n|-- versioned_docs //\u5386\u53f2\u7248\u672c\u5b58\u6863\n|   `-- version-1.0.2\n|-- versioned_sidebars\n|   `-- version-1.0.2-sidebars.json\n`-- versions.json\n\n")),(0,l.kt)("p",null,"\u4e0b\u8868\u8bf4\u660e\u4e86\u7248\u672c\u5316\u6587\u4ef6\u5982\u4f55\u6620\u5c04\u5230\u5176\u7248\u672c\u548c\u751f\u6210\u7684 URL\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u8d44\u6e90\u8def\u5f84"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7248\u672c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bbf\u95eeURL"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"versioned_docs/version-1.0.1/hello.md")),(0,l.kt)("td",{parentName:"tr",align:null},"1.0.1"),(0,l.kt)("td",{parentName:"tr",align:null},"/docs/1.0.1/hello")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"versioned_docs/version-1.0.2/hello.md")),(0,l.kt)("td",{parentName:"tr",align:null},"1.0.2(latest \u5f53\u524d\u7a33\u5b9a\u7248\u672c)"),(0,l.kt)("td",{parentName:"tr",align:null},"/docs/latest/hello")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"docs/hello.md")),(0,l.kt)("td",{parentName:"tr",align:null},"current(\u4e0b\u4e00\u4e2a\u5c06\u53d1\u5e03\u7684\u7248\u672c 1.0.3)"),(0,l.kt)("td",{parentName:"tr",align:null},"/docs/1.0.3/hello")))),(0,l.kt)("p",null,"\u5f53\u524d\u7684\u7248\u672c\u4fe1\u606f"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u7248\u672c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bbf\u95ee\u8def\u5f84"),(0,l.kt)("th",{parentName:"tr",align:null},"\u82f1\u6587\u6587\u6863\u8def\u5f84"),(0,l.kt)("th",{parentName:"tr",align:null},"\u4e2d\u6587\u6587\u6863\u8def\u5f84"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1.0.2"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://linkis.apache.org/docs/latest/xxx(https://linkis.apache.org/zh-CN/docs/latest/xxx)"},"https://linkis.apache.org/docs/latest/xxx(https://linkis.apache.org/zh-CN/docs/latest/xxx)")),(0,l.kt)("td",{parentName:"tr",align:null},"versioned_docs/version-1.0.2/"),(0,l.kt)("td",{parentName:"tr",align:null},"i18n/zh-CN/docusaurus-plugin-content-docs/version-1.0.2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1.0.3"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://linkis.apache.org/docs/1.0.3/xxx(https://linkis.apache.org/zh-CN/docs/1.0.3/xxx)"},"https://linkis.apache.org/docs/1.0.3/xxx(https://linkis.apache.org/zh-CN/docs/1.0.3/xxx)")),(0,l.kt)("td",{parentName:"tr",align:null},"/docs"),(0,l.kt)("td",{parentName:"tr",align:null},"i18n/zh-CN/docusaurus-plugin-content-docs/current")))),(0,l.kt)("h2",{id:"3-\u89c4\u8303"},"3 \u89c4\u8303"),(0,l.kt)("h3",{id:"31-\u76ee\u5f55\u547d\u540d\u89c4\u8303"},"3.1 \u76ee\u5f55\u547d\u540d\u89c4\u8303"),(0,l.kt)("p",null,"\u5168\u90e8\u91c7\u7528\u5c0f\u5199\u65b9\u5f0f\uff0c \u4ee5\u4e2d\u4e0b\u5212\u7ebf\u5206\u9694\uff0c\u6709\u590d\u6570\u7ed3\u6784\u65f6\uff0c\u8981\u91c7\u7528\u590d\u6570\u547d\u540d\u6cd5\uff0c \u7f29\u5199\u4e0d\u7528\u590d\u6570"),(0,l.kt)("p",null,"\u6b63\u4f8b\uff1a ",(0,l.kt)("inlineCode",{parentName:"p"},"scripts / styles / components / images / utils / layouts / demo_styles / demo-scripts / img / doc")),(0,l.kt)("p",null,"\u53cd\u4f8b\uff1a ",(0,l.kt)("inlineCode",{parentName:"p"},"script / style / demoStyles / imgs / docs")),(0,l.kt)("h3",{id:"32-vue\u4ee5\u53ca\u9759\u6001\u8d44\u6e90\u6587\u4ef6\u547d\u540d\u89c4\u8303"},"3.2 vue\u4ee5\u53ca\u9759\u6001\u8d44\u6e90\u6587\u4ef6\u547d\u540d\u89c4\u8303"),(0,l.kt)("p",null,"\u5168\u90e8\u91c7\u7528\u5c0f\u5199\u65b9\u5f0f\uff0c \u4ee5\u4e2d\u5212\u7ebf\u5206\u9694"),(0,l.kt)("p",null,"\u6b63\u4f8b\uff1a ",(0,l.kt)("inlineCode",{parentName:"p"},"render-dom.js / signup.css / index.html / company-logo.png")),(0,l.kt)("p",null,"\u53cd\u4f8b\uff1a ",(0,l.kt)("inlineCode",{parentName:"p"},"renderDom.js / UserManagement.html")),(0,l.kt)("h3",{id:"33-\u8d44\u6e90\u8def\u5f84"},"3.3 \u8d44\u6e90\u8def\u5f84"),(0,l.kt)("p",null,"\u56fe\u7247\u8d44\u6e90\u7edf\u4e00\u653e\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"static/{\u6a21\u5757\u540d}"),"\u4e0b"),(0,l.kt)("p",null,"css\u7b49\u6837\u5f0f\u6587\u4ef6\u653e\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"src/css"),"\u76ee\u5f55\u4e0b"),(0,l.kt)("h3",{id:"34-\u9875\u9762\u5185\u5bb9\u4fee\u6539"},"3.4 \u9875\u9762\u5185\u5bb9\u4fee\u6539"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u9664\u4e86\u9996\u9875\u3001\u56e2\u961f\u3001\u7528\u6237\u3001Docs>All Version \u6a21\u5757\u9875\u9762\u5916\uff0c\u5176\u4f59\u9875\u9762\u90fd\u80fd\u901a\u8fc7\u5e95\u90e8\u7684'Edit this page'\u6309\u94ae \u76f4\u63a5\u8df3\u8f6c\u81f3\u5bf9\u5e94\u7684github\u7684\u8d44\u6e90\u4fee\u6539\u9875")),(0,l.kt)("h3",{id:"35-\u9996\u9875\u9875\u9762\u4fee\u6539"},"3.5 \u9996\u9875\u9875\u9762\u4fee\u6539"),(0,l.kt)("p",null,"\u8bbf\u95ee\u9875\u9762  ",(0,l.kt)("a",{parentName:"p",href:"https://linkis.apache.org/"},"https://linkis.apache.org/"),"\n\u4f4d\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"src/pages/home")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u251c\u2500home\n\u2502      config.json \u9996\u9875\u4e2d\u82f1\u6587\u7684\u914d\u7f6e  \n\u2502      index.less  \u9996\u9875\u6837\u5f0f\n")),(0,l.kt)("h3",{id:"36-\u56e2\u961f\u9875\u9762\u4fee\u6539"},"3.6 \u56e2\u961f\u9875\u9762\u4fee\u6539"),(0,l.kt)("p",null,"\u8bbf\u95ee\u9875\u9762  ",(0,l.kt)("a",{parentName:"p",href:"https://linkis.apache.org/zh-CN/team"},"https://linkis.apache.org/zh-CN/team"),"\n\u4f4d\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"src/pages/team")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u251c\u2500team\n\u2502      config.json\n\u2502      index.js\n\u2502      index.less\n")),(0,l.kt)("h3",{id:"37--\u7528\u6237-\u5217\u8868\u9875\u9762\u4fee\u6539"},"3.7  \u7528\u6237 \u5217\u8868\u9875\u9762\u4fee\u6539"),(0,l.kt)("p",null,"\u8bbf\u95ee\u9875\u9762  ",(0,l.kt)("a",{parentName:"p",href:"https://linkis.apache.org/zh-CN/user/"},"https://linkis.apache.org/zh-CN/user/")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u4f4d\u4e8e `src/pages/user`\n\u2514\u2500versions\n        config.json\n        data.json\n        img.json\n        index.js\n        index.less\n")),(0,l.kt)("h3",{id:"38-version-\u5217\u8868\u9875\u9762\u4fee\u6539"},"3.8 version \u5217\u8868\u9875\u9762\u4fee\u6539"),(0,l.kt)("p",null,"\u8bbf\u95ee\u9875\u9762  ",(0,l.kt)("a",{parentName:"p",href:"https://linkis.apache.org/zh-CN/versions/"},"https://linkis.apache.org/zh-CN/versions/")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u4f4d\u4e8e `src/pages/versions`\n\u2514\u2500versions\n        config.json\n        index.jsorchestrator/overview.md\n        index.less\n")),(0,l.kt)("h3",{id:"39-user\u5217\u8868\u9875\u4fee\u6539"},"3.9 user\u5217\u8868\u9875\u4fee\u6539"),(0,l.kt)("p",null,"Visit the page ",(0,l.kt)("a",{parentName:"p",href:"https://linkis.apache.org/zh-CN/user"},"https://linkis.apache.org/zh-CN/user")),(0,l.kt)("p",null,"\u516c\u53f8\u7684logo\u4f4d\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"static/home/user"),", \u4e14\u56fe\u7247\u7684\u5927\u5c0f\u5fc5\u987b\u662f 176 \xd7 88."),(0,l.kt)("h3",{id:"310-\u8def\u5f84\u89c4\u8303"},"3.10 \u8def\u5f84\u89c4\u8303"),(0,l.kt)("p",null,"\u5982\u679c\u5e0c\u671b\u60f3\u4ece\u4e00\u4e2amarkdown\u6587\u6863\u94fe\u63a5\u5230\u53e6\u5916\u4e00\u4e2a\u6587\u6863, \u6700\u597d\u4f7f\u7528\u7edd\u5bf9\u8def\u5f84. \u4f8b\u5982, \u5982\u679c\u5e0c\u671b\u94fe\u63a5\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"quick-deploy.md"),"\u8fd9\u4e2a\u6587\u6863, \u8def\u5f84\u5e94\u5199\u6210 ",(0,l.kt)("inlineCode",{parentName:"p"},"/docs/deployment/quick-deploy.md"),"\u3002"),(0,l.kt)("h3",{id:"\u82f1\u6587\u6587\u6863\u6807\u9898\u89c4\u8303"},"\u82f1\u6587\u6587\u6863\u6807\u9898\u89c4\u8303"),(0,l.kt)("p",null,"\u82f1\u6587\u6587\u6863\u4fa7\u8fb9\u680f\u9664\u4ecb\u8bcd\u5916\u7684\u6240\u6709\u8bcd\u9996\u5b57\u6bcd\u4f7f\u7528\u5927\u5199, \u540c\u65f6\u82f1\u6587markdown\u4e2d\u7684\u6807\u9898\u7684\u7b2c\u4e00\u4e2a\u8bcd\u9996\u5b57\u6bcd\u5e94\u5927\u5199\uff0c\u5176\u4ed6\u8bcd\u9996\u5b57\u6bcd\u5c0f\u5199\u3002"),(0,l.kt)("h2",{id:"4-\u65b0\u589e\u6587\u6863"},"4 \u65b0\u589e\u6587\u6863"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://via.placeholder.com/15/f03c15/000000?text=+",alt:"#f03c15"})," md\u6587\u6863\u5efa\u8bae\u901a\u8fc7\u8bbf\u95ee\u5b98\u7f51\u67e5\u770b,\u901a\u8fc7github\u67e5\u770bmd\u6587\u6863\u5b58\u5728\u56fe\u7247\u7b49\u9759\u6001\u8d44\u6e90\u65e0\u6cd5\u6b63\u786e\u663e\u793a\u95ee\u9898"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u82f1\u6587\u6587\u6863 docs/\u5bf9\u5e94\u76ee\u5f55\u4e3a\u5373\u5c06\u53d1\u5e03\u7684\u4e0b\u4e00Next\u7248\u672c\uff0c\u5386\u53f2\u5b58\u6863\u7248\u672c\u5b58\u653e\u5728versioned_docs/version-${versionno}\u76ee\u5f55\u4e0b\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u4e2d\u6587\u6587\u6863 \u653e\u5728i18n/zh-CN/docusaurus-plugin-content-docs/\u5bf9\u5e94\u76ee\u5f55\u4e0b\uff0ccurrent\u4e3a\u5373\u5c06\u53d1\u5e03\u7684\u4e0b\u4e00\u4e2a\u7248\u672c.version-${versionno}\u4e3a\u5386\u53f2\u5b58\u6863\u7248\u672c\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u56fe\u7247\u8d44\u6e90 \u653e\u5728static/\u76ee\u5f55\u4e0b")),(0,l.kt)("h2",{id:"5-\u5982\u4f55\u90e8\u7f72"},"5 \u5982\u4f55\u90e8\u7f72"),(0,l.kt)("p",null,"linkis\u7684\u5b98\u7f51\u5206\u4e3a\u6d4b\u8bd5\u73af\u5883\u548c\u6b63\u5f0f\u73af\u5883"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6d4b\u8bd5\u73af\u5883\u8bbf\u95ee\u7f51\u5740 ",(0,l.kt)("a",{parentName:"li",href:"https://linkis.staged.apache.org"},"https://linkis.staged.apache.org")),(0,l.kt)("li",{parentName:"ul"},"\u6b63\u5f0f\u73af\u5883\u8bbf\u95ee\u7f51\u5740 ",(0,l.kt)("a",{parentName:"li",href:"https://linkis.apache.org"},"https://linkis.apache.org"))),(0,l.kt)("p",null,"\u5f53dev\u5206\u652f\u4ee3\u7801\u6709\u66f4\u65b0\u65f6\uff0cgit action\u4f1a\u81ea\u52a8\u6267\u884cdev\u5206\u652f\u7684\u6e90\u7801build,\u5e76\u5c06\u7f16\u8bd1\u7684\u8d44\u6e90\u7ed3\u679c\u81ea\u52a8\u66f4\u65b0\u81f3asf-staging\u5206\u652f\u3002\nApache\u5185\u90e8\u673a\u5236\u4f1a\u5c06asf-staging\u5206\u652f\u5185\u5bb9\u90e8\u7f72\u81f3\u6d4b\u8bd5\u73af\u5883\uff0c\u6240\u4ee5\u5f53git action\u6267\u884c\u6210\u529f\u540e\uff0c\u53ef\u4ee5\u901a\u8fc7\u8bbf\u95ee",(0,l.kt)("a",{parentName:"p",href:"https://linkis.staged.apache.org"},"https://linkis.staged.apache.org")," \u8fdb\u884c\u9a8c\u8bc1\u3002\n\u9a8c\u8bc1\u65e0\u8bef\u540e\uff0c\u53ef\u4ee5\u5c06asf-staging\u5206\u652f merge\u5230asf-site\u5206\u652f\uff0cApache\u5185\u90e8\u673a\u5236\u4f1a\u5c06asf-site\u5206\u652f\u5185\u5bb9\u90e8\u7f72\u81f3\u6b63\u5f0f\u73af\u5883\uff0cmerge\u540e\uff0c\u6b63\u5f0f\u73af\u5883\u624d\u7b97\u66f4\u65b0\u6210\u529f\u3002"),(0,l.kt)("h2",{id:"6-\u6ce8\u610f\u70b9"},"6 \u6ce8\u610f\u70b9"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6dfb\u52a0\u4e2d\u6587\u6587\u6863\u7684\u540c\u65f6\u9700\u8981\u52a0\u4e0a\u82f1\u6587\u6587\u6863,\u5426\u5219\u65e0\u6cd5\u5c55\u793a\u6dfb\u52a0\u7684\u9875\u9762  "),(0,l.kt)("li",{parentName:"ul"},"\u6dfb\u52a0\u6587\u6863\u7684\u65f6\u5019\u6ce8\u610f\u6587\u6863\u4fa7\u8fb9\u680f\u8282\u70b9\u5c55\u793a\u7684\u540d\u79f0\u5b57\u6bb5(title)\u548c\u4fa7\u8fb9\u680f\u8282\u70b9\u5c55\u793a\u7684\u987a\u5e8f\u5b57\u6bb5(sidebar_position),\u5982\u4e0b\u56fe",(0,l.kt)("br",{parentName:"li"}),(0,l.kt)("img",{parentName:"li",src:"https://user-images.githubusercontent.com/29391030/161209898-847d0d43-8721-41a0-a30b-25896aabe56c.png",alt:"pg-ch"}))),(0,l.kt)("h2",{id:"7-\u5176\u4ed6"},"7 \u5176\u4ed6"),(0,l.kt)("p",null,"\u547d\u540d\u89c4\u8303\u53c2\u8003\u300a\u963f\u91cc\u524d\u7aef\u5f00\u53d1\u89c4\u8303\u300b"))}d.isMDXComponent=!0}}]);