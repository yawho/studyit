/**
 * Created by asus on 2017/4/11.
 */
define(["jquery","cookie","form"],function($){
    var userInfoStr= $.cookie("userInfo");
    if(userInfoStr){
        var userInfo=JSON.parse(userInfoStr);
        $(".avatar img").attr("src",userInfo.tc_avatar);
    }
    $("form").submit(function(){
        $("form").ajaxSubmit({
            success:function(data){
                if(data.code==200){
                    //将登录成功之后，返回的用户以及用户头像存储到cookie中
                    $.cookie("userInfo",JSON.stringify(data.result),{path:"/"});
                    //跳转页面
                    location.href="/";
                }else{
                    alert(data.msg);
                }
            }

        });
        return false;
    });
})