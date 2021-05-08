/** @jsx React.DOM */
define(function(require, exports, module) {
    var React = require('react');
    var Showdown = require('showdown');
    
    var converter = new Showdown.converter();
    
    var Comment = React.createClass({
        render: function() {
            var html = converter.makeHtml(this.props.children.toString());
            return (
                <div className="comment">
                    <h3 className="comment-author">{ this.props.author }</h3>
                    <span dangerouslySetInnerHTML={{ __html: html }} />
                </div>
            );
        }
    });
    
    module.exports = Comment;
});