/**
 * Created by jorgeparamo on 1/8/16.
 */
(function() {
    'use strict';

    angular
        .module('app.signUp')
        .run(appRun);

    appRun.$inject = ['routehelper'];

    function appRun(routehelper) {
        routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
        return [
            {
                url: '/signup',
                config: {
                    templateUrl: 'app/sign-up/signup.html',
                    controller: 'SignUp',
                    controllerAs: 'vm',
                    title: 'Sign Up'
                }
            }
        ];
    }
})();