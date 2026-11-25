# Portal Reference Index

| Portal | Reference File | Status | Application Type |
|--------|---------------|--------|------------------|
| Naukri | [naukri.md](./portal-locators/naukri.md) | Complete | Form-based |
| Instahyre | [instahyre.md](./portal-locators/instahyre.md) | Complete | Connect-message |
| Cutshort | [cutshort.md](./portal-locators/cutshort.md) | Complete | Chat-based |
| Hirist | [hirist.md](./portal-locators/hirist.md) | Complete | Form-based |
| LinkedIn | [linkedin.md](./portal-locators/linkedin.md) | Complete | Easy Apply/Form |

### Portal Status Legend
- **Complete**: Full field-level locators documented
- **Partial**: Needs field-level locators for specific forms
- **Draft**: Initial structure created, needs verification

## Adding a New Portal

1. **Navigate** to portal in Chrome
2. **Document** each section with verified selectors
3. **Add file** following template structure in `portal-locators/`
4. **Update this index** with new portal entry

### Template Structure

```markdown
# [Portal Name] - Summary: brief description of application model

## Auth & Navigation
- Login options and methods
- Main navigation links (Dashboard, Jobs, Messages, Profile)

## Job Listings
- All jobs URL and selectors
- Filter sidebar structure and types
- Job card elements (company, title, apply, save, filters)

## Applications
- Apply button on job detail page
- Form fields (if any - text areas, checkboxes)
- Resume attachment mechanism
- Submit/Confirm buttons

## Messages
- Conversations location and tabs
- Message input and send button
- Status indicators

## Profile
- Edit profile selectors
- Resume upload (if needed)
- External profile links

## Status Tracking
- Application status pages
- Confirmation locations
- Follow company options

## Flow Notes
- Application method (chat, form, external)
- Resume attachment behavior
- Post-submission confirmation

## Field-Level Locators
(Optional but recommended - form inputs, buttons, selectors)
```

## Selector Documentation Guidelines

- **Use specific, reliable selectors**: Prefer `[data-testid]`, `data-intercom-target`, or attribute selectors over dynamic classes
- **Provide alternatives**: When one selector is fragile (styled-components), add stable alternatives
- **Group by section**: Organize under clear headers matching template
- **Test selectors**: Verify they work across multiple pages and user states
- **Note dynamic behavior**: Document class rotations, toggle states, and conditional elements

## Portal Exploration Requirements

- **End-to-end coverage**: Document ALL interactive elements - filters, options, widgets, settings, buttons, dropdowns, modals, drawers, pagination, sort controls, view toggles
- **Complete portal context**: MD file must be useful for finding, applying to, and verifying jobs - include navigation flows, filter combinations, search behaviors
- **Navigation by user actions ONLY**: NEVER change URLs directly. Use clicks, typing, form submissions, dropdown selections, tab switches, button clicks to navigate
- **Application-agnostic**: Exclude fields/widgets specific to a single job application. Only document portal-wide elements
- **Verification-focused**: Include selectors and flows needed to confirm application submission, track status, and verify outcomes

## Common Portal Patterns

### Form-Based Applications (Naukri, Hirist, LinkedIn full app)
- Pre-filled name/email from profile
- Cover letter text area (optional)
- Resume upload file input
- Multiple form sections with Next/Submit

### Chat-Based Applications (Cutshort)
- Apply button opens chat interface
- Resume auto-attached to conversation
- Message to recruiter submits application
- Status tracked in Messages tabs

### Connect-Based Applications (Instahyre)
- Connect with recruiter
- Profile shared automatically
- Message exchanges indicate application progress

## Status Tracking Patterns

| Portal | Status Location | Confirmation Element |
|--------|-----------------|---------------------|
| Naukri | Toast message or status badge | `[data-qa="apply-btn"]` or confirmation banner |
| Cutshort | Messages → "Shortlisted" tab | Being "Shortlisted" indicates successful application |
| LinkedIn | Jobs → My Jobs → Applied tab | Status badges (Applied, Interview, Offer, Closed) |
| Hirist | Status dashboard or messages | Progress indicators |
| Instahyre | Messages section | Recruiter responses |

## Application Flow Diagrams

### Form-Based Application
```
Job Search → Apply on job card/detail → Form opens → Fill fields → Attach resume → Submit → Check confirmation
```

### Chat-Based Application
```
Job Search → Apply now button → Chat interface opens → Message composed → Send → Check Messages → Shortlisted tab
```