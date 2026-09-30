# 🧠 LiteRight Academy — Master Session Memory & Production Handoff

> **Important for Next AI Session:**  
> Read this file first when initiating a new session. It captures 100% of the research, live infrastructure setup, credentials, real-time costing, and pending implementation milestones established across all previous developer and stakeholder sessions.

---

## 1. Project Summary & Identity

* **Project Name:** LiteRight Academy (stylized as *LiteRight* or *LiteRite*)
* **Client / Parent Brand:** **Litelab Milano** (Architectural Lighting Vanguard, Milan, Italy)
* **Design Philosophy:** "Litelab Royale" — Monochromatic luxury aesthetic (`#000000` / `#FFFFFF`), high contrast, heavy typography (Outfit + Inter), glassmorphism HUD cards, responsive 16:9 player.
* **Course 1 Focus:** Comprehensive Architectural Lighting Design (Physics, Perception, Optics, Concepts, Documentation, Client Delivery).
* **Repository:** [https://github.com/A-Generative-Slice/literight.git](https://github.com/A-Generative-Slice/literight.git)
* **Local Workspace:** `D:\hussain\literite` *(Junctioned with `D:\hussain\literight`)*

---

## 2. Live Production Infrastructure & Service Directory

All five core production services have been provisioned and verified:

| Service | Provider & Dashboard | Live URL / Endpoint | Credentials / Account | Status |
|---|---|---|---|---|
| **Custom Domain** | **GoDaddy** | `literiteacademy.com` / `www.literiteacademy.com` | GoDaddy Account (Active through Sep 2028) | 🟢 Live (SSL 🔒) |
| **Frontend Web** | **Vercel** (`litelab` team) | **[https://www.literiteacademy.com](https://www.literiteacademy.com)** (also `literight.vercel.app`) | Vercel Hobby Tier | 🟢 Live |
| **Backend API** | **Render** (`literight-api`) | **[https://literight-api.onrender.com](https://literight-api.onrender.com)** | Render Free / Starter Web Service | 🟢 Live (`/courses`, `/auth`) |
| **Cloud Database** | **Neon** (`quiet-voice-36935144`) | AWS Singapore (`ap-southeast-1`) | Neon Console (Free Tier, 500 MB) | 🟢 Connected (SSL required) |
| **Video Engine** | **Cloudflare** (`Images & Stream`) | Cloudflare Dashboard (`ffa8a2c3ebeb376f70c33436e27e56b3`) | `Ifthikhar.ilyas@gmail.com` | 🟢 Subscribed (Starter Bundle $5/mo) |
| **Master Email** | **Google / Gmail** | `Literiteacademy@gmail.com` | Master Project Google Account | 🟢 Active |

---

## 3. Real-Time Costing Audit (USD & INR)

Calculated at reference conversion rate of **₹85 per $1 USD**:

### Fixed Baseline Operational Cost
| Component | Plan | Monthly Cost (USD) | Monthly Cost (INR ₹) | Yearly Cost (INR ₹) |
|---|---|---|---|---|
| **Vercel** *(Frontend)* | Hobby Plan | **$0.00** | **₹0** | **₹0** *(100 GB traffic/mo)* |
| **Render** *(Backend API)* | Starter Web Service | **$7.00 / mo** | **₹595 / mo** | — *(24/7 uptime, 0 cold starts)* |
| **Neon** *(PostgreSQL DB)* | Free Tier | **$0.00** | **₹0** | **₹0** *(500 MB holds 50k+ users)* |
| **Cloudflare Stream** *(Video)* | Starter Bundle | **$5.00 / mo** | **₹425 / mo** | — *(1,000 mins stored + 5k delivery)* |
| **Resend** *(Email OTPs)* | Free Tier | **$0.00** | **₹0** | **₹0** *(3,000 emails/month free)* |
| **GoDaddy** *(Domain)* | `.com` Registration | — | — | **~₹1,200 – ₹1,599 / year** |
| **Stripe** *(Payments)* | Pay-As-You-Go | **$0.00 / mo** | **₹0 / mo** | **₹0** *(2.9% + 30¢ only per sale)* |
| **TOTAL FIXED MONTHLY** | | **$12.00 / mo** | **~₹1,020 / mo** | **+ ₹1,599 / yr domain** |

*Render Cold Start Note:* If keeping Render on Free ($0/mo), set up a free monitor on [UptimeRobot.com](https://uptimerobot.com) to ping `https://literight-api.onrender.com/courses` every 10 minutes to prevent the 50-second sleep delay without paying $7.

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

1. **Why Cloudflare Stream over Self-Hosted Video on VPS:**
   - Raw MP4s served from local disk cause buffering on mobile/4G, saturate VPS CPU during concurrent student viewing, and can be pirated with 1 click ("Save Video As").
   - Cloudflare Stream provides encrypted HLS chunks, adaptive 1080p/720p/480p scaling, and tokenized DRM protection for $5/mo.
2. **Render vs KVM VPS (Hostinger / Hetzner):**
   - A KVM VPS gives more raw RAM for $4.20/mo, but requires manual Linux OS patching, Nginx maintenance, and manual SSL renewal.
   - Render + Vercel provides zero-maintenance automated Git-push deployments.
3. **Database Architecture:**
   - Transitioned from local SQLite to Neon PostgreSQL with dynamic `DATABASE_URL` and SSL. Updated entity columns to `@UpdateDateColumn` and `timestamp`.
4. **Vercel Reverse Proxy Architecture:**
   - `vercel.json` rewrites `/api/(.*)` to `https://literight-api.onrender.com/$1` to avoid CORS issues and simplify frontend fetch calls.

---

## 6. Commercial Readiness Checklist (Pending Implementation)

The remaining tasks to make the platform 100% commercially ready:

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
- [ ] **3. Stripe / Razorpay Course Checkout:**
  - Replace `onClick={() => alert('Upgrade Flow')}` in `CourseDetail.jsx` with a real checkout flow for the $199 course.
  - Add backend webhook to flip `user.isPremium = true` in Neon DB upon successful payment.
- [ ] **4. Backend Security Hardening:**
  - Install `bcrypt` and migrate from un-salted SHA-256 (`auth.service.ts`).
  - Parameterize `JWT_SECRET` via `ConfigService` (remove hardcoded `LITERIGHT_SECRET_KEY_12345`).
  - Remove backdoor `Admin`/`Admin` fallback in `auth.service.ts`.
- [ ] **5. Legal & Compliance Pages:**
  - Add Privacy Policy, Terms of Service, and Refund Policy links to `src/components/Footer.jsx`.

---

## 7. Mobile App Roadmap (Capacitor)

To compile this React 19 app into an Android APK in the future:
1. `npm install @capacitor/core @capacitor/cli @capacitor/android`
2. `npx cap init "LiteRight Academy" "com.literite.academy"`
3. `npx cap add android && npm run build && npx cap copy`
4. Open in Android Studio and build the `.apk` file for direct download or Google Play Store.

---
*Created on 2026-09-30 by Antigravity Technical Architecture Team.*
