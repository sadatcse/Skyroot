import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Bot, User, Loader2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import Markdown from 'react-markdown';

export const AIAssistant = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  // Removed the <{ role: 'user' | 'bot', content: string }[]> type annotation
  const [messages, setMessages] = React.useState([
    { role: 'bot', content: 'Hello! I am your Skyyroot Assistant. How can I help you today with our real estate projects?' }
  ]);
  const [input, setInput] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  // Removed the <HTMLDivElement> type annotation
  const scrollRef = React.useRef(null);

  React.useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: userMessage,
        config: {
          systemInstruction: "You are a helpful real estate assistant for Skyyroot Real Estate Ltd. You provide information about their ongoing projects (Skyyroot Horizon, Apex Plaza, Mirage Gardens), their mission (structural integrity and innovation), and their leadership (Ar. Shahed Al Mamun). Be professional, polite, and encouraging. If you don't know something, suggest contacting the sales team at info@skyyroot.com.",
        }
      });

      setMessages(prev => [...prev, { role: 'bot', content: response.text || "I'm sorry, I couldn't process that request." }]);
    } catch (error) {
      console.error('AI Error:', error);
      setMessages(prev => [...prev, { role: 'bot', content: "I'm having trouble connecting right now. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="absolute bottom-20 right-0 w-[350px] sm:w-[400px] bg-white rounded-2xl shadow-2xl border border-base-content/5 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-neutral p-4 flex items-center justify-between text-white">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-sm">Skyyroot Assistant</div>
                  <div className="text-[10px] text-accent flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></span> Online
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1 rounded-lg transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div 
              ref={scrollRef}
              className="h-[400px] overflow-y-auto p-4 space-y-4 bg-base-100"
            >
              {messages.map((msg, i) => (
                <div key={i} className={cn("flex", msg.role === 'user' ? "justify-end" : "justify-start")}>
                  <div className={cn(
                    "max-w-[85%] p-3 rounded-2xl text-sm",
                    msg.role === 'user' 
                      ? "bg-primary text-white rounded-tr-none" 
                      : "bg-white text-neutral shadow-sm border border-base-content/5 rounded-tl-none"
                  )}>
                    <div className="markdown-body">
                      <Markdown>{msg.content}</Markdown>
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white p-3 rounded-2xl shadow-sm border border-base-content/5 rounded-tl-none">
                    <Loader2 className="w-4 h-4 animate-spin text-white" />
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-base-content/5 flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about our projects..."
                className="flex-grow bg-base-content/2 border border-base-content/10 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-primary"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="bg-primary text-white p-2 rounded-xl hover:bg-primary transition-colors disabled:opacity-50"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-xl shadow-secondary/30 hover:scale-110 transition-transform active:scale-95"
      >
        <MessageSquare className="w-6 h-6" />
      </button>
    </div>
  );
};

// Removed the : any[] type from the inputs parameter
function cn(...inputs) {
  return inputs.filter(Boolean).join(' ');
}