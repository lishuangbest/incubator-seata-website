"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[31956],{74554:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=t(74848),s=t(28453);const i={title:"Nacos Registry Center",keywords:["Seata","Nacos","Registry Center"],description:"Nacos Registry Center."},a="Nacos Registry",o={id:"user/registry/nacos",title:"Nacos Registry Center",description:"Nacos Registry Center.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-v2.2/user/registry/nacos.md",sourceDirName:"user/registry",slug:"/user/registry/nacos",permalink:"/docs/user/registry/nacos",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/en/docusaurus-plugin-content-docs/version-v2.2/user/registry/nacos.md",tags:[],version:"v2.2",frontMatter:{title:"Nacos Registry Center",keywords:["Seata","Nacos","Registry Center"],description:"Nacos Registry Center."},sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/user/registry/"},next:{title:"Eureka Registry Center",permalink:"/docs/user/registry/eureka"}},c={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Quick Start",id:"quick-start",level:2},{value:"Adding Maven Dependencies",id:"adding-maven-dependencies",level:3},{value:"Configuring the Registry on the Client Side",id:"configuring-the-registry-on-the-client-side",level:3},{value:"Configuring the Registry on the Server Side",id:"configuring-the-registry-on-the-server-side",level:3}];function u(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"nacos-registry",children:"Nacos Registry"}),"\n",(0,r.jsx)(n.p,{children:"Nacos is an important registry implementation in the Seata component."}),"\n",(0,r.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(n.p,{children:["Before integrating ",(0,r.jsx)(n.code,{children:"nacos-client"})," into your Seata project, make sure that the Nacos service is already running in the background. If you are not familiar with the basic usage of Nacos, you can refer to the ",(0,r.jsx)(n.a,{href:"https://nacos.io/en-us/docs/quick-start.html",children:"Nacos Quick Start"})," guide. It is recommended to use Nacos version ",(0,r.jsx)(n.code,{children:"1.4.0"})," or above."]}),"\n",(0,r.jsx)(n.h2,{id:"quick-start",children:"Quick Start"}),"\n",(0,r.jsx)(n.p,{children:'The steps to integrate Nacos registry into Seata are very simple and can be roughly divided into "adding Maven dependencies" and "configuring the registry".'}),"\n",(0,r.jsx)(n.h3,{id:"adding-maven-dependencies",children:"Adding Maven Dependencies"}),"\n",(0,r.jsxs)(n.p,{children:["First, you need to add the Maven dependency for ",(0,r.jsx)(n.code,{children:"nacos-client"})," to your project's ",(0,r.jsx)(n.code,{children:"pom.xml"})," file."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",children:"<dependency>\n    <groupId>io.seata</groupId>\n    <artifactId>seata-spring-boot-starter</artifactId>\n    <version>latest version</version>\n</dependency>\n<dependency>\n    <groupId>com.alibaba.nacos</groupId>\n    <artifactId>nacos-client</artifactId>\n    <version>1.4.0+</version>\n</dependency>\n"})}),"\n",(0,r.jsx)(n.h3,{id:"configuring-the-registry-on-the-client-side",children:"Configuring the Registry on the Client Side"}),"\n",(0,r.jsxs)(n.p,{children:["Add the corresponding configuration to ",(0,r.jsx)(n.a,{href:"https://github.com/apache/incubator-seata/blob/2.x/script/client/spring/application.yml",children:(0,r.jsx)(n.strong,{children:"application.yml"})}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'seata:\n  registry:\n    type: nacos\n    nacos:\n      application: seata-server\n      namespace: ""\n      server-addr: 127.0.0.1:8848\n      group: SEATA_GROUP\n      username: ""\n      password: ""\n      ##if use MSE Nacos with auth, mutex with username/password attribute\n      #access-key: ""\n      #secret-key: ""\n      data-id: seata.properties\n  tx-service-group: default_tx_group\n  service:\n    vgroup-mapping:\n      default_tx_group: default\n\n'})}),"\n",(0,r.jsx)(n.h3,{id:"configuring-the-registry-on-the-server-side",children:"Configuring the Registry on the Server Side"}),"\n",(0,r.jsxs)(n.p,{children:["Add the corresponding configuration to ",(0,r.jsx)(n.code,{children:"conf/application.yaml"}),", and refer to other ",(0,r.jsx)(n.a,{href:"https://github.com/apache/incubator-seata/blob/2.x/server/src/main/resources/application.example.yml",children:"configuration options"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'seata:\n  registry:\n    type: nacos\n    nacos:\n      application: seata-server\n      server-addr: 127.0.0.1:8848\n      group: SEATA_GROUP\n      namespace:\n      cluster: default\n      username:\n      password:\n      ##if use MSE Nacos with auth, mutex with username/password attribute\n      #access-key: ""\n      #secret-key: ""\n'})}),"\n",(0,r.jsx)(n.p,{children:"After that, when you start the Seata-Server, you will see the server's service appearing in the registry list on the Nacos console. Once the client is configured, you can start the application to experience the Seata service."}),"\n",(0,r.jsx)(n.p,{children:"Tips: Make sure that the client and server are registered in the same namespace and group, otherwise the service will not be found."})]})}function l(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var r=t(96540);const s={},i=r.createContext(s);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);