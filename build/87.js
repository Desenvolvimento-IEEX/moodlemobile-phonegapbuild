webpackJsonp([87],{1756:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"AddonModDataIndexPageModule",function(){return u});var o=n(0),r=n(3),a=n(2),i=n(15),d=n(379),c=n(1872),f=this&&this.__decorate||function(e,t,n,o){var r,a=arguments.length,i=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var d=e.length-1;d>=0;d--)(r=e[d])&&(i=(a<3?r(i):a>3?r(t,n,i):r(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i},u=function(){function e(){}return e=f([Object(o.I)({declarations:[c.a],imports:[i.a,d.a,r.l.forChild(c.a),a.b.forChild()]})],e)}()},1872:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var o=n(0),r=n(3),a=n(394),i=this&&this.__decorate||function(e,t,n,o){var r,a=arguments.length,i=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var d=e.length-1;d>=0;d--)(r=e[d])&&(i=(a<3?r(i):a>3?r(t,n,i):r(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i},d=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},c=function(){function e(e){this.module=e.get("module")||{},this.courseId=e.get("courseId"),this.group=e.get("group")||0,this.title=this.module.name}return e.prototype.updateData=function(e){this.title=e.name||this.title},i([Object(o._9)(a.a),d("design:type",a.a)],e.prototype,"dataComponent",void 0),e=i([Object(o.m)({selector:"page-addon-mod-data-index",template:'<ion-header>\n    <ion-navbar>\n        <ion-title><core-format-text [text]="title"></core-format-text></ion-title>\n\n        <ion-buttons end>\n            \x3c!-- The buttons defined by the component will be added in here. --\x3e\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n    <ion-refresher [enabled]="dataComponent.loaded" (ionRefresh)="dataComponent.doRefresh($event)">\n        <ion-refresher-content pullingText="{{ \'core.pulltorefresh\' | translate }}"></ion-refresher-content>\n    </ion-refresher>\n\n    <addon-mod-data-index [module]="module" [courseId]="courseId" [group]="group" (dataRetrieved)="updateData($event)"></addon-mod-data-index>\n</ion-content>\n'}),d("design:paramtypes",[r.r])],e)}()}});