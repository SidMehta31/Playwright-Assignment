1: Clone repo:

git clone <your-repo-url>
cd playwright-assignment


2. Install dependencies:

npm install @playwright/test form-data
npx playwright install
Note: During playwright installation choose default spec file ath as "tests" not "e2e"

3. Update settings.json with execution mode, headed, baseURL, token.

4. Run tests:

All tests: npx playwright test
UI only: npx playwright test tests/ui
API only: npx playwright test tests/api
