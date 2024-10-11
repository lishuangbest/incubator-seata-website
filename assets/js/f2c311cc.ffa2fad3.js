"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[63197],{77907:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var r=n(74848),i=n(28453);const s={Title:"Seata parameter configuration version 0.9.0",keywords:["Seata"],Description:"The seata parameter configuration version is 0.9.0."},o=void 0,a={id:"user/configurations090",title:"configurations090",description:"Public sector",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-v2.1/user/configurations090.md",sourceDirName:"user",slug:"/user/configurations090",permalink:"/docs/v2.1/user/configurations090",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/en/docusaurus-plugin-content-docs/version-v2.1/user/configurations090.md",tags:[],version:"v2.1",frontMatter:{Title:"Seata parameter configuration version 0.9.0",keywords:["Seata"],Description:"The seata parameter configuration version is 0.9.0."}},l={},c=[{value:"Not in used",id:"not-in-used",level:3}];function d(e){const t={h3:"h3",li:"li",ol:"ol",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"#Seata parameter configuration version 0.9.0"}),"\n",(0,r.jsx)(t.p,{children:"###Public sector"}),"\n",(0,r.jsx)(t.p,{children:"| key | desc | remark|"}),"\n",(0,r.jsx)(t.p,{children:"|---------------|--------------|----|"}),"\n",(0,r.jsx)(t.p,{children:"|transport.serialization | client and server communication codec method | seata, protobuf|"}),"\n",(0,r.jsx)(t.p,{children:"|transport.heartbeat | the heartbeat detection switch for client server communication | The default value is true|"}),"\n",(0,r.jsx)(t.p,{children:"|registry.type | registry type | Default file, which supports file, nacos, redis, eureka, zk, consumer, etcd3, sofa, and custom | Version 1.6.0 Server supports simultaneous registration to multiple registries, separated by commas|"}),"\n",(0,r.jsx)(t.p,{children:"|config.type | configuration center type | default file, supporting file, nacos, apollo, zk, consult, etcd3, springcloud, custom|"}),"\n",(0,r.jsx)(t.p,{children:"###Server side"}),"\n",(0,r.jsx)(t.p,{children:"| key | desc | remark|"}),"\n",(0,r.jsx)(t.p,{children:"|---------------|--------------|----|"}),"\n",(0,r.jsx)(t.p,{children:"| transaction.undo.log.save.days | undo retention days | 7 days by default, log_ Status=1 (Appendix 3) and undo not normally cleaned|"}),"\n",(0,r.jsx)(t.p,{children:"| transaction.undo.log.delete.period | undo Cleanup thread interval | 86400000 by default, in milliseconds|"}),"\n",(0,r.jsx)(t.p,{children:"| service.max.commit.retry.timeout | timeout duration of two-phase commit retry | Unit: ms, s, m, h, d, corresponding to ms, s, min, h, d, and the default is ms. The default value of - 1 means unlimited retries. Formula: timeout>=now globalTransactionBeginTime, true means no retry if timeout occurs|"}),"\n",(0,r.jsx)(t.p,{children:"| service.max.rollback.retry.timeout | timeout duration of two-phase rollback retry | Same as commit|"}),"\n",(0,r.jsx)(t.p,{children:"| recovery.committing-retry-period | Phase2 commit unfinished status Global transaction retry commit thread interval | 1000 by default, in milliseconds|"}),"\n",(0,r.jsx)(t.p,{children:"| recovery.async-committing-retry-period | Phase2 asynchronous submission status Retry submission thread interval | 1000 by default, in milliseconds|"}),"\n",(0,r.jsx)(t.p,{children:"| recovery.rollback-retry-period | Phase2 rollback status Retry rollback thread interval | 1000 by default, in milliseconds|"}),"\n",(0,r.jsx)(t.p,{children:"| recovery.timeout-retry-period | Timeout status detection Retry thread interval | 1000 by default, in milliseconds. If timeout is detected, put the global transaction into the rollback session manager|"}),"\n",(0,r.jsx)(t.p,{children:"| store.mode | Transaction session information storage mode | file Local file (HA is not supported), db database (HA is supported)|"}),"\n",(0,r.jsx)(t.p,{children:"| store.file.dir | file mode file storage folder name | default sessionStore|"}),"\n",(0,r.jsx)(t.p,{children:"| store.file.maxBranchSessionSize | file mode file storage branch session maximum bytes | 16384 (16kb) by default, in bytes|"}),"\n",(0,r.jsx)(t.p,{children:"| store.file.maxGlobalSessionSize | file mode file stores the maximum number of global session bytes | 512b by default, in bytes|"}),"\n",(0,r.jsx)(t.p,{children:"| store.file.fileWriteBufferCacheSize | file mode file storage buffer maximum cache size | 16384 (16kb) by default, in bytes. When the amount of data such as session written is greater than this value, an exception will be thrown|"}),"\n",(0,r.jsx)(t.p,{children:"| store.file.flushDiskMode | file mode file storage flushing policy | default async, optional sync|"}),"\n",(0,r.jsx)(t.p,{children:"| store.file.sessionReloadReadSize | file mode File storage The maximum number of session or lock keys recovered from the backup file after the server node restarts | 100 by default|"}),"\n",(0,r.jsx)(t.p,{children:"| store.db.datasource | db mode data source type | default dbcp|"}),"\n",(0,r.jsx)(t.p,{children:"| store.db.db type | db mode database type | default mysql|"}),"\n",(0,r.jsx)(t.p,{children:"| store.db.driver class name | db mode database driver | default com.mysql.jdbc Driver |"}),"\n",(0,r.jsx)(t.p,{children:"| store.db.url | db mode data source library url | default jdbc: mysql://127.0.0.1:3306/seata |"}),"\n",(0,r.jsx)(t.p,{children:"| store.db.user | db mode database account | default MySQL|"}),"\n",(0,r.jsx)(t.p,{children:"| store.db.min-conn | the number of initial connections to the database in db mode | 1 by default|"}),"\n",(0,r.jsx)(t.p,{children:"| store.db.max-conn | Maximum number of database connections in db mode | 3 by default|"}),"\n",(0,r.jsx)(t.p,{children:"| store.db.global.table | db mode global transaction table name | default global_ table |"}),"\n",(0,r.jsx)(t.p,{children:"| store.db.branch.table | db mode branch transaction table name | default branch_ table |"}),"\n",(0,r.jsx)(t.p,{children:"| store.db.lock table | db mode global lock table name | default lock_ table |"}),"\n",(0,r.jsx)(t.p,{children:"| store.db.query-limit | the maximum number of global transactions queried in db mode | 1000 by default|"}),"\n",(0,r.jsx)(t.p,{children:"| metrics.enabled | whether to enable Metrics | False is off by default. In the false state, all Metrics related components will not be initialized to minimize the performance loss|"}),"\n",(0,r.jsx)(t.p,{children:"| metrics.registry-type | indicator registrar type | The indicator registrar type used by Metrics is a built-in compact (simple) implementation by default. Meters in this implementation only use limited memory counts, and the performance is high enough to meet most scenarios; Currently, only one indicator registrar can be set|"}),"\n",(0,r.jsx)(t.p,{children:'| metrics.exporter list | indicator result Measurement data outputter list | default prometheus. Multiple outputters are separated by English commas, such as "prometheus, jmx". Currently, only the prometheus outputters are connected|'}),"\n",(0,r.jsx)(t.p,{children:"| metrics.exporter-prometheus-port | prometheus exporter client port number | 9898 by default|"}),"\n",(0,r.jsx)(t.p,{children:"###Client side"}),"\n",(0,r.jsx)(t.p,{children:"| key | role | desc | remark|"}),"\n",(0,r.jsx)(t.p,{children:"|----------|--------|--------------|----|"}),"\n",(0,r.jsx)(t.p,{children:"| service.vgroup_mapping.my_test_tx_group | TM, RM | Transaction group (Appendix 1) | my_ test_ tx_ Group refers to grouping, and the configuration item value is TC cluster name|"}),"\n",(0,r.jsx)(t.p,{children:"| service.default.grouplist | TM, RM | TC service list (Appendix 2) | Only used when the registry is file|"}),"\n",(0,r.jsx)(t.p,{children:"| service.disableGlobalTransaction | TM, RM | Global Transaction Switch | False by default. false is on, true is off|"}),"\n",(0,r.jsx)(t.p,{children:"| service.enableDegradation | TM | Degradation switch (to be implemented) | False by default. The business side automatically downgrades according to the number of consecutive errors and does not go through the seata transaction|"}),"\n",(0,r.jsx)(t.p,{children:"| client.async.commit.buffer.limit | RM | Asynchronous commit cache queue length | 10000 by default. Phase II commit succeeded. RM asynchronously cleans the undo queue|"}),"\n",(0,r.jsx)(t.p,{children:"| client.lock.retry.internal | RM | Check or occupy the global lock retry interval | 10 by default, in milliseconds|"}),"\n",(0,r.jsx)(t.p,{children:"| client.lock.retry.times | RM | Number of retries to verify or occupy the global lock | 30 by default|"}),"\n",(0,r.jsx)(t.p,{children:"| client.lock.retry.policy.branch-rollback-on-conflict | RM | The lock policy when a branch transaction conflicts with other global rollback transactions | The default is true. The local lock is released first to allow rollback to succeed|"}),"\n",(0,r.jsx)(t.p,{children:"| client.report.retry.count | TM, RM | Number of TC retries for reporting the results of the first phase | 5 by default|"}),"\n",(0,r.jsx)(t.p,{children:"| client.tm.commit.retry.count | TM | The number of TC retries for reporting the results of the first phase global submission | 1 by default, it is recommended to be greater than 1|"}),"\n",(0,r.jsx)(t.p,{children:"| client.tm.rollback.retry.count | TM | The number of TC retries reported in the first phase global rollback results | 1 by default, and it is recommended to be greater than 1|"}),"\n",(0,r.jsx)(t.p,{children:"| client.table.meta.check.enable | RM | Automatically refresh the table structure in the cache | Default true|"}),"\n",(0,r.jsx)(t.p,{children:"| transaction.undo.data.validation | RM | Phase II rollback image verification | True is enabled by default, false is disabled|"}),"\n",(0,r.jsx)(t.p,{children:"| transaction.undo.log.serialization | RM | undo serialization method | default jackson|"}),"\n",(0,r.jsx)(t.p,{children:"| transaction.undo.log.table | RM | User defined undo table name | Default undo_ log |"}),"\n",(0,r.jsx)(t.p,{children:"| support.spring.datasource.autoproxy | RM | Data source auto proxy switch | False is off by default|"}),"\n",(0,r.jsx)(t.h3,{id:"not-in-used",children:"Not in used"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"key"}),(0,r.jsx)(t.th,{children:"desc"}),(0,r.jsx)(t.th,{children:"remark"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"lock.mode"}),(0,r.jsx)(t.td,{children:"lock store mode"}),(0,r.jsx)(t.td,{children:"local\u3001remote"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"lock.local"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"lock.remote"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{})]})]})]}),"\n",(0,r.jsx)(t.p,{children:"###Appendix 1:"}),"\n",(0,r.jsx)(t.p,{children:"Description of transaction grouping."}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"What is a transaction group?"}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Transaction grouping is the resource logic of seata, similar to service instance. My in file.conf_ test_ tx_ A group is a transaction group."}),"\n",(0,r.jsxs)(t.ol,{start:"2",children:["\n",(0,r.jsx)(t.li,{children:"How to find the back-end cluster through transaction grouping?"}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"First, the program configures transaction grouping (txServiceGroup parameter of GlobalTransactionScanner construction method), and the program will search for service.vgroup through the user configured configuration center_ mapping. Transaction grouping configuration item. The value of the configuration item obtained is the name of the TC cluster. The program that obtains the cluster name constructs the service name through a certain prefix+cluster name. The service name of each configuration center is different. Get the service name, go to the corresponding registry, pull the service list of the corresponding service name, and get the real TC service list of the back-end."}),"\n",(0,r.jsxs)(t.ol,{start:"3",children:["\n",(0,r.jsx)(t.li,{children:"Why is the design so that the service name is not directly taken?"}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"There is an additional layer to obtain the configuration of transaction groups to the mapping cluster. After this design, the transaction group can be used as the logical isolation unit of resources, which can quickly fail over when a failure occurs."}),"\n",(0,r.jsx)(t.p,{children:"###Appendix 2:"}),"\n",(0,r.jsx)(t.p,{children:"About the grouplist question."}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"When will the default.grouplist in file.conf be used?"}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"It is used when registry.type=file. It is not read in other times."}),"\n",(0,r.jsxs)(t.ol,{start:"2",children:["\n",(0,r.jsx)(t.li,{children:"Can multiple value lists be configured for default.grouplist?"}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Multiple can be configured, which means cluster, but when store When mode=file, an error will be reported. The reason is that the file storage mode does not provide synchronization of local files, so you need to use store.mode=db to share data between TC clusters through db"}),"\n",(0,r.jsxs)(t.ol,{start:"3",children:["\n",(0,r.jsx)(t.li,{children:"Is default.grouplist recommended?"}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Not recommended. For example, question 1, when registering It is used when type=file, which means that the real registry is not used here, and the health check mechanism without specific services cannot automatically remove the list when the tc is unavailable. It is recommended to use nacos, eureka, redis, zk, consumer, etcd3, and sofa. Registry. type=file or config The original purpose of type=file design is to enable users to quickly verify the seata service through direct connection without relying on a third-party registry or configuration center."}),"\n",(0,r.jsx)(t.p,{children:"###Appendix 3:"}),"\n",(0,r.jsx)(t.p,{children:"log_ Status=1 is defensive. It means that a global rollback request is received, but it is uncertain whether the local transaction of a transaction branch has been executed. At this time, a piece of data with the same branch ID is inserted in advance, and the inserted false data is successful. If the local transaction continues to execute, the master key conflict will be automatically rolled back."}),"\n",(0,r.jsx)(t.p,{children:"If the insertion is unsuccessful, it indicates that the local transaction has been completed, and the undo data is taken out for reverse rollback."})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var r=n(96540);const i={},s=r.createContext(i);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);