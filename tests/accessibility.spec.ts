import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const routes = [
  '/',
  '/services',
  '/about',
  '/contact',
  '/careers',
  '/case-studies',
  '/industries',
  '/privacy',
  '/terms',
  '/demo/claude',
];

for (const route of routes) {
  test.describe(`A11y: ${route}`, () => {
    test(`should have no detectable accessibility violations on ${route}`, async ({ page }, testInfo) => {
      const url = new URL(route, testInfo.project.use?.baseURL ?? 'http://localhost:8081').toString();
      await page.goto(url, { waitUntil: 'networkidle' });

      // run axe-core
      const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

      // write raw results to artifacts for easier review
      await testInfo.attach('axe-report', {
        body: JSON.stringify(accessibilityScanResults, null, 2),
        contentType: 'application/json',
      });

      const violations = accessibilityScanResults.violations || [];

      if (violations.length > 0) {
        console.warn(`Accessibility violations found on ${route}: ${violations.length}`);
        for (const v of violations) {
          console.warn(`- ${v.id}: ${v.description} (impact: ${v.impact})`);
        }
      }

      expect(violations.length, `a11y violations on ${route}`).toBe(0);
    });
  });
}
