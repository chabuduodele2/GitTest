// Quantumult X script: script-response-body


[rewrite_local]
^https:\/\/api\.mojidict\.com\/parse\/functions\/union-api url script-response-body https://raw.githubusercontent.com/chabuduodele2/GitTest/refs/heads/master/MOJI.js?token=GHSAT0AAAAAADE5YMRQPDB6COLHJXNG2WX62EV5ZNQ

[mitm]
hostname = api.mojidict.com


let Premium = $response.body;
var modified = JSON.parse(Premium);

modified.result.results["fetch-XTest"].result["8TAAYC1tSZ"] = {
  "isNewUser": false,
  "groupIndex": 0,
  "isOpen": true,
  "hasPaid": true,
  "privilege": {
    "identity": "000-002-00001",
    "privilege": {
      "totalInServiceDays": 9999,
      "expiresDate": 4070880000000,
      "purchaseDate": 1672502400000
    },
    "privilegeStatus": "activated",
    "canPay": true
  },
  "diffExpiresDate": 999999999
};

$done({ body: JSON.stringify(modified) });

