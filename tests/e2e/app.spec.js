import { expect, test } from '@playwright/test';

test('home finder supports search, details and correction flow', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByRole('heading', { name: /find public help near you/i })).toBeVisible();
  await expect(page.getByRole('link', { name: /112/i }).first()).toHaveAttribute('href', 'tel:112');

  await page.getByRole('button', { name: 'Blood', exact: true }).click();
  await expect(page.getByRole('heading', { name: /Blood banks/i })).toBeVisible();

  await page.getByLabel(/Public utility finder/i).getByRole('searchbox').fill('blood bank');
  await expect(page.getByRole('article').filter({ hasText: 'Telangana blood bank helpline' }).first()).toBeVisible();

  await page.getByRole('button', { name: /View details/i }).first().click();
  await expect(page.getByLabel(/Selected service details/i)).toContainText('Call 040 2474 5243');
  await expect(page.getByLabel(/Selected service details/i).getByRole('link', { name: /Call/i })).toHaveAttribute('href', 'tel:04024745243');

  await page.getByRole('button', { name: /Report correction/i }).click();
  await page.getByRole('textbox', { name: 'Details' }).fill('Phone verified from official source.');
  await page.getByRole('button', { name: /Submit correction/i }).click();
  await expect(page.getByRole('status')).toContainText('Correction queued locally');
});

test('deep SEO route preselects category and city', async ({ page }) => {
  await page.goto('/aadhaar-centers/hyderabad');

  await expect(page).toHaveTitle(/Aadhaar centers near Hyderabad/i);
  await expect(page.getByRole('heading', { name: /Aadhaar centers/i })).toBeVisible();
  await expect(page.getByRole('article').filter({ hasText: 'UIDAI Aadhaar enrolment/update locator' }).first()).toBeVisible();
});

test('mobile layout keeps core actions available', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');

  await expect(page.getByRole('heading', { name: /find public help near you/i })).toBeVisible();
  await page.getByRole('button', { name: /Filters/i }).click();
  await page.getByLabel(/City/i).selectOption('Telangana');
  await page.getByRole('button', { name: 'Police', exact: true }).click();
  await expect(page.getByRole('article').filter({ hasText: 'Telangana police emergency' }).first()).toBeVisible();
});

test('seo public files are served', async ({ page, request }) => {
  await page.goto('/');
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', 'https://nearmeindia.fun/');

  const robots = await request.get('/robots.txt');
  expect(await robots.text()).toContain('Sitemap: https://nearmeindia.fun/sitemap.xml');

  const sitemap = await request.get('/sitemap.xml');
  expect(await sitemap.text()).toContain('https://nearmeindia.fun/blood-banks/hyderabad');
});
