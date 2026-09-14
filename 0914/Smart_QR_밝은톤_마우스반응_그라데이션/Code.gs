function doGet() {
  return HtmlService.createHtmlOutputFromFile("index")
    .setTitle("Smart QR")
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}