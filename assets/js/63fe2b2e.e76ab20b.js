"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[37754],{65233:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var r=t(74848),i=t(28453);const a={title:"Transaction Group and High Availability",keywords:["Seata group"],description:"Seata transaction group and high availability best practice"},s="Transaction Grouping and High Availability",o={id:"user/txgroup/transaction-group-and-ha",title:"Transaction Group and High Availability",description:"Seata transaction group and high availability best practice",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-v2.1/user/txgroup/transaction-group-and-ha.md",sourceDirName:"user/txgroup",slug:"/user/txgroup/transaction-group-and-ha",permalink:"/docs/v2.1/user/txgroup/transaction-group-and-ha",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/en/docusaurus-plugin-content-docs/version-v2.1/user/txgroup/transaction-group-and-ha.md",tags:[],version:"v2.1",frontMatter:{title:"Transaction Group and High Availability",keywords:["Seata group"],description:"Seata transaction group and high availability best practice"},sidebar:"docs",previous:{title:"Transaction Group Introduction",permalink:"/docs/v2.1/user/txgroup/transaction-group"},next:{title:"Introduction",permalink:"/docs/v2.1/user/configuration/"}},c={},l=[{value:"Best Practice 1: TC&#39;s Cross-Data Center Disaster Recovery",id:"best-practice-1-tcs-cross-data-center-disaster-recovery",level:2},{value:"Best Practice 2: Multiple Applications Access in a Single Environment",id:"best-practice-2-multiple-applications-access-in-a-single-environment",level:2},{value:"Best Practice 3: Fine-grained Control of the Client",id:"best-practice-3-fine-grained-control-of-the-client",level:2},{value:"Best Practice 4: Seata&#39;s Pre-production and Production Isolation",id:"best-practice-4-seatas-pre-production-and-production-isolation",level:2}];function p(e){const n={code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"transaction-grouping-and-high-availability",children:"Transaction Grouping and High Availability"}),"\n",(0,r.jsx)(n.h2,{id:"best-practice-1-tcs-cross-data-center-disaster-recovery",children:"Best Practice 1: TC's Cross-Data Center Disaster Recovery"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Assume that the TC cluster is deployed in two data centers: guangzhou (primary) and shanghai (backup), each with two instances."}),"\n",(0,r.jsx)(n.li,{children:"A complete microservices architecture project: projectA."}),"\n",(0,r.jsx)(n.li,{children:"projectA contains microservices: serviceA, serviceB, serviceC, and serviceD."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Among them, the transaction grouping tx-service-group of all microservices in projectA is set to: projectA. Under normal circumstances, projectA uses the TC cluster in guangzhou (primary)."}),"\n",(0,r.jsx)(n.p,{children:"So under normal circumstances, the client-side configuration is as follows:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"seata.tx-service-group=projectA\nseata.service.vgroup-mapping.projectA=Guangzhou\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Cross-Data Center Disaster Recovery Normal Diagram",src:t(73414).A+"",width:"812",height:"453"})}),"\n",(0,r.jsx)(n.p,{children:"If at this time the guangzhou cluster group is completely down or projectA is temporarily unable to communicate with the Guangzhou data center due to network issues, then we can change the Guangzhou cluster group in the configuration center to Shanghai, as follows:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"seata.service.vgroup-mapping.projectA=Shanghai\n"})}),"\n",(0,r.jsx)(n.p,{children:"And push it to each microservice, completing the dynamic switch of the TC cluster for the entire projectA."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Cross-Data Center Disaster Recovery Backup Cluster",src:t(11977).A+"",width:"812",height:"453"})}),"\n",(0,r.jsx)(n.h2,{id:"best-practice-2-multiple-applications-access-in-a-single-environment",children:"Best Practice 2: Multiple Applications Access in a Single Environment"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Assume that there is a complete seata cluster in the development environment (or staging/production)."}),"\n",(0,r.jsx)(n.li,{children:"The seata cluster serves different microservices architecture projects: projectA, projectB, projectC."}),"\n",(0,r.jsx)(n.li,{children:"projectA, projectB, and projectC are relatively independent of each other."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"We group the six instances in the seata cluster in pairs to serve projectA, projectB, and projectC respectively. At this time, the configuration of the seata-server side is as follows (taking nacos registry as an example):"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'registry {\n  type = "nacos"\n  loadBalance = "RandomLoadBalance"\n  loadBalanceVirtualNodes = 10\n\n  nacos {\n    application = "seata-server"\n    serverAddr = "127.0.0.1:8848"\n    group = "DEFAULT_GROUP"\n    namespace = "8f11aeb1-5042-461b-b88b-d47a7f7e01c0"\n    # Similarly, configure seata-server instances in other groups: project-b-group / project-c-group\n    cluster = "project-a-group"\n    username = "username"\n    password = "password"\n  }\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"The client-side configuration is as follows:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"seata.tx-service-group=projectA\n# Similarly, configure projectB and projectC: project-b-group / project-c-group\nseata.service.vgroup-mapping.projectA=project-a-group\n"})}),"\n",(0,r.jsx)(n.p,{children:"After completing the configuration and starting, the TC dedicated to the corresponding transaction group serves its application. The overall deployment diagram is as follows:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Multiple Applications Access in a Single Environment",src:t(28144).A+"",width:"1360",height:"455"})}),"\n",(0,r.jsx)(n.h2,{id:"best-practice-3-fine-grained-control-of-the-client",children:"Best Practice 3: Fine-grained Control of the Client"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Assume that there is a seata cluster, with the Guangzhou data center instances running on high-performance machines and the Shanghai cluster running on lower-performance machines."}),"\n",(0,r.jsx)(n.li,{children:"There is an existing microservices architecture project projectA, which includes microservices ServiceA, ServiceB, ServiceC, and ServiceD."}),"\n",(0,r.jsx)(n.li,{children:"ServiceD has lower traffic, while the other microservices have higher traffic."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"So at this point, we can divert the ServiceD microservice to the Shanghai cluster and allocate high-performance servers to other microservices with higher traffic (conversely, if there is a microservice with particularly high traffic, we can also allocate a higher-performance cluster specifically for this microservice and direct the client's virtual group to that cluster, with the ultimate goal of ensuring availability during peak traffic)."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Fine-grained control of clients",src:t(59680).A+"",width:"812",height:"453"})}),"\n",(0,r.jsx)(n.h2,{id:"best-practice-4-seatas-pre-production-and-production-isolation",children:"Best Practice 4: Seata's Pre-production and Production Isolation"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"In most cases, the pre-production environment and the production environment will use the same set of databases. Based on this condition, the pre-production TC cluster and the production TC cluster must use the same database to ensure the effectiveness of global transactions (i.e., the production TC cluster and the pre-production TC cluster use the same lock table, but have different branch_table and global_table)"}),"\n",(0,r.jsx)(n.li,{children:"We will refer to the branch table and global table used in production as: global_table and branch_table; and in pre-production as: global_table_pre and branch_table_pre"}),"\n",(0,r.jsx)(n.li,{children:"The lock_table is shared between pre-production and production"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"At this point, the file.conf configuration of the seata-server is as follows:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'store {\n  mode = "db"\n\n  db {\n    datasource = "druid"\n    dbType = "mysql"\n    driverClassName = "com.mysql.jdbc.Driver"\n    url = "jdbc:mysql://127.0.0.1:3306/seata"\n    user = "username"\n    password = "password"\n    minConn = 5\n    maxConn = 100\n    globalTable = "global_table"  ----\x3e pre-production is "global_table_pre"\n    branchTable = "branch_table"  ----\x3e pre-production is "branch_table_pre"\n    lockTable = "lock_table"\n    queryLimit = 100\n    maxWait = 5000\n  }\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"The registry.conf configuration of the seata-server is as follows (using nacos as an example):"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'registry {\n  type = "nacos"\n  loadBalance = "RandomLoadBalance"\n  loadBalanceVirtualNodes = 10\n\n  nacos {\n    application = "seata-server"\n    serverAddr = "127.0.0.1:8848"\n    group = "DEFAULT_GROUP"\n    namespace = "8f11aeb1-5042-461b-b88b-d47a7f7e01c0"\n    cluster = "pre-product"  --\x3e similarly, production is "product"\n    username = "username"\n    password = "password"\n  }\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"The deployment diagram is as follows:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Pre-production and production isolation",src:t(69701).A+"",width:"907",height:"596"})}),"\n",(0,r.jsx)(n.p,{children:"Furthermore, you can combine and use the above four best practices according to your actual production situation."})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},59680:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/txgroup-client-controll-77862cb1429597eb3ec1d69608679ba4.png"},28144:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/txgroup-multiApplication-501b8688ae442af2ce6a4db7abb3520d.png"},73414:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/txgroup-normal-698f00d26b96414c46c7c27729e61134.png"},69701:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/txgroup-segregation-of-pre-and-product-892ff6085c837f3283b0e702deb96d7c.png"},11977:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/txgroup-switch-to-sh-fbe3bf2c89a16e158fef5d582655c3f9.png"},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var r=t(96540);const i={},a=r.createContext(i);function s(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);