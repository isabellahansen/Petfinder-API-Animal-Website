
// Following Petfinder API documentation on how to refresh tokens
var key="LdlvdOyWYNd2BgBYQtkY9oHzy4nobeSen7H1sVdK1qVZwm4UL2";
var secret="PMNVWaoxTxaHbZHmFn8yGbPzMJTXr2eYzqcFXBMG";

let token=""

function newToken() {
    fetch('https://api.petfinder.com/v2/oauth2/token', {
        method: "POST",
        body: "grant_type=client_credentials&client_id=" + key + "&client_secret=" + secret,
         headers: {
           "Content-Type": "application/x-www-form-urlencoded"
           
        }
    }).then(function(resp) {
    return resp.json();
    }).then(function(data) {
    token= data
    console.log('token', data)})
}
newToken();