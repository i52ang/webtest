/** @jsx React.DOM */
define(function(require, exports, module) {
    var React = require('react');
    
    var CommentForm = React.createClass({displayName: 'CommentForm',
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
                React.DOM.form({className: "comment-form", onSubmit:  this.handleSubmit}, 
                    React.DOM.input({ref: "author", placeholder: "Your Name"}), 
                    React.DOM.br(null), 
                    React.DOM.textarea({ref: "text", placeholder: "Say something"}), 
                    React.DOM.br(null), 
                    React.DOM.button({type: "submit"}, "Post")
                )
            );
        }
    });
    
    module.exports = CommentForm;
});