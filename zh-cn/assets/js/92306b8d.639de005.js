"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[43443],{45705:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>t,metadata:()=>i,toc:()=>l});var r=a(74848),s=a(28453);const t={title:"Seata XA \u6a21\u5f0f",keywords:["Seata","XA"],description:"Seata XA \u6a21\u5f0f\u7528\u6237\u6587\u6863"},c="Seata XA \u6a21\u5f0f",i={id:"user/mode/xa",title:"Seata XA \u6a21\u5f0f",description:"Seata XA \u6a21\u5f0f\u7528\u6237\u6587\u6863",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-v2.1/user/mode/xa.md",sourceDirName:"user/mode",slug:"/user/mode/xa",permalink:"/zh-cn/docs/v2.1/user/mode/xa",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/zh-cn/docusaurus-plugin-content-docs/version-v2.1/user/mode/xa.md",tags:[],version:"v2.1",frontMatter:{title:"Seata XA \u6a21\u5f0f",keywords:["Seata","XA"],description:"Seata XA \u6a21\u5f0f\u7528\u6237\u6587\u6863"},sidebar:"docs",previous:{title:"Seata Saga \u6a21\u5f0f",permalink:"/zh-cn/docs/v2.1/user/mode/saga"},next:{title:"\u4e8b\u52a1\u5206\u7ec4\u4ecb\u7ecd",permalink:"/zh-cn/docs/v2.1/user/txgroup/transaction-group"}},o={},l=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u4f18\u52bf",id:"\u4f18\u52bf",level:3},{value:"\u7f3a\u70b9",id:"\u7f3a\u70b9",level:3},{value:"\u9002\u7528\u573a\u666f",id:"\u9002\u7528\u573a\u666f",level:3},{value:"\u6574\u4f53\u673a\u5236",id:"\u6574\u4f53\u673a\u5236",level:2},{value:"\u57fa\u672c\u4f7f\u7528",id:"\u57fa\u672c\u4f7f\u7528",level:2},{value:"\u5feb\u901f\u5f00\u59cb",id:"\u5feb\u901f\u5f00\u59cb",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"seata-xa-\u6a21\u5f0f",children:"Seata XA \u6a21\u5f0f"}),"\n",(0,r.jsx)(n.h2,{id:"\u6982\u8ff0",children:"\u6982\u8ff0"}),"\n",(0,r.jsx)(n.p,{children:"XA \u6a21\u5f0f\u662f\u4ece 1.2 \u7248\u672c\u652f\u6301\u7684\u4e8b\u52a1\u6a21\u5f0f\u3002XA \u89c4\u8303 \u662f X/Open \u7ec4\u7ec7\u5b9a\u4e49\u7684\u5206\u5e03\u5f0f\u4e8b\u52a1\u5904\u7406\uff08DTP\uff0cDistributed Transaction Processing\uff09\u6807\u51c6\u3002Seata XA \u6a21\u5f0f\u662f\u5229\u7528\u4e8b\u52a1\u8d44\u6e90\uff08\u6570\u636e\u5e93\u3001\u6d88\u606f\u670d\u52a1\u7b49\uff09\u5bf9 XA \u534f\u8bae\u7684\u652f\u6301\uff0c\u4ee5 XA \u534f\u8bae\u7684\u673a\u5236\u6765\u7ba1\u7406\u5206\u652f\u4e8b\u52a1\u7684\u4e00\u79cd\u4e8b\u52a1\u6a21\u5f0f\u3002"}),"\n",(0,r.jsx)("img",{src:"https://img.alicdn.com/tfs/TB1hSpccIVl614jSZKPXXaGjpXa-1330-924.png",style:{zoom:"50%"}}),"\n",(0,r.jsxs)(n.p,{children:["\u672c\u6587\u4e2d\uff0c\u6211\u4eec\u5c06\u91cd\u70b9\u4ecb\u7ecd Seata XA \u6a21\u5f0f\u7684\u4f7f\u7528\uff0c\u5982\u679c\u60a8\u5bf9\u4e8e XA \u6a21\u5f0f\u539f\u7406\u611f\u5174\u8da3\uff0c\u8fd8\u8bf7\u9605\u8bfb\u5bf9\u5e94\u4e8e\u672c\u7bc7\u6587\u7ae0\u7684",(0,r.jsx)(n.a,{href:"../../dev/mode/xa-mode",children:"\u5f00\u53d1\u8005\u6307\u5357"}),"\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"\u4f18\u52bf",children:"\u4f18\u52bf"}),"\n",(0,r.jsx)(n.p,{children:"\u4e0e Seata \u652f\u6301\u7684\u5176\u5b83\u4e8b\u52a1\u6a21\u5f0f\u4e0d\u540c\uff0cXA \u534f\u8bae\u8981\u6c42\u4e8b\u52a1\u8d44\u6e90\u672c\u8eab\u63d0\u4f9b\u5bf9\u89c4\u8303\u548c\u534f\u8bae\u7684\u652f\u6301\uff0c\u6240\u4ee5\u4e8b\u52a1\u8d44\u6e90\uff08\u5982\u6570\u636e\u5e93\uff09\u53ef\u4ee5\u4fdd\u969c\u4ece\u4efb\u610f\u89c6\u89d2\u5bf9\u6570\u636e\u7684\u8bbf\u95ee\u6709\u6548\u9694\u79bb\uff0c\u6ee1\u8db3\u5168\u5c40\u6570\u636e\u4e00\u81f4\u6027\u3002\u6b64\u5916\u7684\u4e00\u4e9b\u4f18\u52bf\u8fd8\u5305\u62ec\uff1a"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"\u4e1a\u52a1\u65e0\u4fb5\u5165\uff1a\u548c AT \u4e00\u6837\uff0cXA \u6a21\u5f0f\u5c06\u662f\u4e1a\u52a1\u65e0\u4fb5\u5165\u7684\uff0c\u4e0d\u7ed9\u5e94\u7528\u8bbe\u8ba1\u548c\u5f00\u53d1\u5e26\u6765\u989d\u5916\u8d1f\u62c5\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u6570\u636e\u5e93\u7684\u652f\u6301\u5e7f\u6cdb\uff1aXA \u534f\u8bae\u88ab\u4e3b\u6d41\u5173\u7cfb\u578b\u6570\u636e\u5e93\u5e7f\u6cdb\u652f\u6301\uff0c\u4e0d\u9700\u8981\u989d\u5916\u7684\u9002\u914d\u5373\u53ef\u4f7f\u7528\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\u7f3a\u70b9",children:"\u7f3a\u70b9"}),"\n",(0,r.jsx)(n.p,{children:"XA prepare \u540e\uff0c\u5206\u652f\u4e8b\u52a1\u8fdb\u5165\u963b\u585e\u9636\u6bb5\uff0c\u6536\u5230 XA commit \u6216 XA rollback \u524d\u5fc5\u987b\u963b\u585e\u7b49\u5f85\u3002\u4e8b\u52a1\u8d44\u6e90\u957f\u65f6\u95f4\u5f97\u4e0d\u5230\u91ca\u653e\uff0c\u9501\u5b9a\u5468\u671f\u957f\uff0c\u800c\u4e14\u5728\u5e94\u7528\u5c42\u4e0a\u9762\u65e0\u6cd5\u5e72\u9884\uff0c\u6027\u80fd\u5dee\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u9002\u7528\u573a\u666f",children:"\u9002\u7528\u573a\u666f"}),"\n",(0,r.jsx)(n.p,{children:"\u9002\u7528\u4e8e\u60f3\u8981\u8fc1\u79fb\u5230 Seata \u5e73\u53f0\u57fa\u4e8e XA \u534f\u8bae\u7684\u8001\u5e94\u7528\uff0c\u4f7f\u7528 XA \u6a21\u5f0f\u5c06\u66f4\u5e73\u6ed1\uff0c\u8fd8\u6709 AT \u6a21\u5f0f\u672a\u9002\u914d\u7684\u6570\u636e\u5e93\u5e94\u7528\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u6574\u4f53\u673a\u5236",children:"\u6574\u4f53\u673a\u5236"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u6267\u884c\u9636\u6bb5\uff1a","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u53ef\u56de\u6eda\uff1a\u4e1a\u52a1 SQL \u64cd\u4f5c\u653e\u5728 XA \u5206\u652f\u4e2d\u8fdb\u884c\uff0c\u7531\u8d44\u6e90\u5bf9 XA \u534f\u8bae\u7684\u652f\u6301\u6765\u4fdd\u8bc1 ",(0,r.jsx)(n.em,{children:"\u53ef\u56de\u6eda"})]}),"\n",(0,r.jsxs)(n.li,{children:["\u6301\u4e45\u5316\uff1aXA \u5206\u652f\u5b8c\u6210\u540e\uff0c\u6267\u884c XA prepare\uff0c\u540c\u6837\uff0c\u7531\u8d44\u6e90\u5bf9 XA \u534f\u8bae\u7684\u652f\u6301\u6765\u4fdd\u8bc1 ",(0,r.jsx)(n.em,{children:"\u6301\u4e45\u5316"}),"\uff08\u5373\uff0c\u4e4b\u540e\u4efb\u4f55\u610f\u5916\u90fd\u4e0d\u4f1a\u9020\u6210\u65e0\u6cd5\u56de\u6eda\u7684\u60c5\u51b5\uff09"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\u5b8c\u6210\u9636\u6bb5\uff1a","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u5206\u652f\u63d0\u4ea4\uff1a\u6267\u884c XA \u5206\u652f\u7684 commit"}),"\n",(0,r.jsx)(n.li,{children:"\u5206\u652f\u56de\u6eda\uff1a\u6267\u884c XA \u5206\u652f\u7684 rollback"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u57fa\u672c\u4f7f\u7528",children:"\u57fa\u672c\u4f7f\u7528"}),"\n",(0,r.jsxs)(n.p,{children:["XA \u6a21\u5f0f\u4f7f\u7528\u8d77\u6765\u4e0e AT \u6a21\u5f0f\u57fa\u672c\u4e00\u81f4\uff0c\u7528\u6cd5\u4e0a\u7684\u552f\u4e00\u533a\u522b\u5728\u4e8e\u6570\u636e\u6e90\u4ee3\u7406\u7684\u66ff\u6362\uff1a\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"DataSourceProxyXA"})," \u6765\u66ff\u4ee3 ",(0,r.jsx)(n.code,{children:"DataSourceProxy"}),"\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'public class DataSourceProxy {\n    @Bean("dataSourceProxy")\n    public DataSource dataSource(DruidDataSource druidDataSource) {\n        // DataSourceProxyXA for XA mode\n        return new DataSourceProxyXA(druidDataSource);\n        // DataSourceProxy for AT mode\n        // return new DataSourceProxy(druidDataSource);\n    }\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u5feb\u901f\u5f00\u59cb",children:"\u5feb\u901f\u5f00\u59cb"}),"\n",(0,r.jsxs)(n.p,{children:["\u8bf7\u8ddf\u968f ",(0,r.jsx)(n.a,{href:"https://github.com/apache/incubator-seata-samples/tree/master/tcc",children:"seata-samples/xa"})," \u4e2d\u7684\u793a\u4f8b\u8fdb\u884c\u5b9e\u9a8c\u3002"]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>c,x:()=>i});var r=a(96540);const s={},t=r.createContext(s);function c(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);