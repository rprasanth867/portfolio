# Project Structure

This repository is a combination of:

1. **Portfolio** - Main portfolio site
2. **Learn** - Notes rendered under `/notes` route in the portfolio
3. **Online Job Applications** - Job application tracking and management

## Important Distinctions

- **Learn (notes) are rendered in portfolio under `/notes` route**. Expect that there is **no connection between Learn and portfolio components**.
- **Everything should be isolated**. When working on:
  - **Portfolio**: Consider only portfolio-related files and routes
  - **Learn**: Consider only the notes/learning materials
  - **Job Applications**: Consider only job application files and data

## Isolation Boundaries

- Portfolio changes should not affect job application workflows
- Learn/note content is independent of portfolio rendering logic
- Job applications are handled through dedicated tools and data files
