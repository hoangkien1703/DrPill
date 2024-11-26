import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        consultation: 'Consultation',
        pharmacy: 'Pharmacy',
        blog: 'Health Blog',
        profile: 'Profile',
        signIn: 'Sign In',
        signOut: 'Sign Out'
      },
      consultation: {
        title: 'Medical Consultation',
        subtitle: 'Chat with DrPill AI for health advice',
        placeholder: 'Describe your symptoms to get started...',
        inputPlaceholder: 'Type your message...',
        send: 'Send',
        sending: 'Sending...',
        errorMessage: 'Sorry, I cannot process this request. Please try again later.'
      },
      profile: {
        title: 'My Profile',
        anonymous: 'Anonymous User',
        medicalHistory: 'Medical History',
        noRecords: 'No medical records available',
        notifications: 'Notifications',
        noNotifications: 'No new notifications'
      },
      blog: {
        title: 'Health Blog',
        readMore: 'Read More'
      },
      footer: {
        copyright: '© {{year}} DrPill Healthcare. All rights reserved.'
      }
    }
  },
  vi: {
    translation: {
      nav: {
        consultation: 'Tư vấn',
        pharmacy: 'Nhà thuốc',
        blog: 'Blog Sức khỏe',
        profile: 'Hồ sơ',
        signIn: 'Đăng nhập',
        signOut: 'Đăng xuất'
      },
      consultation: {
        title: 'Tư Vấn Y Tế',
        subtitle: 'Trò chuyện với DrPill AI để nhận tư vấn sức khỏe',
        placeholder: 'Mô tả triệu chứng của bạn để bắt đầu...',
        inputPlaceholder: 'Nhập tin nhắn...',
        send: 'Gửi',
        sending: 'Đang gửi...',
        errorMessage: 'Xin lỗi, tôi không thể xử lý yêu cầu này. Vui lòng thử lại sau.'
      },
      profile: {
        title: 'Hồ Sơ Của Tôi',
        anonymous: 'Người dùng ẩn danh',
        medicalHistory: 'Lịch Sử Y Tế',
        noRecords: 'Chưa có hồ sơ y tế',
        notifications: 'Thông Báo',
        noNotifications: 'Không có thông báo mới'
      },
      blog: {
        title: 'Blog Sức Khỏe',
        readMore: 'Xem thêm'
      },
      footer: {
        copyright: '© {{year}} DrPill Healthcare. Đã đăng ký bản quyền.'
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'vi',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;