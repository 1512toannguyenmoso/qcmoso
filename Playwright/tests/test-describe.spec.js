import { test, expect } from "@playwright/test";

test.describe("Authentication", async () => {
  let usernameLocator, passwordLocator, loginBtnLocator;
  test.beforeAll(async () => {
    usernameLocator = "//input[@id='email']";
    passwordLocator = "//input[@id='password']";
    loginBtnLocator = "//button[@id='gwt-debug-submit']";
  });

  test.afterAll(async () => {
    console.log("After all tests");
  });

  test.beforeEach(async ({ page }) => {
    console.log("Before each test");
  });

  test.afterEach(async () => {
    console.log("After each test");
  });
  test("login successful with valid credentials", async ({ page }) => {
    await test.step("navigate to login page", async () => {
      await page.goto("https://www.viet18.com/login");
    });

    await test.step("enter email and passwordd", async () => {
      await page.locator(usernameLocator).fill("chauchau.inc@gmail.com");
      await page.locator(passwordLocator).fill("Phuong123456");

      const actualUsername = await page.locator(usernameLocator).innerText();
      const actualPassword = await page.locator(passwordLocator).innerText();

      expect(actualUsername).toEqual("chauchau.inc@gmail.com");
      expect(actualPassword).toEqual("Phuong123456");
    });

    await test.step("click on button Login", async () => {
      await page.locator(loginBtnLocator).click();
    });
  });

  test("login unsuccessful with invalid credentials", async ({ page }) => {
    await test.step("navigate to login page", async () => {
      await page.goto("https://www.viet18.com/login");
    });
    await test.step("enter email and password", async () => {
      await page.locator(usernameLocator).fill("chauchau.inc@gmail.com");
      await page.locator(passwordLocator).fill("hien123456");
    });

    await test.step("click on button Login", async () => {
      await page.locator(loginBtnLocator).click();
    });
  });
});
