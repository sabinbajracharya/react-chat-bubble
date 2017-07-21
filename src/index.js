import React, { Component } from "react";
import ReactDOM from "react-dom";
import ChatBubble from "./components/ChatBubble";


const image = 'http://www.bradfordwhite.com/sites/default/files/images/corporate_imgs/iStock_000012107870XSmall.jpg';

class App extends Component {
  state = {
    messages: [
      {
        type: 0,
        image,
        text: "Hello! Good Morning!"
      },
      {
        type: 1,
        image,
        text: "Hello! Good Afternoon!"
      }
    ],
  };

  handleNewMessage = text =>
    this.setState({
      messages: this.state.messages.concat([{
        text,
        type: 0,
        image,
      }])
    });

  render() {
    return (
      <ChatBubble
        messages={this.state.messages}
        onNewMessage={this.handleNewMessage}
      />
    );
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
