"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[39165],{3905:function(n,e,i){i.d(e,{Zo:function(){return c},kt:function(){return g}});var t=i(67294);function r(n,e,i){return e in n?Object.defineProperty(n,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[e]=i,n}function l(n,e){var i=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),i.push.apply(i,t)}return i}function o(n){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?l(Object(i),!0).forEach((function(e){r(n,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(i,e))}))}return n}function a(n,e){if(null==n)return{};var i,t,r=function(n,e){if(null==n)return{};var i,t,r={},l=Object.keys(n);for(t=0;t<l.length;t++)i=l[t],e.indexOf(i)>=0||(r[i]=n[i]);return r}(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(t=0;t<l.length;t++)i=l[t],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(n,i)&&(r[i]=n[i])}return r}var s=t.createContext({}),p=function(n){var e=t.useContext(s),i=e;return n&&(i="function"==typeof n?n(e):o(o({},e),n)),i},c=function(n){var e=p(n.components);return t.createElement(s.Provider,{value:e},n.children)},u={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},d=t.forwardRef((function(n,e){var i=n.components,r=n.mdxType,l=n.originalType,s=n.parentName,c=a(n,["components","mdxType","originalType","parentName"]),d=p(i),g=r,k=d["".concat(s,".").concat(g)]||d[g]||u[g]||l;return i?t.createElement(k,o(o({ref:e},c),{},{components:i})):t.createElement(k,o({ref:e},c))}));function g(n,e){var i=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var l=i.length,o=new Array(l);o[0]=d;var a={};for(var s in e)hasOwnProperty.call(e,s)&&(a[s]=e[s]);a.originalType=n,a.mdxType="string"==typeof n?n:r,o[1]=a;for(var p=2;p<l;p++)o[p]=i[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,i)}d.displayName="MDXCreateElement"},38872:function(n,e,i){i.r(e),i.d(e,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var t=i(87462),r=i(63366),l=(i(67294),i(3905)),o=["components"],a={title:"\u5b89\u88c5 EngineConnPlugin \u5f15\u64ce",sidebar_position:5},s=void 0,p={unversionedId:"deployment/engine-conn-plugin-installation",id:"version-0.11.0/deployment/engine-conn-plugin-installation",isDocsHomePage:!1,title:"\u5b89\u88c5 EngineConnPlugin \u5f15\u64ce",description:"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecdLinkis\u5f15\u64ce\u63d2\u4ef6\u7684\u5355\u72ec\uff0c\u4e3b\u8981\u4ece\u7f16\u8bd1\u3001\u5b89\u88c5\u7b49\u65b9\u9762\u8fdb\u884c\u4ecb\u7ecd",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.11.0/deployment/engine-conn-plugin-installation.md",sourceDirName:"deployment",slug:"/deployment/engine-conn-plugin-installation",permalink:"/zh-CN/docs/0.11.0/deployment/engine-conn-plugin-installation",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.11.0/deployment/engine-conn-plugin-installation.md",tags:[],version:"0.11.0",sidebarPosition:5,frontMatter:{title:"\u5b89\u88c5 EngineConnPlugin \u5f15\u64ce",sidebar_position:5},sidebar:"version-1.0.2/tutorialSidebar",previous:{title:"\u751f\u4ea7\u90e8\u7f72\u53c2\u8003\u6307\u5357",permalink:"/zh-CN/docs/0.11.0/deployment/production-deployment -guide"},next:{title:"\u6e90\u7801\u76ee\u5f55\u7ed3\u6784",permalink:"/zh-CN/docs/0.11.0/deployment/sourcecode-hierarchical-structure"}},c=[{value:"1 \u5f15\u64ce\u63d2\u4ef6\u7684\u7f16\u8bd1\u6253\u5305",id:"1-\u5f15\u64ce\u63d2\u4ef6\u7684\u7f16\u8bd1\u6253\u5305",children:[]},{value:"2 \u5f15\u64ce\u5b89\u88c5",id:"2-\u5f15\u64ce\u5b89\u88c5",children:[{value:"2.1 \u63d2\u4ef6\u5305\u5b89\u88c5",id:"21-\u63d2\u4ef6\u5305\u5b89\u88c5",children:[]},{value:"2.2 \u7ba1\u7406\u53f0\u914d\u7f6e\u4fee\u6539",id:"22-\u7ba1\u7406\u53f0\u914d\u7f6e\u4fee\u6539",children:[]},{value:"2.3 \u5f15\u64ce\u5237\u65b0",id:"23-\u5f15\u64ce\u5237\u65b0",children:[]}]}],u={toc:c};function d(n){var e=n.components,i=(0,r.Z)(n,o);return(0,l.kt)("wrapper",(0,t.Z)({},u,i,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecdLinkis\u5f15\u64ce\u63d2\u4ef6\u7684\u5355\u72ec\uff0c\u4e3b\u8981\u4ece\u7f16\u8bd1\u3001\u5b89\u88c5\u7b49\u65b9\u9762\u8fdb\u884c\u4ecb\u7ecd")),(0,l.kt)("h2",{id:"1-\u5f15\u64ce\u63d2\u4ef6\u7684\u7f16\u8bd1\u6253\u5305"},"1 \u5f15\u64ce\u63d2\u4ef6\u7684\u7f16\u8bd1\u6253\u5305"),(0,l.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\u5728linkis1.0\u4ee5\u540e\u5f15\u64ce\u662f\u7531\u5f15\u64ce\u7ba1\u7406\u670d\u52a1\u8fdb\u884c\u7ba1\u7406\u7684\uff0c\u5f15\u64ce\u63d2\u4ef6\u652f\u6301\u5b9e\u65f6\u751f\u6548\u3002\u4e3a\u4e86\u65b9\u4fbf\u5f15\u64ce\u7ba1\u7406\u670d\u52a1\u80fd\u591f\u901a\u8fc7\u6807\u7b7e\u52a0\u8f7d\u5230\u5bf9\u5e94\u7684\u5f15\u64ce\u63d2\u4ef6\uff0c\u9700\u8981\u6309\u7167\u5982\u4e0b\u76ee\u5f55\u7ed3\u6784\u8fdb\u884c\u6253\u5305(\u5df2hive\u4e3a\u4f8b)\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"hive:\u5f15\u64ce\u4e3b\u76ee\u5f55\uff0c\u5fc5\u987b\u4e3a\u5f15\u64ce\u7684\u540d\u5b57\n    \u2514\u2500\u2500 dist  # \u5f15\u64ce\u542f\u52a8\u9700\u8981\u7684\u4f9d\u8d56\u548c\u914d\u7f6e\uff0c\u5f15\u64ce\u4e0d\u540c\u7684\u7248\u672c\u9700\u8981\u5728\u8be5\u76ee\u5f55\u653e\u7f6e\u5bf9\u5e94\u7684\u7248\u672c\u76ee\u5f55\n      \u2514\u2500\u2500 v1.2.1 #\u5fc5\u987b\u4ee5v\u5f00\u5934\u52a0\u4e0a\u5f15\u64ce\u7248\u672c\u53f71.2.1\n           \u2514\u2500\u2500 conf # \u5f15\u64ce\u9700\u8981\u7684\u914d\u7f6e\u6587\u4ef6\u76ee\u5f55\n           \u2514\u2500\u2500 lib  # \u5f15\u64ce\u63d2\u4ef6\u9700\u8981\u7684\u4f9d\u8d56\u5305\n    \u2514\u2500\u2500 plugin #\u5f15\u64ce\u63d2\u4ef6\u76ee\u5f55\uff0c\u8be5\u76ee\u5f55\u7528\u4e8e\u5f15\u64ce\u7ba1\u7406\u670d\u52a1\u5c01\u88c5\u5f15\u64ce\u7684\u542f\u52a8\u547d\u4ee4\u548c\u8d44\u6e90\u7533\u8bf7\n      \u2514\u2500\u2500 1.2.1 # \u5f15\u64ce\u7248\u672c\n        \u2514\u2500\u2500 linkis-engineplugin-hive-1.0.0-RC1.jar  #\u5f15\u64ce\u6a21\u5757\u5305\uff08\u53ea\u9700\u8981\u653e\u7f6e\u5355\u72ec\u7684\u5f15\u64ce\u5305\uff09\n")),(0,l.kt)("p",null,"\u5982\u679c\u60a8\u662f\u65b0\u589e\u5f15\u64ce\uff0c\u4f60\u53ef\u4ee5\u53c2\u8003hive\u7684assembly\u914d\u7f6e\u65b9\u5f0f\uff0c\u6e90\u7801\u76ee\u5f55\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"linkis-engineconn-plugins/engineconn-plugins/hive/src/main/assembly/distribution.xml")),(0,l.kt)("h2",{id:"2-\u5f15\u64ce\u5b89\u88c5"},"2 \u5f15\u64ce\u5b89\u88c5"),(0,l.kt)("h3",{id:"21-\u63d2\u4ef6\u5305\u5b89\u88c5"},"2.1 \u63d2\u4ef6\u5305\u5b89\u88c5"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u9996\u5148\u9700\u8981\u786e\u8ba4\u5f15\u64cedist\u76ee\u5f55\u914d\u7f6e\u7684\u4e3b\u76ee\u5f55\uff1awds.linkis.engineconn.home\uff08LinkisInstall/conf/linkis.properties\uff09\uff0c\u8be5\u53c2\u6570\u4e3a\u5f15\u64ce\u7ba1\u7406\u5668\u670d\u52a1\u7528\u4e8e\u8bfb\u53d6\u5f15\u64ce\u542f\u52a8\u6240\u9700\u8981\u914d\u7f6e\u548c\u4f9d\u8d56\u7684\u76ee\u5f55\uff0c\u5f15\u64ce\u7ba1\u7406\u5668\u670d\u52a1\u5982\u679c\u8bbe\u7f6e\u4e86\u53c2\u6570\uff08wds.linkis.engineconn.dist.load.enable=true\uff09\u4f1a\u8bfb\u53d6\u8be5\u76ee\u5f55\u4e0b\u7684\u5f15\u64ce\u5b58\u653e\u5230\u7269\u6599\u5e93\u4e2d\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u53e6\u5916\u9700\u8981\u786e\u8ba4\u5f15\u64ce\u63d2\u4ef6\u52a0\u8f7d\u53c2\u6570\uff1awds.linkis.engineconn.plugin.loader.store.path,\u8be5\u76ee\u5f55\u4e3a\u5f15\u64ce\u7ba1\u7406\u5668\u670d\u52a1\u7528\u4e8e\u53cd\u5c04\u8bfb\u53d6\u5f15\u64ce\u6a21\u5757\u5305\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5982\u679cwds.linkis.engineconn.home\u548cwds.linkis.engineconn.plugin.loader.store.path\u4e24\u4e2a\u53c2\u6570\u6307\u5b9a\u4e3a\u540c\u4e00\u4e2a\u76ee\u5f55\uff0c\u5219\u53ef\u4ee5\u76f4\u63a5\u5c06\u5f15\u64ce\u6253\u51fa\u6765\u7684\u76ee\u5f55\u89e3\u538b\u5230\u8be5\u76ee\u5f55\u4e0b\uff0c\u5982\u653e\u7f6e\u5230/appcom/Install/LinkisInstall/lib/linkis-engineconn-plugins\u76ee\u5f55\u4e0b\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"/appcom/Install/LinkisInstall/lib/linkis-engineconn-plugins:\nhive\n dist\n plugin\nspark\n dist\n plugin\n")),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"\u5982\u679c\u76ee\u5f55\u4e0d\u662f\u540c\u4e00\u4e2a\u76ee\u5f55\u5219\u9700\u8981\u5206\u5f00\u653e\u7f6edist\u548cplugin\u76ee\u5f55\uff0c\u5982\u4e0b\u793a\u4f8b\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"##dist \u76ee\u5f55\n/appcom/Install/LinkisInstall/lib/linkis-engineconn-plugins/dist:\nhive\n dist\n \nspark\n dist\n \n##plugin \u76ee\u5f55\n/appcom/Install/LinkisInstall/lib/linkis-engineconn-plugins/dist:\nhive\n plugin\nspark\n plugin\n")),(0,l.kt)("h3",{id:"22-\u7ba1\u7406\u53f0\u914d\u7f6e\u4fee\u6539"},"2.2 \u7ba1\u7406\u53f0\u914d\u7f6e\u4fee\u6539"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u7ba1\u7406\u53f0Configuration\u914d\u7f6e\u4fee\u6539\uff08\u53ef\u9009\uff09")),(0,l.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","1.0\u540e\u7ba1\u7406\u53f0\u7684\u914d\u7f6e\u662f\u6309\u7167\u5f15\u64ce\u6807\u7b7e\u6765\u8fdb\u884c\u7ba1\u7406\u7684\uff0c\u5982\u679c\u65b0\u589e\u5f15\u64ce\u6709\u914d\u7f6e\u53c2\u6570\u9700\u8981\u5728Configuration\u63d2\u5165\u76f8\u5e94\u7684\u914d\u7f6e\u53c2\u6570\uff0c\u9700\u8981\u5728\u4e09\u4e2a\u8868\u4e2d\u63d2\u5165\u53c2\u6570\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"linkis_configuration_config_key:  \u63d2\u5165\u5f15\u64ce\u7684\u914d\u7f6e\u53c2\u6570\u7684key\u548c\u9ed8\u8ba4values\nlinkis_manager_label\uff1a\u63d2\u5165\u5f15\u64celabel\u5982\uff1ahive-1.2.1\nlinkis_configuration_category\uff1a \u63d2\u5165\u5f15\u64ce\u7684\u76ee\u5f55\u5173\u8054\u5173\u7cfb\nlinkis_configuration_config_value\uff1a \u63d2\u5165\u5f15\u64ce\u9700\u8981\u5c55\u793a\u7684\u914d\u7f6e\n")),(0,l.kt)("p",null,"\u5982\u679c\u662f\u5df2\u7ecf\u5b58\u5728\u7684\u5f15\u64ce\uff0c\u65b0\u589e\u7248\u672c\uff0c\u5219\u53ef\u4ee5\u4fee\u6539linkis_configuration_dml.sql\u6587\u4ef6\u4e0b\u7684\u5bf9\u5e94\u5f15\u64ce\u7684\u7248\u672c\u8fdb\u884c\u6267\u884c"),(0,l.kt)("h3",{id:"23-\u5f15\u64ce\u5237\u65b0"},"2.3 \u5f15\u64ce\u5237\u65b0"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5f15\u64ce\u662f\u652f\u6301\u5b9e\u65f6\u5237\u65b0\uff0c\u5f15\u64ce\u653e\u7f6e\u5230\u5bf9\u5e94\u76ee\u5f55\u540e\uff0cLinkis1.0\u63d0\u4f9b\u4e0d\u5173\u670d\u70ed\u52a0\u8f7d\u5f15\u64ce\u7684\u65b9\u6cd5\uff0c\u901a\u8fc7restful\u63a5\u53e3\u8bf7\u6c42\u5373\u53ef\uff0c\u8bf7\u6c42\u63a5\u53e3\u4e3a",(0,l.kt)("a",{parentName:"li",href:"http://ip:port/api/rest_j/v1/rpc/receiveAndReply"},"http://ip:port/api/rest_j/v1/rpc/receiveAndReply"),"\uff0c\u8bf7\u6c42\u65b9\u5f0f\u4e3aPOST\uff0c\u8bf7\u6c42Body\u4e3a{\u201cmethod\u201d:\u201d/enginePlugin/engineConn/refreshAll\u201d}\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u91cd\u542f\u5237\u65b0\uff1a\u901a\u8fc7\u91cd\u542f\u4e5f\u53ef\u4ee5\u5f3a\u5236\u5237\u65b0\u5f15\u64ce\u76ee\u5f55")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"### cd\u5230sbin\u76ee\u5f55\u4e0b\uff0c\u91cd\u542flinkis-engineconn-plugin-server\n\ncd /Linkis1.0.0/sbin\n\n## \u6267\u884clinkis-daemon\u811a\u672c\n\nsh linkis-daemon.sh restart linkis-engine-plugin-server\n")))}d.isMDXComponent=!0}}]);