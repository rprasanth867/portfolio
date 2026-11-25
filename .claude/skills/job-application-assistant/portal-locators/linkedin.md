# LinkedIn Portal Locators

## Summary
LinkedIn is a professional networking platform with integrated job applications. Many applications are direct through LinkedIn, while others redirect to company sites.

## Auth & Navigation

### Sign In Options
- LinkedIn login (primary)
- SSO via email/password

### Main Navigation (logged-in)
- Jobs: `a[href*="/jobs"]` or nav item "Jobs"
- My Jobs: `a[href*="/myjobs"]` (Applied, Saved jobs)
- Messaging: `a[href*="/messages"]`
- Profile: `a[href*="/in/"]` or nav menu "Me" → "View profile"
- Find connections: Search or "My Network"

## Job Listings

### Jobs Page
- URL: `https://www.linkedin.com/jobs/`
- All jobs view
- Saved jobs: `https://www.linkedin.com/jobs/saved/`

### Job Cards
- Company logo/name
- Job title
- Location
- Apply button ("Easy Apply" or "Apply")
- Save button (heart/saved icon)

### Job Filters
- Location filter input
- Keywords search
- Experience level dropdowns
- Remote options toggle

## Applications

### Apply Button Types
- Easy Apply: `button` with "Easy Apply" or `aria-label="Easy Apply"`
- Apply: `button` with "Apply" - opens full application

### Easy Apply Form
- Auto-populates from profile
- Quick form fields (name, email, phone, cover letter)
- Resume attachment: Upload file button
- Submit: "Send to employer" button

### Full Application
- Opens in modal or new page
- Multiple form sections
- Questions from recruiter
- Document uploads

## Messages

- URL: `https://www.linkedin.com/messages/`
- Tabs: Primary, Sent, Archive
- Message threads with recruiters
- Input field: `textarea[msg-input]` or similar
- Send: Button with "Send" or paper airplane icon

## Profile

- Edit profile: "Edit public profile" button on profile page
- Resume: Featured section or media section
- Contact info: Email, phone visible on profile
- Experience, Education, Skills sections

## Status Tracking

- Applied jobs: `https://www.linkedin.com/jobs/myjobs/applied/`
- Each application shows status (Applied, Interview, Offer, Closed)
- Updates in Jobs → "Your_jobs" tab

## Flow Notes

1. Search jobs or browse recommendations
2. Click "Easy Apply" (quick) or "Apply" (full form)
3. Fill required fields (many auto-filled)
4. Attach resume if needed
5. Submit application
6. Track via "My Jobs" → "Applied" tab
7. Check Messages tab for recruiter responses

## Field-Level Locators

### Login Form
| Field | Selector |
|-------|----------|
| Email input | `input[type="email"]`, `input#username` |
| Password input | `input[type="password"]`, `input#password` |
| Login button | `button[type="submit"]` or `button:contains("Sign in")` |

### Job Search Filters
| Filter | Selector |
|--------|----------|
| Location input | `input[placeholder*="Location"]` or `[aria-label*="Location"]` |
| Keywords search | `input[placeholder*="Search"]` or `input[name="keywords"]` |
| Experience level | Dropdown or filter chips with experience options |
| Remote toggle | `[aria-label*="Remote"]` checkbox or switch |
| Posted date | Filter dropdown (Past week, month, etc.) |

### Job Card Actions
| Action | Selector |
|--------|----------|
| Apply button | `button:contains("Easy Apply")`, `button:contains("Apply")`, `button[aria-label="Easy Apply"]` |
| Save button | `button[aria-label="Save job"]`, `button:contains("Save")`, `[aria-label="Save job"]` |
| Interested button | `button:contains("Interested")` |

### Easy Apply Form
| Field | Selector |
|-------|----------|
| Name input | `input[name="name"]`, `input[aria-label*="Name"]` |
| Email | `input[type="email"]` |
| Phone | `input[name="phone"]` or `input[aria-label*="Phone"]` |
| Cover letter | `textarea[placeholder*="cover"]` |
| Resume upload | `input[type="file"]` |
| Send button | `button:contains("Send")`, `button:contains("Review")`, `button[aria-label="Send to employer"]` |
| Skip | `button:contains("Skip")`, `button:contains("No thanks")` |

### Full Application Modal/Page
| Element | Selector |
|---------|----------|
| Next button | `button:contains("Next")`, `[aria-label="Continue"]` |
| Back button | `button:contains("Back")` |
| Submit button | `button:contains("Submit")`, `button:contains("Send")`, `[aria-label="Submit application"]` |

### My Jobs Page
| Tab | Selector |
|-----|----------|
| Applied | `a[href*="/myjobs/applied"]` |
| Saved | `a[href*="/myjobs/saved"]` |
| Activity | `a[href*="/myjobs/activity"]` |

### Messages Page
| Element | Selector |
|---------|----------|
| Conversation | `a[href*="/messages/"]` or message thread |
| New message | `button:contains("New message")`, `button[aria-label="New message"]` |
| Message input | `textarea`, `div[role="textbox"]`, `[aria-label*="Message"]` |
| Send button | `button[aria-label="Send"]`, `button:contains("Send")` |

### Profile Page
| Element | Selector |
|---------|----------|
| Edit profile | `a:contains("Edit profile")`, `button:contains("Edit public profile")` |
| Add position | `button:contains("Add position")` |
| Add education | `button:contains("Add education")` |
| Featured media (resume) | `div[aria-label="Featured"]` or media section |
| Save button | `button:contains("Save")`, `[aria-label="Save profile"]` |

### Status Indicators
| Status | Selector |
|--------|----------|
| Applied | `span:contains("Applied")` or `[aria-label="Applied"]` |
| Interview | `span:contains("Interview")` |
| Offer | `span:contains("Offer")` or `span:contains("$")` |
| Closed | `span:contains("Closed")` |

## Common Patterns

### Easy Apply Flow
```
Job Search → Easy Apply button → Form opens → Verify auto-filled fields → Attach resume → Send to employer → Track in My Jobs → Applied
```

### Full Application Flow
```
Job Search → Apply button → Modal/Page opens → Next/Continue → Fill sections → Submit → Track in My Jobs
```