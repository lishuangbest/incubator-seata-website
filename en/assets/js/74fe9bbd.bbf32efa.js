"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[4134],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,f=u["".concat(c,".").concat(m)]||u[m]||g[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},80273:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>g,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={title:"\u901a\u8fc7AOP\u52a8\u6001\u521b\u5efa/\u5173\u95edSeata\u5206\u5e03\u5f0f\u4e8b\u52a1",keywords:["Seata","Nacos","\u5206\u5e03\u5f0f\u4e8b\u52a1","spring"],description:"\u672c\u6587\u8bb2\u8ff0\u5982\u4f55\u901a\u8fc7AOP\u52a8\u6001\u521b\u5efa/\u5173\u95edSeata\u5206\u5e03\u5f0f\u4e8b\u52a1",author:"FUNKYE",date:"2019/12/23"},i="\u901a\u8fc7AOP\u52a8\u6001\u521b\u5efa/\u5173\u95edSeata\u5206\u5e03\u5f0f\u4e8b\u52a1",l={permalink:"/en/blog/seata-spring-boot-aop-aspectj",source:"@site/blog/seata-spring-boot-aop-aspectj.md",title:"\u901a\u8fc7AOP\u52a8\u6001\u521b\u5efa/\u5173\u95edSeata\u5206\u5e03\u5f0f\u4e8b\u52a1",description:"\u672c\u6587\u8bb2\u8ff0\u5982\u4f55\u901a\u8fc7AOP\u52a8\u6001\u521b\u5efa/\u5173\u95edSeata\u5206\u5e03\u5f0f\u4e8b\u52a1",date:"2019-12-23T00:00:00.000Z",formattedDate:"December 23, 2019",tags:[],readingTime:4.11,hasTruncateMarker:!1,authors:[{name:"FUNKYE"}],frontMatter:{title:"\u901a\u8fc7AOP\u52a8\u6001\u521b\u5efa/\u5173\u95edSeata\u5206\u5e03\u5f0f\u4e8b\u52a1",keywords:["Seata","Nacos","\u5206\u5e03\u5f0f\u4e8b\u52a1","spring"],description:"\u672c\u6587\u8bb2\u8ff0\u5982\u4f55\u901a\u8fc7AOP\u52a8\u6001\u521b\u5efa/\u5173\u95edSeata\u5206\u5e03\u5f0f\u4e8b\u52a1",author:"FUNKYE",date:"2019/12/23"},prevItem:{title:"Seata core \u6a21\u5757\u6e90\u7801\u5206\u6790",permalink:"/en/blog/seata-analysis-core-modular"},nextItem:{title:"Seata \u52a8\u6001\u914d\u7f6e\u8ba2\u9605\u4e0e\u964d\u7ea7\u5b9e\u73b0\u539f\u7406",permalink:"/en/blog/seata-dynamic-config-and-dynamic-disable"}},c={authorsImageUrls:[void 0]},s=[{value:"\u51c6\u5907\u5de5\u4f5c",id:"\u51c6\u5907\u5de5\u4f5c",level:2}],p={toc:s},u="wrapper";function g(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u672c\u6587\u4f5c\u8005\uff1aFUNKYE(\u9648\u5065\u658c),\u676d\u5dde\u67d0\u4e92\u8054\u7f51\u516c\u53f8\u4e3b\u7a0b\u3002"),(0,o.kt)("h1",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,o.kt)("p",null,"\u901a\u8fc7GA\u5927\u4f1a\u4e0a\u6ef4\u6ef4\u51fa\u884c\u7684\u9ad8\u7ea7\u7814\u53d1\u5de5\u7a0b\u9648\u9e4f\u5fd7\u7684\u5728\u6ef4\u6ef4\u4e24\u8f6e\u8f66\u4e1a\u52a1\u4e2d\u7684\u5b9e\u8df5,\u53d1\u73b0\u52a8\u6001\u964d\u7ea7\u7684\u5fc5\u8981\u6027\u662f\u975e\u5e38\u7684\u9ad8,\u6240\u4ee5\u8fd9\u8fb9\u7b80\u5355\u5229\u7528spring boot aop\u6765\u7b80\u5355\u7684\u5904\u7406\u964d\u7ea7\u76f8\u5173\u7684\u5904\u7406,\u8fd9\u8fb9\u975e\u5e38\u611f\u8c22\u9648\u9e4f\u5fd7\u7684\u5206\u4eab!"),(0,o.kt)("p",null,"\u53ef\u5229\u7528\u6b64demo",(0,o.kt)("a",{parentName:"p",href:"https://gitee.com/itCjb/springboot-dubbo-mybatisplus-seata"},"\u9879\u76ee\u5730\u5740")),(0,o.kt)("p",null,"\u901a\u8fc7\u4ee5\u4e0b\u4ee3\u7801\u6539\u9020\u5b9e\u8df5."),(0,o.kt)("h2",{id:"\u51c6\u5907\u5de5\u4f5c"},"\u51c6\u5907\u5de5\u4f5c"),(0,o.kt)("p",null,"\u200b\t1.\u521b\u5efa\u6d4b\u8bd5\u7528\u7684TestAspect:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'package org.test.config;\n\nimport java.lang.reflect.Method; \n\nimport org.apache.commons.lang3.StringUtils;\nimport org.aspectj.lang.JoinPoint;\nimport org.aspectj.lang.annotation.AfterReturning;\nimport org.aspectj.lang.annotation.AfterThrowing;\nimport org.aspectj.lang.annotation.Aspect;\nimport org.aspectj.lang.annotation.Before;\nimport org.aspectj.lang.reflect.MethodSignature;\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\nimport org.springframework.stereotype.Component;\n\nimport io.seata.core.context.RootContext;\nimport io.seata.core.exception.TransactionException;\nimport io.seata.tm.api.GlobalTransaction;\nimport io.seata.tm.api.GlobalTransactionContext;\n\n@Aspect\n@Component\npublic class TestAspect {\n    private final static Logger logger = LoggerFactory.getLogger(TestAspect.class);\n    \n    @Before("execution(* org.test.service.*.*(..))")\n    public void before(JoinPoint joinPoint) throws TransactionException {\n        MethodSignature signature = (MethodSignature)joinPoint.getSignature();\n        Method method = signature.getMethod();\n        logger.info("\u62e6\u622a\u5230\u9700\u8981\u5206\u5e03\u5f0f\u4e8b\u52a1\u7684\u65b9\u6cd5," + method.getName());\n        // \u6b64\u5904\u53ef\u7528redis\u6216\u8005\u5b9a\u65f6\u4efb\u52a1\u6765\u83b7\u53d6\u4e00\u4e2akey\u5224\u65ad\u662f\u5426\u9700\u8981\u5173\u95ed\u5206\u5e03\u5f0f\u4e8b\u52a1\n        // \u6a21\u62df\u52a8\u6001\u5173\u95ed\u5206\u5e03\u5f0f\u4e8b\u52a1\n        if ((int)(Math.random() * 100) % 2 == 0) {\n            GlobalTransaction tx = GlobalTransactionContext.getCurrentOrCreate();\n            tx.begin(300000, "test-client");\n        } else {\n            logger.info("\u5173\u95ed\u5206\u5e03\u5f0f\u4e8b\u52a1");\n        }\n    }\n\n    @AfterThrowing(throwing = "e", pointcut = "execution(* org.test.service.*.*(..))")\n    public void doRecoveryActions(Throwable e) throws TransactionException {\n        logger.info("\u65b9\u6cd5\u6267\u884c\u5f02\u5e38:{}", e.getMessage());\n        if (!StringUtils.isBlank(RootContext.getXID()))\n            GlobalTransactionContext.reload(RootContext.getXID()).rollback();\n    }\n\n    @AfterReturning(value = "execution(* org.test.service.*.*(..))", returning = "result")\n    public void afterReturning(JoinPoint point, Object result) throws TransactionException {\n        logger.info("\u65b9\u6cd5\u6267\u884c\u7ed3\u675f:{}", result);\n        if ((Boolean)result) {\n            if (!StringUtils.isBlank(RootContext.getXID())) {\n                logger.info("\u5206\u5e03\u5f0f\u4e8b\u52a1Id:{}", RootContext.getXID());\n                GlobalTransactionContext.reload(RootContext.getXID()).commit();\n            }\n        }\n    }\n\n}\n')),(0,o.kt)("p",null,"\u8bf7\u6ce8\u610f\u4e0a\u9762\u7684\u5305\u540d\u53ef\u6539\u4e3a\u4f60\u81ea\u5df1\u7684service\u5305\u540d:"),(0,o.kt)("p",null,"\u200b\t2.\u6539\u52a8service\u4ee3\u7801:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"    public Object seataCommit() {\n        testService.Commit();\n        return true;\n    }\n")),(0,o.kt)("p",null,"\u56e0\u4e3a\u5f02\u5e38\u8ddf\u8fd4\u56de\u7ed3\u679c\u6211\u4eec\u90fd\u4f1a\u62e6\u622a,\u6240\u4ee5\u8fd9\u8fb9\u53ef\u4ee5trycatch\u6216\u8005\u76f4\u63a5\u8ba9\u4ed6\u629b\u5f02\u5e38\u6765\u62e6\u622a\u4e5f\u884c,\u6216\u8005\u76f4\u63a5\u5224\u65ad\u8fd4\u56de\u7ed3\u679c,\u6bd4\u5982\u4f60\u7684\u4e1a\u52a1\u4ee3\u7801code=200\u4e3a\u6210\u529f,\u90a3\u4e48\u5c31commit,\u53cd\u4e4b\u5728\u62e6\u622a\u8fd4\u56de\u503c\u90a3\u6bb5\u4ee3\u7801\u52a0\u4e0arollback;"),(0,o.kt)("h1",{id:"\u8fdb\u884c\u8c03\u8bd5"},"\u8fdb\u884c\u8c03\u8bd5"),(0,o.kt)("p",null,"\u200b\t1.\u66f4\u6539\u4ee3\u7801\u4e3b\u52a8\u629b\u51fa\u5f02\u5e38"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"    public Object seataCommit() {\n        try {\n            testService.Commit();\n            int i = 1 / 0;\n            return true;\n        } catch (Exception e) {\n            // TODO: handle exception\n            throw new RuntimeException();\n        }\n    }\n")),(0,o.kt)("p",null,"\u200b\t\u67e5\u770b\u65e5\u5fd7:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"2019-12-23 11:57:55.386  INFO 23952 --- [.0-28888-exec-7] org.test.controller.TestController       : \u62e6\u622a\u5230\u9700\u8981\u5206\u5e03\u5f0f\u4e8b\u52a1\u7684\u65b9\u6cd5,seataCommit\n2019-12-23 11:57:55.489  INFO 23952 --- [.0-28888-exec-7] i.seata.tm.api.DefaultGlobalTransaction  : Begin new global transaction [192.168.14.67:8092:2030765910]\n2019-12-23 11:57:55.489  INFO 23952 --- [.0-28888-exec-7] org.test.controller.TestController       : \u521b\u5efa\u5206\u5e03\u5f0f\u4e8b\u52a1\u5b8c\u6bd5192.168.14.67:8092:2030765910\n2019-12-23 11:57:55.709  INFO 23952 --- [.0-28888-exec-7] org.test.controller.TestController       : \u65b9\u6cd5\u6267\u884c\u5f02\u5e38:null\n2019-12-23 11:57:55.885  INFO 23952 --- [.0-28888-exec-7] i.seata.tm.api.DefaultGlobalTransaction  : [192.168.14.67:8092:2030765910] rollback status: Rollbacked\n2019-12-23 11:57:55.888 ERROR 23952 --- [.0-28888-exec-7] o.a.c.c.C.[.[.[/].[dispatcherServlet]    : Servlet.service() for servlet [dispatcherServlet] in context with path [] threw exception [Request processing failed; nested exception is java.lang.RuntimeException] with root cause\n\n")),(0,o.kt)("p",null,"\u200b\t\u53ef\u4ee5\u770b\u5230\u5df2\u88ab\u62e6\u622a\u4e5f\u89e6\u53d1\u4e86rollback\u4e86."),(0,o.kt)("p",null,"\u200b\t2.\u6062\u590d\u4ee3\u7801\u8c03\u8bd5\u6b63\u5e38\u60c5\u51b5:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"    public Object seataCommit() {\n        testService.Commit();\n        return true;\n    }\n")),(0,o.kt)("p",null,"\u200b\t\u67e5\u770b\u65e5\u5fd7:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"2019-12-23 12:00:20.876  INFO 23952 --- [.0-28888-exec-2] org.test.controller.TestController       : \u62e6\u622a\u5230\u9700\u8981\u5206\u5e03\u5f0f\u4e8b\u52a1\u7684\u65b9\u6cd5,seataCommit\n2019-12-23 12:00:20.919  INFO 23952 --- [.0-28888-exec-2] i.seata.tm.api.DefaultGlobalTransaction  : Begin new global transaction [192.168.14.67:8092:2030765926]\n2019-12-23 12:00:20.920  INFO 23952 --- [.0-28888-exec-2] org.test.controller.TestController       : \u521b\u5efa\u5206\u5e03\u5f0f\u4e8b\u52a1\u5b8c\u6bd5192.168.14.67:8092:2030765926\n2019-12-23 12:00:21.078  INFO 23952 --- [.0-28888-exec-2] org.test.controller.TestController       : \u65b9\u6cd5\u6267\u884c\u7ed3\u675f:true\n2019-12-23 12:00:21.078  INFO 23952 --- [.0-28888-exec-2] org.test.controller.TestController       : \u5206\u5e03\u5f0f\u4e8b\u52a1Id:192.168.14.67:8092:2030765926\n2019-12-23 12:00:21.213  INFO 23952 --- [.0-28888-exec-2] i.seata.tm.api.DefaultGlobalTransaction  : [192.168.14.67:8092:2030765926] commit status: Committed\n")),(0,o.kt)("p",null,"\u200b\t\u53ef\u4ee5\u770b\u5230\u4e8b\u52a1\u5df2\u7ecf\u88ab\u63d0\u4ea4\u4e86."),(0,o.kt)("h1",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,o.kt)("p",null,"\u66f4\u8be6\u7ec6\u7684\u5185\u5bb9\u5e0c\u671b\u5e0c\u671b\u5927\u5bb6\u8bbf\u95ee\u4ee5\u4e0b\u5730\u5740\u9605\u8bfb\u8be6\u7ec6\u6587\u6863"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://nacos.io/zh-cn/index.html"},"nacos\u5b98\u7f51")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"http://dubbo.apache.org/en-us/"},"dubbo\u5b98\u7f51")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"http://seata.io/zh-cn/"},"seata\u5b98\u7f51")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.docker.com/"},"docker\u5b98\u7f51")))}g.isMDXComponent=!0}}]);