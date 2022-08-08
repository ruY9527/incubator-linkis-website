"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[24396],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),g=s(t),m=i,k=g["".concat(l,".").concat(m)]||g[m]||u[m]||a;return t?r.createElement(k,o(o({ref:n},p),{},{components:t})):r.createElement(k,o({ref:n},p))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=g;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},38607:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return g}});var r=t(87462),i=t(63366),a=(t(67294),t(3905)),o=["components"],c={title:"\u603b\u89c8",sidebar_position:0},l=void 0,s={unversionedId:"architecture/computation_governance_services/overview",id:"version-1.1.0/architecture/computation_governance_services/overview",isDocsHomePage:!1,title:"\u603b\u89c8",description:"\u80cc\u666f",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.1.0/architecture/computation_governance_services/overview.md",sourceDirName:"architecture/computation_governance_services",slug:"/architecture/computation_governance_services/overview",permalink:"/zh-CN/docs/1.1.0/architecture/computation_governance_services/overview",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.1.0/architecture/computation_governance_services/overview.md",tags:[],version:"1.1.0",sidebarPosition:0,frontMatter:{title:"\u603b\u89c8",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"RPC \u6a21\u5757",permalink:"/zh-CN/docs/1.1.0/architecture/commons/rpc"},next:{title:"\u603b\u89c8",permalink:"/zh-CN/docs/1.1.0/architecture/computation_governance_services/linkis_manager/overview"}},p=[{value:"<strong>\u80cc\u666f</strong>",id:"\u80cc\u666f",children:[]},{value:"<strong>\u67b6\u6784\u56fe</strong>",id:"\u67b6\u6784\u56fe",children:[]},{value:"<strong>\u67b6\u6784\u8bf4\u660e</strong>",id:"\u67b6\u6784\u8bf4\u660e",children:[{value:"1\u3001Entrance",id:"1entrance",children:[]},{value:"2\u3001Orchestrator",id:"2orchestrator",children:[]},{value:"3\u3001LinkisManager",id:"3linkismanager",children:[]},{value:"4\u3001EngineConnManager",id:"4engineconnmanager",children:[]},{value:"5\u3001EngineConn",id:"5engineconn",children:[]}]}],u={toc:p};function g(e){var n=e.components,c=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},u,c,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u80cc\u666f"},(0,a.kt)("strong",{parentName:"h2"},"\u80cc\u666f")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Linkis0.X\u7684\u67b6\u6784\u4e3b\u8981\u5b58\u5728\u4ee5\u4e0b\u95ee\u9898")),(0,a.kt)("p",null,"1.\u6838\u5fc3\u5904\u7406\u6d41\u7a0b\u548c\u5c42\u7ea7\u6a21\u5757\u8fb9\u754c\u6a21\u7cca"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Entrance \u548c EngineManager \u529f\u80fd\u8fb9\u754c\u6a21\u7cca")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u4efb\u52a1\u63d0\u4ea4\u6267\u884c\u4e3b\u6d41\u7a0b\u4e0d\u591f\u6e05\u6670")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u6269\u5c55\u65b0\u5f15\u64ce\u8f83\u9ebb\u70e6\uff0c\u9700\u8981\u5b9e\u73b0\u591a\u4e2a\u6a21\u5757\u7684\u4ee3\u7801")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u53ea\u652f\u6301\u8ba1\u7b97\u8bf7\u6c42\u573a\u666f\uff0c\u5b58\u50a8\u8bf7\u6c42\u573a\u666f\u548c\u5e38\u9a7b\u670d\u52a1\u6a21\u5f0f\uff08Cluster\uff09\u96be\u4ee5\u652f\u6301"))),(0,a.kt)("p",null,"2.\u66f4\u4e30\u5bcc\u5f3a\u5927\u8ba1\u7b97\u6cbb\u7406\u529f\u80fd\u9700\u6c42"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u8ba1\u7b97\u4efb\u52a1\u7ba1\u7406\u7b56\u7565\u652f\u6301\u5ea6\u4e0d\u591f")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u6807\u7b7e\u80fd\u529b\u4e0d\u591f\u5f3a\u5927\uff0c\u5236\u7ea6\u8ba1\u7b97\u7b56\u7565\u548c\u8d44\u6e90\u7ba1\u7406"))),(0,a.kt)("p",null,"Linkis1.0\u8ba1\u7b97\u6cbb\u7406\u670d\u52a1\u7684\u65b0\u67b6\u6784\u53ef\u4ee5\u5f88\u597d\u7684\u89e3\u51b3\u8fd9\u4e9b\u95ee\u9898\u3002"),(0,a.kt)("h2",{id:"\u67b6\u6784\u56fe"},(0,a.kt)("strong",{parentName:"h2"},"\u67b6\u6784\u56fe")),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(59401).Z})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4f5c\u4e1a\u6d41\u7a0b\u4f18\u5316\uff1a"),"\nLinkis1.0\u5c06\u4f18\u5316Job\u7684\u6574\u4f53\u6267\u884c\u6d41\u7a0b\uff0c\u4ece\u63d0\u4ea4 \u2014",">"," \u51c6\u5907 \u2014",">","\n\u6267\u884c\u4e09\u4e2a\u9636\u6bb5\uff0c\u6765\u5168\u9762\u5347\u7ea7Linkis\u7684Job\u6267\u884c\u67b6\u6784\uff0c\u5982\u4e0b\u56fe\u6240\u793a\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(8022).Z})),(0,a.kt)("h2",{id:"\u67b6\u6784\u8bf4\u660e"},(0,a.kt)("strong",{parentName:"h2"},"\u67b6\u6784\u8bf4\u660e")),(0,a.kt)("h3",{id:"1entrance"},"1\u3001Entrance"),(0,a.kt)("p",null," Entrance\u4f5c\u4e3a\u8ba1\u7b97\u7c7b\u578b\u4efb\u52a1\u7684\u63d0\u4ea4\u5165\u53e3\uff0c\u63d0\u4f9b\u4efb\u52a1\u7684\u63a5\u6536\u3001\u8c03\u5ea6\u548cJob\u4fe1\u606f\u7684\u8f6c\u53d1\u80fd\u529b\uff0c\u662f\u4eceLinkis0.X\u7684Entrance\u62c6\u5206\u51fa\u6765\u7684\u539f\u751f\u80fd\u529b\uff1b"),(0,a.kt)("p",null," ",(0,a.kt)("a",{parentName:"p",href:"/zh-CN/docs/1.1.0/architecture/computation_governance_services/entrance"},"\u8fdb\u5165Entrance\u67b6\u6784\u8bbe\u8ba1")),(0,a.kt)("h3",{id:"2orchestrator"},"2\u3001Orchestrator"),(0,a.kt)("p",null," Orchestrator \u4f5c\u4e3a\u51c6\u5907\u9636\u6bb5\u7684\u5165\u53e3\uff0c\u4ece Linkis0.X \u7684 Entrance \u7ee7\u627f\u4e86\u89e3\u6790Job\u3001\u7533\u8bf7Engine\u548c\u63d0\u4ea4\u6267\u884c\u7684\u80fd\u529b\uff1b\u540c\u65f6\uff0cOrchestrator\u5c06\u63d0\u4f9b\u5f3a\u5927\u7684\u7f16\u6392\u548c\u8ba1\u7b97\u7b56\u7565\u80fd\u529b\uff0c\u6ee1\u8db3\u591a\u6d3b\u3001\u4e3b\u5907\u3001\u4e8b\u52a1\u3001\u91cd\u653e\u3001\u9650\u6d41\u3001\u5f02\u6784\u548c\u6df7\u7b97\u7b49\u591a\u79cd\u5e94\u7528\u573a\u666f\u7684\u9700\u6c42\u3002"),(0,a.kt)("h3",{id:"3linkismanager"},"3\u3001LinkisManager"),(0,a.kt)("p",null," LinkisManager\u4f5c\u4e3aLinkis\u7684\u7ba1\u7406\u5927\u8111\uff0c\u4e3b\u8981\u7531AppManager\u3001ResourceManager\u3001LabelManager\u548cEngineConnPlugin\u7ec4\u6210\u3002"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"ResourceManager \u4e0d\u4ec5\u5177\u5907 Linkis0.X \u5bf9 Yarn \u548c Linkis EngineManager\u7684\u8d44\u6e90\u7ba1\u7406\u80fd\u529b\uff0c\u8fd8\u5c06\u63d0\u4f9b\u57fa\u4e8e\u6807\u7b7e\u7684\u591a\u7ea7\u8d44\u6e90\u5206\u914d\u548c\u56de\u6536\u80fd\u529b\uff0c\u8ba9ResourceManager\u5177\u5907\u8de8\u96c6\u7fa4\u3001\u8de8\u8ba1\u7b97\u8d44\u6e90\u7c7b\u578b\u7684\u5168\u8d44\u6e90\u7ba1\u7406\u80fd\u529b\uff1b")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"AppManager \u5c06\u7edf\u7b79\u7ba1\u7406\u6240\u6709\u7684 EngineConnManager \u548c EngineConn\uff0cEngineConn \u7684\u7533\u8bf7\u3001\u590d\u7528\u3001\u521b\u5efa\u3001\u5207\u6362\u3001\u9500\u6bc1\u7b49\u751f\u547d\u5468\u671f\u5168\u4ea4\u4e88 AppManager \u8fdb\u884c\u7ba1\u7406\uff1b\u800c LabelManager \u5c06\u57fa\u4e8e\u591a\u7ea7\u7ec4\u5408\u6807\u7b7e\uff0c\u63d0\u4f9b\u8de8IDC\u3001\u8de8\u96c6\u7fa4\u7684 EngineConn \u548c EngineConnManager \u8def\u7531\u548c\u7ba1\u63a7\u80fd\u529b\uff1b")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"EngineConnPlugin \u4e3b\u8981\u7528\u4e8e\u964d\u4f4e\u65b0\u8ba1\u7b97\u5b58\u50a8\u7684\u63a5\u5165\u6210\u672c\uff0c\u771f\u6b63\u505a\u5230\u8ba9\u7528\u6237\u53ea\u9700\u8981\u5b9e\u73b0\u4e00\u4e2a\u7c7b\uff0c\u5c31\u80fd\u63a5\u5165\u4e00\u4e2a\u5168\u65b0\u7684\u8ba1\u7b97\u5b58\u50a8\u5f15\u64ce\u3002"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/zh-CN/docs/1.1.0/architecture/computation_governance_services/linkis_manager/overview"},"\u8fdb\u5165LinkisManager\u67b6\u6784\u8bbe\u8ba1")))),(0,a.kt)("h3",{id:"4engineconnmanager"},"4\u3001EngineConnManager"),(0,a.kt)("p",null," EngineConnManager (\u7b80\u79f0ECM)\u662f Linkis0.X EngineManager \u7684\u7cbe\u7b80\u5347\u7ea7\u7248\u3002Linkis1.0\u4e0b\u7684ECM\u53bb\u9664\u4e86\u5f15\u64ce\u7684\u7533\u8bf7\u80fd\u529b\uff0c\u6574\u4e2a\u5fae\u670d\u52a1\u5b8c\u5168\u65e0\u72b6\u6001\uff0c\u5c06\u805a\u7126\u4e8e\u652f\u6301\u5404\u7c7b EngineConn \u7684\u542f\u52a8\u548c\u9500\u6bc1\u3002"),(0,a.kt)("p",null," ",(0,a.kt)("a",{parentName:"p",href:"/zh-CN/docs/1.1.0/architecture/computation_governance_services/engine/engine-conn-manager"},"\u8fdb\u5165EngineConnManager\u67b6\u6784\u8bbe\u8ba1")),(0,a.kt)("h3",{id:"5engineconn"},"5\u3001EngineConn"),(0,a.kt)("p",null,"EngineConn \u662f Linkis0.X Engine \u7684\u4f18\u5316\u5347\u7ea7\u7248\u672c\uff0c\u5c06\u63d0\u4f9b EngineConn \u548c Executor \u4e24\u5927\u6a21\u5757\uff0c\u5176\u4e2d EngineConn \u7528\u4e8e\u8fde\u63a5\u5e95\u5c42\u7684\u8ba1\u7b97\u5b58\u50a8\u5f15\u64ce\uff0c\u63d0\u4f9b\u4e00\u4e2a\u6253\u901a\u4e86\u5e95\u5c42\u5404\u8ba1\u7b97\u5b58\u50a8\u5f15\u64ce\u7684 Session \u4f1a\u8bdd\uff1bExecutor \u5219\u57fa\u4e8e\u8fd9\u4e2a Session \u4f1a\u8bdd\uff0c\u63d0\u4f9b\u4ea4\u4e92\u5f0f\u8ba1\u7b97\u3001\u6d41\u5f0f\u8ba1\u7b97\u3001\u79bb\u7ebf\u8ba1\u7b97\u3001\u6570\u636e\u5b58\u50a8\u7684\u5168\u6808\u8ba1\u7b97\u80fd\u529b\u652f\u6301\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/zh-CN/docs/1.1.0/architecture/computation_governance_services/engine/engine-conn"},"\u8fdb\u5165EngineConn\u67b6\u6784\u8bbe\u8ba1")))}g.isMDXComponent=!0},59401:function(e,n,t){n.Z=t.p+"assets/images/linkis-computation-gov-01-99d097d5868d1e66d5f959808f24de95.png"},8022:function(e,n,t){n.Z=t.p+"assets/images/linkis-computation-gov-02-9705732e005faed2c5d5d27154e5d887.png"}}]);