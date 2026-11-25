# Cutshort Portal - Summary: Chat-based job platform where applications are submitted via direct messaging to recruiters. No traditional application forms. Resume auto-attached based on profile.

## Auth & Navigation

### Sign In Options
- Login button: `button.sc-8c2323fe-0.hwKSIH` or find "Signup or login with Google" text
- Phone login: `button[name="Login using phone"]`
- Employer sign-in: `button[name="Sign in as a employer"]`

### Main Navigation (logged-in)
- Dashboard: `a[href*="/profile/candidate-dashboard"]`
- View jobs: `a[href*="/profile/recommended-jobs"]`
- Messages: `a[href*="/profile/candidate-conversations"]`
- Plans: `a[href*="/profile/candidate-plans"]`
- Credits: `a[href*="/profile/earn-credits-c"]`
- Settings: `a[href*="/profile/candidate-settings/profile"]`

## Job Listings

### All Jobs Page
- URL: `https://cutshort.io/profile/all-jobs`
- All jobs link: `a[href*="all-jobs"]`

### Recommended Jobs Page (default)
- URL: `https://cutshort.io/profile/recommended-jobs`
- Profile matcher toggle: `input[role="switch"]` (checked=true = matched jobs only)
- Results info: "Showing X recently active jobs"

### Saved Jobs Page
- URL: `https://cutshort.io/profile/saved-jobs`

## Filters

Sidebar at `aside` with class containing `searchFilterInnerContainer`:

| Filter | Selector |
|--------|----------|
| Job category | `div[data-intercom-target="tags-filter"]` |
| Skills | `div[data-intercom-target="skills-filter"]` |
| Location | `div[data-intercom-target="locations-filter"]` |
| Type of role | `div[data-intercom-target="roletype-filter"]` |
| Minimum salary | `div[data-intercom-target="minsal-filter"]` |
| Experience range | `div[data-intercom-target="expRange-filter"]` |
| Company | `div[data-intercom-target="companyIds-filter"]` |
| Application Review Status | `div[data-intercom-target="reviewingApplications-filter"]` |

Filter dropdown arrow: `.sc-8f3a368e-8.cpNjWS`

## Job Cards

Each card contains:
- Company logo: `img` with matching alt text
- Company name: Link with company name text
- Job title: `<a>` or `<h3>` with class `sc-f9377eb0-18`
- Apply button (job card): `button.sc-8c2323fe-0.hwKSIH` or "Apply now" text
- Not interested: `button.sc-8c2323fe-0.hVgPSD` (gray)
- Save for later: Button with save icon + "Save for later" text
- Location icon: SVG with stroke `#5851d3`
- Experience/Salary: SVG with specific paths + text
- Skills: `span` elements with skill names
- Copy job link: `button` with name "Button to copy the job link"

## Applications

1. Apply on job card: Click "Apply now" button → opens chat interface
2. On job detail page: Click "Apply to this job" button → opens chat interface
3. Application method: Direct message to recruiter via chat
4. Resume: Auto-attached based on profile (shows "Prasanth_resume_rn.pdf" with upload option)
5. Status: Track via Messages → "Shortlisted" tab

### Chat Interface (after clicking Apply)
- Message textarea: `textarea.sc-989085ec-0`, name="message"
- Send button: `button.sc-8c2323fe-0.hwKSIH` with text "Send"
- Cancel button: `div.sc-89b45c2f-0.sc-89b45c2f-1.cCGhbz.fERRrh` with text "Cancel"
- Resume already attached indicator: Shows filename (e.g., "Prasanth_resume_rn.pdf")
- Upload another resume: `div.sc-89b45c2f-0.sc-89b45c2f-1.cCGhbz.fERRrh` with text "Upload another resume"

## Messages

- URL: `https://cutshort.io/profile/candidate-conversations`
- Tabs:
  - `button[role="tab"][id="tab-unread"]` - "Interested in you"
  - `button[role="tab"][id="tab-awaiting"]` - "Employer actions on your X applications" (Pending)
  - `button[role="tab"][id="tab-"]` - "Shortlisted"
  - `button[role="tab"][id="tab-nottakenforward"]` - "Closed"

### Conversation Actions
- Message input: `textarea.sc-989085ec-0` with name="message"
- Send button: `button.sc-8c2323fe-0.hwKSIH` with text "Send"

## Profile / Talent Card

- URL: `https://cutshort.io/profile/candidate-settings/profile`
- Inputs:
  - First name: `input[name="fullName"]` with placeholder "Enter your first name"
  - Headline: `input[name="headline"]` with placeholder "Enter your headline"
  - Email: `input[name="email"]` with placeholder "Enter your email"
  - Phone: `input[name="phone"]` with placeholder "Enter your phone number"
- External profile:
  - LinkedIn: `input[name="linkedin_profile_link"]` with placeholder "Linkedin"
  - Medium: `input[name="medium"]` with placeholder "Medium"
  - Portfolio: `input[name="portfolio_link"]` with placeholder "Blog / Website"
  - Stackoverflow, HackerRank, HackerEarth, Spoj, Kaggle, CodeChef, Behance (optional)
- Update button: `button.sc-1bad08a4-0.hPWPLb` with text "Update details"
- Social connect buttons:
  - LinkedIn: `button.sc-8c2323fe-0.hwKSIH` with text "Connect to LinkedIn"
  - Twitter: Various social connection buttons

