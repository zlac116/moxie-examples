var API_KEY = "YOUR_API_KEY_HERE";  // Get free key: https://moxiemetrx.com/signup
var API_URL = "https://api.moxiemetrx.com/v1/rates/live";

function getMoxieRates() {
  var pairs = "BTCNGN,USDTNGN,BTCZAR,USDTZAR,BTCKES,ETHNGN,ETHZAR,XRPNGN,XRPZAR,SOLNGN,SOLZAR,USDTKES";

  var response = UrlFetchApp.fetch(API_URL + "?pairs=" + pairs, {
    headers: { "X-API-Key": API_KEY }
  });

  var data = JSON.parse(response.getContentText()).data;
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  // Header row
  sheet.getRange(1, 1, 1, 5).setValues([["Pair", "Rate", "Status", "Sources", "Updated"]]);

  var row = 2;
  var pairNames = Object.keys(data).sort();
  for (var i = 0; i < pairNames.length; i++) {
    var pair = pairNames[i];
    var info = data[pair];
    sheet.getRange(row, 1, 1, 5).setValues([[
      pair,
      info.rate,
      info.status,
      info.sources ? info.sources.length : 0,
      new Date().toLocaleTimeString()
    ]]);
    row++;
  }
}

// Auto-refresh every 5 minutes (run this function once to set up)
function createTrigger() {
  ScriptApp.newTrigger("getMoxieRates")
    .timeBased()
    .everyMinutes(5)
    .create();
}
