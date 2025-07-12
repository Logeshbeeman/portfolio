# Email Setup Instructions

To enable the contact form and booking system to send emails, you need to set up EmailJS:

## 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. Note down your **Service ID**

## 3. Create Email Templates

### Template 1: Contact Form (for receiving messages)
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template:

```
Subject: New Contact Form Message from {{from_name}}

Hello {{to_name}},

You have received a new message from your portfolio contact form:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
Reply to: {{reply_to}}
```

4. Note down your **Template ID**

### Template 2: Booking Request (for receiving bookings)
1. Create another template for booking requests:

```
Subject: New Booking Request from {{from_name}}

Hello {{to_name}},

You have received a new booking request:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Date: {{date}}
Time: {{time}}
Service: {{service}}

Message:
{{message}}

---
Please respond to confirm the booking.
```

### Template 3: Client Confirmation (for booking confirmations)
1. Create a template for client confirmations:

```
Subject: Booking Request Received - {{service}}

Hello {{to_name}},

Thank you for your booking request! Here are the details:

Service: {{service}}
Requested Date: {{date}}
Requested Time: {{time}}

I will review your request and get back to you within 24 hours to confirm the appointment.

Best regards,
Logesh
```

## 4. Update the Code
Replace the placeholder values in the components:

### In Contact.tsx and BookingModal.tsx:
```javascript
const serviceId = 'your_actual_service_id';
const templateId = 'your_actual_template_id';
const userId = 'your_actual_user_id';
```

## 5. Get Your User ID
1. In EmailJS dashboard, go to "Account"
2. Find your **User ID** (also called Public Key)

## 6. Test the Setup
1. Update the code with your actual IDs
2. Test the contact form and booking system
3. Check your email for received messages

## 7. Email Addresses
Update these email addresses in the code:
- `beemaalogesh@gmail.com` → Your actual email
- Update all mailto links with your real email

## Security Note
EmailJS is client-side, so your credentials are visible. For production, consider:
- Using environment variables
- Implementing server-side email handling
- Setting up domain restrictions in EmailJS dashboard   