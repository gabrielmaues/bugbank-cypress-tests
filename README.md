🧩 BugBank QA Automation

End-to-end (E2E) automation for BugBank using Cypress.
This repository contains tests, Page Objects, and custom commands for user registration, account number capture, and money transfers.

🔧 Requirements

Node.js (LTS recommended) — comes with npm

Internet access to install dependencies

Access to the BugBank website

🔁 Installation (from scratch)

Clone the repository:

git clone https://github.com/gabrielmaues/bugbank-cypress-tests
cd "path\to\your\project"


Check Node and npm versions:

node -v
npm -v


If not installed, get Node.js (includes npm):
👉 https://nodejs.org
 (LTS version recommended)

Install dependencies:

npm install

Install Cypress (if not listed as a dependency):

npm install cypress --save-dev

Note: This project should already list Cypress in devDependencies. The command above ensures it’s installed locally.

📁 Project Structure
cypress/
├── e2e/                  # Tests (e.g., bankTransfer.cy.js)
├── fixtures/             # Test data (users.json, transfer.json)
├── pages/                # Page Objects (e.g., TransferPage.js)
├── support/
│   ├── commands.js       # Custom commands (createLogin, submitLogin, start)
│   └── e2e.js            # Global imports and hooks
cypress.config.js
package.json
README.md

🧭 Main Flows Implemented

createLogin(email, name, password, aliasName)
→ Opens registration, signs up the user, captures the account number, and stores the following aliases:

@{aliasName}Main → account number before the hyphen

@{aliasName}Digit → digit after the hyphen

submitLogin(email, password)
→ Performs login (uses within() on the login container to avoid input conflicts).

TransferPage.makeTransfer(mainAlias, digitAlias, value, description)
→ Fills account number (main), digit (name="digit"), amount, and description fields, then clicks “Transfer now”.

✅ Best Practices / Recommendations

Page Objects:
This project uses Page Objects to organize and abstract interactions with UI elements. Each page has its own class (e.g., TransferPage.js) containing clear and reusable methods. This improves test readability, maintainability, and keeps tests decoupled from specific HTML/CSS structures.

Custom Commands:
Custom commands (commands.js) encapsulate repetitive flows like createLogin, submitLogin, or makeTransfer. This reduces code duplication across E2E tests, improves clarity, and makes future changes easier.

Example: cy.createLogin(email, name, password, aliasName) performs the full registration flow and account capture, reusable in any test.

Scoped Test Data:
Test data is stored in fixtures (e.g., users.json, transfer.json) and assigned to unique aliases per user (e.g., accountUser1Main, accountUser1Digit). This prevents overwriting and ensures data consistency, making tests more maintainable and reliable.

within() Usage:
Use within() to limit scope when selecting elements, preventing conflicts between inputs that appear multiple times (e.g., login vs registration).

Handling Hidden or Persistent Inputs:
When inputs remain in the DOM or are invisible due to animations:

Use .clear({ force: true }) or {ctrl}a + .type(...) with { force: true } as needed.

Flexible Regex for Account Numbers:
Capture account numbers using a flexible regex (\d+)-(\d) and validate before use to prevent errors.

🧪 Running Tests

Interactive mode (recommended for development):
npx cypress open
# Then select the desired spec in the Cypress UI

CI / Headless mode:
npx cypress run
