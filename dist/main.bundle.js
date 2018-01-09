webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".app {\r\n    height: 100%;\r\n    overflow-x: hidden;\r\n    width: 100%;    \r\n}\r\n\r\n.container {\r\n    -webkit-transform: translateX(0%);\r\n            transform: translateX(0%); \r\n    transition: -webkit-transform .2s ease-in; \r\n    transition: transform .2s ease-in; \r\n    transition: transform .2s ease-in, -webkit-transform .2s ease-in;\r\n}\r\n\r\n.container.active {\r\n    -webkit-transform: translateX(-267px);\r\n            transform: translateX(-267px);\r\n}\r\n\r\n.main {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex-positive: 1;\r\n            flex-grow: 1;\r\n    height: 100%;\r\n}\r\n\r\n.main.active {\r\n    box-shadow: 5px 0px 6px 1px darkgrey;\r\n}\r\n\r\n.slide-in-menu {\r\n    position: absolute;\r\n    height: 100%;\r\n    right: 0;\r\n    top: 0;\r\n    -webkit-transform: translateX(267px);\r\n            transform: translateX(267px);\r\n    width: 267px;\r\n    transition: -webkit-transform .2s ease-in;\r\n    transition: transform .2s ease-in;\r\n    transition: transform .2s ease-in, -webkit-transform .2s ease-in;\r\n    z-index: -1;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div [ngClass]=\"{ 'app': true, 'active': isSideBarShowing }\">\r\n    <div [ngClass]=\"{ 'container': true, 'active': isSideBarShowing }\">\r\n        \r\n        \r\n        <div [ngClass]=\"{ 'main': true, 'active': isSideBarShowing }\">\r\n            <app-header></app-header>\r\n            <app-navbar *ngIf=\"isDesktop || isLargeDesktop\"></app-navbar>\r\n    \r\n            <app-home></app-home>\r\n    \r\n            <app-footer></app-footer>\r\n        </div>\r\n        \r\n        \r\n        <div *ngIf=\"isMobile || isTablet\" [ngClass]=\"{ 'slide-in-menu': true, 'active': isSideBarShowing }\">\r\n            <app-navbar></app-navbar>\r\n        </div>\r\n\r\n\r\n\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_shared_Responsive__ = __webpack_require__("../../../../../src/app/components/shared/Responsive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_side_bar_service__ = __webpack_require__("../../../../../src/app/services/side-bar.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function (_super) {
    __extends(AppComponent, _super);
    function AppComponent(sideBar) {
        var _this = _super.call(this) || this;
        _this.sideBar = sideBar;
        _this.title = 'app';
        return _this;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("IN the App Component");
        this.sideBar.isSideBarShowing.subscribe(function (isSideBarShowing) {
            console.log("AppComponent: ", isSideBarShowing);
            _this.isSideBarShowing = isSideBarShowing;
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_side_bar_service__["a" /* SideBarService */]])
    ], AppComponent);
    return AppComponent;
}(__WEBPACK_IMPORTED_MODULE_1__components_shared_Responsive__["a" /* Responsive */]));



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_normalize_css__ = __webpack_require__("../../../../normalize.css/normalize.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_normalize_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_normalize_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_shared_header_header_component__ = __webpack_require__("../../../../../src/app/components/shared/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_shared_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/shared/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_side_bar_service__ = __webpack_require__("../../../../../src/app/services/side-bar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_shared_carousel_carousel_component__ = __webpack_require__("../../../../../src/app/components/shared/carousel/carousel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_shared_footer_footer_component__ = __webpack_require__("../../../../../src/app/components/shared/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_shared_responsive_container_responsive_container_component__ = __webpack_require__("../../../../../src/app/components/shared/responsive-container/responsive-container.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__components_shared_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_shared_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_shared_carousel_carousel_component__["a" /* CarouselComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_shared_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_shared_responsive_container_responsive_container_component__["a" /* ResponsiveContainerComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__services_side_bar_service__["a" /* SideBarService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a:hover {\r\n    text-decoration: underline !important;\r\n}\r\n\r\nimg {\r\n    max-width: 100%;\r\n}\r\n\r\n.img-container {\r\n    text-align: center;\r\n}\r\n\r\n.title {\r\n    font-weight: 400;\r\n    text-align: center;\r\n}\r\n\r\n.main-content {\r\n    box-sizing: border-box;\r\n    max-width: 1170px;\r\n    margin: 0 auto;\r\n    padding: 0 15px;\r\n}\r\n\r\n.popular-products, .explore-accessories {\r\n    margin: 60px 0;\r\n}\r\n\r\n.popular-products .title {\r\n    margin-bottom: 50px;\r\n}\r\n\r\n.products {\r\n    list-style: none;\r\n    padding: 0;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-pack: distribute;\r\n        justify-content: space-around;\r\n}\r\n\r\n.product {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    margin: 0;\r\n}\r\n\r\n.product a, .item a {\r\n    color: rgb(0, 125, 184);\r\n    font-weight: 400;\r\n    font-size: 16px;\r\n    text-decoration: none;\r\n}\r\n\r\n.explore-accessories .title {\r\n    margin: 0;\r\n}\r\n.accessories {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    margin-bottom: 60px;\r\n}\r\n\r\n.accessory {\r\n    margin-bottom: 1em;\r\n}\r\n\r\n.cta-btn {\r\n    background-color: #007db8;\r\n    border: none;\r\n    outline: none;\r\n    color: white;\r\n    font-family: inherit;\r\n    font-size: 14px;\r\n    padding: 10px 7px;\r\n}\r\n\r\n.green {\r\n    background-color: #408001;\r\n}\r\n\r\n\r\n.row {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    position: relative;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n}\r\n.row .title {\r\n    text-align: left;\r\n    margin: 0;\r\n    line-height: 1;\r\n}\r\n\r\n.row .title a {\r\n    font-size: 14px !important;\r\n    line-height: 1;    \r\n}\r\n\r\n.row1 .details {\r\n    margin: 0;\r\n}\r\n\r\n.row1 .details a {\r\n    color: #444;\r\n    font-size: 14px;\r\n    margin: 0;\r\n}\r\n\r\n.row1 .cta-btn {\r\n    padding: 6px 12px;\r\n    margin: 10px 0 0 0;\r\n}\r\n\r\n.row1 .item {\r\n    -ms-flex-preferred-size: 50%;\r\n        flex-basis: 50%;\r\n    min-height: 230px;\r\n}\r\n\r\n.item {\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -webkit-box-flex: 1;\r\n        -ms-flex-positive: 1;\r\n            flex-grow: 1;\r\n    -ms-flex-negative: 1;\r\n        flex-shrink: 1;\r\n    -ms-flex-preferred-size: 25%;\r\n        flex-basis: 25%;\r\n    -webkit-box-pack: end;\r\n        -ms-flex-pack: end;\r\n            justify-content: flex-end;\r\n    margin: 20px 0px;\r\n    min-height: 192px;\r\n    position: relative;\r\n}\r\n\r\n.item .content {\r\n    background-color: rgba(255, 255, 255, .8);\r\n    padding: 5px;\r\n}\r\n\r\n@media (max-width: 1170px) {\r\n    .main-content {\r\n        max-width: 968px;\r\n    }\r\n    \r\n    .row2 {\r\n        -ms-flex-wrap: wrap;\r\n            flex-wrap: wrap;\r\n    }\r\n    .row2 .item {\r\n        -ms-flex-preferred-size: 47%;\r\n            flex-basis: 47%;\r\n        /* margin: 10px 0; */\r\n    }\r\n\r\n    \r\n}\r\n\r\n@media (max-width: 991px) {\r\n    .main-content {\r\n        max-width: 767px;\r\n    }\r\n    .row1 {\r\n        -webkit-box-orient: vertical;\r\n        -webkit-box-direction: normal;\r\n            -ms-flex-direction: column;\r\n                flex-direction: column;\r\n    }\r\n}\r\n\r\n@media (min-width: 768px) and (max-width: 991px) {\r\n    .row2 .item {\r\n        -webkit-box-flex: 0;\r\n            -ms-flex: 0 0 47%;\r\n                flex: 0 0 47%;\r\n    }\r\n}\r\n\r\n@media (max-width: 767px) {\r\n    \r\n    .products {\r\n        -ms-flex-wrap: wrap;\r\n            flex-wrap: wrap;\r\n    }\r\n\r\n    .products .product {\r\n        -ms-flex-preferred-size: 50%;\r\n            flex-basis: 50%;\r\n        margin-bottom: 1em;\r\n    }\r\n\r\n    .accessories {\r\n        -webkit-box-orient: vertical;\r\n        -webkit-box-direction: normal;\r\n            -ms-flex-direction: column;\r\n                flex-direction: column;\r\n    }\r\n    \r\n    .row2 {\r\n        -webkit-box-orient: vertical;\r\n        -webkit-box-direction: normal;\r\n            -ms-flex-direction: column;\r\n                flex-direction: column;\r\n    }\r\n\r\n    .item {\r\n        width: 100%;\r\n    }\r\n\r\n    .xs-hidden {\r\n        display: none;\r\n    }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n    .row2 {\r\n        -webkit-box-orient: horizontal;\r\n        -webkit-box-direction: normal;\r\n            -ms-flex-direction: row;\r\n                flex-direction: row;\r\n        -ms-flex-wrap: nowrap;\r\n            flex-wrap: nowrap;\r\n    }\r\n\r\n    .item {\r\n        margin: 10px !important;\r\n    }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    #float {\r\n        position: absolute;\r\n        right: 10px; \r\n        top: 10px; \r\n        width: 48%; \r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<app-carousel></app-carousel>\r\n\r\n<div class=\"main-content\">\r\n  <div class=\"popular-products\">\r\n  \r\n    <h2 class=\"title\">Browse Popular Products</h2>\r\n  \r\n    <ul class=\"products\">\r\n      <li class=\"product\">\r\n        <div>\r\n          <img src=\"https://i.dell.com/sites/imagecontent/app-merchandizing/responsive/HomePage/en/PublishingImages/laptop-inspiron-15-5559-front-usage-gray-150x120.png\" alt=\"\">\r\n        </div>\r\n        <a href=\"#\">Laptops</a>\r\n      </li>\r\n  \r\n      <li class=\"product\">\r\n        <div>\r\n          <img src=\"https://i.dell.com/sites/imagecontent/app-merchandizing/responsive/HomePage/en/PublishingImages/22437-home-desktop-inspiron-3650-silver-3656-red-150x120.png\" alt=\"\">\r\n        </div>\r\n        <a href=\"#\">Desktops</a>\r\n      </li>\r\n  \r\n      <li class=\"product\">\r\n        <div>\r\n          <img src=\"https://i.dell.com/sites/imagecontent/app-merchandizing/responsive/HomePage/en/PublishingImages/workstation-precision-5510-3420-150x120.png\" alt=\"\">\r\n        </div>\r\n        <a href=\"#\">Workstations</a>\r\n      </li>\r\n  \r\n      <li class=\"product\">\r\n        <div>\r\n          <img src=\"https://i.dell.com/sites/imagecontent/app-merchandizing/responsive/HomePage/en/PublishingImages/24042-ena-monitor-s2718d-150x120.png\" alt=\"\">\r\n        </div>\r\n        <a href=\"#\">Monitors</a>\r\n      </li>\r\n  \r\n      <li class=\"product\">\r\n        <div>\r\n          <img src=\"https://i.dell.com/sites/imagecontent/app-merchandizing/responsive/HomePage/en/PublishingImages/24474-ena-backpack-17-keyboard-mouse-km171-speaker-bose-soundlink-revole-plus-150x120.png\" alt=\"\">\r\n        </div>\r\n        <a href=\"#\">PC Accessories</a\r\n          ></li>\r\n  \r\n      <li class=\"product\">\r\n        <div>\r\n          <img src=\"https://i.dell.com/sites/imagecontent/app-merchandizing/responsive/HomePage/en/PublishingImages/server-poweredge-tower-rack-150x120.png\" alt=\"\">\r\n        </div>\r\n        <a href=\"#\">Servers</a>\r\n      </li>\r\n  \r\n    </ul>\r\n  \r\n  </div>\r\n\r\n  <div class=\"explore-accessories\">\r\n    <h2 class=\"title\">Explore Electronics &amp; Accessories</h2>\r\n    <div class=\"accessories\">\r\n\r\n      <div class=\"accessory\">\r\n        <div class=\"img-container\"><img src=\"https://i.dell.com/sites/imagecontent/app-merchandizing/responsive/HomePage/en/PublishingImages/2048-dell_com-category-image-v2-570x283.jpg\" alt=\"\"></div>\r\n        <button class=\"cta-btn\">Shop Gaming</button>\r\n      </div>\r\n\r\n      <div class=\"accessory\">\r\n        <div class=\"img-container\"><img src=\"https://i.dell.com/sites/imagecontent/app-merchandizing/responsive/HomePage/en/PublishingImages/24106-ena-backpack-timbuk-2-prompt-messenger-headset-ae2-video-server-camera-arlo-vms3230-570x283.jpg\" alt=\"\"></div>\r\n        <button class=\"cta-btn\">Shop for Work</button>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"idk\">\r\n    <div class=\"row row1\">\r\n\r\n      <div class=\"item\" style=\"background-image: url('http://i.dell.com/sites/imagecontent/app-merchandizing/responsive/HomePage/en/PublishingImages/precision-canvas-2718-720x245.jpg');\">\r\n        <div class=\"content\" id=\"float\">\r\n          <h2 class=\"title\"><a href=\"#\">Break creative boundaries.</a></h2>\r\n          <p class=\"details\"><a href=\"#\">Meet Dell Canvas, a 27&quot; workspace that empowers natural digital creation.</a></p>\r\n          <button class=\"cta-btn green xs-hidden\">Start Creating</button>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"item\" style=\"background-image: url('http://i.dell.com/sites/imagecontent/app-merchandizing/responsive/HomePage/en/PublishingImages/centered-poweredge-r730-poweredge-t630-v2-720x245.jpg');\">\r\n        <div class=\"content\">\r\n            <h2 class=\"title\"><a href=\"#\">Use coupon SERVER250 for extra dollars off during our biggest sale of the year.</a></h2>            \r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"row row2\">\r\n\r\n      <div class=\"item\" style=\"background-image: url('http://i.dell.com/sites/imagecontent/app-merchandizing/responsive/HomePage/en/PublishingImages/in11-1478-support-3-17-optimized-2.jpg');\">\r\n        <div class=\"content\">\r\n            <h2 class=\"title\"><a href=\"#\">Dell Support: Run diagnostics, download drivers and more.</a></h2>            \r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"item\" style=\"background-image: url('http://i.dell.com/sites/imagecontent/app-merchandizing/responsive/HomePage/en/PublishingImages/harvey-rescue-352x245.jpg');\">\r\n        <div class=\"content\">\r\n            <h2 class=\"title\"><a href=\"#\">Hurricane Harvey: Find out how Dell Technologies is supporting.</a></h2>            \r\n        </div>\r\n      </div>\r\n\r\n        <div class=\"item\" style=\"background-image: url('http://i.dell.com/sites/imagecontent/app-merchandizing/responsive/HomePage/en/PublishingImages/24810-bf-laptop-xps-13-9360-monitor-u2417h-inspiron-3668-352x245.jpg');\">\r\n          <div class=\"content\">\r\n              <h2 class=\"title\"><a href=\"#\">Savings up to $200 on select XPS PCs. No coupon necessary.</a></h2>            \r\n          </div>\r\n        </div>\r\n\r\n      <div class=\"item\" style=\"background-image: url('http://i.dell.com/sites/imagecontent/app-merchandizing/responsive/HomePage/en/PublishingImages/pcaas-banner-latitude-7000-352-245.png');\">\r\n        <div class=\"content\">\r\n            <h2 class=\"title\"><a href=\"#\">Reduce the daily burden and cost of IT management with Dell PC as a Service.</a></h2>            \r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/shared/Responsive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Responsive; });
var Responsive = (function () {
    function Responsive() {
        this.setBreakpoints();
        window.addEventListener("resize", this.setBreakpoints.bind(this));
    }
    Responsive.prototype.setBreakpoints = function () {
        this.isMobile = window.innerWidth < 768;
        this.isTablet = window.innerWidth >= 768 && window.innerWidth < 992;
        this.isDesktop = window.innerWidth >= 992 && window.innerWidth < 1200;
        this.isLargeDesktop = window.innerWidth >= 1200;
    };
    return Responsive;
}());



/***/ }),

/***/ "../../../../../src/app/components/shared/carousel/carousel.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".carousel {\r\n    overflow: hidden;\r\n}\r\n\r\n.content {\r\n    background-color: rgba(255, 255, 255, .9);\r\n    box-sizing: border-box;\r\n    padding: 1em;\r\n    width: 100%;\r\n}\r\n\r\n.content .details {\r\n    color: rgb(68, 68, 68);\r\n    font-size: 14px;\r\n    margin: 10px 0px;\r\n}\r\n\r\n.content .minor-details {\r\n    color: rgb(68, 68, 66);    \r\n    font-size: 12px;\r\n    margin-bottom: 0;\r\n}\r\n\r\n.content button {\r\n    background: #408001;\r\n    border: none;\r\n    color: white;\r\n    padding: 10px 15px;\r\n    font-family: inherit;\r\n    font-size: 14px;\r\n    margin: 1em 0 0 0;\r\n}\r\n\r\n.slides {\r\n    position: relative;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    height: 100%;\r\n    width: 300%;\r\n}\r\n\r\n.slide {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -webkit-box-pack: end;\r\n        -ms-flex-pack: end;\r\n            justify-content: flex-end;\r\n    float: left;\r\n    position: relative;\r\n    width: 33.33%;\r\n    height: 100%;\r\n    opacity: 0;\r\n    transition: -webkit-transform .5s ease-in-out;\r\n    transition: transform .5s ease-in-out;\r\n    transition: transform .5s ease-in-out, -webkit-transform .5s ease-in-out;\r\n}\r\n\r\n.slide img {\r\n    max-width: 100%;\r\n}\r\n\r\n.title {\r\n    color: #0087c7;\r\n    margin: 0;\r\n    font-weight: 400;\r\n    font-size: 20px;\r\n}\r\n\r\n.pagination {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    list-style: none;\r\n    padding: 0;\r\n    margin: 0;\r\n    width: 100%;\r\n}\r\n\r\n.pagination .item {\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    background: white;\r\n    border: solid thin rgba(198, 198, 198, 0.64);\r\n    box-sizing: border-box;\r\n    color: #0087c7;\r\n    cursor: pointer;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-flex: 1;\r\n        -ms-flex-positive: 1;\r\n            flex-grow: 1;\r\n    height: 35px;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    padding: 1em 0;\r\n}\r\n\r\n.pagination .item:hover {\r\n    background-color: #eee;\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n    color: inherit;\r\n}\r\n\r\n.pagination .item.active {\r\n    border-bottom: solid 4px #007db8;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    .slides {\r\n\r\n    }\r\n    .slide {\r\n        \r\n    }\r\n    .content {\r\n        position: absolute;\r\n        left: 50%;\r\n        top: 20px;\r\n        -webkit-transform: translateX(-100%);\r\n                transform: translateX(-100%);\r\n        max-width: 420px;\r\n        width: 42%;\r\n    }\r\n}\r\n\r\n.slide0 { left: -33.33%; }\r\n.slide1 { left: -66.66%; }\r\n.slide2 { left: -99.99%; }\r\n\r\n.slide.active, .slide.slide-out { opacity: 1; }\r\n\r\n.slide.active { -webkit-transform: translateX(100%); transform: translateX(100%); }\r\n\r\n.slide.slide-out { -webkit-transform: translateX(200%); transform: translateX(200%); }\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/shared/carousel/carousel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"carousel\">\r\n  <div class=\"slides\">\r\n\r\n      <div [ngClass]=\"{ 'slide': true, 'slide0': true, 'active': activeSlide === 0, 'slide-out': slideOut ===  0}\">\r\n        <img class=\"hero-image\" src=\"http://i.dell.com/sites/imagecontent/app-merchandizing/responsive/HomePage/en/PublishingImages/Retargeting/dhs/24834-home-desktop-inspiron-3668-laptop-xps-13-9360-monitor-e2417h-2800x944.jpg\" alt=\"\">\r\n        <div class=\"content\">\r\n          <h2 class=\"title\">Cyber Week Sale</h2>\r\n          <p class=\"details\">There's still time to save. Shop Cyber Week deals up to 50% off.</p>\r\n          <p class=\"minor-details\">While supplies last. Get great financing with Dell Preferred Account.^</p>\r\n          <button>Show Now</button>\r\n        </div>\r\n      </div>  \r\n   \r\n      <div [ngClass]=\"{ 'slide': true, 'slide1': true, 'active': activeSlide === 1, 'slide-out': slideOut ===  1}\">\r\n        <img class=\"hero-image\" src=\"http://i.dell.com/sites/imagecontent/app-merchandizing/responsive/HomePage/en/PublishingImages/Retargeting/dhs/24290-laptop-xps-13-9360-desktop-xps-8910-se-2800x944.jpg\" alt=\"\">\r\n        <div class=\"content\">\r\n          <h2 class=\"title\">Cyber Week XPS PCs</h2>\r\n          <p class=\"details\">There's still time to save. Shop Cyber Week deals up to 50% off.</p>\r\n          <p class=\"minor-details\">While supplies last. Get great financing with Dell Preferred Account.^</p>\r\n          <button>Show Now</button>\r\n        </div>\r\n      </div>\r\n   \r\n   \r\n      <div [ngClass]=\"{ 'slide': true, 'slide2': true, 'active': activeSlide === 2, 'slide-out': slideOut ===  2}\">\r\n        <img class=\"hero-image\" src=\"http://i.dell.com/sites/imagecontent/app-merchandizing/responsive/Shop/SnP/Home/en/PublishingImages/24769-tab-samsung-galaxy-s3-turntable-audiotechnica-lp60-roomba-vaccum-robot-2800x944.jpg\" alt=\"\">\r\n        <div class=\"content\">\r\n          <h2 class=\"title\">Cyber Week electronics savings continue.</h2>\r\n          <p class=\"details\">Save up to 50% on TVs, gaming, smart home and more. Free shipping on everything.</p>\r\n          <button>Show Now</button>\r\n        </div>\r\n      </div>\r\n   \r\n  </div>\r\n\r\n  <ul class=\"pagination\">\r\n    <li [ngClass]=\"{ 'item': true, 'active': activeSlide === 0 }\" (click)=\"setSlide(0)\">\r\n      <a *ngIf=\"isMobile || isTablet\" href=\"#\">1</a>\r\n      <a *ngIf=\"isDesktop || isLargeDesktop\" href=\"#\">Cyber Week sale.</a>\r\n    </li>\r\n    <li [ngClass]=\"{ 'item': true, 'active': activeSlide === 1 }\" (click)=\"setSlide(1)\">\r\n      <a *ngIf=\"isMobile || isTablet\" href=\"#\">2</a>\r\n      <a *ngIf=\"isDesktop || isLargeDesktop\" href=\"#\">Cyber Week for business.</a>\r\n    </li>\r\n    <li [ngClass]=\"{ 'item': true, 'active': activeSlide === 2 }\" (click)=\"setSlide(2)\">\r\n      <a *ngIf=\"isMobile || isTablet\" href=\"#\">3</a>\r\n      <a *ngIf=\"isDesktop || isLargeDesktop\" href=\"#\">Premium Support Plus.</a>\r\n    </li>\r\n  </ul>\r\n  \r\n  <div style=\"clear: both\"></div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/shared/carousel/carousel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarouselComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Responsive__ = __webpack_require__("../../../../../src/app/components/shared/Responsive.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CarouselComponent = (function (_super) {
    __extends(CarouselComponent, _super);
    function CarouselComponent() {
        return _super.call(this) || this;
    }
    CarouselComponent.prototype.ngOnInit = function () {
        this.activeSlide = 0;
        this.numSlides = 3;
        this.slideOut = -1;
        this.startAutoSlideTransition();
    };
    CarouselComponent.prototype.startAutoSlideTransition = function () {
        var _this = this;
        this.autoTransition = setInterval(function () { return _this.increaseSlide(); }, 5000);
    };
    CarouselComponent.prototype.stopAutoSlideTransition = function () {
        clearInterval(this.autoTransition);
    };
    CarouselComponent.prototype.increaseSlide = function () {
        this.slideOut = this.activeSlide;
        this.activeSlide = (this.activeSlide + 1) % this.numSlides;
    };
    CarouselComponent.prototype.decreaseSlide = function () {
        this.slideOut = this.activeSlide;
        var nextSlide = this.activeSlide - 1;
        var isLessThanZero = nextSlide <= -1;
        this.activeSlide = isLessThanZero ? this.numSlides : nextSlide;
    };
    CarouselComponent.prototype.setSlide = function (slide) {
        this.stopAutoSlideTransition();
        if (this.activeSlide === slide) {
            this.slideOut = -1;
        }
        if (this.activeSlide !== slide) {
            this.slideOut = this.activeSlide;
            this.activeSlide = slide;
        }
        this.startAutoSlideTransition();
    };
    CarouselComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-carousel',
            template: __webpack_require__("../../../../../src/app/components/shared/carousel/carousel.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/shared/carousel/carousel.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CarouselComponent);
    return CarouselComponent;
}(__WEBPACK_IMPORTED_MODULE_1__Responsive__["a" /* Responsive */]));



/***/ }),

