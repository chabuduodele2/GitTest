#!name=京东助手
#!desc=京东App点击商品详情触发佣金返利和历史价格

#!arguments=JD_UNION_ID:null,JD_POSITION_ID:null,JTT_APPID:null,JTT_APPKEY:null,ENGINE:auto,TIMEOUT:120,MMMCK_SCRIPT:慢慢买CK,DISABLE_NOTICE:true,THEME_TIME:7-19

#!arguments-desc=[参数设置]
JD_UNION_ID: 填写京东联盟ID
   ├ 获取方式：登录京东联盟官网 https://union.jd.com/index
   └ 示例：12345678

JD_POSITION_ID: 填写推广位ID
   ├ 获取方式：在京东联盟后台创建推广位
   └ 示例：1234567890

JTT_APPID: 填写京推推AppID
   ├ 获取方式：登录京推推官网 https://www.jingtuitui.com/user/login
   └ 示例：1234567890123456

JTT_APPKEY: 填写京推推AppKey
   ├ 获取方式：同上
   └ 示例：b123456ce90123456lk890126789012

ENGINE: 脚本执行引擎
   ├ auto：自动选择（默认）
   ├ jsc：使用 JavaScriptCore 引擎
   └ webview：使用 WebView 引擎

TIMEOUT: 脚本超时时间（单位秒）
   ├ 默认 120

MMMCK_SCRIPT: 慢慢买 CK 启停脚本
   ├ 慢慢买CK：启用
   └ #: 注释掉即停用

DISABLE_NOTICE: 禁用转链通知（true启用通知，false仅展示图表）

THEME_TIME: 自定义暗黑模式时间范围
   ├ 格式：起始小时-结束小时（如 7-19）
   └ 示例：22-6 表示 22:00~6:00 暗黑模式

[Script]
京东助手 = type=http-response,pattern=^https:\/\/in\.m\.jd\.com\/product\/.+?\.html,requires-body=1,max-size=-1,script-path=https://raw.githubusercontent.com/githubdulong/Script/master/jd_price1.js,argument=jd_union_id={{{JD_UNION_ID}}}&jd_position_id={{{JD_POSITION_ID}}}&jtt_appid={{{JTT_APPID}}}&jtt_appkey={{{JTT_APPKEY}}}&engine={{{ENGINE}}}&timeout={{{TIMEOUT}}}&disable_notice={{{DISABLE_NOTICE}}}&theme_time={{{THEME_TIME}}}

{{{MMMCK_SCRIPT}}} = type=http-request,pattern=^https?:\/\/apapia-sqk-weblogic\.manmanbuy\.com/baoliao/center/menu,requires-body=1,max-size=0,binary-body-mode=0,script-path=https://raw.githubusercontent.com/githubdulong/Script/master/jd_price1.js,timeout=30

[MITM]
hostname = %APPEND% in.m.jd.com, lite-in.m.jd.com, apapia-sqk-weblogic.manmanbuy.com
