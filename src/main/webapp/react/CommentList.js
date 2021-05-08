/** @jsx React.DOM */
define(function(require, exports, module) {
    var React = require('react');
    
    var Comment = require('Comment');
    
    var CommentList = React.createClass({displayName: 'CommentList',
        render: function() {
            var commentNodes = this.props.comments.map(function(comment) {
                return (
                    Comment({author:  comment.author},  comment.text)
                );
            });
            return (
                React.DOM.div({className: "comment-list"}, 
                    commentNodes 
                )
            );
        }
    });
    
    module.exports = CommentList;
});