/***/ "../../../../../src/app/components/shared/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footer {\r\n    list-style: none;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.footer .item {\r\n    border-bottom: solid thin;\r\n    color: inherit;\r\n    padding: 10px;\r\n    text-decoration: none;\r\n    -webkit-box-flex: 0;\r\n        -ms-flex: 0 0 0px;\r\n            flex: 0 0 0;\r\n    white-space: nowrap;\r\n}\r\n\r\n.top {\r\n    background: rgba(185, 181, 155, .49);\r\n    color: rgb(68, 68, 68);    \r\n}\r\n\r\n.top .item {\r\n    border-bottom-color: rgb(68, 68, 68);    \r\n}\r\n\r\n.bottom {\r\n    background: #007db8;    \r\n    color: white;    \r\n}\r\n\r\n.item a {\r\n    text-decoration: none;\r\n    color: inherit;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    .footer {\r\n        display: -webkit-box;\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        -webkit-box-align: center;\r\n            -ms-flex-align: center;\r\n                align-items: center;\r\n        font-size: 14px;\r\n    }\r\n\r\n    .footer.bottom {\r\n        font-size: 10px;\r\n    }\r\n\r\n    .footer .item {\r\n        border: none;\r\n        text-align: left;\r\n    }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/shared/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"top\">\r\n  <app-responsive-container>\r\n    <ul class=\"footer\">\r\n      <li class=\"item\"><a href=\"#\">About Dell</a></li>\r\n      <li class=\"item\"><a href=\"#\">Careers</a></li>\r\n      <li class=\"item\"><a href=\"#\">Community</a></li>\r\n      <li class=\"item\"><a href=\"#\">Events</a></li>\r\n      <li class=\"item\"><a href=\"#\">Partner Program</a></li>\r\n      <li class=\"item\"><a href=\"#\">Premier</a></li>\r\n      <li class=\"item\"><a href=\"#\">Dell Technologies</a></li>\r\n      <li class=\"item\"><a href=\"#\">United States</a></li>\r\n    </ul>\r\n  </app-responsive-container>\r\n</div>\r\n\r\n<div class=\"bottom\">\r\n  <app-responsive-container>\r\n    <ul class=\"footer\">\r\n      <li class=\"item\"><a href=\"#\">&#9400; 2017 Dell</a></li>\r\n      <li class=\"item\"><a href=\"#\">Terms of Sale</a></li>\r\n      <li class=\"item\"><a href=\"#\">Privacy Statement</a></li>\r\n      <li class=\"item\"><a href=\"#\">Ads &amp; Emails</a></li>\r\n      <li class=\"item\"><a href=\"#\">Legal &amp; Regulatory</a></li>\r\n      <li class=\"item\"><a href=\"#\">Corporate Social Responsibility</a></li>\r\n      <li class=\"item\"><a href=\"#\">Contact</a></li>\r\n      <li class=\"item\"><a href=\"#\">Feedback</a></li>\r\n    </ul>\r\n  </app-responsive-container>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/shared/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/components/shared/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/shared/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/shared/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n    padding: 0 10px;\r\n}\r\n\r\n.dell_logo {\r\n    height: 41px;\r\n}\r\n\r\n.header {\r\n    background: rgb(0, 125, 184);    \r\n    color: white;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    height: 60px;\r\n}\r\n\r\n.header i {\r\n    font-size: 20px;\r\n}\r\n\r\n.icons i {\r\n    margin-left: 1em;\r\n}\r\n\r\ni {\r\n    cursor: pointer;    \r\n}\r\n\r\n.search-container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-flex: 1;\r\n        -ms-flex-positive: 1;\r\n            flex-grow: 1;\r\n}\r\n\r\n.search {\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    position: relative;\r\n    margin-left: 24px;\r\n    max-width: 660px;\r\n    width: 70%;\r\n}\r\n\r\n.search input {\r\n    border: solid thin rgba(204, 191, 191, 0.774);\r\n    color: rgb(204, 204, 204);\r\n    width: 100%;\r\n    padding: 4px;\r\n}\r\n\r\n.search button {\r\n    background: rgb(0, 125, 184);\r\n    border: none;\r\n    color: white;\r\n    font-family: inherit;\r\n    font-size: 14px;\r\n    padding: 4px 12px;\r\n    position: absolute;\r\n    right: 2px;\r\n}\r\n\r\n.mobile-search-bar {\r\n    background-color: white;\r\n    display: none;\r\n    width: 100%;\r\n}\r\n\r\n.mobile-search-bar input {\r\n    border: solid thin rgb(204, 204, 204);\r\n    height: 30px;\r\n    width: 100%;\r\n    margin: 7px 0px;\r\n    padding: 0px 8px;\r\n    font-size: 14px;\r\n}\r\n\r\n.mobile-search-bar input:focus {\r\n    border: solid thin #007db8;\r\n}\r\n\r\n.mobile-search-bar i {\r\n    position: absolute;\r\n    right: 0px;\r\n    background-color: #007db8;\r\n    border: solid thin #007db8;\r\n    color: white;\r\n    width: 50px;\r\n    height: 30px;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n}\r\n\r\n.mobile-search-bar .search-container {\r\n    -webkit-box-flex: 0;\r\n        -ms-flex-positive: 0;\r\n            flex-grow: 0;\r\n    width: 90%;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    position: relative;\r\n}\r\n.mobile-search-bar.active {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n}\r\n\r\n.blue-bg {\r\n    background-color: #0087c7;\r\n    padding-bottom: 5px;\r\n}\r\n\r\n@media (max-width: 767px) {\r\n    .search-container {\r\n        -webkit-box-pack: end;\r\n            -ms-flex-pack: end;\r\n                justify-content: flex-end;\r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n::-webkit-input-placeholder { /* Chrome/Opera/Safari */\r\n    color: lightgray;\r\n  }\r\n  ::-moz-placeholder { /* Firefox 19+ */\r\n    color: lightgray;\r\n  }\r\n  :-ms-input-placeholder { /* IE 10+ */\r\n    color: lightgray;\r\n  }\r\n  :-moz-placeholder { /* Firefox 18- */\r\n    color: lightgray;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/shared/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\r\n  <app-responsive-container style=\"width: 100%;\">\r\n    \r\n    <div class=\"wrapper\">\r\n    \r\n      <img src=\"assets/images/dell_logo.png\" alt=\"dell logo\" class=\"dell_logo\">\r\n\r\n      <div class=\"search-container\">\r\n        \r\n        <div *ngIf=\"!isMobile\" class=\"search\">\r\n          <button>Search</button>\r\n          <input type=\"text\" name=\"search\" placeholder=\"What can we help you find?\">\r\n        </div>\r\n        \r\n        <i \r\n          *ngIf=\"isMobile\"\r\n          class=\"fa fa-search\"\r\n          aria-hidden=\"true\"\r\n          (click)=\"toggleSearchBar()\"></i>    \r\n      </div>\r\n\r\n      <div class=\"icons\">\r\n        <i class=\"fa fa-user\" aria-hidden=\"true\"></i>\r\n        <span *ngIf=\"isDesktop || isLargeDesktop\">Sign In</span>\r\n        \r\n        <i *ngIf=\"isMobile || isTablet\" class=\"fa fa-bars\" aria-hidden=\"true\" (click)=\"toggleSideBar()\"></i>  \r\n      </div>\r\n      \r\n    </div>\r\n\r\n    \r\n  </app-responsive-container>\r\n</header>\r\n\r\n<div class=\"blue-bg\">\r\n  <div *ngIf=\"isMobile\" [ngClass]=\"{ 'mobile-search-bar': true, 'active': isMobileSearchBarActive }\">\r\n    <div class=\"search-container\">\r\n      <i *ngIf=\"isMobile\" class=\"fa fa-search\" aria-hidden=\"true\"></i>\r\n      <input type=\"text\" name=\"search\" placeholder=\"What can we help you find?\">\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/shared/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Responsive__ = __webpack_require__("../../../../../src/app/components/shared/Responsive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_side_bar_service__ = __webpack_require__("../../../../../src/app/services/side-bar.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = (function (_super) {
    __extends(HeaderComponent, _super);
    function HeaderComponent(sideBar) {
        var _this = _super.call(this) || this;
        _this.sideBar = sideBar;
        return _this;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.isMobileSearchBarActive = false;
    };
    HeaderComponent.prototype.toggleSideBar = function () {
        console.log("TOGGLING THE SIDEBAR");
        this.sideBar.toggleSideBar();
    };
    HeaderComponent.prototype.toggleSearchBar = function () {
        this.isMobileSearchBarActive = !this.isMobileSearchBarActive;
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/components/shared/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/shared/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_side_bar_service__["a" /* SideBarService */]])
    ], HeaderComponent);
    return HeaderComponent;
}(__WEBPACK_IMPORTED_MODULE_1__Responsive__["a" /* Responsive */]));



