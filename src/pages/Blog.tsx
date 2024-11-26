import React from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar } from 'lucide-react';

const articles = [
  {
    id: 1,
    title: 'Cách phòng ngừa cảm cúm mùa đông',
    excerpt: 'Những biện pháp hiệu quả để bảo vệ sức khỏe trong mùa lạnh...',
    date: '2024-03-15',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 2,
    title: 'Chế độ ăn uống tăng cường miễn dịch',
    excerpt: 'Các loại thực phẩm giúp nâng cao sức đề kháng cho cơ thể...',
    date: '2024-03-14',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=400'
  }
];

export default function Blog() {
  const { t } = useTranslation();

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">{t('blog.title')}</h1>
      
      <div className="grid gap-6">
        {articles.map(article => (
          <article key={article.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="h-48 w-full object-cover md:h-full"
                />
              </div>
              <div className="p-6 md:w-2/3">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Calendar className="h-4 w-4 mr-1" />
                  {new Date(article.date).toLocaleDateString()}
                </div>
                <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <button className="text-blue-600 font-medium hover:text-blue-700">
                  {t('blog.readMore')} →
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}