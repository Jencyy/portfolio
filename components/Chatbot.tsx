'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, Send, User, Bot } from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: "Hi! 👋 I'm Jency's AI Assistant. I can tell you about his skills, projects, or how to contact him. What would you like to know?"
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = { id: Date.now().toString(), role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI thinking and responding
    setTimeout(() => {
      const lowerInput = userMessage.content.toLowerCase();
      let response = "I am a demo AI! Jency will connect me to a real model soon. For now, email him directly at jencysodvadiya@gmail.com!";
      
      if (lowerInput.includes('skill') || lowerInput.includes('tech')) {
        response = "Jency is a Full Stack Developer (MERN). His core skills include React, Node.js, MongoDB, Tailwind CSS, and he's actively learning AI/ML tools like Python, NumPy, and Pandas!";
      } else if (lowerInput.includes('project')) {
        response = "Jency has built an Amysho (E-commerce Platform), a Full-Featured Blog Panel, and a B2B Inventory Management UI. Check them out in the Projects section!";
      } else if (lowerInput.includes('experience') || lowerInput.includes('work')) {
        response = "He currently works as a Web Developer at Atmiya Infosoft (9+ months), handling production frontend/backend issues and optimizing ad systems.";
      } else if (lowerInput.includes('contact') || lowerInput.includes('hire') || lowerInput.includes('email')) {
        response = "You can easily reach him at jencysodvadiya@gmail.com or connect via LinkedIn!";
      }

      setMessages(prev => [...prev, { id: Date.now().toString(), role: 'assistant', content: response }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div style={{ position: 'fixed', bottom: 32, right: 32, zIndex: 9999 }}>
      
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            style={{
              position: 'absolute',
              bottom: 80,
              right: 0,
              width: 'clamp(320px, 90vw, 380px)',
              height: 520,
              background: '#fff',
              borderRadius: 24,
              boxShadow: '0 12px 48px rgba(0,0,0,0.12), 0 4px 16px rgba(0,0,0,0.06)',
              border: '1px solid var(--border)',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden'
            }}
          >
            {/* Header */}
            <div style={{ padding: '20px 24px', background: 'linear-gradient(135deg, var(--accent), var(--accent2))', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Sparkles size={18} color="#fff" />
                </div>
                <div>
                  <h3 style={{ margin: 0, fontSize: 15, fontWeight: 700, color: '#fff', letterSpacing: '-0.02em' }}>Jency's AI</h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 2 }}>
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#4ade80', boxShadow: '0 0 8px #4ade80' }} />
                    <span style={{ fontSize: 11, fontWeight: 500, color: 'rgba(255,255,255,0.8)' }}>Online & Ready</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                style={{ background: 'transparent', border: 'none', color: '#fff', cursor: 'pointer', padding: 4, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div style={{ flex: 1, padding: '24px', overflowY: 'auto', background: 'var(--bg2)', display: 'flex', flexDirection: 'column', gap: 16 }}>
              {messages.map(msg => (
                <div key={msg.id} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start', maxWidth: '85%' }}>
                  {msg.role === 'assistant' && (
                    <div style={{ width: 28, height: 28, borderRadius: 8, background: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Bot size={14} color="#fff" />
                    </div>
                  )}
                  
                  <div style={{ 
                    padding: '12px 16px', 
                    borderRadius: 16, 
                    borderTopLeftRadius: msg.role === 'assistant' ? 4 : 16,
                    borderBottomRightRadius: msg.role === 'user' ? 4 : 16,
                    background: msg.role === 'user' ? 'var(--accent)' : '#fff',
                    color: msg.role === 'user' ? '#fff' : 'var(--text)',
                    boxShadow: msg.role === 'assistant' ? 'var(--shadow-sm)' : 'none',
                    border: msg.role === 'assistant' ? '1px solid var(--border)' : 'none',
                    fontSize: 14,
                    lineHeight: 1.6
                  }}>
                    {msg.content}
                  </div>

                  {msg.role === 'user' && (
                    <div style={{ width: 28, height: 28, borderRadius: 8, background: 'var(--text-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <User size={14} color="#fff" />
                    </div>
                  )}
                </div>
              ))}
              
              {isTyping && (
                <div style={{ display: 'flex', gap: 12, alignItems: 'center', alignSelf: 'flex-start' }}>
                  <div style={{ width: 28, height: 28, borderRadius: 8, background: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Bot size={14} color="#fff" />
                  </div>
                  <div style={{ padding: '14px 18px', background: '#fff', borderRadius: 16, borderTopLeftRadius: 4, border: '1px solid var(--border)', display: 'flex', gap: 4 }}>
                    <motion.span animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 1, repeat: Infinity, delay: 0 }} style={{ width: 5, height: 5, background: 'var(--text-subtle)', borderRadius: '50%' }} />
                    <motion.span animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 1, repeat: Infinity, delay: 0.2 }} style={{ width: 5, height: 5, background: 'var(--text-subtle)', borderRadius: '50%' }} />
                    <motion.span animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 1, repeat: Infinity, delay: 0.4 }} style={{ width: 5, height: 5, background: 'var(--text-subtle)', borderRadius: '50%' }} />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form onSubmit={handleSend} style={{ padding: '16px', background: '#fff', borderTop: '1px solid var(--border)', display: 'flex', gap: 10 }}>
              <input 
                type="text" 
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Ask something..." 
                style={{ flex: 1, padding: '12px 16px', border: '1px solid var(--border-strong)', borderRadius: 12, outline: 'none', fontSize: 14, transition: 'border-color 0.2s' }}
                onFocus={e => e.currentTarget.style.borderColor = 'var(--accent)'}
                onBlur={e => e.currentTarget.style.borderColor = 'var(--border-strong)'}
              />
              <button 
                type="submit" 
                disabled={!input.trim() || isTyping}
                style={{ width: 44, height: 44, borderRadius: 12, background: input.trim() && !isTyping ? 'var(--accent)' : 'var(--border-strong)', color: '#fff', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: input.trim() && !isTyping ? 'pointer' : 'not-allowed', transition: 'background 0.2s' }}
              >
                <Send size={18} style={{ marginLeft: -2 }} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            onClick={() => setIsOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ 
              width: 56, 
              height: 56, 
              borderRadius: 28, 
              background: 'linear-gradient(135deg, var(--accent), var(--accent2))', 
              border: 'none', 
              cursor: 'pointer', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              boxShadow: '0 8px 24px rgba(37,99,235,0.4)',
              position: 'relative'
            }}
          >
            <Sparkles size={24} color="#fff" />
            
            {/* Pulsing ring indicator */}
            <motion.div 
              animate={{ transform: ['scale(1)', 'scale(1.4)'], opacity: [0.6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
              style={{ position: 'absolute', inset: -2, border: '2px solid var(--accent)', borderRadius: '50%', pointerEvents: 'none' }}
            />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}
