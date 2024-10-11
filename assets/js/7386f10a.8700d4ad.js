"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[84149],{55896:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>r,contentTitle:()=>d,default:()=>a,frontMatter:()=>c,metadata:()=>i,toc:()=>o});var n=l(74848),s=l(28453);const c={title:"SQL Decoration",keywords:["Seata"],description:"Seata SQL Decoration"},d="SQL Decoration",i={id:"user/sqlreference/sql-decoration",title:"SQL Decoration",description:"Seata SQL Decoration",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-v2.1/user/sqlreference/sql-decoration.md",sourceDirName:"user/sqlreference",slug:"/user/sqlreference/sql-decoration",permalink:"/docs/v2.1/user/sqlreference/sql-decoration",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/en/docusaurus-plugin-content-docs/version-v2.1/user/sqlreference/sql-decoration.md",tags:[],version:"v2.1",frontMatter:{title:"SQL Decoration",keywords:["Seata"],description:"Seata SQL Decoration"},sidebar:"docs",previous:{title:"DML",permalink:"/docs/v2.1/user/sqlreference/dml"},next:{title:"Functions",permalink:"/docs/v2.1/user/sqlreference/function"}},r={},o=[{value:"DML Statement Support",id:"dml-statement-support",level:3},{value:"Select Statement Support",id:"select-statement-support",level:3}];function x(e){const t={code:"code",h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"sql-decoration",children:"SQL Decoration"}),"\n",(0,n.jsx)(t.p,{children:"Seata's isolation level defaults to read uncommitted. In this mode, the SQL decoration usage of select statements in this article table is supported. Using for update proxy can make Seata achieve read committed. In this mode, the usage of select statements can only be partially supported."}),"\n",(0,n.jsx)(t.h3,{id:"dml-statement-support",children:"DML Statement Support"}),"\n",(0,n.jsxs)(t.p,{children:["| Type         | SQL Example                                           | Supported or not                                                       |\n| :----------- | :---------------------------------------------------- | :--------------------------------------------------------------------- | --- |\n| AND & OR     | ",(0,n.jsx)(t.code,{children:"UPDATE \u2026 WHERE col_name1=expr1 AND col_name2= expr2"})," | Yes                                                                    |\n| LIKE         | ",(0,n.jsx)(t.code,{children:"UPDATE ... WHERE col_name1 LIKE 'NE'"}),"                | Yes                                                                    |\n| Wildcard     | ",(0,n.jsx)(t.code,{children:"UPDATE ... WHERE col_name1 LIKE 'NE%'"}),"               | Yes                                                                    |\n| BETWEEN      | ",(0,n.jsx)(t.code,{children:"UPDATE ... WHERE col_name1 BETWEEN expr1 AND expr2"}),"  | Yes                                                                    |\n| ON DUPLICATE | ",(0,n.jsx)(t.code,{children:"INSERT INTO tb1_name [(col_name,...)]VALUES (\\{expr  | DEFAULT},...),(...),...[ ON DUPLICATE KEY UPDATE col_name=expr, ... ]"})," | Yes |"]}),"\n",(0,n.jsx)(t.h3,{id:"select-statement-support",children:"Select Statement Support"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"SQL Example"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Read Uncommitted"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Read Committed"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"AND & OR"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"SELECT * FROM tb1_name WHERE col_name1=expr1 AND col_name2= expr2"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Yes"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"ORDER BY"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"SELECT col_name1, col_name2 FROM tb1_name ORDER BY col_name1"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Yes"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"GROUP BY"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"SELECT col_name1, col_name2 FROM tb1_name GROUP BY col_name1"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Yes"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"LIKE"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"SELECT col_name1, col_name2 FROM tb1_name WHERE col_name1 LIKE 'NE'"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Yes"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Wildcards"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"SELECT col_name1, col_name2 FROM tb1_name WHERE col_name1 LIKE 'NE%'"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Yes"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"EXISTS"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"SELECT col_name1, col_name2 FROM tb1_name WHERE EXISTS (expr1)"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Yes"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"IN"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"SELECT col_name1, col_name2 FROM tb1_name WHERE col_name1 IN (expr1, expr2,...)"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Yes"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"BETWEEN"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"SELECT col_name1, col_name2 FROM tb1_name WHERE col_name1 BETWEEN expr1 AND expr2"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Yes"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"ON DUPLICATE"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"INSERT INTO tb1_name [(col_name,...)]VALUES ({expr | DEFAULT},...),(...),...[ ON DUPLICATE KEY UPDATE col_name=expr, ... ]"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Yes"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"ALIASES"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"SELECT t1. col_name1, t2.col_name2 FROM tb1_name AS t1, tb2_name AS t2 WHERE t1. col_name=expr AND t2. col_name=expr"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Yes"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"TOP"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"SELECT TOP 2 * FROM tb1_name"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Yes"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"LIMIT"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"SELECT col_name1, col_name2 FROM tb1_name LIMIT 5"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Yes"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"JOININNER JOINLEFT JOINRIGHT JOINFULL JOIN"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"SELECT col_name1, col_name2 FROM tb1_name JOIN tb2_name>ON tb1_name. col_name1= tb2_name. col_name1"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Yes"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"No"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"UNIONUNION ALLSELECT INTO"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"SELECT col_name1, col_name2 FROM tb1_name UNION SELECT col_name1, col_name2 FROM tb2_name"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Yes"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"No"})]})]})]})]})}function a(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},28453:(e,t,l)=>{l.d(t,{R:()=>d,x:()=>i});var n=l(96540);const s={},c=n.createContext(s);function d(e){const t=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),n.createElement(c.Provider,{value:t},e.children)}}}]);