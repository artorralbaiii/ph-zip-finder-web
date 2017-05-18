'use strict';

(function () {
    angular.module('app.zip')
        .config(getRoutes);

    getRoutes.$inject = ['$routeProvider', '$locationProvider'];

    function getRoutes($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/zip/zip.html',
                controller: 'Zip',
                controllerAs: 'vm'
            })
            .otherwise({ redirectTo: '/' });
    }
})();