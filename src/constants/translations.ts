export const translations = {
  en: {
    // Layout
    supportPortal: 'Support Portal',
    rightsReserved: 'Support Portal. All rights reserved.',

    // Landing Page
      hero: {
      title: 'Financial support for those who need it',
      subtitle: 'Fast, accessible applications with guided help in English and Arabic.',
      cta: 'Apply Now',
      learn_more: 'Learn More',
    },
    landing: {
      application_approved: "Application Approved",
      ai_assistant_active: "AI Assistant Active",
      features_heading: "How We Help You",
      features_subheading: "Our platform makes applying for financial support simple and accessible",
      cta_title: "Ready to Get Started",
      cta_description: "Begin your application today and get the support you need. Our process is designed to be quick, easy, and secure.",
    },

    // Features
    features: {
      step_by_step: {
        title: 'Step-by-Step Process',
        description: 'Simple 3-step application process with clear guidance at every step.',
      },
      ai_help: {
        title: 'AI-Powered Assistance',
        description: 'Get help writing your application with our intelligent writing assistant.',
      },
      secure: {
        title: 'Secure & Private',
        description: 'Your information is protected with bank-level security and encryption.',
      },
    },

    // Navigation
    nav: {
      home: 'Home',
      apply: 'Apply',
    },

    // Dashboard
    dashboard: {
      title: 'Dashboard',
      welcome: 'Welcome back',
      applications: 'My Applications',
      notifications: 'Notifications',
      recent_activity: 'Recent Activity',
      no_applications: 'No applications yet',
      start_application: 'Start New Application',
    },

    // Wizard
    wizard: {
      step1: { title: 'Personal Information', subtitle: 'Basic details' },
      step2: { title: 'Family & Financial Information', subtitle: 'Household info' },
      step3: { title: 'Situation Description', subtitle: 'Your story' },
      progress: 'Step {{current}} of {{total}}',
      back: 'Back',
      continue: 'Continue',
      save_continue_later: 'Save & Continue Later',
      submit: 'Submit Application',
      support_application: "Support Application",
      SecStep: {
        employment_information: "Please provide your household and employment information",
        dependents_description: "Number of people who depend on you financially",
        monthly_income_description: "Total gross monthly household income before taxes",
        housing_status_description: "Your current living situation",
      },
      thirdStep: {
        financial_situation: "Please describe your current financial situation and circumstances",
        assistance_type: "What specific type of assistance are you seeking?",
        reason_for_applying: "What is your reason for applying?",
        ai_suggestion: "AI Suggestion:",
      },
      financial_summary_prompt:
        "I am currently {{employmentStatus}} employee with a monthly income of {{monthlyIncome}} dollars. I am {{maritalStatus}}, live in {{housingStatus}}, and have {{dependents}} dependents. Please summarize my current financial situation in a clear, professional way as if I am describing it for a support application, max 500 characters",
      help_needed:
        "I am {{employmentStatus}} employee with a monthly income of {{monthlyIncome}} dollars. I am {{maritalStatus}}, living in {{housingStatus}}, and responsible for {{dependents}} dependents. Based on this, please write a professional summary to describe which help I really need for a support application, in my own voice, max 500 characters",
      reason_of_apply:
        "My situation — {{employmentStatus}} employee, earning {{monthlyIncome}} dollars monthly, {{maritalStatus}}, living in {{housingStatus}}, and caring for {{dependents}} dependents — please write a concise, professional statement explaining why I am applying for support, in my own voice, max 500 characters",
    },

    // Form Fields
    form: {
      first_name: 'First Name',
      last_name: 'Last Name',
      email: 'Email Address',
      phone: 'Phone Number',
      address: 'Address',
      city: 'City',
      postal_code: 'Postal Code',
      date_of_birth: 'Date of Birth',
      family_size: 'Family Size',
      monthly_income: 'Monthly Income',
      employment_status: 'Employment Status',
      financial_situation: 'Describe your financial situation',
      help_needed: 'What kind of help do you need?',
      reasonOfApply: 'Reason for Applying',
      gender: 'Gender',
      state: 'State',
      national_id: 'National Id',
      country: 'Country',
      marital_status: 'Marital Status',
      dependents: 'Dependents',
      housing_status: 'Housing Status',
      select_gender: 'Select a gender',
      select_country: 'Select a country',
      select_state: 'Select a state',
      select_country_first: 'Please select a country first',
      select_city: 'Select a city',
      select_state_first: 'Please select a state first',
    },

    placeholder: {
      firstName: 'John',
      lastName: 'Doe',
      phone: '+1 (555) 123-4567',
      email: 'john@example.com',
      dateOfBirth: 'YYYY-MM-DD',
      nationalId: '123456789',
      address: '123 Main Street',
      selectCountry: 'Select Country',
      selectState: 'Select State',
      selectStateFirst: 'Select country first',
      selectCity: 'Select City',
      selectCityFirst: 'Select state first',
      selectGender: 'Select Gender',
      selectMaritalStatus: "Select marital status",
      selectDependents: "Select number of dependents",
      selectEmploymentStatus: "Select employment status",
      selectMonthlyIncome: "Select monthly income range",
      selectHousingStatus: "Select housing status",
      financialSituation: "Describe your financial situation...",
      helpNeeded: "Describe what help you need...",
      reasonOfApply: "Reason for Applying...",
    },
suggestion: {
  accepted: "Suggestion Accepted",
},
    // Validation & Errors
    validation: {
      firstNameMin: "First name must be at least 2 characters",
      lastNameMin: "Last name must be at least 2 characters",
      nationalIdMin: "National ID must be at least 5 characters",
      dateOfBirthRequired: "Date of birth is required",
      dateOfBirthFuture: "Date of birth cannot be in the future",
      genderRequired: "Please select your gender",
      addressMin: "Please enter a complete address",
      countryRequired: "Please select a country",
      stateRequired: "Please select a state",
      cityRequired: "Please select a city",
      phoneMin: "Phone number must contain at least 10 digits",
      phoneInvalidChars: "Only digits, spaces, '+', '-', and parentheses are allowed",
      phoneInvalid: "Invalid phone number format",
      emailInvalid: "Please enter a valid email address",
      maritalStatusRequired: "Marital status is required",
      dependentsRequired: "Number of dependents is required",
      employmentStatusRequired: "Employment status is required",
      monthlyIncomeRequired: "Monthly income is required",
      housingStatusRequired: "Housing status is required",
      financialSituationMin: "Please provide at least 20 characters describing your situation",
      financialSituationMax: "Please provide no more than 500 characters",
      helpNeededMin: "Please provide at least 20 characters describing the help you need",
      helpNeededMax: "Please provide no more than 500 characters",
      reasonOfApplyMin: "Please provide at least 20 characters explaining why you are applying",
      reasonOfApplyMax: "Please provide no more than 500 characters",
      required: "Please enter your answer",
    },

    // AI Assistant
    ai: {
      help_me_write: 'Help Me Write',
      generating: 'Generating suggestions...',
      current_value: 'Current value:',
      accept: 'Accept',
      edit: 'Edit',
      cancel_edit: 'Cancel Edit',
      discard: 'Discard',
      retry: 'Try Again',
      edit_placeholder: 'Edit the suggestion...',
      error: 'Failed to generate suggestions. Please try again.',
    },

    // Buttons
    button: {
      submit: 'Submit',
      cancel: 'Cancel',
      save: 'Save',
      edit: 'Edit',
      delete: 'Delete',
      close: 'Close',
    },

    // Status
    status: {
      draft: 'Draft',
      submitted: 'Submitted',
      under_review: 'Under Review',
      approved: 'Approved',
      rejected: 'Rejected',
    },
    error: {
      required: "This field is required",
      invalid_email: "Please enter a valid email address",
      invalid_phone: "Please enter a valid phone number",
      min_length: "Must be at least {{min}} characters",
      max_length: "Must be no more than {{max}} characters",
      useI18n: "useI18n must be used within I18nProvider",
      "404": {
        title: "Page Not Found",
        description: "The page you are looking for does not exist.",
        additionalInfo: "The page might have been moved, deleted, or never existed.",
        searchPlaceholder: "Search for what you need...",
        goHome: "Go Home",
        goBack: "Go Back",
        popularPages: "Popular pages you might be looking for:",
        home: "Home",
        apply: "Apply for Support",
      },
      "500": {
        title: "Something Went Wrong",
        description: "We encountered an unexpected error. Please try again later.",
      },
      storage: {
        title: "Storage Error",
        description: "Unable to save your data locally. Please check your browser settings.",
        suggestion1: "Check your browser storage settings.",
        suggestion2: "Ensure you have enough local storage available.",
        suggestion3: "Try clearing browser cache and cookies.",
        suggestion4: "Restart the browser and try again.",
      },
      api: {
        title: "Connection Error",
        description: "Unable to connect to our servers. Please check your internet connection.",
        suggestion1: "Check your network connection.",
        suggestion2: "Try reconnecting to Wi-Fi or Ethernet.",
        suggestion3: "Ensure the server is online.",
        suggestion4: "Retry after a few moments.",
      },
      network: {
        title: "Network Error",
        description: "Your network connection seems unstable or offline.",
        suggestion1: "Check your internet connection.",
        suggestion2: "Try reconnecting or switching networks.",
        suggestion3: "Restart your router if needed.",
        suggestion4: "Retry after connection is stable.",
      },
      generic: {
        title: "An Error Occurred",
        description: "Something went wrong. Please try again.",
        suggestion1: "Refresh the page.",
        suggestion2: "Go back to the previous page.",
        suggestion3: "Contact support if the issue persists.",
        suggestion4: "Check your internet connection.",
      },
      useTheme: "useTheme must be used within a ThemeProvider",
      boundaryCaught: "Error caught by ErrorBoundary",
    },
    refresh_page: "Refresh Page",
    try_again: "Try Again",
    go_home: "Go Home",
    footer: {
      about: "About",
      privacy: "Privacy",
      terms: "Terms",
      accessibility: "Accessibility",
      contact: "Contact",
    },
    technical_detail: "Technical Detail",
    aria: {
      toggle_theme: "Toggle theme",
      toggle_language: "Toggle language",
      close_modal: "Close modal",
      menu: "Menu",
    },
    loading: "Loading...",
    imageLoading: "Error loading image",
    toast: {
      progressSaved: "Progress saved",
      submitting: "Submitting application...",
      submitSuccess: "Application submitted successfully!",
      submitError: "Failed to submit application. Please try again.",
      apiError: "API error occurred",
    },
    options: {
      gender: {
        male: 'Male',
        female: 'Female',
        other: 'Other',
        preferNotToSay: 'Prefer not to say',
      },
       "countries": [
      {
        "code": "US",
        "name": "United States",
        "states": [
          {
            "code": "CA",
            "name": "California",
            "cities": ["Los Angeles", "San Francisco", "San Diego", "Sacramento", "Oakland", "Fresno"]
          },
          {
            "code": "NY",
            "name": "New York",
            "cities": ["New York City", "Buffalo", "Rochester", "Albany", "Syracuse", "Yonkers"]
          },
          {
            "code": "TX",
            "name": "Texas",
            "cities": ["Houston", "Dallas", "Austin", "San Antonio", "Fort Worth", "El Paso"]
          },
          {
            "code": "FL",
            "name": "Florida",
            "cities": ["Miami", "Orlando", "Tampa", "Jacksonville", "Tallahassee", "Fort Lauderdale"]
          }
        ]
      },
      {
        "code": "UK",
        "name": "United Kingdom",
        "states": [
          {
            "code": "EN",
            "name": "England",
            "cities": ["London", "Manchester", "Birmingham", "Liverpool", "Leeds", "Sheffield"]
          },
          {
            "code": "SC",
            "name": "Scotland",
            "cities": ["Edinburgh", "Glasgow", "Aberdeen", "Stirling", "Perth", "Dundee"]
          },
          {
            "code": "WA",
            "name": "Wales",
            "cities": ["Cardiff", "Swansea", "Newport", "Bangor", "Wrexham", "Merthyr Tydfil"]
          }
        ]
      },
      {
        "code": "CA",
        "name": "Canada",
        "states": [
          {
            "code": "ON",
            "name": "Ontario",
            "cities": ["Toronto", "Ottawa", "Hamilton", "London", "Kitchener", "Windsor"]
          },
          {
            "code": "QC",
            "name": "Quebec",
            "cities": ["Montreal", "Quebec City", "Laval", "Gatineau", "Longueuil", "Sherbrooke"]
          },
          {
            "code": "BC",
            "name": "British Columbia",
            "cities": ["Vancouver", "Victoria", "Surrey", "Burnaby", "Richmond", "Abbotsford"]
          }
        ]
      },
      {
        "code": "AU",
        "name": "Australia",
        "states": [
          {
            "code": "NSW",
            "name": "New South Wales",
            "cities": ["Sydney", "Newcastle", "Wollongong", "Central Coast", "Maitland", "Albury"]
          },
          {
            "code": "VIC",
            "name": "Victoria",
            "cities": ["Melbourne", "Geelong", "Ballarat", "Bendigo", "Frankston", "Mildura"]
          },
          {
            "code": "QLD",
            "name": "Queensland",
            "cities": ["Brisbane", "Gold Coast", "Townsville", "Cairns", "Toowoomba", "Rockhampton"]
          }
        ]
      },
      {
        "code": "IN",
        "name": "India",
        "states": [
          {
            "code": "MH",
            "name": "Maharashtra",
            "cities": ["Mumbai", "Pune", "Nagpur", "Nashik", "Aurangabad", "Solapur"]
          },
          {
            "code": "KA",
            "name": "Karnataka",
            "cities": ["Bangalore", "Mysore", "Hubli", "Mangalore", "Belgaum", "Gulbarga"]
          },
          {
            "code": "DL",
            "name": "Delhi",
            "cities": ["New Delhi", "Delhi Cantonment", "Karol Bagh", "Rohini", "Dwarka", "Janakpuri"]
          }
        ]
      }
    ],
      maritalStatus: {
        single: 'Single',
        married: 'Married',
        divorced: 'Divorced',
        widowed: 'Widowed',
        separated: 'Separated',
        domesticPartnership: 'Domestic Partnership',
      },
      dependents: {
        '0': '0 dependents',
        '1': '1 dependent',
        '2': '2 dependents',
        '3': '3 dependents',
        '4': '4 dependents',
        '5': '5 dependents',
        '6+': '6+ dependents',
      },
      employmentStatus: {
        unemployed: 'Unemployed',
        partTime: 'Part-time employed',
        fullTime: 'Full-time employed',
        selfEmployed: 'Self-employed',
        contractor: 'Independent contractor',
        student: 'Student',
        retired: 'Retired',
        disabled: 'Unable to work (disabled)',
        homemaker: 'Homemaker',
      },
      monthlyIncome: {
        '0': '$0',
        '1-500': '$1 - $500',
        '501-1000': '$501 - $1,000',
        '1001-1500': '$1,001 - $1,500',
        '1501-2000': '$1,501 - $2,000',
        '2001-2500': '$2,001 - $2,500',
        '2501-3000': '$2,501 - $3,000',
        '3001-4000': '$3,001 - $4,000',
        '4001-5000': '$4,001 - $5,000',
        '5001+': '$5,001+',
      },
      housingStatus: {
        ownMortgage: 'Own with mortgage',
        ownOutright: 'Own outright',
        rentPrivate: 'Rent (private landlord)',
        rentSocial: 'Rent (social/public housing)',
        livingFamily: 'Living with family/friends',
        temporary: 'Temporary accommodation',
        homeless: 'Homeless/shelter',
        other: 'Other',
      },
    },
  },

 ar: {
  // Layout
  supportPortal: 'بوابة الدعم',
  rightsReserved: 'بوابة الدعم. جميع الحقوق محفوظة.',

  // Landing Page
    hero: {
      title: 'الدعم المالي لمن يحتاجه',
      subtitle: 'طلبات سريعة وسهلة مع المساعدة الإرشادية بالإنجليزية والعربية.',
      cta: 'قدم الآن',
      learn_more: 'اعرف المزيد',
    },
  landing: {
    application_approved: "تم اعتماد الطلب",
    ai_assistant_active: "مساعد الذكاء الاصطناعي مفعل",
    features_heading: "كيف نساعدك",
    features_subheading: "منصتنا تجعل التقديم للحصول على الدعم المالي بسيط وسهل الوصول",
    cta_title: "جاهز للبدء؟",
    cta_description: "ابدأ طلبك اليوم واحصل على الدعم الذي تحتاجه. عمليتنا سريعة وسهلة وآمنة.",
  },

  // Features
  features: {
    step_by_step: {
      title: 'عملية خطوة بخطوة',
      description: 'عملية تقديم من 3 خطوات مع إرشادات واضحة في كل خطوة.',
    },
    ai_help: {
      title: 'مساعدة معززة بالذكاء الاصطناعي',
      description: 'احصل على المساعدة في كتابة طلبك مع مساعدنا الذكي.',
    },
    secure: {
      title: 'آمن وسري',
      description: 'معلوماتك محمية بأمان على مستوى البنوك وبالتشفير.',
    },
  },

  // Navigation
  nav: {
    home: 'الرئيسية',
    apply: 'تقديم الطلب',
  },

  // Dashboard
  dashboard: {
    title: 'لوحة التحكم',
    welcome: 'مرحباً بعودتك',
    applications: 'طلباتي',
    notifications: 'الإشعارات',
    recent_activity: 'النشاط الأخير',
    no_applications: 'لا توجد طلبات بعد',
    start_application: 'ابدأ طلب جديد',
  },

  // Wizard
  wizard: {
    step1: { title: 'المعلومات الشخصية', subtitle: 'تفاصيل أساسية' },
    step2: { title: 'معلومات العائلة والمالية', subtitle: 'معلومات الأسرة' },
    step3: { title: 'وصف الوضع الحالي', subtitle: 'قصتك' },
    progress: 'الخطوة {{current}} من {{total}}',
    back: 'عودة',
    continue: 'متابعة',
    save_continue_later: 'حفظ والمتابعة لاحقاً',
    submit: 'تقديم الطلب',
    support_application: "طلب الدعم",
    SecStep: {
      employment_information: "يرجى تقديم معلومات الأسرة والعمل",
      dependents_description: "عدد الأشخاص الذين يعتمدون عليك مالياً",
      monthly_income_description: "إجمالي دخل الأسرة الشهري قبل الضرائب",
      housing_status_description: "الوضع السكني الحالي",
    },
    thirdStep: {
      financial_situation: "يرجى وصف الوضع المالي الحالي والظروف الخاصة بك",
      assistance_type: "ما نوع المساعدة التي تحتاجها؟",
      reason_for_applying: "ما سبب تقديمك للطلب؟",
      ai_suggestion: "اقتراح الذكاء الاصطناعي:",
    },
    financial_summary_prompt:
      "أنا موظف {{employmentStatus}} بدخل شهري {{monthlyIncome}} دولار. أنا {{maritalStatus}} وأعيش في {{housingStatus}} ولدي {{dependents}} تابعين. يرجى تلخيص وضعي المالي الحالي بطريقة واضحة ومهنية كما لو كنت أصفه لطلب دعم، بحد أقصى 500 حرف",
    help_needed:
      "أنا موظف {{employmentStatus}} بدخل شهري {{monthlyIncome}} دولار. أنا {{maritalStatus}}، أعيش في {{housingStatus}} ومسؤول عن {{dependents}} تابعين. استناداً إلى ذلك، يرجى كتابة ملخص مهني يصف نوع الدعم الذي أحتاجه فعلاً، بصوتي الخاص، بحد أقصى 500 حرف",
    reason_of_apply:
      "وضعي — موظف {{employmentStatus}}، أحقق دخل شهري {{monthlyIncome}} دولار، {{maritalStatus}}، أعيش في {{housingStatus}} وأعتني بـ {{dependents}} تابعين — يرجى كتابة بيان مختصر ومهني يوضح سبب تقديمي للطلب، بصوتي الخاص، بحد أقصى 500 حرف",
  },

  // Form Fields
  form: {
    first_name: 'الاسم الأول',
    last_name: 'اسم العائلة',
    email: 'البريد الإلكتروني',
    phone: 'رقم الهاتف',
    address: 'العنوان',
    city: 'المدينة',
    postal_code: 'الرمز البريدي',
    date_of_birth: 'تاريخ الميلاد',
    family_size: 'حجم الأسرة',
    monthly_income: 'الدخل الشهري',
    employment_status: 'حالة العمل',
    financial_situation: 'صف وضعك المالي',
    help_needed: 'ما نوع المساعدة التي تحتاجها؟',
    reasonOfApply: 'سبب التقديم',
    gender: 'الجنس',
    state: 'الولاية',
    national_id: 'الرقم الوطني',
    country: 'الدولة',
    marital_status: 'الحالة الاجتماعية',
    dependents: 'الأشخاص المعالين',
    housing_status: 'الوضع السكني',
    select_gender: 'اختر الجنس',
    select_country: 'اختر الدولة',
    select_state: 'اختر الولاية',
    select_country_first: 'يرجى اختيار الدولة أولاً',
    select_city: 'اختر المدينة',
    select_state_first: 'يرجى اختيار الولاية أولاً',
  },
placeholder: {
  firstName: 'جون',
  lastName: 'دو',
  phone: '+1 (555) 123-4567',
  email: 'john@example.com',
  dateOfBirth: 'YYYY-MM-DD',
  nationalId: '123456789',
  address: '123 الشارع الرئيسي',
  selectCountry: 'اختر الدولة',
  selectState: 'اختر الولاية',
  selectStateFirst: 'اختر الدولة أولاً',
  selectCity: 'اختر المدينة',
  selectCityFirst: 'اختر الولاية أولاً',
  selectGender: 'اختر الجنس',
  selectMaritalStatus: "اختر الحالة الاجتماعية",
  selectDependents: "اختر عدد المعالين",
  selectEmploymentStatus: "اختر حالة التوظيف",
  selectMonthlyIncome: "اختر نطاق الدخل الشهري",
  selectHousingStatus: "اختر حالة السكن",
  financialSituation: "صف وضعك المالي...",
  helpNeeded: "صف نوع المساعدة التي تحتاجها...",
  reasonOfApply: "سبب التقديم...",
},
suggestion: {
  accepted: "تم قبول الاقتراح",
},
// Validation & Errors
validation: {
  firstNameMin: "يجب أن يكون الاسم الأول على الأقل 2 حرفًا",
  lastNameMin: "يجب أن يكون الاسم الأخير على الأقل 2 حرفًا",
  nationalIdMin: "يجب أن يكون الرقم الوطني على الأقل 5 أرقام",
  dateOfBirthRequired: "تاريخ الميلاد مطلوب",
  dateOfBirthFuture: "لا يمكن أن يكون تاريخ الميلاد في المستقبل",
  genderRequired: "يرجى اختيار الجنس",
  addressMin: "يرجى إدخال عنوان كامل",
  countryRequired: "يرجى اختيار الدولة",
  stateRequired: "يرجى اختيار الولاية",
  cityRequired: "يرجى اختيار المدينة",
  phoneMin: "يجب أن يحتوي رقم الهاتف على 10 أرقام على الأقل",
  phoneInvalidChars: "يسمح فقط بالأرقام والمسافات و'+', '-' و()",
  phoneInvalid: "تنسيق رقم الهاتف غير صالح",
  emailInvalid: "يرجى إدخال بريد إلكتروني صالح",
  maritalStatusRequired: "الحالة الاجتماعية مطلوبة",
  dependentsRequired: "عدد المعالين مطلوب",
  employmentStatusRequired: "حالة التوظيف مطلوبة",
  monthlyIncomeRequired: "الدخل الشهري مطلوب",
  housingStatusRequired: "حالة السكن مطلوبة",
  financialSituationMin: "يرجى تقديم 20 حرفًا على الأقل لوصف وضعك المالي",
  financialSituationMax: "يرجى تقديم 500 حرف كحد أقصى لوصف وضعك المالي",
  helpNeededMin: "يرجى تقديم 20 حرفًا على الأقل لوصف المساعدة المطلوبة",
  helpNeededMax: "يرجى تقديم 500 حرف كحد أقصى لوصف المساعدة المطلوبة",
  reasonOfApplyMin: "يرجى تقديم 20 حرفًا على الأقل لشرح سبب التقديم",
  reasonOfApplyMax: "يرجى تقديم 500 حرف كحد أقصى لشرح سبب التقديم",
  required: "يرجى إدخال الإجابة",
},

// AI Assistant
ai: {
  help_me_write: 'ساعدني في الكتابة',
  generating: 'جارٍ توليد الاقتراحات...',
  current_value: 'القيمة الحالية:',
  accept: 'قبول',
  edit: 'تعديل',
  cancel_edit: 'إلغاء التعديل',
  discard: 'تجاهل',
  retry: 'حاول مرة أخرى',
  edit_placeholder: 'عدل الاقتراح...',
  error: 'فشل في توليد الاقتراحات. يرجى المحاولة مرة أخرى.',
},

// Buttons
button: {
  submit: 'إرسال',
  cancel: 'إلغاء',
  save: 'حفظ',
  edit: 'تعديل',
  delete: 'حذف',
  close: 'إغلاق',
},

// Status
status: {
  draft: 'مسودة',
  submitted: 'تم الإرسال',
  under_review: 'قيد المراجعة',
  approved: 'موافق عليه',
  rejected: 'مرفوض',
},
   error: {
      required: "هذا الحقل مطلوب",
      invalid_email: "يرجى إدخال بريد إلكتروني صالح",
      invalid_phone: "يرجى إدخال رقم هاتف صالح",
      min_length: "يجب أن يكون على الأقل {{min}} حرفًا",
      max_length: "يجب ألا يزيد عن {{max}} حرفًا",
      useI18n: "يجب استخدام useI18n داخل I18nProvider",
      "404": {
        title: "الصفحة غير موجودة",
        description: "الصفحة التي تبحث عنها غير موجودة.",
        additionalInfo: "قد تكون الصفحة تم نقلها أو حذفها أو لم تُنشأ أبدًا.",
        searchPlaceholder: "ابحث عما تحتاج...",
        goHome: "الذهاب للرئيسية",
        goBack: "العودة",
        popularPages: "الصفحات الشائعة التي قد تبحث عنها:",
        home: "الرئيسية",
        apply: "التقديم للدعم",
      },
      "500": {
        title: "حدث خطأ ما",
        description: "واجهنا خطأ غير متوقع. يرجى المحاولة لاحقًا.",
      },
      storage: {
        title: "خطأ في التخزين",
        description: "لا يمكن حفظ بياناتك محليًا. يرجى التحقق من إعدادات المتصفح.",
        suggestion1: "تحقق من إعدادات تخزين المتصفح.",
        suggestion2: "تأكد من وجود مساحة كافية للتخزين المحلي.",
        suggestion3: "حاول مسح ذاكرة التخزين المؤقت وملفات تعريف الارتباط.",
        suggestion4: "أعد تشغيل المتصفح وحاول مرة أخرى.",
      },
      api: {
        title: "خطأ في الاتصال",
        description: "لا يمكن الاتصال بخوادمنا. يرجى التحقق من اتصالك بالإنترنت.",
        suggestion1: "تحقق من اتصال الشبكة.",
        suggestion2: "حاول إعادة الاتصال بالواي فاي أو الإيثرنت.",
        suggestion3: "تأكد من أن الخادم يعمل.",
        suggestion4: "حاول مرة أخرى بعد بضع لحظات.",
      },
      network: {
        title: "خطأ في الشبكة",
        description: "يبدو أن اتصال الشبكة غير مستقر أو غير متصل.",
        suggestion1: "تحقق من اتصال الإنترنت.",
        suggestion2: "حاول إعادة الاتصال أو تغيير الشبكة.",
        suggestion3: "أعد تشغيل جهاز التوجيه إذا لزم الأمر.",
        suggestion4: "حاول مرة أخرى بعد استقرار الاتصال.",
      },
      generic: {
        title: "حدث خطأ",
        description: "حدث شيء خاطئ. يرجى المحاولة مرة أخرى.",
        suggestion1: "قم بتحديث الصفحة.",
        suggestion2: "عد للصفحة السابقة.",
        suggestion3: "اتصل بالدعم إذا استمر المشكلة.",
        suggestion4: "تحقق من اتصال الإنترنت.",
      },
      useTheme: "يجب استخدام useTheme داخل ThemeProvider",
      boundaryCaught: "تم التقاط الخطأ بواسطة ErrorBoundary",
    },
    refresh_page: "تحديث الصفحة",
    try_again: "حاول مرة أخرى",
    go_home: "الذهاب للرئيسية",
   
    footer: {
      about: "حول",
      privacy: "الخصوصية",
      terms: "الشروط",
      accessibility: "إمكانية الوصول",
      contact: "اتصل بنا",
    },
    technical_detail: "تفاصيل فنية",
    aria: {
      toggle_theme: "تغيير السمة",
      toggle_language: "تغيير اللغة",
      close_modal: "إغلاق النافذة",
      menu: "القائمة",
    },
    loading: "جارٍ التحميل...",
    imageLoading: "حدث خطأ أثناء تحميل الصورة",
    toast: {
      progressSaved: "تم حفظ التقدم",
      submitting: "جاري إرسال الطلب...",
      submitSuccess: "تم إرسال الطلب بنجاح!",
      submitError: "فشل إرسال الطلب. يرجى المحاولة مرة أخرى.",
      apiError: "حدث خطأ في واجهة البرمجة",
    },
  
  // Dropdown options
  options: {
    gender: {
      male: 'ذكر',
      female: 'أنثى',
      other: 'آخر',
      preferNotToSay: 'أفضل عدم التصريح',
    },
     "countries": [
      {
        "code": "US",
        "name": "الولايات المتحدة",
        "states": [
          {
            "code": "CA",
            "name": "كاليفورنيا",
            "cities": ["لوس أنجلوس", "سان فرانسيسكو", "سان دييغو", "ساكرامنتو", "أوكلاند", "فريسنو"]
          },
          {
            "code": "NY",
            "name": "نيويورك",
            "cities": ["مدينة نيويورك", "بوفالو", "روشستر", "ألباني", "سيراكيوز", "يونكرز"]
          },
          {
            "code": "TX",
            "name": "تكساس",
            "cities": ["هيوستن", "دالاس", "أوستن", "سان أنطونيو", "فورت وورث", "إل باسو"]
          },
          {
            "code": "FL",
            "name": "فلوريدا",
            "cities": ["ميامي", "أورلاندو", "تامبا", "جاكسونفيل", "تالاهاسي", "فورت لودرديل"]
          }
        ]
      },
      {
        "code": "UK",
        "name": "المملكة المتحدة",
        "states": [
          {
            "code": "EN",
            "name": "إنجلترا",
            "cities": ["لندن", "مانشستر", "برمنغهام", "ليفربول", "ليدز", "شيفيلد"]
          },
          {
            "code": "SC",
            "name": "اسكتلندا",
            "cities": ["إدنبرة", "غلاسغو", "أبردين", "ستيرلينج", "بيرث", "دندي"]
          },
          {
            "code": "WA",
            "name": "ويلز",
            "cities": ["كارديف", "سوانسي", "نيو بورت", "بانغور", "ركسهم", "ميرثير تايدفيل"]
          }
        ]
      },
      {
        "code": "CA",
        "name": "كندا",
        "states": [
          {
            "code": "ON",
            "name": "أونتاريو",
            "cities": ["تورونتو", "أوتاوا", "هاميلتون", "لندن", "كيتشنر", "ويندسور"]
          },
          {
            "code": "QC",
            "name": "كيبك",
            "cities": ["مونتريال", "مدينة كيبك", "لافال", "غاتينو", "لونغويل", "شيربروك"]
          },
          {
            "code": "BC",
            "name": "كولومبيا البريطانية",
            "cities": ["فانكوفر", "فيكتوريا", "سوري", "بيرنابي", "ريتشموند", "أبوتسفورد"]
          }
        ]
      },
      {
        "code": "AU",
        "name": "أستراليا",
        "states": [
          {
            "code": "NSW",
            "name": "نيو ساوث ويلز",
            "cities": ["سيدني", "نيوكاسل", "وولونجونج", "سنترا كورست", "ميت لاند", "ألبري"]
          },
          {
            "code": "VIC",
            "name": "فيكتوريا",
            "cities": ["ملبورن", "جيلونج", "بالارات", "بينديغو", "فرانكستون", "ميلدورا"]
          },
          {
            "code": "QLD",
            "name": "كوينزلاند",
            "cities": ["بريسبان", "جولد كوست", "تاونسفيل", "كيرنز", "توومبا", "روك هامبتون"]
          }
        ]
      },
      {
        "code": "IN",
        "name": "الهند",
        "states": [
          {
            "code": "MH",
            "name": "مهاراشترا",
            "cities": ["مومباي", "بوين", "ناغبور", "ناشيك", "أورانجاباد", "سولابور"]
          },
          {
            "code": "KA",
            "name": "كارناتاكا",
            "cities": ["بنغالور", "ميسور", "هبلي", "مانغالور", "بيلجاوم", "جلبارغا"]
          },
          {
            "code": "DL",
            "name": "دلهي",
            "cities": ["نيودلهي", "ديلي كانتونمنت", "كارول باغ", "روهيني", "دواركا", "جاناك بوري"]
          }
        ]
      }
    ] ,
    maritalStatus: {
      single: 'أعزب',
      married: 'متزوج',
      divorced: 'مطلق',
      widowed: 'أرمل/أرملة',
      separated: 'منفصل',
      domesticPartnership: 'شراكة منزلية',
    },
    dependents: {
      '0': '0 معالين',
      '1': '1 معالٍ',
      '2': '2 معالين',
      '3': '3 معالين',
      '4': '4 معالين',
      '5': '5 معالين',
      '6+': '6+ معالين',
    },
    employmentStatus: {
      unemployed: 'عاطل عن العمل',
      partTime: 'موظف بدوام جزئي',
      fullTime: 'موظف بدوام كامل',
      selfEmployed: 'عامل مستقل',
      contractor: 'متعاقد مستقل',
      student: 'طالب',
      retired: 'متقاعد',
      disabled: 'غير قادر على العمل (معاق)',
      homemaker: 'ربّة منزل',
    },
    monthlyIncome: {
      '0': '$0',
      '1-500': '$1 - $500',
      '501-1000': '$501 - $1,000',
      '1001-1500': '$1,001 - $1,500',
      '1501-2000': '$1,501 - $2,000',
      '2001-2500': '$2,001 - $2,500',
      '2501-3000': '$2,501 - $3,000',
      '3001-4000': '$3,001 - $4,000',
      '4001-5000': '$4,001 - $5,000',
      '5001+': '$5,001+',
    },
    housingStatus: {
      ownMortgage: 'ملك مع رهن عقاري',
      ownOutright: 'ملك بدون رهن',
      rentPrivate: 'إيجار (مالك خاص)',
      rentSocial: 'إيجار (إسكان اجتماعي/عام)',
      livingFamily: 'أعيش مع العائلة/الأصدقاء',
      temporary: 'سكن مؤقت',
      homeless: 'مشرد/مأوى',
      other: 'أخرى',
    },
  },
}
}

