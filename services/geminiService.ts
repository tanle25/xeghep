import { GoogleGenAI, Chat } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
Bạn là trợ lý ảo của dịch vụ "Xe Ghép Thanh Hoá - Hà Nội VIP". 
Nhiệm vụ của bạn là hỗ trợ khách hàng đặt xe, báo giá và giải đáp thắc mắc.

Thông tin dịch vụ:
- Tuyến đường: Thanh Hoá <-> Hà Nội (2 chiều).
- Loại xe: 5 chỗ, 7 chỗ (Vios, Accent, Xpander, Veloz...). Xe đời mới.
- Hình thức: Xe ghép (đi chung), Bao xe (đi riêng), Gửi hàng hóa.
- Giá vé tham khảo:
  + Ghép khách: 200.000đ - 250.000đ / ghế (tùy điểm đón).
  + Bao xe 5 chỗ: 900.000đ - 1.000.000đ / chuyến.
  + Bao xe 7 chỗ: 1.100.000đ - 1.300.000đ / chuyến.
  + Gửi hàng: Từ 50.000đ.
- Thời gian hoạt động: 24/7, tần suất 30 phút/chuyến.
- Cam kết: Đón trả tận nơi, không bắt khách dọc đường (trừ khách đã đặt), lái xe an toàn.

Kịch bản hội thoại:
1. Hỏi khách muốn đi từ đâu đến đâu, thời gian nào.
2. Báo giá ước tính.
3. Xin số điện thoại để tổng đài viên liên hệ chốt vé.
4. Luôn trả lời ngắn gọn, thân thiện, sử dụng icon vui vẻ.
5. Nếu khách hỏi về việc hủy chuyến, trả lời là vui lòng báo trước 2 tiếng.

Chỉ trả lời bằng Tiếng Việt.
`;

let chatSession: Chat | null = null;

export const initializeChat = () => {
  chatSession = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.7,
      maxOutputTokens: 500,
    },
  });
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!process.env.API_KEY) {
    return "Hệ thống AI đang bảo trì. Vui lòng gọi trực tiếp hotline 098.888.8888 để đặt xe.";
  }
  
  if (!chatSession) {
    initializeChat();
  }

  try {
    const response = await chatSession!.sendMessage({ message });
    return response.text || "Xin lỗi, tôi chưa hiểu ý bạn. Bạn cần đặt xe đi đâu ạ?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Đường truyền đang gián đoạn. Anh/chị vui lòng để lại Số Điện Thoại, nhà xe sẽ gọi lại ngay ạ!";
  }
};
