"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[73206],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(a),m=r,S=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return a?n.createElement(S,o(o({ref:t},u),{},{components:a})):n.createElement(S,o({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},91448:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o=["components"],s={title:"DataSource Client SDK",sidebar_position:4},c=void 0,l={unversionedId:"user-guide/linkis-datasource-client",id:"version-1.1.3/user-guide/linkis-datasource-client",isDocsHomePage:!1,title:"DataSource Client SDK",description:"`",source:"@site/versioned_docs/version-1.1.3/user-guide/linkis-datasource-client.md",sourceDirName:"user-guide",slug:"/user-guide/linkis-datasource-client",permalink:"/docs/1.1.3/user-guide/linkis-datasource-client",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/versioned_docs/version-1.1.3/user-guide/linkis-datasource-client.md",tags:[],version:"1.1.3",sidebarPosition:4,frontMatter:{title:"DataSource Client SDK",sidebar_position:4},sidebar:"version-1.1.3/tutorialSidebar",previous:{title:"Console User Manual",permalink:"/docs/1.1.3/user-guide/console-manual"},next:{title:"Overview",permalink:"/docs/1.1.3/engine-usage/overview"}},u=[{value:"1. import dependent modules",id:"1-import-dependent-modules",children:[]},{value:"2. Scala Test Code",id:"2-scala-test-code",children:[]}],d={toc:u};function p(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("pre",{parentName:"blockquote"},(0,i.kt)("code",{parentName:"pre"},"Linkis DataSource provides a convenient interface for JAVA and SCALA calls, which can be used only by introducing the module of linkis-datasource-client\n"))),(0,i.kt)("h2",{id:"1-import-dependent-modules"},"1. import dependent modules"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"}," <dependency>\n   <groupId>org.apache.linkis</groupId>\n   <artifactId>linkis-datasource-client</artifactId>\n   <version>${linkis.version}</version>\n </dependency>\n\u5982\uff1a\n <dependency>\n   <groupId>org.apache.linkis</groupId>\n   <artifactId>linkis-datasource-client</artifactId>\n   <version>1.1.0</version>\n </dependency>\n")),(0,i.kt)("h2",{id:"2-scala-test-code"},"2. Scala Test Code"),(0,i.kt)("p",null,"Create a Scala test class LinkisDataSourceClientTest, the specific interface meaning can be seen in the comments\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'\nimport com.fasterxml.jackson.databind.ObjectMapper\nimport org.apache.linkis.common.utils.JsonUtils\nimport org.apache.linkis.datasource.client.impl.{LinkisDataSourceRemoteClient, LinkisMetaDataRemoteClient}\nimport org.apache.linkis.datasource.client.request.{CreateDataSourceAction, GetAllDataSourceTypesAction, MetadataGetDatabasesAction, UpdateDataSourceParameterAction}\nimport org.apache.linkis.datasourcemanager.common.domain.{DataSource, DataSourceType}\nimport org.apache.linkis.httpclient.dws.authentication.StaticAuthenticationStrategy\nimport org.apache.linkis.httpclient.dws.config.{DWSClientConfig, DWSClientConfigBuilder}\n\nimport java.io.StringWriter\nimport java.util\nimport java.util.concurrent.TimeUnit\n\n\nobject LinkisDataSourceClientTest {\n\n  def main(args: Array[String]): Unit = {\n    val clientConfig =DWSClientConfigBuilder.newBuilder\n      .addServerUrl("http://127.0.0.1:9001") //set linkis-mg-gateway url: http://{ip}:{port}\n      .connectionTimeout(30000) //connection timtout\n      .discoveryEnabled(false) //disable discovery\n      .discoveryFrequency(1, TimeUnit.MINUTES)  // discovery frequency\n      .loadbalancerEnabled(true) // enable loadbalance\n      .maxConnectionSize(5) // set max Connection\n      .retryEnabled(false) // set retry\n      .readTimeout(30000) //set read timeout\n      .setAuthenticationStrategy(new StaticAuthenticationStrategy) //AuthenticationStrategy Linkis authen suppory static and Token\n      .setAuthTokenKey("hadoop")  // set submit user\n      .setAuthTokenValue("xxx") // set passwd or token\n      .setDWSVersion("v1") //linkis rest version v1\n      .build\n     //init datasource remote client   \n     val dataSourceClient = new LinkisDataSourceRemoteClient(clientConfig)\n     //init metadata remote client\n     val metaDataClient = new LinkisMetaDataRemoteClient(clientConfig)\n    //get all datasource type\n    testGetAllDataSourceTypes(dataSourceClient)\n    //create kafka datasource\n    testCreateDataSourceForKafka(dataSourceClient)\n    //create es datasource\n    testCreateDataSourceForEs(dataSourceClient)\n    //update datasource parameter for kafka\n    testUpdateDataSourceParameterForKafka(dataSourceClient)\n    //update datasource parameter for es\n    testUpdateDataSourceParameterForEs(dataSourceClient)\n    //get hive metadata database list\n    testMetadataGetDatabases(metaDataClient)\n  }\n\ndef testGetAllDataSourceTypes(client:LinkisDataSourceRemoteClient): Unit ={\n    val getAllDataSourceTypesResult = client.getAllDataSourceTypes(GetAllDataSourceTypesAction.builder().setUser("hadoop").build()).getAllDataSourceType\n    System.out.println(getAllDataSourceTypesResult)\n  }\n\ndef testCreateDataSourceForKafka(client:LinkisDataSourceRemoteClient): Unit ={\n    val dataSource = new DataSource();\n    val dataSourceType = new DataSourceType\n    dataSourceType.setName("kafka")\n    dataSourceType.setId("2")\n    dataSourceType.setLayers(2)\n    dataSourceType.setClassifier("message queue")\n    dataSourceType.setDescription("kafka")\n    dataSource.setDataSourceType(dataSourceType)\n    dataSource.setDataSourceName("kafka-test")\n    dataSource.setCreateSystem("client")\n    dataSource.setDataSourceTypeId(2l);\n\n    val dsJsonWriter = new StringWriter\n\n    val mapper = new ObjectMapper\n    JsonUtils.jackson.writeValue(dsJsonWriter, dataSource)\n    val map = mapper.readValue(dsJsonWriter.toString,new util.HashMap[String,Any]().getClass)\n    val id = client.createDataSource(CreateDataSourceAction.builder().setUser("hadoop").addRequestPayloads(map).build()).getInsert_id\n    System.out.println(id)\n\n  }\n\ndef testCreateDataSourceForEs(client:LinkisDataSourceRemoteClient): Unit ={\n    val dataSource = new DataSource();\n    dataSource.setDataSourceName("es-test")\n    dataSource.setCreateSystem("client")\n    dataSource.setDataSourceTypeId(7l);\n    val dsJsonWriter = new StringWriter\n    val mapper = new ObjectMapper\n    JsonUtils.jackson.writeValue(dsJsonWriter, dataSource)\n    val map = mapper.readValue(dsJsonWriter.toString,new util.HashMap[String,Any]().getClass)\n    val id = client.createDataSource(CreateDataSourceAction.builder().setUser("hadoop").addRequestPayloads(map).build()).getInsert_id\n    System.out.println(id)\n\n  }\n\ndef testUpdateDataSourceParameterForKafka(client:LinkisDataSourceRemoteClient): Unit ={\n    val params = new util.HashMap[String,Any]()\n    val connParams = new util.HashMap[String,Any]()\n    connParams.put("brokers","172.24.2.232:9092")\n    params.put("connectParams",connParams)\n    params.put("comment","kafka data source")\n  client.updateDataSourceParameter(UpdateDataSourceParameterAction.builder().setUser("hadoop").setDataSourceId("7").addRequestPayloads(params).build())\n  }\n\ndef testUpdateDataSourceParameterForEs(client:LinkisDataSourceRemoteClient): Unit ={\n    val params = new util.HashMap[String,Any]()\n    val connParams = new util.HashMap[String,Any]()\n    val elasticUrls = new util.ArrayList[String]()\n    elasticUrls.add("http://172.24.2.231:9200")\n    connParams.put("elasticUrls",elasticUrls)\n    params.put("connectParams",connParams)\n    params.put("comment","es data source")\n    client.updateDataSourceParameter(UpdateDataSourceParameterAction.builder().setUser("hadoop").setDataSourceId("8").addRequestPayloads(params).build())\n  }\n\n\n def testMetadataGetDatabases(client:LinkisMetaDataRemoteClient): Unit ={\n  client.getDatabases(MetadataGetDatabasesAction.builder().setUser("hadoop").setDataSourceId(9l).setUser("hadoop").setSystem("client").build()).getDbs\n  }\n}\n')))}p.isMDXComponent=!0}}]);