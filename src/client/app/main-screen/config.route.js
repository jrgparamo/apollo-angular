/**
 * Created by jorgeparamo on 12/28/15.
 */
(function() {
    'use strict';

    angular
        .module('app.mainScreen')
        .run(appRun);

    appRun.$inject = ['routehelper'];

    function appRun(routehelper) {
        routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
        return [
            {
                url: '/',
                config: {
                    templateUrl: 'app/main-screen/main.html',
                    controller: 'Main',
                    controllerAs: 'vm',
                    title: 'Main Screen',
                    settings: {
                        nav: 1,
                        content: '<i class="fa fa-lock"></i> Main Screen'
                    }
                }
            }
        ];
    }
})();
