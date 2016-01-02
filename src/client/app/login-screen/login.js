(function () {
    'use strict';

    angular
        .module('app.loginScreen')
        .controller('Login', Login);

    Login.$inject = ['logger'];

    /* @ngInject */
    function Login(logger) {
        /* jshint validthis: true */
        var vm = this;

        vm.activate = activate;
        vm.title = 'Login';
        //vm.creds = {};
        vm.printCreds = printCreds;
        vm.login = login;

        activate();

        ////////////////

        function activate() {
            logger.success('Activated Login Screen View', null);
        }

        function printCreds() {
            logger.info("User Details", vm.creds, "Printed");
            //logger.log(vm.creds);
        }
        // TODO: Refactor to call a dataservice for real login check database
        function login() {

        }
    }
})();