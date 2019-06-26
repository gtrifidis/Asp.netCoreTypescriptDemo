"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var i18next = require("i18next");
var TypescriptDemo;
(function (TypescriptDemo) {
    var LocalizationTest = (function () {
        function LocalizationTest() {
            var test = 10;
            i18next.default.use("module");
        }
        return LocalizationTest;
    }());
    TypescriptDemo.LocalizationTest = LocalizationTest;
})(TypescriptDemo || (TypescriptDemo = {}));
