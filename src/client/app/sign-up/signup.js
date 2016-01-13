(function () {
	'use strict';
	
	angular
		.module('app.signUp')
		.controller('SignUp', SignUp);
		
	SignUp.$inject =['logger'];
	
	function SignUp(logger) {
		
		var vm = this;
		vm. activate = activate;
		vm.title = 'Sign Up';
		
		activate();
		
		////////////////
		
		function activate() {
			logger.success('Activated Sign Up Screen View');
		}
			
	}
})();