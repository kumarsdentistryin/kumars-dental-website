# WhatsApp Appointment Automation - Setup Guide

## ✅ What's Implemented

### Frontend (User-facing)
- **Simple Appointment Form** (`/appointments`)
  - Patient enters: Name, Phone, Date, Time, Service, Notes
  - Form validation with 10-digit phone number
  - Clean, mobile-friendly design with success/error messages

### Backend (Doctor receives)
- **WhatsApp Integration** via Twilio
  - Form submission → WhatsApp message sent to Doctor
  - Patient also gets SMS confirmation immediately
  - No database needed - direct message delivery

### Flow
```
Patient fills form
    ↓
Clicks "Send to Doctor via WhatsApp"
    ↓
API sends WhatsApp message to Dr: Patient name, phone, date, time, service, notes
    ↓
SMS confirmation sent to patient
    ↓
Success message shown on screen
```

---

## 🔧 Environment Setup Required

### 1. Create `.env.local` in project root

```env
TWILIO_ACCOUNT_SID=ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
TWILIO_AUTH_TOKEN=your_token_here
TWILIO_PHONE_NUMBER=+1234567890
DR_WHATSAPP_NUMBER=+918197280019
```

### 2. Get Twilio Credentials

1. Go to [twilio.com](https://www.twilio.com)
2. Sign up for free account (₹0 cost, free trial credits)
3. Get from Twilio Console:
   - Account SID
   - Auth Token
   - Twilio phone number (for SMS)

### 3. Enable WhatsApp on Twilio

1. In Twilio Console → Messaging → Try it out → WhatsApp
2. Twilio provides a sandbox WhatsApp number
3. Send "join [code]" to that number to activate (one-time)
4. Update `DR_WHATSAPP_NUMBER` with your actual doctor WhatsApp number

---

## 📱 How It Works for Patients

1. **Visit** `/appointments`
2. **Fill form** with basic info (name, phone, service needed, preferred date/time)
3. **Click** "Send to Doctor via WhatsApp"
4. **Get instant** SMS confirmation + success message
5. **Receive WhatsApp** confirmation from doctor within 2 hours

---

## 👨‍⚕️ What Doctor Sees

**WhatsApp Message Format:**
```
📞 NEW APPOINTMENT BOOKING

Patient Name: Rajesh Kumar
Phone: 9876543210
Date: 2026-01-15
Time: 10:00 AM
Service: Root Canal (RCT)
Notes: Has dental anxiety

Confirm this appointment?
Reply: YES / NO
```

---

## 📁 Files Created/Modified

### New Files
- `/app/api/send-appointment/route.js` - Backend endpoint that sends WhatsApp + SMS
- `.env.local` - Environment configuration (DO NOT commit to git)

### Modified Files
- `/app/appointments/page.tsx` - Updated form with WhatsApp integration
- `/app/page.tsx` - Added SEO metadata

---

## 🚀 Deployment Instructions

1. **Before deploying**, add `.env.local` variables to your hosting platform:
   - Vercel: Settings → Environment Variables
   - Netlify: Build & Deploy → Environment
   - AWS/Azure: Secrets Manager

2. **Do NOT commit** `.env.local` to git

3. **For production**, update `DR_WHATSAPP_NUMBER` with actual doctor number

---

## 🔐 Security Notes

- Twilio credentials in `.env.local` are protected
- Patient data sent directly to WhatsApp (not stored)
- SMS sent via Twilio's secure servers
- HTTPS enforced on production

---

## 💡 Future Enhancements

Could add later (without database):
- ✅ WhatsApp history (save messages locally)
- ✅ Payment link in appointment confirmation
- ✅ Google Calendar sync
- ✅ Appointment reminders (SMS/WhatsApp)
- ✅ Doctor response tracking

---

## 🐛 Troubleshooting

### WhatsApp not received?
- Check Twilio sandbox active (send "join [code]" once)
- Verify phone number format: +91XXXXXXXXXX
- Check Twilio logs in Console

### SMS working but WhatsApp not?
- Use Twilio WhatsApp Sandbox first (for testing)
- Then upgrade to official WhatsApp Business API

### Form not submitting?
- Check `.env.local` has all 4 variables
- Check browser console for errors (F12)
- Verify `/api/send-appointment` returns 200 status

---

## 📞 Contact

For Twilio support: https://www.twilio.com/help
For Next.js API routes: https://nextjs.org/docs/app/building-your-application/routing/route-handlers
