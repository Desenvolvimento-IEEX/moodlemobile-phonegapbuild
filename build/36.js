webpackJsonp([36],{1811:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i.d(t,"CoreLoginCredentialsPageModule",function(){return d});var o=i(0),n=i(3),r=i(1930),s=i(2),a=i(16),l=i(15),c=this&&this.__decorate||function(e,t,i,o){var n,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(r<3?n(s):r>3?n(t,i,s):n(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s},d=function(){function e(){}return e=c([Object(o.I)({declarations:[r.a],imports:[a.a,l.a,n.l.forChild(r.a),s.b.forChild()]})],e)}()},1930:function(e,t,i){"use strict";i.d(t,"a",function(){return v});var o=i(0),n=i(3),r=i(2),s=i(11),a=i(12),l=i(4),c=i(9),d=i(7),h=i(76),g=i(36),p=i(32),u=i(19),f=this&&this.__decorate||function(e,t,i,o){var n,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(r<3?n(s):r>3?n(t,i,s):n(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s},m=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},v=function(){function e(e,t,i,o,n,r,s,a,l,c,d,h){this.navCtrl=e,this.appProvider=o,this.sitesProvider=n,this.loginHelper=r,this.domUtils=s,this.translate=a,this.utils=l,this.eventsProvider=c,this.contentLinksDelegate=d,this.contentLinksHelper=h,this.siteChecked=!1,this.pageLoaded=!1,this.isBrowserSSO=!1,this.eventThrown=!1,this.viewLeft=!1,this.siteUrl=t.get("siteUrl"),this.siteConfig=t.get("siteConfig"),this.urlToOpen=t.get("urlToOpen"),this.credForm=i.group({username:[t.get("username")||"",u.h.required],password:["",u.h.required]})}return e.prototype.ionViewDidLoad=function(){this.treatSiteConfig(),this.loginHelper.isFixedUrlSet()?this.checkSite(this.siteUrl):(this.siteChecked=!0,this.pageLoaded=!0)},e.prototype.ionViewDidLeave=function(){this.viewLeft=!0,this.eventsProvider.trigger(a.a.LOGIN_SITE_UNCHECKED,{config:this.siteConfig},this.siteId)},e.prototype.checkSite=function(e){var t=this;this.pageLoaded=!1;var i=0===e.indexOf("http://")?"http://":void 0;return this.sitesProvider.checkSite(e,i).then(function(e){t.siteChecked=!0,t.siteUrl=e.siteUrl,t.siteConfig=e.config,t.treatSiteConfig(),e&&e.warning&&t.domUtils.showErrorModal(e.warning,!0,4e3),t.loginHelper.isSSOLoginNeeded(e.code)?(t.isBrowserSSO=!0,t.appProvider.isSSOAuthenticationOngoing()||t.viewLeft||t.loginHelper.confirmAndOpenBrowserForSSOLogin(e.siteUrl,e.code,e.service,e.config&&e.config.launchurl)):t.isBrowserSSO=!1}).catch(function(e){t.domUtils.showErrorModal(e)}).finally(function(){t.pageLoaded=!0})},e.prototype.treatSiteConfig=function(){this.siteConfig?(this.siteName=this.siteConfig.sitename,this.logoUrl=this.siteConfig.logourl||this.siteConfig.compactlogourl,this.authInstructions=this.siteConfig.authinstructions||this.translate.instant("core.login.loginsteps"),this.canSignup="email"==this.siteConfig.registerauth&&!this.loginHelper.isEmailSignupDisabled(this.siteConfig),this.identityProviders=this.loginHelper.getValidIdentityProviders(this.siteConfig),this.eventThrown||this.viewLeft||(this.eventThrown=!0,this.eventsProvider.trigger(a.a.LOGIN_SITE_CHECKED,{config:this.siteConfig}))):(this.siteName=null,this.logoUrl=null,this.authInstructions=null,this.canSignup=!1,this.identityProviders=[])},e.prototype.login=function(){var e=this;this.appProvider.closeKeyboard();var t=this.siteUrl,i=this.credForm.value.username,o=this.credForm.value.password;if(this.siteChecked&&!this.isBrowserSSO)if(i)if(o)if(this.appProvider.isOnline()){var n=this.domUtils.showModalLoading();this.sitesProvider.getUserToken(t,i,o).then(function(t){return e.sitesProvider.newSite(t.siteUrl,t.token,t.privateToken).then(function(t){return e.credForm.controls.username.reset(),e.credForm.controls.password.reset(),e.siteId=t,e.urlToOpen?e.contentLinksDelegate.getActionsFor(e.urlToOpen,void 0,i).then(function(t){var i=e.contentLinksHelper.getFirstValidAction(t);if(!i||!i.sites.length)return e.loginHelper.goToSiteInitialPage();i.action(i.sites[0])}):e.loginHelper.goToSiteInitialPage()})}).catch(function(i){e.loginHelper.treatUserTokenError(t,i)}).finally(function(){n.dismiss()})}else this.domUtils.showErrorModal("core.networkerrormsg",!0);else this.domUtils.showErrorModal("core.login.passwordrequired",!0);else this.domUtils.showErrorModal("core.login.usernamerequired",!0);else this.checkSite(t).then(function(){if(!e.isBrowserSSO)return e.login()})},e.prototype.forgottenPassword=function(){var e=this;if(this.siteConfig&&this.siteConfig.forgottenpasswordurl)this.utils.openInApp(this.siteConfig.forgottenpasswordurl);else{var t=this.domUtils.showModalLoading();this.loginHelper.canRequestPasswordReset(this.siteUrl).then(function(t){t?e.navCtrl.push("CoreLoginForgottenPasswordPage",{siteUrl:e.siteUrl,username:e.credForm.value.username}):e.loginHelper.openForgottenPassword(e.siteUrl)}).finally(function(){t.dismiss()})}},e.prototype.oauthClicked=function(e){this.loginHelper.openBrowserForOAuthLogin(this.siteUrl,e,this.siteConfig.launchurl)||this.domUtils.showErrorModal("Invalid data.")},e.prototype.signup=function(){this.navCtrl.push("CoreLoginEmailSignupPage",{siteUrl:this.siteUrl})},e=f([Object(o.m)({selector:"page-core-login-credentials",template:'<ion-header>\n    <ion-navbar>\n        <ion-title>{{ \'core.login.login\' | translate }}</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content class="core-center-view">\n    <core-loading [hideUntil]="pageLoaded">\n        <div class="box">\n            <div text-wrap text-center>\n                \x3c!-- Show site logo or a default image. --\x3e\n                <img *ngIf="logoUrl" [src]="logoUrl" role="presentation">\n                <img *ngIf="!logoUrl" src="assets/img/login_logo.png" class="login-logo" role="presentation">\n\n                \x3c!-- If no sitename show big siteurl. --\x3e\n                <p *ngIf="!siteName" padding class="item-heading core-siteurl">{{siteUrl}}</p>\n                \x3c!-- If sitename, show big sitename and small siteurl. --\x3e\n                <p *ngIf="siteName" padding class="item-heading core-sitename"><core-format-text [text]="siteName"></core-format-text></p>\n                <p *ngIf="siteName" class="core-siteurl">{{siteUrl}}</p>\n            </div>\n            <form ion-list [formGroup]="credForm" (ngSubmit)="login()">\n                <ion-item *ngIf="siteChecked && !isBrowserSSO">\n                    <ion-input type="text" name="username" placeholder="{{ \'core.login.username\' | translate }}" formControlName="username" autocapitalize="none" autocorrect="off"></ion-input>\n                </ion-item>\n                <ion-item *ngIf="siteChecked && !isBrowserSSO">\n                    <core-show-password item-content [name]="\'password\'">\n                        <ion-input class="core-ioninput-password" name="password" type="password" placeholder="{{ \'core.login.password\' | translate }}" formControlName="password" core-show-password></ion-input>\n                    </core-show-password>\n                </ion-item>\n                <button ion-button block [disabled]="siteChecked && !isBrowserSSO && !credForm.valid">{{ \'core.login.loginbutton\' | translate }}</button>\n            </form>\n\n            \x3c!-- Forgotten password button. --\x3e\n            <div padding-top>\n                <button ion-button block text-wrap color="light" (click)="forgottenPassword()">{{ \'core.login.forgotten\' | translate }}</button>\n            </div>\n\n            <ion-list *ngIf="identityProviders && identityProviders.length" padding-top>\n                <ion-list-header text-wrap>{{ \'core.login.potentialidps\' | translate }}</ion-list-header>\n                <button ion-item *ngFor="let provider of identityProviders" text-wrap class="core-oauth-icon" (click)="oauthClicked(provider)" title="{{provider.name}}">\n                    <img [src]="provider.iconurl" alt="{{provider.name}}" item-start>\n                    {{provider.name}}\n                </button>\n            </ion-list>\n\n            <ion-list *ngIf="canSignup" padding-top>\n                <ion-list-header text-wrap>{{ \'core.login.firsttime\' | translate }}</ion-list-header>\n                <ion-item no-lines text-wrap *ngIf="authInstructions">\n                    <p><core-format-text [text]="authInstructions"></core-format-text></p>\n                </ion-item>\n                <button ion-button block (click)="signup()">{{ \'core.login.startsignup\' | translate }}</button>\n            </ion-list>\n        </div>\n    </core-loading>\n</ion-content>\n'}),m("design:paramtypes",[n.q,n.r,u.a,s.a,l.a,h.a,c.a,r.c,d.a,a.a,g.a,p.a])],e)}()}});