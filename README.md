# TestAutomationAssessment

This project contains automated tests for web application functionality using Playwright.

## Project Structure
Here’s a concise and easy-to-understand version of the `README.md` file:

---

# Test Automation Assessment

## Overview

This project automates test cases for critical user journeys on the Quartex demo site using Playwright with TypeScript. The focus is on creating reliable, maintainable tests for the following features:

1. Basic Search: Verifying search functionality and filters.
2. Navigation: Ensuring links in the timeline content block work correctly.
3. Browsing by Collection: Testing collection browsing and navigation.

---

## Setup Instructions

### Prerequisites
1. Install [Node.js](https://nodejs.org/) (version 14+).
2. Ensure Git is installed.

### Steps to Set Up
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd TestAutomationAssessment
   ```
2. Install project dependencies:
   ```bash
   npm install
   ```
3. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

---

## How to Run Tests

### Run All Tests
```bash
npx playwright test
```

### Run a Specific Test File
```bash
npx playwright test tests/basicSearch.spec.ts
```

### Run Tests in a Specific Browser (e.g., Firefox)
```bash
npx playwright test --project=Firefox
```

### View Test Reports
After running tests:
```bash
npx playwright show-report
```

---

## Folder Structure**

```
TestAutomationAssessment/
├── tests/                        # Test files
│   ├── basicSearch.spec.ts       # Tests for basic search
│   ├── navigation.spec.ts        # Tests for link navigation
│   ├── browsingByCollection.spec.ts # Tests for browsing collections
├── utils/                        # Helper functions and test data
│   ├── helpers.ts
│   ├── testData.ts
├── playwright.config.ts          # Playwright configuration
├── README.md                     # Documentation
└── package.json                  # Dependencies and scripts
```
## Additional Notes**

- Cross-Browser Compatibility: Tests are designed for Chromium, Firefox, and Webkit. Update `playwright.config.ts` to add or modify browser support.
- Debugging: Run tests in non-headless mode with `--headed` or debug with `--debug`.
- Artifacts: On failures, screenshots and videos are saved for debugging.

Notes - 
I have not finished the test cases as requested. I am writing the tests using playwright I'm not very experienced using playwright so its taking a lot longer to complete than i would like. I thought it was a good way to practice my playwright skills. 

Due to poor internet connection I have add 120000 seconds to the test timeouts.

The basic search is complete but due to poor internet connection i cannot run tests end to end to verify it passes successfully.

The Browsing collection is complete but due to poor internet connection i cannot run tests end to end to verify it passes successfully. 

The navigation test is incomplete. I noticed in the manual test the content is not blocked and downloads file without verification. 
