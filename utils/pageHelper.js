async function checkForErrorPage(page, screenshotName = "../screenshots/error-page.png") {
  try {
    const response = await page.evaluate(() => {
      return {
        status: window.performance.getEntriesByType('navigation')[0]?.responseStatus || 200,
        url: window.location.href
      };
    });

    const title = await page.title();
    const currentUrl = page.url();

    const lowerTitle = title.toLowerCase();

    const errorKeywords = [
      '404',
      '500',
      'not found',
      'error',
      'internal server error',
      'something went wrong',
      'page loading failed',
      'server issue',
      'network problem'
    ];

    const isErrorPage =
      response.status === 400 ||  // Bad Request
      response.status === 401 ||  // Unauthorized
      response.status === 403 ||  // Forbidden
      response.status === 404 ||  // Not Found
      response.status === 405 ||  // Method Not Allowed
      response.status === 408 ||  // Request Timeout
      response.status === 429 ||  // Too Many Requests
      response.status === 500 ||  // Internal Server Error
      response.status === 501 ||  // Not Implemented
      response.status === 502 ||  // Bad Gateway
      response.status === 503 ||  // Service Unavailable
      response.status === 504 || // Gateway Timeout;
      errorKeywords.some(keyword =>
        lowerTitle.includes(keyword) ||
        currentUrl.includes(keyword)
      );

    if (isErrorPage) {
      await page.screenshot({ path: screenshotName, fullPage: true });
      console.error("❌ Detected possible 404/500 or error page!");
      console.error(`📸 Screenshot saved as: ${screenshotName}`);
      console.error(`🔗 URL: ${currentUrl}`);
      console.error(`📄 Title: ${title}`);
    } else {
      console.log("✅ No 404/500 or error detected.");
    }
  } catch (err) {
    console.error("❌ Error during error page check:", err);
  }
}

async function checkAndCaptureWarningPopup(page, screenshotName = "../screenshots/warning-popup.png") {
  const warningLocator = page.locator("//div[@id='gritter-notice-wrapper']//span[@class='gritter-title']");

  try {
    if (await warningLocator.isVisible()) {

      const currentUrl = page.url();
      await page.screenshot({ path: screenshotName, fullPage: true });

      console.log("⚠️ Warning popup detected!");
      console.log(`🔗 URL at warning: ${currentUrl}`);
      console.log(`📸 Screenshot saved as: ${screenshotName}`);
    } else {
      console.log("✅ No exception detected.");
    }
  } catch (err) {
    console.error("❌ Error while checking warning:", err);
    // Không throw lỗi, để test vẫn tiếp tục
  }
}

// await expect(page).toHaveTitle({timeout: 3000});
//Trigger function capture screen
// awai expect(page.url).toBe();
// await expect(page.locator()).toBeVisible()
module.exports = { checkForErrorPage, checkAndCaptureWarningPopup };