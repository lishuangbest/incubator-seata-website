"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[47864],{7427:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var a=n(74848),s=n(28453);const i={title:"Global Transaction Status",keywords:["Seata","Transaction Status"],description:"Global Transaction Status, Branch Transaction Status"},l="Global Transaction Status Table",r={id:"user/appendix/global-transaction-status",title:"Global Transaction Status",description:"Global Transaction Status, Branch Transaction Status",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-v2.2/user/appendix/global-transaction-status.md",sourceDirName:"user/appendix",slug:"/user/appendix/global-transaction-status",permalink:"/docs/user/appendix/global-transaction-status",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/en/docusaurus-plugin-content-docs/version-v2.2/user/appendix/global-transaction-status.md",tags:[],version:"v2.2",frontMatter:{title:"Global Transaction Status",keywords:["Seata","Transaction Status"],description:"Global Transaction Status, Branch Transaction Status"},sidebar:"docs",previous:{title:"Performance Testing Report",permalink:"/docs/user/performance"},next:{title:"Transaction Isolation",permalink:"/docs/user/appendix/isolation"}},o={},c=[];function d(t){const e={h1:"h1",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...t.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"global-transaction-status-table",children:"Global Transaction Status Table"}),"\n",(0,a.jsx)(e.p,{children:"Taking the db mode as an example, global_table is the global transaction table of Seata. You can determine which state the global transaction is in by observing the status field in the global_table."}),"\n",(0,a.jsxs)(e.table,{children:[(0,a.jsx)(e.thead,{children:(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.th,{children:"Status"}),(0,a.jsx)(e.th,{children:"Code"}),(0,a.jsx)(e.th,{children:"Remark"})]})}),(0,a.jsxs)(e.tbody,{children:[(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"Global transaction begins (Begin)"}),(0,a.jsx)(e.td,{children:"1"}),(0,a.jsx)(e.td,{children:"This status can accept new branch transaction registration"})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"Global transaction committing (Committing)"}),(0,a.jsx)(e.td,{children:"2"}),(0,a.jsx)(e.td,{children:"This status can change at any time"})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"Global transaction commit retry (CommitRetry)"}),(0,a.jsx)(e.td,{children:"3"}),(0,a.jsx)(e.td,{children:"Retry commit after resolving commit exceptions"})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"Global transaction rolling back (Rollbacking)"}),(0,a.jsx)(e.td,{children:"4"}),(0,a.jsx)(e.td,{children:"Rolling back global transaction in progress"})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"Global transaction rollback retrying (RollbackRetry)"}),(0,a.jsx)(e.td,{children:"5"}),(0,a.jsx)(e.td,{children:"Retry transaction rollback after resolving global rollback exceptions"})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"Global transaction timeout rollbacking (TimoutRollbacking)"}),(0,a.jsx)(e.td,{children:"6"}),(0,a.jsx)(e.td,{children:(0,a.jsx)("a",{href:"#TimeoutRollbacking_description",target:"_self",children:"Global transaction timeout rollbacking"})})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"Global transaction timeout rollback retrying (TimeoutRollbackRetrying)"}),(0,a.jsx)(e.td,{children:"7"}),(0,a.jsx)(e.td,{children:"Global transaction timeout rollback retrying"})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"Asynchronous committing (AsyncCommitting)"}),(0,a.jsx)(e.td,{children:"8"}),(0,a.jsx)(e.td,{children:"Asynchronous commit"})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"Two-phase committed (Committed)"}),(0,a.jsx)(e.td,{children:"9"}),(0,a.jsx)(e.td,{children:"Two-phase committed, the global transaction status will not change after this state"})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"Two-phase commit failed (CommitFailed)"}),(0,a.jsx)(e.td,{children:"10"}),(0,a.jsx)(e.td,{children:"Two-phase commit failed"})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"Two-phase global rollback (Rollbacked)"}),(0,a.jsx)(e.td,{children:"11"}),(0,a.jsx)(e.td,{children:"Two-phase global rollback"})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"Two-phase global rollback failed (RollbackFailed)"}),(0,a.jsx)(e.td,{children:"12"}),(0,a.jsx)(e.td,{children:"Two-phase global rollback failed"})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"Two-phase timeout rollback (TimeoutRollbacked)"}),(0,a.jsx)(e.td,{children:"13"}),(0,a.jsx)(e.td,{children:"Two-phase timeout rollback"})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"Two-phase timeout rollback failed (TimeoutRollbackFailed)"}),(0,a.jsx)(e.td,{children:"14"}),(0,a.jsx)(e.td,{children:"Two-phase timeout rollback failed"})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"Global transaction finished (Finished)"}),(0,a.jsx)(e.td,{children:"15"}),(0,a.jsx)(e.td,{children:"Global transaction finished"})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"Two-phase commit retry timeout (CommitRetryTimeout)"}),(0,a.jsx)(e.td,{children:"16"}),(0,a.jsx)(e.td,{children:"Two-phase commit failed due to exceeding retry time limit"})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"Two-phase rollback retry timeout (RollbackRetryTimeout)"}),(0,a.jsx)(e.td,{children:"17"}),(0,a.jsx)(e.td,{children:"Two-phase rollback failed due to exceeding retry time limit"})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"Unknown status"}),(0,a.jsx)(e.td,{children:"0"}),(0,a.jsx)(e.td,{children:"Unknown status"})]})]})]}),"\n",(0,a.jsx)(e.h1,{id:"branch-transaction-status-table",children:"Branch Transaction Status Table"}),"\n",(0,a.jsxs)(e.table,{children:[(0,a.jsx)(e.thead,{children:(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.th,{children:"Status"}),(0,a.jsx)(e.th,{children:"Code"}),(0,a.jsx)(e.th,{children:"Note"})]})}),(0,a.jsxs)(e.tbody,{children:[(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"Branch Transaction Registered"}),(0,a.jsx)(e.td,{children:"1"}),(0,a.jsx)(e.td,{children:"Register branch transaction with TC (Registered)"})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"Branch Transaction Phase One Done (PhaseOne_Done)"}),(0,a.jsx)(e.td,{children:"2"}),(0,a.jsx)(e.td,{children:"Branch transaction phase one business logic completed"})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"Branch Transaction Phase One Failed (PhaseOne_Failed)"}),(0,a.jsx)(e.td,{children:"3"}),(0,a.jsx)(e.td,{children:"Branch transaction phase one business logic failed"})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"Branch Transaction Phase One Timeout (PhaseOne_Timeout)"}),(0,a.jsx)(e.td,{children:"4"}),(0,a.jsx)(e.td,{children:"Branch transaction phase one processing timed out"})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"Branch Transaction Phase Two Committed (PhaseTwo_Committed)"}),(0,a.jsx)(e.td,{children:"5"}),(0,a.jsx)(e.td,{children:"Branch transaction phase two committed"})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"Branch Transaction Phase Two Commit Failed Retryable (PhaseTwo_CommitFailed_Retryable)"}),(0,a.jsx)(e.td,{children:"6"}),(0,a.jsx)(e.td,{children:"Branch transaction phase two commit failed and retriable"})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"Branch Transaction Phase Two Commit Failed Unretryable (PhaseTwo_CommitFailed_Unretryable)"}),(0,a.jsx)(e.td,{children:"7"}),(0,a.jsx)(e.td,{children:"Branch transaction phase two commit failed and not retriable"})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"Branch Transaction Phase Two Rolled Back (PhaseTwo_Rollbacked)"}),(0,a.jsx)(e.td,{children:"8"}),(0,a.jsx)(e.td,{children:"Branch transaction phase two rolled back"})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"Branch Transaction Phase Two Rollback Failed Retryable (PhaseTwo_RollbackFailed_Retryable)"}),(0,a.jsx)(e.td,{children:"9"}),(0,a.jsx)(e.td,{children:"Branch transaction phase two rollback failed and retriable"})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"Branch Transaction Phase Two Rollback Failed Unretryable (PhaseTwo_RollbackFailed_Unretryable)"}),(0,a.jsx)(e.td,{children:"10"}),(0,a.jsx)(e.td,{children:"Branch transaction phase two rollback failed and not retriable"})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"Unknown Status"}),(0,a.jsx)(e.td,{children:"0"}),(0,a.jsx)(e.td,{children:"Unknown status"})]})]})]}),"\n",(0,a.jsx)(e.p,{children:"For better understanding, below are additional descriptions for individual states:"}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)("h3",{id:"TimeoutRollbacking_description",children:" Global Transaction Timeout Rollbacking (TimeoutRollbacking) "}),"\nHow does it occur?"]}),"\n",(0,a.jsxs)(e.ol,{children:["\n",(0,a.jsx)(e.li,{children:"When a seata global transaction is unable to complete business logic during execution."}),"\n",(0,a.jsxs)(e.li,{children:["A scheduled task in TC (specifically used to find timed out global transactions) discovers that the global transaction has not completed rollback, it will change this global transaction to ",(0,a.jsx)(e.strong,{children:"Global Transaction Timeout Rollbacking (TimeoutRollbacking)"})," and start rollback, until the global_table data is deleted after rollback is completed."]}),"\n"]}),"\n",(0,a.jsx)(e.p,{children:"Recommendation: When you find a global transaction in this state, investigate why the business cannot complete within the specified time. If it is indeed unable to complete, the global transaction timeout should be extended. (If everything is normal, please check if the tc cluster's time zone is consistent with the database. If not, please make it consistent)."})]})}function h(t={}){const{wrapper:e}={...(0,s.R)(),...t.components};return e?(0,a.jsx)(e,{...t,children:(0,a.jsx)(d,{...t})}):d(t)}},28453:(t,e,n)=>{n.d(e,{R:()=>l,x:()=>r});var a=n(96540);const s={},i=a.createContext(s);function l(t){const e=a.useContext(i);return a.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function r(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:l(t.components),a.createElement(i.Provider,{value:e},t.children)}}}]);