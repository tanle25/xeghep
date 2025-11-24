import React, { useState } from 'react';

const BookingForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    from: '',
    to: '',
    date: '',
    time: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

  if (submitted) {
    return (
      <section id="booking-form" className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center text-white animate-fade-in">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
          </div>
          <h2 className="text-3xl font-bold mb-4">Đặt Xe Thành Công!</h2>
          <p className="text-xl opacity-90 mb-8">Cảm ơn anh/chị {formData.name}.<br/>Nhà xe sẽ liên hệ vào số {formData.phone} trong 5 phút nữa để xác nhận.</p>
          <button 
            onClick={() => setSubmitted(false)}
            className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
          >
            Đặt chuyến khác
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="booking-form" className="py-20 bg-gradient-to-br from-blue-600 to-cyan-700">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
          
          {/* Left Info */}
          <div className="md:w-5/12 bg-gray-900 text-white p-8 md:p-12 flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-6">Đặt Xe Nhanh</h3>
            <p className="text-gray-400 mb-8">
              Để lại thông tin, chúng tôi sẽ gọi lại ngay lập tức. Hoặc liên hệ trực tiếp:
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Tổng đài 24/7</p>
                  <p className="text-xl font-bold">098.888.8888</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Zalo Hỗ Trợ</p>
                  <p className="text-lg font-bold">098.888.8888</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="md:w-7/12 p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Họ tên</label>
                  <input required name="name" onChange={handleChange} type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="Nguyễn Văn A" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Số điện thoại</label>
                  <input required name="phone" onChange={handleChange} type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="09xxx..." />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Điểm đón</label>
                  <input required name="from" onChange={handleChange} type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="VD: TP Thanh Hoá" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Điểm đến</label>
                  <input required name="to" onChange={handleChange} type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="VD: Hà Nội" />
                </div>
              </div>

               <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Ngày đi</label>
                  <input required name="date" onChange={handleChange} type="date" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Giờ đón (dự kiến)</label>
                  <input required name="time" onChange={handleChange} type="time" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" />
                </div>
              </div>

              <button type="submit" className="w-full bg-orange-500 text-white font-bold py-4 rounded-xl shadow-lg hover:bg-orange-600 hover:shadow-xl transition-all mt-4 transform active:scale-95">
                XÁC NHẬN ĐẶT XE
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;