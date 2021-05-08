/** @jsx React.DOM */
define(function(require, exports, module) {
    var React = require('react');
    
    var CommentList = require('CommentList');
    var CommentForm = require('CommentForm');
    
    var CommentBox = React.createClass({displayName: 'CommentBox',
        getInitialState: function() {
            return {
                comments: []
            };
        },
        componentDidMount: function() {
            var self = this;
            require.async(['comments'], function(comments) {
                self.setState({
                    comments: comments
                });
            });
        },
        handleCommentSubmit: function(comment) {
            this.state.comments.push(comment);
            this.setState({
                comments: this.state.comments
            });
        },
        render: function() {
            return (
                React.DOM.div({className: "comment-box"}, 
                    React.DOM.h1(null, "Comments"), 
                    CommentList({comments:  this.state.comments}), 
                    CommentForm({onCommentSubmit:  this.handleCommentSubmit})
                )
            );
        }
    });
    
    module.exports = CommentBox;
});