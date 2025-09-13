# 🏛️ Government Social Support Portal


**A modern, accessible, and AI-powered government social support portal built with React**

## 📖 Overview

The Government Social Support Portal is a comprehensive front-end application designed to streamline the process of applying for financial assistance. Citizens can navigate through an intuitive 3-step wizard, receive AI-powered writing assistance, and submit applications in multiple languages with full accessibility support.

## ✨ Features

### 🎯 Core Functionality
- **Multi-step Form Wizard** - Intuitive 3-step application process with progress tracking
- **AI Writing Assistant** - OpenAI GPT-powered text generation for application statements
- **Progress Persistence** - Automatic saving using LocalStorage to prevent data loss
- **Mock API Integration** - Simulated backend submission for testing

### 🌐 User Experience
- **Responsive Design** - Optimized for mobile, tablet, and desktop devices
- **Bilingual Support** - English and Arabic with full RTL (Right-to-Left) support
- **Accessibility First** - ARIA roles, keyboard navigation, and screen reader support
- **Modern UI/UX** - Clean, government-standard interface with shadcn components

### 🛠️ Developer Features
- **TypeScript** - Full type safety and enhanced developer experience
- **Component Testing** - Jest and React Testing Library integration
- **Hot Reload** - Vite-powered development with instant updates
- **Modular Architecture** - Scalable component structure

## 🚀 Quick Start

### Prerequisites

Ensure you have the following installed:
- **Node.js** (v16.0.0 or higher)
- **npm** (v7.0.0 or higher)

### Installation


1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Configure environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit the `.env` file and add your OpenAI API key:
   ```env
   VITE_OPENAI_API_KEY=your_openai_api_key_here
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build production-ready application |
| `npm run test` | Run test suite with Jest |
| `npm run test:watch` | Run tests in watch mode |

## 🏗️ Project Architecture

```
social-support-portal/
│
├── 📦 Configuration Files
│   ├── package.json              # Dependencies and scripts
│   ├── vite.config.ts            # Vite build configuration
│   ├── tsconfig.json             # TypeScript configuration
│   ├── index.html                # HTML entry point
│   └── .env / .env.example       # Environment variables
│
└── 📁 src/                       # Application source code
    │
    ├── 🎯 Entry Points
    │   ├── main.tsx               # React application entry
    │   ├── App.tsx                # Root component
    │   ├── index.css              # Global styles
    │   └── setupTests.ts          # Testing configuration
    │
    ├── 🧩 components/             # Reusable UI components
    │   ├── steps/                 # Step-specific components
    │   │   ├── ProgressBar.tsx
    │   │   ├── StepCircle.tsx
    │   │   ├── StepIndicators.tsx
    │   │   ├── StepInfo.tsx
    │   │   └── StepItem.tsx
    │   ├── wizard/                # Form wizard components
    │   ├── ui/                    # Generic UI components
    │   └── StepProgress.tsx
    │
    ├── 🔄 State Management
    │   ├── contexts/              # React Context providers
    │   └── redux/                 # Redux store and slices
    │
    ├── 🛠️ Utilities & Services
    │   ├── hooks/                 # Custom React hooks
    │   ├── lib/                   # Utility functions
    │   ├── services/              # API communication
    │   └── data/                  # Static/mock data
    │
    ├── 📄 Pages & Routing
    │   ├── pages/                 # Page components
    │   └── guidelines/            # App guidelines/config
    │
    └── 🎨 Styling
        └── styles/                # CSS modules and themes
```

## 🛡️ Environment Configuration

### Required Environment Variables

Create a `.env` file in the project root with the following variables:

```env
# OpenAI Configuration
VITE_OPENAI_API_KEY=your_openai_api_key_here


### Getting OpenAI API Key

1. Visit [OpenAI Platform](https://platform.openai.com/)
2. Create an account or sign in
3. Navigate to API Keys section
4. Generate a new API key
5. Add the key to your `.env` file

> ⚠️ **Important**: Never commit your `.env` file to version control. The `.env.example` file is provided as a template.

## 📚 Documentation

### Form Wizard Steps

1. **Step 1: Personal Information**
   - Basic demographic data collection
   - Form validation with real-time feedback
   - Progress saving after completion

2. **Step 2: Financial Details**
   - Income and expense information
   - Supporting document references
   - Automatic calculations and validations

3. **Step 3: Situation Description**
   - AI-powered writing assistance
   - Multiple text fields for detailed explanations
   - Real-time character counting and suggestions

### AI Writing Assistant

The portal integrates with OpenAI's GPT-3.5-turbo model to help users articulate their situations effectively:

- **Smart Prompting**: Context-aware suggestions based on user input
- **Interactive Editing**: Users can accept, modify, or discard AI suggestions
- **Error Handling**: Graceful degradation when AI services are unavailable
- **Privacy First**: User data is processed securely with minimal retention

### Internationalization (i18n)

The application supports multiple languages with:

- **Dynamic Language Switching**: Real-time language toggle
- **RTL Support**: Full right-to-left layout for Arabic
- **Cultural Adaptation**: Date formats, number formats, and cultural norms
- **Accessibility**: Screen reader support in multiple languages

### State Management

The application uses Redux Toolkit for:

- **Form Data Persistence**: Automatic saving and restoration
- **Step Navigation**: Centralized routing logic
- **Error Handling**: Global error state management
- **Loading States**: Consistent loading indicators

## 🧪 Testing

### Running Tests

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### Testing Strategy

- **Unit Tests**: Individual component functionality
- **Form Validation Tests**: Input validation and error handling

## 🔄 Deployment

### Building for Production

```bash
npm run build
```

The built application will be available in the `dist/` directory.


## 🛠️ Technology Stack

| Category | Technology | Purpose |
|----------|------------|---------|
| **Framework** | React 18 | Component-based UI development |
| **Language** | TypeScript | Type safety and developer experience |
| **Build Tool** | Vite | Fast development and optimized builds |
| **Styling** | Tailwind CSS + shadcn/ui | Utility-first styling with components |
| **Forms** | React Hook Form | Efficient form handling and validation |
| **State** | Redux Toolkit | Predictable state management |
| **Routing** | React Router | Client-side navigation |
| **HTTP** | Axios | API communication |
| **i18n** | react-i18next | Internationalization |
| **Testing** | Jest + RTL | Comprehensive testing suite |
| **AI** | OpenAI GPT-3.5 | Intelligent writing assistance |

## 🚧 Roadmap

### Future Phase: Core Enhancements
- [ ] Server-side validation integration
- [ ] Real database connectivity
- [ ] Enhanced error handling and logging
- [ ] Performance optimization


