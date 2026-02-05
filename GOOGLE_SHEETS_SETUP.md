# Google Sheets + Email Integration Setup

This guide will help you connect the RSVP form to Google Sheets and receive email notifications.

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Ansel Baptism RSVPs"
4. Add headers in Row 1:
   - A1: `Timestamp`
   - B1: `Name`
   - C1: `Email`
   - D1: `Guests`
   - E1: `Attending`
   - F1: `Message`

## Step 2: Create Google Apps Script

1. In your Google Sheet, go to **Extensions > Apps Script**
2. Delete any existing code and paste this:

```javascript
const SHEET_NAME = 'Sheet1';
const EMAIL_ADDRESS = 'your-email@gmail.com'; // Change to your email

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    const data = JSON.parse(e.postData.contents);
    
    // Add row to sheet
    sheet.appendRow([
      data.timestamp,
      data.name,
      data.email,
      data.guests,
      data.attending,
      data.message
    ]);
    
    // Send email notification
    const attendingText = data.attending === 'yes' ? '✅ YES' : 
                          data.attending === 'no' ? '❌ NO' : '🤔 MAYBE';
    
    const subject = `🎉 New RSVP: ${data.name} - ${attendingText}`;
    const body = `
New RSVP for Ansel's Baptism!

Name: ${data.name}
Email: ${data.email}
Guests: ${data.guests}
Attending: ${attendingText}
Message: ${data.message || 'No message'}
Submitted: ${data.timestamp}

View all RSVPs: ${SpreadsheetApp.getActiveSpreadsheet().getUrl()}
    `;
    
    MailApp.sendEmail(EMAIL_ADDRESS, subject, body);
    
    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'active' }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

3. **IMPORTANT:** Change `your-email@gmail.com` to your actual email address

## Step 3: Deploy as Web App

1. Click **Deploy > New deployment**
2. Click the gear icon ⚙️ and select **Web app**
3. Configure:
   - Description: "RSVP Handler"
   - Execute as: **Me**
   - Who has access: **Anyone**
4. Click **Deploy**
5. Click **Authorize access** and allow permissions
6. **Copy the Web App URL** (looks like `https://script.google.com/macros/s/xxx/exec`)

## Step 4: Add URL to Vercel

1. Go to your Vercel dashboard
2. Select your project **ansel-haymitch-baptism**
3. Go to **Settings > Environment Variables**
4. Add new variable:
   - Name: `GOOGLE_SCRIPT_URL`
   - Value: (paste your Web App URL)
5. Click **Save**
6. **Redeploy** your project (Settings > Deployments > Redeploy)

## Testing

1. Submit a test RSVP on your website
2. Check your Google Sheet for the new row
3. Check your email for the notification

## Troubleshooting

- **No data in sheet?** Make sure the Web App is deployed as "Anyone" can access
- **No email?** Check your spam folder; make sure you changed the email address in the script
- **CORS errors?** The Apps Script handles CORS automatically, but try redeploying

## That's it! 🎉

Your RSVP form will now:
- ✅ Save responses to Google Sheets
- ✅ Send you an email notification for each RSVP
