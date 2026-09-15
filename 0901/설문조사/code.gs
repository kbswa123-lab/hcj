function doGet() {
  return HtmlService.createHtmlOutputFromFile('index');
}

function submitSurvey(data) {
  const SPREADSHEET_ID = '여기에_구글_스프레드시트_ID';

  const sheet = SpreadsheetApp
    .openById(SPREADSHEET_ID)
    .getSheets()[0];

  sheet.appendRow([
    data.name,
    data.satisfaction,
    data.helpful
  ]);

  return true;
}