/**
 * Created by Sandeep on 01/06/14.
 */

angular.module('ubicameUdeaApp.services', [])
	.factory('Bloque', function ($resource) {
    //return $resource('http://ubicame-udea.herokuapp.com/bloques/:id', { id : '@_id' }, {
	return $resource('http://localhost:3000/bloques/:id', { id : '@_id' }, {
        update: {
            method: 'PUT'
        }
    });
}).factory('TipoUnidad', function ($resource){
	//return $resource('http://ubicame-udea.herokuapp.com/bloques/:id', { id : '@_id' }, {
	return $resource('http://localhost:3000/tiposunidad/:id', { id : '@_id' }, {
        update: {
            method: 'PUT'
        }
    });
}).factory('Unidad', function ($resource){
	//return $resource('http://ubicame-udea.herokuapp.com/bloques/:id', { id : '@_id' }, {
	return $resource('http://localhost:3000/unidades/:id', { id : '@_id' }, {
        update: {
            method: 'PUT'
        }
    });
}).service('popupService', function ($window) {
    this.showPopup = function (message) {
        return $window.confirm(message);
    };
});