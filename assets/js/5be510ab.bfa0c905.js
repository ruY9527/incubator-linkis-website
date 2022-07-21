"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[8605],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),d=i,m=u["".concat(l,".").concat(d)]||u[d]||h[d]||r;return n?o.createElement(m,a(a({ref:t},p),{},{components:n})):o.createElement(m,a({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var s=2;s<r;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},47503:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var o=n(87462),i=n(63366),r=(n(67294),n(3905)),a=["components"],c={title:"CS Search Architecture",sidebar_position:5},l=void 0,s={unversionedId:"architecture/public_enhancement_services/context_service/context_service_search",id:"version-1.0.3/architecture/public_enhancement_services/context_service/context_service_search",isDocsHomePage:!1,title:"CS Search Architecture",description:"CSSearch Architecture",source:"@site/versioned_docs/version-1.0.3/architecture/public_enhancement_services/context_service/context_service_search.md",sourceDirName:"architecture/public_enhancement_services/context_service",slug:"/architecture/public_enhancement_services/context_service/context_service_search",permalink:"/docs/1.0.3/architecture/public_enhancement_services/context_service/context_service_search",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/versioned_docs/version-1.0.3/architecture/public_enhancement_services/context_service/context_service_search.md",tags:[],version:"1.0.3",sidebarPosition:5,frontMatter:{title:"CS Search Architecture",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"CS Persistence Architecture",permalink:"/docs/1.0.3/architecture/public_enhancement_services/context_service/context_service_persistence"},next:{title:"Overview",permalink:"/docs/1.0.3/architecture/microservice_governance_services/overview"}},p=[{value:"<strong>CSSearch Architecture</strong>",id:"cssearch-architecture",children:[{value:"<strong>Overall architecture</strong>",id:"overall-architecture",children:[]},{value:"<strong>Query Condition Definition (ContextSearchCondition)</strong>",id:"query-condition-definition-contextsearchcondition",children:[]},{value:"<strong>Construction of query conditions</strong>",id:"construction-of-query-conditions",children:[]},{value:"<strong>Execution of query conditions</strong>",id:"execution-of-query-conditions",children:[]},{value:"<strong>Query entry ContextSearch</strong>",id:"query-entry-contextsearch",children:[]},{value:"<strong>Query Optimization</strong>",id:"query-optimization",children:[]}]}],h={toc:p};function u(e){var t=e.components,c=(0,i.Z)(e,a);return(0,r.kt)("wrapper",(0,o.Z)({},h,c,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"cssearch-architecture"},(0,r.kt)("strong",{parentName:"h2"},"CSSearch Architecture")),(0,r.kt)("h3",{id:"overall-architecture"},(0,r.kt)("strong",{parentName:"h3"},"Overall architecture")),(0,r.kt)("p",null,"As shown below:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(86813).Z})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"ContextSearch: The query entry, accepts the query conditions defined in the Map form, and returns the corresponding results according to the conditions.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Building module: Each condition type corresponds to a Parser, which is responsible for converting the condition in the form of Map into a Condition object, which is implemented by calling the logic of ConditionBuilder. Conditions with complex logical relationships will use ConditionOptimizer to optimize query plans based on cost-based algorithms.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Execution module: Filter out the results that match the conditions from the Cache. According to different query targets, there are three execution modes: Ruler, Fetcher and Match. The specific logic is described later.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Evaluation module: Responsible for calculation of conditional execution cost and statistics of historical execution status."))),(0,r.kt)("h3",{id:"query-condition-definition-contextsearchcondition"},(0,r.kt)("strong",{parentName:"h3"},"Query Condition Definition (ContextSearchCondition)")),(0,r.kt)("p",null,"A query condition specifies how to filter out the part that meets the condition from a ContextKeyValue collection. The query conditions can be used to form more complex query conditions through logical operations."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Support ContextType, ContextScope, KeyWord matching"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Corresponding to a Condition type")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In Cache, these should have corresponding indexes")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Support contains/regex matching mode for key"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"ContainsContextSearchCondition: contains a string")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"RegexContextSearchCondition: match a regular expression")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Support logical operations of or, and and not"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Unary operation UnaryContextSearchCondition:")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Support logical operations of a single parameter, such as NotContextSearchCondition")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Binary operation BinaryContextSearchCondition:")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Support the logical operation of two parameters, defined as LeftCondition and RightCondition, such as OrContextSearchCondition and AndContextSearchCondition")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Each logical operation corresponds to an implementation class of the above subclass")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The UML class diagram of this part is as follows:"))),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(82431).Z})),(0,r.kt)("h3",{id:"construction-of-query-conditions"},(0,r.kt)("strong",{parentName:"h3"},"Construction of query conditions")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Support construction through ContextSearchConditionBuilder: When constructing, if multiple ContextType, ContextScope, KeyWord, contains/regex matches are declared at the same time, they will be automatically connected by And logical operation")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Support logical operations between Conditions and return new Conditions: And, Or and Not (considering the form of condition1.or(condition2), the top-level interface of Condition is required to define logical operation methods)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Support to build from Map through ContextSearchParser corresponding to each underlying implementation class"))),(0,r.kt)("h3",{id:"execution-of-query-conditions"},(0,r.kt)("strong",{parentName:"h3"},"Execution of query conditions")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Three function modes of query conditions:"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Ruler: Filter out eligible ContextKeyValue sub-Arrays from an Array")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Matcher: Determine whether a single ContextKeyValue meets the conditions")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Fetcher: Filter out an Array of eligible ContextKeyValue from ContextCache")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Each bottom-level Condition has a corresponding Execution, responsible for maintaining the corresponding Ruler, Matcher, and Fetcher."))),(0,r.kt)("h3",{id:"query-entry-contextsearch"},(0,r.kt)("strong",{parentName:"h3"},"Query entry ContextSearch")),(0,r.kt)("p",null,"Provide a search interface, receive Map as a parameter, and filter out the corresponding data from the Cache."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Use Parser to convert the condition in the form of Map into a Condition object")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Obtain cost information through Optimizer, and determine the order of query according to the cost information")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"After executing the corresponding Ruler/Fetcher/Matcher logic through the corresponding Execution, the search result is obtained"))),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(15385).Z})),(0,r.kt)("h3",{id:"query-optimization"},(0,r.kt)("strong",{parentName:"h3"},"Query Optimization")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"OptimizedContextSearchCondition maintains the Cost and Statistics information of the condition:"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Cost information: CostCalculator is responsible for judging whether a certain Condition can calculate Cost, and if it can be calculated, it returns the corresponding Cost object")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Statistics information: start/end/execution time, number of input lines, number of output lines")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Implement a CostContextSearchOptimizer, whose optimize method is based on the cost of the Condition to optimize the Condition and convert it into an OptimizedContextSearchCondition object. The specific logic is described as follows:"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Disassemble a complex Condition into a tree structure based on the combination of logical operations. Each leaf node is a basic simple Condition; each non-leaf node is a logical operation.")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Tree A as shown in the figure below is a complex condition composed of five simple conditions of ABCDE through various logical operations.")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(47308).Z})),(0,r.kt)("center",null,"(Tree A)"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The execution of these Conditions is actually depth first, traversing the tree from left to right. Moreover, according to the exchange rules of logical operations, the left and right order of the child nodes of a node in the Condition tree can be exchanged, so all possible trees in all possible execution orders can be enumerated.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Tree B as shown in the figure below is another possible sequence of tree A above, which is exactly the same as the execution result of tree A, except that the execution order of each part has been adjusted.")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(33532).Z})),(0,r.kt)("center",null,"(Tree B)"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"For each tree, the cost is calculated from the leaf node and collected to the root node, which is the final cost of the tree, and finally the tree with the smallest cost is obtained as the optimal execution order.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The rules for calculating node cost are as follows:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"For leaf nodes, each node has two attributes: Cost and Weight. Cost is the cost calculated by CostCalculator. Weight is assigned according to the order of execution of the nodes. The current default is 1 on the left and 0.5 on the right. See how to adjust it later (the reason for assigning weight is that the conditions on the left have already been set in some cases. It can directly determine whether the entire combinatorial logic matches or not, so the condition on the right does not have to be executed in all cases, and the actual cost needs to be reduced by a certain percentage)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"For non-leaf nodes, Cost = the sum of Cost\xd7Weight of all child nodes; the weight assignment logic is consistent with that of leaf nodes."))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Taking tree A and tree B as examples, calculate the costs of these two trees respectively, as shown in the figure below, the number in the node is Cost","|","Weight, assuming that the cost of the 5 simple conditions of ABCDE is 10, 100, 50 , 10, and 100. It can be concluded that the cost of tree B is less than that of tree A, which is a better solution.")),(0,r.kt)("center",null,(0,r.kt)("img",{src:"/Images/Architecture/Public_Enhancement_Service/ContextService/linkis-contextservice-search-06.png",width:"300"})," ",(0,r.kt)("img",{src:"/Images/Architecture/Public_Enhancement_Service/ContextService/linkis-contextservice-search-07.png",width:"300"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Use CostCalculator to measure the cost of simple conditions:"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The condition acting on the index: the cost is determined according to the distribution of the index value. For example, when the length of the Array obtained by condition A from the Cache is 100 and condition B is 200, then the cost of condition A is less than B.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Conditions that need to be traversed:"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"According to the matching mode of the condition itself, an initial Cost is given: For example, Regex is 100, Contains is 10, etc. (the specific values \u200b\u200betc. will be adjusted according to the situation when they are realized)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"According to the efficiency of historical query, the real-time Cost is obtained after continuous adjustment on the basis of the initial Cost. Throughput per unit time"))))))))}u.isMDXComponent=!0},86813:function(e,t,n){t.Z=n.p+"assets/images/linkis-contextservice-search-01-6aaabea466a0ef38d5a625bc29bc8570.png"},82431:function(e,t,n){t.Z=n.p+"assets/images/linkis-contextservice-search-02-fb5127e38e2e4fd3f34d8f3b98a17b0e.png"},15385:function(e,t,n){t.Z=n.p+"assets/images/linkis-contextservice-search-03-be9fc6738a640d46efe8d890f0ad9632.png"},47308:function(e,t,n){t.Z=n.p+"assets/images/linkis-contextservice-search-04-56a888dbb72f9dc3ac464f9caf88d6f7.png"},33532:function(e,t,n){t.Z=n.p+"assets/images/linkis-contextservice-search-05-aaf617814ecac7b890ef11722e27ed63.png"}}]);