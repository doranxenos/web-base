requirejs.config({
    baseUrl: 'js',

    paths: {},

    shim: {}
});

require(
    ['app'],
    function(App) {
	window.App = new App();
    }
);
