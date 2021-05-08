/** @jsx React.DOM */
define(function(require, exports, module) {
    var React = require('react');
    var CommentBox = require('CommentBox');
    
    React.renderComponent(<CommentBox />, document.querySelector('.hellocomment'));
});