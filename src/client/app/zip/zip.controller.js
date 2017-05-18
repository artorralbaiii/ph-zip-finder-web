'use strict';

(function () {
    angular.module('app.zip')
        .controller('Zip', Zip);

    Zip.$inject = ['dataservice'];

    function Zip(dataservice) {
        var vm = this;
        vm.buttonDisabled = false;
        vm.buttonLabel = 'Show All Zip Codes';
        vm.searchString = '';
        vm.searchZip = searchZip;
        vm.zipCodes = [];

        /* Implementations */

        function searchZip(isAll) {
            if (isAll) {
                vm.buttonLabel = 'Fetching data...';
                vm.buttonDisabled = true;
                vm.searchString = '';
                vm.zipCodes = [];
                dataservice.allZip()
                    .then(function (data) {
                        vm.zipCodes = data;
                        vm.buttonLabel = 'Show All Zip Codes';
                        vm.buttonDisabled = false;
                    });
            } else {
                if (vm.searchString.trim() !== '') {
                    dataservice.searchZip(vm.searchString)
                        .then(function(data) {
                            vm.zipCodes = data;
                        });
                } else {
                    vm.zipCodes = [];
                }
            }
        }
    }
})();