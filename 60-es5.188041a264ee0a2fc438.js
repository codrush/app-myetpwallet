!function(){function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{Yzsn:function(t,r,i){"use strict";i.r(r),i.d(r,"BaseCurrencyPageModule",(function(){return w}));var c=i("ofXK"),o=i("3Pt+"),a=i("TEn/"),s=i("tyNb"),u=i("mrSG"),b=i("fXoL"),f=i("OaWH"),p=i("sYmb");function l(e,n){if(1&e){var t=b.Yb();b.Xb(0,"ion-item",3),b.fc("click",(function(){b.Ac(t);var e=n.$implicit;return b.jc().select(e)})),b.Xb(1,"ion-label"),b.Ic(2),b.Wb(),b.Wb()}if(2&e){var r=n.$implicit,i=b.jc();b.pc("disabled",r==i.currentBase),b.Fb(2),b.Kc("",r," ")}}var h,v,d,m=[{path:"",component:(h=function(){function t(n,r){e(this,t),this.router=n,this.appService=r,this.currencies=["BTC","USD","CNY","EUR","JPY","GBP","CAD"]}var r,i,c;return r=t,(i=[{key:"ngOnInit",value:function(){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))}},{key:"ionViewDidEnter",value:function(){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.appService.getBaseCurrency();case 2:this.currentBase=e.sent;case 3:case"end":return e.stop()}}),e,this)})))}},{key:"select",value:function(e){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,this.currentBase=e,n.next=4,this.appService.setBaseCurrency(e);case 4:this.router.navigate(["account","portfolio"]),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log("Error changing base currency");case 10:case"end":return n.stop()}}),n,this,[[0,7]])})))}}])&&n(r.prototype,i),c&&n(r,c),t}(),h.\u0275fac=function(e){return new(e||h)(b.Rb(s.h),b.Rb(f.a))},h.\u0275cmp=b.Lb({type:h,selectors:[["app-base-currency"]],decls:8,vars:1,consts:[["slot","start"],["translate","BASE_CURRENCY.TITLE"],["button","",3,"disabled","click",4,"ngFor","ngForOf"],["button","",3,"disabled","click"]],template:function(e,n){1&e&&(b.Xb(0,"ion-header"),b.Xb(1,"ion-toolbar"),b.Xb(2,"ion-buttons",0),b.Sb(3,"ion-back-button"),b.Wb(),b.Sb(4,"ion-title",1),b.Wb(),b.Wb(),b.Xb(5,"ion-content"),b.Xb(6,"ion-list"),b.Gc(7,l,3,2,"ion-item",2),b.Wb(),b.Wb()),2&e&&(b.Fb(7),b.pc("ngForOf",n.currencies))},directives:[a.u,a.X,a.j,a.f,a.g,a.V,p.a,a.r,a.A,c.l,a.x,a.z],styles:[""]}),h)}],g=((d=function n(){e(this,n)}).\u0275mod=b.Pb({type:d}),d.\u0275inj=b.Ob({factory:function(e){return new(e||d)},imports:[[s.j.forChild(m)],s.j]}),d),w=((v=function n(){e(this,n)}).\u0275mod=b.Pb({type:v}),v.\u0275inj=b.Ob({factory:function(e){return new(e||v)},imports:[[c.c,o.e,a.Y,p.c.forChild(),g]]}),v)}}])}();