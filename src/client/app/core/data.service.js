'use strict';

(function () {
    angular.module('app.core')
        .factory('dataservice', dataservice);

    dataservice.$inject = ['$http', '$log'];

    function dataservice($http, $log) {
        var service = {
            allZip: allZip,
            searchZip: searchZip
        };

        return service;

        /* Implementations */

        function allZip() {
            return $http.get('/api/zip')
                .then(function (data, status, headers, config) {
                    return data.data;
                })
                .catch(function (msg) {
                    $log.error(msg);
                });
        }

        function searchZip(key) {
            return $http.get('/api/zip/' + key)
                .then(function (data, status, headers, config) {
                    return data.data;
                })
                .catch(function (msg) {
                    $log.error(msg);
                });
        }
    }
})();