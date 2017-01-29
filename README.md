
A Chat bubble component for building Chat App in ReactJS.

## Demo
![Alt Chatbubble](https://raw.githubusercontent.com/sabinbajracharya/react-chat-bubble/master/screenshots/chatbubble.png?raw=true "Chatbubble")

## Installing the react-chat-bubble

```
npm install --save react-chat-bubble
```

## Using the Component

If you are using ES6 modules, if not, you are encouraged to use [`import` and `export`](http://exploringjs.com/es6/ch_modules.html) instead.

Example:

```js
import ChatBubble from 'react-chat-bubble';

class App extends Component {
  render() {
      <ChatBubble messages = this.state.messages />
  }
}
export default App;
```

 The message object passed as prop should be of following format:
```json
this.state.messages =
  [{
	    "type" : 0,
	    "image": "cat.jpg",
	    "text": "Hello! Good Morning!"
	}, {
	    "type": 1,
	    "image": "dog.jpg",
	    "text": "Hello! Good Afternoon!"
	}];

```
```
type = 0 for sender AND 1 for receiver
image = url of contact image
text = message from the user
```

## To-do
```
> More style customization
> Delivered and seen status
```


##License

The MIT License (MIT)

Copyright (c) 2017 Sabin Bir Bajracharya.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
