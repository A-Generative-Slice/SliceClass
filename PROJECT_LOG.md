# Literight Academy: Project Evolution & Fix Log

This document tracks the architectural growth and bug fixes of the Literight Academy LMS platform.

---

## 🏛️ Phase 1: Base Architecture (Prototype)
**Timestamp:** 2026-04-09
- **Initial State:** Local React application using Vite.
- **Data Model:** Completely in-memory `COURSES` constant.
- **Key Limitation:** Changes made in the browser were lost on refresh; no persistence across devices.

## ☁️ Phase 2: Cloud Deployment (Azure)
**Timestamp:** 2026-04-15
- **Infrastructure:** Deployed to Azure Ubuntu 22.04 VM ("Jarvis").
- **Web Server:** Configured Nginx to serve the production build from `/home/smdhussain06/literight/dist`.
- **Connectivity:** Integrated Cloudflare Quick Tunnel for public HTTPS access without a permanent domain.
- **Process Management:** Leveraged PM2 to ensure the backend remains active 24/7.

## 💾 Phase 3: Backend Persistence & Sync
**Timestamp:** 2026-04-16 (Early Session)
- **Engine:** Built a NestJS backend to handle data storage.
- **Storage:** Implemented a JSON-based file database (`backend/data/courses.json`) for course persistence.
- **Bug Fix (Data Loss):** Resolved the "volatile data" issue. Course edits in the Admin Panel now survive server restarts and browser refreshes.
- **Curriculum Integration:** Successfully mapped the full `course_outline.md` into the dynamic course builder.

## 🔐 Phase 4: Session Persistence & Media Pipeline
**Timestamp:** 2026-04-16 (Current Session)

### ✨ Bug Fix: Automatic Logout on Refresh
- **Issue:** Users were logged out every time they reloaded the page.
- **Solution:** Switched status management to `localStorage`. The application now checks for a saved session on boot, keeping users logged in permanently until they click "Logout".

### ✨ Bug Fix: Media Upload Engine
- **Issue:** File uploads were failing or not appearing correctly.
- **Solution (Backend):** Created `UploadsModule` to save images and videos to the server's disk.
- **Solution (Infrastructure):** Expanded the Nginx "Security Gate" limit from 1MB to 500MB (allowing professional video clips).
- **Solution (UI):** Updated `CourseCard` components to stop using placeholders and start rendering real uploaded `thumbnail` images.

---

## 🛠️ Summary of Key Technical Changes
| Component | Change Type | Description |
|-----------|-------------|-------------|
| **Nginx** | Infrastructure | Increased `client_max_body_size` & configured `/uploads` proxy. |
| **NestJS** | Feature | Created `UploadsController` with Multer disk storage. |
| **React** | UX/UI | Replaced placeholder circles with real `img` tags; implemented `localStorage` auth sync. |
| **Data** | Architecture | Transitioned from `COURSES` constant to `courses.json` API delivery. |

---

## 📱 Phase 5: Mobile UI Mastery (Elite 2.0)
**Timestamp:** 2026-04-19
- **Infrastructure:** Refined the production CSS framework in `index.css` with responsive-first variable tokens (`--container-px`).
- **Feature (Creative Search):** Implemented a high-end "Floating Glass Search" for mobile devices. Collapses the standard header search into a dedicated glassmorphism action button.
- **UX Fix (Mobile Overflow):** Resolved critical horizontal scrolling issues by implementing responsive text logic for navigation buttons (e.g., dynamically switching "Back to Academy" to a compact "Back" on small screens).
- **Aesthetics:** Introduced dynamic Gaussian blurs and floating keyframe animations to enhance the "Elite" brand identity on mobile viewports.

---

## 💎 Phase 6: Litelab Royale Transformation & Auth Hardening
**Timestamp:** 2026-04-20
- **Aesthetic Masterclass:** Rebuilt the entire platform with a "LiteRight Royale" monochromatic aesthetic (`#000` / `#FFF`), using heavyweight typography and glassmorphic islands.
- **Cinematic Profile:** Overhauled the student dashboard with simplified, human-friendly terminology (e.g., "Logout", "Save Changes") and a centralized "Student Profile" nexus.
- **Auth Security Pipeline:**
    - Implemented a robust "Forgot Password" recovery flow (Email ➔ Code ➔ New Password).
    - Resolved persistent "milli-second" redirect loops by hardening state consumption in `App.jsx`.
- **Branding Architecture:**
    - **Stacked Logo:** Redesigned the "LITERIGHT ACADEMY" signature into a vertical stacked format to eliminate overlap with UI controls on mobile.
    - **Footer Signature:** Reconstructed the global footer with real social integrations (Instagram, Pinterest, LinkedIn, etc.) and custom architectural icons.
- **Development Credits:** Integrated the "Designed and Developed by A Generative Slice" attribution with vibrant orange branding.

---

## ☁️ Phase 7: Cloud Production Architecture & Decoupled SaaS Transition
**Timestamp:** 2026-09-15 – 2026-09-30
- **Production Domain & DNS:** Registered `literiteacademy.com` on GoDaddy (active through Sep 2028), configured DNS routing and automated SSL certification to Vercel edge nodes.
- **Frontend Cloud Deployment (Vercel):** Deployed React 19 SPA to Vercel (`literight.vercel.app` mapped to `https://www.literiteacademy.com`), configured `vercel.json` rewrites for SPA routing and `/api/(.*)` reverse proxying.
- **Backend API Cloud Deployment (Render):** Deployed NestJS 11 backend service to Render (`https://literight-api.onrender.com`).
- **Database Cloud Migration (Neon PostgreSQL):** Transitioned from local SQLite to Neon Serverless PostgreSQL hosted in AWS Asia Pacific 1 (Singapore region) with dynamic `DATABASE_URL` and SSL. Updated TypeORM entities (`@UpdateDateColumn`, `timestamp`).
- **Video Delivery Architecture (Cloudflare Stream):** Subscribed to Cloudflare Stream Starter Bundle ($5/mo for 1,000 mins stored, 5,000 mins delivery, 100k images) for adaptive 1080p/720p/480p HLS playback and anti-piracy protection.
- **Cost Optimization & Real-Time Audit:** Formulated complete commercial budget: fixed baseline at ~$12/month (~₹1,020/mo) across Render and Cloudflare Stream, with Vercel, Neon DB, Resend, and Stripe on $0 free tiers.
- **Mobile Roadmap:** Defined Capacitor wrapper strategy for compiling existing React 19 code into an Android APK / Google Play store app.

---
*Last updated: 2026-09-30 by Antigravity*

