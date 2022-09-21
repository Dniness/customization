### 扩展: 

- AMO: https://addons.mozilla.org/zh-CN/firefox/addon/header-editor/
- GitHub: https://github.com/FirefoxBar/HeaderEditor

### 包含:
- [x] 跨域1.0：短headers复杂跨域(多页面)
 - 简单跨域：导入即可使用，可多个标签页同时简单跨域。
 - 复杂跨域：引入"https://0.0.0.0/fetch.js?" ，可实现fetch跨域。
 - 注意：多页面可同时复杂跨域，但headers对象存在长度限制(约128)。
 - 导入URL：https://dniness.github.io/json/HeaderEditor/CORS.json

- [x] 跨域2.0：长headers复杂跨域(单页面)
 - 简单跨域：导入即可使用，可多个标签页同时简单跨域。
 - 复杂跨域：引入"https://0.0.0.0/fetch2.js" ，可实现fetch跨域。
 - 注意：headers对象长度解除限制，但仅支持最后1个标签页处于复杂跨域状态。
 - 导入URL：https://dniness.github.io/json/HeaderEditor/CORS8K.json
