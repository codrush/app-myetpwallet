(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{QwAB:function(t,n,o){"use strict";o.r(n),o.d(n,"ImportBackupPageModule",(function(){return I}));var r=o("ofXK"),e=o("3Pt+"),i=o("TEn/"),s=o("tyNb"),c=o("fXoL"),a=o("BZA/"),l=o("sYmb");const b=function(t){return{nbr_words:t}};function d(t,n){if(1&t&&c.Sb(0,"h2",26),2&t){const t=c.jc();c.pc("translateParams",c.tc(1,b,24-t.amount_words))}}function h(t,n){1&t&&(c.Xb(0,"h2",27),c.Sb(1,"ion-icon",28),c.Ic(2),c.kc(3,"translate"),c.Wb()),2&t&&(c.Fb(2),c.Kc(" ",c.lc(3,1,"IMPORT_WALLET_MNEMONIC.WORDS_ALL_OK")," "))}function m(t,n){1&t&&(c.Xb(0,"h2",29),c.Sb(1,"ion-icon",30),c.Ic(2),c.kc(3,"translate"),c.Wb()),2&t&&(c.Fb(2),c.Kc(" ",c.lc(3,1,"IMPORT_WALLET_MNEMONIC.INCORRECT_MNEMONIC")," "))}function f(t,n){if(1&t&&(c.Xb(0,"h2",29),c.Sb(1,"ion-icon",30),c.Ic(2),c.kc(3,"translate"),c.Wb()),2&t){const t=c.jc();c.Fb(2),c.Lc(" ",c.lc(3,2,"IMPORT_WALLET_MNEMONIC.INCORRECT_WORD"),"",t.first_wrong+1," ")}}function w(t,n){1&t&&(c.Xb(0,"h2",29),c.Sb(1,"ion-icon",30),c.Ic(2),c.kc(3,"translate"),c.Wb()),2&t&&(c.Fb(2),c.Kc(" ",c.lc(3,1,"IMPORT_WALLET_MNEMONIC.WORDS_TOO_MANY")," "))}const g=function(t,n){return{"error-border":t,"valid-border":n}};function u(t,n){if(1&t){const t=c.Yb();c.Xb(0,"ion-row"),c.Xb(1,"ion-col"),c.Xb(2,"ion-item",31),c.Xb(3,"ion-input",32),c.fc("ngModelChange",(function(o){c.Ac(t);const r=n.$implicit;return c.jc().words[2*r]=o}))("ngModelChange",(function(){return c.Ac(t),c.jc().onChangePerWord()})),c.Wb(),c.Wb(),c.Wb(),c.Xb(4,"ion-col"),c.Xb(5,"ion-item",31),c.Xb(6,"ion-input",32),c.fc("ngModelChange",(function(o){c.Ac(t);const r=n.$implicit;return c.jc().words[2*r+1]=o}))("ngModelChange",(function(){return c.Ac(t),c.jc().onChangePerWord()})),c.Wb(),c.Wb(),c.Wb(),c.Wb()}if(2&t){const t=n.$implicit,o=c.jc();c.Fb(2),c.pc("ngClass",c.uc(8,g,!o.validword[2*t],o.validword[2*t])),c.Fb(1),c.rc("name","word",2*t,""),c.qc("placeholder",2*t+1),c.pc("ngModel",o.words[2*t]),c.Fb(2),c.pc("ngClass",c.uc(11,g,!o.validword[2*t+1],o.validword[2*t+1])),c.Fb(1),c.rc("name","word",2*t+1,""),c.qc("placeholder",2*t+2),c.pc("ngModel",o.words[2*t+1])}}function _(t,n){1&t&&c.Sb(0,"h4",33)}function M(t,n){1&t&&c.Sb(0,"h4",34)}const p=function(t){return{"error-border":t}},O=function(){return[0,1,2,3,4,5,6,7,8,9,10,11]},T=[{path:"",component:(()=>{class t{constructor(t,n,o){this.mvs=t,this.platform=n,this.router=o,this.words={},this.validword={},this.amount_words=0,this.first_wrong=0,this.validmnemonic=!1;for(let r=0;r<24;r++)this.words[r]="",this.validword[r]=!1;this.wordslist=t.getdictionary("EN")}ngOnInit(){}clear(){for(let t=0;t<24;t++)this.words[t]="",this.validword[t]=!1;this.all_words="",this.amount_words=0,this.first_wrong=0,this.validmnemonic=!1}import(){let t="";Object.keys(this.words).forEach(n=>{this.words[n]=this.words[n].trim(),t+=String(this.words[n]).toLowerCase()+" "}),t=t.trim(),this.router.navigate(["login","passphrase"],{state:{data:{mnemonic:t}}})}onChange(){this.fromStringToArray(this.all_words).then(t=>this.checkWords(t)).then(t=>this.validMnemonic(t)).catch(t=>{console.log("onChange did not pass",t)})}onChangePerWord(){this.fromObjectToArray(this.words).then(t=>this.checkWords(t)).then(t=>this.validMnemonic(t)).catch(t=>{console.log("onChangePerWord did not pass",t)})}fromStringToArray(t){let n=t.trim();n=n.toLowerCase(),n=n.replace(/\s{2,}/g," ");const o=n.split(" ");return new Promise((n,r)=>{if(t){this.words=[];for(let t=0;t<24;t++)this.words[t]=o[t]?o[t]:"";n(o)}else this.clear()})}fromObjectToArray(t){let n="";const o=[];return new Promise((r,e)=>{if(t){for(let r=0;r<24;r++)t[r]&&(n+=t[r].toLowerCase()+" ",o.push(t[r].toLowerCase()));this.all_words=n.trim(),r(o)}else this.clear()})}checkWords(t){return new Promise((n,o)=>{if(t){this.first_wrong=-1,this.amount_words=t.length;for(let n=0;n<t.length;n++)this.validword[n]=-1!==this.wordslist.indexOf(t[n]),-1!==this.first_wrong||this.validword[n]||(this.first_wrong=n);n([this.amount_words,this.first_wrong])}else this.clear()})}validMnemonic(t){return new Promise((n,o)=>{let r=t[0],e=t[1],i=this.all_words.trim();i=i.toLowerCase(),i=i.replace(/\s{2,}/g," "),24===r&&(-1===e||e>=24)?(this.validmnemonic=this.mvs.checkmnemonic(i,this.wordslist),n(this.validmnemonic)):(this.validmnemonic=!1,n(this.validmnemonic))})}}return t.\u0275fac=function(n){return new(n||t)(c.Rb(a.a),c.Rb(i.eb),c.Rb(s.h))},t.\u0275cmp=c.Lb({type:t,selectors:[["app-import-backup"]],decls:45,vars:20,consts:[["slot","start"],["defaultHref","/login/open"],["translate","IMPORT_WALLET_MNEMONIC.TITLE"],["size-md","12","size-lg","6","offset-lg","3"],["translate","IMPORT_WALLET_MNEMONIC.TWO_WAYS_TITLE",1,"center-text","info"],["translate","IMPORT_WALLET_MNEMONIC.VIA_TEXTBOX",1,"center-text","info"],[1,"textareaCard",3,"ngClass"],["fz-elastic","","rows","3","type","text","name","all_words",1,"textbox",3,"ngModel","ngModelChange"],["translate","IMPORT_WALLET_MNEMONIC.WORDS_REMAINING",3,"translateParams",4,"ngIf"],["class","valid-input",4,"ngIf"],["class","wrong-input",4,"ngIf"],[1,"center-text","info"],["item-center","",1,"center-text"],[3,"ngSubmit"],["importForm","ngForm"],[4,"ngFor","ngForOf"],[1,"buttons"],["size","6"],["color","danger","expand","full","fill","outline","shape","round","type","button",3,"click"],["slot","start","name","trash"],["translate","IMPORT_WALLET_MNEMONIC.RESET"],["color","secondary","expand","full","fill","outline","shape","round","type","submit",3,"disabled"],["slot","start","name","download"],["translate","IMPORT_WALLET_MNEMONIC.IMPORT_BUTTON"],["class","center-text wallet-create","translate","IMPORT_WALLET_MNEMONIC.BOTTOM_TEXT",4,"ngIf"],["class","center-text wallet-create","translate","IMPORT_WALLET_MNEMONIC.BOTTOM_TEXT_MOBILE",4,"ngIf"],["translate","IMPORT_WALLET_MNEMONIC.WORDS_REMAINING",3,"translateParams"],[1,"valid-input"],["name","checkmark"],[1,"wrong-input"],["name","close"],[3,"ngClass"],["type","text","large","","required","",3,"name","placeholder","ngModel","ngModelChange"],["translate","IMPORT_WALLET_MNEMONIC.BOTTOM_TEXT",1,"center-text","wallet-create"],["translate","IMPORT_WALLET_MNEMONIC.BOTTOM_TEXT_MOBILE",1,"center-text","wallet-create"]],template:function(t,n){if(1&t&&(c.Xb(0,"ion-header"),c.Xb(1,"ion-toolbar"),c.Xb(2,"ion-buttons",0),c.Sb(3,"ion-back-button",1),c.Wb(),c.Sb(4,"ion-title",2),c.Wb(),c.Wb(),c.Xb(5,"ion-content"),c.Xb(6,"ion-grid"),c.Xb(7,"ion-row"),c.Xb(8,"ion-col",3),c.Xb(9,"ion-row"),c.Sb(10,"h2",4),c.Wb(),c.Xb(11,"ion-row"),c.Sb(12,"h2",5),c.Wb(),c.Xb(13,"ion-row"),c.Xb(14,"ion-item",6),c.Xb(15,"ion-textarea",7),c.fc("ngModelChange",(function(t){return n.all_words=t}))("ngModelChange",(function(){return n.onChange()})),c.Wb(),c.Wb(),c.Wb(),c.Xb(16,"ion-row"),c.Gc(17,d,1,3,"h2",8),c.Gc(18,h,4,3,"h2",9),c.Gc(19,m,4,3,"h2",10),c.Gc(20,f,4,4,"h2",10),c.Gc(21,w,4,3,"h2",10),c.Wb(),c.Xb(22,"ion-row"),c.Xb(23,"h2",11),c.Ic(24),c.kc(25,"translate"),c.Wb(),c.Wb(),c.Xb(26,"ion-row"),c.Xb(27,"h2",12),c.Ic(28),c.kc(29,"translate"),c.Wb(),c.Wb(),c.Xb(30,"form",13,14),c.fc("ngSubmit",(function(){return n.import()})),c.Gc(32,u,7,14,"ion-row",15),c.Xb(33,"ion-row",16),c.Xb(34,"ion-col",17),c.Xb(35,"ion-button",18),c.fc("click",(function(){return n.clear()})),c.Sb(36,"ion-icon",19),c.Sb(37,"span",20),c.Wb(),c.Wb(),c.Xb(38,"ion-col",17),c.Xb(39,"ion-button",21),c.Sb(40,"ion-icon",22),c.Sb(41,"span",23),c.Wb(),c.Wb(),c.Wb(),c.Xb(42,"ion-row"),c.Gc(43,_,1,0,"h4",24),c.Gc(44,M,1,0,"h4",25),c.Wb(),c.Wb(),c.Wb(),c.Wb(),c.Wb(),c.Wb()),2&t){const t=c.yc(31);c.Fb(14),c.pc("ngClass",c.tc(17,p,!n.validmnemonic)),c.Fb(1),c.pc("ngModel",n.all_words),c.Fb(2),c.pc("ngIf",n.amount_words<24),c.Fb(1),c.pc("ngIf",n.validmnemonic),c.Fb(1),c.pc("ngIf",24==n.amount_words&&(-1==n.first_wrong||n.first_wrong>=24)&&!n.validmnemonic),c.Fb(1),c.pc("ngIf",24==n.amount_words&&-1!==n.first_wrong&&n.first_wrong<24),c.Fb(1),c.pc("ngIf",n.amount_words>24),c.Fb(3),c.Kc("-",c.lc(25,13,"IMPORT_WALLET_MNEMONIC.OR"),"-"),c.Fb(4),c.Jc(c.lc(29,15,"IMPORT_WALLET_MNEMONIC.WORD_BY_WORD")),c.Fb(4),c.pc("ngForOf",c.sc(19,O)),c.Fb(7),c.pc("disabled",!t.form.valid||!n.validmnemonic),c.Fb(4),c.pc("ngIf",!n.platform.is("mobile")),c.Fb(1),c.pc("ngIf",n.platform.is("mobile"))}},directives:[i.u,i.X,i.j,i.f,i.g,i.V,l.a,i.r,i.t,i.K,i.q,i.x,r.k,i.U,i.hb,e.i,e.l,r.m,e.p,e.j,e.k,r.l,i.i,i.v,i.w,e.n],pipes:[l.d],styles:[".buttons[_ngcontent-%COMP%]{margin-top:25px;margin-bottom:25px}.center-text[_ngcontent-%COMP%]{text-align:center;margin:auto}.wallet-create[_ngcontent-%COMP%]{margin-bottom:50px}.info[_ngcontent-%COMP%]{margin-top:20px!important}.textareaCard[_ngcontent-%COMP%]{font-size:1.3em;width:100%}"]}),t})()}];let W=(()=>{class t{}return t.\u0275mod=c.Pb({type:t}),t.\u0275inj=c.Ob({factory:function(n){return new(n||t)},imports:[[s.j.forChild(T)],s.j]}),t})(),I=(()=>{class t{}return t.\u0275mod=c.Pb({type:t}),t.\u0275inj=c.Ob({factory:function(n){return new(n||t)},imports:[[r.c,e.e,i.Y,l.c.forChild(),W]]}),t})()}}]);