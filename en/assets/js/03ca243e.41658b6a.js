"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[2063],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>c});var l=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,l)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function n(t,e){if(null==t)return{};var a,l,r=function(t,e){if(null==t)return{};var a,l,r={},i=Object.keys(t);for(l=0;l<i.length;l++)a=i[l],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(l=0;l<i.length;l++)a=i[l],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var u=l.createContext({}),s=function(t){var e=l.useContext(u),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},m=function(t){var e=s(t.components);return l.createElement(u.Provider,{value:e},t.children)},h="mdxType",o={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},k=l.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,u=t.parentName,m=n(t,["components","mdxType","originalType","parentName"]),h=s(a),k=r,c=h["".concat(u,".").concat(k)]||h[k]||o[k]||i;return a?l.createElement(c,p(p({ref:e},m),{},{components:a})):l.createElement(c,p({ref:e},m))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,p=new Array(i);p[0]=k;var n={};for(var u in e)hasOwnProperty.call(e,u)&&(n[u]=e[u]);n.originalType=t,n[h]="string"==typeof t?t:r,p[1]=n;for(var s=2;s<i;s++)p[s]=a[s];return l.createElement.apply(null,p)}return l.createElement.apply(null,a)}k.displayName="MDXCreateElement"},70413:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>u,contentTitle:()=>p,default:()=>o,frontMatter:()=>i,metadata:()=>n,toc:()=>s});var l=a(87462),r=(a(67294),a(3905));const i={title:"Seata 1.6.0 \u91cd\u78c5\u53d1\u5e03\uff0c\u5927\u5e45\u63d0\u5347\u6027\u80fd",author:"Seata\u793e\u533a",keywords:["seata\u3001\u5206\u5e03\u5f0f\u4e8b\u52a1\u30011.6.0"],description:"Seata 1.6.0 \u91cd\u78c5\u53d1\u5e03\uff0c\u5927\u5e45\u63d0\u5347\u6027\u80fd",date:"2022/12/17"},p=void 0,n={permalink:"/en/blog/seata-1.6.0",source:"@site/blog/seata-1.6.0.md",title:"Seata 1.6.0 \u91cd\u78c5\u53d1\u5e03\uff0c\u5927\u5e45\u63d0\u5347\u6027\u80fd",description:"Seata 1.6.0 \u91cd\u78c5\u53d1\u5e03\uff0c\u5927\u5e45\u63d0\u5347\u6027\u80fd",date:"2022-12-17T00:00:00.000Z",formattedDate:"December 17, 2022",tags:[],readingTime:6.575,hasTruncateMarker:!1,authors:[{name:"Seata\u793e\u533a"}],frontMatter:{title:"Seata 1.6.0 \u91cd\u78c5\u53d1\u5e03\uff0c\u5927\u5e45\u63d0\u5347\u6027\u80fd",author:"Seata\u793e\u533a",keywords:["seata\u3001\u5206\u5e03\u5f0f\u4e8b\u52a1\u30011.6.0"],description:"Seata 1.6.0 \u91cd\u78c5\u53d1\u5e03\uff0c\u5927\u5e45\u63d0\u5347\u6027\u80fd",date:"2022/12/17"},prevItem:{title:"6\u5927\u8bfe\u9898\u73b0\u5df2\u5f00\u653e\u6311\u9009 | \u6b22\u8fce\u62a5\u540d Seata \u5f00\u6e90\u4e4b\u590f",permalink:"/en/blog/iscas2023"},nextItem:{title:"Seata 1.5.2 \u91cd\u78c5\u53d1\u5e03\uff0c\u652f\u6301xid\u8d1f\u8f7d\u5747\u8861",permalink:"/en/blog/seata-1.5.2"}},u={authorsImageUrls:[void 0]},s=[{value:"Seata 1.6.0 \u91cd\u78c5\u53d1\u5e03\uff0c\u5927\u5e45\u63d0\u5347\u6027\u80fd",id:"seata-160-\u91cd\u78c5\u53d1\u5e03\u5927\u5e45\u63d0\u5347\u6027\u80fd",level:3},{value:"feature\uff1a",id:"feature",level:3},{value:"bugfix\uff1a",id:"bugfix",level:3},{value:"optimize\uff1a",id:"optimize",level:3},{value:"test\uff1a",id:"test",level:3},{value:"Link",id:"link",level:4}],m={toc:s},h="wrapper";function o(t){let{components:e,...a}=t;return(0,r.kt)(h,(0,l.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"seata-160-\u91cd\u78c5\u53d1\u5e03\u5927\u5e45\u63d0\u5347\u6027\u80fd"},"Seata 1.6.0 \u91cd\u78c5\u53d1\u5e03\uff0c\u5927\u5e45\u63d0\u5347\u6027\u80fd"),(0,r.kt)("p",null,"Seata \u662f\u4e00\u6b3e\u5f00\u6e90\u7684\u5206\u5e03\u5f0f\u4e8b\u52a1\u89e3\u51b3\u65b9\u6848\uff0c\u63d0\u4f9b\u9ad8\u6027\u80fd\u548c\u7b80\u5355\u6613\u7528\u7684\u5206\u5e03\u5f0f\u4e8b\u52a1\u670d\u52a1\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"seata-server \u4e0b\u8f7d\u94fe\u63a5\uff1a")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/seata/seata/archive/v1.6.0.zip"},"source")," |\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/seata/seata/releases/download/v1.6.0/seata-server-1.6.0.zip"},"binary")),(0,r.kt)("p",null,"\u6b64\u7248\u672c\u66f4\u65b0\u5982\u4e0b\uff1a"),(0,r.kt)("h3",{id:"feature"},"feature\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4863"},"#4863"),"] \u652f\u6301 oracle \u548c postgresql \u591a\u4e3b\u952e"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4649"},"#4649"),"] seata-server\u652f\u6301\u591a\u6ce8\u518c\u4e2d\u5fc3"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4779"},"#4779"),"] \u652f\u6301 Apache Dubbo3"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4479"},"#4479"),"] TCC\u6ce8\u89e3\u652f\u6301\u6dfb\u52a0\u5728\u63a5\u53e3\u548c\u5b9e\u73b0\u7c7b\u4e0a"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4877"},"#4877"),"] client sdk \u652f\u6301jdk17"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4914"},"#4914"),"] \u652f\u6301 mysql \u7684update join\u8054\u8868\u66f4\u65b0\u8bed\u6cd5"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4542"},"#4542"),"] \u652f\u6301 oracle timestamp \u7c7b\u578b"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/5111"},"#5111"),"] \u652f\u6301Nacos contextPath \u914d\u7f6e"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4802"},"#4802"),"] dockerfile \u652f\u6301 arm64")),(0,r.kt)("h3",{id:"bugfix"},"bugfix\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4780"},"#4780"),"] \u4fee\u590d\u8d85\u65f6\u56de\u6eda\u6210\u529f\u540e\u65e0\u6cd5\u53d1\u9001TimeoutRollbacked\u4e8b\u4ef6"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4954"},"#4954"),"] \u4fee\u590doutput\u8868\u8fbe\u5f0f\u9519\u8bef\u65f6\uff0c\u4fdd\u5b58\u6267\u884c\u7ed3\u679c\u7a7a\u6307\u9488\u5f02\u5e38"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4817"},"#4817"),"] \u4fee\u590d\u9ad8\u7248\u672cspringboot\u914d\u7f6e\u4e0d\u6807\u51c6\u7684\u95ee\u9898"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4838"},"#4838"),"] \u4fee\u590d\u4f7f\u7528 Statement.executeBatch() \u65f6\u65e0\u6cd5\u751f\u6210undo log \u7684\u95ee\u9898"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4533"},"#4533"),"] \u4fee\u590dhandleRetryRollbacking\u7684event\u91cd\u590d\u5bfc\u81f4\u7684\u6307\u6807\u6570\u636e\u4e0d\u51c6\u786e"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4912"},"#4912"),"] \u4fee\u590dmysql InsertOnDuplicateUpdate \u5217\u540d\u5927\u5c0f\u5199\u4e0d\u4e00\u81f4\u65e0\u6cd5\u6b63\u786e\u5339\u914d"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4543"},"#4543"),"] \u4fee\u590d\u5bf9 Oracle \u6570\u636e\u7c7b\u578bnclob\u7684\u652f\u6301"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4915"},"#4915"),"] \u4fee\u590d\u83b7\u53d6\u4e0d\u5230ServerRecoveryProperties\u5c5e\u6027\u7684\u95ee\u9898"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4919"},"#4919"),"] \u4fee\u590dXID\u7684port\u548caddress\u51fa\u73b0null:0\u7684\u60c5\u51b5"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4928"},"#4928"),"] \u4fee\u590d rpcContext.getClientRMHolderMap NPE \u95ee\u9898"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4953"},"#4953"),"] \u4fee\u590dInsertOnDuplicateUpdate\u53ef\u7ed5\u8fc7\u4fee\u6539\u4e3b\u952e\u7684\u95ee\u9898"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4978"},"#4978"),"] \u4fee\u590d kryo \u652f\u6301\u5faa\u73af\u4f9d\u8d56"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4985"},"#4985"),"] \u4fee\u590d undo_log id\u91cd\u590d\u7684\u95ee\u9898"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4874"},"#4874"),"] \u4fee\u590dOpenJDK 11 \u542f\u52a8\u5931\u8d25"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/5018"},"#5018"),"] \u4fee\u590d\u542f\u52a8\u811a\u672c\u4e2d loader path \u4f7f\u7528\u76f8\u5bf9\u8def\u5f84\u5bfc\u81f4 server \u542f\u52a8\u5931\u8d25\u95ee\u9898"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/5004"},"#5004"),"] \u4fee\u590dmysql update join\u884c\u6570\u636e\u91cd\u590d\u7684\u95ee\u9898"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/5032"},"#5032"),"] \u4fee\u590dmysql InsertOnDuplicateUpdate\u4e2d\u6761\u4ef6\u53c2\u6570\u586b\u5145\u4f4d\u7f6e\u8ba1\u7b97\u9519\u8bef\u5bfc\u81f4\u7684\u955c\u50cf\u67e5\u8be2SQL\u8bed\u53e5\u5f02\u5e38\u95ee\u9898"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/5033"},"#5033"),"] \u4fee\u590dInsertOnDuplicateUpdate\u7684SQL\u8bed\u53e5\u4e2d\u65e0\u63d2\u5165\u5217\u5b57\u6bb5\u5bfc\u81f4\u7684\u7a7a\u6307\u9488\u95ee\u9898"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/5038"},"#5038"),"] \u4fee\u590dSagaAsyncThreadPoolProperties\u51b2\u7a81\u95ee\u9898"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/5050"},"#5050"),"] \u4fee\u590dSaga\u6a21\u5f0f\u4e0b\u5168\u5c40\u72b6\u6001\u672a\u6b63\u786e\u66f4\u6539\u6210Committed\u95ee\u9898"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/5052"},"#5052"),"] \u4fee\u590dupdate join\u6761\u4ef6\u4e2d\u5360\u4f4d\u7b26\u53c2\u6570\u95ee\u9898"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/5031"},"#5031"),"] \u4fee\u590dInsertOnDuplicateUpdate\u4e2d\u4e0d\u5e94\u8be5\u4f7f\u7528null\u503c\u7d22\u5f15\u4f5c\u4e3a\u67e5\u8be2\u6761\u4ef6"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/5075"},"#5075"),"] \u4fee\u590dInsertOnDuplicateUpdate\u65e0\u6cd5\u62e6\u622a\u65e0\u4e3b\u952e\u548c\u552f\u4e00\u7d22\u5f15\u7684SQL"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/5093"},"#5093"),"] \u4fee\u590dseata server\u91cd\u542f\u540eaccessKey\u4e22\u5931\u95ee\u9898"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/5092"},"#5092"),"] \u4fee\u590d\u5f53seata and jpa\u5171\u540c\u4f7f\u7528\u65f6, AutoConfiguration\u7684\u987a\u5e8f\u4e0d\u6b63\u786e\u7684\u95ee\u9898"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/5109"},"#5109"),"] \u4fee\u590d\u5f53RM\u4fa7\u6ca1\u6709\u52a0@GlobalTransactional\u62a5NPE\u7684\u95ee\u9898"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/5098"},"#5098"),"] Druid \u7981\u7528 oracle implicit cache"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4860"},"#4860"),"] \u4fee\u590dmetrics tag\u8986\u76d6\u95ee\u9898"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/5028"},"#5028"),"] \u4fee\u590d insert on duplicate SQL\u4e2d null \u503c\u95ee\u9898"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/5078"},"#5078"),"] \u4fee\u590dSQL\u8bed\u53e5\u4e2d\u65e0\u4e3b\u952e\u548c\u552f\u4e00\u952e\u62e6\u622a\u95ee\u9898"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/5097"},"#5097"),"] \u4fee\u590d\u5f53Server\u91cd\u542f\u65f6 accessKey \u4e22\u5931\u95ee\u9898"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/5131"},"#5131"),"] \u4fee\u590dXAConn\u5904\u4e8eactive\u72b6\u6001\u65f6\u65e0\u6cd5\u56de\u6eda\u7684\u95ee\u9898"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/5134"},"#5134"),"] \u4fee\u590dhikariDataSource \u81ea\u52a8\u4ee3\u7406\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\u5931\u6548\u7684\u95ee\u9898"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/5163"},"#5163"),"] \u4fee\u590d\u9ad8\u7248\u672cJDK\u7f16\u8bd1\u5931\u8d25\u7684\u95ee\u9898")),(0,r.kt)("h3",{id:"optimize"},"optimize\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4681"},"#4681"),"] \u4f18\u5316\u7ade\u4e89\u9501\u8fc7\u7a0b"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4774"},"#4774"),"] \u4f18\u5316 seataio/seata-server \u955c\u50cf\u4e2d\u7684 mysql8 \u4f9d\u8d56"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4750"},"#4750"),"] \u4f18\u5316AT\u5206\u652f\u91ca\u653e\u5168\u5c40\u9501\u4e0d\u4f7f\u7528xid"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4790"},"#4790"),"] \u6dfb\u52a0\u81ea\u52a8\u53d1\u5e03 OSSRH github action"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4765"},"#4765"),"] mysql8.0.29\u7248\u672c\u53ca\u4ee5\u4e0aXA\u6a21\u5f0f\u4e0d\u6301connection\u81f3\u4e8c\u9636\u6bb5"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4797"},"#4797"),"] \u4f18\u5316\u6240\u6709github actions\u811a\u672c"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4800"},"#4800"),"] \u6dfb\u52a0 NOTICE \u6587\u4ef6"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4761"},"#4761"),"] \u4f7f\u7528 hget \u4ee3\u66ff RedisLocker \u4e2d\u7684 hmget"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4414"},"#4414"),"] \u79fb\u9664log4j\u4f9d\u8d56"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4836"},"#4836"),"] \u4f18\u5316 BaseTransactionalExecutor#buildLockKey(TableRecords rowsIncludingPK) \u65b9\u6cd5\u53ef\u8bfb\u6027"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4865"},"#4865"),"] \u4fee\u590d Saga \u53ef\u89c6\u5316\u8bbe\u8ba1\u5668 GGEditor \u5b89\u5168\u6f0f\u6d1e"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4590"},"#4590"),"] \u81ea\u52a8\u964d\u7ea7\u652f\u6301\u5f00\u5173\u652f\u6301\u52a8\u6001\u914d\u7f6e"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4490"},"#4490"),"] tccfence \u8bb0\u5f55\u8868\u4f18\u5316\u6210\u6309\u7d22\u5f15\u5220\u9664"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4911"},"#4911"),"] \u6dfb\u52a0 header \u548clicense \u68c0\u6d4b"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4917"},"#4917"),"] \u5347\u7ea7 package-lock.json \u4fee\u590d\u6f0f\u6d1e"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4924"},"#4924"),"] \u4f18\u5316 pom \u4f9d\u8d56"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4932"},"#4932"),"] \u62bd\u53d6\u90e8\u5206\u914d\u7f6e\u7684\u9ed8\u8ba4\u503c"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4925"},"#4925"),"] \u4f18\u5316 javadoc \u6ce8\u91ca"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4921"},"#4921"),"] \u4fee\u590d\u63a7\u5236\u53f0\u6a21\u5757\u5b89\u5168\u6f0f\u6d1e\u548c\u5347\u7ea7 skywalking-eyes \u7248\u672c"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4936"},"#4936"),"] \u4f18\u5316\u5b58\u50a8\u914d\u7f6e\u7684\u8bfb\u53d6"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4946"},"#4946"),"] \u5c06\u83b7\u53d6\u9501\u65f6\u9047\u5230\u7684sql\u5f02\u5e38\u4f20\u9012\u7ed9\u5ba2\u6237\u7aef"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4962"},"#4962"),"] \u4f18\u5316\u6784\u5efa\u914d\u7f6e\uff0c\u5e76\u4fee\u6b63docker\u955c\u50cf\u7684\u57fa\u7840\u955c\u50cf"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4974"},"#4974"),"] \u53d6\u6d88redis\u6a21\u5f0f\u4e0b,\u67e5\u8be2globalStatus\u6570\u91cf\u7684\u9650\u5236"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4981"},"#4981"),"] \u4f18\u5316\u5f53tcc fence\u8bb0\u5f55\u67e5\u4e0d\u5230\u65f6\u7684\u9519\u8bef\u63d0\u793a"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4995"},"#4995"),"] \u4fee\u590dmysql InsertOnDuplicateUpdate\u540e\u7f6e\u955c\u50cf\u67e5\u8be2SQL\u4e2d\u91cd\u590d\u7684\u4e3b\u952e\u67e5\u8be2\u6761\u4ef6"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/5047"},"#5047"),"] \u79fb\u9664\u65e0\u7528\u4ee3\u7801"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/5051"},"#5051"),"] \u56de\u6eda\u65f6undolog\u4ea7\u751f\u810f\u5199\u9700\u8981\u629b\u51fa\u4e0d\u518d\u91cd\u8bd5(BranchRollbackFailed_Unretriable)\u7684\u5f02\u5e38"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/5075"},"#5075"),"] \u62e6\u622a\u6ca1\u6709\u4e3b\u952e\u53ca\u552f\u4e00\u7d22\u5f15\u503c\u7684insert on duplicate update\u8bed\u53e5"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/5104"},"#5104"),"] ConnectionProxy\u8131\u79bb\u5bf9druid\u7684\u4f9d\u8d56"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/5124"},"#5124"),"] \u652f\u6301oracle\u5220\u9664TCC fence\u8bb0\u5f55\u8868"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4968"},"#4468"),"] \u652f\u6301kryo 5.3.0"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4807"},"#4807"),"] \u4f18\u5316\u955c\u50cf\u548cOSS\u4ed3\u5e93\u53d1\u5e03\u6d41\u6c34\u7ebf"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4445"},"#4445"),"] \u4f18\u5316\u4e8b\u52a1\u8d85\u65f6\u5224\u65ad"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4958"},"#4958"),"] \u4f18\u5316\u8d85\u65f6\u4e8b\u52a1 triggerAfterCommit() \u7684\u6267\u884c"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4582"},"#4582"),"] \u4f18\u5316redis\u5b58\u50a8\u6a21\u5f0f\u7684\u4e8b\u52a1\u6392\u5e8f"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4963"},"#4963"),"] \u589e\u52a0 ARM64 \u6d41\u6c34\u7ebf CI \u6d4b\u8bd5"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4434"},"#4434"),"] \u79fb\u9664 seata-server CMS GC \u53c2\u6570")),(0,r.kt)("h3",{id:"test"},"test\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4411"},"#4411"),"] \u6d4b\u8bd5Oracle\u6570\u636e\u5e93AT\u6a21\u5f0f\u4e0b\u7c7b\u578b\u652f\u6301"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4794"},"#4794"),"] \u91cd\u6784\u4ee3\u7801\uff0c\u5c1d\u8bd5\u4fee\u590d\u5355\u5143\u6d4b\u8bd5 ",(0,r.kt)("inlineCode",{parentName:"li"},"DataSourceProxyTest.getResourceIdTest()")),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/5101"},"#5101"),"] \u4fee\u590dzk\u6ce8\u518c\u548c\u914d\u7f6e\u4e2d\u5fc3\u62a5ClassNotFoundException\u7684\u95ee\u9898 ",(0,r.kt)("inlineCode",{parentName:"li"},"DataSourceProxyTest.getResourceIdTest()"))),(0,r.kt)("p",null,"\u975e\u5e38\u611f\u8c22\u4ee5\u4e0b contributors \u7684\u4ee3\u7801\u8d21\u732e\u3002\u82e5\u6709\u65e0\u610f\u9057\u6f0f\uff0c\u8bf7\u62a5\u544a\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/slievrly"},"slievrly")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/renliangyu857"},"renliangyu857")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/wangliang181230"},"wangliang181230")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/a364176773"},"a364176773")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/tuwenlin"},"tuwenlin")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/conghuhu"},"conghuhu")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/a1104321118"},"a1104321118")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/duanqiaoyanyu"},"duanqiaoyanyu")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/robynron"},"robynron")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/lcmvs"},"lcmvs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/github-ganyu"},"github-ganyu")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/1181954449"},"1181954449")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/zw201913"},"zw201913")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/wingchi-leung"},"wingchi-leung")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/AlexStocks"},"AlexStocks")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/liujunlin5168"},"liujunlin5168")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/pengten"},"pengten")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/liuqiufeng"},"liuqiufeng")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/yujianfei1986"},"yujianfei1986")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Bughue"},"Bughue")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/AlbumenJ"},"AlbumenJ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/doubleDimple"},"doubleDimple")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/jsbxyyx"},"jsbxyyx")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/tuwenlin"},"tuwenlin")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/JavaLionLi"},"CrazyLionLi")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/whxxxxx"},"whxxxxx")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/neillee95"},"neillee95")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/crazy-sheep"},"crazy-sheep")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/zhangzq7"},"zhangzq7")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/l81893521"},"l81893521")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/zhuyoufeng"},"zhuyoufeng")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/xingfudeshi"},"xingfudeshi")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/odidev"},"odidev")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/miaoxueyu"},"miaoxueyu"))),(0,r.kt)("p",null,"\u540c\u65f6\uff0c\u6211\u4eec\u6536\u5230\u4e86\u793e\u533a\u53cd\u9988\u7684\u5f88\u591a\u6709\u4ef7\u503c\u7684issue\u548c\u5efa\u8bae\uff0c\u975e\u5e38\u611f\u8c22\u5927\u5bb6\u3002"),(0,r.kt)("h4",{id:"link"},"Link"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Seata:")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata"},"https://github.com/seata/seata")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Seata-Samples:")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata-samples"},"https://github.com/seata/seata-samples")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Release:")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/releases"},"https://github.com/seata/seata/releases")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"WebSite:")," ",(0,r.kt)("a",{parentName:"li",href:"https://seata.io"},"https://seata.io"))))}o.isMDXComponent=!0}}]);