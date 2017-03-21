(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

(function () {
    'use strict';

    var controller = function controller(scope, elm, attr) {

        elm.bind('click', function (event) {
            event.stopImmediatePropagation();

            var promisse = scope.gumgaClickSync();

            if (!promisse) {
                throw 'A diretiva gumgaClickSync necessita que a função retorne uma promisse.';
            }

            elm[0].disabled = true;

            promisse.then(function () {
                elm[0].disabled = false;
            });
        });
    };

    var GumgaClickSync = function GumgaClickSync() {
        return {
            restrict: 'A',
            priority: -1,
            scope: {
                gumgaClickSync: '&'
            },
            link: controller
        };
    };

    GumgaClickSync.$inject = [];

    angular.module('gumga.click-sync', []).directive('gumgaClickSync', GumgaClickSync);
})();

},{}]},{},[1]);
