"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[34304],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return g}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=c(n),g=o,f=u["".concat(l,".").concat(g)]||u[g]||s[g]||a;return n?r.createElement(f,i(i({ref:t},m),{},{components:n})):r.createElement(f,i({ref:t},m))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},55347:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return m},default:function(){return u}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],p={title:"\u65e5\u5fd7\u89c4\u8303",sidebar_position:2},l=void 0,c={unversionedId:"development_specification/log",id:"development_specification/log",title:"\u65e5\u5fd7\u89c4\u8303",description:"1.  \u3010\u5f3a\u5236\u3011\u65e5\u5fd7\u4fe1\u606f\u9700\u8981\u4f7f\u7528\u82f1\u6587\uff0c\u4e0d\u80fd\u4f7f\u7528\u4e2d\u6587\u3002\u53ef\u9009\u4e2d\u82f1\u6587\u6df7\u6253\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs-community/current/development_specification/log.md",sourceDirName:"development_specification",slug:"/development_specification/log",permalink:"/zh-CN/community/development_specification/log",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/i18n/zh-CN/development_specification/log.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"\u65e5\u5fd7\u89c4\u8303",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u7f16\u7a0b\u89c4\u7ea6",permalink:"/zh-CN/community/development_specification/programming-specification"},next:{title:"\u5f02\u5e38\u89c4\u8303",permalink:"/zh-CN/community/development_specification/exception-catch"}},m=[],s={toc:m};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u3010",(0,a.kt)("strong",{parentName:"p"},"\u5f3a\u5236"),"\u3011\u65e5\u5fd7\u4fe1\u606f\u9700\u8981\u4f7f\u7528\u82f1\u6587\uff0c\u4e0d\u80fd\u4f7f\u7528\u4e2d\u6587\u3002\u53ef\u9009\u4e2d\u82f1\u6587\u6df7\u6253\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u3010",(0,a.kt)("strong",{parentName:"p"},"\u7ea6\u5b9a"),"\u3011Linkis\u9009\u62e9slf4j\u548cLog4j2\u4f5c\u4e3a\u65e5\u5fd7\u6253\u5370\u6846\u67b6\uff0c\u53bb\u9664\u4e86Spring-Cloud\u5305\u4e2d\u81ea\u5e26\u7684logback\u3002\u7531\u4e8eSlf4j\u4f1a\u968f\u673a\u9009\u62e9\u4e00\u4e2a\u65e5\u5fd7\u6846\u67b6\u8fdb\u884c\u7ed1\u5b9a\uff0c\u6240\u4ee5\u4ee5\u540e\u5728\u5f15\u5165\u65b0maven\u5305\u7684\u65f6\u5019\uff0c\u9700\u8981\u5c06\u8bf8\u5982slf4j-log4j\u7b49\u6865\u63a5\u5305exclude\u6389\uff0c\u4e0d\u7136\u65e5\u5fd7\u6253\u5370\u4f1a\u51fa\u73b0\u95ee\u9898\u3002\u4f46\u662f\u5982\u679c\u65b0\u5f15\u5165\u7684maven\u5305\u4f9d\u8d56log4j\u7b49\u5305\uff0c\u4e0d\u8981\u8fdb\u884cexclude\uff0c\u4e0d\u7136\u4ee3\u7801\u8fd0\u884c\u53ef\u80fd\u4f1a\u62a5\u9519")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u3010",(0,a.kt)("strong",{parentName:"p"},"\u914d\u7f6e"),"\u3011log4j2\u7684\u914d\u7f6e\u6587\u4ef6\u9ed8\u8ba4\u4e3alog4j2.xml,\u9700\u8981\u653e\u7f6e\u5728classpath\u4e2d\u3002\u5982\u679c\u9700\u8981\u548cspringcloud\u7ed3\u5408\uff0c\u53ef\u4ee5\u5728application.yml\u4e2d\u52a0\u4e0alogging:config:classpath:log4j2-spring.xml(\u914d\u7f6e\u6587\u4ef6\u7684\u4f4d\u7f6e)")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u3010",(0,a.kt)("strong",{parentName:"p"},"\u5f3a\u5236"),"\u3011\u7c7b\u4e2d\u4e0d\u53ef\u76f4\u63a5\u4f7f\u7528\u65e5\u5fd7\u7cfb\u7edf\uff08log4j2\u3001Log4j\u3001Logback\uff09\u4e2d\u7684API\u3002java\u91c7\u7528 LoggerFactory.getLogger(getClass).\u5982\u679c\u662fScala\u4ee3\u7801\uff0c\u5f3a\u5236\u7ee7\u627fLogging trait,Scala\u6253\u5370\u65e5\u5fd7\u5efa\u8bae\u52a0\u4e0alogger.info \u4e0d\u8981\u76f4\u63a5\u7528info\u7b49\u65b9\u6cd5\u8c03\u7528\uff0c\u4e0d\u4f1a\u6253\u5370\u6b63\u786e\u7684\u65b9\u6cd5\u548c\u884c\u6570\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u3010",(0,a.kt)("strong",{parentName:"p"},"\u5f00\u53d1\u7ea6\u5b9a"),"\u3011\u7531\u4e8eEngineConn\u662f\u7531EngineConnManager\u901a\u8fc7\u547d\u4ee4\u884c\u8fdb\u884c\u542f\u52a8\u7684\uff0c\u6240\u4ee5\u6211\u4eec\u5728\u547d\u4ee4\u884c\u4e2d\u6307\u5b9a\u4e86\u65e5\u5fd7\u7684\u914d\u7f6e\u6587\u4ef6\u7684\u8def\u5f84\uff0c\u540c\u65f6\u4e5f\u5bf9\u65e5\u5fd7\u7684\u914d\u7f6e\u5728\u4ee3\u7801\u8fd0\u884c\u4e2d\u8fdb\u884c\u4e86\u6539\u9020\uff0c\u7279\u522b\u662f\u5c06EngineConn\u7684\u65e5\u5fd7\u91cd\u5b9a\u5411\u5230\u4e86\u7cfb\u7edf\u7684standard out\u4e2d\u3002\u6240\u4ee5\u7ea6\u5b9aEngineConn\u7684\u65e5\u5fd7\u914d\u7f6e\u6587\u4ef6\u5728EnginePlugin\u4e2d\u5b9a\u4e49\uff0c\u540d\u79f0\u4e3alog4j2-engineconn.xml(\u8fd9\u4e2a\u662f\u7ea6\u5b9a\u540d\uff0c\u4e0d\u80fd\u66f4\u6539)")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u3010",(0,a.kt)("strong",{parentName:"p"},"\u5f3a\u5236"),"\u3011\u4e25\u683c\u533a\u5206\u65e5\u5fd7\u7ea7\u522b\u3002Fatal\u7ea7\u522b\u7684\u65e5\u5fd7\uff0c\u5728springcloud\u5e94\u7528\u521d\u59cb\u5316\u7684\u65f6\u5019\uff0c\u5c31\u5e94\u8be5\u629b\u51fa\u6765\uff0c\u5e76\u4f7f\u7528System.out(-1)\u9000\u51fa\u3002ERROR\u7ea7\u522b\u7684\u5f02\u5e38\u4e3a\u5f00\u53d1\u4eba\u5458\u5fc5\u987b\u5173\u6ce8\u548c\u5904\u7406\u7684\u5f02\u5e38\uff0c\u4e0d\u8981\u968f\u4fbf\u7528ERROR\u7ea7\u522b\u7684\u3002Warn\u7ea7\u522b\u662f\u7528\u6237\u64cd\u4f5c\u5f02\u5e38\u65e5\u5fd7\u548c\u4e00\u4e9b\u65b9\u4fbf\u65e5\u540e\u6392\u9664BUG\u7684\u65e5\u5fd7\u3002INFO\u4e3a\u5173\u952e\u7684\u6d41\u7a0b\u65e5\u5fd7\u3002DEBUG\u4e3a\u8c03\u5f0f\u65e5\u5fd7\uff0c\u5c3d\u91cf\u5c11\u5199\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u3010",(0,a.kt)("strong",{parentName:"p"},"\u5f3a\u5236"),"\u3011\u8981\u6c42\uff1aINFO\u7ea7\u522b\u7684\u65e5\u5fd7\uff0c\u6bcf\u4e2a\u5c0f\u6a21\u5757\u90fd\u5fc5\u987b\u6709\uff0c\u5173\u952e\u7684\u6d41\u7a0b\uff0c\u90fd\u81f3\u5c11\u6709INFO\u7ea7\u522b\u7684\u65e5\u5fd7\u3002\u5b88\u62a4\u7ebf\u7a0b\u6e05\u7406\u8d44\u6e90\u7b49\u5fc5\u987b\u6709WARN\u7ea7\u522b\u7684\u65e5\u5fd7\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u3010",(0,a.kt)("strong",{parentName:"p"},"\u5f3a\u5236"),'\u3011\u5f02\u5e38\u4fe1\u606f\u5e94\u8be5\u5305\u62ec\u4e24\u7c7b\u4fe1\u606f\uff1a\u6848\u53d1\u73b0\u573a\u4fe1\u606f\u548c\u5f02\u5e38\u5806\u6808\u4fe1\u606f\u3002\u5982\u679c\u4e0d\u5904\u7406\uff0c\u90a3\u4e48\u901a\u8fc7\u5173\u952e\u5b57throws\u5f80\u4e0a\u629b\u51fa\u3002 \u6b63\u4f8b\uff1alogger.error(\u5404\u7c7b\u53c2\u6570\u6216\u8005\u5bf9\u8c61toString + "_" + e.getMessage(), e);')),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u3010",(0,a.kt)("strong",{parentName:"p"},"\u5f3a\u5236"),"\u3011\u65e5\u5fd7\u6253\u5370\u65f6\u7981\u6b62\u76f4\u63a5\u7528 JSON \u5de5\u5177\u5c06\u5bf9\u8c61\u8f6c\u6362\u6210 String,\u5982\u679c\u4f60\u7684\u7c7b\u9700\u8981\u5728log\u91cc\u9762\u6253\u5370\uff0c\u8bf7\u91cd\u5199toString\u65b9\u6cd5\uff0c\u4e0d\u7136\u4e0d\u77e5\u9053\u600e\u4e48\u627e\u95ee\u9898\uff0c\u53ea\u4f1a\u6253\u5370\u5bf9\u8c61\u540d\uff0c\u4e0d\u4f1a\u77e5\u9053\u5177\u4f53\u7684\u5bf9\u8c61\u5185\u5bb9")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u3010",(0,a.kt)("strong",{parentName:"p"},"\u5f3a\u5236"),"\u3011\u5728\u65e5\u5fd7\u8f93\u51fa\u65f6\uff0c\u5b57\u7b26\u4e32\u53d8\u91cf\u4e4b\u95f4\u7684\u62fc\u63a5\u4f7f\u7528\u5360\u4f4d\u7b26\u7684\u65b9\u5f0f"))))}u.isMDXComponent=!0}}]);