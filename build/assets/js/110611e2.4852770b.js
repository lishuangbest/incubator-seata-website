"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[93816],{91737:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var n=o(74848),s=o(28453);const a={title:"Seata TCC Mode",keywords:["Seata","TCC Mode"],description:"Seata TCC mode."},r="Seata TCC Mode",i={id:"dev/mode/tcc-mode",title:"Seata TCC Mode",description:"Seata TCC mode.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-v2.1/dev/mode/tcc-mode.md",sourceDirName:"dev/mode",slug:"/dev/mode/tcc-mode",permalink:"/docs/v2.1/dev/mode/tcc-mode",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/en/docusaurus-plugin-content-docs/version-v2.1/dev/mode/tcc-mode.md",tags:[],version:"v2.1",frontMatter:{title:"Seata TCC Mode",keywords:["Seata","TCC Mode"],description:"Seata TCC mode."},sidebar:"docs",previous:{title:"Seata AT Mode",permalink:"/docs/v2.1/dev/mode/at-mode"},next:{title:"Seata Saga Mode",permalink:"/docs/v2.1/dev/mode/saga-mode"}},c={},d=[];function l(e){const t={h1:"h1",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"seata-tcc-mode",children:"Seata TCC Mode"}),"\n",(0,n.jsxs)(t.p,{children:["Review the description in the overview: A distributed global transaction, the whole is a ",(0,n.jsx)(t.strong,{children:"two-phase commit"})," model. The global transaction is composed of several branch transactions. The branch transaction must meet the requirements of the ",(0,n.jsx)(t.strong,{children:"two-phase commit"})," model, that is, each branch transaction must have its own:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"One-stage prepare behavior"}),"\n",(0,n.jsx)(t.li,{children:"Two-phase commit or rollback behavior"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Overview of a global transaction",src:o(95308).A+"",width:"853",height:"482"})}),"\n",(0,n.jsxs)(t.p,{children:["According to the two-phase behavior mode, we divide branch transactions into ",(0,n.jsx)(t.strong,{children:"Automatic (Branch) Transaction Mode"})," and ",(0,n.jsx)(t.strong,{children:"TCC (Branch) Transaction Mode"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["The AT mode is based on a ",(0,n.jsx)(t.strong,{children:"relational database"})," that ",(0,n.jsx)(t.strong,{children:"supports local ACID transactions"}),":"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"One-stage prepare behavior: In local transactions, business data updates and corresponding rollback log records are submitted together."}),"\n",(0,n.jsxs)(t.li,{children:["Two-phase commit behavior: Immediately completed successfully, ",(0,n.jsx)(t.strong,{children:"automatically"})," asynchronously clean up the rollback log."]}),"\n",(0,n.jsxs)(t.li,{children:["Two-phase rollback behavior: Through the rollback log, ",(0,n.jsx)(t.strong,{children:"automatically"})," generates compensation operations to complete data rollback."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Correspondingly, the TCC mode does not rely on transaction support of the underlying data resources:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["One-stage prepare behavior: Call the ",(0,n.jsx)(t.strong,{children:"custom"})," prepare logic."]}),"\n",(0,n.jsxs)(t.li,{children:["Two-phase commit behavior: Call ",(0,n.jsx)(t.strong,{children:"custom"})," commit logic."]}),"\n",(0,n.jsxs)(t.li,{children:["Two-phase rollback behavior: Call the ",(0,n.jsx)(t.strong,{children:"custom"})," rollback logic."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["The so-called TCC mode refers to the support of putting ",(0,n.jsx)(t.strong,{children:"customized's"})," branch transactions into the management of global transactions."]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},95308:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/seata_tcc-1-1f7a834639aa755d73fa2af435c4f042.png"},28453:(e,t,o)=>{o.d(t,{R:()=>r,x:()=>i});var n=o(96540);const s={},a=n.createContext(s);function r(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);