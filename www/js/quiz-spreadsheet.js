// Client ID and API key from the Developer Console
      var CLIENT_ID = '607367220939-dp0u7mbuba521bth20am5moqenrd7k3n.apps.googleusercontent.com';
      var API_KEY = 'AIzaSyBx2kIQQJOGj9LxZeuN04nQLTL9grrAaHg ';

      // Array of API discovery doc URLs for APIs used by the quickstart
      var DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];

      // Authorization scopes required by the API; multiple scopes can be
      // included, separated by spaces.
      var SCOPES = "https://www.googleapis.com/auth/spreadsheets.readonly";

      /**
       *  On load, called to load the auth2 library and API client library.
       */
      function handleClientLoad() {
        console.log("test1");
        gapi.load(initClient);
      }

      /**
       *  Initializes the API client library and sets up sign-in state
       *  listeners.
       */
      function initClient() {
        gapi.client.init({
          apiKey: API_KEY,
          clientId: CLIENT_ID,
          discoveryDocs: DISCOVERY_DOCS,
          scope: SCOPES
        }).then(function () {
              //See if calling API directly will work. Google documentation seems to always suggest using sign in
              listMajors();
              console.log("listmajors");
        });
      }

      /**
       * APPENDPRE IS A FUNCTION USED TO PRINT TO DOCUMENT
       *
       * @param {string} message Text to be placed in pre element.
       */
       function nextquestion(header,number){
                  
            }  

      function appendPre(message,header) {
        var pre = document.createElement("button");
        var textContent = document.createTextNode(message);
        pre.appendChild(textContent);
            document.appendChild(pre);
            pre.onclick = nextquestion(header,1);
      }
      /**
       * Print the names and majors of students in a sample spreadsheet:
       * https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
       */
      function listMajors() {
        gapi.client.sheets.spreadsheets.values.get({
          spreadsheetId: '1bJvqu2n2Tfsf91vRqMsrwYdyh31wBCyJ9qU-usbWeOk',
          range: 'B1:M30',
        }).then(function(response) {
          console.log('lol');
          var range = response.result;
          if (range.values.length > 0) {
            for (i = 0; i < range.values.length; i++) {
              var row = range.values[i];
              for (i = 0; i < row.length; i++){};
              // Print columns A and E, which correspond to indices 0 and 4.
              var cellheader = row[1].slice(0,4);
              if (cellheader === "Quiz"){
                    appendPre(row[1],i);
              }
            }
          } else {
            console.log('No data found.');
          }
        }, function(response) {
          console.log('Error: ' + response.result.error.message);
        });
      }
