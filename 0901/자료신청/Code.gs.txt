function myFunction() {
  
}
const SPREADSHEET_ID = '여기에_구글_스프레드시트_ID를_입력하세요';

function doGet() {
  return HtmlService
    .createHtmlOutputFromFile('index')
    .setTitle('교육자료신청');
}

function submitApplication(data) {
  const name = String(data.name || '').trim();
  const email = String(data.email || '').trim();
  const message = String(data.message || '').trim();

  if (!name) {
    throw new Error('이름을 입력해주세요.');
  }

  if (!email) {
    throw new Error('이메일을 입력해주세요.');
  }

  const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = spreadsheet.getSheets()[0];

  sheet.appendRow([
    name,
    email,
    message
  ]);

  return {
    success: true,
    message: '오늘 교육 받느라 수고하셨습니다.'
  };
}