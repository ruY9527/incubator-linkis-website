"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[46722],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),l=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,c=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=l(n),d=i,m=h["".concat(o,".").concat(d)]||h[d]||p[d]||c;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var c=n.length,a=new Array(c);a[0]=h;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<c;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6366:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return l},toc:function(){return u},default:function(){return h}});var r=n(87462),i=n(63366),c=(n(67294),n(3905)),a=["components"],s={title:"CS Listener Architecture",sidebar_position:4},o=void 0,l={unversionedId:"architecture/public-enhancement-services/context-service/context-service-listener",id:"version-1.1.1/architecture/public-enhancement-services/context-service/context-service-listener",isDocsHomePage:!1,title:"CS Listener Architecture",description:"Listener Architecture",source:"@site/versioned_docs/version-1.1.1/architecture/public-enhancement-services/context-service/context-service-listener.md",sourceDirName:"architecture/public-enhancement-services/context-service",slug:"/architecture/public-enhancement-services/context-service/context-service-listener",permalink:"/docs/1.1.1/architecture/public-enhancement-services/context-service/context-service-listener",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/versioned_docs/version-1.1.1/architecture/public-enhancement-services/context-service/context-service-listener.md",tags:[],version:"1.1.1",sidebarPosition:4,frontMatter:{title:"CS Listener Architecture",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"CS HA Design",permalink:"/docs/1.1.1/architecture/public-enhancement-services/context-service/context-service-highavailable"},next:{title:"CS Persistence Architecture",permalink:"/docs/1.1.1/architecture/public-enhancement-services/context-service/context-service-persistence"}},u=[{value:"<strong>Listener Architecture</strong>",id:"listener-architecture",children:[{value:"<strong>Client registration itself, CSKey registration and CSKey update process</strong>",id:"client-registration-itself-cskey-registration-and-cskey-update-process",children:[]},{value:"<strong>Listener UM class diagram</strong>",id:"listener-um-class-diagram",children:[]}]},{value:"<strong>Listener callbackengine timing diagram</strong>",id:"listener-callbackengine-timing-diagram",children:[]}],p={toc:u};function h(e){var t=e.components,s=(0,i.Z)(e,a);return(0,c.kt)("wrapper",(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"listener-architecture"},(0,c.kt)("strong",{parentName:"h2"},"Listener Architecture")),(0,c.kt)("p",null,"In DSS, when a node changes its metadata information, the context information of the entire workflow changes. We expect all nodes to perceive the change and automatically update the metadata. We use the monitoring mode to achieve, and use the heartbeat mechanism to poll to maintain the metadata consistency of the context information."),(0,c.kt)("h3",{id:"client-registration-itself-cskey-registration-and-cskey-update-process"},(0,c.kt)("strong",{parentName:"h3"},"Client registration itself, CSKey registration and CSKey update process")),(0,c.kt)("p",null,(0,c.kt)("img",{src:n(29709).Z})),(0,c.kt)("p",null,"The main process is as follows:"),(0,c.kt)("ol",null,(0,c.kt)("li",{parentName:"ol"},(0,c.kt)("p",{parentName:"li"},"Registration operation: The clients client1, client2, client3, and client4 register themselves and the CSKey they want to monitor with the csserver through HTPP requests. The Service service obtains the callback engine instance through the external interface, and registers the client and its corresponding CSKeys.")),(0,c.kt)("li",{parentName:"ol"},(0,c.kt)("p",{parentName:"li"},"Update operation: If the ClientX node updates the CSKey content, the Service service updates the CSKey cached by the ContextCache, and the ContextCache delivers the update operation to the ListenerBus. The ListenerBus notifies the specific listener to consume (that is, the ContextKeyCallbackEngine updates the CSKeys corresponding to the Client). The consumed event will be automatically removed.")),(0,c.kt)("li",{parentName:"ol"},(0,c.kt)("p",{parentName:"li"},"Heartbeat mechanism:"))),(0,c.kt)("p",null,"All clients use heartbeat information to detect whether the value of CSKeys in ContextKeyCallbackEngine has changed."),(0,c.kt)("p",null,"ContextKeyCallbackEngine returns the updated CSKeys value to all registered clients through the heartbeat mechanism. If there is a client's heartbeat timeout, remove the client."),(0,c.kt)("h3",{id:"listener-um-class-diagram"},(0,c.kt)("strong",{parentName:"h3"},"Listener UM class diagram")),(0,c.kt)("p",null,(0,c.kt)("img",{src:n(14658).Z})),(0,c.kt)("p",null,"Interface: ListenerManager"),(0,c.kt)("p",null,"External: Provide ListenerBus for event delivery."),(0,c.kt)("p",null,"Internally: provide a callback engine for specific event registration, access, update, and heartbeat processing logic"),(0,c.kt)("h2",{id:"listener-callbackengine-timing-diagram"},(0,c.kt)("strong",{parentName:"h2"},"Listener callbackengine timing diagram")),(0,c.kt)("p",null,(0,c.kt)("img",{src:n(18733).Z})))}h.isMDXComponent=!0},29709:function(e,t,n){t.Z=n.p+"assets/images/linkis-contextservice-listener-01-1838bbb36d485816a7b5854f6a2f0cb8.png"},14658:function(e,t,n){t.Z=n.p+"assets/images/linkis-contextservice-listener-02-88ed7c0b642c3ae1af91293ac5a39752.png"},18733:function(e,t,n){t.Z=n.p+"assets/images/linkis-contextservice-listener-03-055609055ba2113d6c5064739ff63c4d.png"}}]);