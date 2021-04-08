(function(t){function e(e){for(var i,s,o=e[0],u=e[1],l=e[2],d=0,m=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&m.push(n[s][0]),n[s]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(t[i]=u[i]);c&&c(e);while(m.length)m.shift()();return a.push.apply(a,l||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],i=!0,o=1;o<r.length;o++){var u=r[o];0!==n[u]&&(i=!1)}i&&(a.splice(e--,1),t=s(s.s=r[0]))}return t}var i={},n={app:0},a=[];function s(e){if(i[e])return i[e].exports;var r=i[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=t,s.c=i,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(r,i,function(e){return t[e]}.bind(null,i));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var c=u;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";r("85ec")},"33db":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var i=r("2b0e"),n=r("8c4f"),a=r("5f5b"),s=r("b1e0"),o=(r("f9e3"),r("2dd8"),r("260b")),u=(r("ea7b"),r("e71f"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("div",{staticClass:"container"},[r("Navbar",{attrs:{user:t.user},on:{signIn:t.signInWithGoogle,signOut:t.signOut}}),r("router-view")],1),r("Footer")],1)}),l=[],c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-navbar",{attrs:{toggleable:"lg",type:"light",variant:"light"}},[r("b-navbar-brand",{attrs:{href:"#"}},[r("b-avatar",{attrs:{square:"",variant:"light",src:t.logoUrl}}),t._v(" WishList ")],1),r("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),r("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[r("b-navbar-nav",[t.user?r("b-nav-item",{attrs:{href:t.myProfileLink}},[t._v("Моя страница")]):t._e()],1),r("b-navbar-nav",{staticClass:"ml-auto"},[t.user?r("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:t._u([{key:"button-content",fn:function(){return[r("b-avatar",{attrs:{variant:"light",src:t.user.photoURL}})]},proxy:!0}],null,!1,437563149)},[r("b-dropdown-item",{attrs:{disabled:"",href:"/user/"+t.user.uid}},[t._v(t._s(t.user.displayName||t.user.email))]),r("b-dropdown-item",{attrs:{href:"#"},on:{click:function(e){return t.$emit("signOut")}}},[r("b-icon",{attrs:{icon:"box-arrow-right"}}),t._v(" Выйти")],1)],1):t._e(),t.user?t._e():r("b-nav-item",{attrs:{right:""},on:{click:function(e){return t.$emit("signIn")}}},[r("b-icon",{attrs:{icon:"google"}}),t._v(" Войти")],1)],1)],1)],1)},d=[],m={name:"Navbar",props:{user:{type:Object,required:!0}},data:function(){return{logoUrl:r("cf05")}},computed:{myProfileLink:function(){return this.user&&this.user.uid?this.$router.resolve("/user/"+this.user.uid).href:this.$router.resolve("/").href}}},f=m,p=r("2877"),b=Object(p["a"])(f,c,d,!1,null,"0a8ef0b0",null),h=b.exports,v=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},g=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",{staticClass:"footer"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12"},[r("div",{staticClass:"footer-contents"},[r("span",[t._v("© 2021 Vladimir Shefer.")]),r("a",{attrs:{href:"https://github.com/vladimirshefer/wishlist",target:"_blank"}},[t._v(" GitHub ")]),r("a",{attrs:{href:" https://gitter.im/wishlist-app/community",target:"_blank"}},[t._v(" Gitter ")])])])])])])}],_={name:"Footer"},y=_,w=(r("731a"),Object(p["a"])(y,v,g,!1,null,"3352ba89",null)),k=w.exports,O={name:"App",components:{Footer:k,Navbar:h},data:function(){return{user:o["a"].auth().currentUser,form:{name:""},items:[]}},methods:{signInWithGoogle:function(){var t=new o["a"].auth.GoogleAuthProvider;o["a"].auth().signInWithPopup(t)},signOut:function(){o["a"].auth().signOut()}},mounted:function(){var t=this;o["a"].auth().onAuthStateChanged((function(e){return t.user=e}))}},C=O,j=(r("034f"),Object(p["a"])(C,u,l,!1,null,null,null)),x=j.exports,I=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12"},[r("b-jumbotron",{scopedSlots:t._u([{key:"header",fn:function(){return[t._v("Мой список желаний")]},proxy:!0},{key:"lead",fn:function(){return[t._v(" Здесь можно поделиться с друзьями идеями подарков для Вас. ")]},proxy:!0}])},[r("hr",{staticClass:"my-4"}),r("p",[t._v(" Список автоматически синхронизируется с облаком. ")]),t.user?r("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-add-item",modifiers:{"modal-add-item":!0}}],attrs:{variant:"primary",href:"#"}},[t._v("Добавить желание")]):r("b-button",{attrs:{variant:"primary",href:"#"}},[t._v("Войти")]),r("b-modal",{attrs:{id:"modal-add-item",title:"Добавить желание"}},[r("div",[t._v("Форма внизу страницы. // TODO")])])],1)],1)]),r("UserWishlist",{attrs:{editable:"","user-id":t.user?t.user.uid:null}}),t.user?r("div",{staticClass:"row"},[r("div",{staticClass:"col-12"},[r("AddForm",{on:{submit:function(e){return t.addWishlistItem(e)}}})],1)]):t._e()],1)},$=[],S=r("5530"),W=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},[0==t.items.length?r("div",{staticClass:"col-12"},[r("div",{staticClass:"card wishlist-item"},[r("div",{staticClass:"card-body"},[r("div",{staticClass:"wishlist-item-card"}),r("h3",{staticClass:"card-title"},[t._v(" Все желания уже выполнены? ")]),r("h5",[t._v("В этом списке ничего нет :)")]),t.editable?t._e():r("b-button",{staticClass:"mt-2",attrs:{variant:"primary",href:"/"}},[t._v("На главную")])],1)])]):t._e(),t._l(t.items,(function(e){return r("div",{key:e.name,staticClass:"col-12"},[r("WishlistItemCard",{attrs:{item:e,editable:t.editable},on:{remove:function(r){return t.removeWishlistItem(e.id)}}})],1)}))],2)},P=[],U=(r("d81d"),r("2591")),A=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card wishlist-item"},[r("div",{staticClass:"card-body"},[r("div",{staticClass:"wishlist-item-card"}),r("h5",{staticClass:"card-title"},[t._v(" "+t._s(t.item.name)+" "),t.editable?r("b-dropdown",{attrs:{variant:"light",size:"sm"}},[r("b-dropdown-item",{on:{click:t.tryRemove}},[t._v("Удалить")])],1):t._e()],1),r("p",[r("b",[t._v(t._s(t.item.cost)+" ₽.")])]),t.item.link?r("b-button",{staticClass:"card-button",attrs:{href:t.item.link,target:"_blank",size:"sm",variant:"primary"}},[t._v(" Открыть "),r("b-icon",{attrs:{icon:"box-arrow-up-right"}})],1):r("b-button",{staticClass:"card-button",attrs:{href:t.searchLink,target:"_blank",size:"sm",variant:"primary"}},[r("b-icon",{attrs:{icon:"google"}}),t._v(" Поиск ")],1)],1)])},q=[],E=(r("b0c0"),{name:"WishlistItemCard",props:{item:{type:Object,required:!0},editable:{type:Boolean,required:!1,default:!1}},methods:{tryRemove:function(){confirm("Удалить желание?")&&this.$emit("remove")}},computed:{searchLink:function(){return"https://www.google.com/search?q="+this.item.name}}}),L=E,F=(r("6581"),Object(p["a"])(L,A,q,!1,null,null,null)),N=F.exports,G={name:"UserWishlist",components:{WishlistItemCard:N},props:{userId:{type:String,required:!1},editable:{type:Boolean,required:!1,default:!1}},data:function(){return{items:[],unsubscribe:function(){}}},methods:{removeWishlistItem:function(t){this.editable&&U["a"].firestore().collection("wishlistItems").doc(t).delete()},init:function(t){var e=this;this.unsubscribe(),null!=t?this.unsubscribe=U["a"].firestore().collection("wishlistItems").where("uid","==",t).onSnapshot((function(t){e.items=t.docs.map((function(t){return Object(S["a"])(Object(S["a"])({},t.data()),{},{id:t.id})}))})):this.items=[]}},watch:{userId:function(t){this.init(t)}},mounted:function(){this.init(this.userId)}},R=G,T=Object(p["a"])(R,W,P,!1,null,"3fd0f69d",null),z=T.exports,D=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h3",[t._v("Добавить желание")]),t.show?r("b-form",{attrs:{id:"item-add-form"},on:{submit:t.onSubmit,reset:t.onReset}},[r("b-form-group",{attrs:{id:"input-group-name",label:"Что я хочу:","label-for":"input-name"}},[r("b-form-input",{attrs:{id:"input-name",placeholder:"Новая куртка",required:""},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),r("b-form-group",{attrs:{id:"input-group-cost",label:"Стоимость:","label-for":"input-cost",description:""}},[r("b-form-input",{attrs:{id:"input-cost",type:"number",min:"0",step:"0.01",placeholder:"10000.0",required:""},model:{value:t.form.cost,callback:function(e){t.$set(t.form,"cost",e)},expression:"form.cost"}})],1),r("b-form-group",{attrs:{id:"input-group-link",label:"Ссылка на товар:","label-for":"input-link"}},[r("b-form-input",{attrs:{id:"input-link",type:"url",placeholder:"https://..."},model:{value:t.form.link,callback:function(e){t.$set(t.form,"link",e)},expression:"form.link"}})],1),r("b-form-group",{attrs:{id:"input-group-private"}},[r("b-form-checkbox",{model:{value:t.form.private,callback:function(e){t.$set(t.form,"private",e)},expression:"form.private"}},[t._v("Приватный")])],1),r("b-button",{staticClass:"mr-1",attrs:{type:"submit",variant:"outline-primary"}},[t._v("Добавить")]),r("b-button",{staticClass:"mr-1",attrs:{type:"reset",variant:"outline-danger"}},[t._v("Сброс")])],1):t._e()],1)},M=[],B=(r("9911"),{name:"AddForm",data:function(){return{form:{name:"",cost:"",link:"",private:!1},show:!0}},methods:{onSubmit:function(t){t.preventDefault(),this.$emit("submit",this.form),console.log(JSON.stringify(this.form))},onReset:function(t){var e=this;t.preventDefault(),this.form.name="",this.form.cost="",this.form.link="",this.form.private=!1,this.show=!1,this.$nextTick((function(){e.show=!0}))}}}),H=B,J=Object(p["a"])(H,D,M,!1,null,"6644b1d1",null),V=J.exports,K={name:"Home",components:{AddForm:V,UserWishlist:z},data:function(){return{user:U["a"].auth().currentUser}},methods:{addWishlistItem:function(t){U["a"].firestore().collection("wishlistItems").add(Object(S["a"])(Object(S["a"])({},t),{},{uid:this.user.uid,createdAt:U["a"].firestore.FieldValue.serverTimestamp()}))}},mounted:function(){var t=this;U["a"].auth().onAuthStateChanged((function(e){return t.user=e}))}},Q=K,X=Object(p["a"])(Q,I,$,!1,null,"b36b6ede",null),Y=X.exports,Z=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",[r("UserWishlist",{attrs:{"user-id":t.$route.params.userId}})],1)])},tt=[],et={name:"User",components:{UserWishlist:z}},rt=et,it=Object(p["a"])(rt,Z,tt,!1,null,"af56f5ae",null),nt=it.exports;i["default"].use(n["a"]),i["default"].use(a["a"]),i["default"].use(s["a"]);var at={apiKey:"AIzaSyBLGiP1kAHt-gM6foaONlhD0Satwe38Vlk",authDomain:"receipt-project-88138.firebaseapp.com",databaseURL:"https://receipt-project-88138.firebaseio.com",projectId:"receipt-project-88138",storageBucket:"receipt-project-88138.appspot.com",messagingSenderId:"970273276542",appId:"1:970273276542:web:c3de5d19047ce2863b8e2f"};o["a"].initializeApp(at),i["default"].config.productionTip=!1;var st=[{path:"/",component:Y},{path:"/user/:userId",component:nt}],ot=new n["a"]({routes:st});new i["default"]({render:function(t){return t(x)},router:ot}).$mount("#app")},6581:function(t,e,r){"use strict";r("33db")},"731a":function(t,e,r){"use strict";r("9974")},"85ec":function(t,e,r){},9974:function(t,e,r){},cf05:function(t,e,r){t.exports=r.p+"img/logo.822882ee.png"}});
//# sourceMappingURL=app.2c38505e.js.map