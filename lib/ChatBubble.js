'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./ChatBubble.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ChatBubble = function (_Component) {
  _inherits(ChatBubble, _Component);

  function ChatBubble() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ChatBubble);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ChatBubble.__proto__ || Object.getPrototypeOf(ChatBubble)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      newMessage: ''
    }, _this.handleSubmit = function (e) {
      e.preventDefault();

      var _this2 = _this,
          onNewMessage = _this2.props.onNewMessage,
          newMessage = _this2.state.newMessage;


      if (onNewMessage && newMessage) {
        onNewMessage(newMessage);
      }

      _this.setState({
        newMessage: ''
      });
    }, _this.handleInputChange = function (e) {
      return _this.setState({
        newMessage: e.target.value
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ChatBubble, [{
    key: 'getConversations',
    value: function getConversations(messages) {
      if (messages == undefined) {
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
      var messages = this.props.messages,
          newMessage = this.state.newMessage;

      var chatList = this.getConversations(messages);

      return _react2.default.createElement(
        'div',
        { className: 'chats' },
        _react2.default.createElement(
          'div',
          { className: 'chat-list' },
          chatList
        ),
        _react2.default.createElement(
          'form',
          {
            className: 'new-message',
            onSubmit: this.handleSubmit
          },
          _react2.default.createElement('input', {
            value: newMessage,
            placeholder: 'Write a new message',
            onChange: this.handleInputChange,
            className: 'new-message-input'
          })
        )
      );
    }
  }]);

  return ChatBubble;
}(_react.Component);

ChatBubble.propTypes = {
  messages: _propTypes2.default.array.isRequired,
  onNewMessage: _propTypes2.default.func.isRequired
};

exports.default = ChatBubble;
