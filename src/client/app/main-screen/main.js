(function () {
    'use strict';

    angular
        .module('app.mainScreen')
        .controller('Main', Main);

    Main.$inject = ['$timeout', 'config', 'logger'];

    function Main($timeout, config, logger) {
        /* jshint validthis: true */
        var vm = this;

        vm.activate = activate;
        //vm.title = 'Main Screen';
        vm.title = config.appTitle;
        vm.busyMessage = 'Please wait ...';
        vm.isBusy = true;
        vm.showSplash = true;

        activate();

        ////////////////
        function activate() {
            logger.success('Activated Main Screen View');
            //hideSplash();
        }

        //function hideSplash() {
        //    //Force a 1 second delay so we can see the splash.
        //    $timeout(function() {
        //        vm.showSplash = false;
        //    }, 1000);
        //}
    }
})();