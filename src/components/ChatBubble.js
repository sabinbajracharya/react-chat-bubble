import React, { Component } from 'react';
import './ChatBubble.css';

class ChatBubble extends Component {

  getConversations(messages){

    if(messages == undefined){
      console.log("react-chat-bubble::", "'messages' props should be an array!");
      return;
    }

    const listItems = messages.map((message, index) => {
      let bubbleClass = 'me';
      let bubbleDirection = '';

      if(message.type === 0){
        bubbleClass = 'you';
        bubbleDirection = "bubble-direction-reverse";
      }
      return (
              <div className={`bubble-container ${bubbleDirection}`} key={index}>
                <img className={`img-circle`} src={message.image} />
                <div className={`bubble ${bubbleClass}`}>{message.text}</div>
              </div>
          );
    });
    return listItems;
  }

  render() {
    const {messages} = this.props;
    const chatList = this.getConversations(messages);
    return (
      <div className="chats">
        {chatList}
      </div>
    );
  }
}

ChatBubble.propTypes = {
  messages: React.PropTypes.array
};

export default ChatBubble;
