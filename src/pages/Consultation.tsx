import React, { useState, useRef, useEffect } from 'react';
import { SendHorizontal, Bot, User, Image, FileText, Lightbulb, Plus } from 'lucide-react';
import { getChatResponse } from '../utils/ai';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function Consultation() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const prompt = `Bạn là DrPill, một trợ lý AI thông minh chuyên về y tế. 
        Hãy tư vấn cho bệnh nhân một cách chuyên nghiệp và đưa ra lời khuyên phù hợp. 
        Câu hỏi của bệnh nhân: ${input}`;
      
      const aiResponse = await getChatResponse(prompt);
      const aiMessage = { 
        role: 'assistant', 
        content: aiResponse || 'Xin lỗi, tôi không thể xử lý yêu cầu này. Vui lòng thử lại sau.'
      };
      
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      const errorMessage = {
        role: 'assistant',
        content: 'Xin lỗi, tôi không thể xử lý yêu cầu này. Vui lòng thử lại sau.'
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <div className="border-b border-gray-200 p-3">
        <h1 className="text-lg font-semibold">DrPill - Tư Vấn Y Tế</h1>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-3xl mx-auto p-4 space-y-6">
          {messages.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold mb-6">Tôi có thể giúp gì cho bạn?</h2>
              <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto">
                <button className="p-4 border rounded-lg text-left hover:bg-gray-50">
                  <div className="flex items-center gap-3 mb-2">
                    <Image className="h-6 w-6 text-gray-600" />
                    <span className="font-medium">Tạo hình ảnh</span>
                  </div>
                  <p className="text-gray-600 text-sm">Tạo hình ảnh minh họa cho vấn đề sức khỏe</p>
                </button>
                <button className="p-4 border rounded-lg text-left hover:bg-gray-50">
                  <div className="flex items-center gap-3 mb-2">
                    <FileText className="h-6 w-6 text-gray-600" />
                    <span className="font-medium">Tóm tắt văn bản</span>
                  </div>
                  <p className="text-gray-600 text-sm">Tóm tắt thông tin y tế quan trọng</p>
                </button>
                <button className="p-4 border rounded-lg text-left hover:bg-gray-50">
                  <div className="flex items-center gap-3 mb-2">
                    <Lightbulb className="h-6 w-6 text-gray-600" />
                    <span className="font-medium">Lên ý tưởng</span>
                  </div>
                  <p className="text-gray-600 text-sm">Gợi ý các phương pháp chăm sóc sức khỏe</p>
                </button>
                <button className="p-4 border rounded-lg text-left hover:bg-gray-50">
                  <div className="flex items-center gap-3 mb-2">
                    <Plus className="h-6 w-6 text-gray-600" />
                    <span className="font-medium">Thêm</span>
                  </div>
                  <p className="text-gray-600 text-sm">Khám phá thêm tính năng khác</p>
                </button>
              </div>
            </div>
          ) : (
            messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex items-start gap-4 ${
                  msg.role === 'user' ? 'justify-end' : ''
                }`}
              >
                {msg.role === 'assistant' && (
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                    <Bot className="h-5 w-5 text-white" />
                  </div>
                )}
                <div
                  className={`max-w-[85%] p-4 rounded-2xl ${
                    msg.role === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100'
                  }`}
                >
                  {msg.content}
                </div>
                {msg.role === 'user' && (
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                    <User className="h-5 w-5 text-gray-600" />
                  </div>
                )}
              </div>
            ))
          )}
          {isLoading && (
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                <Bot className="h-5 w-5 text-white" />
              </div>
              <div className="max-w-[85%] p-4 rounded-2xl bg-gray-100">
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <div className="border-t border-gray-200 p-4">
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
          <div className="relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Nhập câu hỏi của bạn..."
              className="w-full p-4 pr-24 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              disabled={isLoading}
            />
            <button
              type="submit"
              className={`absolute right-2 top-2 px-4 py-2 rounded-lg flex items-center gap-2 ${
                isLoading
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-700'
              } text-white`}
              disabled={isLoading}
            >
              <SendHorizontal className="h-5 w-5" />
              {isLoading ? 'Đang gửi...' : 'Gửi'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}