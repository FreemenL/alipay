const fs = require('fs');
const path = require('path');

// 这里配置基本信息
// const AlipayBaseConfig = {
//     appId: 2021001167688014, // 应用 ID
//     // appId: 2021001166664595, // 应用 ID
//     privateKey: fs.readFileSync(path.join(__dirname, './sandbox-pem/private_pem2048.txt'), 'ascii'), // 应用私钥
//     alipayPublicKey: fs.readFileSync(path.join(__dirname, './sandbox-pem/public_pem2048.txt'), 'ascii'),// 支付宝公钥
//     // gateway: 'https://openapi.alipay.com/gateway.do', // 支付宝的应用网关
//     gateway: 'https://openapi.alipaydev.com/gateway.do', // 支付宝的应用网关
//     charset:'utf-8',
//     version:'1.0',
//     signType:'RSA2'
// };
// 沙箱环境
const AlipayBaseConfig = {
    appId: 2021001166664595, // 应用 ID https://developers.alipay.com/platform/appManage.htm#/app/2021001166664595/overview
    privateKey: fs.readFileSync(path.join(__dirname, './sandbox-pem/private_pem2048.txt'), 'ascii'), // 应用私钥
    alipayPublicKey: fs.readFileSync(path.join(__dirname, './sandbox-pem/public_pem2048.txt'), 'ascii'),// 支付宝公钥
    gateway: 'https://openapi.alipay.com/gateway.do', // 支付宝的应用网关
    charset:'utf-8',
    version:'1.0',
    signType:'RSA2'
};
// const AlipayBaseConfig = {
//     appId: 2016102700772315, // 应用 ID
//     privateKey: fs.readFileSync(path.join(__dirname, './sandbox-pem/private_pem2048.txt'), 'ascii'), // 应用私钥
//     alipayPublicKey: fs.readFileSync(path.join(__dirname, './sandbox-pem/public_pem2048.txt'), 'ascii'),// 支付宝公钥
//     gateway: 'https://openapi.alipaydev.com/gateway.do', // 支付宝的应用网关
//     charset:'utf-8',
//     version:'1.0',
//     signType:'RSA2'
// };

module.exports = {
    AlipayBaseConfig: AlipayBaseConfig,
}