/***/ }),

/***/ "../../../../../src/app/components/shared/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fa {\r\n    position: absolute;\r\n    right: 15px;\r\n    top: 50%;\r\n    -webkit-transform: translateY(-50%);\r\n            transform: translateY(-50%);\r\n    font-size: 24px;\r\n}\r\n\r\na {\r\n    color: inherit;\r\n    padding: 10px 15px;\r\n    text-decoration: none;\r\n}\r\n\r\n.navbar {\r\n    border-top: solid thin rgb(1, 108, 158);\r\n    box-shadow: 0 1px 2px 3px rgba(0,0,0,.2);\r\n    background: #007db8;\r\n    margin: 0;\r\n}\r\n\r\n.list-item {\r\n    -ms-flex-item-align: start;\r\n        align-self: start;\r\n    color: white;\r\n    min-height: 35px;\r\n    list-style: none;\r\n    padding: 0;\r\n    position: relative;\r\n    white-space: nowrap;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n}\r\n\r\n.list-item__title {\r\n    height: 35px;\r\n    line-height: 35px;\r\n    position: relative;\r\n}\r\n\r\n.sublist, .sublist__sublist {\r\n    background-color: white;\r\n    display: none;\r\n    list-style: none;\r\n    margin: 0;\r\n    padding: 0;\r\n    position: absolute;\r\n    z-index: 1;  /* Need the z-index to position above the carousel */\r\n}\r\n\r\n.sublist li {\r\n    padding: 10px 0;\r\n    color: #007db8;\r\n}\r\n\r\n.sublist li:hover {\r\n    background-color: #cce7f3\r\n}\r\n\r\n.sublist__sublist .sublist__item:first-child {\r\n    border-top: solid thin #00000061;\r\n    margin-bottom: 1px;\r\n}\r\n\r\n.sublist__sublist .sublist__item:last-child a {\r\n    border-bottom: none;\r\n}\r\n\r\n.sublist__sublist .sublist__item a {\r\n    margin-left: 15px;\r\n}\r\n\r\n.sublist__sublist .sublist__item {\r\n    border: none;\r\n}\r\n\r\n.start-below-navbar {\r\n    -webkit-transform: translateY(35px);\r\n            transform: translateY(35px);\r\n}\r\n\r\n.wrapper {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n\r\n.left-blue-border {\r\n    border-left: solid 4px rgb(0, 125, 184) !important;\r\n}\r\n\r\n.no-border {\r\n    border: none;\r\n}\r\n\r\n@media (min-width: 992px) {\r\n    .list-item:hover {\r\n        color: #007db8;\r\n        background-color: white;\r\n    }\r\n\r\n    .list-item:hover .sublist {\r\n        display: -webkit-box;\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        -webkit-box-orient: vertical;\r\n        -webkit-box-direction: normal;\r\n            -ms-flex-direction: column;\r\n                flex-direction: column;\r\n    }   \r\n}\r\n\r\n@media (max-width: 991px) {\r\n    .list-item.active .sublist {\r\n        border-top: solid thin #00000061;\r\n        border-radius: 4px;\r\n        display: -webkit-box;\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        -webkit-box-orient: vertical;\r\n        -webkit-box-direction: normal;\r\n            -ms-flex-direction: column;\r\n                flex-direction: column;\r\n        position: relative;\r\n        -webkit-transform: translateY(0);\r\n                transform: translateY(0);\r\n        width: 98%;\r\n        left: 2%;\r\n    }\r\n    .navbar {\r\n        background: rgb(238, 238, 238);\r\n        height: 100%;        \r\n    }\r\n    \r\n    .navbar li {\r\n        border-bottom: solid thin #00000061;\r\n        box-sizing: border-box;\r\n        color: #007db8;    \r\n        list-style: none;\r\n        width: 100%;\r\n        font-size: 14px;\r\n    }\r\n    \r\n    .wrapper {\r\n        -webkit-box-orient: vertical;\r\n        -webkit-box-direction: normal;\r\n            -ms-flex-direction: column;\r\n                flex-direction: column;\r\n        width: 100%;\r\n    }\r\n\r\n    .sublist__item {\r\n        padding: 0 !important;\r\n    }\r\n\r\n    .sublist__sublist .sublist__item a {\r\n        border-bottom: dotted 1px #aaa;\r\n        width: 100%;\r\n        padding-left: 0;\r\n        display: inline-block;\r\n    }\r\n\r\n    .sublist__sublist {\r\n        display: none;\r\n    }\r\n\r\n    .sublist__item.active .sublist__sublist {\r\n        display: -webkit-box;\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        -webkit-box-orient: vertical;\r\n        -webkit-box-direction: normal;\r\n            -ms-flex-direction: column;\r\n                flex-direction: column;\r\n        position: relative;        \r\n        width: 100%;\r\n    }\r\n\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/shared/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar\">\r\n  <app-responsive-container>\r\n    <div class=\"wrapper\">\r\n      \r\n      <!-- Prdoucts -->\r\n      <li [ngClass]=\"{ 'list-item': true, 'active': activeListItem === 1 }\" (click)=\"setActiveListItem(1)\">\r\n        \r\n        <div class=\"list-item__title\">\r\n          <a href=\"#\">Products</a>\r\n          <i *ngIf=\"isMobile || isTablet\" [ngClass]=\"getIconStyles(1)\" aria-hidden=\"true\"></i>\r\n        </div>\r\n\r\n        <ul class=\"sublist start-below-navbar\">\r\n          \r\n          <li [ngClass]=\"{ 'sublist__item': true, 'active': activeSublistItem === 1}\" (click)=\"setActiveSublistItem($event, 1)\">\r\n            <div class=\"list-item__title\">\r\n                <a href=\"#\">Laptops</a>\r\n                <i *ngIf=\"isMobile || isTablet\" [ngClass]=\"getIconStyles(1, 1)\" aria-hidden=\"true\"></i>    \r\n            </div>\r\n            <ul class=\"sublist__sublist\">\r\n              <li class=\"left-blue-border sublist__item\"><a href=\"#\">For Home</a></li>\r\n              <li class=\"left-blue-border sublist__item\"><a href=\"#\">For Work</a></li>\r\n            </ul>\r\n          </li>\r\n\r\n          <li [ngClass]=\"{ 'sublist__item': true, 'active': activeSublistItem === 2}\" (click)=\"setActiveSublistItem($event, 2)\">\r\n            <div class=\"list-item__title\">\r\n                <a href=\"#\">Desktops &amp; All-in-One PCs</a>\r\n                <i *ngIf=\"isMobile || isTablet\" [ngClass]=\"getIconStyles(1, 2)\" aria-hidden=\"true\"></i>    \r\n            </div>\r\n            <ul class=\"sublist__sublist\">\r\n              <li class=\"left-blue-border sublist__item\"><a href=\"#\">For Home</a></li>\r\n              <li class=\"left-blue-border sublist__item\"><a href=\"#\">For Work</a></li>\r\n            </ul>\r\n          </li>\r\n\r\n          <li [ngClass]=\"{ 'sublist__item': true, 'active': activeSublistItem === 3}\" (click)=\"setActiveSublistItem($event, 3)\">\r\n            <div class=\"list-item__title\">\r\n                <a href=\"#\">Tablets &amp; 2-in-1 Laptops</a>\r\n                <i *ngIf=\"isMobile || isTablet\" [ngClass]=\"getIconStyles(1, 3)\" aria-hidden=\"true\"></i>    \r\n            </div>\r\n            <ul class=\"sublist__sublist\">\r\n              <li class=\"left-blue-border sublist__item\"><a href=\"#\">For Home</a></li>\r\n              <li class=\"left-blue-border sublist__item\"><a href=\"#\">For Work</a></li>\r\n            </ul>\r\n          </li>\r\n\r\n          <li [ngClass]=\"{ 'sublist__item': true, 'active': activeSublistItem === 4}\" (click)=\"setActiveSublistItem($event, 4)\">\r\n            <div class=\"list-item__title\">\r\n                <a href=\"#\">Gaming</a>\r\n                <i *ngIf=\"isMobile || isTablet\" [ngClass]=\"getIconStyles(1, 4)\" aria-hidden=\"true\"></i>    \r\n            </div>\r\n            <ul class=\"sublist__sublist\">\r\n              <li class=\"left-blue-border sublist__item\"><a href=\"#\">Alienware PCs</a></li>\r\n              <li class=\"left-blue-border sublist__item\"><a href=\"#\">Dell Gaming</a></li>\r\n            </ul>\r\n          </li>\r\n          \r\n          <li><a href=\"#\">Workstations</a></li>\r\n          <li><a href=\"#\">Thin Clients</a></li>\r\n          <li><a href=\"#\">Servers &amp; Storeage</a></li>\r\n\r\n          <li [ngClass]=\"{ 'sublist__item': true, 'active': activeSublistItem === 5}\" (click)=\"setActiveSublistItem($event, 5)\">\r\n            <div class=\"list-item__title\">\r\n                <a href=\"#\">Networking</a>\r\n                <i *ngIf=\"isMobile || isTablet\" [ngClass]=\"getIconStyles(1, 5)\" aria-hidden=\"true\"></i>    \r\n            </div>\r\n            <ul class=\"sublist__sublist\">\r\n              <li class=\"left-blue-border sublist__item\"><a href=\"#\">For Home</a></li>\r\n              <li class=\"left-blue-border sublist__item\"><a href=\"#\">For Work</a></li>\r\n            </ul>\r\n          </li>\r\n          \r\n          <li [ngClass]=\"{ 'sublist__item': true, 'active': activeSublistItem === 6}\" (click)=\"setActiveSublistItem($event, 6)\">\r\n            <div class=\"list-item__title\">\r\n                <a href=\"#\">Monitors</a>\r\n                <i *ngIf=\"isMobile || isTablet\" [ngClass]=\"getIconStyles(1, 6)\" aria-hidden=\"true\"></i>    \r\n            </div>\r\n            <ul class=\"sublist__sublist\">\r\n              <li class=\"left-blue-border sublist__item\"><a href=\"#\">For Home</a></li>\r\n              <li class=\"left-blue-border sublist__item\"><a href=\"#\">For Work</a></li>\r\n            </ul>\r\n          </li>\r\n\r\n          <li [ngClass]=\"{ 'sublist__item': true, 'active': activeSublistItem === 7}\" (click)=\"setActiveSublistItem($event, 7)\">\r\n            <div class=\"list-item__title\">\r\n                <a href=\"#\">Printers &amp; Ink</a>\r\n                <i *ngIf=\"isMobile || isTablet\" [ngClass]=\"getIconStyles(1, 7)\" aria-hidden=\"true\"></i>    \r\n            </div>\r\n            <ul class=\"sublist__sublist\">\r\n              <li class=\"left-blue-border sublist__item\"><a href=\"#\">For Home</a></li>\r\n              <li class=\"left-blue-border sublist__item\"><a href=\"#\">For Work</a></li>\r\n            </ul>\r\n          </li>\r\n\r\n          <li [ngClass]=\"{ 'sublist__item': true, 'active': activeSublistItem === 8}\" (click)=\"setActiveSublistItem($event, 8)\">\r\n            <div class=\"list-item__title\">\r\n                <a href=\"#\">Software</a>\r\n                <i *ngIf=\"isMobile || isTablet\" [ngClass]=\"getIconStyles(1, 8)\" aria-hidden=\"true\"></i>    \r\n            </div>\r\n            <ul class=\"sublist__sublist\">\r\n              <li class=\"left-blue-border sublist__item\"><a href=\"#\">For Home</a></li>\r\n              <li class=\"left-blue-border sublist__item\"><a href=\"#\">For Work</a></li>\r\n            </ul>\r\n          </li>\r\n\r\n          <li [ngClass]=\"{ 'sublist__item': true, 'active': activeSublistItem === 9}\" (click)=\"setActiveSublistItem($event, 9)\">\r\n            <div class=\"list-item__title\">\r\n                <a href=\"#\">Electronics &amp; Acessories</a>\r\n                <i *ngIf=\"isMobile || isTablet\" [ngClass]=\"getIconStyles(1, 9)\" aria-hidden=\"true\"></i>    \r\n            </div>\r\n            <ul class=\"sublist__sublist\">\r\n              <li class=\"left-blue-border sublist__item\"><a href=\"#\">For Home</a></li>\r\n              <li class=\"left-blue-border sublist__item\"><a href=\"#\">For Work</a></li>\r\n            </ul>\r\n          </li>\r\n\r\n          <li><a href=\"#\">Gateways &amp; Embedded PCs</a></li>\r\n\r\n        </ul>\r\n      </li>\r\n\r\n      <!-- Solutions & support -->\r\n      <li [ngClass]=\"{ 'list-item': true, 'active': activeListItem === 2 }\" (click)=\"setActiveListItem(2)\">\r\n        <div class=\"list-item__title\">\r\n          <a href=\"#\">Solutions &amp; Services</a> \r\n          <i *ngIf=\"isMobile || isTablet\" [ngClass]=\"{ 'fa': true, 'fa-caret-down': activeListItem !== 2, 'fa-caret-up': activeListItem === 2 }\" aria-hidden=\"true\"></i>\r\n        </div>\r\n        <ul class=\"sublist start-below-navbar\">\r\n          <li><a href=\"#\">View All Solutions &amp; Services</a></li>\r\n\r\n          <li [ngClass]=\"{ 'sublist__item': true, 'active': activeSublistItem === 2}\" (click)=\"setActiveSublistItem($event, 2)\">\r\n            <div class=\"list-item__title\">\r\n                <a href=\"#\">Industries</a>\r\n                <i *ngIf=\"isMobile || isTablet\" [ngClass]=\"getIconStyles(2, 2)\" aria-hidden=\"true\"></i>    \r\n            </div>\r\n            <ul class=\"sublist__sublist\">\r\n              <li class=\"left-blue-border sublist__item\"><a href=\"#\">Education</a></li>\r\n              <li class=\"left-blue-border sublist__item\"><a href=\"#\">Energy</a></li>\r\n              <li class=\"left-blue-border sublist__item\"><a href=\"#\">Federal Government</a></li>\r\n              <li class=\"left-blue-border sublist__item\"><a href=\"#\">Financial Services</a></li>\r\n              <li class=\"left-blue-border sublist__item\"><a href=\"#\">Healthcare</a></li>\r\n              <li class=\"left-blue-border sublist__item\"><a href=\"#\">Manufacturing</a></li>\r\n              <li class=\"left-blue-border sublist__item\"><a href=\"#\">Original Equipment Manufacturers</a></li>\r\n              <li class=\"left-blue-border sublist__item\"><a href=\"#\">Retail</a></li>\r\n              <li class=\"left-blue-border sublist__item\"><a href=\"#\">State &amp; Local Government</a></li>\r\n              <li class=\"left-blue-border sublist__item\"><a href=\"#\">Telecommunications, Media &amp; Entertainment</a></li>\r\n            </ul>\r\n          </li>\r\n\r\n          <li [ngClass]=\"{ 'sublist__item': true, 'active': activeSublistItem === 3}\" (click)=\"setActiveSublistItem($event, 3)\">\r\n            <div class=\"list-item__title\">\r\n                <a href=\"#\">Services</a>\r\n                <i *ngIf=\"isMobile || isTablet\" [ngClass]=\"getIconStyles(2, 3)\" aria-hidden=\"true\"></i>    \r\n            </div>\r\n            <ul class=\"sublist__sublist\">\r\n              <li class=\"left-blue-border sublist__item\"><a href=\"#\">View All Services</a></li>\r\n              <li class=\"left-blue-border sublist__item\"><a href=\"#\">IT Consulting</a></li>\r\n              <li class=\"left-blue-border sublist__item\"><a href=\"#\">Deployment Services</a></li>\r\n              <li class=\"left-blue-border sublist__item\"><a href=\"#\">Support Services For Home</a></li>\r\n              <li class=\"left-blue-border sublist__item\"><a href=\"#\">Support Services For Business</a></li>\r\n              <li class=\"left-blue-border sublist__item\"><a href=\"#\">Asset Resa;e &amp; Recycling</a></li>\r\n              <li class=\"left-blue-border sublist__item\"><a href=\"#\">Financing &amp; Leasing</a></li>\r\n              <li class=\"left-blue-border sublist__item\"><a href=\"#\">Retail</a></li>\r\n              <li class=\"left-blue-border sublist__item\"><a href=\"#\">Application Services</a></li>\r\n              <li class=\"left-blue-border sublist__item\"><a href=\"#\">Managed Services</a></li>\r\n            </ul>\r\n          </li>\r\n\r\n          <li><a href=\"#\">Big Data</a></li>\r\n          <li><a href=\"#\">Cloud</a></li>\r\n          <li><a href=\"#\">Data Center</a></li>\r\n          <li><a href=\"#\">Desktop Virtualization</a></li>\r\n          <li><a href=\"#\">Internet of Things</a></li>\r\n          <li><a href=\"#\">Mobile</a></li>\r\n          <li><a href=\"#\">PC as a Service (PCaaS)</a></li>\r\n          <li><a href=\"#\">Security</a></li>\r\n          <li><a href=\"#\">Training &amp; Certification</a></li>\r\n\r\n          <li [ngClass]=\"{ 'sublist__item': true, 'active': activeSublistItem === 4}\" (click)=\"setActiveSublistItem($event, 4)\">\r\n            <div class=\"list-item__title\">\r\n                <a href=\"#\">Dell EMC Solutions</a>\r\n                <i *ngIf=\"isMobile || isTablet\" [ngClass]=\"getIconStyles(2, 4)\" aria-hidden=\"true\"></i>    \r\n            </div>\r\n            <ul class=\"sublist__sublist\">\r\n              <li class=\"left-blue-border sublist__item\"><a href=\"#\">View All Dell EMC Solutions</a></li>\r\n              <li class=\"left-blue-border sublist__item\"><a href=\"#\">All-Flash</a></li>\r\n              <li class=\"left-blue-border sublist__item\"><a href=\"#\">Converged Infrastructure</a></li>\r\n            </ul>\r\n          </li>\r\n\r\n        </ul>\r\n      </li>\r\n      \r\n      <!-- Support -->\r\n      <li [ngClass]=\"{ 'list-item': true, 'active': activeListItem === 3 }\" (click)=\"setActiveListItem(3)\">\r\n        <div class=\"list-item__title\">\r\n          <a href=\"#\">Support</a> \r\n          <i *ngIf=\"isMobile || isTablet\" [ngClass]=\"{ 'fa': true, 'fa-caret-down': activeListItem !== 3, 'fa-caret-up': activeListItem === 3 }\" aria-hidden=\"true\"></i>\r\n        </div>\r\n        <ul class=\"sublist start-below-navbar\">\r\n          <li><a href=\"#\">View All Support</a></li>\r\n          <li><a href=\"#\">Diagnostics</a></li>\r\n          <li><a href=\"#\">Drivers &amp; Downloads</a></li>\r\n          <li><a href=\"#\">Warranty</a></li>\r\n          <li><a href=\"#\">Manuals</a></li>\r\n          <li><a href=\"#\">Support Library</a></li>\r\n          <li><a href=\"#\">Order Support</a></li>\r\n          <li><a href=\"#\">Community</a></li>\r\n          <li><a href=\"#\">Retail Registration</a></li>\r\n          <li><a href=\"#\">Ownership Transfer</a></li>\r\n          <li><a href=\"#\">Contact Us</a></li>\r\n        </ul>\r\n        \r\n      </li>\r\n      \r\n      <!-- Deals -->\r\n      <li [ngClass]=\"{ 'list-item': true, 'active': activeListItem === 4 }\" (click)=\"setActiveListItem(4)\">\r\n        <div class=\"list-item__title\">\r\n          <a href=\"#\">Deals</a> \r\n          <i *ngIf=\"isMobile || isTablet\" [ngClass]=\"{ 'fa': true, 'fa-caret-down': activeListItem !== 4, 'fa-caret-up': activeListItem === 4 }\" aria-hidden=\"true\"></i>\r\n        </div>\r\n\r\n\r\n        <ul class=\"sublist start-below-navbar\">\r\n\r\n          <li [ngClass]=\"{ 'sublist__item': true, 'active': activeSublistItem === 1}\" (click)=\"setActiveSublistItem($event, 1)\">\r\n            <div class=\"list-item__title\">\r\n                <a href=\"#\">Laptop Deals</a>\r\n                <i *ngIf=\"isMobile || isTablet\" [ngClass]=\"getIconStyles(4, 1)\" aria-hidden=\"true\"></i>    \r\n            </div>\r\n            <ul class=\"sublist__sublist\">\r\n              <li class=\"left-blue-border sublist__item\"><a href=\"#\">For Home</a></li>\r\n              <li class=\"left-blue-border sublist__item\"><a href=\"#\">For Work</a></li>\r\n            </ul>\r\n          </li>\r\n\r\n          \r\n          <li [ngClass]=\"{ 'sublist__item': true, 'active': activeSublistItem === 2}\" (click)=\"setActiveSublistItem($event, 2)\">\r\n            <div class=\"list-item__title\">\r\n                <a href=\"#\">Desktop Deals</a>\r\n                <i *ngIf=\"isMobile || isTablet\" [ngClass]=\"getIconStyles(4, 2)\" aria-hidden=\"true\"></i>    \r\n            </div>\r\n            <ul class=\"sublist__sublist\">\r\n              <li class=\"left-blue-border sublist__item\"><a href=\"#\">For Home</a></li>\r\n              <li class=\"left-blue-border sublist__item\"><a href=\"#\">For Work</a></li>\r\n            </ul>\r\n          </li>\r\n\r\n        <li><a href=\"#\">Workstation Deals</a></li>\r\n        <li><a href=\"#\">Server Deals</a></li>\r\n          \r\n        <li [ngClass]=\"{ 'sublist__item': true, 'active': activeSublistItem === 3 }\" (click)=\"setActiveSublistItem($event, 3)\">\r\n          <div class=\"list-item__title\">\r\n            <a href=\"#\">Electronics &amp; Accessories Deals</a>\r\n            <i *ngIf=\"isMobile || isTablet\" [ngClass]=\"getIconStyles(4, 3)\" aria-hidden=\"true\"></i>\r\n          </div>\r\n          <ul class=\"sublist__sublist\">\r\n            <li class=\"left-blue-border sublist__item\"><a href=\"\">For Home</a></li>\r\n            <li class=\"left-blue-border sublist__item\"><a href=\"\">For Work</a></li>\r\n          </ul>\r\n        </li>\r\n          \r\n        <li [ngClass]=\"{ 'sublist__item': true, 'active': activeSublistItem === 4 }\" (click)=\"setActiveSublistItem($event, 4)\">\r\n          <div class=\"list-item__title\">\r\n            <a href=\"#\">Monitor Deals</a>\r\n            <i *ngIf=\"isMobile || isTablet\" [ngClass]=\"getIconStyles(4, 4)\" aria-hidden=\"true\"></i>\r\n          </div>\r\n          <ul class=\"sublist__sublist\">\r\n            <li class=\"left-blue-border sublist__item\"><a href=\"\">For Home</a></li>\r\n            <li class=\"left-blue-border sublist__item\"><a href=\"\">For Work</a></li>\r\n          </ul>\r\n        </li>\r\n          \r\n        <li [ngClass]=\"{ 'sublist__item': true, 'active': activeSublistItem === 5 }\" (click)=\"setActiveSublistItem($event, 5)\">\r\n          <div class=\"list-item__title\">\r\n            <a href=\"#\">TV Deals</a>\r\n            <i *ngIf=\"isMobile || isTablet\" [ngClass]=\"getIconStyles(4, 5)\" aria-hidden=\"true\"></i>\r\n          </div>\r\n          <ul class=\"sublist__sublist\">\r\n            <li class=\"left-blue-border sublist__item\"><a href=\"\">For Home</a></li>\r\n            <li class=\"left-blue-border sublist__item\"><a href=\"\">For Work</a></li>\r\n          </ul>\r\n        </li>\r\n          \r\n        <li [ngClass]=\"{ 'sublist__item': true, 'active': activeSublistItem === 6 }\" (click)=\"setActiveSublistItem($event, 6)\">\r\n          <div class=\"list-item__title\">\r\n            <a href=\"#\">Dell Outlet</a>\r\n            <i *ngIf=\"isMobile || isTablet\" [ngClass]=\"getIconStyles(4, 6)\" aria-hidden=\"true\"></i>\r\n          </div>\r\n          <ul class=\"sublist__sublist\">\r\n            <li class=\"left-blue-border sublist__item\"><a href=\"\">For Home</a></li>\r\n            <li class=\"left-blue-border sublist__item\"><a href=\"\">For Work</a></li>\r\n          </ul>\r\n        </li>\r\n          \r\n        <li [ngClass]=\"{ 'sublist__item': true, 'active': activeSublistItem === 7 }\" (click)=\"setActiveSublistItem($event, 7)\">\r\n          <div class=\"list-item__title\">\r\n            <a href=\"#\">Dell Advantage Rewards</a>\r\n            <i *ngIf=\"isMobile || isTablet\" [ngClass]=\"getIconStyles(4, 7)\" aria-hidden=\"true\"></i>\r\n          </div>\r\n          <ul class=\"sublist__sublist\">\r\n            <li class=\"left-blue-border sublist__item\"><a href=\"\">For Home</a></li>\r\n            <li class=\"left-blue-border sublist__item\"><a href=\"\">For Work</a></li>\r\n          </ul>\r\n        </li>\r\n          <li><a href=\"#\">Employee, Student, Military Discounts</a></li>\r\n          \r\n        <li [ngClass]=\"{ 'sublist__item': true, 'active': activeSublistItem === 8 }\" (click)=\"setActiveSublistItem($event, 8)\">\r\n          <div class=\"list-item__title\">\r\n            <a href=\"#\">Financing</a>\r\n            <i *ngIf=\"isMobile || isTablet\" [ngClass]=\"getIconStyles(4, 8)\" aria-hidden=\"true\"></i>\r\n          </div>\r\n          <ul class=\"sublist__sublist\">\r\n            <li class=\"left-blue-border sublist__item\"><a href=\"\">For Home</a></li>\r\n            <li class=\"left-blue-border sublist__item\"><a href=\"\">For Work</a></li>\r\n          </ul>\r\n        </li>\r\n          \r\n        <li [ngClass]=\"{ 'sublist__item': true, 'active': activeSublistItem === 9 }\" (click)=\"setActiveSublistItem($event, 9)\">\r\n          <div class=\"list-item__title\">\r\n            <a href=\"#\">Coupons</a>\r\n            <i *ngIf=\"isMobile || isTablet\" [ngClass]=\"getIconStyles(4, 9)\" aria-hidden=\"true\"></i>\r\n          </div>\r\n          <ul class=\"sublist__sublist\">\r\n            <li class=\"left-blue-border sublist__item\"><a href=\"\">For Home</a></li>\r\n            <li class=\"left-blue-border sublist__item\"><a href=\"\">For Work</a></li>\r\n          </ul>\r\n        </li>\r\n        </ul>        \r\n      </li>\r\n\r\n    </div>\r\n  </app-responsive-container>\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/shared/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Responsive__ = __webpack_require__("../../../../../src/app/components/shared/Responsive.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = (function (_super) {
    __extends(NavbarComponent, _super);
    function NavbarComponent() {
        return _super.call(this) || this;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.activeListItem = -1;
        this.activeSublistItem = -1;
    };
    NavbarComponent.prototype.getIconStyles = function (list, sublist) {
        var styles = { fa: true };
        if (!sublist) {
            getListItemIcon.call(this);
        }
        else {
            getSublistItemIcon.call(this);
        }
        function getListItemIcon() {
            if (list === this.activeListItem) {
                styles["fa-caret-up"] = true;
            }
            else {
                styles["fa-caret-down"] = true;
            }
        }
        function getSublistItemIcon() {
            if (list === this.activeListItem && sublist === this.activeSublistItem) {
                styles["fa-caret-up"] = true;
            }
            else {
                styles["fa-caret-down"] = true;
            }
        }
        return styles;
    };
    NavbarComponent.prototype.setActiveListItem = function (listItem) {
        var clickedAlreadyActiveListItem = listItem === this.activeListItem;
        if (clickedAlreadyActiveListItem) {
            this.activeListItem = -1;
        }
        else {
            this.activeListItem = listItem;
        }
    };
    NavbarComponent.prototype.setActiveSublistItem = function (event, listItem) {
        event.stopPropagation();
        var clickedAlreadyActiveListItem = listItem === this.activeSublistItem;
        if (clickedAlreadyActiveListItem) {
            this.activeSublistItem = -1;
        }
        else {
            this.activeSublistItem = listItem;
        }
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/components/shared/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/shared/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}(__WEBPACK_IMPORTED_MODULE_1__Responsive__["a" /* Responsive */]));



/***/ }),

