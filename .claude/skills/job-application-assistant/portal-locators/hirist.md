# Hirist Portal Locators

## Summary
Hirist is a tech-focused job portal for software engineers and developers. Features curated job listings, company insights, and application tracking.

## Auth & Navigation

### Sign In Options
- Email/password
- Google login
- LinkedIn login

### Main Navigation (logged-in)
- Jobs: Job search page
- Companies: Company profiles and reviews
- Resumes: Upload and manage
- Messages: Communication with recruiters

## Job Listings

### Jobs Page
- URL: `https://www.hirist.com/search_jobs`
- Featured jobs section
- All jobs listing

### Job Cards
- Company logo/name
- Role and seniority level
- Location and work type (remote/onsite)
- Apply button
- Save/Bookmark option

### Filters
- Technology/skill filters
- Location filters
- Salary range
- Experience level
- Company size
- Role type

## Applications

### Apply Button
- Direct apply on job card or job detail page
- Form opens on same page or modal

### Application Form
- Name, email pre-filled from profile
- Cover letter text area
- Resume attachment: Upload file button
- Questions from recruiter
- Submit application button

## Messages

- Conversation tracking with recruiters
- Status updates on applications
- Recruiter outreach

## Profile

- Edit profile details
- Resume upload
- Skills and portfolio links
- Experience and education sections

## Status Tracking

- Application status dashboard
- Progress indicators
- Communication history

## Flow Notes

1. Filter jobs by skills/location
2. Click "Apply" on job card or detail page
3. Verify/resume fill name, email
4. Attach or confirm resume
5. Add cover letter if required
6. Submit application
7. Track status in dashboard or messages

## Field-Level Locators

### Login Form
| Field | Selector |
|-------|----------|
| Email input | `input[type="email"]`, `input[name="email"]` |
| Password input | `input[type="password"]`, `input[name="password"]` |
| Login button | `button[type="submit"]` or `button:contains("Login")` |
| Google login | `button:contains("Google")` or `a:contains("Sign in with Google")` |
| LinkedIn login | `button:contains("LinkedIn")` or `a:contains("Sign in with LinkedIn")` |

### Job Search Filters
| Filter | Selector |
|--------|----------|
| Skill/technology | `input[placeholder*="skill"]` or `input[name="skill"]` |
| Location | `input[placeholder*="location"]` or `input[name="location"]` |
| Salary range | `input[name="min_salary"]`, `input[name="max_salary"]` |
| Experience level | `select[name="experience"]` or `[data-testid="experience-filter"]` |
| Company size | `select[name="company_size"]` or filter dropdown |
| Role type | Filter chips or dropdown selection |

### Application Form
| Field | Selector |
|-------|----------|
| Name (pre-filled) | `input[value]` containing candidate name |
| Email (pre-filled) | `input[type="email"]` |
| Phone | `input[type="tel"]`, `input[name="phone"]` |
| Cover letter/Notes | `textarea[name="cover_letter"]`, `textarea[placeholder*="cover"]` |
| Resume upload | `input[type="file"]` |
| Submit button | `button:contains("Apply")`, `button:contains("Submit")` |
| Upload another resume | `button:contains("Upload")` |

### Profile Page
| Element | Selector |
|---------|----------|
| Edit profile button | `button:contains("Edit")` or `a:contains("Edit Profile")` |
| Resume upload section | Section containing file input |
| Experience section | Collapsible section for work history |
| Education section | Collapsible section for academic history |
| Skills input | Tag-based input or textarea |
| Save button | `button:contains("Save")`, `button:contains("Update")` |

### Status Dashboard
| Element | Selector |
|---------|----------|
| Applied jobs link | `a[href*="/applied"]` or `a:contains("Applied")` |
| Status badges | Element with status text (Applied, Interview, Offer) |
| Message recruiter | `button:contains("Message")` or `a:contains("Message")` |