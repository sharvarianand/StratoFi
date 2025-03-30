
import { useState } from "react";
import { Bot, Send, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hello! I'm your StratoFi AI assistant. How can I help you with your investments today?" }
  ]);
  const [input, setInput] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    // Add user message
    setMessages((prev) => [...prev, { role: "user", content: input }]);
    
    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "Based on recent market analysis, tech stocks have shown a 12% growth trend this quarter.",
        "I recommend diversifying your portfolio with 40% stocks, 30% bonds, 20% ETFs, and 10% alternatives.",
        "Our AI models indicate a bullish trend for renewable energy stocks in the next 6 months.",
        "The latest economic indicators suggest moderate inflation growth of 2.3% annually."
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      setMessages((prev) => [...prev, { role: "assistant", content: randomResponse }]);
    }, 1000);
    
    setInput("");
  };
  
  return (
    <>
      {/* Floating chatbot button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-lg animate-pulse-slow hover:scale-110 transition-transform"
        >
          <Bot className="h-6 w-6 text-white" />
        </button>
      )}
      
      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-80 sm:w-96 h-[500px] glass rounded-xl shadow-xl flex flex-col animate-fade-in">
          {/* Chat header */}
          <div className="flex items-center justify-between p-4 border-b border-white/10">
            <div className="flex items-center gap-2">
              <Bot className="h-5 w-5 text-primary" />
              <h3 className="font-semibold">StratoFi AI Assistant</h3>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          {/* Chat messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-xl ${
                    message.role === "user"
                      ? "bg-primary text-white rounded-tr-none"
                      : "glass rounded-tl-none"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
          </div>
          
          {/* Input form */}
          <form onSubmit={handleSubmit} className="p-4 border-t border-white/10">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about market trends..."
                className="flex-1 glass-input rounded-lg p-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <Button type="submit" size="icon" className="bg-primary hover:bg-primary/90 text-white rounded-lg">
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <div className="mt-2 text-xs text-muted-foreground">
              5 free prompts remaining today
            </div>
          </form>
        </div>
      )}
    </>
  );
}
