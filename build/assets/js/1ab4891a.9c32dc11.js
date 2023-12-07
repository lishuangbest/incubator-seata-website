"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[11673],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),m=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=m(r),f=a,u=d["".concat(p,".").concat(f)]||d[f]||s[f]||l;return r?n.createElement(u,o(o({ref:t},c),{},{components:r})):n.createElement(u,o({ref:t},c))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:a,o[1]=i;for(var m=2;m<l;m++)o[m]=r[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},86770:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var n=r(87462),a=(r(67294),r(3905));const l={title:"DML",keywords:["Seata"],description:"Seata DML"},o="DML",i={unversionedId:"user/sqlreference/dml",id:"version-v1.2/user/sqlreference/dml",title:"DML",description:"Seata DML",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-v1.2/user/sqlreference/dml.md",sourceDirName:"user/sqlreference",slug:"/user/sqlreference/dml",permalink:"/docs/v1.2/user/sqlreference/dml",draft:!1,tags:[],version:"v1.2",frontMatter:{title:"DML",keywords:["Seata"],description:"Seata DML"},sidebar:"docs",previous:{title:"SQL Restrictions",permalink:"/docs/v1.2/user/sqlreference/sql-restrictions"},next:{title:"SQL Decoration",permalink:"/docs/v1.2/user/sqlreference/sql-decoration"}},p={},m=[],c={toc:m},d="wrapper";function s(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"dml"},"DML"),(0,a.kt)("p",null,"This article introduces the types of DML statements, SQL instances, and whether Seata supports them, helping you to use SQL more smoothly in Seata."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Type","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"),(0,a.kt)("th",{parentName:"tr",align:"left"},"SQL Examples"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Support","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"INSERT"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"INSERT INTO tb1_name (col_name,...) VALUES ({expr \\| FAULT},...),(...),...")," or ",(0,a.kt)("inlineCode",{parentName:"td"},"INSERT INTO tb1_name SET col_name={expr \\| DEFAULT}, ...")," or ",(0,a.kt)("inlineCode",{parentName:"td"},"INSERT INTO tb1_name (col_name,...) VALUES ({expr \\| FAULT},...) ON DUPLICATE KEY UPDATE field1=value1,...;")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"UPDATE"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"UPDATE tb1_name SET col_name1=expr1 [, col_name2=expr2 ...][WHERE where_definition]")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"DELETE"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"DELETE FROM tb1_name [WHERE where_definition]")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"SELECT"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"SELECT [ALL \\| DISTINCT \\| DISTINCTROW ]select_expr, ... FROM tb1_name[WHERE where_definition]")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"REPLACE"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"REPLACE [LOW_PRIORITY \\| DELAYED][INTO] tb1_name [(col_name,...)]VALUES ({expr \\| DEFAULT},...),(...),...")," or ",(0,a.kt)("inlineCode",{parentName:"td"},"REPLACE [LOW_PRIORITY \\| DELAYED][INTO] tb1_nameSET col_name={expr \\| DEFAULT}, ...")),(0,a.kt)("td",{parentName:"tr",align:"left"},"No")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"TRUNCATE"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"TRUNCATE [TABLE] tb1_name")),(0,a.kt)("td",{parentName:"tr",align:"left"},"No")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"UPDATE JOIN"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"UPDATE tb1_name tb1 JOIN tb2_name tb2 ON tb2.col_name=tb1.col_name SET tb1.col_name1=expr1 [, tb1.col_name2=expr2 ...][ [WHERE where_definition]")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Yes,since 1.6.0")))))}s.isMDXComponent=!0}}]);