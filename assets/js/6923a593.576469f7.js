"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[47443],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),g=r,m=u["".concat(s,".").concat(g)]||u[g]||k[g]||i;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},91102:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>k,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={title:"SkyWalking",keywords:["Seata","SkyWalking"],description:"Seata SkyWalking"},o="SkyWalking",l={unversionedId:"user/apm/skywalking",id:"user/apm/skywalking",title:"SkyWalking",description:"Seata SkyWalking",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/user/apm/skywalking.md",sourceDirName:"user/apm",slug:"/user/apm/skywalking",permalink:"/docs/next/user/apm/skywalking",draft:!1,tags:[],version:"current",frontMatter:{title:"SkyWalking",keywords:["Seata","SkyWalking"],description:"Seata SkyWalking"},sidebar:"docs",previous:{title:"Functions",permalink:"/docs/next/user/sqlreference/function"},next:{title:"Prometheus",permalink:"/docs/next/user/apm/prometheus"}},s={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Quick Start",id:"quick-start",level:2},{value:"Compile &amp; Configure",id:"compile--configure",level:3},{value:"Access Monitoring",id:"access-monitoring",level:3},{value:"Notes",id:"notes",level:2}],c={toc:p},u="wrapper";function k(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"skywalking"},"SkyWalking"),(0,r.kt)("p",null,"SkyWalking is an important APM (Application Performance Monitoring) implementation in the Seata component."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Before integrating SkyWalking into your Seata project, please make sure that the SkyWalking service has been started in the background. If you are not familiar with the basic usage of SkyWalking, you can refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/skywalking/tree/master/docs"},"SkyWalking Quick Start")," first. It is recommended to use SkyWalking version ",(0,r.kt)("inlineCode",{parentName:"p"},"8.6.0")," or above."),(0,r.kt)("h2",{id:"quick-start"},"Quick Start"),(0,r.kt)("p",null,'The steps to integrate SkyWalking application performance monitoring into Seata are very simple. It can be roughly divided into "Compile & Configure" and "Access Monitoring" steps.'),(0,r.kt)("h3",{id:"compile--configure"},"Compile & Configure"),(0,r.kt)("p",null,"First, you need to download the Seata source code and execute the following command in the root directory of the source code:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"mvn clean package -Dmaven.test.skip=true")),(0,r.kt)("p",null,"Put ",(0,r.kt)("inlineCode",{parentName:"p"},"seata/ext/apm-skywalking/target/seata-skywalking-{version}.jar")," into the SkyWalking probe plugin folder."),(0,r.kt)("p",null,"It is strongly recommended to use the latest version of Seata:"),(0,r.kt)("h3",{id:"access-monitoring"},"Access Monitoring"),(0,r.kt)("p",null,"The integration of Seata client and server with SkyWalking is no different from other application services. You can refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/skywalking/blob/f3b567160ce61675cb692c3417101162d67093de/docs/en/setup/service-agent/java-agent/Setting-override.md"},"SkyWalking Probe Configuration"),"."),(0,r.kt)("p",null,"The important parameters involved in Seata are:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"skywalking.plugin.seata.server"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean attribute, when set to ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", indicates whether the application service is a Seata server")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"skywalking.plugin.jdbc.trace_sql_parameters"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean attribute, when set to ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", the application service records SQL parameters")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"skywalking.agent.service_name"),(0,r.kt)("td",{parentName:"tr",align:null},"String attribute, identifies the unique identifier of the application service in SkyWalking")))),(0,r.kt)("p",null,"Seata client probe parameters can refer to"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"java -javaagent:{path}/skywalking-agent.jar -Dskywalking.agent.service_name=seata_biz -Dskywalking.plugin.jdbc.trace_sql_parameters=true -jar seata_biz.jar\n")),(0,r.kt)("p",null,"Seata server probe parameters can refer to"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"java -javaagent:{path}/skywalking-agent.jar -Dskywalking.agent.service_name=seata_tc -Dskywalking.plugin.jdbc.trace_sql_parameters=true -Dskywalking.plugin.seata.server=true -jar seata_tc.jar\n")),(0,r.kt)("h2",{id:"notes"},"Notes"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Currently, only non-batch processing (enableClientBatchSendRequest is false) distributed transaction mode is supported.")))}k.isMDXComponent=!0}}]);