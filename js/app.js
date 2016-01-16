/**
 * Created by Sandeep on 01/06/14.
 */

angular.module('ubicameUdeaApp', ['ui.router', 'ngResource', 'ubicameUdeaApp.controllers', 'ubicameUdeaApp.services']);

angular.module('ubicameUdeaApp').config(function ($stateProvider, $httpProvider) {
    $stateProvider.state('bloques', {
        url: '/bloques',
        templateUrl: 'partials/bloques.html',
        controller: 'BloqueListController'
    }).state('viewBloque', {
		url: '/bloques/:id/view',
		templateUrl: 'partials/bloque-view.html',
		controller: 'BloqueViewController'
    }).state('newBloque', {
        url: '/bloques/new',
        templateUrl: 'partials/bloque-add.html',
        controller: 'BloqueCreateController'
    }).state('editBloque', {
        url: '/bloques/:id/edit',
        templateUrl: 'partials/bloque-edit.html',
        controller: 'BloqueEditController'
    });
	
	$stateProvider.state('tiposUnidad', {
        url: '/tiposUnidad',
        templateUrl: 'partials/tipos_unidad.html',
        controller: 'TipoUnidadListController'
    }).state('viewTipoUnidad', {
		url: '/tiposUnidad/:id/view',
		templateUrl: 'partials/tipos_unidad-view.html',
		controller: 'TipoUnidadViewController'
    }).state('newTipoUnidad', {
        url: '/tiposUnidad/new',
        templateUrl: 'partials/tipos_unidad-add.html',
        controller: 'TipoUnidadCreateController'
    }).state('editTipoUnidad', {
        url: '/tiposUnidad/:id/edit',
        templateUrl: 'partials/tipos_unidad-edit.html',
        controller: 'TipoUnidadEditController'
    });
	
	$stateProvider.state('unidades', {
        url: '/unidades',
        templateUrl: 'partials/unidades.html',
        controller: 'UnidadListController'
    }).state('viewUnidad', {
		url: '/unidades/:id/view',
		templateUrl: 'partials/unidades-view.html',
		controller: 'UnidadViewController'
    }).state('newUnidad', {
        url: '/unidades/new',
        templateUrl: 'partials/unidades-add.html',
        controller: 'UnidadCreateController'
    }).state('editUnidad', {
        url: '/unidades/:id/edit',
        templateUrl: 'partials/unidades-edit.html',
        controller: 'UnidadEditController'
    });
	
	$stateProvider.state('home', {
        url: '/home',
        templateUrl: 'partials/home.html',
    });
	
}).run(function ($state) {
	$state.go('home');
});