webpackJsonp([33],{1814:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i.d(t,"CoreLoginInitPageModule",function(){return s});var o=i(0),n=i(3),r=i(1933),a=this&&this.__decorate||function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a},s=function(){function e(){}return e=a([Object(o.I)({declarations:[r.a],imports:[n.l.forChild(r.a)]})],e)}()},1933:function(e,t,i){"use strict";i.d(t,"a",function(){return p});var o=i(0),n=i(3),r=i(11),a=i(90),s=i(4),c=i(29),l=i(76),d=this&&this.__decorate||function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a},f=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},p=function(){function e(e,t,i,o,n){this.navCtrl=e,this.appProvider=t,this.initDelegate=i,this.sitesProvider=o,this.loginHelper=n}return e.prototype.ionViewDidLoad=function(){var e=this;this.initDelegate.ready().then(function(){var t=e.appProvider.getRedirect();if(t.siteId&&t.page&&(e.appProvider.storeRedirect("","",""),Date.now()-t.timemodified<2e4))return t.siteId!=c.a.NO_SITE_ID?e.sitesProvider.loadSite(t.siteId).then(function(){e.loginHelper.isSiteLoggedOut(t.page,t.params)||e.navCtrl.setRoot(t.page,t.params,{animate:!1})}).catch(function(){e.loadPage()}):e.navCtrl.setRoot(t.page,t.params,{animate:!1});e.loadPage()})},e.prototype.loadPage=function(){var e=this;this.sitesProvider.isLoggedIn()?this.loginHelper.isSiteLoggedOut()||this.loginHelper.goToSiteInitialPage():this.sitesProvider.hasSites().then(function(t){t?e.navCtrl.setRoot("CoreLoginSitesPage"):e.loginHelper.goToAddSite(!0)})},e=d([Object(o.m)({selector:"page-core-login-init",template:'<ion-content>\n    <div class="core-bglogo">\n        <div class="core-logo">\n            <img src="assets/img/splash_logo.png"/>\n            <ion-spinner></ion-spinner>\n        </div>\n    </div>\n</ion-content>\n'}),f("design:paramtypes",[n.q,r.a,a.a,s.a,l.a])],e)}()}});