# Naukri Portal Locators

## Summary
Naukri.com is India's leading job portal with traditional application forms. Applications require filling out recruiter questionnaires. Resume can be auto-attached or manually uploaded.

## Auth & Navigation

### Sign In Options
- Login/signup: Standard email/password or Google/LinkedIn SSO
- Login button: `button[data-qa="login-btn"]` or find "Login" text
- Google SSO: `button[data-qa="google-login"]`
- LinkedIn SSO: `button[data-qa="linkedin-login"]`

### Main Navigation (logged-in)
- Jobs: `a[href*="/job"]` or navigation to job search
- Resumes: Profile section for resume management
- My Profile: User profile settings

## Job Listings

### Jobs Page
- URL: `https://www.naukri.com/jobs-in-bangalore` (replace location/role)
- Search fields: Various dropdowns and text inputs

### Job Cards
- Each job: `.cust-job-tuple` class
- Job title: `a.title` link
- Company info: Within job card
- Apply action: Native application button

### Search Filters
- Location filter
- Keywords filter
- Experience level filter
- Salary range filter

## Applications

### Apply Button
- Native apply: `button` with name "Apply"
- External apply: `button` with name "Apply on company site"

### Questionnaire
- Drawer: `[id$="Drawer"]` (validate generated ID suffix)
- Messages: `[id$="Messages"]` within drawer
- Continue: Visible Save/continue control

## Messages

- Conversation tracking from applications
- Status updates on application progress

## Profile

- Resume upload: Profile settings
- Update profile details: Edit form sections
- LinkedIn/GitHub links: External profile sections

## Status Tracking

- Application status accessible via jobs page
- Confirmation: Look for "Applied" status in toast message or status badge `[data-qa="apply-btn"]` or confirmation banner
- Email/SMS notifications for updates

## Flow Notes

1. Click "Apply" on job card or job detail page
2. Questionnaire opens in drawer
3. Fill required fields (varies by job/recruiter)
4. Submit application
5. Track via Messages or status page
6. Resume auto-attached based on profile settings
7. Verify submission - Look for "Applied" status confirmation in UI or toast message

## Field-Level Locators

### Login Form
| Field | Selector |
|-------|----------|
| Email input | `input[type="email"]` |
| Password input | `input[type="password"]` |
| Login button | `button[type="submit"]` or `button[data-qa="login-btn"]` |

### Questionnaire Form
| Element | Selector |
|---------|----------|
| Text inputs | `input[type="text"]`, `input[type="number"]` |
| Textarea | `textarea` |
| Radio buttons | `input[type="radio"]` |
| Checkboxes | `input[type="checkbox"]` |
| Dropdown select | `select` |
| Save/Continue | `button[data-qa="save-btn"]` or button with "Save" text |
| Submit | `button[data-qa="submit-btn"]` or button with "Submit" text |

### Profile Page
| Element | Selector |
|---------|----------|
| Edit profile button | `button:contains("Edit")` or `a:contains("Edit Profile")` |
| Resume upload | `input[type="file"]` near resume section |
| Save changes | `button:contains("Save")` or `button[type="submit"]` |