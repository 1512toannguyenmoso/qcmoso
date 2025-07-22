async function checkFor404Error(page, screenshotName = "404-error.png") {
  try {
    // Lấy thông tin phản hồi và URL hiện tại
    const response = await page.evaluate(() => {
      return {
        status: window.performance.getEntriesByType('navigation')[0]?.responseStatus || 200,
        url: window.location.href
      };
    });

    const title = await page.title();
    const bodyText = await page.textContent('body');
    const currentUrl = page.url();

    const lowerTitle = title.toLowerCase();
    const lowerBody = bodyText.toLowerCase();

    const is404 =
      response.status === 404 ||
      lowerTitle.includes('404') ||
      lowerTitle.includes('not found') ||
      lowerTitle.includes('error') ||
      lowerBody.includes('404') ||
      lowerBody.includes('not found') ||
      lowerBody.includes('page not found') ||
      currentUrl.includes('404') ||
      currentUrl.includes('error');

    if (is404) {
      await page.screenshot({ path: screenshotName, fullPage: true });
      console.error("❌ Detected possible 404 or error page!");
      console.error(`📸 Screenshot saved as: ${screenshotName}`);
      console.error(`🔗 URL: ${currentUrl}`);
      console.error(`📄 Title: ${title}`);
      throw new Error("Aborting test: Page appears to be a 404 or error page.");
    } else {
      console.log("✅ No 404 or error detected.");
    }
  } catch (err) {
    console.error("❌ Error during 404 check:", err);
    throw err; // Optional: rethrow to fail the test
  }
}

module.exports = { checkFor404Error };