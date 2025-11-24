import React, { useState } from 'react';
import { TripType } from '../types';

const Hero = () => {
  const [tripType, setTripType] = useState<TripType>(TripType.SHARED);

  const scrollToBooking = () => {
    document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-[90vh] flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop" 
          alt="Xa lộ Hà Nội" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-black/50"></div>
      </div>

      <div className="container mx-auto px-4 z-10 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="text-white space-y-6 animate-fade-in-up">
          <span className="bg-orange-500 text-white text-sm font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-block mb-2">
            Uy tín số 1 Thanh Hoá
          </span>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Đi Chung Xe Sang <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Giá Chỉ Từ 200K
            </span>
          </h1>
          <p className="text-lg text-gray-200 max-w-lg">
            Dịch vụ xe ghép Thanh Hoá - Hà Nội đón trả tận nhà. Xe đời mới, sạch sẽ, lái xe an toàn. Chạy liên tục 24/7.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <button 
              onClick={scrollToBooking}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full shadow-lg shadow-orange-500/30 transition-all transform hover:-translate-y-1"
            >
              Đặt Xe Ngay
            </button>
            <a 
              href="tel:0988888888"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold py-4 px-8 rounded-full transition-all"
            >
              Gọi Hotline
            </a>
          </div>

          <div className="flex items-center gap-6 pt-6 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              Đón trả tận nơi
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              Không bắt khách dọc đường
            </div>
          </div>
        </div>

        {/* Right Form - Simulated Quick Lookup */}
        <div className="hidden md:block bg-white rounded-2xl p-6 shadow-2xl animate-fade-in-up delay-100 max-w-md ml-auto">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Tra Cứu Nhanh</h3>
          
          {/* Tabs */}
          <div className="flex p-1 bg-gray-100 rounded-lg mb-6">
            {Object.values(TripType).map((type) => (
              <button
                key={type}
                onClick={() => setTripType(type)}
                className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${
                  tripType === type ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-400 font-bold">Từ</span>
              </div>
              <input type="text" className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none" placeholder="Nhập điểm đón..." defaultValue="Thanh Hoá" />
            </div>
            
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-400 font-bold">Đến</span>
              </div>
              <input type="text" className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none" placeholder="Nhập điểm đến..." defaultValue="Hà Nội" />
            </div>

            <button 
              onClick={scrollToBooking}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition-colors shadow-lg shadow-blue-600/30"
            >
              Tìm Chuyến Xe
            </button>
            <p className="text-center text-xs text-gray-500 mt-2">
              Hơn 100+ chuyến mỗi ngày. Cam kết có xe.
            </p>
          </div>
        </div>
      </div>
      
      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-[calc(100%+1.3px)] h-[60px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-gray-50"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;