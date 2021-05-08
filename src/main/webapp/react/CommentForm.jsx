/** @jsx React.DOM */
define(function(require, exports, module) {
    var React = require('react');
    
    var CommentForm = React.createClass({
        handleSubmit: function(e) {
            e.preventDefault();
            
            var author = this.refs.author.getDOMNode().value.trim();
            var text = this.refs.text.getDOMNode().value.trim();
            if (!text || !author) {
                return;
            }
            this.props.onCommentSubmit({
                author: author,
                text: text
            });
            this.refs.author.getDOMNode().value = '';
            this.refs.text.getDOMNode().value = '';
        },
        render: function() {
            return (
                <form className="comment-form" onSubmit={ this.handleSubmit }>
                    <input ref="author" placeholder="Your Name" />
                    <br/>
                    <textarea ref="text" placeholder="Say something" />
                    <br/>
                    <button type="submit">Post</button>
                </form>
            );
        }
    });
    
    module.exports = CommentForm;
});