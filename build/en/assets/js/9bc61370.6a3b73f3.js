"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[73622],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,s(s({ref:t},p),{},{components:r})):n.createElement(f,s({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},33675:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={hidden:!0,title:"Deploy Seata Server By Docker Compose",keywords:["docker-compose","ops"],description:"Deploy Seata Server By Docker Compose",author:"zouwei",date:new Date("2021-12-05T00:00:00.000Z")},s="Deploy Seata Server By Docker Compose",i={unversionedId:"ops/deploy-by-docker-compose-142",id:"version-v1.3/ops/deploy-by-docker-compose-142",title:"Deploy Seata Server By Docker Compose",description:"Deploy Seata Server By Docker Compose",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-v1.3/ops/deploy-by-docker-compose-142.md",sourceDirName:"ops",slug:"/ops/deploy-by-docker-compose-142",permalink:"/en/docs/v1.3/ops/deploy-by-docker-compose-142",draft:!1,tags:[],version:"v1.3",frontMatter:{hidden:!0,title:"Deploy Seata Server By Docker Compose",keywords:["docker-compose","ops"],description:"Deploy Seata Server By Docker Compose",author:"zouwei",date:"2021-12-05T00:00:00.000Z"},sidebar:"docs",previous:{title:"Deploy Seata Server By Docker",permalink:"/en/docs/v1.3/ops/deploy-by-docker-142"},next:{title:"Deploy Seata Server By Kubernetes",permalink:"/en/docs/v1.3/ops/deploy-by-kubernetes"}},l={},c=[{value:"Version Deployment History",id:"version-deployment-history",level:2},{value:"Precautions",id:"precautions",level:2},{value:"Quick Start",id:"quick-start",level:2},{value:'<a id="file-file">No Registration Center, File Storage</a>',id:"no-registration-center-file-storage",level:3},{value:'<a id="file-db">No Registration Center, db Storage</a>',id:"no-registration-center-db-storage",level:3},{value:'<a id="nacos-db">Nacos Registration Center, db Storage</a>',id:"nacos-registration-center-db-storage",level:3},{value:'<a id="ha-nacos-db">High Available Usage Deployment</a>',id:"high-available-usage-deployment",level:3},{value:"Environment variables",id:"environment-variables",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"deploy-seata-server-by-docker-compose"},"Deploy Seata Server By Docker Compose"),(0,a.kt)("h2",{id:"version-deployment-history"},"Version Deployment History"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://seata.io/zh-cn/docs/ops/deploy-by-docker-compose-142.html"},"Version before 1.5.0")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://seata.io/zh-cn/docs/ops/deploy-by-docker-compose.html"},"Version 1.5.0 and above")),(0,a.kt)("h2",{id:"precautions"},"Precautions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Please avoid directly pulling the latest version image. The latest version is not necessarily a stable version. To avoid unnecessary problems, please go to ",(0,a.kt)("a",{parentName:"li",href:"https://hub.docker.com/r/seataio/seata-server/tags"},"docker image warehouse")," to determine the image version to be pulled.")),(0,a.kt)("h2",{id:"quick-start"},"Quick Start"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{href:"#file-file"},"No Registration Center, File Storage")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{href:"#file-db"},"No Registration Center, db Storage")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{href:"#nacos-db"},"Nacos Registration Center, db Storage")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{href:"#ha-nacos-db"},"High Available Usage Deployment"))),(0,a.kt)("h3",{id:"no-registration-center-file-storage"},(0,a.kt)("a",{id:"file-file"},"No Registration Center, File Storage")),(0,a.kt)("p",null,"In this mode, there is no need for a registration center or any third-party storage center."),(0,a.kt)("p",null,"docker-compose.yaml"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'version: "3.1"\nservices:\n  seata-server:\n    image: seataio/seata-server:${latest-release-version}\n    hostname: seata-server\n    ports:\n      - "8091:8091"\n    environment:\n      - SEATA_PORT=8091\n      - STORE_MODE=file\n')),(0,a.kt)("h3",{id:"no-registration-center-db-storage"},(0,a.kt)("a",{id:"file-db"},"No Registration Center, db Storage")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The db mode needs to create the corresponding table structure in the database, please refer to ",(0,a.kt)("a",{href:"https://github.com/seata/seata/tree/develop/script/server/db"},"[table creation script]"),".")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"(1) Prepare configuration file: file.conf")),(0,a.kt)("p",null,"For more storage mode support, please refer to ",(0,a.kt)("a",{href:"https://github.com/seata/seata/blob/develop/script/config-center/config.txt"},"More Storage Modes"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"# Storage mode\nstore.mode=db\n\nstore.db.datasource=druid\nstore.db.dbType=mysql\n# Need to adjust driverClassName according to mysql version\n# Driver corresponding to mysql8 and above versions is: com.mysql.cj.jdbc.Driver\n# Driver for versions below mysql8 is: com.mysql.jdbc.Driver\nstore.db.driverClassName=com.mysql.cj.jdbc.Driver\n# Pay attention to adjusting the parameters host and port according to the actual production situation.\nstore.db.url=jdbc:mysql://127.0.0.1:3306/seata-server?useUnicode=true&characterEncoding=utf8&connectTimeout=1000&socketTimeout=3000&autoReconnect=true&useSSL=false\n# database username\nstore.db.user=\n# Username Password\nstore.db.password=\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"(2) Prepare file: registry.conf")),(0,a.kt)("p",null,"For more registration center support, please refer to ",(0,a.kt)("a",{href:"https://seata.io/zh-cn/docs/user/registry/index.html"},"Registration Center")),(0,a.kt)("p",null,"For more configuration center support, please refer to ",(0,a.kt)("a",{href:"https://seata.io/zh-cn/docs/user/configuration/index.html"},"Configuration Center")),(0,a.kt)("p",null,"Direct connection mode (no registration center)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'registry {\n   type = "file"\n}\n\nconfig {\n   type = "file"\n  \n   file {\n     name="file:/root/seata-config/file.conf"\n   }\n}\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"(3) Prepare file: docker-compose.yaml")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'version: "3.1"\nservices:\n   seata-server:\n     image: seataio/seata-server:${latest-release-version}\n     hostname: seata-server\n     ports:\n       - "8091:8091"\n     environment:\n       - SEATA_PORT=8091\n       - SEATA_CONFIG_NAME=file:/root/seata-config/registry\n     volumes:\n     # You need to put both file.conf and registry.conf in the ./seata-server/config folder\n       - "./seata-server/config:/root/seata-config"\n')),(0,a.kt)("h3",{id:"nacos-registration-center-db-storage"},(0,a.kt)("a",{id:"nacos-db"},"Nacos Registration Center, db Storage")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The db mode needs to create the corresponding table structure in the database, please refer to ",(0,a.kt)("a",{href:"https://github.com/seata/seata/tree/develop/script/server/db"},"[table creation script]"),".")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"(1) Prepare file: registry.conf")),(0,a.kt)("p",null,"Nacos Registration Center."),(0,a.kt)("p",null,"For more registration center support, please refer to ",(0,a.kt)("a",{href:"https://seata.io/zh-cn/docs/user/registry/index.html"},"Registration Center")),(0,a.kt)("p",null,"For more configuration center support, please refer to ",(0,a.kt)("a",{href:"https://seata.io/zh-cn/docs/user/configuration/index.html"},"Configuration Center")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'registry {\n   type = "nacos"\n  \n   nacos {\n   # The alias the seata service is registered on nacos, and the client calls the service through this alias.\n     application = "seata-server"\n   # Please configure the IP and port of the nacos service according to the actual production environment.\n     serverAddr = "127.0.0.1:8848"\n   # The namespace specified on nacos\n     namespace = ""\n     cluster = "default"\n     username = "nacos"\n     password = "nacos"\n   }\n}\n\nconfig {\n   type = "nacos"\n  \n   nacos {\n     # Please configure the IP and port of the nacos service according to the actual production environment.\n     serverAddr = "127.0.0.1:8848"\n     # The namespace specified on nacos\n     namespace = ""\n     group = "SEATA_GROUP"\n     username = "nacos"\n     password = "nacos"\n   # Starting from v1.4.2, it has been supported to obtain all configuration information from one Nacos dataId. You only need to add an additional dataId configuration item.\n     dataId: "seataServer.properties"\n   }\n}\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"(2) Prepare nacos configuration center configuration")),(0,a.kt)("p",null,"For more storage mode support, please refer to ",(0,a.kt)("a",{href:"https://github.com/seata/seata/blob/develop/script/config-center/config.txt"},"More storage modes"),"."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"You need to create a new configuration in nacos, where the dataId is seataServer.properties")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},'# Storage mode\nstore.mode=db\n\nstore.db.datasource=druid\nstore.db.dbType=mysql\n# Need to adjust driverClassName according to mysql version\n# Driver corresponding to mysql8 and above versions is: com.mysql.cj.jdbc.Driver\n# Driver for versions below mysql8 is: com.mysql.jdbc.Driver\nstore.db.driverClassName=com.mysql.cj.jdbc.Driver\n# Pay attention to adjusting the parameters host and port according to the actual production situation.\nstore.db.url=jdbc:mysql://127.0.0.1:3306/seata-server?useUnicode=true&characterEncoding=utf8&connectTimeout=1000&socketTimeout=3000&autoReconnect=true&useSSL=false\n# database username\nstore.db.user= "usernanme"\n# Username Password\nstore.db.password= "password"\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"(3) Prepare file: docker-compose.yaml")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'version: "3.1"\nservices:\n   seata-server:\n     image: seataio/seata-server:${latest-release-version}\n     hostname: seata-server\n     ports:\n       - "8091:8091"\n     environment:\n       # Specify the seata service startup port\n       - SEATA_PORT=8091\n       # Specify the Ip registered to nacos. The client will access the seata service through this IP.\n       # Pay attention to the difference between public network IP and internal network IP.\n       - SEATA_IP=127.0.0.1\n       - SEATA_CONFIG_NAME=file:/root/seata-config/registry\n     volumes:\n     # Because registry.conf is the nacos configuration center, you only need to put registry.conf in the ./seata-server/config folder\n       - "./seata-server/config:/root/seata-config"\n')),(0,a.kt)("h3",{id:"high-available-usage-deployment"},(0,a.kt)("a",{id:"ha-nacos-db"},"High Available Usage Deployment")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Seata high availability usage deployment relies on the registration center and database, but does not depend on the configuration center.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The db mode needs to create the corresponding table structure in the database,  please refer to ",(0,a.kt)("a",{href:"https://github.com/seata/seata/tree/develop/script/server/db"},"[table creation script]"),".")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"(1) Prepare configuration file: file.conf")),(0,a.kt)("p",null,"For more storage mode support, please refer to ",(0,a.kt)("a",{href:"https://github.com/seata/seata/blob/develop/script/config-center/config.txt"},"More Storage Modes"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"# Storage mode\nstore.mode=db\n\nstore.db.datasource=druid\nstore.db.dbType=mysql\n# Need to adjust driverClassName according to mysql version\n# Driver corresponding to mysql8 and above versions is: com.mysql.cj.jdbc.Driver\n# Driver for versions below mysql8 is: com.mysql.jdbc.Driver\nstore.db.driverClassName=com.mysql.cj.jdbc.Driver\n# Pay attention to adjusting the parameters host and port according to the actual production situation.\nstore.db.url=jdbc:mysql://127.0.0.1:3306/seata-server?useUnicode=true&characterEncoding=utf8&connectTimeout=1000&socketTimeout=3000&autoReconnect=true&useSSL=false\n# database username\nstore.db.user=\n# Username Password\nstore.db.password=\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"(2) Prepare file: registry.conf")),(0,a.kt)("p",null,"Nacos registration center."),(0,a.kt)("p",null,"For more registration center support, please refer to ",(0,a.kt)("a",{href:"https://seata.io/zh-cn/docs/user/registry/index.html"},"Registration Center")),(0,a.kt)("p",null,"For more configuration center support, please refer to ",(0,a.kt)("a",{href:"https://seata.io/zh-cn/docs/user/configuration/index.html"},"Configuration Center")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'registry {\n   type = "nacos"\n  \n   nacos {\n   # The alias the seata service is registered on nacos, and the client calls the service through this alias.\n     application = "seata-server"\n   #IP and port of nacos service\n     serverAddr = "127.0.0.1:8848"\n   # The namespace specified on nacos\n     namespace = ""\n     cluster = "default"\n     username = "nacos"\n     password = "nacos"\n   }\n}\n\nconfig {\n   type = "file"\n  \n   file {\n     name="file:/root/seata-config/file.conf"\n   }\n}\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"(3) Prepare file: docker-compose.yaml")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"As long as the configuration is consistent, the seata service can be deployed on multiple instances on one machine or on multiple different hosts at the same time to achieve high service availability. ",(0,a.kt)("br",null),"\n",(0,a.kt)("a",{parentName:"p",href:"https://seata.io/zh-cn/docs/ops/deploy-ha.html"},"High Availability Usage Deployment"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'version: "3.1"\nservices:\n   #seataservice1\n   seata-server-1:\n     image: seataio/seata-server:${latest-release-version}\n     hostname: seata-server\n     ports:\n       - "8091:8091"\n     environment:\n       # Specify the seata service startup port\n       - SEATA_PORT=8091\n       # Specify the Ip registered to nacos. The client will access the seata service through this IP.\n       # Pay attention to the difference between public network IP and internal network IP.\n       - SEATA_IP=127.0.0.1\n       - SEATA_CONFIG_NAME=file:/root/seata-config/registry\n     volumes:\n     # You need to put both file.conf and registry.conf in the ./seata-server/config folder\n       - "./seata-server/config:/root/seata-config"\n   # seataservice2\n   seata-server-2:\n     image: seataio/seata-server:${latest-release-version}\n     hostname: seata-server\n     ports:\n       - "8092:8092"\n     environment:\n       # Specify the seata service startup port\n       - SEATA_PORT=8092\n       # Specify the Ip registered to nacos. The client will access the seata service through this IP.\n       # Pay attention to the difference between public network IP and internal network IP.\n       - SEATA_IP=127.0.0.1\n       - SEATA_CONFIG_NAME=file:/root/seata-config/registry\n     volumes:\n     # You need to put both file.conf and registry.conf in the ./seata-server/config folder\n       - "./seata-server/config:/root/seata-config"\n  \n   # seata service 3......seata service N\n')),(0,a.kt)("h2",{id:"environment-variables"},"Environment variables"),(0,a.kt)("p",null,"seata-server supports the following environment variables:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"SEATA_IP"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Optional. It specifies the IP started by seata-server. This IP is used when registering with the registration center, such as eureka, etc.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"SEATA_PORT"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Optional. It is used to specify the port where seata-server starts. The default port is ",(0,a.kt)("inlineCode",{parentName:"p"},"8091"),".")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"STORE_MODE"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Optional. It is used to specify the transaction log storage method of seata-server, supports ",(0,a.kt)("inlineCode",{parentName:"p"},"db"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"file"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"redis")," (supported by Seata-Server 1.3 and above). The default value is ",(0,a.kt)("inlineCode",{parentName:"p"},"file"),".")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"SERVER_NODE"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Optional. It is used to specify the seata-server node ID, such as ",(0,a.kt)("inlineCode",{parentName:"p"},"1"),",",(0,a.kt)("inlineCode",{parentName:"p"},"2"),",",(0,a.kt)("inlineCode",{parentName:"p"},"3"),"... The default value is ",(0,a.kt)("inlineCode",{parentName:"p"},"generated based on ip"),".")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"SEATA_ENV"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Optional. It is used to specify the seata-server operating environment, such as ",(0,a.kt)("inlineCode",{parentName:"p"},"dev"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"test"),", etc. When the service is started, configurations such as ",(0,a.kt)("inlineCode",{parentName:"p"},"registry-dev.conf")," will be used.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"SEATA_CONFIG_NAME"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Optional. It is used to specify the configuration file location, such as ",(0,a.kt)("inlineCode",{parentName:"p"},"file:/root/registry"),", which will load ",(0,a.kt)("inlineCode",{parentName:"p"},"/root/registry.conf")," as the configuration file. If you need to specify the ",(0,a.kt)("inlineCode",{parentName:"p"},"file.conf")," file at the same time, you need to change the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"config.file.name")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"registry.conf")," to something like ",(0,a.kt)("inlineCode",{parentName:"p"},"file:/root/file.conf"),".")))}u.isMDXComponent=!0}}]);