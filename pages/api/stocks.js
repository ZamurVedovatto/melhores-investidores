// import data from './livros.json';

// export default (req, res) => {
//   res.status(200).json(data);
// }

var GoogleSpreadsheet = require("google-spreadsheet");
var creds = require("./../../client_secret.json");

// Create a document object using the ID of the spreadsheet - obtained from its URL.
var doc = new GoogleSpreadsheet(
  "https://docs.google.com/spreadsheets/d/16aqHi_gOumPNPtVPCNfQAySPyleLwy5-x3Uvo4BfEoM/edit#gid=0"
);

export default (req, res) => {
  // Authenticate with the Google Spreadsheets API.
  doc.useServiceAccountAuth(creds, function (err) {
    // Get all of the rows from the spreadsheet.
    doc.getRows(1, function (err, rows) {
      console.log(rows);
      res.status(200).json(rows);
    });
  });
};
