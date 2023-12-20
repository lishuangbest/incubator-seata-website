"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[7383],{3905:(n,e,t)=>{t.d(e,{Zo:()=>l,kt:()=>p});var a=t(67294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,a,r=function(n,e){if(null==n)return{};var t,a,r={},o=Object.keys(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var c=a.createContext({}),d=function(n){var e=a.useContext(c),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},l=function(n){var e=d(n.components);return a.createElement(c.Provider,{value:e},n.children)},N="mdxType",T={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},E=a.forwardRef((function(n,e){var t=n.components,r=n.mdxType,o=n.originalType,c=n.parentName,l=s(n,["components","mdxType","originalType","parentName"]),N=d(t),E=r,p=N["".concat(c,".").concat(E)]||N[E]||T[E]||o;return t?a.createElement(p,i(i({ref:e},l),{},{components:t})):a.createElement(p,i({ref:e},l))}));function p(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var o=t.length,i=new Array(o);i[0]=E;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=n,s[N]="string"==typeof n?n:r,i[1]=s;for(var d=2;d<o;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}E.displayName="MDXCreateElement"},27705:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>T,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=t(87462),r=(t(67294),t(3905));const o={title:"Docker\u90e8\u7f72Seata\u4e0eNacos\u6574\u5408",keywords:["Seata","Nacos","\u5206\u5e03\u5f0f\u4e8b\u52a1"],description:"\u672c\u6587\u8bb2\u8ff0\u5982\u4f55\u4f7f\u7528Seata\u6574\u5408Nacos\u914d\u7f6e\u7684Docker\u90e8\u7f72",author:"FUNKYE",date:"2019/12/03"},i="Docker\u90e8\u7f72Seata\u4e0eNacos\u6574\u5408",s={permalink:"/zh-cn/blog/seata-nacos-docker",source:"@site/i18n/zh-cn/docusaurus-plugin-content-blog/seata-nacos-docker.md",title:"Docker\u90e8\u7f72Seata\u4e0eNacos\u6574\u5408",description:"\u672c\u6587\u8bb2\u8ff0\u5982\u4f55\u4f7f\u7528Seata\u6574\u5408Nacos\u914d\u7f6e\u7684Docker\u90e8\u7f72",date:"2019-12-03T00:00:00.000Z",formattedDate:"2019\u5e7412\u67083\u65e5",tags:[],readingTime:11.645,hasTruncateMarker:!1,authors:[{name:"FUNKYE"}],frontMatter:{title:"Docker\u90e8\u7f72Seata\u4e0eNacos\u6574\u5408",keywords:["Seata","Nacos","\u5206\u5e03\u5f0f\u4e8b\u52a1"],description:"\u672c\u6587\u8bb2\u8ff0\u5982\u4f55\u4f7f\u7528Seata\u6574\u5408Nacos\u914d\u7f6e\u7684Docker\u90e8\u7f72",author:"FUNKYE",date:"2019/12/03"},prevItem:{title:"Seata \u914d\u7f6e\u4e2d\u5fc3\u5b9e\u73b0\u539f\u7406",permalink:"/zh-cn/blog/seata-config-center"},nextItem:{title:"Seata\u5206\u5e03\u5f0f\u4e8b\u52a1\u542f\u7528Nacos\u505a\u914d\u7f6e\u4e2d\u5fc3",permalink:"/zh-cn/blog/seata-nacos-analysis"}},c={authorsImageUrls:[void 0]},d=[{value:"\u51c6\u5907\u5de5\u4f5c",id:"\u51c6\u5907\u5de5\u4f5c",level:2},{value:"Seata\u914d\u7f6e",id:"seata\u914d\u7f6e",level:2}],l={toc:d},N="wrapper";function T(n){let{components:e,...o}=n;return(0,r.kt)(N,(0,a.Z)({},l,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u8fd0\u884c\u6240\u4f7f\u7528\u7684demo",(0,r.kt)("a",{parentName:"p",href:"https://gitee.com/itCjb/springboot-dubbo-mybatisplus-seata"},"\u9879\u76ee\u5730\u5740")),(0,r.kt)("p",null,"\u672c\u6587\u4f5c\u8005\uff1aFUNKYE(\u9648\u5065\u658c),\u676d\u5dde\u67d0\u4e92\u8054\u7f51\u516c\u53f8\u4e3b\u7a0b\u3002"),(0,r.kt)("h1",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,r.kt)("p",null,"\u76f4\u8fde\u65b9\u5f0f\u7684Seata\u914d\u7f6e",(0,r.kt)("a",{parentName:"p",href:"http://seata.io/zh-cn/blog/springboot-dubbo-mybatisplus-seata.html"},"\u535a\u5ba2")),(0,r.kt)("p",null,"Seata\u6574\u5408Nacos\u914d\u7f6e",(0,r.kt)("a",{parentName:"p",href:"http://seata.io/zh-cn/blog/seata-nacos-analysis.html"},"\u535a\u5ba2")),(0,r.kt)("p",null,"\u6211\u4eec\u63a5\u7740\u524d\u51e0\u7bc7\u7bc7\u7684\u57fa\u7840\u4e0a\u53bb\u914d\u7f6enacos\u505a\u914d\u7f6e\u4e2d\u5fc3\u8ddfdubbo\u6ce8\u518c\u4e2d\u5fc3."),(0,r.kt)("h2",{id:"\u51c6\u5907\u5de5\u4f5c"},"\u51c6\u5907\u5de5\u4f5c"),(0,r.kt)("p",null,"\u200b\t1.\u5b89\u88c5docker"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yum -y install docker\n")),(0,r.kt)("p",null,"\u200b\t2.\u521b\u5efanacos\u4e0eseata\u7684\u6570\u636e\u5e93"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-mysql"},"/******************************************/\n/*   \u6570\u636e\u5e93\u5168\u540d = nacos   */\n/*   \u8868\u540d\u79f0 = config_info   */\n/******************************************/\nCREATE TABLE `config_info` (\n  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'id',\n  `data_id` varchar(255) NOT NULL COMMENT 'data_id',\n  `group_id` varchar(255) DEFAULT NULL,\n  `content` longtext NOT NULL COMMENT 'content',\n  `md5` varchar(32) DEFAULT NULL COMMENT 'md5',\n  `gmt_create` datetime NOT NULL DEFAULT '2010-05-05 00:00:00' COMMENT '\u521b\u5efa\u65f6\u95f4',\n  `gmt_modified` datetime NOT NULL DEFAULT '2010-05-05 00:00:00' COMMENT '\u4fee\u6539\u65f6\u95f4',\n  `src_user` text COMMENT 'source user',\n  `src_ip` varchar(20) DEFAULT NULL COMMENT 'source ip',\n  `app_name` varchar(128) DEFAULT NULL,\n  `tenant_id` varchar(128) DEFAULT '' COMMENT '\u79df\u6237\u5b57\u6bb5',\n  `c_desc` varchar(256) DEFAULT NULL,\n  `c_use` varchar(64) DEFAULT NULL,\n  `effect` varchar(64) DEFAULT NULL,\n  `type` varchar(64) DEFAULT NULL,\n  `c_schema` text,\n  PRIMARY KEY (`id`),\n  UNIQUE KEY `uk_configinfo_datagrouptenant` (`data_id`,`group_id`,`tenant_id`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='config_info';\n\n/******************************************/\n/*   \u6570\u636e\u5e93\u5168\u540d = nacos_config   */\n/*   \u8868\u540d\u79f0 = config_info_aggr   */\n/******************************************/\nCREATE TABLE `config_info_aggr` (\n  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'id',\n  `data_id` varchar(255) NOT NULL COMMENT 'data_id',\n  `group_id` varchar(255) NOT NULL COMMENT 'group_id',\n  `datum_id` varchar(255) NOT NULL COMMENT 'datum_id',\n  `content` longtext NOT NULL COMMENT '\u5185\u5bb9',\n  `gmt_modified` datetime NOT NULL COMMENT '\u4fee\u6539\u65f6\u95f4',\n  `app_name` varchar(128) DEFAULT NULL,\n  `tenant_id` varchar(128) DEFAULT '' COMMENT '\u79df\u6237\u5b57\u6bb5',\n  PRIMARY KEY (`id`),\n  UNIQUE KEY `uk_configinfoaggr_datagrouptenantdatum` (`data_id`,`group_id`,`tenant_id`,`datum_id`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='\u589e\u52a0\u79df\u6237\u5b57\u6bb5';\n\n\n/******************************************/\n/*   \u6570\u636e\u5e93\u5168\u540d = nacos_config   */\n/*   \u8868\u540d\u79f0 = config_info_beta   */\n/******************************************/\nCREATE TABLE `config_info_beta` (\n  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'id',\n  `data_id` varchar(255) NOT NULL COMMENT 'data_id',\n  `group_id` varchar(128) NOT NULL COMMENT 'group_id',\n  `app_name` varchar(128) DEFAULT NULL COMMENT 'app_name',\n  `content` longtext NOT NULL COMMENT 'content',\n  `beta_ips` varchar(1024) DEFAULT NULL COMMENT 'betaIps',\n  `md5` varchar(32) DEFAULT NULL COMMENT 'md5',\n  `gmt_create` datetime NOT NULL DEFAULT '2010-05-05 00:00:00' COMMENT '\u521b\u5efa\u65f6\u95f4',\n  `gmt_modified` datetime NOT NULL DEFAULT '2010-05-05 00:00:00' COMMENT '\u4fee\u6539\u65f6\u95f4',\n  `src_user` text COMMENT 'source user',\n  `src_ip` varchar(20) DEFAULT NULL COMMENT 'source ip',\n  `tenant_id` varchar(128) DEFAULT '' COMMENT '\u79df\u6237\u5b57\u6bb5',\n  PRIMARY KEY (`id`),\n  UNIQUE KEY `uk_configinfobeta_datagrouptenant` (`data_id`,`group_id`,`tenant_id`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='config_info_beta';\n\n/******************************************/\n/*   \u6570\u636e\u5e93\u5168\u540d = nacos_config   */\n/*   \u8868\u540d\u79f0 = config_info_tag   */\n/******************************************/\nCREATE TABLE `config_info_tag` (\n  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'id',\n  `data_id` varchar(255) NOT NULL COMMENT 'data_id',\n  `group_id` varchar(128) NOT NULL COMMENT 'group_id',\n  `tenant_id` varchar(128) DEFAULT '' COMMENT 'tenant_id',\n  `tag_id` varchar(128) NOT NULL COMMENT 'tag_id',\n  `app_name` varchar(128) DEFAULT NULL COMMENT 'app_name',\n  `content` longtext NOT NULL COMMENT 'content',\n  `md5` varchar(32) DEFAULT NULL COMMENT 'md5',\n  `gmt_create` datetime NOT NULL DEFAULT '2010-05-05 00:00:00' COMMENT '\u521b\u5efa\u65f6\u95f4',\n  `gmt_modified` datetime NOT NULL DEFAULT '2010-05-05 00:00:00' COMMENT '\u4fee\u6539\u65f6\u95f4',\n  `src_user` text COMMENT 'source user',\n  `src_ip` varchar(20) DEFAULT NULL COMMENT 'source ip',\n  PRIMARY KEY (`id`),\n  UNIQUE KEY `uk_configinfotag_datagrouptenanttag` (`data_id`,`group_id`,`tenant_id`,`tag_id`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='config_info_tag';\n\n/******************************************/\n/*   \u6570\u636e\u5e93\u5168\u540d = nacos_config   */\n/*   \u8868\u540d\u79f0 = config_tags_relation   */\n/******************************************/\nCREATE TABLE `config_tags_relation` (\n  `id` bigint(20) NOT NULL COMMENT 'id',\n  `tag_name` varchar(128) NOT NULL COMMENT 'tag_name',\n  `tag_type` varchar(64) DEFAULT NULL COMMENT 'tag_type',\n  `data_id` varchar(255) NOT NULL COMMENT 'data_id',\n  `group_id` varchar(128) NOT NULL COMMENT 'group_id',\n  `tenant_id` varchar(128) DEFAULT '' COMMENT 'tenant_id',\n  `nid` bigint(20) NOT NULL AUTO_INCREMENT,\n  PRIMARY KEY (`nid`),\n  UNIQUE KEY `uk_configtagrelation_configidtag` (`id`,`tag_name`,`tag_type`),\n  KEY `idx_tenant_id` (`tenant_id`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='config_tag_relation';\n\n/******************************************/\n/*   \u6570\u636e\u5e93\u5168\u540d = nacos_config   */\n/*   \u8868\u540d\u79f0 = group_capacity   */\n/******************************************/\nCREATE TABLE `group_capacity` (\n  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT COMMENT '\u4e3b\u952eID',\n  `group_id` varchar(128) NOT NULL DEFAULT '' COMMENT 'Group ID\uff0c\u7a7a\u5b57\u7b26\u8868\u793a\u6574\u4e2a\u96c6\u7fa4',\n  `quota` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '\u914d\u989d\uff0c0\u8868\u793a\u4f7f\u7528\u9ed8\u8ba4\u503c',\n  `usage` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '\u4f7f\u7528\u91cf',\n  `max_size` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '\u5355\u4e2a\u914d\u7f6e\u5927\u5c0f\u4e0a\u9650\uff0c\u5355\u4f4d\u4e3a\u5b57\u8282\uff0c0\u8868\u793a\u4f7f\u7528\u9ed8\u8ba4\u503c',\n  `max_aggr_count` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '\u805a\u5408\u5b50\u914d\u7f6e\u6700\u5927\u4e2a\u6570\uff0c\uff0c0\u8868\u793a\u4f7f\u7528\u9ed8\u8ba4\u503c',\n  `max_aggr_size` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '\u5355\u4e2a\u805a\u5408\u6570\u636e\u7684\u5b50\u914d\u7f6e\u5927\u5c0f\u4e0a\u9650\uff0c\u5355\u4f4d\u4e3a\u5b57\u8282\uff0c0\u8868\u793a\u4f7f\u7528\u9ed8\u8ba4\u503c',\n  `max_history_count` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '\u6700\u5927\u53d8\u66f4\u5386\u53f2\u6570\u91cf',\n  `gmt_create` datetime NOT NULL DEFAULT '2010-05-05 00:00:00' COMMENT '\u521b\u5efa\u65f6\u95f4',\n  `gmt_modified` datetime NOT NULL DEFAULT '2010-05-05 00:00:00' COMMENT '\u4fee\u6539\u65f6\u95f4',\n  PRIMARY KEY (`id`),\n  UNIQUE KEY `uk_group_id` (`group_id`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='\u96c6\u7fa4\u3001\u5404Group\u5bb9\u91cf\u4fe1\u606f\u8868';\n\n/******************************************/\n/*   \u6570\u636e\u5e93\u5168\u540d = nacos_config   */\n/*   \u8868\u540d\u79f0 = his_config_info   */\n/******************************************/\nCREATE TABLE `his_config_info` (\n  `id` bigint(64) unsigned NOT NULL,\n  `nid` bigint(20) unsigned NOT NULL AUTO_INCREMENT,\n  `data_id` varchar(255) NOT NULL,\n  `group_id` varchar(128) NOT NULL,\n  `app_name` varchar(128) DEFAULT NULL COMMENT 'app_name',\n  `content` longtext NOT NULL,\n  `md5` varchar(32) DEFAULT NULL,\n  `gmt_create` datetime NOT NULL DEFAULT '2010-05-05 00:00:00',\n  `gmt_modified` datetime NOT NULL DEFAULT '2010-05-05 00:00:00',\n  `src_user` text,\n  `src_ip` varchar(20) DEFAULT NULL,\n  `op_type` char(10) DEFAULT NULL,\n  `tenant_id` varchar(128) DEFAULT '' COMMENT '\u79df\u6237\u5b57\u6bb5',\n  PRIMARY KEY (`nid`),\n  KEY `idx_gmt_create` (`gmt_create`),\n  KEY `idx_gmt_modified` (`gmt_modified`),\n  KEY `idx_did` (`data_id`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='\u591a\u79df\u6237\u6539\u9020';\n\n\n/******************************************/\n/*   \u6570\u636e\u5e93\u5168\u540d = nacos_config   */\n/*   \u8868\u540d\u79f0 = tenant_capacity   */\n/******************************************/\nCREATE TABLE `tenant_capacity` (\n  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT COMMENT '\u4e3b\u952eID',\n  `tenant_id` varchar(128) NOT NULL DEFAULT '' COMMENT 'Tenant ID',\n  `quota` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '\u914d\u989d\uff0c0\u8868\u793a\u4f7f\u7528\u9ed8\u8ba4\u503c',\n  `usage` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '\u4f7f\u7528\u91cf',\n  `max_size` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '\u5355\u4e2a\u914d\u7f6e\u5927\u5c0f\u4e0a\u9650\uff0c\u5355\u4f4d\u4e3a\u5b57\u8282\uff0c0\u8868\u793a\u4f7f\u7528\u9ed8\u8ba4\u503c',\n  `max_aggr_count` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '\u805a\u5408\u5b50\u914d\u7f6e\u6700\u5927\u4e2a\u6570',\n  `max_aggr_size` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '\u5355\u4e2a\u805a\u5408\u6570\u636e\u7684\u5b50\u914d\u7f6e\u5927\u5c0f\u4e0a\u9650\uff0c\u5355\u4f4d\u4e3a\u5b57\u8282\uff0c0\u8868\u793a\u4f7f\u7528\u9ed8\u8ba4\u503c',\n  `max_history_count` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '\u6700\u5927\u53d8\u66f4\u5386\u53f2\u6570\u91cf',\n  `gmt_create` datetime NOT NULL DEFAULT '2010-05-05 00:00:00' COMMENT '\u521b\u5efa\u65f6\u95f4',\n  `gmt_modified` datetime NOT NULL DEFAULT '2010-05-05 00:00:00' COMMENT '\u4fee\u6539\u65f6\u95f4',\n  PRIMARY KEY (`id`),\n  UNIQUE KEY `uk_tenant_id` (`tenant_id`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='\u79df\u6237\u5bb9\u91cf\u4fe1\u606f\u8868';\n\n\nCREATE TABLE `tenant_info` (\n  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'id',\n  `kp` varchar(128) NOT NULL COMMENT 'kp',\n  `tenant_id` varchar(128) default '' COMMENT 'tenant_id',\n  `tenant_name` varchar(128) default '' COMMENT 'tenant_name',\n  `tenant_desc` varchar(256) DEFAULT NULL COMMENT 'tenant_desc',\n  `create_source` varchar(32) DEFAULT NULL COMMENT 'create_source',\n  `gmt_create` bigint(20) NOT NULL COMMENT '\u521b\u5efa\u65f6\u95f4',\n  `gmt_modified` bigint(20) NOT NULL COMMENT '\u4fee\u6539\u65f6\u95f4',\n  PRIMARY KEY (`id`),\n  UNIQUE KEY `uk_tenant_info_kptenantid` (`kp`,`tenant_id`),\n  KEY `idx_tenant_id` (`tenant_id`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='tenant_info';\n\nCREATE TABLE users (\n    username varchar(50) NOT NULL PRIMARY KEY,\n    password varchar(500) NOT NULL,\n    enabled boolean NOT NULL\n);\n\nCREATE TABLE roles (\n    username varchar(50) NOT NULL,\n    role varchar(50) NOT NULL\n);\n\nINSERT INTO users (username, password, enabled) VALUES ('nacos', '$2a$10$EuWPZHzz32dJN7jexM34MOeYirDdFAZm2kuWj7VEOJhhZkDrxfvUu', TRUE);\n\nINSERT INTO roles (username, role) VALUES ('nacos', 'ROLE_ADMIN');\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-mysql"},"-- the table to store GlobalSession data\nCREATE TABLE IF NOT EXISTS `global_table`\n(\n    `xid`                       VARCHAR(128) NOT NULL,\n    `transaction_id`            BIGINT,\n    `status`                    TINYINT      NOT NULL,\n    `application_id`            VARCHAR(32),\n    `transaction_service_group` VARCHAR(32),\n    `transaction_name`          VARCHAR(128),\n    `timeout`                   INT,\n    `begin_time`                BIGINT,\n    `application_data`          VARCHAR(2000),\n    `gmt_create`                DATETIME,\n    `gmt_modified`              DATETIME,\n    PRIMARY KEY (`xid`),\n    KEY `idx_gmt_modified_status` (`gmt_modified`, `status`),\n    KEY `idx_transaction_id` (`transaction_id`)\n) ENGINE = InnoDB\n  DEFAULT CHARSET = utf8;\n\n-- the table to store BranchSession data\nCREATE TABLE IF NOT EXISTS `branch_table`\n(\n    `branch_id`         BIGINT       NOT NULL,\n    `xid`               VARCHAR(128) NOT NULL,\n    `transaction_id`    BIGINT,\n    `resource_group_id` VARCHAR(32),\n    `resource_id`       VARCHAR(256),\n    `branch_type`       VARCHAR(8),\n    `status`            TINYINT,\n    `client_id`         VARCHAR(64),\n    `application_data`  VARCHAR(2000),\n    `gmt_create`        DATETIME(6),\n    `gmt_modified`      DATETIME(6),\n    PRIMARY KEY (`branch_id`),\n    KEY `idx_xid` (`xid`)\n) ENGINE = InnoDB\n  DEFAULT CHARSET = utf8;\n\n-- the table to store lock data\nCREATE TABLE IF NOT EXISTS `lock_table`\n(\n    `row_key`        VARCHAR(128) NOT NULL,\n    `xid`            VARCHAR(128),\n    `transaction_id` BIGINT,\n    `branch_id`      BIGINT       NOT NULL,\n    `resource_id`    VARCHAR(256),\n    `table_name`     VARCHAR(32),\n    `pk`             VARCHAR(36),\n    `gmt_create`     DATETIME,\n    `gmt_modified`   DATETIME,\n    PRIMARY KEY (`row_key`),\n    KEY `idx_branch_id` (`branch_id`)\n) ENGINE = InnoDB\n  DEFAULT CHARSET = utf8;\n\n")),(0,r.kt)("p",null,"\u200b\t3.\u62c9\u53d6nacos\u4ee5\u53caseata\u955c\u50cf\u5e76\u8fd0\u884c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker run -d --name nacos -p 8848:8848 -e MODE=standalone -e MYSQL_MASTER_SERVICE_HOST=\u4f60\u7684mysql\u6240\u5728ip -e MYSQL_MASTER_SERVICE_DB_NAME=nacos -e MYSQL_MASTER_SERVICE_USER=root -e MYSQL_MASTER_SERVICE_PASSWORD=mysql\u5bc6\u7801 -e MYSQL_SLAVE_SERVICE_HOST=\u4f60\u7684mysql\u6240\u5728ip -e SPRING_DATASOURCE_PLATFORM=mysql -e MYSQL_DATABASE_NUM=1 nacos/nacos-server:latest\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker run -d --name seata -p 8091:8091 -e SEATA_IP=\u4f60\u60f3\u6307\u5b9a\u7684ip -e SEATA_PORT=8091 seataio/seata-server:1.4.2\n")),(0,r.kt)("h2",{id:"seata\u914d\u7f6e"},"Seata\u914d\u7f6e"),(0,r.kt)("p",null,"\u200b\t1.\u7531\u4e8eseata\u5bb9\u5668\u5185\u6ca1\u6709\u5185\u7f6evim,\u6211\u4eec\u53ef\u4ee5\u76f4\u63a5\u5c06\u8981\u6587\u4ef6\u5939cp\u5230\u5bbf\u4e3b\u673a\u5916\u6765\u7f16\u8f91\u597d\u4e86,\u518dcp\u56de\u53bb"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker cp \u5bb9\u5668id:seata-server/resources \u4f60\u60f3\u653e\u7f6e\u7684\u76ee\u5f55\n")),(0,r.kt)("p",null,"\u200b\t2.\u4f7f\u7528\u5982\u4e0b\u4ee3\u7801\u83b7\u53d6\u4e24\u4e2a\u5bb9\u5668\u7684ip\u5730\u5740"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker inspect --format='{{.NetworkSettings.IPAddress}}' ID/NAMES\n")),(0,r.kt)("p",null,"\u200b\t3.nacos-config.txt\u7f16\u8f91\u4e3a\u5982\u4e0b\u5185\u5bb9"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"transport.type=TCP\ntransport.server=NIO\ntransport.heartbeat=true\ntransport.enableClientBatchSendRequest=false\ntransport.threadFactory.bossThreadPrefix=NettyBoss\ntransport.threadFactory.workerThreadPrefix=NettyServerNIOWorker\ntransport.threadFactory.serverExecutorThreadPrefix=NettyServerBizHandler\ntransport.threadFactory.shareBossWorker=false\ntransport.threadFactory.clientSelectorThreadPrefix=NettyClientSelector\ntransport.threadFactory.clientSelectorThreadSize=1\ntransport.threadFactory.clientWorkerThreadPrefix=NettyClientWorkerThread\ntransport.threadFactory.bossThreadSize=1\ntransport.threadFactory.workerThreadSize=default\ntransport.shutdown.wait=3\nservice.vgroupMapping.\u4f60\u7684\u4e8b\u52a1\u7ec4\u540d=default\nservice.default.grouplist=127.0.0.1:8091\nservice.enableDegrade=false\nservice.disableGlobalTransaction=false\nclient.rm.asyncCommitBufferLimit=10000\nclient.rm.lock.retryInterval=10\nclient.rm.lock.retryTimes=30\nclient.rm.lock.retryPolicyBranchRollbackOnConflict=true\nclient.rm.reportRetryCount=5\nclient.rm.tableMetaCheckEnable=false\nclient.rm.tableMetaCheckerInterval=60000\nclient.rm.sqlParserType=druid\nclient.rm.reportSuccessEnable=false\nclient.rm.sagaBranchRegisterEnable=false\nclient.tm.commitRetryCount=5\nclient.tm.rollbackRetryCount=5\nclient.tm.defaultGlobalTransactionTimeout=60000\nclient.tm.degradeCheck=false\nclient.tm.degradeCheckAllowTimes=10\nclient.tm.degradeCheckPeriod=2000\nstore.mode=file\nstore.publicKey=\nstore.file.dir=file_store/data\nstore.file.maxBranchSessionSize=16384\nstore.file.maxGlobalSessionSize=512\nstore.file.fileWriteBufferCacheSize=16384\nstore.file.flushDiskMode=async\nstore.file.sessionReloadReadSize=100\nstore.db.datasource=druid\nstore.db.dbType=mysql\nstore.db.driverClassName=com.mysql.jdbc.Driver\nstore.db.url=jdbc:mysql://\u4f60\u7684mysql\u6240\u5728ip:3306/seata?useUnicode=true&rewriteBatchedStatements=true\nstore.db.user=mysql\u8d26\u53f7\nstore.db.password=mysql\u5bc6\u7801\nstore.db.minConn=5\nstore.db.maxConn=30\nstore.db.globalTable=global_table\nstore.db.branchTable=branch_table\nstore.db.queryLimit=100\nstore.db.lockTable=lock_table\nstore.db.maxWait=5000\nserver.recovery.committingRetryPeriod=1000\nserver.recovery.asynCommittingRetryPeriod=1000\nserver.recovery.rollbackingRetryPeriod=1000\nserver.recovery.timeoutRetryPeriod=1000\nserver.maxCommitRetryTimeout=-1\nserver.maxRollbackRetryTimeout=-1\nserver.rollbackRetryTimeoutUnlockEnable=false\nclient.undo.dataValidation=true\nclient.undo.logSerialization=jackson\nclient.undo.onlyCareUpdateColumns=true\nserver.undo.logSaveDays=7\nserver.undo.logDeletePeriod=86400000\nclient.undo.logTable=undo_log\nclient.undo.compress.enable=true\nclient.undo.compress.type=zip\nclient.undo.compress.threshold=64k\nlog.exceptionRate=100\ntransport.serialization=seata\ntransport.compressor=none\nmetrics.enabled=false\nmetrics.registryType=compact\nmetrics.exporterList=prometheus\nmetrics.exporterPrometheusPort=9898\n")),(0,r.kt)("p",null,"\u8be6\u7ec6\u53c2\u6570\u914d\u7f6e\u8bf7\u70b9",(0,r.kt)("a",{parentName:"p",href:"http://seata.io/zh-cn/docs/user/configurations.html"},"\u6b64\u5904")),(0,r.kt)("p",null,"\u200b\t4.registry.conf\u7f16\u8f91\u4e3a\u5982\u4e0b\u5185\u5bb9"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'registry {\n  # file \u3001nacos \u3001eureka\u3001redis\u3001zk\u3001consul\u3001etcd3\u3001sofa\n  type = "nacos"\n\n  nacos {\n    serverAddr = "nacos\u5bb9\u5668ip:8848"\n    namespace = ""\n    cluster = "default"\n  }\n}\n\nconfig {\n  # file\u3001nacos \u3001apollo\u3001zk\u3001consul\u3001etcd3\n  type = "nacos"\n\n  nacos {\n    serverAddr = "nacos\u5bb9\u5668ip:8848"\n    namespace = ""\n  }\n}\n')),(0,r.kt)("p",null,"\u200b\t5.\u914d\u7f6e\u5b8c\u6210\u540e\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4,\u628a\u4fee\u6539\u5b8c\u6210\u7684registry.conf\u590d\u5236\u5230\u5bb9\u5668\u4e2d,\u5e76\u91cd\u542f\u67e5\u770b\u65e5\u5fd7\u8fd0\u884c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker cp /home/seata/resources/registry.conf seata:seata-server/resources/\ndocker restart seata\ndocker logs -f seata\n")),(0,r.kt)("p",null,"\u200b\t6.\u8fd0\u884cnacos-config.sh\u5bfc\u5165Nacos\u914d\u7f6e"),(0,r.kt)("p",null,"eg: sh ${SEATAPATH}/script/config-center/nacos/nacos-config.sh -h localhost -p 8848 -g SEATA_GROUP -t 5a3c7d6c-f497-4d68-a71a-2e5e3340b3ca -u username -w password"),(0,r.kt)("p",null,"\u5177\u4f53\u53c2\u6570\u91ca\u4e49\u53c2\u8003\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://github.com/seata/seata/blob/1.4.2/script/config-center/README.md"},"\u914d\u7f6e\u5bfc\u5165\u8bf4\u660e")),(0,r.kt)("p",null,"\u200b\t7.\u767b\u5f55nacos\u63a7\u5236\u4e2d\u5fc3\u67e5\u770b"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"20191202205912",src:t(61650).Z,width:"1826",height:"643"})),(0,r.kt)("p",null,"\u200b\t\u5982\u56fe\u6240\u793a\u4fbf\u662f\u6210\u529f\u4e86."),(0,r.kt)("h1",{id:"\u8fdb\u884c\u8c03\u8bd5"},"\u8fdb\u884c\u8c03\u8bd5"),(0,r.kt)("p",null,"\u200b\t1.\u62c9\u53d6\u535a\u6587\u4e2d\u6240\u793a\u7684\u9879\u76ee,\u4fee\u6539test-service\u7684application.yml\u4e0eregistry.conf"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'registry {\n  type = "nacos"\n  nacos {\n    serverAddr = "\u5bbf\u4e3b\u673aip:8848"\n    namespace = ""\n    cluster = "default"\n  }\n}\nconfig {\n  type = "nacos"\n  nacos {\n    serverAddr = "\u5bbf\u4e3b\u673aip:8848"\n    namespace = ""\n    cluster = "default"\n  }\n}\n\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"server:\n  port: 38888\nspring:\n  application: \n      name: test-service\n  datasource:\n    type: com.alibaba.druid.pool.DruidDataSource\n    url: jdbc:mysql://mysqlip:3306/test?useUnicode=true&characterEncoding=UTF-8&serverTimezone=UTC\n    driver-class-name: com.mysql.cj.jdbc.Driver\n    username: root\n    password: 123456\ndubbo:\n  protocol:\n    threadpool: cached\n  scan:\n    base-packages: com.example\n  application:\n    qos-enable: false\n    name: testserver\n  registry:\n    id: my-registry\n    address:  nacos://\u5bbf\u4e3b\u673aip:8848\nmybatis-plus:\n  mapper-locations: classpath:/mapper/*Mapper.xml\n  typeAliasesPackage: org.test.entity\n  global-config:\n    db-config:\n      field-strategy: not-empty\n      id-type: auto\n      db-type: mysql\n  configuration:\n    map-underscore-to-camel-case: true\n    cache-enabled: true\n    log-impl: org.apache.ibatis.logging.stdout.StdOutImpl\n    auto-mapping-unknown-column-behavior: none\n")),(0,r.kt)("p",null,"\u200b\t2.\u628a\u4fee\u6539\u5b8c\u6210\u7684registry.conf\u590d\u5236\u5230test-client-resources\u4e2d,\u5e76\u4fee\u6539application"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"spring:\n  application:\n     name: test\n  datasource:\n     driver-class-name: com.mysql.cj.jdbc.Driver\n     url: jdbc:mysql://mysqlIp:3306/test?userSSL=true&useUnicode=true&characterEncoding=UTF8&serverTimezone=Asia/Shanghai\n     username: root\n     password: 123456\n  mvc:\n    servlet:\n      load-on-startup: 1\n  http:\n    encoding:\n            force: true\n            charset: utf-8\n            enabled: true\n    multipart:\n      max-file-size: 10MB\n      max-request-size: 10MB\ndubbo:\n  registry:\n    id: my-registry\n    address:  nacos://\u5bbf\u4e3b\u673aip:8848\n  application:\n    name: dubbo-demo-client\n    qos-enable: false\nserver:\n  port: 28888\n  max-http-header-size: 8192\n  address: 0.0.0.0\n  tomcat:\n    max-http-post-size: 104857600\n")),(0,r.kt)("p",null,"\u200b\t4. \u5728\u6bcf\u4e2a\u6240\u6d89\u53ca\u7684 db \u6267\u884c undo_log \u811a\u672c."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE IF NOT EXISTS `undo_log`\n(\n    `branch_id`     BIGINT       NOT NULL COMMENT 'branch transaction id',\n    `xid`           VARCHAR(128) NOT NULL COMMENT 'global transaction id',\n    `context`       VARCHAR(128) NOT NULL COMMENT 'undo_log context,such as serialization',\n    `rollback_info` LONGBLOB     NOT NULL COMMENT 'rollback info',\n    `log_status`    INT(11)      NOT NULL COMMENT '0:normal status,1:defense status',\n    `log_created`   DATETIME(6)  NOT NULL COMMENT 'create datetime',\n    `log_modified`  DATETIME(6)  NOT NULL COMMENT 'modify datetime',\n    UNIQUE KEY `ux_undo_log` (`xid`, `branch_id`)\n) ENGINE = InnoDB\n  AUTO_INCREMENT = 1\n  DEFAULT CHARSET = utf8 COMMENT ='AT transaction mode undo table';\n")),(0,r.kt)("p",null,"\u200b\t5.\u4f9d\u6b21\u8fd0\u884ctest-service,test-client."),(0,r.kt)("p",null,"\u200b\t6.\u67e5\u770bnacos\u4e2d\u670d\u52a1\u5217\u8868\u662f\u5426\u5982\u4e0b\u56fe\u6240\u793a"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"20191203132351",src:t(34005).Z,width:"1906",height:"198"})),(0,r.kt)("h1",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,r.kt)("p",null,"\u5173\u4e8enacos\u4e0eseata\u7684docker\u90e8\u7f72\u5df2\u7ecf\u5b8c\u6210\u4e86,\u66f4\u8be6\u7ec6\u7684\u5185\u5bb9\u5e0c\u671b\u5e0c\u671b\u5927\u5bb6\u8bbf\u95ee\u4ee5\u4e0b\u5730\u5740\u9605\u8bfb\u8be6\u7ec6\u6587\u6863"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://nacos.io/zh-cn/index.html"},"nacos\u5b98\u7f51")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"http://dubbo.apache.org/en-us/"},"dubbo\u5b98\u7f51")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"http://seata.io/zh-cn/"},"seata\u5b98\u7f51")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.docker.com/"},"docker\u5b98\u7f51")))}T.isMDXComponent=!0},61650:(n,e,t)=>{t.d(e,{Z:()=>a});const a=t.p+"assets/images/20191202205912-4d939ad3e578e3d7997d786bc108775e.png"},34005:(n,e,t)=>{t.d(e,{Z:()=>a});const a=t.p+"assets/images/20191203132351-f0e45403eb1bae9896318a2af0eac585.png"}}]);