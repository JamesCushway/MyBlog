(function(e){function t(t){for(var s,o,r=t[0],l=t[1],u=t[2],p=0,m=[];p<r.length;p++)o=r[p],i[o]&&m.push(i[o][0]),i[o]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);c&&c(t);while(m.length)m.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],s=!0,r=1;r<n.length;r++){var l=n[r];0!==i[l]&&(s=!1)}s&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var s={},i={app:0},a=[];function o(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=s,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(n,s,function(t){return e[t]}.bind(null,s));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/my-blog/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var u=0;u<r.length;u++)t(r[u]);var c=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"11ab":function(e,t,n){e.exports=n.p+"img/menu.494e3add.png"},1272:function(e,t,n){"use strict";var s=n("d27f"),i=n.n(s);i.a},"19af":function(e,t,n){},2490:function(e,t,n){},2892:function(e,t,n){"use strict";var s=n("ce7a"),i=n.n(s);i.a},"339c":function(e,t,n){},"354a":function(e,t,n){},"3e25":function(e,t,n){},"43f7":function(e,t,n){"use strict";var s=n("6b61"),i=n.n(s);i.a},4913:function(e,t,n){"use strict";var s=n("354a"),i=n.n(s);i.a},"535c":function(e,t,n){e.exports=n.p+"img/me.d2d220a0.jpg"},"56d7":function(e,t,n){"use strict";n.r(t);n("a481"),n("cadf"),n("551c"),n("f751"),n("097d");var s=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Menu"),n("div",{staticClass:"main-content"},[n("router-view")],1)],1)},a=[],o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"navbar"},[s("div",{staticClass:"container"},[s("img",{staticClass:"menu-image",attrs:{src:n("11ab")},on:{click:e.toggleMenu}}),s("div",{staticClass:"menu"},e._l(e.pages,function(e){return s("menu-item",{key:e,attrs:{text:e}})}),1)])]),e.menuVisible?s("div",{staticClass:"mobile-menu",class:{"fade-out":!e.menuVisible}},[s("i",{staticClass:"close-menu fa fa-times",on:{click:e.toggleMenu}}),e._l(e.pages,function(e){return s("menu-item",{key:e,attrs:{text:e}})})],2):e._e()])},r=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("router-link",{attrs:{to:{name:e.text}}},[n("div",{staticClass:"menu-item"},[n("i",{class:"fa "+e.faMap[e.text]}),e._v("\n    "+e._s(e.text)+"\n  ")])])},u=[],c={name:"MenuItem",props:{text:String},data:function(){return{faMap:{Home:"fa-home",Blogs:"fa-book-open","About Me":"fa-user"}}}},p=c,m=(n("4913"),n("2877")),d=Object(m["a"])(p,l,u,!1,null,"3277c0cc",null),g=d.exports,h={name:"Menu",components:{MenuItem:g},data:function(){return{pages:["Home","Blogs","About Me"],menuVisible:!1}},methods:{toggleMenu:function(){this.menuVisible=!this.menuVisible}},watch:{$route:function(){this.menuVisible&&this.toggleMenu()}}},f=h,b=(n("5886"),Object(m["a"])(f,o,r,!1,null,"95f0431a",null)),y=b.exports,v={name:"app",components:{Menu:y}},k=v,w=(n("5c0b"),Object(m["a"])(k,i,a,!1,null,null,null)),I=w.exports,L=n("8c4f"),x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"blog-list"},e._l(e.blogs,function(e,t){return n("BlogListSnippet",{key:t,attrs:{blog:e,blogIndex:t}})}),1)])},_=[],j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"blog-snippet"},[n("router-link",{attrs:{to:{name:"Blog",params:{blog:e.blogIndex}}}},[n("div",{staticClass:"image-container"},[n("img",{attrs:{src:e.imagePath}})])]),n("div",{staticClass:"information"},[n("span",{staticClass:"blog-title"},[e._v("\n      "+e._s(e.blog.title)+"\n    ")]),n("hr"),n("p",{staticClass:"blog-description"},[e._v("\n      "+e._s(e.blog.description)+"\n    ")]),n("span",{staticClass:"blog-date"},[e._v(e._s(e.blog.date))])])],1)},M=[],C=(n("c5f6"),{name:"BlogListSnippet",props:{blog:Object,blogIndex:Number},data:function(){return{imagePath:""}},created:function(){this.imagePath=n("7584")("./".concat(this.blog.image))}}),A=C,O=(n("7a05"),Object(m["a"])(A,j,M,!1,null,"f5495df0",null)),P=O.exports,S=[{name:"a-test-blog",title:"A test blog",description:"A brief description about the blog.",date:"21st March 2019",image:"travel.jpg",paragraphs:["Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.","Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.","Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."]},{name:"a-test-blog",title:"A test blog",description:"A brief description about the blog.",date:"21st March 2019",image:"history.jpg",paragraphs:["Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.","Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.","Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."]},{name:"a-test-blog",title:"A test blog",description:"A brief description about the blog.",date:"21st March 2019",image:"tech.jpg",paragraphs:["Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.","Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.","Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."]},{name:"a-test-blog",title:"A test blog",description:"A brief description about the blog.",date:"21st March 2019",image:"blog.jpg",paragraphs:["Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.","Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.","Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."]}],B=S,$={name:"BlogList",components:{BlogListSnippet:P},data:function(){return{blogs:B}}},E=$,T=(n("9e18"),Object(m["a"])(E,x,_,!1,null,"f178e56e",null)),V=T.exports,H=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("h1",[e._v("Topics")]),n("div",{staticClass:"topic-grid"},e._l(e.images,function(t,s){return n("topic",{key:t,attrs:{image:t,description:e.descriptions[s]}})}),1)])},N=[],U=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"topic"},[n("img",{attrs:{src:e.imagePath}}),n("span",{staticClass:"topic-text"},[e._v(" "+e._s(e.name)+" ")]),n("p",[e._v(e._s(e.description))])])},D=[],J=(n("28a5"),{name:"Topic",props:{image:String,description:String},data:function(){var e=this.image.split(".")[0];return{imagePath:n("7584")("./".concat(this.image)),name:e.charAt(0).toUpperCase()+e.slice(1)}}}),F=J,q=(n("1272"),Object(m["a"])(F,U,D,!1,null,"da4b875c",null)),z=q.exports,G={name:"Topics",components:{Topic:z},data:function(){return{images:["travel.jpg","tech.jpg","history.jpg"],descriptions:["My personal travelling experiences from all over the world.","My experience with and opinions on new technologies.","History I have learnt about all of the countries and cities that I've visited"]}}},K=G,Q=(n("d9a1"),Object(m["a"])(K,H,N,!1,null,"acebdb6e",null)),R=Q.exports,W=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"homescreen-image"},[n("img",{attrs:{src:e.image}}),n("span",[e._v("The Life and Travels of a Spontaneous Adventurer.")])]),n("div",{staticClass:"homescreen-blogs"},[n("BlogList")],1)])},X=[],Y={name:"HomeScreen",components:{BlogList:V},data:function(){return{image:n("9bfa")}},created:function(){window.history.pushState({},"","/my-blog")}},Z=Y,ee=(n("81a8"),Object(m["a"])(Z,W,X,!1,null,"4a246aee",null)),te=ee.exports,ne=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"blog"},[n("div",{staticClass:"blog-header"},[n("div",{staticClass:"blog-title"},[e._v("\n      "+e._s(e.blog.title)+"\n    ")]),n("img",{staticClass:"full-width blog-image",attrs:{src:e.blog.image}})]),n("div",{staticClass:"blog-container"},e._l(e.blog.paragraphs,function(t,s){return n("div",{key:s,staticClass:"blog-paragraph"},[e._v("\n        "+e._s(t)+"\n      ")])}),0)])},se=[],ie=n("cebc"),ae={name:"Blog",data:function(){return{image:"",blog:{}}},created:function(){this.blog=Object(ie["a"])({},B[this.$route.params.blog]),this.blog.image=n("7584")("./".concat(this.blog.image))}},oe=ae,re=(n("43f7"),Object(m["a"])(oe,ne,se,!1,null,"3f46eb27",null)),le=re.exports,ue=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("img",{attrs:{src:e.image}}),n("p",[e._v("\n    "+e._s(e.aboutMe)+"\n  ")])])},ce=[],pe={name:"AboutMe",data:function(){return{image:n("89bc")}}},me=pe,de=(n("2892"),Object(m["a"])(me,ue,ce,!1,null,"fe7da28c",null)),ge=de.exports;s["a"].use(L["a"]);var he=new L["a"]({mode:"hash",base:"my-blog",routes:[{name:"Home",path:"/",component:te},{name:"Blogs",path:"/blogs",component:V},{name:"Blog",path:"/blogs/:blog",component:le},{name:"Topics",path:"/topics",component:R},{name:"Topic",path:"/topics/topic",component:V},{name:"About Me",path:"/about-me",component:ge}],scrollBehavior:function(e,t,n){return{x:0,y:0}}});s["a"].config.productionTip=!1,new s["a"]({render:function(e){return e(I)},router:he}).$mount("#app"),he.replace("/")},5886:function(e,t,n){"use strict";var s=n("b66a"),i=n.n(s);i.a},"5c0b":function(e,t,n){"use strict";var s=n("5e27"),i=n.n(s);i.a},"5e27":function(e,t,n){},"6b61":function(e,t,n){},7498:function(e,t,n){e.exports=n.p+"img/travel.47762769.jpg"},7584:function(e,t,n){var s={"./blog.jpg":"c04f","./history.jpg":"d874","./lake.jpg":"9bfa","./logo.png":"9d64","./me.jpg":"535c","./me.png":"89bc","./menu.png":"11ab","./tech.jpg":"b26b","./travel.jpg":"7498"};function i(e){var t=a(e);return n(t)}function a(e){var t=s[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}i.keys=function(){return Object.keys(s)},i.resolve=a,e.exports=i,i.id="7584"},"7a05":function(e,t,n){"use strict";var s=n("3e25"),i=n.n(s);i.a},"81a8":function(e,t,n){"use strict";var s=n("339c"),i=n.n(s);i.a},"89bc":function(e,t,n){e.exports=n.p+"img/me.77df5ac1.png"},"9bfa":function(e,t,n){e.exports=n.p+"img/lake.3aa941a6.jpg"},"9d64":function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"},"9e18":function(e,t,n){"use strict";var s=n("2490"),i=n.n(s);i.a},b26b:function(e,t,n){e.exports=n.p+"img/tech.5edb2f76.jpg"},b66a:function(e,t,n){},c04f:function(e,t,n){e.exports=n.p+"img/blog.62ab91ef.jpg"},ce7a:function(e,t,n){},d27f:function(e,t,n){},d874:function(e,t,n){e.exports=n.p+"img/history.d8383a5f.jpg"},d9a1:function(e,t,n){"use strict";var s=n("19af"),i=n.n(s);i.a}});
//# sourceMappingURL=app.c1922382.js.map