import { expect, test } from '@playwright/test';
import { IS_JIRA, SAMPLE_PAGES as TEST_DATA } from '../consts';

test.describe('Jira Issue Panel', () => {
  if (!IS_JIRA) test.skip(); // this test for Jira only

  test('panel existed', async ({ page }) => {
    await page.setViewportSize({ width: 1600, height: 1200 });

    await page.goto(TEST_DATA.JIRA_ISSUE);

    await page.getByTestId('issue-view-ecosystem.dropdown-menu--trigger').click(); // this will trigger additional app buttons adding

    await expect(page.locator(`button[aria-label="${TEST_DATA.JIRA_ISSUE_PANEL_TITLE}"]`)).toBeVisible();

    if (!(await page.locator('iframe[data-testid="hosted-resources-iframe"]').isVisible())) {
      await page.locator(`button[aria-label="${TEST_DATA.JIRA_ISSUE_PANEL_TITLE}"]`).click();
    }

    await expect(page.locator('iframe[data-testid="hosted-resources-iframe"]')).toBeVisible();
    const iframe = page.frameLocator('iframe[data-testid="hosted-resources-iframe"]');
    await expect(iframe.getByTestId('app-wrapper')).toBeVisible();
  });
});
