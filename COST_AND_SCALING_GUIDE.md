# 💡 LiteRight Academy — Official Production Costing & Scaling Guide
### Confirmed Architecture: Render Starter ($7/mo) + Cloudflare Stream ($5/mo)

> **Confirmed Stack Decision:**  
> - **Backend Server:** Paid **Render Starter** ($7.00/mo ≈ ₹595/mo) — 24/7 instant response, zero sleeping.  
> - **Video Platform:** Paid **Cloudflare Stream** ($5.00/mo ≈ ₹425/mo) — studio-grade DRM protection, adaptive streaming (1080p/720p/480p).  
> - **Course Price:** Affordable Mass-Market model at **under ₹300 (e.g. ₹199 to ₹299)**.

---

## 💳 1. Your Fixed Monthly Bill: Exactly $12 / Month (~₹1,020)

No surprises. Your fixed monthly hosting bill consists of only two services:

| Service | Plan | Monthly Cost (USD) | Monthly Cost (INR ₹) | What It Gives You |
|---|---|---|---|---|
| **Render** | Starter Web Service | **$7.00 / mo** | **₹595 / mo** | 24/7 server running without sleep; instant page loads & quiz submissions. |
| **Cloudflare Stream** | Starter Bundle | **$5.00 / mo** | **₹425 / mo** | 1,000 minutes stored (~16 hrs video) + 5,000 minutes streamed per month. |
| **Vercel** | Hobby Plan (Frontend) | **$0.00** | **₹0** | 100 GB bandwidth (100,000+ visits/month free). |
| **Neon PostgreSQL** | Free Tier (Database) | **$0.00** | **₹0** | 500 MB storage (stores 50,000+ student profiles free). |
| **Resend** | Free Tier (Email) | **$0.00** | **₹0** | 3,000 transactional OTP/login emails/month free. |
| **TOTAL FIXED MONTHLY BILL** | | **$12.00 / mo** | **~₹1,020 / mo** | **All core platform services included.** |

*Annual Domain:* Add ~₹1,200 to ₹1,599 once a year for the GoDaddy `.com` domain name.

---

## 🎬 2. Understanding Cloudflare Stream Video Costs in Simple Terms

Cloudflare Stream has the clearest, most fair video pricing in the industry:

1. **What is included in your $5/month:**
   - **1,000 minutes of stored videos** (approx. 16.6 hours of course lectures).
   - **5,000 minutes of video watched** every month for free.
   - *Example:* If your course has 60 minutes of video, **83 complete student course completions are covered inside the $5 fee with ₹0 extra charges**.
   - *Example:* If your course has 100 minutes of video, **50 complete student course completions are covered inside the $5 fee with ₹0 extra charges**.

2. **What happens when you exceed 5,000 minutes watched?**
   - Cloudflare charges **$1.00 per 1,000 minutes watched** (~₹85 per 1,000 mins).
   - That equals **8.5 paise (₹0.085) per minute** of video watched.
   - For a 1-hour course (60 mins): Streaming costs **only ~₹5.10 per student**.
   - For a 1.5-hour course (90 mins): Streaming costs **only ~₹7.65 per student**.

---

## 💰 3. Unit Economics: In-Hand Profit per Student (At ₹299 & ₹199)

Even factoring in bank payment gateway fees and extra Cloudflare video minutes:

| Fee Component | When Selling Course at ₹199 | When Selling Course at ₹299 | Notes |
|---|---|---|---|
| **Course Price (Student Pays)** | **₹199** | **₹299** | Gross price charged |
| **Payment Gateway Fee (~2.3%)** | -₹4.70 | -₹7.05 | Razorpay / Cashfree UPI & card processing |
| **Cloudflare Video Streaming** *(assuming 90 min course)* | -₹7.65 | -₹7.65 | Delivery cost (if beyond free 5,000 mins) |
| **Server & Database Cost** | **₹0.00** | **₹0.00** | Handled by your fixed monthly plan |
| **NET PROFIT PER STUDENT SALE** | **~₹186.65** | **~₹284.30** | **You keep ~94% to 95% of every single sale!** |

---

## 🎯 4. Break-Even Target: How Many Sales Pay Your Entire Bill?

To completely cover your **₹1,020/month fixed bill**:

* **At ₹299 Course Price:**  
  You need **only 4 course sales per month** (₹284 × 4 = ₹1,136).
* **At ₹199 Course Price:**  
  You need **only 6 course sales per month** (₹186 × 6 = ₹1,116).

> **Rule of Thumb:** Every single student enrollment starting from the **5th student each month** is pure net profit in your bank account!

---

## 📈 5. Monthly Revenue and Profit Projection Table (At ₹299)

| Monthly Students | Gross Revenue | Gateway Fees (~2.3%) | Render API | Cloudflare Stream | Net Profit In Your Bank | Net Margin |
|---|---|---|---|---|---|---|
| **4 students** *(Break-even)* | ₹1,196 | -₹28 | -₹595 | -₹425 | **+ ₹148** | 12% |
| **25 students** | ₹7,475 | -₹175 | -₹595 | -₹425 *(free mins)* | **₹6,280 / mo** | 84% |
| **50 students** | ₹14,950 | -₹350 | -₹595 | -₹425 *(free mins)* | **₹13,580 / mo** | 91% |
| **100 students** | ₹29,900 | -₹705 | -₹595 | -₹765 *(with overage)*| **₹27,835 / mo** | 93% |
| **250 students** | ₹74,750 | -₹1,760 | -₹595 | -₹1,910 | **₹70,485 / mo** | 94% |
| **500 students** | ₹1,49,500 | -₹3,525 | -₹595 | -₹3,825 | **₹1,41,555 / mo** | 95% |
| **1,000 students** | ₹2,99,000 | -₹7,050 | -₹595 | -₹7,650 | **₹2,83,705 / mo** | 95% |

---

## 🔒 6. Key Benefits of This Exact Setup

1. **Top-Tier Video Protection:** Cloudflare Stream prevents simple "Right-Click Save As" or browser video downloading extensions. Only logged-in, paying students can watch.
2. **Smooth Mobile & Low-Network Playback:** Cloudflare automatically switches quality (1080p / 720p / 480p / 360p) depending on the student's mobile internet speed, preventing buffering.
3. **24/7 Zero-Lag Backend:** Subscribing to Render Starter ($7) ensures that when students click "Sign In", "Submit Quiz", or "Play Video", the response is instant with 0 cold-start delays.
4. **Massive Margin at Scale:** Even at ₹299, the technology infrastructure accounts for **less than 5%** of revenue once you hit 100+ students per month.
