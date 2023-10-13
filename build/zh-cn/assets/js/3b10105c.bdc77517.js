"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[69065],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},i=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return n?r.createElement(g,c(c({ref:t},i),{},{components:n})):r.createElement(g,c({ref:t},i))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,c=new Array(l);c[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:a,c[1]=o;for(var p=2;p<l;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},91294:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const l={title:"Seata core \u6a21\u5757\u6e90\u7801\u5206\u6790",author:"\u8d75\u6da6\u6cfd",keywords:["Seata\u3001\u5206\u5e03\u5f0f\u4e8b\u52a1"],date:"2019/12/23"},c=void 0,o={permalink:"/zh-cn/blog/seata-analysis-core-modular",source:"@site/i18n/zh-cn/docusaurus-plugin-content-blog/seata-analysis-core-modular.md",title:"Seata core \u6a21\u5757\u6e90\u7801\u5206\u6790",description:"\u4e00  . \u5bfc\u8bfb",date:"2019-12-23T00:00:00.000Z",formattedDate:"2019\u5e7412\u670823\u65e5",tags:[],readingTime:8.63,hasTruncateMarker:!1,authors:[{name:"\u8d75\u6da6\u6cfd"}],frontMatter:{title:"Seata core \u6a21\u5757\u6e90\u7801\u5206\u6790",author:"\u8d75\u6da6\u6cfd",keywords:["Seata\u3001\u5206\u5e03\u5f0f\u4e8b\u52a1"],date:"2019/12/23"},prevItem:{title:"Seata Community Meetup\xb7\u676d\u5dde\u7ad9",permalink:"/zh-cn/blog/seata-community-meetup-hangzhou-ready"},nextItem:{title:"\u901a\u8fc7AOP\u52a8\u6001\u521b\u5efa/\u5173\u95edSeata\u5206\u5e03\u5f0f\u4e8b\u52a1",permalink:"/zh-cn/blog/seata-spring-boot-aop-aspectj"}},s={authorsImageUrls:[void 0]},p=[{value:"\u4e00  . \u5bfc\u8bfb",id:"\u4e00---\u5bfc\u8bfb",level:2},{value:"\u4e8c  . exception \u5305\u4e2d handler \u7c7b\u5206\u6790",id:"\u4e8c---exception-\u5305\u4e2d-handler-\u7c7b\u5206\u6790",level:2},{value:"\u4e09  . rpc \u5305\u5206\u6790",id:"\u4e09---rpc-\u5305\u5206\u6790",level:2},{value:"\u56db  . \u603b\u7ed3",id:"\u56db---\u603b\u7ed3",level:2},{value:"\u4e94  . seata\u6e90\u7801\u5206\u6790\u7cfb\u5217\u5730\u5740",id:"\u4e94---seata\u6e90\u7801\u5206\u6790\u7cfb\u5217\u5730\u5740",level:2}],i={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u4e00---\u5bfc\u8bfb"},"\u4e00  . \u5bfc\u8bfb"),(0,a.kt)("p",null,"core \u6a21\u5757\u5b9a\u4e49\u4e86\u4e8b\u52a1\u7684\u7c7b\u578b\u3001\u72b6\u6001\uff0c\u901a\u7528\u7684\u884c\u4e3a\uff0cclient \u548c server \u901a\u4fe1\u65f6\u7684\u534f\u8bae\u548c\u6d88\u606f\u6a21\u578b\uff0c\u8fd8\u6709\u5f02\u5e38\u5904\u7406\u65b9\u5f0f\uff0c\u7f16\u8bd1\u3001\u538b\u7f29\u7c7b\u578b\u65b9\u5f0f\uff0c\u914d\u7f6e\u4fe1\u606f\u540d\u79f0\uff0c\u73af\u5883context\u7b49\uff0c\u8fd8\u57fa\u4e8e netty \u5c01\u88c5\u4e86 rpc \uff0c\u4f9b\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u7aef\u4f7f\u7528\u3002"),(0,a.kt)("p",null,"\u6309\u5305\u987a\u5e8f\u6765\u5206\u6790\u4e00\u4e0b core \u6a21\u5757\u4e3b\u8981\u529f\u80fd\u7c7b\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/20191223162313317.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})),(0,a.kt)("p",null,"codec\uff1a\u5b9a\u4e49\u4e86\u4e00\u4e2a codec \u7684\u5de5\u5382\u7c7b\uff0c\u63d0\u4f9b\u4e86\u4e00\u4e2a\u65b9\u6cd5\uff0c\u6839\u636e\u5e8f\u5217\u5316\u7c7b\u578b\u6765\u627e\u5bf9\u5e94\u7684\u5904\u7406\u7c7b\u3002\u8fd8\u63d0\u4f9b\u4e86\u4e00\u4e2a\u63a5\u53e3\u7c7b Codec \uff0c\u6709\u4e24\u4e2a\u62bd\u8c61\u65b9\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"<T> byte[] encode(T t);\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"<T> T decode(byte[] bytes);\n")),(0,a.kt)("p",null,"\u76ee\u524d1.0\u7248\u672c\u5728 codec \u6a21\u5757\uff0c\u6709\u4e09\u79cd\u5e8f\u5217\u5316\u7684\u5b9e\u73b0\uff1aSEATA\u3001PROTOBUF\u3001KRYO\u3002"),(0,a.kt)("p",null,"compressor\uff1a\u548ccodec\u5305\u4e0b\u9762\u7c7b\u4e00\u6837\uff0c\u90fd\u662f\u4e09\u4e2a\u7c7b\uff0c\u4e00\u4e2a\u538b\u7f29\u7c7b\u578b\u7c7b\uff0c\u4e00\u4e2a\u5de5\u5382\u7c7b\uff0c\u4e00\u4e2a\u538b\u7f29\u548c\u89e3\u538b\u7f29\u64cd\u4f5c\u7684\u62bd\u8c61\u7c7b\u30021.0\u7248\u672c\u5c31\u53ea\u6709\u4e00\u79cd\u538b\u7f29\u65b9\u5f0f\uff1aGzip"),(0,a.kt)("p",null,"constants\uff1a\u4e24\u4e2aClientTableColumnsName\u3001ServerTableColumnsName\u7c7b\uff0c\u5206\u522b\u662f client \u7aef\u5b58\u50a8\u4e8b\u52a1\u7684\u8868\u548c server \u7aef\u5b58\u50a8\u4e8b\u52a1\u8868\u5bf9\u5e94\u7684model\u7c7b\u3002\u8fd8\u6709\u5b9a\u4e49\u652f\u6301\u7684\u6570\u636e\u5e93\u7c7b\u578b\u7c7b\u548c\u4e00\u4e9b\u5b9a\u4e49\u914d\u7f6e\u4fe1\u606f\u5c5e\u6027\u7684\u524d\u7f00\u7684\u7c7b\u3002"),(0,a.kt)("p",null,"context\uff1a\u73af\u5883\u7c7b RootContext \u6301\u6709\u4e00\u4e2a ThreadLocalContextCore \u7528\u6765\u5b58\u50a8\u4e8b\u52a1\u7684\u6807\u8bc6\u4fe1\u606f\u3002\u6bd4\u5982 TX_XID \u7528\u6765\u552f\u4e00\u7684\u8868\u793a\u4e00\u4e2a\u4e8b\u52a1\u3002TX_LOCK  \u5982\u679c\u5b58\u5728\uff0c\u5219\u8868\u793a\u672c\u5730\u4e8b\u52a1\u5bf9\u4e8e update/delete/insert/selectForUpdate SQL \u9700\u8981\u7528\u5168\u5c40\u9501\u63a7\u5236\u3002"),(0,a.kt)("p",null,"event\uff1a\u8fd9\u91cc\u7528\u5230\u4e86 guava \u4e2d EventBus \u4e8b\u4ef6\u603b\u7ebf\u6765\u8fdb\u884c\u6ce8\u518c\u548c\u901a\u77e5\uff0c\u76d1\u542c\u5668\u6a21\u5f0f\u3002\u5728 server \u6a21\u5757\u7684 metrics \u5305\u4e2d\uff0cMetricsManager \u5728\u521d\u59cb\u5316\u7684\u65f6\u5019\uff0c\u5bf9 GlobalStatus \u5373 server \u6a21\u5757\u5904\u7406\u4e8b\u52a1\u7684\u51e0\u4e2a\u72b6\u6001\u53d8\u5316\u65f6\uff0c\u6ce8\u518c\u4e86\u76d1\u633a\u4e8b\u4ef6\uff0c\u5f53 server \u5904\u7406\u4e8b\u52a1\u65f6\uff0c\u4f1a\u56de\u8c03\u76d1\u542c\u7684\u65b9\u6cd5\uff0c\u4e3b\u8981\u662f\u4e3a\u4e86\u8fdb\u884c\u7edf\u8ba1\u5404\u79cd\u72b6\u6001\u4e8b\u52a1\u7684\u6570\u91cf\u3002"),(0,a.kt)("p",null,"lock\uff1a\tserver \u5728\u6536\u5230 registerBranch \u6d88\u606f\u8fdb\u884c\u5206\u652f\u6ce8\u518c\u7684\u65f6\u5019\uff0c\u4f1a\u52a0\u9501\u30021.0\u7248\u672c\u6709\u4e24\u79cd\u9501\u7684\u5b9e\u73b0\uff0cDataBaseLocker \u548c MemoryLocker\uff0c\u5206\u522b\u662f\u6570\u636e\u5e93\u9501\u548c\u5185\u5b58\u9501\uff0c\u6570\u636e\u5e93\u9501\u6839\u636e rowKey = resourceId + tableName + pk \u8fdb\u884c\u52a0\u9501\uff0c\u5185\u5b58\u9501\u76f4\u63a5\u5c31\u662f\u6839\u636e primary key\u3002"),(0,a.kt)("p",null,"model\uff1aBranchStatus\u3001GlobalStatus\u3001BranchType \u7528\u6765\u5b9a\u4e49\u4e8b\u52a1\u7684\u7c7b\u578b\u548c\u5168\u5c40\u3001\u5206\u652f\u72b6\u6001\u3002\u8fd8\u6709TransactionManager\u548cResourceManager\uff0c\u662f rm \u548c tm \u7684\u62bd\u8c61\u7c7b\u3002\u5177\u4f53\u7684 rm \u548c tm \u7684\u5b9e\u73b0\uff0c\u56e0\u4e3a\u5404\u79cd\u4e8b\u52a1\u7c7b\u578b\u90fd\u4e0d\u540c\uff0c\u6240\u4ee5\u8fd9\u91cc\u6ca1\u6709\u5177\u4f53\u7684\u5b9e\u73b0\u7c7b\u3002"),(0,a.kt)("p",null,"protocol\uff1a\u5b9a\u4e49\u4e86 rpc \u6a21\u5757\u4f20\u8f93\u7528\u7684\u5b9e\u4f53\u7c7b\uff0c\u5373\u6bcf\u4e2a\u4e8b\u52a1\u72b6\u6001\u573a\u666f\u4e0b request \u548c response \u7684model\u3002"),(0,a.kt)("p",null,"store\uff1a\u5b9a\u4e86\u4e0e\u6570\u636e\u5e93\u6253\u4ea4\u9053\u7684\u6570\u636e\u6a21\u578b\uff0c\u548c\u4e0e\u6570\u636e\u5e93\u4ea4\u4e92\u7684\u8bed\u53e5\u3002"),(0,a.kt)("h2",{id:"\u4e8c---exception-\u5305\u4e2d-handler-\u7c7b\u5206\u6790"},"\u4e8c  . exception \u5305\u4e2d handler \u7c7b\u5206\u6790"),(0,a.kt)("p",null,"\u8fd9\u662f AbstractExceptionHandler \u7684 UML \u56fe\uff0cCallback \u3001AbstractCallback \u662f AbstractExceptionHandler \u7684\u5185\u90e8\u63a5\u53e3\u548c\u5185\u90e8\u7c7b\uff0cAbstractCallback \u62bd\u8c61\u7c7b\u5b9e\u73b0\u4e86\u63a5\u53e3 Callback \u7684\u4e09\u4e2a\u65b9\u6cd5\uff0c\u8fd8\u6709\u4e00\u4e2a execute() \u672a\u5b9e\u73b0\u3002AbstractExceptionHandler \u4f7f\u7528\u4e86 AbstractCallback \u4f5c\u4e3a\u6a21\u677f\u65b9\u6cd5\u7684\u53c2\u6570\uff0c\u5e76\u4f7f\u7528\u4e86\u5176\u5b9e\u73b0\u7684\u4e09\u4e2a\u65b9\u6cd5\uff0c\u4f46\u662f execute() \u65b9\u6cd5\u4ecd\u7559\u7ed9\u5b50\u7c7b\u5b9e\u73b0\u3002\n",(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/20191211165628768.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM3ODA0NzM3,size_16,color_FFFFFF,t_70",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"}),"\n\u4ece\u5bf9\u5916\u66b4\u9732\u7684\u89d2\u5ea6\u770b AbstractExceptionHandler \u5b9a\u4e49\u4e86\u4e00\u4e2a\u5e26\u6709\u5f02\u5e38\u5904\u7406\u7684\u6a21\u677f\u65b9\u6cd5\uff0c\u6a21\u677f\u4e2d\u6709\u56db\u4e2a\u884c\u4e3a\uff0c\u5728\u4e0d\u540c\u7684\u60c5\u51b5\u4e0b\u6267\u884c\uff0c\u5176\u4e2d\u4e09\u79cd\u884c\u4e3a\u5df2\u7ecf\u5b9e\u73b0\uff0c\u6267\u884c\u7684\u884c\u4e3a\u4ea4\u7531\u5b50\u7c7b\u81ea\u884c\u5b9e\u73b0\uff0c\u8be6\u89e3\uff1a"),(0,a.kt)("p",null,"1.\u4f7f\u7528\u6a21\u677f\u65b9\u6cd5\u6a21\u5f0f\uff0c\u5728 exceptionHandlerTemplate() \u4e2d\uff0c\u5b9a\u4e49\u597d\u4e86\u6267\u884c\u7684\u6a21\u677f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'    public void exceptionHandleTemplate(Callback callback, AbstractTransactionRequest request,\n        AbstractTransactionResponse response) {\n        try {\n            callback.execute(request, response); //\u6267\u884c\u4e8b\u52a1\u4e1a\u52a1\u7684\u65b9\u6cd5\n            callback.onSuccess(request, response); //\u8bbe\u7f6eresponse\u8fd4\u56de\u7801\n        } catch (TransactionException tex) {\n            LOGGER.error("Catch TransactionException while do RPC, request: {}", request, tex);\n            callback.onTransactionException(request, response, tex); //\u8bbe\u7f6eresponse\u8fd4\u56de\u7801\u5e76\u8bbe\u7f6emsg\n        } catch (RuntimeException rex) {\n            LOGGER.error("Catch RuntimeException while do RPC, request: {}", request, rex);\n            callback.onException(request, response, rex);  //\u8bbe\u7f6eresponse\u8fd4\u56de\u7801\u5e76\u8bbe\u7f6emsg\n        }\n    }\n')),(0,a.kt)("p",null,"onSuccess\u3001onTransactionException\u3001onException \u5728 AbstarctCallback \u4e2d\u5df2\u7ecf\u88ab\u5b9e\u73b0\uff0cexecute \u5219\u7531AbstractExceptionHandler \u5b50\u7c7b\u5373\u8d1f\u8d23\u4e0d\u540c\u4e8b\u52a1\u6a21\u5f0f\u7684 handler \u7c7b\u8fdb\u884c\u5b9e\u73b0\u3002\nAbstractExceptionHandler \u76ee\u524d\u6709\u4e24\u4e2a\u5b50\u7c7b\uff1aAbstractTCInboundHandler \u8d1f\u8d23\u5904\u7406\u5168\u5c40\u4e8b\u52a1\u7684\u4e1a\u52a1\uff0cAbstractRMHandler \u8d1f\u8d23\u5904\u7406\u5206\u652f\u4e8b\u52a1\u7684\u4e1a\u52a1\u3002"),(0,a.kt)("p",null,"2.\u4f7f\u7528\u56de\u8c03\u673a\u5236\uff0c\u4f18\u70b9\u662f\uff1a\u5141\u8bb8 AbstractExceptionHandler \u628a\u9700\u8981\u8c03\u7528\u7684\u7c7b Callback \u4f5c\u4e3a\u53c2\u6570\u4f20\u9012\u8fdb\u6765\uff0chandler \u4e0d\u9700\u8981\u77e5\u9053 callback \u7684\u5177\u4f53\u6267\u884c\u903b\u8f91\uff0c\u53ea\u8981\u77e5\u9053 callback \u7684\u7279\u6027\u539f\u578b\u548c\u9650\u5236\u6761\u4ef6(\u53c2\u6570\u3001\u8fd4\u56de\u503c)\uff0c\u5c31\u53ef\u4ee5\u4f7f\u7528\u4e86\u3002"),(0,a.kt)("p",null,"\u5148\u4f7f\u7528\u6a21\u677f\u65b9\u6cd5\uff0c\u628a\u4e8b\u52a1\u4e1a\u52a1\u6d41\u7a0b\u5b9a\u4e0b\u6765\uff0c\u518d\u901a\u8fc7\u56de\u8c03\uff0c\u628a\u5177\u4f53\u6267\u884c\u4e8b\u52a1\u4e1a\u52a1\u7684\u65b9\u6cd5\uff0c\u7559\u7ed9\u5b50\u7c7b\u5b9e\u73b0\u3002\u8bbe\u8ba1\u7684\u975e\u5e38\u5de7\u5999\u3002"),(0,a.kt)("p",null,"\u8fd9\u4e2a exceptionHandlerTemplate() \u5e94\u8be5\u7ffb\u8bd1\u6210\u5e26\u6709\u5f02\u5e38\u5904\u7406\u7684\u6a21\u677f\u65b9\u6cd5\u3002\u5f02\u5e38\u5904\u7406\u5df2\u7ecf\u88ab\u62bd\u8c61\u7c7b\u5b9e\u73b0\uff0c\u5177\u4f53\u7684\u4e0d\u540c\u6a21\u5f0f\u4e0b commit \u3001rollback \u7684\u4e1a\u52a1\u5904\u7406\u5219\u4ea4\u7ed9\u5b50\u7c7b\u5b9e\u73b0\u3002"),(0,a.kt)("h2",{id:"\u4e09---rpc-\u5305\u5206\u6790"},"\u4e09  . rpc \u5305\u5206\u6790"),(0,a.kt)("p",null,"seata \u5bf9\u4e8e rpc \u7684\u5c01\u88c5\uff0c\u7ec6\u8282\u4e0d\u9700\u8981\u7ea0\u7ed3\uff0c\u53ef\u4ee5\u7814\u7a76\u4e00\u4e0b\u4e00\u4e0b\u5bf9\u4e8e\u4e8b\u52a1\u4e1a\u52a1\u7684\u5904\u7406\u3002"),(0,a.kt)("p",null,"client \u7aef\u7684 rpc \u7c7b\u662f AbstractRpcRemotingClient\uff1a\n",(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/20191211180129741.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})),(0,a.kt)("p",null,"\u91cd\u8981\u7684\u5c5e\u6027\u548c\u65b9\u6cd5\u90fd\u5728\u7c7b\u56fe\u4e2d\uff0c\u6d88\u606f\u53d1\u9001\u548c\u521d\u59cb\u5316\u65b9\u6cd5\u6ca1\u753b\u5728\u7c7b\u56fe\u4e2d\uff0c\u8be6\u7ec6\u5206\u6790\u4e00\u4e0b\u7c7b\u56fe\uff1a"),(0,a.kt)("p",null,"clientBootstrap\uff1a\u662f netty \u542f\u52a8\u7c7b Bootstrap \u7684\u5c01\u88c5\u7c7b\uff0c\u6301\u6709\u4e86 Bootstrap \u7684\u5b9e\u4f8b\uff0c\u5e76\u81ea\u5b9a\u4e49\u81ea\u5df1\u60f3\u8981\u7684\u5c5e\u6027\u3002"),(0,a.kt)("p",null,"clientChannelManager\uff1a\u4f7f\u7528 ConcurrentHashMap<serverAddress,channel> \u5bb9\u5668\u7ef4\u62a4\u5730\u5740\u548c channel \u7684\u5bf9\u5e94\u5173\u7cfb\u3002"),(0,a.kt)("p",null,"clientMessageListener\uff1a \u6d88\u606f\u7684\u5904\u7406\u7c7b\uff0c\u6839\u636e\u6d88\u606f\u7684\u7c7b\u578b\u7684\u4e0d\u540c\u6709\u4e09\u79cd\u5177\u4f53\u7684\u5904\u7406\u65b9\u6cd5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'public void onMessage(RpcMessage request, String serverAddress, ClientMessageSender sender) {\n        Object msg = request.getBody();\n        if (LOGGER.isInfoEnabled()) {\n            LOGGER.info("onMessage:" + msg);\n        }\n        if (msg instanceof BranchCommitRequest) {\n            handleBranchCommit(request, serverAddress, (BranchCommitRequest)msg, sender);\n        } else if (msg instanceof BranchRollbackRequest) {\n            handleBranchRollback(request, serverAddress, (BranchRollbackRequest)msg, sender);\n        } else if (msg instanceof UndoLogDeleteRequest) {\n            handleUndoLogDelete((UndoLogDeleteRequest)msg);\n        }\n    }\n')),(0,a.kt)("p",null,"\u6d88\u606f\u7c7b\u4e2d\uff0c\u6301\u6709 TransactionMessageHandler \u5bf9\u4e0d\u540c\u7c7b\u578b\u6d88\u606f\u8fdb\u884c\u5904\u7406\uff0c\u6700\u7ec8\u4f1a\u6839\u636e\u4e8b\u52a1\u7c7b\u578b\u7684\u4e0d\u540c\uff08AT\u3001TCC\u3001SAGE\uff09\u8c03\u7528\u5177\u4f53\u7684\u5904\u7406\u7c7b\uff0c\u5373\u7b2c\u4e8c\u90e8\u5206\u8bf4\u7684 exceptionHandleTemplate() \u7684\u5b9e\u73b0\u7c7b\u3002"),(0,a.kt)("p",null,"mergeSendExecutorService\uff1a\u662f\u4e00\u4e2a\u7ebf\u7a0b\u6c60\uff0c\u53ea\u6709\u4e00\u4e2a\u7ebf\u7a0b\uff0c\u8d1f\u8d23\u5bf9\u4e0d\u540c\u5730\u5740\u4e0b\u7684\u6d88\u606f\u8fdb\u884c\u548c\u5e76\u53d1\u9001\u3002\u5728 sendAsyncRequest() \u4e2d\uff0c\u4f1a\u7ed9\u7ebf\u7a0b\u6c60\u7684\u961f\u5217LinkedBlockingQueue","<",">","  offer \u6d88\u606f\uff0c\u7136\u540e\u8fd9\u4e2a\u7ebf\u7a0b\u8d1f\u8d23 poll \u548c\u5904\u7406\u6d88\u606f\u3002"),(0,a.kt)("p",null,"channelRead()\uff1a\u5904\u7406\u670d\u52a1\u7aef\u7684 HeartbeatMessage.PONG \u5fc3\u8df3\u6d88\u606f\u3002\u8fd8\u6709\u6d88\u606f\u7c7b\u578b\u662f MergeResultMessage \u5373\u5f02\u6b65\u6d88\u606f\u7684\u54cd\u5e94\u6d88\u606f\uff0c\u6839\u636e msgId \u627e\u5230\u5bf9\u5e94 MessageFuture \uff0c\u5e76\u8bbe\u7f6e\u5f02\u6b65\u6d88\u606f\u7684 result \u7ed3\u679c\u3002"),(0,a.kt)("p",null,"dispatch()\uff1a\u8c03\u7528 clientMessageListener \u5904\u7406 server \u53d1\u9001\u8fc7\u6765\u7684\u6d88\u606f\uff0c\u4e0d\u540c\u7c7b\u578b request \u6709\u4e0d\u540c\u7684\u5904\u7406\u7c7b\u3002"),(0,a.kt)("p",null,"\u7b80\u5355\u70b9\u770b netty\uff0c\u53ea\u9700\u8981\u5173\u6ce8\u5e8f\u5217\u5316\u65b9\u5f0f\u548c\u6d88\u606f\u5904\u7406handler\u7c7b\u3002seata \u7684 rpc \u5e8f\u5217\u5316\u65b9\u5f0f\u901a\u8fc7\u5de5\u5382\u7c7b\u627e Codec \u5b9e\u73b0\u7c7b\u8fdb\u884c\u5904\u7406\uff0chandler \u5373\u4e0a\u6587\u8bf4\u7684 TransactionMessageHandler \u3002"),(0,a.kt)("h2",{id:"\u56db---\u603b\u7ed3"},"\u56db  . \u603b\u7ed3"),(0,a.kt)("p",null,"core \u6a21\u5757\u6d89\u53ca\u7684\u529f\u80fd\u5f88\u591a\uff0c\u5176\u4e2d\u7684\u7c7b\u5927\u591a\u90fd\u662f\u5176\u4ed6\u6a21\u5757\u7684\u62bd\u8c61\u7c7b\u3002\u62bd\u8c61\u51fa\u4e1a\u52a1\u6a21\u578b\uff0c\u5177\u4f53\u7684\u5b9e\u73b0\u5206\u5e03\u5728\u4e0d\u540c\u7684\u6a21\u5757\u3002core \u6a21\u5757\u7684\u4ee3\u7801\u975e\u5e38\u7684\u4f18\u79c0\uff0c\u5f88\u591a\u8bbe\u8ba1\u90fd\u662f\u7ecf\u5178\uff0c\u6bd4\u5982\u4e0a\u6587\u5206\u6790\u7684\u57fa\u4e8e\u6a21\u677f\u6a21\u5f0f\u6539\u9020\u7684\uff0c\u975e\u5e38\u5b9e\u7528\u4e5f\u975e\u5e38\u7f8e\uff0c\u503c\u5f97\u4ed4\u7ec6\u7814\u7a76\u3002"),(0,a.kt)("h2",{id:"\u4e94---seata\u6e90\u7801\u5206\u6790\u7cfb\u5217\u5730\u5740"},"\u4e94  . seata\u6e90\u7801\u5206\u6790\u7cfb\u5217\u5730\u5740"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://blog.csdn.net/qq_37804737/category_9530078.html"},"\u7cfb\u5217\u5730\u5740")))}d.isMDXComponent=!0}}]);