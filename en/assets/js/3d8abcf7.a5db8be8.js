/*! For license information please see 3d8abcf7.a5db8be8.js.LICENSE.txt */
(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[3591],{91262:(e,t,i)=>{"use strict";i.d(t,{Z:()=>r});var n=i(67294),s=i(72389);function r(e){let{children:t,fallback:i}=e;return(0,s.Z)()?n.createElement(n.Fragment,null,t?.()):i??null}},35138:(e,t,i)=>{"use strict";i.d(t,{$Q:()=>m,zx:()=>o,$_:()=>E,JO:()=>c,iR:()=>h});var n=i(67294),s=i(94184),r=i.n(s),a=i(81876);const l={type:"primary",link:"",target:"_self"},o=function(e){return void 0===e&&(e=l),n.createElement("a",{className:r()({button:!0,[`button-${e.type}`]:!0}),target:e.target||"_self",href:(0,a.Rg)(e.link,e.language)},e.children||null)},c=e=>{const{type:t}=e;return n.createElement("i",{className:r()({"docsite-icon":!0,[`docsite-icon-${t}`]:!0})})},m=e=>{const{text:t,img:i}=e,s=r()({bar:!0});return n.createElement("div",{className:s},n.createElement("div",{className:"bar-body"},n.createElement("img",{src:(0,a.Rg)(i),className:"front-img"}),n.createElement("span",null,t),n.createElement("img",{src:(0,a.Rg)(i),className:"back-img"})))};var u=i(73935);class d extends n.Component{constructor(e){super(e),this.container=null,this.state={screenIndex:0,visibleNum:1}}componentDidMount(){this.throttleAdjust=(0,a.P2)((()=>{this.setState({visibleNum:this.getVisibleNum()})}),200),window?.addEventListener?.("resize",this.throttleAdjust),this.setState({visibleNum:this.getVisibleNum()})}componentWillUnmount(){window?.removeEventListener?.("resize",this.throttleAdjust)}getVisibleNum=()=>{let e=1;const t=this.container?.getBoundingClientRect().width,i=this.sliderItemChild0?.getBoundingClientRect?this.sliderItemChild0?.getBoundingClientRect().width:u.findDOMNode(this.sliderItemChild0)?.getBoundingClientRect().width;return t&&i&&(e=Math.floor(t/i)),e||1};getListWidth=()=>{let e=0;const{children:t}=this.props,{visibleNum:i}=this.state,s=n.Children.count(t),r=Math.ceil(s/i);if(this.container){const t=this.container?.getBoundingClientRect().width;e=t*r}return e};changeScreen=e=>{const{screenIndex:t}=this.state;e!==t&&this.setState({screenIndex:e})};renderSliderList=()=>{const{children:e}=this.props,{screenIndex:t,visibleNum:i}=this.state,s=[],r=n.Children.count(e),a=Math.ceil(r/i);for(let n=0;n<a;n++)s.push(Array.from(e).slice(n*i,(n+1)*i));return n.createElement("div",{className:"slider-list",style:{transform:`translateX(-${t*(this.container&&this.container?.getBoundingClientRect().width||0)}px)`,transition:"transform 500ms ease",width:this.getListWidth()}},s.map(((e,t)=>n.createElement("div",{className:"slider-screen",style:{width:this.container&&this.container?.getBoundingClientRect().width||0},key:t,ref:e=>{this[`sliderScreen${t}`]=e}},e.map(((e,s)=>n.createElement("div",{className:"slider-item",key:s},n.cloneElement(e,{ref:e=>{this[`sliderItemChild${t*i+s}`]=e}}))))))))};renderControl=()=>{const{children:e}=this.props,{screenIndex:t,visibleNum:i}=this.state,s=n.Children.count(e),a=Math.ceil(s/i),l=[];for(let o=0;o<a;o++)l.push(n.createElement("span",{key:o,className:r()({"slider-control-item":!0,"slider-control-item-active":o===t}),onClick:this.changeScreen.bind(this,o)}));return n.createElement("div",{className:"slider-control"},l)};render(){return n.createElement("div",{className:"slider",ref:e=>{this.container=e}},this.renderSliderList(),this.renderControl())}}const h=d;n.Component;var g=i(95999),p=i(52263);const f={vision:{title:(0,g.I)({id:"homepage.footerVersionTitle",message:"\u613f\u666f"}),content:(0,g.I)({id:"homepage.footerVersionContent",message:"Seata \u662f\u4e00\u6b3e\u963f\u91cc\u5df4\u5df4\u5f00\u6e90\u7684\u5206\u5e03\u5f0f\u4e8b\u52a1\u89e3\u51b3\u65b9\u6848\uff0c\u81f4\u529b\u4e8e\u5728\u5fae\u670d\u52a1\u67b6\u6784\u4e0b\u63d0\u4f9b\u9ad8\u6027\u80fd\u548c\u7b80\u5355\u6613\u7528\u7684\u5206\u5e03\u5f0f\u4e8b\u52a1\u670d\u52a1\u3002"})},documentation:{title:(0,g.I)({id:"homepage.footerDocTitle",message:"\u6587\u6863"}),list:[{text:(0,g.I)({id:"homepage.footerDocListText1",message:"Seata \u662f\u4ec0\u4e48\uff1f"}),link:"/docs/overview/what-is-seata",target:""},{text:(0,g.I)({id:"homepage.footerDocListText2",message:"\u5feb\u901f\u5f00\u59cb"}),link:"/docs/user/quickstart",target:""},{text:(0,g.I)({id:"homepage.footerDocListText3",message:"\u62a5\u544a\u6587\u6863\u95ee\u9898"}),link:"https://github.com/seata/seata.github.io/issues/new",target:"_blank"},{text:(0,g.I)({id:"homepage.footerDocListText4",message:"\u5728Github\u4e0a\u7f16\u8f91\u6b64\u6587\u6863"}),link:"https://github.com/seata/seata.github.io",target:"_blank"}]},resources:{title:(0,g.I)({id:"homepage.footerResourcesTitle",message:"\u8d44\u6e90"}),list:[{text:(0,g.I)({id:"homepage.footerResourcesListText1",message:"\u535a\u5ba2"}),link:"/blog",target:""},{text:(0,g.I)({id:"homepage.footerResourcesListText2",message:"\u793e\u533a"}),link:"/community",target:""}]},copyright:`Copyright \xa9 ${(new Date).getFullYear()} Seata`},E=e=>{const{logo:t}=e,{i18n:i}=(0,p.Z)(),s=i.currentLocale;return n.createElement("footer",{className:"footer-container"},n.createElement("div",{className:"footer-body"},n.createElement("img",{style:{marginTop:"4px",maxWidth:"120px",height:"auto"},src:t}),n.createElement("br",null),n.createElement("br",null),n.createElement("div",{className:"cols-container"},n.createElement("div",{className:"col col-12"},n.createElement("h3",null,f.vision.title),n.createElement("p",null,f.vision.content)),n.createElement("div",{className:"col col-6"},n.createElement("dl",null,n.createElement("dt",null,f.documentation.title),f.documentation.list.map(((e,t)=>n.createElement("dd",{key:t},"http"===e.link?.substr(0,4)&&n.createElement("a",{href:e.link,target:e.target||"_self"},e.text),"http"!==e.link?.substr(0,4)&&n.createElement("a",{href:`/${s}${e.link}`,target:e.target||"_self"},e.text)))))),n.createElement("div",{className:"col col-6"},n.createElement("dl",null,n.createElement("dt",null,f.resources.title),f.resources.list.map(((e,t)=>n.createElement("dd",{key:t},n.createElement("a",{href:`/${s}${e.link}`,target:e.target||"_self"},e.text))))))),n.createElement("div",{className:"copyright"},n.createElement("span",null,f.copyright))))}},97685:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>c});var n=i(67294),s=i(95999),r=i(35138),a=i(91262);const l={list:[{icon:"feature-1",title:(0,s.I)({id:"homepage.featureListTitle1",message:"\u5fae\u670d\u52a1\u6846\u67b6\u652f\u6301"}),content:[(0,s.I)({id:"homepage.featureListContent1",message:"\u76ee\u524d\u5df2\u652f\u6301Dubbo\u3001Spring Cloud\u3001Sofa-RPC\u3001Motan \u548c gRPC \u7b49RPC\u6846\u67b6\uff0c\u5176\u4ed6\u6846\u67b6\u6301\u7eed\u96c6\u6210\u4e2d"})]},{icon:"feature-2",title:(0,s.I)({id:"homepage.featureListTitle2",message:"AT \u6a21\u5f0f"}),content:[(0,s.I)({id:"homepage.featureListContent2",message:"\u63d0\u4f9b\u65e0\u4fb5\u5165\u81ea\u52a8\u8865\u507f\u7684\u4e8b\u52a1\u6a21\u5f0f\uff0c\u76ee\u524d\u5df2\u652f\u6301MySQL\u3001Oracle\u3001PostgreSQL\u3001TiDB \u548c MariaDB\u3002H2\u3001DB2\u3001SQLServer\u3001\u8fbe\u68a6\u5f00\u53d1\u4e2d"})]},{icon:"feature-3",title:(0,s.I)({id:"homepage.featureListTitle3",message:"TCC \u6a21\u5f0f"}),content:(0,s.I)({id:"homepage.featureListContent3",message:"\u652f\u6301 TCC \u6a21\u5f0f\u5e76\u53ef\u4e0e AT \u6df7\u7528\uff0c\u7075\u6d3b\u5ea6\u66f4\u9ad8"})},{icon:"feature-4",title:(0,s.I)({id:"homepage.featureListTitle4",message:"SAGA \u6a21\u5f0f"}),content:(0,s.I)({id:"homepage.featureListContent4",message:"\u4e3a\u957f\u4e8b\u52a1\u63d0\u4f9b\u6709\u6548\u7684\u89e3\u51b3\u65b9\u6848,\u63d0\u4f9b\u7f16\u6392\u5f0f\u4e0e\u6ce8\u89e3\u5f0f(\u5f00\u53d1\u4e2d)"})},{icon:"feature-5",title:(0,s.I)({id:"homepage.featureListTitle5",message:"XA \u6a21\u5f0f"}),content:(0,s.I)({id:"homepage.featureListContent5",message:"\u652f\u6301\u5df2\u5b9e\u73b0 XA \u63a5\u53e3\u7684\u6570\u636e\u5e93\u7684 XA \u6a21\u5f0f\uff0c\u76ee\u524d\u5df2\u652f\u6301MySQL\u3001Oracle\u3001TiDB\u548cMariaDB"})},{icon:"feature-6",title:(0,s.I)({id:"homepage.featureListTitle6",message:"\u9ad8\u53ef\u7528"}),content:(0,s.I)({id:"homepage.featureListContent6",message:"\u652f\u6301\u8ba1\u7b97\u5206\u79bb\u96c6\u7fa4\u6a21\u5f0f\uff0c\u6c34\u5e73\u6269\u5c55\u80fd\u529b\u5f3a\u7684\u6570\u636e\u5e93\u548c Redis \u5b58\u50a8\u6a21\u5f0f.Raft\u6a21\u5f0fPreview\u9636\u6bb5"})}],title:(0,s.I)({id:"homepage.featureTitle",message:"\u7279\u8272\u529f\u80fd"})},o=e=>{const{feature:t}=e;return n.createElement(a.Z,null,(()=>n.createElement("li",null,n.createElement(r.JO,{type:t.icon}),n.createElement("div",null,n.createElement("h4",null,t.title),n.createElement("p",null,t.content)))))},c=()=>n.createElement(a.Z,null,(()=>n.createElement("section",{className:"feature-section"},n.createElement("div",{className:"feature-container"},n.createElement("h3",null,l.title),n.createElement("ul",null,l.list.map(((e,t)=>n.createElement(o,{feature:e,key:t}))))))))},81876:(e,t,i)=>{"use strict";i.d(t,{P2:()=>n,Rg:()=>s});const n=(e,t)=>{let i=null;return function(){for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];const a=this;clearTimeout(i),i=setTimeout((()=>{e.apply(a,s)}),t)}},s=(e,t)=>`${e}`.length>1&&/^\/[^/]/.test(`${e}`)?`${window.rootPath||""}${"default"===t?"/zh-cn":`/${t}`}${e}`:e},94184:(e,t)=>{var i;!function(){"use strict";var n={}.hasOwnProperty;function s(){for(var e=[],t=0;t<arguments.length;t++){var i=arguments[t];if(i){var r=typeof i;if("string"===r||"number"===r)e.push(i);else if(Array.isArray(i)){if(i.length){var a=s.apply(null,i);a&&e.push(a)}}else if("object"===r){if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]")){e.push(i.toString());continue}for(var l in i)n.call(i,l)&&i[l]&&e.push(l)}}}return e.join(" ")}e.exports?(s.default=s,e.exports=s):void 0===(i=function(){return s}.apply(t,[]))||(e.exports=i)}()}}]);