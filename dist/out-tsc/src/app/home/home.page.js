import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.navigateToProfile = function () {
        this.navCtrl.navigateForward("profile");
    };
    HomePage = tslib_1.__decorate([
        Component({
            selector: 'app-home',
            templateUrl: 'home.page.html',
            styleUrls: ['home.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NavController])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.page.js.map