## Dashboard

- URL: `https://cutshort.io/profile/candidate-dashboard`
- Stats:
  - "Companies interested": `a[href*="interested-in-you"]`
  - Applications pending, shortlisted, rejected (counts shown as clickable links)
- Profile tools: "Update resume" button, "Edit talent card" link

## Credits Page

- URL: `https://cutshort.io/profile/earn-credits-c`
- Options to earn free credits:
  - "Like and follow us on social networks + INR 100" button
  - "Connect Facebook + INR 50" button
  - "Connect Twitter + INR 50" button
- Referral program: "The Coolest Referral Program" - Invite friends to earn credits
- LinkedIn auto-share: `button.sc-8c2323fe-0.hwKSIH` with text "Enable auto share on LinkedIn"

## Status Tracking

- Application status pages: Dashboard and Messages tabs
- Status indicators in Messages:
  - "Interested in you" tab - Shows recruiters who have shown interest
  - "Pending" tab - Applications awaiting recruiter response
  - "Shortlisted" tab - Applications where recruiter wants to interview (CONFIRMED APPLICANT)
  - "Closed" tab - Rejected or no longer open applications
- Confirmation: Being "Shortlisted" indicates successful application

## Flow Notes

### Application Method
- Chat-based messaging to recruiters
- No form filling required - all profile data is pre-filled
- Candidate types message to recruiter to apply
- Resume is automatically attached to the conversation

### Resume Attachment Behavior
- Resume attached based on talent card profile
- Can upload alternate resume during chat with `button.sc-8c2323fe-0.hwKSIH` "Upload another resume"
- File input for upload (not exposed via visible button text)

### Post-submission Confirmation
- Successful application appears in Messages → "Shortlisted" tab
- May also show in "Pending" as "Employer actions on your X applications"
- Status updates occur asynchronously

## Element Discovery Notes

### Dynamic UI Patterns
- Styled-components with hash-based class names (e.g., `sc-8c2323fe-0`)
- Use `data-intercom-target` attributes for stable filter selectors
- Chat interface appears as modal/overlay after clicking Apply
- Tabs use `role="tab"` and have IDs like `tab-unread`, `tab-awaiting`, `tab-`, `tab-nottakenforward`
- Profile forms use consistent input naming convention

### Application Flow Diagram
```
Job Search → Recommended Jobs (matched) / All Jobs (all)
              ↓ Click "Apply now" on job card
              ↓ Chat interface opens (overlay)
              ↓ Message composed in textarea.sc-989085ec-0
              ↓ Click button.sc-8c2323fe-0.hwKSIH "Send"
              ↓ Check Messages → "Shortlisted" tab for confirmation
```

### Key Selectors for Reliability

| Element | Primary Selector | Fallback |
|---------|------------------|----------|
| Apply button | `button.sc-8c2323fe-0.hwKSIH` | `button:has-text("Apply now")` |
| Message textarea | `textarea.sc-989085ec-0` | `textarea[name="message"]` |
| Send button | `button.sc-8c2323fe-0.hwKSIH` | `button:has-text("Send")` |
| Cancel button | `button:has-text("Cancel")` | `div:has-text("Cancel")` |
| Messages tab | `button[role="tab"][id="tab-awaiting"]` | `button:has-text("Pending")` |
| Dashboard | `a[href*="/profile/candidate-dashboard"]` | `a:has-text("Dashboard")` |

## Field-Level Locators

### Login Form
| Field | Selector |
|-------|----------|
| Google login | `button:contains("Google")` or `button:contains("Signup")` |
| Phone login | `button[name="Login using phone"]` |
| Continue button | `button:contains("Continue")` |

### Message Tabs
| Tab | Selector |
|-----|----------|
| Unread/Interested in you | `button[role="tab"][id="tab-unread"]` |
| Pending/Awaiting | `button[role="tab"][id="tab-awaiting"]` |
| Shortlisted | `button[role="tab"][id="tab-"]` |
| Closed | `button[role="tab"][id="tab-nottakenforward"]` |

### Chat Message Form
| Element | Selector |
|---------|----------|
| Textarea | `textarea.sc-989085ec-0`, `textarea[name="message"]` |
| Send | `button.sc-8c2323fe-0.hwKSIH:contains("Send")`, `button:has-text("Send")` |
| Cancel | `button:has-text("Cancel")`, `button:contains("Cancel")` |
| Upload resume | `button:has-text("Upload another resume")` |

### Profile Form
| Field | Selector |
|-------|----------|
| Full name | `input[name="fullName"]` |
| Headline | `input[name="headline"]` |
| Email | `input[name="email"]` |
| Phone | `input[name="phone"]` |
| LinkedIn | `input[name="linkedin_profile_link"]` |
| Portfolio | `input[name="portfolio_link"]` |
| Update button | `button.sc-1bad08a4-0.hPWPLb:contains("Update details")` |
| LinkedIn connect | `button:contains("Connect to LinkedIn")` |

### Dashboard Controls
| Element | Selector |
|---------|----------|
| Update resume | `button:contains("Update resume")` |
| Edit talent card | `a:contains("Edit talent card")` |
| Interested in you link | `a[href*="interested-in-you"]` |