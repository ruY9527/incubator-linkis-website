"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[71075],{3905:function(n,e,t){t.d(e,{Zo:function(){return c},kt:function(){return y}});var i=t(67294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,i)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,i,r=function(n,e){if(null==n)return{};var t,i,r={},o=Object.keys(n);for(i=0;i<o.length;i++)t=o[i],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(i=0;i<o.length;i++)t=o[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var p=i.createContext({}),u=function(n){var e=i.useContext(p),t=e;return n&&(t="function"==typeof n?n(e):a(a({},e),n)),t},c=function(n){var e=u(n.components);return i.createElement(p.Provider,{value:e},n.children)},s={inlineCode:"code",wrapper:function(n){var e=n.children;return i.createElement(i.Fragment,{},e)}},h=i.forwardRef((function(n,e){var t=n.components,r=n.mdxType,o=n.originalType,p=n.parentName,c=l(n,["components","mdxType","originalType","parentName"]),h=u(t),y=r,d=h["".concat(p,".").concat(y)]||h[y]||s[y]||o;return t?i.createElement(d,a(a({ref:e},c),{},{components:t})):i.createElement(d,a({ref:e},c))}));function y(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var o=t.length,a=new Array(o);a[0]=h;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=n,l.mdxType="string"==typeof n?n:r,a[1]=l;for(var u=2;u<o;u++)a[u]=t[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}h.displayName="MDXCreateElement"},24858:function(n,e,t){t.r(e),t.d(e,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return c},default:function(){return h}});var i=t(87462),r=t(63366),o=(t(67294),t(3905)),a=["components"],l={title:"Python \u5f15\u64ce",sidebar_position:5},p=void 0,u={unversionedId:"engine_usage/python",id:"version-1.1.0/engine_usage/python",isDocsHomePage:!1,title:"Python \u5f15\u64ce",description:"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5728Linkis1.0\u4e2d\uff0cPython\u5f15\u64ce\u7684\u914d\u7f6e\u3001\u90e8\u7f72\u548c\u4f7f\u7528\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.1.0/engine_usage/python.md",sourceDirName:"engine_usage",slug:"/engine_usage/python",permalink:"/zh-CN/docs/1.1.0/engine_usage/python",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.1.0/engine_usage/python.md",tags:[],version:"1.1.0",sidebarPosition:5,frontMatter:{title:"Python \u5f15\u64ce",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Hive \u5f15\u64ce",permalink:"/zh-CN/docs/1.1.0/engine_usage/hive"},next:{title:"Shell \u5f15\u64ce",permalink:"/zh-CN/docs/1.1.0/engine_usage/shell"}},c=[{value:"1.Python\u5f15\u64ce\u4f7f\u7528\u524d\u7684\u73af\u5883\u914d\u7f6e",id:"1python\u5f15\u64ce\u4f7f\u7528\u524d\u7684\u73af\u5883\u914d\u7f6e",children:[]},{value:"2.Python\u5f15\u64ce\u7684\u914d\u7f6e\u548c\u90e8\u7f72",id:"2python\u5f15\u64ce\u7684\u914d\u7f6e\u548c\u90e8\u7f72",children:[{value:"2.1 Python\u7248\u672c\u7684\u9009\u62e9\u548c\u7f16\u8bd1",id:"21-python\u7248\u672c\u7684\u9009\u62e9\u548c\u7f16\u8bd1",children:[]},{value:"2.2 python engineConn\u90e8\u7f72\u548c\u52a0\u8f7d",id:"22-python-engineconn\u90e8\u7f72\u548c\u52a0\u8f7d",children:[]},{value:"2.3 python\u5f15\u64ce\u7684\u6807\u7b7e",id:"23-python\u5f15\u64ce\u7684\u6807\u7b7e",children:[]}]},{value:"3.Python\u5f15\u64ce\u7684\u4f7f\u7528",id:"3python\u5f15\u64ce\u7684\u4f7f\u7528",children:[{value:"\u51c6\u5907\u64cd\u4f5c",id:"\u51c6\u5907\u64cd\u4f5c",children:[]},{value:"3.1 \u901a\u8fc7Linkis SDK\u8fdb\u884c\u4f7f\u7528",id:"31-\u901a\u8fc7linkis-sdk\u8fdb\u884c\u4f7f\u7528",children:[]},{value:"3.2 \u901a\u8fc7Linkis-cli\u8fdb\u884c\u4efb\u52a1\u63d0\u4ea4",id:"32-\u901a\u8fc7linkis-cli\u8fdb\u884c\u4efb\u52a1\u63d0\u4ea4",children:[]},{value:"3.3 Scriptis\u7684\u4f7f\u7528\u65b9\u5f0f",id:"33-scriptis\u7684\u4f7f\u7528\u65b9\u5f0f",children:[]}]},{value:"4.Python\u5f15\u64ce\u7684\u7528\u6237\u8bbe\u7f6e",id:"4python\u5f15\u64ce\u7684\u7528\u6237\u8bbe\u7f6e",children:[]}],s={toc:c};function h(n){var e=n.components,l=(0,r.Z)(n,a);return(0,o.kt)("wrapper",(0,i.Z)({},s,l,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5728Linkis1.0\u4e2d\uff0cPython\u5f15\u64ce\u7684\u914d\u7f6e\u3001\u90e8\u7f72\u548c\u4f7f\u7528\u3002"),(0,o.kt)("h2",{id:"1python\u5f15\u64ce\u4f7f\u7528\u524d\u7684\u73af\u5883\u914d\u7f6e"},"1.Python\u5f15\u64ce\u4f7f\u7528\u524d\u7684\u73af\u5883\u914d\u7f6e"),(0,o.kt)("p",null,"\u5982\u679c\u60a8\u5e0c\u671b\u5728\u60a8\u7684\u670d\u52a1\u5668\u4e0a\u4f7f\u7528python\u5f15\u64ce\uff0c\u60a8\u9700\u8981\u4fdd\u8bc1\u7528\u6237\u7684PATH\u4e2d\u662f\u6709python\u7684\u6267\u884c\u76ee\u5f55\u548c\u6267\u884c\u6743\u9650\u3002"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u73af\u5883\u53d8\u91cf\u540d"),(0,o.kt)("th",{parentName:"tr",align:null},"\u73af\u5883\u53d8\u91cf\u5185\u5bb9"),(0,o.kt)("th",{parentName:"tr",align:null},"\u5907\u6ce8"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"python"),(0,o.kt)("td",{parentName:"tr",align:null},"python\u6267\u884c\u73af\u5883"),(0,o.kt)("td",{parentName:"tr",align:null},"\u5efa\u8bae\u4f7f\u7528anaconda\u7684python\u6267\u884c\u5668")))),(0,o.kt)("p",null,"\u88681-1 \u73af\u5883\u914d\u7f6e\u6e05\u5355"),(0,o.kt)("h2",{id:"2python\u5f15\u64ce\u7684\u914d\u7f6e\u548c\u90e8\u7f72"},"2.Python\u5f15\u64ce\u7684\u914d\u7f6e\u548c\u90e8\u7f72"),(0,o.kt)("h3",{id:"21-python\u7248\u672c\u7684\u9009\u62e9\u548c\u7f16\u8bd1"},"2.1 Python\u7248\u672c\u7684\u9009\u62e9\u548c\u7f16\u8bd1"),(0,o.kt)("p",null,"Python\u662f\u652f\u6301python2 \u548c\npython3\u7684\uff0c\u60a8\u53ef\u4ee5\u7b80\u5355\u66f4\u6539\u914d\u7f6e\u5c31\u53ef\u4ee5\u5b8c\u6210Python\u7248\u672c\u7684\u5207\u6362\uff0c\u4e0d\u9700\u8981\u91cd\u65b0\u7f16\u8bd1python\u7684\u5f15\u64ce\u7248\u672c\u3002"),(0,o.kt)("h3",{id:"22-python-engineconn\u90e8\u7f72\u548c\u52a0\u8f7d"},"2.2 python engineConn\u90e8\u7f72\u548c\u52a0\u8f7d"),(0,o.kt)("p",null,"\u6b64\u5904\u53ef\u4ee5\u4f7f\u7528\u9ed8\u8ba4\u7684\u52a0\u8f7d\u65b9\u5f0f\u5373\u53ef\u6b63\u5e38\u4f7f\u7528\u3002"),(0,o.kt)("h3",{id:"23-python\u5f15\u64ce\u7684\u6807\u7b7e"},"2.3 python\u5f15\u64ce\u7684\u6807\u7b7e"),(0,o.kt)("p",null,"\u6b64\u5904\u53ef\u4ee5\u4f7f\u7528\u9ed8\u8ba4\u7684dml.sql\u8fdb\u884c\u63d2\u5165\u5373\u53ef\u6b63\u5e38\u4f7f\u7528\u3002"),(0,o.kt)("h2",{id:"3python\u5f15\u64ce\u7684\u4f7f\u7528"},"3.Python\u5f15\u64ce\u7684\u4f7f\u7528"),(0,o.kt)("h3",{id:"\u51c6\u5907\u64cd\u4f5c"},"\u51c6\u5907\u64cd\u4f5c"),(0,o.kt)("p",null,"\u5728linkis\u4e0a\u63d0\u4ea4python\u4e4b\u524d\uff0c\u60a8\u53ea\u9700\u8981\u4fdd\u8bc1\u60a8\u7684\u7528\u6237\u7684\\$PATH\u4e2d\u6709python\u7684\u8def\u5f84\u5373\u53ef\u3002"),(0,o.kt)("h3",{id:"31-\u901a\u8fc7linkis-sdk\u8fdb\u884c\u4f7f\u7528"},"3.1 \u901a\u8fc7Linkis SDK\u8fdb\u884c\u4f7f\u7528"),(0,o.kt)("p",null,"Linkis\u63d0\u4f9b\u4e86Java\u548cScala \u7684SDK\u5411Linkis\u670d\u52a1\u7aef\u63d0\u4ea4\u4efb\u52a1. \u5177\u4f53\u53ef\u4ee5\u53c2\u8003 ",(0,o.kt)("a",{parentName:"p",href:"/zh-CN/docs/1.1.0/user_guide/sdk-manual"},"JAVA SDK Manual"),".\n\u5bf9\u4e8ePython\u4efb\u52a1\u60a8\u53ea\u9700\u8981\u4fee\u6539Demo\u4e2d\u7684EngineConnType\u548cCodeType\u53c2\u6570\u5373\u53ef:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'        Map<String, Object> labels = new HashMap<String, Object>();\n        labels.put(LabelKeyConstant.ENGINE_TYPE_KEY, "python-python2"); // required engineType Label\n        labels.put(LabelKeyConstant.USER_CREATOR_TYPE_KEY, "hadoop-IDE");// required execute user and creator\n        labels.put(LabelKeyConstant.CODE_TYPE_KEY, "python"); // required codeType \n')),(0,o.kt)("h3",{id:"32-\u901a\u8fc7linkis-cli\u8fdb\u884c\u4efb\u52a1\u63d0\u4ea4"},"3.2 \u901a\u8fc7Linkis-cli\u8fdb\u884c\u4efb\u52a1\u63d0\u4ea4"),(0,o.kt)("p",null,"Linkis 1.0\u540e\u63d0\u4f9b\u4e86cli\u7684\u65b9\u5f0f\u63d0\u4ea4\u4efb\u52a1\uff0c\u6211\u4eec\u53ea\u9700\u8981\u6307\u5b9a\u5bf9\u5e94\u7684EngineConn\u548cCodeType\u6807\u7b7e\u7c7b\u578b\u5373\u53ef\uff0cPython\u7684\u4f7f\u7528\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'sh ./bin/linkis-cli -engineType python-python2 -codeType python -code "print(\\"hello\\")"  -submitUser hadoop -proxyUser hadoop\n')),(0,o.kt)("p",null,"\u5177\u4f53\u4f7f\u7528\u53ef\u4ee5\u53c2\u8003\uff1a ",(0,o.kt)("a",{parentName:"p",href:"/zh-CN/docs/1.1.0/user_guide/linkiscli-manual"},"Linkis CLI Manual"),"."),(0,o.kt)("h3",{id:"33-scriptis\u7684\u4f7f\u7528\u65b9\u5f0f"},"3.3 Scriptis\u7684\u4f7f\u7528\u65b9\u5f0f"),(0,o.kt)("p",null,"Scriptis\u7684\u4f7f\u7528\u65b9\u5f0f\u662f\u6700\u7b80\u5355\u7684\uff0c\u60a8\u53ef\u4ee5\u76f4\u63a5\u8fdb\u5165Scriptis\uff0c\u53f3\u952e\u76ee\u5f55\u7136\u540e\u65b0\u5efapython\u811a\u672c\u5e76\u7f16\u5199python\u4ee3\u7801\u5e76\u70b9\u51fb\u6267\u884c\u3002"),(0,o.kt)("p",null,"python\u7684\u6267\u884c\u903b\u8f91\u662f\u901a\u8fc7 Py4j\u7684\u65b9\u5f0f\uff0c\u542f\u52a8\u4e00\u4e2a\u7684python\n\u7684gateway\uff0c\u7136\u540ePython\u5f15\u64ce\u5c06\u4ee3\u7801\u63d0\u4ea4\u5230python\u7684\u6267\u884c\u5668\u8fdb\u884c\u6267\u884c\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(32209).Z})),(0,o.kt)("p",null,"\u56fe3-1 python\u7684\u6267\u884c\u6548\u679c\u622a\u56fe"),(0,o.kt)("h2",{id:"4python\u5f15\u64ce\u7684\u7528\u6237\u8bbe\u7f6e"},"4.Python\u5f15\u64ce\u7684\u7528\u6237\u8bbe\u7f6e"),(0,o.kt)("p",null,"\u9664\u4e86\u4ee5\u4e0a\u5f15\u64ce\u914d\u7f6e\uff0c\u7528\u6237\u8fd8\u53ef\u4ee5\u8fdb\u884c\u81ea\u5b9a\u4e49\u7684\u8bbe\u7f6e\uff0c\u6bd4\u5982python\u7684\u7248\u672c\u548c\u4ee5\u53capython\u9700\u8981\u52a0\u8f7d\u7684\u4e00\u4e9bmodule\u7b49\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(67730).Z})),(0,o.kt)("p",null,"\u56fe4-1 python\u7684\u7528\u6237\u81ea\u5b9a\u4e49\u914d\u7f6e\u7ba1\u7406\u53f0"))}h.isMDXComponent=!0},67730:function(n,e,t){e.Z=t.p+"assets/images/python-config-63895470a36d8a8fa58eaaa44186ce23.png"},32209:function(n,e,t){e.Z=t.p+"assets/images/python-run-a442d0ab5e119eab2e0aebe935975dac.png"}}]);