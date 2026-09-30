# LiteRight Academy — Litelab Royale 🎓💡

<div align="center">

[![React 19](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev)
[![Vite 8](https://img.shields.io/badge/Vite_8-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev)
[![NestJS 11](https://img.shields.io/badge/NestJS_11-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)](https://nestjs.com)
[![TypeORM](https://img.shields.io/badge/TypeORM-FE0803?style=for-the-badge&logo=typeorm&logoColor=white)](https://typeorm.io)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Neon-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)](https://neon.tech)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com)
[![Render](https://img.shields.io/badge/Render-API-46E3B7?style=for-the-badge&logo=render&logoColor=black)](https://render.com)
[![Cloudflare](https://img.shields.io/badge/Cloudflare-Stream-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)](https://cloudflare.com)

**Definitive, Security-First Learning Management System (LMS) Built for Litelab Milano Architectural Lighting Academy.**

---

### 🌐 Live Production Deployments

| Component | Provider | Live Production URL | Status |
|---|---|---|---|
| **Frontend Web App** | **Vercel** + **GoDaddy** | **[https://www.literiteacademy.com](https://www.literiteacademy.com)** | 🟢 **Live (Active SSL 🔒)** |
| **Backend API** | **Render** (Node.js Web Service) | **[https://literight-api.onrender.com](https://literight-api.onrender.com)** | 🟢 **Live (`/courses`, `/auth`)** |
| **Cloud Database** | **Neon** (Serverless PostgreSQL) | AWS Asia Pacific 1 (`ap-southeast-1` Singapore) | 🟢 **Connected (SSL require)** |
| **Video Engine** | **Cloudflare Stream** | Starter Bundle (1,000 mins stored / 5,000 mins stream) | 🟢 **Subscribed ($5/mo)** |

</div>

---

## 📖 Overview

**LiteRight Academy** is an industry-tailored Learning Management System (LMS) engineered for **Litelab Milano** (a global vanguard in architectural lighting systems). 

The platform delivers a cinematic, studio-grade learning experience grounded in the **"Litelab Royale"** design philosophy—a stark, high-contrast monochromatic visual palette (`#000` deep black / `#FFF` pure white) with frosted glassmorphic HUD overlays, heavy architectural typography, and responsive video streaming.

---

## 🏗️ Production Architecture & Stack

```
┌────────────────────────────────────────────────────────────────────────┐
│                   FRONTEND (Vercel Edge Network)                       │
│    React 19 • Vite 8 • Zustand 5 • React Router v7 • Lucide Icons      │
│    Custom Domain: https://www.literiteacademy.com (GoDaddy DNS + SSL)  │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
               ┌────────────────────┼────────────────────┐
               ▼                    ▼                    ▼
     [Render Backend API]  [Cloudflare Stream]      [Stripe]
      (NestJS + TypeORM)     (16:9 HLS Video)    (Course Checkout)
               │
               ▼
     [Neon Cloud Database]
    (Serverless PostgreSQL)
               │
               ▼
      [Resend Email API]
    (6-digit OTPs & Resets)
```

| Layer | Service / Technology | Role in Architecture |
|---|---|---|
| **Frontend Framework** | React 19.2.4 + Vite 8.0.8 | Client-side Single Page Application (SPA). |
| **State Management** | Zustand 5.0.12 with `persist` | Session persistence via `localStorage` (`lms-storage`). |
| **Routing & Proxies** | React Router v7 + `vercel.json` | Client routing + `/api/(.*)` reverse proxy to Render. |
| **Backend Engine** | NestJS 11.1.19 (TypeScript) | Modular REST API (`auth`, `courses`, `progress`, `uploads`). |
| **ORM / Data Layer** | TypeORM 0.3.28 | Relational data mapper supporting both PostgreSQL & SQLite. |
| **Database** | Neon Serverless PostgreSQL | Hosted in AWS Singapore with dynamic SSL connection string. |
| **Video Engine** | Cloudflare Stream | Adaptive bitrate HLS streaming, tokenized URLs, 16:9 player. |
| **Transactional Email** | Resend API / Nodemailer | 6-digit OTP email verification and self-service password reset. |
| **Domain & DNS** | GoDaddy (`literiteacademy.com`) | Primary custom domain with automated Vercel SSL certificate. |
| **Payment Gateway** | Stripe / Razorpay | Commercial checkout for $199 course access. |

---

## 💰 Real-Time Commercial Costing Breakdown

### Fixed Operating Cost (Monthly & Yearly)

| Service | Plan | Monthly Cost (USD) | Monthly Cost (INR ₹) | Yearly Cost (INR ₹) |
|---|---|---|---|---|
| **Vercel** *(Frontend)* | Hobby Plan | **$0.00** | **₹0** | **₹0** *(100 GB traffic/mo)* |
| **Render** *(Backend API)* | Starter Web Service | **$7.00 / mo** | **₹595 / mo** | — *(Runs 24/7 without sleeping)* |
| **Neon** *(PostgreSQL DB)* | Free Tier | **$0.00** | **₹0** | **₹0** *(500 MB holds 50k+ users)* |
| **Cloudflare Stream** *(Video)* | Starter Bundle | **$5.00 / mo** | **₹425 / mo** | — *(1,000 mins stored + 5k delivery)* |
| **Resend** *(Email OTPs)* | Free Tier | **$0.00** | **₹0** | **₹0** *(3,000 emails/month free)* |
| **GoDaddy** *(Domain)* | `.com` Registration | — | — | **~₹1,200 – ₹1,599 / year** |
| **Stripe** *(Payments)* | Pay-As-You-Go | **$0.00 / mo** | **₹0 / mo** | **₹0** *(2.9% + 30¢ only per sale)* |
| **TOTAL BASELINE BILL** | | **$12.00 / mo** | **~₹1,020 / mo** | **+ ₹1,599 / yr domain** |

*(Calculated at standard reference rate ~₹85 per $1 USD).*

---

## 🔑 Environment Configuration Guide

### 1. Render Dashboard (`literight-api` Environment)
```env
# Server Port (Render sets this dynamically)
PORT=3000

# Database: Neon PostgreSQL Connection String (SSL required)
DATABASE_URL=postgresql://user:password@ep-xyz-123456.us-east-2.aws.neon.tech/neondb?sslmode=require

# JWT Authentication Secret
JWT_SECRET=b79a1f28e6c43d8a9e0f1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e
JWT_EXPIRES_IN=7d

# Outbound Email (Resend API)
RESEND_API_KEY=re_123456789_abcdefghijklmnopqrstuvwxyz
MAIL_FROM=LiteRight Academy <noreply@literiteacademy.com>

# CORS Whitelist
FRONTEND_URL=https://www.literiteacademy.com
```

### 2. Vercel Dashboard (`literight` Environment)
```env
# Points frontend to the Render backend API
VITE_API_BASE=https://literight-api.onrender.com

# Branding parameters
VITE_APP_BRAND_NAME=LiteRight
VITE_APP_DOMAIN=literiteacademy.com
```

---

## 📂 Directory Layout

```
literight/
├── backend/                      # NestJS 11 TypeScript backend service
│   ├── src/
│   │   ├── auth/                 # Passport JWT, SHA-256/bcrypt, email OTP service
│   │   ├── courses/              # Course, Chapter, and Lesson entities + seeders
│   │   ├── progress/             # Student timestamp & lesson completion telemetry
│   │   ├── uploads/              # Multer media storage pipeline
│   │   ├── app.module.ts         # Dynamic PostgreSQL (Neon) & SQLite configuration
│   │   └── main.ts               # Application bootstrap, CORS, and port listener
│   └── package.json              # Backend dependencies (NestJS, TypeORM, pg, sqlite3)
├── course1content/               # Interactive curriculum HTML module
├── infrastructure/               # Nginx reverse proxy configurations
├── public/                       # Favicons and static assets
├── screenshots/                  # Production dashboard & UI walkthroughs
├── src/                          # React 19 Frontend application
│   ├── assets/                   # Brand photography and vectors
│   ├── components/               # Common UI (Stacked Logo, Navigation, Footer, Quizzes)
│   ├── hooks/                    # Custom hooks (useProgress)
│   ├── pages/                    # Views (PublicLanding, CourseDetail, AuthPage, ProfilePage, AdminPanel)
│   ├── stores/                   # Zustand global store (useLmsStore)
│   ├── App.jsx                   # React Router root shell
│   ├── index.css                 # Litelab Royale CSS framework & responsive tokens
│   └── main.jsx                  # Client entry point
├── course_outline.md             # Complete lighting design curriculum outline
├── literight_comprehensive_report.md # Technical & architectural audit
├── PROJECT_LOG.md                # Phase-by-phase engineering changelog
├── vercel.json                   # Vercel SPA routing and /api reverse proxy rewrites
└── vite.config.js                # Vite bundler configuration
```

---

## 🚀 Local Development Setup

### Prerequisites
- Node.js v20+ or v22+
- npm v10+

```bash
# 1. Clone or navigate to the repository
cd literite

# 2. Install root (frontend) dependencies
npm install

# 3. Install backend dependencies
cd backend && npm install && cd ..

# 4. Launch backend (NestJS on port 3000)
cd backend && npm run start:dev

# 5. In a separate terminal, launch frontend (Vite on port 5173)
npm run dev
```

Visit `http://localhost:5173` to explore locally.

---

## 🏁 Commercial Readiness Checklist

- [x] **Custom Domain Active**: `literiteacademy.com` live with verified SSL on GoDaddy & Vercel.
- [x] **Backend Live on Cloud**: NestJS running on Render (`https://literight-api.onrender.com`).
- [x] **Cloud Database Active**: Neon PostgreSQL (Singapore AWS region) synced and storing tables.
- [x] **Video Stream Subscribed**: Cloudflare Stream Starter Bundle active ($5/mo).
- [ ] **Video Player Integration**: Embed Cloudflare Stream responsive player into `CourseDetail.jsx`.
- [ ] **Resend Domain Verification**: Add SPF/DKIM/DMARC in GoDaddy DNS for `noreply@literiteacademy.com`.
- [ ] **Payment Gateway**: Connect Stripe / Razorpay checkout session to course "Upgrade Now" button.
- [ ] **Security Hardening**: Migrate bare SHA-256 to `bcrypt` and remove backdoor `Admin`/`Admin` credentials.
- [ ] **Legal Pages**: Add Terms of Service, Privacy Policy, and Refund Policy for payment processor compliance.

---

## 📄 License & Attribution

Designed and engineered for **LiteRight Academy** by **Litelab Milano** & **A Generative Slice**.  
Copyright © 2026 Litelab & A Generative Slice. All rights reserved.
