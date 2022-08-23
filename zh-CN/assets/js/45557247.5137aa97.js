"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[17596],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return k}});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=i.createContext({}),p=function(e){var n=i.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=p(e.components);return i.createElement(o.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),k=a,m=u["".concat(o,".").concat(k)]||u[k]||d[k]||l;return t?i.createElement(m,r(r({ref:n},c),{},{components:t})):i.createElement(m,r({ref:n},c))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,r=new Array(l);r[0]=u;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var p=2;p<l;p++)r[p]=t[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},32175:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var i=t(87462),a=t(63366),l=(t(67294),t(3905)),r=["components"],s={title:"1.0.3\u4ee5\u4e0a\u7684\u7248\u672c\u5347\u7ea7",sidebar_position:2},o=void 0,p={unversionedId:"upgrade/upgrade-guide",id:"version-1.1.3/upgrade/upgrade-guide",isDocsHomePage:!1,title:"1.0.3\u4ee5\u4e0a\u7684\u7248\u672c\u5347\u7ea7",description:"\u672c\u6587\u7b80\u5355\u4ecb\u7ecd1.0.3\u4ee5\u4e0a\u7684\u7248\u672c\u7684\u5347\u7ea7\u5927\u4f53\u6d41\u7a0b",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.1.3/upgrade/upgrade-guide.md",sourceDirName:"upgrade",slug:"/upgrade/upgrade-guide",permalink:"/zh-CN/docs/latest/upgrade/upgrade-guide",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.1.3/upgrade/upgrade-guide.md",tags:[],version:"1.1.3",sidebarPosition:2,frontMatter:{title:"1.0.3\u4ee5\u4e0a\u7684\u7248\u672c\u5347\u7ea7",sidebar_position:2},sidebar:"version-1.1.3/tutorialSidebar",previous:{title:"0.x\u52301.0\u7684\u5347\u7ea7\u6307\u5357",permalink:"/zh-CN/docs/latest/upgrade/upgrade-from-0.X-to-1.0-guide"},next:{title:"\u603b\u89c8",permalink:"/zh-CN/docs/latest/tuning-and-troubleshooting/overview"}},c=[{value:"1 \u5347\u7ea7\u8bf4\u660e",id:"1-\u5347\u7ea7\u8bf4\u660e",children:[]},{value:"2 \u670d\u52a1\u5347\u7ea7\u5b89\u88c5",id:"2-\u670d\u52a1\u5347\u7ea7\u5b89\u88c5",children:[]},{value:"3. \u6570\u636e\u5e93\u8868\u5347\u7ea7",id:"3-\u6570\u636e\u5e93\u8868\u5347\u7ea7",children:[]},{value:"4 \u6570\u636e\u7684\u8c03\u6574(\u53ef\u9009)",id:"4-\u6570\u636e\u7684\u8c03\u6574\u53ef\u9009",children:[{value:"4.1 TOKEN \u914d\u7f6e",id:"41-token-\u914d\u7f6e",children:[]},{value:"4.2 UDF \u8c03\u6574",id:"42-udf-\u8c03\u6574",children:[]},{value:"4.3 Session \u5b57\u6bb5key\u914d\u7f6e",id:"43-session-\u5b57\u6bb5key\u914d\u7f6e",children:[]},{value:"4.4 \u9ed8\u8ba4\u961f\u5217\u7684\u8c03\u6574",id:"44-\u9ed8\u8ba4\u961f\u5217\u7684\u8c03\u6574",children:[]},{value:"4.5 \u5176\u4ed6\u76f8\u5173\u5305\u7684\u62f7\u8d1d",id:"45-\u5176\u4ed6\u76f8\u5173\u5305\u7684\u62f7\u8d1d",children:[]}]},{value:"5 \u7ba1\u7406\u53f0\u7684\u66f4\u65b0",id:"5-\u7ba1\u7406\u53f0\u7684\u66f4\u65b0",children:[{value:"5.1 \u4e0b\u8f7d\u524d\u7aef\u5b89\u88c5\u5305\u5e76\u89e3\u538b",id:"51-\u4e0b\u8f7d\u524d\u7aef\u5b89\u88c5\u5305\u5e76\u89e3\u538b",children:[]},{value:"5.2 \u5347\u7ea7",id:"52-\u5347\u7ea7",children:[]},{value:"5.3 \u6ce8\u610f\u4e8b\u9879",id:"53-\u6ce8\u610f\u4e8b\u9879",children:[]}]}],d={toc:c};function u(e){var n=e.components,t=(0,a.Z)(e,r);return(0,l.kt)("wrapper",(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u7b80\u5355\u4ecb\u7ecd1.0.3\u4ee5\u4e0a\u7684\u7248\u672c\u7684\u5347\u7ea7\u5927\u4f53\u6d41\u7a0b ")),(0,l.kt)("h2",{id:"1-\u5347\u7ea7\u8bf4\u660e"},"1 \u5347\u7ea7\u8bf4\u660e"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u662f\u7b2c\u4e00\u6b21\u5b89\u88c5\u4f7f\u7528 Linkis\uff0c\u6216\u91cd\u88c5 Linkis\uff0c\u65e0\u9700\u5173\u6ce8 Linkis \u5347\u7ea7\u6307\u5357\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u6d89\u53ca\u5230\u5176\u4ed6\u5e73\u53f0\u7684\u7ec4\u4ef6\uff08DataSphereStudio/Qualitis/Visualis\u7b49\uff09\uff0c\u5347\u7ea7\u524d\uff0c\u8bf7\u786e\u8ba4\u7248\u672c\u4e4b\u95f4\u7684\u517c\u5bb9\u6027\uff0c\u6700\u597d\u4f7f\u7528\u63a8\u8350\u7684\u7248\u672c\uff0c\u53ef\u53c2\u8003 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis#ecosystem%E3%80%82"},"https://github.com/apache/incubator-linkis#ecosystem\u3002")),(0,l.kt)("li",{parentName:"ul"},"\u5efa\u8bae\u901a\u8fc7\u8f6f\u94fe\u65b9\u5f0f\u6765\u8fdb\u884c\u7248\u672c\u7ba1\u63a7\uff0c\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539\u8f6f\u94fe\u7684\u76ee\u6807\u5730\u5740 \u6765\u5207\u6362\u7248\u672c \u5982:",(0,l.kt)("inlineCode",{parentName:"li"},"linkis -> /appcom/Install/LinkisInstall/linkis-1.1.3.20220615210213")," "),(0,l.kt)("li",{parentName:"ul"},"\u5347\u7ea7\u8fc7\u7a0b\u4e3b\u8981\u662f\u9700\u8981\u5173\u6ce8\u6570\u636e\u5e93\u8868\u7ed3\u6784\u7684\u8c03\u6574\u548c\u90e8\u5206\u914d\u7f6e\u53c2\u6570\u7684\u8c03\u6574 "),(0,l.kt)("li",{parentName:"ul"},"\u9664\u4e86\u540e\u7aef\u670d\u52a1\u7684\u5347\u7ea7\uff0clinkis\u7684\u7ba1\u7406\u53f0\u8d44\u6e90\u4e5f\u9700\u8981\u4e00\u5e76\u5347\u7ea7  "),(0,l.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a\u7248\u672c\u7684\u4e3b\u8981\u53d8\u52a8\u70b9 \u53ef\u4ee5\u67e5\u9605\u7248\u672c\u7684\u603b\u89c8\u4fe1\u606f",(0,l.kt)("inlineCode",{parentName:"li"},"https://linkis.apache.org/zh-CN/docs/x.x.x /release")," \u4ee5\u53ca\u7248\u672c\u7684",(0,l.kt)("a",{parentName:"li",href:"https://linkis.apache.org/zh-CN/download/main"},"Release-Note"),":",(0,l.kt)("a",{parentName:"li",href:"https://linkis.apache.org/zh-CN/download/main"},"https://linkis.apache.org/zh-CN/download/main")),(0,l.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a\u7248\u672c\u7684\u6570\u636e\u5e93\u53d8\u5316/\u914d\u7f6e\u53c2\u6570\u53d8\u5316 \u90fd\u662f\u57fa\u4e8e\u4e0a\u4e00\u4e2a\u7248\u672c")),(0,l.kt)("h2",{id:"2-\u670d\u52a1\u5347\u7ea7\u5b89\u88c5"},"2 \u670d\u52a1\u5347\u7ea7\u5b89\u88c5"),(0,l.kt)("p",null,"\u6309",(0,l.kt)("a",{parentName:"p",href:"../deployment/quick-deploy"},"\u90e8\u7f72\u6307\u5f15\u6587\u6863"),"\uff08\u6587\u6863\u4e2d\u5173\u4e8e\u7ba1\u7406\u53f0\u7684\u5b89\u88c5\u53ef\u4ee5\u8df3\u8fc7\uff09\uff0c\u8fdb\u884c\u65b0\u7248\u672c\u7684\u5b89\u88c5\u3002"),(0,l.kt)("p",null,"\u5b89\u88c5\u670d\u52a1\u65f6\uff0c\u5982\u679c\u5386\u53f2\u6570\u636e\u4fdd\u7559\uff0c\u8bf7\u4fdd\u7559\u5386\u53f2\u6570\u636e\uff0c\u5982\u679c\u65e0\u9700\u4fdd\u7559\u6570\u636e\uff0c\u76f4\u63a5\u91cd\u88c5\u5373\u53ef\uff0c\u4e5f\u65e0\u9700\u5173\u6ce8\u5347\u7ea7\u6d41\u7a0b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"Do you want to clear Linkis table information in the database?\n 1: Do not execute table-building statements\n 2: Dangerous! Clear all data and rebuild the tables\n other: exit\n\nPlease input the choice: ## choice 1\n")),(0,l.kt)("h2",{id:"3-\u6570\u636e\u5e93\u8868\u5347\u7ea7"},"3. \u6570\u636e\u5e93\u8868\u5347\u7ea7"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u670d\u52a1\u5b89\u88c5\u5b8c\u6210\u540e\uff0c\u9700\u8981\u5bf9\u6570\u636e\u5e93\u8fdb\u884c\u7ed3\u6784\u4fee\u6539\uff0c\u5305\u62ec\u8fdb\u884c\u8868\u7ed3\u6784\u53d8\u66f4\u548c\u8868\u6570\u636e\u53d8\u66f4 ")),(0,l.kt)("p",null,"\u627e\u5230\u5bf9\u5e94\u7684\u7248\u672c",(0,l.kt)("inlineCode",{parentName:"p"},"db/upgrade/x.x.x-schema/")," sql\u53d8\u52a8\u6587\u4ef6"),(0,l.kt)("p",null,"\u5982\u679c\u662f\u8de8\u591a\u4e2a\u7248\u672c\u6267\u884c\uff0c\u8bf7\u6309\u7248\u672c\u987a\u5e8f\uff0c\u4f9d\u6b21\u6267\u884c\uff0c\n\u5982\u679c\u67d0\u4e9b\u7248\u672c\u6ca1\u6709x.x.x_schema(linkis>=1.1.0\u7248\u672c\u540e\uff0c\u53ea\u8981\u6d89\u53ca\u5230\u6570\u636e\u5e93\u8868\u7684\u8c03\u6574\uff0c\u90fd\u4f1a\u6709\u5bf9\u5e94\u7248\u672c\u7684schema\u6587\u4ef6),\u5219\u8868\u793a\u8be5\u7248\u672c\u6ca1\u6709\u6570\u636e\u8868\u7684\u53d8\u5316 "),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"\u6ce8\u610f")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u6267\u884cupgrade\u4e0b\u76841.1.1_schema\u4e2d\u7684ddl\u5347\u7ea7\u811a\u672c,\u5982\u82e5\u6267\u884c\u5230linkis_cg_rm_resource_action_record\u76f8\u5173\u7684\u9519\u8bef,\u8bf7\u68c0\u67e5\u521b\u5efa\u8be5\u8868\u7684\u8bed\u53e5\u662f\u5426\u7f3a\u5c11ENGINE=InnoDB DEFAULT CHARSET=utf8;   \u5982\u679c\u7f3a\u5c11,\u8bf7\u52a0\u4e0a\u518d\u6267\u884c"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"\u251c\u2500\u2500 linkis_ddl.sql # \u5f53\u524d\u7248\u672c\u7684\u5168\u91cfddl \u6570\u636e\u5e93\u5b9a\u4e49\u8bed\u8a00 \u5efa\u8868\u8bed\u53e5 \n\u251c\u2500\u2500 linkis_dml.sql # \u5f53\u524d\u7248\u672c\u7684\u5168\u91cfdml \u6570\u636e\u64cd\u7eb5\u8bed\u8a00   \u6570\u636e\u7684\u589e\u6539\n\u2514\u2500\u2500 upgrade\n    \u251c\u2500\u2500 1.1.0_schema   # \u5bf9\u5e94\u7248\u672c\u7684sql\n    \u2502\xa0\xa0 \u2514\u2500\u2500 mysql\n    \u2502\xa0\xa0     \u251c\u2500\u2500 linkis_ddl.sql\n    \u2502\xa0\xa0     \u2514\u2500\u2500 linkis_dml.sql\n    \u251c\u2500\u2500 1.1.1_schema\n    \u2502\xa0\xa0 \u2514\u2500\u2500 mysql\n    \u2502\xa0\xa0     \u251c\u2500\u2500 linkis_ddl.sql\n    \u2502\xa0\xa0     \u2514\u2500\u2500 linkis_dml.sql\n    \u2514\u2500\u2500 1.1.3_schema\n        \u2514\u2500\u2500 mysql\n            \u2514\u2500\u2500 linkis_ddl.sql\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mysql-sql"},"    #\u5982\u679c\u662f\u8de8\u591a\u4e2a\u7248\u672c\u6267\u884c\uff0c\u8bf7\u6309\u7248\u672c\u987a\u5e8f\uff0c\u4f9d\u6b21\u6267\u884c \u5148\u6267\u884cddl \u518d\u6267\u884cdml \n    #\u6bd4\u5982\u5f53\u524d\u4ecelinkis-1.0.3 \u5347\u7ea7\u5230linkis-1.1.2 \n    source upgrade/1.1.0_schema/mysql/linkis_ddl.sql\n    source upgrade/1.1.0_schema/mysql/linkis_dml.sql\n\n    source upgrade/1.1.1_schema/mysql/linkis_ddl.sql\n    source upgrade/1.1.1_schema/mysql/linkis_dml.sql\n\n")),(0,l.kt)("h2",{id:"4-\u6570\u636e\u7684\u8c03\u6574\u53ef\u9009"},"4 \u6570\u636e\u7684\u8c03\u6574(\u53ef\u9009)"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6309\u5b9e\u9645\u60c5\u51b5\uff0c\u51b3\u5b9a\u662f\u5426\u9700\u8981\u505a\u5982\u4e0b\u8c03\u6574 ")),(0,l.kt)("h3",{id:"41-token-\u914d\u7f6e"},"4.1 TOKEN \u914d\u7f6e"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u7528\u4e8e\u63a5\u53e3\u8c03\u7528\u65f6\u7684\u8ba4\u8bc1")),(0,l.kt)("p",null,"1.1.1 \u7248\u672c\u8c03\u6574\u5c06\u539f\u6765\u7684TOKEN\u914d\u7f6e\u4ece",(0,l.kt)("inlineCode",{parentName:"p"},"${LINKIS_HOME}/conf/token.properties"),"\u8fc1\u79fb\u5230\u6570\u636e\u5e93\u8868",(0,l.kt)("inlineCode",{parentName:"p"},"linkis_mg_gateway_auth_token"),",\n\u5bf9\u4e8e\u539f\u6765\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"token.properties"),"\u989d\u5916\u914d\u7f6e\u7684TOKEN\uff0c\u9700\u8981\u624b\u52a8\u8fc1\u79fb\u8868\u4e2d"),(0,l.kt)("h3",{id:"42-udf-\u8c03\u6574"},"4.2 UDF \u8c03\u6574"),(0,l.kt)("p",null,"1.1.1 \u4e2d\u652f\u6301\u652f\u6301UDF\u591a\u7248\u672c\u63a7\u5236\u3001UDF\u5b58\u50a8\u5230BML\u7684\u529f\u80fd\u7279\u6027\uff0cUDF\u51fd\u6570\u5b58\u50a8\u7684\u8868\u7ed3\u6784\u6709\u8c03\u6574\uff0cUDF\u7684\u5386\u53f2\u6570\u636e\uff0c\u9700\u8981\u5355\u72ec\u8fdb\u884c\u8fc1\u79fb "),(0,l.kt)("h3",{id:"43-session-\u5b57\u6bb5key\u914d\u7f6e"},"4.3 Session \u5b57\u6bb5key\u914d\u7f6e"),(0,l.kt)("p",null,"1.1.1 \u7248\u672c\u4e2d\u8c03\u6574\u4e86session\u5b57\u6bb5\u7684key\uff0c\u4ece",(0,l.kt)("inlineCode",{parentName:"p"},"bdp-user-ticket-id"),"-> \u8c03\u6574\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"linkis_user_session_ticket_id_v1"),"\uff0c\n\u5982\u679c\u662f\u5bf9Linkis\u7684\u5347\u7ea7\u3002\u540c\u65f6\u90e8\u7f72DSS\u6216\u8005\u5176\u4ed6\u9879\u76ee\uff0c\u4f46\u4ed6\u4eec\u670d\u52a1lib\u5305\u4e2d\uff0c\u6240\u4f9d\u8d56\u7684Linkis\u7684linkis-module-x.x.x.jar\u5305 <1.1.1\uff0c\u5219\u9700\u8981\u4fee\u6539\u4f4d\u4e8e",(0,l.kt)("inlineCode",{parentName:"p"},"${LINKIS_HOME}/conf/linkis.properties"),"\u6587\u4ef6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'echo "wds.linkis.session.ticket.key=bdp-user-ticket-id" >> linkis.properties\n')),(0,l.kt)("h3",{id:"44-\u9ed8\u8ba4\u961f\u5217\u7684\u8c03\u6574"},"4.4 \u9ed8\u8ba4\u961f\u5217\u7684\u8c03\u6574"),(0,l.kt)("p",null,"1.1.1 \u5f00\u59cb\u8c03\u6574\u4e86yarn\u961f\u5217\u9ed8\u8ba4\u96c6\u7fa4\u540d",(0,l.kt)("inlineCode",{parentName:"p"},"wds.linkis.rm.cluster")," sit\u8c03\u6574\u4e3adefault\uff0c\u5982\u679c\u4e00\u76f4\u4f7f\u7528\u7684sit\uff0c\u8bf7\u4fee\u6539\u8868\u6570\u636e\n",(0,l.kt)("inlineCode",{parentName:"p"},"linkis_cg_rm_external_resource_provider"),"\u4e2d\u7684\u96c6\u7fa4\u540d "),(0,l.kt)("h3",{id:"45-\u5176\u4ed6\u76f8\u5173\u5305\u7684\u62f7\u8d1d"},"4.5 \u5176\u4ed6\u76f8\u5173\u5305\u7684\u62f7\u8d1d"),(0,l.kt)("p",null,"\u5982\u679c\u4e4b\u524d\u8001\u7248\u672cLinkis\u4e2d",(0,l.kt)("inlineCode",{parentName:"p"},"${LINKIS_HOME_OLD}/lib/linkis-engineconn-plugins"),"\u6709\u5b89\u88c5\u7b2c\u4e09\u65b9appconn\u63d2\u4ef6\uff0c\u9700\u8981\u62f7\u8d1d\u81f3\u65b0\u7248\u672c\u4e2d\uff0c\n\u6700\u597d\u901a\u8fc7\u8f6f\u94fe\u94fe\u63a5\u5230appconn\u8def\u5f84\u4e0a\n\u5982:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"#\u67e5\u770b\u8001\u7248\u672c\u662f\u5426\u6709\u5b89\u88c5\u7b2c\u4e09\u65b9appconn\ncd ${LINKIS_HOME_OLD}/lib/linkis-engineconn-plugins/\nll\n appconn -> /appcom/Install/LinkisInstall/appconn\n\n\n#\u65b0\u7248\u672c\u4fdd\u6301\u4e00\u81f4 \ncd ${LINKIS_HOME}/lib/linkis-engineconn-plugins/ \n#\u8f6f\u94fe\nln -snf  /appcom/Install/LinkisInstall/appconn  appconn \n")),(0,l.kt)("p",null,"\u5982\u679c\u539f\u6765\u7248\u672c\u6709\u5b89\u88c5dss\uff0c\u9700\u8981\u62f7\u8d1d\u539f\u6765\u5305\u4e2d\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"dss-gateway-support-x.x.x.jar")," \u81f3linkis\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"./lib/linkis-spring-cloud-services/linkis-mg-gateway/"),"\u76ee\u5f55\u4e0b\n\u5982:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"cp ${LINKIS_HOME_OLD}/lib/linkis-spring-cloud-services/linkis-mg-gateway/dss-gateway-support-1.1.3.jar ${LINKIS_HOME}/lib/linkis-spring-cloud-services/linkis-mg-gateway/dss-gateway-support-1.1.3.jar\n\n")),(0,l.kt)("h2",{id:"5-\u7ba1\u7406\u53f0\u7684\u66f4\u65b0"},"5 \u7ba1\u7406\u53f0\u7684\u66f4\u65b0"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5347\u7ea7\u540e\u7aef\uff0c\u540c\u65f6\u4e5f\u9700\u8981\u5347\u7ea7\u5bf9\u5e94\u7684\u7ba1\u7406\u53f0\u8d44\u6e90\uff0c\u65e0\u9700\u6267\u884c\u7ba1\u7406\u53f0\u7684\u5b89\u88c5\uff0c\u76f4\u63a5\u66ff\u6362\u6389\u9759\u6001\u8d44\u6e90\u5373\u53ef")),(0,l.kt)("h3",{id:"51-\u4e0b\u8f7d\u524d\u7aef\u5b89\u88c5\u5305\u5e76\u89e3\u538b"},"5.1 \u4e0b\u8f7d\u524d\u7aef\u5b89\u88c5\u5305\u5e76\u89e3\u538b"),(0,l.kt)("p",null,"\u4e0a\u4f20\u81f3\u7ba1\u7406\u53f0\u6240\u5728\u7684\u670d\u52a1\u5668\u4e0a \uff0c\u89e3\u538b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"tar -xvf apache-linkis-x.x.x-incubating-web-bin.tar.gz\n")),(0,l.kt)("h3",{id:"52-\u5347\u7ea7"},"5.2 \u5347\u7ea7"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u7ba1\u7406\u53f0\u5347\u7ea7\u65b9\u5f0f\u6bd4\u8f83\u591a\uff0c\u56e0\u4e3a\u53ea\u662f\u8d44\u6e90\u7684\u66f4\u65b0\uff0c\u53ef\u4ee5\u901a\u8fc7\u7ba1\u7406\u53f0\u5b89\u88c5\u811a\u672c\u6765\u8fdb\u884c\uff0c\u4e5f\u53ef\u4ee5\u76f4\u63a5\u8986\u76d6\u6389\u539f\u6709\u7684\u8d44\u6e90\uff0c\n\u63a8\u8350\u4f7f\u7528\u8f6f\u94fe\u65b9\u5f0f\u6765\u8fdb\u884c\uff0c\u53ea\u9700\u8981\u4fee\u6539\u8f6f\u94fe\u7684\u76ee\u6807\u5730\u5740\u5373\u53ef\uff0c\u4e0b\u9762\u4ee5\u65b0\u5efa\u7248\u672c\u8d44\u6e90\u8def\u5f84\u65b9\u5f0f\u4e3a\u4f8b")),(0,l.kt)("p",null,"nginx\u914d\u7f6e\u6587\u4ef6\u9ed8\u8ba4\u662f \u5728",(0,l.kt)("inlineCode",{parentName:"p"},"/etc/nginx/conf.d/*"),"\nnginx\u7684\u65e5\u5fd7\u6587\u4ef6\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"/var/log/nginx/access.log")," \u548c",(0,l.kt)("inlineCode",{parentName:"p"},"/var/log/nginx/error.log")),(0,l.kt)("p",null,"\u573a\u666f1\uff1a \u5982\u679c\u662f\u96c6\u6210\u518dDSS\u9879\u76ee\u4e2d\uff0c\u4fee\u6539DSS\u9879\u76ee\u4e2dlinkis\u7ba1\u7406\u53f0\u8d44\u6e90\u7684\u5730\u5740\u6307\u5411\ndss\u7684nginx\u914d\u7f6e\u6587\u4ef6\u9ed8\u8ba4\u662f \u5728",(0,l.kt)("inlineCode",{parentName:"p"},"/etc/nginx/conf.d/dss.conf")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-nginx"},"#\u793a\u4f8b\n        server {\n            ......\n            location dss/linkis {\n            alias   /appcom/Install/linkis-web-newversion/dist; # \u9759\u6001\u6587\u4ef6\u76ee\u5f55  \n            index  index.html index.html;\n            }\n            .....\n        }\n")),(0,l.kt)("p",null,"\u573a\u666f2\uff1a\u5982\u679clinkis\u662f\u72ec\u7acb\u90e8\u7f72\n\u4fee\u6539Nginx\u7684\u914d\u7f6e,\u9759\u6001\u8d44\u6e90\u5730\u5740 \u6307\u5411\u65b0\u7248\u672c\u7684linkis\u7ba1\u7406\u53f0\nlinkis\u7684nginx\u914d\u7f6e\u6587\u4ef6\u9ed8\u8ba4\u662f \u5728",(0,l.kt)("inlineCode",{parentName:"p"},"/etc/nginx/conf.d/dss.conf")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-nginx"},"#\u793a\u4f8b\n        server {\n            ......\n            location dss/linkis {\n            alias   /appcom/Install/linkis-web-newversion/dist; # \u9759\u6001\u6587\u4ef6\u76ee\u5f55 \n            index  index.html index.html;\n            }\n            ......\n        }\n")),(0,l.kt)("p",null,"\u91cd\u65b0\u52a0\u8f7dnginx \u914d\u7f6e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"sudo nginx -s reload \n")),(0,l.kt)("h3",{id:"53-\u6ce8\u610f\u4e8b\u9879"},"5.3 \u6ce8\u610f\u4e8b\u9879"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7ba1\u7406\u53f0\u5347\u7ea7\u540e\uff0c\u56e0\u4e3a\u6d4f\u89c8\u5668\u53ef\u80fd\u5b58\u5728\u7f13\u5b58\uff0c\u5982\u679c\u8981\u9a8c\u8bc1\u6548\u679c\uff0c\u6700\u597d\u6e05\u7a7a\u4e0b\u6d4f\u89c8\u5668\u7f13\u5b58")))}u.isMDXComponent=!0}}]);