'use client';

import { useState } from 'react';
import { Search, Plus, Phone, Video, MoreHorizontal, Send, Paperclip, Smile, Image, Mic } from 'lucide-react';

const conversations = [
  {
    id: 1,
    name: 'Sarah Johnson',
    username: '@sarah_codes',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
    lastMessage: 'Hey! I saw your latest project, it looks amazing! 🚀',
    timestamp: '2 min ago',
    unread: 2,
    isOnline: true,
    isTyping: false,
    emoji: '💻',
  },
  {
    id: 2,
    name: 'Design Team',
    username: 'Group • 12 members',
    avatar: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=150',
    lastMessage: 'Marcus: The new mockups are ready for review',
    timestamp: '15 min ago',
    unread: 0,
    isOnline: false,
    isTyping: true,
    emoji: '🎨',
    isGroup: true,
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    username: '@emily_markets',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
    lastMessage: 'Thanks for the marketing insights! Really helpful 📈',
    timestamp: '1 hour ago',
    unread: 0,
    isOnline: true,
    isTyping: false,
    emoji: '📈',
  },
  {
    id: 4,
    name: 'David Kim',
    username: '@david_data',
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150',
    lastMessage: 'The data analysis report is complete',
    timestamp: '3 hours ago',
    unread: 1,
    isOnline: false,
    isTyping: false,
    emoji: '📊',
  },
  {
    id: 5,
    name: 'Founders Circle',
    username: 'Group • 23 members',
    avatar: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=150',
    lastMessage: 'Lisa: Excited to announce our Series A! 🎉',
    timestamp: '5 hours ago',
    unread: 5,
    isOnline: false,
    isTyping: false,
    emoji: '🚀',
    isGroup: true,
  },
];

const messages = [
  {
    id: 1,
    senderId: 1,
    senderName: 'Sarah Johnson',
    senderAvatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
    content: 'Hey! I saw your latest project on the community feed. The UI design is absolutely stunning! 🚀',
    timestamp: '10:30 AM',
    isOwn: false,
  },
  {
    id: 2,
    senderId: 'me',
    senderName: 'You',
    senderAvatar: '',
    content: 'Thank you so much! I really appreciate the feedback. It took me weeks to get the animations just right.',
    timestamp: '10:32 AM',
    isOwn: true,
  },
  {
    id: 3,
    senderId: 1,
    senderName: 'Sarah Johnson',
    senderAvatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
    content: 'The attention to detail really shows! Are you using Framer Motion for the animations?',
    timestamp: '10:33 AM',
    isOwn: false,
  },
  {
    id: 4,
    senderId: 'me',
    senderName: 'You',
    senderAvatar: '',
    content: 'Yes! Framer Motion is amazing for React animations. I also used some custom CSS for the micro-interactions.',
    timestamp: '10:35 AM',
    isOwn: true,
  },
  {
    id: 5,
    senderId: 1,
    senderName: 'Sarah Johnson',
    senderAvatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
    content: 'Would love to collaborate on a project sometime! I think our skills would complement each other well ✨',
    timestamp: '10:36 AM',
    isOwn: false,
  },
];

export function MessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState(conversations[0]);
  const [newMessage, setNewMessage] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredConversations = conversations.filter(conv =>
    conv.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    conv.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Handle sending message
      setNewMessage('');
    }
  };

  return (
    <div className="h-[calc(100vh-8rem)] flex bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      {/* Conversations Sidebar */}
      <div className="w-80 border-r border-gray-200 flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-xl font-bold text-gray-900 flex items-center space-x-2">
              <span>Messages</span>
              <span className="text-2xl">💬</span>
            </h1>
            <button className="p-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all">
              <Plus className="w-4 h-4" />
            </button>
          </div>
          
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search conversations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all text-sm"
            />
          </div>
        </div>

        {/* Conversations List */}
        <div className="flex-1 overflow-y-auto">
          {filteredConversations.map((conversation) => (
            <div
              key={conversation.id}
              onClick={() => setSelectedConversation(conversation)}
              className={`flex items-center space-x-3 p-4 cursor-pointer transition-colors ${
                selectedConversation.id === conversation.id
                  ? 'bg-gradient-to-r from-purple-50 to-indigo-50 border-r-2 border-purple-500'
                  : 'hover:bg-gray-50'
              }`}
            >
              <div className="relative flex-shrink-0">
                <img
                  src={conversation.avatar}
                  alt={conversation.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="absolute -top-1 -right-1 text-lg">
                  {conversation.emoji}
                </div>
                {conversation.isOnline && (
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                )}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-semibold text-gray-900 text-sm truncate">
                    {conversation.name}
                  </h3>
                  <span className="text-xs text-gray-500">{conversation.timestamp}</span>
                </div>
                
                <p className="text-gray-600 text-xs mb-1">{conversation.username}</p>
                
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-600 truncate flex-1">
                    {conversation.isTyping ? (
                      <span className="text-purple-600 italic">Typing... ✍️</span>
                    ) : (
                      conversation.lastMessage
                    )}
                  </p>
                  {conversation.unread > 0 && (
                    <span className="ml-2 bg-purple-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {conversation.unread}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="p-6 border-b border-gray-200 bg-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <img
                  src={selectedConversation.avatar}
                  alt={selectedConversation.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="absolute -top-1 -right-1 text-sm">
                  {selectedConversation.emoji}
                </div>
                {selectedConversation.isOnline && (
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                )}
              </div>
              <div>
                <h2 className="font-semibold text-gray-900">{selectedConversation.name}</h2>
                <p className="text-sm text-gray-500">
                  {selectedConversation.isOnline ? (
                    <span className="text-green-600">Online ✨</span>
                  ) : (
                    selectedConversation.username
                  )}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                <Phone className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                <Video className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                <MoreHorizontal className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gradient-to-b from-gray-50 to-white">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex space-x-3 max-w-xs lg:max-w-md ${message.isOwn ? 'flex-row-reverse space-x-reverse' : ''}`}>
                {!message.isOwn && (
                  <img
                    src={message.senderAvatar}
                    alt={message.senderName}
                    className="w-8 h-8 rounded-full object-cover flex-shrink-0"
                  />
                )}
                
                <div className={`${message.isOwn ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white' : 'bg-white border border-gray-200'} rounded-2xl px-4 py-3 shadow-sm`}>
                  <p className={`text-sm ${message.isOwn ? 'text-white' : 'text-gray-900'}`}>
                    {message.content}
                  </p>
                  <p className={`text-xs mt-1 ${message.isOwn ? 'text-purple-100' : 'text-gray-500'}`}>
                    {message.timestamp}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="p-6 border-t border-gray-200 bg-white">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                <Paperclip className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                <Image className="w-5 h-5" />
              </button>
            </div>
            
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Type your message... ✨"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors">
                <Smile className="w-5 h-5" />
              </button>
            </div>

            <div className="flex items-center space-x-2">
              <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                <Mic className="w-5 h-5" />
              </button>
              <button
                onClick={handleSendMessage}
                disabled={!newMessage.trim()}
                className="px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
              >
                <Send className="w-4 h-4" />
                <span>Send</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}