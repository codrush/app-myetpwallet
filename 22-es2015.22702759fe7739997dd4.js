(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{f4Sq:function(t,e,n){"use strict";n.r(e),n.d(e,"PortfolioPageModule",(function(){return O}));var i=n("ofXK"),c=n("3Pt+"),o=n("TEn/"),a=n("tyNb"),s=n("mrSG"),r=n("itXk"),b=n("fXoL"),l=n("sYmb"),u=n("BZA/"),f=n("q5gJ"),m=n("JvOL");function d(t,e){1&t&&b.Sb(0,"ion-spinner",11)}function h(t,e){if(1&t&&(b.Xb(0,"div",19),b.Ic(1),b.kc(2,"number"),b.Wb()),2&t){const t=b.jc(2);b.Fb(1),b.Lc(" \u2248",t.base," ",b.mc(2,2,t.fiatValue(t.etpBalance.total||0,"ETP",8),"1.0-2")," ")}}function p(t,e){if(1&t&&(b.Xb(0,"div",19),b.Ic(1),b.kc(2,"number"),b.Wb()),2&t){const t=b.jc(2);b.Fb(1),b.Lc(" \u2248",t.base," ",b.mc(2,2,t.fiatValue(t.etpBalance.unconfirmed||0,"ETP",8),"1.0-2")," ")}}function g(t,e){if(1&t&&(b.Xb(0,"div",19),b.Ic(1),b.kc(2,"number"),b.Wb()),2&t){const t=b.jc(2);b.Fb(1),b.Lc(" \u2248",t.base," ",b.mc(2,2,t.fiatValue(t.etpBalance.frozen||0,"ETP",8),"1.0-2")," ")}}function v(t,e){if(1&t&&(b.Xb(0,"div",19),b.Ic(1),b.kc(2,"number"),b.Wb()),2&t){const t=b.jc(2).$implicit,e=b.jc(2);b.Fb(1),b.Lc(" \u2248",e.base," ",b.mc(2,2,e.fiatValue(t.balance.total||0,t.symbol,t.balance.decimals),"1.0-2")," ")}}function T(t,e){if(1&t&&(b.Xb(0,"div",19),b.Ic(1),b.kc(2,"number"),b.Wb()),2&t){const t=b.jc(2).$implicit,e=b.jc(2);b.Fb(1),b.Lc(" \u2248",e.base," ",b.mc(2,2,e.fiatValue(t.balance.unconfirmed||0,t.symbol,t.balance.decimals),"1.0-2")," ")}}function k(t,e){if(1&t&&(b.Xb(0,"div",19),b.Ic(1),b.kc(2,"number"),b.Wb()),2&t){const t=b.jc(2).$implicit,e=b.jc(2);b.Fb(1),b.Lc(" \u2248",e.base," ",b.mc(2,2,e.fiatValue(t.balance.frozen||0,t.symbol,t.balance.decimals),"1.0-2")," ")}}const I=function(t){return{"default-logo":t}};function S(t,e){if(1&t){const t=b.Yb();b.Xb(0,"ion-item",12),b.Xb(1,"img",21),b.fc("error",(function(e){return b.Ac(t),b.jc(3).errorImg(e)})),b.Wb(),b.Xb(2,"ion-label",13),b.Ic(3),b.Wb(),b.Xb(4,"ion-col",14),b.Ic(5),b.kc(6,"format"),b.Gc(7,v,3,5,"div",15),b.Wb(),b.Xb(8,"ion-col",16),b.Ic(9),b.kc(10,"format"),b.Gc(11,T,3,5,"div",15),b.Wb(),b.Xb(12,"ion-col",16),b.Ic(13),b.kc(14,"format"),b.Gc(15,k,3,5,"div",15),b.Wb(),b.Xb(16,"ion-buttons",7),b.Xb(17,"ion-button",22),b.fc("click",(function(e){return b.Ac(t),e.preventDefault(),e.stopPropagation()})),b.Sb(18,"span",23),b.Wb(),b.Wb(),b.Wb()}if(2&t){const t=b.jc().$implicit,e=b.jc(2);b.pc("routerLink","/account/mst/"+t.symbol),b.Fb(1),b.pc("src",t.icon,b.Cc)("ngClass",b.tc(20,I,"default_mst"==t.icon)),b.Fb(2),b.Jc(t.symbol),b.Fb(2),b.Kc(" ",b.mc(6,11,t.balance.total||0,t.balance.decimals)," "),b.Fb(2),b.pc("ngIf",e.tickers&&e.tickers[t.symbol]&&e.tickers[t.symbol][e.base]),b.Fb(2),b.Kc(" ",b.mc(10,14,t.balance.unconfirmed||0,t.balance.decimals)," "),b.Fb(2),b.pc("ngIf",e.tickers&&e.tickers[t.symbol]&&e.tickers[t.symbol][e.base]),b.Fb(2),b.Kc(" ",b.mc(14,17,t.balance.frozen||0,t.balance.decimals)," "),b.Fb(2),b.pc("ngIf",e.tickers&&e.tickers[t.symbol]&&e.tickers[t.symbol][e.base]),b.Fb(2),b.pc("routerLink","/account/send/"+t.symbol)}}function P(t,e){if(1&t&&(b.Xb(0,"div"),b.Gc(1,S,19,22,"ion-item",20),b.Wb()),2&t){const t=e.$implicit;b.Fb(1),b.pc("ngIf",!t.hidden&&(t.balance.total||"DNA"==t.symbol))}}const X=function(){return["order","-1"]};function y(t,e){if(1&t){const t=b.Yb();b.Xb(0,"div"),b.Xb(1,"ion-item",12),b.Xb(2,"img",2),b.fc("error",(function(e){return b.Ac(t),b.jc().errorImg(e)})),b.Wb(),b.Xb(3,"ion-label",13),b.Ic(4,"ETP"),b.Wb(),b.Xb(5,"ion-col",14),b.Ic(6),b.kc(7,"format"),b.Gc(8,h,3,5,"div",15),b.Wb(),b.Xb(9,"ion-col",16),b.Ic(10),b.kc(11,"format"),b.Gc(12,p,3,5,"div",15),b.Wb(),b.Xb(13,"ion-col",16),b.Ic(14),b.kc(15,"format"),b.Gc(16,g,3,5,"div",15),b.Wb(),b.Xb(17,"ion-buttons",7),b.Xb(18,"ion-button",17),b.fc("click",(function(e){return b.Ac(t),e.preventDefault(),e.stopPropagation()})),b.Wb(),b.Wb(),b.Wb(),b.Gc(19,P,2,1,"div",18),b.kc(20,"orderBy"),b.Wb()}if(2&t){const t=b.jc();b.Fb(1),b.pc("routerLink","/account/mst/ETP"),b.Fb(1),b.pc("src","assets/icon/ETP.png",b.Cc),b.Fb(4),b.Kc(" ",b.mc(7,10,t.etpBalance.total||0,8)," "),b.Fb(2),b.pc("ngIf",t.tickers&&t.tickers.ETP&&t.tickers.ETP[t.base]),b.Fb(2),b.Kc(" ",b.mc(11,13,t.etpBalance.unconfirmed||0,8)," "),b.Fb(2),b.pc("ngIf",t.tickers&&t.tickers.ETP&&t.tickers.ETP[t.base]),b.Fb(2),b.Kc(" ",b.mc(15,16,t.etpBalance.frozen||0,8)," "),b.Fb(2),b.pc("ngIf",t.tickers&&t.tickers.ETP&&t.tickers.ETP[t.base]),b.Fb(2),b.pc("routerLink","/account/send/ETP"),b.Fb(1),b.pc("ngForOf",b.mc(20,19,t.msts,b.sc(22,X)))}}const E=[{path:"",component:(()=>{class t{constructor(t,e,n){this.translate=t,this.metaverseService=e,this.router=n,this.icons={MST:[],MIT:[]},this.whitelist=[],this.msts=[],this.loading=!0,this.fiatValue=(t,e,n)=>parseFloat(t)/Math.pow(10,n)*this.tickers[e][this.base].price||0,this.errorImg=t=>t.target.remove()}ionViewWillEnter(){return Object(s.a)(this,void 0,void 0,(function*(){this.loading=!0,this.heightSubscription=Object(r.a)([this.metaverseService.height$,this.metaverseService.balanceUpdated$]).subscribe(()=>{this.showBalances()})}))}ngOnInit(){return Object(s.a)(this,void 0,void 0,(function*(){this.loadTickers(),this.whitelist=yield this.metaverseService.getWhitelist()}))}ngOnDestroy(){this.heightSubscription&&this.heightSubscription.unsubscribe()}loadTickers(){return Object(s.a)(this,void 0,void 0,(function*(){[this.base,this.tickers]=yield this.metaverseService.getBaseAndTickers()}))}showBalances(){return Object(s.a)(this,void 0,void 0,(function*(){try{this.balances=yield this.metaverseService.getBalances(),yield this.metaverseService.addAssetsToAssetOrder(Object.keys(this.balances.MST));const t=yield this.metaverseService.assetOrder(),e=yield this.metaverseService.getHiddenMst();this.icons=yield this.metaverseService.getDefaultIcon(),this.etpBalance={decimals:8,available:this.balances.ETP.available||0,unconfirmed:this.balances.ETP.unconfirmed||0,frozen:this.balances.ETP.frozen||0,total:0},this.etpBalance.total=this.etpBalance.available+this.etpBalance.unconfirmed+this.etpBalance.frozen,this.balances.ETP.available=this.balances.ETP.available||0,this.balances.ETP.unconfirmed=this.balances.ETP.unconfirmed||0,this.balances.ETP.frozen=this.balances.ETP.frozen||0,this.balances.ETP.total=this.balances.ETP.available+this.balances.ETP.unconfirmed+this.balances.ETP.frozen,this.msts=[],Object.keys(this.balances.MST).forEach(n=>{const i={decimals:this.balances.MST[n].decimals,available:this.balances.MST[n].available||0,unconfirmed:this.balances.MST[n].unconfirmed||0,frozen:this.balances.MST[n].frozen||0,total:0};i.total=i.available+i.unconfirmed+i.frozen,this.msts.push({symbol:n,balance:i,icon:this.icons.MST[n]||"assets/icon/default_mst.png",hidden:-1!==e.indexOf(n),order:t.indexOf(n)})}),this.loading=!1}catch(t){console.error(t),console.log("Can't load balances")}}))}goToMst(t){this.router.navigate(["/account","mst",t])}ignoreEvent(t){t.preventDefault()}}return t.\u0275fac=function(e){return new(e||t)(b.Rb(l.e),b.Rb(u.a),b.Rb(a.h))},t.\u0275cmp=b.Lb({type:t,selectors:[["app-portfolio"]],decls:16,vars:4,consts:[["slot","start"],["translate","ACCOUNT.TITLE"],[1,"coinlogo",3,"src","error"],["translate","MST.GRID.SYMBOL",1,"symbol"],["translate","MST.GRID.TOTAL",1,"right"],["translate","MST.GRID.UNCONFIRMED",1,"ion-hide-sm-down","right"],["translate","MST.GRID.FROZEN",1,"ion-hide-sm-down","right"],["slot","end",1,"right-buttons"],["color","danger","fill","outline","shape","round","translate","MST.GRID.BUTTON.SEND",1,"invisible",3,"routerLink","click"],["name","dots",4,"ngIf"],[4,"ngIf"],["name","dots"],["button","",3,"routerLink"],[1,"symbol"],[1,"right"],["class","fiat",4,"ngIf"],[1,"ion-hide-sm-down","right"],["color","danger","fill","outline","shape","round","translate","MST.GRID.BUTTON.SEND",3,"routerLink","click"],[4,"ngFor","ngForOf"],[1,"fiat"],["button","",3,"routerLink",4,"ngIf"],[1,"coinlogo",3,"src","ngClass","error"],["color","danger","fill","outline","shape","round",3,"routerLink","click"],["translate","MST.GRID.BUTTON.SEND"]],template:function(t,e){1&t&&(b.Xb(0,"ion-header"),b.Xb(1,"ion-toolbar"),b.Xb(2,"ion-buttons",0),b.Sb(3,"ion-menu-button"),b.Wb(),b.Sb(4,"ion-title",1),b.Wb(),b.Wb(),b.Xb(5,"ion-content"),b.Xb(6,"ion-item"),b.Xb(7,"img",2),b.fc("error",(function(t){return e.errorImg(t)})),b.Wb(),b.Sb(8,"ion-label",3),b.Sb(9,"ion-col",4),b.Sb(10,"ion-col",5),b.Sb(11,"ion-col",6),b.Xb(12,"ion-buttons",7),b.Xb(13,"ion-button",8),b.fc("click",(function(t){return t.preventDefault(),t.stopPropagation()})),b.Wb(),b.Wb(),b.Wb(),b.Gc(14,d,1,0,"ion-spinner",9),b.Gc(15,y,21,23,"div",10),b.Wb()),2&t&&(b.Fb(7),b.pc("src","assets/icon/default_mst.png",b.Cc),b.Fb(6),b.pc("routerLink","/account/send/ETP"),b.Fb(1),b.pc("ngIf",e.loading),b.Fb(1),b.pc("ngIf",!e.loading))},directives:[o.u,o.X,o.j,o.C,o.V,l.a,o.r,o.x,o.z,o.q,o.i,o.fb,a.i,i.m,o.R,i.l,i.k],pipes:[f.a,m.a,i.f],styles:[".coinlogo[_ngcontent-%COMP%]{width:28px;margin-right:20px}.right-buttons[_ngcontent-%COMP%]{margin-right:10px;margin-left:20px}@media screen and (max-width:630px){.right-buttons[_ngcontent-%COMP%]{margin-right:0;margin-left:0}}.inside-line[_ngcontent-%COMP%]{width:100%}ion-card[_ngcontent-%COMP%]{margin:0}.fiat[_ngcontent-%COMP%]{font-size:.9rem!important;color:#949494}"]}),t})()}];let F=(()=>{class t{}return t.\u0275mod=b.Pb({type:t}),t.\u0275inj=b.Ob({factory:function(e){return new(e||t)},imports:[[a.j.forChild(E)],a.j]}),t})();var W=n("iTUp");let O=(()=>{class t{}return t.\u0275mod=b.Pb({type:t}),t.\u0275inj=b.Ob({factory:function(e){return new(e||t)},imports:[[i.c,c.e,o.Y,W.a,l.c.forChild(),F]]}),t})()},iTUp:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var i=n("ofXK"),c=n("fXoL");let o=(()=>{class t{}return t.\u0275mod=c.Pb({type:t}),t.\u0275inj=c.Ob({factory:function(e){return new(e||t)},imports:[[i.c]]}),t})()},q5gJ:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var i=n("fXoL");let c=(()=>{class t{transform(t,e){return(t/Math.pow(10,e)).toLocaleString(void 0,{maximumFractionDigits:e})}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=i.Qb({name:"format",type:t,pure:!0}),t})()}}]);