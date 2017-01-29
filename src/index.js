import React from "react";
import ReactDOM from "react-dom";
import ChatBubble from "./components/ChatBubble";

let messages = [
  {
    type:0,
    image: 'http://www.bradfordwhite.com/sites/default/files/images/corporate_imgs/iStock_000012107870XSmall.jpg',
    text: "Hello! Good Morning!"
  },
  {
    type:1,
    image: 'http://www.bradfordwhite.com/sites/default/files/images/corporate_imgs/iStock_000012107870XSmall.jpg',
    text: "Hello! Good Afternoon!"
  }
];

ReactDOM.render(
  <ChatBubble messages={messages}/>,
  document.getElementById('root')
);
