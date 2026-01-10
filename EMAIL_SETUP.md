# Email Setup Guide for Appointment Notifications

## ✅ Current Setup:
- ✅ WhatsApp integration (FREE - no Twilio needed!)
- ✅ Email field in form
- ✅ Email API endpoint ready

## 📧 Get FREE Email Notifications:

### Step 1: Sign up for Resend (FREE)
1. Go to: https://resend.com
2. Sign up with your email
3. Verify your email
4. Get your API key from dashboard

### Step 2: Verify Your Domain (Options):

**Option A: Use Resend's Domain (Quick Start)**
- Send from: `appointments@resend.dev`
- Works immediately, no setup
- 100 emails/day FREE

**Option B: Use Custom Domain (Professional)**
- Send from: `appointments@kumarsdental.com`
- Follow Resend's DNS setup guide
- Same free tier (100/day)

### Step 3: Add API Key to Vercel

When deploying to Vercel:
```bash
# In Vercel Project Settings → Environment Variables
RESEND_API_KEY=re_your_actual_api_key_here
```

Or locally in `.env.local`:
```
RESEND_API_KEY=re_your_actual_api_key_here
```

### Step 4: Update Email Address

In `app/api/send-appointment/route.js`, line 13:
```javascript
to: 'kumarsdentistry.in@gmail.com', // Change to your actual email
```

---

## 🎯 How It Works:

1. Patient fills appointment form
2. **Instant WhatsApp** message (opens in browser) ✅
3. **Email sent to you** automatically 📧
4. You review and confirm appointment

---

## 💰 Cost Breakdown:

**FREE Services:**
- ✅ WhatsApp Web integration - FREE
- ✅ Resend Email - 100/day FREE (3,000/month)
- ✅ Vercel Hosting - FREE tier

**No Twilio Needed!** Current WhatsApp just opens WhatsApp Web with pre-filled message.

---

## 🔧 Alternative FREE Email Services:

### 1. Gmail SMTP (Nodemailer)
- FREE, unlimited
- Needs Gmail app password
- More setup required

### 2. SendGrid
- FREE: 100 emails/day
- Similar to Resend

### 3. Web3Forms
- FREE: 250/month
- No backend needed
- Simpler but less control

**Recommended: Stick with Resend** - easiest and most reliable!

---

## 📝 Test Email Locally:

```bash
# Install dependencies
npm install

# Add your API key to .env.local
echo "RESEND_API_KEY=re_your_key" > .env.local

# Run dev server
npm run dev

# Test the form at http://localhost:3000/appointments
```

---

## ✅ Email Template Includes:

- Patient name
- Phone number (clickable)
- Email address (if provided)
- Preferred date & time
- Service requested
- Timestamp
- Action checklist for staff

**Professional HTML design with Kumar's Dental branding!**
