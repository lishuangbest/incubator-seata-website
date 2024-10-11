"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[56393],{48151:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>a});var o=s(74848),t=s(28453);const r={title:"Consul \u914d\u7f6e\u4e2d\u5fc3",keywords:["Seata","Consul"],description:"Consul \u914d\u7f6e\u4e2d\u5fc3\u3002"},c="Consul \u914d\u7f6e\u4e2d\u5fc3",i={id:"user/configuration/consul",title:"Consul \u914d\u7f6e\u4e2d\u5fc3",description:"Consul \u914d\u7f6e\u4e2d\u5fc3\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-v2.1/user/configuration/consul.md",sourceDirName:"user/configuration",slug:"/user/configuration/consul",permalink:"/zh-cn/docs/v2.1/user/configuration/consul",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/zh-cn/docusaurus-plugin-content-docs/version-v2.1/user/configuration/consul.md",tags:[],version:"v2.1",frontMatter:{title:"Consul \u914d\u7f6e\u4e2d\u5fc3",keywords:["Seata","Consul"],description:"Consul \u914d\u7f6e\u4e2d\u5fc3\u3002"},sidebar:"docs",previous:{title:"Etcd3 \u914d\u7f6e\u4e2d\u5fc3",permalink:"/zh-cn/docs/v2.1/user/configuration/etcd3"},next:{title:"Zookeeper \u914d\u7f6e\u4e2d\u5fc3",permalink:"/zh-cn/docs/v2.1/user/configuration/zookeeper"}},l={},a=[{value:"\u51c6\u5907\u5de5\u4f5c",id:"\u51c6\u5907\u5de5\u4f5c",level:2},{value:"\u5feb\u901f\u4e0a\u624b",id:"\u5feb\u901f\u4e0a\u624b",level:2},{value:"\u914d\u7f6e Consul \u4e3a\u914d\u7f6e\u4e2d\u5fc3",id:"\u914d\u7f6e-consul-\u4e3a\u914d\u7f6e\u4e2d\u5fc3",level:3},{value:"\u63d0\u4ea4 Key-Value \u914d\u7f6e\u81f3 Consul",id:"\u63d0\u4ea4-key-value-\u914d\u7f6e\u81f3-consul",level:3},{value:"Client \u7aef \u914d\u7f6e Consul \u4e3a\u914d\u7f6e\u4e2d\u5fc3",id:"client-\u7aef-\u914d\u7f6e-consul-\u4e3a\u914d\u7f6e\u4e2d\u5fc3",level:3},{value:"Client\u7aef\u914d\u7f6e",id:"client\u7aef\u914d\u7f6e",level:3}];function d(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{id:"consul-\u914d\u7f6e\u4e2d\u5fc3",children:"Consul \u914d\u7f6e\u4e2d\u5fc3"}),"\n",(0,o.jsxs)(e.p,{children:["\u5728 ",(0,o.jsx)(e.a,{href:"/docs/user/registry/consul/",children:"\u4ee5 Consul \u4f5c\u4e3a\u6ce8\u518c\u4e2d\u5fc3"})," \u7684\u57fa\u7840\u4e0a\uff0c\u5c06 Seata \u914d\u7f6e\u653e\u5230 Consul \u4e2d"]}),"\n",(0,o.jsx)(e.p,{children:"\u672c\u6587\u57fa\u4e8e Seata 1.4.2\uff0cConsul \u7248\u672c\u5efa\u8bae 1.8+\uff0c\u4e0b\u6587\u4ee5 Consul 1.11.2 \u4e3a\u4f8b"}),"\n",(0,o.jsx)(e.h2,{id:"\u51c6\u5907\u5de5\u4f5c",children:"\u51c6\u5907\u5de5\u4f5c"}),"\n",(0,o.jsx)(e.p,{children:"\u5f53\u60a8\u51b3\u5b9a\u4f7f\u7528 Consul \u4f5c\u4e3a Seata \u914d\u7f6e\u4e2d\u5fc3\u524d\uff0c\u8bf7\u786e\u4fdd\u5df2\u7ecf\u542f\u52a8 Consul \u670d\u52a1\u3002"}),"\n",(0,o.jsx)(e.h2,{id:"\u5feb\u901f\u4e0a\u624b",children:"\u5feb\u901f\u4e0a\u624b"}),"\n",(0,o.jsx)(e.p,{children:"\u5c06 Consul \u4f5c\u4e3a Seata \u914d\u7f6e\u4e2d\u5fc3\u7684\u64cd\u4f5c\u6b65\u9aa4\u975e\u5e38\u7b80\u5355\uff0c\u53ef\u5206\u4e3a\u4ee5\u4e0b\u51e0\u6b65\uff1a"}),"\n",(0,o.jsxs)(e.ol,{children:["\n",(0,o.jsx)(e.li,{children:"seata-server \u914d\u7f6e Consul \u4e3a\u914d\u7f6e\u4e2d\u5fc3"}),"\n",(0,o.jsx)(e.li,{children:"\u63d0\u4ea4 Key-Value \u914d\u7f6e\u81f3 Consul"}),"\n",(0,o.jsx)(e.li,{children:"Client \u7aef \u914d\u7f6e Consul \u4e3a\u914d\u7f6e\u4e2d\u5fc3"}),"\n"]}),"\n",(0,o.jsx)(e.h3,{id:"\u914d\u7f6e-consul-\u4e3a\u914d\u7f6e\u4e2d\u5fc3",children:"\u914d\u7f6e Consul \u4e3a\u914d\u7f6e\u4e2d\u5fc3"}),"\n",(0,o.jsx)(e.p,{children:"\u9996\u5148\uff0c\u8bf7\u786e\u4fdd\u60a8\u7684 Consul \u670d\u52a1\u5df2\u542f\u52a8"}),"\n",(0,o.jsxs)(e.p,{children:["\u5728 Seata \u76ee\u5f55\u4e0b /conf/registry.conf\n\u4e2d\u52a0\u5165\u5bf9\u5e94\u914d\u7f6e\u4e2d\u5fc3,\u5176\u4f59",(0,o.jsx)(e.a,{href:"https://github.com/apache/incubator-seata/blob/1.4.2/script/server/config/registry.conf",children:"\u914d\u7f6e\u53c2\u8003"})]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{children:'config {\n  type = "consul"\n\n  consul {\n    serverAddr = "127.0.0.1:8500"\n    aclToken = ""\n  }\n}\n'})}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.strong,{children:"\u6b64\u65f6\u542f\u52a8 Seata \u670d\u52a1\uff0c\u4f1a\u63d0\u793a\u5982\u4e0b\u5b57\u6837\u4fe1\u606f\uff0c\u53ef\u5148\u5173\u95ed\u670d\u52a1"})}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{children:"config operation timeout,cost:5015 ms,op:GET,dataId:store.mode\nconfig operation timeout,cost:5006 ms,op:GET,dataId:metrics.enabled\nconfig operation timeout,cost:5001 ms,op:GET,dataId:transport.threadFactory.bossThreadPrefix\nconfig operation timeout,cost:5009 ms,op:GET,dataId:transport.threadFactory.workerThreadPrefix\n# \u6b64\u5904\u7701\u7565\u7c7b\u4f3c\u7684\u5176\u4ed6\u4fe1\u606f~\n"})}),"\n",(0,o.jsx)(e.h3,{id:"\u63d0\u4ea4-key-value-\u914d\u7f6e\u81f3-consul",children:"\u63d0\u4ea4 Key-Value \u914d\u7f6e\u81f3 Consul"}),"\n",(0,o.jsxs)(e.p,{children:["\u51fa\u73b0\u4ee5\u4e0a\u62a5\u9519\u4fe1\u606f\u662f\u56e0\u4e3a Consul \u4e2d\u7f3a\u5c11\u5bf9\u5e94\u914d\u7f6e\uff0c\u8bf7\u4ece\u4ee5\u4e0b\u65b9\u5f0f\u4e2d",(0,o.jsx)(e.strong,{children:"\u9009\u62e9\u5176\u4e2d\u4e00\u79cd\u65b9\u5f0f"}),"\u63d0\u4ea4\u914d\u7f6e\u5230 Consul Key/Value \u4e2d"]}),"\n",(0,o.jsxs)(e.ol,{children:["\n",(0,o.jsx)(e.li,{children:"\u901a\u8fc7 Consul \u63a7\u5236\u53f0 ui\uff0cKey/Value -> create"}),"\n",(0,o.jsxs)(e.li,{children:["\u901a\u8fc7 ",(0,o.jsx)(e.a,{href:"https://www.consul.io/api-docs/kv",children:"http \u8bf7\u6c42"})]}),"\n",(0,o.jsxs)(e.li,{children:["\u901a\u8fc7 ",(0,o.jsx)(e.a,{href:"https://www.consul.io/commands/kv",children:"Consul \u547d\u4ee4\u884c\u5de5\u5177"})]}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.strong,{children:"\u63a8\u8350\uff1a\u4f7f\u7528\u5b98\u65b9\u63d0\u4f9b\u7684\u4e0a\u4f20\u914d\u7f6e\u811a\u672c"})}),"\n"]}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.strong,{children:"tips"}),": 1.4.2 \u9700\u8981\u9010\u4e2a\u521b\u5efa key-value\uff0c1.5.0 \u540e\u652f\u6301 key \u5bf9\u5e94\u6587\u4ef6"]}),"\n",(0,o.jsxs)(e.p,{children:["\u4ee5 store.mode=file\n\u4e3a\u4f8b\uff0c\u63d0\u4ea4\u62a5\u9519\u4fe1\u606f\u5bf9\u5e94\u7684\u914d\u7f6e\uff0c\u5728\u8fd9\u91cc\u53ef\u4ee5\u627e\u5230",(0,o.jsx)(e.a,{href:"https://github.com/apache/incubator-seata/blob/1.4.2/script/config-center/config.txt",children:"\u9ed8\u8ba4\u914d\u7f6e"})]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-properties",children:"store.mode=file\nstore.publicKey=\nstore.file.dir=file_store/data\nstore.file.maxBranchSessionSize=16384\n# \u5269\u4e0b\u7684\u914d\u7f6e\u9879\u7701\u7565~\n"})}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.strong,{children:"\u63a8\u8350\u4f7f\u7528\u5b98\u65b9\u811a\u672c\uff1a"})," \u4ee5\u4e0a\u65b9\u5f0f 1~3 \u9700\u8981\u9010\u4e2a\u6dfb\u52a0\u914d\u7f6e\uff0c\u64cd\u4f5c\u8f83\u4e3a\u7e41\u7410\uff0c\u4e3a\u6b64\u5b98\u65b9\u63d0\u4f9b\u4e86\n",(0,o.jsx)(e.a,{href:"https://github.com/apache/incubator-seata/blob/1.4.2/script/config-center/consul/consul-config.sh",children:"\u811a\u672c"})," \u548c\n",(0,o.jsx)(e.a,{href:"https://github.com/apache/incubator-seata/blob/1.4.2/script/config-center/config.txt",children:"\u9ed8\u8ba4\u914d\u7f6e"}),"\n\u4ee5\u5feb\u901f\u6dfb\u52a0\u914d\u7f6e"]}),"\n",(0,o.jsxs)(e.p,{children:["\u5c06 config.txt \u653e\u5728 consul-config.sh \u7684",(0,o.jsx)(e.strong,{children:"\u4e0a\u5c42\u76ee\u5f55"}),"\uff0c \u6839\u636e\u81ea\u5df1\u7684\u9700\u8981\u5fae\u8c03 config.txt \u7684\u914d\u7f6e\uff08\u4e3b\u8981\u662f seata.mode \u53ca seata.file | seata.db | seata.redis\n\u8fd9\u51e0\u4e2a\u524d\u7f00\u7684\u914d\u7f6e\uff09"]}),"\n",(0,o.jsx)(e.p,{children:"\u6267\u884c\u5982\u4e0b\u547d\u4ee4"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-shell",children:"sh {PATH}/consul-config.sh -h localhost -p 8500\n"})}),"\n",(0,o.jsxs)(e.p,{children:["\u5177\u4f53\u64cd\u4f5c\u53ef\u53c2\u8003",(0,o.jsx)(e.a,{href:"https://github.com/apache/incubator-seata/blob/1.4.2/script/config-center/README.md",children:"README.md"})]}),"\n",(0,o.jsx)(e.p,{children:"\u6b64\u65f6\u91cd\u542f Seata \u670d\u52a1\uff0c\u53d1\u73b0\u4e0d\u518d\u62a5\u9519\uff0c\u5373\u6210\u529f\u4f7f\u7528 Consul \u4f5c\u4e3a\u914d\u7f6e\u4e2d\u5fc3\u4e86\uff0c\u540e\u9762\u5982\u9700\u8c03\u6574\u914d\u7f6e\uff0c\u53ef\u524d\u5f80\u63a7\u5236\u53f0\u5355\u72ec\u4fee\u6539\u5bf9\u5e94\u7684\u914d\u7f6e\uff0c\u4fee\u6539\u540e\u9700\u91cd\u542f\u670d\u52a1"}),"\n",(0,o.jsx)(e.h3,{id:"client-\u7aef-\u914d\u7f6e-consul-\u4e3a\u914d\u7f6e\u4e2d\u5fc3",children:"Client \u7aef \u914d\u7f6e Consul \u4e3a\u914d\u7f6e\u4e2d\u5fc3"}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.strong,{children:"\u4ee5 SpringBoot \u9879\u76ee\u4e3a\u4f8b\uff0c\u5728\u9879\u76ee pom.xml \u4e2d\u52a0\u5165"})}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-xml",children:"\n<dependency>\n    <groupId>io.seata</groupId>\n    <artifactId>seata-spring-boot-starter</artifactId>\n    <version>\u6700\u65b0\u7248\uff08Seata\u7248\u672c\uff09</version>\n</dependency>\n<dependency>\n<groupId>org.springframework.cloud</groupId>\n<artifactId>spring-cloud-starter-consul-config</artifactId>\n</dependency>\n"})}),"\n",(0,o.jsx)(e.h3,{id:"client\u7aef\u914d\u7f6e",children:"Client\u7aef\u914d\u7f6e"}),"\n",(0,o.jsxs)(e.p,{children:["\u5728 application.yml \u4e2d\u52a0\u5165\u5bf9\u5e94\u7684\u914d\u7f6e\u4e2d\u5fc3\uff0c\u5176\u4f59",(0,o.jsx)(e.a,{href:"https://github.com/apache/incubator-seata/blob/develop/script/client/spring/application.yml",children:"\u914d\u7f6e\u53c2\u8003"})]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-yaml",children:"seata:\n  config:\n    type: consul\n    consul:\n      server-addr: 127.0.0.1:8500\n"})}),"\n",(0,o.jsx)(e.p,{children:"\u91cd\u542f Client \u5373\u53ef"})]})}function u(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(d,{...n})}):d(n)}},28453:(n,e,s)=>{s.d(e,{R:()=>c,x:()=>i});var o=s(96540);const t={},r=o.createContext(t);function c(n){const e=o.useContext(r);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:c(n.components),o.createElement(r.Provider,{value:e},n.children)}}}]);