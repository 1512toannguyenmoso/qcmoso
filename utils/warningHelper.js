async function checkAndCaptureWarning(page, screenshotName = "warning-popup.png") {
    const warningLocator = page.locator("//div[@id='gritter-notice-wrapper']//span[@class='gritter-title']");

    try {
        if (await warningLocator.isVisible()) {

            const currentUrl = page.url();
            await page.screenshot({ path: screenshotName, fullPage: true });

            console.log("⚠️ Warning popup detected!");
            console.log(`🔗 URL at warning: ${currentUrl}`);
            console.log(`📸 Screenshot saved as: ${screenshotName}`);
        }
    } catch (err) {
        console.error("❌ Error while checking warning:", err);
        // Không throw lỗi, để test vẫn tiếp tục
    }
}

module.exports = { checkAndCaptureWarning };