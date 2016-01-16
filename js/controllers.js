/**
 * Created by Sandeep on 01/06/14.
 */
angular.module('ubicameUdeaApp.controllers', [])
//CONTROLLERS BLOQUES
	.controller('BloqueListController', function ($scope, $state, popupService, $window, Bloque) {
		$scope.bloques = Bloque.query();
		$scope.deleteBloque = function (bloque) {
			if (popupService.showPopup('¿Realmente quiere eliminar este registro?')) {
				bloque.$delete(function () {
					$window.location.href = '';
				});
			}
		};
	})
	.controller('BloqueViewController', function ($scope, $stateParams, Bloque) {
		$scope.bloque = Bloque.get({id : $stateParams.id});
	})
	.controller('BloqueCreateController', function ($scope, $state, $stateParams, Bloque) {
		$scope.bloque = new Bloque();
		$scope.addBloque = function () {
			$scope.bloque.$save(function () {
				$state.go('bloques');
			});
		};
	})
	.controller('BloqueEditController', function ($scope, $state, $stateParams, Bloque) {
		$scope.updateBloque = function () {
			$scope.bloque.$update(function () {
				$state.go('bloques');
			});
		};
		$scope.loadBloque = function () {
			$scope.bloque = Bloque.get({id : $stateParams.id});
		};
		$scope.loadBloque();
	})

//CONTROLLERS TIPOS DE UNIDAD
	.controller('TipoUnidadListController', function ($scope, $state, popupService, $window, TipoUnidad) {
		$scope.tiposUnidad = TipoUnidad.query();
		$scope.deleteTipoUnidad = function (tipoUnidad) {
			if (popupService.showPopup('¿Realmente quiere eliminar este registro?')) {
				tipoUnidad.$delete(function () {
					$window.location.href = '';
				});
			}
		};
	})
	.controller('TipoUnidadViewController', function ($scope, $stateParams, TipoUnidad) {
		$scope.tipoUnidad = TipoUnidad.get({id : $stateParams.id});
	})
	.controller('TipoUnidadCreateController', function ($scope, $state, $stateParams, TipoUnidad) {
		$scope.tipoUnidad = new TipoUnidad();
		$scope.addTipoUnidad = function () {
			$scope.tipoUnidad.$save(function () {
				$state.go('tiposUnidad');
			});
		};
	})
	.controller('TipoUnidadEditController', function ($scope, $state, $stateParams, TipoUnidad) {
		$scope.updateTipoUnidad = function () {
			$scope.tipoUnidad.$update(function () {
				$state.go('tiposUnidad');
			});
		};
		$scope.loadTipoUnidad = function () {
			$scope.tipoUnidad = TipoUnidad.get({id : $stateParams.id});
		};
		$scope.loadTipoUnidad();
	})

//CONTROLLERS UNIDAD
	.controller('UnidadListController', function ($scope, $state, popupService, $window, $location, Unidad) {
		$scope.unidades = Unidad.query();
		$scope.deleteUnidad = function (unidad) {
			if (popupService.showPopup('¿Realmente quiere eliminar este registro?')) {
				unidad.$delete(function () {
					$scope.unidades = Unidad.query();
					//$location.path('#/unidades');
				});
			}
		};
	})
	.controller('UnidadViewController', function ($scope, $stateParams, Unidad) {
		$scope.unidad = unidad.get({id : $stateParams.id});
	})
	.controller('UnidadCreateController', function ($scope,$http, $state, $stateParams, Unidad) {
		$http.get("http://localhost:3000/tiposunidad").success(function(response) {
        	$scope.tiposUnidad = response;
			console.log($scope.tiposUnidad);
    	}).error(function(err){
			console.log(err)
		});
		
		$scope.changed = function(item){
			$scope.unidad.tipoUnidad = item;
			$scope.tipoUnidadSeleccionada;
		}
	
		$scope.unidad = new Unidad();	
		$scope.addUnidad = function () {
			$scope.unidad.$save(function () {
				$state.go('unidades');
			});
		};
	})
	.controller('UnidadEditController', function ($scope, $state, $stateParams, Unidad) {
		$scope.updateUnidad = function () {
			$scope.unidad.$update(function () {
				$state.go('unidades');
			});
		};
		$scope.loadUnidad = function () {
			$scope.unidad = Unidad.get({id : $stateParams.id});
		};
		$scope.loadUnidad();
	});