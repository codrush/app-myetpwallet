(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{"/dWu":function(n,t,e){"use strict";e.r(t),e.d(t,"OpenPageModule",(function(){return w}));var o=e("ofXK"),i=e("3Pt+"),c=e("TEn/"),r=e("tyNb"),a=e("mrSG"),s=e("fXoL"),l=e("Fvwb"),b=e("3LUQ"),d=e("BZA/"),u=e("OaWH"),h=e("sYmb");function g(n,t){if(1&n){const n=s.Yb();s.Xb(0,"h3",22),s.fc("click",(function(){return s.Ac(n),s.jc().goToCreate()})),s.Wb()}}function p(n,t){1&n&&s.Sb(0,"ion-icon",31)}function O(n,t){1&n&&s.Sb(0,"ion-icon",32)}function f(n,t){if(1&n){const n=s.Yb();s.Xb(0,"ion-button",28),s.fc("click",(function(){s.Ac(n);const t=s.jc().$implicit;return s.jc(2).loginViaAccount(t)})),s.Gc(1,p,1,0,"ion-icon",29),s.Gc(2,O,1,0,"ion-icon",30),s.Ic(3),s.Wb()}if(2&n){const n=s.jc().$implicit;s.Fb(1),s.pc("ngIf",n.content),s.Fb(1),s.pc("ngIf",!n.content&&n.view_only_content),s.Fb(1),s.Kc(" ",n.name," ")}}function E(n,t){if(1&n&&(s.Xb(0,"div"),s.Gc(1,f,4,3,"ion-button",27),s.Wb()),2&n){const n=t.$implicit,e=s.jc(2);s.Fb(1),s.pc("ngIf",n.network==e.globals.network||!n.network&&"mainnet"==e.globals.network)}}function S(n,t){if(1&n&&(s.Xb(0,"ion-row",23),s.Xb(1,"ion-col",24),s.Gc(2,E,2,1,"div",25),s.Sb(3,"div",26),s.Wb(),s.Wb()),2&n){const n=s.jc();s.Fb(2),s.pc("ngForOf",n.saved_accounts)}}function m(n,t){1&n&&(s.Xb(0,"ion-col",13),s.Xb(1,"ion-card",33),s.Xb(2,"ion-card-header"),s.Sb(3,"ion-icon",34),s.Sb(4,"ion-card-title",35),s.Wb(),s.Sb(5,"ion-card-content",36),s.Wb(),s.Wb())}const N=[{path:"",component:(()=>{class n{constructor(n,t,e,o,i,c){this.platform=n,this.router=t,this.walletService=e,this.alertService=o,this.metaverseService=i,this.globals=c,this.saved_accounts=[],this.noAccount=!0}ngOnInit(){this.isApp=this.walletService.isApp()}ionViewWillEnter(){return Object(a.a)(this,void 0,void 0,(function*(){this.saved_accounts=(yield this.walletService.getSavedAccounts())||[],this.saved_accounts.forEach(n=>{(n.network===this.globals.network||!n.network&&"mainnet"===this.globals.network)&&(this.noAccount=!1)})}))}loginViaAccount(n){n.content?this.router.navigate(["login","account"],{state:{data:{account:n}}}):this.loginAccountViewOnly(n)}goToCreate(){this.router.navigate(["login","create"])}loginAccountViewOnly(n){return Object(a.a)(this,void 0,void 0,(function*(){try{const t=n.name,e=n.view_only_content;yield this.alertService.showLoading();const o=yield this.walletService.getWalletFromMasterPublicKey(e.xpub),i=this.walletService.generateAddresses(o,0,n.params.index||this.globals.index);yield this.metaverseService.addAddresses(i),yield this.walletService.setupViewOnlyAccount(t,e),this.alertService.stopLoading(),this.router.navigate(["/loading"],{state:{data:{reset:!0}}})}catch(t){switch(console.error(t.message),this.alertService.stopLoading(),t.message){case"LOGIN_ACCOUNT.MESSAGE.ERR_DECRYPT_WALLET":this.alertService.showError("MESSAGE.PASSWORD_WRONG","");break;case"LOGIN_ACCOUNT.MESSAGE.ERR_ACCOUNT_NAME_UNKNOWN":this.alertService.showError("MESSAGE.ERR_ACCOUNT_NAME_UNKNOWN","");break;default:this.alertService.showError("LOGIN_ACCOUNT.MESSAGE.ERR_IMPORT_ACCOUNT",t.message)}}}))}}return n.\u0275fac=function(t){return new(t||n)(s.Rb(c.eb),s.Rb(r.h),s.Rb(l.a),s.Rb(b.a),s.Rb(d.a),s.Rb(u.a))},n.\u0275cmp=s.Lb({type:n,selectors:[["app-open"]],decls:32,vars:3,consts:[["slot","start"],["defaultHref","/"],["translate","LOGIN.OPEN.TITLE"],[1,"title"],["translate","LOGIN.OPEN.ACCESS_MY_WALLET",1,"center","title-text"],["class","center pointer","translate","LOGIN.OPEN.NO_WALLET_YET",3,"click",4,"ngIf"],["class","ion-text-center",4,"ngIf"],["size","12","size-md","3","size-lg","2","offset-lg","2"],["routerLink","/login/open/backup-words",1,"ion-text-center"],["name","receipt-outline",1,"icon"],["translate","LOGIN.OPEN.BACKUP_WORDS"],["translate","LOGIN.OPEN.BACKUP_WORDS_TEXT"],["size","12","size-md","3","size-lg","2",4,"ngIf"],["size","12","size-md","3","size-lg","2"],["routerLink","/login/open/qr",1,"ion-text-center"],["name","qr-code-outline",1,"icon"],["translate","LOGIN.OPEN.QR_CODE"],["translate","LOGIN.OPEN.QR_CODE_TEXT"],["routerLink","/login/open/xpub",1,"ion-text-center"],["name","eye-outline",1,"icon"],["translate","LOGIN.OPEN.PUBLIC_KEY"],["translate","LOGIN.OPEN.PUBLIC_KEY_TEXT"],["translate","LOGIN.OPEN.NO_WALLET_YET",1,"center","pointer",3,"click"],[1,"ion-text-center"],["size","12","size-md","4","offset-md","4"],[4,"ngFor","ngForOf"],["translate","LOGIN.OPEN.OR",1,"option"],["expand","full","fill","outline","shape","round","class","account-btn",3,"click",4,"ngIf"],["expand","full","fill","outline","shape","round",1,"account-btn",3,"click"],["slot","start","name","person",4,"ngIf"],["slot","start","name","eye",4,"ngIf"],["slot","start","name","person"],["slot","start","name","eye"],["routerLink","/login/open/file",1,"ion-text-center"],["name","document-outline",1,"icon"],["translate","LOGIN.OPEN.FILE"],["translate","LOGIN.OPEN.FILE_TEXT"]],template:function(n,t){1&n&&(s.Xb(0,"ion-header"),s.Xb(1,"ion-toolbar"),s.Xb(2,"ion-buttons",0),s.Sb(3,"ion-back-button",1),s.Wb(),s.Sb(4,"ion-title",2),s.Wb(),s.Wb(),s.Xb(5,"ion-content"),s.Xb(6,"ion-grid"),s.Xb(7,"ion-row",3),s.Sb(8,"h1",4),s.Gc(9,g,1,0,"h3",5),s.Wb(),s.Gc(10,S,4,1,"ion-row",6),s.Xb(11,"ion-row"),s.Sb(12,"br"),s.Xb(13,"ion-col",7),s.Xb(14,"ion-card",8),s.Xb(15,"ion-card-header"),s.Sb(16,"ion-icon",9),s.Sb(17,"ion-card-title",10),s.Wb(),s.Sb(18,"ion-card-content",11),s.Wb(),s.Wb(),s.Gc(19,m,6,0,"ion-col",12),s.Xb(20,"ion-col",13),s.Xb(21,"ion-card",14),s.Xb(22,"ion-card-header"),s.Sb(23,"ion-icon",15),s.Sb(24,"ion-card-title",16),s.Wb(),s.Sb(25,"ion-card-content",17),s.Wb(),s.Wb(),s.Xb(26,"ion-col",13),s.Xb(27,"ion-card",18),s.Xb(28,"ion-card-header"),s.Sb(29,"ion-icon",19),s.Sb(30,"ion-card-title",20),s.Wb(),s.Sb(31,"ion-card-content",21),s.Wb(),s.Wb(),s.Wb(),s.Wb(),s.Wb()),2&n&&(s.Fb(9),s.pc("ngIf",t.noAccount),s.Fb(1),s.pc("ngIf",!t.noAccount),s.Fb(9),s.pc("ngIf",!t.isApp))},directives:[c.u,c.X,c.j,c.f,c.g,c.V,h.a,c.r,c.t,c.K,o.m,c.q,c.k,c.fb,r.i,c.m,c.v,c.o,c.l,o.l,c.i],styles:[".icon[_ngcontent-%COMP%]{font-size:48px}ion-card[_ngcontent-%COMP%]{height:100%;margin:0}.option[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100px;font-size:large}.account-btn[_ngcontent-%COMP%]{text-transform:none}.title[_ngcontent-%COMP%]{margin-top:20px;margin-bottom:30px}.title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{width:100%}"]}),n})()},{path:"xpub",loadChildren:()=>e.e(54).then(e.bind(null,"zBF/")).then(n=>n.LoginXpubPageModule)},{path:"qr",loadChildren:()=>Promise.all([e.e(1),e.e(56)]).then(e.bind(null,"T2jK")).then(n=>n.OpenQrPageModule)},{path:"file",loadChildren:()=>e.e(55).then(e.bind(null,"vj+n")).then(n=>n.OpenFilePageModule)},{path:"backup-words",loadChildren:()=>e.e(53).then(e.bind(null,"QwAB")).then(n=>n.ImportBackupPageModule)}];let _=(()=>{class n{}return n.\u0275mod=s.Pb({type:n}),n.\u0275inj=s.Ob({factory:function(t){return new(t||n)},imports:[[r.j.forChild(N)],r.j]}),n})(),w=(()=>{class n{}return n.\u0275mod=s.Pb({type:n}),n.\u0275inj=s.Ob({factory:function(t){return new(t||n)},imports:[[o.c,i.e,c.Y,h.c.forChild(),_]]}),n})()}}]);