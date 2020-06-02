Vue.filter('pluck', function (objects, key) {
	return objects.map(function(object) { 
		return object[key];
	});
});
