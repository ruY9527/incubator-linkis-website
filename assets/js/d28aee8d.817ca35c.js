"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[24825],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return g}});var i=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=i.createContext({}),l=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=l(e.components);return i.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},p=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(t),g=o,f=p["".concat(c,".").concat(g)]||p[g]||d[g]||r;return t?i.createElement(f,a(a({ref:n},u),{},{components:t})):i.createElement(f,a({ref:n},u))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,a=new Array(r);a[0]=p;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<r;l++)a[l]=t[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}p.displayName="MDXCreateElement"},1962:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var i=t(87462),o=t(63366),r=(t(67294),t(3905)),a=["components"],s={title:"JDBC Engine Usage",sidebar_position:2},c=void 0,l={unversionedId:"engine_usage/jdbc",id:"version-1.0.3/engine_usage/jdbc",isDocsHomePage:!1,title:"JDBC Engine Usage",description:"This article mainly introduces the configuration, deployment and use of JDBC EngineConn in Linkis1.0.",source:"@site/versioned_docs/version-1.0.3/engine_usage/jdbc.md",sourceDirName:"engine_usage",slug:"/engine_usage/jdbc",permalink:"/docs/1.0.3/engine_usage/jdbc",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/versioned_docs/version-1.0.3/engine_usage/jdbc.md",tags:[],version:"1.0.3",sidebarPosition:2,frontMatter:{title:"JDBC Engine Usage",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Hive Engine Usage",permalink:"/docs/1.0.3/engine_usage/hive"},next:{title:"Python Engine Usage",permalink:"/docs/1.0.3/engine_usage/python"}},u=[{value:"1. Environment configuration before using the JDBC EngineConn",id:"1-environment-configuration-before-using-the-jdbc-engineconn",children:[]},{value:"2. JDBC EngineConn configuration and deployment",id:"2-jdbc-engineconn-configuration-and-deployment",children:[{value:"2.1 JDBC version selection and compilation",id:"21-jdbc-version-selection-and-compilation",children:[]},{value:"2.2 JDBC EngineConn deployment and loading",id:"22-jdbc-engineconn-deployment-and-loading",children:[]},{value:"2.3 JDBC EngineConn Labels",id:"23-jdbc-engineconn-labels",children:[]}]},{value:"3. The use of JDBC EngineConn",id:"3-the-use-of-jdbc-engineconn",children:[{value:"Ready to operate",id:"ready-to-operate",children:[]},{value:"3.1 How to use Linkis SDK",id:"31-how-to-use-linkis-sdk",children:[]},{value:"3.2 How to use Linkis-cli",id:"32-how-to-use-linkis-cli",children:[]},{value:"3.3 How to use Scriptis",id:"33-how-to-use-scriptis",children:[]}]},{value:"4. JDBC EngineConn user settings",id:"4-jdbc-engineconn-user-settings",children:[]}],d={toc:u};function p(e){var n=e.components,s=(0,o.Z)(e,a);return(0,r.kt)("wrapper",(0,i.Z)({},d,s,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This article mainly introduces the configuration, deployment and use of JDBC EngineConn in Linkis1.0."),(0,r.kt)("h2",{id:"1-environment-configuration-before-using-the-jdbc-engineconn"},"1. Environment configuration before using the JDBC EngineConn"),(0,r.kt)("p",null,"If you want to use the JDBC EngineConn on your server, you need to prepare the JDBC connection information, such as the connection address, user name and password of the MySQL database, etc."),(0,r.kt)("h2",{id:"2-jdbc-engineconn-configuration-and-deployment"},"2. JDBC EngineConn configuration and deployment"),(0,r.kt)("h3",{id:"21-jdbc-version-selection-and-compilation"},"2.1 JDBC version selection and compilation"),(0,r.kt)("p",null,"The JDBC EngineConn does not need to be compiled by the user, and the compiled JDBC EngineConn plug-in package can be used directly. Drivers that have been provided include MySQL, PostgreSQL, etc."),(0,r.kt)("h3",{id:"22-jdbc-engineconn-deployment-and-loading"},"2.2 JDBC EngineConn deployment and loading"),(0,r.kt)("p",null,"Here you can use the default loading method to use it normally, just install it according to the standard version."),(0,r.kt)("h3",{id:"23-jdbc-engineconn-labels"},"2.3 JDBC EngineConn Labels"),(0,r.kt)("p",null,"Here you can use the default dml.sql to insert it and it can be used normally."),(0,r.kt)("h2",{id:"3-the-use-of-jdbc-engineconn"},"3. The use of JDBC EngineConn"),(0,r.kt)("h3",{id:"ready-to-operate"},"Ready to operate"),(0,r.kt)("p",null,"You need to configure JDBC connection information, including connection address information and user name and password."),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(93865).Z})),(0,r.kt)("p",null,"Figure 3-1 JDBC configuration information"),(0,r.kt)("p",null,"You can also specify in the RuntimeMap of the submitted task"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"wds.linkis.jdbc.connect.url \nwds.linkis.jdbc.username\nwds.linkis.jdbc.password\n")),(0,r.kt)("h3",{id:"31-how-to-use-linkis-sdk"},"3.1 How to use Linkis SDK"),(0,r.kt)("p",null,"Linkis provides a client method to call jdbc tasks. The call method is through the SDK provided by LinkisClient. We provide java and scala two ways to call, the specific usage can refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/1.0.3/user_guide/sdk_manual"},"JAVA SDK Manual"),".\nIf you use Hive, you only need to make the following changes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'        Map<String, Object> labels = new HashMap<String, Object>();\n        labels.put(LabelKeyConstant.ENGINE_TYPE_KEY, "jdbc-4"); // required engineType Label\n        labels.put(LabelKeyConstant.USER_CREATOR_TYPE_KEY, "hadoop-IDE");// required execute user and creator\n        labels.put(LabelKeyConstant.CODE_TYPE_KEY, "jdbc"); // required codeType\n')),(0,r.kt)("h3",{id:"32-how-to-use-linkis-cli"},"3.2 How to use Linkis-cli"),(0,r.kt)("p",null,"After Linkis 1.0, you can submit tasks through cli. We only need to specify the corresponding EngineConn and CodeType tag types. The use of JDBC is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'sh ./bin/linkis-cli -engineType jdbc-4 -codeType jdbc -code "show tables"  -submitUser hadoop -proxyUser hadoop\n')),(0,r.kt)("p",null,"The specific usage can refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/1.0.3/user_guide/linkiscli_manual"},"Linkis CLI Manual"),"."),(0,r.kt)("h3",{id:"33-how-to-use-scriptis"},"3.3 How to use Scriptis"),(0,r.kt)("p",null,"The way to use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/WeBankFinTech/Scriptis"},"Scriptis"),"  is the simplest. You can go directly to Scriptis, right-click the directory and create a new JDBC script, write JDBC code and click Execute."),(0,r.kt)("p",null,"The execution principle of JDBC is to load the JDBC Driver and submit sql to the SQL server for execution and obtain the result set and return."),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(58902).Z})),(0,r.kt)("p",null,"Figure 3-2 Screenshot of the execution effect of JDBC"),(0,r.kt)("h2",{id:"4-jdbc-engineconn-user-settings"},"4. JDBC EngineConn user settings"),(0,r.kt)("p",null,"JDBC user settings are mainly JDBC connection information, but it is recommended that users encrypt and manage this password and other information."))}p.isMDXComponent=!0},93865:function(e,n,t){n.Z=t.p+"assets/images/jdbc-conf-fd6af0efab661a52aa8109226ba46cfa.png"},58902:function(e,n,t){n.Z=t.p+"assets/images/jdbc-run-ab95f1b3857aca77b4fee06ce3f3f110.png"}}]);