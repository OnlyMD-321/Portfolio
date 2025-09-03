# Vercel Deployment Checklist

## Before Deployment

### 1. Environment Variables Setup
Create these environment variables in your Vercel project settings:

**Required for Contact Form:**
- `EMAIL_ADDRESS` - Your Gmail address
- `GMAIL_PASSKEY` - Gmail App Password (not your regular password)
- `TELEGRAM_BOT_TOKEN` - Your Telegram bot token
- `TELEGRAM_CHAT_ID` - Your Telegram chat ID

**Optional but Recommended:**
- `NEXT_PUBLIC_GTM` - Google Tag Manager ID
- `NEXT_PUBLIC_RECAPTCHA_SECRET_KEY` - reCAPTCHA secret key
- `NEXT_PUBLIC_APP_URL` - Your deployed domain (e.g., https://your-portfolio.vercel.app)

### 2. Data Customization
Update the following files with your personal information:
- `utils/data/personal-data.js` - Your personal details
- `utils/data/experience.js` - Your work experience
- `utils/data/projects-data.js` - Your projects
- `utils/data/educations.js` - Your education
- `utils/data/skills.js` - Your skills

### 3. Images
Replace these with your own:
- `public/profile.jpg` - Your profile picture
- `public/image/` - Project screenshots
- `public/logo-_1_.ico` - Your favicon

## Deployment Steps

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Add environment variables
   - Deploy!

3. **Update App URL**
   After deployment, update the `NEXT_PUBLIC_APP_URL` environment variable with your actual Vercel domain.

## Post-Deployment

### Test These Features:
- [ ] Contact form sends emails
- [ ] Contact form sends Telegram notifications
- [ ] Blog posts load from dev.to (if configured)
- [ ] All images display correctly
- [ ] Google Analytics works (if configured)
- [ ] reCAPTCHA works (if configured)

### Performance Optimization:
- [ ] Check Core Web Vitals in Vercel dashboard
- [ ] Optimize images if needed
- [ ] Review bundle size

## Troubleshooting

### Common Issues:

1. **Contact form not working:**
   - Check environment variables are set correctly
   - Verify Gmail App Password is valid
   - Test Telegram bot token

2. **Images not loading:**
   - Check file paths and extensions
   - Ensure images are in the `public` folder

3. **Build errors:**
   - Check `npm run build` works locally
   - Review error logs in Vercel dashboard

### Support:
- Vercel Documentation: https://vercel.com/docs
- Next.js Documentation: https://nextjs.org/docs
