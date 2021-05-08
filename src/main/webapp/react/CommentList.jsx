/** @jsx React.DOM */
define(function(require, exports, module) {
    var React = require('react');
    
    var Comment = require('Comment');
    
    var CommentList = React.createClass({
        render: function() {
            var commentNodes = this.props.comments.map(function(comment) {
                return (
                    <Comment author={ comment.author }>{ comment.text }</Comment>
                );
            });
            return (
                <div className="comment-list">
                    { commentNodes }
                </div>
            );
        }
    });
    
    module.exports = CommentList;
});