"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[16803],{12848:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var s=n(74848),a=n(28453);const i={title:"What Is Seata?",keywords:["Seata"],description:"Seata is an open source distributed transaction solution dedicated to providing high performance and easy to use distributed transaction services. Seata will provide users with AT, TCC, SAGA, and XA transaction models to create a one-stop distributed solution for users."},l="What Is Seata?",r={id:"overview/what-is-seata",title:"What Is Seata?",description:"Seata is an open source distributed transaction solution dedicated to providing high performance and easy to use distributed transaction services. Seata will provide users with AT, TCC, SAGA, and XA transaction models to create a one-stop distributed solution for users.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-v2.2/overview/what-is-seata.md",sourceDirName:"overview",slug:"/overview/what-is-seata",permalink:"/docs/overview/what-is-seata",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/en/docusaurus-plugin-content-docs/version-v2.2/overview/what-is-seata.md",tags:[],version:"v2.2",frontMatter:{title:"What Is Seata?",keywords:["Seata"],description:"Seata is an open source distributed transaction solution dedicated to providing high performance and easy to use distributed transaction services. Seata will provide users with AT, TCC, SAGA, and XA transaction models to create a one-stop distributed solution for users."},sidebar:"docs",next:{title:"History",permalink:"/docs/overview/history"}},o={},c=[{value:"Prerequisite",id:"prerequisite",level:2},{value:"Overall mechanism",id:"overall-mechanism",level:2},{value:"Phase 1",id:"phase-1",level:2},{value:"Phase 2 - Rollback case",id:"phase-2---rollback-case",level:2},{value:"Phase 2 - Commit case",id:"phase-2---commit-case",level:2},{value:"Undo log table",id:"undo-log-table",level:2},{value:"Applicable scene:",id:"applicable-scene",level:2},{value:"Advantage:",id:"advantage",level:2},{value:"Disadvantages:",id:"disadvantages",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"what-is-seata",children:"What Is Seata?"}),"\n",(0,s.jsx)(t.p,{children:"Seata is an open source distributed transaction solution dedicated to providing high performance and easy to use distributed transaction services. Seata will provide users with AT, TCC, SAGA, and XA transaction models to create a one-stop distributed solution for users."}),"\n",(0,s.jsx)(t.h1,{id:"at-mode",children:"AT Mode"}),"\n",(0,s.jsx)(t.h2,{id:"prerequisite",children:"Prerequisite"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Relational databases that support local ACID transaction."}),"\n",(0,s.jsx)(t.li,{children:"Java applications that access database via JDBC."}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"overall-mechanism",children:"Overall mechanism"}),"\n",(0,s.jsx)(t.p,{children:"Evolution from the two phases commit protocol:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Phase 1\uff1acommit business data and rollback log in the same local transaction, then release local lock and connection resources."}),"\n",(0,s.jsxs)(t.li,{children:["Phase 2\uff1a","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"for commit case, do the work asynchronously and quickly."}),"\n",(0,s.jsx)(t.li,{children:"for rollback case, do compensation, base on the rollback log created in the phase 1."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h1,{id:"write-isolation",children:"Write isolation"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["The ",(0,s.jsx)(t.strong,{children:"global lock"})," must be acquired before committing the local transaction of phase 1."]}),"\n",(0,s.jsxs)(t.li,{children:["If the ",(0,s.jsx)(t.strong,{children:"global lock"})," is not acquired, the local transaction should not be committed."]}),"\n",(0,s.jsxs)(t.li,{children:["One transaction will try to acquire the ",(0,s.jsx)(t.strong,{children:"global lock"})," many times if it fails to, but there is a timeout, if it's timeout, rollback local transaction and release local lock as well."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"For example:"}),"\n",(0,s.jsx)(t.p,{children:"Two transactions tx1 and tx2 are trying to update field m of table a. The original value of m is 1000."}),"\n",(0,s.jsxs)(t.p,{children:["tx1 starts first, begins a local transaction, acquires the local lock, do the update operation: m = 1000 - 100 = 900. tx1 must acquire the ",(0,s.jsx)(t.strong,{children:"global lock"})," before committing the local transaction, after that, commit local transaction and release local lock."]}),"\n",(0,s.jsxs)(t.p,{children:["next, tx2 begins local transaction, acquires local lock, do the update operation: m = 900 - 100 = 800. Before tx2 can commit local transaction, it must acquire the ",(0,s.jsx)(t.strong,{children:"global lock"}),", but the ",(0,s.jsx)(t.strong,{children:"global lock"})," may be hold by tx1, so tx2 will do retry. After tx1 does the global commit and releases the ",(0,s.jsx)(t.strong,{children:"global lock"}),", tx2 can acquire the ",(0,s.jsx)(t.strong,{children:"global lock"}),", then it can commit local transaction and release local lock."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://img.alicdn.com/tfs/TB1zaknwVY7gK0jSZKzXXaikpXa-702-521.png",alt:"Write-Isolation: Commit"})}),"\n",(0,s.jsxs)(t.p,{children:["See the figure above, tx1 does the global commit in phase 2 and release the ",(0,s.jsx)(t.strong,{children:"global lock"}),", tx2 acquires the ",(0,s.jsx)(t.strong,{children:"global lock"})," and commits local transaction."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://img.alicdn.com/tfs/TB1xW0UwubviK0jSZFNXXaApXXa-718-521.png",alt:"Write-Isolation: Rollback"})}),"\n",(0,s.jsx)(t.p,{children:"See the figure above, if tx1 wants to do the global rollback, it must acquire local lock to revert the update operation of phase 1."}),"\n",(0,s.jsxs)(t.p,{children:["However, now the local lock is held by tx2 which hopes to acquire the ",(0,s.jsx)(t.strong,{children:"global lock"}),", so tx1 fails to rollback, but it would try it many times until it's timeout for tx2 to acquire the ",(0,s.jsx)(t.strong,{children:"global lock"}),", then tx2 rollbacks local transaction and releases local lock, after that, tx1 can acquire the local lock, and do the branch rollback successfully."]}),"\n",(0,s.jsxs)(t.p,{children:["Because the ",(0,s.jsx)(t.strong,{children:"global lock"})," is held by tx1 during the whole process, there isn't no problem of ",(0,s.jsx)(t.strong,{children:"dirty write"}),"."]}),"\n",(0,s.jsx)(t.h1,{id:"read-isolation",children:"Read isolation"}),"\n",(0,s.jsxs)(t.p,{children:["The isolation level of local database is ",(0,s.jsx)(t.strong,{children:"read committed"})," or above, so the default isolation level of the global transaction is ",(0,s.jsx)(t.strong,{children:"read uncommitted"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["If it needs the isolation level of the global transaction is ",(0,s.jsx)(t.strong,{children:"read committed"}),", currently, Seata implements it via SELECT FOR UPDATE statement."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://img.alicdn.com/tfs/TB138wuwYj1gK0jSZFuXXcrHpXa-724-521.png",alt:"Read Isolation: SELECT FOR UPDATE"})}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.strong,{children:"global lock"})," is be applied during the execution of SELECT FOR UPDATE statement, if the ",(0,s.jsx)(t.strong,{children:"global lock"})," is held by other transactions, the transaction will release local lock retry execute the SELECT FOR UPDATE statement. During the whole process, the query is blocked until the ",(0,s.jsx)(t.strong,{children:"global lock"})," is acquired, if the lock is acquired, it means the other global transaction has committed, so the isolation level of global transaction is ",(0,s.jsx)(t.strong,{children:"read committed"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"For the performance consideration, Seata only does proxy work for SELECT FOR UPDATE. For the general SELECT statement, do nothing."}),"\n",(0,s.jsx)(t.h1,{id:"work-process",children:"Work process"}),"\n",(0,s.jsx)(t.p,{children:"Take an example to illustrate it."}),"\n",(0,s.jsxs)(t.p,{children:["A business table:",(0,s.jsx)(t.code,{children:"product"})]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Key"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"id"}),(0,s.jsx)(t.td,{children:"bigint(20)"}),(0,s.jsx)(t.td,{children:"PRI"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"name"}),(0,s.jsx)(t.td,{children:"varchar(100)"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"since"}),(0,s.jsx)(t.td,{children:"varchar(100)"}),(0,s.jsx)(t.td,{})]})]})]}),"\n",(0,s.jsx)(t.p,{children:"The sql of branch transaction in AT mode:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"update product set name = 'GTS' where name = 'TXC';\n"})}),"\n",(0,s.jsx)(t.h2,{id:"phase-1",children:"Phase 1"}),"\n",(0,s.jsx)(t.p,{children:"Process:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Parse sql:  know the sql type is update operation, table name is product, the where condition is name = 'TXC' and so on."}),"\n",(0,s.jsx)(t.li,{children:"Query the data before update(Named before image): In order to  locate the data that will be updated, generate a query statement by the where condition above."}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"select id, name, since from product where name = 'TXC';\n"})}),"\n",(0,s.jsx)(t.p,{children:'Got the "before image"\uff1a'}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"id"}),(0,s.jsx)(t.th,{children:"name"}),(0,s.jsx)(t.th,{children:"since"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"1"}),(0,s.jsx)(t.td,{children:"TXC"}),(0,s.jsx)(t.td,{children:"2014"})]})})]}),"\n",(0,s.jsxs)(t.ol,{start:"3",children:["\n",(0,s.jsx)(t.li,{children:"Execute the update sql: update the record of name equals 'GTS'."}),"\n",(0,s.jsxs)(t.li,{children:["Query the data after update(Named after image): locate the record by the ",(0,s.jsx)(t.strong,{children:"primary key"})," of image data before update."]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"select id, name, since from product where id = 1;\n"})}),"\n",(0,s.jsx)(t.p,{children:"Got the after image:"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"id"}),(0,s.jsx)(t.th,{children:"name"}),(0,s.jsx)(t.th,{children:"since"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"1"}),(0,s.jsx)(t.td,{children:"GTS"}),(0,s.jsx)(t.td,{children:"2014"})]})})]}),"\n",(0,s.jsxs)(t.ol,{start:"5",children:["\n",(0,s.jsxs)(t.li,{children:["Insert a rollback log: build the rollback log with image before and after, as well as SQL statement relelated information, then insert into table ",(0,s.jsx)(t.code,{children:"UNDO_LOG"})," ."]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n\t"branchId": 641789253,\n\t"undoItems": [{\n\t\t"afterImage": {\n\t\t\t"rows": [{\n\t\t\t\t"fields": [{\n\t\t\t\t\t"name": "id",\n\t\t\t\t\t"type": 4,\n\t\t\t\t\t"value": 1\n\t\t\t\t}, {\n\t\t\t\t\t"name": "name",\n\t\t\t\t\t"type": 12,\n\t\t\t\t\t"value": "GTS"\n\t\t\t\t}, {\n\t\t\t\t\t"name": "since",\n\t\t\t\t\t"type": 12,\n\t\t\t\t\t"value": "2014"\n\t\t\t\t}]\n\t\t\t}],\n\t\t\t"tableName": "product"\n\t\t},\n\t\t"beforeImage": {\n\t\t\t"rows": [{\n\t\t\t\t"fields": [{\n\t\t\t\t\t"name": "id",\n\t\t\t\t\t"type": 4,\n\t\t\t\t\t"value": 1\n\t\t\t\t}, {\n\t\t\t\t\t"name": "name",\n\t\t\t\t\t"type": 12,\n\t\t\t\t\t"value": "TXC"\n\t\t\t\t}, {\n\t\t\t\t\t"name": "since",\n\t\t\t\t\t"type": 12,\n\t\t\t\t\t"value": "2014"\n\t\t\t\t}]\n\t\t\t}],\n\t\t\t"tableName": "product"\n\t\t},\n\t\t"sqlType": "UPDATE"\n\t}],\n\t"xid": "xid:xxx"\n}\n'})}),"\n",(0,s.jsxs)(t.ol,{start:"6",children:["\n",(0,s.jsxs)(t.li,{children:["Before local commit, the transaction submit an application to TC to acquire a ",(0,s.jsx)(t.strong,{children:"global lock"})," for the record whose primary key equals 1 in the table product."]}),"\n",(0,s.jsx)(t.li,{children:"Commit local transaction: commit the update of PRODUCT table and the insert of UNDO_LOG table in the same local transaction."}),"\n",(0,s.jsx)(t.li,{children:"Report the result of step 7 to TC."}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"phase-2---rollback-case",children:"Phase 2 - Rollback case"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"After receive the rollback request from TC, begin a local transaction, execute operation as following."}),"\n",(0,s.jsx)(t.li,{children:"Retrieve the UNDO LOG by XID and Branch ID."}),"\n",(0,s.jsx)(t.li,{children:"Validate data: Compare the image data after update in UNDO LOG with current data, if there is difference, it means the data has been changed by operation out of current transaction, it should be handled in different policy, we will describe it detailedly in other document."}),"\n",(0,s.jsx)(t.li,{children:"Generate rollback SQL statement base on before image in UNDO LOG and related information of the business SQL."}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"update product set name = 'TXC' where id = 1;\n"})}),"\n",(0,s.jsxs)(t.ol,{start:"5",children:["\n",(0,s.jsx)(t.li,{children:"Commit local transaction, report the result of execution of local transaction(The rollback result of the Branch transaction) to TC."}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"phase-2---commit-case",children:"Phase 2 - Commit case"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"After receive the commit request from TC, put the request into a work queue, return success to TC immediately."}),"\n",(0,s.jsx)(t.li,{children:"During the phase of doing the asynchronous work in the queue, the UNDO LOGs are deleted in batch way."}),"\n"]}),"\n",(0,s.jsx)(t.h1,{id:"appendix",children:"Appendix"}),"\n",(0,s.jsx)(t.h2,{id:"undo-log-table",children:"Undo log table"}),"\n",(0,s.jsx)(t.p,{children:"UNDO_LOG Table\uff1athere is a little bit difference on the data type for different databases."}),"\n",(0,s.jsx)(t.p,{children:"For MySQL example:"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Type"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"branch_id"}),(0,s.jsx)(t.td,{children:"bigint     PK"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"xid"}),(0,s.jsx)(t.td,{children:"varchar(100)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"context"}),(0,s.jsx)(t.td,{children:"varchar(128)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"rollback_info"}),(0,s.jsx)(t.td,{children:"longblob"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"log_status"}),(0,s.jsx)(t.td,{children:"tinyint"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"log_created"}),(0,s.jsx)(t.td,{children:"datetime"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"log_modified"}),(0,s.jsx)(t.td,{children:"datetime"})]})]})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"-- Note that 0.7.0+ adds the field context\nCREATE TABLE `undo_log` (\n  `id` bigint(20) NOT NULL AUTO_INCREMENT,\n  `branch_id` bigint(20) NOT NULL,\n  `xid` varchar(100) NOT NULL,\n  `context` varchar(128) NOT NULL,\n  `rollback_info` longblob NOT NULL,\n  `log_status` int(11) NOT NULL,\n  `log_created` datetime NOT NULL,\n  `log_modified` datetime NOT NULL,\n  PRIMARY KEY (`id`),\n  UNIQUE KEY `ux_undo_log` (`xid`,`branch_id`)\n) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;\n"})}),"\n",(0,s.jsx)(t.h1,{id:"tcc-mode",children:"TCC Mode"}),"\n",(0,s.jsxs)(t.p,{children:["Review the description in the overview: A distributed global transaction, the whole is a ",(0,s.jsx)(t.strong,{children:"two-phase commit"})," model. The global transaction is composed of several branch transactions. The branch transaction must meet the requirements of the ",(0,s.jsx)(t.strong,{children:"two-phase commit"})," model, that is, each branch transaction must have its own:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"One-stage prepare behavior"}),"\n",(0,s.jsx)(t.li,{children:"Two-phase commit or rollback behavior"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://img.alicdn.com/tfs/TB14Kguw1H2gK0jSZJnXXaT1FXa-853-482.png",alt:"Overview of a global transaction"})}),"\n",(0,s.jsxs)(t.p,{children:["According to the two-phase behavior mode, we divide branch transactions into ",(0,s.jsx)(t.strong,{children:"Automatic (Branch) Transaction Mode"})," and ",(0,s.jsx)(t.strong,{children:"TCC (Branch) Transaction Mode"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["The AT mode is based on a ",(0,s.jsx)(t.strong,{children:"relational database"})," that ",(0,s.jsx)(t.strong,{children:"supports local ACID transactions"}),":"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"One-stage prepare behavior: In local transactions, business data updates and corresponding rollback log records are submitted together."}),"\n",(0,s.jsxs)(t.li,{children:["Two-phase commit behavior: Immediately completed successfully, ",(0,s.jsx)(t.strong,{children:"automatically"})," asynchronously clean up the rollback log."]}),"\n",(0,s.jsxs)(t.li,{children:["Two-phase rollback behavior: Through the rollback log, ",(0,s.jsx)(t.strong,{children:"automatically"})," generates compensation operations to complete data rollback."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Correspondingly, the TCC mode does not rely on transaction support of the underlying data resources:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["One-stage prepare behavior: Call the ",(0,s.jsx)(t.strong,{children:"custom"})," prepare logic."]}),"\n",(0,s.jsxs)(t.li,{children:["Two-phase commit behavior: Call ",(0,s.jsx)(t.strong,{children:"custom"})," commit logic."]}),"\n",(0,s.jsxs)(t.li,{children:["Two-phase rollback behavior: Call the ",(0,s.jsx)(t.strong,{children:"custom"})," rollback logic."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["The so-called TCC mode refers to the support of ",(0,s.jsx)(t.strong,{children:"customized's"})," branch transactions into the management of global transactions."]}),"\n",(0,s.jsx)(t.h1,{id:"saga-mode",children:"Saga Mode"}),"\n",(0,s.jsx)(t.p,{children:"The Saga model is a long transaction solution provided by SEATA. In the Saga model, each participant in the business process submits a local transaction. When a participant fails, the previous successful participant is compensated. One stage is positive serving and The two-stage compensation services are implemented by business development."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://img.alicdn.com/tfs/TB1Y2kuw7T2gK0jSZFkXXcIQFXa-445-444.png",alt:"Saga mode diagram"})}),"\n",(0,s.jsx)(t.p,{children:"Theoretical basis: Hector & Kenneth Post a comment Sagas \uff081987\uff09"}),"\n",(0,s.jsx)(t.h2,{id:"applicable-scene",children:"Applicable scene:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Long business processes, many business processes"}),"\n",(0,s.jsx)(t.li,{children:"Participants include other company or legacy system services and cannot provide the three interfaces required by the TCC model"}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"advantage",children:"Advantage:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Commit local transactions in one phase, lock-free, high performance"}),"\n",(0,s.jsx)(t.li,{children:"Event-driven architecture, participants can execute asynchronously, high throughput"}),"\n",(0,s.jsx)(t.li,{children:"Compensation services are easy to implement"}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"disadvantages",children:"Disadvantages:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Isolation is not guaranteed see ",(0,s.jsx)(t.a,{href:"/docs/user/mode/saga",children:"User Documentation"})]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>r});var s=n(96540);const a={},i=s.createContext(a);function l(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);