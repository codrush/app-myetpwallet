(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{iTUp:function(n,t,s){"use strict";s.d(t,"a",(function(){return e}));var a=s("ofXK"),i=s("fXoL");let e=(()=>{class n{}return n.\u0275mod=i.Pb({type:n}),n.\u0275inj=i.Ob({factory:function(t){return new(t||n)},imports:[[a.c]]}),n})()},q5gJ:function(n,t,s){"use strict";s.d(t,"a",(function(){return i}));var a=s("fXoL");let i=(()=>{class n{transform(n,t){return(n/Math.pow(10,t)).toLocaleString(void 0,{maximumFractionDigits:t})}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275pipe=a.Qb({name:"format",type:n,pure:!0}),n})()},ugLx:function(n,t,s){"use strict";s.r(t),s.d(t,"MultisigPageModule",(function(){return w}));var a=s("ofXK"),i=s("3Pt+"),e=s("TEn/"),o=s("tyNb"),c=s("fXoL"),r=s("BZA/"),b=s("Fvwb"),l=s("sYmb"),d=s("q5gJ");function u(n,t){if(1&n&&(c.Xb(0,"span"),c.Ic(1),c.kc(2,"format"),c.Wb()),2&n){const n=c.jc().$implicit,t=c.jc();c.Fb(1),c.Kc("",c.mc(2,1,t.addressBalancesObject[n.a].ETP.available,t.addressBalancesObject[n.a].ETP.decimals)," ETP")}}function f(n,t){1&n&&(c.Xb(0,"span"),c.Ic(1,"0 ETP"),c.Wb())}const p=function(n){return{symbol:n}};function m(n,t){if(1&n){const n=c.Yb();c.Xb(0,"ion-row",17),c.Xb(1,"ion-col"),c.Xb(2,"div",18),c.Ic(3),c.kc(4,"format"),c.Wb(),c.Wb(),c.Xb(5,"ion-col"),c.Xb(6,"ion-button",21),c.fc("click",(function(){c.Ac(n);const s=t.$implicit,a=c.jc(2).$implicit;return c.jc().gotoMultisigTransfer(s.name,a.a)})),c.Sb(7,"ion-icon",22),c.Sb(8,"span",30),c.Wb(),c.Wb(),c.Wb()}if(2&n){const n=t.$implicit;c.Fb(3),c.Lc("",c.mc(4,3,n.available,n.decimals)," ",n.name,""),c.Fb(5),c.pc("translateParams",c.tc(6,p,n.name))}}function h(n,t){if(1&n&&(c.Xb(0,"div"),c.Gc(1,m,9,8,"ion-row",29),c.Wb()),2&n){const n=c.jc().$implicit,t=c.jc();c.Fb(1),c.pc("ngForOf",t.addressbalances[n.a])}}const g=function(n){return{"self-publickey":n}};function I(n,t){if(1&n&&(c.Xb(0,"div",31),c.Ic(1),c.Wb()),2&n){const n=t.$implicit,s=c.jc().$implicit;c.pc("ngClass",c.tc(2,g,n==s.s)),c.Fb(1),c.Jc(n)}}function X(n,t){if(1&n){const n=c.Yb();c.Xb(0,"ion-card",12),c.Xb(1,"ion-grid"),c.Xb(2,"ion-row"),c.Xb(3,"ion-col"),c.Xb(4,"ion-item"),c.Xb(5,"ion-grid"),c.Xb(6,"ion-row"),c.Xb(7,"ion-col"),c.Xb(8,"h1",13),c.Xb(9,"span",14),c.Ic(10),c.Wb(),c.Xb(11,"ion-button",15),c.fc("click",(function(){c.Ac(n);const s=t.$implicit;return c.jc().show(s.a)})),c.Sb(12,"img",16),c.Wb(),c.Wb(),c.Wb(),c.Wb(),c.Xb(13,"ion-row",17),c.Xb(14,"ion-col"),c.Xb(15,"div",18),c.Sb(16,"span",19),c.Ic(17,": "),c.Gc(18,u,3,4,"span",20),c.Gc(19,f,2,0,"span",20),c.Wb(),c.Wb(),c.Xb(20,"ion-col"),c.Xb(21,"ion-button",21),c.fc("click",(function(){c.Ac(n);const s=t.$implicit;return c.jc().gotoMultisigTransfer("ETP",s.a)})),c.Sb(22,"ion-icon",22),c.Sb(23,"span",23),c.Wb(),c.Wb(),c.Wb(),c.Gc(24,h,2,1,"div",20),c.Wb(),c.Wb(),c.Wb(),c.Wb(),c.Xb(25,"ion-row"),c.Xb(26,"ion-item"),c.Xb(27,"ion-grid"),c.Xb(28,"ion-row"),c.Sb(29,"h2",24),c.Wb(),c.Xb(30,"ion-row"),c.Sb(31,"ion-col",25),c.Xb(32,"ion-col"),c.Ic(33),c.Wb(),c.Wb(),c.Xb(34,"ion-row"),c.Sb(35,"ion-col",26),c.Xb(36,"ion-col"),c.Ic(37),c.Wb(),c.Wb(),c.Xb(38,"ion-row"),c.Sb(39,"ion-col",27),c.Xb(40,"ion-col"),c.Gc(41,I,2,4,"div",28),c.Wb(),c.Wb(),c.Wb(),c.Wb(),c.Wb(),c.Wb(),c.Wb()}if(2&n){const n=t.$implicit,s=c.jc();c.Fb(10),c.Jc(n.a),c.Fb(8),c.pc("ngIf",s.addressBalancesObject[n.a]&&s.addressBalancesObject[n.a].ETP),c.Fb(1),c.pc("ngIf",!s.addressBalancesObject[n.a]||!s.addressBalancesObject[n.a].ETP),c.Fb(5),c.pc("ngIf",s.addressbalances[n.a]),c.Fb(9),c.Jc(n.n),c.Fb(4),c.Jc(n.m),c.Fb(4),c.pc("ngForOf",n.k)}}const W=[{path:"",component:(()=>{class n{constructor(n,t,s,a){this.router=n,this.mvs=t,this.wallet=s,this.modalCtrl=a,this.no_address=!0,this.addressbalances={},this.addressBalancesObject={},this.format=(n,t)=>n/Math.pow(10,t)}ngOnInit(){this.addressbalances={},this.wallet.getMultisigsInfo().then(n=>{this.multisigs=n,n&&n.length>0&&(this.no_address=!1)})}showBalances(){return this.wallet.getMultisigAddresses().then(n=>(this.address=n[0],this.addresses=n,this.mvs.getAddressBalances().then(n=>{this.addressBalancesObject=n,this.addressbalances={},Object.keys(n).map(t=>{void 0===this.addressbalances[t]&&(this.addressbalances[t]=[]),Object.keys(n[t].MST).map(s=>{const a=n[t].MST[s];a.name=s,this.addressbalances[t].push(a)})})})))}ionViewDidEnter(){this.mvs.getAddresses().then(n=>{Array.isArray(n)&&n.length?this.showBalances():this.router.navigate(["/"])})}gotoMultisigTransfer(n,t){this.router.navigate(["account","advanced","multisig","transfer",t,n])}show(n){}}return n.\u0275fac=function(t){return new(t||n)(c.Rb(o.h),c.Rb(r.a),c.Rb(b.a),c.Rb(e.bb))},n.\u0275cmp=c.Lb({type:n,selectors:[["app-multisig"]],decls:15,vars:1,consts:[["slot","start"],["defaultHref","/account/advanced"],["translate","MULTISIG.HEADLINE"],["slot","end"],["routerLink","./add"],["slot","icon-only","name","add"],["padding",""],["translate","MULTISIG.WARNING_MULTISIG_TITLE"],["translate","MULTISIG.WARNING_MULTISIG_MESSAGE"],["translate","MULTISIG.INFORMATION"],["translate","MULTISIG.INFORMATION2"],["class","avatar-card",4,"ngFor","ngForOf"],[1,"avatar-card"],[1,"address","display-overflow"],[1,"address-text"],["id","qrcode",1,"qrcode-btn",3,"click"],["src","/assets/images/qrcode.png"],[1,"asset-balance"],[1,"asset-balance-text"],["translate","ACCOUNT.AVAILABLE"],[4,"ngIf"],["fill","outline","shape","round","color","danger",1,"right-buttons",3,"click"],["slot","start","name","send"],["translate","MULTISIG.SEND_ETP"],["translate","MULTISIG.DETAILS"],["translate","MULTISIG.NBR_PERSON"],["translate","MULTISIG.SIGN_REQ"],["translate","MULTISIG.PUBLIC_KEYS"],["class","public-key manual-copy display-overflow",3,"ngClass",4,"ngFor","ngForOf"],["class","asset-balance",4,"ngFor","ngForOf"],["translate","MULTISIG.SEND",3,"translateParams"],[1,"public-key","manual-copy","display-overflow",3,"ngClass"]],template:function(n,t){1&n&&(c.Xb(0,"ion-header"),c.Xb(1,"ion-toolbar"),c.Xb(2,"ion-buttons",0),c.Sb(3,"ion-back-button",1),c.Wb(),c.Sb(4,"ion-title",2),c.Xb(5,"ion-buttons",3),c.Xb(6,"ion-button",4),c.Sb(7,"ion-icon",5),c.Wb(),c.Wb(),c.Wb(),c.Wb(),c.Xb(8,"ion-content",6),c.Xb(9,"ion-grid"),c.Sb(10,"h3",7),c.Sb(11,"p",8),c.Sb(12,"p",9),c.Sb(13,"p",10),c.Gc(14,X,42,7,"ion-card",11),c.Wb(),c.Wb()),2&n&&(c.Fb(14),c.pc("ngForOf",t.multisigs))},directives:[e.u,e.X,e.j,e.f,e.g,e.V,l.a,e.i,e.fb,o.i,e.v,e.r,e.t,a.l,e.k,e.K,e.q,e.x,a.m,a.k],pipes:[d.a],styles:[""]}),n})()},{path:"add",loadChildren:()=>Promise.all([s.e(1),s.e(33)]).then(s.bind(null,"XZnt")).then(n=>n.AddPageModule)},{path:"transfer",loadChildren:()=>Promise.all([s.e(1),s.e(34)]).then(s.bind(null,"Suoh")).then(n=>n.TransferPageModule)}];let S=(()=>{class n{}return n.\u0275mod=c.Pb({type:n}),n.\u0275inj=c.Ob({factory:function(t){return new(t||n)},imports:[[o.j.forChild(W)],o.j]}),n})();var T=s("iTUp");let w=(()=>{class n{}return n.\u0275mod=c.Pb({type:n}),n.\u0275inj=c.Ob({factory:function(t){return new(t||n)},imports:[[a.c,i.e,e.Y,l.c.forChild(),T.a,S]]}),n})()}}]);