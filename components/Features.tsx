import React from 'react';
import { ClockIcon, MapPinIcon, ShieldCheckIcon, CarIcon } from './Icons';

const features = [
  {
    icon: <ClockIcon className="w-8 h-8 text-blue-500" />,
    title: "Di Chuyển Nhanh Chóng",
    description: "Thời gian di chuyển chỉ từ 2.5 - 3 tiếng. Chạy đường cao tốc 100%."
  },
  {
    icon: <MapPinIcon className="w-8 h-8 text-orange-500" />,
    title: "Đón Trả Tận Nơi",
    description: "Không cần ra bến xe. Tài xế đón tận cổng nhà tại Thanh Hoá và Hà Nội."
  },
  {
    icon: <CarIcon className="w-8 h-8 text-green-500" />,
    title: "Xe Đời Mới 100%",
    description: "Đội xe Vios, Accent, Xpander đời 2022 trở lên. Sạch sẽ, không mùi."
  },
  {
    icon: <ShieldCheckIcon className="w-8 h-8 text-purple-500" />,
    title: "An Toàn Tuyệt Đối",
    description: "Tài xế nhiều năm kinh nghiệm, điềm đạm. Cam kết không phóng nhanh vượt ẩu."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tại Sao Chọn Chúng Tôi?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Chúng tôi cam kết mang lại trải nghiệm di chuyển thoải mái như xe nhà với chi phí tiết kiệm nhất.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="bg-gray-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto md:mx-0">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center md:text-left">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center md:text-left leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;