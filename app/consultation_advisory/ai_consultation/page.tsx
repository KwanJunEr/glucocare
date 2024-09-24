'use client';

import Title from 'antd/es/typography/Title';
import { Card, Button, Input, message } from 'antd';
import { SendOutlined } from '@ant-design/icons';
import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import ReactMarkdown from 'react-markdown';

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);

export default function Page() {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef(null);

  // Scroll to bottom when messages update
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = { text: inputMessage, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const model = await genAI.getGenerativeModel({ model: "gemini-pro" });
      
      // Prepare chat history for sending
      const chat = model.startChat({
        history: [...messages, userMessage].map(msg => ({
          role: msg.sender === 'user' ? 'user' : 'model',
          parts: [msg.text],
        })),
        generationConfig: {
          maxOutputTokens: 4096,
        },
      });

      const result = await chat.sendMessage(inputMessage);
      const response = result.getMessage(); // Get the message from result

      const aiMessage = { text: response.text, sender: 'ai' };
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error calling Gemini API:', error);
      message.error('Failed to get response from AI. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="bg-blue-100 p-2 mb-10">
        <Title level={2} className="!text-sky-700 ml-2 h-full flex items-center">Diabetes AI Solution</Title>
      </div>

      <div className="flex-grow overflow-hidden">
        <Card
          className="h-full flex flex-col" 
          title={<span className="text-2xl font-semibold">AI Consultation</span>}
          bodyStyle={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}
        >
          <div className="flex-grow overflow-auto" ref={chatContainerRef}>
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} mb-2`}>
                <div className={`max-w-[70%] p-2 rounded-lg ${
                  msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200'
                }`}>
                  <ReactMarkdown>{msg.text}</ReactMarkdown>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 flex">
            <Input 
              className="flex-grow" 
              size="large" 
              placeholder="Type your message..." 
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onPressEnter={sendMessage}
              disabled={isLoading}
            />
            <Button 
              type="primary" 
              size="large" 
              icon={<SendOutlined />} 
              className="ml-2 bg-blue-600 hover:bg-blue-700"
              onClick={sendMessage}
              loading={isLoading}
              disabled={isLoading}
            >
              Send
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
