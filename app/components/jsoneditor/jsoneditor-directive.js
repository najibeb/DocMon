'use strict';

angular.module('jsoneditor-directive', [])
    .directive('jsonEditor', [ function(version) {
        return function(scope, elm, attrs) {
            elm.text(version);
        };
    }]);