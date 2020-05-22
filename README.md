# 小程序自定义底部导航
1、在common/component/tabbarComponent 自定义导航
2、在app.js中定义需要的导航且设置editTabbar
3、在app.json中定义导航（为了跳转路径有效）
4、在每个导航列表中都必须要要js onLoad中调用：app.editTabbar();
