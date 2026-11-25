# Instahyre Portal Locators

## Summary
Instahyre is a professional networking and job portal focused on mid-to-senior level opportunities. Users connect with recruiters and browse curated job listings.

## Auth & Navigation

### Sign In Options
- LinkedIn login: Button linking to LinkedIn auth
- Google login: Button linking to Google auth
- Email/password registration: Form with email, password fields

### Main Navigation (logged-in)
- Dashboard: Professional profile overview
- Jobs: Job search and listings
- Connections: Network with recruiters and professionals
- Messages: Communication with recruiters

## Job Listings

### Jobs Page
- URL: `https://www.instahyre.com/jobs`
- Browse or search jobs by role, location

### Job Cards
- Company logo and name
- Job title
- Location
- Experience level
- Save/Connect buttons

## Applications

### Apply Flow
- Connect with recruiter
- Send interest message
- Profile auto-shared
- Follow-up communication

## Messages

- Messaging recruiter interface
- Track conversations
- Status updates

## Profile

- Edit profile details
- Resume upload
- Skills and experience
- Preferred job settings

## Status Tracking

- Application status in dashboard
- Recruiter interactions

## Flow Notes

1. Browse jobs or use search filters
2. Click "Connect" or apply button
3. Message recruiter with interest
4. Wait for recruiter response
5. Track in Messages section

## Field-Level Locators

### Login Form
| Field | Selector |
|-------|----------|
| Email input | `input[type="email"]`, `input[name="email"]` |
| Password input | `input[type="password"]`, `input[name="password"]` |
| Login button | `button[type="submit"]` or `button:contains("Login")` |
| LinkedIn login | `button:contains("LinkedIn")` or `a:contains("Sign in with LinkedIn")` |

### Job Search Filters
| Filter | Selector |
|--------|----------|
| Location input | `input[placeholder*="location"]` or `input[name="location"]` |
| Role/keyword input | `input[placeholder*="role"]` or `input[name="keyword"]` |
| Experience dropdown | `select[name="experience"]` or `div[role="combobox"]` |
| Salary range | `input[type="number"]` near salary section |
| Apply filters | `button:contains("Apply")` or `button[type="submit"]` |

### Connect/Message Form
| Element | Selector |
|---------|----------|
| Message textarea | `textarea` |
| Send button | `button:contains("Send")`, `button:contains("Connect")`, or `button[type="submit"]` |
| Cancel/Close | `button:contains("Cancel")`, `button:contains("Close")` |

### Profile Edit Form
| Field | Selector |
|-------|----------|
| Name input | `input[name="name"]`, `input[placeholder*="Name"]` |
| Email | `input[type="email"]` |
| Phone | `input[type="tel"]`, `input[name="phone"]` |
| Location | `input[name="location"]` |
| About/Headline | `textarea`, `input[placeholder*="About"]` |
| Experience section button | Button to add/edit experience |
| Education section button | Button to add/edit education |
| Save button | `button:contains("Save")`, `button:contains("Update")` |

### Message Tabs
| Tab | Selector |
|-----|----------|
| New Messages | `a[href*="/messages"]` or tab with "New Messages" |
| All Conversations | Tab with "All" or "Conversations" |
| Unread | Tab with "Unread" |