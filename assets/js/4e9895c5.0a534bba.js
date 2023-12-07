"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[88500],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,f=u["".concat(l,".").concat(m)]||u[m]||c[m]||i;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},15030:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const i={title:"Version Upgrade Guide",keywords:["Seata"],description:"Seata upgrade."},o="Version Upgrade Guide",s={unversionedId:"ops/upgrade",id:"version-v1.5/ops/upgrade",title:"Version Upgrade Guide",description:"Seata upgrade.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-v1.5/ops/upgrade.md",sourceDirName:"ops",slug:"/ops/upgrade",permalink:"/docs/v1.5/ops/upgrade",draft:!1,tags:[],version:"v1.5",frontMatter:{title:"Version Upgrade Guide",keywords:["Seata"],description:"Seata upgrade."},sidebar:"docs",previous:{title:"Metrics Design",permalink:"/docs/v1.5/dev/seata-mertics"},next:{title:"Multi-configuration Isolation",permalink:"/docs/v1.5/ops/multi-configuration-isolation"}},l={},d=[],p={toc:d},u="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"version-upgrade-guide"},"Version Upgrade Guide"),(0,r.kt)("hr",null),(0,r.kt)("h3",null,"1. What compatibility matters need to be paid attention to when upgrading to seata 1.5.0? "),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("mark",null,"Notes")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"When the storage mode of seata-server is db, you need to pay attention to the table structure changes. You need to change the table structure before upgrading to 1.5.0:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The table structure character set is uniformly adjusted from utf8 to utf8mb4."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"global_table")," adjustment index is adjusted from ",(0,r.kt)("inlineCode",{parentName:"li"},"idx_gmt_modified_status")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"idx_status_gmt_modified"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"lock_table")," adds ",(0,r.kt)("inlineCode",{parentName:"li"},"status")," field, and adds ",(0,r.kt)("inlineCode",{parentName:"li"},"idx_status"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"idx_xid_and_branch_id")," index."),(0,r.kt)("li",{parentName:"ul"},"Add ",(0,r.kt)("inlineCode",{parentName:"li"},"distributed_lock")," table for seata-server asynchronous task scheduling.\nBefore upgrading to 1.5.0, please pay attention to the table structure changes. For details on the table structure, please ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/tree/1.5.0/script/server/db"},"click here"),".")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"TCC transaction mode adds anti-hanging function in 1.5.0. If you need to enable anti-hanging by Seata framework, you need to add ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/seata/seata/tree/1.5.0/script/client/tcc/db"},"this table")," to the client business library in advance. ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The first-stage method of TCC mode has been optimized. It is no longer necessary to define ",(0,r.kt)("inlineCode",{parentName:"p"},"BusinessActionContext")," as an interface parameter in the first stage. If ",(0,r.kt)("inlineCode",{parentName:"p"},"BusinessActionContext")," needs to be used in the first stage, it can be obtained through ",(0,r.kt)("inlineCode",{parentName:"p"},"BusinessActionContextUtil.getContext()"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The internal structure of the redis registration center has been adjusted and is no longer backward compatible. If you use redis as the registration center of seata, please also upgrade both seata-all (seata-spring-boot-starter) and seata-server that the client depends on.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The transaction group configuration supports default values. In order to avoid ambiguity and reduce learning costs, the default transaction group is changed from ",(0,r.kt)("inlineCode",{parentName:"p"},"my_test_tx_group")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"default_tx_group"),". It will be backward compatible in version 1.5.X.")))))}c.isMDXComponent=!0}}]);