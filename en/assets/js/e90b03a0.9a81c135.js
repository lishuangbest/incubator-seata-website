"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[79850],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(a),m=r,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return a?n.createElement(h,s(s({ref:t},p),{},{components:a})):n.createElement(h,s({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},82544:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={hidden:!0,title:"Deploy Seata Server By Docker Compose",keywords:["docker-compose","ops"],description:"Deploy Seata Server By Docker Compose",author:"zouwei",date:new Date("2022-09-06T00:00:00.000Z")},s="Deploy Seata Server By Docker Compose",i={unversionedId:"ops/deploy-by-docker-compose",id:"version-v1.1/ops/deploy-by-docker-compose",title:"Deploy Seata Server By Docker Compose",description:"Deploy Seata Server By Docker Compose",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-v1.1/ops/deploy-by-docker-compose.md",sourceDirName:"ops",slug:"/ops/deploy-by-docker-compose",permalink:"/en/docs/v1.1/ops/deploy-by-docker-compose",draft:!1,tags:[],version:"v1.1",frontMatter:{hidden:!0,title:"Deploy Seata Server By Docker Compose",keywords:["docker-compose","ops"],description:"Deploy Seata Server By Docker Compose",author:"zouwei",date:"2022-09-06T00:00:00.000Z"}},l={},c=[{value:"Precautions",id:"precautions",level:2},{value:"Use custom configuration file",id:"use-custom-configuration-file",level:2},{value:"Quick Start",id:"quick-start",level:2},{value:'<a id="file-file">No Registration Center, File Storage</a>',id:"no-registration-center-file-storage",level:3},{value:'<a id="file-db">No Registration Center, db Storage</a>',id:"no-registration-center-db-storage",level:3},{value:'<a id="nacos-db">Nacos Registration Center, db Storage</a>',id:"nacos-registration-center-db-storage",level:3},{value:'<a id="ha-nacos-db">High Available Usage Deployment</a>',id:"high-available-usage-deployment",level:3},{value:"Environment variables",id:"environment-variables",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"deploy-seata-server-by-docker-compose"},"Deploy Seata Server By Docker Compose"),(0,r.kt)("h2",{id:"precautions"},"Precautions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Please avoid directly pulling the latest version image. The latest version is not necessarily a stable version. To avoid unnecessary problems, please go to ",(0,r.kt)("a",{parentName:"li",href:"https://hub.docker.com/r/seataio/seata-server/tags"},"docker image warehouse")," to determine the image version to be pulled."),(0,r.kt)("li",{parentName:"ul"},"Starting from Seata Server version 1.5.0, the configuration file has been changed to application.yml. So when using custom configuration, you need to copy the native configuration first.")),(0,r.kt)("h2",{id:"use-custom-configuration-file"},"Use custom configuration file"),(0,r.kt)("p",null,"In order to obtain the configuration file of seata server 1.5.0, we need to first start a service of seata server 1.5.0, then copy the default configuration file from the started container instance, and then modify it."),(0,r.kt)("p",null,"docker-compose.yaml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'version: "3.1"\nservices:\n  seata-server:\n    image: seataio/seata-server:${latest-release-version}\n    ports:\n      - "7091:7091"\n      - "8091:8091"\n')),(0,r.kt)("p",null,"Next, copy the resource file in the ",(0,r.kt)("inlineCode",{parentName:"p"},"/seata-server/resources")," location in the container to the specified location of the host through the ",(0,r.kt)("inlineCode",{parentName:"p"},"docker cp")," command.\nIn the specified location of the host, we can see the corresponding ",(0,r.kt)("inlineCode",{parentName:"p"},"application.yml")," configuration file, and the relevant configuration only needs to modify this file."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The configuration of ",(0,r.kt)("inlineCode",{parentName:"p"},"application.yml")," can refer to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/seata/seata/blob/develop/server/src/main/resources/application.example.yml"},"application.example.yml"))),(0,r.kt)("h2",{id:"quick-start"},"Quick Start"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"#file-file"},"No Registration Center, File Storage")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"#file-db"},"No Registration Center, db Storage")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"#nacos-db"},"Nacos Registration Center, db Storage")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"#ha-nacos-db"},"High Available Usage Deployment"))),(0,r.kt)("h3",{id:"no-registration-center-file-storage"},(0,r.kt)("a",{id:"file-file"},"No Registration Center, File Storage")),(0,r.kt)("p",null,"In this mode, there is no need for a registration center or any third-party storage center."),(0,r.kt)("p",null,"docker-compose.yaml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'version: "3.1"\nservices:\n  seata-server:\n    image: seataio/seata-server:${latest-release-version}\n    hostname: seata-server\n    ports:\n      - "7091:7091"\n      - "8091:8091"\n    environment:\n      - SEATA_PORT=8091\n      - STORE_MODE=file\n')),(0,r.kt)("h3",{id:"no-registration-center-db-storage"},(0,r.kt)("a",{id:"file-db"},"No Registration Center, db Storage")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The db mode needs to create the corresponding table structure in the database, please refer to ",(0,r.kt)("a",{href:"https://github.com/seata/seata/tree/develop/script/server/db"},"[table creation script]"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\uff081\uff09application.yml")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The configuration of ",(0,r.kt)("inlineCode",{parentName:"p"},"application.yml")," can refer to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/seata/seata/blob/develop/server/src/main/resources/application.example.yml"},"application.example.yml"))),(0,r.kt)("p",null,"For more storage mode support, please refer to ",(0,r.kt)("a",{href:"https://github.com/seata/seata/blob/develop/script/config-center/config.txt"},"More Storage Modes"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'server:\n  port: 7091\n\nspring:\n  application:\n    name: seata-server\n\nlogging:\n  config: classpath:logback-spring.xml\n  file:\n    path: ${user.home}/logs/seata\n  extend:\n    logstash-appender:\n      destination: 127.0.0.1:4560\n    kafka-appender:\n      bootstrap-servers: 127.0.0.1:9092\n      topic: logback_to_logstash\n\nconsole:\n  user:\n    username: seata\n    password: seata\n\nseata:\n  config:\n    # support: nacos, consul, apollo, zk, etcd3\n    type: file\n  registry:\n    # support: nacos, eureka, redis, zk, consul, etcd3, sofa\n    type: file\n  store:\n    # support: file \u3001 db \u3001 redis\n    mode: db\n    db:\n      datasource: druid\n      dbType: mysql\n      # Need to adjust driverClassName according to mysql version\n      # Driver corresponding to mysql8 and above versions is: com.mysql.cj.jdbc.Driver\n      # Driver for versions below mysql8 is: com.mysql.jdbc.Driver\n      driverClassName: com.mysql.cj.jdbc.Driver\n      url: jdbc:mysql://127.0.0.1:3306/seata-server?useUnicode=true&characterEncoding=utf8&connectTimeout=1000&socketTimeout=3000&autoReconnect=true&useSSL=false\n      user: "username"\n      password: "password"\n      \n  #  server:\n  #    service-port: 8091 #If not configured, the default is \'${server.port} + 1000\'\n  security:\n    secretKey: SeataSecretKey0c382ef121d778043159209298fd40bf3850a017\n    tokenValidityInMilliseconds: 1800000\n    ignore:\n      urls: /,/**/*.css,/**/*.js,/**/*.html,/**/*.map,/**/*.svg,/**/*.png,/**/*.ico,/console-fe/public/**,/api/v1/auth/login\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\uff082\uff09Prepare file: docker-compose.yaml")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'version: "3.1"\nservices:\n  seata-server:\n    image: seataio/seata-server:1.5.2\n    ports:\n      - "7091:7091"\n      - "8091:8091"\n    environment:\n      - STORE_MODE=db\n      # Register the seata server with SEATA_IP as the host\n      - SEATA_IP=seata_ip\n      - SEATA_PORT=8091\n    volumes:\n      - "/usr/share/zoneinfo/Asia/Shanghai:/etc/localtime" # Set the system time zone\n      - "/usr/share/zoneinfo/Asia/Shanghai:/etc/timezone"  # Set the time zone\n      # Suppose we copy the resource file to the relative path `./seata-server/resources` via the `docker cp` command\n      # If you have questions, please read [Precautions] and [Using Custom Configuration Files] above\n      - "./seata-server/resources:/seata-server/resources"\n')),(0,r.kt)("h3",{id:"nacos-registration-center-db-storage"},(0,r.kt)("a",{id:"nacos-db"},"Nacos Registration Center, db Storage")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The db mode needs to create the corresponding table structure in the database, please refer to ",(0,r.kt)("a",{href:"https://github.com/seata/seata/tree/develop/script/server/db"},"[table creation script]"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\uff081\uff09application.yml")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The configuration of ",(0,r.kt)("inlineCode",{parentName:"p"},"application.yml")," can refer to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/seata/seata/blob/develop/server/src/main/resources/application.example.yml"},"application.example.yml"))),(0,r.kt)("p",null,"Nacos Registration Center."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"server:\n  port: 7091\n\nspring:\n  application:\n    name: seata-server\n\nlogging:\n  config: classpath:logback-spring.xml\n  file:\n    path: ${user.home}/logs/seata\n  extend:\n    logstash-appender:\n      destination: 127.0.0.1:4560\n    kafka-appender:\n      bootstrap-servers: 127.0.0.1:9092\n      topic: logback_to_logstash\n\nconsole:\n  user:\n    username: seata\n    password: seata\n\nseata:\n  config:\n    # support: nacos, consul, apollo, zk, etcd3\n    type: nacos\n    nacos:\n      server-addr: nacos_ip:nacos_port\n      namespace: seata-server\n      group: SEATA_GROUP\n      username: nacos\n      password: nacos\n      data-id: seataServer.properties\n\n  registry:\n    # support: nacos, eureka, redis, zk, consul, etcd3, sofa\n    type: nacos\n    nacos:\n      application: seata-server\n      server-addr: nacos_ip:nacos_port\n      group: SEATA_GROUP\n      namespace: seata-server\n      # TC cluster name\n      cluster: default\n      username: nacos\n      password: nacos\n#  server:\n#    service-port: 8091 #If not configured, the default is '${server.port} + 1000'\n  security:\n    secretKey: SeataSecretKey0c382ef121d778043159209298fd40bf3850a017\n    tokenValidityInMilliseconds: 1800000\n    ignore:\n      urls: /,/**/*.css,/**/*.js,/**/*.html,/**/*.map,/**/*.svg,/**/*.png,/**/*.ico,/console-fe/public/**,/api/v1/auth/login\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\uff082\uff09Prepare nacos configuration center configuration")),(0,r.kt)("p",null,"For more storage mode support, please refer to ",(0,r.kt)("a",{href:"https://github.com/seata/seata/blob/develop/script/config-center/config.txt"},"More Storage Modes"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You need to create a new configuration in nacos, where the dataId is seataServer.properties")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},'store.mode=db\n#-----db-----\nstore.db.datasource=druid\nstore.db.dbType=mysql\n# Need to adjust driverClassName according to mysql version\n# Driver corresponding to mysql8 and above versions is: com.mysql.cj.jdbc.Driver\n# Driver for versions below mysql8 is: com.mysql.jdbc.Driver\nstore.db.driverClassName=com.mysql.cj.jdbc.Driver\nstore.db.url=jdbc:mysql://127.0.0.1:3306/seata-server?useUnicode=true&characterEncoding=utf8&connectTimeout=1000&socketTimeout=3000&autoReconnect=true&useSSL=false\nstore.db.user= "username"\nstore.db.password= "password"\n# Number of initial database connections\nstore.db.minConn=1\n# Maximum number of database connections\nstore.db.maxConn=20\n# Maximum wait time when getting connection. The default value is 5000 milliseconds.\nstore.db.maxWait=5000\n# Global transaction table name. The default value is global_table.\nstore.db.globalTable=global_table\n# Branch transaction table name. The default value is branch_table.\nstore.db.branchTable=branch_table\n# Global lock table name. The default value is lock_table.\nstore.db.lockTable=lock_table\n# Maximum number of global transactions queried at one time. The default value is 100.\nstore.db.queryLimit=100\n\n\n# Undo retention days. The default value is 7 days, log_status=1 (Appendix 3) and undo that is not cleaned up properly\nserver.undo.logSaveDays=7\n# Undo cleanup thread interval time. The default value is 86400000 milliseconds.\nserver.undo.logDeletePeriod=86400000\n# Two-stage commit retry timeout. The units are ms, s, m, h, d, corresponding to milliseconds, seconds, minutes, hours, days, default milliseconds. The default value of -1 means unlimited retries.\n# Formula: timeout>=now-globalTransactionBeginTime, if it\'s true means that the timeout will not be retried.\n# Note: After the timeout period is reached, no retries will be made. So there is a risk of data inconsistency, unless the business can calibrate the data by itself, otherwise use with caution.\nserver.maxCommitRetryTimeout=-1\n# Two-phase rollback retry timeout\nserver.maxRollbackRetryTimeout=-1\n# Two-phase commit incomplete state Global transaction retry commit thread interval time. The default value is 1000 milliseconds.\nserver.recovery.committingRetryPeriod=1000\n# Two-phase asynchronous commit status retry submission thread interval time. The default value is 1000 milliseconds.\nserver.recovery.asynCommittingRetryPeriod=1000\n# Two-stage rollback state retry rollback thread interval time. The default value is 1000 milliseconds.\nserver.recovery.rollbackingRetryPeriod=1000\n# Timeout Status Detection Retry Thread Interval. The default value is 1000 milliseconds, and if timeout is detected, then it puts the global transaction into the rollback session manager.\nserver.recovery.timeoutRetryPeriod=1000\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\uff083\uff09Prepare file: docker-compose.yaml")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'version: "3.1"\nservices:\n  seata-server:\n    image: seataio/seata-server:1.5.2\n    ports:\n      - "7091:7091"\n      - "8091:8091"\n    environment:\n      - STORE_MODE=db\n      # Register the seata server with SEATA_IP as the host\n      - SEATA_IP=seata_ip\n      - SEATA_PORT=8091\n    volumes:\n      - "/usr/share/zoneinfo/Asia/Shanghai:/etc/localtime" # Set the system time zone\n      - "/usr/share/zoneinfo/Asia/Shanghai:/etc/timezone"  # Set the time zone\n      # Suppose we copy the resource file to the relative path `./seata-server/resources` via the `docker cp` command\n      # If you have questions, please read [Precautions] and [Using Custom Configuration Files] above\n      - "./seata-server/resources:/seata-server/resources"\n')),(0,r.kt)("h3",{id:"high-available-usage-deployment"},(0,r.kt)("a",{id:"ha-nacos-db"},"High Available Usage Deployment")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Seata high availability usage deployment relies on the registration center and database, but does not depend on the configuration center. ",(0,r.kt)("br",null),"\nEnsure that multiple Seata Servers use the same registry and the same storage center to form a highly available deployment.",(0,r.kt)("br",null),"\nThe db mode needs to create the corresponding table structure in the database,  please refer to ",(0,r.kt)("a",{href:"https://github.com/seata/seata/tree/develop/script/server/db"},"[table creation script]"),".",(0,r.kt)("br",null))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\uff081\uff09application.yml")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The configuration of ",(0,r.kt)("inlineCode",{parentName:"p"},"application.yml")," can refer to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/seata/seata/blob/develop/server/src/main/resources/application.example.yml"},"application.example.yml"))),(0,r.kt)("p",null,"For more storage mode support, please refer to ",(0,r.kt)("a",{href:"https://github.com/seata/seata/blob/develop/script/config-center/config.txt"},"More Storage Modes"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"server:\n  port: 7091\n\nspring:\n  application:\n    name: seata-server\n\nlogging:\n  config: classpath:logback-spring.xml\n  file:\n    path: ${user.home}/logs/seata\n  extend:\n    logstash-appender:\n      destination: 127.0.0.1:4560\n    kafka-appender:\n      bootstrap-servers: 127.0.0.1:9092\n      topic: logback_to_logstash\n\nconsole:\n  user:\n    username: seata\n    password: seata\n\nseata:\n  config:\n    # support: nacos, consul, apollo, zk, etcd3\n    type: nacos\n    nacos:\n      server-addr: nacos_ip:nacos_port\n      namespace: seata-server\n      group: SEATA_GROUP\n      usernam: nacos\n      password: nacos\n      data-id: seataServer.properties\n\n  registry:\n    # support: nacos, eureka, redis, zk, consul, etcd3, sofa\n    type: nacos\n    nacos:\n      application: seata-server\n      server-addr: nacos_ip:nacos_port\n      group: SEATA_GROUP\n      namespace: seata-server\n      # TC cluster name\n      cluster: default\n      username: nacos\n      password: nacos\n    #  store:\n    # support: file \u3001 db \u3001 redis\n  #    mode: file\n  #  server:\n  #    service-port: 8091 #If not configured, the default is '${server.port} + 1000'\n  security:\n    secretKey: SeataSecretKey0c382ef121d778043159209298fd40bf3850a017\n    tokenValidityInMilliseconds: 1800000\n    ignore:\n      urls: /,/**/*.css,/**/*.js,/**/*.html,/**/*.map,/**/*.svg,/**/*.png,/**/*.ico,/console-fe/public/**,/api/v1/auth/login\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\uff082\uff09Prepare nacos configuration center configuration")),(0,r.kt)("p",null,"For more storage mode support, please refer to ",(0,r.kt)("a",{href:"https://github.com/seata/seata/blob/develop/script/config-center/config.txt"},"More Storage Modes"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You need to create a new configuration in nacos, where the dataId is seataServer.properties")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},'store.mode=db\n#-----db-----\nstore.db.datasource=druid\nstore.db.dbType=mysql\n# Need to adjust driverClassName according to mysql version\n# Driver corresponding to mysql8 and above versions is: com.mysql.cj.jdbc.Driver\n# Driver for versions below mysql8 is: com.mysql.jdbc.Driver\nstore.db.driverClassName=com.mysql.cj.jdbc.Driver\nstore.db.url=jdbc:mysql://127.0.0.1:3306/seata-server?useUnicode=true&characterEncoding=utf8&connectTimeout=1000&socketTimeout=3000&autoReconnect=true&useSSL=false\nstore.db.user= "username"\nstore.db.password= "password"\n# Number of initial database connections\nstore.db.minConn=1\n# Maximum number of database connections\nstore.db.maxConn=20\n# Maximum wait time when getting connection. The default value is 5000 milliseconds.\nstore.db.maxWait=5000\n# Global transaction table name. The default value is global_table.\nstore.db.globalTable=global_table\n# Branch transaction table name. The default value is branch_table.\nstore.db.branchTable=branch_table\n# Global lock table name. The default value is lock_table.\nstore.db.lockTable=lock_table\n# Maximum number of global transactions queried at one time. The default value is 100.\nstore.db.queryLimit=100\n\n# Undo retention days. The default value is 7 days, log_status=1 (Appendix 3) and undo that is not cleaned up properly\nserver.undo.logSaveDays=7\n# Undo cleanup thread interval time. The default value is 86400000 milliseconds.\nserver.undo.logDeletePeriod=86400000\n# Two-stage commit retry timeout. The units are ms, s, m, h, d, corresponding to milliseconds, seconds, minutes, hours, days, default milliseconds. The default value of -1 means unlimited retries.\n# Formula: timeout>=now-globalTransactionBeginTime, if it\'s true means that the timeout will not be retried.\n# Note: After the timeout period is reached, no retries will be made. So there is a risk of data inconsistency, unless the business can calibrate the data by itself, otherwise use with caution.\nserver.maxCommitRetryTimeout=-1\n# Two-phase rollback retry timeout\nserver.maxRollbackRetryTimeout=-1\n# Two-phase commit incomplete state Global transaction retry commit thread interval time. The default value is 1000 milliseconds.\nserver.recovery.committingRetryPeriod=1000\n# Two-phase asynchronous commit status retry submission thread interval time. The default value is 1000 milliseconds.\nserver.recovery.asynCommittingRetryPeriod=1000\n# Two-stage rollback state retry rollback thread interval time. The default value is 1000 milliseconds.\nserver.recovery.rollbackingRetryPeriod=1000\n# Timeout Status Detection Retry Thread Interval. The default value is 1000 milliseconds, and if timeout is detected, then it puts the global transaction into the rollback session manager.\nserver.recovery.timeoutRetryPeriod=1000\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\uff083\uff09Prepare file: docker-compose.yaml")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"As long as the configuration is consistent, the seata service can be deployed on multiple instances on one machine or on multiple different hosts at the same time to achieve high service availability. ",(0,r.kt)("br",null),"\n",(0,r.kt)("a",{parentName:"p",href:"https://seata.io/zh-cn/docs/ops/deploy-ha.html"},"High Availability Usage Deployment"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'version: "3.1"\nservices:\n  seata-server-1:\n    image: seataio/seata-server:${latest-release-version}\n    ports:\n      - "7091:7091"\n      - "8091:8091"\n    environment:\n      - STORE_MODE=db\n      # Register the seata server with SEATA_IP as the host\n      - SEATA_IP=seata_ip\n      - SEATA_PORT=8091\n    volumes:\n      - "/usr/share/zoneinfo/Asia/Shanghai:/etc/localtime" # Set the system time zone\n      - "/usr/share/zoneinfo/Asia/Shanghai:/etc/timezone"  # Set the time zone\n      # Suppose we copy the resource file to the relative path `./seata-server/resources` via the `docker cp` command\n      # If you have questions, please read [Precautions] and [Using Custom Configuration Files] above\n      - "./seata-server/resources:/seata-server/resources"\n\n  seata-server-2:\n    image: seataio/seata-server:${latest-release-version}\n    ports:\n      - "7092:7091"\n      - "8092:8092"\n    environment:\n      - STORE_MODE=db\n      # Register the seata server with SEATA_IP as the host\n      - SEATA_IP=seata_ip\n      - SEATA_PORT=8091\n    volumes:\n      - "/usr/share/zoneinfo/Asia/Shanghai:/etc/localtime" # Set the system time zone\n      - "/usr/share/zoneinfo/Asia/Shanghai:/etc/timezone"  # Set the time zone\n      # Suppose we copy the resource file to the relative path `./seata-server/resources` via the `docker cp` command\n      # If you have questions, please read [Precautions] and [Using Custom Configuration Files] above\n      - "./seata-server/resources:/seata-server/resources"\n\n  # seata Service 3......seata Service N\n')),(0,r.kt)("h2",{id:"environment-variables"},"Environment variables"),(0,r.kt)("p",null,"seata-server supports the following environment variables:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"SEATA_IP"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Optional. It specifies the IP started by seata-server. This IP is used when registering with the registration center, such as eureka, etc.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"SEATA_PORT"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Optional. It is used to specify the port where seata-server starts. The default port is ",(0,r.kt)("inlineCode",{parentName:"p"},"8091"),".")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"STORE_MODE"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Optional. It is used to specify the transaction log storage method of seata-server, supports ",(0,r.kt)("inlineCode",{parentName:"p"},"db"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"file"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"redis")," (supported by Seata-Server 1.3 and above). The default value is ",(0,r.kt)("inlineCode",{parentName:"p"},"file"),".")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"SERVER_NODE"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Optional. It is used to specify the seata-server node ID, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"1"),",",(0,r.kt)("inlineCode",{parentName:"p"},"2"),",",(0,r.kt)("inlineCode",{parentName:"p"},"3"),"... The default value is ",(0,r.kt)("inlineCode",{parentName:"p"},"generated based on ip"),".")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"SEATA_ENV"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Optional. It is used to specify the seata-server operating environment, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"dev"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"test"),", etc. When the service is started, configurations such as ",(0,r.kt)("inlineCode",{parentName:"p"},"registry-dev.conf")," will be used.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"SEATA_CONFIG_NAME"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Optional. It is used to specify the configuration file location, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"file:/root/registry"),", which will load ",(0,r.kt)("inlineCode",{parentName:"p"},"/root/registry.conf")," as the configuration file. If you need to specify the ",(0,r.kt)("inlineCode",{parentName:"p"},"file.conf")," file at the same time, you need to change the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"config.file.name")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"registry.conf")," to something like ",(0,r.kt)("inlineCode",{parentName:"p"},"file:/root/file.conf"),".")))}d.isMDXComponent=!0}}]);