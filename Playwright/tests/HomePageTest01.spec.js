const { chromium } = require('playwright');  // Sử dụng trình duyệt Chromium

(async () => {
  // Bước 1: Mở trình duyệt
  const browser = await chromium.launch();  // Khởi động trình duyệt
  const page = await browser.newPage();  // Mở một tab mới

  // Bước 2: Điều hướng đến trang web
  await page.goto('https://example.com');  // Điều hướng đến URL

  // Bước 3: Kiểm tra xem có một đoạn văn bản cụ thể trên trang không
  const text = await page.textContent('body');  // Lấy toàn bộ nội dung trong thẻ <body>
  if (text.includes('Example Domain')) {
    console.log('Đoạn văn bản được tìm thấy!');
  } else {
    console.log('Đoạn văn bản không tìm thấy!');
  }

  // Bước 4: Chụp màn hình trang
  await page.screenshot({ path: 'example.png' });  // Chụp màn hình và lưu vào file example.png

  // Bước 5: Đóng trình duyệt
  await browser.close();
})();
