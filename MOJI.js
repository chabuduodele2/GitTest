// Quantumult X script: script-response-body

let obj = JSON.parse($response.body);

// 替换会员状态字段
try {
  const target = obj.result.results["fetch-XTest"].result["8TAAYC1tSZ"];

  target.hasPaid = true;
  target.isOpen = true;
  target.privilege = {
    "identity": "000-002-00001",
    "privilege": {
      "totalInServiceDays": 9999,
      "expiresDate": 4070880000000,  // 2098年
      "purchaseDate": 1672502400000  // 2023年
    },
    "privilegeStatus": "activated",
    "canPay": true
  };
} catch (e) {
  console.log("修改失败：", e);
}

$done({ body: JSON.stringify(obj) });
