import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ar';

interface I18nContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const translations = {
  en: {
    // Landing Page
    'hero.title': 'Financial support for those who need it',
    'hero.subtitle': 'Fast, accessible applications with guided help in English and Arabic.',
    'hero.cta': 'Apply Now',
    'hero.learn_more': 'Learn More',

    // Features
    'features.step_by_step.title': 'Step-by-Step Process',
    'features.step_by_step.description': 'Simple 3-step application process with clear guidance at every step.',
    'features.ai_help.title': 'AI-Powered Assistance',
    'features.ai_help.description': 'Get help writing your application with our intelligent writing assistant.',
    'features.secure.title': 'Secure & Private',
    'features.secure.description': 'Your information is protected with bank-level security and encryption.',

    // Navigation
    'nav.home': 'Home',
    'nav.dashboard': 'Dashboard',
    'nav.apply': 'Apply',
    'nav.profile': 'Profile',
    'nav.logout': 'Logout',

    // Dashboard
    'dashboard.title': 'Dashboard',
    'dashboard.welcome': 'Welcome back',
    'dashboard.applications': 'My Applications',
    'dashboard.notifications': 'Notifications',
    'dashboard.recent_activity': 'Recent Activity',
    'dashboard.no_applications': 'No applications yet',
    'dashboard.start_application': 'Start New Application',

    // Application Wizard
    'wizard.step1.title': 'Personal Information',
    'wizard.step2.title': 'Family & Financial Information',
    'wizard.step3.title': 'Situation Description',
    'wizard.progress': 'Step {{current}} of {{total}}',
    'wizard.back': 'Back',
    'wizard.continue': 'Continue',
    'wizard.save_continue_later': 'Save & Continue Later',
    'wizard.submit': 'Submit Application',

    // Form Fields
    'form.first_name': 'First Name',
    'form.last_name': 'Last Name',
    'form.email': 'Email Address',
    'form.phone': 'Phone Number',
    'form.address': 'Address',
    'form.city': 'City',
    'form.postal_code': 'Postal Code',
    'form.date_of_birth': 'Date of Birth',
    'form.family_size': 'Family Size',
    'form.monthly_income': 'Monthly Income',
    'form.employment_status': 'Employment Status',
    'form.financial_situation': 'Describe your financial situation',
    'form.help_needed': 'What kind of help do you need?',
    'form.reasonOfApply': 'Reason for Applying',
    'form.gender': 'Gender',
    'form.state': 'State',
    'form.national_id': 'National Id',
    'form.country': 'Country',
    'form.marital_status': 'Marital Status',
    'form.dependents': 'Dependents',
    'form.housing_status': 'Housing Status',
    'form.select_gender': 'Select a gender',
    'form.select_country': 'Select a country',
    'form.select_state': 'Select a state',
    'form.select_country_first': 'Please select a country first',
    'form.select_city': 'Select a city',
    'form.select_state_first': 'Please select a state first',


    // AI Assistant
    'ai.help_me_write': 'Help Me Write',
    'ai.generating': 'Generating suggestions...',
    'ai.accept': 'Accept',
    'ai.edit': 'Edit',
    'ai.discard': 'Discard',
    'ai.retry': 'Try Again',
    'ai.error': 'Failed to generate suggestions. Please try again.',

    // Buttons & Actions
    'button.submit': 'Submit',
    'button.cancel': 'Cancel',
    'button.save': 'Save',
    'button.edit': 'Edit',
    'button.delete': 'Delete',
    'button.close': 'Close',

    // Status
    'status.draft': 'Draft',
    'status.submitted': 'Submitted',
    'status.under_review': 'Under Review',
    'status.approved': 'Approved',
    'status.rejected': 'Rejected',

    // Errors
    'error.required': 'This field is required',
    'error.invalid_email': 'Please enter a valid email address',
    'error.invalid_phone': 'Please enter a valid phone number',
    'error.min_length': 'Must be at least {{min}} characters',
    'error.max_length': 'Must be no more than {{max}} characters',
    'error.404.title': 'Page Not Found',
    'error.404.description': 'The page you are looking for does not exist.',
    'error.500.title': 'Something Went Wrong',
    'error.500.description': 'We encountered an unexpected error. Please try again later.',
    'error.storage.title': 'Storage Error',
    'error.storage.description': 'Unable to save your data locally. Please check your browser settings.',
    'error.api.title': 'Connection Error',
    'error.api.description': 'Unable to connect to our servers. Please check your internet connection.',

    // Footer
    'footer.about': 'About',
    'footer.privacy': 'Privacy',
    'footer.terms': 'Terms',
    'footer.accessibility': 'Accessibility',
    'footer.contact': 'Contact',

    // Accessibility
    'aria.toggle_theme': 'Toggle theme',
    'aria.toggle_language': 'Toggle language',
    'aria.close_modal': 'Close modal',
    'aria.menu': 'Menu',
  },
  ar: {
    // Landing Page
    'hero.title': 'الدعم المالي لمن يحتاجه',
    'hero.subtitle': 'طلبات سريعة ومتاحة مع المساعدة الموجهة بالعربية والإنجليزية.',
    'hero.cta': 'قدم الآن',
    'hero.learn_more': 'تعرف أكثر',

    // Features
    'features.step_by_step.title': 'عملية خطوة بخطوة',
    'features.step_by_step.description': 'عملية تقديم بسيطة من 3 خطوات مع إرشادات واضحة في كل خطوة.',
    'features.ai_help.title': 'مساعدة بالذكاء الاصطناعي',
    'features.ai_help.description': 'احصل على المساعدة في كتابة طلبك مع مساعد الكتابة الذكي.',
    'features.secure.title': 'آمن وخاص',
    'features.secure.description': 'معلوماتك محمية بأمان وتشفير على مستوى البنوك.',

    // Navigation
    'nav.home': 'الرئيسية',
    'nav.dashboard': 'لوحة التحكم',
    'nav.apply': 'قدم طلب',
    'nav.profile': 'الملف الشخصي',
    'nav.logout': 'تسجيل الخروج',

    // Dashboard
    'dashboard.title': 'لوحة التحكم',
    'dashboard.welcome': 'مرحباً بك',
    'dashboard.applications': 'طلباتي',
    'dashboard.notifications': 'الإشعارات',
    'dashboard.recent_activity': 'النشاط الحديث',
    'dashboard.no_applications': 'لا توجد طلبات بعد',
    'dashboard.start_application': 'بدء طلب جديد',

    // Application Wizard
    'wizard.step1.title': 'المعلومات الشخصية',
    'wizard.step2.title': 'معلومات الأسرة والمالية',
    'wizard.step3.title': 'وصف الحالة',
    'wizard.progress': 'الخطوة {{current}} من {{total}}',
    'wizard.back': 'رجوع',
    'wizard.continue': 'متابعة',
    'wizard.save_continue_later': 'حفظ والمتابعة لاحقاً',
    'wizard.submit': 'إرسال الطلب',

    // Form Fields
    'form.first_name': 'الاسم الأول',
    'form.last_name': 'اسم العائلة',
    'form.email': 'عنوان البريد الإلكتروني',
    'form.phone': 'رقم الهاتف',
    'form.address': 'العنوان',
    'form.city': 'المدينة',
    'form.postal_code': 'الرمز البريدي',
    'form.date_of_birth': 'تاريخ الميلاد',
    'form.family_size': 'حجم الأسرة',
    'form.monthly_income': 'الدخل الشهري',
    'form.employment_status': 'حالة التوظيف',
    'form.financial_situation': 'اوصف وضعك المالي',
    'form.help_needed': 'ما نوع المساعدة التي تحتاجها؟',
    'form.reasonOfApply': 'سبب التقديم',
    'form.gender': 'الجنس',
    'form.state': 'الولاية',
    'form.national_id': 'الرقم القومي',
    'form.country': 'الدولة',
    'form.marital_status': 'الحالة الاجتماعية',
    'form.dependents': 'المعالون',
    'form.housing_status': 'حالة السكن',
    'form.select_gender': 'اختر الجنس',
    'form.select_country': 'اختر الدولة',
    'form.select_state': 'اختر الولاية',
    'form.select_country_first': 'يرجى اختيار الدولة أولاً',
    'form.select_city': 'اختر المدينة',
    'form.select_state_first': 'يرجى اختيار الولاية أولاً',

    // AI Assistant
    'ai.help_me_write': 'ساعدني في الكتابة',
    'ai.generating': 'جاري إنشاء الاقتراحات...',
    'ai.accept': 'قبول',
    'ai.edit': 'تعديل',
    'ai.discard': 'إلغاء',
    'ai.retry': 'المحاولة مرة أخرى',
    'ai.error': 'فشل في إنشاء الاقتراحات. يرجى المحاولة مرة أخرى.',

    // Buttons & Actions
    'button.submit': 'إرسال',
    'button.cancel': 'إلغاء',
    'button.save': 'حفظ',
    'button.edit': 'تعديل',
    'button.delete': 'حذف',
    'button.close': 'إغلاق',

    // Status
    'status.draft': 'مسودة',
    'status.submitted': 'مرسل',
    'status.under_review': 'قيد المراجعة',
    'status.approved': 'موافق عليه',
    'status.rejected': 'مرفوض',

    // Errors
    'error.required': 'هذا الحقل مطلوب',
    'error.invalid_email': 'يرجى إدخال عنوان بريد إلكتروني صحيح',
    'error.invalid_phone': 'يرجى إدخال رقم هاتف صحيح',
    'error.min_length': 'يجب أن يكون على الأقل {{min}} أحرف',
    'error.max_length': 'يجب ألا يزيد عن {{max}} حرف',
    'error.404.title': 'الصفحة غير موجودة',
    'error.404.description': 'الصفحة التي تبحث عنها غير موجودة.',
    'error.500.title': 'حدث خطأ ما',
    'error.500.description': 'واجهنا خطأ غير متوقع. يرجى المحاولة مرة أخرى لاحقاً.',
    'error.storage.title': 'خطأ في التخزين',
    'error.storage.description': 'غير قادر على حفظ بياناتك محلياً. يرجى التحقق من إعدادات المتصفح.',
    'error.api.title': 'خطأ في الاتصال',
    'error.api.description': 'غير قادر على الاتصال بخوادمنا. يرجى التحقق من اتصال الإنترنت.',

    // Footer
    'footer.about': 'حول',
    'footer.privacy': 'الخصوصية',
    'footer.terms': 'الشروط',
    'footer.accessibility': 'إمكانية الوصول',
    'footer.contact': 'اتصل بنا',

    // Accessibility
    'aria.toggle_theme': 'تبديل المظهر',
    'aria.toggle_language': 'تبديل اللغة',
    'aria.close_modal': 'إغلاق النافذة',
    'aria.menu': 'القائمة',
  }
};

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('language') as Language;
      if (stored) return stored;
      return navigator.language.startsWith('ar') ? 'ar' : 'en';
    }
    return 'en';
  });

  const isRTL = language === 'ar';

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language, isRTL]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en');
  };

  const t = (key: string, params?: Record<string, string | number>) => {
    let translation = translations[language][key as keyof typeof translations[typeof language]] || key;

    if (params) {
      Object.entries(params).forEach(([param, value]) => {
        translation = translation.replace(`{{${param}}}`, String(value));
      });
    }

    return translation;
  };

  return (
    <I18nContext.Provider value={{ language, toggleLanguage, t, isRTL }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}