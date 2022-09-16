"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[95244],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=i,h=u["".concat(o,".").concat(m)]||u[m]||p[m]||r;return n?a.createElement(h,l(l({ref:t},d),{},{components:n})):a.createElement(h,l({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=u;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:i,l[1]=c;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},18141:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return d},default:function(){return u}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),l=["components"],c={title:"CS Cleanup Interface Features",sidebar_position:9,tags:["Feature"]},o=void 0,s={unversionedId:"architecture/public-enhancement-services/context-service/content-service-cleanup",id:"architecture/public-enhancement-services/context-service/content-service-cleanup",isDocsHomePage:!1,title:"CS Cleanup Interface Features",description:"1. Functional requirements",source:"@site/docs/architecture/public-enhancement-services/context-service/content-service-cleanup.md",sourceDirName:"architecture/public-enhancement-services/context-service",slug:"/architecture/public-enhancement-services/context-service/content-service-cleanup",permalink:"/docs/1.3.0/architecture/public-enhancement-services/context-service/content-service-cleanup",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/docs/architecture/public-enhancement-services/context-service/content-service-cleanup.md",tags:[{label:"Feature",permalink:"/docs/1.3.0/tags/feature"}],version:"current",sidebarPosition:9,frontMatter:{title:"CS Cleanup Interface Features",sidebar_position:9,tags:["Feature"]},sidebar:"tutorialSidebar",previous:{title:"CS Cache Architecture",permalink:"/docs/1.3.0/architecture/public-enhancement-services/context-service/context-service-cache"},next:{title:"Data Source Management Service Architecture",permalink:"/docs/1.3.0/architecture/public-enhancement-services/datasource-manager"}},d=[{value:"1. Functional requirements",id:"1-functional-requirements",children:[{value:"1.1 Background",id:"11-background",children:[]},{value:"1.2 Goals",id:"12-goals",children:[]}]},{value:"2. Overall Design",id:"2-overall-design",children:[{value:"2.1 Technical Architecture",id:"21-technical-architecture",children:[]},{value:"2.2 Business Architecture",id:"22-business-architecture",children:[]}]},{value:"6. Non-functional design",id:"6-non-functional-design",children:[{value:"6.1 Security",id:"61-security",children:[]},{value:"6.2 Performance",id:"62-performance",children:[]},{value:"6.3 Capacity",id:"63-capacity",children:[]},{value:"6.4 High Availability",id:"64-high-availability",children:[]}]}],p={toc:d};function u(e){var t=e.components,c=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},p,c,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1-functional-requirements"},"1. Functional requirements"),(0,r.kt)("h3",{id:"11-background"},"1.1 Background"),(0,r.kt)("p",null,"Before version 1.1.3, the ContextService unified context service lacked a cleaning mechanism, and lacked the creation time, update time fields, and batch cleaning interfaces.\nIn the case of long-term accumulation, millions of data may appear, affecting query efficiency."),(0,r.kt)("h3",{id:"12-goals"},"1.2 Goals"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Modify 1ContextService",(0,r.kt)("inlineCode",{parentName:"li"},"underlying library table, add creation time, modification time, last access time fields, complete the update time of"),"ContextID",(0,r.kt)("inlineCode",{parentName:"li"},"and"),"ContextMap` related data into the database"),(0,r.kt)("li",{parentName:"ul"},"Add ",(0,r.kt)("inlineCode",{parentName:"li"},"restful")," interface for cleaning and cleaning, support batch and retail cleaning interface according to time range and id list"),(0,r.kt)("li",{parentName:"ul"},"Add the corresponding ",(0,r.kt)("inlineCode",{parentName:"li"},"java sdk")," interface of ",(0,r.kt)("inlineCode",{parentName:"li"},"cs-client"))),(0,r.kt)("h2",{id:"2-overall-design"},"2. Overall Design"),(0,r.kt)("p",null,"This requirement involves ",(0,r.kt)("inlineCode",{parentName:"p"},"cs-client"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"cs-persistence")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"cs-server")," modules under ",(0,r.kt)("inlineCode",{parentName:"p"},"ContextService"),".\nAdd 3 fields of the existing table in the ",(0,r.kt)("inlineCode",{parentName:"p"},"cs-persistence")," module; add 3 ",(0,r.kt)("inlineCode",{parentName:"p"},"restful")," interfaces in the ",(0,r.kt)("inlineCode",{parentName:"p"},"cs-server")," module, and add 3 ",(0,r.kt)("inlineCode",{parentName:"p"},"sdk api")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"cs-client")," module."),(0,r.kt)("h3",{id:"21-technical-architecture"},"2.1 Technical Architecture"),(0,r.kt)("p",null,"For the overall architecture of ContextService, please refer to the existing document: ",(0,r.kt)("a",{parentName:"p",href:"/docs/1.3.0/architecture/public-enhancement-services/context-service/overview"},"ContextService Architecture Document")),(0,r.kt)("p",null,"The access relationship of each module of ContestService is shown in the following figure\n",(0,r.kt)("img",{alt:"linkis-contextservice-clean-01.png",src:n(95434).Z})),(0,r.kt)("p",null,"Table changes are made in the ",(0,r.kt)("inlineCode",{parentName:"p"},"cs-persistence")," module. This change involves 5 tables ",(0,r.kt)("inlineCode",{parentName:"p"},"context_id, context_map, context_id_listener, context_key_listener, context_history"),", all of which need to add 3 fields ",(0,r.kt)("inlineCode",{parentName:"p"},"create_time, update_time, access_time"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"context_id and context_map")," tables are enabled, and the other three tables are not enabled. ",(0,r.kt)("inlineCode",{parentName:"p"},"create_time")," adds the time before the persistence module performs the insert operation. ",(0,r.kt)("inlineCode",{parentName:"p"},"update_time")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"access_time")," are actively called by the upstream interface. In the update interface, ",(0,r.kt)("inlineCode",{parentName:"p"},"update_time")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"access_time")," are mutually exclusive updates, that is, when ",(0,r.kt)("inlineCode",{parentName:"p"},"access_time")," exists (not null), ",(0,r.kt)("inlineCode",{parentName:"p"},"update_time")," will not be updated, otherwise update_time will be updated ."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"update_time")," field is updated in the cs-cache module, the ADD message is detected when a new ",(0,r.kt)("inlineCode",{parentName:"p"},"context_id")," is loaded from the db, and the ",(0,r.kt)("inlineCode",{parentName:"p"},"access_time")," is synchronized to the db at this time.\nOnly the ",(0,r.kt)("inlineCode",{parentName:"p"},"create_time, update_time, access_time")," of the ",(0,r.kt)("inlineCode",{parentName:"p"},"context_id")," table are recorded in the table. Subsequent search cleaning is also performed from the context_id table."),(0,r.kt)("p",null,"Add 3 cleanup related interfaces: ",(0,r.kt)("inlineCode",{parentName:"p"},"searchContextIDByTime, clearAllContextByID, clearAllContextByTime")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"searchContextIDByTime")," searches according to 3 time ranges and returns a list of contextIDs"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"clearAllContextByID")," clears the content of the context_map table and context_id table corresponding to the ID in the input contextID list"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"clearAllContextByTime")," searches according to 3 time ranges, and clears all the contents of the context_map table and context_id table corresponding to the searched contextID")),(0,r.kt)("h3",{id:"22-business-architecture"},"2.2 Business Architecture"),(0,r.kt)("p",null,"This feature is to add related interfaces for batch query and cleanup to the ContextService service, and to add fields such as the update time of the underlying data table, so as to clean up expired data according to the access situation. The function points involve the modules as shown in the table below."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"First-level module"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Second-level module"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Function point"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"linkis-ps-cs"),(0,r.kt)("td",{parentName:"tr",align:"left"},"cs-client"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Added batch cleaning interface related java sdk api interface")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Linkis-ps-cs"),(0,r.kt)("td",{parentName:"tr",align:"left"},"cs-server"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Added restful interface related to batch cleaning interface")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"linkis-ps-cs"),(0,r.kt)("td",{parentName:"tr",align:"left"},"cs-persistence"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Add 3 time-related fields of the underlying table")))),(0,r.kt)("p",null,"##3. Module Design\n###Main execution process"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create ContextID. When the user creates the ContextID, the create_time will be recorded, and this field will not be updated later"),(0,r.kt)("li",{parentName:"ul"},"Update ContextID. When the user updates the ContextID, the update_time field is updated. Note that if the update is from the cache at this time, the access_time field will not be updated; if it is loaded from the db to the cache and then updated with the new contextID, the access_time will be updated first, and then the new update_time will be updated separately."),(0,r.kt)("li",{parentName:"ul"},"Query ContextID according to time. When the user queries the ContextID of the corresponding time range, only a list of haid strings will be returned. This interface has paging, the default is limited to 5000 pieces of data"),(0,r.kt)("li",{parentName:"ul"},"Bulk cleanup of ContextIDs. All contextMap data and contextID data corresponding to the incoming idList will be cleaned up in batches. The maximum number of incoming arrays is 5000"),(0,r.kt)("li",{parentName:"ul"},"Query and clear ContextID, first query and then batch clear")),(0,r.kt)("p",null,"The corresponding timing diagrams above are as follows:\n",(0,r.kt)("img",{alt:"linkis-contextservice-clean-02.png",src:n(69632).Z})),(0,r.kt)("p",null,"Two of them require additional attention:\n\u2460The restful api in the cs-server service will encapsulate the request as a Job and submit it to the queue and block waiting for the result. The operation type of CLEAR is newly defined to facilitate matching to the cleanup related interface.\n\u2461 To process the Service service of the Job in \u2460, the name needs to be defined as not including the ContextID to avoid the dynamic proxy conversion of the HighAvailable module. This conversion is only for the interface with only one ContextID in the request, and it is meaningless and affects the batch cleanup and batch query interface. performance."),(0,r.kt)("p",null,"##4. Data structure"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# The main involved context_id table structure is as follows, adding create_time, update_time, expire_time fields\nCREATE TABLE `linkis_ps_cs_context_id` (\n  `id` int(11) NOT NULL AUTO_INCREMENT,\n  `user` varchar(32) DEFAULT NULL,\n  `application` varchar(32) DEFAULT NULL,\n  `source` varchar(255) DEFAULT NULL,\n  `expire_type` varchar(32) DEFAULT NULL,\n  `expire_time` datetime DEFAULT NULL,\n  `instance` varchar(128) DEFAULT NULL,\n  `backup_instance` varchar(255) DEFAULT NULL,\n  `update_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'update unix timestamp',\n  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'create time',\n  `access_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'last access time',\n  PRIMARY KEY (`id`),\n  KEY `instance` (`instance`(128)),\n  KEY `backup_instance` (`backup_instance`(191)),\n  KEY `instance_2` (`instance`(128), `backup_instance`(128))\n) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;\n")),(0,r.kt)("p",null,"##5. Interface Design\n###5.1 Restful interface"),(0,r.kt)("p",null,"1 Query ID interface ",(0,r.kt)("inlineCode",{parentName:"p"},"searchContextIDByTime")),(0,r.kt)("p",null,"\u2460Interface name\nGET ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/contextservice/searchContextIDByTime")),(0,r.kt)("p",null,"\u2461Input parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter name"),(0,r.kt)("th",{parentName:"tr",align:null},"Parameter description"),(0,r.kt)("th",{parentName:"tr",align:null},"Request type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Data type"),(0,r.kt)("th",{parentName:"tr",align:null},"schema"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"accessTimeEnd"),(0,r.kt)("td",{parentName:"tr",align:null},"Access end time"),(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"accessTimeStart"),(0,r.kt)("td",{parentName:"tr",align:null},"Access start time"),(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"createTimeEnd"),(0,r.kt)("td",{parentName:"tr",align:null},"Create end time"),(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"createTimeStart"),(0,r.kt)("td",{parentName:"tr",align:null},"create time"),(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pageNow"),(0,r.kt)("td",{parentName:"tr",align:null},"page number"),(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pageSize"),(0,r.kt)("td",{parentName:"tr",align:null},"page size"),(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"updateTimeEnd"),(0,r.kt)("td",{parentName:"tr",align:null},"Update end time"),(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"updateTimeStart"),(0,r.kt)("td",{parentName:"tr",align:null},"Update time"),(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,"\u2462Example of output parameters"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "method": "/api/contextservice/searchContextIDByTime",\n    "status": 0,\n    "message": "OK",\n    "data": {\n        "contextIDs": [\n            "8-8--cs_1_devcs_2_dev10493",\n            "8-8--cs_1_devcs_2_dev10494",\n            "8-8--cs_1_devcs_2_dev10495",\n            "8-8--cs_1_devcs_2_dev10496",\n            "8-8--cs_1_devcs_2_dev10497",\n            "8-8--cs_2_devcs_2_dev10498"\n        ]\n    }\n}\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Clear the specified ID interface clearAllContextByID")),(0,r.kt)("p",null,"\u2460Interface name ",(0,r.kt)("inlineCode",{parentName:"p"},"POST /api/rest_j/v1/contextservice/clearAllContextByID"),"\n\u2461 Example of input parameters"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n"idList" : [\n"8-8--cs_1_devcs_1_dev2236"\n]\n}\n')),(0,r.kt)("p",null,"\u2462Example of output parameters"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "method": "/api/contextservice/clearAllContextByID",\n    "status": 0,\n    "message": "OK",\n    "data": {\n        "num": "1"\n    }\n}\n')),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Clean up the interface ",(0,r.kt)("inlineCode",{parentName:"li"},"clearAllContextByTime"),' according to the time\n\u2460Interface name\nPOST /api/rest_j/v1/contextservice/clearAllContextByTime\n\u2461 Example of input parameters\n{\n"createTimeStart": "2022-06-01 00:00:00",\n"createTimeEnd": "2022-06-30 00:00:00"\n}\n\u2462Example of output parameters')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "method": "/api/contextservice/clearAllContextByTime",\n    "status": 0,\n    "message": "OK",\n    "data": {\n        "num": "1"\n    }\n}\n')),(0,r.kt)("p",null,"###5.2 JAVA SDK API"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'# import pom\n<dependency>\n     <groupId>org.apache.linkis</groupId>\n     <artifactId>linkis-cs-client</artifactId>\n     <version>1.1.3</version>\n</dependency>\n\n# Code reference is as follows\n\nString createTimeStart = "2022-05-26 22:04:00";\n        String createTimeEnd = "2022-06-01 24:00:00";\n\n        ContextClient contextClient = ContextClientFactory.getOrCreateContextClient();\n\n# Interface 1 searchHAIDByTime\n        List<String> idList =\n                contextClient.searchHAIDByTime(\n                        createTimeStart, createTimeEnd, null, null, null, null, 0, 0);\n\n        for (String id : idList) {\n            System.out.println(id);\n        }\n\n        System.out.println("Got " + idList.size() + "ids.");\n\n        if (idList.size() > 0) {\n            String id1 = idList.get(0);\n            System.out.println("will clear context of id : " + id1);\n        }\n\n# Interface 2 batchClearContextByHAID\n        List<String> tmpList = new ArrayList<>();\n        tmpList.add(id1);\n        int num = contextClient.batchClearContextByHAID(tmpList);\n        System.out.println("Succeed to clear " + num + " ids.");\n        \n# Interface 3 batchClearContextByTime\n        int num1 =\n                contextClient.batchClearContextByTime(\n                        createTimeStart, createTimeEnd, null, null, null, null);\n        System.out.println("Succeed to clear " + num1 + " ids by time.");\n\n')),(0,r.kt)("h2",{id:"6-non-functional-design"},"6. Non-functional design"),(0,r.kt)("h3",{id:"61-security"},"6.1 Security"),(0,r.kt)("p",null,"The resultful interface requires login authentication and requires an administrator to operate. The administrator user is configured in the properties file"),(0,r.kt)("h3",{id:"62-performance"},"6.2 Performance"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The query ID interface searchContextIDByTime has paging, no performance impact"),(0,r.kt)("li",{parentName:"ul"},"Clear the specified ID interface clearAllContextByID to limit the amount of operation data, no performance impact"),(0,r.kt)("li",{parentName:"ul"},"The interface clearAllContextByTime is cleared according to the time. If the query time range is too large, the query may time out, but the task will not fail. and the cleanup operation is a single operation and does not affect other queries")),(0,r.kt)("h3",{id:"63-capacity"},"6.3 Capacity"),(0,r.kt)("p",null,"This requirement provides a time range query and batch cleaning interface, which requires the upper-layer application that uses ContextService to actively clean up data."),(0,r.kt)("h3",{id:"64-high-availability"},"6.4 High Availability"),(0,r.kt)("p",null,"The interface reuses the high availability of the ContextService microservice itself."))}u.isMDXComponent=!0},95434:function(e,t,n){t.Z=n.p+"assets/images/linkis-contextservice-clean-01-6f4aa01a1d246c06114ec7a26452399f.png"},69632:function(e,t,n){t.Z=n.p+"assets/images/linkis-contextservice-clean-02-5cf135c352337570bf058ce5a60104c0.png"}}]);