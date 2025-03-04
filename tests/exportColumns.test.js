//Đăng nhập vào hệ thống (nếu cần).
//Điều hướng đến trang "Associates".
//Nhấp vào nút "Export (CSV)".
//Chờ file CSV được tải xuống.
//Mở file CSV và kiểm tra:
//File được tải thành công.
//File có chứa hai cột "Domain" và "Sub-page".
//Dữ liệu trong hai cột đúng với hệ thống.


import {test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';

test('Export CSV should include Domain and Sub-page columns', async ({ page }) =>{

    //login page
    await page.goto('https://www.viet18.com/login');
    await page.fill('//input[@id="email"]', 'chauchau.inc@gmail.com');
    await page.fill('//input[@id="password"]', 'Phuong123456');
    await page.waitForTimeout(2000);
    await page.click('//button[@id="gwt-debug-submit"]');

    // điều hướng đến trang associates
    await page.waitForTimeout(5000);
    //await page.goto('https://www.viet18.com/associates');

    // 3. Nhấp vào nút Export CSV
    
    await page.getByRole('link', { name: ' Users' }).click();
  await page.getByRole('tab', { name: 'Associates' }).click();
  await page.waitForTimeout(2000);
  
  await page.getByRole('link', { name: 'Action', exact: true }).click();
  await page.waitForTimeout(2000);
  await page.waitForSelector('a[data-name="Export (csv)"]');
  const downloadPromise = page.waitForEvent('download');

  await page.getByRole('link', { name: 'Action', exact: true }).click();
  await page.locator('a[data-name="Export (csv)"]').click(); // Click tải CSV

  // 5️⃣ Chờ tải file hoàn tất
  const download = await downloadPromise;
  const filePath = path.join(__dirname, download.suggestedFilename());
  await download.saveAs(filePath);

    // 6️⃣ Đọc nội dung file CSV để kiểm tra cột "Domain" và "Sub-page"
    const fileContent = fs.readFileSync(filePath, 'utf8');
    expect(fileContent).toContain('Domain');
    expect(fileContent).toContain('Sub-page');
    
    fs.unlinkSync(filePath);

});