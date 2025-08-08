/*
[rewrite_local]

^https:\/\/api\.mojidict\.com\/parse\/functions\/union-api url script-response-body https://raw.githubusercontent.com/chabuduodele2/GitTest/master/MOJI.js

[mitm] 

hostname = api.mojidict.com
*/

let Premium = $response.body;
console.log("📥 原始响应体：", Premium);

try {
  var modified = JSON.parse(Premium);

  // 判断路径是否存在
  const userId = "8TAAYC1tSZ";
  if (
    modified?.result?.results?.["fetch-XTest"]?.result?.[userId]
  ) {
    console.log("✅ 找到用户 ID:", userId);

    // 模拟会员数据
    modified.result.results["fetch-XTest"].result[userId] = {
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

    console.log("🎉 会员信息修改成功！");
    console.log("🧾 最终数据：", JSON.stringify(modified));

  } else {
    console.log("❌ 没找到指定用户 ID：" + userId);
  }

  $done({ body: JSON.stringify(modified) });

} catch (e) {
  console.log("❗JSON 解析失败:", e);
  $done({ body: Premium });
}
