webpackJsonp([5],{124:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var r=n(55),o=n(19),a=n(28),l=this&&this.__assign||Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t},u=function(t){var e;if(t instanceof r.g){var n=t.json()||"",o=n.error||JSON.stringify(n);e=t.status+" - "+(t.statusText||"")+" "+o}else e=t.message?t.message:t.toString();return console.error(e),e},i=function(){function t(){}return t.prototype.handlePromiseError=function(t){return Promise.reject(u(t))},t.prototype.handleObservableError=function(t){return o.Observable.throw(u(t))},t.prototype.mapListKeys=function(t){return t.snapshotChanges().pipe(Object(a.map)(function(t){return t.map(function(t){return l({key:t.key},Object.assign(t.payload.val()))})}))},t.prototype.mapObjectKey=function(t){return t.snapshotChanges().pipe(Object(a.map)(function(t){return l({$key:t.key},Object.assign(t.payload.val()))}))},t}()},136:function(t,e,n){"use strict";n.d(e,"a",function(){return u});var r=n(0),o=n(197),a=this&&this.__decorate||function(t,e,n,r){var o,a=arguments.length,l=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,r);else for(var u=t.length-1;u>=0;u--)(o=t[u])&&(l=(a<3?o(l):a>3?o(e,n,l):o(e,n))||l);return a>3&&l&&Object.defineProperty(e,n,l),l},l=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},u=function(){function t(){this.isMenu=!1}return a([Object(r.z)(),l("design:type",o.a)],t.prototype,"user",void 0),a([Object(r.z)(),l("design:type",Boolean)],t.prototype,"isMenu",void 0),t=a([Object(r.k)({selector:"user-info",templateUrl:"user-info.component.html"}),l("design:paramtypes",[])],t)}()},197:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r=function(){return function(t,e,n,r,o){this.name=t,this.username=e,this.email=n,this.photo=r,this.uid=o}}()},198:function(t,e,n){"use strict";n.d(e,"a",function(){return f});var r=n(0),o=n(244),a=n(71),l=n(53),u=n(197),i=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),c=this&&this.__decorate||function(t,e,n,r){var o,a=arguments.length,l=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,r);else for(var u=t.length-1;u>=0;u--)(o=t[u])&&(l=(a<3?o(l):a>3?o(e,n,l):o(e,n))||l);return a>3&&l&&Object.defineProperty(e,n,l),l},s=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},f=function(t){function e(e,n,r,o){var a=t.call(this,e,n,r,o)||this;return a.alertCtrl=e,a.authService=n,a.app=r,a.menuCtrl=o,a}return i(e,t),e.prototype.onProfile=function(){this.navCtrl.push("UserProfilePage")},c([Object(r.z)("user"),s("design:type",u.a)],e.prototype,"currentUser",void 0),e=c([Object(r.k)({selector:"user-menu",templateUrl:"user-menu.component.html"}),s("design:paramtypes",[a.a,l.a,a.b,a.i])],e)}(o.a)},202:function(t,e,n){"use strict";n.d(e,"a",function(){return f});var r=n(0),o=n(305),a=n(71),l=n(321),u=n(136),i=n(198),c=n(322),s=this&&this.__decorate||function(t,e,n,r){var o,a=arguments.length,l=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,r);else for(var u=t.length-1;u>=0;u--)(o=t[u])&&(l=(a<3?o(l):a>3?o(e,n,l):o(e,n))||l);return a>3&&l&&Object.defineProperty(e,n,l),l},f=function(){function t(){}return t=s([Object(r.D)({declarations:[o.a,l.a,u.a,i.a,c.a],imports:[a.f],exports:[o.a,l.a,u.a,i.a,c.a]})],t)}()},206:function(t,e,n){"use strict";n.d(e,"a",function(){return p});var r=n(88),o=n(95),a=n(55),l=n(0),u=n(124),i=n(28),c=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),s=this&&this.__decorate||function(t,e,n,r){var o,a=arguments.length,l=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,r);else for(var u=t.length-1;u>=0;u--)(o=t[u])&&(l=(a<3?o(l):a>3?o(e,n,l):o(e,n))||l);return a>3&&l&&Object.defineProperty(e,n,l),l},f=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},p=function(t){function e(e,n,r){var o=t.call(this)||this;return o.db=e,o.af=n,o.http=r,o.setChats(),o}return c(e,t),e.prototype.setChats=function(){var t=this;this.af.authState.subscribe(function(e){e&&(t.chats=t.db.list("/chats/"+e.uid,function(t){return t.orderByChild("timestamp")}).valueChanges().pipe(Object(i.map)(function(t){return t.reverse()}),Object(i.catchError)(t.handleObservableError)))})},e.prototype.create=function(t,e,n){return this.db.object("/chats/"+e+"/"+n).set(t).catch(this.handlePromiseError)},e.prototype.getDeepChat=function(t,e){return this.db.object("/chats/"+t+"/"+e)},e.prototype.updatePhoto=function(t,e,n){return e!==n?t.update({photo:n}).then(function(){return!0}).catch(this.handlePromiseError):Promise.resolve(!1)},e=s([Object(l.w)(),f("design:paramtypes",[o.a,r.a,a.e])],e)}(u.a)},211:function(t,e,n){"use strict";n.d(e,"a",function(){return s});var r=n(95),o=n(55),a=n(0),l=n(124),u=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),i=this&&this.__decorate||function(t,e,n,r){var o,a=arguments.length,l=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,r);else for(var u=t.length-1;u>=0;u--)(o=t[u])&&(l=(a<3?o(l):a>3?o(e,n,l):o(e,n))||l);return a>3&&l&&Object.defineProperty(e,n,l),l},c=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},s=function(t){function e(e,n){var r=t.call(this)||this;return r.db=e,r.http=n,r}return u(e,t),e.prototype.create=function(t,e){return Promise.resolve(e.push(t))},e.prototype.getMessages=function(t,e){return this.db.list("/messages/"+t+"-"+e,function(t){return t.limitToLast(30).orderByChild("timestamp")})},e=i([Object(a.w)(),c("design:paramtypes",[r.a,o.e])],e)}(l.a)},243:function(t,e){function n(t){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+t+"'.")})}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=243},244:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r=function(){function t(t,e,n,r){this.alertCtrl=t,this.authService=e,this.app=n,this.menuCtrl=r}return t.prototype.ngOnInit=function(){this.navCtrl=this.app.getActiveNavs()[0]},t.prototype.onLogout=function(){var t=this;this.alertCtrl.create({message:"Deseja sair?",buttons:[{text:"Sim",handler:function(){t.authService.logout().then(function(){t.navCtrl.setRoot("SigninPage"),t.menuCtrl.enable(!1,"user-menu")})}},{text:"Não"}]}).present()},t}()},273:function(t,e,n){function r(t){var e=o[t];return e?n.e(e[1]).then(function(){return n(e[0])}):Promise.reject(new Error("Cannot find module '"+t+"'."))}var o={"../pages/chat/chat.module.ngfactory":[406,0],"../pages/home/home.module.ngfactory":[405,1],"../pages/signin/signin.module.ngfactory":[407,4],"../pages/signup/signup.module.ngfactory":[409,3],"../pages/user-profile/user-profile.module.ngfactory":[408,2]};r.keys=function(){return Object.keys(o)},r.id=273,t.exports=r},305:function(t,e,n){"use strict";n.d(e,"a",function(){return f});var r=n(0),o=n(244),a=n(71),l=n(53),u=n(197),i=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),c=this&&this.__decorate||function(t,e,n,r){var o,a=arguments.length,l=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,r);else for(var u=t.length-1;u>=0;u--)(o=t[u])&&(l=(a<3?o(l):a>3?o(e,n,l):o(e,n))||l);return a>3&&l&&Object.defineProperty(e,n,l),l},s=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},f=function(t){function e(e,n,r,o){var a=t.call(this,e,n,r,o)||this;return a.alertCtrl=e,a.authService=n,a.app=r,a.menuCtrl=o,a}return i(e,t),c([Object(r.z)(),s("design:type",String)],e.prototype,"title",void 0),c([Object(r.z)(),s("design:type",u.a)],e.prototype,"user",void 0),e=c([Object(r.k)({selector:"custom-logged-header",templateUrl:"custom-logged-header.component.html"}),s("design:paramtypes",[a.a,l.a,a.b,a.i])],e)}(o.a)},321:function(t,e,n){"use strict";n.d(e,"a",function(){return u});var r=n(323),o=n(0),a=this&&this.__decorate||function(t,e,n,r){var o,a=arguments.length,l=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,r);else for(var u=t.length-1;u>=0;u--)(o=t[u])&&(l=(a<3?o(l):a>3?o(e,n,l):o(e,n))||l);return a>3&&l&&Object.defineProperty(e,n,l),l},l=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},u=function(){function t(){}return a([Object(o.z)(),l("design:type",r.a)],t.prototype,"message",void 0),a([Object(o.z)(),l("design:type",Boolean)],t.prototype,"isFromSender",void 0),t=a([Object(o.k)({selector:"message-box",templateUrl:"message-box.component.html",host:{"[style.justify-content]":'((!isFromSender) ? "flex-start" : "flex-end")',"[style.text-align]":'((!isFromSender) ? "left" : "right" )'}}),l("design:paramtypes",[])],t)}()},322:function(t,e,n){"use strict";n.d(e,"a",function(){return l});var r=n(0),o=this&&this.__decorate||function(t,e,n,r){var o,a=arguments.length,l=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,r);else for(var u=t.length-1;u>=0;u--)(o=t[u])&&(l=(a<3?o(l):a>3?o(e,n,l):o(e,n))||l);return a>3&&l&&Object.defineProperty(e,n,l),l},a=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},l=function(){function t(){}return o([Object(r.z)(),a("design:type",Number)],t.prototype,"progress",void 0),t=o([Object(r.k)({selector:"progress-bar",templateUrl:"progress-bar.component.html"}),a("design:paramtypes",[])],t)}()},323:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r=function(){return function(t,e,n){this.userId=t,this.text=e,this.timestamp=n}}()},324:function(t,e,n){"use strict";function r(t){return a._40(0,[(t()(),a._17(0,0,null,null,15,"div",[],null,null,null,null,null)),(t()(),a._38(-1,null,["\n  "])),(t()(),a._17(2,0,null,null,6,"ion-avatar",[],null,null,null,null,null)),a._16(3,278528,null,0,l.i,[a.A,a.B,a.p,a.O],{ngClass:[0,"ngClass"]},null),a._32(4,{"custom-background":0}),a._16(5,16384,null,0,u.a,[],null,null),(t()(),a._38(-1,null,["\n    "])),(t()(),a._17(7,0,null,null,0,"img",[["class","round"]],[[8,"src",4]],null,null,null,null)),(t()(),a._38(-1,null,["\n  "])),(t()(),a._38(-1,null,["\n  "])),(t()(),a._17(10,0,null,null,1,"h2",[["text-center",""]],null,null,null,null,null)),(t()(),a._38(11,null,[" "," "])),(t()(),a._38(-1,null,["\n  "])),(t()(),a._17(13,0,null,null,1,"p",[["text-center",""]],null,null,null,null,null)),(t()(),a._38(14,null,["@"," "])),(t()(),a._38(-1,null,["\n"]))],function(t,e){t(e,3,0,t(e,4,0,e.component.isMenu))},function(t,e){var n=e.component;t(e,7,0,n.user.photo||"assets/imgs/no-photo.jpg");t(e,11,0,n.user.name);t(e,14,0,n.user.username)})}function o(t){return a._40(0,[(t()(),a._12(16777216,null,null,1,null,r)),a._16(1,16384,null,0,l.k,[a._0,a.V],{ngIf:[0,"ngIf"]},null),(t()(),a._38(-1,null,["\n"]))],function(t,e){t(e,1,0,e.component.user)},null)}n.d(e,"a",function(){return c}),e.b=o;var a=n(0),l=n(17),u=n(133),i=n(136),c=a._15({encapsulation:2,styles:[],data:{}});a._13("user-info",i.a,function(t){return a._40(0,[(t()(),a._17(0,0,null,null,1,"user-info",[],null,null,null,o,c)),a._16(1,49152,null,0,i.a,[],null,null)],null,null)},{user:"user",isMenu:"isMenu"},{},[])},325:function(t,e,n){"use strict";function r(t){return l._40(0,[(t()(),l._17(0,0,null,null,34,"ion-content",[],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,J.b,J.a)),l._16(1,4374528,null,0,K.a,[G.a,I.a,L.a,l.p,l.N,W.a,B.a,l.G,[2,T.a],[2,V.a]],null,null),(t()(),l._38(-1,1,["\n\n  "])),(t()(),l._17(3,0,null,1,2,"user-info",[],null,null,null,Z.b,Z.a)),l._16(4,49152,null,0,$.a,[],{user:[0,"user"],isMenu:[1,"isMenu"]},null),(t()(),l._38(-1,null,[" "])),(t()(),l._38(-1,1,["\n\n  "])),(t()(),l._17(7,0,null,1,26,"ion-list",[["no-lines",""]],null,null,null,null,null)),l._16(8,16384,null,0,Q.a,[G.a,l.p,l.N,I.a,q.l,L.a],null,null),(t()(),l._38(-1,null,["\n\n    "])),(t()(),l._17(10,0,null,null,10,"button",[["class","item item-block"],["detail-none",""],["icon-right",""],["ion-item",""],["menuClose","user-menu"]],null,[[null,"click"]],function(t,e,n){var r=!0,o=t.component;if("click"===e){r=!1!==l._29(t,16).close()&&r}if("click"===e){r=!1!==o.onProfile()&&r}return r},X.b,X.a)),l._16(11,1097728,null,3,Y.a,[tt.a,G.a,l.p,l.N,[2,et.a]],null,null),l._36(335544320,1,{contentLabel:0}),l._36(603979776,2,{_buttons:1}),l._36(603979776,3,{_icons:1}),l._16(15,16384,null,0,nt.a,[],null,null),l._16(16,16384,null,0,rt.a,[z.a],{menuClose:[0,"menuClose"]},null),(t()(),l._38(-1,2,["\n      Perfil\n      "])),(t()(),l._17(18,0,null,4,1,"ion-icon",[["item-end",""],["name","person"],["role","img"]],[[2,"hide",null]],null,null,null,null)),l._16(19,147456,[[3,4]],0,ot.a,[G.a,l.p,l.N],{name:[0,"name"]},null),(t()(),l._38(-1,2,["\n    "])),(t()(),l._38(-1,null,["\n\n    "])),(t()(),l._17(22,0,null,null,10,"button",[["class","item item-block"],["detail-none",""],["icon-right",""],["ion-item",""],["menuClose","user-menu"]],null,[[null,"click"]],function(t,e,n){var r=!0,o=t.component;if("click"===e){r=!1!==l._29(t,28).close()&&r}if("click"===e){r=!1!==o.onLogout()&&r}return r},X.b,X.a)),l._16(23,1097728,null,3,Y.a,[tt.a,G.a,l.p,l.N,[2,et.a]],null,null),l._36(335544320,4,{contentLabel:0}),l._36(603979776,5,{_buttons:1}),l._36(603979776,6,{_icons:1}),l._16(27,16384,null,0,nt.a,[],null,null),l._16(28,16384,null,0,rt.a,[z.a],{menuClose:[0,"menuClose"]},null),(t()(),l._38(-1,2,["\n      Sair\n      "])),(t()(),l._17(30,0,null,4,1,"ion-icon",[["item-end",""],["name","log-out"],["role","img"]],[[2,"hide",null]],null,null,null,null)),l._16(31,147456,[[6,4]],0,ot.a,[G.a,l.p,l.N],{name:[0,"name"]},null),(t()(),l._38(-1,2,["\n    "])),(t()(),l._38(-1,null,["\n\n  "])),(t()(),l._38(-1,1,["\n\n"])),(t()(),l._38(-1,null,["\n"]))],function(t,e){t(e,4,0,e.component.currentUser,!0);t(e,16,0,"user-menu");t(e,19,0,"person");t(e,28,0,"user-menu");t(e,31,0,"log-out")},function(t,e){t(e,0,0,l._29(e,1).statusbarPadding,l._29(e,1)._hasRefresher);t(e,18,0,l._29(e,19)._hidden);t(e,30,0,l._29(e,31)._hidden)})}function o(t){return l._40(0,[(t()(),l._17(0,0,null,null,8,"ion-menu",[["enabled","false"],["id","user-menu"],["persistent","false"],["role","navigation"]],null,null,null,E.b,E.a)),l._34(6144,null,F.a,null,[H.a]),l._16(2,245760,null,2,H.a,[z.a,l.p,G.a,I.a,l.N,B.a,q.l,L.a,W.a],{content:[0,"content"],id:[1,"id"],enabled:[2,"enabled"],persistent:[3,"persistent"]},null),l._36(335544320,1,{menuContent:0}),l._36(335544320,2,{menuNav:0}),(t()(),l._38(-1,0,["\n  "])),(t()(),l._17(6,0,null,0,1,"user-menu",[],null,null,null,r,ut)),l._16(7,114688,null,0,at.a,[lt.a,i.a,W.a,z.a],{currentUser:[0,"currentUser"]},null),(t()(),l._38(-1,0,["\n"])),(t()(),l._38(-1,null,["\n\n"])),(t()(),l._17(10,0,null,null,2,"ion-nav",[],null,null,null,it.b,it.a)),l._34(6144,null,F.a,null,[ct.a]),l._16(12,4374528,[["content",4]],0,ct.a,[[2,T.a],[2,V.a],W.a,G.a,I.a,l.p,l.G,l.N,l.l,q.l,st.a,[2,ft.a],L.a,l.q],{root:[0,"root"]},null),(t()(),l._38(-1,null,["\n"]))],function(t,e){var n=e.component;t(e,2,0,l._29(e,12),"user-menu","false","false");t(e,7,0,n.currentUser);t(e,12,0,n.rootPage)},null)}Object.defineProperty(e,"__esModule",{value:!0});var a=n(44),l=n(0),u=n(202),i=n(53),c=n(55),s=n(71),f=n(130),p=n(131),d=n(99),h=this&&this.__decorate||function(t,e,n,r){var o,a=arguments.length,l=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,r);else for(var u=t.length-1;u>=0;u--)(o=t[u])&&(l=(a<3?o(l):a>3?o(e,n,l):o(e,n))||l);return a>3&&l&&Object.defineProperty(e,n,l),l},_=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},y=function(){function t(t,e,n,r,o){var a=this;this.authService=t,this.rootPage="SigninPage",t.auth.authState.subscribe(function(t){t&&o.currentUser.valueChanges().subscribe(function(t){a.currentUser=t})}),e.ready().then(function(){n.styleDefault(),r.hide()})}return t=h([Object(l.k)({templateUrl:"app.html"}),_("design:paramtypes",[i.a,s.l,p.a,f.a,d.a])],t)}(),g=n(89),m=n(95),b=n(88),v=n(206),j=n(211),O=this&&this.__decorate||function(t,e,n,r){var o,a=arguments.length,l=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,r);else for(var u=t.length-1;u>=0;u--)(o=t[u])&&(l=(a<3?o(l):a>3?o(e,n,l):o(e,n))||l);return a>3&&l&&Object.defineProperty(e,n,l),l},P={apiKey:"AIzaSyCveZVivq1cUx7iCkMDAy77aM5wSMCxarU",authDomain:"ionic3-firebase-chat-bf623.firebaseapp.com",databaseURL:"https://ionic3-firebase-chat-bf623.firebaseio.com",projectId:"ionic3-firebase-chat-bf623",storageBucket:"ionic3-firebase-chat-bf623.appspot.com",messagingSenderId:"856946055725"},R=function(){function t(){}return t=O([Object(l.D)({declarations:[y],imports:[a.a,s.f.forRoot(y,{},{links:[{loadChildren:"../pages/home/home.module.ngfactory#HomePageModuleNgFactory",name:"HomePage",segment:"home",priority:"low",defaultHistory:[]},{loadChildren:"../pages/chat/chat.module.ngfactory#ChatPageModuleNgFactory",name:"ChatPage",segment:"chat",priority:"low",defaultHistory:[]},{loadChildren:"../pages/signin/signin.module.ngfactory#SigninPageModuleNgFactory",name:"SigninPage",segment:"signin",priority:"low",defaultHistory:[]},{loadChildren:"../pages/user-profile/user-profile.module.ngfactory#UserProfilePageModuleNgFactory",name:"UserProfilePage",segment:"user-profile",priority:"low",defaultHistory:[]},{loadChildren:"../pages/signup/signup.module.ngfactory#SignupPageModuleNgFactory",name:"SignupPage",segment:"signup",priority:"low",defaultHistory:[]}]}),g.a.initializeApp(P),m.b,b.b,c.e,u.a],bootstrap:[s.d],entryComponents:[y],providers:[i.a,p.a,f.a,m.a,{provide:l.q,useClass:s.e},d.a,v.a,j.a]})],t)}(),C=n(82),w=n(306),S=n(307),k=n(308),U=n(309),M=n(310),x=n(311),A=n(312),N=n(313),D=n(314),E=n(403),F=n(52),H=n(117),z=n(36),G=n(2),I=n(4),B=n(38),q=n(7),L=n(13),W=n(12),J=n(315),K=n(35),T=n(6),V=n(29),Z=n(324),$=n(136),Q=n(74),X=n(201),Y=n(22),tt=n(18),et=n(61),nt=n(98),rt=n(161),ot=n(60),at=n(198),lt=n(72),ut=l._15({encapsulation:2,styles:[],data:{}}),it=(l._13("user-menu",at.a,function(t){return l._40(0,[(t()(),l._17(0,0,null,null,1,"user-menu",[],null,null,null,r,ut)),l._16(1,114688,null,0,at.a,[lt.a,i.a,W.a,z.a],null,null)],function(t,e){t(e,1,0)},null)},{currentUser:"user"},{},[]),n(404)),ct=n(87),st=n(49),ft=n(21),pt=l._15({encapsulation:2,styles:[],data:{}}),dt=l._13("ng-component",y,function(t){return l._40(0,[(t()(),l._17(0,0,null,null,1,"ng-component",[],null,null,null,o,pt)),l._16(1,49152,null,0,y,[i.a,I.a,p.a,f.a,d.a],null,null)],null,null)},{},{},[]),ht=n(17),_t=n(178),yt=n(27),gt=n(155),mt=n(177),bt=n(51),vt=n(134),jt=n(204),Ot=n(84),Pt=n(62),Rt=n(182),Ct=n(112),wt=n(186),St=n(180),kt=n(193),Ut=n(303),Mt=n(179),xt=n(162),At=n(181),Nt=l._14(R,[C.b],function(t){return l._25([l._26(512,l.l,l._10,[[8,[w.a,S.a,k.a,U.a,M.a,x.a,A.a,N.a,D.a,dt]],[3,l.l],l.E]),l._26(5120,l.C,l._35,[[3,l.C]]),l._26(4608,ht.m,ht.l,[l.C,[2,ht.v]]),l._26(5120,l.b,l._19,[]),l._26(5120,l.A,l._27,[]),l._26(5120,l.B,l._30,[]),l._26(4608,a.c,a.q,[ht.d]),l._26(6144,l.R,null,[a.c]),l._26(4608,a.f,_t.a,[]),l._26(5120,a.d,function(t,e,n,r,o){return[new a.k(t,e),new a.o(n),new a.n(r,o)]},[ht.d,l.G,ht.d,ht.d,a.f]),l._26(4608,a.e,a.e,[a.d,l.G]),l._26(135680,a.m,a.m,[ht.d]),l._26(4608,a.l,a.l,[a.e,a.m]),l._26(6144,l.P,null,[a.l]),l._26(6144,a.p,null,[a.m]),l._26(4608,l.W,l.W,[l.G]),l._26(4608,a.h,a.h,[ht.d]),l._26(4608,a.i,a.i,[ht.d]),l._26(4608,yt.t,yt.t,[]),l._26(4608,yt.d,yt.d,[]),l._26(5120,g.b,g.g,[g.d,[2,g.c]]),l._26(4608,m.a,m.a,[g.d,[2,g.c],[2,g.f],l.J,l.G]),l._26(4608,b.a,b.a,[g.d,[2,g.c],l.J,l.G]),l._26(4608,c.c,c.c,[]),l._26(4608,c.h,c.b,[]),l._26(5120,c.j,c.k,[]),l._26(4608,c.i,c.i,[c.c,c.h,c.j]),l._26(4608,c.f,c.a,[]),l._26(5120,c.d,c.l,[c.i,c.f]),l._26(4608,gt.a,gt.a,[W.a,G.a]),l._26(4608,lt.a,lt.a,[W.a,G.a]),l._26(4608,mt.a,mt.a,[]),l._26(4608,tt.a,tt.a,[]),l._26(4608,bt.a,bt.a,[I.a]),l._26(4608,B.a,B.a,[G.a,I.a,l.G,L.a]),l._26(4608,vt.a,vt.a,[W.a,G.a]),l._26(5120,ht.h,jt.c,[ht.s,[2,ht.a],G.a]),l._26(4608,ht.g,ht.g,[ht.h]),l._26(5120,Ot.b,Ot.d,[W.a,Ot.a]),l._26(5120,ft.a,ft.b,[W.a,Ot.b,ht.g,Pt.b,l.l]),l._26(4608,Rt.a,Rt.a,[W.a,G.a,ft.a]),l._26(4608,Ct.a,Ct.a,[W.a,G.a]),l._26(4608,wt.a,wt.a,[W.a,G.a,ft.a]),l._26(4608,St.a,St.a,[G.a,I.a,L.a,W.a,q.l]),l._26(4608,kt.a,kt.a,[W.a,G.a]),l._26(4608,st.a,st.a,[I.a,G.a]),l._26(4608,i.a,i.a,[b.a,c.e]),l._26(4608,p.a,p.a,[]),l._26(4608,f.a,f.a,[]),l._26(4608,d.a,d.a,[b.a,m.a,g.b,c.e]),l._26(4608,v.a,v.a,[m.a,b.a,c.e]),l._26(4608,j.a,j.a,[m.a,c.e]),l._26(512,ht.c,ht.c,[]),l._26(512,l.q,Ut.a,[]),l._26(256,G.b,{},[]),l._26(1024,Mt.a,Mt.b,[]),l._26(1024,I.a,I.b,[a.b,Mt.a,l.G]),l._26(1024,G.a,G.c,[G.b,I.a]),l._26(512,L.a,L.a,[I.a]),l._26(512,z.a,z.a,[]),l._26(512,W.a,W.a,[G.a,I.a,[2,z.a]]),l._26(512,q.l,q.l,[W.a]),l._26(256,Ot.a,{links:[{loadChildren:"../pages/home/home.module.ngfactory#HomePageModuleNgFactory",name:"HomePage",segment:"home",priority:"low",defaultHistory:[]},{loadChildren:"../pages/chat/chat.module.ngfactory#ChatPageModuleNgFactory",name:"ChatPage",segment:"chat",priority:"low",defaultHistory:[]},{loadChildren:"../pages/signin/signin.module.ngfactory#SigninPageModuleNgFactory",name:"SigninPage",segment:"signin",priority:"low",defaultHistory:[]},{loadChildren:"../pages/user-profile/user-profile.module.ngfactory#UserProfilePageModuleNgFactory",name:"UserProfilePage",segment:"user-profile",priority:"low",defaultHistory:[]},{loadChildren:"../pages/signup/signup.module.ngfactory#SignupPageModuleNgFactory",name:"SignupPage",segment:"signup",priority:"low",defaultHistory:[]}]},[]),l._26(512,l.j,l.j,[]),l._26(512,xt.a,xt.a,[l.j]),l._26(1024,Pt.b,Pt.c,[xt.a,l.y]),l._26(1024,l.c,function(t,e,n,r,o,l,u,i,c,s,f,p,d){return[a.s(t),At.a(e),mt.b(n,r),St.b(o,l,u,i,c),Pt.d(s,f,p,d)]},[[2,l.F],G.a,I.a,L.a,G.a,I.a,L.a,W.a,q.l,G.a,Ot.a,Pt.b,l.G]),l._26(512,l.d,l.d,[[2,l.c]]),l._26(131584,l.f,l.f,[l.G,l._11,l.y,l.q,l.l,l.d]),l._26(512,l.e,l.e,[l.f]),l._26(512,a.a,a.a,[[3,a.a]]),l._26(512,yt.r,yt.r,[]),l._26(512,yt.g,yt.g,[]),l._26(512,yt.o,yt.o,[]),l._26(512,jt.a,jt.a,[]),l._26(512,g.a,g.a,[]),l._26(512,m.b,m.b,[]),l._26(512,b.b,b.b,[]),l._26(512,c.e,c.e,[]),l._26(512,u.a,u.a,[]),l._26(512,R,R,[]),l._26(256,g.d,{apiKey:"AIzaSyCveZVivq1cUx7iCkMDAy77aM5wSMCxarU",authDomain:"ionic3-firebase-chat-bf623.firebaseapp.com",databaseURL:"https://ionic3-firebase-chat-bf623.firebaseio.com",projectId:"ionic3-firebase-chat-bf623",storageBucket:"ionic3-firebase-chat-bf623.appspot.com",messagingSenderId:"856946055725"},[]),l._26(256,g.c,void 0,[]),l._26(256,C.a,y,[]),l._26(256,ht.a,"/",[])])});Object(l._4)(),Object(a.j)().bootstrapModuleFactory(Nt)},53:function(t,e,n){"use strict";n.d(e,"a",function(){return f});var r=n(55),o=n(0),a=n(88),l=n(124),u=n(318),i=(n.n(u),this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}()),c=this&&this.__decorate||function(t,e,n,r){var o,a=arguments.length,l=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,r);else for(var u=t.length-1;u>=0;u--)(o=t[u])&&(l=(a<3?o(l):a>3?o(e,n,l):o(e,n))||l);return a>3&&l&&Object.defineProperty(e,n,l),l},s=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},f=function(t){function e(e,n){var r=t.call(this)||this;return r.auth=e,r.http=n,e.authState.subscribe(function(t){r.user=t}),console.log("Hello AuthProvider Provider"),r}return i(e,t),e.prototype.createAuthUser=function(t){return this.auth.auth.createUserWithEmailAndPassword(t.email,t.password).catch(this.handlePromiseError)},e.prototype.signinWithEmail=function(t){return this.auth.auth.signInWithEmailAndPassword(t.email,t.password).then(function(t){return null!=t.user}).catch(this.handlePromiseError)},e.prototype.logout=function(){return this.auth.auth.signOut()},Object.defineProperty(e.prototype,"authenticated",{get:function(){var t=this;return new Promise(function(e,n){t.auth.authState.first().subscribe(function(t){t?e(!0):n(!1)})})},enumerable:!0,configurable:!0}),e=c([Object(o.w)(),s("design:paramtypes",[a.a,r.e])],e)}(l.a)},99:function(t,e,n){"use strict";n.d(e,"a",function(){return d});var r=n(95),o=n(55),a=n(0),l=n(124),u=n(28),i=n(88),c=n(89),s=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),f=this&&this.__decorate||function(t,e,n,r){var o,a=arguments.length,l=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,r);else for(var u=t.length-1;u>=0;u--)(o=t[u])&&(l=(a<3?o(l):a>3?o(e,n,l):o(e,n))||l);return a>3&&l&&Object.defineProperty(e,n,l),l},p=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},d=function(t){function e(e,n,r,o){var a=t.call(this)||this;return a.auth=e,a.db=n,a.firebaseApp=r,a.http=o,a.listenAuthState(),a}return s(e,t),e.prototype.setUsers=function(t){this.users=this.db.list("/users",function(t){return t.orderByChild("name")}).valueChanges().pipe(Object(u.map)(function(e){return e.filter(function(e){return e.uid!==t})}),Object(u.catchError)(this.handleObservableError))},e.prototype.listenAuthState=function(){var t=this;this.auth.authState.subscribe(function(e){e&&(console.log("Auth state alterado!"),t.currentUser=t.db.object("/users/"+e.uid),t.setUsers(e.uid))})},e.prototype.create=function(t){return Promise.resolve(this.db.object("/users/"+t.uid).set(t).catch(this.handlePromiseError))},e.prototype.edit=function(t){return this.currentUser.update(t).catch(this.handlePromiseError)},e.prototype.userExists=function(t){return this.db.list("/users",function(e){return e.orderByChild("username").equalTo(t)}).valueChanges().pipe(Object(u.map)(function(t){return t.length>0}),Object(u.catchError)(this.handleObservableError))},e.prototype.get=function(t){return this.db.object("/users/"+t)},e.prototype.uploadPhoto=function(t,e){return this.firebaseApp.storage().ref().child("/users/"+e).put(t)},e=f([Object(a.w)(),p("design:paramtypes",[i.a,r.a,c.b,o.e])],e)}(l.a)}},[325]);