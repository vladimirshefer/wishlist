(function(e){function t(t){for(var n,a,o=t[0],u=t[1],c=t[2],d=0,m=[];d<o.length;d++)a=o[d],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&m.push(i[a][0]),i[a]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);l&&l(t);while(m.length)m.shift()();return s.push.apply(s,c||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,o=1;o<r.length;o++){var u=r[o];0!==i[u]&&(n=!1)}n&&(s.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},i={app:0},s=[];function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var l=u;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("cd49")},"034f":function(e,t,r){"use strict";r("85ec")},"21c3":function(e,t,r){},"2e31":function(e,t,r){"use strict";r.r(t);var n=r("2b0e");n["default"].config.productionTip=!1},3014:function(e,t,r){e.exports=r.p+"img/made-in-russia.213df3ed.svg"},"3f9b":function(e,t,r){"use strict";r("a978")},4667:function(e,t,r){},"703b":function(e,t,r){"use strict";r("21c3")},"70b9":function(e,t,r){"use strict";r.r(t);var n=r("5a0c"),i=r.n(n);r("276b"),i.a.locale("ru")},"85ec":function(e,t,r){},"8e53":function(e,t,r){},"9b19":function(e,t,r){e.exports=r.p+"img/logo.93193bb9.svg"},a978:function(e,t,r){},c417:function(e,t,r){"use strict";r.r(t);var n=r("2b0e"),i=r("5f5b"),s=r("b1e0");r("f9e3"),r("2dd8");n["default"].use(i["a"]),n["default"].use(s["a"])},c4fa:function(e,t,r){"use strict";r("8e53")},cd49:function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{staticClass:"container"},[r("Navbar",{on:{signIn:e.signInWithGoogle,signOut:e.signOut}}),r("router-view")],1),r("Footer")],1)},s=[],a=r("260b"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-navbar",{style:{background:"#ffffff"},attrs:{toggleable:"lg",type:"light",variant:"custom",sticky:""}},[r("router-link",{attrs:{to:"/",custom:""},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.href;return[r("b-navbar-brand",{attrs:{href:n}},[r("b-avatar",{attrs:{square:"",variant:"transparent",src:e.logoUrl,size:"1.5em"}}),e._v(" WishList ")],1)]}}])}),r("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),r("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[r("b-navbar-nav",[e.user?r("router-link",{attrs:{to:"/user/"+e.user.uid,custom:""},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.href;return[r("b-nav-item",{attrs:{href:n}},[r("b-icon",{attrs:{icon:"house-door"}}),r("span",{staticClass:"ml-1"},[e._v("Мои желания")])],1)]}}],null,!1,205004600)}):e._e(),e.user?r("router-link",{attrs:{to:"/fav/",custom:""},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.href;return[r("b-nav-item",{attrs:{href:n}},[r("b-icon",{attrs:{icon:"star"}}),r("span",{staticClass:"ml-1"},[e._v("Избранное")])],1)]}}],null,!1,1465522478)}):e._e()],1),r("b-navbar-nav",{staticClass:"ml-auto"},[e.user?r("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:e._u([{key:"button-content",fn:function(){return[e._v(" "+e._s(e.profile.displayName||e.user.displayName||e.user.email)+" "),r("b-avatar",{staticClass:"ml-1",attrs:{variant:"light",src:e.profile.photoURL||e.user.photoURL}})]},proxy:!0}],null,!1,2308727954)},[r("b-dropdown-item",{attrs:{disabled:"",href:"#"}}),r("router-link",{attrs:{to:"/profile/",custom:""},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.href;return[r("b-dropdown-item",{attrs:{href:n}},[r("b-icon",{attrs:{icon:"person"}}),e._v(" Профиль ")],1)]}}],null,!1,1614293282)}),r("b-dropdown-item",{attrs:{href:"#"},on:{click:function(t){return e.$emit("signOut")}}},[r("b-icon",{attrs:{icon:"box-arrow-right"}}),e._v(" Выйти ")],1)],1):e._e(),e.user?e._e():r("b-nav-item",{attrs:{right:""},on:{click:function(t){return e.$emit("signIn")}}},[r("b-icon",{attrs:{icon:"google"}}),e._v(" Войти")],1)],1)],1)],1)},u=[],c={name:"Navbar",data:function(){return{logoUrl:r("9b19")}},computed:{user:function(){return this.$store.state.user},profile:function(){return this.$store.state.profile||{}}}},l=c,d=r("2877"),m=Object(d["a"])(l,o,u,!1,null,"1edc25d2",null),f=m.exports,p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("footer",{staticClass:"footer"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12"},[r("div",{staticClass:"footer-contents d-flex"},[r("span",[e._v("© 2021 Vladimir Shefer.")]),r("a",{attrs:{href:"https://github.com/vladimirshefer/wishlist",target:"_blank"}},[e._v(" GitHub ")]),r("a",{attrs:{href:" https://gitter.im/wishlist-app/community",target:"_blank"}},[e._v(" Gitter ")]),r("img",{staticClass:"ml-auto",attrs:{src:e.madeIn,width:"70",height:"30",alt:"Made in Russia"}})])])])])])},b=[],h={name:"Footer",data:function(){return{madeIn:r("3014")}}},v=h,g=(r("3f9b"),Object(d["a"])(v,p,b,!1,null,"7f3b4c46",null)),y=g.exports,w=r("1da1"),_=(r("96cf"),r("2591"));function x(e){return _["a"].firestore().collection(e)}r("e219");var C={wishlistItems:x("wishlistItems"),userProfiles:x("userProfiles"),subscriptions:x("subscriptions")},k={saveProfile:function(e){C.userProfiles.doc(_["a"].auth().currentUser.uid).set(e,{merge:!0}).catch((function(e){console.error("Could not create or update profile",JSON.stringify(e),e)}))},initUserProfile:function(){var e=this;return Object(w["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r=_["a"].auth().currentUser,r){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,e.getUserProfileOrNull(r.uid);case 5:if(t.t0=t.sent,t.t0){t.next=8;break}t.t0={};case 8:return n=t.t0,t.next=11,C.userProfiles.doc(r.uid).set({displayName:n.displayName||r.displayName,photoURL:n.photoURL||r.photoURL},{merge:!0});case 11:case"end":return t.stop()}}),t)})))()},getUserProfileOrNull:function(e){return Object(w["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,C.userProfiles.doc(e).get();case 3:if(t.t0=t.sent.data(),t.t0){t.next=6;break}t.t0=null;case 6:return t.abrupt("return",t.t0);case 9:return t.prev=9,t.t1=t["catch"](0),t.abrupt("return",null);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()}},O=n["default"].extend({name:"App",components:{Footer:y,Navbar:f},data:function(){return{form:{name:""},items:[]}},computed:{user:function(){return this.$store.state.user}},methods:{signInWithGoogle:function(){var e=new a["a"].auth.GoogleAuthProvider;a["a"].auth().signInWithPopup(e)},signOut:function(){a["a"].auth().signOut()}},beforeMount:function(){var e=this;this.$store.commit("updateFirebaseAuth",a["a"].auth().currentUser),a["a"].auth().onAuthStateChanged((function(t){e.$store.commit("updateFirebaseAuth",t),k.initUserProfile().then((function(){e.$store.dispatch("reloadUserProfile")}))}))}}),P=O,j=(r("034f"),Object(d["a"])(P,i,s,!1,null,null,null)),I=j.exports,R=r("8c4f"),S=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12"},[r("b-jumbotron",{scopedSlots:e._u([{key:"header",fn:function(){return[e._v("Мой список желаний")]},proxy:!0},{key:"lead",fn:function(){return[e._v(" Здесь можно поделиться с друзьями идеями подарков для Вас. ")]},proxy:!0}])},[r("hr",{staticClass:"my-4"}),r("p",[e._v(" Список автоматически синхронизируется с облаком. ")]),e.user?r("router-link",{attrs:{to:"/user/"+e.user.uid,custom:""},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.href;return[r("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-add-item",modifiers:{"modal-add-item":!0}}],attrs:{variant:"primary",href:n}},[e._v("Открыть мой список")])]}}])}):r("b-button",{attrs:{variant:"primary",href:"#"},on:{click:e.signInWithGoogle}},[e._v("Войти")])],1)],1)]),e._m(0),r("Feed",{attrs:{"max-size":10}})],1)},$=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"row"},[r("div",{staticClass:"col-12"},[r("h3",[e._v("Желания других пользователей:")])])])}],N=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"row"},e._l(e.items,(function(e){return r("FeedItem",{key:e.stored.name+e.stored.uid,attrs:{item:e}})})),1)},E=[],U=r("5530"),M=(r("a9e3"),r("d81d"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"col-xs-12 col-md-6 col-lg-4"},[r("div",{staticClass:"p-3 mb-2",staticStyle:{"background-color":"#f3f3f4","border-radius":"3px"}},[r("div",{staticClass:"d-flex align-items-baseline mb-2"},[r("router-link",{attrs:{to:"/user/"+e.item.stored.uid,custom:""},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.href;return[r("a",{staticClass:"mr-2",attrs:{href:n}},[e.profile?[e.profile.photoURL?r("b-avatar",{staticClass:"mr-1",attrs:{src:e.profile.photoURL,size:"sm"}}):e._e(),e._v(" "+e._s(e.profile.displayName||"Anonymous")+" ")]:[r("b-avatar",{staticClass:"mr-1",attrs:{size:"sm",text:"?"}}),e._v(" "+e._s("Anonymous")+" ")]],2)]}}])}),r("small",{staticClass:"text-muted"},[e._v(e._s(e.createdAtStr))])],1),r("div",{staticClass:"feed-item__title crop",style:{background:e.backgroundColor}},[r("h5",{staticClass:"text-center",class:e.textSizeClass},[e._v(" "+e._s(e.item.stored.name)+" ")])]),r("div",[r("p",{staticStyle:{"white-space":"pre-line"}},[e._v(e._s(e.item.stored.description))])]),r("div",[r("b",{directives:[{name:"show",rawName:"v-show",value:!e.item.stored.isMoneyCollectingEnabled||!e.item.stored.moneyCollected,expression:"!item.stored.isMoneyCollectingEnabled || !item.stored.moneyCollected"}]},[e._v(e._s(e.item.stored.cost)+" ₽")])]),r("b-progress",{directives:[{name:"show",rawName:"v-show",value:e.item.stored.isMoneyCollectingEnabled,expression:"item.stored.isMoneyCollectingEnabled"}],staticClass:"w-100 mt-2 mb-3",attrs:{title:e.moneyCollectedProgressString,max:"100",height:"15px"}},[r("b-progress-bar",{attrs:{value:e.moneyCollectedPercent,variant:e.isMoneyCollectingCompleted?"danger":"primary"}},[r("span",[r("strong",[e._v(" "+e._s(e.moneyCollectedProgressString)+" ")])])])],1),r("div",{staticClass:"mb-2"},e._l(e.item.stored.tags,(function(e){return r("TagBadge",{key:e,attrs:{tag:e}})})),1),e.item.stored.link?r("b-button",{staticClass:"card-button mr-2",attrs:{href:e.item.stored.link,target:"_blank",size:"sm",variant:"primary"}},[e._v(" Перейти в магазин "),r("b-icon",{attrs:{icon:"box-arrow-up-right"}})],1):e._e(),e.user?[e.isMyItem||e.isAdded?r("b-button",{staticClass:"card-button mr-2",attrs:{target:"_blank",size:"sm",variant:"success",disabled:""}},[r("b-icon",{attrs:{icon:"folder-check"}}),e._v(" "+e._s("Добавлено!")+" ")],1):r("b-button",{staticClass:"card-button mr-2",attrs:{target:"_blank",size:"sm",variant:"success"},on:{click:function(t){return e.addToMyList(e.item)}}},[r("b-icon",{attrs:{icon:"folder-plus"}}),e._v(" "+e._s("Тоже хочу!")+" ")],1)]:e._e()],2)])}),A=[],z=(r("b0c0"),r("99af"),r("b680"),{edit:function(e,t){var r=this;return Object(w["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,C.wishlistItems.doc(e).update(r.utils.normalize(t));case 2:case"end":return n.stop()}}),n)})))()},create:function(e){var t=this;return Object(w["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,C.wishlistItems.add(Object(U["a"])(Object(U["a"])({},t.utils.normalize(e)),{},{uid:_["a"].auth().currentUser.uid,createdAt:_["a"].firestore.FieldValue.serverTimestamp()}));case 2:case"end":return r.stop()}}),r)})))()},utils:{normalize:function(e){return delete e.id,"undefined"===typeof e.private?e.private=!1:"string"===typeof e.private&&("false"===e.private?e.private=!1:"true"===e.private?e.private=!0:e.private=!!e.private),e}}}),F=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-badge",{staticClass:"tag-badge mr-2",style:{cursor:e.clickable?"pointer":"default"},attrs:{pill:"",variant:e.color},on:{click:function(t){return e.$emit("click")}}},[e._v(" "+e._s(e.tag)+" "),r("b-icon",{attrs:{icon:"tag-fill"}})],1)},T=[],q=(r("13d5"),r("a630"),r("3ca3"),{hashcode:function(e){return Array.from(e).map((function(e){return e.charCodeAt(0)})).reduce((function(e,t){return e+2*t}))}}),W={name:"TagBadge",props:{tag:{type:String,required:!0},clickable:{type:Boolean,required:!1,default:!1}},data:function(){return{colors:["primary","secondary","success","danger","warning","info","dark"]}},computed:{hashcode:function(){return q.hashcode(this.tag)},color:function(){return this.colors[this.hashcode%this.colors.length]}}},L=W,B=(r("e0d5"),Object(d["a"])(L,F,T,!1,null,"65662c90",null)),D=B.exports,G=r("d4ec"),H=r("bee2"),J=r("5a0c"),V=r.n(J),Y=function(){function e(){Object(G["a"])(this,e)}return Object(H["a"])(e,[{key:"displayStringOf",value:function(e){var t=V()();return e.year()!==t.year()?e.format("DD.MM.YYYY, hh:mm"):e.date()!==t.date()?e.format("DD MMM, hh:mm"):e.format("hh:mm")}}]),e}(),K=new Y,X=K,Z={name:"FeedItem",components:{TagBadge:D},props:{item:{type:Object,required:!0}},data:function(){return{profile:null,isAdded:!1}},computed:{user:function(){return this.$store.state.user},isMyItem:function(){return this.item.stored.uid===this.user.uid},backgroundColor:function(){var e=q.hashcode(this.item.stored.name)+13,t=["rgb(51, 102, 153), rgb(51, 170, 136)","rgb(51, 102, 153), rgb(136, 51, 170)","rgb(102, 51, 153), rgb(51, 136, 170)","rgb(102, 153, 51), rgb(51, 136, 170)","rgb(153, 51, 102), rgb(51, 136, 170)","rgb(153, 51, 102), rgb(170, 136, 51)","rgb(153, 102, 51), rgb(136, 51, 170)"],r=t[e%t.length],n=e%360;return"linear-gradient(".concat(n,"deg, ").concat(r,")")},createdAtStr:function(){return X.displayStringOf(this.item.createdAt)},textSizeClass:function(){return this.item.stored.name.length>50?"":"banner-text"},moneyCollectedPercent:function(){return(this.item.stored.moneyCollected||0)/this.item.stored.cost*100||0},moneyCollectedProgressString:function(){return(this.item.stored.moneyCollected||0)+" / "+this.item.stored.cost+" p. ("+this.moneyCollectedPercent.toFixed(2)+"%)"},isMoneyCollectingCompleted:function(){return this.item.stored.moneyCollected>=this.item.stored.cost}},methods:{addToMyList:function(e){this.isAdded||(z.create(e.stored),this.isAdded=!0)}},beforeMount:function(){var e=this;return Object(w["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,k.getUserProfileOrNull(e.item.stored.uid);case 2:e.profile=t.sent;case 3:case"end":return t.stop()}}),t)})))()}},Q=Z,ee=(r("c4fa"),Object(d["a"])(Q,M,A,!1,null,"774ef276",null)),te=ee.exports,re={name:"Feed",components:{FeedItem:te},props:{maxSize:{type:Number,required:!1}},data:function(){return{items:[]}},methods:{init:function(){var e=this,t=C.wishlistItems.where("private","==",!1);this.maxSize>0&&(t=t.limit(this.maxSize)),t.orderBy("createdAt","desc"),t.get().then((function(t){e.items=t.docs.map((function(e){var t=e.data();return{stored:Object(U["a"])({},t),id:e.id,createdAt:t.createdAt?V()(new Date(1e3*t.createdAt.seconds)):null}})).sort((function(e,t){return t.createdAt.unix()-e.createdAt.unix()}))}))}},beforeMount:function(){this.init()}},ne=re,ie=Object(d["a"])(ne,N,E,!1,null,"732570bb",null),se=ie.exports,ae={name:"Home",components:{Feed:se},computed:{user:function(){return this.$store.state.user}},methods:{signInWithGoogle:function(){var e=new _["a"].auth.GoogleAuthProvider;_["a"].auth().signInWithPopup(e)}}},oe=ae,ue=Object(d["a"])(oe,S,$,!1,null,"0d202ddd",null),ce=ue.exports,le=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12"},[r("UserProfileHeader",{attrs:{"user-id":e.userId}})],1)]),r("div",{staticClass:"row"},[r("div",{staticClass:"col-12"},[r("UserWishlist",{attrs:{editable:e.isMyPage,"user-id":e.userId}})],1)]),e.isMyPage?r("div",{staticClass:"row"},[r("div",{staticClass:"col-12"},[r("h4",{staticClass:"mt-3"},[e._v("Добавить желание:")]),r("ItemEditForm",{attrs:{item:{}},on:{submit:function(t){return e.addWishlistItem(t)}}})],1)]):e._e()])},de=[],me=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"row"},[0===e.items.length&&e.dataReady?r("div",{staticClass:"col-12"},[r("div",{staticClass:"card wishlist-item"},[r("div",{staticClass:"card-body"},[r("div",{staticClass:"wishlist-item-card"}),r("h3",{staticClass:"card-title"},[e._v(" Все желания уже выполнены? ")]),r("h5",[e._v("В этом списке ничего нет :)")]),e.editable?e._e():r("b-button",{staticClass:"mt-2",attrs:{variant:"primary",href:"/"}},[e._v("На главную")])],1)])]):e._e(),e.dataReady?e._e():r("div",{staticClass:"col-12"},[r("b-overlay",{attrs:{variant:"transparent",show:!e.dataReady,rounded:"sm"}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-8",staticStyle:{"min-height":"50px"}})])])],1),e._l(e.items,(function(t){return r("div",{key:t.name,staticClass:"col-12"},[r("ItemCardWrapper",{attrs:{item:t,editable:e.editable},on:{remove:function(r){return e.removeWishlistItem(t.id)},update:function(t){return e.editItem(t)}}})],1)}))],2)},fe=[],pe=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"my-1"},[r("ItemCard",{directives:[{name:"show",rawName:"v-show",value:!e.isEditing,expression:"!isEditing"}],attrs:{item:e.item,editable:e.editable},on:{remove:function(t){return e.$emit("remove",t)},edit:function(t){e.isEditing=!0}}}),e.isEditing?r("ItemEditForm",{attrs:{item:e.item},on:{submit:function(t){e.$emit("update",t),e.isEditing=!1},cancel:function(t){e.isEditing=!1}}}):e._e()],1)},be=[],he=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"card"},[r("div",{staticClass:"card-body"},[r("b-form",{on:{submit:function(t){return e.submit(t)},reset:e.cancel}},[r("b-form-group",{attrs:{id:"input-group-name",label:"Что я хочу:","label-for":"input-name"}},[r("b-form-input",{attrs:{id:"input-name",placeholder:"Новая куртка",required:"",maxlength:"80"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),r("b-form-group",{attrs:{id:"input-group-description",label:"Комментарий","label-for":"input-description"}},[r("b-form-textarea",{attrs:{id:"input-description",type:"string",size:"sm",placeholder:"Мне это нужно для...",rows:"3","max-rows":"8",maxlength:"160"},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}}),e._e()],1),r("b-form-group",{attrs:{id:"input-group-cost",label:"Стоимость:","label-for":"input-cost",description:""}},[r("b-form-input",{attrs:{id:"input-cost",type:"number",min:"0",step:"0.01",placeholder:"10000.0",required:""},model:{value:e.form.cost,callback:function(t){e.$set(e.form,"cost",t)},expression:"form.cost"}})],1),r("b-form-checkbox",{attrs:{id:"checkbox-1",name:"checkbox-1"},model:{value:e.form.isMoneyCollectingEnabled,callback:function(t){e.$set(e.form,"isMoneyCollectingEnabled",t)},expression:"form.isMoneyCollectingEnabled"}},[e._v(" Показывать мои накопления ")]),r("b-form-group",{directives:[{name:"show",rawName:"v-show",value:e.form.isMoneyCollectingEnabled,expression:"form.isMoneyCollectingEnabled"}],attrs:{id:"input-group-money-collected",label:"Сколько денег накоплено:","label-for":"input-money-collected"}},[r("b-form-input",{attrs:{id:"input-money-сollected",type:"number",min:"0",step:"0.01",placeholder:"10000.0",required:""},model:{value:e.form.moneyCollected,callback:function(t){e.$set(e.form,"moneyCollected",t)},expression:"form.moneyCollected"}})],1),r("b-form-group",{attrs:{id:"input-group-link",label:"Ссылка на товар:","label-for":"input-link"}},[r("b-form-input",{attrs:{id:"input-link",type:"url",placeholder:"https://...",maxlength:"200"},model:{value:e.form.link,callback:function(t){e.$set(e.form,"link",t)},expression:"form.link"}})],1),r("b-form-group",{attrs:{id:"input-group-tags",label:"Теги:","label-for":"input-tags"}},[r("div",{staticClass:"mb-2"},e._l(e.form.tags,(function(t){return r("TagBadge",{key:t,attrs:{tag:t,clickable:""},on:{click:function(r){return e.removeTag(t)}}})})),1),r("b-input-group",[r("b-form-input",{attrs:{placeholder:"Одежда"},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addTag(t)}},model:{value:e.tag,callback:function(t){e.tag=t},expression:"tag"}}),r("b-button",{attrs:{variant:"outline-primary"},on:{click:e.addTag}},[e._v("Добавить")])],1)],1),r("b-button",{staticClass:"mr-1",attrs:{type:"submit",size:"sm",variant:"primary"}},[e._v("Сохранить")]),r("b-button",{staticClass:"mr-1",attrs:{type:"reset",size:"sm",variant:"danger"}},[e._v("Отмена")])],1)],1)])},ve=[],ge=(r("caad"),r("2532"),r("4de4"),{name:"ItemEditForm",components:{TagBadge:D},props:{item:{type:Object,required:!0}},data:function(){return{form:{name:"",cost:0,moneyCollected:0,isMoneyCollectingEnabled:!1,link:"",tags:[],description:""},tag:""}},methods:{reset:function(){this.form=JSON.parse(JSON.stringify(this.item))},submit:function(e){e.preventDefault(),e.stopPropagation(),this.$emit("submit",this.getResultingObject()),this.reset()},cancel:function(){this.$emit("cancel"),this.reset()},getResultingObject:function(){return Object.assign({},this.item,this.form)},addTag:function(e){e.preventDefault(),this.form.tags||(this.form.tags=[]),this.tag&&!this.form.tags.includes(this.tag)&&this.form.tags.push(this.tag),this.tag=""},removeTag:function(e){this.form.tags=this.form.tags.filter((function(t){return t!==e}))}},created:function(){this.reset()}}),ye=ge,we=Object(d["a"])(ye,he,ve,!1,null,null,null),_e=we.exports,xe=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"card"},[r("div",{staticClass:"card-body"},[r("div",{staticClass:"wishlist-item-card"},[r("div",{staticClass:"container-title",staticStyle:{display:"flex","align-items":"flex-start"}},[r("h5",{staticClass:"card-title",staticStyle:{"white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"}},[e._v(" "+e._s(e.item.name)+" ")]),r("div",{staticClass:"dropdown-b-dropdown"},[e.editable?r("b-dropdown",{attrs:{variant:"light",size:"sm"}},[r("b-dropdown-item",{on:{click:function(t){return e.$emit("edit")}}},[e._v("Изменить")]),r("b-dropdown-item",{on:{click:e.tryRemove}},[e._v("Удалить")])],1):e._e()],1)]),r("div",[r("p",{staticStyle:{"white-space":"pre-line"}},[e._v(e._s(e.item.description))])]),r("p",[r("b",{directives:[{name:"show",rawName:"v-show",value:!e.item.isMoneyCollectingEnabled||!e.item.moneyCollected,expression:"!item.isMoneyCollectingEnabled || !item.moneyCollected"}]},[e._v(e._s(e.item.cost)+" ₽")])]),r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 col-lg-6"},[r("b-progress",{directives:[{name:"show",rawName:"v-show",value:e.item.isMoneyCollectingEnabled,expression:"item.isMoneyCollectingEnabled"}],staticClass:"mt-2 mb-3",attrs:{title:e.moneyCollectedProgressString,max:"100",height:"15px"}},[r("b-progress-bar",{attrs:{value:e.moneyCollectedPercent,variant:e.isMoneyCollectingCompleted?"danger":"primary"}},[r("span",[r("strong",[e._v(" "+e._s(e.moneyCollectedProgressString)+" ")])])])],1)],1)]),r("div",{staticClass:"mb-2"},e._l(e.item.tags,(function(e){return r("TagBadge",{key:e,attrs:{tag:e}})})),1),e.item.link?r("b-button",{attrs:{href:e.item.link,target:"_blank",size:"sm",variant:"primary"}},[e._v(" Открыть "),r("b-icon",{attrs:{icon:"box-arrow-up-right"}})],1):r("b-button",{attrs:{href:e.searchLink,target:"_blank",size:"sm",variant:"primary"}},[r("b-icon",{attrs:{icon:"google"}}),e._v(" Поиск ")],1)],1)])])},Ce=[],ke={name:"ItemCard",components:{TagBadge:D},props:{item:{type:Object,required:!0},editable:{type:Boolean,required:!1,default:!1}},methods:{tryRemove:function(){confirm("Удалить желание?")&&this.$emit("remove")}},computed:{searchLink:function(){return"https://www.google.com/search?q="+this.item.name},moneyCollectedPercent:function(){return(this.item.moneyCollected||0)/this.item.cost*100||0},moneyCollectedProgressString:function(){return(this.item.moneyCollected||0)+" / "+this.item.cost+" p. ("+this.moneyCollectedPercent.toFixed(2)+"%)"},isMoneyCollectingCompleted:function(){return this.item.moneyCollected>=this.item.cost}}},Oe=ke,Pe=Object(d["a"])(Oe,xe,Ce,!1,null,null,null),je=Pe.exports,Ie={name:"ItemCardWrapper",components:{ItemCard:je,ItemEditForm:_e},props:{item:{type:Object,required:!0},editable:{type:Boolean,required:!1,default:!1}},data:function(){return{isEditing:!1}}},Re=Ie,Se=Object(d["a"])(Re,pe,be,!1,null,"16e56db4",null),$e=Se.exports,Ne={name:"UserWishlist",components:{ItemCardWrapper:$e},props:{userId:{type:String,required:!1},editable:{type:Boolean,required:!1,default:!1}},data:function(){return{items:[],dataReady:!1,unsubscribe:function(){}}},methods:{removeWishlistItem:function(e){this.editable&&C.wishlistItems.doc(e).delete()},editItem:function(e){z.edit(e.id,e)},init:function(e){var t=this;if(this.unsubscribe(),null!=e){var r=C.wishlistItems.where("uid","==",e);this.editable||(r=r.where("private","==",!1)),this.unsubscribe=r.onSnapshot((function(e){t.items=e.docs.map((function(e){return Object(U["a"])(Object(U["a"])({},e.data()),{},{id:e.id})})),t.dataReady=!0}))}else this.items=[],this.dataReady=!0}},watch:{userId:function(e){this.init(e)},editable:function(){this.init(this.userId)}},beforeMount:function(){this.init(this.userId)}},Ee=Ne,Ue=Object(d["a"])(Ee,me,fe,!1,null,"f2e57ef0",null),Me=Ue.exports,Ae=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.profile?r("div",{staticClass:"p-3 d-flex"},[r("div",{staticClass:"mr-4"},[e.profile.photoURL?r("b-avatar",{attrs:{square:"",size:"lg",variant:"light",src:e.profile.photoURL}}):e._e()],1),r("div",[r("div",{staticClass:"d-flex"},[r("h1",{staticClass:"d-inline mr-1 align-baseline",staticStyle:{"font-size":"2rem","font-weight":"bold"}},[r("router-link",{attrs:{to:"/user/"+e.userId,custom:""},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.href;return[r("a",{attrs:{href:n}},[e._v(" "+e._s(e.profile.displayName)+" ")]),r("a",{directives:[{name:"show",rawName:"v-show",value:null!==e.subscribed&&e.user&&e.user.uid!==e.userId,expression:"subscribed !== null && user && user.uid !== userId"}],attrs:{title:e.subscribed?"Удалить из избранного":"Добавить в избранное"},on:{click:e.toggleSubscription}},[r("b-icon",{attrs:{scale:"0.6",icon:e.subscribed?"star-fill":"star"}})],1)]}}],null,!1,3333932950)})],1)]),r("p",[e._v(" "+e._s(e.profile.about)+" ")])])]):e._e()},ze=[],Fe={subscribe:function(e,t){return Object(w["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,C.subscriptions.doc("".concat(e,"_").concat(t)).set({subscriber:e,subject:t},{merge:!0});case 3:r.next=8;break;case 5:r.prev=5,r.t0=r["catch"](0),console.error("Could not subscribe ".concat(e," on ").concat(t),JSON.stringify(r.t0),r.t0);case 8:case"end":return r.stop()}}),r,null,[[0,5]])})))()},unsubscribe:function(e,t){return Object(w["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,C.subscriptions.doc("".concat(e,"_").concat(t)).delete();case 3:r.next=8;break;case 5:r.prev=5,r.t0=r["catch"](0),console.error("Could not unsubscribe ".concat(e," from ").concat(t),JSON.stringify(r.t0),r.t0);case 8:case"end":return r.stop()}}),r,null,[[0,5]])})))()},getSubscriptionOrNull:function(e,t){return Object(w["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(e!==t){r.next=2;break}return r.abrupt("return",null);case 2:return r.prev=2,n="".concat(e,"_").concat(t),r.next=6,C.subscriptions.doc(n).get();case 6:if(r.t0=r.sent.data(),r.t0){r.next=9;break}r.t0=null;case 9:return r.abrupt("return",r.t0);case 12:return r.prev=12,r.t1=r["catch"](2),console.error(r.t1),r.abrupt("return",null);case 16:case"end":return r.stop()}}),r,null,[[2,12]])})))()},getSubscriptions:function(e){return Object(w["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e){t.next=2;break}return t.abrupt("return",[]);case 2:return t.next=4,C.subscriptions.where("subscriber","==",e).get();case 4:return r=t.sent,t.abrupt("return",r.docs.map((function(e){return e.data()})));case 6:case"end":return t.stop()}}),t)})))()}},Te={name:"UserProfileHeader",props:{userId:{}},data:function(){return{profile:null,subscribed:!1}},computed:{user:function(){return this.$store.state.user}},methods:{reloadUserProfile:function(e){var t=this;return Object(w["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,k.getUserProfileOrNull(e);case 2:if(r.t0=r.sent,r.t0){r.next=5;break}r.t0={};case 5:if(t.profile=r.t0,!t.isMyPage&&t.user){r.next=10;break}t.subscribed=null,r.next=13;break;case 10:return r.next=12,Fe.getSubscriptionOrNull(t.user.uid,e);case 12:t.subscribed=!!r.sent;case 13:case"end":return r.stop()}}),r)})))()},toggleSubscription:function(){var e=this;return Object(w["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.user){t.next=2;break}return t.abrupt("return");case 2:if(r=e.subscribed,e.subscribed=null,!1!==r){t.next=9;break}return t.next=7,Fe.subscribe(e.user.uid,e.userId);case 7:t.next=11;break;case 9:return t.next=11,Fe.unsubscribe(e.user.uid,e.userId);case 11:return t.next=13,e.reloadUserProfile(e.userId);case 13:case"end":return t.stop()}}),t)})))()}},watch:{userId:function(e){var t=this;return Object(w["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.reloadUserProfile(e);case 2:case"end":return r.stop()}}),r)})))()},user:function(){var e=this;return Object(w["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.reloadUserProfile(e.userId);case 2:case"end":return t.stop()}}),t)})))()}},mounted:function(){var e=this;return Object(w["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.reloadUserProfile(e.userId);case 2:case"end":return t.stop()}}),t)})))()}},qe=Te,We=(r("703b"),Object(d["a"])(qe,Ae,ze,!1,null,"1ce90cba",null)),Le=We.exports,Be={name:"User",components:{UserProfileHeader:Le,ItemEditForm:_e,UserWishlist:Me},computed:{user:function(){return this.$store.state.user},userId:function(){return this.$route.params.userId},isMyPage:function(){return this.user&&this.user.uid===this.userId}},methods:{addWishlistItem:function(e){return Object(w["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,z.create(e);case 2:case"end":return t.stop()}}),t)})))()}},watch:{userId:function(e){var t=this;return Object(w["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.reloadUserProfile(e);case 2:case"end":return r.stop()}}),r)})))()},user:function(){var e=this;return Object(w["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.reloadUserProfile(e.userId);case 2:case"end":return t.stop()}}),t)})))()}}},De=Be,Ge=Object(d["a"])(De,le,de,!1,null,"65e7434e",null),He=Ge.exports,Je=function(){var e=this,t=e.$createElement,r=e._self._c||t;return this.user?r("div",{staticClass:"row"},[r("div",{staticClass:"col-12"},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-body"},[r("b-form",{on:{submit:function(t){return e.submit(t)},reset:function(t){return e.reset(t)}}},[r("b-form-group",{attrs:{id:"input-group-display-name",label:"Отображаемое имя","label-for":"input-display-name"}},[r("b-form-input",{attrs:{id:"input-display-name",required:""},model:{value:e.displayName,callback:function(t){e.displayName=t},expression:"displayName"}})],1),r("b-form-group",{attrs:{id:"input-group-about",label:"О себе:","label-for":"input-about"}},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.about,expression:"about"}],staticClass:"form-control",attrs:{id:"input-about",rows:"3"},domProps:{value:e.about},on:{input:function(t){t.target.composing||(e.about=t.target.value)}}})]),r("b-button",{staticClass:"mr-1",attrs:{type:"submit",size:"sm",variant:"primary"}},[e._v("Сохранить")]),r("b-button",{staticClass:"mr-1",attrs:{type:"reset",size:"sm",variant:"danger"}},[e._v("Сбросить")])],1)],1)])])]):e._e()},Ve=[],Ye={name:"Profile",data:function(){return{form:{displayName:null,label:null,about:null}}},computed:{user:function(){return this.$store.state.user},profile:function(){return this.$store.state.profile},storedProfile:function(){return{displayName:(this.profile?this.profile.displayName:null)||(this.user?this.user.displayName:null),about:this.profile?this.profile.about:null}},displayName:{get:function(){return this.form.displayName||this.storedProfile.displayName||""},set:function(e){this.form.displayName=e}},about:{get:function(){return null!=this.form.about?this.form.about:this.profile?this.storedProfile.about:""},set:function(e){this.storedProfile.about!==e?this.form.about=e:this.form.about=null}}},methods:{submit:function(e){e.preventDefault(),e.stopPropagation(),k.saveProfile({displayName:this.displayName,about:this.about}),this.$store.dispatch("reloadUserProfile")},reset:function(e){e.preventDefault(),e.stopPropagation(),this.form=Object(U["a"])({},this.storedProfile)}}},Ke=Ye,Xe=Object(d["a"])(Ke,Je,Ve,!1,null,"1a1ae7dc",null),Ze=Xe.exports,Qe=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"row"},e._l(e.users,(function(e){return r("div",{key:e.subject,staticClass:"col-12"},[r("UserProfileHeader",{attrs:{"user-id":e.subject}})],1)})),0)},et=[],tt={name:"Favorites",components:{UserProfileHeader:Le},data:function(){return{users:[]}},computed:{user:function(){return this.$store.state.user}},methods:{init:function(){var e=this;return Object(w["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Fe.getSubscriptions(null===(r=e.user)||void 0===r?void 0:r.uid);case 2:e.users=t.sent;case 3:case"end":return t.stop()}}),t)})))()}},watch:{user:function(){var e=this;return Object(w["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.init();case 2:case"end":return t.stop()}}),t)})))()}},beforeMount:function(){var e=this;return Object(w["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.init();case 2:case"end":return t.stop()}}),t)})))()}},rt=tt,nt=Object(d["a"])(rt,Qe,et,!1,null,"babc42c0",null),it=nt.exports;n["default"].use(R["a"]);var st=[{path:"/",component:ce},{path:"/user/:userId",component:He},{path:"/profile",component:Ze},{path:"/fav",component:it}],at=new R["a"]({routes:st}),ot=at,ut=r("2f62");n["default"].use(ut["a"]);var ct=new ut["a"].Store({state:{user:null,profile:null},mutations:{updateFirebaseAuth:function(e,t){e.user=t,t||(this.state.profile=null)},setUserProfile:function(e,t){e.profile=t}},actions:{reloadUserProfile:function(e){return Object(w["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.state.user){t.next=6;break}return t.next=3,k.getUserProfileOrNull(e.state.user.uid);case 3:r=t.sent,t.next=7;break;case 6:r=null;case 7:e.commit("setUserProfile",r);case 8:case"end":return t.stop()}}),t)})))()}}}),lt=ct;r("c417"),r("e219"),r("2e31"),r("70b9"),new n["default"]({render:function(e){return e(I)},router:ot,store:lt}).$mount("#app")},e0d5:function(e,t,r){"use strict";r("4667")},e219:function(e,t,r){"use strict";r.r(t);var n=r("2591"),i=(r("ea7b"),r("e71f"),{apiKey:"AIzaSyACtgZ3RVsV4asdNWLtlbTtbrb-BocsXjk",authDomain:"wishlist-for-friends.firebaseapp.com",projectId:"wishlist-for-friends",storageBucket:"wishlist-for-friends.appspot.com",messagingSenderId:"491027786294",appId:"1:491027786294:web:ed36804351917d5052c697"});n["a"].initializeApp(i)}});
//# sourceMappingURL=app.db18665c.js.map