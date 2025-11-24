import React from 'react';

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Bảng Giá Dịch Vụ
          </h2>
          <p className="text-gray-600">
            Giá công khai, minh bạch. Không phát sinh chi phí ẩn.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Card 1: Xe Ghép */}
          <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg relative overflow-hidden group hover:border-blue-500 transition-all">
            <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
              PHỔ BIẾN NHẤT
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Xe Ghép Tiện Chuyến</h3>
            <p className="text-gray-500 mb-6">Đi chung xe, tiết kiệm chi phí</p>
            <div className="flex items-baseline mb-6">
              <span className="text-4xl font-bold text-blue-600">200k</span>
              <span className="text-gray-500 ml-2">/ ghế</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-gray-600">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                Đón trả tận nhà
              </li>
              <li className="flex items-center text-gray-600">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                Xe 5 chỗ, 7 chỗ đời mới
              </li>
              <li className="flex items-center text-gray-600">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                Nước uống, khăn lạnh free
              </li>
            </ul>
            <a href="#booking-form" className="block w-full text-center bg-blue-50 text-blue-600 font-bold py-3 rounded-xl hover:bg-blue-600 hover:text-white transition-colors">
              Đặt Ngay
            </a>
          </div>

          {/* Card 2: Bao Xe 5 Chỗ */}
          <div className="bg-gradient-to-br from-blue-900 to-slate-900 rounded-3xl p-8 text-white shadow-xl transform md:-translate-y-4">
             <div className="absolute top-0 right-0 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
              VIP
            </div>
            <h3 className="text-2xl font-bold mb-2">Bao Xe 5 Chỗ</h3>
            <p className="text-blue-200 mb-6">Không gian riêng tư, thoải mái</p>
            <div className="flex items-baseline mb-6">
              <span className="text-4xl font-bold text-white">900k</span>
              <span className="text-blue-200 ml-2">/ chuyến</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-blue-100">
                <svg className="w-5 h-5 text-orange-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                Đi riêng 1 mình 1 xe
              </li>
              <li className="flex items-center text-blue-100">
                <svg className="w-5 h-5 text-orange-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                Chủ động thời gian
              </li>
              <li className="flex items-center text-blue-100">
                <svg className="w-5 h-5 text-orange-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                Không bắt khách dọc đường
              </li>
            </ul>
            <a href="#booking-form" className="block w-full text-center bg-orange-500 text-white font-bold py-3 rounded-xl hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/30">
              Đặt Xe Riêng
            </a>
          </div>

          {/* Card 3: Gửi Hàng */}
          <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg group hover:border-blue-500 transition-all">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Gửi Hàng Hoá</h3>
            <p className="text-gray-500 mb-6">Hỏa tốc trong ngày</p>
            <div className="flex items-baseline mb-6">
              <span className="text-4xl font-bold text-gray-800">Từ 50k</span>
              <span className="text-gray-500 ml-2">/ kiện</span>
            </div>
             <ul className="space-y-4 mb-8">
              <li className="flex items-center text-gray-600">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                Giao nhận tận nơi
              </li>
              <li className="flex items-center text-gray-600">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                Bảo hiểm hàng hóa
              </li>
              <li className="flex items-center text-gray-600">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                Nhận hàng sau 3-4 tiếng
              </li>
            </ul>
            <a href="#booking-form" className="block w-full text-center bg-gray-50 text-gray-800 font-bold py-3 rounded-xl hover:bg-gray-200 transition-colors">
              Gửi Hàng
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;