"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[95298],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var s=r.createContext({}),c=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=c(t.components);return r.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,a=t.originalType,s=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),m=c(n),d=i,k=m["".concat(s,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(k,o(o({ref:e},u),{},{components:n})):r.createElement(k,o({ref:e},u))}));function d(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},63252:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],l={title:"Linkis-Client Architecture Design",sidebar_position:3},s=void 0,c={unversionedId:"architecture/computation-governance-services/linkis-cli",id:"architecture/computation-governance-services/linkis-cli",isDocsHomePage:!1,title:"Linkis-Client Architecture Design",description:"Provide users with a lightweight client that submits tasks to Linkis for execution.",source:"@site/docs/architecture/computation-governance-services/linkis-cli.md",sourceDirName:"architecture/computation-governance-services",slug:"/architecture/computation-governance-services/linkis-cli",permalink:"/docs/1.2.0/architecture/computation-governance-services/linkis-cli",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/docs/architecture/computation-governance-services/linkis-cli.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Linkis-Client Architecture Design",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Job Submission",permalink:"/docs/1.2.0/architecture/computation-governance-services/job-submission-preparation-and-execution-process"},next:{title:"Proxy User Mode",permalink:"/docs/1.2.0/architecture/computation-governance-services/proxy-user"}},u=[],p={toc:u};function m(t){var e=t.components,l=(0,i.Z)(t,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,l,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Provide users with a lightweight client that submits tasks to Linkis for execution."),(0,a.kt)("h4",{id:"linkis-client-architecture-diagram"},"Linkis-Client architecture diagram"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img",src:n(28499).Z})),(0,a.kt)("h4",{id:"second-level-module-introduction"},"Second-level module introduction"),(0,a.kt)("h5",{id:"linkis-computation-client"},"Linkis-Computation-Client"),(0,a.kt)("p",null,"Provides an interface for users to submit execution tasks to Linkis in the form of SDK."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Core Class"),(0,a.kt)("th",{parentName:"tr",align:null},"Core Function"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Action"),(0,a.kt)("td",{parentName:"tr",align:null},"Defines the requested attributes, methods and parameters included")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Result"),(0,a.kt)("td",{parentName:"tr",align:null},"Defines the properties of the returned result, the methods and parameters included")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"UJESClient"),(0,a.kt)("td",{parentName:"tr",align:null},"Responsible for request submission, execution, status, results and related parameters acquisition")))),(0,a.kt)("h5",{id:"linkis-cli"},"Linkis-Cli"),(0,a.kt)("p",null,"Provides a way for users to submit tasks to Linkis in the form of a shell command terminal."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Core Class"),(0,a.kt)("th",{parentName:"tr",align:null},"Core Function"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Common"),(0,a.kt)("td",{parentName:"tr",align:null},"Defines the parent class and interface of the instruction template parent class, the instruction analysis entity class, and the task submission and execution links")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Core"),(0,a.kt)("td",{parentName:"tr",align:null},"Responsible for parsing input, task execution and defining output methods")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Application"),(0,a.kt)("td",{parentName:"tr",align:null},"Call linkis-computation-client to perform tasks, and pull logs and final results in real time")))))}m.isMDXComponent=!0},28499:function(t,e,n){e.Z=n.p+"assets/images/linkis-client-01-1ac14b684c9af9906731ffc6bc0b9448.png"}}]);