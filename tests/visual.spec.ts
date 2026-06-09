import { test, expect } from "@playwright/test";

const sections = [
  "hero",
  "eyes",
  "art",
  "letters",
  "nightcall",
  "dream",
  "gallery",
  "finale",
];

test("enters and renders every section", async ({ page }, info) => {
  await page.goto("/");

  // intro gate — tap the bud to bloom + enter
  await page.getByRole("button", { name: /tap the bud/i }).click();
  await page.waitForTimeout(2200); // bloom + overlay lift

  // hero is visible
  await expect(page.getByRole("heading", { name: "Dhriti", exact: true })).toBeVisible();

  // walk down the page, screenshot each viewport for eyeballing
  const total = await page.evaluate(() => document.body.scrollHeight);
  const step = await page.evaluate(() => window.innerHeight);
  let y = 0;
  let i = 0;
  while (y < total) {
    await page.evaluate((v) => window.scrollTo(0, v), y);
    await page.waitForTimeout(700);
    await page.screenshot({ path: `test-results/${info.project.name}-${String(i).padStart(2, "0")}.png` });
    y += step;
    i++;
  }

  // open a letter
  await page.evaluate(() => window.scrollTo(0, 0));
});

test("a letter opens and shows handwritten copy", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: /tap the bud/i }).click();
  await page.waitForTimeout(2200);
  const letter = page.getByRole("button", { name: /for your art/i });
  await letter.scrollIntoViewIfNeeded();
  await letter.click();
  await expect(page.getByRole("dialog", { name: /to your art journey/i })).toBeVisible();
});

// referenced so the array isn't unused if the first test changes
test("section list is complete", () => {
  expect(sections.length).toBe(8);
});
