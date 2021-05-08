/** @jsx React.DOM */
define(function(require, exports, module) {
    var React = require('react');
    
    React.renderComponent(
        <h1>Hello World!</h1>,
        document.querySelector('.helloworld')
    );
});