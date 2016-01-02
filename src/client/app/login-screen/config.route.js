/**
 * Created by jorgeparamo on 1/6/16.
 */
(function() {
    'use strict';

    angular
        .module('app.loginScreen')
        .run(appRun);

    appRun.$inject = ['routehelper'];

    function appRun(routehelper) {
        routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
        return [
            {
                url: '/login',
                config: {
                    templateUrl: 'app/login-screen/login.html',
                    controller: 'Login',
                    controllerAs: 'vm',
                    title: 'Login'
                }
            }
        ];
    }
})();