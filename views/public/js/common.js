
define(["jquery","template","cookie"],function($,template){
   //下面的代码不能在login页面执行，因为login页面中没有侧边栏，不需要加载
   if(!(location.pathname=="/login"||location.pathname=="/dashboard/login"||location.pathname=="/index.php/dashboard/login")) {

    var userInfo = JSON.parse($.cookie("userInfo"));
    var htmlStr = template("userInfoTpl", userInfo);
    $("#profile").html(htmlStr);
}
})