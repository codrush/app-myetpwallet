!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{ktNH:function(n,r,i){"use strict";i.r(r),i.d(r,"ConfirmPageModule",(function(){return U}));var s=i("ofXK"),a=i("3Pt+"),o=i("TEn/"),c=i("tyNb"),l=i("mrSG"),u=i("fXoL"),d=i("BZA/"),b=i("Fvwb"),h=i("3LUQ"),p=i("Dvla"),f=i("sYmb"),S=i("tmR0");function g(e,t){if(1&e&&u.Sb(0,"tx-item",16),2&e){var n=u.jc();u.pc("tx",n.displayedTx)("hexTx",n.hexTx)("mode",n.mode)("status",n.status)("multisig",n.multisig)("addresses",n.addresses)}}function I(e,t){1&e&&(u.Xb(0,"ion-item",17),u.Ic(1),u.kc(2,"translate"),u.Wb()),2&e&&(u.Fb(1),u.Jc(u.lc(2,1,"TX.INPUTS_NOT_ALL_MINE")))}var T=function(e){return{"error-border":e}};function v(e,t){if(1&e){var n=u.Yb();u.Xb(0,"ion-item",18),u.Sb(1,"ion-label",19),u.Xb(2,"ion-input",20),u.fc("ngModelChange",(function(e){return u.Ac(n),u.jc().passphrase=e})),u.Wb(),u.Wb()}if(2&e){var r=u.jc();u.pc("ngClass",u.tc(2,T,!r.validPassword(r.passphrase))),u.Fb(2),u.pc("ngModel",r.passphrase)}}function E(e,t){if(1&e){var n=u.Yb();u.Xb(0,"ion-item",21),u.Sb(1,"ion-label",22),u.Xb(2,"ion-toggle",23),u.fc("ngModelChange",(function(e){return u.Ac(n),u.jc().showAdvanced=e})),u.Wb(),u.Wb()}if(2&e){var r=u.jc();u.Fb(2),u.pc("ngModel",r.showAdvanced)}}function R(e,t){1&e&&(u.Xb(0,"ion-item",17),u.Sb(1,"span",27),u.Wb())}function m(e,t){if(1&e){var n=u.Yb();u.Xb(0,"ion-col"),u.Xb(1,"ion-button",24),u.fc("click",(function(){return u.Ac(n),u.jc(2).preview()})),u.Sb(2,"ion-icon",25),u.Sb(3,"span",26),u.Wb(),u.Gc(4,R,2,0,"ion-item",12),u.Wb()}if(2&e){var r=u.jc(2),i=u.yc(7);u.Fb(1),u.pc("disabled",!i.form.valid||!r.validPassword(r.passphrase)||"MULTISIG"==r.multisig.status&&r.multisig.selfSigned),u.Fb(3),u.pc("ngIf","MULTISIG"==r.multisig.status&&r.multisig.selfSigned)}}function N(e,t){if(1&e){var n=u.Yb();u.Xb(0,"ion-col"),u.Sb(1,"br"),u.Sb(2,"h4",28),u.Xb(3,"ion-item",29),u.Ic(4),u.Wb(),u.Xb(5,"ion-button",30),u.fc("click",(function(){u.Ac(n);var e=u.jc(2);return e.walletService.copy(e.signedTx,"tx")})),u.Sb(6,"ion-icon",31),u.Sb(7,"span",32),u.Wb(),u.Wb()}if(2&e){var r=u.jc(2);u.Fb(4),u.Jc(r.signedTx)}}function O(e,t){if(1&e&&(u.Xb(0,"div"),u.Xb(1,"ion-row"),u.Gc(2,m,5,2,"ion-col",15),u.Wb(),u.Xb(3,"ion-row"),u.Gc(4,N,8,1,"ion-col",15),u.Wb(),u.Wb()),2&e){var n=u.jc();u.Fb(2),u.pc("ngIf","SIGNED"!=n.status),u.Fb(2),u.pc("ngIf",n.signedTx)}}function x(e,t){if(1&e&&(u.Xb(0,"div"),u.Xb(1,"ion-row"),u.Xb(2,"ion-col"),u.Sb(3,"h4",33),u.Xb(4,"ion-item",29),u.Ic(5),u.Wb(),u.Wb(),u.Wb(),u.Wb()),2&e){var n=u.jc();u.Fb(5),u.Jc(n.hexTx)}}function w(e,t){if(1&e&&(u.Xb(0,"ion-button",39),u.Sb(1,"ion-icon",40),u.Sb(2,"span",41),u.Wb()),2&e){var n=u.jc(2),r=u.yc(7);u.pc("disabled",!r.form.valid||!n.validPassword(n.passphrase)||"MULTISIG"==n.multisig.status&&(n.multisig.selfSigned||n.multisig.info.m+1<n.multisig.info.n))}}function _(e,t){1&e&&(u.Xb(0,"ion-button",42),u.Sb(1,"ion-icon",40),u.Sb(2,"span",43),u.Wb())}function M(e,t){if(1&e){var n=u.Yb();u.Xb(0,"ion-row"),u.Xb(1,"ion-col"),u.Xb(2,"ion-button",34),u.fc("click",(function(){return u.Ac(n),u.jc().cancel()})),u.Sb(3,"ion-icon",35),u.Sb(4,"span",36),u.Wb(),u.Wb(),u.Xb(5,"ion-col"),u.Gc(6,w,3,1,"ion-button",37),u.Gc(7,_,3,0,"ion-button",38),u.Wb(),u.Wb()}if(2&e){var r=u.jc();u.Fb(6),u.pc("ngIf","SIGNED"!=r.status),u.Fb(1),u.pc("ngIf","SIGNED"==r.status)}}function A(e,t){1&e&&(u.Xb(0,"ion-button",49),u.Sb(1,"ion-icon",40),u.Sb(2,"span",43),u.Wb())}function y(e,t){if(1&e){var n=u.Yb();u.Xb(0,"ion-button",50),u.fc("click",(function(){u.Ac(n);var e=u.jc(2);return e.walletService.copy(e.hexTx,"tx")})),u.Sb(1,"ion-icon",31),u.Sb(2,"span",51),u.Wb()}}function C(e,t){if(1&e){var n=u.Yb();u.Xb(0,"ion-row"),u.Xb(1,"ion-col"),u.Xb(2,"ion-button",44),u.fc("click",(function(e){return u.Ac(n),u.jc().home(e)})),u.Sb(3,"ion-icon",45),u.Sb(4,"span",46),u.Wb(),u.Wb(),u.Xb(5,"ion-col"),u.Gc(6,A,3,0,"ion-button",47),u.Gc(7,y,3,0,"ion-button",48),u.Wb(),u.Wb()}if(2&e){var r=u.jc();u.Fb(6),u.pc("ngIf","SIGNED"==r.status),u.Fb(1),u.pc("ngIf","SIGNED"!==r.status)}}var F,G,X,k=[{path:"",component:(F=function(){function n(t,r,i,s,a){e(this,n),this.mvs=t,this.router=r,this.walletService=i,this.alertService=s,this.clipboardService=a,this.passphrase="",this.mode="default",this.allMyInputs=!0,this.addresses=[],this.multisig={},this.walletType="hasSeed",this.showAdvanced=!1,this.validPassword=function(e){return e.length>0}}var r,i,s;return r=n,(i=[{key:"ngOnInit",value:function(){}},{key:"ionViewDidEnter",value:function(){return Object(l.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n,r=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.hexTx=history.state.data?history.state.data.tx:void 0,void 0===this.hexTx?this.router.navigate(["account","portfolio"]):this.decodeAndOrganize(this.hexTx),e.next=3,this.mvs.getAddresses();case 3:return t=e.sent,e.next=6,this.walletService.getMultisigAddresses();case 6:n=e.sent,this.addresses=t.concat(n),this.walletService.hasSeed().then((function(e){r.walletType=e?"hasSeed":"readOnly"}));case 8:case"end":return e.stop()}}),e,this)})))}},{key:"cancel",value:function(){this.router.navigate(["account","portfolio"])}},{key:"home",value:function(e){this.router.navigate(["account","portfolio"])}},{key:"preview",value:function(){return Object(l.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.alertService.showLoading();case 2:return e.prev=2,e.next=5,this.sign();case 5:return t=e.sent,e.next=8,t.encode().toString("hex");case 8:this.signedTx=e.sent,this.hexTx=this.signedTx,this.decodeAndOrganize(this.signedTx),this.alertService.stopLoading(),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),this.alertService.stopLoading(),console.error(e.t0.message);case 17:case"end":return e.stop()}}),e,this,[[2,14]])})))}},{key:"decodeAndOrganize",value:function(e){return Object(l.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.mvs.decodeTx(e);case 2:return this.decodedTx=t.sent,t.next=5,this.mvs.organizeTx(JSON.parse(JSON.stringify(this.decodedTx)));case 5:this.displayedTx=t.sent,this.checkTxSignStatus(this.displayedTx);case 7:case"end":return t.stop()}}),t,this)})))}},{key:"send",value:function(){return Object(l.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.alertService.showLoading();case 3:return e.next=5,this.sign();case 5:return t=e.sent,e.next=8,this.broadcast(t);case 8:e.next=12;break;case 10:e.prev=10,e.t0=e.catch(0);case 12:case"end":return e.stop()}}),e,this,[[0,10]])})))}},{key:"broadcastOnly",value:function(e){return Object(l.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.alertService.showLoading();case 3:return t.next=5,this.broadcast(e);case 5:t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,this,[[0,7]])})))}},{key:"broadcast",value:function(e){return Object(l.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.mvs.send(e);case 3:n=t.sent,this.alertService.stopLoading(),this.router.navigate(["account","portfolio"]),this.alertService.showMessage("CONFIRM.CONFIRM_ALERT.TITLE","CONFIRM.CONFIRM_ALERT.SUBTITLE",n.hash,"CONFIRM.CONFIRM_ALERT.OK"),t.next=16;break;case 7:t.prev=7,t.t0=t.catch(0),t.t1=(this.alertService.stopLoading(),console.error(t.t0.message),t.t0.message),t.next="ERR_CONNECTION"===t.t1?12:"ERR_SIGN_TX"===t.t1?14:15;break;case 12:return this.alertService.showError("CONFIRM.MESSAGE.ERROR_SEND_TEXT",""),t.abrupt("break",16);case 14:return t.abrupt("break",16);case 15:throw this.alertService.showError("CONFIRM.MESSAGE.BROADCAST_TRANSACTION",t.t0.message),Error("ERR_BROADCAST_TX");case 16:case"end":return t.stop()}}),t,this,[[0,7]])})))}},{key:"sign",value:function(){var e=this;return"MULTISIG"===this.multisig.status?this.walletService.signMultisigTx(this.decodedTx.inputs[0].address,this.decodedTx,this.passphrase).catch((function(t){switch(console.error(t.message),e.alertService.stopLoading(),t.message){case"ERR_DECRYPT_WALLET":case"ERR_DECRYPT_WALLET_FROM_SEED":throw e.alertService.showError("CONFIRM.MESSAGE.PASSWORD_WRONG",""),Error("ERR_SIGN_TX");case"ERR_INSUFFICIENT_BALANCE":throw e.alertService.showError("CONFIRM.MESSAGE.INSUFFICIENT_BALANCE",""),Error("ERR_SIGN_TX");case"ERR_TOO_MANY_INPUTS":throw e.alertService.showErrorTranslated("CONFIRM.MESSAGE.ERROR_TOO_MANY_INPUTS","CONFIRM.MESSAGE.ERROR_TOO_MANY_INPUTS_TEXT"),Error("ERR_SIGN_TX");case"SIGN_ALREADY_INCL":throw e.alertService.showError("CONFIRM.MESSAGE.ALREADY_SIGN_TRANSACTION",""),Error("ERR_SIGN_TX");default:throw e.alertService.showError("CONFIRM.MESSAGE.SIGN_TRANSACTION",t.message),Error("ERR_SIGN_TX")}})):this.mvs.sign(this.decodedTx,this.passphrase,this.allMyInputs).catch((function(t){switch(console.error(t.message),e.alertService.stopLoading(),t.message){case"ERR_DECRYPT_WALLET":case"ERR_DECRYPT_WALLET_FROM_SEED":throw e.alertService.showError("CONFIRM.MESSAGE.PASSWORD_WRONG",""),Error("ERR_SIGN_TX");case"ERR_INSUFFICIENT_BALANCE":throw e.alertService.showError("CONFIRM.MESSAGE.INSUFFICIENT_BALANCE",""),Error("ERR_SIGN_TX");case"ERR_TOO_MANY_INPUTS":throw e.alertService.showErrorTranslated("CONFIRM.MESSAGE.ERROR_TOO_MANY_INPUTS","CONFIRM.MESSAGE.ERROR_TOO_MANY_INPUTS_TEXT"),Error("ERR_SIGN_TX");default:throw e.alertService.showError("CONFIRM.MESSAGE.SIGN_TRANSACTION",t.message),Error("ERR_SIGN_TX")}}))}},{key:"checkTxSignStatus",value:function(e){return Object(l.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n,r,i,s,a,o,c,l,u;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=!1,r=!1,i=!1,s=!1,a="",o=!1,c=0;case 2:if(!(c<e.inputs.length)){t.next=21;break}if("3"!==(l=e.inputs[c]).address[0]){t.next=16;break}return s=!0,this.multisig.current_nbr_sign=l.script.split("[").length-2,t.next=9,this.getMultisigInfo(l.address);case 9:return this.multisig.info=t.sent,t.next=12,this.mvs.getSignatureStatus(this.decodedTx,c,this.multisig.info.r,this.multisig.info.s);case 12:u=t.sent,this.multisig.selfSigned=u.targetSigned,u.complete?n=!0:r=!0,a&&a!==l.address?o=!0:a=l.address,t.next=17;break;case 16:i=!0,l.script?n=!0:r=!0;case 17:-1===this.addresses.indexOf(l.previous_output.address)&&(this.allMyInputs=!1);case 18:c++,t.next=2;break;case 21:this.status=n&&!r?"SIGNED":!n&&r?"UNSIGNED":"PARTIALLY",this.multisig.status=o?"MIX_MULTISIG":s&&!i?"MULTISIG":!s&&i?"NOT_MULTISIG":"PARTIALLY_MULTISIG";case 22:case"end":return t.stop()}}),t,this)})))}},{key:"getMultisigInfo",value:function(e){return Object(l.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.walletService.getMultisigsInfo();case 2:return n=t.sent,r={},t.abrupt("return",(n.forEach((function(t){t.a===e&&(r=t)})),r));case 5:case"end":return t.stop()}}),t,this)})))}},{key:"submit",value:function(){"SIGNED"===status?this.broadcastOnly(this.decodedTx):"hasSeed"===this.walletType?this.send():"readOnly"===this.walletType&&this.clipboardService.copyFromContent(this.hexTx)}}])&&t(r.prototype,i),s&&t(r,s),n}(),F.\u0275fac=function(e){return new(e||F)(u.Rb(d.a),u.Rb(c.h),u.Rb(b.a),u.Rb(h.a),u.Rb(p.b))},F.\u0275cmp=u.Lb({type:F,selectors:[["app-confirm"]],decls:32,vars:24,consts:[["slot","start"],["defaultHref","/account/portfolio"],["translate","CONFIRM.TITLE"],[3,"ngSubmit"],["signTxForm","ngForm"],["translate","CONFIRM.PAGE_TITLE"],["translate","TX.SELECT_MODE"],["name","mode","multiple","false",3,"ngModel","okText","cancelText","ngModelChange"],["selected","true","value","default"],["value","satoshi"],["value","hex"],[3,"tx","hexTx","mode","status","multisig","addresses",4,"ngIf"],["lines","none","class","wrong-input",4,"ngIf"],[3,"ngClass",4,"ngIf"],["class","toggle-input",4,"ngIf"],[4,"ngIf"],[3,"tx","hexTx","mode","status","multisig","addresses"],["lines","none",1,"wrong-input"],[3,"ngClass"],["color","primary","position","floating","translate","CONFIRM.PASSWORD"],["name","passphrase","type","password","required","",3,"ngModel","ngModelChange"],[1,"toggle-input"],["translate","CONFIRM.SHOW_ADVANCED"],["name","showAdvanced","checked","false",3,"ngModel","ngModelChange"],["expand","full","fill","outline","shape","round","color","primary",3,"disabled","click"],["slot","start","name","create"],["translate","CONFIRM.BUTTON.SIGN_ONLY"],["translate","MULTISIG_ALREADY_SIGNED"],["translate","CONFIRM.PREVIEW_SIGNED_TX"],[1,"manual-copy","breakwords"],["expand","full","fill","outline","shape","round",3,"click"],["slot","start","name","copy"],["translate","COPY"],["translate","CONFIRM.PREVIEW_UNSIGNED_TX"],["color","danger","fill","outline","shape","round","expand","full",3,"click"],["slot","start","name","close"],["translate","CONFIRM.BUTTON.CANCEL"],["type","submit","expand","full","fill","outline","shape","round","color","primary",3,"disabled",4,"ngIf"],["type","submit","expand","full","fill","outline","shape","round","color","primary",4,"ngIf"],["type","submit","expand","full","fill","outline","shape","round","color","primary",3,"disabled"],["slot","start","name","send"],["translate","CONFIRM.BUTTON.SIGN_AND_SEND"],["type","submit","expand","full","fill","outline","shape","round","color","primary"],["translate","CONFIRM.BUTTON.BROADCAST"],["color","secondary","expand","full",3,"click"],["slot","start","name","arrow-back"],["translate","CONFIRM.BUTTON.RETURN_HOME"],["type","submit","expand","full","color","secondary",4,"ngIf"],["type","submit","expand","full",3,"click",4,"ngIf"],["type","submit","expand","full","color","secondary"],["type","submit","expand","full",3,"click"],["translate","CONFIRM.BUTTON.COPY"]],template:function(e,t){1&e&&(u.Xb(0,"ion-header"),u.Xb(1,"ion-toolbar"),u.Xb(2,"ion-buttons",0),u.Sb(3,"ion-back-button",1),u.Wb(),u.Sb(4,"ion-title",2),u.Wb(),u.Wb(),u.Xb(5,"ion-content"),u.Xb(6,"form",3,4),u.fc("ngSubmit",(function(){return t.submit()})),u.Sb(8,"h2",5),u.Xb(9,"ion-item"),u.Sb(10,"ion-label",6),u.Xb(11,"ion-select",7),u.fc("ngModelChange",(function(e){return t.mode=e})),u.kc(12,"translate"),u.kc(13,"translate"),u.Xb(14,"ion-select-option",8),u.Ic(15),u.kc(16,"translate"),u.Wb(),u.Xb(17,"ion-select-option",9),u.Ic(18),u.kc(19,"translate"),u.Wb(),u.Xb(20,"ion-select-option",10),u.Ic(21),u.kc(22,"translate"),u.Wb(),u.Wb(),u.Wb(),u.Gc(23,g,1,6,"tx-item",11),u.Gc(24,I,3,3,"ion-item",12),u.Gc(25,v,3,4,"ion-item",13),u.Sb(26,"br"),u.Gc(27,E,3,1,"ion-item",14),u.Gc(28,O,5,2,"div",15),u.Gc(29,x,6,1,"div",15),u.Gc(30,M,8,2,"ion-row",15),u.Gc(31,C,8,2,"ion-row",15),u.Wb(),u.Wb()),2&e&&(u.Fb(11),u.qc("okText",u.lc(12,14,"OK")),u.qc("cancelText",u.lc(13,16,"CANCEL")),u.pc("ngModel",t.mode),u.Fb(4),u.Jc(u.lc(16,18,"TX.MODE.DEFAULT")),u.Fb(3),u.Jc(u.lc(19,20,"TX.MODE.SATOSHI")),u.Fb(3),u.Jc(u.lc(22,22,"TX.MODE.HEX")),u.Fb(2),u.pc("ngIf",t.displayedTx),u.Fb(1),u.pc("ngIf",!t.allMyInputs),u.Fb(1),u.pc("ngIf","SIGNED"!=t.status&&"hasSeed"==t.walletType),u.Fb(2),u.pc("ngIf","MULTISIG"!=t.multisig.status&&"readOnly"!==t.walletType),u.Fb(1),u.pc("ngIf",t.showAdvanced||"MULTISIG"==t.multisig.status),u.Fb(1),u.pc("ngIf","readOnly"==t.walletType),u.Fb(1),u.pc("ngIf","hasSeed"==t.walletType),u.Fb(1),u.pc("ngIf","readOnly"==t.walletType))},directives:[o.u,o.X,o.j,o.f,o.g,o.V,f.a,o.r,a.p,a.j,a.k,o.x,o.z,o.N,o.gb,a.i,a.l,o.O,s.m,S.a,s.k,o.w,o.hb,a.n,o.W,o.c,o.K,o.q,o.i,o.v],pipes:[f.d],styles:[""]}),F)}],L=((G=function t(){e(this,t)}).\u0275mod=u.Pb({type:G}),G.\u0275inj=u.Ob({factory:function(e){return new(e||G)},imports:[[c.j.forChild(k)],c.j]}),G),W=i("awj6"),D=i("iTUp"),U=((X=function t(){e(this,t)}).\u0275mod=u.Pb({type:X}),X.\u0275inj=u.Ob({factory:function(e){return new(e||X)},imports:[[s.c,a.e,o.Y,f.c.forChild(),D.a,W.a,L]]}),X)}}])}();