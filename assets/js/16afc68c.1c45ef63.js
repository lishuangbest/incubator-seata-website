"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[70611],{27669:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var o=t(74848),i=t(28453);const r={title:"Microservice Framework Guide",keywords:["Seata"],description:"Microservice Framework Guide."},a="Transaction Context",c={id:"user/microservice",title:"Microservice Framework Guide",description:"Microservice Framework Guide.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-v2.2/user/microservice.md",sourceDirName:"user",slug:"/user/microservice",permalink:"/docs/user/microservice",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/en/docusaurus-plugin-content-docs/version-v2.2/user/microservice.md",tags:[],version:"v2.2",frontMatter:{title:"Microservice Framework Guide",keywords:["Seata"],description:"Microservice Framework Guide."},sidebar:"docs",previous:{title:"Api Guide",permalink:"/docs/user/api"},next:{title:"ORM Framework Support",permalink:"/docs/user/ormframework"}},s={},d=[];function l(n){const e={blockquote:"blockquote",code:"code",em:"em",h1:"h1",p:"p",pre:"pre",...(0,i.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{id:"transaction-context",children:"Transaction Context"}),"\n",(0,o.jsx)(e.p,{children:"Transaction context of Seata is managed by RootContext."}),"\n",(0,o.jsx)(e.p,{children:"When application begins a global transaction, RootContext will bind the XID of the transaction automatically, at the end of transaction(commit or rollback), RootContext will unbind the XID automatically."}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-java",children:"// Bind XID\nRootContext.bind(xid);\n\n// Unbind XID\nString xid = RootContext.unbind();\n"})}),"\n",(0,o.jsx)(e.p,{children:"Application retrieve the global transaction XID through the API of RootContext."}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-java",children:"// Retrieve XID\nString xid = RootContext.getXID();\n"})}),"\n",(0,o.jsx)(e.p,{children:"Whether application is running a global transaction, just check if an XID bound to RootContext."}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-java",children:"    public static boolean inGlobalTransaction() {\n        return CONTEXT_HOLDER.get(KEY_XID) != null;\n    }\n"})}),"\n",(0,o.jsx)(e.h1,{id:"transaction-propagation",children:"Transaction propagation"}),"\n",(0,o.jsx)(e.p,{children:"The mechanism of the global transaction of Seata is the propagation of transaction context,  primarily, it's the propagation way of XID in runtime."}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.em,{children:"1. The propagation of transaction in the service"})}),"\n",(0,o.jsx)(e.p,{children:"By default, RootContext is based on ThreadLocal, which is the XID is bound in the context of thread."}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-java",children:"public class ThreadLocalContextCore implements ContextCore {\n\n    private ThreadLocal<Map<String, String>> threadLocal = new ThreadLocal<Map<String, String>>() {\n        @Override\n        protected Map<String, String> initialValue() {\n            return new HashMap<String, String>();\n        }\n\n    };\n\n    @Override\n    public String put(String key, String value) {\n        return threadLocal.get().put(key, value);\n    }\n\n    @Override\n    public String get(String key) {\n        return threadLocal.get().get(key);\n    }\n\n    @Override\n    public String remove(String key) {\n        return threadLocal.get().remove(key);\n    }\n}\n"})}),"\n",(0,o.jsx)(e.p,{children:"So the inner XID of service is tracing by the same thread naturally, do nothing to propagate the transaction by default."}),"\n",(0,o.jsx)(e.p,{children:"If it hopes to hung up the transaction context, implement it by the API of RootContext:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-java",children:"// Hung up(pause)\nString xid = RootContext.unbind();\n\n// TODO: Logic running out of the global transaction scope\n\n// recover the global transaction\nRootContext.bind(xid);\n\n"})}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.em,{children:"2. Transactional propagation across service calls"})}),"\n",(0,o.jsx)(e.p,{children:"It's easy to know by the basic idea preceding:"}),"\n",(0,o.jsxs)(e.blockquote,{children:["\n",(0,o.jsx)(e.p,{children:"The transaction propagation across service calls, essentially, propagate the XID via service call to service provider, and bind it to RootContext."}),"\n"]}),"\n",(0,o.jsx)(e.p,{children:"As long as it can be done, Seata can support any microservice framework in theory."}),"\n",(0,o.jsx)(e.h1,{id:"interpretation-of-supporting-dubbo",children:"Interpretation of supporting Dubbo"}),"\n",(0,o.jsx)(e.p,{children:"Let's interpret the inner support for Dubbo RPC to illustrate how Seata supports a specific microservice framework in follows:"}),"\n",(0,o.jsx)(e.p,{children:"We use the org.apache.dubbo.rpc.Filter of Dubbo to support propagation of transaction."}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-java",children:'/**\n * The type Transaction propagation filter.\n */\n@Activate(group = { Constants.PROVIDER, Constants.CONSUMER }, order = 100)\npublic class TransactionPropagationFilter implements Filter {\n\n    private static final Logger LOGGER = LoggerFactory.getLogger(TransactionPropagationFilter.class);\n\n    @Override\n    public Result invoke(Invoker<?> invoker, Invocation invocation) throws RpcException {\n        String xid = RootContext.getXID(); // Get XID of current transaction\n        String rpcXid = RpcContext.getContext().getAttachment(RootContext.KEY_XID); // Acquire the XID from RPC invoke\n        if (LOGGER.isDebugEnabled()) {\n            LOGGER.debug("xid in RootContext[" + xid + "] xid in RpcContext[" + rpcXid + "]");\n        }\n        boolean bind = false;\n        if (xid != null) { // Consumer\uff1aPut XID into the attachment of RPC\n            RpcContext.getContext().setAttachment(RootContext.KEY_XID, xid);\n        } else {\n            if (rpcXid != null) { // Provider\uff1aBind the XID propagated by RPC to current runtime\n                RootContext.bind(rpcXid);\n                bind = true;\n                if (LOGGER.isDebugEnabled()) {\n                    LOGGER.debug("bind[" + rpcXid + "] to RootContext");\n                }\n            }\n        }\n        try {\n            return invoker.invoke(invocation); // Business method invoke\n\n        } finally {\n            if (bind) { // Provider\uff1aClean up XID after invoke\n                String unbindXid = RootContext.unbind();\n                if (LOGGER.isDebugEnabled()) {\n                    LOGGER.debug("unbind[" + unbindXid + "] from RootContext");\n                }\n                if (!rpcXid.equalsIgnoreCase(unbindXid)) {\n                    LOGGER.warn("xid in change during RPC from " + rpcXid + " to " + unbindXid);\n                    if (unbindXid != null) { // if there is new transaction begin, can\'t do clean up\n                        RootContext.bind(unbindXid);\n                        LOGGER.warn("bind [" + unbindXid + "] back to RootContext");\n                    }\n                }\n            }\n        }\n    }\n}\n'})})]})}function u(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(l,{...n})}):l(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>a,x:()=>c});var o=t(96540);const i={},r=o.createContext(i);function a(n){const e=o.useContext(r);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:a(n.components),o.createElement(r.Provider,{value:e},n.children)}}}]);