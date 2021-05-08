/** @jsx React.DOM */
define(function(require, exports, module) {
    var React = require('react');
    
    var CommentList = require('CommentList');
    var CommentForm = require('CommentForm');
    
    var CommentBox = React.createClass({
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
                <div className="comment-box">
                    <h1>Comments</h1>
                    <CommentList comments={ this.state.comments } />
                    <CommentForm onCommentSubmit={ this.handleCommentSubmit } />
                </div>
            );
        }
    });
    
    module.exports = CommentBox;
});