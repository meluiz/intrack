"use strict";
exports.__esModule = true;
window.addEventListener('DOMContentLoaded', function () {
    var replacement = function (selector, text) {
        var element = document.querySelector("#".concat(selector));
        if (element)
            element.innerHTML = text;
    };
    for (var _i = 0, _a = ['chrome', 'node', 'electron']; _i < _a.length; _i++) {
        var dependency = _a[_i];
        replacement("".concat(dependency, "-version"), process.versions[dependency]);
    }
});
