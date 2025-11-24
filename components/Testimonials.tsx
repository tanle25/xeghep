import React from 'react';
import { StarIcon } from './Icons';

const reviews = [
  {
    name: "Chị Minh Anh",
    role: "Khách du lịch",
    text: "Lái xe rất thân thiện, xe mới sạch sẽ không có mùi. Mình say xe mà đi cảm thấy rất êm. Sẽ ủng hộ dài dài.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100"
  },
  {
    name: "Anh Tuấn Hưng",
    role: "Kinh doanh tự do",
    text: "Gửi hàng rất nhanh, sáng gửi trưa khách nhận được luôn. Giá cả hợp lý hơn gửi xe khách vì được đến lấy tận nơi.",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=100&h=100"
  },
  {
    name: "Cô Thanh",
    role: "Về quê thăm thân",
    text: "Các cháu lái xe nhiệt tình, mang vác hành lý giúp cô tận cửa. Đi đúng giờ không phải chờ đợi.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&h=100"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
          Khách Hàng Nói Về Chúng Tôi
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex gap-1 text-yellow-400 mb-4">
                {[1, 2, 3, 4, 5].map(i => <StarIcon key={i} fill="currentColor" className="w-5 h-5 text-yellow-400" />)}
              </div>
              <p className="text-gray-600 italic mb-6">"{review.text}"</p>
              <div className="flex items-center gap-4">
                <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold text-gray-900">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;