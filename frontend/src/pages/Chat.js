import React, { useState } from 'react';
import axios from 'axios';

function Chat() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const sendMessage = async () => {
    const token = localStorage.getItem('token');
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/chat`, { message: input }, {
      headers: { Authorization: `Bearer ${token}` }
    });
    setMessages([...messages, { role: 'user', text: input }, { role: 'ai', text: res.data.reply }]);
    setInput('');
  };

  return (
    <div>
      <h2>Chat with EchoAI</h2>
      <div>
        {messages.map((msg, i) => <p key={i}><strong>{msg.role}:</strong> {msg.text}</p>)}
      </div>
      <input value={input} onChange={(e) => setInput(e.target.value)} placeholder='Ask something...' />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default Chat;