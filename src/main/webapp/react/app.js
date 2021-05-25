seajs.config({
	base: './react',
	alias: {
		react: '../bower_components/react/react.js',
		showdown: '../bower_components/showdown/src/showdown.js',
		router: '../bower_components/react-router/dist/react-router.js',
		bootstrap: '../bower_components/react-bootstrap/react-bootstrap.js'
	}
});

seajs.use(['helloworld', 'hellocomment']);