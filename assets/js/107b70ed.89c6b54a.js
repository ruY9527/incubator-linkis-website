"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[67285],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,g=p["".concat(c,".").concat(d)]||p[d]||m[d]||i;return n?a.createElement(g,l(l({ref:t},u),{},{components:n})):a.createElement(g,l({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},72810:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],o={title:"Division of Microservices",sidebar_position:11},c=void 0,s={unversionedId:"microservice-division",id:"microservice-division",title:"Division of Microservices",description:"Introduction to service",source:"@site/community/microservice-division.md",sourceDirName:".",slug:"/microservice-division",permalink:"/community/microservice-division",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/community/microservice-division.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"Division of Microservices",sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"How to Write Unit Test Code",permalink:"/community/how-to-write-unit-test-code"},next:{title:"Site Map",permalink:"/community/site-map"}},u=[{value:"Introduction to service",id:"introduction-to-service",children:[],level:2},{value:"Basic terms explained",id:"basic-terms-explained",children:[],level:2}],m={toc:u};function p(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction-to-service"},"Introduction to service"),(0,i.kt)("p",null,"Linkis is developed based on the microservice architecture, and its services can be divided into 3 types of service groups (groups): computing governance service group, public enhancement service group and microservice governance service group."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Computation Governance Services: The core service for processing tasks, supporting the 3 main stages of the computing task/request processing flow (submit->prepare->execute);"),(0,i.kt)("li",{parentName:"ul"},"Public Enhancement Services: Provide basic support services, including context services, engine/udf material management services, historical tasks and other public services and data source management services;"),(0,i.kt)("li",{parentName:"ul"},"Microservice Governance Services: Customized Spring Cloud Gateway, Eureka. Provides a base for microservices.")),(0,i.kt)("p",null,"The microservices included in each service group (group) are as follows:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Belonging to the microservice group (group)"),(0,i.kt)("th",{parentName:"tr",align:null},"Service name"),(0,i.kt)("th",{parentName:"tr",align:null},"Main functions"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"MGS"),(0,i.kt)("td",{parentName:"tr",align:null},"linkis-mg-eureka"),(0,i.kt)("td",{parentName:"tr",align:null},"Responsible for service registration and discovery, other upstream components will also reuse the linkis registry, such as dss")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"MGS"),(0,i.kt)("td",{parentName:"tr",align:null},"linkis-mg-gateway"),(0,i.kt)("td",{parentName:"tr",align:null},"As the gateway entrance of Linkis, it is mainly responsible for request forwarding and user access authentication")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"CGS"),(0,i.kt)("td",{parentName:"tr",align:null},"linkis-cg-entrance"),(0,i.kt)("td",{parentName:"tr",align:null},"The task submission entry is a service responsible for receiving, scheduling, forwarding execution requests, and life cycle management of computing tasks, and can return calculation results, logs, and progress to the caller")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"CGS"),(0,i.kt)("td",{parentName:"tr",align:null},"linkis-cg-linkismanager"),(0,i.kt)("td",{parentName:"tr",align:null},"Provides AppManager (application management), ResourceManager (resource management), LabelManager (label management) capabilities")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"CGS"),(0,i.kt)("td",{parentName:"tr",align:null},"linkis-cg-engineconnplugin"),(0,i.kt)("td",{parentName:"tr",align:null},"The engine connector plug-in provides the basic function support for freely extending the Linkis engine, and allows the introduction of new engines into the execution life cycle of computing middleware by implementing the established plug-in interfaces, enabling new engines to be implemented Rapid Deployment")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"CGS"),(0,i.kt)("td",{parentName:"tr",align:null},"linkis-cg-engineconnmanager"),(0,i.kt)("td",{parentName:"tr",align:null},"The manager of EngineConn, which provides the life cycle management of the engine, and reports the load information and its own health status to the ResourceManager")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"CGS"),(0,i.kt)("td",{parentName:"tr",align:null},"linkis-cg-engineconn"),(0,i.kt)("td",{parentName:"tr",align:null},"is the actual connection service with the underlying computing storage engine (Hive/Spark), and contains session information with the actual engine. For the underlying computing storage engine, it acts as a client")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"PES"),(0,i.kt)("td",{parentName:"tr",align:null},"linkis-ps-publicservice"),(0,i.kt)("td",{parentName:"tr",align:null},"Provide functions such as unified configuration management, context service, BML material library, data source management, microservice management and historical task query for other microservice modules")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"PES"),(0,i.kt)("td",{parentName:"tr",align:null},"linkis-ps-cs"),(0,i.kt)("td",{parentName:"tr",align:null},"Context service, solving a data application development process, data and information sharing across multiple services")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"PES"),(0,i.kt)("td",{parentName:"tr",align:null},"linkis-ps-metadatamanager"),(0,i.kt)("td",{parentName:"tr",align:null},"Only provides metadata query service Provides the basic query function of database data metadata, provides http interface externally, and provides rpc service internally, which is convenient for the data source management module to call through rpc to conduct Data source connection test")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"PES"),(0,i.kt)("td",{parentName:"tr",align:null},"linkis-ps-data-source-manager"),(0,i.kt)("td",{parentName:"tr",align:null},"Data source management service Perform basic management of data sources, and provide http interfaces such as adding, querying, modifying, and connection testing of external data sources. The rpc service is provided internally, which is convenient for the data element management module to call through rpc and query the necessary information needed to establish a connection to the database")))),(0,i.kt)("h2",{id:"basic-terms-explained"},"Basic terms explained"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Introduction"),(0,i.kt)("th",{parentName:"tr",align:null},"Full name in English"),(0,i.kt)("th",{parentName:"tr",align:null},"Full name in Chinese"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"CG/cg"),(0,i.kt)("td",{parentName:"tr",align:null},"Computation Governance"),(0,i.kt)("td",{parentName:"tr",align:null},"Computation Governance")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"MG/mg"),(0,i.kt)("td",{parentName:"tr",align:null},"Microservice Governance"),(0,i.kt)("td",{parentName:"tr",align:null},"Microservice Governance")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"PS/ps"),(0,i.kt)("td",{parentName:"tr",align:null},"Public Service"),(0,i.kt)("td",{parentName:"tr",align:null},"Public Service")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"CS/cs"),(0,i.kt)("td",{parentName:"tr",align:null},"Context Service"),(0,i.kt)("td",{parentName:"tr",align:null},"Unified Context")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"DSS/dss"),(0,i.kt)("td",{parentName:"tr",align:null},"DataSphere Studio"),(0,i.kt)("td",{parentName:"tr",align:null},"Data Application Integrated Development Framework")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"EC/ec"),(0,i.kt)("td",{parentName:"tr",align:null},"EngineConn"),(0,i.kt)("td",{parentName:"tr",align:null},"Engine Connector")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ECM/ecm"),(0,i.kt)("td",{parentName:"tr",align:null},"EngineConnManager"),(0,i.kt)("td",{parentName:"tr",align:null},"Management of Engine Connectors")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ECP/ecp"),(0,i.kt)("td",{parentName:"tr",align:null},"EngineConnPlugin"),(0,i.kt)("td",{parentName:"tr",align:null},"Engine Connector Plugin")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"RM/rm"),(0,i.kt)("td",{parentName:"tr",align:null},"ResourceManager"),(0,i.kt)("td",{parentName:"tr",align:null},"Resource manager for managing node resources")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"PES/pes"),(0,i.kt)("td",{parentName:"tr",align:null},"Public Enhancement Services"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"DMS/dms"),(0,i.kt)("td",{parentName:"tr",align:null},"Data Source Manager Service"),(0,i.kt)("td",{parentName:"tr",align:null},"Data Source Management Service")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"MDS/mds"),(0,i.kt)("td",{parentName:"tr",align:null},"MetaData Manager Service"),(0,i.kt)("td",{parentName:"tr",align:null},"Metadata Management Service")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"BML/bml"),(0,i.kt)("td",{parentName:"tr",align:null},"BigData Material library"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"UJES"),(0,i.kt)("td",{parentName:"tr",align:null},"Unified Job Execute Service"),(0,i.kt)("td",{parentName:"tr",align:null},"Unified Job Execute Service")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"DDL/ddl"),(0,i.kt)("td",{parentName:"tr",align:null},"Data Definition Language"),(0,i.kt)("td",{parentName:"tr",align:null},"Database Definition Language")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"DML/dml"),(0,i.kt)("td",{parentName:"tr",align:null},"Data Manipulation Language"),(0,i.kt)("td",{parentName:"tr",align:null},"Data Manipulation Language")))))}p.isMDXComponent=!0}}]);