/***/ "../../../../../src/app/components/shared/responsive-container/responsive-container.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\r\n    margin: 0 auto;\r\n}\r\n\r\n@media (min-width: 992px) {\r\n    .container {\r\n        max-width: 970px;\r\n    }\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n    .container {\r\n        max-width: 1170px;\r\n    }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/shared/responsive-container/responsive-container.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <ng-content></ng-content>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/shared/responsive-container/responsive-container.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResponsiveContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResponsiveContainerComponent = (function () {
    function ResponsiveContainerComponent() {
    }
    ResponsiveContainerComponent.prototype.ngOnInit = function () {
    };
    ResponsiveContainerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-responsive-container',
            template: __webpack_require__("../../../../../src/app/components/shared/responsive-container/responsive-container.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/shared/responsive-container/responsive-container.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ResponsiveContainerComponent);
    return ResponsiveContainerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/side-bar.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideBarService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SideBarService = (function () {
    function SideBarService() {
        var _this = this;
        this.messageSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](false);
        this.isSideBarShowing = this.messageSource.asObservable();
        this.data = false;
        window.addEventListener("resize", function () {
            if (window.innerWidth > 991) {
                _this.messageSource.next(false);
                _this.data = false;
            }
        });
    }
    SideBarService.prototype.toggleSideBar = function () {
        console.log(this.isSideBarShowing, this.data);
        this.data = !this.data;
        this.messageSource.next(this.data);
    };
    SideBarService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], SideBarService);
    return SideBarService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map