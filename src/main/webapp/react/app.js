seajs.config({
	base: './react',
	alias: {
		react: '../bower_components/react/react.js',
		showdown: '../bower_components/showdown/src/showdown.js'
	}
});

seajs.use(['helloworld', 'hellocomment']);