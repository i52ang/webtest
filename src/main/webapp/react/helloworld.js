/** @jsx React.DOM */
define(function(require, exports, module) {
    var React = require('react');
    
    React.renderComponent(
        React.DOM.h1(null, "Hello World!"),
        document.querySelector('.helloworld')
    );
});