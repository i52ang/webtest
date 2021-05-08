/** @jsx React.DOM */
define(function(require, exports, module) {
    var React = require('react');
    var Showdown = require('showdown');
    
    var converter = new Showdown.converter();
    
    var Comment = React.createClass({displayName: 'Comment',
        render: function() {
            var html = converter.makeHtml(this.props.children.toString());
            return (
                React.DOM.div({className: "comment"}, 
                    React.DOM.h3({className: "comment-author"},  this.props.author), 
                    React.DOM.span({dangerouslySetInnerHTML: { __html: html}})
                )
            );
        }
    });
    
    module.exports = Comment;
});