webpackJsonp([31],{1816:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"CoreLoginSiteErrorPageModule",function(){return s});var o=n(0),r=n(3),i=n(1935),c=n(2),a=n(15),l=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,c=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(c=(i<3?r(c):i>3?r(e,n,c):r(e,n))||c);return i>3&&c&&Object.defineProperty(e,n,c),c},s=function(){function t(){}return t=l([Object(o.I)({declarations:[i.a],imports:[a.a,r.l.forChild(i.a),c.b.forChild()]})],t)}()},1935:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var o=n(0),r=n(3),i=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,c=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(c=(i<3?r(c):i>3?r(e,n,c):r(e,n))||c);return i>3&&c&&Object.defineProperty(e,n,c),c},c=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=function(){function t(t,e){this.viewCtrl=t,this.siteUrl=e.get("siteUrl"),this.issue=e.get("issue")}return t.prototype.closeModal=function(){this.viewCtrl.dismiss()},t=i([Object(o.m)({selector:"page-core-login-site-error",template:"<ion-header>\n    <ion-navbar>\n        <ion-title>{{ 'core.error' | translate }}</ion-title>\n\n        <ion-buttons end>\n            <button ion-button icon-only (click)=\"closeModal()\" [attr.aria-label]=\"'core.close' | translate\">\n                <ion-icon name=\"close\"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <h3>{{ 'core.whoops' | translate }}</h3>\n    <p>{{ 'core.login.problemconnectingerror' | translate }}</p>\n    <p padding>{{siteUrl}}</p>\n    <p>{{ 'core.login.problemconnectingerrorcontinue' | translate }}</p>\n    <button ion-button block (click)=\"closeModal()\">{{ 'core.tryagain' | translate }}</button>\n    <h3>{{ 'core.login.stillcantconnect' | translate }}</h3>\n    <p>{{ 'core.login.contactyouradministrator' | translate }}</p>\n    <p *ngIf=\"issue\">\n        {{ 'core.login.contactyouradministratorissue' | translate:{$a: ''} }}\n    </p>\n    <p *ngIf=\"issue\">\n        <core-format-text [text]=\"issue\"></core-format-text>\n    </p>\n</ion-content>\n\n"}),c("design:paramtypes",[r.z,r.r])],t)}()}});