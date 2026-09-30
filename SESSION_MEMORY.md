# 🧠 LiteRight Academy — Master Session Memory & Production Handoff

> **Important for Next AI Session:**  
> Read this file first when initiating a new session. It captures 100% of the research, live infrastructure setup, credentials, real-time costing, confirmed subscriptions, commercial pricing strategy, and pending implementation milestones established across all previous developer and stakeholder sessions.

---

## 1. Project Summary & Identity

* **Project Name:** LiteRight Academy (stylized as *LiteRight* or *LiteRite*)
* **Client / Parent Brand:** **Litelab Milano** (Architectural Lighting Vanguard, Milan, Italy)
* **Design Philosophy:** "Litelab Royale" — Monochromatic luxury aesthetic (`#000000` / `#FFFFFF`), high contrast, heavy typography (Outfit + Inter), glassmorphism HUD cards, responsive 16:9 player.
* **Course 1 Focus:** Comprehensive Architectural Lighting Design (Physics, Perception, Optics, Concepts, Documentation, Client Delivery).
* **Repository:** [https://github.com/A-Generative-Slice/literite.git](https://github.com/A-Generative-Slice/literite.git)
* **Local Workspace:** `D:\hussain\literite`
* **Commercial Model:** **Affordable Mass-Market Education (< ₹300 per course, e.g. ₹199 to ₹299)**

---

## 2. Live Production Infrastructure & Service Directory

All core production services have been provisioned and locked in:

| Service | Provider & Dashboard | Live URL / Endpoint | Credentials / Account | Plan / Status |
|---|---|---|---|---|
| **Custom Domain** | **GoDaddy** | `literiteacademy.com` / `www.literiteacademy.com` | GoDaddy Account (Active through Sep 2028) | 🟢 Live (SSL 🔒) |
| **Frontend Web** | **Vercel** (`litelab` team) | **[https://www.literiteacademy.com](https://www.literiteacademy.com)** (also `literight.vercel.app`) | Vercel Hobby Tier | 🟢 Live (100 GB free) |
| **Backend API** | **Render** (`literight-api`) | **[https://literight-api.onrender.com](https://literight-api.onrender.com)** | Render Account | 🟢 **Subscribed Starter ($7/mo)** (24/7, 0 cold starts) |
| **Cloud Database** | **Neon** (`quiet-voice-36935144`) | AWS Singapore (`ap-southeast-1`) | Neon Console (Free Tier, 500 MB) | 🟢 Connected (SSL required) |
| **Video Engine** | **Cloudflare** (`Images & Stream`) | Cloudflare Dashboard (`ffa8a2c3ebeb376f70c33436e27e56b3`) | `Ifthikhar.ilyas@gmail.com` | 🟢 **Subscribed Starter ($5/mo)** (1k min store / 5k min stream) |
| **Master Email** | **Google / Gmail** | `Literiteacademy@gmail.com` | Master Project Google Account | 🟢 Active |

---

## 3. Real-Time Costing Audit & Commercial Unit Economics

Calculated at standard reference conversion rate of **₹85 per $1 USD**:

### A. Fixed Baseline Operational Cost
| Component | Plan | Monthly Cost (USD) | Monthly Cost (INR ₹) | Yearly Cost (INR ₹) |
|---|---|---|---|---|
| **Vercel** *(Frontend)* | Hobby Plan | **$0.00** | **₹0** | **₹0** *(100 GB traffic/mo)* |
| **Render** *(Backend API)* | Starter Web Service | **$7.00 / mo** | **₹595 / mo** | — *(24/7 uptime, 0 cold starts)* |
| **Neon** *(PostgreSQL DB)* | Free Tier | **$0.00** | **₹0** | **₹0** *(500 MB holds 50k+ users)* |
| **Cloudflare Stream** *(Video)* | Starter Bundle | **$5.00 / mo** | **₹425 / mo** | — *(1,000 mins stored + 5k delivery)* |
| **Resend** *(Email OTPs)* | Free Tier | **$0.00** | **₹0** | **₹0** *(3,000 emails/month free)* |
| **GoDaddy** *(Domain)* | `.com` Registration | — | — | **~₹1,200 – ₹1,599 / year** |
| **Payment Gateway** *(Razorpay)* | Pay-As-You-Go | **$0.00 / mo** | **₹0 / mo** | **₹0** *(~2% to 2.3% per sale)* |
| **TOTAL FIXED MONTHLY** | | **$12.00 / mo** | **~₹1,020 / mo** | **+ ₹1,599 / yr domain** |

### B. Unit Economics for Mass-Market Courses (< ₹300)
* **Selling Price:** ₹299 (or ₹199)
* **Payment Gateway Cut:** ~₹7.05 per sale (at ₹299)
* **Cloudflare Stream Video Delivery:** ~₹7.65 per student for 90-min course (after 5,000 free monthly minutes; billed at $1/1,000 mins = 8.5 paise/min)
* **Net Profit per Student:** **~₹284.30** per student (**~95% net profit margin**)
* **Break-Even Point:** **Only 4 course sales per month** covers the entire fixed hosting bill (Render + Cloudflare Stream).
* **Reference Guides:** See [`COST_AND_SCALING_GUIDE.md`](./COST_AND_SCALING_GUIDE.md) and [`COST_AND_SCALING_SHEET.csv`](./COST_AND_SCALING_SHEET.csv).

---

## 4. Environment Variables Inventory (`.env`)

### Backend Environment Variables (Configured on Render)
```env
PORT=3000
DATABASE_URL=postgresql://user:password@ep-xyz.us-east-2.aws.neon.tech/neondb?sslmode=require
JWT_SECRET=b79a1f28e6c43d8a9e0f1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e
JWT_EXPIRES_IN=7d
RESEND_API_KEY=re_123456789_abcdefghijklmnopqrstuvwxyz
MAIL_FROM=LiteRight Academy <noreply@literiteacademy.com>
FRONTEND_URL=https://www.literiteacademy.com
CLOUDFLARE_ACCOUNT_ID=ffa8a2c3ebeb376f70c33436e27e56b3
CLOUDFLARE_STREAM_API_TOKEN=...
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...
```

### Frontend Environment Variables (Configured on Vercel)
```env
VITE_API_BASE=https://literight-api.onrender.com
VITE_APP_BRAND_NAME=LiteRight
VITE_APP_DOMAIN=literiteacademy.com
VITE_STRIPE_PUBLISHABLE_KEY=pk_live_...
```

---

## 5. Architectural Decisions & Trade-Offs Evaluated

1. **Render Starter Subscription ($7/mo):**
   - Eliminates the 50-second cold start on free web services. Students receive instantaneous authentication, course loading, and quiz grading 24/7.
2. **Cloudflare Stream Subscription ($5/mo Starter):**
   - Delivers encrypted HLS video chunks with tokenized DRM to prevent piracy.
   - Includes 1,000 stored minutes and 5,000 minutes streamed per month. Overages are billed at $1/1,000 minutes (8.5 paise/min).
3. **Mass-Market Pricing (< ₹300 / course):**
   - High volume, low ticket model. At ₹299, technology infrastructure represents less than 5% of monthly revenue at 100+ students.
4. **Consolidated Workspace Repository:**
   - Unified `literight`, `literite`, and `SliceClass` into `A-Generative-Slice/literite.git` located at `D:\hussain\literite`.
   - Purged obsolete Group B and Group C external repositories from local storage.

---

## 6. Commercial Readiness Checklist (Pending Implementation)

- [ ] **1. Cloudflare Stream Player Integration:**
  - Replace static placeholder in `src/pages/CourseDetail.jsx` (`<div ...>▶</div>`) with the Cloudflare Stream responsive player:
    ```jsx
    <iframe
      src={`https://iframe.videodelivery.net/${activeLesson.videoUrl || course.trailerId}`}
      style={{ border: 'none', position: 'absolute', top: 0, left: 0, height: '100%', width: '100%' }}
      allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
      allowFullScreen={true}
    />
    ```
- [ ] **2. Resend Custom Domain Verification:**
  - In Resend, add `literiteacademy.com`, obtain the 3 DNS records (SPF, DKIM, DMARC), and add them into GoDaddy DNS.
  - Update `backend/src/auth/email.service.ts` to dispatch OTP verification codes via Resend API from `noreply@literiteacademy.com`.
- [ ] **3. Payment Gateway Integration (Razorpay / Stripe for < ₹300 courses):**
  - Implement UPI/Card checkout for the course price (e.g. ₹299).
  - Add backend webhook to flip `user.isPremium = true` in Neon DB upon successful payment.
- [ ] **4. Backend Security Hardening:**
  - Install `bcrypt` and migrate from un-salted SHA-256 (`auth.service.ts`).
  - Parameterize `JWT_SECRET` via `ConfigService`.
  - Remove backdoor `Admin`/`Admin` fallback in `auth.service.ts`.
- [ ] **5. Legal & Compliance Pages:**
  - Add Privacy Policy, Terms of Service, and Refund Policy links to `src/components/Footer.jsx`.

---
*Last updated on 2026-09-30 — Context memory synchronized with GitHub repository.*
