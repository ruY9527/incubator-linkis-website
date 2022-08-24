"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[73504],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return g}});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),p=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return i.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(t),g=a,m=d["".concat(s,".").concat(g)]||d[g]||c[g]||r;return t?i.createElement(m,l(l({ref:n},u),{},{components:t})):i.createElement(m,l({ref:n},u))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<r;p++)l[p]=t[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},32862:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var i=t(87462),a=t(63366),r=(t(67294),t(3905)),l=["components"],o={title:"Presto Engine",sidebar_position:11},s=void 0,p={unversionedId:"engine-usage/presto",id:"engine-usage/presto",isDocsHomePage:!1,title:"Presto Engine",description:"This article mainly introduces the configuration, deployment and use of the Presto engine in Linkis1.X.",source:"@site/docs/engine-usage/presto.md",sourceDirName:"engine-usage",slug:"/engine-usage/presto",permalink:"/docs/1.2.0/engine-usage/presto",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/docs/engine-usage/presto.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"Presto Engine",sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"ElasticSearch Engine Usage",permalink:"/docs/1.2.0/engine-usage/elasticsearch"},next:{title:"Overview",permalink:"/docs/1.2.0/api/overview"}},u=[{value:"1. Environment preparation",id:"1-environment-preparation",children:[]},{value:"2. Deployment and configuration",id:"2-deployment-and-configuration",children:[{value:"2.1 version selection and compilation",id:"21-version-selection-and-compilation",children:[]},{value:"2.2 Deployment and loading of materials",id:"22-deployment-and-loading-of-materials",children:[]},{value:"2.3 Engine tags",id:"23-engine-tags",children:[]},{value:"2.2 Presto engine related configuration",id:"22-presto-engine-related-configuration",children:[]}]},{value:"3 The use of the engine",id:"3-the-use-of-the-engine",children:[{value:"3.1 Preparing for Operation",id:"31-preparing-for-operation",children:[]},{value:"3.2 Task submission via Linkis-cli",id:"32-task-submission-via-linkis-cli",children:[]},{value:"3.3 Using via Scriptis",id:"33-using-via-scriptis",children:[]}]}],c={toc:u};function d(e){var n=e.components,o=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,i.Z)({},c,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This article mainly introduces the configuration, deployment and use of the Presto engine in Linkis1.X."),(0,r.kt)("h2",{id:"1-environment-preparation"},"1. Environment preparation"),(0,r.kt)("p",null,"If you want to use the Presto engine on your server, you need to prepare the Presto connection information, such as the connection address, username and password of the Presto cluster, etc."),(0,r.kt)("h2",{id:"2-deployment-and-configuration"},"2. Deployment and configuration"),(0,r.kt)("h3",{id:"21-version-selection-and-compilation"},"2.1 version selection and compilation"),(0,r.kt)("p",null,"Note: Before compiling the Presto engine, a full build of the Linkis project is required\nThis engine plug-in is not included in the released installation deployment package by default.\nYou can follow this guide to deploy and install ",(0,r.kt)("a",{parentName:"p",href:"https://linkis.apache.org/zh-CN/blog/2022/04/15/how-to-download-engineconn-plugin"},"https://linkis.apache.org/zh-CN/blog/2022/04/15/how-to-download-engineconn-plugin"),"\nor follow the steps below to manually compile and deploy"),(0,r.kt)("p",null,"Compile the Presto engine separately"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"${linkis_code_dir}linkis-engineconn-plugins/presto/\nmvn clean install\n")),(0,r.kt)("h3",{id:"22-deployment-and-loading-of-materials"},"2.2 Deployment and loading of materials"),(0,r.kt)("p",null,"The engine package compiled in step 2.1 is located in"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"${linkis_code_dir}/linkis-engineconn-pluginsjdbc/target/out/presto\n")),(0,r.kt)("p",null,"Upload to the engine directory of the server"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"${LINKIS_HOME}/lib/linkis-engineplugins\n")),(0,r.kt)("p",null,"And restart linkis-engineplugin (or refresh through the engine interface)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd ${LINKIS_HOME}/sbin\nsh linkis-daemon.sh restart cg-engineplugin\n")),(0,r.kt)("p",null,"Check whether the engine refresh is successful: You can check whether the last_update_time of the linkis_engine_conn_plugin_bml_resources table in the database is the time when the refresh is triggered."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"#Login to the linkis database\nselect * from linkis_cg_engine_conn_plugin_bml_resources\n")),(0,r.kt)("h3",{id:"23-engine-tags"},"2.3 Engine tags"),(0,r.kt)("p",null,"Linkis1.X is done through tags, so we need to insert data into our database, and the insertion method is as follows."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- set variable\nSET @PRESTO_LABEL=\"presto-0.234\";\nSET @PRESTO_ALL=CONCAT('*-*,',@PRESTO_LABEL);\nSET @PRESTO_IDE=CONCAT('*-IDE,',@PRESTO_LABEL);\n\nSET @PRESTO_NAME=\"presto\";\n\ninsert into `linkis_cg_manager_label` (`label_key`, `label_value`, `label_feature`, `label_value_size`, `update_time`, `create_time`) VALUES ('combined_userCreator_engineType',@PRESTO_ALL, 'OPTIONAL', 2, now(), now());\ninsert into `linkis_cg_manager_label` (`label_key`, `label_value`, `label_feature`, `label_value_size`, `update_time`, `create_time`) VALUES ('combined_userCreator_engineType',@PRESTO_IDE, 'OPTIONAL', 2, now(), now());\n\nselect @label_id := id from `linkis_cg_manager_label` where `label_value` = @PRESTO_IDE;\ninsert into `linkis_ps_configuration_category` (`label_id`, `level`) VALUES (@label_id, 2);\n\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('wds.linkis.presto.url', 'Presto \u96c6\u7fa4\u8fde\u63a5', 'presto\u8fde\u63a5\u5730\u5740', 'http://127.0.0.1:8080', 'None', NULL, @PRESTO_NAME, 0, 0, 1, '\u6570\u636e\u6e90\u914d\u7f6e');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('wds.linkis.presto.catalog', '\u67e5\u8be2\u7684 Catalog ', 'presto\u8fde\u63a5\u7684catalog', 'hive', 'None', NULL, @PRESTO_NAME, 0, 0, 1, '\u6570\u636e\u6e90\u914d\u7f6e');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('wds.linkis.presto.schema', '\u67e5\u8be2\u7684 Schema ', '\u6570\u636e\u5e93\u8fde\u63a5schema', '', 'None', NULL, @PRESTO_NAME, 0, 0, 1, '\u6570\u636e\u6e90\u914d\u7f6e');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('wds.linkis.presto.source', '\u67e5\u8be2\u4f7f\u7528\u7684 source ', '\u6570\u636e\u5e93\u8fde\u63a5source', '', 'None', NULL, @PRESTO_NAME, 0, 0, 1, '\u6570\u636e\u6e90\u914d\u7f6e');\n\n-- engine -*\ninsert into `linkis_ps_configuration_key_engine_relation` (`config_key_id`, `engine_type_label_id`)\n(select config.id as `config_key_id`, label.id AS `engine_type_label_id` FROM linkis_ps_configuration_config_key config\nINNER JOIN linkis_cg_manager_label label ON config.engine_conn_type = @PRESTO_NAME and label_value = @PRESTO_IDE);\n\n-- engine default configuration\ninsert into `linkis_ps_configuration_config_value` (`config_key_id`, `config_value`, `config_label_id`)\n(select `relation`.`config_key_id` AS `config_key_id`, '' AS `config_value`, `relation`.`engine_type_label_id` AS `config_label_id` FROM linkis_ps_configuration_key_engine_relation relation\nINNER JOIN linkis_cg_manager_label label ON relation.engine_type_label_id = label.id AND label.label_value = @PRESTO_IDE);\n")),(0,r.kt)("h3",{id:"22-presto-engine-related-configuration"},"2.2 Presto engine related configuration"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Configuration"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"wds.linkis.presto.url"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://127.0.0.1:8080"},"http://127.0.0.1:8080")),(0,r.kt)("td",{parentName:"tr",align:null},"Presto cluster connection"),(0,r.kt)("td",{parentName:"tr",align:null},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"wds.linkis.presto.username"),(0,r.kt)("td",{parentName:"tr",align:null},"default"),(0,r.kt)("td",{parentName:"tr",align:null},"Presto cluster username"),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"wds.linkis.presto.password"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"Presto cluster password"),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"wds.linkis.presto.catalog"),(0,r.kt)("td",{parentName:"tr",align:null},"system"),(0,r.kt)("td",{parentName:"tr",align:null},"Catalog for queries"),(0,r.kt)("td",{parentName:"tr",align:null},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"wds.linkis.presto.schema"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Query Schema"),(0,r.kt)("td",{parentName:"tr",align:null},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"wds.linkis.presto.source"),(0,r.kt)("td",{parentName:"tr",align:null},"global"),(0,r.kt)("td",{parentName:"tr",align:null},"source used by the query"),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"presto.session.query_max_total_memory"),(0,r.kt)("td",{parentName:"tr",align:null},"8GB"),(0,r.kt)("td",{parentName:"tr",align:null},"query uses maximum memory"),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"wds.linkis.presto.http.connectTimeout"),(0,r.kt)("td",{parentName:"tr",align:null},"60"),(0,r.kt)("td",{parentName:"tr",align:null},"Presto client connect timeout (unit: seconds)"),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"wds.linkis.presto.http.readTimeout"),(0,r.kt)("td",{parentName:"tr",align:null},"60"),(0,r.kt)("td",{parentName:"tr",align:null},"Presto client read timeout (unit: seconds)"),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"wds.linkis.engineconn.concurrent.limit"),(0,r.kt)("td",{parentName:"tr",align:null},"100"),(0,r.kt)("td",{parentName:"tr",align:null},"The maximum number of concurrent Presto engines"),(0,r.kt)("td",{parentName:"tr",align:null},"false")))),(0,r.kt)("h2",{id:"3-the-use-of-the-engine"},"3 The use of the engine"),(0,r.kt)("h3",{id:"31-preparing-for-operation"},"3.1 Preparing for Operation"),(0,r.kt)("p",null,"If the default parameters are not satisfied, there are three ways to configure some basic parameters."),(0,r.kt)("h4",{id:"311-console-configuration"},"3.1.1 console configuration"),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(89172).Z})),(0,r.kt)("h4",{id:"312-task-interface-configuration"},"3.1.2 Task interface configuration"),(0,r.kt)("p",null,"Submit the task interface and configure it through the parameter params.configuration.runtime"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'Example of http request parameters\n{\n    "executionContent": {"code": "show teblas;", "runType": "psql"},\n    "params": {\n                    "variable": {},\n                    "configuration": {\n                            "runtime": {\n                                "wds.linkis.presto.url":"http://127.0.0.1:9090",\n                                "wds.linkis.presto.catalog ":"hive",\n                                "wds.linkis.presto.schema ":"default",\n                                "wds.linkis.presto.source ":""\n                                }\n                            }\n                    },\n    "source": {"scriptPath": "file:///mnt/bdp/hadoop/1.sql"},\n    "labels": {\n        "engineType": "presto-0.234",\n        "userCreator": "hadoop-IDE"\n    }\n}\n')),(0,r.kt)("h4",{id:"313-file-configuration"},"3.1.3 File configuration"),(0,r.kt)("p",null,"Configure by modifying the linkis-engineconn.properties file in the directory install path/lib/linkis-engineconn-plugins/presto/dist/v0.234/conf/, as shown below:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(65348).Z})),(0,r.kt)("h3",{id:"32-task-submission-via-linkis-cli"},"3.2 Task submission via Linkis-cli"),(0,r.kt)("p",null,"To submit a task through linkis-cli, you need to specify the corresponding EngineConn and CodeType tag types. The use of presto is as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Note that the ",(0,r.kt)("inlineCode",{parentName:"li"},"engineType presto-0.234")," engine version setting is prefixed to ",(0,r.kt)("inlineCode",{parentName:"li"},"presto-0.234")," if the ",(0,r.kt)("inlineCode",{parentName:"li"},"presto")," version is ",(0,r.kt)("inlineCode",{parentName:"li"},"0.234"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"}," sh ./bin/linkis-cli -engineType presto-0.234 -codeType psql -code 'show tables;' -submitUser hadoop -proxyUser hadoop\n")),(0,r.kt)("p",null,"If the management console, task interface, and configuration file are not configured, they can be configured in the cli client through the ",(0,r.kt)("inlineCode",{parentName:"p"},"-runtimeMap")," property"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sh ./bin/linkis-cli -engineType presto-0.234 -codeType tsql -code 'show tables;' -runtimeMap wds.linkis.presto.url=http://172.22.32.11:50070 -runtimeMap wds.linkis.presto. catalog=hive -runtimeMap wds.linkis.presto.schema=default -runtimeMap wds.linkis.presto.catalog=hive -submitUser hadoop -proxyUser hadoop\n")),(0,r.kt)("p",null,"For specific usage, please refer to: ",(0,r.kt)("a",{parentName:"p",href:"/docs/1.2.0/user-guide/linkiscli-manual"},"Linkis CLI Manual"),"."),(0,r.kt)("h3",{id:"33-using-via-scriptis"},"3.3 Using via Scriptis"),(0,r.kt)("p",null,"Right-click the workspace module and select a new script of type ",(0,r.kt)("inlineCode",{parentName:"p"},"psql")),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(98252).Z})))}d.isMDXComponent=!0},89172:function(e,n,t){n.Z=t.p+"assets/images/presto-console-cf2b1ce63e10fc3f6fcfc968bae4f8e1.png"},65348:function(e,n,t){n.Z=t.p+"assets/images/presto-file-2850a37e5c3fbe2d3b8d244e0751be26.png"},98252:function(e,n,t){n.Z=t.p+"assets/images/presto-psql-bd2214df768fb50e25cf873ee7cb2423.png"}}]);