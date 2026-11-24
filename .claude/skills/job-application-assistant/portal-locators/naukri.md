# Naukri Portal Map

Reuse the verified selectors below and inspect only mapped areas on future visits. If the live page changes or a reusable selector is missing, verify and update this map before continuing. Prefer stable IDs, automation attributes, accessible roles, and labels; keep job-specific listing content, recruiter questions, and answers out of this reference.

## Signed-in job search

Page variant: Search homepage and results

- Keyword field: role `textbox[name="Enter keyword, designation, or companies"]`
- Experience field: role `textbox[name="Select experience"]`
- Location field: role `textbox[name="Enter location"]`
- Search action: role `button[name="Search"]`
- Results region: CSS `.cust-job-tuple`; the current results page does not expose a `list[name="Job search results"]` role. Each `.cust-job-tuple` contains a job-title link `a.title`, employer, experience, location, snippet, posting date, and available actions. Validate this class on each visit.
- Search filters: freshness dropdown `button#filter-freshness` with options `a[data-id="filter-freshness-<days>"]`; sort dropdown `button#filter-sort` with options `a[data-id="filter-sort-p"]` (Recommended), `a[data-id="filter-sort-r"]` (Relevance), and `a[data-id="filter-sort-f"]` (Date). Validate these selectors when using filters.
- Use: Fill the keyword and location fields, activate Search, inspect only `.cust-job-tuple` cards for fit and application route, then open a matching `a.title` link.

## Job details and actions

Page variant: Job-details page

- Content region: inspect title, company, experience, location, posted date, openings/applicant count, highlights, description, skills, employment type, and education.
- Save action: role `button[name="Save"]`
- Native apply action: role `button[name="Apply"]`
- External apply action: role `button[name="Apply on company site"]` when present.
- Use: Inspect listing details and application route. Apply only through Naukri's native Apply action.

## Recruiter questionnaire

Page variant: Questionnaire drawer during application

- Drawer region: CSS `[id$="Drawer"]` (observed generated ID suffix; validate on each visit)
- Message history: CSS `[id$="Messages"]` scoped to the drawer
- Response controls: identify the current widget and its options inside the drawer; they vary by job.
- Continue action: use the visible Save/continue control inside the drawer.
- Use: Inspect the message history and current response widget only. Discover each job's questions and inputs from this subtree.

## Verify submission

Page variant: Apply confirmation

- Confirmation page title: `Apply Confirmation`
- Confirmation content: text `Applied to` followed by the job title
- Use: Verify the title matches the single submitted listing. If confirmation is absent or ambiguous, do not retry.
