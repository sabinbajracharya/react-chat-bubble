'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./ChatBubble.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ChatBubble = function (_Component) {
  _inherits(ChatBubble, _Component);

  function ChatBubble() {
    _classCallCheck(this, ChatBubble);

    return _possibleConstructorReturn(this, (ChatBubble.__proto__ || Object.getPrototypeOf(ChatBubble)).apply(this, arguments));
  }

  _createClass(ChatBubble, [{
    key: 'getConversations',
    value: function getConversations(messages) {

      if (messages == undefined) {
        console.log("react-chat-bubble::", "'messages' props should be an array!");
        return;
      }

      var listItems = messages.map(function (message, index) {
        var bubbleClass = 'me';
        var bubbleDirection = '';

        if (message.type === 0) {
          bubbleClass = 'you';
          bubbleDirection = "bubble-direction-reverse";
        }
        return _react2.default.createElement(
          'div',
          { className: 'bubble-container ' + bubbleDirection, key: index },
          _react2.default.createElement('img', { className: 'img-circle', src: message.image }),
          _react2.default.createElement(
            'div',
            { className: 'bubble ' + bubbleClass },
            message.text
          )
        );
      });
      return listItems;
    }
  }, {
    key: 'render',
    value: function render() {
      var messages = this.props.messages;

      var chatList = this.getConversations(messages);
      return _react2.default.createElement(
        'div',
        { className: 'chats' },
        chatList
      );
    }
  }]);

  return ChatBubble;
}(_react.Component);

ChatBubble.propTypes = {
  messages: _react2.default.PropTypes.array
};

exports.default = ChatBubble;
