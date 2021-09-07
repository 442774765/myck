/*
此文件为Node.js专用。其他用户请忽略
 */
//此处填写京东账号cookie。
let CookieJDs = [

'deviceid_pdj_jd=H5_DEV_A1E53738-C9FB-494D-BFA7-6AB3F98D41EA;o2o_m_h5_sid=eb5159b3-500b-4b23-9e3c-c7031243d925;', 
'deviceid_pdj_jd=H5_DEV_BC235821-769F-4457-AD15-EC5540BEA16C;o2o_m_h5_sid=2e38a969-066f-4854-9c8a-9c0fdd0cbb23;',
'deviceid_pdj_jd=H5_DEV_0DEB6E6A-1021-4E44-9821-26C944405A9A;o2o_m_h5_sid=fbaca03b-a3ad-4496-972e-629d9be914a4;',
'deviceid_pdj_jd=H5_DEV_7518CED1-E3FE-4EEE-8C87-9A605A089E17;o2o_m_h5_sid=4c0e39ea-15dd-46b2-8cee-6ee03168781d;' 
]
// 判断环境变量里面是否有京东到家ck
if (process.env.JDDJ_COOKIE) {
  if (process.env.JDDJ_COOKIE.indexOf('&') > -1) {
    console.log(`您的cookie选择的是用&隔开\n`)
    CookieJDs = process.env.JDDJ_COOKIE.split('&');
  } else if (process.env.JDDJ_COOKIE.indexOf('\n') > -1) {
    console.log(`您的cookie选择的是用换行隔开\n`)
    CookieJDs = process.env.JDDJ_COOKIE.split('\n');
  } else {
    CookieJDs = [process.env.JDDJ_COOKIE];
  }
}
if (JSON.stringify(process.env).indexOf('GITHUB') > -1) {
  console.log(`请勿使用github action运行此脚本,无论你是从你自己的私库还是其他哪里拉取的源代码，都会导致我被封号\n`);
  !(async () => {
    await require('./sendNotify').sendNotify('提醒', `请勿使用github action、滥用github资源会封我仓库以及账号`)
    await process.exit(0);
  })()
}
CookieJDs = [...new Set(CookieJDs.filter(item => item !== "" && item !== null && item !== undefined))]
console.log(`\n====================共有${CookieJDs.length}个京东账号Cookie=========\n`);
console.log(`==================脚本执行- 北京时间(UTC+8)：${new Date(new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 8 * 60 * 60 * 1000).toLocaleString()}=====================\n`)
for (let i = 0; i < CookieJDs.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['CookieJD' + index] = CookieJDs[i].trim();
}
//exports['CookieJDs'] = CookieJDs;
