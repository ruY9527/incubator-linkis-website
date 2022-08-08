"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[79807],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return p}});var i=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,i,l=function(e,n){if(null==e)return{};var t,i,l={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=i.createContext({}),u=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=u(e.components);return i.createElement(s.Provider,{value:n},e.children)},h={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=u(t),p=l,g=d["".concat(s,".").concat(p)]||d[p]||h[p]||o;return t?i.createElement(g,r(r({ref:n},c),{},{components:t})):i.createElement(g,r({ref:n},c))}));function p(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=t.length,r=new Array(o);r[0]=d;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a.mdxType="string"==typeof e?e:l,r[1]=a;for(var u=2;u<o;u++)r[u]=t[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7863:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var i=t(87462),l=t(63366),o=(t(67294),t(3905)),r=["components"],a={title:"Shell Engine Usage",sidebar_position:2},s="Shell Engine Usage document",u={unversionedId:"engine_usage/shell",id:"engine_usage/shell",isDocsHomePage:!1,title:"Shell Engine Usage",description:"This article mainly introduces the configuration, deployment and use of Shell EngineConn in Linkis1.0",source:"@site/docs/engine_usage/shell.md",sourceDirName:"engine_usage",slug:"/engine_usage/shell",permalink:"/docs/1.1.3/engine_usage/shell",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/docs/engine_usage/shell.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Shell Engine Usage",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Python Engine Usage",permalink:"/docs/1.1.3/engine_usage/python"},next:{title:"Spark Engine Usage",permalink:"/docs/1.1.3/engine_usage/spark"}},c=[{value:"1. The environment configuration before using the Shell EngineConn",id:"1-the-environment-configuration-before-using-the-shell-engineconn",children:[]},{value:"2. Shell EngineConn configuration and deployment",id:"2-shell-engineconn-configuration-and-deployment",children:[{value:"2.1 Shell version selection and compilation",id:"21-shell-version-selection-and-compilation",children:[]},{value:"2.2 shell engineConn deployment and loading",id:"22-shell-engineconn-deployment-and-loading",children:[]},{value:"2.3 Labels of the shell EngineConn",id:"23-labels-of-the-shell-engineconn",children:[]}]},{value:"3. Use of Shell EngineConn",id:"3-use-of-shell-engineconn",children:[{value:"Ready to operate",id:"ready-to-operate",children:[]},{value:"3.1 How to use Linkis SDK",id:"31-how-to-use-linkis-sdk",children:[]},{value:"3.2 How to use Linkis-cli",id:"32-how-to-use-linkis-cli",children:[]},{value:"3.3 How to use Scriptis",id:"33-how-to-use-scriptis",children:[]}]},{value:"4. Shell EngineConn user settings",id:"4-shell-engineconn-user-settings",children:[]}],h={toc:c};function d(e){var n=e.components,a=(0,l.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},h,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"shell-engine-usage-document"},"Shell Engine Usage document"),(0,o.kt)("p",null,"This article mainly introduces the configuration, deployment and use of Shell EngineConn in Linkis1.0"),(0,o.kt)("h2",{id:"1-the-environment-configuration-before-using-the-shell-engineconn"},"1. The environment configuration before using the Shell EngineConn"),(0,o.kt)("p",null,"If you want to use the shell EngineConn on your server, you need to ensure that the user's PATH has the bash execution directory and execution permissions."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Environment variable name"),(0,o.kt)("th",{parentName:"tr",align:null},"Environment variable content"),(0,o.kt)("th",{parentName:"tr",align:null},"Remarks"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"sh execution environment"),(0,o.kt)("td",{parentName:"tr",align:null},"bash environment variables"),(0,o.kt)("td",{parentName:"tr",align:null},"bash is recommended")))),(0,o.kt)("p",null,"Table 1-1 Environmental configuration list"),(0,o.kt)("h2",{id:"2-shell-engineconn-configuration-and-deployment"},"2. Shell EngineConn configuration and deployment"),(0,o.kt)("h3",{id:"21-shell-version-selection-and-compilation"},"2.1 Shell version selection and compilation"),(0,o.kt)("p",null,"The shell EngineConn does not need to be compiled by the user, and the compiled shell EngineConn plug-in package can be used directly."),(0,o.kt)("h3",{id:"22-shell-engineconn-deployment-and-loading"},"2.2 shell engineConn deployment and loading"),(0,o.kt)("p",null,"Here you can use the default loading method to be used normally."),(0,o.kt)("h3",{id:"23-labels-of-the-shell-engineconn"},"2.3 Labels of the shell EngineConn"),(0,o.kt)("p",null,"Here you can use the default dml.sql to insert it and it can be used normally."),(0,o.kt)("h2",{id:"3-use-of-shell-engineconn"},"3. Use of Shell EngineConn"),(0,o.kt)("h3",{id:"ready-to-operate"},"Ready to operate"),(0,o.kt)("p",null,"Before submitting the shell on linkis, you only need to ensure that there is the path of the shell in your user's $PATH."),(0,o.kt)("h3",{id:"31-how-to-use-linkis-sdk"},"3.1 How to use Linkis SDK"),(0,o.kt)("p",null,"Linkis  provides a client method to call shell tasks. The call method is through the SDK provided by LinkisClient. We provide java and scala two ways to call, the specific usage can refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/1.1.3/user_guide/sdk-manual"},"JAVA SDK Manual"),".\nIf you use Hive, you only need to make the following changes:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'        Map<String, Object> labels = new HashMap<String, Object>();\n        labels.put(LabelKeyConstant.ENGINE_TYPE_KEY, "shell-1"); // required engineType Label\n        labels.put(LabelKeyConstant.USER_CREATOR_TYPE_KEY, "hadoop-IDE");// required execute user and creator\n        labels.put(LabelKeyConstant.CODE_TYPE_KEY, "shell"); // required codeType\n')),(0,o.kt)("h3",{id:"32-how-to-use-linkis-cli"},"3.2 How to use Linkis-cli"),(0,o.kt)("p",null,"After Linkis 1.0, you can submit tasks through cli. We only need to specify the corresponding EngineConn and CodeType tag types. The use of shell is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'sh ./bin/linkis-cli -engineType shell-1 -codeType shell -code "echo \\"hello\\" "  -submitUser hadoop -proxyUser hadoop\n')),(0,o.kt)("p",null,"The specific usage can refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/1.1.3/user_guide/linkiscli-manual"},"Linkis CLI Manual"),"."),(0,o.kt)("h3",{id:"33-how-to-use-scriptis"},"3.3 How to use Scriptis"),(0,o.kt)("p",null,"The use of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/WeBankFinTech/Scriptis"},"Scriptis")," is the simplest. You can directly enter Scriptis, right-click the directory and create a new shell script, write shell code and click Execute."),(0,o.kt)("p",null,"The execution principle of the shell is that the shell EngineConn starts a system process to execute through the ProcessBuilder that comes with java, and redirects the output of the process to the EngineConn and writes it to the log."),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(9247).Z})),(0,o.kt)("p",null,"Figure 3-1 Screenshot of shell execution effect"),(0,o.kt)("h2",{id:"4-shell-engineconn-user-settings"},"4. Shell EngineConn user settings"),(0,o.kt)("p",null,"The shell EngineConn can generally set the maximum memory of the EngineConn JVM."))}d.isMDXComponent=!0},9247:function(e,n,t){n.Z=t.p+"assets/images/shell-run-07133a5962a97693b874ff4669af4a8b.png"}}]);