# 💡 LiteRight Academy — Costing & Scaling Guide (Affordable Course Pricing < ₹300)

> **Key Scenario:** Course price is set for mass affordability at **under ₹300 (e.g., ₹199 – ₹299 per course)**.  
> **Key Goal:** Understand the break-even math, profit per student, and how to scale without infrastructure eating your profit.

---

## 📊 1. Unit Economics: What You Keep Per Sale (< ₹300)

When a student pays ₹199 or ₹299 via UPI, Google Pay, PhonePe, or Cards:

| Component | At ₹199 Course Price | At ₹299 Course Price | Explanation |
|---|---|---|---|
| **Course Selling Price** | **₹199** | **₹299** | What the student pays at checkout. |
| **Payment Gateway Fee** *(Razorpay / Cashfree / Stripe ~2% + GST)* | -₹4.70 | -₹7.05 | Standard bank processing fee automatically deducted per sale. |
| **Cloud Hosting & Server Cost per Student** *(Free Tier)* | **₹0.00** | **₹0.00** | Free tier handles up to 1,000+ students for ₹0. |
| **Video Bandwidth Cost per Student** | ~₹0.00 to ₹5.00 | ~₹0.00 to ₹5.00 | ₹0 if using unlisted YouTube / BunnyCDN; ~₹5 on Cloudflare. |
| **YOUR NET IN-HAND PROFIT PER SALE** | **~₹190 to ₹194** | **~₹285 to ₹292** | **You keep >95% to 97% of every single sale!** |

---

## ⚖️ 2. Break-Even Analysis (How Many Sales Pay For The Website?)

### Scenario A: Running on the 100% Free Tier (Fixed Cost = Domain Only)
* **Annual Fixed Cost:** Only Domain Name = **~₹1,200 / year** (~₹100/mo).
* **Break-Even Target:**
  * At ₹199: You need only **7 sales in an ENTIRE YEAR** to break even.
  * At ₹299: You need only **4 to 5 sales in an ENTIRE YEAR** to break even.
  * **Every sale after that is pure profit.**

### Scenario B: Running on the Recommended Pro Plan (Zero lag, 24/7 Server)
* **Monthly Fixed Cost:** $12/mo ≈ **~₹1,020 / month** (Render $7 + Cloudflare Stream $5).
* **Annual Fixed Cost:** ~₹12,240 / year (+ domain = ~₹13,800/yr).
* **Break-Even Target:**
  * At ₹199: You need **5 to 6 course sales per month** to cover the entire platform.
  * At ₹299: You need **only 3 to 4 course sales per month** to cover all server & video costs.

---

## 📈 3. Profit Projections at Volume (Mass-Market Scaling)

At an accessible price point (< ₹300), the platform is built for volume:

| Monthly Enrollments | Gross Revenue (at ₹299) | Payment Fees (~2.3%) | Fixed Server Cost (Pro Plan) | Net Monthly Profit (In Your Bank) | Profit Margin |
|---|---|---|---|---|---|
| **10 students / mo** | ₹2,990 | -₹70 | -₹1,020 | **₹1,900 / mo** | 63% |
| **50 students / mo** | ₹14,950 | -₹350 | -₹1,020 | **₹13,580 / mo** | 91% |
| **100 students / mo** | ₹29,900 | -₹705 | -₹1,020 | **₹28,175 / mo** | 94% |
| **500 students / mo** | ₹1,49,500 | -₹3,525 | -₹1,200 | **₹1,44,775 / mo** | 97% |
| **1,000 students / mo** | ₹2,99,000 | -₹7,050 | -₹2,500 *(scaled)* | **₹2,89,450 / mo** | 97% |

---

## 💡 4. Best Low-Cost Video Strategy for < ₹300 Courses

Because course fees are low (< ₹300), you want your video streaming cost to be as close to **₹0** as possible:

1. **Option 1: Unlisted YouTube (100% Free forever)**
   - Upload course videos to a private/unlisted YouTube channel.
   - Embed them in `CourseDetail.jsx`.
   - **Cost:** **₹0.00** regardless of whether 100 or 100,000 students watch.
2. **Option 2: BunnyCDN Stream (Ultra-Cheap Professional Protection)**
   - Only ~$0.005 per GB (approx. **₹0.40 per gigabyte**).
   - A 2-hour course video costs **less than ₹1.50 per student**.
3. **Option 3: Cloudflare Stream ($5 / month Starter)**
   - 1,000 stored minutes + 5,000 streaming minutes for $5 (~₹425/mo).
   - Ideal for the first 50–100 students every month.

---

## 📌 Takeaway for Stakeholders

Even at a budget price point of **under ₹300 per course**:
* Your tech cost is negligible.
* Just **4 sales a month** makes the platform completely self-sustaining.
* At 100 sales a month, you generate **over ₹28,000 net profit** with virtually zero ongoing maintenance.
