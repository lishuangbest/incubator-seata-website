"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[8801],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},g="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),g=c(n),m=r,d=g["".concat(p,".").concat(m)]||g[m]||s[m]||o;return n?a.createElement(d,l(l({ref:t},u),{},{components:n})):a.createElement(d,l({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[g]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},51091:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={title:"Seata \u914d\u7f6e\u4e2d\u5fc3\u5b9e\u73b0\u539f\u7406",author:"\u5f20\u4e58\u8f89",keywords:["Seata\u3001Config"],description:"Seata \u53ef\u4ee5\u652f\u6301\u591a\u4e2a\u7b2c\u4e09\u65b9\u914d\u7f6e\u4e2d\u5fc3\uff0c\u90a3\u4e48 Seata \u662f\u5982\u4f55\u540c\u65f6\u517c\u5bb9\u90a3\u4e48\u591a\u4e2a\u914d\u7f6e\u4e2d\u5fc3\u7684\u5462\uff1f",date:"2019/12/12"},l="\u524d\u8a00",i={permalink:"/en/blog/seata-config-center",source:"@site/blog/seata-config-center.md",title:"Seata \u914d\u7f6e\u4e2d\u5fc3\u5b9e\u73b0\u539f\u7406",description:"Seata \u53ef\u4ee5\u652f\u6301\u591a\u4e2a\u7b2c\u4e09\u65b9\u914d\u7f6e\u4e2d\u5fc3\uff0c\u90a3\u4e48 Seata \u662f\u5982\u4f55\u540c\u65f6\u517c\u5bb9\u90a3\u4e48\u591a\u4e2a\u914d\u7f6e\u4e2d\u5fc3\u7684\u5462\uff1f",date:"2019-12-12T00:00:00.000Z",formattedDate:"December 12, 2019",tags:[],readingTime:7.2,hasTruncateMarker:!1,authors:[{name:"\u5f20\u4e58\u8f89"}],frontMatter:{title:"Seata \u914d\u7f6e\u4e2d\u5fc3\u5b9e\u73b0\u539f\u7406",author:"\u5f20\u4e58\u8f89",keywords:["Seata\u3001Config"],description:"Seata \u53ef\u4ee5\u652f\u6301\u591a\u4e2a\u7b2c\u4e09\u65b9\u914d\u7f6e\u4e2d\u5fc3\uff0c\u90a3\u4e48 Seata \u662f\u5982\u4f55\u540c\u65f6\u517c\u5bb9\u90a3\u4e48\u591a\u4e2a\u914d\u7f6e\u4e2d\u5fc3\u7684\u5462\uff1f",date:"2019/12/12"},prevItem:{title:"Seata \u52a8\u6001\u914d\u7f6e\u8ba2\u9605\u4e0e\u964d\u7ea7\u5b9e\u73b0\u539f\u7406",permalink:"/en/blog/seata-dynamic-config-and-dynamic-disable"},nextItem:{title:"Docker\u90e8\u7f72Seata\u4e0eNacos\u6574\u5408",permalink:"/en/blog/seata-nacos-docker"}},p={authorsImageUrls:[void 0]},c=[],u={toc:c},g="wrapper";function s(e){let{components:t,...n}=e;return(0,r.kt)(g,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Seata \u53ef\u4ee5\u652f\u6301\u591a\u4e2a\u7b2c\u4e09\u65b9\u914d\u7f6e\u4e2d\u5fc3\uff0c\u90a3\u4e48 Seata \u662f\u5982\u4f55\u540c\u65f6\u517c\u5bb9\u90a3\u4e48\u591a\u4e2a\u914d\u7f6e\u4e2d\u5fc3\u7684\u5462\uff1f\u4e0b\u9762\u6211\u7ed9\u5927\u5bb6\u8be6\u7ec6\u4ecb\u7ecd\u4e0b Seata \u914d\u7f6e\u4e2d\u5fc3\u7684\u5b9e\u73b0\u539f\u7406\u3002"),(0,r.kt)("h1",{id:"\u914d\u7f6e\u4e2d\u5fc3\u5c5e\u6027\u52a0\u8f7d"},"\u914d\u7f6e\u4e2d\u5fc3\u5c5e\u6027\u52a0\u8f7d"),(0,r.kt)("p",null,"\u5728 Seata \u914d\u7f6e\u4e2d\u5fc3\uff0c\u6709\u4e24\u4e2a\u9ed8\u8ba4\u7684\u914d\u7f6e\u6587\u4ef6\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://gitee.com/objcoding/md-picture/raw/master/img/20191211193041.png",alt:null})),(0,r.kt)("p",null,"file.conf \u662f\u9ed8\u8ba4\u7684\u914d\u7f6e\u5c5e\u6027\uff0cregistry.conf \u4e3b\u8981\u5b58\u50a8\u7b2c\u4e09\u65b9\u6ce8\u518c\u4e2d\u5fc3\u4e0e\u914d\u7f6e\u4e2d\u5fc3\u7684\u4fe1\u606f\uff0c\u4e3b\u8981\u6709\u4e24\u5927\u5757\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'registry {\n  # file \u3001nacos \u3001eureka\u3001redis\u3001zk\u3001consul\u3001etcd3\u3001sofa\n  # ...\n}\n\nconfig {\n  # file\u3001nacos \u3001apollo\u3001zk\u3001consul\u3001etcd3\n  type = "file"\n  nacos {\n    serverAddr = "localhost"\n    namespace = ""\n  }\n  file {\n    name = "file.conf"\n  }\n  # ...\n}\n')),(0,r.kt)("p",null,"\u5176\u4e2d registry \u4e3a\u6ce8\u518c\u4e2d\u5fc3\u7684\u914d\u7f6e\u5c5e\u6027\uff0c\u8fd9\u91cc\u5148\u4e0d\u8bb2\uff0cconfig \u4e3a\u914d\u7f6e\u4e2d\u5fc3\u7684\u5c5e\u6027\u503c\uff0c\u9ed8\u8ba4\u4e3a file \u7c7b\u578b\uff0c\u5373\u4f1a\u52a0\u8f7d\u672c\u5730\u7684 file.conf \u91cc\u9762\u7684\u5c5e\u6027\uff0c\u5982\u679c type \u4e3a\u5176\u5b83\u7c7b\u578b\uff0c\u90a3\u4e48\u4f1a\u4ece\u7b2c\u4e09\u65b9\u914d\u7f6e\u4e2d\u5fc3\u52a0\u8f7d\u914d\u7f6e\u5c5e\u6027\u503c\u3002"),(0,r.kt)("p",null,"\u5728 config \u6a21\u5757\u7684 core \u76ee\u5f55\u4e2d\uff0c\u6709\u4e2a\u914d\u7f6e\u5de5\u5382\u7c7b ConfigurationFactory\uff0c\u5b83\u7684\u7ed3\u6784\u5982\u4e0b\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://gitee.com/objcoding/md-picture/raw/master/img/20191210211022.png",alt:null})),(0,r.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\u90fd\u662f\u4e00\u4e9b\u914d\u7f6e\u7684\u9759\u6001\u5e38\u91cf\uff1a"),(0,r.kt)("p",null,"REGISTRY_CONF_PREFIX\u3001REGISTRY_CONF_SUFFIX\uff1a\u914d\u7f6e\u6587\u4ef6\u540d\u3001\u9ed8\u8ba4\u914d\u7f6e\u6587\u4ef6\u7c7b\u578b\uff1b"),(0,r.kt)("p",null,"SYSTEM_PROPERTY_SEATA_CONFIG_NAME\u3001ENV_SEATA_CONFIG_NAME\u3001ENV_SYSTEM_KEY\u3001ENV_PROPERTY_KEY\uff1a\u81ea\u5b9a\u4e49\u6587\u4ef6\u540d\u914d\u7f6e\u53d8\u91cf\uff0c\u4e5f\u8bf4\u660e\u6211\u4eec\u53ef\u4ee5\u81ea\u5b9a\u4e49\u914d\u7f6e\u4e2d\u5fc3\u7684\u5c5e\u6027\u6587\u4ef6\u3002"),(0,r.kt)("p",null,"ConfigurationFactory \u91cc\u9762\u6709\u4e00\u5904\u9759\u6001\u4ee3\u7801\u5757\uff0c\u5982\u4e0b\uff1a"),(0,r.kt)("p",null,"io.seata.config.ConfigurationFactory"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://gitee.com/objcoding/md-picture/raw/master/img/20191211102702.png",alt:null})),(0,r.kt)("p",null,"\u6839\u636e\u81ea\u5b9a\u4e49\u6587\u4ef6\u540d\u914d\u7f6e\u53d8\u91cf\u627e\u51fa\u914d\u7f6e\u6587\u4ef6\u540d\u79f0\u4e0e\u7c7b\u578b\uff0c\u5982\u679c\u6ca1\u6709\u914d\u7f6e\uff0c\u9ed8\u8ba4\u4f7f\u7528 registry.conf\uff0cFileConfiguration \u662f Seata \u9ed8\u8ba4\u7684\u914d\u7f6e\u5b9e\u73b0\u7c7b\uff0c\u5982\u679c\u4e3a\u9ed8\u8ba4\u503c\uff0c\u5219\u4f1a\u66f4\u5177  registry.conf \u914d\u7f6e\u6587\u4ef6\u751f\u6210 FileConfiguration \u9ed8\u8ba4\u914d\u7f6e\u5bf9\u8c61\uff0c\u8fd9\u91cc\u4e5f\u53ef\u4ee5\u5229\u7528 SPI \u673a\u5236\u652f\u6301\u7b2c\u4e09\u65b9\u6269\u5c55\u914d\u7f6e\u5b9e\u73b0\uff0c\u5177\u4f53\u5b9e\u73b0\u662f\u7ee7\u627f ExtConfigurationProvider \u63a5\u53e3\uff0c\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"META-INF/services/"),"\u521b\u5efa\u4e00\u4e2a\u6587\u4ef6\u5e76\u586b\u5199\u5b9e\u73b0\u7c7b\u7684\u5168\u8def\u5f84\u540d\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://gitee.com/objcoding/md-picture/raw/master/img/20191211194643.png",alt:null})),(0,r.kt)("h1",{id:"\u7b2c\u4e09\u65b9\u914d\u7f6e\u4e2d\u5fc3\u5b9e\u73b0\u7c7b\u52a0\u8f7d"},"\u7b2c\u4e09\u65b9\u914d\u7f6e\u4e2d\u5fc3\u5b9e\u73b0\u7c7b\u52a0\u8f7d"),(0,r.kt)("p",null,"\u5728\u9759\u6001\u4ee3\u7801\u5757\u903b\u8f91\u52a0\u8f7d\u5b8c\u914d\u7f6e\u4e2d\u5fc3\u5c5e\u6027\u4e4b\u540e\uff0cSeata \u662f\u5982\u4f55\u9009\u62e9\u914d\u7f6e\u4e2d\u5fc3\u5e76\u83b7\u53d6\u914d\u7f6e\u4e2d\u5fc3\u7684\u5c5e\u6027\u503c\u7684\u5462\uff1f"),(0,r.kt)("p",null,"\u6211\u4eec\u521a\u521a\u4e5f\u8bf4\u4e86 FileConfiguration \u662f Seata \u7684\u9ed8\u8ba4\u914d\u7f6e\u5b9e\u73b0\u7c7b\uff0c\u5b83\u7ee7\u627f\u4e86 AbstractConfiguration\uff0c\u5b83\u7684\u57fa\u7c7b\u4e3a Configuration\uff0c\u63d0\u4f9b\u4e86\u83b7\u53d6\u53c2\u6570\u503c\u7684\u65b9\u6cd5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"short getShort(String dataId, int defaultValue, long timeoutMills);\nint getInt(String dataId, int defaultValue, long timeoutMills);\nlong getLong(String dataId, long defaultValue, long timeoutMills);\n// ....\n")),(0,r.kt)("p",null,"\u90a3\u4e48\u610f\u5473\u7740\u53ea\u9700\u8981\u7b2c\u4e09\u65b9\u914d\u7f6e\u4e2d\u5fc3\u5b9e\u73b0\u8be5\u63a5\u53e3\uff0c\u5c31\u53ef\u4ee5\u6574\u5408\u5230 Seata \u914d\u7f6e\u4e2d\u5fc3\u4e86\uff0c\u4e0b\u9762\u6211\u62ff zk \u6765\u505a\u4f8b\u5b50\uff1a"),(0,r.kt)("p",null,"\u9996\u5148\uff0c\u7b2c\u4e09\u65b9\u914d\u7f6e\u4e2d\u5fc3\u9700\u8981\u5b9e\u73b0\u4e00\u4e2a Provider \u7c7b\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://gitee.com/objcoding/md-picture/raw/master/img/20191211200155.png",alt:null})),(0,r.kt)("p",null,"\u5b9e\u73b0\u7684 provider \u65b9\u6cd5\u5982\u5176\u540d\uff0c\u4e3b\u8981\u662f\u8f93\u51fa\u5177\u4f53\u7684 Configuration \u5b9e\u73b0\u7c7b\u3002"),(0,r.kt)("p",null,"\u90a3\u4e48\u6211\u4eec\u662f\u5982\u4f55\u83b7\u53d6\u6839\u636e\u914d\u7f6e\u53bb\u83b7\u53d6\u5bf9\u5e94\u7684\u7b2c\u4e09\u65b9\u914d\u7f6e\u4e2d\u5fc3\u5b9e\u73b0\u7c7b\u5462\uff1f"),(0,r.kt)("p",null,"\u5728 Seata \u9879\u76ee\u4e2d\uff0c\u83b7\u53d6\u4e00\u4e2a\u7b2c\u4e09\u65b9\u914d\u7f6e\u4e2d\u5fc3\u5b9e\u73b0\u7c7b\u901a\u5e38\u662f\u8fd9\u4e48\u505a\u7684\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Configuration CONFIG = ConfigurationFactory.getInstance();\n")),(0,r.kt)("p",null,"\u5728 getInstance() \u65b9\u6cd5\u4e2d\u4e3b\u8981\u662f\u4f7f\u7528\u4e86\u5355\u4f8b\u6a21\u5f0f\u6784\u9020\u914d\u7f6e\u5b9e\u73b0\u7c7b\uff0c\u5b83\u7684\u6784\u9020\u5177\u4f53\u5b9e\u73b0\u5982\u4e0b\uff1a"),(0,r.kt)("p",null,"io.seata.config.ConfigurationFactory#buildConfiguration\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://gitee.com/objcoding/md-picture/raw/master/img/20191211102905.png",alt:null})),(0,r.kt)("p",null,"\u9996\u5148\u4ece ConfigurationFactory \u4e2d\u7684\u9759\u6001\u4ee3\u7801\u5757\u6839\u636e registry.conf \u521b\u5efa\u7684 CURRENT_FILE_INSTANCE \u4e2d\u83b7\u53d6\u5f53\u524d\u73af\u5883\u4f7f\u7528\u7684\u914d\u7f6e\u4e2d\u5fc3\uff0c\u9ed8\u8ba4\u4e3a\u4e3a File \u7c7b\u578b\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u5728 registry.conf \u914d\u7f6e\u5176\u5b83\u7b2c\u4e09\u65b9\u914d\u7f6e\u4e2d\u5fc3\uff0c\u8fd9\u91cc\u4e5f\u662f\u5229\u7528\u4e86 SPI \u673a\u5236\u53bb\u52a0\u8f7d\u7b2c\u4e09\u65b9\u914d\u7f6e\u4e2d\u5fc3\u7684\u5b9e\u73b0\u7c7b\uff0c\u5177\u4f53\u5b9e\u73b0\u5982\u4e0b\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://gitee.com/objcoding/md-picture/raw/master/img/20191211205127.png",alt:null})),(0,r.kt)("p",null,"\u5982\u4e0a\uff0c\u5373\u662f\u521a\u521a\u6211\u6240\u8bf4\u7684 ZookeeperConfigurationProvider \u914d\u7f6e\u5b9e\u73b0\u8f93\u51fa\u7c7b\uff0c\u6211\u4eec\u518d\u6765\u770b\u770b\u8fd9\u884c\u4ee3\u7801\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"EnhancedServiceLoader.load(ConfigurationProvider.class,Objects.requireNonNull(configType).name()).provide();\n")),(0,r.kt)("p",null,"EnhancedServiceLoader \u662f Seata SPI \u5b9e\u73b0\u6838\u5fc3\u7c7b\uff0c\u8fd9\u884c\u4ee3\u7801\u4f1a\u52a0\u8f7d ",(0,r.kt)("inlineCode",{parentName:"p"},"META-INF/services/"),"\u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"META-INF/seata/"),"\u76ee\u5f55\u4e2d\u6587\u4ef6\u586b\u5199\u7684\u7c7b\u540d\uff0c\u90a3\u4e48\u5982\u679c\u5176\u4e2d\u6709\u591a\u4e2a\u914d\u7f6e\u4e2d\u5fc3\u5b9e\u73b0\u7c7b\u90fd\u88ab\u52a0\u8f7d\u4e86\u600e\u4e48\u529e\u5462\uff1f"),(0,r.kt)("p",null,"\u6211\u4eec\u6ce8\u610f\u5230 ZookeeperConfigurationProvider \u7c7b\u7684\u4e0a\u9762\u6709\u4e00\u4e2a\u6ce8\u89e3\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@LoadLevel(name = "ZK", order = 1)\n')),(0,r.kt)("p",null,"\u5728\u52a0\u8f7d\u591a\u4e2a\u914d\u7f6e\u4e2d\u5fc3\u5b9e\u73b0\u7c7b\u65f6\uff0c\u4f1a\u6839\u636e order \u8fdb\u884c\u6392\u5e8f\uff1a"),(0,r.kt)("p",null,"io.seata.common.loader.EnhancedServiceLoader#findAllExtensionClass\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://gitee.com/objcoding/md-picture/raw/master/img/20191211210438.png",alt:null})),(0,r.kt)("p",null,"io.seata.common.loader.EnhancedServiceLoader#loadFile\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://gitee.com/objcoding/md-picture/raw/master/img/20191211210347.png",alt:null})),(0,r.kt)("p",null,"\u8fd9\u6837\uff0c\u5c31\u4e0d\u4f1a\u4ea7\u751f\u51b2\u7a81\u4e86\u3002"),(0,r.kt)("p",null,"\u4f46\u662f\u6211\u4eec\u53d1\u73b0 Seata \u8fd8\u53ef\u4ee5\u7528\u8fd9\u4e2a\u65b9\u6cd5\u8fdb\u884c\u9009\u62e9\uff0cSeata \u5728\u8c03\u7528 load \u65b9\u6cd5\u65f6\uff0c\u8fd8\u4f20\u4e86\u4e00\u4e2a\u53c2\u6570\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Objects.requireNonNull(configType).name()\n")),(0,r.kt)("p",null,"ConfigType \u4e3a\u914d\u7f6e\u4e2d\u5fc3\u7c7b\u578b\uff0c\u662f\u4e2a\u679a\u4e3e\u7c7b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public enum ConfigType {\n  File, ZK, Nacos, Apollo, Consul, Etcd3, SpringCloudConfig, Custom;\n}\n")),(0,r.kt)("p",null,"\u6211\u4eec\u6ce8\u610f\u5230\uff0cLoadLevel \u6ce8\u89e3\u4e0a\u8fd8\u6709\u4e00\u4e2a name \u5c5e\u6027\uff0c\u5728\u8fdb\u884c\u7b5b\u9009\u5b9e\u73b0\u7c7b\u65f6\uff0cSeata \u8fd8\u505a\u4e86\u8fd9\u4e2a\u64cd\u4f5c\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://gitee.com/objcoding/md-picture/raw/master/img/20191211211210.png",alt:null})),(0,r.kt)("p",null,"\u6839\u636e\u5f53\u524d configType \u6765\u5224\u65ad\u662f\u5426\u7b49\u4e8e LoadLevel \u7684 name \u5c5e\u6027\uff0c\u5982\u679c\u76f8\u7b49\uff0c\u90a3\u4e48\u5c31\u662f\u5f53\u524d\u914d\u7f6e\u7684\u7b2c\u4e09\u65b9\u914d\u7f6e\u4e2d\u5fc3\u5b9e\u73b0\u7c7b\u3002"),(0,r.kt)("h1",{id:"\u7b2c\u4e09\u65b9\u914d\u7f6e\u4e2d\u5fc3\u5b9e\u73b0\u7c7b"},"\u7b2c\u4e09\u65b9\u914d\u7f6e\u4e2d\u5fc3\u5b9e\u73b0\u7c7b"),(0,r.kt)("p",null,"ZookeeperConfiguration \u7ee7\u627f\u4e86 AbstractConfiguration\uff0c\u5b83\u7684\u6784\u9020\u65b9\u6cd5\u5982\u4e0b\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://gitee.com/objcoding/md-picture/raw/master/img/20191211202510.png",alt:null})),(0,r.kt)("p",null,"\u6784\u9020\u65b9\u6cd5\u521b\u5efa\u4e86\u4e00\u4e2a zkClient \u5bf9\u8c61\uff0c\u8fd9\u91cc\u7684 FILE_CONFIG \u662f\u4ec0\u4e48\u5462\uff1f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"private static final Configuration FILE_CONFIG = ConfigurationFactory.CURRENT_FILE_INSTANCE;\n")),(0,r.kt)("p",null,"\u539f\u6765\u5c31\u662f\u521a\u521a\u9759\u6001\u4ee3\u7801\u5757\u4e2d\u521b\u5efa\u7684 registry.conf \u914d\u7f6e\u5b9e\u73b0\u7c7b\uff0c\u4ece\u8be5\u914d\u7f6e\u5b9e\u73b0\u7c7b\u62ff\u5230\u7b2c\u4e09\u65b9\u914d\u7f6e\u4e2d\u5fc3\u7684\u76f8\u5173\u5c5e\u6027\uff0c\u6784\u9020\u7b2c\u4e09\u65b9\u914d\u7f6e\u4e2d\u5fc3\u5ba2\u6237\u7aef\uff0c\u7136\u540e\u5b9e\u73b0 Configuration \u63a5\u53e3\u65f6\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://gitee.com/objcoding/md-picture/raw/master/img/20191211203735.png",alt:null})),(0,r.kt)("p",null,"\u5c31\u53ef\u4ee5\u5229\u7528\u5ba2\u6237\u7aef\u76f8\u5173\u65b9\u6cd5\u53bb\u7b2c\u4e09\u65b9\u914d\u7f6e\u83b7\u53d6\u5bf9\u5e94\u7684\u53c2\u6570\u503c\u4e86\u3002"),(0,r.kt)("h1",{id:"\u7b2c\u4e09\u65b9\u914d\u7f6e\u4e2d\u5fc3\u914d\u7f6e\u540c\u6b65\u811a\u672c"},"\u7b2c\u4e09\u65b9\u914d\u7f6e\u4e2d\u5fc3\u914d\u7f6e\u540c\u6b65\u811a\u672c"),(0,r.kt)("p",null,"\u4e0a\u5468\u672b\u624d\u5199\u597d\uff0c\u5df2\u7ecf\u63d0\u4ea4 PR \u4e0a\u53bb\u4e86\uff0c\u8fd8\u5904\u4e8e review \u4e2d\uff0c\u9884\u4f30\u4f1a\u5728 Seata 1.0 \u7248\u672c\u63d0\u4f9b\u7ed9\u5927\u5bb6\u4f7f\u7528\uff0c\u656c\u8bf7\u671f\u5f85\u3002"),(0,r.kt)("p",null,"\u5177\u4f53\u4f4d\u7f6e\u5728 Seata \u9879\u76ee\u7684 script \u76ee\u5f55\u4e2d\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://gitee.com/objcoding/md-picture/raw/master/img/20191211212141.png",alt:null})),(0,r.kt)("p",null,"config.txt \u4e3a\u672c\u5730\u914d\u7f6e\u597d\u7684\u503c\uff0c\u642d\u5efa\u597d\u7b2c\u4e09\u65b9\u914d\u7f6e\u4e2d\u5fc3\u4e4b\u540e\uff0c\u8fd0\u884c\u811a\u672c\u4f1a\u5c06 config.txt \u7684\u914d\u7f6e\u540c\u6b65\u5230\u7b2c\u4e09\u65b9\u914d\u7f6e\u4e2d\u5fc3\u3002"),(0,r.kt)("h1",{id:"\u4f5c\u8005\u7b80\u4ecb"},"\u4f5c\u8005\u7b80\u4ecb"),(0,r.kt)("p",null,"\u5f20\u4e58\u8f89\uff0c\u76ee\u524d\u5c31\u804c\u4e8e\u4e2d\u901a\u79d1\u6280\u4fe1\u606f\u4e2d\u5fc3\u6280\u672f\u5e73\u53f0\u90e8\uff0c\u62c5\u4efb Java \u5de5\u7a0b\u5e08\uff0c\u4e3b\u8981\u8d1f\u8d23\u4e2d\u901a\u6d88\u606f\u5e73\u53f0\u4e0e\u5168\u94fe\u8def\u538b\u6d4b\u9879\u76ee\u7684\u7814\u53d1\uff0c\u70ed\u7231\u5206\u4eab\u6280\u672f\uff0c\u5fae\u4fe1\u516c\u4f17\u53f7\u300c\u540e\u7aef\u8fdb\u9636\u300d\u4f5c\u8005\uff0c\u6280\u672f\u535a\u5ba2\uff08",(0,r.kt)("a",{parentName:"p",href:"https://objcoding.com/"},"https://objcoding.com/"),"\uff09\u535a\u4e3b\uff0cSeata Contributor\uff0cGitHub ID\uff1aobjcoding\u3002"))}s.isMDXComponent=!0}}]);