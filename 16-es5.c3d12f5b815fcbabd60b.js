!function(){function e(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var t=[],n=!0,i=!1,a=void 0;try{for(var o,c=e[Symbol.iterator]();!(n=(o=c.next()).done)&&(t.push(o.value),!r||t.length!==r);n=!0);}catch(s){i=!0,a=s}finally{try{n||null==c.return||c.return()}finally{if(i)throw a}}return t}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function t(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function n(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,r,t){return r&&n(e.prototype,r),t&&n(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{LB3o:function(e,r,n){"use strict";n.d(r,"a",(function(){return l}));var a=n("mrSG"),o=n("fXoL"),c=n("tk/3"),s=n("e8h1"),l=function(){var e=function(){function e(r,n){t(this,e),this.http=r,this.storage=n,this.URL="https://bridge.mvs.org/api"}return i(e,[{key:"getBridgeRate",value:function(e,r){return this.http.get("".concat(this.URL,"/rate/").concat(e,"/").concat(r))}},{key:"getBridgePairs",value:function(){return this.http.get(this.URL+"/pairs")}},{key:"getOrder",value:function(e){return this.http.get("".concat(this.URL,"/order/").concat(e))}},{key:"createOrder",value:function(e){return this.http.post(this.URL+"/order",e)}},{key:"getOrders",value:function(){return Object(a.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.storage.get("etp_bridge_orders");case 2:if(e.t0=e.sent,e.t0){e.next=5;break}e.t0=[];case 5:return e.abrupt("return",e.t0);case 6:case"end":return e.stop()}}),e,this)})))}},{key:"setOrders",value:function(e){return this.storage.set("etp_bridge_orders",e)}},{key:"saveOrder",value:function(e){var r=this;return this.getOrders().then((function(t){var n=!1;return t=t.map((function(r){return r.id===e.id?(n=!0,e):r})),n||t.push(e),r.setOrders(t)}))}},{key:"isMetaverseSymbol",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return-1!==["ETP"].indexOf(e)}}]),e}();return e.\u0275fac=function(r){return new(r||e)(o.bc(c.a),o.bc(s.b))},e.\u0275prov=o.Nb({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()},VMct:function(r,n,a){"use strict";a.r(n),a.d(n,"SwftPageModule",(function(){return pe}));var o=a("ofXK"),c=a("3Pt+"),s=a("TEn/"),l=a("tyNb"),d=a("mrSG"),b=a("gddX"),u=a("UwpU"),m=a("fXoL"),p=a("BZA/"),f=a("LB3o"),v=a("3LUQ"),S=a("OaWH"),g=a("Fvwb"),h=a("Dvla"),y=a("2g2N"),F=a("sYmb"),O=a("JvOL"),T=a("q5gJ"),W=["quantityInput"];function A(e,r){1&e&&m.Sb(0,"ion-spinner",28)}function R(e,r){1&e&&m.Sb(0,"h4",29)}var P=function(e){return{rate:e}};function E(e,r){if(1&e&&m.Sb(0,"div",56),2&e){var t=m.jc(2);m.pc("translateParams",m.tc(1,P,t.bridgeRate.instantRate))}}function I(e,r){1&e&&m.Sb(0,"ion-spinner",28)}function X(e,r){if(1&e&&(m.Xb(0,"ion-select-option",57),m.Ic(1),m.Wb()),2&e){var t=r.$implicit;m.qc("value",t),m.Fb(1),m.Kc("",t," ")}}var k=function(e,r,t,n){return{min:e,max:r,symbol:t,fee:n}};function C(e,r){if(1&e&&m.Sb(0,"div",58),2&e){var t=m.jc(2);m.pc("translateParams",m.wc(1,k,t.bridgeRate.depositMin,t.bridgeRate.depositMax,t.createOrderParameters.depositSymbol,100*t.bridgeRate.depositCoinFeeRate))}}function M(e,r){if(1&e&&(m.Xb(0,"ion-select-option",57),m.Ic(1),m.kc(2,"format"),m.Wb()),2&e){var t=r.$implicit;m.qc("value",t.address),m.Fb(1),m.Lc(" ",t.identifier," - ",m.mc(2,3,t.balance,8)," ETP")}}var w=function(e){return{"error-border":e}},_=function(e){return{symbol:e}};function j(e,r){if(1&e){var t=m.Yb();m.Xb(0,"ion-item",20),m.Sb(1,"ion-label",59),m.Xb(2,"ion-select",60),m.fc("ngModelChange",(function(e){return m.Ac(t),m.jc(2).createOrderParameters.refundAddress=e})),m.kc(3,"translate"),m.kc(4,"translate"),m.Gc(5,M,3,6,"ion-select-option",38),m.Wb(),m.Wb()}if(2&e){var n=m.jc(2);m.pc("ngClass",m.tc(10,w,!n.validRefundAddress())),m.Fb(1),m.pc("translateParams",m.tc(12,_,n.createOrderParameters.depositSymbol)),m.Fb(1),m.qc("okText",m.lc(3,6,"OK")),m.qc("cancelText",m.lc(4,8,"CANCEL")),m.pc("ngModel",n.createOrderParameters.refundAddress),m.Fb(3),m.pc("ngForOf",n.addressbalances)}}function x(e,r){if(1&e){var t=m.Yb();m.Xb(0,"ion-item",20),m.Sb(1,"ion-label",61),m.Xb(2,"ion-input",62),m.fc("ngModelChange",(function(e){return m.Ac(t),m.jc(2).createOrderParameters.refundAddress=e})),m.Wb(),m.Wb()}if(2&e){var n=m.jc(2);m.pc("ngClass",m.tc(3,w,!n.validRefundAddress())),m.Fb(1),m.pc("translateParams",m.tc(5,_,n.createOrderParameters.depositSymbol)),m.Fb(1),m.pc("ngModel",n.createOrderParameters.refundAddress)}}function D(e,r){if(1&e&&(m.Xb(0,"ion-select-option",57),m.Ic(1),m.Wb()),2&e){var t=r.$implicit;m.qc("value",t),m.Fb(1),m.Kc("",t," ")}}var B=function(e,r){return{fee:e,symbol:r}};function L(e,r){if(1&e&&m.Sb(0,"div",63),2&e){var t=m.jc(2);m.pc("translateParams",m.uc(1,B,t.bridgeRate.receiveCoinFee,t.createOrderParameters.receiveSymbol))}}function N(e,r){if(1&e&&(m.Xb(0,"ion-select-option",57),m.Ic(1),m.kc(2,"format"),m.Wb()),2&e){var t=r.$implicit;m.qc("value",t.address),m.Fb(1),m.Lc(" ",t.identifier," - ",m.mc(2,3,t.balance,8)," ETP")}}function G(e,r){if(1&e){var t=m.Yb();m.Xb(0,"ion-item",20),m.Sb(1,"ion-label",64),m.Xb(2,"ion-select",65),m.fc("ngModelChange",(function(e){return m.Ac(t),m.jc(2).createOrderParameters.receiveAddress=e})),m.kc(3,"translate"),m.kc(4,"translate"),m.Gc(5,N,3,6,"ion-select-option",38),m.Wb(),m.Wb()}if(2&e){var n=m.jc(2);m.pc("ngClass",m.tc(10,w,!n.validRecipientAddress())),m.Fb(1),m.pc("translateParams",m.tc(12,_,n.createOrderParameters.receiveSymbol)),m.Fb(1),m.qc("okText",m.lc(3,6,"OK")),m.qc("cancelText",m.lc(4,8,"CANCEL")),m.pc("ngModel",n.createOrderParameters.receiveAddress),m.Fb(3),m.pc("ngForOf",n.addressbalances)}}function U(e,r){if(1&e){var t=m.Yb();m.Xb(0,"ion-item",20),m.Sb(1,"ion-label",66),m.Xb(2,"ion-input",67),m.fc("ngModelChange",(function(e){return m.Ac(t),m.jc(2).createOrderParameters.receiveAddress=e})),m.Wb(),m.Wb()}if(2&e){var n=m.jc(2);m.pc("ngClass",m.tc(3,w,!n.validRecipientAddress())),m.Fb(1),m.pc("translateParams",m.tc(5,_,n.createOrderParameters.receiveSymbol)),m.Fb(1),m.pc("ngModel",n.createOrderParameters.receiveAddress)}}var $=function(){return{"valid-border":!0}},q=function(e,r){return{"error-border":e,"valid-border":r}};function Y(e,r){if(1&e){var t=m.Yb();m.Xb(0,"form",30,31),m.fc("ngSubmit",(function(){return m.Ac(t),m.jc().createOrder()}))("keyup.enter",(function(){return m.Ac(t),m.jc().createOrder()})),m.Xb(2,"ion-card",19),m.Xb(3,"div",32),m.Xb(4,"ion-icon",33),m.fc("click",(function(){return m.Ac(t),m.jc().switch()})),m.Wb(),m.Gc(5,E,1,3,"div",34),m.Wb(),m.Gc(6,I,1,0,"ion-spinner",11),m.Xb(7,"ion-row"),m.Xb(8,"ion-col",35),m.Xb(9,"ion-item",20),m.Xb(10,"ion-label",36),m.Ic(11),m.kc(12,"translate"),m.Wb(),m.Xb(13,"ion-select",37),m.fc("ngModelChange",(function(e){return m.Ac(t),m.jc().changeDepositSymbol(e)})),m.kc(14,"translate"),m.kc(15,"translate"),m.Gc(16,X,2,2,"ion-select-option",38),m.Wb(),m.Wb(),m.Xb(17,"ion-item",20),m.Sb(18,"ion-label",39),m.Xb(19,"ion-input",40),m.fc("ngModelChange",(function(e){return m.Ac(t),m.jc().createOrderParameters.depositAmount=e}))("ngModelChange",(function(){return m.Ac(t),m.jc().updateReceiveAmount()})),m.Wb(),m.Wb(),m.Gc(20,C,1,6,"div",41),m.Gc(21,j,6,14,"ion-item",42),m.Gc(22,x,3,7,"ion-item",42),m.Wb(),m.Xb(23,"ion-col",35),m.Xb(24,"ion-item",20),m.Sb(25,"ion-label",43),m.Xb(26,"ion-select",44),m.fc("ngModelChange",(function(e){return m.Ac(t),m.jc().changeReceiveSymbol(e)})),m.kc(27,"translate"),m.kc(28,"translate"),m.Xb(29,"ion-select-option",45),m.Ic(30,"ETP"),m.Wb(),m.Gc(31,D,2,2,"ion-select-option",38),m.Wb(),m.Wb(),m.Xb(32,"ion-item",20),m.Sb(33,"ion-label",46),m.Xb(34,"ion-input",47),m.fc("ngModelChange",(function(e){return m.Ac(t),m.jc().createOrderParameters.receiveAmount=e})),m.Wb(),m.Wb(),m.Gc(35,L,1,4,"div",48),m.Gc(36,G,6,14,"ion-item",42),m.Gc(37,U,3,7,"ion-item",42),m.Wb(),m.Wb(),m.Xb(38,"ion-row",49),m.Xb(39,"ion-col"),m.Xb(40,"ion-button",50),m.fc("click",(function(){return m.Ac(t),m.jc().cancel()})),m.Sb(41,"ion-icon",51),m.Sb(42,"span",52),m.Wb(),m.Wb(),m.Xb(43,"ion-col"),m.Xb(44,"ion-button",53),m.Sb(45,"ion-icon",54),m.Sb(46,"span",55),m.Wb(),m.Wb(),m.Wb(),m.Wb(),m.Wb()}if(2&e){var n=m.yc(1),i=m.jc();m.Fb(5),m.pc("ngIf",i.bridgeRate),m.Fb(1),m.pc("ngIf",i.loadingRate),m.Fb(3),m.pc("ngClass",m.sc(34,$)),m.Fb(2),m.Jc(m.lc(12,24,"SWFT.FROM_ASSET")),m.Fb(2),m.qc("okText",m.lc(14,26,"OK")),m.qc("cancelText",m.lc(15,28,"CANCEL")),m.pc("ngModel",i.createOrderParameters.depositSymbol),m.Fb(3),m.pc("ngForOf",i.depositSymbolList),m.Fb(1),m.pc("ngClass",m.uc(35,q,!i.validDepositAmount(i.createOrderParameters.depositAmount),i.validDepositAmount(i.createOrderParameters.depositAmount))),m.Fb(2),m.pc("ngModel",i.createOrderParameters.depositAmount),m.Fb(1),m.pc("ngIf",i.bridgeRate),m.Fb(1),m.pc("ngIf",i.etpBridgeService.isMetaverseSymbol(i.createOrderParameters.depositSymbol)),m.Fb(1),m.pc("ngIf",!i.etpBridgeService.isMetaverseSymbol(i.createOrderParameters.depositSymbol)),m.Fb(2),m.pc("ngClass",m.sc(38,$)),m.Fb(2),m.qc("okText",m.lc(27,30,"OK")),m.qc("cancelText",m.lc(28,32,"CANCEL")),m.pc("ngModel",i.createOrderParameters.receiveSymbol),m.Fb(5),m.pc("ngForOf",i.bridgePairs.ETP),m.Fb(1),m.pc("ngClass",m.sc(39,$)),m.Fb(2),m.pc("ngModel",i.createOrderParameters.receiveAmount),m.Fb(1),m.pc("ngIf",i.bridgeRate),m.Fb(1),m.pc("ngIf",i.etpBridgeService.isMetaverseSymbol(i.createOrderParameters.receiveSymbol)),m.Fb(1),m.pc("ngIf",!i.etpBridgeService.isMetaverseSymbol(i.createOrderParameters.receiveSymbol)),m.Fb(7),m.pc("disabled",!(n.form.valid&&i.validDepositAmount(i.createOrderParameters.depositAmount)&&i.validRefundAddress()&&i.validRecipientAddress()))}}function J(e,r){if(1&e&&(m.Xb(0,"a",85),m.Ic(1),m.Wb()),2&e){var t=m.jc().$implicit,n=m.jc();m.qc("href",n.explorerURL("adr",t.deposit.address),m.Cc),m.Fb(1),m.Jc(t.deposit.address)}}function V(e,r){if(1&e){var t=m.Yb();m.Xb(0,"a",86),m.fc("click",(function(){m.Ac(t);var e=m.jc().$implicit;return m.jc().show(e.deposit.address)})),m.Ic(1),m.Wb()}if(2&e){var n=m.jc().$implicit;m.Fb(1),m.Jc(n.deposit.address)}}function z(e,r){if(1&e&&(m.Xb(0,"a",85),m.Ic(1),m.Wb()),2&e){var t=m.jc().$implicit,n=m.jc();m.qc("href",n.explorerURL("adr",t.refund.address),m.Cc),m.Fb(1),m.Jc(t.refund.address)}}function K(e,r){if(1&e){var t=m.Yb();m.Xb(0,"a",86),m.fc("click",(function(){m.Ac(t);var e=m.jc().$implicit;return m.jc().show(e.refund.address)})),m.Ic(1),m.Wb()}if(2&e){var n=m.jc().$implicit;m.Fb(1),m.Jc(n.refund.address)}}function H(e,r){if(1&e&&(m.Xb(0,"a",85),m.Ic(1),m.Wb()),2&e){var t=m.jc(2).$implicit,n=m.jc();m.qc("href",n.explorerURL("tx",t.refund.txid),m.Cc),m.Fb(1),m.Jc(t.refund.txid)}}function Q(e,r){if(1&e){var t=m.Yb();m.Xb(0,"a",86),m.fc("click",(function(){m.Ac(t);var e=m.jc(2).$implicit;return m.jc().show(e.refund.txid)})),m.Ic(1),m.Wb()}if(2&e){var n=m.jc(2).$implicit;m.Fb(1),m.Jc(n.refund.txid)}}function Z(e,r){if(1&e&&(m.Xb(0,"ion-row"),m.Xb(1,"ion-col",73),m.Sb(2,"div",87),m.Wb(),m.Xb(3,"ion-col",73),m.Xb(4,"h4",75),m.Gc(5,H,2,2,"a",76),m.Gc(6,Q,2,1,"a",77),m.Wb(),m.Wb(),m.Wb()),2&e){var t=m.jc().$implicit,n=m.jc();m.Fb(2),m.pc("translateParams",m.tc(3,_,t.deposit.symbol)),m.Fb(3),m.pc("ngIf",n.etpBridgeService.isMetaverseSymbol(t.deposit.symbol)),m.Fb(1),m.pc("ngIf",!n.etpBridgeService.isMetaverseSymbol(t.deposit.symbol))}}function ee(e,r){if(1&e&&(m.Xb(0,"a",85),m.Ic(1),m.Wb()),2&e){var t=m.jc().$implicit,n=m.jc();m.qc("href",n.explorerURL("adr",t.receive.address),m.Cc),m.Fb(1),m.Jc(t.receive.address)}}function re(e,r){if(1&e){var t=m.Yb();m.Xb(0,"a",86),m.fc("click",(function(){m.Ac(t);var e=m.jc().$implicit;return m.jc().show(e.receive.address)})),m.Ic(1),m.Wb()}if(2&e){var n=m.jc().$implicit;m.Fb(1),m.Jc(n.receive.address)}}function te(e,r){if(1&e&&(m.Xb(0,"a",85),m.Ic(1),m.Wb()),2&e){var t=m.jc(2).$implicit,n=m.jc();m.qc("href",n.explorerURL("tx",t.receive.txid),m.Cc),m.Fb(1),m.Jc(t.receive.txid)}}function ne(e,r){if(1&e){var t=m.Yb();m.Xb(0,"a",86),m.fc("click",(function(){m.Ac(t);var e=m.jc(2).$implicit;return m.jc().show(e.receive.txid)})),m.Ic(1),m.Wb()}if(2&e){var n=m.jc(2).$implicit;m.Fb(1),m.Jc(n.receive.txid)}}function ie(e,r){if(1&e&&(m.Xb(0,"ion-row"),m.Xb(1,"ion-col",73),m.Sb(2,"div",88),m.Wb(),m.Xb(3,"ion-col",73),m.Xb(4,"h4",75),m.Gc(5,te,2,2,"a",76),m.Gc(6,ne,2,1,"a",77),m.Wb(),m.Wb(),m.Wb()),2&e){var t=m.jc().$implicit,n=m.jc();m.Fb(2),m.pc("translateParams",m.tc(3,_,t.receive.symbol)),m.Fb(3),m.pc("ngIf",n.etpBridgeService.isMetaverseSymbol(t.receive.symbol)),m.Fb(1),m.pc("ngIf",!n.etpBridgeService.isMetaverseSymbol(t.receive.symbol))}}function ae(e,r){if(1&e){var t=m.Yb();m.Xb(0,"ion-card",68),m.Xb(1,"ion-row"),m.Xb(2,"ion-col"),m.Xb(3,"ion-row"),m.Xb(4,"ion-col"),m.Xb(5,"h2",69),m.fc("click",(function(){m.Ac(t);var e=r.$implicit;return m.jc().copy(e.id,"id")})),m.Ic(6),m.Wb(),m.Wb(),m.Wb(),m.Wb(),m.Wb(),m.Xb(7,"ion-row"),m.Xb(8,"ion-col",70),m.Xb(9,"ion-row"),m.Sb(10,"ion-col",71),m.Xb(11,"ion-col",72),m.Ic(12),m.Wb(),m.Wb(),m.Xb(13,"ion-row"),m.Xb(14,"ion-col",73),m.Sb(15,"div",74),m.Wb(),m.Xb(16,"ion-col",73),m.Xb(17,"h4",75),m.Gc(18,J,2,2,"a",76),m.Gc(19,V,2,1,"a",77),m.Wb(),m.Wb(),m.Wb(),m.Xb(20,"ion-row"),m.Xb(21,"ion-col",73),m.Sb(22,"div",78),m.Wb(),m.Xb(23,"ion-col",73),m.Xb(24,"h4",75),m.Gc(25,z,2,2,"a",76),m.Gc(26,K,2,1,"a",77),m.Wb(),m.Wb(),m.Wb(),m.Gc(27,Z,7,5,"ion-row",79),m.Wb(),m.Xb(28,"ion-col",70),m.Xb(29,"ion-row"),m.Sb(30,"ion-col",80),m.Xb(31,"ion-col",72),m.Ic(32),m.Wb(),m.Wb(),m.Xb(33,"ion-row"),m.Xb(34,"ion-col",73),m.Sb(35,"div",81),m.Wb(),m.Xb(36,"ion-col",73),m.Xb(37,"h4",75),m.Gc(38,ee,2,2,"a",76),m.Gc(39,re,2,1,"a",77),m.Wb(),m.Wb(),m.Wb(),m.Gc(40,ie,7,5,"ion-row",79),m.Wb(),m.Wb(),m.Xb(41,"div",24),m.Xb(42,"ion-button",82),m.fc("click",(function(){m.Ac(t);var e=r.$implicit;return m.jc().gotoDetails(e.id)})),m.Sb(43,"ion-icon",83),m.Sb(44,"span",84),m.Wb(),m.Wb(),m.Wb()}if(2&e){var n=r.$implicit,i=m.jc();m.Fb(6),m.Kc(" ",n.id," "),m.Fb(6),m.Lc("",n.deposit.amount," ",n.deposit.symbol,""),m.Fb(3),m.pc("translateParams",m.tc(16,_,n.deposit.symbol)),m.Fb(3),m.pc("ngIf",i.etpBridgeService.isMetaverseSymbol(n.deposit.symbol)),m.Fb(1),m.pc("ngIf",!i.etpBridgeService.isMetaverseSymbol(n.deposit.symbol)),m.Fb(3),m.pc("translateParams",m.tc(18,_,n.deposit.symbol)),m.Fb(3),m.pc("ngIf",i.etpBridgeService.isMetaverseSymbol(n.deposit.symbol)),m.Fb(1),m.pc("ngIf",!i.etpBridgeService.isMetaverseSymbol(n.deposit.symbol)),m.Fb(1),m.pc("ngIf",n.refund.txid),m.Fb(5),m.Lc("",n.receive.amount," ",n.receive.symbol,""),m.Fb(3),m.pc("translateParams",m.tc(20,_,n.receive.symbol)),m.Fb(3),m.pc("ngIf",i.etpBridgeService.isMetaverseSymbol(n.receive.symbol)),m.Fb(1),m.pc("ngIf",!i.etpBridgeService.isMetaverseSymbol(n.receive.symbol)),m.Fb(1),m.pc("ngIf",n.receive.txid)}}function oe(e,r){if(1&e){var t=m.Yb();m.Xb(0,"ion-button",89),m.fc("click",(function(){return m.Ac(t),m.jc().scan()})),m.Sb(1,"ion-icon",90),m.Wb()}}var ce,se,le,de=function(){return["created","1"]},be=[{path:"",component:(ce=function(){function r(n,i,a,o,c,s,l,d,b,u){var m=this;t(this,r),this.platform=n,this.metaverseService=i,this.etpBridgeService=a,this.alertService=o,this.globals=c,this.modalCtrl=s,this.router=l,this.walletService=d,this.clipboardService=b,this.toastService=u,this.etpBalance=0,this.loadingPair=!0,this.loadingRate=!1,this.depositSymbolList=[],this.orders=[],this.createOrderParameters={depositSymbol:"ETP",receiveSymbol:"BTC",receiveAmount:null,refundAddress:"",receiveAddress:"",depositAmount:null},this.validDepositAmount=function(e){return m.bridgeRate&&e>=m.bridgeRate.depositMin&&e<=m.bridgeRate.depositMax},this.validAddress=function(e,r){return void 0!==e&&""!==e&&(!m.etpBridgeService.isMetaverseSymbol(r)||m.metaverseService.validAddress(e))},this.validRefundAddress=function(){return m.validAddress(m.createOrderParameters.refundAddress,m.createOrderParameters.depositSymbol)},this.validRecipientAddress=function(){return m.validAddress(m.createOrderParameters.receiveAddress,m.createOrderParameters.receiveSymbol)},this.validId=function(e){return e},this.explorerURL=function(e,r){return"mainnet"===m.globals.network?"https://explorer.mvs.org/"+e+"/"+r:"https://explorer-testnet.mvs.org/"+e+"/"+r},this.gotoDetails=function(e){return m.router.navigate(["account","swft","order",e])},this.isMobile=this.walletService.isMobile(),this.etpBridgeService.getBridgePairs().toPromise().then((function(e){m.loadingPair=!1,m.bridgePairs=e,m.depositSymbolList=Object.keys(m.bridgePairs)})).catch((function(e){m.loadingPair=!1,console.error(e)})),Promise.all([this.metaverseService.getBalances(),this.metaverseService.getAddresses(),this.metaverseService.getAddressBalances()]).then((function(r){var t=e(r,3),n=t[0],i=t[1],a=t[2];m.etpBalance=n.ETP.available,m.addresses=i;var o=[];Object.keys(i).forEach((function(e){var r=i[e];o.push(a[r]?{address:r,avatar:a[r].AVATAR?a[r].AVATAR:"",identifier:a[r].AVATAR?a[r].AVATAR:r,balance:a[r].ETP.available}:{address:r,avatar:"",identifier:r,balance:0})})),m.addressbalances=o}))}return i(r,[{key:"ngOnInit",value:function(){}},{key:"ionViewWillEnter",value:function(){this.getRate(),this.loadOrders()}},{key:"getRate",value:function(){var e=this;this.loadingRate=!0,this.bridgeRate=void 0,this.etpBridgeService.getBridgeRate(this.createOrderParameters.depositSymbol,this.createOrderParameters.receiveSymbol).toPromise().then((function(r){e.bridgeRate=r,e.updateReceiveAmount()})).finally((function(){e.loadingRate=!1}))}},{key:"loadOrders",value:function(){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.etpBridgeService.getOrders();case 2:return this.orders=e.sent,e.abrupt("return",this.orders);case 4:case"end":return e.stop()}}),e,this)})))}},{key:"createOrder",value:function(){var e,r=this;return this.alertService.showLoading().then((function(){return r.etpBridgeService.createOrder(r.createOrderParameters).toPromise()})).then((function(t){return e=t,r.etpBridgeService.saveOrder(t)})).then((function(){return r.loadOrders()})).then((function(){r.alertService.stopLoading(),r.alertService.showMessage("SWFT.MESSAGE.SUCCESS_CREATE_SWFT_TITLE","SWFT.MESSAGE.SUCCESS_CREATE_SWFT_BODY",""),r.gotoDetails(e.id)})).catch((function(e){console.error(e),r.alertService.stopLoading(),r.alertService.showError("SWFT.MESSAGE.CREATE_SWFT_ORDER_ERROR",e._body)}))}},{key:"importOrder",value:function(){var e=this;return this.alertService.showLoading().then((function(){return e.etpBridgeService.getOrder(e.importFromId).toPromise()})).then((function(r){return e.etpBridgeService.saveOrder(r)})).then((function(){return e.loadOrders()})).then((function(){e.alertService.stopLoading(),e.alertService.showMessage("SWFT.MESSAGE.SUCCESS_IMPORT_SWFT_TITLE","SWFT.MESSAGE.SUCCESS_IMPORT_SWFT_BODY","")})).catch((function(r){console.error(r),e.alertService.stopLoading(),e.alertService.showError("SWFT.MESSAGE.CREATE_SWFT_ORDER_ERROR",r.message)}))}},{key:"cancel",value:function(){this.createOrderParameters={depositSymbol:"ETP",receiveSymbol:"BTC",receiveAmount:null,refundAddress:"",receiveAddress:"",depositAmount:null}}},{key:"changeDepositSymbol",value:function(e){this.etpBridgeService.isMetaverseSymbol(e)||this.etpBridgeService.isMetaverseSymbol(this.createOrderParameters.receiveSymbol)?e===this.createOrderParameters.receiveSymbol&&(this.createOrderParameters.receiveSymbol=this.createOrderParameters.depositSymbol):this.createOrderParameters.receiveSymbol="ETP",this.createOrderParameters.depositSymbol=e,this.getRate()}},{key:"changeReceiveSymbol",value:function(e){this.etpBridgeService.isMetaverseSymbol(e)||this.etpBridgeService.isMetaverseSymbol(this.createOrderParameters.depositSymbol)?e===this.createOrderParameters.depositSymbol&&(this.createOrderParameters.depositSymbol=this.createOrderParameters.receiveSymbol):this.createOrderParameters.depositSymbol="ETP",this.createOrderParameters.receiveSymbol=e,this.getRate()}},{key:"updateReceiveAmount",value:function(){var e=(this.bridgeRate?this.createOrderParameters.depositAmount*this.bridgeRate.instantRate*(1-this.bridgeRate.depositCoinFeeRate):0).toString().split(".");e[1]=e[1]?e[1].substring(0,6):"0",this.createOrderParameters.receiveAmount=parseFloat(e[0]+"."+e[1])}},{key:"switch",value:function(){var e=this.createOrderParameters.receiveSymbol;this.createOrderParameters.receiveSymbol=this.createOrderParameters.depositSymbol,this.createOrderParameters.depositSymbol=e,this.createOrderParameters.receiveAmount=0,this.createOrderParameters.depositAmount=0,this.createOrderParameters.refundAddress="",this.createOrderParameters.receiveAddress="",this.getRate()}},{key:"copy",value:function(e,r){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.clipboardService.copyFromContent(e);case 3:t.t0=r,t.next="id"===t.t0?6:8;break;case 6:return this.toastService.simpleToast("SWFT.TOAST.ID_COPIED"),t.abrupt("break",9);case 8:this.toastService.simpleToast("IDENTITIES.TOAST.COPIED");case 9:t.next=14;break;case 11:t.prev=11,t.t1=t.catch(0),console.log("Error while copying");case 14:case"end":return t.stop()}}),t,this,[[0,11]])})))}},{key:"scan",value:function(){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var r,t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.modalCtrl.create({component:b.a,showBackdrop:!1,backdropDismiss:!1});case 2:return(r=e.sent).onWillDismiss().then((function(e){if(e.data&&e.data.text){var n=e.data.text.toString().split("&");t.metaverseService.validAddress(n[0])?t.importFromId=n[0]:t.alertService.showMessage("SCAN.INVALID_ADDRESS.TITLE","SCAN.INVALID_ADDRESS.SUBTITLE","")}r.remove()})),e.next=6,r.present();case 6:case"end":return e.stop()}}),e,this)})))}},{key:"show",value:function(e){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark((function r(){var t,n,i;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e,n=e,r.next=4,this.modalCtrl.create({component:u.a,componentProps:{title:n,content:t}});case 4:return i=r.sent,r.next=7,i.present();case 7:case"end":return r.stop()}}),r,this)})))}}]),r}(),ce.\u0275fac=function(e){return new(e||ce)(m.Rb(s.eb),m.Rb(p.a),m.Rb(f.a),m.Rb(v.a),m.Rb(S.a),m.Rb(s.bb),m.Rb(l.h),m.Rb(g.a),m.Rb(h.b),m.Rb(y.a))},ce.\u0275cmp=m.Lb({type:ce,selectors:[["app-swft"]],viewQuery:function(e,r){var t;1&e&&m.Nc(W,!0),2&e&&m.xc(t=m.gc())&&(r.quantityInput=t.first)},decls:35,vars:16,consts:[["slot","start"],["translate","SWFT.TITLE"],["href","https://www.swft.pro","target","_blank","rel","noopener",1,"swft-logo"],[3,"src"],[1,"swft-info"],["align","center"],["translate","SWFT.INFORMATION"],["href","https://t.me/SWFTBlockchain","target","_blank","rel","noopener","translate","SWFT.INFORMATION_LINK"],["align","center","translate","SWFT.INFORMATION_WARNING",1,"wrong-input"],["translate","SWFT.CREATE_ORDER"],["translate","SWFT.CREATE_ORDER_DESCRIPTION"],["name","dots",4,"ngIf"],["class","wrong-input center","translate","SWFT.UNABLE_CONNECT_SWFT",4,"ngIf"],[3,"ngSubmit","keyup.enter",4,"ngIf"],["translate","SWFT.HISTORY_TITLE"],["translate","SWFT.HISTORY_DESCRIPTION"],["class","card-order-history",4,"ngFor","ngForOf"],["translate","SWFT.IMPORT_ORDER"],["translate","SWFT.IMPORT_ORDER_DESCRIPTION"],[1,"card-block"],[3,"ngClass"],["color","primary","position","floating","translate","SWFT.ORDER_ID"],["name","importFromId",3,"ngModel","ngModelChange"],["slot","end","class","scanButton",3,"click",4,"ngIf"],[1,"center"],["fill","outline","shape","round",3,"disabled","click"],["slot","start","name","add"],["translate","SWFT.IMPORT_ORDER_BUTTON"],["name","dots"],["translate","SWFT.UNABLE_CONNECT_SWFT",1,"wrong-input","center"],[3,"ngSubmit","keyup.enter"],["swapForm","ngForm"],[1,"ion-text-center"],["id","swapIcon","name","swap-horizontal",3,"click"],["id","rate","lines","none","translate","SWFT.RATE_INFO",3,"translateParams",4,"ngIf"],["size","6"],["color","primary"],["name","depositSymbol",3,"ngModel","okText","cancelText","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["color","primary","position","floating","translate","SWFT.AMOUNT_SEND"],["name","depositAmount","type","number",3,"ngModel","ngModelChange"],["lines","none","class","advice","translate","SWFT.MIN_MAX_DEPOSIT",3,"translateParams",4,"ngIf"],[3,"ngClass",4,"ngIf"],["color","primary","translate","SWFT.TO_ASSET"],["name","receiveSymbol",3,"ngModel","okText","cancelText","ngModelChange"],["value","ETP"],["color","primary","position","floating","translate","SWFT.AMOUNT_RECEIVE"],["name","receiveAmount","type","number","disabled","",3,"ngModel","ngModelChange"],["lines","none","class","advice","translate","SWFT.RECEIVE_COIN_FEE",3,"translateParams",4,"ngIf"],[1,"buttons-row"],["color","danger","expand","full","fill","outline","shape","round",3,"click"],["slot","start","name","close"],["translate","SWFT.BUTTON.CANCEL"],["type","submit","expand","full","color","secondary","fill","outline","shape","round",3,"disabled"],["slot","start","disabled","checked","name","send"],["translate","SWFT.BUTTON.NEXT"],["id","rate","lines","none","translate","SWFT.RATE_INFO",3,"translateParams"],[3,"value"],["lines","none","translate","SWFT.MIN_MAX_DEPOSIT",1,"advice",3,"translateParams"],["color","primary","translate","SWFT.REFUND_ADDRESS",3,"translateParams"],["name","refundAddress","multiple","false",3,"ngModel","okText","cancelText","ngModelChange"],["color","primary","position","floating","translate","SWFT.REFUND_ADDRESS",3,"translateParams"],["name","refundAddress","type","text",3,"ngModel","ngModelChange"],["lines","none","translate","SWFT.RECEIVE_COIN_FEE",1,"advice",3,"translateParams"],["color","primary","translate","SWFT.RECEIVE_ADDRESS",3,"translateParams"],["name","receiveAddress","multiple","false",3,"ngModel","okText","cancelText","ngModelChange"],["color","primary","position","floating","translate","SWFT.RECEIVE_ADDRESS",3,"translateParams"],["name","receiveAddress","type","text",3,"ngModel","ngModelChange"],[1,"card-order-history"],[1,"pointer",3,"click"],["size","12","size-md","6"],["size","12","size-sm","6","translate","SWFT.FROM_ASSET"],["size","12","size-sm","6",1,"right"],["size","12","size-sm","6"],["translate","SWFT.DEPOSIT_ADDRESS",3,"translateParams"],[1,"breakwords"],["target","_blank","rel","noopener","class","right",3,"href",4,"ngIf"],["class","right",3,"click",4,"ngIf"],["translate","SWFT.REFUND_ADDRESS",3,"translateParams"],[4,"ngIf"],["size","12","size-sm","6","translate","SWFT.TO_ASSET"],["translate","SWFT.RECEIVE_ADDRESS",3,"translateParams"],["fill","outline","shape","round",3,"click"],["slot","start","name","arrow-forward"],["translate","SWFT.SEE_DETAILS_BUTTON"],["target","_blank","rel","noopener",1,"right",3,"href"],[1,"right",3,"click"],["translate","SWFT.REFUND_TX",3,"translateParams"],["translate","SWFT.RECEIVE_TX",3,"translateParams"],["slot","end",1,"scanButton",3,"click"],["slot","icon-only","name","qr-code"]],template:function(e,r){1&e&&(m.Xb(0,"ion-header"),m.Xb(1,"ion-toolbar"),m.Xb(2,"ion-buttons",0),m.Sb(3,"ion-menu-button"),m.Wb(),m.Sb(4,"ion-title",1),m.Wb(),m.Wb(),m.Xb(5,"ion-content"),m.Xb(6,"ion-grid"),m.Xb(7,"a",2),m.Sb(8,"img",3),m.Wb(),m.Xb(9,"ion-row",4),m.Xb(10,"ion-col"),m.Xb(11,"p",5),m.Sb(12,"span",6),m.Sb(13,"a",7),m.Wb(),m.Sb(14,"p",8),m.Wb(),m.Wb(),m.Sb(15,"h3",9),m.Sb(16,"p",10),m.Gc(17,A,1,0,"ion-spinner",11),m.Gc(18,R,1,0,"h4",12),m.Gc(19,Y,47,40,"form",13),m.Sb(20,"h3",14),m.Sb(21,"p",15),m.Gc(22,ae,45,22,"ion-card",16),m.kc(23,"orderBy"),m.Sb(24,"h3",17),m.Sb(25,"p",18),m.Xb(26,"ion-card",19),m.Xb(27,"ion-item",20),m.Sb(28,"ion-label",21),m.Xb(29,"ion-input",22),m.fc("ngModelChange",(function(e){return r.importFromId=e})),m.Wb(),m.Gc(30,oe,2,0,"ion-button",23),m.Wb(),m.Xb(31,"div",24),m.Xb(32,"ion-button",25),m.fc("click",(function(){return r.importOrder()})),m.Sb(33,"ion-icon",26),m.Sb(34,"span",27),m.Wb(),m.Wb(),m.Wb(),m.Wb(),m.Wb()),2&e&&(m.Fb(8),m.pc("src","assets/images/swft-logo.png",m.Cc),m.Fb(9),m.pc("ngIf",r.loadingPair),m.Fb(1),m.pc("ngIf",!r.loadingPair&&!r.bridgePairs),m.Fb(1),m.pc("ngIf",!r.loadingPair&&r.bridgePairs),m.Fb(3),m.pc("ngForOf",m.mc(23,9,r.orders,m.sc(12,de))),m.Fb(5),m.pc("ngClass",m.uc(13,q,!r.validId(r.importFromId),r.validId(r.importFromId))),m.Fb(2),m.pc("ngModel",r.importFromId),m.Fb(1),m.pc("ngIf",r.isMobile),m.Fb(2),m.pc("disabled",!r.validId(r.importFromId)))},directives:[s.u,s.X,s.j,s.C,s.V,F.a,s.r,s.t,s.K,s.q,o.m,o.l,s.k,s.x,o.k,s.z,s.w,s.hb,c.i,c.l,s.i,s.v,s.R,c.p,c.j,c.k,s.N,s.gb,s.db,s.O],pipes:[O.a,F.d,T.a],styles:["#swapIcon[_ngcontent-%COMP%]{font-size:36px;margin-top:10px;cursor:pointer}"]}),ce)},{path:"order",loadChildren:function(){return a.e(45).then(a.bind(null,"Mm+m")).then((function(e){return e.OrderDetailPageModule}))}}],ue=((se=function e(){t(this,e)}).\u0275mod=m.Pb({type:se}),se.\u0275inj=m.Ob({factory:function(e){return new(e||se)},imports:[[l.j.forChild(be)],l.j]}),se),me=a("iTUp"),pe=((le=function e(){t(this,e)}).\u0275mod=m.Pb({type:le}),le.\u0275inj=m.Ob({factory:function(e){return new(e||le)},imports:[[o.c,c.e,s.Y,F.c.forChild(),me.a,ue]]}),le)},iTUp:function(e,r,n){"use strict";n.d(r,"a",(function(){return o}));var i=n("ofXK"),a=n("fXoL"),o=function(){var e=function e(){t(this,e)};return e.\u0275mod=a.Pb({type:e}),e.\u0275inj=a.Ob({factory:function(r){return new(r||e)},imports:[[i.c]]}),e}()},q5gJ:function(e,r,n){"use strict";n.d(r,"a",(function(){return o}));var a=n("fXoL"),o=function(){var e=function(){function e(){t(this,e)}return i(e,[{key:"transform",value:function(e,r){return(e/Math.pow(10,r)).toLocaleString(void 0,{maximumFractionDigits:r})}}]),e}();return e.\u0275fac=function(r){return new(r||e)},e.\u0275pipe=a.Qb({name:"format",type:e,pure:!0}),e}()}}])}();