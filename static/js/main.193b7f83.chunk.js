(this["webpackJsonpcurrency-converter"]=this["webpackJsonpcurrency-converter"]||[]).push([[0],{100:function(e,t,a){e.exports=a.p+"static/media/2.db4bc76c.jpeg"},101:function(e,t,a){e.exports=a.p+"static/media/3.48f4fd6f.jpg"},102:function(e,t,a){e.exports=a.p+"static/media/4.6129fbe2.jpeg"},107:function(e,t,a){},108:function(e,t,a){e.exports=a.p+"static/media/coin.c3f18544.png"},119:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(14),o=a.n(c),s=a(11),i=a(15),l=a(16),u=a(18),p=a(17),m=a(19),d=a(20),f=a(26),h=a.n(f),v=a(60),b=a(52),E=a.n(b),g=a(31),w=a.n(g),y=function(e){var t=null,n=Object(v.a)({dots:!0,infinite:!0,arrows:!1,speed:500,slidesToShow:1,slidesToScroll:1},e.settings);switch(e.type){case"featured":t=e.data.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("div",{className:w.a.featured_item},r.a.createElement("div",{className:w.a.featured_image,style:{background:"url(".concat(a(98)("./".concat(e.image)),")")}}),r.a.createElement(s.b,{to:"/news/".concat(e.id)},r.a.createElement("div",{className:w.a.featured_caption},e.title))))}));break;default:t=null}return r.a.createElement(E.a,n,t)},O=((new Date).getFullYear(),"http://localhost:3004/"),k=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={news:[]},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){var e=this;h.a.get("".concat(O,"news?_start=").concat(this.props.start,"&_end=").concat(this.props.amount)).then((function(t){e.setState({news:t.data})}))}},{key:"render",value:function(){return console.log(this.state.news),r.a.createElement(y,{data:this.state.news,type:this.props.type,settings:this.props.settings})}}]),t}(n.Component),N=a(39),j=a(121),_=a(122),x=a(32),C=a.n(x),L=a(55),I=a.n(L),M=function(e){var t=null;switch(e.type){case"loadmore":t=r.a.createElement("div",{className:I.a.blue_btn,onClick:e.loadMore},e.text);break;default:t=null}return t},S=a(25),B=a.n(S),A=a(33),D=a.n(A),R=function(e){return r.a.createElement("div",{className:D.a.cardInfo},r.a.createElement("span",{className:D.a.sourceName},function(e,t){var a=e.find((function(e){return e.id===t}));if(a)return a.newspaper}(e.sources,e.source)),r.a.createElement("span",{className:D.a.date},r.a.createElement(B.a,{name:"clock-o"}),e.date))},T=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(c)))).state={sources:[],items:[],start:a.props.start,amount:a.props.amount,end:a.props.start+a.props.amount},a.renderNews=function(e){var t=null;switch(e){case"card":t=a.state.items.map((function(e,t){return r.a.createElement(j.a,{classNames:{enter:C.a.newsList_wrapper,enterActive:C.a.newsList_wrapper_enter},timeout:500,key:t},r.a.createElement("div",null,r.a.createElement("div",{className:C.a.newsList_item},r.a.createElement(s.b,{to:"news/".concat(e.id)},r.a.createElement(R,{sources:a.state.sources,source:e.source,date:e.date}),r.a.createElement("h2",null,e.title)))))}));break;default:t=null}return t},a.request=function(e,t){a.state.sources.length<1&&h.a.get("".concat(O,"sources")).then((function(e){a.setState({sources:e.data})})),h.a.get("".concat(O,"news?_start=").concat(e,"&_end=").concat(t)).then((function(e){a.setState({items:[].concat(Object(N.a)(a.state.items),Object(N.a)(e.data))})}))},a.loadMore=function(){var e=a.state.end+a.state.amount;a.request(a.state.end,e)},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){this.request(this.state.start,this.state.end)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(_.a,{component:"div",className:"list"},this.renderNews(this.props.type)),r.a.createElement(M,{type:"loadmore",loadMore:function(){return e.loadMore()},text:"Load More News"}))}}]),t}(n.Component),q=function(){return r.a.createElement("div",null,r.a.createElement(k,{type:"featured",start:0,amount:4,settings:{dots:!1}}),r.a.createElement(T,{type:"card",loadmore:!0,start:0,amount:4}))},F=(a(107),a(27)),G=a.n(F),K=a(56),W=a.n(K),Z=a(34),H=a.n(Z),U=a(58),Y=a(57),z=a(59),P=[{type:H.a.option,icon:r.a.createElement(Y.a,null),text:"Home",link:"/"},{type:H.a.option,icon:r.a.createElement(U.a,null),text:"Converter",link:"/converter"},{type:H.a.option,icon:r.a.createElement(z.a,null),text:"News",link:"/news"}],X=function(){return r.a.createElement("div",null,P.map((function(e,t){return r.a.createElement("div",{key:t,className:e.type},r.a.createElement(s.b,{to:e.link},e.icon," ",e.text))})))},V=function(e){return r.a.createElement("div",null,r.a.createElement(W.a,{showNav:e.showNav,onHideNav:e.onHideNav,navStyle:{background:"#242424",maxWidth:"200px"}},r.a.createElement(X,null)))},J=function(e){return r.a.createElement("header",{className:G.a.header},r.a.createElement(V,e),r.a.createElement("div",{className:G.a.headerOpt},r.a.createElement("div",{className:G.a.bars},r.a.createElement(B.a,{onClick:e.onOpenNav,name:"bars",style:{color:"#dfdfdf",padding:"10px",cursor:"pointer"}})),r.a.createElement(s.b,{to:"/"},r.a.createElement("img",{className:G.a.logo,alt:"coin logo",src:a(108)})),r.a.createElement("h1",null,"CurrencyApp")))},Q=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={showNav:!1},a.toggleSidenav=function(e){a.setState({showNav:e})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(J,{showNav:this.state.showNav,onHideNav:function(){return e.toggleSidenav(!1)},onOpenNav:function(){return e.toggleSidenav(!0)}}),this.props.children)}}]),t}(n.Component),$=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(Q,null,r.a.createElement(d.c,null,r.a.createElement(d.a,{path:"/",component:q})))}}]),t}(n.Component),ee=a(38);ee.initializeApp({apiKey:"AIzaSyBMqEYqdKJlkZP-vRpFl6uDmeVu6CmbxQ8",authDomain:"currencyapp-3b267.firebaseapp.com",databaseURL:"https://currencyapp-3b267.firebaseio.com",projectId:"currencyapp-3b267",storageBucket:"currencyapp-3b267.appspot.com",messagingSenderId:"293056913614",appId:"1:293056913614:web:c894f8a584b04cbc01b09f",measurementId:"G-4CVXKV6ERE"});ee.database();o.a.render(r.a.createElement((function(){return r.a.createElement(s.a,null,r.a.createElement($,null))}),null),document.getElementById("root"))},27:function(e,t,a){e.exports={header:"sBbZeyL7BT2Qw49ZexMeC",headerOpt:"yvOInF0pCzmnjMZQ4hKI9",logo:"_1BkL2ixRIOBvAkp8LXshdR"}},31:function(e,t,a){e.exports={featured_item:"_1c6ZgRWGGRm4pUad5hBcTn",featured_image:"_1Bj39eCdP-C2bResocDLI3",featured_caption:"oYtDYtASk7C7wL2ukZfYg"}},32:function(e,t,a){e.exports={newsList_item:"OaM9GLNTnRCO4gdreKmOI",newsList_wrapper:"_3gLlLskgIIu7kfINqw3CBC",newsList_wrapper_enter:"_1uDv9FeBEk6LcTvUt9ghk7"}},33:function(e,t,a){e.exports={cardInfo:"_3GcfM-WapU_XcNcsGaAqn8",sourceName:"l9iOOFcO-l_hrKmGHP0LZ",date:"_3D6uugzioj1PivCmzdFhwm"}},34:function(e,t,a){e.exports={option:"_3m9MtqnTW7P2YkRD6WTX9k"}},55:function(e,t,a){e.exports={blue_btn:"Z99gKGe4WKiqFabTrVH5X"}},62:function(e,t,a){e.exports=a(119)},98:function(e,t,a){var n={"./1.jpg":99,"./2.jpeg":100,"./3.jpg":101,"./4.jpeg":102};function r(e){var t=c(e);return a(t)}function c(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=c,e.exports=r,r.id=98},99:function(e,t,a){e.exports=a.p+"static/media/1.5fa24029.jpg"}},[[62,1,2]]]);
//# sourceMappingURL=main.193b7f83.chunk.js.map