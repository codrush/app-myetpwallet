!function(){function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{"vj+n":function(t,i,o){"use strict";o.r(i),o.d(i,"OpenFilePageModule",(function(){return P}));var r=o("ofXK"),a=o("3Pt+"),c=o("TEn/"),s=o("tyNb"),l=o("mrSG"),b=o("fXoL"),f=o("BZA/"),d=o("Fvwb"),u=o("sYmb"),p=o("3LUQ");function g(e,n){if(1&e){var t=b.Yb();b.Xb(0,"ion-row"),b.Xb(1,"ion-button",20),b.fc("click",(function(){return b.Ac(t),b.yc(5).click()})),b.Sb(2,"ion-icon",21),b.Sb(3,"span",22),b.Wb(),b.Xb(4,"input",23,24),b.fc("change",(function(e){return b.Ac(t),b.jc(2).open(e)})),b.Wb(),b.Wb()}}function h(e,n){if(1&e&&(b.Xb(0,"ion-row"),b.Xb(1,"ion-col",28),b.Xb(2,"ion-button",29),b.Sb(3,"ion-icon",30),b.Sb(4,"span",31),b.Wb(),b.Wb(),b.Wb()),2&e){b.jc(2);var t=b.yc(1);b.Fb(2),b.pc("disabled",!t.form.valid)}}function m(e,n){if(1&e){var t=b.Yb();b.Xb(0,"div"),b.Xb(1,"ion-row"),b.Sb(2,"ion-icon",25),b.Wb(),b.Xb(3,"ion-item"),b.Sb(4,"ion-label",26),b.Xb(5,"ion-input",27),b.fc("ngModelChange",(function(e){return b.Ac(t),b.jc(2).password=e})),b.Wb(),b.Wb(),b.Sb(6,"br"),b.Gc(7,h,5,1,"ion-row",15),b.Wb()}if(2&e){var i=b.jc(2);b.Fb(5),b.pc("ngModel",i.password),b.Fb(2),b.pc("ngIf",!i.isMobile)}}function v(e,n){if(1&e){var t=b.Yb();b.Xb(0,"form",16,17),b.fc("ngSubmit",(function(){b.Ac(t);var e=b.jc();return e.decrypt(e.password)})),b.Xb(2,"ion-item",18),b.Sb(3,"h1",19),b.Wb(),b.Gc(4,g,6,0,"ion-row",15),b.Gc(5,m,8,2,"div",15),b.Wb()}if(2&e){var i=b.jc();b.Fb(4),b.pc("ngIf",!i.fileLoaded&&!i.isMobile),b.Fb(1),b.pc("ngIf",i.fileLoaded)}}function S(e,n){1&e&&b.Sb(0,"ion-row",32)}function I(e,n){if(1&e){var t=b.Yb();b.Xb(0,"div",35),b.Xb(1,"input",36),b.fc("change",(function(e){return b.Ac(t),b.jc(2).open(e)})),b.Wb(),b.Xb(2,"label",37),b.Sb(3,"ion-icon",21),b.Sb(4,"span",22),b.Wb(),b.Wb()}}function w(e,n){if(1&e){var t=b.Yb();b.Xb(0,"ion-button",38),b.fc("click",(function(){b.Ac(t);var e=b.jc(2);return e.decrypt(e.password)})),b.Sb(1,"ion-icon",30),b.Sb(2,"span",31),b.Wb()}if(2&e){var i=b.jc(2);b.pc("disabled",!i.password)}}function _(e,n){if(1&e&&(b.Xb(0,"ion-footer"),b.Gc(1,I,5,0,"div",33),b.Gc(2,w,3,1,"ion-button",34),b.Wb()),2&e){var t=b.jc();b.Fb(1),b.pc("ngIf",!t.fileLoaded),b.Fb(1),b.pc("ngIf",t.fileLoaded)}}var M,O,E,x=[{path:"",component:(M=function(){function t(n,i,o,r,a){e(this,t),this.metaverseService=n,this.walletService=i,this.translate=o,this.router=r,this.alertService=a,this.disclaimer_agreed=!1,this.password="",this.fileLoaded=!1}var i,o,r;return i=t,(o=[{key:"ngOnInit",value:function(){this.isMobile=this.walletService.isMobile()}},{key:"ionViewWillEnter",value:function(){this.data=void 0,this.fileLoaded=!1,this.disclaimer_agreed=!1,this.password=""}},{key:"open",value:function(e){var n=this,t=e.target.files,i=new FileReader;i.onload=function(e){var t=e.target.result;try{n.data=JSON.parse(t),n.walletService.setWallet(n.data).then((function(){return n.fileLoaded=!0}))}catch(e){console.error(e),n.alertService.showMessage("OPEN_FILE.WRONG_FILE.TITLE","OPEN_FILE.WRONG_FILE.SUBTITLE","")}},t[0]&&i.readAsText(t[0])}},{key:"decrypt",value:function(e){return Object(l.a)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var t,i,o,r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,this.alertService.showLoading();case 3:return n.next=5,this.metaverseService.dataReset();case 5:return n.next=7,this.walletService.setSeed(e);case 7:return n.next=9,this.walletService.getMasterPublicKey(e);case 9:return t=n.sent,n.next=12,this.walletService.setXpub(t);case 12:return n.next=14,this.walletService.getWallet(e);case 14:return i=n.sent,n.next=17,this.walletService.getAddressIndexFromWallet();case 17:return o=n.sent,n.next=20,this.walletService.generateAddresses(i,0,o);case 20:return r=n.sent,n.next=23,this.metaverseService.setAddresses(r);case 23:return n.next=25,this.walletService.setVmAddressFromPassphrase(e);case 25:return n.next=27,this.walletService.saveSessionAccount(e);case 27:return n.next=29,this.router.navigate(["/loading"],{state:{data:{reset:!0}}});case 29:return n.next=31,this.alertService.stopLoading();case 31:n.next=39;break;case 33:return n.prev=33,n.t0=n.catch(0),console.error(n.t0),n.next=38,this.alertService.stopLoading();case 38:this.alertService.showError("OPEN_FILE.WRONG_PASSWORD","");case 39:case"end":return n.stop()}}),n,this,[[0,33]])})))}}])&&n(i.prototype,o),r&&n(i,r),t}(),M.\u0275fac=function(e){return new(e||M)(b.Rb(f.a),b.Rb(d.a),b.Rb(u.e),b.Rb(s.h),b.Rb(p.a))},M.\u0275cmp=b.Lb({type:M,selectors:[["app-open-file"]],decls:25,vars:4,consts:[["slot","start"],["defaultHref","/login/open"],["translate","OPEN_FILE.TITLE"],["size-md","12","size-lg","6","offset-lg","3"],["translate","DISCLAIMER.HEADLINE",1,"pageHeadline"],["translate","DISCLAIMER.INTRODUCTION"],["translate","DISCLAIMER.LIST_INTRODUCTION"],["translate","DISCLAIMER.LIST_ITEM_1"],["translate","DISCLAIMER.LIST_ITEM_2"],["translate","DISCLAIMER.LIST_ITEM_3"],["translate","DISCLAIMER.LIST_ITEM_4"],["id","disclaimer-agree-label","text-wrap","","translate","DISCLAIMER.READ_AND_AGREE"],["id","disclaimer-agree",3,"ngModel","ngModelChange"],["lines","none","class","buttons-container",3,"ngSubmit",4,"ngIf"],["class","buttons-container",4,"ngIf"],[4,"ngIf"],["lines","none",1,"buttons-container",3,"ngSubmit"],["importForm","ngForm"],["lines","none",1,"center-text"],["translate","OPEN_FILE.IMPORT_FILE"],["fill","outline","shape","round",3,"click"],["slot","start","name","download"],["translate","OPEN_FILE.CHOOSE_A_FILE"],["name","file","type","file","id","file","accept",".json",1,"ion-hide",3,"change"],["f",""],["name","md-checkmark-circle",1,"verifiedFile"],["color","primary","position","floating","translate","OPEN_FILE.PASSWORD"],["name","password","id","password-input","type","password","required","",3,"ngModel","ngModelChange"],["size","12","size-sm","6","offset-sm","3"],["type","submit","expand","full","fill","outline","shape","round","id","submit-button","color","primary",3,"disabled"],["slot","start","name","arrow-forward"],["translate","OPEN_FILE.IMPORT_BUTTON"],[1,"buttons-container"],["class","footer-inputfile",4,"ngIf"],["color","primary","type","submit","expand","full",3,"disabled","click",4,"ngIf"],[1,"footer-inputfile"],["type","file","name","file","id","file","accept",".json",1,"inputfile",3,"change"],["for","file"],["color","primary","type","submit","expand","full",3,"disabled","click"]],template:function(e,n){1&e&&(b.Xb(0,"ion-header"),b.Xb(1,"ion-toolbar"),b.Xb(2,"ion-buttons",0),b.Sb(3,"ion-back-button",1),b.Wb(),b.Sb(4,"ion-title",2),b.Wb(),b.Wb(),b.Xb(5,"ion-content"),b.Xb(6,"ion-grid"),b.Xb(7,"ion-row"),b.Xb(8,"ion-col",3),b.Sb(9,"h2",4),b.Sb(10,"p",5),b.Sb(11,"p",6),b.Xb(12,"ol"),b.Sb(13,"li",7),b.Sb(14,"li",8),b.Sb(15,"li",9),b.Sb(16,"li",10),b.Wb(),b.Xb(17,"ion-item"),b.Sb(18,"ion-label",11),b.Xb(19,"ion-checkbox",12),b.fc("ngModelChange",(function(e){return n.disclaimer_agreed=e})),b.Wb(),b.Wb(),b.Gc(20,v,6,2,"form",13),b.Gc(21,S,1,0,"ion-row",14),b.Sb(22,"br"),b.Sb(23,"br"),b.Wb(),b.Wb(),b.Wb(),b.Wb(),b.Gc(24,_,3,2,"ion-footer",15)),2&e&&(b.Fb(19),b.pc("ngModel",n.disclaimer_agreed),b.Fb(1),b.pc("ngIf",n.disclaimer_agreed),b.Fb(1),b.pc("ngIf",!n.disclaimer_agreed),b.Fb(3),b.pc("ngIf",n.isMobile&&n.disclaimer_agreed))},directives:[c.u,c.X,c.j,c.f,c.g,c.V,u.a,c.r,c.t,c.K,c.q,c.x,c.z,c.p,c.c,a.i,a.l,r.m,a.p,a.j,a.k,c.i,c.v,c.w,c.hb,a.n,c.s],styles:[".button[_ngcontent-%COMP%]{margin:auto}.center-text[_ngcontent-%COMP%]{text-align:center}.my-button-class[_ngcontent-%COMP%]{font-size:1.25em;font-weight:700;color:#fff;background-color:#000;display:inline-block}.inputfile[_ngcontent-%COMP%]{width:.1px;height:.1px;opacity:0;overflow:hidden;position:absolute;z-index:-1}.scroll-content[_ngcontent-%COMP%]{padding-bottom:200px!important}.inputfile[_ngcontent-%COMP%] + label[_ngcontent-%COMP%]{font-size:1.25em!important;font-weight:700;background-color:var(--ion-color-secondary);margin:50px auto auto;padding:5px 15px;border-radius:2.5px;display:block;color:#fff;font-size:1em;transition:all .4s;cursor:pointer}ion-footer[_ngcontent-%COMP%]   .inputfile[_ngcontent-%COMP%] + label[_ngcontent-%COMP%]{margin-top:0;height:100%;padding-top:12px}.footer-inputfile[_ngcontent-%COMP%]{text-align:center;height:100%}.inputfile[_ngcontent-%COMP%] + label[_ngcontent-%COMP%]:hover, .inputfile[_ngcontent-%COMP%]:focus + label[_ngcontent-%COMP%]{opacity:.9}.inputfile[_ngcontent-%COMP%] + label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:8px}.inputfile[_ngcontent-%COMP%]:focus + label[_ngcontent-%COMP%]{outline:1px dotted #000;outline:5px auto -webkit-focus-ring-color}.buttons-container[_ngcontent-%COMP%]{height:220px}.verifiedFile[_ngcontent-%COMP%]{color:var(--ion-color-secondary);font-size:50px;margin-left:calc(50% - 25px)}"]}),M)}],L=((E=function n(){e(this,n)}).\u0275mod=b.Pb({type:E}),E.\u0275inj=b.Ob({factory:function(e){return new(e||E)},imports:[[s.j.forChild(x)],s.j]}),E),P=((O=function n(){e(this,n)}).\u0275mod=b.Pb({type:O}),O.\u0275inj=b.Ob({factory:function(e){return new(e||O)},imports:[[r.c,a.e,c.Y,u.c.forChild(),L]]}),O)}}])}();