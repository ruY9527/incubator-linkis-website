"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[51185],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var i=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=i.createContext({}),l=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=l(e.components);return i.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(t),m=o,h=d["".concat(c,".").concat(m)]||d[m]||p[m]||r;return t?i.createElement(h,a(a({ref:n},u),{},{components:t})):i.createElement(h,a({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,a=new Array(r);a[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<r;l++)a[l]=t[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},69097:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var i=t(87462),o=t(63366),r=(t(67294),t(3905)),a=["components"],s={title:"How To Quickly Implement A New Engine",sidebar_position:3},c=void 0,l={unversionedId:"development/new-engine-conn",id:"version-1.0.2/development/new-engine-conn",isDocsHomePage:!1,title:"How To Quickly Implement A New Engine",description:"How To Quickly Implement A New Engine",source:"@site/versioned_docs/version-1.0.2/development/new-engine-conn.md",sourceDirName:"development",slug:"/development/new-engine-conn",permalink:"/docs/1.0.2/development/new-engine-conn",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/versioned_docs/version-1.0.2/development/new-engine-conn.md",tags:[],version:"1.0.2",sidebarPosition:3,frontMatter:{title:"How To Quickly Implement A New Engine",sidebar_position:3},sidebar:"version-1.0.2/tutorialSidebar",previous:{title:"Linkis Debug",permalink:"/docs/1.0.2/development/linkis-debug"},next:{title:"Linkis Console Compile",permalink:"/docs/1.0.2/development/web-build"}},u=[{value:"How To Quickly Implement A New Engine",id:"how-to-quickly-implement-a-new-engine",children:[]},{value:"Actual Case",id:"actual-case",children:[]}],p={toc:u};function d(e){var n=e.components,t=(0,o.Z)(e,a);return(0,r.kt)("wrapper",(0,i.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"how-to-quickly-implement-a-new-engine"},"How To Quickly Implement A New Engine"),(0,r.kt)("p",null,'To implement a new engine is to implement a new "EngineConnPlugin(ECP)" means engine plugin. Specific steps are as follows: '),(0,r.kt)("p",null,'1.Create a new maven module and introduce the maven dependency of "ECP"\uff1a'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<dependency>\n<groupId>com.webank.wedatasphere.linkis</groupId>\n<artifactId>linkis-engineconn-plugin-core</artifactId>\n<version>${linkis.version}</version>\n</dependency>\n")),(0,r.kt)("p",null,'2.The main interfaces of implementing "ECP"\uff1a'),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",'a)EngineConnPlugin, when starting "EngineConn", first find the corresponding "EngineConnPlugin" class, and use this as the entry point to obtain the implementation of other core interfaces, which is the main interface that must be implemented.'),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","b)EngineConnFactory, which implements the logic of how to start an engine connector and how to start an engine executor, is an interface that must be implemented."),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",'b.a Implement the "createEngineConn" method: return an "EngineConn" object, where "getEngine" returns an object that encapsulates the connection information with the underlying engine, and also contains Engine type information.'),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",'b.b For engines that only support a single computing scenario, inherit "SingleExecutorEngineConnFactory" class and implement "createExecutor" method which returns the corresponding Executor.'),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",'b.c For engines that support multiple computing scenarios, you need to inherit "MultiExecutorEngineConnFactory" and implement an ExecutorFactory for each computing type. "EngineConnPlugin" will obtain all ExecutorFactory through reflection and return the corresponding Executor according to the actual situation.'),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",'c)EngineConnResourceFactory, it is used to limit the resources required to start an engine. Before the engine starts, it will use this as the basis to apply for resources from the "Linkis Manager". Not required, "GenericEngineResourceFactory" can be used by default.'),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",'d)EngineLaunchBuilder, it is used to encapsulate the necessary information that "EngineConnManager" can parse into the startup command. Not necessary, you can directly inherit "JavaProcessEngineConnLaunchBuilder".'),(0,r.kt)("p",null,"3.Implement Executor. As a real computing scene executor, Executor is the actual computing logic execution unit. It also abstracts various specific capabilities of the engine and provides various services such as locking, accessing status and obtaining logs. According to actual needs, Linkis provides the following derived Executor base classes by default. The class names and main functions are as follows\uff1a"),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","a) SensibleExecutor: "),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0"," i. Executor has multiple states, allowing Executor to switch states."),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","ii. After the Executor switches the state, operations such as notifications are allowed. "),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",'b) YarnExecutor: refers to the Yarn type engine, which can obtain the "applicationId", "applicationURL" and queue\u3002'),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",'c) ResourceExecutor: refers to the engine\'s ability to dynamically change resources and cooperate with the "requestExpectedResource" method to apply to RM for new resources each time you want to change resources; And the "resourceUpdate" method is used to request new resources from RM each time the actual resource used by the engine changes:'),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",'d) AccessibleExecutor: is a very important Executor base class. If the user\'s Executor inherits the base class, it means that the Engine can be accessed. Here we need to distinguish between "SensibleExecutor"\'s "state" method and "AccessibleExecutor"\'s "getEngineStatus" method. "state" method is used to get the engine status, and "getEngineStatus" is used to get the basic indicator metric data such as engine status, load and concurrency.'),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",'e) At the same time, if AccessibleExecutor is inherited, it will trigger the Engine process to instantiate multiple "EngineReceiver" methods. "EngineReceiver" is used to process RPC requests from Entrance, EM and "LinkisMaster", marking the engine an accessible engine. If users have special RPC requirements, they can communicate with "AccessibleExecutor" by implementing the "RPCService" interface. '),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",'f) ExecutableExecutor: it is a resident Executor base class. The resident Executor includes: Streaming applications in the production center, steps specified to run in independent mode after submission to "Schedulis", business applications of business users, etc.'),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",'g) StreamingExecutor: inherited from "ExecutiveExecutor", it needs the ability to diagnose, do checkpoint, collect job information and monitor alarms.'),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","h) ComputationExecutor: it is a commonly used interactive engine Executor which handles interactive execution tasks and has interactive capabilities such as status query ad task killing."),(0,r.kt)("h2",{id:"actual-case"},"Actual Case"),(0,r.kt)("p",null,"The following will take the Hive engine as case to illustrate the implementation of each interface. The following figure is what is needed to implement a Hive engine All core classes implemented."),(0,r.kt)("p",null,'Hive engine is an interactive engine, so when implementing Executor, it inherits "ComputationExecutor" and introduces the following maven dependencies: '),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<dependency>\n<groupId>com.webank.wedatasphere.linkis</groupId>\n<artifactId>linkis-computation-engineconn</artifactId>\n<version>${linkis.version}</version>\n</dependency>\n")),(0,r.kt)("p",null,'As a subclass of "ComputationExecutor", "HiveEngineConnExecutor" implements the "executeLine" method. This method receives a line of execution statements. After calling the Hive interface for execution, it returns different "ExecuteResponse" to indicate success or failure. At the same time, in this method, through the interface provided in the "engineExecutorContext", the result set, log and progress transmission are realized. '),(0,r.kt)("p",null,'The Hive engine only needs to execute the HQL Executor, which is a single executor engine. Therefore, when defining "HiveEngineConnFactory", it inherits "SingleExecutorEngineConnFactory" which implements the following two interfaces:\na) createEngineConn: creates a object that contains "UserGroupInformation", "SessionState" adn "HiveConf" as an encapsulation of the connection information with the underlying engine, set to the EngineConn object to return.\nb) createExecutor: creates a "HiveEngineConnExecutor" executor object based on the current engine connection information.'),(0,r.kt)("p",null,'Hive engine is an ordinary Java process, so when implementing "EngineConnLaunchBuilder", it directly inherits "JavaProcessEngineConnLaunchBuilder". Like memory size, Java parameters and classPath, it can be adjusted through configuration, please refer to "EnvConfiguration" class for details.'),(0,r.kt)("p",null,'Hive engine uses "LoadInstanceResource resources", so there is no need to implement "EngineResourceFactory", directly use the default "GenericEngineResourceFactory", adjust the number of resources through configuration, refer to "EngineConnPluginConf" class for details.'),(0,r.kt)("p",null,'Implement "HiveEngineConnPlugin" and provide methods for creating the above implementation classes.'))}d.isMDXComponent=!0}}]);