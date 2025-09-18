❗ Problem Statement

Applying for government social support is often confusing, frustrating, and inaccessible for many citizens.

Common challenges include:

* Complicated forms that are hard to understand and complete
* Unclear instructions that lead to mistakes and rejected applications
* Language barriers for non-native speakers and low-literacy users
* Limited accessibility, excluding users with disabilities
* No progress saving, forcing users to start over if they leave the page

These issues cause delays, errors, and prevent vulnerable groups from receiving the help they need.

The Government Social Support Portal was created to solve these problems by providing a streamlined, bilingual, and accessible application experience — complete with AI-powered writing assistance to guide users every step of the way.

# Government Social Support Portal

**A modern, accessible, and AI-powered government social support portal built with React + TypeScript**

## Table of contents

1. [Project overview](#project-overview)
2. [Key features](#key-features)
3. [Technology stack](#technology-stack)
4. [Architecture & folder structure](#architecture--folder-structure)
5. [Step-by-step quick start (development)](#step-by-step-quick-start-development)
6. [Environment configuration](#environment-configuration)
7. [Using the application (end‑user flow)](#using-the-application-end-user-flow)
8. [AI Writing Assistant — notes & privacy](#ai-writing-assistant---notes--privacy)
9. [Internationalization (i18n) & RTL support](#internationalization-i18n--rtl-support)
10. [State management & persistence](#state-management--persistence)
11. [Testing strategy](#testing-strategy)


# Project overview

A front-end application designed to simplify and streamline citizen applications for social support. The portal provides a 3-step wizard with form validation, automatic progress persistence, bilingual support (English & Arabic), and an integrated AI writing assistant to help users compose effective application statements.

Goals:

* Mobile-first and responsive layout with RTL support for Arabic
* Minimal friction during application using autosave and clear validations
* Privacy-aware AI assistance via OpenAI 

---

# Key features

* Multi-step form wizard (3 steps) with progress indicators
* AI Writing Assistant (OpenAI GPT integration) for situation descriptions
* LocalStorage-based progress persistence to avoid data loss
* Bilingual UI with RTL support for Arabic
* TypeScript, Redux Toolkit for state, React Hook Form for validation
* Jest + React Testing Library for unit and integration tests

---

# Technology stack

| Responsibility | Technology                          |
| -------------- | ----------------------------------- |
| Framework      | React 18                            |
| Language       | TypeScript                          |
| Build tool     | Vite                                |
| Styling        | Tailwind CSS + shadcn/ui            |
| Forms          | React Hook Form + Zod (validation)  |
| State          | Redux Toolkit                       |
| Routing        | React Router                        |
| HTTP           | Axios                               |
| i18n           | react-i18next                       |
| Tests          | Jest + React Testing Library        |
| AI integration | OpenAI GPT-3.5 / server-proxied API |

---

# Architecture & folder structure

![Architecture Diagram](./public/social_portal-diagram.jpeg)

```
SOCIAL SUPPORT PORTAL
├── public
│   └── social_portal-diagram.jpeg
├── src
│   ├── api
│   │   ├── axios.ts
│   │   └── openai.ts
│   ├── components
│   │   ├── ErrorBoundary
│   │   │   └── ErrorBoundary.tsx
│   │   ├── fallback
│   │   │   └── ImageWithFallback.tsx
│   │   ├── ui
│   │   └── wizard
│   │       ├── components (AIAssistant, WizardNavigation, etc.)
│   │       └── formSteps (ProgressBar, Step components, pages)
│   ├── constants
│   ├── contexts
│   ├── hooks
│   ├── layout
│   ├── lib
│   ├── pages
│   ├── redux
│   │   ├── slices
│   │   └── store.ts
│   ├── services
│   ├── styles
│   ├── utils
│   ├── App.tsx
│   ├── main.tsx
│   └── setupTests.ts
├── .env.example
```

**Notes:**

* `services/openai.ts` contains the client-side helper for calling the OpenAI API. For production, do **not** expose a raw OpenAI key to the browser; proxy requests through a backend.

---

# Step-by-step quick start (development)

Follow these numbered steps to get the project running locally.

1. **Clone the repository**

   ```bash
   git clone <repo-url> social-support-portal
   cd social-support-portal
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Create environment file**

   ```bash
   cp .env.example .env
   ```

   Open `.env` and add your local settings (example below).

4. **Add OpenAI key (local / testing)**

   * For local development you can place a `VITE_OPENAI_API_KEY` in `.env` to enable AI features. **Important**: this is only acceptable for testing—do not commit `.env`.

5. **Start the dev server**

   ```bash
   npm run dev
   ```

   * App will be available at `http://localhost:5173` by default.

6. **Run tests**

   ```bash
   npm run test
   ```

7. **Build for production**

   ```bash
   npm run build
   ```

   * The production-ready files are output to `dist/`.

8. **Preview production build**

   * Option A: Use a static server to serve `dist/` (e.g. `serve` or `http-server`).

---

# Environment configuration

Create a `.env` at the project root (do **not** commit it). Example variables:

```env
# For local/testing AI (do not expose in production)
VITE_OPENAI_API_KEY=sk-xxxxxxxxxx

# Optional: backend base URL if you proxy AI requests
VITE_API_BASE_URL=http://localhost:4000

# App environment
VITE_APP_ENV=development
```

**Security note:** Never commit your `.env` or API keys to source control. For production, set keys as environment variables in your hosting provider and proxy AI requests server-side.

---

# Using the application (end‑user flow)

This is the step-by-step flow the user sees in the portal.

1. **Open landing page** — user chooses to start an application or read guidance.
2. **Step 1 — Personal Information**

   1. Enter full name, ID, contact details, and address.
   2. Inline validation shows errors in real-time.
   3. On *Next*, data is validated and saved to  LocalStorage.
3. **Step 2 — Financial Details**

   1. Enter income, expenses, and supporting document references.
   2. Calculations (e.g., monthly net) are computed client-side for preview.
   3. On *Next*, validated data is persisted.
4. **Step 3 — Situation Description**

   1. Users describe their situation in multiple fields.
   2. Click the **AI** button to generate suggested wording. Users can accept, edit, or discard suggestions.
   3. Character counters and accessibility helpers are present.
5. **Review & Submit**

   1. User sees a summary screen with editable sections.
   2. Submit triggers a mock API call (or real backend when connected) and displays success/failure.

---

# AI Writing Assistant — notes & privacy

1. **How it works**

   * The frontend form sends the user’s input directly to the OpenAI API.
   * OpenAI returns generated text, which is shown in the UI.
   * The user can accept, edit, or discard the suggested text.

2. **Privacy & retention**

   * Keep prompts as minimal as possible — avoid sending any sensitive or personal information (PII) from the frontend.
   * Since API keys are stored on the frontend, they can be exposed — use client-side protections like environment variables and domain restrictions to reduce risk.
   * If you choose to store AI outputs locally (e.g. browser storage), make it optional and clearly inform users about how long the data is kept.
3. **Error handling**

   * If the OpenAI API is unavailable or returns an error, the UI should:
            * Show a friendly error message or fallback guidance
            * Allow the user to continue writing manually without blocking the form.

---

# Internationalization (i18n) & RTL support

1. `react-i18next` powers the translation layer.
2. All visible strings should use translation keys in `src/constants/translations.ts`.
3. RTL handling: `dir="rtl"` is toggled at the top-level container when Arabic is selected. Ensure layout and components respect the `dir` attribute.
4. Date/number formatting must use `Intl` to adapt to locale.

---

# State management & persistence

1. **Redux Toolkit** centralizes form state (`src/redux/slices/formSlice.ts`).
2. Autosave: the wizard saves to `localStorage` after each step and hydrates on load.
3. Keep sensitive data off client-side storage in production; prefer short-lived tokens or server-side session storage.

---

# Testing strategy

1. **Unit tests**: small components and utilities (`src/tests/*`).
2. **Form tests**: ensure validations and step transitions behave as expected (React Testing Library).
3. **Run tests**

```bash
npm run test
npm run test:watch
npm run test:coverage
```

---

