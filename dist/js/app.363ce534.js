(function(e){function t(t){for(var a,o,r=t[0],c=t[1],l=t[2],p=0,m=[];p<r.length;p++)o=r[p],i[o]&&m.push(i[o][0]),i[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(m.length)m.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,r=1;r<n.length;r++){var c=n[r];0!==i[c]&&(a=!1)}a&&(s.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},i={app:0},s=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/my-blog/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var l=0;l<r.length;l++)t(r[l]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"11ab":function(e,t,n){e.exports=n.p+"img/menu.494e3add.png"},1272:function(e,t,n){"use strict";var a=n("d27f"),i=n.n(a);i.a},"19af":function(e,t,n){},"1c2b":function(e,t,n){},2892:function(e,t,n){"use strict";var a=n("ce7a"),i=n.n(a);i.a},"354a":function(e,t,n){},4913:function(e,t,n){"use strict";var a=n("354a"),i=n.n(a);i.a},"535c":function(e,t,n){e.exports=n.p+"img/me.d2d220a0.jpg"},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Menu"),n("div",{staticClass:"main-content"},[n("router-view")],1)],1)},s=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"navbar"},[a("div",{staticClass:"container"},[a("img",{staticClass:"menu-image",attrs:{src:n("11ab")},on:{click:e.toggleMenu}}),a("div",{staticClass:"menu"},e._l(e.pages,function(e){return a("menu-item",{key:e,attrs:{text:e}})}),1)])]),e.menuVisible?a("div",{staticClass:"mobile-menu",class:{"fade-out":!e.menuVisible}},[a("i",{staticClass:"close-menu fa fa-times",on:{click:e.toggleMenu}}),e._l(e.pages,function(e){return a("menu-item",{key:e,attrs:{text:e}})})],2):e._e()])},r=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("router-link",{attrs:{to:{name:e.text}}},[n("div",{staticClass:"menu-item"},[n("i",{class:"fa "+e.faMap[e.text]}),e._v("\n    "+e._s(e.text)+"\n  ")])])},l=[],u={name:"MenuItem",props:{text:String},data:function(){return{faMap:{Home:"fa-home",Blogs:"fa-book-open","About Me":"fa-user"}}}},p=u,m=(n("4913"),n("2877")),g=Object(m["a"])(p,c,l,!1,null,"3277c0cc",null),f=g.exports,d={name:"Menu",components:{MenuItem:f},data:function(){return{pages:["Home","Blogs","About Me"],menuVisible:!1}},methods:{toggleMenu:function(){this.menuVisible=!this.menuVisible}},watch:{$route:function(){this.menuVisible&&this.toggleMenu()}}},b=d,h=(n("5886"),Object(m["a"])(b,o,r,!1,null,"95f0431a",null)),v=h.exports,y={name:"app",components:{Menu:v}},_=y,x=(n("5c0b"),Object(m["a"])(_,i,s,!1,null,null,null)),k=x.exports,w=n("8c4f"),j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"blog-list"},e._l(e.blogNames,function(e,t){return n("BlogListSnippet",{key:t,attrs:{blogName:e}})}),1)])},C=[],M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"blog-snippet"},[n("router-link",{attrs:{to:{name:"Blog",params:{blog:e.blog.name}}}},[n("div",{staticClass:"image-container"},[n("img",{attrs:{src:e.imagePath}})])]),n("div",{staticClass:"information"},[n("span",{staticClass:"blog-title"},[e._v("\n      "+e._s(e.blog.title)+"\n    ")]),n("hr"),n("p",{staticClass:"blog-description"},[e._v("\n      "+e._s(e.blog.description)+"\n    ")]),n("span",{staticClass:"blog-date"},[e._v(e._s(e.blog.date))])])],1)},O=[],L={name:"BlogListSnippet",props:{blogName:String},data:function(){return{blog:{},imagePath:""}},created:function(){this.blog=n("c540")("./".concat(this.blogName)).default,this.imagePath=n("7584")("./".concat(this.blog.image))}},I=L,E=(n("ff18"),Object(m["a"])(I,M,O,!1,null,"dc6e684a",null)),P=E.exports,S={name:"BlogList",components:{BlogListSnippet:P},data:function(){return{blogNames:["test-blog"]}}},B=S,T=(n("7c6d"),Object(m["a"])(B,j,C,!1,null,"07615d50",null)),$=T.exports,A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("h1",[e._v("Topics")]),n("div",{staticClass:"topic-grid"},e._l(e.images,function(t,a){return n("topic",{key:t,attrs:{image:t,description:e.descriptions[a]}})}),1)])},N=[],V=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"topic"},[n("img",{attrs:{src:e.imagePath}}),n("span",{staticClass:"topic-text"},[e._v(" "+e._s(e.name)+" ")]),n("p",[e._v(e._s(e.description))])])},H=[],U=(n("28a5"),{name:"Topic",props:{image:String,description:String},data:function(){var e=this.image.split(".")[0];return{imagePath:n("7584")("./".concat(this.image)),name:e.charAt(0).toUpperCase()+e.slice(1)}}}),D=U,F=(n("1272"),Object(m["a"])(D,V,H,!1,null,"da4b875c",null)),J=F.exports,q={name:"Topics",components:{Topic:J},data:function(){return{images:["travel.jpg","tech.jpg","history.jpg"],descriptions:["My personal travelling experiences from all over the world.","My experience with and opinions on new technologies.","History I have learnt about all of the countries and cities that I've visited"]}}},z=q,G=(n("d9a1"),Object(m["a"])(z,A,N,!1,null,"acebdb6e",null)),K=G.exports,Q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"homescreen-image"},[n("img",{attrs:{src:e.image}}),n("span",[e._v("The Life and Travels of a Spontaneous Adventurer.")])]),n("div",{staticClass:"homescreen-blogs"},[n("BlogList")],1)])},R=[],W={name:"HomeScreen",components:{BlogList:$},data:function(){return{image:n("9bfa")}}},X=W,Y=(n("d253"),Object(m["a"])(X,Q,R,!1,null,"2c17b0e6",null)),Z=Y.exports,ee=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"blog"},[n("div",{staticClass:"blog-header"},[n("div",{staticClass:"blog-title"},[e._v("\n      "+e._s(e.blog.title)+"\n    ")]),n("img",{staticClass:"full-width blog-image",attrs:{src:e.blog.image}})]),n("div",{staticClass:"blog-container"},e._l(e.blog.paragraphs,function(t,a){return n("div",{key:a,staticClass:"blog-paragraph"},[e._v("\n        "+e._s(t)+"\n      ")])}),0)])},te=[],ne=n("a2b1"),ae={name:"Blog",data:function(){return{image:n("7498"),blog:{}}},created:function(){this.blog=ne["default"],this.blog.image=n("c04f")}},ie=ae,se=(n("d4ed"),Object(m["a"])(ie,ee,te,!1,null,"1292f909",null)),oe=se.exports,re=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("img",{attrs:{src:e.image}}),n("p",[e._v("\n    "+e._s(e.aboutMe)+"\n  ")])])},ce=[],le={name:"AboutMe",data:function(){return{image:n("89bc")}}},ue=le,pe=(n("2892"),Object(m["a"])(ue,re,ce,!1,null,"fe7da28c",null)),me=pe.exports;a["a"].use(w["a"]);var ge=new w["a"]({mode:"hash",base:"/my-blog/",routes:[{name:"Home",path:"/",component:Z},{name:"Blogs",path:"/blogs",component:$},{name:"Blog",path:"/blogs/:blog",component:oe},{name:"Topics",path:"/topics",component:K},{name:"Topic",path:"/topics/topic",component:$},{name:"About Me",path:"/about-me",component:me}],scrollBehavior:function(){return{x:0,y:0}}});a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(k)},router:ge}).$mount("#app")},"57ac":function(e,t,n){},5886:function(e,t,n){"use strict";var a=n("b66a"),i=n.n(a);i.a},"5c0b":function(e,t,n){"use strict";var a=n("5e27"),i=n.n(a);i.a},"5e27":function(e,t,n){},7498:function(e,t,n){e.exports=n.p+"img/travel.47762769.jpg"},7584:function(e,t,n){var a={"./blog.jpg":"c04f","./history.jpg":"d874","./lake.jpg":"9bfa","./logo.png":"9d64","./me.jpg":"535c","./me.png":"89bc","./menu.png":"11ab","./tech.jpg":"b26b","./travel.jpg":"7498"};function i(e){var t=s(e);return n(t)}function s(e){var t=a[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}i.keys=function(){return Object.keys(a)},i.resolve=s,e.exports=i,i.id="7584"},"7c6d":function(e,t,n){"use strict";var a=n("1c2b"),i=n.n(a);i.a},"89bc":function(e,t,n){e.exports=n.p+"img/me.77df5ac1.png"},"9bfa":function(e,t,n){e.exports=n.p+"img/lake.3aa941a6.jpg"},"9d64":function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"},a2b1:function(e,t,n){"use strict";n.r(t);var a={name:"a-test-blog",title:"A test blog",description:"A brief description about the blog.",date:"21st March 2019",image:"travel.jpg",paragraphs:["Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.","Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.","Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."]};t["default"]=a},b26b:function(e,t,n){e.exports=n.p+"img/tech.5edb2f76.jpg"},b66a:function(e,t,n){},c04f:function(e,t,n){e.exports=n.p+"img/blog.62ab91ef.jpg"},c540:function(e,t,n){var a={"./test-blog":"a2b1","./test-blog.js":"a2b1"};function i(e){var t=s(e);return n(t)}function s(e){var t=a[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}i.keys=function(){return Object.keys(a)},i.resolve=s,e.exports=i,i.id="c540"},ce7a:function(e,t,n){},d253:function(e,t,n){"use strict";var a=n("dee3"),i=n.n(a);i.a},d27f:function(e,t,n){},d4ed:function(e,t,n){"use strict";var a=n("57ac"),i=n.n(a);i.a},d874:function(e,t,n){e.exports=n.p+"img/history.d8383a5f.jpg"},d9a1:function(e,t,n){"use strict";var a=n("19af"),i=n.n(a);i.a},dee3:function(e,t,n){},f633:function(e,t,n){},ff18:function(e,t,n){"use strict";var a=n("f633"),i=n.n(a);i.a}});
//# sourceMappingURL=app.363ce534.js.map