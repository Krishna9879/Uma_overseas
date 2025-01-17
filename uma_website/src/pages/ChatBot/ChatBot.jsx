import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ChatBot = () => {
  const form = useRef();
  const [messages, setMessages] = useState([
    { text: "Hello! How can I help you today?", isBot: true }
  ]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSending(true);

    setMessages(prev => [...prev, { text: message, isBot: false }]);

    try {
      const templateParams = {
        user_name: name,
        user_email: email,
        user_mobile:mobile,
        message: message,
        reply_to: email,
        to_name: 'UMA team',
        to_email: 'ebinebin54@gmail.com'
      };

      await emailjs.send(
        'service_i8zyptq',
        'template_f9pfbl8',
        templateParams,
        'dV2JMuviSOBB8G5c1'
      );
      
      setMessages(prev => [...prev, { 
        text: "Thanks! Your message has been sent. We'll get back to you soon!", 
        isBot: true 
      }]);
      
      setName('');
      setEmail('');
      setMessage('');
      setMobile('');
      
    } catch (error) {
      setMessages(prev => [...prev, { 
        text: "Sorry, there was an error sending your message. Please try again.", 
        isBot: true 
      }]);
      console.log('FAILED...', error.text);
    }
    
    setIsSending(false);
  };

  return (
    <div className="flex flex-col h-full">
      {/* Chat Messages */}
      <div className="flex-1 p-4 overflow-y-auto">
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
            >
              <div
                className={`max-w-[80%] rounded-lg p-3 ${
                  message.isBot
                    ? 'bg-gray-100 text-gray-900'
                    : 'bg-blue-500 text-white'
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Form */}
      <div className="p-4 border-t bg-gray-50">
        <form ref={form} onSubmit={sendEmail} className="space-y-3">
          <div>
            <input
              type="text"
              name="user_name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          
          <div>
            <input
              type="email"
              name="user_email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <input
              type="number"
              name="user_mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="Your mobile"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          
          <div>
            <textarea
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your Message"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px]"
              required
            />
          </div>
          
          <button
            type="submit"
            disabled={isSending}
            className={`w-full px-4 py-2 text-white rounded-md transition-colors ${
              isSending 
                ? 'bg-blue-300 cursor-not-allowed' 
                : 'bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
            }`}
          >
            {isSending ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatBot;