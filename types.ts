export interface TripDetails {
  from: string;
  to: string;
  date: string;
  time: string;
  seats: number;
  phone: string;
  name: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum TripType {
  SHARED = 'Ghép Khách',
  PRIVATE = 'Bao Xe',
  CARGO = 'Gửi Hàng'
}